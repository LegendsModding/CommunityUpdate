/* eslint-disable @typescript-eslint/no-unused-vars */

const mobAllianceOccupationOrder = [{ type: "fixed", mobAllianceId: "skeleton" }, { type: "random" }, { type: "random" }, { type: "random" }, { type: "random" }, { type: "random" }]

const currentMobOccupationOrderIndex = "gv_current_mob_alliance_order_index"

const SelectMobBehaviourSet = (mobEG, mobId) => {
    const playerDestroyedDarkBeaconBase = QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0
    const lureAndDirectTag = "luredirect"

    const mobBehaviourDictionary = MOB_BEHAVIOUR_DICTIONARY[mobId]
    let mobBehaviour = mobBehaviourDictionary.act2
    if (IsCurrentAct(ACTS.ACT_3A)) {
        mobBehaviour = mobBehaviourDictionary.act1
    } else if (IsOccupationBeatOver(mobId)) {
        OUTPUT_AddTag(mobEG, lureAndDirectTag)
        mobBehaviour = mobBehaviourDictionary.act2
    } else if (IsOccupationBeatActive(mobId)) {
        OUTPUT_AddTag(mobEG, lureAndDirectTag)
        mobBehaviour = mobBehaviourDictionary.act1
    } else if (playerDestroyedDarkBeaconBase) {
        OUTPUT_AddTag(mobEG, lureAndDirectTag)
        mobBehaviour = mobBehaviourDictionary.act2
    } else if (!QUERY_HasTags(RandomEntity(mobEG), "nbbAlly")) {
        OUTPUT_RemoveTag(mobEG, lureAndDirectTag)
        mobBehaviour = mobBehaviourDictionary.act1
    }

    OUTPUT_SetBehavior(mobEG, mobBehaviour)
}

const IsMobAlliancePiglinSize = (size) => {
    return size === BASE_SIZE_PIGLIN_ZOMBIE || size === BASE_SIZE_PIGLIN_CREEPER || size === BASE_SIZE_PIGLIN_SKELETON || size === BASE_SIZE_PIGLIN_SILVERFISH || size === BASE_SIZE_PIGLIN_SLIME || size === BASE_SIZE_PIGLIN_SPIDER
}

const IsMobAllianceVillage = (villageId) => {
    return FACTION_MOB_ALLIANCES.includes(QUERY_GetFactionNameFromVillageID(villageId))
}

const IsValidMobAllianceId = (mobId) => {
    return MOB_ALLIANCE_IDS.includes(mobId)
}

const IsPlayerOutpost = (villageId) => {
    return QUERY_GetFactionSizeFromVillageID(villageId) === VILLAGE_SIZE_PLAYER
}

const BuildMobAllianceCages = (mainDeck, mobId, villageId, buildCages = true) => {
    if (IsCurrentAct(ACTS.EPILOGUE)) {
        return
    }

    if (buildCages) {
        const cages = BuildableCard("mobCage", 3)
        DECK_MultiplyByMultipleRules(cages, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeWithoutSpacing"), PlacementPreferenceCard(PLACEMENT_RANDOM), TagCard("piglinBaseCages")])
        DECK_PutOnBottomOf(cages, mainDeck)
    }

    LISTENFOR_BuildingComplete({
        snippet: "bc_cage",
        ownerVillageId: villageId,
        includeTags: ["mob_alliance_mob_cage"],
        villageId: villageId,
        payloadString: mobId
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_caged_mobs",
        ownerVillageId: villageId,
        includeTags: ["caged_mob"],
        villageId: villageId,
        payloadString: mobId
    })

    LISTENFOR_PlayerInteracted({
        snippet: "pi_cage",
        ownerVillageId: villageId,
        includeTags: ["mob_alliance_mob_cage"],
        villageId: villageId,
        payloadString: mobId
    })
}

const SetMobWorldSpawnersState = (state) => {
    if (state) {
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_CREEPER, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SKELETON, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SPIDER, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SLIME, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SILVERFISH, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_ZOMBIE, 1)
    } else {
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_CREEPER, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SKELETON, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SPIDER, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SLIME, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SILVERFISH, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_ZOMBIE, 0)
    }
}

const SetMobWorldHomesteadSpawnersState = (state) => {
    if (state) {
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_CREEPER_HOMESTEAD, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SKELETON_HOMESTEAD, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SPIDER_HOMESTEAD, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SLIME_HOMESTEAD, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SILVERFISH_HOMESTEAD, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_ZOMBIE_HOMESTEAD, 1)
    } else {
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_CREEPER_HOMESTEAD, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SKELETON_HOMESTEAD, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SPIDER_HOMESTEAD, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SLIME_HOMESTEAD, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SILVERFISH_HOMESTEAD, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_ZOMBIE_HOMESTEAD, 0)
    }
}

const SetMobWorldConflictSpawnersState = (state) => {
    if (state) {
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_CREEPER_CONFLICT, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SKELETON_CONFLICT, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SPIDER_CONFLICT, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SLIME_CONFLICT, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SILVERFISH_CONFLICT, 1)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_ZOMBIE_CONFLICT, 1)
    } else {
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_CREEPER_CONFLICT, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SKELETON_CONFLICT, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SPIDER_CONFLICT, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SLIME_CONFLICT, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_SILVERFISH_CONFLICT, 0)
        OUTPUT_SetGlobalVariable(GV_WORLD_SPAWNER_ZOMBIE_CONFLICT, 0)
    }
}

const RefreshBehaviourOfAllUncagedMobs = (mobId) => {
    const mobs = QUERY_GetEntitiesWithTagFilter([mobId], ["caged_mob"])
    if (HasEntities(mobs)) {
        SelectMobBehaviourSet(mobs, mobId)
    }
}

const GetMobAllianceCenterBuilding = (mobId) => {
    return QUERY_GetEntitiesWithTags([GetMACenterBuildingTag(mobId)])
}

const IsOccupationBeatOver = (mobId) => {
    const mobAllianceData = GetMobAllianceData(mobId)
    return QUERY_GetGlobalVariable(mobAllianceData.global.mobAllianceCompleted) > 0
}

const IsOccupationBeatActive = (mobId) => {
    const mobAllianceData = GetMobAllianceData(mobId)
    return QUERY_GetGlobalVariable(mobAllianceData.global.mobAllianceCompleted) === 0 && QUERY_GetGlobalVariable(mobAllianceData.global.soItBegins) > 0
}

const ManageMobAllianceSpawner = (spawner, isCentralBuilding, mobId) => {
    if (!HasEntities(spawner)) {
        return
    }
    const mobAllianceData = GetMobAllianceData(mobId)
    const hasPlayerEngagedFight = QUERY_GetGlobalVariable(mobAllianceData.global.playerHasEngagedFirstFight) > 0
    const hasPiglinOccupationStarted = QUERY_GetGlobalVariable(mobAllianceData.global.mobAlliancePiglinInvasionStarted) > 0
    const mobAllianceOccupationEnded = IsOccupationBeatOver(mobAllianceData.id)
    const isDarkBeaconBaseAlive = IsCurrentAct(ACTS.ACT_1B)
    const isOccupiedFromAttack = QUERY_IsVillageOccupied(QUERY_GetVillageIDFromEntity(RandomEntity(spawner)))

    //setting the default config path to "normal", we change it immediately below to "hard config" if the difficulty is Mythic or Legendary (Normal or Hard)
    let config = mobAllianceData.spawnerData.normalConfig
    let configOccupation = mobAllianceData.spawnerData.duringOccupation

    //Check the difficulty of the game and alter the config path to point to harder values for spawners if its Mythic or Legendary (Normal or Hard)
    const difficulty = QUERY_GameDifficulty()
    if (difficulty === "Normal" || difficulty === "Hard" || difficulty === "Custom") {
        config = mobAllianceData.spawnerData.hardConfig
        configOccupation = mobAllianceData.spawnerData.duringOccupationHard
    }

    const loadout = [mobAllianceData.spawnerData.mobIdentifier]
    let batchSize = config.house.batch
    let spawnRate = config.house.rate
    let spawnCap = config.house.cap

    if (isCentralBuilding) {
        batchSize = config.centralBuilding.batch
        spawnRate = config.centralBuilding.rate
        spawnCap = config.centralBuilding.cap
    }

    if (isDarkBeaconBaseAlive) {
        batchSize = 0
        spawnRate = 0
        spawnCap = 0
    }

    //piglin invasion
    if (hasPiglinOccupationStarted && !hasPlayerEngagedFight && !mobAllianceOccupationEnded) {
        batchSize = 0
        spawnRate = 0
        spawnCap = 0
    }

    //during piglin invasion when the mobs  join the fight
    if (hasPiglinOccupationStarted && hasPlayerEngagedFight && !mobAllianceOccupationEnded) {
        batchSize = configOccupation.house.batch
        spawnRate = configOccupation.house.rate
        spawnCap = configOccupation.house.cap

        if (isCentralBuilding) {
            batchSize = configOccupation.centralBuilding.batch
            spawnRate = configOccupation.centralBuilding.rate
            spawnCap = configOccupation.centralBuilding.cap
        }
    }

    if (isOccupiedFromAttack) {
        batchSize = 0
        spawnRate = 0
        spawnCap = 0
    }

    OUTPUT_SetBarracksSpawnTypes(spawner, loadout)
    OUTPUT_SetBarracksBatchSize(spawner, batchSize)
    OUTPUT_SetBarracksSpawnRate(spawner, spawnRate)
    OUTPUT_SetBarracksSpawnCap(spawner, spawnCap)
}

const RefreshAllSpawnersConfig = (mobId) => {
    const mobAllianceCenter = GetMobAllianceCenterBuilding(mobId)
    ManageMobAllianceSpawner(mobAllianceCenter, true, mobId)

    const mobAllianceHouses = QUERY_GetEntitiesWithTags([GetMAHouseTag(mobId)])
    ManageMobAllianceSpawner(mobAllianceHouses, false, mobId)

    const mobAllianceData = GetMobAllianceData(mobId)
    const hasPiglinOccupationStarted = QUERY_GetGlobalVariable(mobAllianceData.global.mobAlliancePiglinInvasionStarted) > 0
    const mobAllianceOccupationEnded = IsOccupationBeatOver(mobAllianceData.id)

    // Disable homestead donut spawner while in initial occupation
    SetMobWorldHomesteadSpawnersState(!hasPiglinOccupationStarted || mobAllianceOccupationEnded)
}

const IsMobAllianceUnlocked = (mobId) => {
    const mobAllianceData = GetMobAllianceData(mobId)

    const playerSpawner = QUERY_GetTeamResource(TEAM_BLUE, mobAllianceData.unlocks.playerSpawner)
    const spawner = QUERY_GetTeamResource(TEAM_BLUE, mobAllianceData.unlocks.spawner)

    if (playerSpawner !== spawner) {
        Loge(`Mob Alliance unlocks are out of sync!: Player Spawners unlocked - ${playerSpawner}, Spawners unlocked - ${spawner}`)
    }

    return playerSpawner && spawner
}

const AttemptUnlockMobAlliance = (modId) => {
    const mobAllianceData = GetMobAllianceData(modId)

    Logi("@@@@@@@@@@@@@@ Unlock Resources Attempted @@@@@@@@@@@@@@@@@@@@")
    if (!IsMobAllianceUnlocked(mobAllianceData.id)) {
        //Grant mob alliance
        Logi("####################### Unlock Resources Rewarded #############################")
        UnlockMobAlliance(mobAllianceData.id)
    }
}

const UnlockMobAlliance = (modId) => {
    const mobAllianceData = GetMobAllianceData(modId)

    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, mobAllianceData.unlocks.playerSpawner, 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, mobAllianceData.unlocks.spawner, 1, false)

    if (DoOnce(mobAllianceData.global.mobAllegianceGainedOnce)) {
        IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.MOB_ALLIANCE_PROGRESS.globalVariable)

        TelemetrySendMobAllianceLiberated(GetAllPlayers(), modId) //telemetry achievement event for each of the Mob Alliances

        const firstTimeUnlockResourceData = mobAllianceData.unlocks.firstTimeUnlockResource
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, firstTimeUnlockResourceData.resourceName, firstTimeUnlockResourceData.quantity, true)
    } else {
        //ONBOARDING
        //  ONBOARDING_GLOBALS.MOB_ALLIANCE_LOST_RECOVERED is observed by a listener so this if-statement is empty for now
        if (DoOnce(ONBOARDING_GLOBALS.MOB_ALLIANCE_LOST_RECOVERED)) {
            // One-time logic for recovering a mob alliance...
        }
        //Recurring messaging
        DecrementGlobal(MESSAGING_GLOBALS.MOB_ALLIANCE_LOST)
    }

    const villageEntity = GetVillageEntityFromFaction(mobAllianceData.factionName)
    if (!QUERY_HasTags(villageEntity, [TAG_MOB_ALLIANCE_ALLIED])) {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.MOB_ALLEGIANCE, MAP_MOB_ALLEGIANCE.ENABLED)

        //Enable alliance for invasion attacks
        OUTPUT_AddTag(villageEntity, TAG_MOB_ALLIANCE_ALLIED)
    }
}

const LockMobAlliance = (mobId) => {
    const mobAllianceData = GetMobAllianceData(mobId)

    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, mobAllianceData.unlocks.playerSpawner, -1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, mobAllianceData.unlocks.spawner, -1, false)

    const villageEntity = GetVillageEntityFromFaction(mobAllianceData.factionName)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.MOB_ALLEGIANCE, MAP_MOB_ALLEGIANCE.DISABLED)

    //Disable alliance for invasion attacks
    OUTPUT_RemoveTag(villageEntity, TAG_MOB_ALLIANCE_ALLIED)

    //ONBOARDING
    //  ONBOARDING_GLOBALS.START_MOB_ALLIANCE_LOST is also observed by a listener so this if-statement is empty for now
    if (DoOnce(ONBOARDING_GLOBALS.START_MOB_ALLIANCE_LOST)) {
        // One-time logic for onboarding...
    }

    //Recurring messaging
    IncrementGlobal(MESSAGING_GLOBALS.MOB_ALLIANCE_LOST)
}

// const StartNextMobAllianceOccupation = () => {
//     const currentMobOccupationIndex = QUERY_GetGlobalVariable(currentMobOccupationOrderIndex)
//     const nextOccupationOrderData = mobAllianceOccupationOrder[currentMobOccupationIndex]
//     if (nextOccupationOrderData.type === "fixed") {
//         OUTPUT_SetGlobalVariable(GV_START_MOB_ALLIANCE_OCCUPATION[nextOccupationOrderData.mobAllianceId], 1)
//     } else if (nextOccupationOrderData.type === "random") {
//         const unstartedMobAllianceOccupation = []
//         Object.entries(GV_START_MOB_ALLIANCE_OCCUPATION).forEach(([_k, v]) => {
//             if (QUERY_GetGlobalVariable(v) === 0) {
//                 unstartedMobAllianceOccupation.push(v)
//             }
//         })
//         OUTPUT_SetGlobalVariable(ChooseFromArray(unstartedMobAllianceOccupation), 1)
//     }

//     IncrementGlobal(currentMobOccupationOrderIndex)
// }

// =============================
//         Tag Helpers
// =============================

// TODO - dplourde: Conform tags so that we can remove the switch statements.

/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMACenterBuildingTag = (mobId) => {
    switch (mobId) {
        case "creeper":
            return "mob_alliance_creeper_central_flame"
        case "skeleton":
            return "mob_alliance_skeleton_central_flame"
        case "spider":
            return "mob_alliance_spider_central_flame"
        case "slime":
            return "mob_alliance_slime_central_flame"
        case "silverfish":
            return "mob_alliance_silverfish_central_flame"
        case "zombie":
            return "mob_alliance_zombie"
        default:
            Loge(`No tag specified for ${mobId}`)
    }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAHouseTag = (mobId) => {
    switch (mobId) {
        case "creeper":
            return "smaller_creeper_mob_alliance_spawner"
        case "skeleton":
            return "smaller_skeleton_mob_alliance_spawner"
        case "spider":
            return "smaller_spider_mob_alliance_spawner"
        case "silverfish":
            return "smaller_silverfish_mob_alliance_spawner"
        case "slime":
            return "smaller_slime_mob_alliance_spawner"
        case "zombie":
            return "mob_alliance_zombie_house"
        default:
            Loge(`No tag specified for ${mobId}`)
    }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAPiglinAttackingEnemyTag = (mobId) => {
    return `${mobId}_mob_alliance_piglin_is_attacking_the_enemy`
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAPiglinsTag = (mobId) => {
    return `${mobId}_mob_alliance_piglins`
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAPiglinsTargetTag = (mobId) => {
    switch (mobId) {
        case "creeper":
            return "creeper_mob_alliance_piglin_target"
        case "skeleton":
            return "skeleton_mob_alliance_piglin_target"
        case "spider":
            return "spider_mob_alliance_piglin_target"
        case "slime":
            return "slime_mob_alliance_piglin_target"
        case "silverfish":
            return "silverfish_mob_alliance_piglin_target"
        case "zombie":
            return "zombie_mob_alliance_piglin_target"
        default:
            Loge(`No tag specified for ${mobId}`)
    }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAPiglinsAttackingBuildingsTag = (mobId) => {
    return `piglins_attacking_${mobId}_mob_alliance`
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAPlayerInAreaTag = (mobId) => {
    return `player_close_to_${mobId}_mob_alliance`
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAPlayerEntitiesInAreaTag = (mobId) => {
    return `${mobId}_mob_alliance_player_entities_to_attack`
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAMobsTag = (mobId) => {
    return `mob_alliance_${mobId}_mob`
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAHurtboxTag = (mobId) => {
    return `${mobId}_house_hurtbox`
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAGatherPointsTag = (mobId) => {
    return `metadata_${mobId}_gathering_marker`
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMAPiglinPortalTag = (mobId) => {
    return `mob_alliance_${mobId}_piglin_portal`
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const GetMACageTag = (mobId) => {
    return `mob_alliance_mob_cage_${mobId}`
}

// ================================
//         Global Var Helpers
// ================================

const GetMAVillageBuiltVar = (mobId) => {
    return `gv_mob_alliance_village_built_${mobId}`
}

const GetMABaseBuiltVar = (mobId) => {
    return `gv_mob_alliance_base_built_${mobId}`
}
