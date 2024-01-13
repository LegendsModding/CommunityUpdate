const pvpHqStateVal = {
    debounce: 1, // This should be pretty low, because it could result in an "under attack" state being this much shorter than it really was. This is mainly to prevent multiple damage snippets from firing on AOE attacks.
    buffer: 10,
    timer: {
        base: "timer_base_under_attack_",
        hq: "timer_hq_under_attack_"
    },
    gv: {
        baseUnderAttack: "gv_base_under_attack_",
        hqUnderAttack: "gv_hq_under_attack_"
    }
}

const _GetBaseTimerName = (team) => {
    return `${pvpHqStateVal.timer.base}${team}`
}

const _GetHQTimerName = (team) => {
    return `${pvpHqStateVal.timer.hq}${team}`
}

const GetBaseUnderAttackGV = (team) => {
    return `${pvpHqStateVal.gv.baseUnderAttack}${team}`
}

const GetHQUnderAttackGV = (team) => {
    return `${pvpHqStateVal.gv.hqUnderAttack}${team}`
}

const IsBaseUnderAttack = (team) => {
    return QUERY_GetGlobalVariable(GetBaseUnderAttackGV(team))
}

const IsHQUnderAttack = (team) => {
    return QUERY_GetGlobalVariable(GetHQUnderAttackGV(team))
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchEndHQsLastStanding, (ruleValue) => {
    if (!ruleValue) {
        return
    }

    LISTENFOR_VillageGenerated({
        snippet: "vg_hq_state",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_RED
    })
    LISTENFOR_VillageGenerated({
        snippet: "vg_hq_state",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_BLUE
    })
})

const _ListenForBaseDamage = (villageId, team) => {
    LISTENFOR_HealthChanged({
        snippet: "hc_base_under_attack",
        ownerVillageId: villageId,
        villageId: villageId,
        excludeTags: [TAG_PVP_HQ],
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadString: team
    })
}

const _ListenForHQDamage = (villageId, team) => {
    LISTENFOR_HealthChanged({
        snippet: "hc_hq_under_attack",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: [TAG_PVP_HQ],
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadString: team
    })
}

SNIPPET_VillageGenerated("vg_hq_state", (villageId, payload) => {
    const team = QUERY_GetTeamName(GetVillageEntityFromID(villageId))
    _ListenForBaseDamage(villageId, team)
    _ListenForHQDamage(villageId, team)

    LISTENFOR_Timer({
        snippet: "t_base_no_longer_under_attack",
        ownerVillageId: villageId,
        timerName: _GetBaseTimerName(team),
        threshold: 0,
        payloadString: team
    })
    LISTENFOR_Timer({
        snippet: "t_hq_no_longer_under_attack",
        ownerVillageId: villageId,
        timerName: _GetHQTimerName(team),
        threshold: 0,
        payloadString: team
    })
})

SNIPPET_HealthChanged("hc_base_under_attack", (_entity, _currentHealth, _previousHealth, payload) => {
    Once()

    const team = payload.string
    LISTENFOR_LocalTimer({
        snippet: "lt_base_under_attack_debounce",
        ownerVillageId: payload.ownerVillageId,
        waitTime: pvpHqStateVal.debounce,
        payloadString: team
    })
    OUTPUT_SetNamedTimer(_GetBaseTimerName(team), pvpHqStateVal.buffer)

    OUTPUT_SetGlobalVariable(GetBaseUnderAttackGV(team), 1)
})

SNIPPET_LocalTimer("lt_base_under_attack_debounce", (payload) => {
    const team = payload.string
    _ListenForBaseDamage(payload.ownerVillageId, team)
})

SNIPPET_Timer("t_base_no_longer_under_attack", (_timeLeft, payload) => {
    const team = payload.string
    OUTPUT_SetGlobalVariable(GetBaseUnderAttackGV(team), 0)
})

SNIPPET_HealthChanged("hc_hq_under_attack", (_entity, _currentHealth, _previousHealth, payload) => {
    Once()

    const team = payload.string
    LISTENFOR_LocalTimer({
        snippet: "lt_hq_under_attack_debounce",
        ownerVillageId: payload.ownerVillageId,
        waitTime: pvpHqStateVal.debounce,
        payloadString: team
    })
    OUTPUT_SetNamedTimer(_GetHQTimerName(team), pvpHqStateVal.buffer)

    OUTPUT_SetGlobalVariable(GetHQUnderAttackGV(team), 1)
})

SNIPPET_LocalTimer("lt_hq_under_attack_debounce", (payload) => {
    const team = payload.string
    _ListenForHQDamage(payload.ownerVillageId, team)
})

SNIPPET_Timer("t_hq_no_longer_under_attack", (_timeLeft, payload) => {
    const team = payload.string
    OUTPUT_SetGlobalVariable(GetHQUnderAttackGV(team), 0)
})
