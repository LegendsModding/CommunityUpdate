const FrostAI = {
    Siege: "frost_siege",
    Assault: "frost_offensive",
    Guard: "frost_defensive"
}

const FrostCompositions = {
    grunters: {
        units: [{ amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER }],
        delayUntilSentOut: 15
    },
    runts: {
        units: [{ amount: 8, unit: PIGLIN_ARCHETYPE.RUNT }],
        delayUntilSentOut: 15
    },
    macesAndCymbals: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.DISRUPTOR }
        ],
        delayUntilSentOut: 15
    },
    smallAGuards: {
        units: [
            { amount: 8, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
        ],
        delayUntilSentOut: 15
    },
    smallBGuards: {
        units: [
            { amount: 10, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    },
    medAGuard1: {
        units: [{ amount: 8, unit: PIGLIN_ARCHETYPE.RUNT }],
        delayUntilSentOut: 15
    },
    medAGuard2: {
        units: [{ amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }],
        delayUntilSentOut: 15
    },
    medAGuard3: {
        units: [
            { amount: 8, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.DISRUPTOR }
        ],
        delayUntilSentOut: 15
    },
    medBGuard1: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRENADIER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    medBGuard2: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
        ],
        delayUntilSentOut: 15
    },
    basicSeeker: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER }
        ],
        delayUntilSentOut: 15
    },
    grunterPatrol: {
        units: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER }],
        delayUntilSentOut: 15
    },
    structureSquad: {
        units: [
            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    },
    genadiers: {
        units: [{ amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }],
        delayUntilSentOut: 15
    },
    grenadesAndHiHats: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.DISRUPTOR }
        ],
        delayUntilSentOut: 15
    },

    grenadierSquad: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    longrangeSiege: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER }
        ],
        delayUntilSentOut: 15
    },
    heavySquad: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER }
        ],
        delayUntilSentOut: 15
    },
    heavyPatrol: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC },
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER }
        ],
        delayUntilSentOut: 15
    },
    heavySiege: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER }
        ],
        delayUntilSentOut: 15
    },
    rotSquad: {
        units: [
            { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRENADIER }
        ],
        delayUntilSentOut: 15
    },
    outpostCComposition: {
        units: [
            { amount: 16, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }
        ],
        delayUntilSentOut: 15
    },
    seekersOnly: {
        units: [{ amount: 4, unit: PIGLIN_ARCHETYPE.SEEKER }],
        delayUntilSentOut: 15
    },
    bossPlatform1: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 20, unit: PIGLIN_ARCHETYPE.GRUNTER }
        ],
        delayUntilSentOut: 15
    },
    bossPlatform2: {
        units: [{ amount: 5, unit: PIGLIN_ARCHETYPE.GRENADIER }],
        delayUntilSentOut: 15
    },
    bossPlatform3: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRENADIER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.DISRUPTOR },
            { amount: 1, unit: PIGLIN_ARCHETYPE.GRUNTER }
        ],
        delayUntilSentOut: 15
    }
}
const FrostDiscreteEncounters = {
    sporeBlockade: {
        unitComposition: FrostCompositions.grunters,
        buildableTag: "pigKnockbackTower",
        leashDistance: 100,
        returnDistance: 50
    },
    blazedSpore: {
        unitComposition: FrostCompositions.grunters,
        buildableTag: "pigArrowTower",
        leashDistance: 100,
        returnDistance: 50
    },
    seekingVengeance: {
        unitComposition: FrostCompositions.basicSeeker,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    boomSpreader: {
        unitComposition: FrostCompositions.basicSeeker,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    gruntersMedics: {
        unitComposition: FrostCompositions.grunterPatrol,
        buildableTag: "barracks",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadierGuards: {
        unitComposition: FrostCompositions.genadiers,
        buildableTag: "barracks",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadiers: {
        unitComposition: FrostCompositions.grenadierSquad,
        buildableTag: "frostComposition3",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadiersTower: {
        unitComposition: FrostCompositions.genadiers,
        buildableTag: "pigArrowTower",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadiersKnockback: {
        unitComposition: FrostCompositions.genadiers,
        buildableTag: "pigKnockbackTower",
        leashDistance: 100,
        returnDistance: 50
    },
    comeAndTakeIt: {
        unitComposition: FrostCompositions.longrangeSiege,
        buildableTag: "barracks",
        leashDistance: 100,
        returnDistance: 50
    },
    pain: {
        unitComposition: FrostCompositions.heavySquad,
        buildableTag: "pigKnockbackTower",
        leashDistance: 100,
        returnDistance: 50
    },
    sporeGrowth: {
        unitComposition: FrostCompositions.genadiers,
        buildableTag: "pigArrowTower",
        leashDistance: 100,
        returnDistance: 50
    },
    sporeCannons: {
        unitComposition: FrostCompositions.longrangeSiege,
        buildableTag: "pigKnockbackTower",
        leashDistance: 100,
        returnDistance: 50
    },
    hornsFromAbove: {
        unitComposition: FrostCompositions.heavyPatrol,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    sporeScore: {
        unitComposition: FrostCompositions.rotSquad,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    grenadierNether: {
        unitComposition: FrostCompositions.genadiers,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    sporeSpread: {
        unitComposition: FrostCompositions.grunterPatrol,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    highGround: {
        unitComposition: FrostCompositions.heavySiege,
        buildableTag: "piglin_portal",
        leashDistance: 100,
        returnDistance: 50
    },
    heavySquad: {
        unitComposition: FrostCompositions.heavySiege,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    heavyPatrol: {
        unitComposition: FrostCompositions.heavySiege,
        buildableTag: "frostComposition2",
        leashDistance: 100,
        returnDistance: 50
    },
    heavySiege: {
        unitComposition: FrostCompositions.heavySiege,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    highGround2: {
        unitComposition: FrostCompositions.heavySiege,
        buildableTag: "frostComposition3",
        leashDistance: 100,
        returnDistance: 50
    },
    noCannonForYou: {
        unitComposition: FrostCompositions.basicSeeker,
        buildableTag: "pigSpreader",
        leashDistance: 100,
        returnDistance: 50
    },
    gruntersEverywhere: {
        unitComposition: FrostCompositions.grunterPatrol,
        buildableTag: "barracks",
        leashDistance: 100,
        returnDistance: 50
    },
    rotSquad: {
        unitComposition: FrostCompositions.rotSquad,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },

    smallBGuards: {
        unitComposition: FrostCompositions.smallBGuards,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    smallAGuards: {
        unitComposition: FrostCompositions.smallAGuards,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    medAGuard1: {
        unitComposition: FrostCompositions.medAGuard1,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    medAGuard2: {
        unitComposition: FrostCompositions.medAGuard2,
        buildableTag: "frostComposition2",
        leashDistance: 100,
        returnDistance: 50
    },
    medAGuard3: {
        unitComposition: FrostCompositions.medAGuard3,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    medBGuard1: {
        unitComposition: FrostCompositions.medBGuard1,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    medBGuard2: {
        unitComposition: FrostCompositions.medBGuard2,
        buildableTag: "frostComposition2",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateA2: {
        unitComposition: FrostCompositions.runts,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateA3: {
        unitComposition: FrostCompositions.macesAndCymbals,
        buildableTag: "pigCrateOutpostL3",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateB2: {
        unitComposition: FrostCompositions.grunters,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateB3: {
        unitComposition: FrostCompositions.longrangeSiege,
        buildableTag: "pigCrateOutpostL3",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateC2: {
        unitComposition: FrostCompositions.genadiers,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateC3: {
        unitComposition: FrostCompositions.grenadesAndHiHats,
        buildableTag: "pigCrateOutpostL3",
        leashDistance: 100,
        returnDistance: 50
    },
    smallCrateA: {
        unitComposition: FrostCompositions.grunters,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    smallCrateB: {
        unitComposition: FrostCompositions.runts,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    mediumCrateA: {
        unitComposition: FrostCompositions.genadiers,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    mediumCrateB: {
        unitComposition: FrostCompositions.medBGuard2,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    largeCrate: {
        unitComposition: FrostCompositions.genadiers,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostC: {
        unitComposition: FrostCompositions.outpostCComposition,
        buildableTag: "pigArrowTower",
        leashDistance: 100,
        returnDistance: 50
    },
    largeBaseStructureGuardsGrunters: {
        unitComposition: FrostCompositions.grunterPatrol,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    largeBaseStructureGuardsSeekers: {
        unitComposition: FrostCompositions.seekersOnly,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    largeBaseStructureGuardsGrenadiers: {
        unitComposition: FrostCompositions.genadiers,
        buildableTag: "frostComposition1",
        leashDistance: 100,
        returnDistance: 50
    },
    bossPlatform1: {
        unitComposition: FrostCompositions.bossPlatform1,
        buildableTag: "frostBossRally1",
        leashDistance: 100,
        returnDistance: 50
    },
    bossPlatform2: {
        unitComposition: FrostCompositions.bossPlatform2,
        buildableTag: "frostBossRally2",
        leashDistance: 100,
        returnDistance: 50
    },
    bossPlatform3: {
        unitComposition: FrostCompositions.bossPlatform3,
        buildableTag: "frostBossRally3",
        leashDistance: 100,
        returnDistance: 50
    }
}

const frostVal = {
    debug: {
        outputOn: false
    },
    tag: {
        frostBossTag: "frostBoss"
    },
    audioPerPhaseArray: ["initial_frost", "phase1_frost", "phase2_frost", "phase3_frost", "phase4_frost"],
    audioPerBossPhaseArray: ["initial", "phase1", "phase2", "phase3", "phase4"],
    constant: {},
    global: {
        hasVisited: "frost_faction_has_been_visted",
        hasVisitedCoilBase: "frost_faction_has_visited_coil_base",
        lavaSprayerTacticPresented: "frost_lava_sprayer_tactic_presented",
        basesDestroyed: "frost_bases_destroyed",
        largeBasesDestroyed: "frost_large_bases_destroyed",
        bossIntroPresented: "frost_boss_intro_presented",
        bossSpawned: "frost_boss_spawned",
        dolavaLauncherGuardSpawnCallbackOnce: "frost_do_portal_guard_spawn_callback_once",
        baseAudioPhase: "frost_base_audio_phase",
        anyBasesKilled: "frost_any_bases_killed",
        bossOnFinalPhase: "frost_boss_on_final_phase",
        isBossOnVillagePrefix: "frost_boss_on_village_",
        bossBridgeAttackOnCooldown: "frost_boss_bridge_attack_on_cooldown",
        bossCenterBreachedAttackCooldown: "frost_boss_center_breached_attack_on_cooldown",
        bossWallBreachResponse: "frost_boss_wall_breach_response",
        numberOfDefeatedLavaLaunchers: "gv_number_of_defeated_lava_launchers"
    },
    bossValues: {},
    barracks: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_FrostFaction_Variations,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_FrostFaction_Variations,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_DISRUPTOR]: DisruptorBarracksConfig_FrostFaction_Variations
    },
    //Used in ResetLavaLaunchers() only
    lavalLaunchersCount: {
        [BASE_SIZE_LARGE]: {
            num: 4
        },
        [BASE_SIZE_BOSS]: {
            num: 3
        }
    },
    raidingPartyVars: {
        baseCageAmount: 2,
        cageMultiplier: 1,
        cageTag: "frost_raiding_party_cage"
    },
    baseSetup: {
        reescalationSnippet: "spe_frost_gameplay",
        [BASE_SIZE_SMALL]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_frost_base_small",
            reescalation: true,
            snippets: [
                { snippet: "spe_frost_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_MEDIUM]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_frost_base_medium",
            reescalation: true,
            snippets: [
                { snippet: "spe_frost_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_LARGE]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_frost_base_large",
            reescalation: true,
            snippets: [
                { snippet: "spe_frost_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        },
        [BASE_SIZE_BOSS]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_frost_base_large",
            reescalation: true,
            snippets: [
                // eslint-disable-next-line @typescript-eslint/camelcase
                { snippet: "spe_frost_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB }
            ]
        },
        [BASE_SIZE_OUTPOST]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_frost_base_outpost",
            snippets: [
                // eslint-disable-next-line @typescript-eslint/camelcase
                { snippet: "spe_frost_outpost", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB }
            ]
        }
    },
    village: {
        preventBridgeSquadResponse: "frost_prevent_bridge_squad_response",
        preventBossBridgeResponse: "frost_prevent_boss_bridge_response",
        frostPhase3BuildingDestroyedCount: "frostPhase3BuildingDestroyedCount",
        frostKnockbackDestroyedCount: "frost_Knockback_Destroyed_Count",
        ScriptedResponsesTimeout: "scripted_responses_timedOut",
        ScriptedResponsesEnabled: "scripted_responses_enabled"
    },

    rallypoints: {
        small: {
            villageVariationA: {
                ["frostGuard"]: {
                    controlGroupTag: "frostGuard",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Guard, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostAssault"]: {
                    controlGroupTag: "frostAssault",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Assault, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostSiege"]: {
                    controlGroupTag: "frostSiege",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Siege, 100]],
                    positionTags: ["frostSiegeRally"],
                    positionTagExcludes: []
                }
            },
            villageVariationB: {
                ["frostGuard"]: {
                    controlGroupTag: "frostGuard",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Guard, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostAssault"]: {
                    controlGroupTag: "frostAssault",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Assault, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostSiege"]: {
                    controlGroupTag: "frostSiege",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Siege, 100]],
                    positionTags: ["frostSiegeRally"],
                    positionTagExcludes: []
                }
            }
        },
        medium: {
            villageVariationA: {
                ["frostGuard"]: {
                    controlGroupTag: "frostGuard",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Guard, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostAssault"]: {
                    controlGroupTag: "frostAssault",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Assault, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostSiege"]: {
                    controlGroupTag: "frostSiege",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Siege, 100]],
                    positionTags: ["frostSiegeRally"],
                    positionTagExcludes: []
                }
            },
            villageVariationB: {
                ["frostGuard"]: {
                    controlGroupTag: "frostGuard",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Guard, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostAssault"]: {
                    controlGroupTag: "frostAssault",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Assault, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostSiege"]: {
                    controlGroupTag: "frostSiege",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Siege, 100]],
                    positionTags: ["frostSiegeRally"],
                    positionTagExcludes: []
                }
            }
        },
        large: {
            villageVariationA: {
                ["frostGuard"]: {
                    controlGroupTag: "frostGuard",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Guard, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostAssault"]: {
                    controlGroupTag: "frostAssault",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Assault, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostSiege"]: {
                    controlGroupTag: "frostSiege",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Siege, 100]],
                    positionTags: ["frostSiegeRally"],
                    positionTagExcludes: []
                }
            }
        },
        boss: {
            villageVariationDefault: {
                ["frostGuard"]: {
                    controlGroupTag: "frostGuard",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Guard, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostAssault"]: {
                    controlGroupTag: "frostAssault",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Assault, 100]],
                    positionTags: ["frostGuardRally"],
                    positionTagExcludes: []
                },
                ["frostSiege"]: {
                    controlGroupTag: "frostSiege",
                    composition: FrostCompositions.grunters,
                    ais: [[FrostAI.Siege, 100]],
                    positionTags: ["frostSiegeRally"],
                    positionTagExcludes: []
                }
            }
        }
    },
    crystalGuards: {
        small: {
            villageVariationA: {
                unit: PIGLIN_ARCHETYPE.GRUNTER,
                amount: 10
            },
            villageVariationB: {
                unit: PIGLIN_ARCHETYPE.RUNT,
                amount: 10
            }
        },
        medium: {
            villageVariationA: {
                unit: PIGLIN_ARCHETYPE.GRENADIER,
                amount: 4
            },
            villageVariationB: {
                unit: PIGLIN_ARCHETYPE.GRENADIER,
                amount: 4
            }
        },
        large: {
            villageVariationA: {
                unit: PIGLIN_ARCHETYPE.GRENADIER,
                amount: 4
            }
        }
    },
    cinematic: {
        firstTimeNonShieldBaseIntro: "hrd03_c51_portal",
        shieldIntro: "hrd03_c50a_shield_intro",
        bossIntro: "hrd03_c04a_obs_boss_intro",
        bossDead: "hrd03_c05_obs_boss_death"
    },
    VO: {
        postIntroVO: "frost_intro",
        postShieldIntroVO: "base_attack_lava_post_nis",
        postBossSpawnVO: "frost_boss_overworld",
        postBossDeath: "frost_boss_death_initial",
        postBossDeathDelayedReaction: "frost_boss_death_subesequent"
    },
    music: {
        [BASE_SIZE_OUTPOST]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_frost_outpost_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_frost_outpost_2",
            [VILLAGE_VARIATION_C]: "badger:music_combat_frost_outpost_3"
        },
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_frost_base_small_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_frost_base_small_2"
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_frost_base_medium_1",
            [VILLAGE_VARIATION_B]: "badger:music_combat_frost_base_medium_2"
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_frost_base_large_1"
        },
        [BASE_SIZE_BOSS]: {
            [VILLAGE_VARIATION_DEFAULT]: "badger:music_combat_frost_base_boss_1"
        }
        //Add boss size
    },
    unitLoiterDelay: 45,
    bridgeZone: {
        none: "",
        one: "frostBridge1",
        two: "frostBridge2",
        three: "frostBridge3",
        four: "frostBridge4",
        five: "frostBridge5",
        six: "frostBridge6"
    },
    bossFinalStageSpawns: [
        { amount: 10, unit: PIGLIN_ARCHETYPE.GRUNTER },
        { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER },
        { amount: 4, unit: PIGLIN_ARCHETYPE.GRENADIER },
        { amount: 3, unit: PIGLIN_ARCHETYPE.MEDIC }
    ],
    villageAttack: {
        fobSmall: {
            baseConstructor: (villageId) => {
                _FrostFactionAttackAMakeBase(villageId)
            },
            timeBetweenWaves: 60,
            waves: [
                [3, [PIGLIN_ARCHETYPE.GRUNTER, 25], [PIGLIN_ARCHETYPE.MEDIC, 5]],
                [5, [PIGLIN_ARCHETYPE.GRENADIER, 8], [PIGLIN_ARCHETYPE.GRUNTER, 25], [PIGLIN_ARCHETYPE.MEDIC, 10]],
                [6, [PIGLIN_ARCHETYPE.SEEKER, 4], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 1], [PIGLIN_ARCHETYPE.GRENADIER, 8], [PIGLIN_ARCHETYPE.GRUNTER, 40], [PIGLIN_ARCHETYPE.MEDIC, 10]],
                [8, [PIGLIN_ARCHETYPE.SEEKER, 10], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 2], [PIGLIN_ARCHETYPE.GRENADIER, 16], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 10]]
            ],
            extraGuards: {
                archetype: PIGLIN_ARCHETYPE.GRUNTER,
                count: 10
            },
            portalGuards: {
                archetype: PIGLIN_ARCHETYPE.LAVA_LAUNCHER,
                count: 1
            }
        },
        fobMedium: {
            baseConstructor: (villageId) => {
                _FrostFactionAttackBMakeBase(villageId)
            },
            timeBetweenWaves: 45,
            waves: [
                [3, [PIGLIN_ARCHETYPE.GRUNTER, 40], [PIGLIN_ARCHETYPE.MEDIC, 5]],
                [5, [PIGLIN_ARCHETYPE.GRENADIER, 8], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 1], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 8]],
                [6, [PIGLIN_ARCHETYPE.SEEKER, 4], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 1], [PIGLIN_ARCHETYPE.GRENADIER, 10], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 10]],
                [8, [PIGLIN_ARCHETYPE.SEEKER, 6], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 2], [PIGLIN_ARCHETYPE.GRENADIER, 15], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 15]],
                [8, [PIGLIN_ARCHETYPE.SEEKER, 10], [PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 2], [PIGLIN_ARCHETYPE.GRENADIER, 15], [PIGLIN_ARCHETYPE.GRUNTER, 50], [PIGLIN_ARCHETYPE.MEDIC, 15]]
            ],
            extraGuards: {
                archetype: PIGLIN_ARCHETYPE.GRENADIER,
                count: 10
            },
            portalGuards: {
                archetype: PIGLIN_ARCHETYPE.LAVA_LAUNCHER,
                count: 2
            }
        }
    },
    portalHealthThreshold: {
        first: {
            health: 0.9,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [],
                    villageVariationB: []
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [],
                    villageVariationB: []
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: []
                }
            }
        },
        second: {
            health: 0.75,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                    ],
                    villageVariationB: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [{ amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                    villageVariationB: [
                        { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                }
            }
        },
        third: {
            health: 0.6,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [],
                    villageVariationB: []
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [],
                    villageVariationB: []
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: []
                }
            }
        },
        fourth: {
            health: 0.34,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                    ],
                    villageVariationB: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                    villageVariationB: [
                        { amount: 8, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }]
                }
            }
        },
        fifth: {
            health: 0.25,
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                    ],
                    villageVariationB: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                    villageVariationB: [
                        { amount: 8, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }]
                }
            }
        }
    },

    aiConfig: {
        [FrostAI.Assault]: {
            controllerArchetype: "badger:ai_entity_frost_offensive",
            controllerTag: "frostAttackAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["frostGuardRally"],
            reinforcementControlGroupTag: "frostAssault",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [FrostAI.Siege]: {
            controllerArchetype: "badger:ai_entity_frost_siege",
            controllerTag: "frostSiegeAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["frostSiegeRally"],
            reinforcementControlGroupTag: "frostSiege",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [FrostAI.Guard]: {
            controllerArchetype: "badger:ai_entity_frost_defensive",
            controllerTag: "frostDefendAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["frostGuardRally"],
            reinforcementControlGroupTag: "frostGuard",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        }
    },
    discreteEncounters: {
        frontlineA: {
            villageVariationA1: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.smallBGuards,
                    amount: 1
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.outpostCrateA2,
                    amount: 1
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.outpostCrateA3,
                    amount: 2
                }
            },
            villageVariationA2: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.smallBGuards,
                    amount: 2
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.outpostCrateA2,
                    amount: 1
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.outpostCrateA3,
                    amount: 2
                }
            },
            villageVariationA3: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.smallBGuards,
                    amount: 3
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.outpostCrateA2,
                    amount: 1
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.outpostCrateA3,
                    amount: 2
                }
            },
            //----------------------------------------------------
            villageVariationB1: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.blazedSpore,
                    amount: 1
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.outpostCrateB2,
                    amount: 1
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.outpostCrateB3,
                    amount: 2
                }
            },
            villageVariationB2: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.blazedSpore,
                    amount: 2
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.outpostCrateB2,
                    amount: 1
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.outpostCrateB3,
                    amount: 2
                }
            },
            villageVariationB3: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.blazedSpore,
                    amount: 3
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.outpostCrateB2,
                    amount: 1
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.outpostCrateB3,
                    amount: 2
                }
            },
            //----------------------------------------------------
            villageVariationC1: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.outpostC,
                    amount: 1
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.outpostCrateC2,
                    amount: 1
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.outpostCrateC3,
                    amount: 2
                }
            },
            villageVariationC2: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.outpostC,
                    amount: 2
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.outpostCrateC2,
                    amount: 1
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.outpostCrateC3,
                    amount: 2
                }
            },
            villageVariationC3: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.outpostC,
                    amount: 3
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.outpostCrateC2,
                    amount: 1
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.outpostCrateC3,
                    amount: 2
                }
            }
        },
        small: {
            villageVariationA: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.smallAGuards,
                    amount: 6
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.smallAGuards,
                    amount: 6
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.smallCrateA,
                    amount: 1
                }
            },
            villageVariationB: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.smallBGuards,
                    amount: 7
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.smallCrateB,
                    amount: 1
                }
            }
        },
        medium: {
            villageVariationA: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.medAGuard1,
                    amount: 5
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.medAGuard2,
                    amount: 7
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.medAGuard3,
                    amount: 2
                },
                ["de3"]: {
                    type: FrostDiscreteEncounters.mediumCrateA,
                    amount: 1
                }
            },
            villageVariationB: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.medBGuard1,
                    amount: 7
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.medBGuard2,
                    amount: 7
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.mediumCrateB,
                    amount: 1
                }
            }
        },
        large: {
            villageVariationA: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.rotSquad,
                    amount: 5
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.sporeScore,
                    amount: 3
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.highGround2,
                    amount: 4
                },
                ["de3"]: {
                    type: FrostDiscreteEncounters.largeBaseStructureGuardsGrunters,
                    amount: 6
                },
                ["de4"]: {
                    type: FrostDiscreteEncounters.largeBaseStructureGuardsSeekers,
                    amount: 4
                },
                ["de5"]: {
                    type: FrostDiscreteEncounters.largeCrate,
                    amount: 1
                }
            }
        },
        boss: {
            villageVariationDefault: {
                ["de0"]: {
                    type: FrostDiscreteEncounters.highGround2,
                    amount: 3
                },
                ["de1"]: {
                    type: FrostDiscreteEncounters.noCannonForYou,
                    amount: 2
                },
                ["de2"]: {
                    type: FrostDiscreteEncounters.sporeScore,
                    amount: 2
                },
                ["de3"]: {
                    type: FrostDiscreteEncounters.grenadierGuards,
                    amount: 4
                },
                ["de4"]: {
                    type: FrostDiscreteEncounters.largeBaseStructureGuardsGrenadiers,
                    amount: 6
                },
                ["de5"]: {
                    type: FrostDiscreteEncounters.bossPlatform1,
                    amount: 1
                },
                ["de6"]: {
                    type: FrostDiscreteEncounters.bossPlatform2,
                    amount: 1
                },
                ["de7"]: {
                    type: FrostDiscreteEncounters.bossPlatform3,
                    amount: 1
                }
            }
        }
    },
    escalation: {
        phase1: {
            name: "frostBaseApproached",
            escalateVO: [],
            stinger: "",
            escalationLevel: 1,
            audio: "phase1_frost",
            bossAudio: "phase1",
            structureMinideck: [],
            portalSpawns: {}
        },
        phase2: {
            name: "bridgeBuilt",
            escalateVO: ["piglin_frost_escalation_3", "piglin_frost_escalation_6"],
            stinger: "keepGoing",
            escalationLevel: 2,
            audio: "phase2_frost",
            bossAudio: "phase2",
            structureMinideck: [],
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                    ],
                    villageVariationB: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [{ amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                    villageVariationB: [
                        { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                }
            }
        },
        phase3: {
            name: "keyStructuresDestroyed",
            escalateVO: ["piglin_frost_escalation_1", "piglin_frost_escalation_2", "piglin_frost_escalation_4", "piglin_frost_escalation_5"],
            stinger: "keepGoing",
            escalationLevel: 3,
            audio: "phase3_frost",
            bossAudio: "phase3",
            structureMinideck: [],
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                    ],
                    villageVariationB: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                    villageVariationB: [
                        { amount: 8, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 2, unit: PIGLIN_ARCHETYPE.DISRUPTOR },
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                }
            }
        },
        phase4: {
            name: "playerCloseToBase",
            stinger: "keepGoing",
            escalationLevel: 4,
            escalateVO: [],
            audio: "phase4_frost",
            bossAudio: "phase4",
            structureMinideck: [],
            portalSpawns: {
                [BASE_SIZE_SMALL]: {
                    villageVariationA: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                    ],
                    villageVariationB: [
                        { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                        { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                    ]
                },
                [BASE_SIZE_MEDIUM]: {
                    villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                    villageVariationB: [
                        { amount: 8, unit: PIGLIN_ARCHETYPE.GRUNTER },
                        { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                },
                [BASE_SIZE_LARGE]: {
                    villageVariationA: [
                        { amount: 2, unit: PIGLIN_ARCHETYPE.DISRUPTOR },
                        { amount: 4, unit: PIGLIN_ARCHETYPE.GRENADIER }
                    ]
                }
            }
        }
    },
    responses: {
        unitAssignedTag: "response_assigned",
        unitExemptTag: "response_exempt",
        minTimeBetweenResponses: 25,
        structureBuilt: {
            tier2: {
                gatherPercentage: 60,
                aiDistribution: [
                    [[FrostAI.Assault], 60],
                    [[FrostAI.Guard], 20],
                    [[FrostAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                        ],
                        villageVariationB: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [{ amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                        villageVariationB: [
                            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    }
                }
            },
            tier3: {
                gatherPercentage: 100,
                aiDistribution: [
                    [[FrostAI.Assault], 60],
                    [[FrostAI.Guard], 20],
                    [[FrostAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                        ],
                        villageVariationB: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                        villageVariationB: [
                            { amount: 8, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }]
                    }
                }
            },
            bridge: {
                gatherPercentage: 75,
                aiDistribution: [
                    [[FrostAI.Assault], 60],
                    [[FrostAI.Guard], 20],
                    [[FrostAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                        ],
                        villageVariationB: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [{ amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                        villageVariationB: [
                            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    }
                }
            }
        },
        structureDamaged: {
            tier2: {
                gatherPercentage: 60,
                aiDistribution: [
                    [[FrostAI.Assault], 60],
                    [[FrostAI.Guard], 20],
                    [[FrostAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                        ],
                        villageVariationB: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [{ amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                        villageVariationB: [
                            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    }
                }
            },
            tier3: {
                gatherPercentage: 100,
                aiDistribution: [
                    [[FrostAI.Assault], 60],
                    [[FrostAI.Guard], 20],
                    [[FrostAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                        ],
                        villageVariationB: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                        villageVariationB: [
                            { amount: 8, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [{ amount: 4, unit: PIGLIN_ARCHETYPE.GRENADIER }]
                    }
                }
            }
        },
        structureDestroyed: {
            tier2: {
                gatherPercentage: 100,
                aiDistribution: [
                    [[FrostAI.Assault], 60],
                    [[FrostAI.Guard], 20],
                    [[FrostAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                        ],
                        villageVariationB: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [{ amount: 3, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                        villageVariationB: [
                            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [
                            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    }
                }
            },
            tier3: {
                gatherPercentage: 100,
                aiDistribution: [
                    [[FrostAI.Assault], 60],
                    [[FrostAI.Guard], 20],
                    [[FrostAI.Siege], 20]
                ],
                portalSpawns: {
                    [BASE_SIZE_SMALL]: {
                        villageVariationA: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.SEEKER }
                        ],
                        villageVariationB: [
                            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
                            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
                        ]
                    },
                    [BASE_SIZE_MEDIUM]: {
                        villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }],
                        villageVariationB: [
                            { amount: 8, unit: PIGLIN_ARCHETYPE.GRUNTER },
                            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
                        ]
                    },
                    [BASE_SIZE_LARGE]: {
                        villageVariationA: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRENADIER }]
                    }
                }
            }
        },
        scripted: {}
    },
    /*
    --------------------------------
    ----- VILLAGE COMPOSITIONS -----  
    --------------------------------
    */
    villageComposition: {
        /*
        ===================
        ===== OUTPOST =====  
        ===================
        */
        [BASE_SIZE_OUTPOST]: {
            //----- VARIATION A -----
            [VILLAGE_VARIATION_A]: {
                spreader: [
                    { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC },
                    { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                ]
            },
            //----- VARIATION B -----
            [VILLAGE_VARIATION_B]: {
                spreader: [{ amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }]
            },
            //----- VARIATION C -----
            [VILLAGE_VARIATION_C]: {
                spreader: [
                    { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC },
                    { amount: 2, unit: PIGLIN_ARCHETYPE.GRUNTER }
                ]
            }
        },
        /*
        =================
        ===== SMALL =====  
        =================
        */
        [BASE_SIZE_SMALL]: {
            //----- VARIATION A -----
            [VILLAGE_VARIATION_A]: {},
            //----- VARIATION B -----
            [VILLAGE_VARIATION_B]: {}
        },
        /*
        ==================
        ===== MEDIUM =====  
        ==================
        */
        [BASE_SIZE_MEDIUM]: {
            //----- VARIATION A -----
            [VILLAGE_VARIATION_A]: {},
            //----- VARIATION B -----
            [VILLAGE_VARIATION_B]: {}
        },
        /*
        =================
        ===== LARGE =====  
        =================
        */
        [BASE_SIZE_LARGE]: {
            //----- VARIATION A -----
            [VILLAGE_VARIATION_A]: {}
        },
        /*
        ================
        ===== BOSS =====  
        ================
        */
        [BASE_SIZE_BOSS]: {
            [VILLAGE_VARIATION_DEFAULT]: {}
        }
    }
}

const frostZoneCards = {
    smallSpire: "frostSmallSpireZone",
    smallPlatform: "frostSmallLowPlatformZone",
    mediumPlatform: "frostMediumPlatform",
    midPlatform: "frostSmallMidPlatformZone"
}

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

const GetFrostAIConfig = () => {
    return frostVal.aiConfig
}

const GetFrostRallyPointconfig = (villageId, ControlGroupTag) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    return frostVal.rallypoints[size][flavour][ControlGroupTag]
}

const GetFrostDescreteEncounters = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    let flavour = GetVillageFlavour(villageId)
    if (size === BASE_SIZE_OUTPOST) flavour += GetOutpostDifficultyFromPhase(FACTION_NAME_FROST)
    return frostVal.discreteEncounters[size][flavour]
}

const _FrostSpawnBossBaseResponseUnits = (villageId, spawnedUnits) => {
    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    let newUnits = EMPTY_ENTITY_GROUP
    if (spawnedUnits === undefined || spawnedUnits.length === 0) {
        return newUnits
    }

    if (Array.isArray(spawnedUnits)) {
        for (const entry of spawnedUnits) {
            newUnits = OPER_Append(newUnits, SpawnEntitiesAt(spawnLocation, entry.unit, entry.amount, TEAM_ORANGE, villageId))
        }
    } else {
        newUnits = SpawnEntitiesAt(spawnLocation, spawnedUnits.unit, spawnedUnits.amount, TEAM_ORANGE, villageId)
    }

    return newUnits
}

const _playFrostAttackStinger = (villageId) => {
    const portal = GetVillagePortal(villageId)
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_attack", portal)
    }
}

const _playFrostTargetStinger = (villageId) => {
    const portal = GetVillagePortal(villageId)
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_target", portal)
    }
}

const _SetFrostBarracksConfig = (spawner) => {
    if (QUERY_HasTags(spawner, [BARRACKS_NAME_FIGHTER])) {
        SetBarracksConfigForVillageVariation(spawner, FighterBarracksConfig_FrostFaction_Variations)
    } else if (QUERY_HasTags(spawner, [BARRACKS_NAME_DISRUPTOR])) {
        SetBarracksConfigForVillageVariation(spawner, DisruptorBarracksConfig_FrostFaction_Variations)
    } else if (QUERY_HasTags(spawner, [BARRACKS_NAME_SIEGER])) {
        SetBarracksConfigForVillageVariation(spawner, SiegerBarracksConfig_FrostFaction_Variations)
    }
}

const _CheckIfFrostFactionIsDefeated = () => {
    if (IsPiglinFactionDefeated(FACTION_NAME_FROST)) {
        GV_ROAMING_PIGLIN_FROST_FACTION_SPAWNERS.forEach((roamingGV) => {
            OUTPUT_SetGlobalVariable(roamingGV, 1)
        })

        // Correct horde decks since one horde just went out of action
        ReplenishNightOutpostHordeDeck()
    }
}

/* -------------------------------------------------------------------------- */
/*                               Base Bootstrap                               */
/* -------------------------------------------------------------------------- */

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        LISTENFOR_VillageGenerated({
            snippet: "vg_frost",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_FROST
        })

        LISTENFOR_VillageGenerated({
            snippet: "vg_frost_response",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_FROST
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_frost_portal_on",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "frost_portal_on"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_frost_portal_off",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "frost_portal_off"
        })
    }
})

SNIPPET_ExternalEvent("ee_frost_portal_on", () => {
    const introVar = frostVal.cinematic.shieldIntro
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_frost_portal_shield_on",
        ownerVillageId: villageId,
        eventName: "portal_shield_on"
    })

    OUTPUT_TriggerCinematic(introVar, [player])
})

SNIPPET_ExternalEvent("ee_frost_portal_off", () => {
    const introVar = frostVal.cinematic.shieldDown
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const piglinStructure = RandomEntity(QUERY_GetEntitiesWithTags("piglin"))
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_frost_portal_shield_off",
        ownerVillageId: villageId,
        eventName: "portal_shield_off"
    })

    OUTPUT_TriggerCinematic(introVar, [piglinStructure, portal])
})

SNIPPET_SpatialPartitionEntered("spe_frost_general", (triggerEntity, intruderEntity, _payload) => {
    if (QUERY_GetGlobalVariable(maOnboarding.adDirectNudges.adDirectUsedGV) < 2 && QUERY_GetGlobalVariable(maOnboarding.adDirectNudges.frostNudgeGV) === 0) {
        _PlayBaseTypeAdDirectVO(FACTION_NAME_FROST)
    }
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const villageFlavour = GetVillageFlavour(villageId)
    const portalEntity = GetVillagePortal(villageId)
    if (GetVillageVariable(villageId, "composition_listeners") === 0) {
        SetVillageVariable(villageId, "composition_listeners", 1)
        if (frostVal.rallypoints.hasOwnProperty(villageSize)) {
            CreateCompositionRallyPoints(villageId, frostVal.rallypoints[villageSize][villageFlavour])
            AssignAIHomeBases(villageId)
        }
    }

    if (IsStructureDestructionBase(villageId) && QUERY_GetGlobalVariable(piglinGeneralVal.globals.firstCoilCinePlayed) !== 0) {
        if (DoOnce(frostVal.global.hasVisitedCoilBase + villageId)) {
            SetPortalInvulnerable(villageId, true)
        }
    }

    if (IsBossVillage(villageId)) {
        if (DoOnce(frostVal.global.bossIntroPresented)) {
            // Initializaing this here because the cinematic can get bugged out on Switch (bug 913983)
            LISTENFOR_VillageDestroyed({
                snippet: "vd_frost_boss_base_destroyed",
                ownerVillageId: villageId,
                villageId: villageId
            })

            LISTENFOR_CinematicFinished({
                snippet: "frostSpawnFrostBoss",
                ownerVillageId: villageId,
                cinematicName: frostVal.cinematic.bossIntro
            })

            TriggerCinematicAndListenForFinish(frostVal.cinematic.bossIntro, [portalEntity, intruderEntity], villageId)
        }
    } else if (IsStructureDestructionBase(villageId)) {
        if (DoOnce(piglinGeneralVal.globals.firstCoilCinePlayed)) {
            DoOnce(frostVal.global.hasVisitedCoilBase + villageId) // needed to make sure the lavacoils at the first base don't become re-invulnerable
            LISTENFOR_CinematicEvent({
                snippet: "ce_frost_portal_shield_on",
                ownerVillageId: villageId,
                eventName: "portal_shield_on"
            })
            TriggerCinematicAndListenForFinish(frostVal.cinematic.shieldIntro, [intruderEntity], villageId)
        }
    } else {
        if (DoOnce(frostVal.global.hasVisited)) {
            TriggerCinematicAndListenForFinish(frostVal.cinematic.firstTimeNonShieldBaseIntro, [portalEntity, intruderEntity], villageId)
        }
    }

    //Play audio if base is invasion action source
    CheckAndPlayInvasionActionOriginPointVO(villageId)

    OUTPUT_SetObjectiveHealthBarVisible(portalEntity, true)

    // Escalation
    if (!IsBaseEscalated(triggerEntity, frostVal.escalation.phase1.name)) {
        MarkBaseAsEscalated(triggerEntity, frostVal.escalation.phase1.name)
        SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, frostVal.barracks, 1)
    }
})

SNIPPET_CinematicEvent("ce_frost_portal_shield_on", (payload) => {
    SetPortalInvulnerable(payload.ownerVillageId, true)
    Once()
})

SNIPPET_BuildingComplete("bc_frost_portal", (portalEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(portalEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (IsSmallOrGreater(baseSize)) {
        SetVillageVariable(villageId, frostVal.village.preventBossBridgeResponse, 0)

        // DEBUG: Ensure base has engineers to ticketed builds can build
        if (baseSize !== BASE_SIZE_BOSS) {
            SetAudioPhaseForBase(villageId, frostVal.audioPerPhaseArray[0])
        } else {
            SetAudioPhaseForBase(villageId, frostVal.audioPerBossPhaseArray[0])
        }

        //INNER KEEP TRIGGER VOLUME
        const frostInnerKeepTV = SpawnTriggerVolumeWithMultipleTagsets(portalEntity, portalEntity, "badger:spatial_trigger_frost_inner", TEAM_ORANGE, villageId, true, TAGSET_PLAYER_OR_MOB)

        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_frost_player_enter_inner_keep",
            ownerVillageId: villageId,
            triggerEntity: frostInnerKeepTV
        })
        //LISTEN FOR FROST Faction DESTRUCTION
        LISTENFOR_VillageDestroyed({
            snippet: "vd_frost_faction_portal",
            ownerVillageId: villageId,
            villageId: villageId,
            payloadEntities: frostInnerKeepTV, // clean this on portal desruction
            despawned: false
        })

        OUTPUT_SetObjectiveHealthBarVisible(portalEntity, false)
    }

    LISTENFOR_DeferredDeath({
        snippet: "dd_frost_portal_destruction",
        ownerVillageId: villageId,
        villageId: villageId,
        entities: portalEntity
    })
})

SNIPPET_DeferredDeath("dd_frost_portal_destruction", (entity, payload) => {
    PlayPortalDestructionCine(entity, FACTION_NAME_FROST)
})

/* -------------------------------------------------------------------------- */
/*                                 Escalations                                */
/* -------------------------------------------------------------------------- */
const _frostEscalate = (villageId, phase, _targetEntity) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portal = GetVillagePortal(villageId)
    if (IsBaseEscalated(portal, phase.name)) {
        return
    }

    MarkVillageAsEscalatedById(villageId, phase.name)
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, frostVal.barracks, phase.escalationLevel)
    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, phase.audio)
    } else {
        SetAudioPhaseForBase(villageId, phase.bossAudio)
    }

    if (phase.stinger !== "") {
        PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_FROST, phase.stinger), portal)
    }
    if (phase.escalateVO.length > 0) {
        PlayPresentationActionToAll(ChooseFromArray(phase.escalateVO))
    }
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let newUnits = EMPTY_ENTITY_GROUP
    if (phase.portalSpawns.hasOwnProperty(baseSize)) {
        newUnits = SpawnVillageVariationUnits(villageId, phase.portalSpawns[baseSize], spawnPosition)
    }
}

//wall destroyed//
SNIPPET_NonPopCappedEntityDestroyed("ed_frost_wall_destroyed", (destroyedEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)
    if (!IsBaseEscalated(GetVillagePortal(villageId), frostVal.escalation.phase4.name)) {
        _frostEscalate(villageId, frostVal.escalation.phase4, destroyedEntity)
    }
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_FROST, "keepGoing"), villageId)
    Once()
})

//phase 3 triggered //
SNIPPET_NonPopCappedEntityDestroyed("ed_frost_phase_3_destroyed_structures", (destroyEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const villageEntity = FILTER_RandomCount(villageEntities, 1)

    if (!IsBaseEscalated(villageEntity, frostVal.escalation.phase3.name)) {
        let structuresToDestroyCount = 0

        if (IsOutpost(baseSize)) {
            structuresToDestroyCount = 9
        } else if (IsSmall(baseSize)) {
            structuresToDestroyCount = 3
        } else if (IsMedium(baseSize)) {
            structuresToDestroyCount = 6
        } else if (IsLarge(baseSize)) {
            structuresToDestroyCount = 9
        }
        const numberOfDestroyedBuildings = GetVillageVariable(villageId, frostVal.village.frostPhase3BuildingDestroyedCount)
        SetVillageVariable(villageId, frostVal.village.frostPhase3BuildingDestroyedCount, numberOfDestroyedBuildings + 1)

        if (numberOfDestroyedBuildings >= structuresToDestroyCount) {
            _frostEscalate(villageId, frostVal.escalation.phase3, destroyEntity)
        }
    }
})

//phase 4 triggered // inner keep touched
SNIPPET_SpatialPartitionEntered("spe_frost_player_enter_inner_keep", (triggerEntity, _intruderEntity, _payload) => {
    if (!IsBaseEscalated(triggerEntity, frostVal.escalation.phase4.name)) {
        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
        const portal = GetVillagePortal(villageId)
        _frostEscalate(villageId, frostVal.escalation.phase4, GetPlayerOrMobCloseToPortal(portal))
    }
})
/* -------------------------------------------------------------------------- */
/*                               Piglin Responses                             */
/* -------------------------------------------------------------------------- */
const _InitFrostResponses = (villageId, hasPortal) => {
    SetVillageVariable(villageId, frostVal.village.ScriptedResponsesEnabled, 1)
    SetVillageVariable(villageId, frostVal.village.ScriptedResponsesTimeout, 0)
    _SetupFrostResponseDebounce(villageId)
    if (hasPortal) {
        BASE_InitPiglinStructureDamagedResponse(villageId, [
            { snippetName: "sd_portal_damaged_phase1", debounceTimer: 60, healthThreshold: frostVal.portalHealthThreshold.first.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
            { snippetName: "sd_portal_damaged_phase2", debounceTimer: 60, healthThreshold: frostVal.portalHealthThreshold.second.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
            { snippetName: "sd_portal_damaged_phase3", debounceTimer: 60, healthThreshold: frostVal.portalHealthThreshold.third.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
            { snippetName: "sd_portal_damaged_phase4", debounceTimer: 60, healthThreshold: frostVal.portalHealthThreshold.fourth.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },
            { snippetName: "sd_portal_damaged_phase5", debounceTimer: 60, healthThreshold: frostVal.portalHealthThreshold.fifth.health, triggerMode: HEALTH_TRIGGER_MODE.CROSS, includeTags: ["portal_piglin"] },

            { snippetName: "sd_tier_2_structure_response", debounceTimer: 120, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["tier2PiglinStructure"] },
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "barracks"] },
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigGate"] },

            { snippetName: "sd_tier_3_structure_response", debounceTimer: 120, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["tier3PiglinStructure"] },
            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigCarpenter"] },
            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigKnockbackTower"] }
        ])
        BASE_InitPlayerBuiltStructureResponse(villageId, [
            { snippetName: "pb_tier_2_structure_response", debounceTimer: 80, distanceCheck: 350, includeTags: ["tier2PlayerStructure"] },
            { snippetName: "pb_tier_3_structure_response", debounceTimer: 80, distanceCheck: 350, includeTags: ["tier3PlayerStructure"] },
            { snippetName: "pb_bridge_response", debounceTimer: 120, distanceCheck: 350, includeTags: ["playerBridge", "buildable_structure"] }
        ])
    } else {
        BASE_InitPiglinStructureDamagedResponse(villageId, [
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["tier2PiglinStructure"] },
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "barracks"] },
            { snippetName: "sd_tier_2_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigGate"] },

            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["tier3PiglinStructure"] },
            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigCarpenter"] },
            { snippetName: "sd_tier_3_structure_response", debounceTimer: 60, healthThreshold: 0.95, triggerMode: HEALTH_TRIGGER_MODE.BELOW, includeTags: ["piglin", "pigKnockbackTower"] }
        ])
        BASE_InitPlayerBuiltStructureResponse(villageId, [
            { snippetName: "pb_tier_2_structure_response", debounceTimer: 30, distanceCheck: 350, includeTags: ["tier2PlayerStructure"] },
            { snippetName: "pb_tier_3_structure_response", debounceTimer: 30, distanceCheck: 350, includeTags: ["tier3PlayerStructure"] }
        ])
    }

    BASE_InitPiglinStructureDestroyedResponse(villageId, [
        { snippetName: "sk_tier_2_structure_response", debounceTimer: 120, includeTags: ["tier2PiglinStructure"] },
        { snippetName: "sk_tier_2_structure_response", debounceTimer: 30, includeTags: ["piglin", "barracks"] },
        { snippetName: "sk_tier_2_structure_response", debounceTimer: 30, includeTags: ["piglin", "pigGate"] },

        { snippetName: "sk_tier_3_structure_response", debounceTimer: 120, includeTags: ["tier3PiglinStructure"] },
        { snippetName: "sk_tier_3_structure_response", debounceTimer: 60, includeTags: ["piglin", "pigCarpenter"] },
        { snippetName: "sk_tier_3_structure_response", debounceTimer: 60, includeTags: ["piglin", "pigKnockbackTower"] }
    ])
}

const _SetupFrostResponseDebounce = (villageId) => {
    LISTENFOR_EntityTimer({
        snippet: "lt_scriptedResponseDebounce",
        ownerVillageId: villageId,
        entity: GetVillageEntityFromID(villageId),
        timerName: "frostScriptedResponseDebounce"
    })
}
const _FrostPortalDamagedResponse = (portal, phase) => {
    const villageId = QUERY_GetVillageIDFromEntity(portal)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (QUERY_GetFactionSizeFromVillageID(villageId) === BASE_SIZE_BOSS) {
        return
    }
    let newUnits = EMPTY_ENTITY_GROUP
    switch (phase) {
        case 1:
            if (frostVal.portalHealthThreshold.first.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, frostVal.portalHealthThreshold.first.portalSpawns[baseSize], spawnPosition)
            }
            break
        case 2:
            if (frostVal.portalHealthThreshold.second.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, frostVal.portalHealthThreshold.second.portalSpawns[baseSize], spawnPosition)
            }
            break
        case 3: //these all use the same VO
            if (frostVal.portalHealthThreshold.third.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, frostVal.portalHealthThreshold.third.portalSpawns[baseSize], spawnPosition)
            }
            break
        case 4:
            PlayCommonPortalHealthGroup2VO(villageId)
            if (frostVal.portalHealthThreshold.fourth.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, frostVal.portalHealthThreshold.fourth.portalSpawns[baseSize], spawnPosition)
            }
            break
        case 5:
            if (frostVal.portalHealthThreshold.fifth.portalSpawns.hasOwnProperty(baseSize)) {
                newUnits = SpawnVillageVariationUnits(villageId, frostVal.portalHealthThreshold.fifth.portalSpawns[baseSize], spawnPosition)
            }
            break
        default:
            break
    }
    if (HasEntities(newUnits)) {
        AssignEntitiesToAI(villageId, newUnits, frostVal.aiConfig[FrostAI.Guard])
    }
    GatherNearestUnitsAndSendToLocation(["piglin", "mob"], ["boss", "frostBoss"], villageId, GetPlayerOrMobCloseToPortal(portal), 100, "", "")
}

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase1", (villageId, portal) => {
    _FrostPortalDamagedResponse(portal, 1)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase2", (villageId, portal) => {
    _FrostPortalDamagedResponse(portal, 2)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase3", (villageId, portal) => {
    _FrostPortalDamagedResponse(portal, 3)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase4", (villageId, portal) => {
    _FrostPortalDamagedResponse(portal, 4)
})
BASE_DeclarePiglinStructureDamagedResponseHandler("sd_portal_damaged_phase5", (villageId, portal) => {
    _FrostPortalDamagedResponse(portal, 5)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_tier_2_structure_response", (_villageId, _structure) => {})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_tier_3_structure_response", (_villageId, _structure) => {})

BASE_DeclarePiglinStructureDestroyedResponseHandler("sk_tier_2_structure_response", (_villageId, _structure) => {})

BASE_DeclarePiglinStructureDestroyedResponseHandler("sk_tier_3_structure_response", (_villageId, _structure) => {})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_tier_2_structure_response", (_villageId, _structure) => {})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_tier_3_structure_response", (villageId, _structure) => {
    _playFrostTargetStinger(villageId)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_bridge_response", (villageId, bridge) => {
    //escalation
    if (!CheckIfVillageIDIsEscalated(villageId, frostVal.escalation.phase2.name)) {
        _frostEscalate(villageId, frostVal.escalation.phase2, bridge)
    }
    _playFrostTargetStinger(villageId)
})

SNIPPET_NonPopCappedEntityDestroyed("ed_frost_knockback_spread_tactic", (_destroyedEntity, payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(payload.int)

    let knockbackToDestroyCount = 0

    if (IsSmall(baseSize)) {
        return
    } else if (IsMedium(baseSize)) {
        knockbackToDestroyCount = 1
    } else if (IsLarge(baseSize)) {
        knockbackToDestroyCount = 2
    }
    const numberOfDestroyedKnockback = GetVillageVariable(payload.ownerVillageId, frostVal.village.frostKnockbackDestroyedCount)
    SetVillageVariable(payload.ownerVillageId, frostVal.village.frostKnockbackDestroyedCount, numberOfDestroyedKnockback + 1)

    let knockbackTowerDeck

    if (numberOfDestroyedKnockback >= knockbackToDestroyCount) {
        knockbackTowerDeck = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1)

        DECK_MultiplyByMultipleRules(knockbackTowerDeck, [ZoneFilterCard("frostDeadZone"), PlacementPreferenceCard("placeRandomly")])

        SpawnEngineersIfThereAreNone(payload.ownerVillageId)
        OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + payload.ownerVillageId, knockbackTowerDeck)

        Once()
    }
})

SNIPPET_EntityTimer("lt_scriptedResponseDebounce", (entity, payload) => {
    SetVillageVariable(payload.ownerVillageId, frostVal.village.ScriptedResponsesTimeout, 0)
})

SNIPPET_EntityTimer("lt_sendSquadToPlayer", (entity, payload) => {
    if (HasEntities(entity)) {
        const portal = GetVillagePortal(payload.ownerVillageId)
        OUTPUT_RemoveTag(entity, frostVal.responses.unitAssignedTag)
        OUTPUT_MoveAttackEntity(payload.entities, GetPlayerOrMobCloseToPortal(portal), CALLBACK_NONE) //send units
    }
})

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                           Barracks Functionality                           */
/* -------------------------------------------------------------------------- */

SNIPPET_BuildableSpawnerSpawned("bc_outerbarracks_send_seeker", (buildableSpawner, spawnedEntity) => {
    OUTPUT_MoveAttackEntity(spawnedEntity, RandomEntity(GetPlayers()), CALLBACK_NONE)
})

//generic barracks listeners
SNIPPET_BuildingComplete("bc_frost_lava_launcher_barracks", (spawner) => {
    const villageId = QUERY_GetVillageIDFromEntity(spawner)
    LISTENFOR_BuildableSpawnerSpawned({
        snippet: "us_frost_lava_launcher",
        ownerVillageId: villageId,
        buildableSpawner: spawner
    })
})

SNIPPET_BuildableSpawnerSpawned("us_frost_lava_launcher", (buildableSpawner, spawnedEntity) => {
    OUTPUT_AddTag(spawnedEntity, frostVal.responses.unitExemptTag)
})

SNIPPET_BuildingComplete("bc_frost_siege_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    RecruitSpawnedComposition(villageId, frostVal.rallypoints[size][flavour]["frostSiege"], buildingEntity, FrostAI.Siege)
})
SNIPPET_BuildingComplete("bc_frost_assault_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    RecruitSpawnedComposition(villageId, frostVal.rallypoints[size][flavour]["frostGuard"], buildingEntity, FrostAI.Guard)
})
SNIPPET_BuildingComplete("bc_frost_guard_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    RecruitSpawnedComposition(villageId, frostVal.rallypoints[size][flavour]["frostGuard"], buildingEntity, FrostAI.Guard)
})

SNIPPET_BuildingComplete("bc_frost_barracks_common_setup", (spawner, _payload) => {
    _SetFrostBarracksConfig(spawner)
})

/* -------------------------------------------------------------------------- */
/*                                Utility/Logic                               */
/* -------------------------------------------------------------------------- */

const ResetBoss = (villageId) => {
    const Boss = QUERY_GetEntitiesWithTagFilter(["frostBoss"], [])
    if (HasEntities(Boss)) {
        OUTPUT_SetHealthPercent(Boss, 100)
        OUTPUT_SetAttackMode(Boss, "secondary_attack_2a", false)
        OUTPUT_SetAttackMode(Boss, "secondary_attack_2b", false)
        OUTPUT_SetAttackMode(Boss, "secondary_attack_2c", false)
        OUTPUT_SetAttackMode(Boss, "secondary_attack_1", false)
    }
}

SNIPPET_PresenceEntered("spe_frost_gameplay", (triggerEntity, _count, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    // Check for whether the village needs to reset due to previous disengagement by the player.
    // At this point, all the popcapped entities in the base have already been culled.
    // The village will never be flagged for a reset while a player is in this spatial partition, so we only need to check when we enter.
    if (ShouldBaseReset(villageId)) {
        const escalationkeys = {}
        for (const phase in frostVal.escalation) {
            escalationkeys[phase.name] = phase.name
        }
        ResetBoss(villageId)
        ResetEscalationAndBarracksForVillageVariation(villageId, frostVal.barracks, escalationkeys)
        ResetDiscreteEncounters(villageId)
        MarkBaseAsReset(villageId)
    }
})

SNIPPET_VillageDestroyed("vd_frost_faction_portal", (villageId, payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    _CheckIfFrostFactionIsDefeated()

    const triggerVolumesToClean = payload.entities
    OUTPUT_DespawnEntities(triggerVolumesToClean)

    if (QUERY_GetGlobalVariable(frostVal.global.basesDestroyed) === 0) {
    } else {
    }

    if (QUERY_GetGlobalVariable(frostVal.global.basesDestroyed) >= 5) {
    }

    IncrementGlobal(frostVal.global.basesDestroyed)
    if (baseSize === BASE_SIZE_LARGE) {
        IncrementGlobal(frostVal.global.largeBasesDestroyed)
    }

    OUTPUT_SetGlobalVariable(frostVal.global.anyBasesKilled, 1)
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, frostVal.barracks, 0)
})

/* -------------------------------------------------------------------------- */
/*                              Main Village Init                             */
/* -------------------------------------------------------------------------- */

//initialize ais:
SetupBaseAIs(frostVal.aiConfig)

SNIPPET_VillageGenerated("vg_frost_response", (villageId, _payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (baseSize === VILLAGE_SIZE_DEBUG) return
    LISTENFOR_EntitySpawned({
        snippet: "es_set_appearance_to_frost_faction_piglins",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["piglin", "mob"]
    })

    //portal built
    LISTENFOR_BuildingComplete({
        snippet: "bc_frost_portal",
        ownerVillageId: villageId,
        includeTags: ["portal_piglin"],
        excludeTags: ["roaming"],
        villageId: villageId
    })

    if (IsMobAlliancePiglinSize(baseSize)) {
        return
    }
    //Audio
    SetupAudioEntityForBase(villageId, frostVal.music)

    if (baseSize === BASE_SIZE_OUTPOST) {
        SetAudioPhaseForBase(villageId, frostVal.audioPerPhaseArray[0])
    }

    //common barracks complete listener

    let flavour = GetVillageFlavour(villageId)
    if (baseSize === BASE_SIZE_OUTPOST) flavour += GetOutpostDifficultyFromPhase(FACTION_NAME_FROST)
    const discreteEncounters = frostVal.discreteEncounters[baseSize][flavour]

    CreateDiscreteEncountersListeners(villageId, discreteEncounters)

    LISTENFOR_BuildingComplete({
        snippet: "bc_frost_barracks_common_setup",
        ownerVillageId: villageId,
        includeTags: ["barracks", "piglin"],
        excludeTags: [],
        villageId: villageId
    })

    if (IsSmallOrGreater(baseSize)) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_frost_siege_barracks",
            ownerVillageId: villageId,
            includeTags: ["frostSiegeBarracks"],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_frost_assault_barracks",
            ownerVillageId: villageId,
            includeTags: ["frostAssaultBarracks"],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_frost_guard_barracks",
            ownerVillageId: villageId,
            includeTags: ["frostGuardBarracks"],
            villageId: villageId
        })
    }

    if (baseSize === BASE_SIZE_MEDIUM && GetVillageFlavour(villageId) === VILLAGE_VARIATION_B) {
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_frost_wall_destroyed",
            ownerVillageId: villageId,
            includeTags: ["pigGate"],
            villageId: villageId,
            despawned: false
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_frost_wall_destroyed",
            ownerVillageId: villageId,
            includeTags: ["piglin_wall"],
            villageId: villageId,
            despawned: false
        })
    }

    //phase 3 destroy multiple structures
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_frost_phase_3_destroyed_structures",
        ownerVillageId: villageId,
        includeTags: ["pigSpreader"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_frost_phase_3_destroyed_structures",
        ownerVillageId: villageId,
        includeTags: ["pigTower"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_frost_phase_3_destroyed_structures",
        ownerVillageId: villageId,
        includeTags: ["pigKnockbackTower"],
        villageId: villageId,
        despawned: false
    })

    //listen for lava launcher spawns, play VO
    LISTENFOR_EntitySpawned({
        snippet: "es_lava_launcher_vo",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["piggo_lava_launcher"]
    })

    //LARGE ONLY
    if (baseSize === BASE_SIZE_LARGE) {
        //knockback spread tactic
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_frost_knockback_spread_tactic",
            ownerVillageId: villageId,
            includeTags: ["pigKnockbackTower"],
            villageId: villageId,
            payloadInt: villageId,
            despawned: false
        })
    }

    if (baseSize === BASE_SIZE_LARGE || baseSize === BASE_SIZE_BOSS) {
        //numberOfDefeatedLavaLaunchers
        LISTENFOR_PopCappedEntityDestroyed({
            snippet: "ed_lava_launcher_defeated",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["piggo_lava_launcher"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_lava_launcher_discrete_encounter_structure_destroyed",
            ownerVillageId: villageId,
            includeTags: ["has_lava_launcher_discrete_encounter"],
            villageId: villageId,
            payloadInt: villageId,
            despawned: false
        })
    }

    if (IsStructureDestructionBase(villageId)) {
        //Crystal Objective setup:
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_frost_sub_structures",
            ownerVillageId: villageId,
            includeTags: ["pigCrystal"],
            villageId: villageId,
            factionName: FACTION_NAME_FROST
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_frost_sub_structures_count",
            ownerVillageId: villageId,
            includeTags: ["pigCrystal"],
            villageId: villageId,
            factionName: FACTION_NAME_FROST
        })
    }

    let cardValueBf = ""
    if (baseSize === BASE_SIZE_SMALL) {
        cardValueBf = "frostPortalSmall"
    } else if (baseSize === BASE_SIZE_MEDIUM) {
        cardValueBf = "frostPortalMedium"
    } else if (baseSize === BASE_SIZE_LARGE) {
        cardValueBf = "frostPortalLarge"
    }
    if (cardValueBf !== "") {
        LISTENFOR_BuildingFailedToPlace({
            snippet: "bf_portal_failed_to_place",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cardValue: cardValueBf
        })
    }
})

/* -------------------------------------------------------------------------- */
/*                             Lava Coil Base logic                           */
/* -------------------------------------------------------------------------- */
//Experimental Prototype Setup
SNIPPET_BuildingComplete("bc_frost_sub_structures_count", (crystalEntity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = GetVillageVariable(villageId, "remaining_sub_structures") + 1
    SetVillageVariable(villageId, "remaining_sub_structures", substructures)

    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    SpawnEntitiesNear(crystalEntity, frostVal.crystalGuards[size][flavour].unit, frostVal.crystalGuards[size][flavour].amount, TEAM_ORANGE, villageId)
})

SNIPPET_NonPopCappedEntityDestroyed("ed_frost_sub_structures", (entity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = DeltaVillageVariable(villageId, "remaining_sub_structures", -1)
    if (substructures === 0) {
        SetPortalInvulnerable(villageId, false)
    }
})
//END RALLY SETUP SNIPPETS---------------------------------------------------------------

SNIPPET_BuildingComplete("bc_portal_frost_fontlineA_crate", (piglinCratesBuilding) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinCratesBuilding)

    SpawnEntitiesAt(piglinCratesBuilding, PIGLIN_ARCHETYPE.MEDIC, 5, TEAM_ORANGE, villageId)
})

SNIPPET_BuildingComplete("bc_spreader_grenadier_outpost", (spreader) => {
    const villageId = QUERY_GetVillageIDFromEntity(spreader)
    const unit = SpawnEntitiesAt(spreader, PIGLIN_ARCHETYPE.GRENADIER, 1, TEAM_ORANGE, villageId)
    OUTPUT_SetLeashWithReturnWhenNotTargeting(unit, spreader, 15, 5)
})

SNIPPET_LocalTimer("lt_frost_reset_bridge_squad", (payload) => {
    if (QUERY_GetEntitiesCount(payload.entities) > 0) {
        const villageId = QUERY_GetVillageIDFromEntity(payload.entities)
        SetVillageVariable(villageId, frostVal.village.preventBridgeSquadResponse, 0)
    }
})

SNIPPET_EntitySpawned("es_set_appearance_to_frost_faction_piglins", (piglinEntity) => {
    OUTPUT_OverrideFactionAppearanceByName(piglinEntity, FACTION_NAME_FROST)
})

/* -------------------------------------------------------------------------- */
/*                           FROSTBOSS Scripting                           */
/* -------------------------------------------------------------------------- */

const _TeleportBoss = (villageId, BossEntity, Stage) => {
    let Target
    switch (Stage) {
        case 1:
            Target = GetEntitiesWithTagsAndVillage(["frostBossRally1"], villageId)
            break
        case 2:
            Target = GetEntitiesWithTagsAndVillage(["frostBossRally2"], villageId)
            break
        case 3:
            Target = GetEntitiesWithTagsAndVillage(["frostBossRally3"], villageId)
    }
    OUTPUT_RemoveLeash(BossEntity)
    OUTPUT_MovePosition(BossEntity, Target, 5, CALLBACK_NONE)
    OUTPUT_SetLeashWithReturnWhenNotTargeting(BossEntity, Target, 25, 5)

    //re-enable all the barracks after the boss teleports
    SetEscalationValueAndUpdateAllBarracksForVillage(villageId, frostVal.barracks, Stage)
}

const _StartBossFight = (villageId) => {
    SetVillageVariable(villageId, frostVal.village.ScriptedResponsesEnabled, 0)
    //get and disable all the barracks when the piglin boss is engaged
    SetEscalationValueAndUpdateAllBarracksForVillage(villageId, frostVal.barracks, 0)
}

SNIPPET_CinematicFinished("frostSpawnFrostBoss", (payload) => {
    Once()
    const villageId = payload.ownerVillageId
    //KEEP BOSS CLOSE TO PORTAL
    if (QUERY_GetGlobalVariable(frostVal.global.bossSpawned) > 0) {
        return
    }
    OUTPUT_SetGlobalVariable(frostVal.global.bossSpawned, 1)
    LISTENFOR_EntitySpawned({
        snippet: "es_frost_boss",
        ownerVillageId: villageId,
        includeTags: [frostVal.tag.frostBossTag]
    })

    SpawnAtPortal(villageId, "badger:piglin_frost_boss", 1)
    SetAudioPhaseForBase(villageId, frostVal.escalation.phase4.bossAudio)
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BOSS, MAP_BOSS.FROST_BOSS)
})

SNIPPET_HealthChanged("hc_frost_boss_engaged", (boss, _currentHealth, _previousHealth, payload) => {
    _StartBossFight(payload.ownerVillageId)
    OUTPUT_SetEmitterState(boss, "frost_boss_jumped0")
})

SNIPPET_EntitySpawned("es_frost_boss", (entitySpawned, payload) => {
    const villageId = payload.ownerVillageId
    const boss = entitySpawned
    const portal = GetVillagePortal(villageId)

    LISTENFOR_HealthChanged({
        snippet: "hc_frost_boss_engaged",
        ownerVillageId: villageId,
        includeTags: ["boss", "frostBoss"],
        normalizedThreshold: 0.99,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_frost_boss_stage2",
        ownerVillageId: villageId,
        includeTags: ["boss", "frostBoss"],
        normalizedThreshold: 0.9,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_frost_boss_first_leap",
        ownerVillageId: villageId,
        includeTags: ["boss", "frostBoss"],
        normalizedThreshold: 0.7,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })
    LISTENFOR_HealthChanged({
        snippet: "hc_frost_boss_final_leap",
        ownerVillageId: villageId,
        includeTags: ["boss", "frostBoss"],
        normalizedThreshold: 0.3,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_frost_boss",
        ownerVillageId: villageId,
        includeTags: ["boss", "frostBoss"],
        normalizedThreshold: 0.5,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadEntities: portal
    })

    LISTENFOR_CinematicStarted({
        snippet: "cs_frost_boss_dead",
        ownerVillageId: villageId,
        cinematicName: frostVal.cinematic.bossDead
    })

    OUTPUT_SetGlobalVariable(frostVal.global.isBossOnVillagePrefix + villageId, 1)
    _TeleportBoss(villageId, boss, 1)
    Once()
})

SNIPPET_VillageDestroyed("vd_frost_boss_base_destroyed", (villageId) => {
    _onFrostBossBaseDefeated(villageId)
})

const _onFrostBossBaseDefeated = (villageId) => {
    if (DoOnce("frostBossKilled")) {
        UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_FROST_BOSS)

        OUTPUT_AddOrSubtractObjectiveProgress("objectives.defeatSpore", 1)

        const villageEntity = GetVillageEntityFromID(villageId)
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BOSS, MAP_BOSS.DEFEATED)

        _CheckIfFrostFactionIsDefeated()

        TelemetrySendBossKilled(GetAllPlayers(), "FrostBoss") //telemetry achievement event for killing boss
        TelemetrySendKeyActionCompletedServerEvent(BOSS_BASE_VALS.telemetry.frostBossDefeat)

        LISTENFOR_LocalTimer({
            snippet: "lt_post_portal_death_boss_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 5,
            payloadString: frostVal.VO.postBossDeath
        })
    }
}

SNIPPET_CinematicStarted("cs_frost_boss_dead", (payload) => {
    const bossPortal = GetVillagePortal(payload.ownerVillageId)
    //make portal vulnerable
    SetPortalInvulnerable(payload.ownerVillageId, false)
    //set portal health to 5%
    OUTPUT_SetHealthPercent(bossPortal, 5)
    Once()
})

SNIPPET_EntityTimer("frostBossMedicWaves", (boss, payload) => {
    if (HasEntities(boss)) {
        const medics = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.MEDIC, 5)
        OUTPUT_Move(medics, boss, 5, CALLBACK_NONE)
        OUTPUT_SetEntityTimer(boss, "frostBossMedicWaveTimer", 30)
    }
})

SNIPPET_HealthChanged("hc_frost_boss_stage2", (boss, _currentHealth, _previousHealth) => {
    OUTPUT_SetAttackMode(boss, "secondary_attack_2a", true)
    OUTPUT_SetAttackMode(boss, "secondary_attack_2b", true)
    OUTPUT_SetAttackMode(boss, "secondary_attack_2c", true)
    Once()
})

SNIPPET_HealthChanged("hc_frost_boss_first_leap", (boss, _currentHealth, _previousHealth, payload) => {
    PlayPresentationActionToAll("piglin_boss_health_frost_1")
    _TeleportBoss(payload.ownerVillageId, boss, 2)
    OUTPUT_SetAttackMode(boss, "spit_attack_escalate_1", true)
    OUTPUT_SetEmitterState(boss, "frost_boss_jumped1")
    Once()
})

SNIPPET_HealthChanged("hc_frost_boss_final_leap", (boss, _currentHealth, _previousHealth, payload) => {
    PlayPresentationActionToAll("piglin_boss_health_frost_2")
    _TeleportBoss(payload.ownerVillageId, boss, 3)
    OUTPUT_SetAttackMode(boss, "spit_attack_escalate_2", true)

    const spawnLocation = GetVillagePortalSpawnLocation(payload.ownerVillageId)
    CreateUnitCompositionAtTarget(spawnLocation, FrostCompositions.heavyPatrol, payload.ownerVillageId)
    CreateUnitCompositionAtTarget(spawnLocation, FrostCompositions.heavyPatrol, payload.ownerVillageId)
    OUTPUT_SetEmitterState(boss, "frost_boss_jumped2")
    Once()
})

SNIPPET_HealthChanged("hc_frost_boss_stage3", (boss, _currentHealth, _previousHealth) => {
    const villageId = QUERY_GetVillageIDFromEntity(boss)
    OUTPUT_SetAttackMode(boss, "secondary_attack_1", true)
    const medics = SpawnAtPortal(villageId, PIGLIN_ARCHETYPE.MEDIC, 5)
    OUTPUT_Move(medics, boss, 5, CALLBACK_NONE)
    LISTENFOR_EntityTimer({
        snippet: "frostBossMedicWaves",
        ownerVillageId: villageId,
        entity: boss,
        timerName: "frostBossMedicWaveTimer"
    })
    OUTPUT_SetEntityTimer(boss, "frostBossMedicWaveTimer", 30)
    Once()
})

SNIPPET_HealthChanged("hc_frost_boss", (boss, _currentHealth, _previousHealth, payload) => {
    Once()
})

/* -------------------------------------------------------------------------- */
/*                             Village generation                             */
/* -------------------------------------------------------------------------- */

/* ----------------------- village generation helpers ----------------------- */

const _CreateZoneInDeck = (ZoneCard, Deck, PlacementRules = [], ZoneCount = 1) => {
    DECK_PutOnBottomOf(_CreateZone(ZoneCard, PlacementRules, ZoneCount), Deck)
}

const _CreateZone = (ZoneCard, PlacementRules = [], ZoneCount = 1) => {
    const zone = ZonesCard(ZoneCard, ZoneCount)
    if (PlacementRules.length > 0) {
        DECK_MultiplyByMultipleRules(zone, PlacementRules)
    }
    return zone
}

const _CreateBuildableInDeck = (BuildingCard, Count, Deck, PlacementRules = []) => {
    DECK_PutOnBottomOf(_CreateBuildable(BuildingCard, Count, PlacementRules), Deck)
}

const _CreateBuildable = (BuildingCard, Count, PlacementRules = []) => {
    const building = DECK_Empty()
    for (let index = 0; index < Count; index++) {
        DECK_PutOnBottomOf(BuildableCard(BuildingCard), building)
    }
    if (PlacementRules.length > 0) {
        DECK_MultiplyByMultipleRules(building, PlacementRules)
    }
    return building
}

const _CreateLayerOfZonesInDeck = (ZonesCard, Deck, PlacementRules = [], ZoneDepth = 1) => {
    DECK_PutOnBottomOf(_CreateLayerOfZones(ZonesCard, PlacementRules, ZoneDepth), Deck)
}

const _CreateLayerOfZones = (ZoneCard, PlacementRules = [], LayerDepth = 1) => {
    const zones = LayerOfZonesCard(ZoneCard, LayerDepth)
    if (PlacementRules.length > 0) {
        DECK_MultiplyByMultipleRules(zones, PlacementRules)
    }
    return zones
}

const _SetupDistrict = (district, baseDeck, miniDecks, PlacementCards) => {
    district.miniDecks.forEach((deckName) => {
        DECK_MultiplyBySingle(miniDecks[deckName], district.card)
    })
    DECK_MultiplyByMultipleRules(district.card, PlacementCards)
    DECK_PutOnBottomOf(district.card, baseDeck)
    DECK_PutOnBottomOf(district.deck, baseDeck)
}

const _PlayMiniDecks = (baseDeck, minideck, deckNames) => {
    deckNames.forEach((name) => {
        DECK_PutOnBottomOf(minideck[name], baseDeck)
    })
}

const _DeckShuffleFrost = (deck) => {
    DECK_ShuffleGroup(deck, RANDOM_GROUP_FROST_HORDE)
}

const _ShuffleMiniDecks = (minideck, deckNames) => {
    deckNames.forEach((name) => {
        _DeckShuffleFrost(minideck[name])
    })
}

const _MultiplyMiniDeckByRules = (miniDeck, deckNames, rules) => {
    deckNames.forEach((name) => {
        DECK_MultiplyByMultipleRules(miniDeck[name], rules)
    })
}

const _SetZoneTag = (card, bridgeZoneTag) => {
    if (bridgeZoneTag === "") {
        return
    }
    DECK_MultiplyBySingle(card, ZoneTagCard(bridgeZoneTag))
}

const _CreatePlatform = (district, height, zoneCount = 1, zoneCard = frostZoneCards.smallPlatform, bridgeZoneTag = frostVal.bridgeZone.none, direction = "", rules = []) => {
    const platform = ZonesCard(zoneCard, zoneCount)
    DECK_MultiplyByMultipleRules(platform, [ZoneHeightChangeCard(height), ZoneTagCard("frostPlatform"), ZoneTagCard("frostValidZone")])
    if (district !== null) DECK_MultiplyBySingle(platform, district.card)
    if (direction !== "") {
        DECK_MultiplyBySingle(platform, PlacementPreferenceCard(direction))
    }
    if (rules !== []) {
        DECK_MultiplyByMultipleRules(platform, rules)
    }
    if (bridgeZoneTag !== frostVal.bridgeZone.none) {
        _SetZoneTag(platform, bridgeZoneTag)
    }
    if (district !== null) DECK_PutOnBottomOf(platform, district.deck)
    return platform
}

const _CreateSpire = (district, height, zoneCount = 1, zoneCard = frostZoneCards.smallSpire, bridgeZoneTag = frostVal.bridgeZone.none, direction = "", rules = []) => {
    const spire = ZonesCard(zoneCard, zoneCount)
    DECK_MultiplyByMultipleRules(spire, [ZoneHeightChangeCard(height), ZoneTagCard("frostSmallSpire"), ZoneTagCard("frostValidZone")])
    if (district !== null) DECK_MultiplyBySingle(spire, district.card)
    if (direction !== "") {
        DECK_MultiplyBySingle(spire, PlacementPreferenceCard(direction))
    }
    if (rules !== []) {
        DECK_MultiplyByMultipleRules(spire, rules)
    }
    if (bridgeZoneTag !== frostVal.bridgeZone.none) {
        _SetZoneTag(spire, bridgeZoneTag)
    }
    if (district !== null) DECK_PutOnBottomOf(spire, district.deck)
    return spire
}

//Deadzones do not use directions by default
const _AddDeadzoneLayer = (district, NumberOfLayers, rules = []) => {
    const zoneLayer = LayerOfZonesCard("addLayerOfZones", NumberOfLayers)
    DECK_MultiplyByMultipleRules(zoneLayer, [ZoneTagCard("frostDeadZone")])
    if (district !== null) DECK_MultiplyBySingle(zoneLayer, district.card)
    if (rules !== []) {
        DECK_MultiplyByMultipleRules(zoneLayer, rules)
    }
    if (district !== null) DECK_PutOnBottomOf(zoneLayer, district.deck)
    return zoneLayer
}
//Deadzones do not use directions by default
const _AddDeadzone = (district, numberOfZones, rules = []) => {
    const deadZone = ZonesCard("addZone", numberOfZones)
    DECK_MultiplyByMultipleRules(deadZone, [ZoneTagCard("frostDeadZone")])
    if (district !== null) DECK_MultiplyBySingle(deadZone, district.card)
    if (rules !== []) {
        DECK_MultiplyByMultipleRules(deadZone, rules)
    }
    if (district !== null) DECK_PutOnBottomOf(deadZone, district.deck)
    return deadZone
}

const _CreateTripleStack = (district, heightTop, heightMid, heightLow, zoneTop = frostZoneCards.smallPlatform, zonesLower = frostZoneCards.smallPlatform, bridgeZoneTag = frostVal.bridgeZone.none, topRules = [], midRules = [], botRules = []) => {
    const newDeck = DECK_Empty()
    const topZone = ZonesCard(zoneTop, 1)
    const midZone = ZonesCard(zonesLower, 1)
    const lowerZone = ZonesCard(zonesLower, 1)
    DECK_MultiplyByMultipleRules(topZone, [ZoneHeightChangeCard(heightTop), ZoneTagCard("frostValidZone"), ZoneTagCard(bridgeZoneTag), ZoneTagCard("frostWaterfallTop")])
    DECK_MultiplyByMultipleRules(midZone, [ZoneHeightChangeCard(heightMid), ZoneTagCard("frostValidZone"), ZoneTagCard("frostWaterfallMid")])
    DECK_MultiplyByMultipleRules(lowerZone, [ZoneHeightChangeCard(heightLow), ZoneTagCard("frostValidZone"), ZoneTagCard("frostWaterfallBot")])
    if (topRules.length > 0) {
        DECK_MultiplyByMultipleRules(topZone, topRules)
    }
    if (midRules.length > 0) {
        DECK_MultiplyByMultipleRules(midZone, midRules)
    }
    if (botRules.length > 0) {
        DECK_MultiplyByMultipleRules(lowerZone, botRules)
    }
    DECK_PutOnBottomOf(topZone, newDeck)
    DECK_PutOnBottomOf(midZone, newDeck)
    DECK_PutOnBottomOf(lowerZone, newDeck)
    if (district !== null) DECK_MultiplyBySingle(newDeck, district.card)
    if (district !== null) DECK_PutOnBottomOf(newDeck, district.deck)
    return newDeck
}

const _CreateDoubleStack = (district, heightTop, heightLow, zoneTop = frostZoneCards.smallPlatform, zonesLower = frostZoneCards.smallPlatform, bridgeZoneTag = frostVal.bridgeZone.none, topRules = [], botRules = []) => {
    const newDeck = DECK_Empty()
    const topZone = ZonesCard(zoneTop, 1)
    const lowerZone = ZonesCard(zonesLower, 1)
    DECK_MultiplyByMultipleRules(topZone, [ZoneHeightChangeCard(heightTop), ZoneTagCard("frostValidZone"), ZoneTagCard(bridgeZoneTag), ZoneTagCard("frostWaterfallTop")])
    DECK_MultiplyByMultipleRules(lowerZone, [ZoneHeightChangeCard(heightLow), ZoneTagCard("frostValidZone"), ZoneTagCard("frostWaterfallBot")])
    if (topRules.length > 0) {
        DECK_MultiplyByMultipleRules(topZone, topRules)
    }
    if (botRules.length > 0) {
        DECK_MultiplyByMultipleRules(lowerZone, botRules)
    }
    DECK_PutOnBottomOf(topZone, newDeck)
    DECK_PutOnBottomOf(lowerZone, newDeck)
    if (district !== null) DECK_MultiplyBySingle(newDeck, district.card)
    if (district !== null) DECK_PutOnBottomOf(newDeck, district.deck)
    return newDeck
}

const _PlaceObjectiveStructure = (buildable, baseDeck, placementRules = [], zone = "", districts = []) => {
    const objectiveCard = BuildableCard(buildable)
    if (districts.length > 0) {
        DECK_MultiplyBySingle(objectiveCard, DistrictCard(ChooseFromArray(districts).name))
    }
    if (placementRules.length > 0) {
        DECK_MultiplyByMultipleRules(objectiveCard, placementRules)
    }
    if (zone !== "") {
        DECK_MultiplyBySingle(objectiveCard, ZoneFilterCard(zone))
    }
    DECK_PutOnBottomOf(objectiveCard, baseDeck)
    return objectiveCard
}

const _PlacePortalTowers = (northTowerCount, eastTowerCount, southTowerCount, westTowerCount, baseSize) => {
    const towerDecks = DECK_Empty()
    const northTowers = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, northTowerCount)
    const eastTowers = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, eastTowerCount)
    const southTowers = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, southTowerCount)
    const westTowers = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, westTowerCount)

    if (baseSize === BASE_SIZE_MEDIUM || baseSize === BASE_SIZE_LARGE) {
        const northChopper = BuildableCard(BUILDABLE_CARD.TOWER_SPORE_FAN, 1)

        DECK_MultiplyByMultipleRules(northChopper, [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
        DECK_PutOnBottomOf(northChopper, towerDecks)

        const southChopper = BuildableCard(BUILDABLE_CARD.TOWER_SPORE_FAN, 1)
        DECK_MultiplyByMultipleRules(southChopper, [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])

        //Large bases always get two while medium bases get two on mythic, legendary, and custom
        if (baseSize === BASE_SIZE_LARGE || (baseSize === BASE_SIZE_MEDIUM && (QUERY_GameDifficulty() === "Normal" || QUERY_GameDifficulty() === "Hard" || QUERY_GameDifficulty() === "Custom"))) {
            DECK_PutOnBottomOf(southChopper, towerDecks)
        }
    }

    DECK_MultiplyBySingle(northTowers, PlacementPreferenceCard(DIRECTION_CARD.northWedge))
    DECK_MultiplyBySingle(eastTowers, PlacementPreferenceCard(DIRECTION_CARD.eastWedge))
    DECK_MultiplyBySingle(southTowers, PlacementPreferenceCard(DIRECTION_CARD.southWedge))
    DECK_MultiplyBySingle(westTowers, PlacementPreferenceCard(DIRECTION_CARD.westWedge))

    DECK_PutOnBottomOf(northTowers, towerDecks)
    DECK_PutOnBottomOf(eastTowers, towerDecks)
    DECK_PutOnBottomOf(southTowers, towerDecks)
    DECK_PutOnBottomOf(westTowers, towerDecks)

    return towerDecks
}

const _BuildBridge = (BaseDeck, StartFilters, EndFilters, StartDistrict = null, EndDistrict = null) => {
    let pathStartRules = [ZoneFilterCard("frostDeadZone")]
    let pathEndRules = [ZoneFilterCard("frostDeadZone")]

    if (EndFilters.length > 0) {
        pathEndRules = pathEndRules.concat(EndFilters)
    }
    if (StartFilters.length > 0) {
        pathStartRules = pathStartRules.concat(StartFilters)
    }
    if (StartDistrict !== null) {
        pathStartRules.push(DistrictCard(StartDistrict.name))
    }
    if (EndDistrict !== null) {
        pathEndRules.push(DistrictCard(EndDistrict.name))
    }
    CreatePathRequestOnBottomOf("frost_district_path", pathStartRules, pathEndRules, BaseDeck)
}
/* ------------------------ Village Generation Logic ------------------------ */

//Frontline A
const _FrostFactionMakeOutpost = (villageId) => {
    const baseDeck = DECK_Empty()
    //const flavourBase = GetVillageFlavour(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const difficulty = GetOutpostDifficultyFromPhase(FACTION_NAME_FROST)

    LISTENFOR_BuildingComplete({
        snippet: "bc_spreader_grenadier_outpost",
        ownerVillageId: villageId,
        includeTags: ["netherSpreader", "frostComposition1"],
        villageId: villageId
    })

    //central zone
    const centerZone = _CreateZone("addZone", [ZoneHeightChangeCard(FrostHeight.H7), ZoneTagCard("frostInsideOutpost"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], 4)
    const deadZone = _AddDeadzoneLayer(null, 1, [ZoneTagCard("frostInsideOutpost"), ZoneTagCard("groundZone")])

    const platform1 = _CreatePlatform(null, FrostHeight.H4, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.northWedge, [ZoneTagCard("frostInsideOutpost"), PlacementPreferenceCard("closeToDistrictStart")])

    const platform2 = _CreatePlatform(null, FrostHeight.H5, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.southWedge, [ZoneTagCard("frostInsideOutpost"), PlacementPreferenceCard("closeToDistrictStart")])

    const platform3 = _CreatePlatform(null, FrostHeight.H6, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.westWedge, [ZoneTagCard("frostInsideOutpost"), PlacementPreferenceCard("closeToDistrictStart")])

    //zones
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(deadZone, baseDeck)

    DECK_PutOnBottomOf(platform1, baseDeck)
    DECK_PutOnBottomOf(platform2, baseDeck)
    DECK_PutOnBottomOf(platform3, baseDeck)

    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)
    // //buildings
    Logi("#### FLAVOR IS #### " + GetVillageFlavour(villageId) + difficulty)
    const miniDecks = _frostGenMiniDecks(villageId, baseSize, GetVillageFlavour(villageId) + difficulty)
    DECK_MultiplyByMultipleRules(miniDecks["core"], [ZoneFilterCard("frostInsideOutpost"), HeartCard(), ZoneFilterCard("frostPlatform"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    DECK_MultiplyByMultipleRules(miniDecks["plateaus"], [ZoneFilterCard("frostInsideOutpost"), HeartCard(), PlacementPreferenceCard("closeToCage"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["ground"], [ZoneFilterCard("frostInsideOutpost"), HeartCard(), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeRandomly")])
    if (miniDecks["crates"] !== DECK_Empty()) {
        if (difficulty === 2) {
            DECK_MultiplyBySingle(miniDecks["crates"], TagCard("pigCrateOutpostL2"))
        } else if (difficulty === 3) {
            DECK_PutOnBottomOf(miniDecks["crates"], BuildableCard("piglinCrate", 1))
            DECK_MultiplyBySingle(miniDecks["crates"], TagCard("pigCrateOutpostL3"))
        }
        DECK_PutOnBottomOf(miniDecks["crates"], miniDecks["core"])
    }
    DECK_PutOnBottomOf(miniDecks["core"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["plateaus"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["ground"], baseDeck)

    const cageAmount = frostVal.raidingPartyVars.baseCageAmount + Math.floor(1 + frostVal.raidingPartyVars.cageMultiplier * (difficulty - 1))
    for (let index = 0; index < cageAmount; index++) {
        const cage = BuildableCard("mobCage", 1)
        DECK_MultiplyByMultipleRules(cage, [PlacementPreferenceCard("farFromCage"), ZoneFilterCard("frostInsideOutpost"), TagCard(frostVal.raidingPartyVars.cageTag), ZoneFilterCard("placeInsideVillageAlways")])
        DECK_PutOnBottomOf(cage, baseDeck)
    }
    return baseDeck
}
const _FrostFactionAttackAMakeBase = (villageId) => {
    const baseDeck = DECK_Empty()

    const primaryZone = ZonesCard("def6Zones", 1)
    DECK_MultiplyBySingle(primaryZone, ZoneHeightChangeCard(FrostHeight.H4))

    DECK_PutOnBottomOf(primaryZone, baseDeck)

    const portal = BuildableCard("addPortalMini")
    DECK_MultiplyByMultipleRules(portal, [ZoneFilterCard("placeInsideVillageAlways"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const secondaryZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(secondaryZone, [ZoneHeightChangeCard(FrostHeight.H3), ZoneTagCard("frostValidZone")])
    DECK_PutOnBottomOf(secondaryZone, baseDeck)

    const tertiaryZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(tertiaryZone, [ZoneHeightChangeCard(FrostHeight.H2), ZoneTagCard("frostValidZone")])
    DECK_PutOnBottomOf(tertiaryZone, baseDeck)

    const inner = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2), inner)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.NETHERSPREADER, 1), inner)
    DECK_MultiplyByMultipleRules(inner, [ZoneFilterCard("frostValidZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    _DeckShuffleFrost(inner)

    const deadZone = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyBySingle(deadZone, ZoneTagCard("frostDeadZone"))
    DECK_PutOnBottomOf(deadZone, baseDeck)

    const spiresZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(spiresZone, [ZoneHeightChangeCard(FrostHeight.H6), ZoneTagCard("frostSmallSpire")])
    DECK_PutOnBottomOf(spiresZone, baseDeck)

    const spires = BuildableCard(BUILDABLE_CARD.NETHERSPREADER, 1)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1), spires)
    DECK_MultiplyByMultipleRules(spires, [ZoneFilterCard("frostSmallSpire")])
    _DeckShuffleFrost(spires)

    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(inner, baseDeck)
    DECK_PutOnBottomOf(spires, baseDeck)

    SetupBasicVillageClearingCards(baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}
const _FrostFactionAttackBMakeBase = (villageId) => {
    const baseDeck = DECK_Empty()

    const primaryZone = ZonesCard("def6Zones", 1)
    DECK_MultiplyByMultipleRules(primaryZone, [ZoneHeightChangeCard(FrostHeight.H4), ZoneTagCard("frostValidZone")])

    DECK_PutOnBottomOf(primaryZone, baseDeck)

    const portal = BuildableCard("addPortalMini")
    DECK_MultiplyByMultipleRules(portal, [ZoneFilterCard("placeInsideVillageAlways"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const secondaryZone = ZonesCard("addZone", 4)
    DECK_MultiplyByMultipleRules(secondaryZone, [ZoneHeightChangeCard(FrostHeight.H3), ZoneTagCard("frostValidZone")])
    DECK_PutOnBottomOf(secondaryZone, baseDeck)

    const tertiaryZone = ZonesCard("addZone", 4)
    DECK_MultiplyByMultipleRules(tertiaryZone, [ZoneHeightChangeCard(FrostHeight.H2), ZoneTagCard("frostValidZone")])
    DECK_PutOnBottomOf(tertiaryZone, baseDeck)

    const inner = BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 2)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 3), inner)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.NETHERSPREADER, 1), inner)
    DECK_MultiplyByMultipleRules(inner, [ZoneFilterCard("frostValidZone"), PlacementPreferenceCard("placeRandomly")])
    _DeckShuffleFrost(inner)

    const deadZone = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyBySingle(deadZone, ZoneTagCard("frostDeadZone"))
    DECK_PutOnBottomOf(deadZone, baseDeck)

    const spiresZone1 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(spiresZone1, [ZoneHeightChangeCard(FrostHeight.H5), ZoneTagCard("frostSmallSpire")])
    DECK_PutOnBottomOf(spiresZone1, baseDeck)

    const spiresZone2 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(spiresZone2, [ZoneHeightChangeCard(FrostHeight.H7), ZoneTagCard("frostSmallSpire")])
    DECK_PutOnBottomOf(spiresZone2, baseDeck)

    const spires = BuildableCard(BUILDABLE_CARD.NETHERSPREADER, 2)
    DECK_PutOnBottomOf(BuildableCard(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2), spires)
    DECK_MultiplyByMultipleRules(spires, [ZoneFilterCard("frostSmallSpire")])
    _DeckShuffleFrost(spires)

    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(inner, baseDeck)
    DECK_PutOnBottomOf(spires, baseDeck)

    SetupBasicVillageClearingCards(baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}
const _FrostGenerateCentralPlatform = (villageId, baseSize, baseDeck, placePortal = true) => {
    //SetupBasicVillageClearingCards(baseDeck)
    let firstZone = DECK_Empty()
    let keepZone = DECK_Empty()
    let portalType
    let portalRules
    let portalTowers
    // PORTAL TOWERS ARE CREATED WITH THE PORTALS HERE
    if (IsSmall(baseSize)) {
        firstZone = ZonesCard("frostCenterZone", 1) //center zone small
        DECK_MultiplyByMultipleRules(firstZone, [ZoneHeightChangeCard(FrostHeight.H26), ZoneTagCard("frostValidZone")])
        keepZone = ZonesCard("addZone", 19)
        DECK_MultiplyByMultipleRules(keepZone, [ZoneHeightChangeCard(FrostHeight.H26), ZoneTagCard(frostVal.bridgeZone.one), ZoneTagCard("frostValidZone")])
        portalType = "frostPortalSmall"
        portalRules = [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneHeightChangeCard(FrostHeight.H26), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("frostValidZone"), ZoneFilterCard("placeInsideVillageAlways")]
        portalTowers = _PlacePortalTowers(1, 1, 1, 0, BASE_SIZE_SMALL)
    } else if (IsMedium(baseSize)) {
        firstZone = ZonesCard("frostCenterZone", 1) //center zone Medium
        DECK_MultiplyBySingle(firstZone, ZoneHeightChangeCard(FrostHeight.H28))
        keepZone = ZonesCard("addZone", 21)
        DECK_MultiplyByMultipleRules(keepZone, [ZoneHeightChangeCard(FrostHeight.H28), ZoneTagCard(frostVal.bridgeZone.one), ZoneTagCard("frostValidZone")])
        portalType = "frostPortalMedium"
        portalRules = [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneHeightChangeCard(FrostHeight.H28), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")]
        portalTowers = _PlacePortalTowers(1, 1, 1, 1, BASE_SIZE_MEDIUM)
    } else if (IsLarge(baseSize)) {
        firstZone = ZonesCard("frostCenterZone", 1) //center zone Large
        DECK_MultiplyBySingle(firstZone, ZoneHeightChangeCard(FrostHeight.H36))
        keepZone = ZonesCard("addZone", 21)
        DECK_MultiplyByMultipleRules(keepZone, [ZoneHeightChangeCard(FrostHeight.H36), ZoneTagCard(frostVal.bridgeZone.one), ZoneTagCard("frostValidZone")])
        portalType = "frostPortalLarge"
        portalRules = [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneHeightChangeCard(FrostHeight.H36), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways")]
        portalTowers = _PlacePortalTowers(1, 1, 1, 1, BASE_SIZE_LARGE)
    }
    DECK_MultiplyByMultipleRules(firstZone, [ZoneTagCard("frostInsideKeep"), ZoneTagCard("frostInsideKeepBuildings"), ZoneFilterCard("placeInsideVillageAlways")])
    //keep zone tag / filter
    DECK_MultiplyByMultipleRules(keepZone, [ZoneTagCard("frostInsideKeep"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_MultiplyByMultipleRules(portalTowers, [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneTagCard("frostInsideKeepBuildings"), ZoneFilterCard("frostValidZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    if (placePortal) {
        //play portal card
        _PlaceObjectiveStructure(portalType, firstZone, portalRules)
    }
    DECK_PutOnBottomOf(firstZone, baseDeck) //play first zone
    DECK_PutOnBottomOf(portalTowers, keepZone) //play portal towers
    DECK_PutOnBottomOf(keepZone, baseDeck) //play keep zone

    /* ---------------------- spires and plateau extensions --------------------- */
    if (IsSmall(baseSize)) {
        //keep spire zone - spire deck // small only
        const centerSpire = ZonesCard(frostZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(centerSpire, [ZoneHeightChangeCard(FrostHeight.H20), ZoneTagCard("frostSmallSpire"), ZoneTagCard("frostKeepPlateau"), ZoneFilterCard("frostInsideKeep"), ZoneTagCard("frostValidZone"), PlacementPreferenceCard(DIRECTION_CARD.southEastRect)])
        DECK_PutOnBottomOf(centerSpire, baseDeck)
    } else if (IsMedium(baseSize)) {
        //keep spire zone - spire deck // medium+ // forced direction placement
        const plateau1 = ZonesCard(frostZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(plateau1, [ZoneHeightChangeCard(FrostHeight.H34), ZoneTagCard("frostSmallSpire"), ZoneTagCard("frostKeepPlateau"), ZoneFilterCard("frostInsideKeep"), ZoneTagCard("frostValidZone"), PlacementPreferenceCard(DIRECTION_CARD.eastRect)])
        DECK_PutOnBottomOf(plateau1, baseDeck)

        const plateau2 = ZonesCard(frostZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(plateau2, [ZoneHeightChangeCard(FrostHeight.H34), ZoneTagCard("frostSmallSpire"), ZoneTagCard("frostKeepPlateau"), ZoneFilterCard("frostInsideKeep"), ZoneTagCard("frostValidZone"), PlacementPreferenceCard(DIRECTION_CARD.westRect)])
        DECK_PutOnBottomOf(plateau2, baseDeck)
    } else if (IsLarge(baseSize)) {
        //keep spire zone - spire deck // medium+ // forced direction placement
        const plateau1 = ZonesCard(frostZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(plateau1, [ZoneHeightChangeCard(FrostHeight.H42), ZoneTagCard("frostSmallSpire"), ZoneTagCard("frostKeepPlateau"), ZoneFilterCard("frostInsideKeep"), ZoneTagCard("frostValidZone"), PlacementPreferenceCard(DIRECTION_CARD.eastRect)])
        DECK_PutOnBottomOf(plateau1, baseDeck)

        const plateau2 = ZonesCard(frostZoneCards.smallSpire, 1)
        DECK_MultiplyByMultipleRules(plateau2, [ZoneHeightChangeCard(FrostHeight.H42), ZoneTagCard("frostSmallSpire"), ZoneTagCard("frostKeepPlateau"), ZoneFilterCard("frostInsideKeep"), ZoneTagCard("frostValidZone"), PlacementPreferenceCard(DIRECTION_CARD.westRect)])
        DECK_PutOnBottomOf(plateau2, baseDeck)
    }

    //layer of zones to space inner/outer tiers //// any size
    const extraZone2 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(extraZone2, [ZoneTagCard("frostDeadZone"), ZoneHeightChangeCard(FrostHeight.Flatten)])
    DECK_PutOnBottomOf(extraZone2, baseDeck)
}
const _FrostGeneratePlateaus = (villageId, baseSize, baseDeck, miniDecks, districts, applyWeathering = true) => {
    /* --------------------- Districts and spire generation --------------------- */
    switch (baseSize) {
        case BASE_SIZE_SMALL:
            //=== district 1 - NORTH ===
            //triplestack
            _CreateDoubleStack(districts.northDistrict, FrostHeight.H24, FrostHeight.H10, frostZoneCards.smallPlatform, frostZoneCards.smallSpire, frostVal.bridgeZone.two, [ZoneTagCard("frostLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.northRect)])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.northDistrict, FrostHeight.H16, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.northWestRect, [ZoneTagCard("frostLavaCoilZone")])
            _CreatePlatform(districts.northDistrict, FrostHeight.H4, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.northEastWedge)
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.northDistrict, FrostHeight.H16, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.westWedge, [ZoneTagCard("frostLavaCoilZone")])

            //=== district 2 - EAST===
            _CreatePlatform(districts.eastDistrict, FrostHeight.H26, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.none, [ZoneTagCard("frostLavaCoilZone")])
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])

            //=== district 3 - SOUTH ===
            //triple stack
            _CreateDoubleStack(districts.southDistrict, FrostHeight.H24, FrostHeight.H10, frostZoneCards.smallPlatform, frostZoneCards.smallSpire, frostVal.bridgeZone.four, [ZoneTagCard("frostLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.southRect)])
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.southDistrict, FrostHeight.H16, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.southEastRect, [ZoneTagCard("frostLavaCoilZone")])
            _CreatePlatform(districts.southDistrict, FrostHeight.H4, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.southWestWedge)
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.southDistrict, FrostHeight.H16, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.eastWedge, [ZoneTagCard("frostLavaCoilZone")])
            //=== district 4 - WEST ===
            //unused
            break

        case BASE_SIZE_MEDIUM:
            //=== district 1 - NORTH ===
            //triplestack
            _CreateDoubleStack(districts.northDistrict, FrostHeight.H28, FrostHeight.H10, frostZoneCards.smallPlatform, frostZoneCards.smallPlatform, frostVal.bridgeZone.two, [ZoneTagCard("frostLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.northRect)])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreatePlatform(districts.northDistrict, FrostHeight.H4, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.northWedge)
            _CreateSpire(districts.northDistrict, FrostHeight.H18, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.northEastWedge, [ZoneTagCard("frostLavaCoilZone")])
            _CreateSpire(districts.northDistrict, FrostHeight.H18, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.westWedge, [ZoneTagCard("frostLavaCoilZone")])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])

            //=== district 2 - EAST ===
            _CreateSpire(districts.eastDistrict, FrostHeight.H28, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.southWedge, [ZoneTagCard("frostLavaCoilZone")])
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.eastDistrict, FrostHeight.H26, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.southWedge)
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])

            //=== district 3 - SOUTH ===
            _CreateDoubleStack(districts.southDistrict, FrostHeight.H28, FrostHeight.H10, frostZoneCards.smallPlatform, frostZoneCards.smallPlatform, frostVal.bridgeZone.four, [ZoneTagCard("frostLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.southRect)])
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreatePlatform(districts.southDistrict, FrostHeight.H4, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.southWedge)
            _CreateSpire(districts.southDistrict, FrostHeight.H18, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.southEastWedge, [ZoneTagCard("frostLavaCoilZone")])
            _CreateSpire(districts.southDistrict, FrostHeight.H18, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.southWestWedge, [ZoneTagCard("frostLavaCoilZone")])
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])

            //=== district 4 - WEST ===
            _CreatePlatform(districts.westDistrict, FrostHeight.H28, 1, frostZoneCards.midPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.none, [ZoneTagCard("frostLavaCoilZone")])
            _AddDeadzoneLayer(districts.westDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            break

        case BASE_SIZE_LARGE:
            //=== district 1 - NORTH ===
            //triplestack
            _CreateTripleStack(districts.northDistrict, FrostHeight.H36, FrostHeight.H26, FrostHeight.H6, frostZoneCards.midPlatform, frostZoneCards.smallPlatform, frostVal.bridgeZone.two, [ZoneTagCard("frostLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.northWestWedge)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
            _CreatePlatform(districts.northDistrict, FrostHeight.H16, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.northRect)
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.northDistrict, FrostHeight.H20, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.northEastRect, [ZoneTagCard("frostLavaCoilZone")])
            _CreateSpire(districts.northDistrict, FrostHeight.H28, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.eastRect, [ZoneTagCard("frostLavaCoilZone")])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.northDistrict, FrostHeight.H26, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.southWestWedge, [ZoneTagCard("frostLavaCoilZone")])

            //=== district 2 - EAST ===
            _CreateSpire(districts.eastDistrict, FrostHeight.H32, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.southWedge, [ZoneTagCard("frostLavaCoilZone")])
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.eastDistrict, FrostHeight.H32, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.southWestWedge, [ZoneTagCard("frostLavaCoilZone")])
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])

            //=== district 4 - WEST ===
            _CreatePlatform(districts.westDistrict, FrostHeight.H36, 1, frostZoneCards.midPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.none, [ZoneTagCard("frostLavaCoilZone")])

            //=== district 3 - SOUTH ===
            _CreateTripleStack(districts.southDistrict, FrostHeight.H36, FrostHeight.H28, FrostHeight.H6, frostZoneCards.midPlatform, frostZoneCards.smallPlatform, frostVal.bridgeZone.four, [ZoneTagCard("frostLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.southEastWedge)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])
            _CreatePlatform(districts.southDistrict, FrostHeight.H14, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.southRect)
            _AddDeadzoneLayer(districts.southDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.southDistrict, FrostHeight.H18, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.southEastRect, [ZoneTagCard("frostLavaCoilZone")])
            _CreatePlatform(districts.southDistrict, FrostHeight.H22, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.southWestRect, [ZoneTagCard("frostLavaCoilZone")])
            _CreateSpire(districts.southDistrict, FrostHeight.H30, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.westRect, [ZoneTagCard("frostLavaCoilZone")])
            _CreatePlatform(districts.southDistrict, FrostHeight.H30, 1, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.eastRect, [ZoneTagCard("frostLavaCoilZone")])
            break
        case BASE_SIZE_BOSS:
            //=== district 1 - NORTH ===
            //triplestack
            _CreateDoubleStack(districts.northDistrict, FrostHeight.H17, FrostHeight.H4, frostZoneCards.midPlatform, frostZoneCards.smallPlatform, frostVal.bridgeZone.two, [], [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.northDistrict, FrostHeight.H14, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.northWestWedge)
            _CreatePlatform(districts.northDistrict, FrostHeight.H4, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.westWedge)
            _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])

            //=== district 2 - EAST ===
            _CreatePlatform(districts.eastDistrict, FrostHeight.H24, 1, frostZoneCards.midPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.northWedge)
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.eastDistrict, FrostHeight.H26, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.northWedge)
            _CreateSpire(districts.eastDistrict, FrostHeight.H26, 1, frostZoneCards.smallPlatform, frostVal.bridgeZone.one, DIRECTION_CARD.southWedge)
            _AddDeadzoneLayer(districts.eastDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])

            //=== district 2 - South ===
            //unused

            //=== district 4 - WEST ===
            _CreateDoubleStack(districts.westDistrict, FrostHeight.H40, FrostHeight.H26, frostZoneCards.midPlatform, frostZoneCards.smallPlatform, frostVal.bridgeZone.three, [ZoneTagCard("frostLavaCoilZone")], [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])
            _AddDeadzoneLayer(districts.westDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])
            _CreateSpire(districts.westDistrict, FrostHeight.H32, 1, frostZoneCards.midPlatform, frostVal.bridgeZone.none, DIRECTION_CARD.westWedge)
            break
    }

    //district 1 - North
    _SetupDistrict(districts.northDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northRect)])
    //district 2 - East
    _SetupDistrict(districts.eastDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.eastRect)])
    //district 3 - South
    _SetupDistrict(districts.southDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southRect)])
    //district 4 - West
    _SetupDistrict(districts.westDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.westRect)])

    //layer of zones to space inner/outer tiers //// any size
    const deadZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(deadZones, [ZoneTagCard("frostDeadZone"), ZoneHeightChangeCard(FrostHeight.Flatten)])
    DECK_PutOnBottomOf(deadZones, baseDeck)

    //apply terrain weathering now that all the zone cards have been added.
    if (applyWeathering) {
        DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)
    }
}
const _FrostFactionMakeBase = (villageId, baseSize, districts) => {
    const baseDeck = DECK_Empty()
    const miniDecks = _frostGenMiniDecks(villageId, baseSize)
    if (miniDecks === null) {
        return null
    }
    const spireNames = ["northSpires", "eastSpires", "southSpires", "westSpires"]
    const platformNames = ["northPlatform", "eastPlatform", "southPlatform", "westPlatform"]
    //helper for the helper function to use basedeck

    // === Helpers ===
    const _PlayDistrictMiniDecks = (deckNames) => {
        _PlayMiniDecks(baseDeck, miniDecks, deckNames)
    }

    const _ShuffleDistrictCards = (deckNames) => {
        _ShuffleMiniDecks(miniDecks, deckNames)
    }
    const _MultiplyDistrictDecksByRules = (deckNames, rules) => {
        _MultiplyMiniDeckByRules(miniDecks, deckNames, rules)
    }

    _FrostGenerateCentralPlatform(villageId, baseSize, baseDeck)
    _FrostGeneratePlateaus(villageId, baseSize, baseDeck, miniDecks, districts)

    //setup keep walls
    let keepWall = null
    if (QUERY_GetFactionSizeFromVillageID(villageId) === BASE_SIZE_MEDIUM && GetVillageFlavour(villageId) === VILLAGE_VARIATION_B) {
        keepWall = WallsCard("wallNoTowersNoGates")
    }
    if (keepWall !== null) {
        DECK_MultiplyBySingle(keepWall, ZoneFilterCard("frostInsideKeep"))
        DECK_PutOnBottomOf(keepWall, baseDeck)
    }

    // === Structures / entity spawning setup ===
    if (IsStructureDestructionBase(villageId)) {
        const coilDistricts = [districts.northDistrict, districts.eastDistrict, districts.southDistrict]
        switch (baseSize) {
            case BASE_SIZE_SMALL:
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "frostLavaCoilZone", coilDistricts)
                break
            case BASE_SIZE_MEDIUM:
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "frostLavaCoilZone", [districts.westDistrict])
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "frostLavaCoilZone", coilDistricts)
                break
            case BASE_SIZE_LARGE:
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "frostLavaCoilZone", [districts.westDistrict])
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "frostLavaCoilZone", coilDistricts)
                _PlaceObjectiveStructure(BUILDABLE_CARD.PIGLIN_CRYSTAL, baseDeck, [ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeFarFromPiglinCrystal")], "frostLavaCoilZone", coilDistricts)
                break
        }
    }

    //keep primary structure rules
    //common structure rules
    DECK_MultiplyByMultipleRules(miniDecks["keepPrimary"], [ZoneFilterCard("frostInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")]) //PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["keepSecondary"], [ZoneFilterCard("frostInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")]) //PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["keepUtility"], [ZoneFilterCard("frostInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")])
    DECK_MultiplyByMultipleRules(miniDecks["keepPlateau"], [ZoneFilterCard("frostKeepPlateau"), PlacementPreferenceCard("defFacingPortalLarge")])
    switch (GetVillageFlavour(villageId)) {
        default:
            DECK_MultiplyByMultipleRules(miniDecks["keepPrimary"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
            DECK_MultiplyByMultipleRules(miniDecks["keepSecondary"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
            DECK_MultiplyByMultipleRules(miniDecks["keepUtility"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START)])
            DECK_MultiplyByMultipleRules(miniDecks["keepPlateau"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
            break
    }
    DECK_PutOnBottomOf(miniDecks["keepPrimary"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepSecondary"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepUtility"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepPlateau"], baseDeck) //play keep structures

    //spire/platform structure rules
    _MultiplyDistrictDecksByRules(spireNames, [ZoneFilterCard("frostSmallSpire"), PlacementPreferenceCard("placeRandomly")])
    _MultiplyDistrictDecksByRules(platformNames, [ZoneFilterCard("frostPlatform"), PlacementPreferenceCard("placeRandomly")])

    _MultiplyDistrictDecksByRules(["southPlatform"], [PlacementPreferenceCard("placeFarFromKnockback")])
    _MultiplyDistrictDecksByRules(["northPlatform"], [PlacementPreferenceCard("placeFarFromKnockback")])
    _MultiplyDistrictDecksByRules(["northSpires"], [PlacementPreferenceCard("placeFarFromKnockback")])
    _MultiplyDistrictDecksByRules(["southSpires"], [PlacementPreferenceCard("placeFarFromKnockback")])

    //triple stacks
    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallTop"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("frostWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallMid"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("frostWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallBot"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("frostWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallBot"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallTop"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("frostWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallMid"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("frostWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallBot"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("frostWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallBot"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallTop"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("frostWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallMid"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("frostWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallBot"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("frostWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallBot"], baseDeck)

    _ShuffleDistrictCards(spireNames)
    _ShuffleDistrictCards(platformNames)

    //play spire/platform structures
    _PlayDistrictMiniDecks(spireNames)
    _PlayDistrictMiniDecks(platformNames)

    //===== Bridge logic ========
    switch (baseSize) {
        case BASE_SIZE_SMALL:
            _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.one), PlacementPreferenceCard(DIRECTION_CARD.northRect)], [ZoneFilterCard(frostVal.bridgeZone.two)])
            _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.one), PlacementPreferenceCard(DIRECTION_CARD.southRect)], [ZoneFilterCard(frostVal.bridgeZone.four)])
            break

        case BASE_SIZE_MEDIUM:
            _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.one)], [ZoneFilterCard(frostVal.bridgeZone.two)])
            _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.one)], [ZoneFilterCard(frostVal.bridgeZone.four)])
            _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.one)], [ZoneFilterCard(frostVal.bridgeZone.six)])
            break

        case BASE_SIZE_LARGE:
            _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.one)], [ZoneFilterCard(frostVal.bridgeZone.two)])
            _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.one)], [ZoneFilterCard(frostVal.bridgeZone.four)])
            _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.one)], [ZoneFilterCard(frostVal.bridgeZone.six)])
            break
    }
    return baseDeck
}
const _FrostGenerateBossPlatforms = (villageId, baseDeck) => {
    //districts
    const district1 = DistrictCard("frostBossDistrict1")
    const district2 = DistrictCard("frostBossDistrict2")
    //portal platform
    const portalPlateau = _CreateZone("frostBossThirdZone", [ZoneHeightChangeCard(FrostHeight.H40), ZoneTagCard("frostBossThirdPlatform"), ZoneTagCard(frostVal.bridgeZone.four), ZoneTagCard("frostBossArena")])
    _CreateLayerOfZonesInDeck("addLayerOfZones", portalPlateau, [ZoneHeightChangeCard(FrostHeight.Flatten), ZoneTagCard("frostDeadZone")])

    //district 1 plateau
    const d1Plateau = _CreateZone("addZone", [district1, PlacementPreferenceCard(DIRECTION_CARD.northRect), ZoneHeightChangeCard(FrostHeight.H22), ZoneTagCard("frostBossFirstPlatform"), ZoneTagCard("frostBossArena")], 2)
    _CreateZoneInDeck("frostBossFirstZone", d1Plateau, [district1, ZoneHeightChangeCard(FrostHeight.H22), PlacementPreferenceCard(DIRECTION_CARD.northRect), ZoneTagCard("frostBossFirstPlatform"), ZoneTagCard("frostBossArena"), ZoneTagCard("plateauCenter")])
    _CreateLayerOfZonesInDeck("addLayerOfZones", d1Plateau, [district1, ZoneHeightChangeCard(FrostHeight.H22), ZoneTagCard("frostBossFirstPlatform"), ZoneTagCard("frostBossArena")], 1)
    _CreateLayerOfZonesInDeck("addLayerOfZones", d1Plateau, [district1, ZoneHeightChangeCard(FrostHeight.Flatten), ZoneTagCard("frostDeadZone")])

    //district 2 plateau
    const d2Plateau = _CreateZone("addZone", [district2, PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneHeightChangeCard(FrostHeight.H26), ZoneTagCard("frostBossSecondPlatform"), ZoneTagCard("frostBossArena")], 2)
    _CreateZoneInDeck("frostBossSecondZone", d2Plateau, [district2, ZoneHeightChangeCard(FrostHeight.H26), ZoneTagCard(frostVal.bridgeZone.two), PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneTagCard("frostBossSecondPlatform"), ZoneTagCard("frostBossArena"), ZoneTagCard("plateauCenter")])
    _CreateLayerOfZonesInDeck("addLayerOfZones", d2Plateau, [district2, ZoneHeightChangeCard(FrostHeight.H26), ZoneTagCard(frostVal.bridgeZone.two), ZoneTagCard("frostBossSecondPlatform"), ZoneTagCard("frostBossArena")], 1)
    _CreateLayerOfZonesInDeck("addLayerOfZones", d2Plateau, [district2, ZoneHeightChangeCard(FrostHeight.Flatten), ZoneTagCard("frostDeadZone")])
    DECK_MultiplyByMultipleRules(district2, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southRect)])
    DECK_MultiplyByMultipleRules(district1, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northEastRect)])
    DECK_PutOnBottomOf(portalPlateau, baseDeck)
    DECK_PutOnBottomOf(district2, baseDeck)
    DECK_PutOnBottomOf(d2Plateau, baseDeck)
    DECK_PutOnBottomOf(district1, baseDeck)
    DECK_PutOnBottomOf(d1Plateau, baseDeck)
}
const _FrostFactionMakeBossBase = (villageId, baseSize, districts) => {
    const baseDeck = DECK_Empty()
    const miniDecks = _frostGenMiniDecks(villageId, baseSize)
    const spireNames = ["northSpires", "eastSpires", "southSpires", "westSpires"]
    const platformNames = ["northPlatform", "eastPlatform", "southPlatform", "westPlatform"]

    //helper for the helper function to use basedeck
    _FrostGenerateBossPlatforms(villageId, baseDeck)
    _FrostGeneratePlateaus(villageId, baseSize, baseDeck, miniDecks, districts)

    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)
    _PlaceObjectiveStructure("frostPortalLarge", baseDeck, [ZoneHeightChangeCard(FrostHeight.H42), ZoneFilterCard("frostBossThirdPlatform"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("frostDeadZone"), ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneFilterCard("placeInsideVillageAlways")])

    _CreateBuildableInDeck("piglinRallyingPoint", 1, baseDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("frostBossThirdPlatform"), TagCard("frostBossRally3"), ZoneFilterCard("frostDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.TOWER_SPORE_FAN, 1, baseDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northEastWedge), ZoneFilterCard("frostBossThirdPlatform")])
    _CreateBuildableInDeck(BUILDABLE_CARD.TOWER_SPORE_FAN, 1, baseDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWestWedge), ZoneFilterCard("frostBossThirdPlatform")])

    const plateau1 = DistrictCard("frostBossDistrict1")
    const plateau2 = DistrictCard("frostBossDistrict2")
    const plateau1Buildings = _CreateBuildable("piglinRallyingPoint", 1, [plateau1, TagCard("frostBossRally1"), ZoneFilterCard("plateauCenter"), ZoneFilterCard("frostBossArena"), ZoneFilterCard("frostDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.NETHERSPREADER, 3, plateau1Buildings, [plateau1, ZoneFilterCard("frostBossArena"), PlacementPreferenceCard("placeRandomly"), ZoneFilterCard("frostDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, plateau1Buildings, [plateau1, ZoneFilterCard("frostOutsideBossArena"), ZoneFilterCard("frostDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.BARRACKS_SIEGER, 1, plateau1Buildings, [plateau1, ZoneFilterCard("frostOutsideBossArena"), ZoneFilterCard("frostDeadZone")])

    const plateau2Buildings = _CreateBuildable("piglinRallyingPoint", 1, [plateau2, ZoneFilterCard("plateauCenter"), ZoneFilterCard("frostBossArena"), TagCard("frostBossRally2"), ZoneFilterCard("frostDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.TOWER_SPORE_FAN, 1, plateau1Buildings, [plateau2, ZoneFilterCard("frostBossArena"), PlacementPreferenceCard("placeRandomly"), ZoneFilterCard("frostDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 2, plateau1Buildings, [plateau2, ZoneFilterCard("frostBossArena"), PlacementPreferenceCard("placeRandomly"), ZoneFilterCard("frostDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, plateau2Buildings, [plateau2, ZoneFilterCard("frostOutsideBossArena"), ZoneFilterCard("frostDeadZone")])
    _CreateBuildableInDeck(BUILDABLE_CARD.BARRACKS_SIEGER, 1, plateau2Buildings, [plateau2, ZoneFilterCard("frostOutsideBossArena"), ZoneFilterCard("frostDeadZone")])

    _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.one)], [ZoneFilterCard(frostVal.bridgeZone.two)])
    _BuildBridge(baseDeck, [ZoneFilterCard(frostVal.bridgeZone.three)], [ZoneFilterCard(frostVal.bridgeZone.four), PlacementPreferenceCard(DIRECTION_CARD.southRect)])

    //play the structure decks
    DECK_PutOnBottomOf(plateau1Buildings, baseDeck)
    DECK_PutOnBottomOf(plateau2Buildings, baseDeck)

    //triple stacks
    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallTop"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("frostWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallMid"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("frostWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["northWaterfallBot"], [DistrictCard(districts.northDistrict.name), ZoneFilterCard("frostWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["northWaterfallBot"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallTop"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("frostWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallMid"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("frostWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["southWaterfallBot"], [DistrictCard(districts.southDistrict.name), ZoneFilterCard("frostWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["southWaterfallBot"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallTop"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("frostWaterfallTop"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallTop"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallMid"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("frostWaterfallMid"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallMid"], baseDeck)

    DECK_MultiplyByMultipleRules(miniDecks["westWaterfallBot"], [DistrictCard(districts.westDistrict.name), ZoneFilterCard("frostWaterfallBot"), PlacementPreferenceCard("placeRandomly")])
    DECK_PutOnBottomOf(miniDecks["westWaterfallBot"], baseDeck)

    //=== Helpers ===
    const _PlayDistrictMiniDecks = (deckNames) => {
        _PlayMiniDecks(baseDeck, miniDecks, deckNames)
    }

    const _ShuffleDistrictCards = (deckNames) => {
        _ShuffleMiniDecks(miniDecks, deckNames)
    }
    const _MultiplyDistrictDecksByRules = (deckNames, rules) => {
        _MultiplyMiniDeckByRules(miniDecks, deckNames, rules)
    }
    // //spire/platform structure rules
    _MultiplyDistrictDecksByRules(spireNames, [ZoneFilterCard("frostSmallSpire"), PlacementPreferenceCard("placeRandomly")])
    _MultiplyDistrictDecksByRules(platformNames, [ZoneFilterCard("frostPlatform"), PlacementPreferenceCard("placeRandomly")])

    _ShuffleDistrictCards(spireNames)
    _ShuffleDistrictCards(platformNames)
    // //play spire/platform structures
    _PlayDistrictMiniDecks(spireNames)
    _PlayDistrictMiniDecks(platformNames)
    return baseDeck
}

/* ----------------------- Village Generation Snippets ---------------------- */

SNIPPET_VillageFinishedBuilding("vfb_frost_base_setup", (villageId, _payload) => {
    SetupPiglinBase(villageId, frostVal.baseSetup)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    switch (baseSize) {
        case BASE_SIZE_BOSS:
            SetupPortalInvulnerabilityVO(villageId)
            break
    }

    if (IsSmallOrGreater(baseSize)) {
        _InitFrostResponses(villageId, true)
    }
})

SNIPPET_VillageGenerated("vg_frost", (villageId, _payload) => {
    DebugOutput("Frost Base " + villageId + " has generated", frostVal.debug.outputOn)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (IsMobAlliancePiglinSize(baseSize)) {
        return
    }
    if (IsSmallOrGreater(baseSize)) {
        InitializeBaseAIs(villageId, frostVal.aiConfig, frostVal.piglinRallyPoints)
    }
    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_frost_base_setup",
        ownerVillageId: villageId,
        villageId: villageId
    })
    //
    const districts = {
        northDistrict: {
            name: "frostDistrict1",
            card: DistrictCard("frostDistrict1"),
            id: 0,
            miniDecks: ["northSpires", "northPlatform"],
            deck: DECK_Empty()
        },
        eastDistrict: {
            name: "frostDistrict2",
            card: DistrictCard("frostDistrict2"),
            id: 1,
            miniDecks: ["eastSpires", "eastPlatform"],
            deck: DECK_Empty()
        },
        southDistrict: {
            name: "frostDistrict3",
            card: DistrictCard("frostDistrict3"),
            id: 2,
            miniDecks: ["southSpires", "southPlatform"],
            deck: DECK_Empty()
        },
        westDistrict: {
            name: "frostDistrict4",
            card: DistrictCard("frostDistrict4"),
            id: 3,
            miniDecks: ["westSpires", "westPlatform"],
            deck: DECK_Empty()
        }
    }

    let baseDeck

    switch (baseSize) {
        case BASE_SIZE_OUTPOST:
            baseDeck = _FrostFactionMakeOutpost(villageId)
            if (IsPiglinRaidingParty(villageId)) {
                // eslint-disable-next-line no-undef
                const shouldSpawnWitchesInCages = QUERY_RandomNumberGroup(0, 99, "witch_spawn_probability") < piglinGeneralVal.globals.cagedWitchProbability * 100
                const currentlyInAct2 = IsCurrentAct(ACTS.ACT_2)
                const areWitchesEnabled = witchHutEnabled.defaultValue > 0
                if (shouldSpawnWitchesInCages && currentlyInAct2 && areWitchesEnabled) {
                    SetupMobCages(villageId, frostVal.raidingPartyVars.cageTag, MOB_ARCHETYPE.WITCH, piglinGeneralVal.globals.outpostCagedWitchCount)
                } else {
                    SetupMobCages(villageId, frostVal.raidingPartyVars.cageTag)
                }

                SetupRaidingPartyHorn(villageId)
            }
            break
        case BASE_SIZE_BOSS:
            baseDeck = _FrostFactionMakeBossBase(villageId, BASE_SIZE_BOSS, districts)
            break
        default:
            baseDeck = _FrostFactionMakeBase(villageId, baseSize, districts)
            break
    }

    if (baseDeck === null) {
        return
    }

    SetupBasicVillageClearingCards(baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
})

/* -------------------- BUILDING PLAN FOR FROST Faction -------------------- */

//const frostBaseMiniDeckNames = ["keepPrimary", "keepSecondary", "keepUtility", "keepPlateau", "northPlatform", "eastPlatform", "southPlatform", "westPlatform", "northeastPlatform", "southeastPlatform", "northwestPlatform", "southwestPlatform", "northSpires", "eastSpires", "southSpires", "westSpires", "northeastSpires", "southeastSpires", "southwestSpires", "northwestSpires"]
//const frostOutpostMiniDeckNames = ["core", "crates", "middle", "outer"]
const frostBaseStructureLayout = {
    frontlineA: {
        //these values are flavor+campaignphase
        villageVariationA1: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [[BUILDABLE_CARD.NETHERSPREADER, 1]],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ]
        },
        villageVariationA2: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["frostComposition1"]],
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ]
        },
        villageVariationA3: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["frostComposition1"]],
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 2]
            ]
        },
        //----------------------------------------------------
        villageVariationB1: {
            core: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ]
        },
        villageVariationB2: {
            core: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1, ["frostComposition1"]]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ]
        },
        villageVariationB3: {
            core: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1, ["frostComposition1"]]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            ground: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 3],
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["frostComposition1"]]
            ]
        },
        //----------------------------------------------------
        villageVariationC1: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]], //this will spawn a grenadier
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            ground: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]
            ]
        },
        villageVariationC2: {
            core: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]], //this will spawn a grenadier
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]], //this will spawn a grenadier
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            ground: [[BUILDABLE_CARD.NETHERSPREADER, 3]]
        },
        villageVariationC3: {
            core: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            crates: [[BUILDABLE_CARD.PIGLIN_CRATE, 1]],
            plateaus: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 2, ["frostComposition1"]],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            ground: [
                [BUILDABLE_CARD.NETHERSPREADER, 2],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2]
            ]
        }
    },
    small: {
        villageVariationA: {
            keepPrimary: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostSiegeBarracks"]],
                ["frostRallypoint", 1, ["frostSiegeRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            keepSecondary: [[BUILDABLE_CARD.PIGLIN_CRATE, 1, ["pigCrateOutpostL2"]]],
            keepUtility: [],
            keepPlateau: [
                [BUILDABLE_CARD.GOLDMINE, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]
            ],

            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [[BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]],

            northPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]]
            ],
            northSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 2], //discrete encounter
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1, ["frostComposition1"]]
            ],

            eastPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1, ["frostComposition1"]]
            ],
            eastSpires: [], //unused in small

            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            southWaterfallMid: [],
            southWaterfallBot: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, ["frostComposition1"]]],

            southPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                ["frostRallypoint", 1, ["frostSiegeRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostSiegeBarracks"]]
            ],
            southSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 2],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1, ["frostComposition1"]]
            ],

            westWaterfallTop: [], //unused in small
            westWaterfallMid: [], //unused in small
            westWaterfallBot: [], //unused in small

            westPlatform: [], //not used
            westSpires: [] //not used
        },
        villageVariationB: {
            keepPrimary: [
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["frostGuardBarracks"]],
                [BUILDABLE_CARD.GOLDMINE, 2]
            ],
            keepSecondary: [[BUILDABLE_CARD.PIGLIN_CRATE, 1, ["pigCrateOutpostL2"]]],
            keepUtility: [],
            keepPlateau: [],

            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["frostSiegeBarracks"]],
                ["frostRallypoint", 1, ["frostSiegeRally", "doNotDivideRally"]]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [[BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]],

            northPlatform: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]]
            ],
            northSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["frostComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            eastPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1, ["frostComposition1"]]
            ],
            eastSpires: [],

            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]]
            ],

            southWaterfallMid: [],
            southWaterfallBot: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, ["frostComposition1"]]],

            southPlatform: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["frostSiegeBarracks"]],
                ["frostRallypoint", 1, ["frostSiegeRally", "doNotDivideRally"]]
            ],
            southSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["frostComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            westWaterfallTop: [], //unused in small
            westWaterfallMid: [], //unused in small
            westWaterfallBot: [], //unused in small

            westPlatform: [], //not used
            westSpires: [] //not used
        }
    },
    medium: {
        villageVariationA: {
            keepPrimary: [["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]]],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition2"]]
            ],

            northPlatform: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, ["frostSiegeBarracks"]],
                ["frostRallypoint", 1, ["frostSiegeRally", "doNotDivideRally"]]
            ],
            northSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1, ["frostComposition2"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]
            ],

            eastPlatform: [],
            eastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, ["frostComposition2"]],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1, ["pigCrateOutpostL2"]]
            ],
            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]
            ],
            southWaterfallMid: [],
            southWaterfallBot: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],

            southPlatform: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, ["frostSiegeBarracks"]],
                ["frostRallypoint", 1, ["frostSiegeRally", "doNotDivideRally"]]
            ],
            southSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition2"]]
            ],

            westWaterfallTop: [], //unused in medium
            westWaterfallMid: [], //unused in medium
            westWaterfallBot: [], //unused in medium

            westPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]
            ],
            westSpires: []
        },
        villageVariationB: {
            keepPrimary: [
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 2, ["frostGuardBarracks"]]
            ],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [
                [BUILDABLE_CARD.PIGLIN_CRATE, 1, ["pigCrateOutpostL2"]],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],
            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition2"]]
            ],

            northPlatform: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, ["frostSiegeBarracks"]],
                ["frostRallypoint", 1, ["frostSiegeRally", "doNotDivideRally"]]
            ],
            northSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition2"]]
            ],

            eastPlatform: [],
            eastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1, ["pigCrateOutpostL2"]]
            ],

            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]
            ],
            southWaterfallMid: [],
            southWaterfallBot: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],

            southPlatform: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, ["frostSiegeBarracks"]],
                ["frostRallypoint", 1, ["frostSiegeRally", "doNotDivideRally"]]
            ],
            southSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]]
            ],

            westWaterfallTop: [], //unused in medium
            westWaterfallMid: [], //unused in medium
            westWaterfallBot: [], //unused in medium

            westPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition2"]]
            ],
            westSpires: [],

            northeastPlatform: [],
            northeastSpires: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, ["frostSiegeBarracks"]],
                ["frostRallypoint", 1, ["frostSiegeRally", "doNotDivideRally"]]
            ]
        }
    },
    large: {
        villageVariationA: {
            keepPrimary: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 2, ["frostSiegeBarracks"]]
            ],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [[BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]]],

            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1],
                ["frostRallypoint", 1, ["frostSiegeRally", "frostComposition3", "doNotDivideRally"]]
            ],
            northWaterfallMid: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            northWaterfallBot: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition3"]]
            ],

            northPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            northSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition2"]]
            ],

            eastPlatform: [],
            eastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1, ["pigCrateOutpostL2"]]
            ],
            southWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                ["frostRallypoint", 1, ["frostGuardRally", "frostComposition3", "doNotDivideRally"]]
            ],
            southWaterfallMid: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            southWaterfallBot: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1, ["frostGuardBarracks"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition3"]],
                ["frostRallypoint", 1, ["frostGuardRally", "doNotDivideRally"]]
            ],

            southPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            southSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 2, ["frostComposition1"]]
            ],

            westWaterfallTop: [], //unused in medium
            westWaterfallMid: [], //unused in medium
            westWaterfallBot: [], //unused in medium

            westPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition2"]]
            ],
            westSpires: [],

            northeastPlatform: [],
            northeastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1, ["pigCrateOutpostL2"]]
            ],

            southeastPlatform: [], //not used in medium
            southeastSpires: [], //not used in medium

            southwestPlatform: [],
            southwestSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            northwestPlatform: [],
            northwestSpires: []
        }
    },
    boss: {
        villageVariationDefault: {
            northWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition3"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]
            ],
            northWaterfallMid: [],
            northWaterfallBot: [
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],

            southWaterfallTop: [],
            southWaterfallMid: [],
            southWaterfallBot: [],

            westWaterfallTop: [
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, ["frostGuardBarracks"]],
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition3"]]
            ],
            westWaterfallMid: [], //unused in small
            westWaterfallBot: [[BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, ["frostComposition1"]]],

            keepPrimary: [],
            keepSecondary: [],
            keepUtility: [],
            keepPlateau: [],

            northPlatform: [
                [BUILDABLE_CARD.NETHERSPREADER, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2]
            ],
            northSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 1, ["frostComposition1"]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, ["frostGuardBarracks"]]
            ],

            eastPlatform: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, ["frostComposition3"]],
                [BUILDABLE_CARD.BARRACKS_SIEGER, 1, ["frostGuardBarracks"]]
            ],
            eastSpires: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.PIGLIN_CRATE, 1, ["pigCrateOutpostL2"]],
                [BUILDABLE_CARD.GOLDMINE, 1]
            ],

            southPlatform: [],
            southSpires: [],

            westPlatform: [],
            westSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                [BUILDABLE_CARD.GOLDMINE, 1],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2]
            ]
        }
    }
}

const _frostGenMiniDecks = (villageId, baseSize, flavorOverride = "") => {
    const buildingPlan = _frostGetBaseGenData(villageId, flavorOverride)
    if (buildingPlan[baseSize] === undefined) {
        return null
    }
    return CreateBuildableGenMinidecksForSize(Object.keys(buildingPlan[baseSize]), buildingPlan, baseSize, villageId, RANDOM_GROUP_FROST_HORDE)
}

//helper function for reading buildable data for minidecks
const _frostGetBaseGenData = (villageId, flavorOverride = "") => {
    const flavor = flavorOverride ? flavorOverride : GetVillageFlavour(villageId)
    const baseDataFilteredByFlavour = {
        frontlineA: frostBaseStructureLayout["frontlineA"][flavor],
        small: frostBaseStructureLayout["small"][flavor],
        medium: frostBaseStructureLayout["medium"][flavor],
        large: frostBaseStructureLayout["large"][flavor],
        boss: frostBaseStructureLayout["boss"]["villageVariationDefault"] //always spawn boss base using villageVariationDefault
    }
    return baseDataFilteredByFlavour
}

/* -------------------------------------------------------------------------- */
/*                         Audio/Voiceovers/Cinematics                        */
/* -------------------------------------------------------------------------- */

SNIPPET_EntitySpawned("es_lava_launcher_vo", (piglinEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinEntity)
    const villageEntity = GetVillageEntityFromID(villageId)
    if (HasEntities(villageEntity)) {
        const line = ChooseFromArray(["piglin_big_unit_frost_1", "piglin_big_unit_frost_2", "piglin_big_unit_frost_3"])
        PlayPresentationActionToClosePlayers(line, villageEntity, 150)
        Once()
    }
})

SNIPPET_CinematicFinished(`cf_${frostVal.cinematic.firstTimeNonShieldBaseIntro}`, (payload) => {
    PlayPresentationActionToAll(frostVal.VO.postIntroVO)
    UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_FROST_FACTION)
    PlayBaseTooToughVO(payload.ownerVillageId, 7)
    HandleRSLOnboarding(payload.ownerVillageId)
})

SNIPPET_CinematicFinished(`cf_${frostVal.cinematic.bossIntro}`, (payload) => {
    SetPortalInvulnerable(payload.ownerVillageId, true)
    PlayPresentationActionToAll(frostVal.VO.postBossSpawnVO)
})

SNIPPET_CinematicFinished(`cf_${frostVal.cinematic.shieldIntro}`, (payload) => {
    //PlayPresentationActionToAll(frostVal.VO.postShieldIntroVO)
    PlayBaseTooToughVO(payload.ownerVillageId, 1)
    HandleRSLOnboarding(payload.ownerVillageId)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_frost_outpost", () => {
    if (QUERY_GetGlobalVariable("outpostVisited") === 0) {
        OUTPUT_SetGlobalVariable("outpostVisited", 1)
    }
})

SNIPPET_PopCappedEntityDestroyed("ed_lava_launcher_defeated", (piglinEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinEntity)
    const numOfDefeatedLavalLaunchers = DeltaVillageVariable(villageId, frostVal.global.numberOfDefeatedLavaLaunchers, 1)
    if (numOfDefeatedLavalLaunchers >= frostVal.lavalLaunchersCount[QUERY_GetFactionSizeFromVillageID(villageId)].num) {
        Once()
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_lava_launcher_discrete_encounter_structure_destroyed", (destroyedEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const lavaLaunchers = FILTER_ByTagFilter(villageEntities, ["piggo_lava_launcher"], [])
    const deLavaLauncher = FILTER_ByClosest(lavaLaunchers, destroyedEntity, 1)
    OUTPUT_SetPopCapped(deLavaLauncher, false)
})

const ResetLavaLaunchers = (villageId) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (baseSize !== BASE_SIZE_LARGE && baseSize !== BASE_SIZE_BOSS) {
        return
    }
    if (GetVillageVariable(villageId, frostVal.global.numberOfDefeatedLavaLaunchers) >= frostVal.lavalLaunchersCount[baseSize].num) {
        return
    }
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const barracks = FILTER_ByTagFilter(villageEntities, ["barracks"], ["has_discrete_encounter"])
    const netherspreaders = FILTER_ByTagFilter(villageEntities, ["pigSpreader"], ["has_discrete_encounter"])
    const arrowTowers = FILTER_ByTagFilter(villageEntities, ["pigArrowTower"], ["has_discrete_encounter"])
    const barracksAndSpreaders = OPER_Append(barracks, netherspreaders)
    const allOfThem = OPER_Append(barracksAndSpreaders, arrowTowers)
    const currentNumberOfLavaLaunchers = QUERY_GetEntitiesCount(FILTER_ByTagFilter(villageEntities, ["piggo_lava_launcher"], []))
    const amountToSpawn = frostVal.lavalLaunchersCount[baseSize].num - currentNumberOfLavaLaunchers
    if (amountToSpawn <= 0) {
        return
    }

    if (HasEntities(allOfThem)) {
        _spawnLavaLaunchersAtRandomNearTheseEntities(villageId, allOfThem, amountToSpawn)
    } else {
        const knockbacktowers = FILTER_ByTagFilter(villageEntities, ["pigKnockbackTower"], ["has_discrete_encounter"])
        if (HasEntities(knockbacktowers)) {
            _spawnLavaLaunchersAtRandomNearTheseEntities(villageId, knockbacktowers, amountToSpawn)
        } else {
            //Spawn 1 LL at Portal
            SpawnAtPortal(villageId, PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 1, FACTION_NAME_FROST)
        }
    }
}

const _spawnLavaLaunchersAtRandomNearTheseEntities = (villageId, entities, numToSpawn) => {
    let currentSpawn = 0
    let entitiesToUse = entities
    while (HasEntities(entitiesToUse)) {
        const oneEntity = RandomEntity(entitiesToUse)
        const lL = SpawnEntitiesNear(oneEntity, PIGLIN_ARCHETYPE.LAVA_LAUNCHER, 1, TEAM_ORANGE, villageId)
        if (HasEntities(lL)) {
            currentSpawn++
            if (currentSpawn >= numToSpawn) {
                return
            }
        }
        entitiesToUse = OPER_Difference(entitiesToUse, oneEntity)
    }
}

// Telemetry
SetupDefaultTelemetryForPiglinBase(FACTION_NAME_FROST)
