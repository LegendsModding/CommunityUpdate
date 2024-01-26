const poiAllies = {
    poiAlly01Val: {
        id: "poiAlly01Val",
        respawnId: "ally01",
        triggerVolumeTag: "poi_fallen_warrior_tv_gc",
        factionName: "faction.poi.ally.01.faction",
        journalUnlock: JOURNAL_UNLOCKS.ALLY_FALLEN_WARRIOR,
        buildUnlock: "unlock_poi_golem_upgrade",
        battleViewUnlock: "unlock_battle_view_fallen_warrior",
        message: {
            approached: "poiAlly1_approached",
            bodyproximity: "poiAlly1_bodyproximity",
            completed: "poiAlly1_completed",
            unlockSequence: "poiAlly1_unlock_sequence"
        },
        global: {
            allCompleted: "poi_fallen_warrior_completed_all",
            keyAction: TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES.POI_ALLY_01,
            playedDiscoveredAct1: "gv_played_discovered_act1_01",
            playedDiscoveredAct2: "gv_played_discovered_act2_01"
        },
        voiceOvers: {
            intro: "poi_giant_intro",
            golemProximity: "poi_giant_proximity",
            postCinematic: "poi_giant_outro"
        },
        cinematic: {
            outro: "gol01_c01_giant_outro",
            despawnEvent: "despawn_ally_01_entity"
        },
        tag: {
            brokenBody: "poi_fallen_warrior_interaction",
            cinematicEntity0: "fallenwarriortorso",
            cinematicEntity1: "fallenwarriorleftarm",
            cinematicEntity2: "fallenwarriorrightarm",
            allyBuilding: "poi_fallen_warrior_body",
            bodyVFXTag: "poi_fallen_warrior_body_vfx",
            cardTag: "poiAlly01"
        },
        bc: {
            buildingTag: "ally01Torso",
            spatialTrigger: "badger:spatial_trigger_poi_ally_01_vo",
            presentationAudio: "fallen_warrior_body_audio"
        },
        instanceName: "instance_fallen_warrior_torso_vfx_marker",
        timeToInteract: 23
    },

    poiAlly02Val: {
        id: "poiAlly02Val",
        respawnId: "ally02",
        triggerVolumeTag: "poi_ally_02_tv",
        villageArchetype: "badger:poi_ally_02_village",
        factionName: "faction.poi.ally.02",
        journalUnlock: JOURNAL_UNLOCKS.ALLY_SPAWNER,
        buildUnlock: "unlock_poi_golem_upgrade",
        battleViewUnlock: "unlock_battle_view_carrier_golem",
        message: {
            approached: "poiAlly2_approached",
            bodyproximity: "poiAlly2_bodyproximity",
            completed: "poiAlly2_completed",
            unlockSequence: "poiAlly2_unlock_sequence"
        },
        global: {
            allCompleted: "poi_ally_02_completed",
            keyAction: TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES.POI_ALLY_02,
            playedDiscoveredAct1: "gv_played_discovered_act1_02",
            playedDiscoveredAct2: "gv_played_discovered_act2_02"
        },
        tag: {
            brokenBody: "mob_golem_carrier_nis",
            cinematicEntity0: "mob_golem_carrier_nis",
            cinematicEntity1: "carriergolemhead",
            allyBuilding: "poi_ally_02",
            bodyVFXTag: "poi_ally_02_body_vfx",
            cardTag: "poiAlly02"
        },
        voiceOvers: {
            golemProximity: "poi_carrier_proximity",
            intro: "poi_carrier_intro",
            postCinematic: "poi_carrier_outro"
        },
        cinematic: {
            outro: "gol02_c01_portal_outro",
            despawnEvent: "despawn_ally_02_entity"
        },
        instanceName: "instance_poi_golem_02_body_vfx_marker",
        bc: {
            buildingTag: "ally02Torso",
            spatialTrigger: "badger:spatial_trigger_poi_ally_02_intro",
            presentationAudio: "carrier_golem_body_audio"
        },
        timeToInteract: 16
    },

    poiAlly04Val: {
        id: "poiAlly04Val",
        respawnId: "ally04",
        triggerVolumeTag: "poi_ally_04_tv",
        factionName: "faction.poi.ally.04",
        journalUnlock: JOURNAL_UNLOCKS.ALLY_SHIELD,
        buildUnlock: "unlock_poi_golem_upgrade",
        battleViewUnlock: "unlock_battle_view_shield_golem",
        message: {
            approached: "poiAlly4_approached",
            bodyproximity: "poiAlly4_bodyproximity",
            completed: "poiAlly4_completed",
            unlockSequence: "poiAlly4_unlock_sequence"
        },
        global: {
            allCompleted: "poi_ally_04_completed_all",
            keyAction: TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES.POI_ALLY_04,
            playedDiscoveredAct1: "gv_played_discovered_act1_04",
            playedDiscoveredAct2: "gv_played_discovered_act2_04"
        },
        tag: {
            brokenBody: "mob_golem_shield_nis",
            cinematicEntity0: "shield_golem_body",
            cinematicEntity1: "shieldgolemhead",
            allyBuilding: "poi_ally_04",
            interactionBeam: "interaction_poi_ally_04",
            bodyVFXTag: "poi_ally_04_body_vfx",
            cardTag: "poiAlly04"
        },
        voiceOvers: {
            golemProximity: "poi_shield_proximity",
            intro: "poi_shield_intro",
            postCinematic: "poi_shield_outro"
        },
        behaviors: {
            idleFeather: "badger:behavior_shield_golem_nis_idle_feather",
            idleNoFeather: "badger:behavior_shield_golem_nis_idle_a"
        },
        cinematic: {
            outro: "gol04_c01_shield_outro",
            despawnEvent: "despawn_ally_04_entity"
        },
        bc: {
            buildingTag: "ally04Torso",
            spatialTrigger: "badger:spatial_trigger_poi_ally_04",
            presentationAudio: ""
        },
        instanceName: "instance_poi_golem_04_body_vfx_marker",
        timeToInteract: 20
    },

    poiAlly05Val: {
        id: "poiAlly05Val",
        respawnId: "ally05",
        triggerVolumeTag: "poi_ally_05_tv",
        factionName: "faction.poi.ally.05",
        journalUnlock: JOURNAL_UNLOCKS.ALLY_SNIPER,
        buildUnlock: "unlock_poi_golem_upgrade",
        battleViewUnlock: "unlock_battle_view_sniper",
        message: {
            approached: "poiAlly5_approached",
            bodyproximity: "poiAlly5_bodyproximity",
            completed: "poiAlly5_completed",
            unlockSequence: "poiAlly5_unlock_sequence"
        },
        global: {
            allCompleted: "poi_ally_05_completed_all",
            keyAction: TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES.POI_ALLY_05,
            playedDiscoveredAct1: "gv_played_discovered_act1_05",
            playedDiscoveredAct2: "gv_played_discovered_act2_05"
        },
        tag: {
            brokenBody: "mob_golem_sniper_nis",
            allyBuilding: "poi_ally_05",
            cinematicEntity0: "mob_golem_sniper_nis",
            cinematicEntity1: "snipergolemnose",
            bodyVFXTag: "poi_ally_05_body_vfx",
            cardTag: "poiAlly05"
        },
        voiceOvers: {
            golemProximity: "poi_ranged_proximity",
            intro: "poi_ranged_intro",
            postCinematic: "poi_ranged_outro"
        },
        cinematic: {
            outro: "gol05_c01_sniper_outro",
            despawnEvent: "despawn_ally_05_entity"
        },
        instanceName: "instance_poi_golem_05_body_vfx_marker",
        bc: {
            buildingTag: "ally05Torso",
            spatialTrigger: "badger:spatial_trigger_poi_ally_05",
            presentationAudio: "sniper_golem_body_audio"
        },
        timeToInteract: 15
    },
    poiAlly06Val: {
        id: "poiAlly06Val",
        respawnId: "ally06",
        triggerVolumeTag: "poi_ally_06_tv",
        villageArchetype: "badger:poi_ally_06_village",
        factionName: "faction.poi.ally.06",
        journalUnlock: JOURNAL_UNLOCKS.ALLY_DRILL,
        buildUnlock: "unlock_poi_golem_upgrade",
        battleViewUnlock: "unlock_battle_view_drill_golem",
        message: {
            approached: "poiAlly6_approached",
            bodyproximity: "poiAlly6_bodyproximity",
            completed: "poiAlly6_completed",
            unlockSequence: "poiAlly6_unlock_sequence"
        },
        global: {
            allCompleted: "poi_ally_06_completed",
            keyAction: TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES.POI_ALLY_06,
            playedDiscoveredAct1: "gv_played_discovered_act1_06",
            playedDiscoveredAct2: "gv_played_discovered_act2_06"
        },
        tag: {
            brokenBody: "mob_golem_drill_nis",
            cinematicEntity0: "mob_golem_drill_nis",
            cinematicEntity1: "drillgolemhead",
            allyBuilding: "poi_ally_06",
            bodyVFXTag: "poi_ally_06_body_vfx",
            cardTag: "poiAlly06"
        },
        voiceOvers: {
            golemProximity: "poi_drill_proximity",
            intro: "poi_drill_intro",
            postCinematic: "poi_drill_outro"
        },
        cinematic: {
            outro: "gol06_c01_portal_outro",
            despawnEvent: "despawn_ally_06_entity"
        },
        instanceName: "instance_poi_golem_06_body_vfx_marker",
        bc: {
            buildingTag: "ally06Torso",
            spatialTrigger: "badger:spatial_trigger_poi_ally_06_intro",
            presentationAudio: "drill_golem_body_audio"
        },
        timeToInteract: 16
    },
    poiAlly07Val: {
        id: "poiAlly07Val",
        respawnId: "ally07",
        triggerVolumeTag: "poi_ally_07_tv",
        villageArchetype: "badger:poi_ally_07_village",
        factionName: "faction.poi.ally.07",
        journalUnlock: JOURNAL_UNLOCKS.ALLY_GRAPPLER,
        buildUnlock: "unlock_poi_golem_upgrade",
        battleViewUnlock: "unlock_battle_view_grappler_golem",
        message: {
            approached: "poiAlly7_approached",
            bodyproximity: "poiAlly7_bodyproximity",
            completed: "poiAlly7_completed",
            unlockSequence: "poiAlly7_unlock_sequence"
        },
        global: {
            allCompleted: "poi_ally_07_completed",
            keyAction: TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES.POI_ALLY_07,
            playedDiscoveredAct1: "gv_played_discovered_act1_07",
            playedDiscoveredAct2: "gv_played_discovered_act2_07"
        },
        tag: {
            brokenBody: "mob_golem_grappler_nis",
            cinematicEntity0: "mob_golem_grappler_nis",
            cinematicEntity1: "grapplergolemhead",
            allyBuilding: "poi_ally_07",
            bodyVFXTag: "poi_ally_07_body_vfx",
            cardTag: "poiAlly07"
        },
        voiceOvers: {
            golemProximity: "poi_grappler_proximity",
            intro: "poi_grappler_intro",
            postCinematic: "poi_grappler_outro"
        },
        cinematic: {
            outro: "gol07_c01_portal_outro",
            despawnEvent: "despawn_ally_07_entity"
        },
        instanceName: "instance_poi_golem_07_body_vfx_marker",
        bc: {
            buildingTag: "ally07Torso",
            spatialTrigger: "badger:spatial_trigger_poi_ally_07_intro",
            presentationAudio: "grappler_golem_body_audio"
        },
        timeToInteract: 16
    }
}

// ===================================================

// Helpers =================================

const _PoiAllyBuildVillage = (villageId, allyCard) => {
    const baseDeck = DECK_Empty()

    const initialZone = ZonesCard("addPoiZones", 1)
    DECK_PutOnBottomOf(initialZone, baseDeck)
    const layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_PutOnBottomOf(layer, baseDeck)
    const center = BuildableCard(allyCard)
    DECK_MultiplyByMultipleRules(center, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facingEast"), ForceBuildingPlacementCard("forceBuildingPlacement")])
    DECK_PutOnBottomOf(center, baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}

const _PoiAllyHandleBuildingComplete = (buildingCompleteEntity, allyId) => {
    const allyData = poiAllies[allyId]
    const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEntity)
    OUTPUT_AddTag(buildingCompleteEntity, allyData.bc.buildingTag)
    //poiAlly01 special case (the torso entity model is offset from the AABB so the interaction zone would also be offset. this manual locator resolves that)
    if (allyData.id === poiAllies.poiAlly01Val.id) {
        const interactionLocator = QUERY_GetChildEntitiesWithInstanceName(buildingCompleteEntity, poiAllies.poiAlly01Val.instanceName)
        const interactionEntity = OUTPUT_SpawnEntityAt(interactionLocator, "badger:poi_ally_01_interact_zone")
        OUTPUT_SetTeam(interactionEntity, TEAM_BLUE)
        OUTPUT_AddTag(interactionEntity, poiAllies.poiAlly01Val.tag.brokenBody)
    }

    const allyTV = SpawnTriggerVolume(buildingCompleteEntity, buildingCompleteEntity, allyData.bc.spatialTrigger, TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    OUTPUT_AddTag(allyTV, allyData.triggerVolumeTag)
    let te = allyTV

    //poiAlly04 special case
    if (allyData.id === poiAllies.poiAlly04Val.id) {
        const partBuildable = QUERY_GetEntitiesWithTags(["shield_golem_body"])
        OUTPUT_SetBehavior(partBuildable, poiAllies.poiAlly04Val.behaviors.idleFeather)
        const shieldGolemIntroTV = SpawnTriggerVolume(partBuildable, partBuildable, "badger:spatial_trigger_poi_ally_04_intro", TEAM_WILD, villageId, false, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
        te = shieldGolemIntroTV
    } else {
        OUTPUT_TriggerPresentationEvent(buildingCompleteEntity, allyData.bc.presentationAudio)
    }

    _PoiAllyTriggerVolumesListeners(buildingCompleteEntity, villageId, allyData.id, te)
    _PoiAllyTurnOnBodyVFX(buildingCompleteEntity, allyData.instanceName, allyData.tag.bodyVFXTag)
}

const _PoiAllyTriggerVolumesListeners = (buildingCompleteEntity, villageId, allyId, te) => {
    const bodyProximityTV = SpawnTriggerVolume(buildingCompleteEntity, buildingCompleteEntity, "badger:spatial_trigger_poi_ally_proximity", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_trigger_poi_ally_proximity_VO",
        ownerVillageId: villageId,
        triggerEntity: bodyProximityTV,
        payloadString: allyId
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_trigger_poi_ally_intro",
        ownerVillageId: villageId,
        triggerEntity: te,
        payloadEntities: buildingCompleteEntity,
        payloadString: allyId
    })

    const poiAllyShowIconTV = SpawnTriggerVolume(buildingCompleteEntity, buildingCompleteEntity, "badger:spatial_trigger_icon_reveal", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_ally_reveal_question_mark_icon",
        ownerVillageId: villageId,
        triggerEntity: poiAllyShowIconTV,
        payloadString: allyId
    })
}

const _PoiAllyTurnOnBodyVFX = (body, instanceN, vfxTag) => {
    const vfxLocator = QUERY_GetChildEntitiesWithInstanceName(body, instanceN)
    const resultVFX = OUTPUT_SpawnEntityAt(vfxLocator, "badger:fx_attractor")
    OUTPUT_AddTag(resultVFX, vfxTag)
}

const _PoiAllyHandleInteract = (allyData, playerEntity, interactedEntity) => {
    const vfx = QUERY_GetEntitiesWithTags([allyData.tag.bodyVFXTag])

    if (HasEntities(vfx)) {
        OUTPUT_DespawnEntities(vfx)
    }
    //PoiAlly01 special case. Despawn trigger volumes
    if (allyData.id === poiAllies.poiAlly01Val.id) {
        OUTPUT_SetInteractionState(interactedEntity, false)
        OUTPUT_DespawnEntities(QUERY_GetEntitiesWithTags([allyData.tag.brokenBody]))
    }

    const player = playerEntity
    const brokenBodyBase = QUERY_GetEntitiesWithTags([allyData.tag.allyBuilding])

    OUTPUT_TriggerPresentationEvent(interactedEntity, "on_carrier_golem_interact_confirm")
    OUTPUT_TriggerCinematic(allyData.cinematic.outro, OPER_Append(brokenBodyBase, player))

    TelemetrySendKeyActionCompletedEvent(playerEntity, allyData.global.keyAction)
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.POI_ALLY_PROGRESS.globalVariable)
}

const _PoiAllyRevealQuestionMark = (allyId) => {
    const allyData = poiAllies[allyId]
    const villageEntity = FILTER_ByFactionName(QUERY_GetAllVillages(), allyData.factionName)
    OUTPUT_AddTag(villageEntity, TAG_REVEALED_POI)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.VISITED)
    SetEntityWaypointIconState(villageEntity, allyData.id, POI_WAYPOINT_ICON_STATE.REVEALED)
}

const _PoiAllyHandleCinematicOutro = (allyId) => {
    const allyData = poiAllies[allyId]
    const poiAlly = QUERY_GetEntitiesWithTags([allyData.tag.allyBuilding])
    if (!IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A)) {
        LISTENFOR_LocalTimer({ //delay the presentation action until afer HUD sequence
            snippet: "lt_delayed_poi_ally_postcinematic_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 13, //enough time for Unlock center notification + Bonus Info side panel + lore unlock sequence
            payloadString: allyId
        })
    } else {
        OUTPUT_Announce(allyData.message.completed, [])
    }
    OUTPUT_AddOrSubtractObjectiveProgress("objectives.firstsAwoken", 1)
    OUTPUT_SetGlobalVariable(allyData.global.allCompleted, 1)
    IncrementGlobal(INVASION_PHASE_STATE.ALLIES_COMPLETED_COUNT)
    //Cleanup our trigger volume entities
    OUTPUT_DespawnEntities(QUERY_GetEntitiesWithTags([allyData.triggerVolumeTag]))
    const poiVillageEntity = FILTER_ByFactionName(QUERY_GetAllVillages(), allyData.factionName)
    OUTPUT_MapSetKeyValue(poiVillageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.HIDDEN)
    SetEntityWaypointIconState(poiVillageEntity, allyData.id, POI_WAYPOINT_ICON_STATE.HIDDEN)
    OUTPUT_AnnounceSequence(allyData.message.unlockSequence) // sequence for unlock
    UnlockJournalEntry(allyData.journalUnlock) //not in the sequence, but it seems to play afterwards
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, allyData.battleViewUnlock, 1, false) // unlock battle view

    // We set the ally exited village so that VO triggers properly in poi_ally_respawn, since it expects the ally to leave a "village"
    OUTPUT_SetGlobalVariable(GetPoiAllyData(allyData.respawnId).global.allyExitedVillage, 1)
}

SNIPPET_LocalTimer("lt_delayed_poi_ally_postcinematic_vo", (payload) => {
    const allyData = poiAllies[payload.string]
    const poiAlly = QUERY_GetEntitiesWithTags([allyData.tag.allyBuilding])
    PlayPresentationActionToClosePlayers(allyData.voiceOvers.postCinematic, poiAlly)
})

// ===================================================

// Init =================================

const setupPoiAllies = () => {
    for (const key in poiAllies) {
        const allyData = poiAllies[key]

        LISTENFOR_VillageGenerated({
            snippet: "vg_poi_ally",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: allyData.factionName,
            payloadString: allyData.tag.cardTag
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_poi_ally",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [allyData.tag.allyBuilding],
            factionName: allyData.factionName,
            payloadString: allyData.id
        })
        LISTENFOR_CinematicEvent({
            snippet: "ce_despawn_ally_entity",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: allyData.cinematic.despawnEvent,
            payloadString: allyData.id
        })
        LISTENFOR_CinematicFinished({
            snippet: "cf_ally_outro_cinematic",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: allyData.cinematic.outro,
            payloadString: allyData.id
        })
    }
    LISTENFOR_CinematicEvent({
        snippet: "ce_change_ally_04_behavior",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "change_ally_04_behavior"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ev_unlock_ally_missing_pieces",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "unlock_ally_missing_pieces"
    })
}

// This previously used the poiAlliesMode game rule
SNIPPET_InheritsFromGameMode("campaign", () => {
    setupPoiAllies()
})

SNIPPET_InheritsFromGameMode("editor", () => {
    setupPoiAllies()
})

SNIPPET_SpawnedBuildableCallback("ally04InteractionBeamComplete", (buildableEntity) => {
    OUTPUT_AddTag(buildableEntity, poiAllies.poiAlly04Val.tag.interactionBeam)
})

// ===================================================

// VG =================================

SNIPPET_VillageGenerated("vg_poi_ally", (villageId, payload) => {
    _PoiAllyBuildVillage(villageId, payload.string)
})

// ===================================================

// BC ================================

SNIPPET_BuildingComplete("bc_poi_ally", (buildingCompleteEntity, payload) => {
    _PoiAllyHandleBuildingComplete(buildingCompleteEntity, payload.string)
    Once()
})
// ===================================================

//SPE ================================

// Narrative VO Snippet - Golem - Giant - First encounter proximity VO
SNIPPET_SpatialPartitionEntered("spe_poi_trigger_poi_ally_proximity_VO", (triggerEntity, intruderEntity, payload) => {
    const allyData = poiAllies[payload.string]
    if (!IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A)) {
        PlayPresentationActionToClosePlayers(allyData.voiceOvers.golemProximity, intruderEntity)
    } else {
        OUTPUT_Announce(allyData.message.bodyproximity, [])
    }
    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

// Narrative VO Snippet - Golem - Giant - First encounter dialogue set
SNIPPET_SpatialPartitionEntered("spe_poi_trigger_poi_ally_intro", (_triggerEntity, intruderEntity, payload) => {
    const allyData = poiAllies[payload.string]
    if (!IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A)) {
        if (IsCurrentAct(ACTS.ACT_1A) || IsCurrentAct(ACTS.ACT_1B)) {
            if (DoOnce(allyData.global.playedDiscoveredAct1)) {
                PlayPresentationActionToClosePlayers(poiAlliesVal.voiceOvers.golemDiscoveredAct1, intruderEntity)
                IncrementGlobal(poiAlliesVal.global.discoveredFirsts)
                IncrementGlobal(poiAlliesVal.global.foundInAct1)
            }
        } else if (IsCurrentAct(ACTS.ACT_2) && QUERY_GetTeamResource(TEAM_BLUE, "unlock_poi_golem_resource") > 0) {
            PlayPresentationActionToClosePlayers(allyData.voiceOvers.intro, intruderEntity)

            LISTENFOR_PlayerInteracted({
                snippet: "pi_poi_ally",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: [allyData.tag.brokenBody],
                payloadString: payload.string
            })
            Once()
        } else if (DoOnce(allyData.global.playedDiscoveredAct2)) {
            const voiceOver = QUERY_GetGlobalVariable(poiAlliesVal.global.foundInAct1) === 0 ? poiAlliesVal.voiceOvers.golemDiscoveredAct2 : poiAlliesVal.voiceOvers.golemDiscoveredAct2AfterFoundInAct1
            PlayPresentationActionToClosePlayers(voiceOver, intruderEntity)
            OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, allyData.buildUnlock, 1, false)
        }
    } else {
        OUTPUT_Announce(allyData.message.approached, [])
        LISTENFOR_PlayerInteracted({
            snippet: "pi_poi_ally",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [allyData.tag.brokenBody],
            payloadString: payload.string
        })
        Once()
    }
})

SNIPPET_SpatialPartitionEntered("spe_poi_ally_question_mark_icon_conditional", (_triggerEntity, _intruderEntity, payload) => {
    const allyData = poiAllies[payload.string]
    const villageEntity = FILTER_ByFactionName(QUERY_GetAllVillages(), allyData.factionName)
    if (IsCurrentAct(ACTS.ACT_1A) || IsCurrentAct(ACTS.ACT_1B)) {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.VISIBLE)
    }
    SetEntityWaypointIconState(villageEntity, allyData.id, POI_WAYPOINT_ICON_STATE.VISIBLE)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_poi_ally_reveal_question_mark_icon", (_triggerEntity, _intruderEntity, payload) => {
    _PoiAllyRevealQuestionMark(payload.string)
    Once()
})
// ===================================================

//PI ================================

SNIPPET_PlayerInteracted("pi_poi_ally", (playerEntity, interactedEntity, payload) => {
    const allyData = poiAllies[payload.string]
    _PoiAllyHandleInteract(allyData, playerEntity, interactedEntity)
    Once()
})
// ===================================================

//CE & CF ================================

SNIPPET_CinematicEvent("ce_despawn_ally_entity", (payload) => {
    const allyData = poiAllies[payload.string]
    OUTPUT_DespawnEntities(QUERY_GetEntitiesWithTags([allyData.tag.cinematicEntity0]))
    OUTPUT_DespawnEntities(QUERY_GetEntitiesWithTags([allyData.tag.cinematicEntity1]))
    //Poially01 still has one more
    if (payload.string === poiAllies.poiAlly01Val.id) {
        OUTPUT_DespawnEntities(QUERY_GetEntitiesWithTags([allyData.tag.cinematicEntity2]))
    }
})

SNIPPET_CinematicFinished("cf_ally_outro_cinematic", (payload) => {
    _PoiAllyHandleCinematicOutro(payload.string)
})

SNIPPET_CinematicEvent("ce_change_ally_04_behavior", () => {
    const partBuildable = QUERY_GetEntitiesWithTags(["shield_golem_body"])
    OUTPUT_SetBehavior(partBuildable, poiAllies.poiAlly04Val.behaviors.idleNoFeather)
})

// ===================================================

//EE ================================

SNIPPET_ExternalEvent("ev_unlock_ally_missing_pieces", () => {
    const randomPlayer = RandomEntity(GetAllPlayers())
    //Ally 01
    OUTPUT_AddOrRemoveResource(randomPlayer, "poi_fallen_warrior_left_limb", 1, false)
    OUTPUT_AddOrRemoveResource(randomPlayer, "poi_fallen_warrior_right_limb", 1, false)
    OUTPUT_AddOrRemoveResource(randomPlayer, "unlock_quest_poi_ally_01_piece_01", 1, false)
    OUTPUT_AddOrRemoveResource(randomPlayer, "unlock_quest_poi_ally_01_piece_02", 1, false)
    OUTPUT_SetGlobalVariable("poi_fallen_warrior_acquired_both_limbs", 1)
    //Ally 02
    OUTPUT_SetGlobalVariable("poi_ally_02_acquired_piece", 1)
    OUTPUT_AddOrRemoveResource(randomPlayer, "unlock_quest_poi_ally_02", 1, false)
    //Ally 04
    OUTPUT_SetGlobalVariable("poi_ally_04_acquired_piece", 1)
    OUTPUT_AddOrRemoveResource(randomPlayer, "unlock_quest_poi_ally_04", 1, false)
    //Ally 05
    OUTPUT_SetGlobalVariable("poi_ally_05_acquired_piece", 1)
    OUTPUT_AddOrRemoveResource(randomPlayer, "unlock_quest_poi_ally_05", 1, false)
    //Ally 06
    OUTPUT_SetGlobalVariable("poi_ally_06_acquired_piece", 1)
    OUTPUT_AddOrRemoveResource(randomPlayer, "unlock_quest_poi_ally_06", 1, false)
    //Ally 07
    OUTPUT_SetGlobalVariable("poi_ally_07_acquired_piece", 1)
    OUTPUT_AddOrRemoveResource(randomPlayer, "unlock_quest_poi_ally_07", 1, false)
})
