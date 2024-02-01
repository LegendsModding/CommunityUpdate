const poiTowerVal = {
    [POI_TOWER_NAME_KNOCKBACK]: {
        id: "tower01",
        buildingTag: "poi_tower_01",
        triggerVolumeTag: "tower_01_tv",
        resource: "poi_tower_01_resource",
        factionName: POI_TOWER_NAME_KNOCKBACK,
        icon: "badger:wmap_knockbacktower",
        buildingCard: "poiTower01",
        cinematic: "tow_01_c01_blast_fmv",
        nightCinematic: "tow_01_c01_blast_night",
        cinematicVillageTag: "poi_tower_01_cinematic_village",
        journalUnlock: JOURNAL_UNLOCKS.TOWER_BLAST,
        telemetry: {
            name: "poi_tower_knockback",
            subcategory: "knockback_tower"
        },
        message: {
            act1Investigate: "poiTower1_investigate",
            proximity: "poiTower1_proximity",
            deconstructed: "poiTower1_deconstructed"
        },
        global: {
            revealed: "poi_tower_01_revealed",
            cinematicPlayed: "gv_knockback_tower_cinematic_played"
        },
        voiceOvers: {
            towerProximity: "poi_blast_proximity"
        }
    },
    [POI_TOWER_NAME_FREEZE]: {
        id: "tower02",
        buildingTag: "poi_tower_02",
        triggerVolumeTag: "tower_02_tv",
        resource: "poi_tower_02_resource",
        factionName: POI_TOWER_NAME_FREEZE,
        icon: "badger:wmap_frost_tower",
        buildingCard: "poiTower02",
        cinematic: "tow_02_c01_frost_fmv",
        nightCinematic: "tow_02_c01_frost_night",
        cinematicVillageTag: "poi_tower_02_cinematic_village",
        journalUnlock: JOURNAL_UNLOCKS.TOWER_FROST,
        telemetry: {
            name: "poi_tower_freeze",
            subcategory: "freeze_tower"
        },
        message: {
            act1Investigate: "poiTower2_investigate",
            proximity: "poiTower2_proximity",
            deconstructed: "poiTower2_deconstructed"
        },
        global: {
            revealed: "poi_tower_02_revealed",
            cinematicPlayed: "gv_freeze_tower_cinematic_played"
        },
        voiceOvers: {
            towerProximity: "poi_frost_proximity"
        }
    },
    [POI_TOWER_NAME_STUN]: {
        id: "tower04",
        buildingTag: "poi_tower_04",
        triggerVolumeTag: "tower_04_tv",
        resource: "poi_tower_04_resource",
        factionName: POI_TOWER_NAME_STUN,
        icon: "badger:wmap_knockbacktower",
        buildingCard: "poiTower04",
        cinematic: "tow_04_c01_stun_fmv",
        nightCinematic: "tow_04_c01_stun_night",
        cinematicVillageTag: "poi_tower_04_cinematic_village",
        journalUnlock: JOURNAL_UNLOCKS.TOWER_STUN,
        telemetry: {
            name: "poi_tower_stun",
            subcategory: "stun_tower"
        },
        message: {
            act1Investigate: "poiTower4_investigate",
            proximity: "poiTower4_proximity",
            deconstructed: "poiTower4_deconstructed"
        },
        global: {
            revealed: "poi_tower_04_revealed",
            cinematicPlayed: "gv_stun_tower_cinematic_played"
        },
        voiceOvers: {
            towerProximity: "poi_stun_proximity"
        }
    },
    [POI_TOWER_NAME_BURN]: {
        id: "tower05",
        buildingTag: "poi_tower_05",
        triggerVolumeTag: "tower_05_tv",
        resource: "poi_tower_05_resource",
        factionName: POI_TOWER_NAME_BURN,
        icon: "badger:wmap_burn_tower",
        buildingCard: "poiTower05",
        cinematic: "tow_05_c01_burn_fmv",
        nightCinematic: "tow_05_c01_burn_night",
        cinematicVillageTag: "poi_tower_05_cinematic_village",
        journalUnlock: JOURNAL_UNLOCKS.TOWER_BURN,
        telemetry: {
            name: "poi_tower_burn",
            subcategory: "burn_tower"
        },
        message: {
            act1Investigate: "poiTower5_investigate",
            proximity: "poiTower5_proximity",
            deconstructed: "poiTower5_deconstructed"
        },
        global: {
            revealed: "poi_tower_05_revealed",
            cinematicPlayed: "gv_burn_tower_cinematic_played"
        },
        voiceOvers: {
            towerProximity: "poi_burn_proximity"
        }
    },
    [POI_TOWER_NAME_GIANT]: {
        id: "tower06",
        buildingTag: "poi_tower_06",
        triggerVolumeTag: "tower_06_tv",
        resource: "poi_tower_06_resource",
        factionName: POI_TOWER_NAME_GIANT,
        icon: "badger:wmap_giant_tower",
        buildingCard: "poiTower06",
        cinematic: "tow_06_c01_giant_fmv",
        nightCinematic: "tow_06_c01_giant_night",
        cinematicVillageTag: "poi_tower_06_cinematic_village",
        journalUnlock: JOURNAL_UNLOCKS.TOWER_GIANT,
        telemetry: {
            name: "poi_tower_giant",
            subcategory: "giant_tower"
        },
        message: {
            act1Investigate: "poiTower6_investigate",
            proximity: "poiTower6_proximity",
            deconstructed: "poiTower6_deconstructed"
        },
        global: {
            revealed: "poi_tower_06_revealed",
            cinematicPlayed: "gv_giant_tower_cinematic_played"
        },
        voiceOvers: {
            towerProximity: "poi_giant_proximity"
        }
    }
}

const towersMisc = {
    investigationInteractionEntityTag: "towerInvestigationTag",
    investigateAct1FirstTimeVO: "poi_tower_act1_1",
    investigateAct1SecondTimeVO: "poi_tower_act1_2",
    investigateAct2DiscoveredButNoUpgrade: "poi_tower_act2_1",
    investigateAct2UpgradePresent: "poi_tower_act2_2",
    investigateAct2NotDiscoveredAndNoUpgrade: "poi_tower_act2_3",
    deconstructAct2FirstTimeVO: "poi_tower_act2_deconstruct",
    discoveredTowersAct1GV: "gv_discovered_towers_act_1",
    buildUnlockResource: "unlock_poi_tower_upgrade",
    towerUnlockResource: "unlock_poi_tower_resource"
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SpawnRoamingPiglinCloseToTower = (towerEntity, villageId) => {
    OUTPUT_PlacementStart()
    OUTPUT_PlacementSetPrimaryProximityRule(RandomEntity(towerEntity), 43, 44)
    OUTPUT_PlacementSetWaterDistanceRule(8)
    if (!OUTPUT_PlacementExecute()) {
        OUTPUT_PlacementStart()
        OUTPUT_PlacementSetPrimaryProximityRule(RandomEntity(towerEntity), 43, 44)
        OUTPUT_PlacementExecute()
    }

    if (QUERY_PlacementSuccess()) {
        OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), "badger:poi_tower_piglin_village", VILLAGE_SIZE_DEFAULT, "faction.pig.poi.tower", TEAM_ORANGE)
    }

    const poiTowerPiglinTV = SpawnTriggerVolume(towerEntity, towerEntity, "badger:spatial_trigger_poi_tower_piglin_gameplay", TEAM_WILD, villageId, true, ["piglin", "mob"], [], ALLIANCE_ENEMY)
    OUTPUT_AddTag(poiTowerPiglinTV, "poiTowerPiglinTV")

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_piglin_close_to_tower",
        ownerVillageId: villageId,
        triggerEntity: poiTowerPiglinTV,
        payloadEntities: towerEntity
    })
}

// This previously used the mobAllianceBehaviourMode game rule
SNIPPET_InheritsFromGameMode("lcu_campaign", () => {
    for (const towerKey in poiTowerVal) {
        const towerData = poiTowerVal[towerKey]
        LISTENFOR_VillageGenerated({
            snippet: "vg_poi_tower_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: towerData.factionName,
            payloadString: towerKey
        })
    }

    //Piglins attacking towers
    LISTENFOR_VillageGenerated({
        snippet: "vg_poi_tower_piglins",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: "faction.pig.poi.tower"
    })

    // On Act 2 listener
    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_grant_poi_tower_unlock",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: ACTS.ACT_2
    })

    LISTENFOR_VillageDestroyed({
        snippet: "vd_tower1_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: "faction.poi.tower_01"
    })

    LISTENFOR_VillageDestroyed({
        snippet: "vd_tower2_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: "faction.poi.tower_02"
    })

    LISTENFOR_VillageDestroyed({
        snippet: "vd_tower4_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: "faction.poi.tower_04"
    })

    LISTENFOR_VillageDestroyed({
        snippet: "vd_tower5_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: "faction.poi.tower_05"
    })

    LISTENFOR_VillageDestroyed({
        snippet: "vd_tower6_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: "faction.poi.tower_06"
    })

})

SNIPPET_VillageDestroyed("vd_tower1_destroyed", (_villageId, _payload) => {
    OUTPUT_AddOrSubtractObjectiveProgress("objectives.towersUnlocked", 1)
    Once()
})

SNIPPET_VillageDestroyed("vd_tower2_destroyed", (_villageId, _payload) => {
    OUTPUT_AddOrSubtractObjectiveProgress("objectives.towersUnlocked", 1)
    Once()
})

SNIPPET_VillageDestroyed("vd_tower4_destroyed", (_villageId, _payload) => {
    OUTPUT_AddOrSubtractObjectiveProgress("objectives.towersUnlocked", 1)
    Once()
})

SNIPPET_VillageDestroyed("vd_tower5_destroyed", (_villageId, _payload) => {
    OUTPUT_AddOrSubtractObjectiveProgress("objectives.towersUnlocked", 1)
    Once()
})


SNIPPET_GlobalVariableChanged("gvc_grant_poi_tower_unlock", (_oldValue, newValue, _payload) => {
    if (newValue !== 1) {
        return
    }

    // Grant the upgrade buildable right at the start of Act 2
    if (QUERY_GetGlobalVariable(towersMisc.discoveredTowersAct1GV) > 0) {
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, towersMisc.buildUnlockResource, 1, false)
    }

    Once()
})

SNIPPET_VillageGenerated("vg_poi_tower_village", (villageId, payload) => {
    const towerData = poiTowerVal[payload.string]
    const baseDeck = DECK_Empty()

    const initialZone = ZonesCard("addPoiZones", 1)
    DECK_PutOnBottomOf(initialZone, baseDeck)
    const layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_PutOnBottomOf(layer, baseDeck)
    const center = BuildableCard(towerData.buildingCard)
    DECK_MultiplyByMultipleRules(center, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])
    DECK_PutOnBottomOf(center, baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    const villageEntity = GetVillageEntityFromID(villageId)
    const showIconTV = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_icon_reveal", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_tower_reveal_question_mark_icon",
        ownerVillageId: villageId,
        triggerEntity: showIconTV,
        payloadString: payload.string
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_poi_tower",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [towerData.buildingTag],
        villageId: villageId,
        payloadString: payload.string
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_poi_tower_deconstructed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [towerData.buildingTag],
        villageId: villageId,
        despawned: true,
        payloadString: payload.string
    })

    OUTPUT_SetGlobalVariable(towerData.global.revealed, 0)
})

SNIPPET_DeconstructionStarted("ds_removing_poi_tower", (destroyedEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_SetIconOff(villageEntity)
    SetVillageVariable(villageId, "poi_tower_deconstruced", 1)

    Once()
})

SNIPPET_NonPopCappedEntityDestroyed("ed_poi_tower_deconstructed", (destroyedEntity, payload) => {
    const towerData = poiTowerVal[payload.string]
    OUTPUT_DespawnEntities(ClosestEntity(QUERY_GetEntitiesWithTags(["poiTowerPiglinTV"]), destroyedEntity))
    IncrementGlobal(INVASION_PHASE_STATE.TOWERS_COMPLETED_COUNT)
    if (!IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A) && DoOnce("gv_deconstruct_once_act2")) {
        PlayPresentationActionToClosePlayers(towersMisc.deconstructAct2FirstTimeVO, destroyedEntity)
    } else {
        OUTPUT_Announce(towerData.message.deconstructed, [])
    }
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.TOWER_PROGRESS.globalVariable)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_poi_tower_reveal_question_mark_icon", (triggerEntity, _intruderEntity, payload) => {
    const towerData = poiTowerVal[payload.string]
    const villageEntity = GetVillageEntityFromID(QUERY_GetVillageIDFromEntity(triggerEntity))
    OUTPUT_AddTag(villageEntity, TAG_REVEALED_POI)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    SetEntityWaypointIconState(villageEntity, towerData.id, POI_WAYPOINT_ICON_STATE.REVEALED)
    OUTPUT_SetGlobalVariable(towerData.global.revealed, 1)
    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

const _IsTowerInvestigated = (towerKey) => {
    return QUERY_GetGlobalVariable(poiTowerVal[towerKey].global.cinematicPlayed) > 0
}

const _RemoveAllInvestigationInteractionZonesForTower = (towerKey) => {
    const allInteractionZones = QUERY_GetEntitiesWithTags([towersMisc.investigationInteractionEntityTag, towerKey])
    OUTPUT_DespawnEntities(allInteractionZones)
}

// Switches interaction state only on towers which are in the wild
const _SetPOITowersInteractionState = (towerKey, state) => {
    const allTowers = FILTER_ByFactionName(QUERY_GetEntitiesWithTags(poiTowerVal[towerKey].buildingTag), [POI_TOWER_NAME_KNOCKBACK, POI_TOWER_NAME_STUN, POI_TOWER_NAME_FREEZE, POI_TOWER_NAME_BURN, POI_TOWER_NAME_GIANT])
    ForEachEntities(allTowers, (entity) => {
        OUTPUT_SetInteractionState(entity, state)
    })
}

//Building Complete - Campaign
SNIPPET_BuildingComplete("bc_poi_tower", (poiTowerEntity, payload) => {
    const towerKey = payload.string
    const towerData = poiTowerVal[towerKey]
    const villageId = QUERY_GetVillageIDFromEntity(poiTowerEntity)
    OUTPUT_MapSetKeyValue(poiTowerEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.HIDDEN)

    if (!_IsTowerInvestigated(towerKey)) {
        // Disable entity's default deconstruction interaction
        OUTPUT_SetInteractionState(poiTowerEntity, false)

        const interactionEntity = OUTPUT_SpawnEntityAt(poiTowerEntity, "badger:poi_tower_interaction_zone")
        OUTPUT_SetTeam(interactionEntity, TEAM_BLUE)
        OUTPUT_AddTag(interactionEntity, towersMisc.investigationInteractionEntityTag)
        OUTPUT_AddTag(interactionEntity, towerKey)

        LISTENFOR_PlayerInteracted({
            snippet: "pi_cinematic_trigger",
            ownerVillageId: villageId,
            entities: interactionEntity,
            payloadEntities: poiTowerEntity,
            payloadString: towerKey
        })

        LISTENFOR_PlayerEnteredVillage({
            snippet: "pev_refresh_investigated_state",
            ownerVillageId: villageId,
            villageId: villageId,
            payloadString: towerKey
        })
    }

    _PoiTowerTriggerVolumesListeners(poiTowerEntity, villageId, towerKey) //function to spawn volume listeners
    SetEntityWaypointIconState(poiTowerEntity, towerData.id, POI_WAYPOINT_ICON_STATE.HIDDEN)
    DespawnNearbyRoamingSpawners(poiTowerEntity)

    LISTENFOR_DeconstructionStarted({
        snippet: "ds_removing_poi_tower",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        entities: poiTowerEntity
    })

    Once()
})

SNIPPET_PlayerInteracted("pi_cinematic_trigger", (playerEntity, _interactedEntity, payload) => {
    const villageEntity = GetVillageEntityFromID(payload.ownerVillageId)
    const towerData = poiTowerVal[payload.string]

    if (IsCurrentAct(ACTS.ACT_1A) || IsCurrentAct(ACTS.ACT_1B)) {
        OUTPUT_SetGlobalVariable(towersMisc.discoveredTowersAct1GV, 1)
        if (DoOnce("gv_investigate_once_act1")) {
            PlayPresentationActionToClosePlayers(towersMisc.investigateAct1FirstTimeVO, villageEntity)
        } else {
            // Show HUD for the rest of the act 1
            AnnounceToClosePlayers(towerData.message.act1Investigate, [], villageEntity)
        }

        return
    }

    // The towers weren't interacted with in Act 1, grant resource now
    if (QUERY_GetTeamResource(TEAM_BLUE, towersMisc.buildUnlockResource) === 0) {
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, towersMisc.buildUnlockResource, 1, false)
    }

    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 0 && QUERY_GetGlobalVariable(towerData.global.cinematicPlayed) === 0) {
        IncrementGlobal(towerData.global.cinematicPlayed)

        const cine = IsNightTime() ? towerData.nightCinematic : towerData.cinematic
        OUTPUT_TriggerCinematic(cine, [payload.entities, playerEntity])
        OUTPUT_AddTag(villageEntity, towerData.cinematicVillageTag)

        // Remove all interaction zones
        _RemoveAllInvestigationInteractionZonesForTower(payload.string)

        // Re-activate tower after cine is done
        LISTENFOR_CinematicFinished({
            snippet: "cf_enable_tower_deconstruction",
            ownerVillageId: payload.ownerVillageId,
            cinematicName: cine,
            payloadEntities: payload.entities,
            payloadString: payload.string
        })
    } else if (QUERY_GetGlobalVariable(towerData.global.cinematicPlayed) === 0) {
        IncrementGlobal(towerData.global.cinematicPlayed)
        OUTPUT_Announce(towerData.message.proximity, [])
        OUTPUT_AddTag(villageEntity, towerData.cinematicVillageTag)

        // Remove all interaction zones
        _RemoveAllInvestigationInteractionZonesForTower(payload.string)

        // Re-activate all towers
        _SetPOITowersInteractionState(payload.string, true)

        UnlockJournalEntry(towerData.journalUnlock)
    }

    Once()
})

SNIPPET_PlayerEnteredVillage("pev_refresh_investigated_state", (_villageId, _playerCount, payload) => {
    if (_IsTowerInvestigated(payload.string)) {
        _RemoveAllInvestigationInteractionZonesForTower(payload.string)
        _SetPOITowersInteractionState(payload.string, true)
    }
})

SNIPPET_CinematicFinished("cf_enable_tower_deconstruction", (payload) => {
    // Re-activate all loaded towers
    _SetPOITowersInteractionState(payload.string, true)

    const villageEntity = GetVillageEntityFromID(payload.ownerVillageId)
    const towerData = poiTowerVal[payload.string]

    // Play VO
    // NOTE: temporary flow for when the upgrade isn't needed
    if (IsCurrentAct(ACTS.ACT_2) && DoOnce("gv_investigate_once_act2")) {
        // Special VO logic depending on what player did:
        if (QUERY_GetTeamResource(TEAM_BLUE, towersMisc.towerUnlockResource) > 0) {
            // Case 1: player built an upgrade at WoF (don't care if discovered in Act 1 or not)
            PlayPresentationActionToClosePlayers(towersMisc.investigateAct2UpgradePresent, villageEntity)
        } else {
            if (QUERY_GetGlobalVariable(towersMisc.discoveredTowersAct1GV) > 0) {
                // Case 2: player discovered the tower in Act 1 but did not build the upgrade at WoF yet
                PlayPresentationActionToClosePlayers(towersMisc.investigateAct2DiscoveredButNoUpgrade, villageEntity)
            } else {
                // Case 3: player did not discover the tower in Act 1 AND did not build the upgrade
                PlayPresentationActionToClosePlayers(towersMisc.investigateAct2NotDiscoveredAndNoUpgrade, villageEntity)
            }
        }
    } else {
        OUTPUT_Announce(towerData.message.proximity, [])
    }

    UnlockJournalEntry(towerData.journalUnlock)
    Once()
})

SNIPPET_EntitySpawned("es_set_appearance_to_tower_faction_piglins", (piglinEntity) => {
    OUTPUT_OverrideFactionAppearanceByName(piglinEntity, FACTION_NAME_DEFEND)
})

SNIPPET_ExternalEvent("ee_grant_poi_tower_resources", () => {
    const player = GetAllPlayers()
    OUTPUT_AddOrRemoveResource(player, "stone", 200, false)
    OUTPUT_AddOrRemoveResource(player, "redstone", 50, false)
    OUTPUT_AddOrRemoveResource(player, "gold", 10, false)
})

//Setting up Proximity Check
const _PoiTowerTriggerVolumesListeners = (poiTowerEntity, villageId, towerKey) => {
    const bodyProximityTV = SpawnTriggerVolume(poiTowerEntity, poiTowerEntity, "badger:spatial_trigger_poi_ally_proximity", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_trigger_poi_tower_proximity_VO",
        ownerVillageId: villageId,
        triggerEntity: bodyProximityTV,
        payloadString: towerKey
    })
}

SNIPPET_SpatialPartitionEntered("spe_poi_trigger_poi_tower_proximity_VO", (triggerEntity, intruderEntity, payload) => {
    const towerData = poiTowerVal[payload.string]
    if (DoOnce("proximity_play_once_" + payload.string)) { //remove this if we don't want to play it only once per tower
        if (!IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A)) {
            PlayPresentationActionToClosePlayers(towerData.voiceOvers.towerProximity, intruderEntity)
        } else {
            //OUTPUT_Announce(allyData.message.bodyproximity, []) //may eventually want a message or something similar
        }
    } else {//If you've already visited a tower of this type, just remove the trigger volume as its not needed
        OUTPUT_DespawnEntities(triggerEntity)
    }
})
