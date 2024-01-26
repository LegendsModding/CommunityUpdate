const INACTIVE_DAYS_VARIABLE = "inactiveDaysNum"

// Currently only includes destruction of bases in the world, emphasizing the "offensive" player's moves
const BASES_BREAKING_INACTIVITY = [BASE_SIZE_OUTPOST, BASE_SIZE_VANGUARD, BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE, BASE_SIZE_PIGLIN_CREEPER, BASE_SIZE_PIGLIN_SKELETON, BASE_SIZE_PIGLIN_SPIDER, BASE_SIZE_PIGLIN_SILVERFISH, BASE_SIZE_PIGLIN_SLIME, BASE_SIZE_PIGLIN_ZOMBIE]

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const PlayerActivity_Reset = () => {
    OUTPUT_SetGlobalVariable(INACTIVE_DAYS_VARIABLE, -1)
    OUTPUT_DebugLogInvasion(`[PLAYER ACTIVITY] Reset inactive days. Current value is ${QUERY_GetGlobalVariable(INACTIVE_DAYS_VARIABLE)}`)
}

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const PlayerActivity_IsPlayerInactive = () => {
    return QUERY_GetGlobalVariable(INACTIVE_DAYS_VARIABLE) >= 0
}

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const PlayerActivity_IncremenentInactiveDays = () => {
    IncrementGlobal(INACTIVE_DAYS_VARIABLE)
    OUTPUT_DebugLogInvasion(`[PLAYER ACTIVITY] Incremented inactive days. Current value is ${QUERY_GetGlobalVariable(INACTIVE_DAYS_VARIABLE)}`)
}

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const PlayerActivity_GetInactiveDays = () => {
    return Math.max(QUERY_GetGlobalVariable(INACTIVE_DAYS_VARIABLE), 0)
}

const PlayerActivity_Break = () => {
    // Player destroyed a base and now piglins are angry.
    OUTPUT_DebugLogInvasion("Player angried the piglins and invasion proceeds at full power!")
    PlayerActivity_Reset()

    // Telemetry event
    if (QUERY_GetGlobalVariable(TELEMETRY_INVASION.GV_INVASION_BREAK_ACTIVE)) {
        TelemetrySendInvasionBreakEndedEvent()
        DecrementGlobal(TELEMETRY_INVASION.GV_INVASION_BREAK_ACTIVE)
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (!ruleValue.value) {
        return
    }

    PlayerActivity_Reset()

    LISTENFOR_VillageDestroyed({
        snippet: "vd_update_inactivity",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        despawned: false
    })
})

SNIPPET_VillageDestroyed("vd_update_inactivity", (villageId, _payload) => {
    // Only looking for a piglin horde
    const hordeName = QUERY_GetFactionNameFromVillageID(villageId)
    if (!FACTION_PIGLINS.includes(hordeName)) {
        return
    }

    // Only looking for destruction of the specific bases.
    // Edit BASES_BREAKING_INACTIVITY to include other types of bases
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (!BASES_BREAKING_INACTIVITY.indexOf(baseSize)) {
        return
    }

    PlayerActivity_Break()
})
