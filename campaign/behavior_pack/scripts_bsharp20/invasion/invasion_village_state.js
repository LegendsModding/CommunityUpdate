SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_EntityEnabled({
            snippet: "ee_enable_village_invasion",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_EntityDisabled({
            snippet: "ee_disable_village_invasion",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_EntityEnabled({
            snippet: "ee_enable_mob_allegaince_invasion",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_EntityDisabled({
            snippet: "ed_disable_mob_allegaince_invasion",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })
        
        for (const factionName of CULTURE_NAME_VILLAGERS) {
            LISTENFOR_VillageDestroyed({
                snippet: "vd_destroyed_player_outposts",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: factionName,
                villageSize: VILLAGE_SIZE_PLAYER
            })
        }
        for (const factionName of CULTURE_NAME_VILLAGERS) {
            LISTENFOR_VillageGenerated({
                snippet: "vg_setup_village_damaged_state_listeners",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: factionName
            })
        }
        
        

        for (const factionName of FACTION_MOB_ALLIANCES) {
            OUTPUT_DebugLogInvasion(`Setting up vg_setup_village_damaged_state_listeners for ${factionName}`)
            LISTENFOR_VillageGenerated({
                snippet: "vg_setup_village_damaged_state_listeners",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: factionName
            })
        }

        // DEBUG
        LISTENFOR_ExternalEvent({
            snippet: "ee_heal_nearby_fountain",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "healNearbyFountain"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_damage_nearby_fountain",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "damageNearbyFountain"
        })
    }
})

SNIPPET_ExternalEvent("ee_heal_nearby_fountain", (_variant, _payload) => {
    //1. Gather all fountains
    const allFountains = OPER_Union(QUERY_GetEntitiesWithTags([TAG_VILLAGE_FOUNTAIN]), QUERY_GetEntitiesWithTags([TAG_OUTPOST_STRUCTURE]))

    //2. Find the closest fountain
    const playerEntity = QUERY_GetAllPlayers()
    const closestFountain = FILTER_ByDistance(allFountains, playerEntity, 50)

    //3. Set health to 100%
    OUTPUT_SetHealthPercent(closestFountain, 100)
})

SNIPPET_ExternalEvent("ee_damage_nearby_fountain", (_variant, _payload) => {
    //1. Gather all fountains
    const allFountains = OPER_Union(QUERY_GetEntitiesWithTags([TAG_VILLAGE_FOUNTAIN]), QUERY_GetEntitiesWithTags([TAG_OUTPOST_STRUCTURE]))

    //2. Find the closest fountain
    const playerEntity = QUERY_GetAllPlayers()
    const closestFountain = FILTER_ByDistance(allFountains, playerEntity, 50)

    //3. Set health to 1%
    OUTPUT_DamageEntitiesByPercentage(closestFountain, 99)
})

SNIPPET_EntityEnabled("ee_enable_village_invasion", (fountainEntity) => {
    if (!QUERY_HasTags(fountainEntity, [TAG_VILLAGE_FOUNTAIN])) {
        return
    }

    OUTPUT_DebugLogInvasion("Fountain is enabled")
    const villageId = QUERY_GetVillageIDFromEntity(fountainEntity)
    const villageEntity = GetVillageEntityFromID(villageId)

    //Set villagers to move to fountain

    const fountain = GetEntitiesWithTagsAndVillage([TAG_VILLAGE_FOUNTAIN], villageId)
    if (HasEntities(fountain)) {
        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const villagers = FILTER_ByTagFilter(villageEntities, ["villager"], [])
        const illagers = FILTER_ByTagFilter(villageEntities, ["illager"], [])
        const villagersAndIllagers = OPER_Union(villagers, illagers)

        OUTPUT_DebugLogInvasion("number of villagers =" + QUERY_GetEntitiesCount(villagers))
        OUTPUT_DebugLogInvasion("number of illagers =" + QUERY_GetEntitiesCount(illagers))

        OUTPUT_MovePosition(villagersAndIllagers, fountain, 10, CALLBACK_NONE)
    }

    // Enable targeting
    OUTPUT_RemoveTag(fountainEntity, TAG_DO_NOT_ATTACK)

    // Ignored funcionality for occupied villages.
    if (!QUERY_IsVillageOccupied(villageId)) {
        // Enable fast travel
        // Village occupation scripts will change this when occupation is cleared.
        if (!IsCurrentAct(ACTS.ACT_1A)) {
            OUTPUT_SetFastTravelEnabled(villageId, true)
            OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.ENABLED)
            //Set villager behviour Cheer 12 seconds then Neutral
            SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 12)
        } else {
            //If this is act 1, then we need to make sure fast travel only becomes active after the player has cleared the villages
            if ((QUERY_HasTags(villageEntity, "firstVillageUnderAttack") && _CheckIfStepIsComplete(act1FlowVal.firstVillageUnderAttack)) ||
                  (QUERY_HasTags(villageEntity, "secondVillageUnderAttack") && _CheckIfStepIsComplete(act1FlowVal.freeSecondVillage))){
                OUTPUT_SetFastTravelEnabled(villageId, true)
                OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.ENABLED)
                //Set villager behviour Cheer 12 seconds then Neutral
                SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 12)
            }
        }
    }

    // Set corresponding WM value
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DAMAGED)
    } else {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DAMAGED_ACT1)
    }

    // Enable village to be a target for attacks
    OUTPUT_RemoveTag(villageEntity, TAG_INACTIVE_VILLAGE)

    //Recurring messaging
    DecrementGlobal(MESSAGING_GLOBALS.VILLAGE_LOST)
})

SNIPPET_EntityDisabled("ee_disable_village_invasion", (fountainEntity) => {
    if (!QUERY_HasTags(fountainEntity, [TAG_VILLAGE_FOUNTAIN])) {
        return
    }

    OUTPUT_DebugLogInvasion("Fountain is disabled")
    const villageId = QUERY_GetVillageIDFromEntity(fountainEntity)
    const villageEntity = GetVillageEntityFromID(villageId)

    // Ignored funcionality for occupied villages.
    if (!QUERY_IsVillageOccupied(villageId)) {
        //Set villager behviour Cheer 12 seconds then Neutral
        SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.HEAVY_SCARED, 12)
    }

    // Disable targeting
    OUTPUT_AddTag(fountainEntity, TAG_DO_NOT_ATTACK)

    // Disable fast travel
    OUTPUT_SetFastTravelEnabled(villageId, false)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.DISABLED)

    Logi("@@@@@ ee_disable_village_invasion @@@@@")
    // Set corresponding WM value
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DISABLED)
    } else {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DISABLED_ACT1)
    }

    // Disable village as a target for attacks
    OUTPUT_AddTag(villageEntity, TAG_INACTIVE_VILLAGE)

    //Recurring messaging
    IncrementGlobal(MESSAGING_GLOBALS.VILLAGE_LOST)
})

SNIPPET_EntityEnabled("ee_enable_mob_allegaince_invasion", (totemEntity) => {
    if (!QUERY_HasTags(totemEntity, [TAG_MOB_ALLEGIANCE_STRUCTURE])) {
        return
    }

    const villageId = QUERY_GetVillageIDFromEntity(totemEntity)
    const villageEntity = GetVillageEntityFromID(villageId)

    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DAMAGED)

    // Enable village to be a target for attacks
    OUTPUT_RemoveTag(villageEntity, TAG_INACTIVE_VILLAGE)
})

SNIPPET_EntityDisabled("ed_disable_mob_allegaince_invasion", (totemEntity) => {
    if (!QUERY_HasTags(totemEntity, [TAG_MOB_ALLEGIANCE_STRUCTURE])) {
        return
    }

    const villageId = QUERY_GetVillageIDFromEntity(totemEntity)
    const villageEntity = GetVillageEntityFromID(villageId)

    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DISABLED)

    // Disable this village as a target for attacks.
    OUTPUT_AddTag(villageEntity, TAG_INACTIVE_VILLAGE)
})

SNIPPET_VillageDestroyed("vd_destroyed_player_outposts", (villageId, _payload) => {
    const villageEntity = GetVillageEntityFromID(villageId)

    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DESTROYED)
})

SNIPPET_VillageGenerated("vg_setup_village_damaged_state_listeners", (villageId) => {
    LISTENFOR_HealthChanged({
        snippet: "hc_apply_damaged_state",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["buildable_structure"],
        excludeTags: [],
        normalizedThreshold: 0.999,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "npc_apply_damaged_state",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["buildable_structure"],
        excludeTags: [],
        despawned: false
    })

    LISTENFOR_PlayerEnteredVillage({
        snippet: "pev_try_clear_damaged_state",
        ownerVillageId: villageId,
        villageId: villageId
    })

    LISTENFOR_InvasionAttackV2Ended({
        snippet: "invasion_attackV2_ended_try_clear_damaged_state",
        ownerVillageId: villageId
    })
})

SNIPPET_InvasionAttackV2Ended("invasion_attackV2_ended_try_clear_damaged_state", (attackV2Data) => {
    const villageId = attackV2Data.villageId
    _TryClearDamagedVillageState(villageId)
})

SNIPPET_NonPopCappedEntityDestroyed("npc_apply_damaged_state", (_destroyedEntity, payload) => {
    const villageId = payload.ownerVillageId
    _TrySetVillageDamagedState(villageId)
})

SNIPPET_PlayerEnteredVillage("pev_try_clear_damaged_state", (villageId, _playerCount, _payload) => {
    _TryClearDamagedVillageState(villageId)
})

SNIPPET_HealthChanged("hc_apply_damaged_state", (_entity, currentHealth, previousHealth, payload) => {
    const villageId = payload.ownerVillageId

    if (currentHealth > previousHealth) {
        _TryClearDamagedVillageState(villageId)
    } else {
        _TrySetVillageDamagedState(villageId)
    }
})

const _TrySetVillageDamagedState = (villageId) => {
    // If the village is already disabled, then don't overwrite the disabled state.
    const centralStructures = GetVillageCentralStructures(villageId)
    if (!HasEntities(centralStructures) || QUERY_IsEntityDisabled(centralStructures)) {
        return
    }

    // If players are present, then only apply the damaged state if the fountain or player structures are damaged.
    if (QUERY_VillagePlayerPresenceCount(villageId) > 0) {
        const playerStructures = FILTER_ByHasCreator(FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_BUILDABLE], []))
        const villageHouses = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_HOUSE], [])
        const mobAllianceHouses = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["mob_alliance_structure"], [])
        const villageBuildings = OPER_Union(OPER_Union(OPER_Union(centralStructures, playerStructures), villageHouses), mobAllianceHouses)
        if (!HasEntities(FILTER_ByHealthPercentage(villageBuildings, 100, false))) {
            return
        }
    }

    const villageEntity = GetVillageEntityFromID(villageId)
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DAMAGED)
    } else {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DAMAGED_ACT1)
    }
}

const _TryClearDamagedVillageState = (villageId) => {
    // If the village is already disabled, then don't overwrite the disabled state.
    const centralStructures = GetVillageCentralStructures(villageId)
    if (!HasEntities(centralStructures) || QUERY_IsEntityDisabled(centralStructures)) {
        return
    }

    // Try to clear the damage state if the fountain is at full health
    if (HasEntities(FILTER_ByHealthPercentage(centralStructures, 100, false))) {
        return
    }

    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.UNHURT)
}