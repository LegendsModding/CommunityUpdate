//This script controls how frequently the witch hut activates, whether it has any random variance and how long it remains active for
//By default this will cycle through on / off states 1) Delay +/- variance  before activation 2) Becomes active, lasts for a duration 3) Turns off and cycle repeats
//The host can modify these through custom game settings. Setting some options to zero, can make the witch hut always active, etc.
const witchHutEventVal = {
    delayBase: 300, // 5 mins
    delayMin: 20, //Minimum time before witch hut activates, for if host has set delayBase to 0 with custom setting. Without this, timer is 0 and doesn't activate.
    delayVariance: 60, //The value to vary the witch huts activation. This value forms the positive and negative end of a range, then a random value is selected.
    eventDuration: 300, // 5 mins
    eventWarningEndDuration: 10, // 10 seconds
    proximityAnnounceCooldown: 10,
    gvCustomSettingDuration: "tools_tech_tree_witch_hut_activation_duration",
    gvCustomSettingTime: "tools_tech_tree_witch_hut_activation_time",
    gvCustomSettingVariance: "tools_tech_tree_witch_hut_activation_variance",
    gvEventActive: "gv_witch_event_active",
    timerEventCooldown: "timer_witch_event_cooldown",
    timerEventDuration: "timer_witch_event_duration",
    stinger: {
        start: "BAE_mus_stinger_pvp_path_witch_start",
        end: "BAE_mus_stinger_pvp_path_witch_stop"
    },
    messages: {
        start: "pvp_witch_event_start",
        end: "pvp_witch_event_end",
        enterActive: "pvp_witch_event_arrive_active",
        enterInactive: "pvp_witch_event_arrive_inactive"
    },
    vo: {
        witchSpawned: {
            friendly: "pvp_friendly_witch_spawned_1",
            enemy: "pvp_enemy_witch_spawned_1",
            gv: "gv_witch_spawned_announce_"
        }
    },
    witchJournalUnlock: "unlock_journal_mob_witch_pvp",
    witchTypeSelectUnlock: "unlock_battle_view_witch"
}

//If its a custom game change the values from the above config and set a global variable for possible referencing later (not currently used, but helpful for debug)
SNIPPET_GameSettingInitialized(witchHutEventVal.gvCustomSettingDuration, (value) => {
    witchHutEventVal.eventDuration = value.value * 60
})

SNIPPET_GameSettingInitialized(witchHutEventVal.gvCustomSettingTime, (value) => {
    witchHutEventVal.delayBase = value.value * 60
})

SNIPPET_GameSettingInitialized(witchHutEventVal.gvCustomSettingVariance, (value) => {
    witchHutEventVal.delayVariance = value.value * 60
})

//Takes in a single value, then uses that as both ends of a negative and positive range, then picks a random value between that.
const _CalculateWitchHutDelayVariance = (variance) => {
    //Get the value of 'time' and then compare whether 'variance' passed in is larger than it, if it is, just use time.
    //E.g. If the witch hut activates every 60 seconds, but you put a variance of 120, it wouldn't work, so use 60 instead. Meaning it could occur anytime from 0 to 120 seconds.
    const time = witchHutEventVal.delayBase
    const min = Math.min(variance, time)
    const randomVariance = RandomIntFromInterval(min * -1, min)
    return randomVariance
}

SNIPPET_InheritsFromGameMode("conquest", () => {
    //The witch hut spawning in world is enabled by default, but can be changed by custom settings.
    //If not default, then don't do any of this - the player has disabled them or is going to build them instead.
    if (witchHutEnabled.defaultValue === 1) {
        LISTENFOR_VillageGenerated({
            snippet: "vg_witch_hut_event_start",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: "faction.witch.pvp"
        })

        LISTENFOR_Timer({
            snippet: "t_witch_hut_enabled",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timerName: witchHutEventVal.timerEventCooldown,
            threshold: 0
        })

        LISTENFOR_Timer({
            snippet: "t_witch_hut_disabled",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timerName: witchHutEventVal.timerEventDuration,
            threshold: 0
        })

        LISTENFOR_Timer({
            snippet: "t_witch_hut_disable_warning",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timerName: witchHutEventVal.timerEventDuration,
            threshold: witchHutEventVal.eventWarningEndDuration
        })
    }
})

SNIPPET_VillageGenerated("vg_witch_hut_event_start", (villageId, _payload) => {
    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_witch_hut_event_start",
        ownerVillageId: villageId,
        variableName: GAME_MODE_GLOBAL.matchStarted
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_witch_hut_built",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["witchspawner"]
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_witch_cauldron_unlock_pvp",
        ownerVillageId: villageId,
        includeTags: ["witch"]
    })

    const villageEntity = GetVillageEntityFromID(villageId)
    const villageBoundaryVolume = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_generic_small", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_witch_hut_pvp",
        triggerEntity: villageBoundaryVolume,
        ownerVillageId: villageId
    })
})

SNIPPET_SpatialPartitionEntered("spe_witch_hut_pvp", (_triggerEntity, intruderEntity, _payload) => {
    if (!QUERY_GetGlobalVariable(witchHutEventVal.gvEventActive)) {
        if (DoIfNotOnCooldown(witchHutEventVal.proximityAnnounceCooldown, "gv_witch_proximity_announce_cooldown")) {
            OUTPUT_AnnouncePlayer(witchHutEventVal.messages.enterInactive, [], intruderEntity)
        }
    }
})

const _GetWitchHut = () => {
    return QUERY_GetEntitiesWithTags(["witchspawner"])
}

const _StartWitchTimer = () => {
    //Query the amount of time before this should trigger
    const timerDuration = witchHutEventVal.delayBase
    //Query the amount of variance we should have
    const variance = witchHutEventVal.delayVariance
    const timerVariance = _CalculateWitchHutDelayVariance(variance)

    //If this is custom game and set to 0, then we play the delayMin, which is enough to trigger the witch hut activation a bit after the NIS
    if (QUERY_GameDifficulty() === "Custom" && timerDuration === 0) {
        OUTPUT_SetNamedTimer(witchHutEventVal.timerEventCooldown, witchHutEventVal.delayMin)
    } else {
        //Otherwise we create a timer that matches the time / delay base and add the variance to it (which can be positive or negative).
        OUTPUT_SetNamedTimer(witchHutEventVal.timerEventCooldown, timerDuration + timerVariance)
    }
}

SNIPPET_GlobalVariableChanged("gvc_witch_hut_event_start", (_oldValue, newValue, _payload) => {
    if (newValue) {
        _StartWitchTimer()
        Once()
    }
})

SNIPPET_BuildingComplete("bc_witch_hut_built", (entity, payload) => {
    OUTPUT_SetInteractionState(entity, false)

    // Presentation
    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(payload.ownerVillageId), MAP_KEY.WITCH_HUT_STATE, WITCH_HUT_STATE.INACTIVE)
})

//Timer that enables the witch hut, sets its interaction state to true
SNIPPET_Timer("t_witch_hut_enabled", () => {
    Logi("The witch hut event is on")

    const witchHut = _GetWitchHut()
    const villageId = QUERY_GetVillageIDFromEntity(witchHut)

    OUTPUT_SetInteractionState(witchHut, true)
    OUTPUT_SetGlobalVariable(witchHutEventVal.gvEventActive, 1)

    // Presentation
    OUTPUT_Announce(witchHutEventVal.messages.start, [])
    OUTPUT_SendPositionalAudio(witchHutEventVal.stinger.start, witchHut)

    OUTPUT_SetGlobalVariable(witchHutEventVal.vo.witchSpawned.gv + TEAM_BLUE, 0)
    OUTPUT_SetGlobalVariable(witchHutEventVal.vo.witchSpawned.gv + TEAM_RED, 0)

    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.WITCH_HUT_STATE, WITCH_HUT_STATE.ACTIVE)

    //Get the duration of the event and timer
    const eventDuration = witchHutEventVal.eventDuration
    const timerDuration = witchHutEventVal.delayBase

    //If this is a custom game and EITHER of these values have been set to 0, the host wants the witch hut activation to last forever
    if (QUERY_GameDifficulty() === "Custom" && (eventDuration === 0 || timerDuration === 0)) {
        return
    }

    //If that wasn't the case, the witch hut activation will vary in its timing
    OUTPUT_SetNamedTimer(witchHutEventVal.timerEventDuration, eventDuration)
    OUTPUT_DisplayNamedTimer(witchHutEventVal.timerEventDuration, true, true)
})

//Timer that disables the witch hut, sets its interaction state to false
SNIPPET_Timer("t_witch_hut_disabled", () => {
    Logi("The witch hut event is over")

    const witchHut = _GetWitchHut()
    const villageId = QUERY_GetVillageIDFromEntity(witchHut)

    OUTPUT_SetInteractionState(witchHut, false)
    OUTPUT_SetGlobalVariable(witchHutEventVal.gvEventActive, 0)

    _StartWitchTimer(witchHut)

    // Presentation
    OUTPUT_Announce(witchHutEventVal.messages.end, [])
    OUTPUT_SendPositionalAudio(witchHutEventVal.stinger.end, witchHut)

    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.WITCH_HUT_STATE, WITCH_HUT_STATE.INACTIVE)

    OUTPUT_DisplayNamedTimer(witchHutEventVal.timerEventDuration, false, false)
})

SNIPPET_Timer("t_witch_hut_disable_warning", () => {
    Logi("The witch hut event is over soon")
    OUTPUT_FlashNamedTimer(witchHutEventVal.timerEventDuration, witchHutEventVal.eventWarningEndDuration)
    PlayPresentationActionToAll("pvp_witch_event_cooldown")
})

//Plays some VO and awards journal entry and type select unlock
SNIPPET_EntitySpawned("es_witch_cauldron_unlock_pvp", (entity, _payload) => {
    const teamName = QUERY_GetTeamName(entity)

    if (QUERY_GetGlobalVariable(witchHutEventVal.vo.witchSpawned.gv + teamName) === 0) {
        PlayPresentationActionTeamsHelper(witchHutEventVal.vo.witchSpawned.friendly, witchHutEventVal.vo.witchSpawned.enemy, teamName)
        OUTPUT_SetGlobalVariable(witchHutEventVal.vo.witchSpawned.gv + teamName, 1)
    }

    if (QUERY_GetTeamResource(teamName, witchHutEventVal.witchJournalUnlock) === 0) {
        OUTPUT_AddOrRemoveTeamResource(teamName, witchHutEventVal.witchJournalUnlock, 1, true)
    }

    if (QUERY_GetTeamResource(teamName, witchHutEventVal.witchTypeSelectUnlock) === 0) {
        OUTPUT_AddOrRemoveTeamResource(teamName, witchHutEventVal.witchTypeSelectUnlock, 1, true)
    }
})
