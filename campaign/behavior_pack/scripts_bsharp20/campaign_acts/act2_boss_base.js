/*
This file is purely in charge of determining when and how to spawn the boss base (in act 2).
Some notes:
- Invasion is automatically disabled for "dead" factions (no need to handle it here).
- VO and messaging have been removed temporarily.
- need to reimplement the boss base slash commands
*/

const BOSS_BASE_VALS = {
    globals: {
        factionMeetTheBossPlayed: "invasionFactionMeetTheBossPlayed",
        factionBossMadPlayed: "invasionFactionBossMadPlayed",
        factionBossLeavesNetherPlayed: "invasionFactionBossLeavesNetherPlayed",
        bossArrived: "gv_boss_arrived"
    },
    commonVO: {
        finalPortalDestroyed: "piglin_final_horde_portal_destroyed"
    },
    minDistanceFromPlayers: 500,
    maxDistanceFromPlayers: 1000,
    telemetry: {
        defendBossDefeat: "defeat_boss_defend_horde",
        attackBossDefeat: "defeat_boss_attack_horde",
        obstacleBossDefeat: "defeat_boss_obstacle_horde",
        frostBossDefeat: "defeat_boss_frost_horde"
    },
    factionObjects: [
        {
            name: FACTION_NAME_ATTACK,
            cines: {
                meetTheBoss: "hrd02_c02_attack_meet_the_boss_fmv",
                bossMad: "hrd02_c03_attack_boss_mad_fmv",
                bossLeavesNether: "hrd02_c04_attack_boss_leaves_nether_fmv",
                bossArrives: "hrd02_c04a_attack_boss_arrives",
                portalDestruction: ["hrd02_c06_attack_portaldestruction_v1", "hrd02_c06_attack_portaldestruction_v2", "hrd02_c06_attack_portaldestruction_v3"]
            },
            VO: {
                postMeetTheBossComment: "attack_postfmv_meetboss",
                postMeetTheBossHordeArrival: "horde_arrival_attack",
                postBossMad: "attack_postfmv_bossmad",
                postBossLeavesNether: "",
                postBossArrives: "piglin_boss_overworld_attack",
                bossPortalDestroyedInitial: "attack_final_portal_destroyed_initial",
                bossPortalDestroyedSubsequent: "attack_final_portal_destroyed_subsequent"
            }
        },
        {
            name: FACTION_NAME_DEFEND,
            cines: {
                meetTheBoss: "hrd01_c02_defend_meet_the_boss_fmv",
                bossMad: "hrd01_c03_defend_boss_mad_fmv",
                bossLeavesNether: "hrd01_c04_defend_boss_leaves_nether_fmv",
                portalDestruction: ["hrd01_c06_defend_portaldestruction_v1", "hrd01_c06_defend_portaldestruction_v2", "hrd01_c06_defend_portaldestruction_v3"]
            },
            VO: {
                postMeetTheBossComment: "defense_postfmv_meetboss",
                postMeetTheBossHordeArrival: "horde_arrival_defend",
                postBossMad: "defense_postfmv_bossmad",
                postBossLeavesNether: "defense_postfmv_bossleavesnether",
                bossPortalDestroyedInitial: "defend_final_portal_destroyed_initial",
                bossPortalDestroyedSubsequent: "defend_final_portal_destroyed_subsequent"
            }
        },
        {
            name: FACTION_NAME_OBSTACLE,
            cines: {
                meetTheBoss: "hrd03_c02_obs_meet_the_boss_fmv",
                bossMad: "hrd03_c03_obs_boss_mad_fmv",
                bossLeavesNether: "hrd03_c04_obs_boss_leaves_nether_fmv",
                portalDestruction: ["hrd03_c06_obs_portaldestruction_v1", "hrd03_c06_obs_portaldestruction_v2", "hrd03_c06_obs_portaldestruction_v3"]
            },
            VO: {
                postMeetTheBossComment: "obstacle_postfmv_meetboss",
                postMeetTheBossHordeArrival: "horde_arrival_obstacle",
                postBossMad: "obstacle_postfmv_bossmad",
                postBossLeavesNether: "obstacle_postfmv_bossleavesnether",
                bossPortalDestroyedInitial: "obstacle_final_portal_destroyed_initial",
                bossPortalDestroyedSubsequent: "obstacle_final_portal_destroyed_subsequent"
            }
        },
        {
            name: FACTION_NAME_FROST,
            cines: {
                meetTheBoss: "hrd04_c02_obs_meet_the_boss_fmv",
                bossMad: "hrd04_c03_obs_boss_mad_fmv",
                bossLeavesNether: "hrd04_c04_obs_boss_leaves_nether_fmv",
                portalDestruction: ["hrd04_c06_obs_portaldestruction_v1", "hrd03_c06_obs_portaldestruction_v2", "hrd03_c06_obs_portaldestruction_v3"]
            },
            VO: {
                postMeetTheBossComment: "frost_postfmv_meetboss",
                postMeetTheBossHordeArrival: "horde_arrival_frost",
                postBossMad: "frost_postfmv_bossmad",
                postBossLeavesNether: "frost_postfmv_bossleavesnether",
                bossPortalDestroyedInitial: "frost_final_portal_destroyed_initial",
                bossPortalDestroyedSubsequent: "frost_final_portal_destroyed_subsequent"
            }
        }
    ],
    basesDestroyedForBossIsMad: 3,
    basesRemainingForBossIsMad: 1
}

const GetFactionBossData = (factionName) => {
    return BOSS_BASE_VALS.factionObjects.find((obj) => obj.name === factionName)
}

SNIPPET_CinematicFinished("cf_portal_destruction", (payload) => {
    const factionName = payload.string
    const factionPortalBasesAlive = GetAliveVillages(factionName, BASE_SIZE_ALL_PORTALS)

    //Play boss mad when remaining bases hits threshold
    if (QUERY_GetEntitiesCount(factionPortalBasesAlive) <= BOSS_BASE_VALS.basesRemainingForBossIsMad) {
        if (DoOnce(BOSS_BASE_VALS.globals.factionBossMadPlayed + factionName)) {
            if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 0) {
                let cine = ""
                let vo = ""
                BOSS_BASE_VALS.factionObjects.forEach((element) => {
                    if (element.name === factionName) {
                        cine = element.cines.bossMad
                        vo = element.VO.postBossMad
                    }
                })
                OUTPUT_SetGlobalVariable(BOSS_BASE_VALS.globals.factionBossMadPlayed + factionName, 1)
                OUTPUT_TriggerCinematic(cine, GetPlayers()) //Don't play cinematic for Act change debugs

                LISTENFOR_CinematicFinished({
                    snippet: "cf_boss_mad",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    cinematicName: cine,
                    payloadString: vo
                })
            }
        }
    } else if (QUERY_GetGlobalVariable(BOSS_BASE_VALS.globals.factionBossLeavesNetherPlayed + factionName)) {
        Once()
    }

    if (QUERY_GetGlobalVariable(BOSS_BASE_VALS.globals.factionBossMadPlayed + factionName) > 0) {
        Once()
    }
})

SNIPPET_CinematicFinished("cf_boss_leaves_nether", (payload) => {
    if (payload.string !== "") PlayPresentationActionToAll(payload.string)
    Once()
})

SNIPPET_LocalTimer("lt_post_portal_death_vo", (_payload) => {
    PlayCommonPortalDestroyedVO()
})

SNIPPET_LocalTimer("lt_post_portal_death_boss_action", (payload) => {
    Logi("boss village")
    if (CheckIfAct2IsOver()) {
        PlayPresentationActionToAll(BOSS_BASE_VALS.commonVO.finalPortalDestroyed)
        LISTENFOR_LocalTimer({
            snippet: "lt_post_portal_death_boss_subsequent_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 15
        })
    } else {
        PlayPresentationActionToAll(payload.string)
        PlayVillagersAndVindicatorsAfterKillingBoss()
    }
})

SNIPPET_LocalTimer("lt_post_portal_death_boss_subsequent_action", () => {
    CampaignAct2End()
})
