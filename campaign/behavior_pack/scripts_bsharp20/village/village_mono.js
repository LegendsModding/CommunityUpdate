const villageGenericData = {
    cinematic: {
        fountainDisabled: "vil01_c09_fountain_disable",
        fountainDisabledWitches: "vil01_c09w_fountain_disable"
    },
    VO: {
        villageCurrentlyUnderAttack: "invasion_village_under_attack_1",
        villageCurrentlyTargeted: "invasion_village_targeted_2",
        villagePostIntro: "village_post_intro", // first visit, emeralds
        villagePostVindicatorsVO: "main_village_new_allies", // post-vindicators, new allies,
        villageVindicatorsLureVO: "main_warriors_in_village",
        villageOccupied: "village_occupation",
        villageOccupationFreed: "village_post_defended",
        wellhouseCurrentlyTargeted: "wellhouse_targeted_player_enter",
        villageReminderBuildDefensesCasual: "villageattack_builddefenses_casual",
        villageReminderBuildDefensesDuringDay: "villageattack_builddefenses_during_day"
    },
    consts: {
        invasionVOProximityDistance: 200,
        vinidcatorsLureVOCooldown: 30,
        buildDefensesDuringDayReminderDelay: 30,
        buildDefensesCasualReminderDelay: 30,
        act2VindicatorCountInVillage: 15, //default # of vindicators to auto-spawn ina  village, can be overridden by a custom game setting snippet at the bottom of this script
        act3VindicatorCountInVillage: 18 //Not sure why, but we give you 3 extra vindicators per village in Act 3
    },
    globals: {
        villageCurrentlyUnderAttackPlayed: "villageCurrentlyUnderAttackPlayed",
        villageCurrentlyTargetedPlayed: "villageCurrentlyTargetedPlayed",
        villageOccupiedPlayed: "villageIsOccupiedPlayed",
        villagePostOccupationPlayed: "villagePostOccupationPlayed",
        wellhouseCurrentlyTargetedPlayed: "wellhouseCurrentlyTargetedPlayed",
        villageBuildDefensesCasualReminderPlayed: "villageBuildDefensesCasualReminderPlayed",
        villageBuildDefensesDuringDayPlayed: "villageBuildDefensesDuringDay"
    },
    presentation: {
        startMusic: "on_village_enter_music_start",
        stopMusic: "on_village_enter_music_stop"
    },
    // each index should correspond to CULTURE_THRESHOLDS. note the first index is if the first threshold is not reached.
    musicThresholds: ["default", "level1", "level2", "level3", "level3", "level3"],
    reward: {
        item: "emerald"
    },
    postInvasionBehaviorTime: 12,
    behaviorVolumeTag: "bahaviour_trigger_volume"
}

//Mono Village generation -- Please refer to the helper files for the full village generation details.
//=====================================================================================================================================================================

const _MonoVillageDeck = (villageId) => {
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, VillageDeckO())
}

//=====================================================================================================================================================================

const _InvasionResultBehavior = (villageId) => {
    const invasionResult = GetVillageVariable(villageId, INVASION_ATTACK_RESULT_VILLAGE_VARIABLE)
    Logi("invasionResult invasionResult = " + invasionResult)
    if (invasionResult === INVASION_ATTACK_RESULT.OBDESTROYED) {
        SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.HEAVY_CHEER, villageGenericData.postInvasionBehaviorTime)
    } else if (invasionResult === INVASION_ATTACK_RESULT.UNDAMAGED) {
        SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, villageGenericData.postInvasionBehaviorTime)
    } else if (invasionResult === INVASION_ATTACK_RESULT.DAMAGED) {
        SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.SCARED, villageGenericData.postInvasionBehaviorTime)
    } else if (invasionResult === INVASION_ATTACK_RESULT.DESTROYED) {
        SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.HEAVY_SCARED, villageGenericData.postInvasionBehaviorTime)
    }

    SetVillageVariable(villageId, INVASION_ATTACK_RESULT_VILLAGE_VARIABLE, -1)
    SetVillageBehavior(villageId)
}

const _playAnyOnEnterVO = (centerEntity) => {
    if (IsCurrentAct(ACTS.ACT_3A)) return
    const hasUnlockedVindicators = QUERY_GetGlobalVariable("gv_vindicator_spawner_unlocked") > 0 // needs to be elevated to a global const
    const hasTriggeredIntroVO = QUERY_GetGlobalVariable("gv_village_intro_vo_played") > 0
    const hasTriggeredVindicatorVO = QUERY_GetGlobalVariable("gv_village_vindicator_vo_played") > 0
    const hasLuredVindicators = QUERY_GetGlobalVariable("gv_vindicator_lured") > 0
    const lureVindicatorsVOonCooldown = QUERY_GetGlobalVariable("gv_vindicator_lure_on_cooldown") > 0
    //Check to see if any other villages are under attack, targeted for attack, or occupied. If so, we'll need to play the VO "Another village needs your help"
    let anyOtherVillageCurrentlyUnderAttack = false
    const currentVillage = GetVillageEntityFromID(QUERY_GetVillageIDFromEntity(centerEntity))
    if (HasEntities(currentVillage)) {
        let allVillagesBesideCurrentVillage = OPER_Difference(FILTER_ByFactionName(QUERY_GetAllVillages(), CULTURE_NAME_VILLAGERS), currentVillage)
        if (HasEntities(allVillagesBesideCurrentVillage)) {
            while (HasEntities(allVillagesBesideCurrentVillage)) {
                const oneVillage = FILTER_RandomCount(allVillagesBesideCurrentVillage, 1)
                const targetVillageId = QUERY_GetVillageIDFromEntity(oneVillage)
                if (GetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackActive) > 0) {
                    anyOtherVillageCurrentlyUnderAttack = true
                    break
                }
                allVillagesBesideCurrentVillage = OPER_Difference(allVillagesBesideCurrentVillage, oneVillage)
            }
        }
    }

    const anyOtherVillageAtRisk = HasEntities(GetReservedFriendlyVillages()) || HasEntities(GetOccupiedFriendlyVillages()) || anyOtherVillageCurrentlyUnderAttack
    // VO selection
    if (!hasTriggeredIntroVO && hasUnlockedVindicators && !hasTriggeredVindicatorVO) {
        IncrementGlobal("gv_village_intro_vo_played")
        IncrementGlobal("gv_village_vindicator_vo_played")
        PlayPresentationActionToClosePlayers(villageGenericData.VO.villagePostVindicatorsVO, centerEntity)
        Logi("~~~~~ Vindicators have spawned 1 ~~~~~")
    } else if (!hasTriggeredIntroVO && IsCurrentAct(ACTS.ACT_1A) && anyOtherVillageAtRisk) {
        IncrementGlobal("gv_village_intro_vo_played")
        PlayPresentationActionToClosePlayers(villageGenericData.VO.villagePostIntro, centerEntity)
    } else if (hasUnlockedVindicators && !hasTriggeredVindicatorVO) {
        IncrementGlobal("gv_village_vindicator_vo_played")
        PlayPresentationActionToClosePlayers(villageGenericData.VO.villagePostVindicatorsVO, centerEntity)
        Logi("~~~~~ Vindicators have spawned 2 ~~~~~")
    } else if (hasUnlockedVindicators && hasTriggeredVindicatorVO && !hasLuredVindicators && !lureVindicatorsVOonCooldown) {
        Logi("~~~~~ Vindicators can be lured VO ~~~~~")
        PlayPresentationActionToClosePlayers(villageGenericData.VO.villageVindicatorsLureVO, centerEntity)
        IncrementGlobal("gv_vindicator_lure_on_cooldown")

        LISTENFOR_LocalTimer({
            snippet: "lt_vindicators_lure_vo_cooldown",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: villageGenericData.consts.vinidcatorsLureVOCooldown
        })
    }

    // TODO: Could have some special handling to return true/false when all VO has played
}

SNIPPET_LocalTimer("lt_vindicators_lure_vo_cooldown", () => {
    OUTPUT_SetGlobalVariable("gv_vindicator_lure_on_cooldown", 0)
})

const _setupVillageBehaviorMode = () => {
    LISTENFOR_VillageGenerated({
        snippet: "vg_setup_village",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_VILLAGERS
    })

    LISTENFOR_ExternalEvent({
        snippet: "ev_reveal_all_map_icons",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "reveal_all_map_icons"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ev_enable_fast_travel_on_all_villages",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "enable_fast_travel_on_all_villages"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ev_set_village_variable_to_cheer",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "village_cheer"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ev_set_village_variable_to_scared",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "village_scared"
    })
}

// This previously used the villageBehaviourMode game rule
SNIPPET_InheritsFromGameMode("campaign", () => {
    _setupVillageBehaviorMode()
})

SNIPPET_InheritsFromGameMode("editor", () => {
    _setupVillageBehaviorMode()
})

SNIPPET_VillageGenerated("vg_setup_village", (villageId) => {
    //Build the village's deck

    //We no longer need to do a check here, because it is only one size now
    Logi("Mono village generated (vg_setup_village)")

    if (QUERY_GetFactionSizeFromVillageID(villageId) !== "player_outpost") {
        _MonoVillageDeck(villageId)
    }

    LISTENFOR_BuildingComplete({
        snippet: "bc_village_fountain_cs",
        ownerVillageId: villageId,
        includeTags: [TAG_VILLAGE_FOUNTAIN],
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_village_outpost_cs",
        ownerVillageId: villageId,
        includeTags: [TAG_OUTPOST_STRUCTURE],
        villageId: villageId
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_set_villager_behaviour",
        ownerVillageId: villageId,
        includeTags: ["villager"],
        villageId: villageId
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_set_illager_behaviour",
        ownerVillageId: villageId,
        includeTags: ["illager"],
        villageId: villageId
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_villager_and_illager_behavior_refresher",
        ownerVillageId: villageId,
        waitTime: 5
    })
    //Villager/Illager behaviour when culture score goes up
    for (const threshold of CULTURE_THRESHOLDS) {
        LISTENFOR_CultureValueChangedUp({
            snippet: "cv_behaviour_cheer",
            thresholdA: threshold,
            ownerVillageId: villageId,
            villageId: villageId
        })
    }

    SetVillageVariable(villageId, INVASION_ATTACK_RESULT_VILLAGE_VARIABLE, -1)
    const invasionResultVillageVariableKey = GetVillageVariableKey(villageId, INVASION_ATTACK_RESULT_VILLAGE_VARIABLE)
    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_invasion_result_village_variable",
        ownerVillageId: villageId,
        variableName: invasionResultVillageVariableKey,
        payloadInt: villageId
    })

    LISTENFOR_EntityEnabled({
        snippet: "ee_enable_house",
        ownerVillageId: villageId
    })

    LISTENFOR_EntityDisabled({
        snippet: "ee_disable_house",
        ownerVillageId: villageId
    })

    //FOR ONBOARDING
    const villageEntity = GetVillageEntityFromID(villageId)
    const onboardingTV = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_village_nearby", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_village_onboarding",
        triggerEntity: onboardingTV,
        ownerVillageId: villageId
    })

    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.UNHURT)
})

SNIPPET_CultureValueChangedDown("cvcd_music_set_0", (_scoreA, _scoreB, _scoreC, payload) => {
    const fountain = GetVillageFountain(payload.ownerVillageId)
    OUTPUT_SetEmitterState(fountain, "default")
})

//Villager/Illager behaviour when culture score goes up
SNIPPET_CultureValueChangedUp("cv_behaviour_cheer", (_scoreA, _scoreB, _scoreC, payload) => {
    SetVillageTemporaryBehavior(payload.ownerVillageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 12)
    Logi("village cheer 01")
})

SNIPPET_BuildingComplete("bc_discover_fountain", (fountain) => {
    const villageId = QUERY_GetVillageIDFromEntity(fountain)
    const respawnPointEntity = GetEntitiesWithTagsAndVillage(["respawn_point"], villageId)
    OUTPUT_FlagEntityAsVisited(respawnPointEntity)
    Once()
})

// ==== VILLAGE FOUNTAIN BUILT ============================================================================
SNIPPET_BuildingComplete("bc_village_fountain_cs", (fountain) => {
    //get village ID for later
    const villageId = QUERY_GetVillageIDFromEntity(fountain)

    LISTENFOR_EntityDisabled({
        snippet: "ee_fountain_disabled",
        ownerVillageId: villageId,
        disabledEntity: fountain,
        villageId: villageId
    })

    LISTENFOR_CinematicFinished({
        snippet: "cf_village_fountain_destroyed",
        ownerVillageId: villageId,
        cinematicName: villageGenericData.cinematic.fountainDisabled,
        payloadInt: villageId
    })
    LISTENFOR_CinematicFinished({
        snippet: "cf_village_fountain_destroyed",
        ownerVillageId: villageId,
        cinematicName: villageGenericData.cinematic.fountainDisabledWitches,
        payloadInt: villageId
    })

    //spawn entry volume
    const villageBoundaryVolume = SpawnTriggerVolume(fountain, fountain, "badger:spatial_trigger_village_generic", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_village_first_enter",
        triggerEntity: villageBoundaryVolume,
        payloadEntities: fountain,
        ownerVillageId: villageId
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_village_cine_and_vo",
        triggerEntity: villageBoundaryVolume,
        payloadEntities: fountain,
        ownerVillageId: villageId
    })

    //spawn village behavior trigger volume
    const villageBehaviorVolume = SpawnTriggerVolume(fountain, fountain, "badger:spatial_trigger_village_generic", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_village_behavior",
        triggerEntity: villageBehaviorVolume,
        ownerVillageId: villageId
    })
    OUTPUT_AddTag(villageBehaviorVolume, villageGenericData.behaviorVolumeTag)

    SetupVillageBehavior(fountain, villageId)

    //spawn spawners
    const gamemode = QUERY_GetGameMode()
    if (gamemode === GAMEMODE_CAMPAIGN || gamemode === GAMEMODE_CAMPAIGN_CUSTOM) {
        // TODO: once poi_mounts has a mono version that lists all possible mounts/spawners we can iterate through that
        const mountSpawnPosition = QUERY_GetChildEntitiesWithInstanceName(fountain, "metadata_mount_spawn_position")
        SpawnEntitiesAt(mountSpawnPosition, "badger:spawner_mount_01", 1, TEAM_BLUE, villageId)
        SpawnEntitiesAt(mountSpawnPosition, "badger:spawner_mount_03", 1, TEAM_BLUE, villageId)
        SpawnEntitiesAt(mountSpawnPosition, "badger:spawner_mount_04", 1, TEAM_BLUE, villageId)
        SpawnEntitiesAt(mountSpawnPosition, "badger:spawner_mount_05", 1, TEAM_BLUE, villageId)
        SpawnEntitiesAt(mountSpawnPosition, "badger:spawner_mount_06", 1, TEAM_BLUE, villageId)
        SpawnEntitiesAt(mountSpawnPosition, "badger:spawner_mount_07", 1, TEAM_BLUE, villageId)
        // TODO: this should probably live in a campaign and pvp variant script. this file explicitly knows about another game mode otherwise.
        const vindicatorSpawnPosition = QUERY_GetChildEntitiesWithInstanceName(fountain, "metadata_vindicator_spawn_position")
        SpawnEntitiesAt(vindicatorSpawnPosition, "badger:spawner_vindicator_invisible", 1, TEAM_BLUE, villageId)
    }

    //culture state
    for (let level = 0; level < CULTURE_THRESHOLDS.length; level++) {
        LISTENFOR_CultureValueChangedUp({
            snippet: "cvcu_set",
            ownerVillageId: villageId,
            villageId: villageId,
            thresholdA: CULTURE_THRESHOLDS[level],
            payloadEntities: fountain,
            payloadInt: level + 1
        })
        LISTENFOR_CultureValueChangedDown({
            snippet: "cvcd_set",
            ownerVillageId: villageId,
            villageId: villageId,
            thresholdA: CULTURE_THRESHOLDS[level],
            payloadEntities: fountain,
            payloadInt: level
        })
    }

    //manual placement of onboarding generic marker
    OUTPUT_SpawnBuildableAtWithOffset("badger:onboarding_generic_marker", fountain, TEAM_BLUE, EAST, true, true, -25, 0, -10, CALLBACK_NONE)
})

const _onVillageCultureLevelUpdate = (villageId, fountain, level) => {
    Logv(`Changing villager village map level to ${level} - state: ${villageGenericData.musicThresholds[level]}`)

    const village = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(village, MAP_KEY.VILLAGE_CULTURE_LEVEL, level.toString())
}

SNIPPET_CultureValueChangedUp("cvcu_set", (_scoreA, _scoreB, _scoreC, payload) => {
    const villageId = payload.ownerVillageId
    const fountain = payload.entities
    const level = payload.int
    _onVillageCultureLevelUpdate(villageId, fountain, level)
})

SNIPPET_CultureValueChangedDown("cvcd_set", (_scoreA, _scoreB, _scoreC, payload) => {
    const villageId = payload.ownerVillageId
    const fountain = payload.entities
    const level = payload.int
    _onVillageCultureLevelUpdate(villageId, fountain, level)
})

SNIPPET_EntityDisabled("ee_fountain_disabled", (fountainEntity) => {
    if (!QUERY_HasTags(fountainEntity, [TAG_VILLAGE_FOUNTAIN])) {
        return
    }
    //Don't bother with the cinematics if there are no players around
    const villageid = QUERY_GetVillageIDFromEntity(fountainEntity)
    if (QUERY_VillagePlayerPresenceCount(villageid) >= 1) {
        const areWitchesEnabled = witchHutEnabled.defaultValue === 1 && !IsCurrentAct(ACTS.ACT_1A)

        if (areWitchesEnabled) {
            OUTPUT_TriggerCinematic(villageGenericData.cinematic.fountainDisabledWitches, [fountainEntity])
        } else {
            OUTPUT_TriggerCinematic(villageGenericData.cinematic.fountainDisabled, [fountainEntity])
        }
    }

    // do stuff whenever a normal village is disabled
})

SNIPPET_CinematicFinished("cf_village_fountain_destroyed", (payload) => {
    if (!IsCurrentAct(ACTS.ACT_1A)) {
        AnnounceVillageDestroyed(payload.int)
    }
})

// ==== VILLAGE OUTPOST BUILT ============================================================================
SNIPPET_BuildingComplete("bc_village_outpost_cs", (outpost) => {
    //get village ID for later
    const villageId = QUERY_GetVillageIDFromEntity(outpost)

    OUTPUT_SetFastTravelEnabled(villageId, true) //Is this for all villages?

    //spawn entry volume
    const villageBoundaryVolume = SpawnTriggerVolume(outpost, outpost, "badger:spatial_trigger_village_generic", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_village_first_enter",
        triggerEntity: villageBoundaryVolume,
        payloadEntities: outpost,
        ownerVillageId: villageId
    })

    LISTENFOR_PlayerEnteredVillage({
        snippet: "pev_invasion_player_outpost_interaction",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId
    })
})

SNIPPET_PlayerEnteredVillage("pev_invasion_player_outpost_interaction", (villageId, _playerCount, _payload) => {
    if (IsTargetOfDelayedInvasionAttack(villageId)) {
        Logi("#### pev_invasion_player_outpost_interaction ####")
        OUTPUT_SetInteractionState(GetPlayerOutpostStructure(villageId), false)
        if (DoOnce(villageGenericData.globals.wellhouseCurrentlyTargetedPlayed)) {
            PlayPresentationActionToAll(villageGenericData.VO.wellhouseCurrentlyTargeted)
        }
    } else if (IsVillageUnderInvasionAttack(villageId)) {
        OUTPUT_SetInteractionState(GetPlayerOutpostStructure(villageId), false)
    } else {
        OUTPUT_SetInteractionState(GetPlayerOutpostStructure(villageId), true)
    }
})

SNIPPET_EntityEnabled("ee_enable_house", (house) => {
    // Enable targeting
    OUTPUT_RemoveTag(house, TAG_DO_NOT_ATTACK)
    OUTPUT_RemoveTag(house, TAG_DISABLED)
})

SNIPPET_EntityDisabled("ee_disable_house", (house) => {
    // Disable targeting
    OUTPUT_AddTag(house, TAG_DO_NOT_ATTACK)
    OUTPUT_AddTag(house, TAG_DISABLED)
})

// ==== INTRO CINEMATIC ====================================================================================
SNIPPET_SpatialPartitionEntered("spe_village_first_enter", (triggerEntity, intruderEntity, payload) => {
    // Script per-village

    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const villageEntity = GetVillageEntityFromID(villageId)
    const isOutpost = QUERY_HasTags(payload.entities, ["outpost"])

    // mark village as visited
    // Adding a visited tag can be used in scripts to filter specific visited entities
    OUTPUT_AddTag(villageEntity, TAG_VISITED_VILLAGE)

    //Make village visible in the map, in case players visits the village before act2
    if (IsCurrentAct(ACTS.ACT_1A) || IsCurrentAct(ACTS.ACT_1B)) {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    }

    const respawnPointEntity = GetEntitiesWithTagsAndVillage(["respawn_point"], villageId)
    OUTPUT_FlagEntityAsVisited(respawnPointEntity) // adds a flagcomponent that can be used in C++ systems

    if (!QUERY_IsVillageOccupied(villageId)) {
        if (IsCurrentAct(ACTS.ACT_1A)) {
            if (QUERY_HasTags(villageEntity, "firstVillageUnderAttack")) {
                if (_CheckIfStepIsComplete(act1FlowVal.firstVillageUnderAttack)) {
                    _EnableFastravelAct1(villageId, villageEntity)
                    OUTPUT_DispatchPlayerEnteredVillageNotice(villageEntity, intruderEntity)
                    Once()
                    return
                }
            } else if (QUERY_HasTags(villageEntity, "secondVillageUnderAttack")) {
                if (_CheckIfStepIsComplete(act1FlowVal.freeSecondVillage) || (QUERY_GetGlobalVariable(act1FlowVal.freeSecondVillage.global.isThisStepCurrentlyActive) <= 0 && QUERY_GetGlobalVariable(act1FlowVal.findSecondVillage.global.isThisStepCurrentlyActive) <= 0)) {
                    _EnableFastravelAct1(villageId, villageEntity)
                    OUTPUT_DispatchPlayerEnteredVillageNotice(villageEntity, intruderEntity)
                    Once()
                    return
                }
            } else {
                EnableFastTravelForVillage(villageId)
            }
        } else if (IsCurrentAct(ACTS.ACT_2) && GetVillageVariable(villageId, GV_FAST_TRAVELLED_ENABLED_AT_VILLAGE) === 0 && !isOutpost) {
            EnableFastTravelForVillage(villageId)
            const nearbyPlayers = GetNearbyPlayers(villageEntity)
            ForEachEntities(nearbyPlayers, (playerEntity) => {
                OUTPUT_AnnouncePlayer("village_unlock_fast_travel", [], playerEntity)
            })
        } else {
            OUTPUT_SetFastTravelEnabled(villageId, true)
        }
    }
    OUTPUT_DispatchPlayerEnteredVillageNotice(villageEntity, intruderEntity)

    Once()
})

const _EnableFastravelAct1 = (villageId, villageEntity) => {
    OUTPUT_SetFastTravelEnabled(villageId, true)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.ENABLED)
    //Set villager behviour Cheer 12 seconds then Neutral
    //SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 12)
}

SNIPPET_SpatialPartitionEntered("spe_village_cine_and_vo", (triggerEntity, _intruderEntity, _payload) => {
    // Script for all villages

    //if it is the first village under attack we don't trigger the intro cinematic
    const villageEntity = GetVillageEntityFromID(QUERY_GetVillageIDFromEntity(triggerEntity))
    if (QUERY_HasTags(villageEntity, ["firstVillageUnderAttack"]) || IsCurrentAct(ACTS.ACT_1B)) {
        return
    }

    if (DoOnce("village_intro_played")) {
        UnlockJournalEntry(JOURNAL_UNLOCKS.VILLAGE)
        _playAnyOnEnterVO(villageEntity)
    } else {
        _playAnyOnEnterVO(triggerEntity)
    }

    const hasUnlockedVindicators = QUERY_GetGlobalVariable("gv_vindicator_spawner_unlocked") > 0
    const isVillageDisabled = QUERY_HasTags(villageEntity, TAG_INACTIVE_VILLAGE)
    const isVillageUnderAttack = GetVillageVariable(QUERY_GetVillageIDFromEntity(villageEntity), "attackV2_attack_active") > 0

    Logi("~~~~~~ hasUnlockedVindicators ~~~~~~ " + hasUnlockedVindicators)
    if (!isVillageDisabled) Logi("~~~~~~ Village is active ~~~~~~")
    if (!isVillageUnderAttack) Logi("~~~~~~ Village is not under attack ~~~~~~")

    if (hasUnlockedVindicators && !isVillageDisabled && !isVillageUnderAttack) {
        IncrementGlobal(ONBOARDING_GLOBALS.ARMED_VILLAGERS)
    }
})

const VillageHasPlayerDefenses = (villageId) => {
    const currentPlayerDefenses = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["buildable", "defense-target"], [])
    return HasEntities(currentPlayerDefenses)
}

//==== VILLAGE BEHAVIOUR ====================================================================================
SNIPPET_SpatialPartitionEntered("spe_village_behavior", (triggerEntity, _intruderEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    //Set Villager greet in act 2 first encounter with player return
    if (IsCurrentAct(ACTS.ACT_2) && DoOnce("gv_triggered_greet_behaviour_once")) {
        SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.GREET, 60)
    }

    //Custom Setting that changes the barracks batch / cap based on custom game setting
    if (IsCurrentAct(ACTS.ACT_2) && QUERY_GameDifficulty() === "Custom") {
        const vindicatorSpawnEntity = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["vindicator_spawner"], [])
        OUTPUT_SetBarracksBatchSize(vindicatorSpawnEntity, villageGenericData.consts.act2VindicatorCountInVillage)
        OUTPUT_SetBarracksSpawnCap(vindicatorSpawnEntity, villageGenericData.consts.act2VindicatorCountInVillage)
    }

    if (IsCurrentAct(ACTS.ACT_3A) || IsCurrentAct(ACTS.EPILOGUE)) {
        const vindicatorSpawnEntity = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["vindicator_spawner"], [])
        OUTPUT_SetBarracksBatchSize(vindicatorSpawnEntity, villageGenericData.consts.act3VindicatorCountInVillage)
        OUTPUT_SetBarracksSpawnCap(vindicatorSpawnEntity, villageGenericData.consts.act3VindicatorCountInVillage)
    }

    _InvasionResultBehavior(villageId)

    //Audio
    if (QUERY_IsVillageOccupied(villageId)) {
        // Do nothing
        // Occupation VO and music is handled in 'invasion_attacks_v2_occupation.js'
    } else if (IsVillageUnderInvasionAttack(villageId)) {
        if (DoOnce(villageGenericData.globals.villageCurrentlyUnderAttackPlayed)) {
            const villageEntity = GetVillageEntityFromID(villageId)
            PlayPresentationActionToClosePlayers(villageGenericData.VO.villageCurrentlyUnderAttack, villageEntity, villageGenericData.consts.invasionVOProximityDistance)
        }
    } else if (IsTargetOfDelayedInvasionAttack(villageId)) {
        SetVillageAudioDefault(villageId, "incoming_attack")

        if (DoOnce(villageGenericData.globals.villageCurrentlyTargetedPlayed)) {
            const villageEntity = GetVillageEntityFromID(villageId)
            PlayPresentationActionToClosePlayers(villageGenericData.VO.villageCurrentlyTargeted, villageEntity, villageGenericData.consts.invasionVOProximityDistance)
        }

        if (IsCurrentAct(ACTS.ACT_2) && !VillageHasPlayerDefenses(villageId)) {
            if (QUERY_GetGlobalVariable(villageGenericData.globals.villageBuildDefensesDuringDayPlayed) === 0) {
                IncrementGlobal(villageGenericData.globals.villageBuildDefensesDuringDayPlayed)
                LISTENFOR_LocalTimer({
                    snippet: "et_remind_player_to_build_defenses_during_day",
                    ownerVillageId: villageId,
                    waitTime: villageGenericData.consts.buildDefensesDuringDayReminderDelay
                })
            }
        }
    } else if (IsCurrentAct(ACTS.ACT_2) && !VillageHasPlayerDefenses(villageId)) {
        if (QUERY_GetGlobalVariable(villageGenericData.globals.villageBuildDefensesCasualReminderPlayed) === 0) {
            IncrementGlobal(villageGenericData.globals.villageBuildDefensesCasualReminderPlayed)
            LISTENFOR_LocalTimer({
                snippet: "et_remind_player_to_build_defenses_casual",
                ownerVillageId: villageId,
                waitTime: villageGenericData.consts.buildDefensesCasualReminderDelay
            })
        }
    } else if (!IsCurrentAct(ACTS.ACT_1A)) {
        SetVillageAudioDefault(villageId)
    }
})

SNIPPET_LocalTimer("et_remind_player_to_build_defenses_during_day", (payload) => {
    const villageId = payload.ownerVillageId
    if (VillageHasPlayerDefenses(villageId)) {
        Logi("Player has built defenses, stopping reminder")
        OUTPUT_SetGlobalVariable(villageGenericData.globals.villageBuildDefensesDuringDayPlayed, 0)
        return
    }
    Logv("~~~~~ et_remind_player_to_build_defenses_during_day ~~~~~")

    PlayPresentationActionToPlayersInsideAVillage(villageGenericData.VO.villageReminderBuildDefensesDuringDay, villageId)
})

SNIPPET_LocalTimer("et_remind_player_to_build_defenses_casual", (payload) => {
    const villageId = payload.ownerVillageId
    if (VillageHasPlayerDefenses(villageId)) {
        Logi("Player has built defenses, stopping reminder")
        OUTPUT_SetGlobalVariable(villageGenericData.globals.villageBuildDefensesCasualReminderPlayed, 0)
        return
    }
    Logv("~~~~~ et_remind_player_to_build_defenses_casual ~~~~~")

    PlayPresentationActionToPlayersInsideAVillage(villageGenericData.VO.villageReminderBuildDefensesCasual, villageId)
})

SNIPPET_GlobalVariableChanged("gvc_invasion_result_village_variable", (_oldValue, newValue, payload) => {
    if (newValue === -1) {
        return
    }
    const villageId = payload.int
    const villageBehaviorTriggerVolume = FILTER_ByVillageID(QUERY_GetEntitiesWithTags([villageGenericData.behaviorVolumeTag]), villageId)
    if (HasEntities(villageBehaviorTriggerVolume)) {
        const playersInsideBehaviorVolume = QUERY_GetIntruders(villageBehaviorTriggerVolume)
        if (HasEntities(playersInsideBehaviorVolume)) {
            _InvasionResultBehavior(villageId)
        }
    }
})

SNIPPET_EntitySpawned("es_set_villager_behaviour", (villager, payload) => {
    const villageId = payload.ownerVillageId
    SetVillageBehavior(villageId)
})

SNIPPET_EntitySpawned("es_set_illager_behaviour", (illager, payload) => {
    const villageId = payload.ownerVillageId
    SetVillageBehavior(villageId)
})

SNIPPET_LocalTimer("lt_villager_and_illager_behavior_refresher", (payload) => {
    const villageId = payload.ownerVillageId
    SetVillageBehavior(villageId)
    LISTENFOR_LocalTimer({
        snippet: "lt_villager_and_illager_behavior_refresher",
        ownerVillageId: villageId,
        waitTime: 5
    })
})

//Custom Game Setting
//This setting modifies the count of warriors in villages
SNIPPET_GameSettingInitialized("tools_tech_tree_warrior_spawner_count", (value) => {
    villageGenericData.consts.act2VindicatorCountInVillage = value.value
    villageGenericData.consts.act3VindicatorCountInVillage = value.value + 3 //in Act 3 they get +3 for some reason, retaining that
})

//Debug
SNIPPET_ExternalEvent("ev_reveal_all_map_icons", () => {
    const allVillages = QUERY_GetAllAliveVillages()
    OUTPUT_MapSetKeyValue(allVillages, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    const worldMountSpawners = QUERY_GetEntitiesWithTags(["world_mount_spawner"])
    if (HasEntities(worldMountSpawners)) {
        OUTPUT_MapSetKeyValue(worldMountSpawners, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    }
})

SNIPPET_ExternalEvent("ev_enable_fast_travel_on_all_villages", () => {
    const allVillages = QUERY_GetAllAliveVillages()
    OUTPUT_MapSetKeyValue(allVillages, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.ENABLED)
})

SNIPPET_ExternalEvent("ev_set_village_variable_to_cheer", () => {
    let allVillages = QUERY_GetAllAliveVillages()
    while (HasEntities(allVillages)) {
        const entityToCheck = FILTER_RandomCount(allVillages, 1)
        allVillages = OPER_Difference(allVillages, entityToCheck)
        const villageId = QUERY_GetVillageIDFromEntity(entityToCheck)
        SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 12)
    }
})

SNIPPET_ExternalEvent("ev_set_village_variable_to_scared", () => {
    let allVillages = QUERY_GetAllAliveVillages()
    while (HasEntities(allVillages)) {
        const entityToCheck = FILTER_RandomCount(allVillages, 1)
        allVillages = OPER_Difference(allVillages, entityToCheck)
        const villageId = QUERY_GetVillageIDFromEntity(entityToCheck)
        SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 12)
    }
})
