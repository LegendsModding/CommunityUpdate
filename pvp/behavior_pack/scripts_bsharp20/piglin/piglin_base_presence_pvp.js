const piglinPresenceDataPvP = {
    gv: {
        night: "gv_is_night_piglin_outposts_pvp",
        waveSize: "gv_wave_size"
    },
    wavePiglinTag: "wave_piglin"
}

const _GetHordeIndexGV = (hordeName, getNightIndex) => {
    return "gv_" + hordeName + "_" + (getNightIndex ? "nighttime_outpost_index" : "daytime_outpost_index")
}

const GetWaveSize = (hordeName, isNight) => {
    return QUERY_GetGlobalVariable(`${hordeName}_${piglinPresenceDataPvP.gv.waveSize}_${isNight ? "_nighttime" : "_daytime"}`)
}

const _SetWaveSize = (hordeName, waveSize, isNight) => {
    OUTPUT_SetGlobalVariable(`${hordeName}_${piglinPresenceDataPvP.gv.waveSize}_${isNight ? "_nighttime" : "_daytime"}`, waveSize)
}

// Sets up global timers for the given horde and loadouts. Can set up day/night loadouts individually.
const _SetupLoadouts = (loadouts, hordeName, isNightLoadout) => {
    const firstLoadout = loadouts[0]
    if (firstLoadout) {
        LISTENFOR_LocalTimer({
            snippet: "lt_set_loadout",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: firstLoadout.beginAt * 60,
            payloadString: hordeName,
            payloadInt: isNightLoadout
        })
    }
}

SNIPPET_GlobalVariableChanged("gvc_match_start_piglin_base_presence", (_oldValue, newValue, _payload) => {
    if (newValue) {
        for (const hordeName in PiglinPVPHordes) {
            const hordeData = PiglinPVPHordes[hordeName]
            _SetupLoadouts(hordeData.loadouts.day, hordeName, 0)
            _SetupLoadouts(hordeData.loadouts.night, hordeName, 1)
        }
        Once()
    }
})

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchStartHQsBuilt, (ruleValue) => {
    if (ruleValue.value) {
        for (const hordeName in PiglinPVPHordes) {
            LISTENFOR_VillageGenerated({
                snippet: "vg_pvp_piglin_presence",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: hordeName,
                payloadString: hordeName
            })

            // Sets initial loadout indices to -1 for both day and night loadouts; required for loadout system to behave before the first real loadout
            OUTPUT_SetGlobalVariable(_GetHordeIndexGV(hordeName, 0), -1)
            OUTPUT_SetGlobalVariable(_GetHordeIndexGV(hordeName, 1), -1)

            LISTENFOR_BuildingComplete({
                snippet: "bc_pvp_barracks",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: ["barracks"],
                factionName: hordeName,
                payloadString: hordeName
            })
        }

        const timeOfDay = QUERY_GetTimeOfDay()
        OUTPUT_SetGlobalVariable(piglinPresenceDataPvP.gv.night, IsNightTime(timeOfDay) ? 1 : 0)

        LISTENFOR_TimeOfDay({
            snippet: "tod_piglin_outposts",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timeOfDayNumber: TIME_DAWN,
            payloadInt: 0
        })
        LISTENFOR_TimeOfDay({
            snippet: "tod_piglin_outposts",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timeOfDayNumber: TIME_DUSK,
            payloadInt: 1
        })

        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_match_start_piglin_base_presence",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: GAME_MODE_GLOBAL.matchStarted
        })
    }
})

SNIPPET_TimeOfDay("tod_piglin_outposts", (payload) => {
    OUTPUT_SetGlobalVariable(piglinPresenceDataPvP.gv.night, payload.int)
})

SNIPPET_VillageGenerated("vg_pvp_piglin_presence", (villageId, payload) => {
    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_time_of_day_changed_piglin_outpost",
        ownerVillageId: villageId,
        variableName: piglinPresenceDataPvP.gv.night,
        payloadString: payload.string
    })
})

// Update barracks when we change between day and night
SNIPPET_GlobalVariableChanged("gvc_time_of_day_changed_piglin_outpost", (_oldValue, newValue, payload) => {
    const barracks = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(payload.ownerVillageId), ["barracks"], [])
    const hordeName = payload.string
    const hordeData = PiglinPVPHordes[hordeName]

    if (newValue === 1) {
        const index = QUERY_GetGlobalVariable(_GetHordeIndexGV(hordeName, true))
        if (index !== -1) {
            const nightLoadout = hordeData.loadouts.night[index]
            _SetLoadout(barracks, nightLoadout)
        }
    } else {
        const index = QUERY_GetGlobalVariable(_GetHordeIndexGV(hordeName, false))
        if (index !== -1) {
            const dayLoadout = hordeData.loadouts.day[index]
            _SetLoadout(barracks, dayLoadout)
        }
    }
})

const _SetLoadout = (barracks, loadoutData) => {
    OUTPUT_SetBarracksSpawnTypes(barracks, loadoutData.loadout)
    OUTPUT_SetBarracksSpawnCap(barracks, loadoutData.cap)
    OUTPUT_SetBarracksSpawnRate(barracks, loadoutData.rate)
    OUTPUT_SetBarracksBatchSize(barracks, loadoutData.batch)
}

SNIPPET_BuildingComplete("bc_pvp_barracks", (buildingEntity, payload) => {
    const hordeName = payload.string
    const isNight = QUERY_GetGlobalVariable(piglinPresenceDataPvP.gv.night)
    const index = isNight ? QUERY_GetGlobalVariable(_GetHordeIndexGV(hordeName, true)) : QUERY_GetGlobalVariable(_GetHordeIndexGV(hordeName, false))

    // The loadout index will be -1 before any loadouts are set
    if (index === -1) {
        OUTPUT_SetBarracksSpawnCap(buildingEntity, 0)
    } else {
        const hordeData = PiglinPVPHordes[hordeName]
        const loadouts = isNight ? hordeData.loadouts.night : hordeData.loadouts.day
        _SetLoadout(buildingEntity, loadouts[index])
    }
})

// This timer is global rather than per-village, since we want the timings to be globally consistent, since all villages of the same horde share the same loadout timings anyways.
SNIPPET_LocalTimer("lt_set_loadout", (payload) => {
    const isNightLoadout = payload.int
    const hordeName = payload.string
    const indexGV = _GetHordeIndexGV(hordeName, isNightLoadout)
    IncrementGlobal(indexGV)

    const hordeData = PiglinPVPHordes[hordeName]
    const index = QUERY_GetGlobalVariable(indexGV)
    const loadouts = isNightLoadout ? hordeData.loadouts.night : hordeData.loadouts.day
    const currentLoadout = loadouts[index]

    const isNight = QUERY_GetGlobalVariable(piglinPresenceDataPvP.gv.night)
    if ((isNight && isNightLoadout) || (!isNight && !isNightLoadout)) {
        ForEachAliveVillageEntity((villageEntity) => {
            const villageHorde = QUERY_GetFactionNameFromEntity(villageEntity)
            if (villageHorde !== hordeName) {
                return
            }
            const barracks = GetEntitiesWithTagsAndVillage(["barracks"], QUERY_GetVillageIDFromEntity(villageEntity))
            _SetLoadout(barracks, currentLoadout)
        })
    }

    if (currentLoadout.waveSize !== undefined) {
        _SetWaveSize(hordeName, currentLoadout.waveSize, isNightLoadout)
    }

    const nextLoadout = loadouts[index + 1]
    if (nextLoadout) {
        LISTENFOR_LocalTimer({
            snippet: "lt_set_loadout",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: (nextLoadout.beginAt - currentLoadout.beginAt) * 60,
            payloadString: payload.string,
            payloadInt: payload.int
        })
    }
})
