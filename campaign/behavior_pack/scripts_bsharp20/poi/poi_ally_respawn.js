const poiAlliesSet = {
    ally01: {
        id: "ally01",
        allyIdentifier: "badger:mob_fallen_warrior",
        allySpawnPosition: "metadata_spawn_position_ally_01",
        global: {
            isAllyDead: "gv_poi_ally_01_dead",
            allyExitedVillage: "gv_poi_ally_01_exited_village"
        },
        tag: {
            ally: "fallen_warrior"
        }
    },
    ally02: {
        id: "ally02",
        allyIdentifier: "badger:mob_golem_carrier",
        allySpawnPosition: "metadata_spawn_position_ally_02",
        global: {
            isAllyDead: "gv_poi_ally_02_dead",
            allyExitedVillage: "gv_poi_ally_02_exited_village"
        },
        tag: {
            ally: "carrier_golem"
        }
    },
    ally04: {
        id: "ally04",
        allyIdentifier: "badger:mob_golem_shield",
        allySpawnPosition: "metadata_spawn_position_ally_04",
        global: {
            isAllyDead: "gv_poi_ally_04_dead",
            allyExitedVillage: "gv_poi_ally_04_exited_village"
        },
        tag: {
            ally: "shield_golem"
        }
    },
    ally05: {
        id: "ally05",
        allyIdentifier: "badger:mob_golem_sniper",
        allySpawnPosition: "metadata_spawn_position_ally_05",
        global: {
            isAllyDead: "gv_poi_ally_05_dead",
            allyExitedVillage: "gv_poi_ally_05_exited_village"
        },
        tag: {
            ally: "sniper"
        }
    },
    ally06: {
        id: "ally06",
        allyIdentifier: "badger:mob_golem_drill",
        allySpawnPosition: "metadata_spawn_position_ally_06",
        global: {
            isAllyDead: "gv_poi_ally_06_dead",
            allyExitedVillage: "gv_poi_ally_06_exited_village"
        },
        tag: {
            ally: "drill_golem"
        }
    },
    ally07: {
        id: "ally07",
        allyIdentifier: "badger:mob_golem_grappler",
        allySpawnPosition: "metadata_spawn_position_ally_07",
        global: {
            isAllyDead: "gv_poi_ally_07_dead",
            allyExitedVillage: "gv_poi_ally_07_exited_village"
        },
        tag: {
            ally: "grappler_golem"
        }
    }
}

const GetPoiAllyData = (allyId) => {
    return GetChild(poiAlliesSet, allyId)
}

const poiAlliesVal = {
    fountainTags: [TAG_VILLAGE_FOUNTAIN, TAG_HQ],
    outpostTags: [TAG_OUTPOST_STRUCTURE],
    allySpawnPosition: "metadata_ally_spawn_position",
    allyDiedFirstTime: "gv_ally_died_first_time",
    playerRediscoveredAlly: "gv_player_rediscovered_ally",
    genericAllyLeftBehindMessageCooldown: "gv_generic_ally_left_behind_message_cooldown",
    genericAllyDiedMessageCooldown: "gv_generic_ally_died_message_cooldown",
    genericAllyLeftBehindMessage: "generic_ally_left_behind",
    allyRespawnCooldown: "gv_ally_respawn_cooldown",
    distanceFromSpawnPoint: 200,
    global: {
        discoveredFirsts: "gv_has_discovered_first",
        foundInAct1: "gv_discovered_first_act1"
    },
    voiceOvers: {
        cooldown: 30, //cooldown on VO and messages when Firsts die or are despawned
        distanceToPlayDeathVO: 250, //Max distance player can be from First for them to hear their firstDeath and subsequentDeaths VO. Players beyond this range will not hear it.
        distanceToPlayLeftBehindVO: 500, //Max distance player can be from First for them to hear their golemLeftBehind VO. Players beyond this range will not hear it.
        golemDiscoveredAct1: "poi_golem_discovered_act1",
        golemDiscoveredAct2: "poi_golem_discovered_act2",
        golemDiscoveredAct2AfterFoundInAct1: "poi_golem_discovered_act2_2",
        golemLeftBehind: "poi_leave_behind_1", //VO for when golems despawn
        golemRediscovered: "poi_leave_behind_2", //VO that plays when golems are rediscovered at a village after respawning
        firstDeath: "poi_golem_first_death", //VO that plays first time a golem dies
        subsequentDeaths: "poi_golem_subsequent_death" //VO that plays everytime EXCEPT the first time they die, much shorter
    }
}

const _setupPoiRespawn = () => {
    LISTENFOR_BuildingComplete({
        snippet: "bc_setup_for_ally_respawn",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [TAG_WELL_OF_FATE]
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_setup_for_ally_respawn",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: poiAlliesVal.fountainTags
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_setup_for_ally_respawn",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: poiAlliesVal.outpostTags
    })

    Object.keys(poiAlliesSet).forEach((ally) => {
        LISTENFOR_EntitySpawned({
            snippet: "es_ally_spawned",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [poiAlliesSet[ally].tag.ally],
            payloadString: poiAlliesSet[ally].id
        })
    })
}

SNIPPET_InheritsFromGameMode("campaign", () => {
    _setupPoiRespawn()
})
SNIPPET_InheritsFromGameMode("editor", () => {
    _setupPoiRespawn()
})

SNIPPET_EntitySpawned("es_ally_spawned", (entitySpawned, payload) => {
    const allyData = poiAlliesSet[payload.string]
    OUTPUT_SetGlobalVariable(allyData.global.isAllyDead, 0)
    OUTPUT_SetPopCapped(entitySpawned, false)

    LISTENFOR_EntitiesAmountDestroyed({
        snippet: "ed_ally_died",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        entities: entitySpawned,
        amount: 1,
        payloadString: allyData.id
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "npced_ally_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        entities: entitySpawned,
        despawned: false,
        payloadString: allyData.id
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "npced_ally_despawned",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        entities: entitySpawned,
        despawned: true,
        payloadString: allyData.id
    })
})

SNIPPET_EntitiesAmountDestroyed("ed_ally_died", (payload) => {
    const allyData = poiAlliesSet[payload.string]
    OUTPUT_SetGlobalVariable(allyData.global.isAllyDead, 1)
    Once()
})

const _AllyLeftVO = (destroyedEntity) => {
    if (IsCurrentAct(ACTS.ACT_3A)) return //Do not play VO if in act 3

    if (DoOnce(poiAlliesVal.genericAllyLeftBehindMessageCooldown)) {
        PlayPresentationActionToClosePlayers(poiAlliesVal.voiceOvers.golemLeftBehind, destroyedEntity, poiAlliesVal.voiceOvers.distanceToPlayLeftBehindVO)
        OUTPUT_Announce(poiAlliesVal.genericAllyLeftBehindMessage, [])
        LISTENFOR_LocalTimer({
            snippet: "lt_reset_generic_ally_left_message_cooldown",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: poiAlliesVal.voiceOvers.cooldown
        })
    }
}

SNIPPET_LocalTimer("lt_reset_generic_ally_left_message_cooldown", () => {
    OUTPUT_SetGlobalVariable(poiAlliesVal.genericAllyLeftBehindMessageCooldown, 0)
    Once()
})

SNIPPET_NonPopCappedEntityDestroyed("npced_ally_despawned", (destroyedEntity, payload) => {
    if (QUERY_GetGlobalVariable(GetChild(poiAlliesSet, payload.string).global.allyExitedVillage) !== 0) {
        _AllyLeftVO(destroyedEntity)
    }
    Once()
})

const _AllyDiedVO = (destroyedEntity) => {
    if (IsCurrentAct(ACTS.ACT_3A)) return //Do not play VO if in act 3

    if (DoOnce(poiAlliesVal.genericAllyDiedMessageCooldown)) {
        if (DoOnce(poiAlliesVal.allyDiedFirstTime)) {
            PlayPresentationActionToClosePlayers(poiAlliesVal.voiceOvers.firstDeath, destroyedEntity, poiAlliesVal.voiceOvers.distanceToPlayDeathVO)
        } else {
            PlayPresentationActionToClosePlayers(poiAlliesVal.voiceOvers.subsequentDeaths, destroyedEntity, poiAlliesVal.voiceOvers.distanceToPlayDeathVO)
        }
        LISTENFOR_LocalTimer({
            snippet: "lt_reset_generic_ally_died_cooldown",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: poiAlliesVal.voiceOvers.cooldown
        })
    }
}

SNIPPET_LocalTimer("lt_reset_generic_ally_died_cooldown", () => {
    OUTPUT_SetGlobalVariable(poiAlliesVal.genericAllyDiedMessageCooldown, 0)
    Once()
})

SNIPPET_NonPopCappedEntityDestroyed("npced_ally_destroyed", (destroyedEntity, _payload) => {
    _AllyDiedVO(destroyedEntity)
    Once()
})

SNIPPET_BuildingComplete("bc_setup_for_ally_respawn", (buildingCompleteEG, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEG)
    // note: if this is too short we can use padding: 130 (close to what it was previously)
    const allyRespawnTV = OUTPUT_CreateVillageTriggerVolume(villageId, 0, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_ally_respawn",
        ownerVillageId: villageId,
        triggerEntity: allyRespawnTV,
        payloadEntities: buildingCompleteEG
    })

    LISTENFOR_EntityEnabled({
        snippet: "ee_ally_reenable",
        ownerVillageId: villageId,
        enabledEntity: buildingCompleteEG
    })

    const playerRediscoveredAllyTV = SpawnTriggerVolume(buildingCompleteEG, buildingCompleteEG, "badger:spatial_trigger_generic_small", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_ally_rediscovered",
        ownerVillageId: villageId,
        triggerEntity: playerRediscoveredAllyTV
    })

    const poiAllyExitedVillageTV = OUTPUT_CreateVillageTriggerVolume(villageId, 0, ["poi_golem"], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionExited({
        snippet: "spe_ally_exited_village",
        ownerVillageId: villageId,
        triggerEntity: poiAllyExitedVillageTV
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_ally_entered_village",
        ownerVillageId: villageId,
        triggerEntity: poiAllyExitedVillageTV
    })
})

const _tryRespawnAllies = (villageId, parentEntity) => {
    if (QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) === 0 && QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) > 0 && HasEntities(FILTER_ByFactionName([GetVillageEntityFromID(villageId)], [WELL_OF_FATE]))) {
        return
    }

    if (QUERY_IsVillageOccupied(villageId)) {
        return
    }

    if (QUERY_GetGlobalVariable(poiAlliesVal.allyRespawnCooldown)) {
        return
    }

    OUTPUT_SetGlobalVariable(poiAlliesVal.allyRespawnCooldown, 1)
    LISTENFOR_LocalTimer({
        snippet: "lt_village_respawn_cooldown",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 2
    })

    const genericSpawnPosition = QUERY_GetChildEntitiesWithInstanceName(parentEntity, poiAlliesVal.allySpawnPosition)

    Object.keys(poiAlliesSet).forEach((ally) => {
        if (QUERY_GetGlobalVariable(poiAlliesSet[ally].global.isAllyDead) === 1) {
            const spawnPosition = QUERY_GetChildEntitiesWithInstanceName(parentEntity, poiAlliesSet[ally].allySpawnPosition)
            SpawnEntitiesAt(HasEntities(spawnPosition) ? spawnPosition : genericSpawnPosition, poiAlliesSet[ally].allyIdentifier, 1, TEAM_BLUE)
            OUTPUT_SetGlobalVariable(poiAlliesSet[ally].global.allyExitedVillage, 0)
        }
    })
}

// cooldown for trying to respawn firsts to try and block double spawning them in coop games
// I didnt move the isAllyDead global variable setting to before the entity spawned listener as that would
// allow the possibility to softlock the firsts from respawning if something happened during the spawn call
// that caused it to fail to spawn the first
SNIPPET_LocalTimer("lt_village_respawn_cooldown", () => {
    OUTPUT_SetGlobalVariable(poiAlliesVal.allyRespawnCooldown, 0)
})

SNIPPET_SpatialPartitionEntered("spe_ally_respawn", (_triggerEntity, _intruderEntity, payload) => {
    const villageId = payload.ownerVillageId
    const parentEntity = payload.entities
    _tryRespawnAllies(villageId, parentEntity)
})

SNIPPET_SpatialPartitionExited("spe_ally_exited_village", (_triggerEntity, exitingEntity) => {
    Object.keys(poiAlliesSet).every((ally) => {
        if (QUERY_HasTags(exitingEntity, [poiAlliesSet[ally].tag.ally])) {
            OUTPUT_SetGlobalVariable(poiAlliesSet[ally].global.allyExitedVillage, 1)
            return false
        }
        return true
    })
})

SNIPPET_SpatialPartitionEntered("spe_ally_entered_village", (_triggerEntity, exitingEntity) => {
    Object.keys(poiAlliesSet).every((ally) => {
        if (QUERY_HasTags(exitingEntity, [poiAlliesSet[ally].tag.ally])) {
            OUTPUT_SetGlobalVariable(poiAlliesSet[ally].global.allyExitedVillage, 0)
            return false
        }
        return true
    })
})

SNIPPET_EntityEnabled("ee_ally_reenable", (entity, payload) => {
    const villageId = payload.ownerVillageId
    _tryRespawnAllies(villageId, entity)
})

SNIPPET_SpatialPartitionEntered("spe_ally_rediscovered", (triggerEntity, intruderEntity, _payload) => {
    if (IsCurrentAct(ACTS.ACT_3A)) return //Do not play VO if in act 3
    const allyDiedOnce = QUERY_GetGlobalVariable(poiAlliesVal.allyDiedFirstTime)
    const playerRediscoveredAlly = QUERY_GetGlobalVariable(poiAlliesVal.playerRediscoveredAlly)

    if (allyDiedOnce === 1 && playerRediscoveredAlly === 0) {
        IncrementGlobal(poiAlliesVal.playerRediscoveredAlly)
        PlayPresentationActionToClosePlayers(poiAlliesVal.voiceOvers.golemRediscovered, intruderEntity)
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
    }
    if (allyDiedOnce === 1 && playerRediscoveredAlly === 1) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
    }
})
