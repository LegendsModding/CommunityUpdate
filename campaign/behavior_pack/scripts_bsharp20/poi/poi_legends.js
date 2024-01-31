const poiLegends = {
    poiLegendDragonRedVal: {
        id: "poiLegendDragonRedVal",
        triggerVolumeTag: "poi_legend_dragon_red_tv",
        villageArchetype: "badger:poi_legend_dragon_red_village",
        factionName: "faction.poi.legend.dragon.red",
        journalUnlock: JOURNAL_UNLOCKS.LEGEND_DRAGON_RED,
        buildUnlock: "unlock_poi_legend_dragon_red",
        battleViewUnlock: "unlock_battle_view_dragon_red",
        message: {
            approached: "poiLegendDragonRed_approached",
            completed: "poiLegendDragonRed_completed",
            unlockSequence: "poiLegendDragonRed_unlock_sequence"
        },
        global: {
            allCompleted: "poi_legend_dragon_red_completed",
            keyAction: TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES.POI_LEGEND_DRAGON_RED,
            playedDiscoveredAct1: "gv_played_discovered_act1_legend_dragon_red",
            playedDiscoveredAct2: "gv_played_discovered_act2_legend_dragon_red"
        },
        tag: {
            sleepingLegend: "dragon_red_nis",
            cinematicEntity0: "dragon_red",
            legendBuilding: "poi_legend_dragon_red",
            cardTag: "poiLegendDragonRed"
        },
        voiceOvers: {
            dragonRedProximity: "poi_legend_dragon_red_proximity",
            intro: "poi_legend_dragon_red_intro",
            postCinematic: "poi_legend_dragon_red_outro"
        },
        cinematic: {
            outro: "leg01_c01_outro",
            despawnEvent: "despawn_legend_dragon_red_entity"
        },
        bc: {
            buildingTag: "poiLegendDragonRed",
            spatialTrigger: "badger:spatial_trigger_poi_legend_dragon_red_intro",
            presentationAudio: "legend_dragon_red_body_audio"
        },
        timeToInteract: 16
    },
    poiLegendKillerRabbitVal: {
        id: "poiLegendKillerRabbitVal",
        triggerVolumeTag: "poi_legend_killer_rabbit_tv",
        villageArchetype: "badger:poi_legend_killer_rabbit_village",
        factionName: "faction.poi.legend.killer_rabbit",
        journalUnlock: JOURNAL_UNLOCKS.LEGEND_KILLER_RABBIT,
        buildUnlock: "unlock_poi_legend_killer_rabbit",
        battleViewUnlock: "unlock_battle_view_killer_rabbit",
        message: {
            approached: "poiLegendKillerRabbit_approached",
            completed: "poiLegendKillerRabbit_completed",
            unlockSequence: "poiLegendKillerRabbit_unlock_sequence"
        },
        global: {
            allCompleted: "poi_legend_killer_rabbit_completed",
            keyAction: TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES.POI_LEGEND_KILLER_RABBIT,
            playedDiscoveredAct1: "gv_played_discovered_act1_legend_killer_rabbit",
            playedDiscoveredAct2: "gv_played_discovered_act2_legend_killer_rabbit"
        },
        tag: {
            sleepingLegend: "killer_rabbit_nis",
            cinematicEntity0: "killer_rabbit",
            legendBuilding: "poi_legend_killer_rabbit",
            cardTag: "poiLegendKillerRabbit"
        },
        voiceOvers: {
            killerRabbitProximity: "poi_legend_killer_rabbit_proximity",
            intro: "poi_legend_killer_rabbit_intro",
            postCinematic: "poi_legend_killer_rabbit_outro"
        },
        cinematic: {
            outro: "leg02_c01_outro",
            despawnEvent: "despawn_legend_killer_rabbit_entity"
        },
        bc: {
            buildingTag: "poiLegendKillerRabbit",
            spatialTrigger: "badger:spatial_trigger_poi_legend_killer_rabbit_intro",
            presentationAudio: "legend_killer_rabbit_body_audio"
        },
        timeToInteract: 16
    }
}

// ===================================================

// Helpers =================================

const _PoiLegendBuildVillage = (villageId, legendCard) => {
    const baseDeck = DECK_Empty()

    const initialZone = ZonesCard("addPoiZones", 1)
    DECK_PutOnBottomOf(initialZone, baseDeck)
    const layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_PutOnBottomOf(layer, baseDeck)
    const center = BuildableCard(legendCard)
    DECK_MultiplyByMultipleRules(center, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facingEast"), ForceBuildingPlacementCard("forceBuildingPlacement")])
    DECK_PutOnBottomOf(center, baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}

const _PoiLegendHandleBuildingComplete = (buildingCompleteEntity, legendId) => {
    const legendData = poiLegends[legendId]
    const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEntity)
    OUTPUT_AddTag(buildingCompleteEntity, legendData.bc.buildingTag)

    const legendTV = SpawnTriggerVolume(buildingCompleteEntity, buildingCompleteEntity, legendData.bc.spatialTrigger, TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    OUTPUT_AddTag(legendTV, legendData.triggerVolumeTag)
    let te = legendTV

    OUTPUT_TriggerPresentationEvent(buildingCompleteEntity, legendData.bc.presentationAudio)

    _PoiLegendTriggerVolumesListeners(buildingCompleteEntity, villageId, legendData.id, te)
}

const _PoiLegendTriggerVolumesListeners = (buildingCompleteEntity, villageId, legendId, te) => {
    const bodyProximityTV = SpawnTriggerVolume(buildingCompleteEntity, buildingCompleteEntity, "badger:spatial_trigger_poi_legend_proximity", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_trigger_poi_legend_proximity_VO",
        ownerVillageId: villageId,
        triggerEntity: bodyProximityTV,
        payloadString: legendId
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_trigger_poi_legend_intro",
        ownerVillageId: villageId,
        triggerEntity: te,
        payloadEntities: buildingCompleteEntity,
        payloadString: legendId
    })

    const poiLegendShowIconTV = SpawnTriggerVolume(buildingCompleteEntity, buildingCompleteEntity, "badger:spatial_trigger_icon_reveal", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_legend_reveal_question_mark_icon",
        ownerVillageId: villageId,
        triggerEntity: poiLegendShowIconTV,
        payloadString: legendId
    })
}

const _PoiLegendHandleInteract = (legendData, playerEntity, interactedEntity) => {

    const player = playerEntity
    const sleepingLegend = QUERY_GetEntitiesWithTags([legendData.tag.legendBuilding])

    OUTPUT_TriggerPresentationEvent(interactedEntity, "on_legend_interact_confirm")
    OUTPUT_TriggerCinematic(legendData.cinematic.outro, OPER_Append(sleepingLegend, player))

    TelemetrySendKeyActionCompletedEvent(playerEntity, legendData.global.keyAction)
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.POI_LEGEND_PROGRESS.globalVariable)
}

const _PoiLegendRevealQuestionMark = (legendId) => {
    const legendData = poiLegends[legendId]
    const villageEntity = FILTER_ByFactionName(QUERY_GetAllVillages(), legendData.factionName)
    OUTPUT_AddTag(villageEntity, TAG_REVEALED_POI)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.STATE, MAP_ICON_STATE.VISITED)
    SetEntityWaypointIconState(villageEntity, legendData.id, POI_WAYPOINT_ICON_STATE.REVEALED)
}

const _PoiLegendHandleCinematicOutro = (legendId) => {
    const legendData = poiLegends[legendId]
    const poiLegend = QUERY_GetEntitiesWithTags([legendData.tag.legendBuilding])
    if (!IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A)) {
        LISTENFOR_LocalTimer({ //delay the presentation action until afer HUD sequence
            snippet: "lt_delayed_poi_legend_postcinematic_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 13, //enough time for Unlock center notification + Bonus Info side panel + lore unlock sequence
            payloadString: legendId
        })
    } else {
        OUTPUT_Announce(legendData.message.completed, [])
    }
    OUTPUT_AddOrSubtractObjectiveProgress("objectives.legendsCompleted", 1)
    OUTPUT_SetGlobalVariable(legendData.global.allCompleted, 1)
    IncrementGlobal(INVASION_PHASE_STATE.LEGENDS_COMPLETED_COUNT)
    //Cleanup our trigger volume entities
    OUTPUT_DespawnEntities(QUERY_GetEntitiesWithTags([legendData.triggerVolumeTag]))
    const poiVillageEntity = FILTER_ByFactionName(QUERY_GetAllVillages(), legendData.factionName)
    OUTPUT_MapSetKeyValue(poiVillageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.HIDDEN)
    SetEntityWaypointIconState(poiVillageEntity, legendData.id, POI_WAYPOINT_ICON_STATE.HIDDEN)
    OUTPUT_AnnounceSequence(legendData.message.unlockSequence) // sequence for unlock
    UnlockJournalEntry(legendData.journalUnlock) //not in the sequence, but it seems to play afterwards
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, legendData.battleViewUnlock, 1, false) // unlock battle view

}

SNIPPET_LocalTimer("lt_delayed_poi_legend_postcinematic_vo", (payload) => {
    const legendData = poiLegends[payload.string]
    const poiLegend = QUERY_GetEntitiesWithTags([legendData.tag.legendBuilding])
    PlayPresentationActionToClosePlayers(legendData.voiceOvers.postCinematic, poiLegend)
})

// ===================================================

// Init =================================

const setupPoiLegends = () => {
    for (const key in poiLegends) {
        const legendData = poiLegends[key]

        LISTENFOR_VillageGenerated({
            snippet: "vg_poi_legend",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: legendData.factionName,
            payloadString: legendData.tag.cardTag
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_poi_legend",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [legendData.tag.legendBuilding],
            factionName: legendData.factionName,
            payloadString: legendData.id
        })
        LISTENFOR_CinematicEvent({
            snippet: "ce_despawn_legend_entity",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: legendData.cinematic.despawnEvent,
            payloadString: legendData.id
        })
        LISTENFOR_CinematicFinished({
            snippet: "cf_legend_outro_cinematic",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: legendData.cinematic.outro,
            payloadString: legendData.id
        })
    }
}

// This previously used the poiAlliesMode game rule
SNIPPET_InheritsFromGameMode("campaign", () => {
    setupPoiLegends()
})

SNIPPET_InheritsFromGameMode("editor", () => {
    setupPoiLegends()
})

// ===================================================

// VG =================================

SNIPPET_VillageGenerated("vg_poi_legend", (villageId, payload) => {
    _PoiLegendBuildVillage(villageId, payload.string)
})

// ===================================================

// BC ================================

SNIPPET_BuildingComplete("bc_poi_legend", (buildingCompleteEntity, payload) => {
    _PoiLegendHandleBuildingComplete(buildingCompleteEntity, payload.string)
    Once()
})
// ===================================================

//SPE ================================

// Narrative VO Snippet - Golem - Giant - First encounter proximity VO
SNIPPET_SpatialPartitionEntered("spe_poi_trigger_poi_legend_proximity_VO", (triggerEntity, intruderEntity, payload) => {
    const legendData = poiLegends[payload.string]
    if (!IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A)) {
        PlayPresentationActionToClosePlayers(legendData.voiceOvers.legendProximity, intruderEntity)
    } else {
        OUTPUT_Announce(legendData.message.bodyproximity, [])
    }
    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

// Narrative VO Snippet - Golem - Giant - First encounter dialogue set
SNIPPET_SpatialPartitionEntered("spe_poi_trigger_poi_legend_intro", (_triggerEntity, intruderEntity, payload) => {
    const legendData = poiLegends[payload.string]
    if (!IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A)) {
        if (IsCurrentAct(ACTS.ACT_1A) || IsCurrentAct(ACTS.ACT_1B)) {
            if (DoOnce(legendData.global.playedDiscoveredAct1)) {
                PlayPresentationActionToClosePlayers(poiLegendsVal.voiceOvers.legendDiscoveredAct1, intruderEntity)
                IncrementGlobal(poiLegendsVal.global.discoveredLegends)
                IncrementGlobal(poiLegendsVal.global.foundInAct1)
            }
        } else if (IsCurrentAct(ACTS.ACT_2) && QUERY_GetTeamResource(TEAM_BLUE, "unlock_poi_legend_resource") > 0) {
            PlayPresentationActionToClosePlayers(legendData.voiceOvers.intro, intruderEntity)

            LISTENFOR_PlayerInteracted({
                snippet: "pi_poi_legend",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: [legendData.tag.sleepingLegend],
                payloadString: payload.string
            })
            Once()
        } else if (DoOnce(legendData.global.playedDiscoveredAct2)) {
            const voiceOver = QUERY_GetGlobalVariable(poiLegendsVal.global.foundInAct1) === 0 ? poiLegendsVal.voiceOvers.legendDiscoveredAct2 : poiLegendsVal.voiceOvers.legendDiscoveredAct2AfterFoundInAct1
            PlayPresentationActionToClosePlayers(voiceOver, intruderEntity)
            OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, legendData.buildUnlock, 1, false)
        }
    } else {
        OUTPUT_Announce(legendData.message.approached, [])
        LISTENFOR_PlayerInteracted({
            snippet: "pi_poi_legend",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [legendData.tag.sleepingLegend],
            payloadString: payload.string
        })
        Once()
    }
})

SNIPPET_SpatialPartitionEntered("spe_poi_legend_question_mark_icon_conditional", (_triggerEntity, _intruderEntity, payload) => {
    const legendData = poiLegends[payload.string]
    const villageEntity = FILTER_ByFactionName(QUERY_GetAllVillages(), legendData.factionName)
    if (IsCurrentAct(ACTS.ACT_1A) || IsCurrentAct(ACTS.ACT_1B)) {
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.VISIBLE)
    }
    SetEntityWaypointIconState(villageEntity, legendData.id, POI_WAYPOINT_ICON_STATE.VISIBLE)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_poi_legend_reveal_question_mark_icon", (_triggerEntity, _intruderEntity, payload) => {
    _PoiLegendRevealQuestionMark(payload.string)
    Once()
})
// ===================================================

//PI ================================

SNIPPET_PlayerInteracted("pi_poi_legend", (playerEntity, interactedEntity, payload) => {
    const legendData = poiLegends[payload.string]
    _PoiLegendHandleInteract(legendData, playerEntity, interactedEntity)
    Once()
})
// ===================================================

//CE & CF ================================

SNIPPET_CinematicEvent("ce_despawn_legend_entity", (payload) => {
    const legendData = poiLegends[payload.string]
    OUTPUT_DespawnEntities(QUERY_GetEntitiesWithTags([legendData.tag.cinematicEntity0]))
})

SNIPPET_CinematicFinished("cf_legend_outro_cinematic", (payload) => {
    _PoiLegendHandleCinematicOutro(payload.string)
})

