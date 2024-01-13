const pvpHqAudioVal = {
    gv: "gv_index_hq_under_attack_audio_",
    timer: "timer_hq_under_attack_audio_",
    delay: 0.1, // Set low, but not to 0. This is the delay of the hq bell audio when a threshold is met.
    healthRanges: [
        {
            threshold: 0.75,
            event: "BAE_pvp_hq_bells_75",
            frequency: 12
        },
        {
            threshold: 0.5,
            event: "BAE_pvp_hq_bells_50",
            frequency: 15
        },
        {
            threshold: 0.25,
            event: "BAE_pvp_hq_bells_25",
            frequency: 12
        },
        {
            threshold: 0.1,
            event: "BAE_pvp_hq_bells_10",
            frequency: 8
        }
    ]
}

const _GetHQAudioIndex = (team) => {
    return QUERY_GetGlobalVariable(`${pvpHqAudioVal.gv}${team}`)
}

const _SetHQAudioIndex = (team, value) => {
    OUTPUT_SetGlobalVariable(`${pvpHqAudioVal.gv}${team}`, value)
}

const _GetHQAudioTimerName = (team) => {
    return `${pvpHqAudioVal.timer}${team}`
}

const _SetHQAudioTimer = (team, value) => {
    OUTPUT_SetNamedTimer(_GetHQAudioTimerName(team), value)
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchEndHQsLastStanding, (ruleValue) => {
    if (!ruleValue.value) {
        return
    }

    LISTENFOR_BuildingComplete({
        snippet: "bc_pvp_hq_health_audio",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [TAG_PVP_HQ]
    })
})

SNIPPET_BuildingComplete("bc_pvp_hq_health_audio", (hqEntity, _payload) => {
    const team = QUERY_GetTeamName(hqEntity)
    _SetHQAudioIndex(team, -1)

    for (let index = 0; index < pvpHqAudioVal.healthRanges.length; index++) {
        const healthRange = pvpHqAudioVal.healthRanges[index]
        LISTENFOR_HealthChanged({
            snippet: "hc_pvp_hq_threshold_damage_audio",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            direction: HEALTH_DIRECTION.DAMAGE,
            normalizedThreshold: healthRange.threshold,
            triggerMode: HEALTH_TRIGGER_MODE.CROSS,
            entities: hqEntity,
            payloadInt: index
        })
        LISTENFOR_HealthChanged({
            snippet: "hc_pvp_hq_threshold_heal_audio",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            direction: HEALTH_DIRECTION.HEAL,
            normalizedThreshold: healthRange.threshold,
            triggerMode: HEALTH_TRIGGER_MODE.CROSS,
            entities: hqEntity,
            payloadInt: index
        })
    }

    LISTENFOR_Timer({
        snippet: "t_send_hq_under_attack_pres_event",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timerName: _GetHQAudioTimerName(team),
        threshold: 0,
        payloadString: team
    })
})

SNIPPET_HealthChanged("hc_pvp_hq_threshold_damage_audio", (entity, _currentHealth, _previousHealth, payload) => {
    const index = payload.int
    const team = QUERY_GetTeamName(entity)

    _SetHQAudioIndex(team, index)

    // When dipping under a health threshold, play the new sound immediately, after which point it will use its normal frequency
    _SetHQAudioTimer(team, pvpHqAudioVal.delay)
})

SNIPPET_HealthChanged("hc_pvp_hq_threshold_heal_audio", (entity, _currentHealth, _previousHealth, payload) => {
    const index = payload.int
    const prevIndex = index - 1
    const team = QUERY_GetTeamName(entity)

    _SetHQAudioIndex(team, prevIndex)
})

SNIPPET_Timer("t_send_hq_under_attack_pres_event", (_timeLeft, payload) => {
    const team = payload.string

    if (IsHQUnderAttack(team)) {
        const index = _GetHQAudioIndex(team)
        if (index !== -1) {
            const hqEntity = FILTER_ByTeam(QUERY_GetEntitiesWithTagFilter([TAG_PVP_HQ], []), team)
            if (HasEntities(hqEntity)) {
                const healthRange = pvpHqAudioVal.healthRanges[index]
                OUTPUT_SendPositionalAudioToTeam(healthRange.event, hqEntity, team)

                _SetHQAudioTimer(team, healthRange.frequency)
            }
        }
    } else {
        // If the HQ isn't under attack, we want to send an event as soon as it is.
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_hq_under_attack_audio",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: GetHQUnderAttackGV(team),
            payloadString: team
        })
    }
})

SNIPPET_GlobalVariableChanged("gvc_hq_under_attack_audio", (_oldValue, newValue, payload) => {
    Once()

    const team = payload.string

    if (newValue === 1) {
        _SetHQAudioTimer(team, pvpHqAudioVal.delay)
    }
})