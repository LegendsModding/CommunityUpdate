const finalHordeBastions = {
    north: "wofNorthBastion",
    south: "wofSouthBastion",
    west: "wofWestBastion",
    east: "wofEastBastion",
    northWest: "wofNorthWestBastion",
    northEast: "wofNorthEastBastion",
    southWest: "wofSouthWestBastion",
    southEast: "wofSouthEastBastion",
    center: "wofCenterBastion"
}

const wofUnitComps = {
    //attack horde
    runtsOnly: {
        units: [{ amount: 10, unit: PIGLIN_ARCHETYPE.RUNT }],
        delayUntilSentOut: 15
    },
    gruntersOnly: {
        units: [{ amount: 10, unit: PIGLIN_ARCHETYPE.GRUNTER }],
        delayUntilSentOut: 15
    },
    warboarsOnly: {
        units: [{ amount: 5, unit: PIGLIN_ARCHETYPE.WARBOAR }],
        delayUntilSentOut: 15
    },
    macedilo: {
        units: [
            { amount: 10, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO }
        ],
        delayUntilSentOut: 15
    },
    boaradilo: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.WARBOAR },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO }
        ],
        delayUntilSentOut: 15
    },
    hounds: {
        units: [
            { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 3, unit: PIGLIN_ARCHETYPE.WARBOAR }
        ],
        delayUntilSentOut: 15
    },
    //defend horde
    portalguardOnly: {
        units: [{ amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD }],
        delayUntilSentOut: 15
    },
    fireRain: {
        units: [
            { amount: 7, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    },
    //obstacle horde
    grenadiersOnly: {
        units: [{ amount: 5, unit: PIGLIN_ARCHETYPE.GRENADIER }],
        delayUntilSentOut: 15
    },
    launcherSiege: {
        units: [{ amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER }],
        delayUntilSentOut: 15
    },
    //wof unique
    pipebomb: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC },
            { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 5, unit: PIGLIN_ARCHETYPE.BRUISER }
        ],
        delayUntilSentOut: 15
    },
    razorboars: {
        units: [
            { amount: 2, unit: PIGLIN_ARCHETYPE.WARBOAR },
            { amount: 5, unit: PIGLIN_ARCHETYPE.BRUISER }
        ],
        delayUntilSentOut: 15
    },
    shroombrews: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
        ],
        delayUntilSentOut: 15
    },
    pigsty: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.WARBOAR },
            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER }
        ],
        delayUntilSentOut: 15
    },
    stinkyArmour: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.GRENADIER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD }
        ],
        delayUntilSentOut: 15
    },
    tumblebleed: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO }
        ],
        delayUntilSentOut: 15
    },
    trifecta: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO },
            { amount: 1, unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER }
        ],
        delayUntilSentOut: 15
    },
    specialDelivery: {
        units: [
            { amount: 2, unit: PIGLIN_ARCHETYPE.SEEKER },
            { amount: 5, unit: PIGLIN_ARCHETYPE.WARBOAR },
            { amount: 1, unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER }
        ],
        delayUntilSentOut: 15
    },
    lavaGuard: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD },
            { amount: 1, unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER }
        ],
        delayUntilSentOut: 15
    },
    diloLauncher: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO },
            { amount: 1, unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER }
        ],
        delayUntilSentOut: 15
    },
    portadilo: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.PIGMADILO },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD }
        ],
        delayUntilSentOut: 15
    },
    weeRunts: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    },
    supportDespicableRunts: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC },
            { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD }
        ],
        delayUntilSentOut: 15
    },
    pain: {
        units: [
            { amount: 2, unit: PIGLIN_ARCHETYPE.GRENADIER },
            { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER }
        ],
        delayUntilSentOut: 15
    },
    bobTheBruiserPlus: {
        units: [
            { amount: 2, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    }
}
// tower: pigArrowTower  pigShieldTower  pigThrowerTower pigMagmaTower pigKnockbackTower
// generic: pigSpreader
// upgrade: sns_fear  pigRangeUp pigCarpenter

const wofDE = {
    //attack horde
    elitist: {
        unitComposition: wofUnitComps.macedilo,
        buildableTag: "sns_fear",
        leashDistance: 40,
        returnDistance: 20
    },
    peppaPyro: {
        unitComposition: wofUnitComps.gruntersOnly,
        buildableTag: "peppaPyroDETag",
        leashDistance: 40,
        returnDistance: 20
    },
    //defend horde
    magmaFoundation: {
        unitComposition: wofUnitComps.portalguardOnly,
        buildableTag: "magmaFoundationDETag",
        leashDistance: 40,
        returnDistance: 20
    },
    downtownRush: {
        unitComposition: wofUnitComps.fireRain,
        buildableTag: "pigRangeUp",
        leashDistance: 40,
        returnDistance: 20
    },
    //obstacle horde
    sporeCannons: {
        unitComposition: wofUnitComps.launcherSiege,
        buildableTag: "sporeCannonsDETag",
        leashDistance: 40,
        returnDistance: 20
    },
    sporeGrowth: {
        unitComposition: wofUnitComps.grenadiersOnly,
        buildableTag: "pigCarpenter",
        leashDistance: 40,
        returnDistance: 20
    },
    //wof unique
    siegeTowers: {
        unitComposition: wofUnitComps.shroombrews,
        buildableTag: "siegeTowersDETag",
        leashDistance: 40,
        returnDistance: 20
    },
    stinkyBarrels: {
        unitComposition: wofUnitComps.pigsty,
        buildableTag: "stinkyBarrelsDETag",
        leashDistance: 40,
        returnDistance: 20
    },
    magmaFungi: {
        unitComposition: wofUnitComps.lavaGuard,
        buildableTag: "magmaFungiDETag",
        leashDistance: 40,
        returnDistance: 20
    },
    sporeShield: {
        unitComposition: wofUnitComps.diloLauncher,
        buildableTag: "sporeShieldDETag",
        leashDistance: 40,
        returnDistance: 20
    },
    magmaShield: {
        unitComposition: wofUnitComps.portadilo,
        buildableTag: "magmaShieldDETag",
        leashDistance: 40,
        returnDistance: 20
    },
    theWall: {
        unitComposition: wofUnitComps.weeRunts,
        buildableTag: "pigArrowTower",
        leashDistance: 40,
        returnDistance: 20
    }
}

const GetWOFDescreteEncounters = () => {
    return wofDEAmounts
}

const wofDEAmounts = {
    //north
    ["de0"]: { type: wofDE.downtownRush, amount: 1 },
    //east
    ["de1"]: { type: wofDE.sporeGrowth, amount: 1 },
    //south
    ["de2"]: { type: wofDE.elitist, amount: 1 },
    //west
    ["de3"]: { type: wofDE.siegeTowers, amount: 1 },
    //ne
    ["de4"]: { type: wofDE.sporeCannons, amount: 1 },
    //se
    ["de5"]: { type: wofDE.peppaPyro, amount: 1 },
    //nw
    ["de7"]: { type: wofDE.stinkyBarrels, amount: 1 },
    //rings
    ["de8"]: { type: wofDE.magmaFungi, amount: 1 },
    ["de9"]: { type: wofDE.sporeShield, amount: 1 },
    ["de10"]: { type: wofDE.magmaShield, amount: 1 }
}

const finalAi = {
    offensive: "finalAttackAi",
    defensive: "finalDefendAi",
    siege: "finalSiegeAi"
}

const wofVal = {
    aiConfig: {
        [finalAi.offensive]: {
            controllerArchetype: "badger:ai_entity_final_offensive",
            controllerTag: "finalOffensiveAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["finalAttackRally"],
            reinforcementControlGroupTag: "finalAttack",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [finalAi.siege]: {
            controllerArchetype: "badger:ai_entity_final_siege",
            controllerTag: "finalSiegeAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["finalSiegeRally"],
            reinforcementControlGroupTag: "finalSiegeRally",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [finalAi.defensive]: {
            controllerArchetype: "badger:ai_entity_final_defensive",
            controllerTag: "finalDefensiveAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["finalDefendRally"],
            reinforcementControlGroupTag: "finalDefendRally",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        }
    },
    //---- Bastions' AI entities
    bastionAiConfig: {
        [finalHordeBastions.north]: {
            aiConfig: {
                [finalAi.defensive]: {
                    controllerArchetype: "badger:ai_entity_final_defensive_north",
                    controllerTag: "finalDefensiveAi_north",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyNorth"],
                    reinforcementControlGroupTag: "finalDefendRallyNorth",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                },
                [finalAi.offensive]: {
                    controllerArchetype: "badger:ai_entity_final_offensive_north",
                    controllerTag: "finalOffensiveAi_north",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyNorth"],
                    reinforcementControlGroupTag: "finalDefendRallyNorth",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                }
            }
        },
        [finalHordeBastions.south]: {
            aiConfig: {
                [finalAi.defensive]: {
                    controllerArchetype: "badger:ai_entity_final_defensive_south",
                    controllerTag: "finalDefensiveAi_south",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallySouth"],
                    reinforcementControlGroupTag: "finalDefendRallySouth",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                },
                [finalAi.offensive]: {
                    controllerArchetype: "badger:ai_entity_final_offensive_south",
                    controllerTag: "finalOffensiveAi_south",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallySouth"],
                    reinforcementControlGroupTag: "finalDefendRallySouth",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                }
            }
        },
        [finalHordeBastions.west]: {
            aiConfig: {
                [finalAi.defensive]: {
                    controllerArchetype: "badger:ai_entity_final_defensive_west",
                    controllerTag: "finalDefensiveAi_west",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyWest"],
                    reinforcementControlGroupTag: "finalDefendRallyWest",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                },
                [finalAi.offensive]: {
                    controllerArchetype: "badger:ai_entity_final_offensive_west",
                    controllerTag: "finalOffensiveAi_west",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyWest"],
                    reinforcementControlGroupTag: "finalDefendRallyWest",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                }
            }
        },
        [finalHordeBastions.east]: {
            aiConfig: {
                [finalAi.defensive]: {
                    controllerArchetype: "badger:ai_entity_final_defensive_east",
                    controllerTag: "finalDefensiveAi_east",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyEast"],
                    reinforcementControlGroupTag: "finalDefendRallyEast",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                },
                [finalAi.offensive]: {
                    controllerArchetype: "badger:ai_entity_final_offensive_east",
                    controllerTag: "finalOffensiveAi_east",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyEast"],
                    reinforcementControlGroupTag: "finalDefendRallyEast",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                }
            }
        },
        [finalHordeBastions.northWest]: {
            aiConfig: {
                [finalAi.defensive]: {
                    controllerArchetype: "badger:ai_entity_final_defensive_northWest",
                    controllerTag: "finalDefensiveAi_northWest",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyNorthWest"],
                    reinforcementControlGroupTag: "finalDefendRallyNorthWest",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                },
                [finalAi.offensive]: {
                    controllerArchetype: "badger:ai_entity_final_offensive_northWest",
                    controllerTag: "finalOffensiveAi_northWest",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyNorthWest"],
                    reinforcementControlGroupTag: "finalDefendRallyNorthWest",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                }
            }
        },
        [finalHordeBastions.northEast]: {
            aiConfig: {
                [finalAi.defensive]: {
                    controllerArchetype: "badger:ai_entity_final_defensive_northEast",
                    controllerTag: "finalDefensiveAi_northEast",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyNorthEast"],
                    reinforcementControlGroupTag: "finalDefendRallyNorthEast",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                },
                [finalAi.offensive]: {
                    controllerArchetype: "badger:ai_entity_final_offensive_northEast",
                    controllerTag: "finalOffensiveAi_northEast",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallyNorthEast"],
                    reinforcementControlGroupTag: "finalDefendRallyNorthEast",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                }
            }
        },
        [finalHordeBastions.southEast]: {
            aiConfig: {
                [finalAi.defensive]: {
                    controllerArchetype: "badger:ai_entity_final_defensive_southEast",
                    controllerTag: "finalDefensiveAi_southEast",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallySouthEast"],
                    reinforcementControlGroupTag: "finalDefendRallySouthEast",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                },
                [finalAi.offensive]: {
                    controllerArchetype: "badger:ai_entity_final_offensive_southEast",
                    controllerTag: "finalOffensiveAi_southEast",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallySouthEast"],
                    reinforcementControlGroupTag: "finalDefendRallySouthEast",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                }
            }
        },
        [finalHordeBastions.southWest]: {
            aiConfig: {
                [finalAi.defensive]: {
                    controllerArchetype: "badger:ai_entity_final_defensive_southWest",
                    controllerTag: "finalDefensiveAi_southWest",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallySouthWest"],
                    reinforcementControlGroupTag: "finalDefendRallySouthWest",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                },
                [finalAi.offensive]: {
                    controllerArchetype: "badger:ai_entity_final_offensive_southWest",
                    controllerTag: "finalOffensiveAi_southWest",
                    waveReinforcementsEnabled: false,
                    reinforcementPositionTagsToSearchFor: ["finalDefendRallySouthWest"],
                    reinforcementControlGroupTag: "finalDefendRallySouthWest",
                    reinforcementInterval: 10,
                    reinforcementPercentage: 100
                }
            }
        }
    },
    debug: {
        outputOn: false
    },
    audioPerPhaseArray: ["inactive", "boss_engaged"],
    escalation: {
        approached: "approached",
        innerWallDestroyed: "innerWallDestroyed",
        keyBuildingDestroyed: "keyBuildingDestroyed",
        portalApproached: "portalApproached"
    },
    audio: {
        //Players within this distance of the WoF will hear the audio, even if they didnt trigger it.
        wofVOAudibleDistance: 400
    },
    waitTimes: {
        wofEscalation4VoDelay: 4
    },
    village: {
        audioPhaseKey: "attackBaseAudioPhaseKey",
        canBossSpawnOuterMobs: "can_boss_spawn_outer_mobs",
        bossSpawnUnitChoice: "boss_spawn_unit_choice",
        seeWoFHordeRunResponseTimer: "seeWoFHordeRunResponseActive",
        preventWallBreachResponse: "wof_prevent_wall_breach_response"
    },
    global: {
        playerIsInOuterTV: "player_is_in_outer_tv",
        bossIsAlive: "boss_is_alive",
        nBastionBC: "north_bastion_building_count",
        neBastionBC: "north_east_bastion_building_count",
        eBastionBC: "east_bastion_building_count",
        seBastionBC: "south_east_bastion_building_count",
        sBastionBC: "south_bastion_building_count",
        swBastionBC: "south_west_bastion_building_count",
        wBastionBC: "west_bastion_building_count",
        nwBastionBC: "north_west_bastion_building_count",
        minionSpawnsRallyPointTracker: "minions_spawns_rally_point_tracker",
        siegeBossPlayed: "siege_boss_played",
        canWOFBossMove: "can_WOF_boss_move",
        bossDamagedScriptedResponseCooldown: "gv_boss_damaged_scripted_response_cooldown",
        hasAppliedPatchLeash: "gv_has_applied_patch_leash",
        hasLeashedFinalBoss: "gv_has_leashed_final_boss"
    },
    bossDamagedScriptedResponseCooldownValue: 120,
    VO: {
        wofBoss75: "wof_captured_boss_75",
        wofBoss50: "wof_captured_boss_50",
        wofBoss25: "wof_captured_boss_25",
        wofEscalation1: "wof_battle_escalation_1",
        wofEscalation2: "wof_battle_escalation_2",
        wofEscalation3: "wof_battle_escalation_3",
        wofEscalation4: "wof_battle_escalation_4"
    },
    music: "badger:music_combat_wof_base_boss_1",
    wofPercentageStrings: {
        wofBuildingResponsePercentage: 70,
        wofDamagedResponsePercentage: 70,
        wofWallResponsePercentage: 70,
        wofAttackWavePlayerPercentage: 70
    },
    cineValues: {
        despawnTowerOnBossDeathRadius: 200
    },
    barracks: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_WOFFaction,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_DISRUPTOR]: DisruptorBarracksConfig_WOFFaction,
        // eslint-disable-next-line @typescript-eslint/camelcase
        [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_WOFFaction
    },
    // Order coincides with rally point data.
    wofBastionTags: ["wofNorthWestBastion", "wofNorthEastBastion", "wofSouthEastBastion", "wofSouthWestBastion", "wofNorthBastion", "wofSouthBastion", "wofEastBastion", "wofWestBastion"],
    rallyPointData: [
        { name: "northWestBastionRallyPoint", accumulations: 1, count: 2, distance: 10 },
        { name: "northEastBastionRallyPoint", accumulations: 1, count: 2, distance: 10 },
        { name: "southEastBastionRallyPoint", accumulations: 1, count: 2, distance: 10 },
        { name: "southWestBastionRallyPoint", accumulations: 1, count: 2, distance: 10 },
        { name: "northBastionRallyPoint", accumulations: 1, count: 2, distance: 10 },
        { name: "southBastionRallyPoint", accumulations: 1, count: 2, distance: 10 },
        { name: "eastBastionRallyPoint", accumulations: 1, count: 2, distance: 10 },
        { name: "westBastionRallyPoint", accumulations: 1, count: 2, distance: 10 },
        { name: "rallyPoint", accumulations: 1, count: 10, distance: 10 }
    ],
    baseSetup: {
        reescalationSnippet: "spe_wof_gameplay",
        [BASE_SIZE_PIGLIN_WOF]: {
            boundsTV: "badger:spatial_trigger_wof_base_cine",
            reescalation: true,
            reescalationResetTime: 1800,
            snippets: [{ snippet: "spe_disable_player_nudges", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER }]
        }
    },
    minionSpawnsT1: [
        [
            { amount: 2, unit: "badger:piglin_piggo_warboar" },
            { amount: 2, unit: "badger:piglin_bruiser" }
        ],
        [
            { amount: 3, unit: "badger:piglin_bruiser" },
            { amount: 2, unit: "badger:piglin_grenadier" }
        ]
    ],
    minionSpawnsT2: [
        //t1
        [
            { amount: 3, unit: "badger:piglin_piggo_warboar" },
            { amount: 2, unit: "badger:piglin_bruiser" }
        ],
        [
            { amount: 3, unit: "badger:piglin_bruiser" },
            { amount: 2, unit: "badger:piglin_grenadier" }
        ],
        //t2
        [
            { amount: 3, unit: "badger:piglin_grenadier" },
            { amount: 2, unit: "badger:piglin_piggo_warboar" }
        ],
        [
            { amount: 2, unit: "badger:piglin_seeker" },
            { amount: 3, unit: "badger:piglin_piggo_warboar" }
        ]
    ],
    minionSpawnsT3: [
        //t1
        [
            { amount: 3, unit: "badger:piglin_piggo_warboar" },
            { amount: 3, unit: "badger:piglin_bruiser" },
            { amount: 1, unit: "badger:piglin_disruptor" }
        ],
        [
            { amount: 3, unit: "badger:piglin_bruiser" },
            { amount: 2, unit: "badger:piglin_grenadier" },
            { amount: 1, unit: "badger:piglin_disruptor" }
        ],
        //t2
        [
            { amount: 2, unit: "badger:piglin_grenadier" },
            { amount: 4, unit: "badger:piglin_piggo_warboar" },
            { amount: 1, unit: "badger:piglin_disruptor" }
        ],
        [
            { amount: 2, unit: "badger:piglin_seeker" },
            { amount: 3, unit: "badger:piglin_piggo_warboar" },
            { amount: 1, unit: "badger:piglin_piggo_lava_launcher" },
            { amount: 1, unit: "badger:piglin_disruptor" }
        ],
        //t3
        [
            { amount: 2, unit: "badger:piglin_grenadier" },
            { amount: 1, unit: "badger:piglin_portal_guard" },
            { amount: 1, unit: "badger:piglin_disruptor" }
        ],
        [
            { amount: 5, unit: "badger:piglin_bruiser" },
            { amount: 1, unit: "badger:piglin_pigmadilo" },
            { amount: 1, unit: "badger:piglin_disruptor" }
        ]
    ],
    villageComposition: {
        phase2: {
            gatherPercentage: 25,
            aiDistribution: [
                [finalAi.offensive, 75],
                [finalAi.defensive, 0],
                [finalAi.siege, 25]
            ],
            spawnedUnits: {}
        },
        phase3: {
            gatherPercentage: 40,
            aiDistribution: [
                [finalAi.offensive, 100],
                [finalAi.defensive, 0],
                [finalAi.siege, 50]
            ],
            spawnedUnits: {}
        },
        phase4: {
            gatherPercentage: 60,
            aiDistribution: [
                [finalAi.offensive, 100],
                [finalAi.defensive, 50],
                [finalAi.siege, 100]
            ],
            spawnedUnits: {}
        },
        recurringWave: {
            gatherPercentage: 20,
            aiDistribution: [
                [finalAi.offensive, 75],
                [finalAi.defensive, 0],
                [finalAi.siege, 25]
            ],
            spawnedUnits: {}
        },
        playerBuildTier1: {
            gatherPercentage: 30,
            aiDistribution: [
                [finalAi.offensive, 0],
                [finalAi.defensive, 0],
                [finalAi.siege, 100]
            ],
            spawnedUnits: {}
        },
        playerBuildTier2: {
            gatherPercentage: 40,
            aiDistribution: [
                [finalAi.offensive, 50],
                [finalAi.defensive, 5],
                [finalAi.siege, 50]
            ],
            spawnedUnits: {}
        },
        playerBuildTier3: {
            gatherPercentage: 50,
            aiDistribution: [
                [finalAi.offensive, 75],
                [finalAi.defensive, 10],
                [finalAi.siege, 75]
            ],
            spawnedUnits: {}
        },
        structureDamagedTier1: {
            gatherPercentage: 20,
            aiDistribution: [
                [finalAi.offensive, 10],
                [finalAi.defensive, 60],
                [finalAi.siege, 0]
            ],
            spawnedUnits: {}
        },
        structureDamagedTier2: {
            gatherPercentage: 30,
            aiDistribution: [
                [finalAi.offensive, 25],
                [finalAi.defensive, 75],
                [finalAi.siege, 0]
            ],
            spawnedUnits: {}
        },
        structureDamagedTier3: {
            gatherPercentage: 50,
            aiDistribution: [
                [finalAi.offensive, 50],
                [finalAi.defensive, 100],
                [finalAi.siege, 0]
            ],
            spawnedUnits: {}
        },
        structureDestroyedTier1: {
            gatherPercentage: 40,
            aiDistribution: [
                [finalAi.offensive, 70],
                [finalAi.defensive, 0],
                [finalAi.siege, 0]
            ],
            spawnedUnits: {}
        },
        structureDestroyedTier2: {
            gatherPercentage: 50,
            aiDistribution: [
                [finalAi.offensive, 85],
                [finalAi.defensive, 0],
                [finalAi.siege, 0]
            ],
            spawnedUnits: {}
        },
        structureDestroyedTier3: {
            gatherPercentage: 75,
            aiDistribution: [
                [finalAi.offensive, 100],
                [finalAi.defensive, 10],
                [finalAi.siege, 0]
            ],
            spawnedUnits: {}
        },
        wallBreachResponse: {
            gatherPercentage: 30,
            aiDistribution: [
                [finalAi.offensive, 30],
                [finalAi.defensive, 100],
                [finalAi.siege, 10]
            ],
            spawnedUnits: {}
        },
        bossHighHp: {
            gatherPercentage: 30,
            aiDistribution: [
                [finalAi.offensive, 10],
                [finalAi.defensive, 100],
                [finalAi.siege, 20]
            ],
            spawnedUnits: {}
        },
        bossMidHp: {
            gatherPercentage: 50,
            aiDistribution: [
                [finalAi.offensive, 25],
                [finalAi.defensive, 100],
                [finalAi.siege, 50]
            ],
            spawnedUnits: {}
        },
        bossLowHp: {
            gatherPercentage: 70,
            aiDistribution: [
                [finalAi.offensive, 50],
                [finalAi.defensive, 100],
                [finalAi.siege, 100]
            ],
            spawnedUnits: {}
        }
    },
    bastionRallyPointConfig: {
        [finalHordeBastions.north]: {
            piglinRallyPoints: {
                ["finalDefendRally"]: {
                    controlGroupTag: "finalDefendRally",
                    composition: wofUnitComps.boaradilo,
                    ais: [[finalAi.defensive, 75]],
                    positionTags: ["finalDefendRallyNorth"],
                    positionTagExcludes: []
                }
            }
        },
        [finalHordeBastions.east]: {
            piglinRallyPoints: {
                ["finalDefendRally"]: {
                    controlGroupTag: "finalDefendRally",
                    composition: wofUnitComps.supportDespicableRunts,
                    ais: [[finalAi.defensive, 75]],
                    positionTags: ["finalDefendRallyEast"],
                    positionTagExcludes: []
                }
            }
        },
        [finalHordeBastions.west]: {
            piglinRallyPoints: {
                ["finalDefendRally"]: {
                    controlGroupTag: "finalDefendRally",
                    composition: wofUnitComps.trifecta,
                    ais: [[finalAi.defensive, 75]],
                    positionTags: ["finalDefendRallyWest"],
                    positionTagExcludes: []
                }
            }
        },
        [finalHordeBastions.south]: {
            piglinRallyPoints: {
                ["finalDefendRally"]: {
                    controlGroupTag: "finalDefendRally",
                    composition: wofUnitComps.pain,
                    ais: [[finalAi.defensive, 75]],
                    positionTags: ["finalDefendRallySouth"],
                    positionTagExcludes: []
                }
            }
        },
        [finalHordeBastions.northWest]: {
            piglinRallyPoints: {
                ["finalDefendRally"]: {
                    controlGroupTag: "finalDefendRally",
                    composition: wofUnitComps.pipebomb,
                    ais: [[finalAi.defensive, 75]],
                    positionTags: ["finalDefendRallyNorthWest"],
                    positionTagExcludes: []
                }
            }
        },
        [finalHordeBastions.northEast]: {
            piglinRallyPoints: {
                ["finalDefendRally"]: {
                    controlGroupTag: "finalDefendRally",
                    composition: wofUnitComps.hounds,
                    ais: [[finalAi.defensive, 75]],
                    positionTags: ["finalDefendRallyNorthEast"],
                    positionTagExcludes: []
                }
            }
        },
        [finalHordeBastions.southWest]: {
            piglinRallyPoints: {
                ["finalDefendRally"]: {
                    controlGroupTag: "finalDefendRally",
                    composition: wofUnitComps.grenadiersOnly,
                    ais: [[finalAi.defensive, 75]],
                    positionTags: ["finalDefendRallySouthWest"],
                    positionTagExcludes: []
                }
            }
        },
        [finalHordeBastions.southEast]: {
            piglinRallyPoints: {
                ["finalDefendRally"]: {
                    controlGroupTag: "finalDefendRally",
                    composition: wofUnitComps.bobTheBruiserPlus,
                    ais: [[finalAi.defensive, 75]],
                    positionTags: ["finalDefendRallySouthEast"],
                    positionTagExcludes: []
                }
            }
        },
        centerRallyPoints: {
            controlGroupTag: "finalSiegeRally",
            ais: [[finalAi.siege, 100]],
            positionTags: ["finalSiegeRallyCenterA", "finalSiegeRallyCenterB", "finalSiegeRallyCenterC"]
        }
    }
}

//initialize ais:
SetupBaseAIs(wofVal.aiConfig)

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        //base generation and initial setup
        LISTENFOR_VillageGenerated({
            snippet: "vg_wof",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_WOF
        })
        //base response listeners
        LISTENFOR_VillageGenerated({
            snippet: "vg_wof_base_response",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_WOF
        })
    }
})

const _DeckShuffleWOF = (deck) => {
    DECK_ShuffleGroup(deck, RANDOM_GROUP_WOF_HORDE)
}

const _NotAssignedHomeBases = (villageId) => {
    return GetVillageVariable(villageId, "ai_homebases") === 0
}

const _UpdateAssignedHomeBasesVillageVariable = (villageId) => {
    SetVillageVariable(villageId, "ai_homebases", 1)
}

const _AssignHomeBasesToFinalBaseAI = (villageId) => {
    if (_NotAssignedHomeBases(villageId)) {
        const aiEntities = QUERY_GetEntitiesWithTags(["finalAi"])
        if (HasEntities(aiEntities)) {
            const boss = QUERY_GetEntitiesWithTags("finalBoss")
            if (HasEntities(boss)) {
                OUTPUT_AssignHomeBaseToEntities(boss, aiEntities, AI_HOME_BASE_THRESHOLD)
                _UpdateAssignedHomeBasesVillageVariable(villageId)
            }
        }
    }
}

const _UpdateEscalationAndUpdateBarracks = (villageId, level) => {
    SetEscalationValueAndUpdateBarracksForVillage(villageId, "obstacleBarracksFighter", FighterBarracksConfig_Obstacle_WOF, level)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, "obstacleBarracksDisruptor", DisruptorBarracksConfig_Obstacle_WOF, level)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, "obstacleBarracksSeiger", SiegerBarracksConfig_Obstacle_WOF, level)

    SetEscalationValueAndUpdateBarracksForVillage(villageId, "defendBarracksFighter", FighterBarracksConfig_Defend_WOF, level)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, "defendBarracksDisruptor", DisruptorBarracksConfig_Defend_WOF, level)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, "defendBarracksSieger", SiegerBarracksConfig_Defend_WOF, level)

    SetEscalationValueAndUpdateBarracksForVillage(villageId, "attackBarracksFighter", FighterBarracksConfig_Attack_WOF, level)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, "attackBarracksDisruptor", DisruptorBarracksConfig_Attack_WOF, level)
    SetEscalationValueAndUpdateBarracksForVillage(villageId, "attackBarracksSeiger", SiegerBarracksConfig_Attack_WOF, level)

    SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_VINDICATORS, VindicatorBarracksConfig_wofFaction, level)
}

const _MakeWOFBase = (_villageId) => {
    const baseDeck = DECK_Empty()
    Logi("wof clearing cards")
    SetupWoFClearingCards(baseDeck)

    //Boss Center Arena Zones
    const centralZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centralZone, [ZoneTagCard("wofDeadZone"), ZoneTagCard("innerWallZone"), ZoneTagCard("centerWallZone"), ZoneTagCard("innerTVzone"), ZoneTagCard("wofPathStartZone")])
    const centralDeadLayer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centralDeadLayer, [ZoneTagCard("wofDeadZone"), ZoneTagCard("innerWallZone"), ZoneTagCard("centerWallZone")])
    const centralInnerLayer1 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centralInnerLayer1, [ZoneTagCard("innerWallZone"), ZoneTagCard("centerWallZone")])
    const centralPathStartLayer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centralPathStartLayer, [ZoneTagCard("innerWallZone"), ZoneTagCard("centerWallZone")])
    const centralInnerLayer2 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centralInnerLayer2, [ZoneTagCard("innerZoneA"), ZoneTagCard("innerWallZone"), ZoneTagCard("centerWallZone")])
    const centralOuterLayer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centralOuterLayer, [ZoneTagCard("wofDeadZone"), ZoneTagCard("innerWallZone"), ZoneTagCard("centerWallZone")])

    //Boss Center Arena Walls
    const innerWalls = WallsCard("wofWalls")
    DECK_MultiplyByMultipleRules(innerWalls, [ZoneFilterCard("innerWallZone"), TagCard("innerWallsPhase4Tag")])

    //CENTER ZONES
    const centerZonesA = ZonesCard("addZone", 21)
    DECK_MultiplyByMultipleRules(centerZonesA, [ZoneTagCard("centerZoneA"), ZoneTagCard("centerZones")])
    const centerZonesB = ZonesCard("addZone", 21)
    DECK_MultiplyByMultipleRules(centerZonesB, [ZoneTagCard("centerZoneB"), ZoneTagCard("centerZones")])
    const centerZonesC = ZonesCard("addZone", 21)
    DECK_MultiplyByMultipleRules(centerZonesC, [ZoneTagCard("centerZoneC"), ZoneTagCard("centerZones")])

    //setup all the structure decks
    const northNoTag = DECK_Empty()
    const northPrimaryStructures = DECK_Empty()
    const northSecondaryStructures = DECK_Empty()
    const northAdditionalStructures = DECK_Empty()
    const northEastNoTag = DECK_Empty()
    const northEastPrimaryStructures = DECK_Empty()
    const northEastSecondaryStructures = DECK_Empty()
    const northEastAdditionalStructures = DECK_Empty()
    const eastNoTag = DECK_Empty()
    const eastPrimaryStructures = DECK_Empty()
    const eastSecondaryStructures = DECK_Empty()
    const eastAdditionalStructures = DECK_Empty()
    const southEastNoTag = DECK_Empty()
    const southEastPrimaryStructures = DECK_Empty()
    const southEastSecondaryStructures = DECK_Empty()
    const southEastAdditionalStructures = DECK_Empty()
    const southNoTag = DECK_Empty()
    const southPrimaryStructures = DECK_Empty()
    const southSecondaryStructures = DECK_Empty()
    const southAdditionalStructures = DECK_Empty()
    const southWestNoTag = DECK_Empty()
    const southWestPrimaryStructures = DECK_Empty()
    const southWestSecondaryStructures = DECK_Empty()
    const southWestAdditionalStructures = DECK_Empty()
    const westNoTag = DECK_Empty()
    const westPrimaryStructures = DECK_Empty()
    const westSecondaryStructures = DECK_Empty()
    const westAdditionalStructures = DECK_Empty()
    const northWestNoTag = DECK_Empty()
    const northWestPrimaryStructures = DECK_Empty()
    const northWestSecondaryStructures = DECK_Empty()
    const northWestAdditionalStructures = DECK_Empty()

    //build a shuffle deck for the secondary objectives structures, then distribute out to the primarystructure deck for each cardinal district
    const secondaryObjectiveShuffleDeck = DECK_Empty()

    DECK_PutOnBottomOf(BuildableCard("superNetherSpreaderFear", 1), secondaryObjectiveShuffleDeck)
    DECK_PutOnBottomOf(BuildableCard("rangeExtender", 1), secondaryObjectiveShuffleDeck)
    DECK_PutOnBottomOf(BuildableCard("buildingRegenerator", 1), secondaryObjectiveShuffleDeck)
    const extraDistrictDE = BuildableCard("lavaSprayerTower", 1)
    DECK_MultiplyBySingle(extraDistrictDE, TagCard("siegeTowersDETag"))
    DECK_PutOnBottomOf(extraDistrictDE, secondaryObjectiveShuffleDeck)
    _DeckShuffleWOF(secondaryObjectiveShuffleDeck)

    //////North District//////
    const northDistrict = DistrictCard("wofNorthDistrict")
    DECK_MultiplyByMultipleRules(northDistrict, [PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const northCenterZone = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(northCenterZone, [DistrictCard("wofNorthDistrict"), ZoneTagCard("northPathZone"), ZoneTagCard("districtCenter"), ZoneTagCard("northDistrictOuterWallZone"), ZoneTagCard("northDistrictInnerWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    const northMidZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(northMidZones, [DistrictCard("wofNorthDistrict"), ZoneTagCard("northPathZone"), ZoneTagCard("districtMid"), ZoneTagCard("northDistrictOuterWallZone"), ZoneTagCard("northDistrictInnerWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    const northFarZones = ZonesCard("addZone", 16)
    DECK_MultiplyByMultipleRules(northFarZones, [DistrictCard("wofNorthDistrict"), PlacementPreferenceCard("closeToDistrictStart"), ZoneTagCard("northPathZone"), ZoneTagCard("districtFar"), ZoneTagCard("northDistrictOuterWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    //North District WALLS//
    const northInnerWalls = WallsCard("wofWallsDefend")
    DECK_MultiplyByMultipleRules(northInnerWalls, [DistrictCard("wofNorthDistrict"), ZoneFilterCard("northDistrictInnerWallZone"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    const northOuterWalls = WallsCard("wofWallsDefend")
    DECK_MultiplyByMultipleRules(northOuterWalls, [DistrictCard("wofNorthDistrict"), ZoneFilterCard("northDistrictOuterWallZone"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    //North District STRUCTURES//
    DECK_PutOnBottomOf(BuildableCard("goldMine", 2), northPrimaryStructures)
    const northBarracks0 = BuildableCard("addDisruptorBarracks", 1)
    DECK_MultiplyByMultipleRules(northBarracks0, [TagCard("wofNorthBastion"), TagCard("defendBarracksDisruptor")])
    DECK_PutOnBottomOf(northBarracks0, northPrimaryStructures)
    const northRallyPoint = BuildableCard("defendRallyPoint", 1)
    DECK_MultiplyByMultipleRules(northRallyPoint, [DistrictCard("wofNorthDistrict"), TagCard("finalDefendRallyNorth"), TagCard("wofNorthBastion")])
    DECK_PutOnBottomOf(northRallyPoint, northNoTag)
    DECK_MultiplyByMultipleRules(northNoTag, [DistrictCard("wofNorthDistrict"), ForceBuildingPlacementCard("forceBuildingPlacement"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])

    //add secondary objective structure
    const northDraw = DECK_DrawFromTop(secondaryObjectiveShuffleDeck, 1)
    DECK_PutOnBottomOf(northDraw, northPrimaryStructures)

    DECK_MultiplyByMultipleRules(northPrimaryStructures, [DistrictCard("wofNorthDistrict"), ZoneFilterCard("districtMid"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement"), TagCard("wofNorthBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])

    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), northSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 1), northSecondaryStructures)
    DECK_MultiplyByMultipleRules(northSecondaryStructures, [DistrictCard("wofNorthDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("placeRandomly"), TagCard("wofNorthBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    _DeckShuffleWOF(northSecondaryStructures)

    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), northAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower", 1), northAdditionalStructures)
    const northBarracks1 = BuildableCard("addDisruptorBarracks", 1)
    DECK_MultiplyByMultipleRules(northBarracks1, [TagCard("wofNorthBastion"), TagCard("defendBarracksDisruptor")])
    DECK_PutOnBottomOf(northBarracks1, northAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 2), northAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 1), northAdditionalStructures)
    DECK_MultiplyByMultipleRules(northAdditionalStructures, [DistrictCard("wofNorthDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("placeCloseToWalls"), TagCard("wofNorthBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    _DeckShuffleWOF(northAdditionalStructures)

    //////North-East District//////
    const northEastDistrict = DistrictCard("wofNorthEastDistrict")
    DECK_MultiplyByMultipleRules(northEastDistrict, [PlacementPreferenceCard("placeInDirectionNorthEastWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const northEastCenterZone = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(northEastCenterZone, [DistrictCard("wofNorthEastDistrict"), ZoneTagCard("northEastPathZone"), ZoneTagCard("districtCenter"), PlacementPreferenceCard("clearResourcesInZone")])
    const northEastMidZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(northEastMidZones, [DistrictCard("wofNorthEastDistrict"), ZoneTagCard("northEastPathZone"), ZoneTagCard("districtMid"), PlacementPreferenceCard("clearResourcesInZone")])
    const northEastFarZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(northEastFarZones, [DistrictCard("wofNorthEastDistrict"), ZoneTagCard("northEastPathZone"), ZoneTagCard("districtFar"), PlacementPreferenceCard("clearResourcesInZone")])

    //Bone Walls
    const northEastCentralBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(northEastCentralBoneWalls, [DistrictCard("wofNorthEastDistrict"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])
    const northEastMidBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(northEastMidBoneWalls, [DistrictCard("wofNorthEastDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])
    const northEastOuterBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(northEastOuterBoneWalls, [DistrictCard("wofNorthEastDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])

    //District NE STRUCTURES
    const northEastDE = BuildableCard("piglinKnockbackTower")
    DECK_MultiplyByMultipleRules(northEastDE, [DistrictCard("wofNorthEastDistrict"), TagCard("sporeCannonsDETag"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofNorthEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    DECK_PutOnBottomOf(BuildableCard("piglinShieldTower", 1), northEastPrimaryStructures)
    const northEastBarracks0 = BuildableCard("addSiegerBarracks", 1)
    DECK_MultiplyByMultipleRules(northEastBarracks0, [TagCard("wofNorthEastBastion"), TagCard("obstacleBarracksSieger")])
    DECK_PutOnBottomOf(northEastBarracks0, northEastPrimaryStructures)
    const northEastRallyPoint = BuildableCard("obstacleRallypoint", 1)
    DECK_MultiplyByMultipleRules(northEastRallyPoint, [DistrictCard("wofNorthEastDistrict"), TagCard("finalDefendRallyNorthEast"), TagCard("wofNorthEastBastion")])
    DECK_PutOnBottomOf(northEastRallyPoint, northEastNoTag)
    DECK_MultiplyByMultipleRules(northEastPrimaryStructures, [DistrictCard("wofNorthEastDistrict"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofNorthEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    DECK_MultiplyByMultipleRules(northEastNoTag, [DistrictCard("wofNorthEastDistrict"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])

    DECK_PutOnBottomOf(BuildableCard("piglinKnockbackTower", 1), northEastSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("piglinShieldTower", 1), northEastSecondaryStructures)
    DECK_MultiplyByMultipleRules(northEastSecondaryStructures, [DistrictCard("wofNorthEastDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("placeRandomly"), TagCard("wofNorthEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    _DeckShuffleWOF(northEastSecondaryStructures)

    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 2), northEastAdditionalStructures)
    const northEastBarracks1 = BuildableCard("addDisruptorBarracks", 1)
    DECK_MultiplyByMultipleRules(northEastBarracks1, [TagCard("wofNorthEastBastion"), TagCard("obstacleBarracksDisruptor")])
    DECK_PutOnBottomOf(northEastBarracks1, northEastAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 2), northEastAdditionalStructures)
    DECK_MultiplyByMultipleRules(northEastAdditionalStructures, [DistrictCard("wofNorthEastDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeCloseToWalls"), TagCard("wofNorthEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    _DeckShuffleWOF(northEastAdditionalStructures)

    //////East District//////
    const eastDistrict = DistrictCard("wofEastDistrict")
    DECK_MultiplyByMultipleRules(eastDistrict, [PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const eastCenterZone = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(eastCenterZone, [DistrictCard("wofEastDistrict"), ZoneTagCard("eastPathZone"), ZoneTagCard("districtCenter"), ZoneTagCard("eastDistrictWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    const eastMidZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(eastMidZones, [DistrictCard("wofEastDistrict"), ZoneTagCard("eastPathZone"), ZoneTagCard("districtMid"), ZoneTagCard("eastDistrictWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    const eastFarZones = ZonesCard("addZone", 16)
    DECK_MultiplyByMultipleRules(eastFarZones, [DistrictCard("wofEastDistrict"), PlacementPreferenceCard("closeToDistrictStart"), ZoneTagCard("eastPathZone"), ZoneTagCard("districtFar"), ZoneTagCard("eastDistrictWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    //East District WALLS//
    const eastDistrictWalls = WallsCard("wofWallsObstacle")
    DECK_MultiplyByMultipleRules(eastDistrictWalls, [DistrictCard("wofEastDistrict"), ZoneFilterCard("eastDistrictWallZone"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    //East District STRUCTURES//
    DECK_PutOnBottomOf(BuildableCard("goldMine", 2), eastPrimaryStructures)
    const eastBarracks0 = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(eastBarracks0, [TagCard("wofEastBastion"), TagCard("obstacleBarracksFighter")])
    DECK_PutOnBottomOf(eastBarracks0, eastPrimaryStructures)
    const eastRallyPoint = BuildableCard("attackRallyPoint", 1)
    DECK_MultiplyByMultipleRules(eastRallyPoint, [DistrictCard("wofEastDistrict"), TagCard("finalDefendRallyEast"), TagCard("wofEastBastion")])
    DECK_PutOnBottomOf(eastRallyPoint, eastNoTag)
    DECK_MultiplyByMultipleRules(eastNoTag, [DistrictCard("wofEastDistrict"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])

    //add secondary objective structure
    const eastDraw = DECK_DrawFromTop(secondaryObjectiveShuffleDeck, 1)
    DECK_PutOnBottomOf(eastDraw, eastPrimaryStructures)

    DECK_MultiplyByMultipleRules(eastPrimaryStructures, [DistrictCard("wofEastDistrict"), ZoneFilterCard("districtMid"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])

    DECK_PutOnBottomOf(BuildableCard("pigThrowerTower2", 1), eastSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), eastSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 1), eastSecondaryStructures)
    DECK_MultiplyByMultipleRules(eastSecondaryStructures, [DistrictCard("wofEastDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("placeRandomly"), TagCard("wofEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    _DeckShuffleWOF(eastSecondaryStructures)

    DECK_PutOnBottomOf(BuildableCard("pigThrowerTower", 1), eastAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), eastAdditionalStructures)
    const eastBarracks1 = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(eastBarracks1, [TagCard("wofEastBastion"), TagCard("obstacleBarracksFighter")])
    DECK_PutOnBottomOf(eastBarracks1, eastAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 2), eastAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 1), eastAdditionalStructures)
    DECK_MultiplyByMultipleRules(eastAdditionalStructures, [DistrictCard("wofEastDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("placeCloseToWalls"), TagCard("wofEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    _DeckShuffleWOF(eastAdditionalStructures)

    //////South-East District//////
    const southEastDistrict = DistrictCard("wofSouthEastDistrict")
    DECK_MultiplyByMultipleRules(southEastDistrict, [PlacementPreferenceCard("placeInDirectionSouthEastWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const southEastCenterZone = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(southEastCenterZone, [DistrictCard("wofSouthEastDistrict"), ZoneTagCard("southEastPathZone"), ZoneTagCard("districtCenter"), PlacementPreferenceCard("clearResourcesInZone")])
    const southEastMidZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(southEastMidZones, [DistrictCard("wofSouthEastDistrict"), ZoneTagCard("southEastPathZone"), ZoneTagCard("districtMid"), PlacementPreferenceCard("clearResourcesInZone")])
    const southEastFarZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(southEastFarZones, [DistrictCard("wofSouthEastDistrict"), ZoneTagCard("southEastPathZone"), ZoneTagCard("districtFar"), PlacementPreferenceCard("clearResourcesInZone")])

    //Bone Walls
    const southEastCentralBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(southEastCentralBoneWalls, [DistrictCard("wofSouthEastDistrict"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])
    const southEastMidBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(southEastMidBoneWalls, [DistrictCard("wofSouthEastDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])
    const southEastOuterBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(southEastOuterBoneWalls, [DistrictCard("wofSouthEastDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])

    //South-East District STRUCTURES//
    const southEastDE = BuildableCard("pigThrowerTower", 1)
    DECK_MultiplyByMultipleRules(southEastDE, [DistrictCard("wofSouthEastDistrict"), TagCard("peppaPyroDETag"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofSouthEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    DECK_PutOnBottomOf(BuildableCard("goldMine", 2), southEastPrimaryStructures)
    const southEastBarracks0 = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(southEastBarracks0, [TagCard("wofSouthEastBastion"), TagCard("obstacleBarracksFighter")])
    DECK_PutOnBottomOf(southEastBarracks0, southEastPrimaryStructures)
    const southEastRallyPoint = BuildableCard("defendRallyPoint", 1)
    DECK_MultiplyByMultipleRules(southEastRallyPoint, [DistrictCard("wofSouthEastDistrict"), TagCard("finalDefendRallySouthEast"), TagCard("wofSouthEastBastion")])
    DECK_PutOnBottomOf(southEastRallyPoint, southEastNoTag)
    DECK_MultiplyByMultipleRules(southEastNoTag, [DistrictCard("wofSouthEastDistrict"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    DECK_MultiplyByMultipleRules(southEastPrimaryStructures, [DistrictCard("wofSouthEastDistrict"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofSouthEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])

    DECK_PutOnBottomOf(BuildableCard("piglinShieldTower", 1), southEastSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), southEastSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 1), southEastSecondaryStructures)
    const southEastBarracks1 = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(southEastBarracks1, [TagCard("wofSouthEastBastion"), TagCard("obstacleBarracksFighter")])
    DECK_PutOnBottomOf(southEastBarracks1, southEastSecondaryStructures)
    DECK_MultiplyByMultipleRules(southEastSecondaryStructures, [DistrictCard("wofSouthEastDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("placeRandomly"), TagCard("wofSouthEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    _DeckShuffleWOF(southEastSecondaryStructures)

    DECK_PutOnBottomOf(BuildableCard("goldMine", 1), southEastAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), southEastAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 1), southEastAdditionalStructures)
    const southEastBarracks2 = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(southEastBarracks2, [TagCard("wofSouthEastBastion"), TagCard("obstacleBarracksFighter")])
    DECK_PutOnBottomOf(southEastBarracks2, southEastAdditionalStructures)
    DECK_MultiplyByMultipleRules(southEastAdditionalStructures, [DistrictCard("wofSouthEastDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeCloseToWalls"), TagCard("wofSouthEastBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    _DeckShuffleWOF(southEastAdditionalStructures)

    //////South District//////
    const southDistrict = DistrictCard("wofSouthDistrict")
    DECK_MultiplyByMultipleRules(southDistrict, [PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const southCenterZone = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(southCenterZone, [DistrictCard("wofSouthDistrict"), ZoneTagCard("southPathZone"), ZoneTagCard("districtCenter"), ZoneTagCard("districtMid"), ZoneTagCard("southOuterWallZone"), ZoneTagCard("southInnerWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    const southMidZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(southMidZones, [DistrictCard("wofSouthDistrict"), ZoneTagCard("southPathZone"), ZoneTagCard("districtMid"), ZoneTagCard("southOuterWallZone"), ZoneTagCard("southInnerWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    const southFarZones = ZonesCard("addZone", 16)
    DECK_MultiplyByMultipleRules(southFarZones, [DistrictCard("wofSouthDistrict"), PlacementPreferenceCard("closeToDistrictStart"), ZoneTagCard("southPathZone"), ZoneTagCard("districtFar"), ZoneTagCard("southOuterWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    //////South District WALLS//////
    const southInnerWalls = WallsCard("wofWallsDefend")
    DECK_MultiplyByMultipleRules(southInnerWalls, [DistrictCard("wofSouthDistrict"), ZoneFilterCard("southInnerWallZone"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    const southOuterWalls = WallsCard("wofWallsDefend")
    DECK_MultiplyByMultipleRules(southOuterWalls, [DistrictCard("wofSouthDistrict"), ZoneFilterCard("southOuterWallZone"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])

    //////South District STRUCTURES//////
    const southRallyPoint = BuildableCard("obstacleRallypoint", 1)
    DECK_MultiplyByMultipleRules(southRallyPoint, [DistrictCard("wofSouthDistrict"), TagCard("finalDefendRallySouth"), TagCard("wofSouthBastion")])
    DECK_PutOnBottomOf(southRallyPoint, southNoTag)
    DECK_MultiplyByMultipleRules(southNoTag, [DistrictCard("wofSouthDistrict"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])

    //add secondary objective structure
    const southDraw = DECK_DrawFromTop(secondaryObjectiveShuffleDeck, 1)
    DECK_PutOnBottomOf(southDraw, southPrimaryStructures)

    DECK_MultiplyByMultipleRules(southPrimaryStructures, [DistrictCard("wofSouthDistrict"), ZoneFilterCard("districtCenter"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofSouthBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])

    DECK_PutOnBottomOf(BuildableCard("piglinTower", 2), southSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 3), southSecondaryStructures)
    DECK_MultiplyByMultipleRules(southSecondaryStructures, [DistrictCard("wofSouthDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("placeRandomly"), TagCard("wofSouthBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    _DeckShuffleWOF(southSecondaryStructures)

    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), southAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 2), southAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("piglinKnockbackTower", 1), southAdditionalStructures)
    const southBarracks0 = BuildableCard("addSiegerBarracks", 1)
    DECK_MultiplyByMultipleRules(southBarracks0, [TagCard("wofSouthBastion"), TagCard("defendBarracksSieger")])
    DECK_PutOnBottomOf(southBarracks0, southAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 1), southAdditionalStructures)
    DECK_MultiplyByMultipleRules(southAdditionalStructures, [DistrictCard("wofSouthDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("placeCloseToWalls"), TagCard("wofSouthBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    _DeckShuffleWOF(southAdditionalStructures)

    //////South-West District//////
    const southWestDistrict = DistrictCard("wofSouthWestDistrict")
    DECK_MultiplyByMultipleRules(southWestDistrict, [PlacementPreferenceCard("placeInDirectionSouthWestWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const southWestCenterZone = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(southWestCenterZone, [DistrictCard("wofSouthWestDistrict"), ZoneTagCard("southWestPathZone"), ZoneTagCard("districtCenter"), PlacementPreferenceCard("clearResourcesInZone")])
    const southWestMidZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(southWestMidZones, [DistrictCard("wofSouthWestDistrict"), ZoneTagCard("southWestPathZone"), ZoneTagCard("districtMid"), PlacementPreferenceCard("clearResourcesInZone")])
    const southWestFarZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(southWestFarZones, [DistrictCard("wofSouthWestDistrict"), ZoneTagCard("southWestPathZone"), ZoneTagCard("districtFar"), PlacementPreferenceCard("clearResourcesInZone")])

    //Bone Walls
    const southWestCentralBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(southWestCentralBoneWalls, [DistrictCard("wofSouthWestDistrict"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])
    const southWestMidBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(southWestMidBoneWalls, [DistrictCard("wofSouthWestDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])
    const southWestOuterBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(southWestOuterBoneWalls, [DistrictCard("wofSouthWestDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])

    //South-West District STRUCTURES
    const southWestDE = BuildableCard("lavaSprayerTower", 1)
    DECK_MultiplyByMultipleRules(southWestDE, [DistrictCard("wofSouthWestDistrict"), TagCard("magmaFoundationDETag"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofSouthWestBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    const southWestBarracks0 = BuildableCard("addSiegerBarracks", 1)
    DECK_MultiplyByMultipleRules(southWestBarracks0, [TagCard("wofSouthWestBastion"), TagCard("defendBarracksSieger")])
    DECK_PutOnBottomOf(southWestBarracks0, southWestPrimaryStructures)
    const southWestRallyPoint = BuildableCard("attackRallyPoint", 1)
    DECK_MultiplyByMultipleRules(southWestRallyPoint, [DistrictCard("wofSouthWestDistrict"), TagCard("finalDefendRallySouthWest"), TagCard("wofSouthWestBastion")])
    DECK_PutOnBottomOf(southWestRallyPoint, southWestNoTag)
    DECK_MultiplyByMultipleRules(southWestNoTag, [DistrictCard("wofSouthWestDistrict"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_MultiplyByMultipleRules(southWestPrimaryStructures, [DistrictCard("wofSouthWestDistrict"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofSouthWestBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])

    DECK_PutOnBottomOf(BuildableCard("piglinShieldTower", 1), southWestSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), southWestSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 1), southWestSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 1), southWestSecondaryStructures)
    DECK_MultiplyByMultipleRules(southWestSecondaryStructures, [DistrictCard("wofSouthWestDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("placeRandomly"), TagCard("wofSouthWestBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    _DeckShuffleWOF(southWestSecondaryStructures)

    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), southWestAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 2), southWestAdditionalStructures)
    const southWestBarracks1 = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(southWestBarracks1, [TagCard("wofSouthWestBastion"), TagCard("defendBarracksFighter")])
    DECK_PutOnBottomOf(southWestBarracks1, southWestAdditionalStructures)
    DECK_MultiplyByMultipleRules(southWestAdditionalStructures, [DistrictCard("wofSouthWestDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeCloseToWalls"), TagCard("wofSouthWestBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    _DeckShuffleWOF(southWestAdditionalStructures)

    //////West District//////
    const westDistrict = DistrictCard("wofWestDistrict")
    DECK_MultiplyByMultipleRules(westDistrict, [PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const westCenterZone = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(westCenterZone, [DistrictCard("wofWestDistrict"), ZoneTagCard("westPathZone"), ZoneTagCard("districtCenter"), ZoneTagCard("westDistrictWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    const westMidZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(westMidZones, [DistrictCard("wofWestDistrict"), ZoneFilterCard("westPathZone"), ZoneTagCard("districtMid"), ZoneTagCard("westDistrictWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    const westFarZones = ZonesCard("addZone", 16)
    DECK_MultiplyByMultipleRules(westFarZones, [DistrictCard("wofWestDistrict"), PlacementPreferenceCard("closeToDistrictStart"), ZoneFilterCard("westPathZone"), ZoneTagCard("districtFar"), ZoneTagCard("westDistrictWallZone"), PlacementPreferenceCard("clearResourcesInZone")])
    //////West District WALLS//////
    const westDistrictWalls = WallsCard("wofWallsObstacle")
    DECK_MultiplyByMultipleRules(westDistrictWalls, [DistrictCard("wofWestDistrict"), ZoneFilterCard("westDistrictWallZone"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    //////West District STRUCTURES//////
    //Randomize which buff structure populates in this primary structure positions
    DECK_PutOnBottomOf(BuildableCard("goldMine", 2), westPrimaryStructures)
    const westRallyPoint = BuildableCard("defendRallyPoint", 1)
    DECK_MultiplyByMultipleRules(westRallyPoint, [DistrictCard("wofWestDistrict"), TagCard("finalDefendRallyWest"), TagCard("wofWestBastion")])
    DECK_PutOnBottomOf(westRallyPoint, westNoTag)
    DECK_MultiplyByMultipleRules(westPrimaryStructures, [DistrictCard("wofWestDistrict"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])

    const westDraw = DECK_DrawFromTop(secondaryObjectiveShuffleDeck, 1)
    DECK_PutOnBottomOf(westDraw, westPrimaryStructures)

    DECK_MultiplyByMultipleRules(westPrimaryStructures, [DistrictCard("wofWestDistrict"), ZoneFilterCard("districtMid"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofWestBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])

    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), westSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("piglinKnockbackTower", 1), westSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("pigThrowerTower", 1), westSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower", 1), westSecondaryStructures)
    DECK_MultiplyByMultipleRules(westSecondaryStructures, [DistrictCard("wofWestDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("placeRandomly"), TagCard("wofWestBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    _DeckShuffleWOF(westSecondaryStructures)

    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), westAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 1), westAdditionalStructures)
    const westBarracks0 = BuildableCard("addDisruptorBarracks", 1)
    DECK_MultiplyByMultipleRules(westBarracks0, [TagCard("wofWestBastion"), TagCard("obstacleBarracksDisruptor")])
    DECK_PutOnBottomOf(westBarracks0, westAdditionalStructures)
    const westBarracks1 = BuildableCard("addSiegerBarracks", 1)
    DECK_MultiplyByMultipleRules(westBarracks1, [TagCard("wofWestBastion"), TagCard("obstacleBarracksSieger")])
    DECK_PutOnBottomOf(westBarracks1, westAdditionalStructures)
    const westBarracks2 = BuildableCard("addFighterBarracks", 1)
    DECK_MultiplyByMultipleRules(westBarracks2, [TagCard("wofWestBastion"), TagCard("obstacleBarracksFighter")])
    DECK_PutOnBottomOf(westBarracks2, westAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 3), westAdditionalStructures)
    DECK_MultiplyByMultipleRules(westAdditionalStructures, [DistrictCard("wofWestDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("placeCloseToWalls"), TagCard("wofWestBastion"), TagCard("wofBastionBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    _DeckShuffleWOF(westAdditionalStructures)

    //////North-West District//////
    const northWestDistrict = DistrictCard("wofNorthWestDistrict")
    DECK_MultiplyByMultipleRules(northWestDistrict, [PlacementPreferenceCard("placeInDirectionNorthWestWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    const northWestCenterZone = ZonesCard("addZone", 5)
    DECK_MultiplyByMultipleRules(northWestCenterZone, [DistrictCard("wofNorthWestDistrict"), ZoneTagCard("northWestPathZone"), ZoneTagCard("districtCenter"), PlacementPreferenceCard("clearResourcesInZone")])
    const northWestMidZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(northWestMidZones, [DistrictCard("wofNorthWestDistrict"), ZoneTagCard("northWestPathZone"), ZoneTagCard("districtMid"), PlacementPreferenceCard("clearResourcesInZone")])
    const northWestFarZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(northWestFarZones, [DistrictCard("wofNorthWestDistrict"), ZoneTagCard("northWestPathZone"), ZoneTagCard("districtFar"), PlacementPreferenceCard("clearResourcesInZone")])

    //Bone Walls
    const northWestCentralBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(northWestCentralBoneWalls, [DistrictCard("wofNorthWestDistrict"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])
    const northWestMidBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(northWestMidBoneWalls, [DistrictCard("wofNorthWestDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])
    const northWestOuterBoneWalls = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(northWestOuterBoneWalls, [DistrictCard("wofNorthWestDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("wofWallCircleSineWave"), PlacementPreferenceCard("withScoreThresholdPoint2")])

    //District NW STRUCTURES
    const northWestDE = BuildableCard("pigThrowerTower", 1)
    DECK_MultiplyByMultipleRules(northWestDE, [DistrictCard("wofNorthWestDistrict"), TagCard("stinkyBarrelsDETag"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofNorthWestBastion"), TagCard("wofBastionBuilding")])
    const northWestBarracks0 = BuildableCard("addDisruptorBarracks", 1)
    DECK_MultiplyByMultipleRules(northWestBarracks0, [TagCard("wofNorthWestBastion"), TagCard("attackBarracksDisruptor")])
    DECK_PutOnBottomOf(northWestBarracks0, northWestPrimaryStructures)
    DECK_PutOnBottomOf(BuildableCard("goldMine", 1), northWestPrimaryStructures)
    const northWestRallyPoint = BuildableCard("obstacleRallypoint", 1)
    DECK_MultiplyByMultipleRules(northWestRallyPoint, [DistrictCard("wofNorthWestDistrict"), TagCard("finalDefendRallyNorthWest"), TagCard("wofNorthWestBastion")])
    DECK_PutOnBottomOf(northWestRallyPoint, northWestNoTag)
    DECK_MultiplyByMultipleRules(northWestNoTag, [DistrictCard("wofNorthWestDistrict"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofBastionBuilding")])
    DECK_MultiplyByMultipleRules(northWestPrimaryStructures, [DistrictCard("wofNorthWestDistrict"), ZoneFilterCard("districtCenter"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), TagCard("wofNorthWestBastion"), TagCard("wofBastionBuilding")])

    DECK_PutOnBottomOf(BuildableCard("piglinShieldTower", 1), northWestSecondaryStructures)
    const northWestBarracks1 = BuildableCard("addDisruptorBarracks", 1)
    DECK_MultiplyByMultipleRules(northWestBarracks1, [TagCard("wofNorthWestBastion"), TagCard("attackBarracksDisruptor")])
    DECK_PutOnBottomOf(northWestBarracks1, northWestSecondaryStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 2), northWestSecondaryStructures)
    DECK_MultiplyByMultipleRules(northWestSecondaryStructures, [DistrictCard("wofNorthWestDistrict"), ZoneFilterCard("districtMid"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard("placeRandomly"), TagCard("wofNorthWestBastion"), TagCard("wofBastionBuilding")])
    _DeckShuffleWOF(northWestSecondaryStructures)

    DECK_PutOnBottomOf(BuildableCard("piglinTower", 1), northWestAdditionalStructures)
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 1), northWestAdditionalStructures)
    DECK_MultiplyByMultipleRules(northWestAdditionalStructures, [DistrictCard("wofNorthWestDistrict"), ZoneFilterCard("districtFar"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeCloseToWalls"), TagCard("wofNorthWestBastion"), TagCard("wofBastionBuilding")])
    _DeckShuffleWOF(northWestAdditionalStructures)

    ////////////////////////PLAY ALL THE CARDS HERE//////////////////////////
    //zones
    DECK_PutOnBottomOf(centralZone, baseDeck)
    DECK_PutOnBottomOf(centralDeadLayer, baseDeck)
    DECK_PutOnBottomOf(centralInnerLayer1, baseDeck)
    DECK_PutOnBottomOf(centralPathStartLayer, baseDeck)
    DECK_PutOnBottomOf(centralInnerLayer2, baseDeck)
    DECK_PutOnBottomOf(centralOuterLayer, baseDeck)

    DECK_PutOnBottomOf(centerZonesA, baseDeck)
    DECK_PutOnBottomOf(centerZonesB, baseDeck)
    DECK_PutOnBottomOf(centerZonesC, baseDeck)
    //Districts
    //N
    DECK_PutOnBottomOf(northDistrict, baseDeck)
    DECK_PutOnBottomOf(northCenterZone, baseDeck)
    DECK_PutOnBottomOf(northMidZones, baseDeck)
    DECK_PutOnBottomOf(northFarZones, baseDeck)
    //NE
    DECK_PutOnBottomOf(northEastDistrict, baseDeck)
    DECK_PutOnBottomOf(northEastCenterZone, baseDeck)
    DECK_PutOnBottomOf(northEastMidZones, baseDeck)
    DECK_PutOnBottomOf(northEastFarZones, baseDeck)
    //E
    DECK_PutOnBottomOf(eastDistrict, baseDeck)
    DECK_PutOnBottomOf(eastCenterZone, baseDeck)
    DECK_PutOnBottomOf(eastMidZones, baseDeck)
    DECK_PutOnBottomOf(eastFarZones, baseDeck)
    //SE
    DECK_PutOnBottomOf(southEastDistrict, baseDeck)
    DECK_PutOnBottomOf(southEastCenterZone, baseDeck)
    DECK_PutOnBottomOf(southEastMidZones, baseDeck)
    DECK_PutOnBottomOf(southEastFarZones, baseDeck)
    //S
    DECK_PutOnBottomOf(southDistrict, baseDeck)
    DECK_PutOnBottomOf(southCenterZone, baseDeck)
    DECK_PutOnBottomOf(southMidZones, baseDeck)
    DECK_PutOnBottomOf(southFarZones, baseDeck)
    //SW
    DECK_PutOnBottomOf(southWestDistrict, baseDeck)
    DECK_PutOnBottomOf(southWestCenterZone, baseDeck)
    DECK_PutOnBottomOf(southWestMidZones, baseDeck)
    DECK_PutOnBottomOf(southWestFarZones, baseDeck)
    //W
    DECK_PutOnBottomOf(westDistrict, baseDeck)
    DECK_PutOnBottomOf(westCenterZone, baseDeck)
    DECK_PutOnBottomOf(westMidZones, baseDeck)
    DECK_PutOnBottomOf(westFarZones, baseDeck)
    //NW
    DECK_PutOnBottomOf(northWestDistrict, baseDeck)
    DECK_PutOnBottomOf(northWestCenterZone, baseDeck)
    DECK_PutOnBottomOf(northWestMidZones, baseDeck)
    DECK_PutOnBottomOf(northWestFarZones, baseDeck)

    //VINDICATOR SPAWN ZONES
    //Spacer loz
    const outerSpacerLOZ = LayerOfZonesCard("addLayerOfZones", 4)
    DECK_MultiplyByMultipleRules(outerSpacerLOZ, [ZoneTagCard("wofDeadZone")])
    //vindicator spawner loz
    const vindicatorLOZ = LayerOfZonesCard("addLayerOfZones", 4)
    DECK_MultiplyByMultipleRules(vindicatorLOZ, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), ZoneTagCard("wofVindicatorZone")])

    DECK_PutOnBottomOf(outerSpacerLOZ, baseDeck)
    DECK_PutOnBottomOf(vindicatorLOZ, baseDeck)

    //paths
    const northPathStartRules = [ZoneFilterCard("wofPathStartZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneTagCard("enable_debug_logging")]
    const northPathEndRules = [DistrictCard("wofNorthDistrict"), ZoneFilterCard("northPathZone"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("defend_district_path", northPathStartRules, northPathEndRules, baseDeck)

    const southPathStartRules = [ZoneFilterCard("wofPathStartZone"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), ZoneTagCard("enable_debug_logging")]
    const southPathEndRules = [DistrictCard("wofSouthDistrict"), ZoneFilterCard("southPathZone"), PlacementPreferenceCard("closeToDistrictStart")]
    CreatePathRequestOnBottomOf("defend_district_path", southPathStartRules, southPathEndRules, baseDeck)

    const eastPathStartRules = [ZoneFilterCard("wofPathStartZone"), PlacementPreferenceCard("closeToDistrictStart")]
    const eastPathEndRules = [DistrictCard("wofEastDistrict"), ZoneFilterCard("eastPathZone"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")]
    CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRules, eastPathEndRules, baseDeck)

    const westPathStartRules = [ZoneFilterCard("wofPathStartZone"), PlacementPreferenceCard("closeToDistrictStart")]
    const westPathEndRules = [DistrictCard("wofWestDistrict"), ZoneFilterCard("westPathZone"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")]
    CreatePathRequestOnBottomOf("defend_district_path", westPathStartRules, westPathEndRules, baseDeck)

    const northWestPathStartRules = [ZoneFilterCard("wofPathStartZone"), PlacementPreferenceCard("closeToDistrictStart")]
    const northWestPathEndRules = [DistrictCard("wofNorthWestDistrict"), ZoneFilterCard("northWestPathZone"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeInDirectionNorthWestWithWedgeBrush")]
    CreatePathRequestOnBottomOf("defend_district_path", northWestPathStartRules, northWestPathEndRules, baseDeck)

    const northEastPathStartRules = [ZoneFilterCard("wofPathStartZone"), PlacementPreferenceCard("closeToDistrictStart")]
    const northEastPathEndRules = [DistrictCard("wofNorthEastDistrict"), ZoneFilterCard("northEastPathZone"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeInDirectionNorthEastWithWedgeBrush")]
    CreatePathRequestOnBottomOf("defend_district_path", northEastPathStartRules, northEastPathEndRules, baseDeck)

    const southEastPathStartRules = [ZoneFilterCard("wofPathStartZone"), PlacementPreferenceCard("closeToDistrictStart")]
    const southEastPathEndRules = [DistrictCard("wofSouthEastDistrict"), ZoneFilterCard("southEastPathZone"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeInDirectionSouthEastWithWedgeBrush")]
    CreatePathRequestOnBottomOf("defend_district_path", southEastPathStartRules, southEastPathEndRules, baseDeck)

    const southWestPathStartRules = [ZoneFilterCard("wofPathStartZone"), PlacementPreferenceCard("closeToDistrictStart")]
    const southWestPathEndRules = [DistrictCard("wofSouthWestDistrict"), ZoneFilterCard("southWestPathZone"), PlacementPreferenceCard("closeToDistrictStart"), PlacementPreferenceCard("placeInDirectionSouthWestWithWedgeBrush")]
    CreatePathRequestOnBottomOf("defend_district_path", southWestPathStartRules, southWestPathEndRules, baseDeck)

    //walls
    DECK_PutOnBottomOf(innerWalls, baseDeck)

    //District walls
    //DECK_PutOnBottomOf(northInnerWalls, baseDeck)
    DECK_PutOnBottomOf(northOuterWalls, baseDeck)
    DECK_PutOnBottomOf(eastDistrictWalls, baseDeck)
    //DECK_PutOnBottomOf(southInnerWalls, baseDeck)
    DECK_PutOnBottomOf(southOuterWalls, baseDeck)
    DECK_PutOnBottomOf(westDistrictWalls, baseDeck)
    DECK_PutOnBottomOf(northEastCentralBoneWalls, baseDeck)
    //DECK_PutOnBottomOf(northEastMidBoneWalls, baseDeck)
    DECK_PutOnBottomOf(northEastOuterBoneWalls, baseDeck)
    DECK_PutOnBottomOf(southEastCentralBoneWalls, baseDeck)
    //DECK_PutOnBottomOf(southEastMidBoneWalls, baseDeck)
    DECK_PutOnBottomOf(southEastOuterBoneWalls, baseDeck)
    DECK_PutOnBottomOf(southWestCentralBoneWalls, baseDeck)
    //DECK_PutOnBottomOf(southWestMidBoneWalls, baseDeck)
    DECK_PutOnBottomOf(southWestOuterBoneWalls, baseDeck)
    DECK_PutOnBottomOf(northWestCentralBoneWalls, baseDeck)
    //DECK_PutOnBottomOf(northWestMidBoneWalls, baseDeck)
    DECK_PutOnBottomOf(northWestOuterBoneWalls, baseDeck)

    //INNER ZONE A
    const innerZoneAPrimary = BuildableCard("netherSpreader")
    DECK_MultiplyByMultipleRules(innerZoneAPrimary, [ZoneFilterCard("innerZoneA"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush48"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(innerZoneAPrimary, baseDeck)

    const innerZoneASecondary = BuildableCard("netherSpreader")
    DECK_MultiplyByMultipleRules(innerZoneASecondary, [ZoneFilterCard("innerZoneA"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush48"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(innerZoneASecondary, baseDeck)

    const innerSporeFanA = BuildableCard("piglinSporeFan")
    DECK_MultiplyByMultipleRules(innerSporeFanA, [ZoneFilterCard("innerZoneA"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("closeToAnyGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(innerSporeFanA, baseDeck)

    //INNER ZONE B
    const innerZoneBPrimary = BuildableCard("netherSpreader")
    DECK_MultiplyByMultipleRules(innerZoneBPrimary, [ZoneFilterCard("innerZoneA"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush48"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(innerZoneBPrimary, baseDeck)

    const innerZoneBSecondary = BuildableCard("netherSpreader")
    DECK_MultiplyByMultipleRules(innerZoneBSecondary, [ZoneFilterCard("innerZoneA"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush48"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(innerZoneBSecondary, baseDeck)

    const innerSporeFanB = BuildableCard("piglinSporeFan", 2)
    DECK_MultiplyByMultipleRules(innerSporeFanB, [ZoneFilterCard("innerZoneA"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("closeToAnyGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(innerSporeFanB, baseDeck)

    //INNER ZONE C
    const innerZoneCPrimary = BuildableCard("netherSpreader")
    DECK_MultiplyByMultipleRules(innerZoneCPrimary, [ZoneFilterCard("innerZoneA"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush48"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(innerZoneCPrimary, baseDeck)

    const innerZoneCSecondary = BuildableCard("netherSpreader")
    DECK_MultiplyByMultipleRules(innerZoneCSecondary, [ZoneFilterCard("innerZoneA"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush48"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(innerZoneCSecondary, baseDeck)

    const innerSporeFanC = BuildableCard("piglinSporeFan", 2)
    DECK_MultiplyByMultipleRules(innerSporeFanC, [ZoneFilterCard("innerZoneA"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("closeToAnyGate"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(innerSporeFanC, baseDeck)

    //CENTER ZONE A //
    const centerZoneABase = BuildableCard("obstacleRallypoint")
    DECK_MultiplyByMultipleRules(centerZoneABase, [TagCard("finalSiegeRallyCenterA"), ZoneFilterCard("centerZoneA"), PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(centerZoneABase, baseDeck)

    const centerZoneAPrimary = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("pigThrowerTower2", 1), centerZoneAPrimary)
    DECK_MultiplyByMultipleRules(centerZoneAPrimary, [ZoneFilterCard("centerZoneA"), TagCard("magmaFungiDETag"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("closeToWater"), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_ATTACK_HORDE)])
    DECK_PutOnBottomOf(centerZoneAPrimary, baseDeck)

    const centerZoneASecondary = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower", 1), centerZoneASecondary)
    DECK_MultiplyByMultipleRules(centerZoneASecondary, [ZoneFilterCard("centerZoneA"), PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("closeToWater"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(centerZoneASecondary, baseDeck)

    const centerZoneATertiary = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 3), centerZoneATertiary)
    DECK_PutOnBottomOf(BuildableCard("pigThrowerTower2", 1), centerZoneATertiary)
    DECK_MultiplyByMultipleRules(centerZoneATertiary, [ZoneFilterCard("centerZoneA"), PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(centerZoneATertiary, baseDeck)

    //CENTER ZONE B
    const centerZoneBBase = BuildableCard("defendRallyPoint")
    DECK_MultiplyByMultipleRules(centerZoneBBase, [TagCard("finalSiegeRallyCenterB"), ZoneFilterCard("centerZoneB"), PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_ATTACK_HORDE)])
    DECK_PutOnBottomOf(centerZoneBBase, baseDeck)

    const centerZoneBPrimary = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("pigThrowerTower2"), centerZoneBPrimary)
    DECK_MultiplyByMultipleRules(centerZoneBPrimary, [ZoneFilterCard("centerZoneB"), TagCard("sporeShieldDETag"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("closeToWater"), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_ATTACK_HORDE)])
    DECK_PutOnBottomOf(centerZoneBPrimary, baseDeck)

    const centerZoneBSecondary = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower"), centerZoneBSecondary)
    DECK_MultiplyByMultipleRules(centerZoneBSecondary, [ZoneFilterCard("centerZoneB"), PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("closeToWater"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(centerZoneBSecondary, baseDeck)

    const centerZoneBTertiary = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 3), centerZoneBTertiary)
    DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower", 1), centerZoneBTertiary)
    DECK_MultiplyByMultipleRules(centerZoneBTertiary, [ZoneFilterCard("centerZoneB"), PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(centerZoneBTertiary, baseDeck)

    //CENTER ZONE C
    const centerZoneCBase = BuildableCard("attackRallyPoint")
    DECK_MultiplyByMultipleRules(centerZoneCBase, [TagCard("finalSiegeRallyCenterC"), ZoneFilterCard("centerZoneC"), PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    DECK_PutOnBottomOf(centerZoneCBase, baseDeck)

    const centerZoneCPrimary = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower"), centerZoneCPrimary)
    DECK_MultiplyByMultipleRules(centerZoneCPrimary, [ZoneFilterCard("centerZoneC"), TagCard("magmaShieldDETag"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("closeToWater"), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE)])
    DECK_PutOnBottomOf(centerZoneCPrimary, baseDeck)

    const centerZoneCSecondary = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("pigThrowerTower2"), centerZoneCSecondary)
    DECK_MultiplyByMultipleRules(centerZoneCSecondary, [ZoneFilterCard("centerZoneC"), PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("closeToWater"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_ATTACK_HORDE)])
    DECK_PutOnBottomOf(centerZoneCSecondary, baseDeck)

    const centerZoneCTertiary = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("netherSpreader", 3), centerZoneCTertiary)
    DECK_PutOnBottomOf(BuildableCard("lavaSprayerTower", 1), centerZoneCTertiary)
    DECK_MultiplyByMultipleRules(centerZoneCTertiary, [ZoneFilterCard("centerZoneC"), PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), TagCard("wofRingBuilding"), AppearanceOverrideCard(BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE)])
    DECK_PutOnBottomOf(centerZoneCTertiary, baseDeck)

    /////////////////////////DISTRICT BUILDINGS////////////////////////////

    //N
    DECK_PutOnBottomOf(northPrimaryStructures, baseDeck)
    DECK_PutOnBottomOf(northNoTag, baseDeck)
    DECK_PutOnBottomOf(northSecondaryStructures, baseDeck)
    DECK_PutOnBottomOf(northAdditionalStructures, baseDeck)
    //NE
    DECK_PutOnBottomOf(northEastDE, baseDeck)
    DECK_PutOnBottomOf(northEastPrimaryStructures, baseDeck)
    DECK_PutOnBottomOf(northEastNoTag, baseDeck)
    DECK_PutOnBottomOf(northEastSecondaryStructures, baseDeck)
    DECK_PutOnBottomOf(northEastAdditionalStructures, baseDeck)
    //E
    DECK_PutOnBottomOf(eastPrimaryStructures, baseDeck)
    DECK_PutOnBottomOf(eastNoTag, baseDeck)
    DECK_PutOnBottomOf(eastSecondaryStructures, baseDeck)
    DECK_PutOnBottomOf(eastAdditionalStructures, baseDeck)
    //SE
    DECK_PutOnBottomOf(southEastDE, baseDeck)
    DECK_PutOnBottomOf(southEastPrimaryStructures, baseDeck)
    DECK_PutOnBottomOf(southEastNoTag, baseDeck)
    DECK_PutOnBottomOf(southEastSecondaryStructures, baseDeck)
    DECK_PutOnBottomOf(southEastAdditionalStructures, baseDeck)
    //S
    DECK_PutOnBottomOf(southPrimaryStructures, baseDeck)
    DECK_PutOnBottomOf(southNoTag, baseDeck)
    DECK_PutOnBottomOf(southSecondaryStructures, baseDeck)
    DECK_PutOnBottomOf(southAdditionalStructures, baseDeck)
    //SW
    DECK_PutOnBottomOf(southWestDE, baseDeck)
    DECK_PutOnBottomOf(southWestPrimaryStructures, baseDeck)
    DECK_PutOnBottomOf(southWestNoTag, baseDeck)
    DECK_PutOnBottomOf(southWestSecondaryStructures, baseDeck)
    DECK_PutOnBottomOf(southWestAdditionalStructures, baseDeck)
    //W
    DECK_PutOnBottomOf(westPrimaryStructures, baseDeck)
    DECK_PutOnBottomOf(westNoTag, baseDeck)
    DECK_PutOnBottomOf(westSecondaryStructures, baseDeck)
    DECK_PutOnBottomOf(westAdditionalStructures, baseDeck)
    //NW
    DECK_PutOnBottomOf(northWestDE, baseDeck)
    DECK_PutOnBottomOf(northWestPrimaryStructures, baseDeck)
    DECK_PutOnBottomOf(northWestNoTag, baseDeck)
    DECK_PutOnBottomOf(northWestSecondaryStructures, baseDeck)
    DECK_PutOnBottomOf(northWestAdditionalStructures, baseDeck)

    //VINDICATOR SPAWNER PLACEMENT
    const vindicatorNorth = BuildableCard("wofVindicatorSpawner", 4)
    DECK_MultiplyByMultipleRules(vindicatorNorth, [ZoneFilterCard("wofVindicatorZone"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthWithWedgeBrush"), PlacementPreferenceCard("placeFarFromVindicatorBarracks")])

    const vindicatorEast = BuildableCard("wofVindicatorSpawner", 4)
    DECK_MultiplyByMultipleRules(vindicatorEast, [ZoneFilterCard("wofVindicatorZone"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithWedgeBrush"), PlacementPreferenceCard("placeFarFromVindicatorBarracks")])

    const vindicatorSouth = BuildableCard("wofVindicatorSpawner", 4)
    DECK_MultiplyByMultipleRules(vindicatorSouth, [ZoneFilterCard("wofVindicatorZone"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithWedgeBrush"), PlacementPreferenceCard("placeFarFromVindicatorBarracks")])

    const vindicatorWest = BuildableCard("wofVindicatorSpawner", 4)
    DECK_MultiplyByMultipleRules(vindicatorWest, [ZoneFilterCard("wofVindicatorZone"), PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithWedgeBrush"), PlacementPreferenceCard("placeFarFromVindicatorBarracks")])

    DECK_PutOnBottomOf(vindicatorNorth, baseDeck)
    DECK_PutOnBottomOf(vindicatorEast, baseDeck)
    DECK_PutOnBottomOf(vindicatorSouth, baseDeck)
    DECK_PutOnBottomOf(vindicatorWest, baseDeck)

    return baseDeck
}

SNIPPET_CinematicFinished("cf_under_siege", (payload) => {
    const villageId = payload.ownerVillageId
    PlayPresentationActionToAll(wofVal.VO.wofEscalation1)

    //turn the music emitter on here
    SetAudioPhaseForBase(villageId, wofVal.audioPerPhaseArray[1], "finalBoss")

    _AssignHomeBasesToFinalBaseAI(villageId)

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_boss_inner_wall_movement",
        ownerVillageId: villageId,
        includeTags: ["piglin", "buildable"],
        villageId: villageId,
        despawned: false
    })

    Once()
})

SNIPPET_CinematicEvent("ce_spawn_vindicators_by_player", () => {
    //Filter through all players, we want ones who are close to the DBB
    //const piglinBase = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_WOF)
    //const villageId = QUERY_GetVillageIDFromEntity(piglinBase)
    const wellOfFate = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
    const playersCloseToDBB = FILTER_ByDistance(GetAllPlayers(), wellOfFate, 550)

    if (HasEntities(playersCloseToDBB)) {
        //Spawn mobs for all players within range of DBB
        SpawnEntitiesAt(playersCloseToDBB, "badger:mob_illager_axe", 12, TEAM_BLUE)
    } else {
    }
})

SNIPPET_VillageFinishedBuilding("vfb_wof_base_setup", (villageId, _payload) => {
    //spawn the bastion wmap icon locators for bone wall bastions
    const northMapIconLocation = RandomEntity(QUERY_GetEntitiesWithTagFilter(["wofNorthBastion"], ["piglin_rallying_point"]))
    const eastMapIconLocation = RandomEntity(QUERY_GetEntitiesWithTagFilter(["wofEastBastion"], ["piglin_rallying_point"]))
    const southMapIconLocation = RandomEntity(QUERY_GetEntitiesWithTagFilter(["wofSouthBastion"], ["piglin_rallying_point"]))
    const westMapIconLocation = RandomEntity(QUERY_GetEntitiesWithTagFilter(["wofWestBastion"], ["piglin_rallying_point"]))
    OUTPUT_AddTag(SpawnEntitiesAt(northMapIconLocation, "badger:wmap_piglin_wof_tower_attack_locator", 1, TEAM_ORANGE, villageId), "northLocatorTag")
    OUTPUT_AddTag(SpawnEntitiesAt(eastMapIconLocation, "badger:wmap_piglin_wof_tower_attack_locator", 1, TEAM_ORANGE, villageId), "eastLocatorTag")
    OUTPUT_AddTag(SpawnEntitiesAt(southMapIconLocation, "badger:wmap_piglin_wof_tower_attack_locator", 1, TEAM_ORANGE, villageId), "southLocatorTag")
    OUTPUT_AddTag(SpawnEntitiesAt(westMapIconLocation, "badger:wmap_piglin_wof_tower_attack_locator", 1, TEAM_ORANGE, villageId), "westLocatorTag")
    //spawn the bastion wmap icon locators for base wall bastions
    const northEastMapIconLocation = RandomEntity(QUERY_GetEntitiesWithTagFilter(["wofNorthEastBastion"], ["piglin_rallying_point"]))
    const southEastMapIconLocation = RandomEntity(QUERY_GetEntitiesWithTagFilter(["wofSouthEastBastion"], ["piglin_rallying_point"]))
    const southWestMapIconLocation = RandomEntity(QUERY_GetEntitiesWithTagFilter(["wofSouthWestBastion"], ["piglin_rallying_point"]))
    const northWestMapIconLocation = RandomEntity(QUERY_GetEntitiesWithTagFilter(["wofNorthWestBastion"], ["piglin_rallying_point"]))
    OUTPUT_AddTag(SpawnEntitiesAt(northEastMapIconLocation, "badger:wmap_piglin_wof_tower_locator", 1, TEAM_ORANGE, villageId), "northEastLocatorTag")
    OUTPUT_AddTag(SpawnEntitiesAt(southEastMapIconLocation, "badger:wmap_piglin_wof_tower_locator", 1, TEAM_ORANGE, villageId), "southEastLocatorTag")
    OUTPUT_AddTag(SpawnEntitiesAt(southWestMapIconLocation, "badger:wmap_piglin_wof_tower_locator", 1, TEAM_ORANGE, villageId), "southWestLocatorTag")
    OUTPUT_AddTag(SpawnEntitiesAt(northWestMapIconLocation, "badger:wmap_piglin_wof_tower_locator", 1, TEAM_ORANGE, villageId), "northWestLocatorTag")

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_north_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofNorthBastion"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_east_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofEastBastion"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_south_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofSouthBastion"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_west_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofWestBastion"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_north_east_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofNorthEastBastion"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_south_east_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofSouthEastBastion"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_south_west_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofSouthWestBastion"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_north_west_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofNorthWestBastion"],
        villageId: villageId,
        despawned: false
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_wof_inner_walls_destroyed",
        ownerVillageId: villageId,
        includeTags: ["innerWallsPhase4Tag"],
        villageId: villageId,
        despawned: false
    })

    SetupPiglinBase(villageId, wofVal.baseSetup)

    const wofStructure = RandomEntity(QUERY_GetEntitiesWithTags(["zoner_xp_well_of_fate"]))
    OUTPUT_SetBehavior(wofStructure, "badger:behavior_hub_healing_disabled") // disable wof healing
})

SNIPPET_NonPopCappedEntityDestroyed("ed_wof_boss_inner_wall_movement", (destroyedEntity, payload) => {
    const villageId = payload.ownerVillageId

    if (DoIfNotOnCooldown(120, wofVal.global.canWOFBossMove, villageId)) {
        const boss = QUERY_GetEntitiesWithTags(["boss"])
        OUTPUT_MoveAttackPosition(boss, destroyedEntity, 15, CALLBACK_NONE)
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_wof_north_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId

    if (DeltaVillageVariable(villageId, wofVal.global.nBastionBC, -1) <= 0) {
        const locatorEntity = QUERY_GetEntitiesWithTagFilter(["northLocatorTag"], [])
        OUTPUT_MapSetKeyValue(locatorEntity, "is_destroyed", "true")
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_wof_east_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId

    if (DeltaVillageVariable(villageId, wofVal.global.eBastionBC, -1) <= 0) {
        const locatorEntity = QUERY_GetEntitiesWithTagFilter(["eastLocatorTag"], [])
        OUTPUT_MapSetKeyValue(locatorEntity, "is_destroyed", "true")
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_wof_south_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId

    if (DeltaVillageVariable(villageId, wofVal.global.sBastionBC, -1) <= 0) {
        const locatorEntity = QUERY_GetEntitiesWithTagFilter(["southLocatorTag"], [])
        OUTPUT_MapSetKeyValue(locatorEntity, "is_destroyed", "true")
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_wof_west_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId

    if (DeltaVillageVariable(villageId, wofVal.global.wBastionBC, -1) <= 0) {
        const locatorEntity = QUERY_GetEntitiesWithTagFilter(["westLocatorTag"], [])
        OUTPUT_MapSetKeyValue(locatorEntity, "is_destroyed", "true")
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_wof_north_east_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId

    if (DeltaVillageVariable(villageId, wofVal.global.neBastionBC, -1) <= 0) {
        const locatorEntity = QUERY_GetEntitiesWithTagFilter(["northEastLocatorTag"], [])
        OUTPUT_MapSetKeyValue(locatorEntity, "is_destroyed", "true")
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_wof_south_east_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId

    if (DeltaVillageVariable(villageId, wofVal.global.seBastionBC, -1) <= 0) {
        const locatorEntity = QUERY_GetEntitiesWithTagFilter(["southEastLocatorTag"], [])
        OUTPUT_MapSetKeyValue(locatorEntity, "is_destroyed", "true")
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_wof_south_west_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId

    if (DeltaVillageVariable(villageId, wofVal.global.swBastionBC, -1) <= 0) {
        const locatorEntity = QUERY_GetEntitiesWithTagFilter(["southWestLocatorTag"], [])
        OUTPUT_MapSetKeyValue(locatorEntity, "is_destroyed", "true")
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_wof_north_west_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId

    if (DeltaVillageVariable(villageId, wofVal.global.nwBastionBC, -1) <= 0) {
        const locatorEntity = QUERY_GetEntitiesWithTagFilter(["northWestLocatorTag"], [])
        OUTPUT_MapSetKeyValue(locatorEntity, "is_destroyed", "true")
    }
})

SNIPPET_VillageGenerated("vg_wof", (villageId) => {
    // Tie together WoF base and the WoF village so that one forces another to unsuspend
    // This is done to make sure that we can operate on entities of both safely

    //OBJECTIVE TEXT HERE

    OUTPUT_SetVillageSuspensionPair(GetVillageEntityFromID(villageId), GetVillageEntityFromFaction(WELL_OF_FATE))

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    InitializeBaseAIs(villageId, wofVal.aiConfig)

    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_wof_base_setup",
        ownerVillageId: villageId,
        villageId: villageId
    })

    let baseDeck = DECK_Empty()

    if (baseSize === BASE_SIZE_PIGLIN_WOF) {
        baseDeck = _MakeWOFBase(villageId)
    }

    //spawn the FAKE final boss - looping fountain whack
    //LISTEN FOR BOSS SPAWNED
    LISTENFOR_EntitySpawned({
        snippet: "es_wof_boss_spawned",
        ownerVillageId: villageId,
        includeTags: ["finalBoss", "piglin"],
        payloadInt: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_wof_north_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofNorthBastion"],
        excludeTags: ["piglin_rallying_point"],
        payloadInt: villageId,
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_wof_north_east_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofNorthEastBastion"],
        excludeTags: ["piglin_rallying_point"],
        payloadInt: villageId,
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_wof_east_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofEastBastion"],
        excludeTags: ["piglin_rallying_point"],
        payloadInt: villageId,
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_wof_south_east_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofSouthEastBastion"],
        excludeTags: ["piglin_rallying_point"],
        payloadInt: villageId,
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_wof_south_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofSouthBastion"],
        excludeTags: ["piglin_rallying_point"],
        payloadInt: villageId,
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_wof_south_west_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofSouthWestBastion"],
        excludeTags: ["piglin_rallying_point"],
        payloadInt: villageId,
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_wof_west_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofWestBastion"],
        excludeTags: ["piglin_rallying_point"],
        payloadInt: villageId,
        villageId: villageId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_wof_north_west_bastion_structures",
        ownerVillageId: villageId,
        includeTags: ["wofNorthWestBastion"],
        excludeTags: ["piglin_rallying_point"],
        payloadInt: villageId,
        villageId: villageId
    })

    //---- Barracks AI listeners
    LISTENFOR_BuildingComplete({
        snippet: "bc_barracks_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["barracks", "wofNorthBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofNorthBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_barracks_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["barracks", "wofNorthEastBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofNorthEastBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_barracks_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["barracks", "wofNorthWestBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofNorthWestBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_barracks_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["barracks", "wofSouthBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofSouthBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_barracks_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["barracks", "wofSouthEastBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofSouthEastBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_barracks_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["barracks", "wofSouthWestBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofSouthWestBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_barracks_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["barracks", "wofWestBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofWestBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_barracks_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["barracks", "wofEastBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofEastBastion"
    })
    //--- Bastion AI Rally points
    LISTENFOR_BuildingComplete({
        snippet: "bc_final_rally_point_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["piglin_rallying_point", "wofNorthBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofNorthBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_final_rally_point_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["piglin_rallying_point", "wofNorthEastBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofNorthEastBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_final_rally_point_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["piglin_rallying_point", "wofNorthWestBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofNorthWestBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_final_rally_point_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["piglin_rallying_point", "wofSouthBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofSouthBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_final_rally_point_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["piglin_rallying_point", "wofSouthEastBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofSouthEastBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_final_rally_point_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["piglin_rallying_point", "wofSouthWestBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofSouthWestBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_final_rally_point_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["piglin_rallying_point", "wofWestBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofWestBastion"
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_final_rally_point_ai_listener",
        ownerVillageId: villageId,
        includeTags: ["piglin_rallying_point", "wofEastBastion"],
        payloadInt: villageId,
        villageId: villageId,
        payloadString: "wofEastBastion"
    })

    /////SET ALL BARRACKS LEVEL TO 0 - JUST IN CASE
    _UpdateEscalationAndUpdateBarracks(villageId, 0)

    OUTPUT_AnnounceInterrupt(ONBOARDING_MESSAGE_PRIORITY)
    OUTPUT_Announce("piglin_base_wof_boss_objective", [])

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
    CreateDiscreteEncountersListeners(villageId, wofDEAmounts)
    SetAudioPhaseForBase(villageId, wofVal.audioPerPhaseArray[0], "finalBoss")
})

const GetAiConfigFinal = (bastionString = "") => {
    if (bastionString !== "" && wofVal.bastionAiConfig[bastionString] !== undefined) {
        return wofVal.bastionAiConfig[bastionString].aiConfig
    } else {
        return wofVal.aiConfig
    }
}

const GetRallyPointConfigFinal = (rallyEntity) => {
    const bastionString = _GetBastionString(rallyEntity)
    return wofVal.bastionRallyPointConfig[bastionString].piglinRallyPoints["finalDefendRally"]
}

const _GetBastionString = (entity) => {
    if (QUERY_HasTags(entity, finalHordeBastions.north)) return finalHordeBastions.north
    if (QUERY_HasTags(entity, finalHordeBastions.south)) return finalHordeBastions.south
    if (QUERY_HasTags(entity, finalHordeBastions.west)) return finalHordeBastions.west
    if (QUERY_HasTags(entity, finalHordeBastions.east)) return finalHordeBastions.east
    if (QUERY_HasTags(entity, finalHordeBastions.northWest)) return finalHordeBastions.northWest
    if (QUERY_HasTags(entity, finalHordeBastions.northEast)) return finalHordeBastions.northEast
    if (QUERY_HasTags(entity, finalHordeBastions.southWest)) return finalHordeBastions.southWest
    if (QUERY_HasTags(entity, finalHordeBastions.southEast)) return finalHordeBastions.southEast
}

SNIPPET_BuildingComplete("bc_barracks_ai_listener", (buildingEntity, payload) => {
    const bastionString = payload.string
    const villageId = payload.ownerVillageId
    const rallyPointConfig = wofVal.bastionRallyPointConfig[bastionString].piglinRallyPoints["finalDefendRally"]
    RecruitSpawnedCompositionFinal(villageId, rallyPointConfig, buildingEntity, bastionString)
})

SNIPPET_BuildingComplete("bc_final_rally_point_ai_listener", (buildingEntity, payload) => {
    const bastionString = payload.string
    const villageId = payload.ownerVillageId
    const aiConfig = wofVal.bastionAiConfig[bastionString].aiConfig
    InitializeBaseAIs(villageId, aiConfig, [], buildingEntity)
    SetVillageVariable(villageId, "updatedRallyPointsTags", 1)
    Once()
})

SNIPPET_BuildingComplete("bc_wof_north_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, wofVal.global.nBastionBC, 1)
})

SNIPPET_BuildingComplete("bc_wof_north_east_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, wofVal.global.neBastionBC, 1)
})

SNIPPET_BuildingComplete("bc_wof_east_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, wofVal.global.eBastionBC, 1)
})

SNIPPET_BuildingComplete("bc_wof_south_east_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, wofVal.global.seBastionBC, 1)
})

SNIPPET_BuildingComplete("bc_wof_south_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, wofVal.global.sBastionBC, 1)
})

SNIPPET_BuildingComplete("bc_wof_south_west_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, wofVal.global.swBastionBC, 1)
})

SNIPPET_BuildingComplete("bc_wof_west_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, wofVal.global.wBastionBC, 1)
})

SNIPPET_BuildingComplete("bc_wof_north_west_bastion_structures", (payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, wofVal.global.nwBastionBC, 1)
})

SNIPPET_VillageGenerated("vg_wof_base_response", (villageId) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const villageEnt = GetVillageEntityFromID(villageId)

    if (baseSize === BASE_SIZE_PIGLIN_WOF) {
        const cineWOFTrigger = SpawnTriggerVolumeWithMultipleTagsets(villageEnt, villageEnt, "badger:spatial_trigger_wof_base_cine", TEAM_ORANGE, villageId, true, TAGSET_PLAYER)
        //used for boss spawns OUTER
        const outerWOFTrigger = SpawnTriggerVolumeWithMultipleTagsets(villageEnt, villageEnt, "badger:spatial_trigger_wof_base_outer", TEAM_ORANGE, villageId, true, TAGSET_PLAYER)
        //used for boss spawns INNER
        const innerWOFTrigger = SpawnTriggerVolumeWithMultipleTagsets(villageEnt, villageEnt, "badger:spatial_trigger_wof_base_inner", TEAM_ORANGE, villageId, true, TAGSET_PLAYER)
        //used for nis boss spawn
        const nisBossWOFTrigger = SpawnTriggerVolumeWithMultipleTagsets(villageEnt, villageEnt, "badger:spatial_trigger_wof_base_nis_boss_summon", TEAM_ORANGE, villageId, true, TAGSET_PLAYER)

        //set up timer for boss existing // spawn unit waves // disable unit waves

        //Audio
        SetupAudioEntityForBase(villageId, wofVal.music)

        LISTENFOR_CinematicEvent({
            snippet: "ce_spawn_vindicators_by_player",
            ownerVillageId: villageId,
            eventName: "wof_spawn_vindicators"
        })
        // SPAWN NIS BOSS
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_nis_boss_summon",
            ownerVillageId: villageId,
            triggerEntity: nisBossWOFTrigger
        })
        // ESCALATION PHASE 1
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_attack_cine_wof",
            ownerVillageId: villageId,
            triggerEntity: cineWOFTrigger
        })
        //THIS IS OUR OUTER TV FOR SPAWNING
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_attack_outer_wof",
            ownerVillageId: villageId,
            triggerEntity: outerWOFTrigger
        })

        LISTENFOR_SpatialPartitionExited({
            snippet: "spex_attack_outer_wof",
            ownerVillageId: villageId,
            triggerEntity: outerWOFTrigger
        })

        // ESCALATION PHASE 2
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_wof_wall_destroyed",
            ownerVillageId: villageId,
            includeTags: ["piglin_wall"],
            villageId: villageId,
            despawned: false
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_wof_wall_destroyed",
            ownerVillageId: villageId,
            includeTags: ["pigGate"],
            villageId: villageId,
            despawned: false
        })

        //THIS IS OUR INNER TV FOR SPAWNING
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_attack_inner_wof",
            ownerVillageId: villageId,
            triggerEntity: innerWOFTrigger
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_wof_key_building",
            ownerVillageId: villageId,
            includeTags: ["pigRangeUp"],
            villageId: villageId,
            despawned: false
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_wof_key_building",
            ownerVillageId: villageId,
            includeTags: ["pigCarpenter"],
            villageId: villageId,
            despawned: false
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_wof_key_building",
            ownerVillageId: villageId,
            includeTags: ["superNetherSpreader"],
            villageId: villageId,
            despawned: false
        })
        //Range extender destroyed
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_piglin_secondary_objective_destroyed",
            ownerVillageId: villageId,
            includeTags: ["pigRangeUp"],
            villageId: villageId,
            despawned: false
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_piglin_secondary_objective_destroyed",
            ownerVillageId: villageId,
            includeTags: ["pigCarpenter"],
            villageId: villageId,
            despawned: false
        })
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_piglin_secondary_objective_destroyed",
            ownerVillageId: villageId,
            includeTags: ["superNetherSpreader"],
            villageId: villageId,
            despawned: false
        })

        //Listen for units getting spawned from pig throwers
        LISTENFOR_EntitySpawned({
            snippet: "es_final_thrower_spawned",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["piglin", "projectile_spawn"]
        })

        //barracks complete listeners
        LISTENFOR_BuildingComplete({
            snippet: "bc_final_disruptor_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_DISRUPTOR],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_final_fighter_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_FIGHTER],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_final_sieger_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_SIEGER],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_vindicator_barracks_built",
            ownerVillageId: villageId,
            includeTags: ["fb_vindicator_spawner"],
            villageId: villageId
        })

        BASE_InitPlayerBuiltStructureResponse(villageId, [
            { snippetName: "snippet_wof_player_built_structure_tier_1", debounceTimer: 120, distanceCheck: 500, includeTags: ["tier1PlayerStructure"] },
            { snippetName: "snippet_wof_player_built_structure_tier_2", debounceTimer: 120, distanceCheck: 500, includeTags: ["tier2PlayerStructure"] },
            { snippetName: "snippet_wof_player_built_structure_tier_3", debounceTimer: 120, distanceCheck: 500, includeTags: ["tier3PlayerStructure"] },
            { snippetName: "snippet_wof_player_built_structure_tier_3", debounceTimer: 120, distanceCheck: 500, includeTags: ["buildable_structure", "trebuchet"] }
        ])

        BASE_InitPiglinStructureDamagedResponse(villageId, [
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_1", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["pigGoldMine"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_1", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["pigSpreader"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_2", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["barracks"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_2", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["pigTower"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_3", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["pigMagmaTower"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_3", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["pigThrowerTower"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_3", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["pigKnockbackTower"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_3", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["pigCarpenter"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_3", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["pigRangeUp"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_tier_3", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["superNetherSpreader"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_wall", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["piglin_wall"] },
            { snippetName: "snippet_wof_piglin_structure_damaged_wall", debounceTimer: 120, healthThreshold: 0.9, includeTags: ["pigGate"] }
        ])

        BASE_InitPiglinStructureDestroyedResponse(villageId, [
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_1", debounceTimer: 120, distanceCheck: 500, includeTags: ["pigGoldMine"] },
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_1", debounceTimer: 120, distanceCheck: 500, includeTags: ["pigSpreader"] },
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_2", debounceTimer: 120, distanceCheck: 500, includeTags: ["barracks"] },
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_2", debounceTimer: 120, distanceCheck: 500, includeTags: ["pigTower"] },
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_3", debounceTimer: 120, distanceCheck: 500, includeTags: ["pigMagmaTower"] },
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_3", debounceTimer: 120, distanceCheck: 500, includeTags: ["pigThrowerTower"] },
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_3", debounceTimer: 120, distanceCheck: 500, includeTags: ["pigKnockbackTower"] },
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_3", debounceTimer: 120, distanceCheck: 500, includeTags: ["pigCarpenter"] },
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_3", debounceTimer: 120, distanceCheck: 500, includeTags: ["pigRangeUp"] },
            { snippetName: "snippet_wof_piglin_structure_destroyed_tier_3", debounceTimer: 120, distanceCheck: 500, includeTags: ["superNetherSpreader"] },
            { snippetName: "snippet_wof_piglin_wall_breach", debounceTimer: 90, distanceCheck: 500, includeTags: ["piglin_wall"] },
            { snippetName: "snippet_wof_piglin_wall_breach", debounceTimer: 90, distanceCheck: 500, includeTags: ["pigGate"] }
        ])
    }
})
SNIPPET_EntitySpawned("es_final_thrower_spawned", (piglinEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinEntity)

    AddEntitiesToNearestControlGroup(villageId, piglinEntity, ["aiControllerRallyPoint"])
})

//Player Structure Response
BASE_DeclarePlayerStructureBuiltResponseHandler("snippet_wof_player_built_structure_tier_1", (_villageId, _structure) => {
    //tier 1 player structure built
    _playWOFTargetStinger()
})
BASE_DeclarePlayerStructureBuiltResponseHandler("snippet_wof_player_built_structure_tier_2", (_villageId, _structure) => {
    //tier 2 player structure built
    _playWOFTargetStinger()
})
BASE_DeclarePlayerStructureBuiltResponseHandler("snippet_wof_player_built_structure_tier_3", (_villageId, _structure) => {
    //tier 3 player structure built
    _playWOFTargetStinger()
})

//Piglin Structure Damaged Response
BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_wof_piglin_structure_damaged_tier_1", (_villageId, _structure) => {
    _playWOFAttackStinger()
})
BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_wof_piglin_structure_damaged_tier_2", (_villageId, _structure) => {
    _playWOFAttackStinger()
})
BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_wof_piglin_structure_damaged_tier_3", (_villageId, _structure) => {
    _playWOFAttackStinger()
})
BASE_DeclarePiglinStructureDamagedResponseHandler("snippet_wof_piglin_structure_damaged_wall", (_villageId, _structure) => {
    _playWOFAttackStinger()
})

//piglin structure destroyed response
BASE_DeclarePiglinStructureDestroyedResponseHandler("snippet_wof_piglin_structure_destroyed_tier_1", (_villageId, _structure) => {})
BASE_DeclarePiglinStructureDestroyedResponseHandler("snippet_wof_piglin_structure_destroyed_tier_2", (_villageId, _structure) => {})
BASE_DeclarePiglinStructureDestroyedResponseHandler("snippet_wof_piglin_structure_destroyed_tier_3", (_villageId, _structure) => {})
BASE_DeclarePiglinStructureDestroyedResponseHandler("snippet_wof_piglin_wall_breach", (_villageId, _structure) => {})

//recruit spawner outputs to ai
SNIPPET_BuildingComplete("bc_final_disruptor_barracks", (spawner, _payload) => {
    SetBarracksConfigForVillageVariation(spawner, DisruptorBarracksConfig_WOFFaction)
})
SNIPPET_BuildingComplete("bc_final_fighter_barracks", (spawner, _payload) => {
    SetBarracksConfigForVillageVariation(spawner, FighterBarracksConfig_WOFFaction)
})
SNIPPET_BuildingComplete("bc_final_sieger_barracks", (spawner, _payload) => {
    SetBarracksConfigForVillageVariation(spawner, SiegerBarracksConfig_WOFFaction)
})

SNIPPET_NonPopCappedEntityDestroyed("ed_piglin_secondary_objective_destroyed", (_towerDestroyed, _payload) => {
    const wellOfFate = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DBB, "keepGoing"), wellOfFate)
})

SNIPPET_EntitySpawned("es_wof_boss_spawned", (bossEntity, payload) => {
    const villageId = payload.ownerVillageId

    //Leashing the Boss
    const bossLeash = QUERY_GetEntitiesWithTags(["boss"])
    const wofLeash = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
    if (QUERY_HasLeash(bossLeash)) {
        OUTPUT_RemoveLeash(bossLeash)
        OUTPUT_SetLeashWithReturnWhenNotTargeting(bossLeash, wofLeash, 90, 30)
    } else {
        OUTPUT_SetLeashWithReturnWhenNotTargeting(bossLeash, wofLeash, 90, 30)
    }
    IncrementGlobal(wofVal.global.hasLeashedFinalBoss)
    SpawnEntitiesAt(wofLeash, "badger:piglin_final_boss_arena", 1, TEAM_ORANGE, villageId)
    DeltaVillageVariable(villageId, wofVal.global.bossIsAlive, 1)

    LISTENFOR_CinematicStarted({
        snippet: "cs_final_boss_dead",
        ownerVillageId: villageId,
        cinematicName: "mst09_c09a_final_boss_death",
        payloadInt: villageId
    })

    LISTENFOR_HealthChanged({
        snippet: "bossHog75Health",
        ownerVillageId: villageId,
        entities: bossEntity,
        normalizedThreshold: 0.75,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    LISTENFOR_HealthChanged({
        snippet: "bossHog50Health",
        ownerVillageId: villageId,
        entities: bossEntity,
        normalizedThreshold: 0.5,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    LISTENFOR_HealthChanged({
        snippet: "bossHog25Health",
        ownerVillageId: villageId,
        entities: bossEntity,
        normalizedThreshold: 0.25,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_boss_hog_damaged_scripted_response",
        ownerVillageId: villageId,
        entities: bossEntity,
        normalizedThreshold: 0.99,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    LISTENFOR_CinematicStarted({
        snippet: "cs_epilogue_fmv_started",
        ownerVillageId: villageId,
        cinematicName: "mst10_c10_epilogue_fmv"
    })

    LISTENFOR_CinematicFinished({
        snippet: "cf_final_boss_death",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: "mst09_c09a_final_boss_death"
    })

    // set a timer to debounce
    SetVillageVariable(villageId, wofVal.village.canBossSpawnOuterMobs, 1)

    LISTENFOR_LocalTimer({
        snippet: "lt_wof_reset_outer_boss_mob_spawn",
        ownerVillageId: villageId,
        waitTime: 100,
        payloadInt: villageId
    })
})

SNIPPET_CinematicStarted("cs_final_boss_dead", (payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, wofVal.global.bossIsAlive, -1)

    const allPoiTowers = QUERY_GetEntitiesWithTags(["poi_tower"])
    const allBuiltTowers = FILTER_ByTeam(allPoiTowers, TEAM_BLUE) // all towers in the world are part of the wild team
    const wofvillageEntity = GetVillageEntityFromID(payload.int)
    const towersCloseToWof = FILTER_ByDistance(allBuiltTowers, wofvillageEntity, wofVal.cineValues.despawnTowerOnBossDeathRadius)

    // get counts for each poi tower type
    const poiTower1Count = QUERY_GetEntitiesCount(FILTER_ByTagFilter(towersCloseToWof, ["poi_tower_01"], []))
    const poiTower2Count = QUERY_GetEntitiesCount(FILTER_ByTagFilter(towersCloseToWof, ["poi_tower_02"], []))
    const poiTower4Count = QUERY_GetEntitiesCount(FILTER_ByTagFilter(towersCloseToWof, ["poi_tower_04"], []))

    //despawn all towers
    OUTPUT_DespawnEntities(towersCloseToWof)

    // refund each tower type resource
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "poi_tower_01_resource", poiTower1Count, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "poi_tower_02_resource", poiTower2Count, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "poi_tower_04_resource", poiTower4Count, false)
    Once()
})

SNIPPET_LocalTimer("lt_wof_reset_outer_boss_mob_spawn", (payload) => {
    const boss = QUERY_GetEntitiesWithTags("finalBoss")
    const villageId = payload.ownerVillageId
    const axeSpawnsCount = QUERY_GetEntitiesCount(QUERY_GetEntitiesWithTags("axeSpawns"))
    const axeSpawnsCountMax = 50

    if (axeSpawnsCount > axeSpawnsCountMax) {
        LISTENFOR_LocalTimer({
            snippet: "lt_wof_reset_outer_boss_mob_spawn",
            ownerVillageId: villageId,
            waitTime: 100,
            payloadInt: villageId
        })
        return
    }

    if (!HasEntities(boss)) {
        return
    }
    if (GetVillageVariable(villageId, wofVal.global.playerIsInOuterTV) <= 0) {
        return
    }
    if (GetVillageVariable(villageId, wofVal.global.bossIsAlive) <= 0) {
        return
    }

    const baseEntity = GetVillageEntityFromID(villageId)
    let chosenSpawn = []
    if (IsBaseEscalated(baseEntity, wofVal.escalation.portalApproached)) {
        chosenSpawn = ChooseFromArray(wofVal.minionSpawnsT3)
    } else if (IsBaseEscalated(baseEntity, wofVal.escalation.keyBuildingDestroyed)) {
        chosenSpawn = ChooseFromArray(wofVal.minionSpawnsT2)
    } else if (IsBaseEscalated(baseEntity, wofVal.escalation.innerWallDestroyed)) {
        chosenSpawn = ChooseFromArray(wofVal.minionSpawnsT1)
    }

    if (chosenSpawn.length > 0) {
        for (const unitEntry of chosenSpawn) {
            const newSpawns = SpawnEntitiesAt(boss, unitEntry.unit, unitEntry.amount, TEAM_ORANGE, villageId)

            OUTPUT_AddTag(newSpawns, "axeSpawns")

            const siegeRallyIndex = QUERY_GetGlobalVariable(wofVal.global.minionSpawnsRallyPointTracker)
            const rallyPoint = QUERY_GetEntitiesWithTags([wofVal.bastionRallyPointConfig.centerRallyPoints.positionTags[siegeRallyIndex]])
            if (HasEntities(rallyPoint)) {
                AssignEntitiesToAI(villageId, newSpawns, wofVal.bastionAiConfig[finalHordeBastions.north].aiConfig[finalAi.defensive])
                OUTPUT_AssignHomeBaseToEntities(rallyPoint, newSpawns, 0.1)
            }
        }
    }

    IncrementGlobal(wofVal.global.minionSpawnsRallyPointTracker)

    if (QUERY_GetGlobalVariable(wofVal.global.minionSpawnsRallyPointTracker) >= wofVal.bastionRallyPointConfig.centerRallyPoints.positionTags.length) {
        OUTPUT_SetGlobalVariable(wofVal.global.minionSpawnsRallyPointTracker, 0)
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_wof_reset_outer_boss_mob_spawn",
        ownerVillageId: villageId,
        waitTime: 100,
        payloadInt: villageId
    })
})

SNIPPET_HealthChanged("bossHog75Health", (_boss, _currentHealth, _previousHealth, _payload) => {
    PlayPresentationActionToAll(wofVal.VO.wofBoss75)
    Once()
})

SNIPPET_HealthChanged("bossHog50Health", (_boss, _currentHealth, _previousHealth, _payload) => {
    //const villageId = QUERY_GetVillageIDFromEntity(payload.ownerVillageId)
    PlayPresentationActionToAll(wofVal.VO.wofBoss50)
    Once()
})

SNIPPET_HealthChanged("bossHog25Health", (_boss, _currentHealth, _previousHealth, _payload) => {
    //const villageId = QUERY_GetVillageIDFromEntity(payload.ownerVillageId)
    OUTPUT_SetEmitterState(_boss, "final_boss_engaged1")
    PlayPresentationActionToAll(wofVal.VO.wofBoss25)
    Once()
})

SNIPPET_HealthChanged("hc_boss_hog_damaged_scripted_response", (boss, _currentHealth, _previousHealth, _payload) => {
    Logi("### hc_boss_hog_damaged_scripted_response ### " + QUERY_GetGlobalVariable(wofVal.global.bossDamagedScriptedResponseCooldown))
    if (QUERY_GetGlobalVariable(wofVal.global.bossDamagedScriptedResponseCooldown) === 0) {
        const mobsNearTheBoss = FILTER_ByDistance(QUERY_GetEntitiesWithTagFilter(["mob"], ["piglin"]), boss, 100)
        const playersNearTheBoss = FILTER_ByDistance(GetAllPlayers(), boss, 100)
        if (HasEntities(mobsNearTheBoss) && HasEntities(playersNearTheBoss)) {
            Logi("### HasEntities(mobsNearTheBoss) && HasEntities(playersNearTheBoss) ### ")
            const allPiglins = QUERY_GetEntitiesWithTagFilter(["piglin", "mob"], ["boss"])
            const piglinsCount = Math.ceil(QUERY_GetEntitiesCount(allPiglins) * 0.7)
            const piglinsToSend = FILTER_RandomCount(allPiglins, piglinsCount)
            if (HasEntities(piglinsToSend)) {
                Logi("### HasEntities(piglinsToSend) ### ")
                OUTPUT_MoveAttackEntity(piglinsToSend, boss, CALLBACK_NONE)
                //Unassigning the home base for the piglins we'll send to the boss. Their home base will become the same as the AI entities they're following (i.e. the boss)
                OUTPUT_UnassignHomeBaseForEntities(piglinsToSend)
            }
            IncrementGlobal(wofVal.global.bossDamagedScriptedResponseCooldown)

            LISTENFOR_LocalTimer({
                snippet: "lt_reset_boss_damaged_cooldown",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: wofVal.bossDamagedScriptedResponseCooldownValue
            })
        }
    }
})

SNIPPET_LocalTimer("lt_reset_boss_damaged_cooldown", () => {
    Logi("### lt_reset_boss_damaged_cooldown ### ")
    OUTPUT_SetGlobalVariable(wofVal.global.bossDamagedScriptedResponseCooldown, 0)
})

SNIPPET_CinematicFinished("cf_final_boss_death", () => {
    const WOFEntity = QUERY_GetEntitiesWithTags(TAG_WELL_OF_FATE)
    //Destroy WOF base after a delay when all SNS are destroyed. This is the only piglin base in the world at this time
    const piglinBase = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_PIGLINS_ALL)
    const piglinMobs = QUERY_GetEntitiesWithTagFilter(["piglin"], [])
    const piglinWalls = QUERY_GetEntitiesWithTagFilter(["piglin_wall"], [])
    OUTPUT_DestroyEntities(piglinWalls)
    OUTPUT_DestroyEntities(piglinMobs)
    OUTPUT_DestroyVillageEntities(piglinBase)
    OUTPUT_TriggerCinematic("mst06_c06b_victory", [WOFEntity])
    Once()
})

SNIPPET_CinematicStarted("cs_epilogue_fmv_started", () => {
    UnlockJournalEntry(JOURNAL_UNLOCKS.GREAT_HOG)

    OUTPUT_AnnounceInterrupt(ONBOARDING_MESSAGE_PRIORITY)

    //Destroy WOF music emitter
    const mEmitter = QUERY_GetEntitiesWithTags(["wof_music_emitter"])
    OUTPUT_DespawnEntities(mEmitter)

    //Unpair villages
    OUTPUT_UnsetVillageSuspensionPair(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_WOF), FILTER_ByFactionName(QUERY_GetAllAliveVillages(), WELL_OF_FATE))
})

SNIPPET_SpatialPartitionEntered("spe_disable_player_nudges", () => {
    EnableWofNudges(false)
})

// ESCALATION PHASE 1 "player approaches base" - entering the trigger volume
SNIPPET_SpatialPartitionEntered("spe_nis_boss_summon", (triggerEntity, _intruderEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    //Spawn the FAKE final boss
    const boss = SpawnEntitiesAt(QUERY_GetEntitiesWithTagFilter([TAG_WELL_OF_FATE], []), "badger:piglin_final_boss_nis", 1, TEAM_ORANGE, villageId)
    OUTPUT_SetBehavior(boss, "badger:behavior_piglin_final_boss_wof")
    OUTPUT_DespawnEntities(triggerEntity)

    Once()
})

// ESCALATION PHASE 1 "player approaches base" - entering the trigger volume
SNIPPET_SpatialPartitionEntered("spe_attack_cine_wof", (triggerEntity, intruderEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const wof = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])

    // We pass the structure as a candidate because structure was used during design
    // Passing the village entity can cause offset issues
    // The structure is guaranteed to be there because wof base and wof village are suspension pairs
    OUTPUT_TriggerCinematic("mst06_c06a_under_siege", [intruderEntity])

    MarkBaseAsEscalated(triggerEntity, wofVal.escalation.approached)

    OUTPUT_DespawnEntities(triggerEntity)

    //spawn engineer from boss
    SpawnEntitiesAt(wof, "badger:piglin_engineer", 2, TEAM_ORANGE, villageId)

    //spawn disruptors from boss
    SpawnEntitiesAt(wof, "badger:piglin_disruptor", 2, TEAM_ORANGE, villageId)

    // BARRACKS ============================================================================================================================================================
    _UpdateEscalationAndUpdateBarracks(villageId, 1)

    // AUDIO ================================================================================================================================================================
    //Trigger engineers to build new structures
    const baseDeck = DECK_Empty()
    const innerBuildings = DECK_Stack(BuildableCard("piglinShieldTower", 1), BuildableCard("netherSpreader", 1))
    DECK_MultiplyByMultipleRules(innerBuildings, [ZoneFilterCard("centerZones"), ZoneFilterCard("placeInsideVillageAlways"), PlacementPreferenceCard("closeToEnemies")])
    DECK_PutOnBottomOf(innerBuildings, baseDeck)
    const outerBuildings = DECK_Stack(BuildableCard("piglinTower", 1), BuildableCard("netherSpreader", 2))
    DECK_MultiplyByMultipleRules(outerBuildings, [ZoneFilterCard("centerZones"), ZoneFilterCard("placeInsideVillageAlways"), PlacementPreferenceCard("closeToEnemies")])
    DECK_PutOnBottomOf(outerBuildings, baseDeck)
    //OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, baseDeck)
    _playWOFBuildStinger()

    LISTENFOR_CinematicFinished({
        snippet: "cf_under_siege",
        ownerVillageId: villageId,
        cinematicName: "mst06_c06b_siege_boss"
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_wof_recurring_attackwave",
        ownerVillageId: villageId,
        waitTime: 90
    })
    Once()
})

SNIPPET_LocalTimer("lt_wof_recurring_attackwave", (payload) => {
    const villageId = payload.ownerVillageId
    //Send recurring attack wave

    LISTENFOR_LocalTimer({
        snippet: "lt_wof_recurring_attackwave",
        ownerVillageId: villageId,
        waitTime: 120
    })
})

// ESCALATION PHASE 2: Wall/Gate Destroyed
SNIPPET_NonPopCappedEntityDestroyed("ed_wof_wall_destroyed", (destroyedEntity, payload) => {
    if (IsBaseEscalated(destroyedEntity, wofVal.escalation.innerWallDestroyed)) {
        return
    }
    const villageId = payload.ownerVillageId
    const boss = QUERY_GetEntitiesWithTags(["finalBoss", "boss"])
    const wofStructure = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])

    if (DoOnce(wofVal.global.siegeBossPlayed)) {
        OUTPUT_TriggerCinematic("mst06_c06b_siege_boss", [wofStructure])
    }

    if (!HasEntities(boss)) {
        return
    }

    MarkBaseAsEscalated(destroyedEntity, wofVal.escalation.innerWallDestroyed)

    // BARRACKS ============================================================================================================================================================
    _UpdateEscalationAndUpdateBarracks(villageId, 2)

    // AUDIO ================================================================================================================================================================
    //PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DBB, "keepGoing"), boss)
    PlayPresentationActionToAll(wofVal.VO.wofEscalation2)

    //ATTACK WAVE
    Once()
})

//Player appraoches WOF piglin base
SNIPPET_SpatialPartitionEntered("spe_attack_outer_wof", (triggerEntity, _intruderEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    DeltaVillageVariable(villageId, wofVal.global.playerIsInOuterTV, 1)

    if (GetVillageVariable(villageId, villageId + "composition_listeners") === 0) {
        SetVillageVariable(villageId, villageId + "composition_listeners", 1)

        const bastionCount = Object.keys(wofVal.bastionRallyPointConfig).length
        let i = 0
        for (const bastionKey in wofVal.bastionRallyPointConfig) {
            const rallyData = wofVal.bastionRallyPointConfig[bastionKey]

            // staggering the timers over 2 seconds for each bastion based on their creation time to fix
            // Bug 966444: [CAMPAIGN] Investigate significant hitch from B# during Final Boss
            if (i === 0) {
                CreateCompositionRallyPoints(villageId, rallyData.piglinRallyPoints)
            } else {
                LISTENFOR_LocalTimer({
                    snippet: "lt_setup_bastion_rally_points",
                    ownerVillageId: villageId,
                    waitTime: (i * 2) / (bastionCount - 1),
                    payloadString: bastionKey
                })
            }
            i++
        }
    }
    _InitializeAllBastionAIEntities()
    _AssignHomeBasesToFinalBaseAI(villageId)
})

SNIPPET_LocalTimer("lt_setup_bastion_rally_points", (payload) => {
    const rallyData = wofVal.bastionRallyPointConfig[payload.string]
    CreateCompositionRallyPoints(payload.ownerVillageId, rallyData.piglinRallyPoints)
})

//Player EXITS WOF OUTER
SNIPPET_SpatialPartitionExited("spex_attack_outer_wof", (triggerEntity, _intruderEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    DeltaVillageVariable(villageId, wofVal.global.playerIsInOuterTV, -1)
})

//ESCALATION PHASE 3: Destroying Key Building(s)
SNIPPET_NonPopCappedEntityDestroyed("ed_wof_key_building", (destroyedEntity) => {
    if (IsBaseEscalated(destroyedEntity, wofVal.escalation.keyBuildingDestroyed)) {
        return
    }

    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)
    //const boss = QUERY_GetEntitiesWithTags(["finalBoss", "boss"])

    MarkBaseAsEscalated(destroyedEntity, wofVal.escalation.keyBuildingDestroyed)

    // BARRACKS ============================================================================================================================================================
    _UpdateEscalationAndUpdateBarracks(villageId, 3)

    // AUDIO ================================================================================================================================================================
    PlayPresentationActionToAll(wofVal.VO.wofEscalation3)

    // ATTACK WAVE =======================================================================================================================================================

    Once()
})

// ESCALATION PHASE 4: Entered the inner WoF
SNIPPET_NonPopCappedEntityDestroyed("ed_wof_inner_walls_destroyed", (destroyedEntity, payload) => {
    const villageId = payload.ownerVillageId

    MarkBaseAsEscalated(destroyedEntity, wofVal.escalation.portalApproached)

    // BARRACKS ============================================================================================================================================================
    _UpdateEscalationAndUpdateBarracks(villageId, 4)

    // AUDIO  =======================================================================================================================================================

    LISTENFOR_LocalTimer({
        snippet: "lt_wof_escalation_4_vo",
        ownerVillageId: villageId,
        waitTime: wofVal.waitTimes.wofEscalation4VoDelay,
        payloadInt: villageId
    })

    Once()
})

SNIPPET_LocalTimer("lt_wof_escalation_4_vo", (payload) => {
    const villageId = payload.ownerVillageId
    const villageEntity = GetVillageEntityFromID(villageId)
    if (HasEntities(villageEntity)) {
        PlayPresentationActionToClosePlayers(wofVal.VO.wofEscalation4, villageEntity, 450)
    }
})

//backup TV for mst06_c06b_siege_boss
SNIPPET_SpatialPartitionEntered("spe_attack_inner_wof", (triggerEntity, _intruderEntity) => {
    if (IsBaseEscalated(triggerEntity, wofVal.escalation.portalApproached)) {
        return
    }
    const wofStructure = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])

    // We pass the structure as a candidate because structure was used during design
    // Passing the village entity can cause offset issues
    // The structure is guaranteed to be there because wof base and wof village are suspension pairs

    //check if mst06 has been played, if not play it now
    if (DoOnce(wofVal.global.siegeBossPlayed)) {
        OUTPUT_TriggerCinematic("mst06_c06b_siege_boss", [wofStructure])
    }

    OUTPUT_DespawnEntities(triggerEntity)

    Once()
})

SNIPPET_PresenceEntered("spe_wof_gameplay", (triggerEntity, _count, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    // Check for whether the village needs to reset due to previous disengagement by the player.
    // At this point, all the popcapped entities in the base have already been culled.
    // The village will never be flagged for a reset while a player is in this spatial partition, so we only need to check when we enter.
    if (ShouldBaseReset(villageId)) {
        ResetEscalationAndBarracksForVillageVariation(villageId, wofVal.barracks, wofVal.escalation)
        ResetDiscreteEncounters(villageId)
        MarkBaseAsReset(villageId)
    }
})

const _playWOFAttackStinger = () => {
    const wellOfFate = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
    OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_attack", wellOfFate)
}

const _playWOFTargetStinger = () => {
    const wellOfFate = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
    if (HasEntities(wellOfFate)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_target", wellOfFate)
    }
}

const _playWOFBuildStinger = () => {
    const wellOfFate = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
    if (HasEntities(wellOfFate)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_build", wellOfFate)
    }
}

//vindicator barracks built
SNIPPET_BuildingComplete("bc_vindicator_barracks_built", (spawner) => {
    Logi("### bc_vindicator_barracks_built ###")
    const villageId = QUERY_GetVillageIDFromEntity(spawner)
    OUTPUT_SetTeam(spawner, TEAM_BLUE)

    if (QUERY_HasTags(spawner, [BARRACKS_NAME_VINDICATORS])) {
        SetBarracksConfigForVillageVariation(spawner, VindicatorBarracksConfig_wofFaction)
    } else {
    }

    //listen for units spawning
    LISTENFOR_BuildableSpawnerSpawned({
        snippet: "bss_vindicator_unit_spawned",
        ownerVillageId: villageId,
        buildableSpawner: spawner
    })
})

//when a vindicator spawns, do this
SNIPPET_BuildableSpawnerSpawned("bss_vindicator_unit_spawned", (spawner, spawnedUnit) => {
    _SendVindicatorsToHelpPlayers(spawnedUnit)
})

//Move ally mobs to player built structures
const _SendVindicatorsToHelpPlayers = (mob) => {
    const DISTANCE_TO_INNER_RING = 130
    const players = GetPlayers()
    const piglinBase = GetAliveVillages(FACTION_NAME_WOF, BASE_SIZE_PIGLIN_WOF)
    if (HasEntities(players)) {
        const playersInsideTheInnerRing = FILTER_ByDistance(players, piglinBase, DISTANCE_TO_INNER_RING)
        const playersOutsideTheInnerRing = OPER_Difference(players, playersInsideTheInnerRing)
        //If there are players on the outer ring
        if (HasEntities(playersOutsideTheInnerRing)) {
            const closestPlayerOnTheOuterRing = FILTER_ByClosest(FILTER_ByDistance(playersOutsideTheInnerRing, mob, 400), mob, 1)
            if (HasEntities(closestPlayerOnTheOuterRing)) {
                if (IsAnyNear(closestPlayerOnTheOuterRing, mob, 75)) {
                    OUTPUT_Move(mob, closestPlayerOnTheOuterRing, RandomIntFromInterval(1, 3), CALLBACK_NONE)
                } else {
                    const allyBarracksNearThePlayer = FILTER_ByDistance(QUERY_GetEntitiesWithTags(["db_ally_spawner"]), closestPlayerOnTheOuterRing, 150)
                    const closestAllyBarracksToPlayer = FILTER_ByClosest(allyBarracksNearThePlayer, closestPlayerOnTheOuterRing, 1)
                    const playerStructures = FILTER_ByTagFilter(GetPlayerStructures(), ["buildable"], ["mob"])
                    const closestPlayerStructureToClosestPlayer = FILTER_ByClosest(playerStructures, closestPlayerOnTheOuterRing, 1)
                    if (HasEntities(closestPlayerStructureToClosestPlayer)) {
                        OUTPUT_Move(mob, closestPlayerStructureToClosestPlayer, RandomIntFromInterval(2, 5), CALLBACK_NONE)
                    } else if (HasEntities(closestAllyBarracksToPlayer)) {
                        OUTPUT_Move(mob, closestAllyBarracksToPlayer, RandomIntFromInterval(1, 7), CALLBACK_NONE)
                    } else {
                        OUTPUT_Move(mob, closestPlayerOnTheOuterRing, RandomIntFromInterval(2, 5), CALLBACK_NONE)
                    }
                }
            }
        } else {
            //otherwise, find a structure on the outer ring and go to it
            const playerStructures = FILTER_ByTagFilter(GetPlayerStructures(), ["buildable"], ["mob"])
            const playerStructuresInTheInnerRing = FILTER_ByDistance(playerStructures, piglinBase, DISTANCE_TO_INNER_RING)
            const playerStructuresInTheOuterRing = OPER_Difference(playerStructures, playerStructuresInTheInnerRing)
            if (HasEntities(playerStructuresInTheOuterRing)) {
                const closestOuterRingPlayerBuildingToPiglinBase = FILTER_ByClosest(playerStructuresInTheOuterRing, piglinBase, 1)
                OUTPUT_Move(mob, closestOuterRingPlayerBuildingToPiglinBase, RandomIntFromInterval(2, 5), CALLBACK_NONE)
            }
        }
    }
}

const _InitializeAllBastionAIEntities = () => {
    const piglinBases = GetAliveVillages(FACTION_NAME_WOF, BASE_SIZE_PIGLIN_WOF)
    if (HasEntities(piglinBases)) {
        const villageId = QUERY_GetVillageIDFromEntity(RandomEntity(piglinBases))
        if (GetVillageVariable(villageId, "updatedRallyPointsTags") === 0) {
            const bastionsArray = [finalHordeBastions.north, finalHordeBastions.south, finalHordeBastions.west, finalHordeBastions.east, finalHordeBastions.northWest, finalHordeBastions.northEast, finalHordeBastions.southEast, finalHordeBastions.southWest]
            bastionsArray.forEach((bastionString) => {
                const rallyPoint = QUERY_GetEntitiesWithTagFilter(["piglin_rallying_point", bastionString], [])
                if (HasEntities(rallyPoint)) {
                    const aiConfig = wofVal.bastionAiConfig[bastionString].aiConfig
                    InitializeBaseAIs(villageId, aiConfig, [], rallyPoint)
                }
            })
            SetVillageVariable(villageId, "updatedRallyPointsTags", 1)
        }
    }
}

SNIPPET_PlayerEnteredVillage("pev_player_entered_final_base_patch", (_villageId, _playerCount) => {
    if (QUERY_GetGlobalVariable(wofVal.global.siegeBossPlayed) > 0 && QUERY_GetGlobalVariable(wofVal.global.hasAppliedPatchLeash) === 0 && QUERY_GetGlobalVariable(wofVal.global.hasLeashedFinalBoss) === 0) {
        const boss = QUERY_GetEntitiesWithTags("finalBoss")
        if (HasEntities(boss)) {
            const wofLeash = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
            if (HasEntities(wofLeash)) {
                if (QUERY_HasLeash(boss)) {
                    OUTPUT_RemoveLeash(boss)
                    OUTPUT_SetLeashWithReturnWhenNotTargeting(boss, wofLeash, 90, 30)
                } else {
                    OUTPUT_SetLeashWithReturnWhenNotTargeting(boss, wofLeash, 90, 30)
                }
                IncrementGlobal(wofVal.global.hasAppliedPatchLeash)
                IncrementGlobal(wofVal.global.hasLeashedFinalBoss)
            }
        }
    }
    Once()
})
// TELEMETRY
SetupDefaultTelemetryForPiglinBase(FACTION_NAME_WOF)
