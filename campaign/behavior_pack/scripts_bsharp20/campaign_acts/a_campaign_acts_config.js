const campaignActsVal = {
    snippets: {
        act1AWofBasePlanned: "act_1a_wof_base_planned",
        act1ABaseDestroyed: "act_1a_piglin_base_destroyed",
        act1bBaseBuilt: "act_1b_piglin_base_finished_building",
        act2BaseDestroyed: "act_2_piglin_base_destroyed",
        act3ABaseBuilt: "act_3a_piglin_base_built",
        act3ABaseDestroyed: "act_3a_piglin_base_destroyed",
        act3BBaseDestroyed: "act_3b_piglin_base_destroyed"
    },
    testSnippet: {
        testSnippetStartAct1B: "ev_testing_campaign_start_act_1b",
        testSnippetStartAct2: "ev_testing_campaign_start_act_2",
        testSnippetStartAct2WithArrivalOfAll: "ev_testing_campaign_start_act_2_with_arrival_of_all",
        testSnippetLastAct2Base: "ev_testing_campain_last_act_2_base",
        testSnippetStartAct3A: "ev_testing_campaign_start_act_3a",
        testSnippetEndAct3A: "ev_testing_campaign_end_act_3a",
        testSnippetStartAct3B: "ev_testing_campaign_start_act_3b",
        testSnippetStartEpilogue: "ev_testing_campaign_start_epilogue",
        testSnippetDamageNearestPigBase: "ev_testing_campaign_damage_nearest_pig_base",
        testSnippetDestroyNearestPigBase: "ev_testing_campaign_destroy_nearest_pig_base",
        testSnippetDestroyPigFaction: "ev_testing_campaign_destroy_pig_faction",
        testSnippetDestroyPigFactionBoss: "ev_testing_campaign_destroy_pig_faction_boss"
    },
    testEvent: {
        testStartAct1B: "test_campaign_start_act_1b",
        testStartAct2: "test_campaign_start_act_2",
        testStartAct2WithArrivalOfAll: "test_campaign_start_act_2_with_arrival_of_all",
        testLastAct2Base: "test_campaign_last_act_2_base",
        testStartAct3A: "test_campaign_start_act_3a",
        testEndAct3A: "test_campaign_end_act_3a",
        testStartAct3B: "test_campaign_start_act_3b",
        testStartEpilogue: "test_campaign_start_epilogue",
        testDamageNearestPigBase: "test_campaign_damage_nearest_pig_base",
        testDestroyNearestPigBase: "test_campaign_destroy_nearest_pig_base",
        testDestroyPigFaction: "test_campaign_destroy_pig_faction"
    },
    messages: {
        unsupportedDebug: "campaign_unsupported_debug"
    },
    cinematics: {
        c03ComingWar: "mst03_c03_the_coming_war_fmv",
        c03Opening: "mst03_c00_opening",
        c03bCreeperCo: "mst03_c03b_creeper_and_co_fmv",
        c04Nightfall: "mst04_c04_nightfall_fmv",
        c04InvasionSystem: "vil01_c04_invasion_system_fmv",
        c05HordesInvade: "mst05_c05_the_hordes_invade_fmv",
        c05HordesInvadeAct1Skip: "mst05_c05_the_hordes_invade_alt_fmv",
        c07FinalBossLeaves: "mst07_c07_the_final_boss_leaves_fmv",
        // c06WellLiberated: "mst06_c06b_victory", // triggered in base_response_piglin_wof.js
        // c08FinalBaseReveal: "mst08_c08_the_final_base",
        c09RiseOfVindicators: "mst09_c09_rise_of_the_vindicators_fmv",
        m20Chap3Trailer: "m20_chap3_trailer_vo",
        epilogue: "mst10_c10_epilogue_fmv", // triggered by cinematic queue
        villagersMotivated01: "mst05_c05b_villager_1",
        villagersMotivated01Night: "mst05_c05b_villager_1_night",
        villagersMotivated02: "mst05_c05b_villager_2",
        villagersMotivated02Night: "mst05_c05b_villager_2_night"
    },
    VO: {
        postRiseOfVindicatorsVO: "main_post_vindicators",
        nightFallVO: "main_post_nightfall",
        preInvasionCineVO: "main_pre_invasion_cine",
        postInvasionCineVO: "main_post_invasion_cine"
    },
    audio: {
        a2MusicStingerDusk: "BAE_mus_stinger_dusk",
        a2MusicStingerDawn: "BAE_mus_stinger_dawn"
    },
    delays: {
        act2Delay: 13,
        c03aDelay: 13,
        c03bDelay: 13,
        act1ADelay: 8
    },
    failsafeAct1NISDistance: 90,
    dbbTeleportDistance: 200,
    act3WofNudges: {
        nudeStartDelay: 60,
        timeBetweenNudges: 180,
        maxNudges: 6,
        nudgeCounterGlobalVariable: "gv_nudge_counter",
        timerName: "wofNudgeTimer",
        presentationEvents: ["main_return_wof_nudge_1", "main_return_wof_nudge_2", "main_return_wof_nudge_3"]
    },
    announcements: {
        announceAct1AStart: "campaign_act1A_start",
        announceAct1BStart: "campaign_act1B_start",
        announceAct2Start: "campaign_act2_start",
        announceAct3AStart: "campaign_act3A_start",
        announceAct3BStart: "campaign_act3B_start",
        announceEpilogueStart: "campaign_epilogue_start",
        announceDamageNearestPigBase: "damage_nearest_piglin_base",
        announceDamageNearestPigBaseSuccess: "nearest_piglin_base_success",
        announceDamageNearestPigBaseFailure: "nearest_piglin_base_failed",
        announceDestroyNearestPigBase: "destroy_nearest_piglin_base",
        announceDestroyNearestPigBaseSuccess: "nearest_piglin_base_success",
        announceDestroyNearestPigBaseFailure: "nearest_piglin_base_failed",
        announceDestroyPigFaction: "destroy_piglin_faction",
        announceObliteratePigFaction: "obliterate_piglin_faction",
        announceDestroyPigFactionFailure: "destroy_piglin_faction_failed"
    },
    debugVariables: {
        destroyBossBaseOfType: "destroyBossBaseOfType"
    },
    riseOfVindicatorsTracker: "gv_rise_of_vinidcators_tracker",
    riseOfVindicatorsFirstHordeTracker: "gv_rise_of_vindicators_horde_tracker",
    riseOfVindicatorsBasesDestroyedCheckPt1: 5,
    riseOfVindicatorsBasesDestroyedCheckPt2: 10,
    riseOfVindicatorsBasesRemainingCheckPt3: 2,
    dbb: {
        placementSlot: "act1DBB",
        archetype: "badger:piglin_dbb"
    },
    invasionSystemFmvConfig: {
        daysToPass: 1, //number of days to keep trying to play invasion cinematic before giving up
        playAtDusk: true, //will play at dawn if false, tied to the invasion cycle
        delayBeforeTriggeringTutorialForTheFirstTime: 8,
        playedOnce: "gv_invasion_cine_played",
    },
    debug: false
}
