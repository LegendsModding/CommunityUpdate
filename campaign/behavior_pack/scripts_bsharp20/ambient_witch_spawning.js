/**
 * This file is resonsible for "ambient witches", or a few additional Witches that coincidentally
 * spawn around a village's Witch Hut in Act 2. They are not initially lurable until the player
 * unlocks the Witches.
 */

// When we start a campaign game, listen for when Act 2 starts
SNIPPET_InheritsFromGameMode("lcu_campaign", () => {
    //If the player has disabled witches in their campaign, then stop this chain of events from spawning them
    if (witchHutEnabled.defaultValue === 1) {
        // Listen for when Act 2 starts, and then place ambient witch spawners
        LISTENFOR_GlobalVariableChanged({
            variableName: GV_STARTED_ACT_2,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            snippet: "enable_ambient_witches_on_act_2_start"
        })
    }
})

// When we begin Act 2, add logic to start spawning ambient witches
SNIPPET_GlobalVariableChanged("enable_ambient_witches_on_act_2_start", (_oldValue, newValue, _payload) => {
    // Don't perform this logic if we're setting the new value to zero (for some hypothetical debugging scenario)
    if (newValue === 0) {
        return
    }

    // When a player next enters a village, spawn an ambient witch spawner at the witch hut.
    const villagerVillageEntities = FILTER_ByFactionName(QUERY_GetAllVillages(), CULTURE_NAME_WETLANDS)
    const villagerVillageIds = villagerVillageEntities.map((villageEntity) => {
        return QUERY_GetVillageIDFromEntity(villageEntity)
    })
    villagerVillageIds.forEach((villageId) => {
        LISTENFOR_PlayerEnteredVillage({
            villageId: villageId,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            snippet: "spawn_ambient_witch_spawner_on_entry"
        })
    })

    Once()
})

// When the player enters a village, spawn an ambient witch spawner at the hut
SNIPPET_PlayerEnteredVillage("spawn_ambient_witch_spawner_on_entry", (villageId, _playerCount, _payload) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const villageWitchHuts = FILTER_ByTagFilter(villageEntities, ["buildable", "witchspawner"], ["ambient"])
    if (!HasEntities(villageWitchHuts)) {
        return
    }

    const newAmbientSpawners = OUTPUT_SpawnEntitiesAt(villageWitchHuts, "badger:spawner_witch_ambient", 1)
    OUTPUT_SetTeam(newAmbientSpawners, TEAM_BLUE)
    OUTPUT_SetOwnerVillageById(newAmbientSpawners, villageId)

    // Make the ambient witches unable to be lured/directed if we haven't unlocked them yet
    LISTENFOR_BuildableSpawnerSpawned({
        snippet: "ambient_witch_spawned",
        ownerVillageId: villageId,
        buildableSpawner: newAmbientSpawners
    })

    Once()
})

// When an ambient witch is spawned before the witches are unlocked, prevent it from being lured by removing the `luredirect` tag
SNIPPET_BuildableSpawnerSpawned("ambient_witch_spawned", (_spawner, newlySpawnedWitchEntity, _payload) => {
    // If we've unlocked access to the witches, stop performing this logic
    const witchUnlockResourceCount = QUERY_GetTeamResource(TEAM_BLUE, "witch_access_unlocked")
    if (witchUnlockResourceCount > 0) {
        Once()

        return
    }

    // Remove the luredirect tag from the newly-spawned witch
    OUTPUT_RemoveTag(newlySpawnedWitchEntity, "luredirect")

    const entityVillageId = QUERY_GetVillageIDFromEntity(newlySpawnedWitchEntity)

    LISTENFOR_ResourcesChanged({
        snippet: "allow_previously_spawned_witches_to_be_lured",
        ownerVillageId: entityVillageId,
        resourceName: "witch_access_unlocked",
        teamName: TEAM_BLUE,
        payloadEntities: newlySpawnedWitchEntity
    })
})

// When the player's team unlock's witches, return the `luredirect` tag to them
SNIPPET_ResourcesChanged("allow_previously_spawned_witches_to_be_lured", (resourceName, teamID, previousAmount, currentAmount, payload) => {
    // Alert the developers if this snippet runs on a resource that's not the witch hut unlock
    if (resourceName !== "witch_access_unlocked") {
        throw new Error("Attempted to do witch-unlock bookkeeping on non-witch-related resource: " + resourceName)
    }

    // Alert the developers if this snippet runs on a team that's not the player team
    if (teamID !== TEAM_BLUE) {
        throw new Error("Attempted to do witch-unlock bookkeeping on non-blue team: " + teamID)
    }

    // Exit early if we're removing resources (eg: some sort of slash command logic)
    if (currentAmount < previousAmount) {
        return
    }

    const witchToEnable = payload.entities
    OUTPUT_AddTag(witchToEnable, "luredirect")

    Once()
})
