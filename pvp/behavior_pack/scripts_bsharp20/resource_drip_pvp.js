const resourceDripData = {
    snippet: "t_resource_drip",
    resourceName: "emerald",
    timerName: "timer_resource_drip",
    secondsPerDrip: 2,
    stingers: {
        start: "BAE_mus_stinger_pvp_lapis_drip_start"
    },
    messages: {
        start: "pvp_passive_income_start",
        upgrade: "pvp_passive_income_upgrade"
    },
    baseDrip: {
        gv: "gv_base_drip_amount",
        startAmount: 1,
        startDelay: 3, // In minutes; Only begin the resource drip after this amount of time has passed
        upgrades: [
            {
                timeOfDay: TIME_DAWN,
                amount: 1
            }
        ],
        cap: 200
    },
    flagDrip: {
        gv: "gv_num_resource_flags",
        tag: "pvp_lapis_flag",
        amount: 2
    }
}

const Drip = (teamName, baseDrip) => {
    const numFlags = GetTeamVariable(teamName, resourceDripData.flagDrip.gv)
    const totalDrip = baseDrip + numFlags * resourceDripData.flagDrip.amount
    if (totalDrip > 0) {
        OUTPUT_AddOrRemoveTeamResource(teamName, resourceDripData.resourceName, totalDrip, false)
    }
}

SNIPPET_LocalTimer(resourceDripData.snippet, (_payload) => {
    const baseDrip = QUERY_GetGlobalVariable(resourceDripData.baseDrip.gv)
    Drip(TEAM_BLUE, baseDrip)
    Drip(TEAM_RED, baseDrip)
    LISTENFOR_LocalTimer({
        snippet: resourceDripData.snippet,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: resourceDripData.secondsPerDrip
    })
})

SNIPPET_Bootstrap("", () => {
    LISTENFOR_VillageGenerated({
        snippet: "vg_pvp_culture",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_BLUE
    })
    LISTENFOR_VillageGenerated({
        snippet: "vg_pvp_culture",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_RED
    })
    LISTENFOR_LocalTimer({
        snippet: resourceDripData.snippet,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: resourceDripData.secondsPerDrip
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_resource_drip_init",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: GAME_MODE_GLOBAL.matchStarted
    })
})

const _IncreaseBaseDrip = (amountToIncreaseBy) => {
    const baseDrip = QUERY_GetGlobalVariable(resourceDripData.baseDrip.gv)

    if (baseDrip > resourceDripData.baseDrip.cap) {
        Once()
        return
    }

    OUTPUT_SetGlobalVariable(resourceDripData.baseDrip.gv, baseDrip + amountToIncreaseBy)
}

SNIPPET_TimeOfDay("tod_increase_resource_drip", (payload) => {
    _IncreaseBaseDrip(payload.int)
    OUTPUT_Announce(resourceDripData.messages.upgrade, [])
})

SNIPPET_GlobalVariableChanged("gvc_resource_drip_init", (_oldValue, newValue, _payload) => {
    if (newValue) {
        LISTENFOR_LocalTimer({
            snippet: "lt_start_resource_drip",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: resourceDripData.baseDrip.startDelay * 60
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_start_resource_drip", (_payload) => {
    _IncreaseBaseDrip(resourceDripData.baseDrip.startAmount)
    for (const dripIncrement of resourceDripData.baseDrip.upgrades) {
        LISTENFOR_TimeOfDay({
            snippet: "tod_increase_resource_drip",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timeOfDayNumber: dripIncrement.timeOfDay,
            payloadInt: dripIncrement.amount
        })
    }
    PlayMusicStingerToAll(resourceDripData.stingers.start)
    OUTPUT_Announce(resourceDripData.messages.start, [])
    Once()
})

SNIPPET_VillageGenerated("vg_pvp_culture", (villageId, _payload) => {
    LISTENFOR_BuildingStart({
        snippet: "bs_pvp_culture_flag",
        ownerVillageId: villageId,
        includeTags: [resourceDripData.flagDrip.tag],
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_pvp_culture_flag",
        ownerVillageId: villageId,
        includeTags: [resourceDripData.flagDrip.tag, TAG_BUILDABLE_BUILDING],
        villageId: villageId
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_pvp_culture_flag",
        ownerVillageId: villageId,
        includeTags: [resourceDripData.flagDrip.tag],
        excludeTags: [TAG_BUILDABLE_BUILDING],
        villageId: villageId
    })
})

SNIPPET_BuildingStart("bs_pvp_culture_flag", (buildingEntity, _payload) => {
    // TODO: If we have a QUERY_IsBuilding(buildableEntity) we can remove this snippet
    TagBuildableAsBuilding(buildingEntity)
})

SNIPPET_BuildingComplete("bc_pvp_culture_flag", (buildingEntity, _payload) => {
    UntagBuildableAsBuilding(buildingEntity)

    const flagTeam = QUERY_GetTeamName(buildingEntity)
    IncrementGlobal(GetTeamVariableKey(flagTeam, resourceDripData.flagDrip.gv))
})

SNIPPET_NonPopCappedEntityDestroyed("ed_pvp_culture_flag", (entity, _payload) => {
    const flagTeam = QUERY_GetTeamName(entity)
    DecrementGlobal(GetTeamVariableKey(flagTeam, resourceDripData.flagDrip.gv))
})
