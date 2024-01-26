const poiWoFVal = {
    global: {
        hasVisited: "gv_well_of_fate_has_visited",
        hasLeft: "gv_well_of_fate_has_left",
        canPlayGreetingVO: "gv_well_of_fate_can_play_greeting_vo",
        canPlayLeavingVO: "gv_well_of_fate_can_play_leaving_vo",
        knowledgeHostDespawnedAtEpilogue: "gv_knowledge_host"
    },
    hosts: {
        knowledge: "knowledge",
        action: "action",
        foresight: "foresight"
    },
    act2_mobs: {
        global: "gv_act2_wof_mob_spawned",
        behaviorCooldown: 90,
        minSpawnRadius: 30,
        maxSpawnRadius: 70,
        mobData: [
            {
                archetype: MOB_ARCHETYPE.ZOMBIE,
                amount: 16,
                behavior: MOB_BEHAVIOUR_DICTIONARY.zombie.act2,
            },
            {
                archetype: MOB_ARCHETYPE.CREEPER,
                amount: 14,
                behavior: MOB_BEHAVIOUR_DICTIONARY.creeper.act2,
            },
            {
                archetype: MOB_ARCHETYPE.SKELETON,
                amount: 16,
                behavior: MOB_BEHAVIOUR_DICTIONARY.skeleton.act2,
            },
            {
                archetype: MOB_ARCHETYPE.SPIDER,
                amount: 16,
                behavior: MOB_BEHAVIOUR_DICTIONARY.spider.act2,
            },
            {
                archetype: MOB_ARCHETYPE.SLIME,
                amount: 16,
                behavior: MOB_BEHAVIOUR_DICTIONARY.slime.act2,
            },
            {
                archetype: MOB_ARCHETYPE.SILVERFISH,
                amount: 16,
                behavior: MOB_BEHAVIOUR_DICTIONARY.silverfish.act2,
            }
        ]
    },
    behaviour: {
        knowledge: {
            carefree: "badger:behavior_host_knowledge_carefree",
            guarded: "badger:behavior_host_knowledge_guarded",
            happy: "badger:behavior_host_knowledge_happy",
            sentinel: "badger:behavior_host_knowledge_sentinel"
        },
        action: {
            carefree: "badger:behavior_host_action_carefree",
            guarded: "badger:behavior_host_action_guarded",
            happy: "badger:behavior_host_action_happy",
            sentinel: "badger:behavior_host_action_sentinel"
        },
        foresight: {
            carefree: "badger:behavior_host_foresight_carefree",
            guarded: "badger:behavior_host_foresight_guarded",
            happy: "badger:behavior_host_foresight_happy",
            sentinel: "badger:behavior_host_foresight_sentinel"
        }
    },
    upgradesToTrack: [
        { tag: "increase_gather_build_cap", builtPresentationVO: "wofxp_increase_all_allays", playedFirstTime: "gv_wof_xp_gather_build_allay_max_played_first_time" },
        { tag: "increase_spawner_cap", builtPresentationVO: "wofxp_spawner_max", playedFirstTime: "gv_wof_xp_spawner_max_played_first_time" },
        { tag: "increase_starting_cap", builtPresentationVO: "wofxp_fatebank_upgrade", playedFirstTime: "gv_wof_xp_fatebank_upgrade_first_time" },
        { tag: "increase_lure_cap", builtPresentationVO: "wofxp_banner_upgrade", playedFirstTime: "gv_wof_xp_banner_upgrade" },
        { tag: "unlock_clear_nether", builtPresentationVO: "wofxp_clear_netherrack", playedFirstTime: "gv_wof_xp_clear_netherrack" },
        { tag: "unlock_gather_uncommon", builtPresentationVO: "wofxp_unlock_iron", playedFirstTime: "gv_wof_xp_unlock_iron" },
        { tag: "unlock_gather_rare", builtPresentationVO: "wofxp_unlock_diamond", playedFirstTime: "gv_wof_xp_unlock_diamond" },
        { tag: "unlock_gather_redstone", builtPresentationVO: "wofxp_unlock_redstone", playedFirstTime: "gv_wof_xp_unlock_redstone" },
        { tag: "unlock_gather_gold", builtPresentationVO: "wofxp_unlock_gold", playedFirstTime: "gv_wof_xp_unlock_gold" },
        { tag: "unlock_gather_coal", builtPresentationVO: "wofxp_gather_coal", playedFirstTime: "gv_wof_xp_gather_coal" },
        { tag: "unlock_poi_tower", builtPresentationVO: "wofxp_unlock_towers", playedFirstTime: "gv_wof_xp_unlock_towers" },
        { tag: "unlock_poi_golem", builtPresentationVO: "wofxp_unlock_firsts", playedFirstTime: "gv_wof_xp_unlock_first" },
        { tag: "unlock_linked_village_chests", builtPresentationVO: "wofxp_link_village_chests", playedFirstTime: "gv_wof_xp_link_village_chests" }
    ],
    hostBehaviorRefresherTimer: 3,
    setZonerToWildTeamFlag: 1,
    greetingCooldownTime: 60,
    leavingCooldownTime: 60,
    upgradeVODelay: 1.5,
    // Players within this distance of the wof will hear the greeting and leaving, even if they didnt trigger it.
    // Should be larger than the size of the trigger volume!
    greetingAudibleDistance: 300,
    leavingAudibleDistance: 300
}

const _SetHostsBehavior = (behavior, villageId) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const tagExcludeFilter = []

    const knowledgeHost = FILTER_ByTagFilter(villageEntities, ["host", poiWoFVal.hosts.knowledge], tagExcludeFilter)
    const actionHost = FILTER_ByTagFilter(villageEntities, ["host", poiWoFVal.hosts.action], tagExcludeFilter)
    const foresightHost = FILTER_ByTagFilter(villageEntities, ["host", poiWoFVal.hosts.foresight], tagExcludeFilter)

    const knowledgeHostData = [poiWoFVal.hosts.knowledge, knowledgeHost]
    const actionHostData = [poiWoFVal.hosts.action, actionHost]
    const foresightHostData = [poiWoFVal.hosts.foresight, foresightHost]
    const hosts = [knowledgeHostData, actionHostData, foresightHostData]

    if (behavior !== "default") {
        hosts.forEach((hostData) => {
            const host = hostData[1]
            if (HasEntities(host)) {
                OUTPUT_SetBehavior(host, poiWoFVal.behaviour[hostData[0]][behavior])
            }
        })
    } else {
        hosts.forEach((hostData) => {
            const host = hostData[1]
            if (HasEntities(host)) {
                OUTPUT_ResetBehavior(host)
            }
        })
    }
}

const _ControlHostBehaviour = (villageId) => {
    const playerDestroyedSecondBase = QUERY_GetGlobalVariable(GV_STARTED_ACT_1_B) > 0
    const playerDestroyedDarkBeaconBase = QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0

    if (playerDestroyedDarkBeaconBase) {
        const timeOfDay = QUERY_GetTimeOfDay()
        if (timeOfDay >= TIME_MIDNIGHT && timeOfDay < TIME_DAWN) {
            _SetHostsBehavior("sentinel", villageId)
        } else {
            _SetHostsBehavior("happy", villageId)
        }
    } else if (playerDestroyedSecondBase) {
        _SetHostsBehavior("guarded", villageId)
    } else {
        _SetHostsBehavior("default", villageId)
    }
}

SNIPPET_Bootstrap("", () => {
    LISTENFOR_VillageGenerated({
        snippet: "vg_zoner_xp_well_of_fate",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: WELL_OF_FATE
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_turn_smoke_on",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "smoke"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_turn_smoke_off",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "smoke_off"
    })
})

SNIPPET_ExternalEvent("ee_turn_smoke_on", () => {
    const villages = QUERY_GetAllAliveVillages()
    OUTPUT_MapSetKeyValue(villages, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_UNDER_ATTACK)
})

SNIPPET_ExternalEvent("ee_turn_smoke_off", () => {
    const villages = QUERY_GetAllAliveVillages()
    OUTPUT_MapSetKeyValue(villages, MAP_KEY.INVASION_ATTACK, MAP_INVASION_ATTACK.ABANDONED)
})

SNIPPET_VillageGenerated("vg_zoner_xp_well_of_fate", (villageId) => {
    const baseDeck = DECK_Empty()
    //this is the central zone - requireed for an actual center point
    //9 giuves us a perfect square
    const centerZone = ZonesCard("addZone", 1)
    DECK_PutOnBottomOf(centerZone, baseDeck)

    //layer of zones - perfect rings around the square - 6 feels like too many, reduce if possible
    const centerLayer = LayerOfZonesCard("addLayerOfZones", 2)
    DECK_PutOnBottomOf(centerLayer, baseDeck)

    //most important structure places first
    const wellOfFateDeck = BuildableCard("poiWellOfFate", 1)
    DECK_MultiplyByMultipleRules(wellOfFateDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facingSouth"), ForceBuildingPlacementCard("forceBuildingPlacement")])
    DECK_PutOnBottomOf(wellOfFateDeck, baseDeck)

    //North district
    const northDistrict = DistrictCard("district1")

    const northZones = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(northZones, [northDistrict, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    const northSatellite = BuildableCard("poiWellOfFatePylon", 1)
    DECK_MultiplyByMultipleRules(northSatellite, [northDistrict, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_MultiplyByMultipleRules(northDistrict, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    DECK_PutOnBottomOf(northDistrict, baseDeck)
    DECK_PutOnBottomOf(northZones, baseDeck)
    DECK_PutOnBottomOf(northSatellite, baseDeck)

    //East district
    const eastDistrict = DistrictCard("district2")

    const eastZones = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(eastZones, [eastDistrict, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    const eastSatellite = BuildableCard("poiWellOfFatePylon", 1)
    DECK_MultiplyByMultipleRules(eastSatellite, [eastDistrict, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_MultiplyByMultipleRules(eastDistrict, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    DECK_PutOnBottomOf(eastDistrict, baseDeck)
    DECK_PutOnBottomOf(eastZones, baseDeck)
    DECK_PutOnBottomOf(eastSatellite, baseDeck)

    //South district
    const southDistrict = DistrictCard("district3")

    const southZones = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(southZones, [southDistrict, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    const southSatellite = BuildableCard("poiWellOfFatePylon", 1)
    DECK_MultiplyByMultipleRules(southSatellite, [southDistrict, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_MultiplyByMultipleRules(southDistrict, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")])

    DECK_PutOnBottomOf(southDistrict, baseDeck)
    DECK_PutOnBottomOf(southZones, baseDeck)
    DECK_PutOnBottomOf(southSatellite, baseDeck)

    //West district
    const westDistrict = DistrictCard("district4")

    const westZones = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(westZones, [westDistrict, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    const westSatellite = BuildableCard("poiWellOfFatePylon", 1)
    DECK_MultiplyByMultipleRules(westSatellite, [westDistrict, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_MultiplyByMultipleRules(westDistrict, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    DECK_PutOnBottomOf(westDistrict, baseDeck)
    DECK_PutOnBottomOf(westZones, baseDeck)
    DECK_PutOnBottomOf(westSatellite, baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    LISTENFOR_LocalTimer({
        snippet: "lt_hosts_behavior_refresher",
        ownerVillageId: villageId,
        waitTime: poiWoFVal.hostBehaviorRefresherTimer,
        payloadInt: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "telemetry_wof_upgrade_complete",
        ownerVillageId: villageId,
        includeTags: ["player_upgrade"]
    })

    LISTENFOR_DeconstructionStarted({
        snippet: "telemetry_wof_upgrade_removal",
        ownerVillageId: villageId,
        includeTags: ["player_upgrade"]
    })
})

SNIPPET_BuildingComplete("telemetry_wof_upgrade_complete", (buildingEntity) => {
    const buildableArchetypeList = QUERY_GetEntitiesArchetypeCountList(buildingEntity)
    const splitList = buildableArchetypeList.split(",")
    OUTPUT_TelemetryWellOfFateStateChange(JSON.stringify(splitList[0]).replaceAll('"', ""), 1)
})

SNIPPET_DeconstructionStarted("telemetry_wof_upgrade_removal", (deconstructedEntity) => {
    const buildableArchetypeList = QUERY_GetEntitiesArchetypeCountList(deconstructedEntity)
    const splitList = buildableArchetypeList.split(",")
    OUTPUT_TelemetryWellOfFateStateChange(JSON.stringify(splitList[0]).replaceAll('"', ""), 0)
})

SNIPPET_LocalTimer("lt_hosts_behavior_refresher", (payload) => {
    const villageId = payload.int
    _ControlHostBehaviour(villageId)

    LISTENFOR_LocalTimer({
        snippet: "lt_hosts_behavior_refresher",
        ownerVillageId: villageId,
        waitTime: poiWoFVal.hostBehaviorRefresherTimer,
        payloadInt: villageId
    })
})

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_zoner_xp_well_of_fate",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [TAG_WELL_OF_FATE]
        })
    }
})

SNIPPET_BuildingComplete("bc_zoner_xp_well_of_fate", (entity) => {
    const villageId = QUERY_GetVillageIDFromEntity(entity)
    //const wellOfFateTV = SpawnTriggerVolume(entity, entity, "badger:spatial_trigger_well_of_fate_music", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    const wellOfFatePlayerGreetingsTV = SpawnTriggerVolume(entity, entity, "badger:spatial_trigger_well_of_fate_player_enters", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    const WoFTriggerVolume = SpawnTriggerVolume(entity, entity, "badger:spatial_trigger_village_generic", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    const wofOnboardingTV = SpawnTriggerVolume(entity, entity, "badger:spatial_trigger_village_generic", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)

    const respawnPointEntity = GetEntitiesWithTagsAndVillage(["respawn_point"], villageId)
    OUTPUT_FlagEntityAsVisited(respawnPointEntity)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_well_of_fate_player_greetings_enter",
        ownerVillageId: villageId,
        triggerEntity: wellOfFatePlayerGreetingsTV
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_wof_trigger_volume",
        triggerEntity: WoFTriggerVolume,
        ownerVillageId: villageId
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_act2_started_mob_spawn",
        ownerVillageId: villageId,
        variableName: ACTS.ACT_2
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_wof_trigger_mob_spawn",
        triggerEntity: WoFTriggerVolume,
        ownerVillageId: villageId
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_wof_onboarding",
        triggerEntity: wofOnboardingTV,
        ownerVillageId: villageId
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_epilogue_started",
        ownerVillageId: villageId,
        variableName: GV_STARTED_EPILOGUE
    })

    LISTENFOR_SpatialPartitionExited({
        snippet: "spe_well_of_fate_player_leaving_exit",
        ownerVillageId: villageId,
        triggerEntity: wellOfFatePlayerGreetingsTV
    })

    poiWoFVal.upgradesToTrack.forEach((entry) => {
        LISTENFOR_BuildingStart({
            snippet: "bs_upgrade_buildable_started",
            ownerVillageId: villageId,
            includeTags: [entry.tag],
            payloadString: entry.tag
        })
    })

    LISTENFOR_BuildingStart({
        snippet: "bc_increment_upgrades_count",
        ownerVillageId: villageId,
        includeTags: ["player_upgrade"]
    })
    //State update has to work with both destroying the upgrades and deconstructing them
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "npced_decrement_upgrades_count",
        ownerVillageId: villageId,
        includeTags: ["player_upgrade"],
        despawned: false
    })

    LISTENFOR_DeconstructionStarted({
        snippet: "ds_decrement_upgrades_count",
        ownerVillageId: villageId,
        includeTags: ["player_upgrade"]
    })

    // TELEMETRY
    // the player starts at the well of fate, so tracking when they discover it would be redundant

    //HOST SPAWNERS
    const knowledgeSpawnPosition = QUERY_GetChildEntitiesWithInstanceName(entity, "metadata_spawn_position_knowledge_host")
    const foresightSpawnPosition = QUERY_GetChildEntitiesWithInstanceName(entity, "metadata_spawn_position_foresight_host")
    const actionSpawnPosition = QUERY_GetChildEntitiesWithInstanceName(entity, "metadata_spawn_position_action_host")

    // Have the host spawners be owned by the village
    const knowledgeSpawner = OUTPUT_SpawnEntityAt(knowledgeSpawnPosition, "badger:spawner_host_knowledge")
    const foresightSpawner = OUTPUT_SpawnEntityAt(foresightSpawnPosition, "badger:spawner_host_foresight")
    const actionSpawner = OUTPUT_SpawnEntityAt(actionSpawnPosition, "badger:spawner_host_action")
    const hostSpawners = OPER_Append(OPER_Append(knowledgeSpawner, foresightSpawner), actionSpawner)
    OUTPUT_SetOwnerVillageById(hostSpawners, villageId)

    const actStartedEventTV = SpawnTriggerVolume(entity, entity, "badger:spatial_trigger_well_of_fate_music", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_game_started_telemetry",
        ownerVillageId: villageId,
        triggerEntity: actStartedEventTV
    })

    Once()
})

// =================================
// ===== Greetings and Leavings ====
// =================================
SNIPPET_SpatialPartitionEntered("spe_well_of_fate_player_greetings_enter", (triggerEntity, _enteringEntity, payload) => {
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.WELL_OF_FATE_VISITS_PROGRESS.globalVariable)
    if (IsCurrentAct(ACTS.EPILOGUE)) {
        return
    }
    Logi("spe_well_of_fate_player_greetings_enter")
    if (IsCurrentAct(ACTS.ACT_2) && QUERY_GetGlobalVariable("visitedWellOfFateInAct2") === 0) {
        IncrementGlobal("visitedWellOfFateInAct2")
        Logi("block first greeting in act 2")
        return
    }
    if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.INITIAL_ONBOARDING_COMPLETE) === 0) {
        OUTPUT_SetGlobalVariable(poiWoFVal.global.hasVisited, 1)
        OUTPUT_SetGlobalVariable(poiWoFVal.global.canPlayGreetingVO, 1)
        return
    }
    if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.WELL_OF_FATE_ONBOARDING_ACTIVE) > 0) {
        return
    }
    if (QUERY_GetGlobalVariable(poiWoFVal.global.hasVisited) === 0) {
        OUTPUT_SetGlobalVariable(poiWoFVal.global.hasVisited, 1)
        OUTPUT_SetGlobalVariable(poiWoFVal.global.canPlayGreetingVO, 1)
    } else if (QUERY_GetGlobalVariable(poiWoFVal.global.canPlayGreetingVO) === 1) {
        const listeningPlayers = FILTER_ByDistance(GetPlayers(), triggerEntity, poiWoFVal.greetingAudibleDistance)
        if (HasEntities(listeningPlayers)) {
            if (IsCurrentAct(ACTS.ACT_2)) {
                Logi("act 2 greetings")
                PlayPresentationActionToPlayers("wof_greetings_act2", listeningPlayers)
            }
        }

        // Prohibit playing another greeting until cooldown completes
        OUTPUT_SetGlobalVariable(poiWoFVal.global.canPlayGreetingVO, 0)
        LISTENFOR_LocalTimer({
            snippet: "lt_wof_greeting_cooldown",
            ownerVillageId: payload.ownerVillageId,
            waitTime: poiWoFVal.greetingCooldownTime
        })
    }
})

SNIPPET_SpatialPartitionEntered("spe_wof_trigger_volume", (_triggerEntity, _enteringEntity, _payload) => {
    if (IsCurrentAct(ACTS.ACT_3A)) {
        InfectWoF()
        Once()
    }
})

const _SpawnAct2WOFMobs = (villageId) => {
    const mobDataGroup = poiWoFVal.act2_mobs
    if (DoOnce(mobDataGroup.global)) {
        for (const mobData of mobDataGroup.mobData) {
            const mobs = SpawnEntitiesInVillage(mobData.archetype, mobData.amount, TEAM_BLUE, villageId, mobDataGroup.minSpawnRadius, mobDataGroup.maxSpawnRadius)
            OUTPUT_SetBehavior(mobs, mobData.behavior)

            LISTENFOR_InfluenceLureChanged({
                snippet: "ilc_set_default_behavior",
                entities: mobs,
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                payloadString: mobData.archetype
            })

            LISTENFOR_LocalTimer({
                snippet: "lt_set_default_behavior",
                waitTime: mobDataGroup.behaviorCooldown,
                ownerVillageId: villageId,
                payloadString: mobData.archetype,
                payloadEntities: mobs
            })
        }
    }
}

SNIPPET_InfluenceLureChanged("ilc_set_default_behavior", (entity, _started, payload) => {
    OUTPUT_SetBehavior(entity, payload.string)
})

SNIPPET_LocalTimer("lt_set_default_behavior", (payload) => {
    const entities = payload.entities
    if (QUERY_GetEntitiesCount(entities) > 0) {
        OUTPUT_SetBehavior(entities, payload.string)
    }
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_wof_trigger_mob_spawn", (_triggerEntity, _enteringEntity, payload) => {
    if (IsCurrentAct(ACTS.ACT_2)) {
        _SpawnAct2WOFMobs(payload.ownerVillageId)
        Once()
    }
})

SNIPPET_GlobalVariableChanged("gvc_act2_started_mob_spawn", (oldValue, newValue, payload) => {
    if (oldValue === 0 && newValue === 1) {
        _SpawnAct2WOFMobs(payload.ownerVillageId)
        Once()
    }
})

SNIPPET_GlobalVariableChanged("gvc_epilogue_started", (_oldValue, newValue, payload) => {
    if (newValue === 1) {
        UninfectWoF()

        LISTENFOR_LocalTimer({
            snippet: "lt_wof_despawn_hosts",
            ownerVillageId: payload.ownerVillageId,
            waitTime: 5
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_wof_despawn_hosts", () => {
    const hosts = QUERY_GetEntitiesWithTags(["host"])

    if (HasEntities(hosts)) {
        OUTPUT_DespawnEntities(hosts)
    }
})

SNIPPET_LocalTimer("lt_wof_greeting_cooldown", () => {
    OUTPUT_SetGlobalVariable(poiWoFVal.global.canPlayGreetingVO, 1)
})

SNIPPET_SpatialPartitionExited("spe_well_of_fate_player_leaving_exit", (triggerEntity, exitingEntity, payload) => {
    if (IsCurrentAct(ACTS.EPILOGUE)) {
        return
    }
    if (IsCurrentAct(ACTS.ACT_2) && QUERY_GetGlobalVariable("leftWellOfFateInAct2") === 0) {
        IncrementGlobal("leftWellOfFateInAct2")
        Logi("block first leaving in act 2")
        return
    }
    if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.INITIAL_ONBOARDING_COMPLETE) === 0) {
        OUTPUT_SetGlobalVariable(poiWoFVal.global.hasLeft, 1)
        OUTPUT_SetGlobalVariable(poiWoFVal.global.canPlayLeavingVO, 1)
        return
    }
    if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.WELL_OF_FATE_ONBOARDING_ACTIVE) > 0) {
        return
    }
    if (QUERY_GetGlobalVariable(poiWoFVal.global.hasLeft) === 0) {
        OUTPUT_SetGlobalVariable(poiWoFVal.global.hasLeft, 1)
        OUTPUT_SetGlobalVariable(poiWoFVal.global.canPlayLeavingVO, 1)
    } else if (QUERY_GetGlobalVariable(poiWoFVal.global.canPlayLeavingVO) === 1) {
        const listeningPlayers = FILTER_ByDistance(GetPlayers(), triggerEntity, poiWoFVal.leavingAudibleDistance)
        if (HasEntities(listeningPlayers)) {
            if (IsCurrentAct(ACTS.ACT_2)) {
                Logi("act2 leaving")
                PlayPresentationActionToPlayers("wof_leaving_act2", listeningPlayers)
            }
        }

        // Prohibit playing another leaving remark until cooldown completes
        OUTPUT_SetGlobalVariable(poiWoFVal.global.canPlayLeavingVO, 0)
        LISTENFOR_LocalTimer({
            snippet: "lt_wof_leaving_cooldown",
            ownerVillageId: payload.ownerVillageId,
            waitTime: poiWoFVal.leavingCooldownTime
        })
    }
})

SNIPPET_LocalTimer("lt_wof_leaving_cooldown", () => {
    OUTPUT_SetGlobalVariable(poiWoFVal.global.canPlayLeavingVO, 1)
})

SNIPPET_BuildingStart("bs_upgrade_buildable_started", (_buildingEntity, payload) => {
    if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.WELL_OF_FATE_ONBOARDING_ACTIVE) > 0 || IsCurrentAct(ACTS.EPILOGUE)) {
        return
    }
    const tag = payload.string
    poiWoFVal.upgradesToTrack.forEach((entry) => {
        if (entry.tag === tag) {
            if (DoOnce(entry.playedFirstTime) || QUERY_RandomNumber(0, 100) < 50) {
                LISTENFOR_LocalTimer({
                    snippet: "lt_play_wof_upgrade_vo",
                    waitTime: poiWoFVal.upgradeVODelay,
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    payloadString: entry.builtPresentationVO
                })
            }
        }
    })
})

SNIPPET_LocalTimer("lt_play_wof_upgrade_vo", (payload) => {
    Logi("~~Play Upgrade Buildable VO: " + payload.string)
    const wofBuildable = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
    PlayPresentationActionToClosePlayers(payload.string, wofBuildable)
})

// TELEMETRY

SNIPPET_SpatialPartitionEntered("spe_game_started_telemetry", (triggerEntity, enteringEntity, _payload) => {
    TelemetrySendActStartedEvent(enteringEntity, "ACT1A")
    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

// INVASION PHASE CALCULATIONS
SNIPPET_BuildingStart("bc_increment_upgrades_count", (_buildingEntity, _payload) => {
    IncrementGlobal(INVASION_PHASE_STATE.WOF_UPGRADES_PRESENT_COUNT)
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.WELL_OF_FATE_UPGRADES_PROGRESS.globalVariable)
})

SNIPPET_NonPopCappedEntityDestroyed("npced_decrement_upgrades_count", (_entityGroup, _payload) => {
    DecrementGlobal(INVASION_PHASE_STATE.WOF_UPGRADES_PRESENT_COUNT)
})

SNIPPET_DeconstructionStarted("ds_decrement_upgrades_count", (_deconstructedEntity, _deconstructorEntity, _payload) => {
    DecrementGlobal(INVASION_PHASE_STATE.WOF_UPGRADES_PRESENT_COUNT)
})
