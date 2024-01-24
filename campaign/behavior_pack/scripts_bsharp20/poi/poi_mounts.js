const poiMountsVal = {
    mount01: {
        id: "mount01",
        triggerVolumeTag: "poi_mount_01_tv",
        factionName: "faction.poi.mount.01",
        icon: "badger:wmap_mount_purple_tiger",
        buildableCenterCard: "poiMount01Center",
        introCinematic: { day: "mnt02_c01_tiger_intro_fmv", night: "mnt02_c01_tiger_intro_night_fmv" },
        outroVO: "",
        unlockResource: "unlock_quest_mount_01",
        journalUnlock: JOURNAL_UNLOCKS.MOUNT_TIGER,
        message: {
            introAnnounce: "mount1_intro",
            outroAnnounce: "mount1_outro"
        },
        global: {
            mountUnlocked: "gv_mount_01_unlocked",
            hasPlayerLuredTheMount: "gv_mount_01_lured",
            mountLuredTelemetry: "gv_mount_01_lured_telemetry",
            iconRevealed: "gv_mount_01_icon_revealed",
            introCinePlayed: "gv_mount_01_intro_cine_played",
            introVOPlayed: "gv_mount_01_intro_vo_played",
            telemetryMountEncountered: "gv_mount_01_temeletry_mount_encountered"
        },
        tag: {
            center: "poi_mount_01_tiger_home",
            poiMount: "poi_mount_01"
        },
        behavior: {
            default: "badger:animal_tiger",
            lured: "badger:behavior_purple_tiger_lured",
            nonInteractable: "badger:behavior_animal_tiger_unmoutable",
            fountain: "badger:behavior_animal_tiger_village"
        },
        telemetry: {
            funnelName: "mount_01_purple_tiger_v2", //if design changes this name must change as well
            telemetryLureId: TELEMETRY_MOB_ALLIANCE_NAMES.mount01Lure,
            mountName: "mount_01_purple_tiger",
            currentStepGV: "gv_mount_01_current_step"
        },
        mountIdentifier: "badger:mount_tiger",
        animalIdentifier: "badger:animal_tiger",
        enabled: 1
    },
    mount03: {
        id: "mount03",
        triggerVolumeTag: "poi_mount_03_tv",
        factionName: "faction.poi.mount.03",
        icon: "badger:wmap_mount_giant_beetle",
        buildableCenterCard: "poiMount03Center",
        introCinematic: { day: "mnt04_c01_beetle_intro_fmv", night: "mnt04_c01_beetle_intro_night_fmv" },
        outroVO: "",
        unlockResource: "unlock_quest_mount_03",
        journalUnlock: JOURNAL_UNLOCKS.MOUNT_BEETLE,
        message: {
            introAnnounce: "mount3_intro",
            outroAnnounce: "mount3_outro"
        },
        global: {
            mountUnlocked: "gv_mount_03_unlocked",
            hasPlayerLuredTheMount: "gv_mount_03_lured",
            mountLuredTelemetry: "gv_mount_03_lured_telemetry",
            iconRevealed: "gv_mount_03_icon_revealed",
            introCinePlayed: "gv_mount_03_intro_cine_played",
            introVOPlayed: "gv_mount_03_intro_vo_played",
            telemetryMountEncountered: "gv_mount_03_temeletry_mount_encountered"
        },
        tag: {
            center: "poi_mount_03_beetle_home",
            poiMount: "poi_mount_03"
        },
        behavior: {
            default: "badger:animal_beetle",
            lured: "badger:behavior_giant_beetle_lured",
            nonInteractable: "badger:behavior_animal_beetle_unmoutable",
            fountain: "badger:behavior_animal_beetle_village"
        },
        telemetry: {
            funnelName: "mount_03_giant_beetle_v2", //if design changes this name must change as well
            mountName: "mount_03_giant_beetle",
            currentStepGV: "gv_mount_03_current_step",
            telemetryLureId: TELEMETRY_MOB_ALLIANCE_NAMES.mount03Lure
        },
        mountIdentifier: "badger:mount_beetle",
        animalIdentifier: "badger:animal_beetle",
        enabled: 1
    },
    mount04: {
        id: "mount04",
        triggerVolumeTag: "poi_mount_04_tv",
        factionName: "faction.poi.mount.04",
        icon: "badger:wmap_mount_giant_bird",
        buildableCenterCard: "poiMount04Center",
        introCinematic: { day: "mnt05_c01_bird_intro_fmv", night: "mnt05_c01_bird_intro_night_fmv" },
        outroVO: "",
        unlockResource: "unlock_quest_mount_04",
        journalUnlock: JOURNAL_UNLOCKS.MOUNT_BIRD,
        message: {
            introAnnounce: "mount4_intro",
            outroAnnounce: "mount4_outro"
        },
        global: {
            mountUnlocked: "gv_mount_04_unlocked",
            hasPlayerLuredTheMount: "gv_mount_04_lured",
            mountLuredTelemetry: "gv_mount_04_lured_telemetry",
            iconRevealed: "gv_mount_04_icon_revealed",
            introCinePlayed: "gv_mount_04_intro_cine_played",
            introVOPlayed: "gv_mount_04_intro_vo_played",
            telemetryMountEncountered: "gv_mount_04_temeletry_mount_encountered"
        },
        tag: {
            center: "poi_mount_04_bird_home",
            poiMount: "poi_mount_04"
        },
        behavior: {
            default: "badger:animal_bird",
            lured: "badger:behavior_giant_bird_lured",
            nonInteractable: "badger:behavior_animal_bird_unmoutable",
            fountain: "badger:behavior_animal_bird_village"
        },
        telemetry: {
            funnelName: "mount_04_giant_bird_v2", //if design changes this name must change as well
            mountName: "mount_04_giant_bird",
            currentStepGV: "gv_mount_04_current_step",
            telemetryLureId: TELEMETRY_MOB_ALLIANCE_NAMES.mount04Lure
        },
        mountIdentifier: "badger:mount_bird",
        animalIdentifier: "badger:animal_bird",
        enabled: 1
    },
    mount05: {
        id: "mount05",
        outroVO: "horse_remount",
        global: {
            mountUnlocked: "gv_mount_05_unlocked",
            outroVOPlayed: "gv_mount_05_outro_vo_played"
        },
        tag: {
            mount: "animal_horse",
            poiMount: "poi_mount_05"
        },
        behavior: {
            default: "badger:animal_horse",
            fountain: "badger:behavior_animal_horse_village"
        },
        mountIdentifier: "badger:mount_horse",
        animalIdentifier: "badger:animal_horse"
    },
    mount06: {
        id: "mount06",
        triggerVolumeTag: "poi_mount_06_tv",
        factionName: "faction.poi.mount.06",
        icon: "badger:wmap_mount_06",
        buildableCenterCard: "poiMount06Center",
        introCinematic: { day: "mnt03_c01_frog_intro_fmv", night: "mnt03_c01_frog_intro_night_fmv" },
        outroVO: "frog_outro_vo",
        unlockResource: "unlock_quest_mount_06", //resource that unlocks the use of this mount
        journalUnlock: JOURNAL_UNLOCKS.MOUNT_SIX, //Journal resource unlock, referenced in aaa_global_const
        message: {
            introAnnounce: "mount6_intro",
            outroAnnounce: "mount6_outro"
        },
        global: {
            mountUnlocked: "gv_mount_06_unlocked", //GV that enables mount spawners in the village to be active
            hasPlayerLuredTheMount: "gv_mount_06_lured",
            mountLuredTelemetry: "gv_mount_06_lured_telemetry",
            iconRevealed: "gv_mount_06_icon_revealed",
            introCinePlayed: "gv_mount_06_intro_cine_played",
            introVOPlayed: "gv_mount_06_intro_vo_played",
            telemetryMountEncountered: "gv_mount_06_temeletry_mount_encountered"
        },
        tag: {
            center: "poi_mount_06_home", //tag of the buildable for the home
            poiMount: "poi_mount_06" //The tag of the animal that has this - there are lots of references to unpack here
        },
        behavior: {
            default: "badger:animal_06",
            lured: "badger:behavior_animal_06_lured",
            nonInteractable: "badger:behavior_animal_06_unmoutable",
            fountain: "badger:behavior_animal_06_village"
        },
        telemetry: {
            funnelName: "mount_06", //if design changes this name must change as well
            mountName: "mount_06",
            currentStepGV: "gv_mount_06_current_step",
            telemetryLureId: TELEMETRY_MOB_ALLIANCE_NAMES.mount06Lure
        },
        mountIdentifier: "badger:mount_06",
        animalIdentifier: "badger:animal_06",
        enabled: 1
    },
    mount07: {
        id: "mount07",
        triggerVolumeTag: "poi_mount_07_tv",
        factionName: "faction.poi.mount.07",
        icon: "badger:wmap_mount_camel",
        buildableCenterCard: "poiMount07Center",
        introCinematic: { day: "mnt02_c01_tiger_intro_fmv", night: "mnt02_c01_tiger_intro_night_fmv" },
        outroVO: "",
        unlockResource: "unlock_quest_mount_07",
        journalUnlock: JOURNAL_UNLOCKS.MOUNT_CAMEL,
        message: {
            introAnnounce: "mount7_intro",
            outroAnnounce: "mount7_outro"
        },
        global: {
            mountUnlocked: "gv_mount_07_unlocked",
            hasPlayerLuredTheMount: "gv_mount_07_lured",
            mountLuredTelemetry: "gv_mount_07_lured_telemetry",
            iconRevealed: "gv_mount_07_icon_revealed",
            introCinePlayed: "gv_mount_07_intro_cine_played",
            introVOPlayed: "gv_mount_07_intro_vo_played",
            telemetryMountEncountered: "gv_mount_07_temeletry_mount_encountered"
        },
        tag: {
            center: "poi_mount_07_camel_home",
            poiMount: "poi_mount_07"
        },
        behavior: {
            default: "badger:animal_camel",
            lured: "badger:behavior_camel_lured",
            nonInteractable: "badger:behavior_animal_camel_unmoutable",
            fountain: "badger:behavior_animal_camel_village"
        },
        telemetry: {
            funnelName: "mount_07_camel", //if design changes this name must change as well
            telemetryLureId: TELEMETRY_MOB_ALLIANCE_NAMES.mount07Lure,
            mountName: "mount_07_camel",
            currentStepGV: "gv_mount_07_current_step"
        },
        mountIdentifier: "badger:mount_camel",
        animalIdentifier: "badger:animal_camel",
        enabled: 1
    }
}

const misc = {
    fountainTag: TAG_VILLAGE_FOUNTAIN,
    fountainMountTag: "fountain_mount",
    tagInAllMounts: "poi_mount",
    cinematicVillageTag: "_cinematic_village",
    worldSpawnerTag: "world_mount_spawner",
    numberOfMountsMounted: "gv_number_of_mounts_mounted",
    interactedMountCineTag: "interacted_mount_cine"
}

//Values of custom settings, by default we don't auto-unlock all mounts
const mountsAutoUnlockedEnabled = {
    customSettingName: "tools_mounts_unlock_all",
    defaultValue: 0
}

//worldGenDefinitionSettings.mountCount.beetle (its an array you can iterate through it too)

//If its a custom game change the value above. If enabled, later on we set some global variables, etc.
SNIPPET_GameSettingInitialized(mountsAutoUnlockedEnabled.customSettingName, (value) => {
    mountsAutoUnlockedEnabled.defaultValue = value.value
})

/*
const _MountLuredOrDirected = (mountEG, wasStarted, mountData) => {
    if (QUERY_GetGlobalVariable(mountData.global.mountUnlocked) > 0) {
        return
    }
    if (wasStarted) {
        OUTPUT_SetGlobalVariable(mountData.global.hasPlayerLuredTheMount, 1)
        OUTPUT_SetBehavior(mountEG, mountData.behavior.lured)
        Logi("Lured!")
        if (QUERY_GetGlobalVariable(mountData.global.mountLuredTelemetry) === 0) {
            IncrementGlobal(mountData.global.mountLuredTelemetry)
            _SendMountFunnelTelemetry(GetClosestPlayer(mountEG), TELEMETRY_FUNNEL_STEP.MOUNT.INTERACTED_BANNER, mountData)
        }
    } else {
        OUTPUT_SetGlobalVariable(mountData.global.hasPlayerLuredTheMount, 0)
        OUTPUT_SetBehavior(mountEG, mountData.behavior.default)
        Logi("Unlured!")
    }
}
*/

const _GetAnimalVersionOfMount = (currentMountIdentifier) => {
    let animalIdentifier = poiMountsVal.mount05.animalIdentifier
    switch (currentMountIdentifier) {
        case poiMountsVal.mount01.mountIdentifier:
            animalIdentifier = poiMountsVal.mount01.animalIdentifier
            break
        case poiMountsVal.mount03.mountIdentifier:
            animalIdentifier = poiMountsVal.mount03.animalIdentifier
            break
        case poiMountsVal.mount04.mountIdentifier:
            animalIdentifier = poiMountsVal.mount04.animalIdentifier
            break
        case poiMountsVal.mount06.mountIdentifier:
            animalIdentifier = poiMountsVal.mount06.animalIdentifier
            break
        case poiMountsVal.mount07.mountIdentifier:
            animalIdentifier = poiMountsVal.mount07.animalIdentifier
            break
    }

    return animalIdentifier
}

const _InitializeMountGlobalVariables = (mountData) => {
    //OUTPUT_SetGlobalVariable(mountData.global.mountUnlocked, 0)
    OUTPUT_SetGlobalVariable(mountData.global.hasPlayerLuredTheMount, 0)
    OUTPUT_SetGlobalVariable(mountData.global.mountLuredTelemetry, 0)

    //If we've enabled the stable game setting (unlocks all mounts) and the mount HAS NOT been disabled by other settings...
    //Then set its global variables to 1 so it will appear in villages and not play its cinematic
    if (mountsAutoUnlockedEnabled.defaultValue === 1 && mountData.enabled === 1) {
        OUTPUT_SetGlobalVariable(mountData.global.mountUnlocked, 1)
        OUTPUT_SetGlobalVariable(mountData.global.introCinePlayed, 1)
        SetSpecificMountWorldSpawnerState(true, mountData.tag.poiMount)
    } else {
        OUTPUT_SetGlobalVariable(mountData.global.mountUnlocked, 0)
    }
}

const GetMountDataFromMountEntity = (mount) => {
    let mountData = poiMountsVal.mount01

    if (QUERY_HasTags(mount, [poiMountsVal.mount01.tag.poiMount])) {
        mountData = poiMountsVal.mount01
    } else if (QUERY_HasTags(mount, [poiMountsVal.mount03.tag.poiMount])) {
        mountData = poiMountsVal.mount03
    } else if (QUERY_HasTags(mount, [poiMountsVal.mount04.tag.poiMount])) {
        mountData = poiMountsVal.mount04
    } else if (QUERY_HasTags(mount, [poiMountsVal.mount05.tag.mount])) {
        mountData = poiMountsVal.mount05
    } else if (QUERY_HasTags(mount, [poiMountsVal.mount06.tag.poiMount])) {
        mountData = poiMountsVal.mount06
    } else if (QUERY_HasTags(mount, [poiMountsVal.mount07.tag.poiMount])) {
        mountData = poiMountsVal.mount07
    } else {
        Logi("No valid mount tag was found!")
        return
    }

    return mountData
}

SNIPPET_InheritsFromGameMode("campaign", () => {
    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount01.factionName,
        payloadString: poiMountsVal.mount01.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount03.factionName,
        payloadString: poiMountsVal.mount03.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount04.factionName,
        payloadString: poiMountsVal.mount04.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount06.factionName,
        payloadString: poiMountsVal.mount06.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount07.factionName,
        payloadString: poiMountsVal.mount07.id
    })

    LISTENFOR_PlayerInteracted({
        snippet: "pi_animal_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [misc.tagInAllMounts]
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_fountain_for_mount_unlock",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [misc.fountainTag, "hq"]
    })

    LISTENFOR_ExternalEvent({
        snippet: "ev_unlock_all_mounts",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "unlock_all_mounts"
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_mount_world_spawner",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [misc.worldSpawnerTag]
    })

    LISTENFOR_PlayerInteracted({
        snippet: "pi_animal_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [misc.tagInAllMounts]
    })
})

SNIPPET_InheritsFromGameMode("editor", () => {
    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount01.factionName,
        payloadString: poiMountsVal.mount01.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount03.factionName,
        payloadString: poiMountsVal.mount03.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount04.factionName,
        payloadString: poiMountsVal.mount04.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount06.factionName,
        payloadString: poiMountsVal.mount06.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vp_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: poiMountsVal.mount07.factionName,
        payloadString: poiMountsVal.mount07.id
    })

    LISTENFOR_PlayerInteracted({
        snippet: "pi_animal_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [misc.tagInAllMounts]
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_fountain_for_mount_unlock",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [misc.fountainTag, "hq"]
    })

    LISTENFOR_ExternalEvent({
        snippet: "ev_unlock_all_mounts",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "unlock_all_mounts"
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_mount_world_spawner",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [misc.worldSpawnerTag]
    })
})

SNIPPET_VillagePlanned("vp_poi_mount", (_villageId, payload) => {
    const mountData = poiMountsVal[payload.string]
    LISTENFOR_VillageGenerated({
        snippet: "vg_poi_mount",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: mountData.factionName,
        payloadString: mountData.id
    })

    _InitializeMountGlobalVariables(mountData)

    //SetEntityWaypointIconState(GetVillageEntityFromID(villageId), mountData.id, POI_WAYPOINT_ICON_STATE.HIDDEN)
})

SNIPPET_VillageGenerated("vg_poi_mount", (villageId, payload) => {
    const mountData = poiMountsVal[payload.string]
    LISTENFOR_BuildingComplete({
        snippet: "bc_poi_mount_center",
        ownerVillageId: villageId,
        includeTags: [mountData.tag.center],
        villageId: villageId,
        payloadString: mountData.id
    })

    const baseDeck = DECK_Empty()

    const initialZone = ZonesCard("addPoiZones", 1)
    DECK_PutOnBottomOf(initialZone, baseDeck)
    const layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_PutOnBottomOf(layer, baseDeck)

    const center = BuildableCard(mountData.buildableCenterCard)
    if (mountData.id === poiMountsVal.mount04.id) {
        DECK_MultiplyByMultipleRules(center, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facingEast"), ForceBuildingPlacementCard("forceBuildingPlacement")])
    } else {
        DECK_MultiplyByMultipleRules(center, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])
    }
    DECK_PutOnBottomOf(center, baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    const villageEntity = GetVillageEntityFromID(villageId)
    const showIconTV = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_icon_reveal", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_mount_reveal_question_mark_icon",
        ownerVillageId: villageId,
        triggerEntity: showIconTV,
        payloadInt: villageId,
        payloadString: mountData.id
    })
})

SNIPPET_BuildingComplete("bc_poi_mount_center", (buildingCompleteEG, payload) => {
    const mountData = poiMountsVal[payload.string]
    const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEG)
    const mountTV = SpawnTriggerVolume(buildingCompleteEG, buildingCompleteEG, "badger:spatial_trigger_poi_mount_generic", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    OUTPUT_AddTag(mountTV, mountData.triggerVolumeTag)

    const mountEncounterVOTV = SpawnTriggerVolume(buildingCompleteEG, buildingCompleteEG, "badger:spatial_trigger_mount_01_encounter_vo", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_mount_encounter_vo",
        ownerVillageId: villageId,
        triggerEntity: mountEncounterVOTV,
        payloadString: mountData.id
    })

    const encounteredFunnelTV = SpawnTriggerVolume(buildingCompleteEG, buildingCompleteEG, "badger:spatial_trigger_generic_small", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_mount_encountered_funnel",
        ownerVillageId: villageId,
        triggerEntity: encounteredFunnelTV,
        payloadEntities: buildingCompleteEG,
        payloadString: mountData.id
    })
})

SNIPPET_SpatialPartitionEntered("spe_poi_mount_reveal_question_mark_icon", (triggerEntity, _intruderEntity, payload) => {
    const mountData = poiMountsVal[payload.string]
    //const villageEntity = FILTER_ByFactionName(QUERY_GetAllVillages(), mountData.factionName)
    const villageEntity = GetVillageEntityFromID(QUERY_GetVillageIDFromEntity(triggerEntity))
    OUTPUT_AddTag(villageEntity, TAG_REVEALED_POI)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    OUTPUT_DespawnEntities(triggerEntity)
    IncrementGlobal(mountData.global.iconRevealed)
    SetEntityWaypointIconState(villageEntity, mountData.id, POI_WAYPOINT_ICON_STATE.REVEALED)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_poi_mount_encounter_vo", (triggerEntity, intruderEntity, payload) => {
    const mountData = poiMountsVal[payload.string]
    if (QUERY_GetGlobalVariable(mountData.global.introVOPlayed) > 0) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
        return
    }

    if (IsCurrentAct(ACTS.EPILOGUE) || IsCurrentAct(ACTS.ACT_3A)) {
        OUTPUT_Announce(mountData.message.introAnnounce, [])
    }

    IncrementGlobal(mountData.global.introVOPlayed)

    Once()
    OUTPUT_DespawnEntities(triggerEntity)
})

SNIPPET_BuildingComplete("bc_fountain_for_mount_unlock", (buildingCompleteEG) => {
    const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEG) //Eventually all fountains will have a valid villageId
    const fountainMountTV = SpawnTriggerVolume(buildingCompleteEG, buildingCompleteEG, "badger:spatial_trigger_fountain_mount_unlock", TEAM_WILD, villageId, true, ["fountain_mount"], [], ALLIANCE_FRIENDLY)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_mount_spawned_at_fountain",
        ownerVillageId: villageId,
        triggerEntity: fountainMountTV,
        payloadEntities: buildingCompleteEG
    })

    LISTENFOR_EntityDisabled({
        snippet: "spe_fountain_disabled",
        ownerVillageId: villageId
    })
})

SNIPPET_SpatialPartitionEntered("spe_poi_mount_spawned_at_fountain", (triggerEntity, intruderEntity, _payload) => {
    const mount = intruderEntity
    const mountData = GetMountDataFromMountEntity(mount)
    if (mountData === undefined) {
        Loge("Mount Data is undefined! Please check why")
        return
    }

    OUTPUT_SetOwnerVillageById(mount, QUERY_GetVillageIDFromEntity(triggerEntity)) // for safe payloads

    OUTPUT_SetBehavior(mount, mountData.behavior.fountain)
    OUTPUT_RemoveTag(mount, "luredirect")
})

SNIPPET_EntityDisabled("spe_fountain_disabled", (fountainEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(fountainEntity)
    const allMounts = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["poi_mount"], [])
    OUTPUT_DespawnEntities(allMounts)
})

const SwapMounts = (playerEntity, interactedEntity, currentMountId, newMountId, swapTeam) => {
    if (currentMountId !== newMountId) {
        SpawnEntitiesAt(interactedEntity, _GetAnimalVersionOfMount(QUERY_GetPlayerMountName(playerEntity)), 1, swapTeam)
        OUTPUT_MountPlayer(playerEntity, newMountId)
        OUTPUT_SetInteractionState(interactedEntity, false) // prevent duplicating mounts
        OUTPUT_DespawnEntities(interactedEntity)
        IncrementGlobal(misc.numberOfMountsMounted)
        if (QUERY_GetGlobalVariable(misc.numberOfMountsMounted) >= 3) {
            TriggerTutorialForSpecificPlayers(playerEntity, "mount_swap")
        }
    } else {
        OUTPUT_AnnouncePlayer("mount_already_mounted", [], playerEntity)
    }
}

const _DiscoverMount = (mountData, interactedEntity) => {
    // Horsie has some special logic - we only want it to play VO if player tried some other mount before
    if (mountData.id === poiMountsVal.mount05.id) {
        if (QUERY_GetGlobalVariable(mountData.global.mountUnlocked) === 1 && DoOnce(mountData.global.outroVOPlayed)) {
            if (!IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A)) {
                if (mountData.outroVO !== "") {
                    PlayPresentationActionToClosePlayers(mountData.outroVO, interactedEntity)
                }
            } else {
                OUTPUT_Announce(mountData.message.outroAnnounce, [])
            }
        }
    } else if (DoOnce(mountData.global.mountUnlocked)) {
        OUTPUT_AddOrRemoveResource(RandomEntity(GetAllPlayers()), mountData.unlockResource, 1, false)
        if (mountData.outroVO !== "") {
            PlayPresentationActionToClosePlayers(mountData.outroVO, interactedEntity)
        }
        LISTENFOR_LocalTimer({
            snippet: "lt_unlock_journal_entry",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 2,
            payloadString: mountData.id
        })

        // Set the horsie mount unlocked
        OUTPUT_SetGlobalVariable(poiMountsVal.mount05.global.mountUnlocked, 1)

        // Update state
        IncrementGlobal(INVASION_PHASE_STATE.MOUNTS_COMPLETED_COUNT)
        _SendMountFunnelTelemetry(GetClosestPlayer(interactedEntity), TELEMETRY_FUNNEL_STEP.MOUNT.UNLOCKED, mountData)
        TelemetrySendMountUnlockedEvent(GetClosestPlayer(interactedEntity), mountData.telemetry.mountName)
        IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.MOUNT_PROGRESS.globalVariable)

        // VO
        if (IsCurrentAct(ACTS.EPILOGUE) || IsCurrentAct(ACTS.ACT_3A)) {
            OUTPUT_Announce(mountData.message.outroAnnounce, [])
        }
    }
}

const _GetInteractedMountCineTag = (mountData) => {
    return `${mountData.id}_${misc.interactedMountCineTag}`
}

SNIPPET_PlayerInteracted("pi_animal_mount", (playerEntity, interactedEntity, _payload) => {
    const mountData = GetMountDataFromMountEntity(interactedEntity)
    if (mountData === undefined) {
        Loge("Mount Data is undefined! Please check why")
        return
    }

    const cineTag = _GetInteractedMountCineTag(mountData)
    const anyPlayerUndergoingCinematic = HasEntities(QUERY_GetEntitiesWithTags(cineTag))

    // We only do discovery after the player who discovered the animal went through cinematic / etc.
    // The rest can just jump on the mount meanwhile
    if (!anyPlayerUndergoingCinematic) {
        if (mountData.introCinematic !== undefined && DoOnce(mountData.global.introCinePlayed) && !IsCurrentAct(ACTS.EPILOGUE) && !IsCurrentAct(ACTS.ACT_3A)) {
            // Need this tag so that we can trigger VO on the player and track if any player is going through the cine
            OUTPUT_AddTag(playerEntity, cineTag)
            const introCinematic = IsNightTime() ? mountData.introCinematic.night : mountData.introCinematic.day
            OUTPUT_TriggerCinematic(introCinematic, [playerEntity])
            SetSpecificMountWorldSpawnerState(true, mountData.tag.poiMount)
            LISTENFOR_CinematicFinished({
                snippet: "cf_discover_mount",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                cinematicName: introCinematic,
                payloadString: mountData.id
            })
        } else {
            _DiscoverMount(mountData, interactedEntity)
        }
    }

    SwapMounts(playerEntity, interactedEntity, QUERY_GetPlayerMountName(playerEntity), mountData.mountIdentifier, TEAM_BLUE)
})

SNIPPET_CinematicFinished("cf_discover_mount", (payload) => {
    const mountData = poiMountsVal[payload.string]
    const cineTag = _GetInteractedMountCineTag(mountData)
    const playerEntityInteracted = QUERY_GetEntitiesWithTags(cineTag)
    _DiscoverMount(mountData, playerEntityInteracted)
    OUTPUT_RemoveTag(playerEntityInteracted, cineTag)
})

SNIPPET_LocalTimer("lt_unlock_journal_entry", (payload) => {
    const mountData = poiMountsVal[payload.string]
    UnlockJournalEntry(mountData.journalUnlock)
    OUTPUT_AddOrSubtractObjectiveProgress("objectives.mountsUnlocked", 1)
})

SNIPPET_EntitySpawned("es_mount_world_spawner", (entitySpawned, _payload) => {
    const showIconTV = SpawnTriggerVolume(entitySpawned, undefined, "badger:spatial_trigger_icon_reveal", TEAM_WILD, undefined, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_poi_world_spawner_mount_reveal_question_mark_icon",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        triggerEntity: showIconTV
    })
})

SNIPPET_SpatialPartitionEntered("spe_poi_world_spawner_mount_reveal_question_mark_icon", (triggerEntity, _intruderEntity, _payload) => {
    const spawner = FILTER_ByClosest(QUERY_GetEntitiesWithTags([misc.worldSpawnerTag]), triggerEntity, 1)
    if (HasEntities(spawner)) {
        OUTPUT_MapSetKeyValue(spawner, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    }
    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

const _SendMountFunnelTelemetry = (playerEntity, step, mountData) => {
    TelemetrySendMountFunnelEvent(playerEntity, mountData.telemetry.funnelName, mountData.telemetry.mountName, step, mountData.telemetry.currentStepGV, 3)
}

SNIPPET_SpatialPartitionEntered("spe_poi_mount_encountered_funnel", (triggerEntity, intruderEntity, payload) => {
    const mountData = poiMountsVal[payload.string]
    if (QUERY_GetGlobalVariable(mountData.global.telemetryMountEncountered) > 0) {
        OUTPUT_DestroyEntities(triggerEntity)
        Once()
        return
    }
    _SendMountFunnelTelemetry(intruderEntity, TELEMETRY_FUNNEL_STEP.MOUNT.ENCOUNTERED_STEP, mountData)
    IncrementGlobal(mountData.global.telemetryMountEncountered)
    OUTPUT_DestroyEntities(triggerEntity)
    Once()
})

SNIPPET_ExternalEvent("ev_unlock_all_mounts", () => {
    const randomPlayer = RandomEntity(GetAllPlayers())
    OUTPUT_AddOrRemoveResource(randomPlayer, poiMountsVal.mount01.unlockResource, 1, false)
    OUTPUT_SetGlobalVariable(poiMountsVal.mount01.global.mountUnlocked, 1)
    OUTPUT_AddOrRemoveResource(randomPlayer, poiMountsVal.mount03.unlockResource, 1, false)
    OUTPUT_SetGlobalVariable(poiMountsVal.mount03.global.mountUnlocked, 1)
    OUTPUT_AddOrRemoveResource(randomPlayer, poiMountsVal.mount04.unlockResource, 1, false)
    OUTPUT_SetGlobalVariable(poiMountsVal.mount04.global.mountUnlocked, 1)
    OUTPUT_SetGlobalVariable(poiMountsVal.mount05.global.mountUnlocked, 1)
    OUTPUT_AddOrRemoveResource(randomPlayer, poiMountsVal.mount06.unlockResource, 1, false)
    OUTPUT_SetGlobalVariable(poiMountsVal.mount06.global.mountUnlocked, 1)
    OUTPUT_AddOrRemoveResource(randomPlayer, poiMountsVal.mount07.unlockResource, 1, false)
    OUTPUT_SetGlobalVariable(poiMountsVal.mount07.global.mountUnlocked, 1)
})
