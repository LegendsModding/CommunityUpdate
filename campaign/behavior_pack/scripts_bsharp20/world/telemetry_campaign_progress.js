const campaignProgressUpdateTime = 600
const campaignBehaviourUpdateTime = 1800

const _GetPreviousAct = (acGlobalVariable) => {
    if (acGlobalVariable === ACTS.ACT_1B) {
        return "1A"
    } else if (acGlobalVariable === ACTS.ACT_2) {
        return "1B"
    } else if (acGlobalVariable === ACTS.ACT_3A) {
        return "2"
    } else if (acGlobalVariable === ACTS.EPILOGUE) {
        return "3"
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (ruleValue.value) {
        for (const key in ACTS) {
            LISTENFOR_GlobalVariableChanged({
                snippet: "gvc_campaing_progress_acts",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                variableName: ACTS[key],
                payloadString: ACTS[key]
            })
        }

        LISTENFOR_LocalTimer({
            snippet: "lt_campaign_progress_update",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: campaignProgressUpdateTime
        })

        LISTENFOR_LocalTimer({
            snippet: "lt_campaign_behaviour_update",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: campaignBehaviourUpdateTime
        })

        LISTENFOR_PlayerFastTravelled({
            snippet: "ft_fast_travel_campaign_progress",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_TimeOfDay({
            snippet: "tod_dawn_campaign_progress",
            timeOfDayNumber: TIME_DAWN,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_VillageDestroyed({
            snippet: "vd_campaign_progress_piglins_destroyed",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            despawned: false
        })

        LISTENFOR_BuildingStart({
            snippet: "bs_spawner_placed_campaign_progress",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["player_buildable", "spawner"]
        })

        LISTENFOR_DeconstructionStarted({
            snippet: "ds_spawner_removed_campaign_progress",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["player_buildable", "spawner"]
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_spawner_campaign_progress",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["player_buildable", "spawner"]
        })
    }
})

SNIPPET_LocalTimer("lt_campaign_progress_update", () => {
    OUTPUT_SetGlobalVariable(GV_TELEMETRY_LOCAL_TIMER_VALUE, QUERY_GetGlobalVariable(GV_TELEMETRY_LOCAL_TIMER_VALUE) + campaignProgressUpdateTime)
    TelemetrySendCampaignProgressEvent("null")

    LISTENFOR_LocalTimer({
        snippet: "lt_campaign_progress_update",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: campaignProgressUpdateTime
    })
})

SNIPPET_LocalTimer("lt_campaign_behaviour_update", () => {
    OUTPUT_TelemetryRecordCampaignBehaviourProgressEvent(false, "NULL", QUERY_GetGlobalVariable(GV_TELEMETRY_LOCAL_TIMER_VALUE) + campaignProgressUpdateTime)

    LISTENFOR_LocalTimer({
        snippet: "lt_campaign_behaviour_update",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: campaignBehaviourUpdateTime
    })
})

SNIPPET_GlobalVariableChanged("gvc_campaing_progress_acts", (oldValue, newValue, payload) => {
    if (oldValue === 0 && newValue === 1) {
        const previousAct = _GetPreviousAct(payload.string)
        if (HaveWeSkippedAct1() && (previousAct === "1A" || previousAct === "1B")) {
            return
        }
        if (previousAct !== undefined) {
            TelemetrySendCampaignProgressEvent(previousAct)
            OUTPUT_TelemetryRecordCampaignBehaviourProgressEvent(true, previousAct, 0)
        }
    }
})

SNIPPET_PlayerFastTravelled("ft_fast_travel_campaign_progress", () => {
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.FAST_TRAVEL_PROGRESS.globalVariable)
})

SNIPPET_TimeOfDay("tod_dawn_campaign_progress", () => {
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.DAY_NIGHT_CYCLE_PROGRESS.globalVariable)
})

SNIPPET_VillageDestroyed("vd_campaign_progress_piglins_destroyed", (villageId, _payload) => {
    const factionsTracking = [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST, FACTION_NAME_DBB, FACTION_NAME_WOF]
    const horde = QUERY_GetFactionNameFromVillageID(villageId)

    if (!factionsTracking.includes(horde)) {
        return
    }

    const baseSizes = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE, BASE_SIZE_BOSS, BASE_SIZE_DARK_BEACON, BASE_SIZE_PIGLIN_WOF]
    const outpostSizes = [BASE_SIZE_OUTPOST, BASE_SIZE_ACT1_FIRST_SKIRMISH, BASE_SIZE_ACT_1_A, BASE_SIZE_ACT_1_B, BASE_SIZE_ACT_1_C, BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE]
    const size = QUERY_GetFactionSizeFromVillageID(villageId)

    // ONE edge case of a fake large DBB base, don't count it
    if (horde === FACTION_NAME_DBB && size === BASE_SIZE_LARGE) {
        return
    }

    if (baseSizes.includes(size)) {
        IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.PIGLIN_BASE_PROGRESS.globalVariable)
    }

    if (outpostSizes.includes(size)) {
        IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.PIGLIN_OUTPOST_PROGRESS.globalVariable)
    }
})

SNIPPET_BuildingStart("bs_spawner_placed_campaign_progress", (_buildingEntity, _payload) => {
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.SPAWNER_PLACED_PROGRESS.globalVariable)
})

SNIPPET_DeconstructionStarted("ds_spawner_removed_campaign_progress", (_deconstructedEntity, _deconstructorEntity, _payload) => {
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.SPAWNER_INTERACT_REMOVE_PROGRESS.globalVariable)
})

SNIPPET_BuildingComplete("bc_spawner_campaign_progress", (buildingEntity, _payload) => {
    // We listen for entities spawned from player spawners to count how many times player spawned mobs from a spawner
    LISTENFOR_BuildableSpawnerSpawned({
        snippet: "bss_spawner_interacted_campaign_progress",
        buildableSpawner: buildingEntity,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
})

SNIPPET_BuildableSpawnerSpawned("bss_spawner_interacted_campaign_progress", (_buildableSpawner, _entity, _payload) => {
    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.SPAWNER_INTERACT_SPAWN_PROGRESS.globalVariable)
})