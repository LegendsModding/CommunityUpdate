const damageIncreaseData = {
    stages: [
        {
            timeToBegin: 40,
            buff: "badger:buff_increase_damage_1_pvp"
        },
        {
            timeToBegin: 10,
            buff: "badger:buff_increase_damage_2_pvp"
        },
        {
            timeToBegin: 10,
            buff: "badger:buff_increase_damage_3_pvp"
        }
    ],
    unitsToBuff: [
        {
            include: ["mob"],
            exclude: ["piglin", "animal"]
        }
    ],
    buildingsToBuff: [
        {
            include: ["redStoneLauncher"],
            exclude: []
        }
    ],
    messages: {
        mobDamageIncrease: "pvp_late_game_damage_increase"
    },
    gv: {
        escalationIndex: "gv_player_unit_escalation_index"
    }
}

SNIPPET_Bootstrap("", () => {
    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_start_damage_increase_timer",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: GAME_MODE_GLOBAL.matchStarted
    })
})

SNIPPET_GlobalVariableChanged("gvc_start_damage_increase_timer", (_oldValue, newValue, _payload) => {
    const initialStage = damageIncreaseData.stages[0]
    if (newValue && initialStage) {
        LISTENFOR_LocalTimer({
            snippet: "lt_escalation_damage_increase_pvp",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: initialStage.timeToBegin * 60,
            payloadInt: 0
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_escalation_damage_increase_pvp", (payload) => {
    const stageIndex = payload.int
    const stage = damageIncreaseData.stages[stageIndex]

    const unitTargets = damageIncreaseData.unitsToBuff.reduce((acc, curVal) => OPER_Union(acc, QUERY_GetEntitiesWithTagFilter(curVal.include, curVal.exclude)), [])
    const buildingTargets = damageIncreaseData.buildingsToBuff.reduce((acc, curVal) => OPER_Union(acc, QUERY_GetEntitiesWithTagFilter(curVal.include, curVal.exclude)), [])
    const allTargets = OPER_Union(unitTargets, buildingTargets)

    // Remove previous buffs
    if (stageIndex > 0) {
        const prevBuff = damageIncreaseData.stages[stageIndex - 1].buff
        if (prevBuff) {
            OUTPUT_RemoveBuff(allTargets, prevBuff)
        }
    }

    // Apply new buff
    const curBuff = stage.buff
    if (curBuff) {
        OUTPUT_ApplyBuff(allTargets, curBuff)
        OUTPUT_Announce(damageIncreaseData.messages.mobDamageIncrease, [])
    }

    // Plan next escalation
    const nextStage = damageIncreaseData.stages[stageIndex + 1]
    if (nextStage) {
        LISTENFOR_LocalTimer({
            snippet: "lt_escalation_damage_increase_pvp",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: nextStage.timeToBegin * 60,
            payloadInt: stageIndex + 1
        })
    }

    // We could set up these listeners at the start of the game, but there's no point in having them listening until we've reached at least the 1st escalation phase (i.e. index 0)
    if (stageIndex === 0) {
        for (const unitsToBuff of damageIncreaseData.unitsToBuff) {
            LISTENFOR_EntitySpawned({
                snippet: "es_escalation_damage_increase",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: unitsToBuff.include,
                excludeTags: unitsToBuff.exclude
            })
        }
        for (const buildingsToBuff of damageIncreaseData.buildingsToBuff) {
            LISTENFOR_BuildingStart({
                snippet: "bs_escalation_damage_increase",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: buildingsToBuff.include,
                excludeTags: buildingsToBuff.exclude
            })
        }
    }

    OUTPUT_SetGlobalVariable(damageIncreaseData.gv.escalationIndex, stageIndex)
})

SNIPPET_EntitySpawned("es_escalation_damage_increase", (entity, _payload) => {
    const stageIndex = QUERY_GetGlobalVariable(damageIncreaseData.gv.escalationIndex)
    const stage = damageIncreaseData.stages[stageIndex]
    OUTPUT_ApplyBuff(entity, stage.buff)
})

SNIPPET_BuildingStart("bs_escalation_damage_increase", (entity, _payload) => {
    const stageIndex = QUERY_GetGlobalVariable(damageIncreaseData.gv.escalationIndex)
    const stage = damageIncreaseData.stages[stageIndex]
    OUTPUT_ApplyBuff(entity, stage.buff)
})
