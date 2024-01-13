const pvpDayNightVal = {
    messages: {
        piglinDusk: "pvp_piglin_night_start"
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchEndHQsLastStanding, (ruleValue) => {
    if (ruleValue.value) {
        Logi("Setting up listeners")
        LISTENFOR_TimeOfDay({
            snippet: "tod_pvp_audio_trigger",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timeOfDayNumber: TIME_DAWN,
            payloadString: "BAE_mus_stinger_dawn_pvp"
        })
        LISTENFOR_TimeOfDay({
            snippet: "tod_pvp_audio_trigger",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timeOfDayNumber: TIME_DUSK,
            payloadString: "BAE_mus_stinger_dusk_pvp"
        })
        LISTENFOR_TimeOfDay({
            snippet: "tod_pvp_piglin_night",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timeOfDayNumber: TIME_DUSK
        })
    }
})

SNIPPET_TimeOfDay("tod_pvp_audio_trigger", (payload) => {
    PlayMusicStingerToAll(payload.string)
})
SNIPPET_TimeOfDay("tod_pvp_piglin_night", () => {
    OUTPUT_Announce(pvpDayNightVal.messages.piglinDusk, [])
})
