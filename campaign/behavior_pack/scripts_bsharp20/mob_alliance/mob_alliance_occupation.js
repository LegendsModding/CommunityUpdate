const occupationCompositions = {
    runtsOnly: {
        units: [{ amount: 6, unit: PIGLIN_ARCHETYPE.RUNT }]
    }
}
const maOccupationVal = {
    mobIds: ["creeper", "skeleton", "spider", "slime", "silverfish", "zombie"],
    creeper: {
        villageArchetype: "badger:piglin_defend_small",
        baseSize: BASE_SIZE_PIGLIN_CREEPER,
        piglinFactionName: FACTION_NAME_DEFEND,
        presentationActionDistance: 125,
        baseSlot: "initialCreeperPiglinBaseSlot",
        startOccupationGlobal: GV_START_MOB_ALLIANCE_OCCUPATION[MOB_ALLIANCE_NAME_CREEPER],
        vars: {
            playerPresent: "player_present_creeper",
            firstCageOpened: "gv_creeper_piglin_cage_opened_first_time",
            occupyingPiglinCount: "piglins_remaining_creeper",
            occupyingPiglinCountInitialized: "piglins_init_creeper",
            counterCompCount: "gv_creeper_comps_spawned"
        },
        tags: {
            objectivePiglinsTag: "objective_piglins_creeper",
            baseVicinityTvTag: "base_vicinity_tv_creeper",
            piglinSpawnTvTag: "piglin_spawn_tv_creeper"
        },
        VOs: {
            //intro: "mob_creeper_first",
            joinTheFight: "mob_post_join_fight_1",
            attackedPortalVOs: "mob_enter_homestead_2",
            firstCageOpenedBase: "mob_cage_opened_base_1",
            mobAlliancePiglinAttack: "moballiance_creeper_piglinattack",
            mobAllianceFoA: "moballiance_creeper_outro",
            firstCageOpenedMobAlliance: "mob_creeper_first_cage"
        },
        behaviours: {
            default: MOB_BEHAVIOUR_DICTIONARY.creeper.default,
            caged: MOB_BEHAVIOUR_DICTIONARY.creeper.caged,
            // Act 1 makes the mob look scared
            act1: MOB_BEHAVIOUR_DICTIONARY.creeper.act1
        },
        cinematics: {
            piglinOccupation: "mob01_c03_creeper_piglin_attack_fmv",
            piglinOccupationNight: "mob01_c03_creeper_piglin_attack_night_fmv",
            mobJoinTheFight: "mob01_c03a_creeper_join_fight",
            flameOfAllegiance: "mob01_c05_creeper_foa_fmv",
            flameOfAllegianceNight: "mob01_c05_creeper_foa_night_fmv"
        },
        message: {
            mobJoinTheFight: "mob_join_fight_creeper"
        },
        timers: {
            portalEscalationTimer: "creeper_portal_escalation_timer"
        }
    },
    skeleton: {
        villageArchetype: "badger:piglin_attack_small",
        baseSize: BASE_SIZE_PIGLIN_SKELETON,
        piglinFactionName: FACTION_NAME_ATTACK,
        presentationActionDistance: 165,
        baseSlot: "initialSkeletonPiglinBaseSlot",
        startOccupationGlobal: GV_START_MOB_ALLIANCE_OCCUPATION[MOB_ALLIANCE_NAME_SKELETON],
        vars: {
            playerPresent: "player_present_skeleton",
            firstCageOpened: "gv_skeleton_piglin_cage_opened_first_time",
            occupyingPiglinCount: "piglins_remaining_skeleton",
            occupyingPiglinCountInitialized: "piglins_init_skeleton",
            counterCompCount: "gv_skeleton_comps_spawned"
        },
        tags: {
            objectivePiglinsTag: "objective_piglins_skeleton",
            baseVicinityTvTag: "base_vicinity_tv_skeleton",
            piglinSpawnTvTag: "piglin_spawn_tv_skeleton"
        },
        VOs: {
            intro: "mob_skeleton_first",
            joinTheFight: "mob_post_join_fight_2",
            attackedPortalVOs: "mob_enter_homestead_1",
            firstCageOpenedBase: "mob_cage_opened_base_2",
            mobAlliancePiglinAttack: "moballiance_skeleton_piglinattack",
            mobAllianceFoA: "moballiance_skeleton_outro",
            firstCageOpenedMobAlliance: "mob_skeleton_first_cage"
        },
        behaviours: {
            default: MOB_BEHAVIOUR_DICTIONARY.skeleton.default,
            caged: MOB_BEHAVIOUR_DICTIONARY.skeleton.caged,
            // Act 1 makes the mob look scared
            act1: MOB_BEHAVIOUR_DICTIONARY.skeleton.act1
        },
        cinematics: {
            piglinOccupation: "mob03_c03_skeleton_piglin_attack_fmv",
            piglinOccupationNight: "mob03_c03_skeleton_piglin_attack_night_fmv",
            mobJoinTheFight: "mob03_c03a_skeleton_join_fight",
            flameOfAllegiance: "mob03_c05_skeleton_foa_fmv",
            flameOfAllegianceNight: "mob03_c05_skeleton_foa_night_fmv"
        },
        message: {
            mobJoinTheFight: "mob_join_fight_skeleton"
        },
        timers: {
            portalEscalationTimer: "skeleton_portal_escalation_timer"
        }
    },
    zombie: {
        villageArchetype: "badger:piglin_obstacle_small",
        baseSize: BASE_SIZE_PIGLIN_ZOMBIE,
        piglinFactionName: FACTION_NAME_OBSTACLE,
        presentationActionDistance: 135,
        baseSlot: "initialZombiePiglinBaseSlot",
        startOccupationGlobal: GV_START_MOB_ALLIANCE_OCCUPATION[MOB_ALLIANCE_NAME_ZOMBIE],
        vars: {
            playerPresent: "player_present_zombie",
            firstCageOpened: "gv_zombie_piglin_cage_opened_first_time",
            occupyingPiglinCount: "piglins_remaining_zombie",
            occupyingPiglinCountInitialized: "piglins_init_zombie",
            counterCompCount: "gv_zombie_comps_spawned"
        },
        tags: {
            objectivePiglinsTag: "objective_piglins_zombie",
            baseVicinityTvTag: "base_vicinity_tv_zombie",
            piglinSpawnTvTag: "piglin_spawn_tv_zombie"
        },
        VOs: {
            //intro: "mob_zombie_first",
            joinTheFight: "mob_post_join_fight_3",
            attackedPortalVOs: "mob_enter_homestead_3",
            firstCageOpenedBase: "mob_cage_opened_base_3",
            mobAlliancePiglinAttack: "moballiance_zombie_piglinattack",
            mobAllianceFoA: "moballiance_zombie_outro",
            firstCageOpenedMobAlliance: "mob_zombie_first_cage"
        },
        behaviours: {
            default: MOB_BEHAVIOUR_DICTIONARY.zombie.default,
            caged: MOB_BEHAVIOUR_DICTIONARY.zombie.caged,
            // Act 1 makes the mob look scared
            act1: MOB_BEHAVIOUR_DICTIONARY.zombie.act1
        },
        cinematics: {
            piglinOccupation: "mob02_c03_zombie_piglin_attack_fmv",
            piglinOccupationNight: "mob02_c03_zombie_piglin_attack_night_fmv",
            mobJoinTheFight: "mob02_c03a_zombie_join_fight",
            flameOfAllegiance: "mob02_c05_zombie_foa_fmv",
            flameOfAllegianceNight: "mob02_c05_zombie_foa_night_fmv"
        },
        message: {
            mobJoinTheFight: "mob_join_fight_zombie"
        },
        timers: {
            portalEscalationTimer: "zombie_portal_escalation_timer"
        }
    },
    spider: {
        villageArchetype: "badger:piglin_frost_small",
        baseSize: BASE_SIZE_PIGLIN_SPIDER,
        piglinFactionName: FACTION_NAME_FROST,
        presentationActionDistance: 135,
        baseSlot: "initialSpiderPiglinBaseSlot",
        startOccupationGlobal: GV_START_MOB_ALLIANCE_OCCUPATION[MOB_ALLIANCE_NAME_SPIDER],
        vars: {
            playerPresent: "player_present_spider",
            firstCageOpened: "gv_spider_piglin_cage_opened_first_time",
            occupyingPiglinCount: "piglins_remaining_spider",
            occupyingPiglinCountInitialized: "piglins_init_spider",
            counterCompCount: "gv_spider_comps_spawned"
        },
        tags: {
            objectivePiglinsTag: "objective_piglins_spider",
            baseVicinityTvTag: "base_vicinity_tv_spider",
            piglinSpawnTvTag: "piglin_spawn_tv_spider"
        },
        VOs: {
            //intro: "mob_spider_first",
            joinTheFight: "mob_post_join_fight_3",
            attackedPortalVOs: "mob_enter_homestead_3",
            firstCageOpenedBase: "mob_cage_opened_base_3",
            mobAlliancePiglinAttack: "moballiance_spider_piglinattack",
            mobAllianceFoA: "moballiance_spider_outro",
            firstCageOpenedMobAlliance: "mob_spider_first_cage"
        },
        behaviours: {
            default: MOB_BEHAVIOUR_DICTIONARY.spider.default,
            caged: MOB_BEHAVIOUR_DICTIONARY.spider.caged,
            // Act 1 makes the mob look scared
            act1: MOB_BEHAVIOUR_DICTIONARY.spider.act1
        },
        cinematics: {
            piglinOccupation: "mob02_c03_spider_piglin_attack_fmv",
            piglinOccupationNight: "mob02_c03_spider_piglin_attack_night_fmv",
            mobJoinTheFight: "mob02_c03a_spider_join_fight",
            flameOfAllegiance: "mob02_c05_spider_foa_fmv",
            flameOfAllegianceNight: "mob02_c05_spider_foa_night_fmv"
        },
        message: {
            mobJoinTheFight: "mob_join_fight_spider"
        },
        timers: {
            portalEscalationTimer: "spider_portal_escalation_timer"
        }
    },
    slime: {
        villageArchetype: "badger:piglin_obstacle_small",
        baseSize: BASE_SIZE_PIGLIN_SLIME,
        piglinFactionName: FACTION_NAME_OBSTACLE,
        presentationActionDistance: 135,
        baseSlot: "initialSpiderPiglinBaseSlot",
        startOccupationGlobal: GV_START_MOB_ALLIANCE_OCCUPATION[MOB_ALLIANCE_NAME_SLIME],
        vars: {
            playerPresent: "player_present_slime",
            firstCageOpened: "gv_slime_piglin_cage_opened_first_time",
            occupyingPiglinCount: "piglins_remaining_slime",
            occupyingPiglinCountInitialized: "piglins_init_slime",
            counterCompCount: "gv_slime_comps_spawned"
        },
        tags: {
            objectivePiglinsTag: "objective_piglins_slime",
            baseVicinityTvTag: "base_vicinity_tv_slime",
            piglinSpawnTvTag: "piglin_spawn_tv_slime"
        },
        VOs: {
            //intro: "mob_slime_first",
            joinTheFight: "mob_post_join_fight_3",
            attackedPortalVOs: "mob_enter_homestead_3",
            firstCageOpenedBase: "mob_cage_opened_base_3",
            mobAlliancePiglinAttack: "moballiance_slime_piglinattack",
            mobAllianceFoA: "moballiance_slime_outro",
            firstCageOpenedMobAlliance: "mob_slime_first_cage"
        },
        behaviours: {
            default: MOB_BEHAVIOUR_DICTIONARY.slime.default,
            caged: MOB_BEHAVIOUR_DICTIONARY.slime.caged,
            // Act 1 makes the mob look scared
            act1: MOB_BEHAVIOUR_DICTIONARY.slime.act1
        },
        cinematics: {
            piglinOccupation: "mob02_c03_slime_piglin_attack_fmv",
            piglinOccupationNight: "mob02_c03_slime_piglin_attack_night_fmv",
            mobJoinTheFight: "mob02_c03a_slime_join_fight",
            flameOfAllegiance: "mob02_c05_slime_foa_fmv",
            flameOfAllegianceNight: "mob02_c05_slime_foa_night_fmv"
        },
        message: {
            mobJoinTheFight: "mob_join_fight_slime"
        },
        timers: {
            portalEscalationTimer: "slime_portal_escalation_timer"
        }
    },
    silverfish: {
        villageArchetype: "badger:piglin_defend_small",
        baseSize: BASE_SIZE_PIGLIN_SILVERFISH,
        piglinFactionName: FACTION_NAME_DEFEND,
        presentationActionDistance: 125,
        baseSlot: "initialSilverfishPiglinBaseSlot",
        startOccupationGlobal: GV_START_MOB_ALLIANCE_OCCUPATION[MOB_ALLIANCE_NAME_SILVERFISH],
        vars: {
            playerPresent: "player_present_silverfish",
            firstCageOpened: "gv_silverfish_piglin_cage_opened_first_time",
            occupyingPiglinCount: "piglins_remaining_silverfish",
            occupyingPiglinCountInitialized: "piglins_init_silverfish",
            counterCompCount: "gv_silverfish_comps_spawned"
        },
        tags: {
            objectivePiglinsTag: "objective_piglins_silverfish",
            baseVicinityTvTag: "base_vicinity_tv_silverfish",
            piglinSpawnTvTag: "piglin_spawn_tv_silverfish"
        },
        VOs: {
            //intro: "mob_silverfish_first",
            joinTheFight: "mob_post_join_fight_1",
            attackedPortalVOs: "mob_enter_homestead_2",
            firstCageOpenedBase: "mob_cage_opened_base_1",
            mobAlliancePiglinAttack: "moballiance_silverfish_piglinattack",
            mobAllianceFoA: "moballiance_silverfish_outro",
            firstCageOpenedMobAlliance: "mob_silverfish_first_cage"
        },
        behaviours: {
            default: MOB_BEHAVIOUR_DICTIONARY.silverfish.default,
            caged: MOB_BEHAVIOUR_DICTIONARY.silverfish.caged,
            // Act 1 makes the mob look scared
            act1: MOB_BEHAVIOUR_DICTIONARY.silverfish.act1
        },
        cinematics: {
            piglinOccupation: "mob01_c03_silverfish_piglin_attack_fmv",
            piglinOccupationNight: "mob01_c03_silverfish_piglin_attack_night_fmv",
            mobJoinTheFight: "mob01_c03a_silverfish_join_fight",
            flameOfAllegiance: "mob01_c05_silverfish_foa_fmv",
            flameOfAllegianceNight: "mob01_c05_silverfish_foa_night_fmv"
        },
        message: {
            mobJoinTheFight: "mob_join_fight_silverfish"
        },
        timers: {
            portalEscalationTimer: "silverfish_portal_escalation_timer"
        }
    },
    common: {
        audioEntityAlliance: "badger:music_combat_act1_MA",
        audioEntityPiglin: "badger:music_combat_act1_MA_piglin",
        piglinAttackIntroVOPlayed: "gv_piglin_attack_intro_vo_played",
        piglinCageTag: "piglinBaseCages",
        portalHealthThreshold: 0.99,
        portalHalfHealthThreshold: 0.5,
        cinematicPlayerGatherRange: 300,
        initialOccupationMobDespawnRange: 500,
        guardedBehaviourDictionary: [ 
            { tag: "grunter", behaviour: "badger:behavior_piglin_grunter_guarded" },
            { tag: "runt", behaviour: "badger:behavior_piglin_runt_guarded" },
            { tag: "portalguard", behaviour: "badger:behavior_piglin_portal_guard_guarded" },
            { tag: "grenadier", behaviour: "badger:behavior_piglin_grenadier_guarded" },
            { tag: "bruiser", behaviour: "badger:behavior_piglin_bruiser_guarded" },
            { tag: "pigmadilo", behaviour: "badger:behavior_piglin_pigmadilo_guarded" },
            { tag: "piggo_lava_launcher", behaviour: "badger:behavior_piglin_piggo_lava_launcher_guarded" },
            { tag: "warboar", behaviour: "badger:behavior_piglin_piggo_warboar_guarded" }
        ],
        dummyPiglinsToSpawn: [
            { id: "badger:piglin_runt", count: 35, minRadius: 60, maxRadius: 80 },
            { id: "badger:piglin_grunter", count: 35, minRadius: 60, maxRadius: 80 }
        ],
        guardingPiglinTag: "guarding_piglin",
        attackingVillageIdKey: "attacking_village_id",
        escalationLevelVillageIdKey: "escalation_level",
        destroyPlayerStructureDistance: 100,
        occupyingPiglinClearPercent: 90, // Percent of piglins needed to kill before they join the fight.
        piglinObjectiveVicinityPadding: 450,
        piglinSpawningVicinityPadding: 650,
        beforeOccupationSpawnDummyPiglinsVicinityPadding: 600
    }
}

const occupationAI = {
    attack: {
        attack: "OccupationAttackAttackAi",
        defend: "OccupationAttackDefendAi",
        siege: "OccupationAttackSiegeAi"
    },
    defend: {
        attack: "OccupationDefendAttackAi",
        defend: "OccupationDefendDefendAi",
        siege: "OccupationDefendSiegeAi"
    },
    obstacle: {
        attack: "OccupationObstacleAttackAi",
        defend: "OccupationObstacleDefendAi",
        siege: "OccupationObstacleSiegeAi"
    },
    frost: {
        attack: "OccupationFrostAttackAi",
        defend: "OccupationFrostDefendAi",
        siege: "OccupationFrostSiegeAi"
    }
}

const occupationBaseData = {
    [FACTION_NAME_ATTACK]: {
        constructor: (villageId, mobId) => {
            _attackFactionOccupationBaseDeck(villageId, mobId)
        },
        piglinsToOccupyMobAlliance: [
            // Popcorn enemies (Runt-heavy to feel like a Skeleton power fantasy)
            { entity: "badger:piglin_runt", amount: 90, minRange: 10, maxRange: 70 },
            { entity: "badger:piglin_medic", amount: 10, minRange: 10, maxRange: 70 }
        ],
        totalRallyPoints: 3, //Rallypoints for guards
        viableRallyBuildingTags: ["pigSpreader", "pigThrowerTower"],
        mobPortalTriggerVolume: "badger:spatial_trigger_mob_alliance_skeleton_assault",
        structureDetectionRadius: 200,
        responseTimers: {
            piglinPortalDamagedResponseTimer: 5,
            piglinPopcornStructureDamagedResponseTimer: 10,
            piglinKeyStructureDamagedResponseTimer: 8,
            piglinEliteStructureDamagedResponseTimer: 5,
            playerBuiltBuildableStructureResponseTimer: 20
        },
        barracks: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_AttackFaction_Variations,
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_AttackFaction_Variations,
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_DISRUPTOR]: DisruptorBarracksConfig_AttackFaction_Variations
        },
        aiConfig: {
            [occupationAI.attack.attack]: {
                controllerArchetype: "badger:ai_entity_horderunners_attack",
                controllerTag: "attackPatrolAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["attackDefendRally"],
                reinforcementControlGroupTag: "occupationAttackAttack"
            },
            [occupationAI.attack.defend]: {
                controllerArchetype: "badger:ai_entity_horderunners_defend",
                controllerTag: "attackDefendAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["attackDefendRally"],
                reinforcementControlGroupTag: "occupationAttackDefend"
            },
            [occupationAI.attack.siege]: {
                controllerArchetype: "badger:ai_entity_occupation_siege",
                controllerTag: "occupationSiegeAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["attackSiegeRally"],
                reinforcementControlGroupTag: "occupationAttackSiege"
            }
        },
        piglinRallyPoints: {
            ["occupationAttackAttack"]: {
                controlGroupTag: "occupationAttackAttack",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.attack.attack, 100]],
                positionTags: ["attackDefendRally"],
                positionTagExcludes: []
            },
            ["occupationAttackDefend"]: {
                controlGroupTag: "occupationAttackDefend",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.attack.defend, 100]],
                positionTags: ["attackDefendRally"],
                positionTagExcludes: []
            },
            ["occupationAttackSiege"]: {
                controlGroupTag: "occupationAttackSiege",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.attack.siege, 100]],
                positionTags: ["attackSiegeRally"],
                positionTagExcludes: []
            }
        },
        waveData: {
            initialWaveDelay: 30,
            ignoreCountModifier: true,
            concurrentPiglinSoftCap: 175,
            escalationWaves: [
                // 0
                {
                    aiDistribution: [[occupationAI.attack.defend, 100]],
                    wave: [[PIGLIN_ARCHETYPE.WARBOAR, 10]]
                },
                // 1
                {
                    aiDistribution: [[occupationAI.attack.defend, 100]],
                    wave: [[PIGLIN_ARCHETYPE.WARBOAR, 10]]
                }
            ],
            mainWaves: [
                {
                    waveAmount: 1, //Number of waves (each wave will spawn after the another after <nextWaveTimer> amount of time)
                    waveVariations: [
                        //Add all the variations here - will be picked randomly
                        {
                            nextWaveTimer: 70, //The timer for the next wave (after this).
                            // Solutions: Wood Golem/Skeleton + Mossy Golem
                            wave: [
                                [PIGLIN_ARCHETYPE.RUNT, 15], //[Unit type, Count, controlGroupTag]
                                [PIGLIN_ARCHETYPE.MEDIC, 2]
                            ]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Wood Golem/Skeleton + Mossy Golem
                            nextWaveTimer: 70,
                            wave: [
                                [PIGLIN_ARCHETYPE.RUNT, 12],
                                [PIGLIN_ARCHETYPE.MEDIC, 2]
                            ]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Wood Golem/Skeleton + Mossy Golem
                            nextWaveTimer: 70,
                            wave: [
                                [PIGLIN_ARCHETYPE.RUNT, 15],
                                [PIGLIN_ARCHETYPE.MEDIC, 2]
                            ]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Wood Golem/Skeleton + Mossy Golem
                            nextWaveTimer: 70,
                            wave: [
                                [PIGLIN_ARCHETYPE.RUNT, 12],
                                [PIGLIN_ARCHETYPE.MEDIC, 2]
                            ]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Wood Golem/Skeleton + Mossy Golem
                            nextWaveTimer: 70,
                            wave: [
                                [PIGLIN_ARCHETYPE.RUNT, 8],
                                [PIGLIN_ARCHETYPE.MEDIC, 2]
                            ]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Wood Golem/Skeleton + Mossy Golem
                            nextWaveTimer: 70,
                            wave: [
                                [PIGLIN_ARCHETYPE.RUNT, 15],
                                [PIGLIN_ARCHETYPE.MEDIC, 2]
                            ]
                        }
                    ]
                }
            ],
            //Trickle waves start after all the main waves have finished and continue indefinitely - we choose from the given compositions
            trickleWaves: [
                {
                    // Mace MD
                    // Solutions: Wood Golem/Skeleton + Mossy Golem
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.RUNT, 8],
                        [PIGLIN_ARCHETYPE.MEDIC, 3]
                    ]
                },
                {
                    // Solutions: Wood Golem/Skeleton + Mossy Golem
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.RUNT, 8],
                        [PIGLIN_ARCHETYPE.MEDIC, 3]
                    ]
                },
                {
                    // Solutions: Wood Golem/Skeleton + Mossy Golem
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.RUNT, 2],
                        [PIGLIN_ARCHETYPE.MEDIC, 2]
                    ]
                },
                {
                    // Solutions: Wood Golem/Skeleton + Mossy Golem
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.RUNT, 8],
                        [PIGLIN_ARCHETYPE.MEDIC, 2]
                    ]
                }
            ],
            // We activate these waves once the player has freed the occupation
            counterTrickleWaves: [
                {
                    // Mace MD
                    // Solutions: Skeleton/Grindstone + Mossy Golem
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.GRUNTER, 12],
                        [PIGLIN_ARCHETYPE.MEDIC, 3]
                    ]
                },
                {
                    // Solutions: Skeleton/Grindstone + Mossy Golem
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.GRUNTER, 12],
                        [PIGLIN_ARCHETYPE.MEDIC, 3]
                    ]
                },
                {
                    // Solutions: Skeleton/Grindstone + Mossy Golem
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.GRUNTER, 12],
                        [PIGLIN_ARCHETYPE.MEDIC, 2]
                    ]
                },
                {
                    // Solutions: Skeleton/Grindstone + Mossy Golem
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.GRUNTER, 8],
                        [PIGLIN_ARCHETYPE.MEDIC, 2]
                    ]
                }
            ]
        },
        responses: {
            unitAssignedTag: "response_assigned",
            unitExemptTag: "response_exempt",
            minTimeBetweenResponses: 25,
            waves: {
                normal: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.attack.siege, 100]]
                },
                escalated: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.attack.defend, 100]]
                }
            },
            scripted: {
                initialOccupation: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.attack.siege, 100]]
                }
            }
        }
    },
    [FACTION_NAME_DEFEND]: {
        constructor: (villageId, mobId) => {
            _defendFactionOccupationBaseDeck(villageId, mobId)
        },
        piglinsToOccupyMobAlliance: [
            // Popcorn enemies
            { entity: PIGLIN_ARCHETYPE.GRUNTER, amount: 90, minRange: 5, maxRange: 100 },
            { entity: PIGLIN_ARCHETYPE.BRUISER, amount: 8, minRange: 5, maxRange: 50 },
            { entity: PIGLIN_ARCHETYPE.PORTAL_GUARD, amount: 1, minRange: 60, maxRange: 65 }
        ],
        totalRallyPoints: 2,
        viableRallyBuildingTags: ["pigSpreader", "pigTower"],
        structureDetectionRadius: 200,
        responseTimers: {
            piglinPortalDamagedResponseTimer: 5,
            piglinPopcornStructureDamagedResponseTimer: 10,
            piglinKeyStructureDamagedResponseTimer: 8,
            piglinEliteStructureDamagedResponseTimer: 5,
            playerBuiltBuildableStructureResponseTimer: 20
        },
        barracks: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_DefendFaction_Variations,
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_DefendFaction_Variations
        },
        aiConfig: {
            [occupationAI.defend.attack]: {
                name: "attackAi",
                controllerArchetype: "badger:ai_entity_defend_offensive",
                controllerTag: "defendHordeUniqueAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["defendAttackRallyPoint"],
                reinforcementControlGroupTag: "occupationDefendAttack"
            },
            [occupationAI.defend.defend]: {
                name: "defendAi",
                controllerArchetype: "badger:ai_entity_defend_defensive",
                controllerTag: "defendHordeDefendAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["defendDefendRallyPoint"],
                reinforcementControlGroupTag: "occupationDefendDefend"
            },
            [occupationAI.defend.siege]: {
                name: "siegeAi",
                controllerArchetype: "badger:ai_entity_occupation_siege",
                controllerTag: "occupationSiegeAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["defendSiegeRallyPoint"],
                reinforcementControlGroupTag: "occupationDefendSiege"
            }
        },
        piglinRallyPoints: {
            ["occupationDefendAttack"]: {
                controlGroupTag: "occupationDefendAttack",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.defend.attack, 100]],
                positionTags: ["defendAttackRallyPoint"],
                positionTagExcludes: []
            },
            ["occupationDefendDefend"]: {
                controlGroupTag: "occupationDefendDefend",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.defend.defend, 100]],
                positionTags: ["defendDefendRallyPoint"],
                positionTagExcludes: []
            },
            ["occupationDefendSiege"]: {
                controlGroupTag: "occupationDefendSiege",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.defend.siege, 100]],
                positionTags: ["defendSiegeRallyPoint"],
                positionTagExcludes: []
            }
        },
        waveData: {
            initialWaveDelay: 30,
            ignoreCountModifier: true,
            concurrentPiglinSoftCap: 175,
            escalationWaves: [
                // 0
                {
                    aiDistribution: [[occupationAI.defend.defend, 100]],
                    wave: [[PIGLIN_ARCHETYPE.DISRUPTOR, 2]]
                },
                // 1
                {
                    aiDistribution: [[occupationAI.defend.defend, 100]],
                    wave: [[PIGLIN_ARCHETYPE.DISRUPTOR, 2]]
                }
            ],
            //Main
            mainWaves: [
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solution: Grindstone
                            nextWaveTimer: 35,
                            wave: [[PIGLIN_ARCHETYPE.GRUNTER, 15]]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solution: Stone
                            nextWaveTimer: 35,
                            wave: [
                                [PIGLIN_ARCHETYPE.GRUNTER, 12],
                                [PIGLIN_ARCHETYPE.BRUISER, 2]
                            ]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solution: Grindstone
                            nextWaveTimer: 35,
                            wave: [[PIGLIN_ARCHETYPE.GRUNTER, 15]]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solution: Stone
                            nextWaveTimer: 35,
                            wave: [[PIGLIN_ARCHETYPE.BRUISER, 3]]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Grindstone
                            nextWaveTimer: 35,
                            wave: [[PIGLIN_ARCHETYPE.GRUNTER, 20]]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Stone
                            nextWaveTimer: 35,
                            wave: [
                                [PIGLIN_ARCHETYPE.GRUNTER, 15],
                                [PIGLIN_ARCHETYPE.BRUISER, 2]
                            ]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Grindstone
                            nextWaveTimer: 30,
                            wave: [[PIGLIN_ARCHETYPE.GRUNTER, 20]]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Stone
                            nextWaveTimer: 30,
                            wave: [[PIGLIN_ARCHETYPE.BRUISER, 2]]
                        }
                    ]
                }
            ],
            //Trickle
            trickleWaves: [
                {
                    // Solutions: Grindstone
                    nextWaveTimer: 40,
                    wave: [[PIGLIN_ARCHETYPE.GRUNTER, 15]]
                },
                {
                    // Solutions: Stone
                    nextWaveTimer: 40,
                    wave: [
                        [PIGLIN_ARCHETYPE.GRUNTER, 10],
                        [PIGLIN_ARCHETYPE.BRUISER, 1]
                    ]
                },
                {
                    // Solutions: Stone
                    nextWaveTimer: 40,
                    wave: [[PIGLIN_ARCHETYPE.BRUISER, 2]]
                }
            ],
            // We activate these waves once the player has freed the occupation
            counterTrickleWaves: [
                {
                    // Solutions: Wood
                    nextWaveTimer: 40,
                    wave: [[PIGLIN_ARCHETYPE.RUNT, 12]]
                }
            ]
        },
        responses: {
            unitAssignedTag: "response_assigned",
            unitExemptTag: "response_exempt",
            minTimeBetweenResponses: 25,
            waves: {
                normal: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.defend.siege, 100]]
                },
                escalated: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.defend.defend, 100]]
                }
            },
            scripted: {
                initialOccupation: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.defend.siege, 100]]
                }
            }
        }
    },
    [FACTION_NAME_OBSTACLE]: {
        constructor: (villageId, mobId) => {
            _obstacleFactionOccupationBaseDeck(villageId, mobId)
        },
        piglinsToOccupyMobAlliance: [
            // Popcorn enemies
            { entity: PIGLIN_ARCHETYPE.RUNT, amount: 80, minRange: 20, maxRange: 50 },

            { entity: PIGLIN_ARCHETYPE.MEDIC, amount: 10, minRange: 20, maxRange: 50 }
        ],
        totalRallyPoints: 2,
        viableRallyBuildingTags: ["pigSpreader", "pigKnockbackTower"],
        mobPortalTriggerVolume: "badger:spatial_trigger_mob_alliance_zombie_assault",
        structureDetectionRadius: 200,
        responseTimers: {
            piglinPortalDamagedResponseTimer: 5,
            piglinPopcornStructureDamagedResponseTimer: 10,
            piglinKeyStructureDamagedResponseTimer: 8,
            piglinEliteStructureDamagedResponseTimer: 5,
            playerBuiltBuildableStructureResponseTimer: 20
        },
        barracks: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_ObstacleFaction_Variations,
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_ObstacleFaction_Variations,
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_DISRUPTOR]: DisruptorBarracksConfig_ObstacleFaction_Variations
        },
        aiConfig: {
            [occupationAI.obstacle.attack]: {
                controllerArchetype: "badger:ai_entity_rotters_offensive",
                controllerTag: "obstacleAttackAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["obstacleAttackRallyPoint"],
                reinforcementControlGroupTag: "occupationObstacleAttack"
            },
            [occupationAI.obstacle.defend]: {
                controllerArchetype: "badger:ai_entity_rotters_defensive",
                controllerTag: "obstacleDefendAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["obstacleDefendRallyPoint"],
                reinforcementControlGroupTag: "occupationObstacleDefend"
            },
            [occupationAI.obstacle.siege]: {
                controllerArchetype: "badger:ai_entity_occupation_siege",
                controllerTag: "occupationSiegeAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["obstacleSiegeRallyPoint"],
                reinforcementControlGroupTag: "occupationObstacleSiege"
            }
        },
        piglinRallyPoints: {
            ["occupationObstacleAttack"]: {
                controlGroupTag: "occupationObstacleAttack",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.obstacle.attack, 100]],
                positionTags: ["obstacleAttackRallyPoint"],
                positionTagExcludes: []
            },
            ["occupationObstacleDefend"]: {
                controlGroupTag: "occupationObstacleDefend",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.obstacle.defend, 100]],
                positionTags: ["obstacleDefendRallyPoint"],
                positionTagExcludes: []
            },
            ["occupationObstacleSiege"]: {
                controlGroupTag: "occupationObstacleSiege",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.obstacle.siege, 100]],
                positionTags: ["obstacleSiegeRallyPoint"],
                positionTagExcludes: []
            }
        },
        waveData: {
            initialWaveDelay: 30,
            ignoreCountModifier: true,
            concurrentPiglinSoftCap: 175,
            escalationWaves: [
                // 0
                {
                    aiDistribution: [[occupationAI.obstacle.defend, 100]],
                    wave: [
                        [PIGLIN_ARCHETYPE.GRUNTER, 50],
                        [PIGLIN_ARCHETYPE.ENGINEER, 3]
                    ]
                },
                // 1
                {
                    aiDistribution: [[occupationAI.obstacle.defend, 100]],
                    wave: [
                        [PIGLIN_ARCHETYPE.GRUNTER, 50],
                        [PIGLIN_ARCHETYPE.ENGINEER, 3]
                    ]
                },
                // 2
                {
                    aiDistribution: [[occupationAI.obstacle.defend, 100]],
                    wave: [[PIGLIN_ARCHETYPE.GRENADIER, 12]]
                }
            ],
            //Main
            mainWaves: [
                {
                    // Small base themed waves
                    waveAmount: 2,
                    waveVariations: [
                        {
                            // Solutions: Wood/Zombie
                            nextWaveTimer: 40,
                            wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                        }
                    ]
                },
                {
                    waveAmount: 2,
                    waveVariations: [
                        {
                            // Solutions: Wood/Zombie
                            nextWaveTimer: 40,
                            wave: [
                                [PIGLIN_ARCHETYPE.RUNT, 12],
                                [PIGLIN_ARCHETYPE.MEDIC, 2]
                            ]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Wood/Zombie
                            nextWaveTimer: 50,
                            wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Wood/Zombie
                            nextWaveTimer: 40,
                            wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                        }
                    ]
                }
            ],
            //Trickle
            trickleWaves: [
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                },
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                },
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.RUNT, 10],
                        [PIGLIN_ARCHETYPE.MEDIC, 1]
                    ]
                }
            ],
            // We activate these waves once the player has freed the occupation
            counterTrickleWaves: [
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [[PIGLIN_ARCHETYPE.RUNT, 10]]
                },
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [[PIGLIN_ARCHETYPE.RUNT, 10]]
                }
            ]
        },
        responses: {
            unitAssignedTag: "response_assigned",
            unitExemptTag: "response_exempt",
            minTimeBetweenResponses: 25,
            waves: {
                normal: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.obstacle.siege, 100]]
                },
                escalated: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.obstacle.defend, 100]]
                }
            },
            scripted: {
                initialOccupation: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.obstacle.siege, 100]]
                }
            }
        }
    },
    [FACTION_NAME_FROST]: {
        constructor: (villageId, mobId) => {
            _frostFactionOccupationBaseDeck(villageId, mobId)
        },
        piglinsToOccupyMobAlliance: [
            // Popcorn enemies
            { entity: PIGLIN_ARCHETYPE.RUNT, amount: 80, minRange: 20, maxRange: 50 },

            { entity: PIGLIN_ARCHETYPE.MEDIC, amount: 10, minRange: 20, maxRange: 50 }
        ],
        totalRallyPoints: 2,
        viableRallyBuildingTags: ["pigSpreader", "pigKnockbackTower"],
        mobPortalTriggerVolume: "badger:spatial_trigger_mob_alliance_spider_assault",
        structureDetectionRadius: 200,
        responseTimers: {
            piglinPortalDamagedResponseTimer: 5,
            piglinPopcornStructureDamagedResponseTimer: 10,
            piglinKeyStructureDamagedResponseTimer: 8,
            piglinEliteStructureDamagedResponseTimer: 5,
            playerBuiltBuildableStructureResponseTimer: 20
        },
        barracks: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_FrostFaction_Variations,
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_FrostFaction_Variations,
            // eslint-disable-next-line @typescript-eslint/camelcase
            [BARRACKS_NAME_DISRUPTOR]: DisruptorBarracksConfig_FrostFaction_Variations
        },
        aiConfig: {
            [occupationAI.frost.attack]: {
                controllerArchetype: "badger:ai_entity_frost_offensive",
                controllerTag: "frostAttackAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["frostAttackRallyPoint"],
                reinforcementControlGroupTag: "occupationFrostAttack"
            },
            [occupationAI.frost.defend]: {
                controllerArchetype: "badger:ai_entity_frost_defensive",
                controllerTag: "frostDefendAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["frostDefendRallyPoint"],
                reinforcementControlGroupTag: "occupationFrostDefend"
            },
            [occupationAI.frost.siege]: {
                controllerArchetype: "badger:ai_entity_occupation_siege",
                controllerTag: "occupationSiegeAi",
                waveReinforcementsEnabled: false,
                reinforcementPositionTagsToSearchFor: ["frostSiegeRallyPoint"],
                reinforcementControlGroupTag: "occupationFrostSiege"
            }
        },
        piglinRallyPoints: {
            ["occupationFrostAttack"]: {
                controlGroupTag: "occupationFrostAttack",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.frost.attack, 100]],
                positionTags: ["frostAttackRallyPoint"],
                positionTagExcludes: []
            },
            ["occupationFrostDefend"]: {
                controlGroupTag: "occupationFrostDefend",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.frost.defend, 100]],
                positionTags: ["frostDefendRallyPoint"],
                positionTagExcludes: []
            },
            ["occupationFrostSiege"]: {
                controlGroupTag: "occupationFrostSiege",
                composition: occupationCompositions.runtsOnly,
                ais: [[occupationAI.frost.siege, 100]],
                positionTags: ["frostSiegeRallyPoint"],
                positionTagExcludes: []
            }
        },
        waveData: {
            initialWaveDelay: 30,
            ignoreCountModifier: true,
            concurrentPiglinSoftCap: 175,
            escalationWaves: [
                // 0
                {
                    aiDistribution: [[occupationAI.frost.defend, 100]],
                    wave: [
                        [PIGLIN_ARCHETYPE.GRUNTER, 50],
                        [PIGLIN_ARCHETYPE.ENGINEER, 3]
                    ]
                },
                // 1
                {
                    aiDistribution: [[occupationAI.frost.defend, 100]],
                    wave: [
                        [PIGLIN_ARCHETYPE.GRUNTER, 50],
                        [PIGLIN_ARCHETYPE.ENGINEER, 3]
                    ]
                },
                // 2
                {
                    aiDistribution: [[occupationAI.frost.defend, 100]],
                    wave: [[PIGLIN_ARCHETYPE.GRENADIER, 12]]
                }
            ],
            //Main
            mainWaves: [
                {
                    // Small base themed waves
                    waveAmount: 2,
                    waveVariations: [
                        {
                            // Solutions: Wood/Zombie
                            nextWaveTimer: 40,
                            wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                        }
                    ]
                },
                {
                    waveAmount: 2,
                    waveVariations: [
                        {
                            // Solutions: Wood/Zombie
                            nextWaveTimer: 40,
                            wave: [
                                [PIGLIN_ARCHETYPE.RUNT, 12],
                                [PIGLIN_ARCHETYPE.MEDIC, 2]
                            ]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Wood/Zombie
                            nextWaveTimer: 50,
                            wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                        }
                    ]
                },
                {
                    waveAmount: 1,
                    waveVariations: [
                        {
                            // Solutions: Wood/Zombie
                            nextWaveTimer: 40,
                            wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                        }
                    ]
                }
            ],
            //Trickle
            trickleWaves: [
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                },
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [[PIGLIN_ARCHETYPE.RUNT, 15]]
                },
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [
                        [PIGLIN_ARCHETYPE.RUNT, 10],
                        [PIGLIN_ARCHETYPE.MEDIC, 1]
                    ]
                }
            ],
            // We activate these waves once the player has freed the occupation
            counterTrickleWaves: [
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [[PIGLIN_ARCHETYPE.RUNT, 10]]
                },
                {
                    // Solutions: Wood/Zombie
                    nextWaveTimer: 50,
                    wave: [[PIGLIN_ARCHETYPE.RUNT, 10]]
                }
            ]
        },
        responses: {
            unitAssignedTag: "response_assigned",
            unitExemptTag: "response_exempt",
            minTimeBetweenResponses: 25,
            waves: {
                normal: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.frost.siege, 100]]
                },
                escalated: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.frost.defend, 100]]
                }
            },
            scripted: {
                initialOccupation: {
                    gatherPercentage: 100,
                    aiDistribution: [[occupationAI.frost.siege, 100]]
                }
            }
        }
    }
}

const _assignGuardedBehaviour = (piglinEG) => {
    const guardedBehaviourDictionary = maOccupationVal.common.guardedBehaviourDictionary
    guardedBehaviourDictionary.forEach((entry) => {
        if (QUERY_HasTags(piglinEG, [entry.tag])) {
            OUTPUT_SetBehavior(piglinEG, entry.behaviour)
        }
    })
}

const _DeckShuffleMobOccupation = (deck) => {
    DECK_ShuffleGroup(deck, RANDOM_GROUP_MOB_OCCUPATION)
}

// Attack base
const _attackFactionOccupationBaseDeck = (villageId, mobId) => {
    const numOfRaisedPlatforms = 4

    const baseDeck = DECK_Empty()
    SetupBasicVillageClearingCards(baseDeck)
    //INITIAL ZONES------------------------------------------------------------------------
    //const portalLayer = LayerOfZonesCard("addLayerOfZones", 1)
    const centerZone = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])
    const portalZone = ZonesCard("addZone", 20)
    DECK_MultiplyByMultipleRules(portalZone, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("attackRing0"), ZoneHeightChangeCard("6DownRelativeToCentre")])

    //PORTAL------------------------------------------------------------------------
    const portal = BuildableCard("occupationAttackPortalSmall", 1)
    // eslint-disable-next-line prettier/prettier
    DECK_MultiplyByMultipleRules(portal, [PlacementPreferenceCard("connectToPath"), ZoneFilterCard("attackRing0"), PlacementPreferenceCard("facingSouth"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    //INSIDE RALLY POINTS---------------------------------------------------------
    const ring1NonObjectiveBuildings = _GetAttackBuildingGroup(villageId, 1, "attackRing0")
    DECK_MultiplyByMultipleRules(ring1NonObjectiveBuildings, [PlacementPreferenceCard("ignoreZoneFilterForOverlappingZones")])

    //Portal
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(portalZone, baseDeck)
    //DECK_PutOnBottomOf(portalLayer, baseDeck)
    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(ring1NonObjectiveBuildings, baseDeck)

    const barracks0 = _GetAttackBuildingGroup(villageId, 6, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks0, [TagCard("attackAIDefend"), TagCard("attackDefendGather0"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const barracks1 = _GetAttackBuildingGroup(villageId, 6, "attackRing0")
    DECK_MultiplyByMultipleRules(barracks1, [TagCard("attackAIDefend"), TagCard("attackDefendGather0"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    DECK_PutOnBottomOf(barracks0, baseDeck)
    DECK_PutOnBottomOf(barracks1, baseDeck)

    const insideRally0 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally0, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const insideRally1 = _GetAttackBuildingGroup(villageId, 4)
    DECK_MultiplyByMultipleRules(insideRally1, [TagCard("attackDefendRally"), TagCard("attackDefendGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.southWedge)])

    DECK_PutOnBottomOf(insideRally0, baseDeck)
    DECK_PutOnBottomOf(insideRally1, baseDeck)

    const raisedPlatforms = _MakeRaisedPlatformsAndSpacers(villageId, numOfRaisedPlatforms, baseDeck, "elementHeightThreeDown")
    const layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_PutOnBottomOf(layer, baseDeck)
    const ring2Lava = _AttackCreateLavaPoolsDeck("addZone", "attackRing6", "elementHeightOneDown", "elementHeightOneDown", [DIRECTION_CARD.eastWedge, DIRECTION_CARD.southWedge, DIRECTION_CARD.westWedge, DIRECTION_CARD.northWedge])
    DECK_MultiplyByMultipleRules(ring2Lava, [ZoneFilterCard("placeInsideVillageAlways")])
    DECK_PutOnBottomOf(ring2Lava, baseDeck)

    const raisedBuildings = DECK_Empty()
    const channelBuildings = DECK_Empty()

    const districtDataBarracks0 = elementDistricts[raisedPlatforms[0]]
    const rBarracks0 = _GetAttackBuildingGroup(villageId, 5)
    DECK_MultiplyByMultipleRules(rBarracks0, [TagCard("attackAIDefend"), PlacementPreferenceCard("connectToPath"), TagCard("attackSiegeGather0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(districtDataBarracks0.placement)])
    DECK_PutOnBottomOf(rBarracks0, channelBuildings)

    const districtDataBarracks1 = elementDistricts[raisedPlatforms[1]]
    const cBarracks1 = _GetAttackBuildingGroup(villageId, 6)
    DECK_MultiplyByMultipleRules(cBarracks1, [TagCard("attackAIDefend"), PlacementPreferenceCard("connectToPath"), TagCard("attackSiegeGather3"), PlacementPreferenceCard(districtDataBarracks1.placement)])
    DECK_PutOnBottomOf(cBarracks1, channelBuildings)

    const districtDataBarracks2 = elementDistricts[raisedPlatforms[2]]
    const districtDataBarracks3 = elementDistricts[raisedPlatforms[3]]

    const arrow0 = _GetAttackBuildingGroup(villageId, 2)
    DECK_MultiplyByMultipleRules(arrow0, [PlacementPreferenceCard(districtDataBarracks2.placement)])
    DECK_PutOnBottomOf(arrow0, raisedBuildings)

    const arrow1 = _GetAttackBuildingGroup(villageId, 2)
    DECK_MultiplyByMultipleRules(arrow1, [PlacementPreferenceCard(districtDataBarracks3.placement)])
    DECK_PutOnBottomOf(arrow1, raisedBuildings)

    if (raisedPlatforms !== undefined) {
        for (const key in raisedPlatforms) {
            const districtData = elementDistricts[raisedPlatforms[key]]
            const rBuildings2 = _GetAttackBuildingGroup(villageId, 3)
            DECK_MultiplyByMultipleRules(rBuildings2, [PlacementPreferenceCard(districtData.placement)])
            DECK_PutOnBottomOf(rBuildings2, raisedBuildings)
        }
    }

    const ns0 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns0, [PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    DECK_PutOnBottomOf(ns0, raisedBuildings)

    const ns1 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns1, [PlacementPreferenceCard(DIRECTION_CARD.southWedge)])
    DECK_PutOnBottomOf(ns1, raisedBuildings)

    const ns2 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns2, [PlacementPreferenceCard(DIRECTION_CARD.westWedge)])
    DECK_PutOnBottomOf(ns2, raisedBuildings)

    const ns3 = _GetAttackBuildingGroup(villageId, 3)
    DECK_MultiplyByMultipleRules(ns3, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge)])
    DECK_PutOnBottomOf(ns3, raisedBuildings)

    //Hazards
    const attackWalls1 = WallsCard("attackWall")
    DECK_MultiplyByMultipleRules(attackWalls1, [ZoneFilterCard("attackOutskirtsPathZone"), PlacementPreferenceCard("attackWallCircleSineWave"), PlacementPreferenceCard("attackWallNoise"), PlacementPreferenceCard("withScoreThresholdPoint13")])

    const lavaPool = MoatCard("attackLavaPool")
    DECK_MultiplyByMultipleRules(lavaPool, [ZoneFilterCard("placeInsideVillageAlways")])

    //Play the cards

    //Weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //Paths
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.westWedge), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.eastWedge), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.northWedge), ZoneFilterCard("attackOutskirtsPathZone")])
    _BuildPath(baseDeck, [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackRing0"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)], [PlacementPreferenceCard(DIRECTION_CARD.southWedge), ZoneFilterCard("attackOutskirtsPathZone")])

    //Buildings
    DECK_PutOnBottomOf(raisedBuildings, baseDeck)
    DECK_PutOnBottomOf(channelBuildings, baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable("mobCage", 3, [ZoneFilterCard("attackRing0"), PlacementPreferenceCard(DIRECTION_CARD.northWedge), TagCard(maOccupationVal.common.piglinCageTag)]), baseDeck)

    DECK_PutOnBottomOf(attackWalls1, baseDeck)

    DECK_PutOnBottomOf(lavaPool, baseDeck)

    //cages
    BuildMobAllianceCages(baseDeck, mobId, villageId, false)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}

// Defend base
const _defendFactionOccupationBaseDeck = (villageId, mobId) => {
    const baseDeck = DECK_Empty()

    const defendMABaseMiniDeckNames = ["keepNearPortal", "innerKeep", "insideOuterWallNorth", "insideOuterWallEast", "insideOuterWallSouth", "insideOuterWallWest", "outskirts"]

    const defendMABaseGen = {
        small: {
            keepNearPortal: [[BUILDABLE_CARD.BUILDING_REGENERATOR]],
            innerKeep: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 2],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]
            ],
            insideOuterWallNorth: [
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            insideOuterWallEast: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            insideOuterWallSouth: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 2]
            ],
            insideOuterWallWest: [
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 2],
                [BUILDABLE_CARD.NETHERSPREADER, 2]
            ],
            outskirts: []
        }
    }

    SetupBasicVillageClearingCards(baseDeck)
    let firstZone = DECK_Empty()
    const miniDecks = CreateBuildableGenMiniDecks(defendMABaseMiniDeckNames, defendMABaseGen, BASE_SIZE_SMALL, villageId, RANDOM_GROUP_DEFEND_HORDE)

    const portal = BuildableCard("occupationDefendPortalSmall")
    firstZone = ZonesCard("defCenterZone", 1)
    DECK_MultiplyBySingle(firstZone, ZoneHeightChangeCard("def14Height"))
    DECK_MultiplyBySingle(firstZone, ZoneTagCard("defPathStart"))
    DECK_MultiplyBySingle(portal, ZoneHeightChangeCard("def14Height"))
    //portal modifiers and placement
    DECK_MultiplyBySingle(portal, PlacementPreferenceCard("facingNorth"))
    DECK_MultiplyBySingle(portal, PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
    DECK_MultiplyBySingle(portal, ZoneFilterCard("placeInsideVillageAlways"))
    DECK_MultiplyBySingle(portal, ForceBuildingPlacementCard("forceBuildingPlacement"))
    DECK_MultiplyBySingle(portal, ZoneTagCard("enable_debug_logging"))

    DECK_MultiplyByMultipleRules(firstZone, [ZoneTagCard("defInnerKeepWallTag")])
    DECK_MultiplyByMultipleRules(portal, [ZoneFilterCard("defInnerKeepWall")])

    let keepLOZ = DECK_Empty()
    let keepMidLOZ = DECK_Empty()
    //inner layer of zones w/ height modifiers

    //layer of zones if small
    keepLOZ = LayerOfZonesCard("defAddLayerOfZones", 1)
    DECK_MultiplyBySingle(keepLOZ, ZoneHeightChangeCard("def14Height"))
    DECK_MultiplyByMultipleRules(keepLOZ, [ZoneTagCard("defInnerKeep"), ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defGeneralZone")])

    keepMidLOZ = LayerOfZonesCard("defAddLayerOfZones", 1)
    DECK_MultiplyBySingle(keepMidLOZ, ZoneHeightChangeCard("def14Height"))
    DECK_MultiplyByMultipleRules(keepMidLOZ, [ZoneTagCard("defMidKeep"), ZoneTagCard("defInnerKeepWallTag"), ZoneTagCard("defGeneralZone")])

    // Walls
    let defOutsideWalls1 = DECK_Empty()
    let defOutsideWalls2 = DECK_Empty()
    let defOutsideWalls3 = DECK_Empty()
    let defOutsideWalls0 = DECK_Empty()

    defOutsideWalls0 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(defOutsideWalls0, [ZoneTagCard("defOutsideWallsTag"), ZoneTagCard("defOutskirtsPathZone"), ZoneTagCard("defGeneralZone"), ZoneHeightChangeCard("def5Height")])
    defOutsideWalls1 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(defOutsideWalls1, [ZoneTagCard("defOutsideWallsTag"), ZoneTagCard("defGeneralZone"), ZoneTagCard("defBurningEdgePathZone")])
    defOutsideWalls2 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(defOutsideWalls2, [ZoneTagCard("defOutsideWallsTag")])
    // defOuterLayerOfZones

    // Paths
    const northPathStartRules = [ZoneFilterCard("defPathStart"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const northPathEndRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("withScoreThresholdPoint2"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START)]
    let northBurningEdgePathStartRules = DECK_Empty()
    let northBurningEdgePathEndRules = DECK_Empty()
    northBurningEdgePathStartRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")]
    northBurningEdgePathEndRules = [PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), ZoneFilterCard("defBurningEdgePathZone"), PlacementPreferenceCard("withScoreThresholdPoint2")]

    const eastPathStartRules = [ZoneFilterCard("defPathStart"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const eastPathEndRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush48"), PlacementPreferenceCard("closeToDistrictStart")]

    const westPathStartRules = [ZoneFilterCard("defPathStart"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
    const westPathEndRules = [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush48"), PlacementPreferenceCard("closeToDistrictStart")]

    // Create extra zone for 2nd path

    // Walls
    let innerWalls = DECK_Empty()
    let outerWalls = DECK_Empty()
    innerWalls = WallsCard("defInnerWalls")
    DECK_MultiplyBySingle(innerWalls, ZoneFilterCard("defInnerKeepWall"))
    outerWalls = WallsCard("defTowerWallLight")
    DECK_MultiplyBySingle(outerWalls, ZoneFilterCard("defOutskirtsPathZone"))

    // Structures
    // Right beside portal
    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], PlacementPreferenceCard("placeRandomly"))
    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], PlacementPreferenceCard("placeWithoutSpacing"))
    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], ForceBuildingPlacementCard("forceBuildingPlacement"))
    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], ZoneFilterCard("defInnerKeep"))
    DECK_MultiplyBySingle(miniDecks["keepNearPortal"], PlacementPreferenceCard("defFacingPortalSmall"))
    _DeckShuffleDefend(miniDecks["keepNearPortal"])

    // Anything inside inner area
    DECK_MultiplyBySingle(miniDecks["innerKeep"], PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
    DECK_MultiplyBySingle(miniDecks["innerKeep"], PlacementPreferenceCard("placeRandomly"))
    DECK_MultiplyBySingle(miniDecks["innerKeep"], PlacementPreferenceCard("placeWithoutSpacing"))
    DECK_MultiplyBySingle(miniDecks["innerKeep"], TagCard("defendInnerKeepBuilding"))
    const innerKeepFilter = ZoneFilterCard("defMidKeep")
    DECK_MultiplyBySingle(miniDecks["innerKeep"], innerKeepFilter)
    _DeckShuffleDefend(miniDecks["innerKeep"])

    // North ring
    DECK_MultiplyBySingle(miniDecks["insideOuterWallNorth"], ZoneFilterCard("defOutskirtsPathZone"))
    DECK_MultiplyBySingle(miniDecks["insideOuterWallNorth"], PlacementPreferenceCard(DIRECTION_CARD.northRect))
    _DeckShuffleDefend(miniDecks["insideOuterWallNorth"])

    // East ring
    DECK_MultiplyBySingle(miniDecks["insideOuterWallEast"], ZoneFilterCard("defOutskirtsPathZone"))
    DECK_MultiplyBySingle(miniDecks["insideOuterWallEast"], PlacementPreferenceCard(DIRECTION_CARD.eastWedge))
    _DeckShuffleDefend(miniDecks["insideOuterWallEast"])

    // South ring
    DECK_MultiplyBySingle(miniDecks["insideOuterWallSouth"], ZoneFilterCard("defOutskirtsPathZone"))
    DECK_MultiplyBySingle(miniDecks["insideOuterWallSouth"], PlacementPreferenceCard(DIRECTION_CARD.southWedge))
    _DeckShuffleDefend(miniDecks["insideOuterWallSouth"])

    // West ring
    DECK_MultiplyBySingle(miniDecks["insideOuterWallWest"], ZoneFilterCard("defOutskirtsPathZone"))
    DECK_MultiplyBySingle(miniDecks["insideOuterWallWest"], PlacementPreferenceCard(DIRECTION_CARD.westWedge))
    _DeckShuffleDefend(miniDecks["insideOuterWallWest"])

    // Outskirts
    DECK_MultiplyBySingle(miniDecks["outskirts"], PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START))
    DECK_MultiplyBySingle(miniDecks["outskirts"], PlacementPreferenceCard("withScoreThresholdPoint2"))
    DECK_MultiplyBySingle(miniDecks["outskirts"], ZoneFilterCard("defOutskirtsNetherSpreader"))
    _DeckShuffleDefend(miniDecks["outskirts"])

    //-------------------ACTUAL ORDER OF BASE PLACMENT IS HERE--------------------------//
    // Zones
    DECK_PutOnBottomOf(firstZone, baseDeck)
    DECK_PutOnBottomOf(keepLOZ, baseDeck)
    DECK_PutOnBottomOf(keepMidLOZ, baseDeck)
    DECK_PutOnBottomOf(defOutsideWalls0, baseDeck)
    DECK_PutOnBottomOf(defOutsideWalls1, baseDeck)
    DECK_PutOnBottomOf(defOutsideWalls2, baseDeck)
    DECK_PutOnBottomOf(defOutsideWalls3, baseDeck)

    // Weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    // Paths
    CreatePathRequestOnBottomOf("defend_district_path", northPathStartRules, northPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("defend_district_path", northBurningEdgePathStartRules, northBurningEdgePathEndRules, baseDeck)

    CreatePathRequestOnBottomOf("defend_district_path", eastPathStartRules, eastPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("defend_district_path", westPathStartRules, westPathEndRules, baseDeck)

    // Walls
    DECK_PutOnBottomOf(innerWalls, baseDeck)
    DECK_PutOnBottomOf(outerWalls, baseDeck)

    // Structures
    DECK_PutOnBottomOf(portal, baseDeck)
    DECK_PutOnBottomOf(miniDecks["keepNearPortal"], baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable("mobCage", 2, [ZoneFilterCard("defInnerKeep"), PlacementPreferenceCard(DIRECTION_CARD.northWedge), PlacementPreferenceCard("placeWithoutSpacing"), TagCard(maOccupationVal.common.piglinCageTag)]), baseDeck)
    DECK_PutOnBottomOf(miniDecks["innerKeep"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["insideOuterWallNorth"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["insideOuterWallEast"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["insideOuterWallSouth"], baseDeck)
    DECK_PutOnBottomOf(miniDecks["insideOuterWallWest"], baseDeck)

    BuildMobAllianceCages(baseDeck, mobId, villageId, false)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}

const _obstacleFactionOccupationBaseDeck = (villageId, mobId) => {
    const baseDeck = DECK_Empty()

    // Districts
    const districts = {
        northDistrict: {
            name: "obstacleDistrict1",
            card: DistrictCard("obstacleDistrict1"),
            id: 0,
            miniDecks: ["northSpires"],
            deck: DECK_Empty()
        },
        northeastDistrict: {
            name: "obstacleDistrict5",
            card: DistrictCard("obstacleDistrict5"),
            id: 4,
            miniDecks: ["northeastSpires"],
            deck: DECK_Empty()
        },
        northwestDistrict: {
            name: "obstacleDistrict8",
            card: DistrictCard("obstacleDistrict8"),
            id: 7,
            miniDecks: ["northwestSpires"],
            deck: DECK_Empty()
        }
    }

    // Mini-decks
    const baseStructureLayout = {
        main: {
            keepPrimary: [],
            keepSecondary: [],
            keepUtility: [[BUILDABLE_CARD.NETHERSPREADER, 1]],
            keepPlateau: [],
            northSpires: [
                ["mobCage", 1, [maOccupationVal.common.piglinCageTag]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1]
            ],
            northeastSpires: [
                ["mobCage", 1, [maOccupationVal.common.piglinCageTag]],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            northwestSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                ["mobCage", 1, [maOccupationVal.common.piglinCageTag]]
            ],
            obstacleSmallSpire: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]]
        }
    }
    const miniDecks = CreateBuildableGenMinidecksForSize(Object.keys(baseStructureLayout.main), baseStructureLayout, "main", villageId)

    // Central platform
    const firstZone = ZonesCard("obstacleCenterZone", 1)
    DECK_MultiplyByMultipleRules(firstZone, [ZoneHeightChangeCard(ObstacleHeight.H23), ZoneTagCard("obstacleValidZone")])
    const keepZone = ZonesCard("addZone", 19)
    DECK_MultiplyByMultipleRules(keepZone, [ZoneHeightChangeCard(ObstacleHeight.H23), ZoneTagCard("keepZone"), ZoneTagCard("obstacleValidZone")])
    const dropZone1 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(dropZone1, [ZoneHeightChangeCard(ObstacleHeight.H17), ZoneTagCard("dropZone"), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const dropZone2 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(dropZone2, [ZoneHeightChangeCard(ObstacleHeight.H12), ZoneTagCard("dropZone"), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const dropZone3 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(dropZone3, [ZoneHeightChangeCard(ObstacleHeight.H7), ZoneTagCard("dropZone"), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])

    const portalType = "occupationObstaclePortalSmall"
    const portalRules = [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneHeightChangeCard(ObstacleHeight.H16), PlacementPreferenceCard("facingNorth"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("obstacleValidZone"), ZoneFilterCard("placeInsideVillageAlways")]
    const portalTowers = _PlacePortalTowers(1, 1, 1, 1)

    DECK_MultiplyByMultipleRules(firstZone, [ZoneTagCard("obstacleInsideKeep"), ZoneTagCard("obstacleInsideKeepBuildings"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_MultiplyByMultipleRules(keepZone, [ZoneTagCard("obstacleInsideKeep"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_MultiplyByMultipleRules(portalTowers, [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneTagCard("obstacleInsideKeepBuildings"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    const portalDeck = DECK_Empty()
    _PlaceObjectiveStructure(portalType, portalDeck, portalRules, "")

    DECK_PutOnBottomOf(firstZone, baseDeck) //play first zone
    DECK_PutOnBottomOf(keepZone, baseDeck) //play keep zone
    DECK_PutOnBottomOf(dropZone1, baseDeck) //play keep zone
    DECK_PutOnBottomOf(dropZone2, baseDeck) //play keep zone
    DECK_PutOnBottomOf(dropZone3, baseDeck) //play keep zone
    DECK_PutOnBottomOf(portalDeck, baseDeck) // Play portal
    DECK_PutOnBottomOf(portalTowers, keepZone) //play portal towers

    // Keep structures
    DECK_PutOnBottomOf(_CreateBuildable("mobCage", 2, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.northRect), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), TagCard(maOccupationVal.common.piglinCageTag)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 2, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.southRect)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.eastWedge)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.westWedge)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.eastWedge)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.westWedge)]), baseDeck)

    //layer of zones to space inner/outer tiers //// any size
    const extraZone2 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(extraZone2, [ZoneTagCard("obstacleDeadZone"), ZoneHeightChangeCard(ObstacleHeight.Flatten)])
    DECK_PutOnBottomOf(extraZone2, baseDeck)

    // Spires
    // Extra space
    _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(ObstacleHeight.Flatten)])

    // North East District
    _CreateSpire(districts.northeastDistrict, ObstacleHeight.H14, 2, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.three, DIRECTION_CARD.northEastRect)

    // North West District
    _CreateSpire(districts.northwestDistrict, ObstacleHeight.H15, 2, obstacleZoneCards.smallSpire, obstacleVal.bridgeZone.none, DIRECTION_CARD.northWestRect)

    // North East
    _SetupDistrict(districts.northeastDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northEastRect)])
    // North West
    _SetupDistrict(districts.northwestDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWestRect)])

    // Terrain weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //keep primary structure rules
    //common structure rules
    DECK_MultiplyByMultipleRules(miniDecks["keepPrimary"], [ZoneFilterCard("obstacleInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")]) //PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["keepSecondary"], [ZoneFilterCard("obstacleInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")]) //PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["keepUtility"], [ZoneFilterCard("obstacleInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")])
    DECK_MultiplyByMultipleRules(miniDecks["keepPlateau"], [ZoneFilterCard("obstacleKeepPlateau"), PlacementPreferenceCard("defFacingPortalLarge")])

    DECK_MultiplyByMultipleRules(miniDecks["keepPrimary"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    DECK_MultiplyByMultipleRules(miniDecks["keepSecondary"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    DECK_MultiplyByMultipleRules(miniDecks["keepUtility"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START)])
    DECK_MultiplyByMultipleRules(miniDecks["keepPlateau"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_PutOnBottomOf(miniDecks["keepPrimary"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepSecondary"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepUtility"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepPlateau"], baseDeck) //play keep structures

    const spireNames = ["northSpires", "northeastSpires", "northwestSpires"]
    const platformNames = []

    //spire/platform structure rules
    _MultiplyMiniDeckByRules(miniDecks, spireNames, [ZoneFilterCard("obstacleSmallSpire"), PlacementPreferenceCard("placeRandomly")])
    _MultiplyMiniDeckByRules(miniDecks, platformNames, [ZoneFilterCard("obstaclePlatform"), PlacementPreferenceCard("placeRandomly")])

    //play spire/platform structures
    _PlayMiniDecks(baseDeck, miniDecks, spireNames)
    _PlayMiniDecks(baseDeck, miniDecks, platformNames)

    BuildMobAllianceCages(baseDeck, mobId, villageId, false)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}

const _frostFactionOccupationBaseDeck = (villageId, mobId) => {
    const baseDeck = DECK_Empty()

    // Districts
    const districts = {
        northDistrict: {
            name: "frostDistrict1",
            card: DistrictCard("frostDistrict1"),
            id: 0,
            miniDecks: ["northSpires"],
            deck: DECK_Empty()
        },
        northeastDistrict: {
            name: "frostDistrict5",
            card: DistrictCard("frostDistrict5"),
            id: 4,
            miniDecks: ["northeastSpires"],
            deck: DECK_Empty()
        },
        northwestDistrict: {
            name: "frostDistrict8",
            card: DistrictCard("frostDistrict8"),
            id: 7,
            miniDecks: ["northwestSpires"],
            deck: DECK_Empty()
        }
    }

    // Mini-decks
    const baseStructureLayout = {
        main: {
            keepPrimary: [],
            keepSecondary: [],
            keepUtility: [[BUILDABLE_CARD.NETHERSPREADER, 1]],
            keepPlateau: [],
            northSpires: [
                ["mobCage", 1, [maOccupationVal.common.piglinCageTag]],
                [BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1],
                [BUILDABLE_CARD.BARRACKS_FIGHTER, 1]
            ],
            northeastSpires: [
                ["mobCage", 1, [maOccupationVal.common.piglinCageTag]],
                [BUILDABLE_CARD.NETHERSPREADER, 1]
            ],
            northwestSpires: [
                [BUILDABLE_CARD.NETHERSPREADER, 1],
                ["mobCage", 1, [maOccupationVal.common.piglinCageTag]]
            ],
            frostSmallSpire: [[BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1]]
        }
    }
    const miniDecks = CreateBuildableGenMinidecksForSize(Object.keys(baseStructureLayout.main), baseStructureLayout, "main", villageId)

    // Central platform
    const firstZone = ZonesCard("frostCenterZone", 1)
    DECK_MultiplyByMultipleRules(firstZone, [ZoneHeightChangeCard(FrostHeight.H23), ZoneTagCard("frostValidZone")])
    const keepZone = ZonesCard("addZone", 19)
    DECK_MultiplyByMultipleRules(keepZone, [ZoneHeightChangeCard(FrostHeight.H23), ZoneTagCard("keepZone"), ZoneTagCard("obstacleValidZone")])
    const dropZone1 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(dropZone1, [ZoneHeightChangeCard(FrostHeight.H17), ZoneTagCard("dropZoneFrost"), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const dropZone2 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(dropZone2, [ZoneHeightChangeCard(FrostHeight.H12), ZoneTagCard("dropZoneFrost"), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])
    const dropZone3 = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(dropZone3, [ZoneHeightChangeCard(FrostHeight.H7), ZoneTagCard("dropZoneFrost"), PlacementPreferenceCard(DIRECTION_CARD.northWedge)])

    const portalType = "occupationFrostPortalSmall"
    const portalRules = [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneHeightChangeCard(FrostHeight.H16), PlacementPreferenceCard("facingNorth"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("frostValidZone"), ZoneFilterCard("placeInsideVillageAlways")]
    const portalTowers = _PlacePortalTowers(1, 1, 1, 1)

    DECK_MultiplyByMultipleRules(firstZone, [ZoneTagCard("frostInsideKeep"), ZoneTagCard("frostInsideKeepBuildings"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_MultiplyByMultipleRules(keepZone, [ZoneTagCard("frostInsideKeep"), ZoneFilterCard("placeInsideVillageAlways")])
    DECK_MultiplyByMultipleRules(portalTowers, [ForceBuildingPlacementCard("forceBuildingPlacement"), ZoneTagCard("frostInsideKeepBuildings"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    const portalDeck = DECK_Empty()
    _PlaceObjectiveStructure(portalType, portalDeck, portalRules, "")

    DECK_PutOnBottomOf(firstZone, baseDeck) //play first zone
    DECK_PutOnBottomOf(keepZone, baseDeck) //play keep zone
    DECK_PutOnBottomOf(dropZone1, baseDeck) //play keep zone
    DECK_PutOnBottomOf(dropZone2, baseDeck) //play keep zone
    DECK_PutOnBottomOf(dropZone3, baseDeck) //play keep zone
    DECK_PutOnBottomOf(portalDeck, baseDeck) // Play portal
    DECK_PutOnBottomOf(portalTowers, keepZone) //play portal towers

    // Keep structures
    DECK_PutOnBottomOf(_CreateBuildable("mobCage", 2, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.northRect), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), TagCard(maOccupationVal.common.piglinCageTag)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.TOWER_PIGLIN_KNOCKBACK, 2, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.southRect)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.eastWedge)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.TOWER_PIGLIN_ARROW, 1, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.westWedge)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.eastWedge)]), baseDeck)
    DECK_PutOnBottomOf(_CreateBuildable(BUILDABLE_CARD.BARRACKS_DISRUPTOR, 1, [ZoneFilterCard("keepZone"), PlacementPreferenceCard(DIRECTION_CARD.westWedge)]), baseDeck)

    //layer of zones to space inner/outer tiers //// any size
    const extraZone2 = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(extraZone2, [ZoneTagCard("frostDeadZone"), ZoneHeightChangeCard(FrostHeight.Flatten)])
    DECK_PutOnBottomOf(extraZone2, baseDeck)

    // Spires
    // Extra space
    _AddDeadzoneLayer(districts.northDistrict, 1, [ZoneHeightChangeCard(FrostHeight.Flatten)])

    // North East District
    _CreateSpire(districts.northeastDistrict, FrostHeight.H14, 2, frostZoneCards.smallSpire, frostVal.bridgeZone.three, DIRECTION_CARD.northEastRect)

    // North West District
    _CreateSpire(districts.northwestDistrict, FrostHeight.H15, 2, frostZoneCards.smallSpire, frostVal.bridgeZone.none, DIRECTION_CARD.northWestRect)

    // North East
    _SetupDistrict(districts.northeastDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northEastRect)])
    // North West
    _SetupDistrict(districts.northwestDistrict, baseDeck, miniDecks, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.northWestRect)])

    // Terrain weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //keep primary structure rules
    //common structure rules
    DECK_MultiplyByMultipleRules(miniDecks["keepPrimary"], [ZoneFilterCard("frostInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")]) //PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["keepSecondary"], [ZoneFilterCard("frostInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")]) //PlacementPreferenceCard("placeRandomly")])
    DECK_MultiplyByMultipleRules(miniDecks["keepUtility"], [ZoneFilterCard("frostInsideKeepBuildings"), PlacementPreferenceCard("defFacingPortalLarge")])
    DECK_MultiplyByMultipleRules(miniDecks["keepPlateau"], [ZoneFilterCard("frostKeepPlateau"), PlacementPreferenceCard("defFacingPortalLarge")])

    DECK_MultiplyByMultipleRules(miniDecks["keepPrimary"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    DECK_MultiplyByMultipleRules(miniDecks["keepSecondary"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])
    DECK_MultiplyByMultipleRules(miniDecks["keepUtility"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START)])
    DECK_MultiplyByMultipleRules(miniDecks["keepPlateau"], [PlacementPreferenceCard("placeRandomly"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)])

    DECK_PutOnBottomOf(miniDecks["keepPrimary"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepSecondary"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepUtility"], baseDeck) //play keep structures
    DECK_PutOnBottomOf(miniDecks["keepPlateau"], baseDeck) //play keep structures

    const spireNames = ["northSpires", "northeastSpires", "northwestSpires"]
    const platformNames = []

    //spire/platform structure rules
    _MultiplyMiniDeckByRules(miniDecks, spireNames, [ZoneFilterCard("frostSmallSpire"), PlacementPreferenceCard("placeRandomly")])
    _MultiplyMiniDeckByRules(miniDecks, platformNames, [ZoneFilterCard("frostPlatform"), PlacementPreferenceCard("placeRandomly")])

    //play spire/platform structures
    _PlayMiniDecks(baseDeck, miniDecks, spireNames)
    _PlayMiniDecks(baseDeck, miniDecks, platformNames)

    BuildMobAllianceCages(baseDeck, mobId, villageId, false)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}

const _SpawnPiglinBaseOccupyingMobAlliance = (mobId) => {
    Logi(`Spawning occupying base for mob alliance '${mobId}'`)

    const occupationData = maOccupationVal[mobId]
    //const baseData = occupationBaseData[occupationData.piglinFactionName]

    const theVillage = GetVillageEntityFromFaction(GetMobAllianceData(mobId).factionName)
    const villageId = QUERY_GetVillageIDFromEntity(theVillage)

    Logi("Placing the mob alliance base")
    OUTPUT_PlacementStart()
    OUTPUT_PlacementSlotTag(occupationData.baseSlot)

    if (OUTPUT_PlacementExecute()) {
        OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.OB_BIOME, GetStampTextureForFaction(occupationData.piglinFactionName, occupationData.baseSize), false)
        OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), occupationData.villageArchetype, occupationData.baseSize, occupationData.piglinFactionName, TEAM_ORANGE)
    } else {
        Loge(`Failed to place pigling occupying base ${occupationData.piglinFactionName} for mob alliance ${occupationData.factionName}`)
    }

    Logi("Waiting for an entity to spawn now")

    LISTENFOR_EntitySpawned({
        snippet: "es_mobs_during_piglin_occupation",
        ownerVillageId: villageId,
        includeTags: [mobId],
        excludeTags: ["caged_mob", "world_mob"],
        payloadString: mobId
    })
}

const OnMobAllianceOccupationStarted = (mobId) => {
    Logi(`OnMobAllianceOccupationStarted called for mob alliance ${mobId}`)

    const mobAllianceData = GetMobAllianceData(mobId)
    const occupationData = maOccupationVal[mobId]

    const aliveVillages = QUERY_GetAllAliveVillages()
    const occupyingBase = FILTER_ByVillageSize(aliveVillages, [occupationData.baseSize])
    const occupyingBaseId = QUERY_GetVillageIDFromEntity(occupyingBase)

    const mobAllianceVillage = FILTER_ByFactionName(aliveVillages, [mobAllianceData.factionName])
    const mobAllianceId = QUERY_GetVillageIDFromEntity(mobAllianceVillage)

    // Destroy any player built buildings overlapping with the portal
    _DestroyPlayerBuildingsAtMAPortal(mobId)

    OUTPUT_SetGlobalVariable(occupationData.vars.playerPresent, 0)

    SetVillageVariable(occupyingBaseId, maOccupationVal.common.attackingVillageIdKey, mobAllianceId)

    _RemoveDummyOccupationPiglins(mobAllianceId, mobId)

    const piglinBaseVicinityTV = OUTPUT_CreateVillageTriggerVolume(occupyingBaseId, maOccupationVal.common.piglinObjectiveVicinityPadding, ["player"], [], ALLIANCE_ENEMY)
    OUTPUT_AddTag(piglinBaseVicinityTV, occupationData.tags.baseVicinityTvTag)
    LISTENFOR_PresenceEntered({
        snippet: "pe_setup_destroy_piglins_objective",
        ownerVillageId: occupyingBaseId,
        triggerEntity: piglinBaseVicinityTV,
        threshold: 1,
        payloadString: mobId
    })

    LISTENFOR_PresenceExited({
        snippet: "pex_remove_destroy_piglins_objective",
        ownerVillageId: occupyingBaseId,
        triggerEntity: piglinBaseVicinityTV,
        threshold: 0,
        payloadString: mobId
    })

    const piglinBaseMobSpawnVicinityTV = OUTPUT_CreateVillageTriggerVolume(occupyingBaseId, maOccupationVal.common.piglinSpawningVicinityPadding, ["player"], [], ALLIANCE_ENEMY)
    OUTPUT_AddTag(piglinBaseMobSpawnVicinityTV, occupationData.tags.baseVicinityTvTag)
    LISTENFOR_PresenceEntered({
        snippet: "pe_spawn_ma_initial_piglins",
        ownerVillageId: occupyingBaseId,
        triggerEntity: piglinBaseMobSpawnVicinityTV,
        threshold: 1,
        payloadString: mobId
    })

    LISTENFOR_PresenceExited({
        snippet: "pex_despawn_ma_initial_piglins",
        ownerVillageId: occupyingBaseId,
        triggerEntity: piglinBaseMobSpawnVicinityTV,
        threshold: 0,
        payloadString: mobId
    })

    LISTENFOR_InvasionDestroyEntitiesObjective({
        snippet: "deo_check_mobs_join_the_fight",
        ownerVillageId: occupyingBaseId,
        villageId: occupyingBaseId,
        payloadString: mobId
    })

    // Need a tv to track piglins spawning in from trickle waves.
    const piglinSpawnTV = OUTPUT_CreateVillageTriggerVolume(mobAllianceId, 0, ["piglin", "mob"], [occupationData.tags.objectivePiglinsTag], ALLIANCE_ENEMY)
    OUTPUT_AddTag(piglinSpawnTV, occupationData.tags.piglinSpawnTvTag)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_piglins_spawned_from_invasion",
        ownerVillageId: mobAllianceId,
        triggerEntity: piglinSpawnTV,
        payloadString: mobId
    })

    // Start waves attacks against the village
    const piglinFactionName = QUERY_GetFactionNameFromVillageID(occupyingBaseId)
    StartWaveAttacks("mob_alliance_occupation", occupyingBaseId, mobAllianceId, occupationBaseData[piglinFactionName].waveData.initialWaveDelay)
}

const _GetOccupationClaimedAreaTag = (mobId) => {
    return `mob_alliance_occupation_claimed_area_${mobId}`
}

const StartMobAlliancePiglinInvasion = (mobId) => {
    const mobAllianceData = GetMobAllianceData(mobId)

    if (QUERY_GetGlobalVariable(mobAllianceData.global.mobAllianceGenerated) === 0) {
        OUTPUT_SetGlobalVariable(mobAllianceData.global.queueMobAlliancePiglinInvasion, 1)
        return
    }
    if (QUERY_GetGlobalVariable(mobAllianceData.global.soItBegins) > 0 || QUERY_GetGlobalVariable(mobAllianceData.global.mobAllianceCompleted) > 0) {
        return
    }
    OUTPUT_SetGlobalVariable(mobAllianceData.global.soItBegins, 1)

    Logi("StartMobAlliancePiglinInvasion  " + mobId)
    const theVillage = GetVillageEntityFromFaction(mobAllianceData.factionName)
    OUTPUT_MapSetKeyValue(theVillage, MAP_KEY.STATE, MAP_ICON_STATE.DISABLED) // We use DISABLED here since it's under (special) occupation rather than an active attack.
    OUTPUT_MapSetKeyValue(theVillage, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_OCCUPIED)
    const villageId = QUERY_GetVillageIDFromEntity(theVillage)

    RefreshBehaviourOfAllUncagedMobs(mobId)

    const tvEntityName = "badger:spatial_trigger_mob_alliance_gameplay"
    const piglinsTags = [
        { include: ["piglin", "mob"], exclude: [], alliance: ALLIANCE_ENEMY },
        { include: ["piglin", "mob"], exclude: [], alliance: ALLIANCE_FRIENDLY }
    ]
    const mobAlliancePiglinsTV = SpawnTriggerVolumeWithMultipleTagsets(theVillage, undefined, tvEntityName, TEAM_WILD, villageId, true, piglinsTags)
    const mobAllianceGameplayTV = SpawnTriggerVolume(theVillage, undefined, tvEntityName, TEAM_WILD, undefined, true, ["player_buildable"], [], ALLIANCE_FRIENDLY)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_piglins_on_mob_alliance_tv",
        ownerVillageId: villageId,
        triggerEntity: mobAlliancePiglinsTV,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_buildables_on_mob_alliance_tv",
        ownerVillageId: villageId,
        triggerEntity: mobAllianceGameplayTV,
        payloadString: mobAllianceData.id
    })

    const playerApproachedTV = OUTPUT_CreateVillageTriggerVolume(villageId, maOccupationVal.common.beforeOccupationSpawnDummyPiglinsVicinityPadding, ["player"], [], ALLIANCE_FRIENDLY)

    LISTENFOR_PresenceEntered({
        snippet: "pe_player_approached_mob_alliance_homestead_before_invasion",
        ownerVillageId: villageId,
        triggerEntity: playerApproachedTV,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_PresenceExited({
        snippet: "pex_player_left_mob_alliance_homestead_before_invasion",
        ownerVillageId: villageId,
        triggerEntity: playerApproachedTV,
        payloadString: mobAllianceData.id
    })

    const occupationData = maOccupationVal[mobId]
    LISTENFOR_CinematicFinished({
        snippet: "cf_piglin_attack",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: occupationData.cinematics.piglinOccupation,
        payloadString: mobId
    })
    LISTENFOR_CinematicFinished({
        snippet: "cf_piglin_attack",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: occupationData.cinematics.piglinOccupationNight,
        payloadString: mobId
    })

    // Spawn claimed area underneath
    const claimedArea = OUTPUT_ClaimArea(occupationData.piglinFactionName, theVillage, 150)
    OUTPUT_AddTag(claimedArea, _GetOccupationClaimedAreaTag(mobId))
}

SNIPPET_PresenceEntered("pe_player_approached_mob_alliance_homestead_before_invasion", (_triggerEntity, _count, payload) => {
    const mobId = payload.string
    Logv("pe_player_approached_mob_alliance_homestead_before_invasion " + mobId)
    if (QUERY_GetGlobalVariable(GetMobAllianceData(mobId).global.mobAllianceCompleted) === 0 && QUERY_GetGlobalVariable(GetMobAllianceData(mobId).global.soItBegins) >= 1 && QUERY_GetGlobalVariable(GetMobAllianceData(mobId).global.mobAlliancePiglinInvasionStarted) <= 0) {
        if (IncrementGlobal(GetMobAllianceData(mobId).global.playersEnteredPreOccupationZone) <= 1) {
            _SpawnDummyOccupationPiglins(payload.ownerVillageId, mobId)
        }
    } else {
        Once()
    }
})

SNIPPET_PresenceExited("pex_player_left_mob_alliance_homestead_before_invasion", (_triggerEntity, _count, payload) => {
    const mobId = payload.string
    Logv("pex_player_left_mob_alliance_homestead_before_invasion" + mobId)
    if (QUERY_GetGlobalVariable(GetMobAllianceData(mobId).global.mobAllianceCompleted) === 0 && QUERY_GetGlobalVariable(GetMobAllianceData(mobId).global.soItBegins) >= 1) {
        if (DecrementGlobal(GetMobAllianceData(mobId).global.playersEnteredPreOccupationZone) <= 0) {
            _RemoveDummyOccupationPiglins(payload.ownerVillageId, mobId)
        }
    } else {
        Once()
    }
})

const _SpawnDummyOccupationPiglins = (villageId, mobId) => {
    // These are piglins that will show up at the homestead occupying it, before the base and the actual forces occupy it.
    // These forces will get destroyed once the initial forces get spawned in.
    maOccupationVal.common.dummyPiglinsToSpawn.forEach((piglinData) => {
        const piglins = SpawnEntitiesInVillage(piglinData.id, piglinData.count, TEAM_ORANGE, villageId, piglinData.minRadius, piglinData.maxRadius)
        OUTPUT_AddTag(piglins, `dummy_occupation_piglin_${mobId}`)
    })
}

const _RemoveDummyOccupationPiglins = (_villageId, mobId) => {
    const piglins = QUERY_GetEntitiesWithTagFilter([`dummy_occupation_piglin_${mobId}`], [])
    OUTPUT_DestroyEntities(piglins)
}

SNIPPET_CinematicEvent("ce_spawn_base_and_teleport_to_piglin_attack_started_viewpoint", (payload) => {
    const mobId = payload.string
    Logi(`~~~~~ ce_spawn_base_and_teleport_to_piglin_attack_started_viewpoint ${mobId} ~~~~~`)

    _SpawnPiglinBaseOccupyingMobAlliance(mobId)

    const nearbyPlayers = FILTER_ByDistance(GetAllPlayers(), GetMobAllianceCenterBuilding(mobId), maOccupationVal.common.cinematicPlayerGatherRange)
    const viewpoints = QUERY_GetEntitiesWithTagFilter([`${mobId}InitialOccupationViewpoint`], [])

    if (HasEntities(nearbyPlayers)) {
        ForEachEntities(nearbyPlayers, (entity) => {
            Logi("~~~~~ teleporting player to viewpoint ~~~~~")
            const playerViewpoint = viewpoints.shift()
            if (!HasEntities(playerViewpoint)) {
                Loge("No valid viewpoint entity to teleport player to!")
            }
            const faceEntity = GetMobAllianceCenterBuilding(mobId)
            OUTPUT_TeleportAndOrientToEntity(entity, playerViewpoint, faceEntity)
        })
    } else {
        Loge("No players found in range to teleport to mob alliance initial occupation viewpoint!")
    }
})

const _SpawnPiglinsOccupyingMobAlliance = (mobId, occupyingBaseId, targetVillageId, aiResponseData) => {
    const occupationData = maOccupationVal[mobId]
    const occupyingBaseFaction = occupationData.piglinFactionName
    const occupyingPiglins = occupationBaseData[occupyingBaseFaction].piglinsToOccupyMobAlliance

    let allPiglins = EMPTY_ENTITY_GROUP
    occupyingPiglins.forEach((entry) => {
        const minRange = entry.minRange ? entry.minRange : 20
        const maxRange = entry.maxRange ? entry.maxRange : 50
        const piglins = SpawnEntitiesInVillage(entry.entity, entry.amount, TEAM_ORANGE, targetVillageId, minRange, maxRange, occupyingBaseFaction, occupyingBaseId)

        allPiglins = OPER_Union(allPiglins, piglins)
    })

    DistributeUnitsToAI(allPiglins, aiResponseData.responses.scripted.initialOccupation.aiDistribution, aiResponseData.aiConfig)

    OUTPUT_AddTag(allPiglins, occupationData.tags.objectivePiglinsTag)

    if (DoOnce(occupationData.vars.occupyingPiglinCountInitialized)) {
        const allPiglinCount = QUERY_GetEntitiesCount(allPiglins)
        const clearCount = Math.floor(allPiglinCount * (maOccupationVal.common.occupyingPiglinClearPercent / 100))
        OUTPUT_SetGlobalVariable(occupationData.vars.occupyingPiglinCount, clearCount)
    }
}

const _BuildCages = (mobId) => {
    const mobAllianceData = GetMobAllianceData(mobId)
    if (IsOccupationBeatOver(mobId)) {
        return
    }
    const mobAllianceVillageId = QUERY_GetVillageIDFromEntity(GetVillageEntityFromFaction(mobAllianceData.factionName))

    const cageDeck = DECK_Empty()

    const numberOfCagesToBuild = 5
    const randomCageDeck = BuildableCard(mobAllianceData.villageGen.cageBuildingCard, numberOfCagesToBuild)
    if (mobAllianceData.id === "creeper") {
        DECK_MultiplyByMultipleRules(randomCageDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("creeperCageZones"), PlacementPreferenceCard("placeWithoutSpacing"), PlacementPreferenceCard(PLACEMENT_RANDOM)])
    } else if (mobAllianceData.id === "skeleton") {
        DECK_MultiplyByMultipleRules(randomCageDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("skeletonCageZones"), PlacementPreferenceCard("placeWithoutSpacing"), PlacementPreferenceCard(PLACEMENT_RANDOM)])
    } else if (mobAllianceData.id === "zombie") {
        DECK_MultiplyByMultipleRules(randomCageDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("zombieCageZones"), PlacementPreferenceCard("placeWithoutSpacing"), PlacementPreferenceCard(PLACEMENT_RANDOM)])
    } else if (mobAllianceData.id === "spider") {
        DECK_MultiplyByMultipleRules(randomCageDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("spiderCageZones"), PlacementPreferenceCard("placeWithoutSpacing"), PlacementPreferenceCard(PLACEMENT_RANDOM)])
    } else if (mobAllianceData.id === "silverfish") {
        DECK_MultiplyByMultipleRules(randomCageDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("silverfishCageZones"), PlacementPreferenceCard("placeWithoutSpacing"), PlacementPreferenceCard(PLACEMENT_RANDOM)])
    } else if (mobAllianceData.id === "slime") {
        DECK_MultiplyByMultipleRules(randomCageDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("slimeCageZones"), PlacementPreferenceCard("placeWithoutSpacing"), PlacementPreferenceCard(PLACEMENT_RANDOM)])
    } else {
        throw new Error('Attempted to build cages for an unknown mob alliance: "' + mobAllianceData.id + '". If a new alliance has been added, please update this script.')
    }

    DECK_PutOnBottomOf(randomCageDeck, cageDeck)

    OUTPUT_AppendNamedDeck(INSTANT_BUILD_DECK_NAME + mobAllianceVillageId, cageDeck)

    LISTENFOR_BuildingComplete({
        snippet: "bc_cage",
        ownerVillageId: mobAllianceVillageId,
        includeTags: ["mob_alliance_mob_cage"],
        villageId: mobAllianceVillageId,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_caged_mobs",
        ownerVillageId: mobAllianceVillageId,
        includeTags: ["caged_mob"],
        villageId: mobAllianceVillageId,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_PlayerInteracted({
        snippet: "pi_cage",
        ownerVillageId: mobAllianceVillageId,
        includeTags: ["mob_alliance_mob_cage"],
        villageId: mobAllianceVillageId,
        payloadString: mobAllianceData.id
    })
}

const _DestroyPlayerBuildingsAtMAPortal = (mobId) => {
    const piglinPortal = QUERY_GetEntitiesWithTags([GetMAPiglinPortalTag(mobId)])
    if (HasEntities(piglinPortal)) {
        const overlappingPlayerBuildings = FILTER_ByHasCreator(FILTER_ByDistance(QUERY_GetEntitiesWithTags([TAG_BUILDABLE]), piglinPortal, maOccupationVal.common.destroyPlayerStructureDistance))
        OUTPUT_DamageEntitiesByPercentage(overlappingPlayerBuildings, 100)
    } else {
        Loge(`Unable to find ${mobId} mob alliance occupation portal!`)
    }
}

const _PlayerEngagedMobAllianceBattle = (mobId) => {
    const mobAllianceData = GetMobAllianceData(mobId)
    if (QUERY_GetGlobalVariable(mobAllianceData.global.playerHasEngagedFirstFight) === 0) {
        IncrementGlobal(mobAllianceData.global.playerHasEngagedFirstFight)
    }
}

const _SendMobsToGatherPoints = (mobs, mobId) => {
    const centralBuilding = GetMobAllianceCenterBuilding(mobId)
    const gatherPoints = QUERY_GetChildEntitiesWithInstanceName(centralBuilding, GetMAGatherPointsTag(mobId))
    if (!HasEntities(gatherPoints)) {
        return
    }
    OUTPUT_MoveAttackPosition(mobs, RandomEntity(gatherPoints), 4, CALLBACK_NONE)
}

const _MobsJoinTheFight = (mobId) => {
    Logi(`Starting 'Mobs Join The Fight' beat for ${mobId}`)

    const occupationData = maOccupationVal[mobId]
    const mobAllianceData = GetMobAllianceData(mobId)

    const aliveVillages = QUERY_GetAllAliveVillages()
    const occupyingBase = FILTER_ByVillageSize(aliveVillages, [occupationData.baseSize])
    const occupyingBaseId = QUERY_GetVillageIDFromEntity(occupyingBase)

    OUTPUT_RemoveDestroyEntitiesObjective(occupyingBaseId)

    // Despawn TVs we previously set up for this beat
    let despawnTVs = EMPTY_ENTITY_GROUP
    despawnTVs = OPER_Union(despawnTVs, QUERY_GetEntitiesWithTags([occupationData.tags.baseVicinityTvTag]))
    despawnTVs = OPER_Union(despawnTVs, QUERY_GetEntitiesWithTags([occupationData.tags.piglinSpawnTvTag]))
    OUTPUT_DespawnEntities(despawnTVs)

    const mobAllianceVillageEntity = GetVillageEntityFromFaction(mobAllianceData.factionName)
    const mobAllianceVillageId = QUERY_GetVillageIDFromEntity(mobAllianceVillageEntity)
    const remainingCages = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(mobAllianceVillageId), ["mob_alliance_mob_cage"], ["cage_opened"])

    // Cinematic candidates
    const lastCage = RandomEntity(remainingCages)

    // Race condition: Adding a slight delay in playing the cine to prevent this NIS from playing if the portal was destroyed first
    LISTENFOR_LocalTimer({
        snippet: "lt_play_mobs_join_the_fight",
        ownerVillageId: mobAllianceVillageId,
        waitTime: 1,
        payloadString: mobId
    })

    IncrementGlobal(mobAllianceData.global.allCagesRemoved)

    // Destroy any remaining cages besides the one we pass into the cinematic (the NIS will destroy the cage).
    OUTPUT_DestroyEntities(OPER_Difference(remainingCages, lastCage))

    // Switch barracks to counter comps
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(occupyingBaseId, occupationBaseData[occupationData.piglinFactionName].barracks, 1)

    // Heal all the mob alliance buildings for the join the fight beat so players have access to free mobs
    const mobAllianceCenter = GetMobAllianceCenterBuilding(mobId)
    const mobAllianceHouses = QUERY_GetEntitiesWithTags([GetMAHouseTag(mobId)])
    OUTPUT_SetHealthPercent(OPER_Union(mobAllianceCenter, mobAllianceHouses), 100)

    _TriggerPortalEscalationWave(occupyingBaseId, mobId, 2)
}

SNIPPET_LocalTimer("lt_play_mobs_join_the_fight", (payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]
    const mobAllianceData = GetMobAllianceData(mobId)

    const mobAllianceVillageEntity = GetVillageEntityFromFaction(mobAllianceData.factionName)
    const mobAllianceVillageId = QUERY_GetVillageIDFromEntity(mobAllianceVillageEntity)
    const remainingCages = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(mobAllianceVillageId), ["mob_alliance_mob_cage"], ["cage_opened"])

    const mobAllianceCenter = GetMobAllianceCenterBuilding(mobId)
    const isMobAllianceOccupationActive = QUERY_GetGlobalVariable(mobAllianceData.global.mobAllianceCompleted) === 0
    if (isMobAllianceOccupationActive) {
        if (QUERY_GetEntitiesCount(remainingCages) > 0) {
            const lastCage = RandomEntity(remainingCages)
            const closestPlayer = GetClosestPlayer(lastCage)

            OUTPUT_TriggerCinematic(occupationData.cinematics.mobJoinTheFight, OPER_Append(OPER_Append(mobAllianceCenter, closestPlayer), lastCage))
        } else {
            // Edge case potential race condition where the last cage was opened while the timer was waiting
            // if there's no more remaining cages, just trigger the cinematic without the closest player and cage, since we need the cinematic to finish
            OUTPUT_TriggerCinematic(occupationData.cinematics.mobJoinTheFight, [mobAllianceCenter])
        }
    }
})

const GetOccupationDataForOccupyingVillage = (villageId) => {
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    return occupationBaseData[villageFaction]
}

SetupBaseAIs(occupationBaseData[FACTION_NAME_ATTACK].aiConfig)
CreateCompositionRallyPointListeners(occupationBaseData[FACTION_NAME_ATTACK].piglinRallyPoints, occupationBaseData[FACTION_NAME_ATTACK].aiConfig)
SetupBaseAIs(occupationBaseData[FACTION_NAME_DEFEND].aiConfig)
CreateCompositionRallyPointListeners(occupationBaseData[FACTION_NAME_DEFEND].piglinRallyPoints, occupationBaseData[FACTION_NAME_DEFEND].aiConfig)
SetupBaseAIs(occupationBaseData[FACTION_NAME_OBSTACLE].aiConfig)
CreateCompositionRallyPointListeners(occupationBaseData[FACTION_NAME_OBSTACLE].piglinRallyPoints, occupationBaseData[FACTION_NAME_OBSTACLE].aiConfig)
SetupBaseAIs(occupationBaseData[FACTION_NAME_FROST].aiConfig)
CreateCompositionRallyPointListeners(occupationBaseData[FACTION_NAME_FROST].piglinRallyPoints, occupationBaseData[FACTION_NAME_FROST].aiConfig)


SNIPPET_InheritsFromGameMode("campaign", () => {
    maOccupationVal.mobIds.forEach((mobId) => {
        const occupationData = maOccupationVal[mobId]

        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_mob_alliance_act_2_started",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: occupationData.startOccupationGlobal,
            payloadString: mobId
        })

        LISTENFOR_VillagePlanned({
            snippet: "vp_mob_alliance_piglin",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: occupationData.piglinFactionName,
            villageSize: occupationData.baseSize,
            payloadString: mobId
        })

        LISTENFOR_VillageGenerated({
            snippet: "vg_mob_alliance_piglin",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: occupationData.piglinFactionName,
            villageSize: occupationData.baseSize,
            payloadString: mobId
        })
    })
})
SNIPPET_InheritsFromGameMode("editor", () => {
    maOccupationVal.mobIds.forEach((mobId) => {
        const occupationData = maOccupationVal[mobId]

        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_mob_alliance_act_2_started",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: occupationData.startOccupationGlobal,
            payloadString: mobId
        })

        LISTENFOR_VillagePlanned({
            snippet: "vp_mob_alliance_piglin",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: occupationData.piglinFactionName,
            villageSize: occupationData.baseSize,
            payloadString: mobId
        })
        LISTENFOR_VillageGenerated({
            snippet: "vg_mob_alliance_piglin",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: occupationData.piglinFactionName,
            villageSize: occupationData.baseSize,
            payloadString: mobId
        })
    })
})

SNIPPET_GlobalVariableChanged("gvc_mob_alliance_act_2_started", (_oldValue, newValue, payload) => {
    if (newValue === 1) {
        const mobAllianceId = payload.string
        Logi("gvc_mob_alliance_act_2_started = " + mobAllianceId)
        StartMobAlliancePiglinInvasion(mobAllianceId)
        Once()
    }
})

SNIPPET_CinematicFinished("cf_piglin_attack", (payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]
    const villageId = QUERY_GetVillageIDFromEntity(GetVillageEntityFromFaction(GetMobAllianceData(mobId).factionName))

    if (DoOnce(maOccupationVal.common.piglinAttackIntroVOPlayed) === 0) {
        if (occupationData.VOs.intro) {
            PlayDelayedPresentationToClosePlayers(occupationData.VOs.intro, villageId, 2)
        } else {
            Logw(`Intro VO doesn't exist for mob alliance '${mobId}'`)
        }
    } else {
        PlayDelayedPresentationToClosePlayers(occupationData.VOs.mobAlliancePiglinAttack, villageId, 2)
    }
})

//--PIGLIN BASE LOGIC

//Piglin base spawn
SNIPPET_VillagePlanned("vp_mob_alliance_piglin", (villageId, payload) => {
    const mobId = payload.string
    const mobAllianceData = GetMobAllianceData(mobId)
    const occupationData = maOccupationVal[mobId]
    Logi("vp_mob_alliance_piglin!!!!!!!!!! " + QUERY_GetFactionSizeFromVillageID(villageId))

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_player_engaged_mob_alliance_fight",
        ownerVillageId: villageId,
        variableName: mobAllianceData.global.playerHasEngagedFirstFight,
        payloadString: mobId
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_mob_alliance_piglin_act3_started",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: ACTS.ACT_3A,
        payloadString: mobId
    })

    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_piglin_occupying_base_built",
        ownerVillageId: villageId,
        villageId: villageId,
        payloadString: mobId
    })

    LISTENFOR_CinematicFinished({
        snippet: "cf_join_the_fight",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: occupationData.cinematics.mobJoinTheFight,
        payloadString: mobId
    })

    LISTENFOR_CinematicFinished({
        snippet: "cf_flame_of_allegiance",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: occupationData.cinematics.flameOfAllegiance,
        payloadString: mobId
    })
    LISTENFOR_CinematicFinished({
        snippet: "cf_flame_of_allegiance",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: occupationData.cinematics.flameOfAllegianceNight,
        payloadString: mobId
    })

    IncrementGlobal(mobAllianceData.global.mobAlliancePiglinInvasionStarted)
    RefreshBehaviourOfAllUncagedMobs(mobId)
    RefreshAllSpawnersConfig(mobId)

    //Village Suspension Pairing
    const mobAllianceVillageEntity = GetVillageEntityFromFaction(mobAllianceData.factionName)
    if (HasEntities(mobAllianceVillageEntity)) {
        const piglinVillageEntity = GetVillageEntityFromID(villageId)
        OUTPUT_SetVillageSuspensionPair(mobAllianceVillageEntity, piglinVillageEntity)
    }
})

SNIPPET_VillageGenerated("vg_mob_alliance_piglin", (villageId, payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]
    const baseData = occupationBaseData[occupationData.piglinFactionName]
    InitializeBaseAIs(villageId, baseData.aiConfig, baseData.piglinRallyPoints)

    // Construct occupation base for the given piglin faction
    baseData.constructor(villageId, mobId)

    InitRalliesForVillageAttack(villageId, baseData)

    //Audio
    SetupAudioEntityForBase(villageId, maOccupationVal.common.audioEntityPiglin)

    LISTENFOR_VillageDestroyed({
        snippet: "vd_piglin_occupation_village_destroyed",
        ownerVillageId: villageId,
        villageId: villageId,
        payloadString: mobId
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_piglin_occupation_portal",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["portal_piglin"],
        payloadString: mobId
    })

    if (occupationData.piglinFactionName === FACTION_NAME_ATTACK) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_attack_patrol_barracks",
            ownerVillageId: villageId,
            includeTags: ["attackAIPatrol"],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_attack_defend_barracks",
            ownerVillageId: villageId,
            includeTags: ["attackAIDefend"],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_attack_siege_barracks",
            ownerVillageId: villageId,
            includeTags: ["attackAISiege"],
            villageId: villageId
        })
    } else if (occupationData.piglinFactionName === FACTION_NAME_DEFEND) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_defend_attack_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_FIGHTER],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_defend_defend_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_DISRUPTOR],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_defend_siege_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_SIEGER],
            villageId: villageId
        })
    } else if (occupationData.piglinFactionName === FACTION_NAME_FROST) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_frost_attack_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_FIGHTER],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_frost_defend_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_DISRUPTOR],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_frost_siege_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_SIEGER],
            villageId: villageId
        })
    } else if (occupationData.piglinFactionName === FACTION_NAME_OBSTACLE) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_obstacle_attack_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_FIGHTER],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_obstacle_defend_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_DISRUPTOR],
            villageId: villageId
        })
        LISTENFOR_BuildingComplete({
            snippet: "bc_occupation_obstacle_siege_barracks",
            ownerVillageId: villageId,
            includeTags: [BARRACKS_NAME_SIEGER],
            villageId: villageId
        })
    }
})

//// Attack horde barracks snippets ////
SNIPPET_BuildingComplete("bc_occupation_attack_patrol_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_ATTACK].piglinRallyPoints["occupationAttackDefend"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.attack.defend)

    SetBarracksConfigForVillageVariation(buildingEntity, FighterBarracksConfig_AttackFaction_Variations)
})

SNIPPET_BuildingComplete("bc_occupation_attack_defend_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_ATTACK].piglinRallyPoints["occupationAttackDefend"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.attack.defend)

    SetBarracksConfigForVillageVariation(buildingEntity, DisruptorBarracksConfig_AttackFaction_Variations)
})

SNIPPET_BuildingComplete("bc_occupation_attack_siege_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_ATTACK].piglinRallyPoints["occupationAttackSiege"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.attack.siege)

    SetBarracksConfigForVillageVariation(buildingEntity, SiegerBarracksConfig_AttackFaction_Variations)
})

//// Defend horde barracks snippets ////

SNIPPET_BuildingComplete("bc_occupation_defend_attack_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_DEFEND].piglinRallyPoints["occupationDefendDefend"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.defend.defend)

    SetBarracksConfigForVillageVariation(buildingEntity, FighterBarracksConfig_DefendFaction_Variations)
})

SNIPPET_BuildingComplete("bc_occupation_defend_defend_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_ATTACK].piglinRallyPoints["occupationDefendDefend"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.defend.defend)

    // Proper Defend horde doesn't use disruptor barracks, so just give it Fighter config
    SetBarracksConfigForVillageVariation(buildingEntity, FighterBarracksConfig_DefendFaction_Variations)
})

SNIPPET_BuildingComplete("bc_occupation_defend_siege_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_DEFEND].piglinRallyPoints["occupationDefendSiege"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.defend.siege)

    SetBarracksConfigForVillageVariation(buildingEntity, SiegerBarracksConfig_DefendFaction_Variations)
})

//// Obstacle horde barracks snippets ////

SNIPPET_BuildingComplete("bc_occupation_obstacle_attack_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_OBSTACLE].piglinRallyPoints["occupationObstacleDefend"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.obstacle.defend)

    SetBarracksConfigForVillageVariation(buildingEntity, FighterBarracksConfig_ObstacleFaction_Variations)
})

SNIPPET_BuildingComplete("bc_occupation_obstacle_defend_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_OBSTACLE].piglinRallyPoints["occupationObstacleDefend"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.obstacle.defend)

    SetBarracksConfigForVillageVariation(buildingEntity, DisruptorBarracksConfig_ObstacleFaction_Variations)
})

SNIPPET_BuildingComplete("bc_occupation_obstacle_siege_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_OBSTACLE].piglinRallyPoints["occupationObstacleSiege"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.obstacle.siege)

    SetBarracksConfigForVillageVariation(buildingEntity, SiegerBarracksConfig_ObstacleFaction_Variations)
})

//// Frost horde barracks snippets ////

SNIPPET_BuildingComplete("bc_occupation_frost_attack_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_FROST].piglinRallyPoints["occupationFrostDefend"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.frost.defend)

    SetBarracksConfigForVillageVariation(buildingEntity, FighterBarracksConfig_FrostFaction_Variations)
})

SNIPPET_BuildingComplete("bc_occupation_frost_defend_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_FROST].piglinRallyPoints["occupationFrostDefend"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.frost.defend)

    SetBarracksConfigForVillageVariation(buildingEntity, DisruptorBarracksConfig_FrostFaction_Variations)
})

SNIPPET_BuildingComplete("bc_occupation_frost_siege_barracks", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    const rallyPoints = occupationBaseData[FACTION_NAME_FROST].piglinRallyPoints["occupationFrostSiege"]
    RecruitSpawnedComposition(villageId, rallyPoints, buildingEntity, occupationAI.frost.siege)

    SetBarracksConfigForVillageVariation(buildingEntity, SiegerBarracksConfig_FrostFaction_Variations)
})

SNIPPET_BuildingComplete("bc_piglin_occupation_portal", (buildingCompleteEntity, payload) => {
    const mobId = payload.string
    Logi("bc_piglin_occupation_portal!!!!!!!!!!!!bc_piglin_occupation_portal")
    OUTPUT_AddTag(buildingCompleteEntity, GetMAPiglinPortalTag(mobId))

    const portal = buildingCompleteEntity
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_HealthChanged({
        snippet: "hc_piglin_occupation_portal_attacked",
        ownerVillageId: villageId,
        entities: portal,
        normalizedThreshold: maOccupationVal.common.portalHealthThreshold,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE,
        payloadString: mobId
    })

    const mobAllianceCenter = GetMobAllianceCenterBuilding(mobId)
    OUTPUT_TriggerPresentationEvent(mobAllianceCenter, "on_piglin_combat_start")
    OUTPUT_TriggerPresentationEvent(mobAllianceCenter, "on_piglin_combat_phase2")

    const mobAllianceHouses = QUERY_GetEntitiesWithTags([GetMAHouseTag(mobId)])
    const hurtboxes = QUERY_GetChildEntitiesWithInstanceName(mobAllianceHouses, GetMAHurtboxTag(mobId))
    if (HasEntities(hurtboxes)) {
        OUTPUT_AddTag(hurtboxes, "donotattack")
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_despawn_mobs",
        ownerVillageId: villageId,
        waitTime: 2,
        payloadString: mobId
    })
})

const OnSpawnedWaveUnits = (units, villageId, escalated) => {
    const aiResponseData = GetOccupationDataForOccupyingVillage(villageId)
    const aiDistribution = escalated ? aiResponseData.responses.waves.escalated.aiDistribution : aiResponseData.responses.waves.normal.aiDistribution
    DistributeUnitsToAI(units, aiDistribution, aiResponseData.aiConfig)
}

SetupSnippetsForWaveAttacks(
    "mob_alliance_occupation",
    (factionName, _baseSize) => {
        return occupationBaseData[factionName].waveData
    },
    OnSpawnedWaveUnits
)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetMobAlliancePiglinAiConfig = (faction) => {
    return occupationBaseData[faction].aiConfig
}

const GetMobAlliancePiglinMedicAiConfig = (faction) => {
    switch (faction) {
        case FACTION_NAME_ATTACK:
            return occupationBaseData[faction].aiConfig[occupationAI.attack.attack]
        case FACTION_NAME_DEFEND:
            return occupationBaseData[faction].aiConfig[occupationAI.defend.attack]
        case FACTION_NAME_OBSTACLE:
            return occupationBaseData[faction].aiConfig[occupationAI.obstacle.attack]
        case FACTION_NAME_FROST:
            return occupationBaseData[faction].aiConfig[occupationAI.frost.attack]
    }
}

SNIPPET_LocalTimer("lt_despawn_mobs", (payload) => {
    const mobId = payload.string
    const mobs = QUERY_GetEntitiesWithTagFilter([mobId], ["world_mob"])
    if (HasEntities(mobs)) {
        OUTPUT_DespawnEntities(mobs)
    }
})

SNIPPET_GlobalVariableChanged("gvc_player_engaged_mob_alliance_fight", (_oldValue, newValue, payload) => {
    const mobId = payload.string
    const mobAllianceData = GetMobAllianceData(mobId)

    if (newValue === 1) {
        RefreshBehaviourOfAllUncagedMobs(mobId)
        RefreshAllSpawnersConfig(mobId)

        const mobAllianceHouses = QUERY_GetEntitiesWithTags([GetMAHouseTag(mobId)])
        const hurtboxes = QUERY_GetChildEntitiesWithInstanceName(mobAllianceHouses, GetMAHurtboxTag(mobId))
        if (HasEntities(hurtboxes)) {
            OUTPUT_RemoveTag(hurtboxes, "donotattack")
        }

        if (QUERY_GetGlobalVariable(mobAllianceData.global.mobAllianceCompleted) === 0) {
            IncrementGlobal(mobAllianceData.global.joinedTheFight)
        }
    }
})

SNIPPET_VillageFinishedBuilding("vfb_piglin_occupying_base_built", (villageId, payload) => {
    const mobId = payload.string

    Logi("Cinematic: set 'mob_piglin_attack_fmv_skippable_var' to true")
    OUTPUT_SetCinematicVariable("mob_piglin_attack_fmv_skippable_var", true)

    const piglinFaction = maOccupationVal[mobId].piglinFactionName
    const baseData = occupationBaseData[piglinFaction]

    // It's fine to init the rally points here since the player is guaranteed to be at the village (in the cutscene) when this triggers
    CreateCompositionRallyPoints(villageId, baseData.piglinRallyPoints)

    OUTPUT_SetGlobalVariable(GetMABaseBuiltVar(mobId), 1)
    if (QUERY_GetGlobalVariable(GetMAVillageBuiltVar(mobId))) {
        OnMobAllianceOccupationStarted(mobId)
    }

    _BuildCages(mobId)

    const villagePortal = GetVillagePortal(villageId)
    if (baseData.mobPortalTriggerVolume !== undefined) {
        const portalTriggerVolume = SpawnTriggerVolume(villagePortal, villageId, baseData.mobPortalTriggerVolume, TEAM_ORANGE, villageId, true, [mobId], ["caged_mob"], ALLIANCE_ENEMY)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_homestead_mob_close_to_portal",
            ownerVillageId: villageId,
            triggerEntity: portalTriggerVolume,
            payloadString: mobId
        })
    }

    if (piglinFaction === FACTION_NAME_DEFEND) {
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_creeper_inner_gate_destroyed",
            includeTags: ["pigGateInner"],
            ownerVillageId: villageId,
            villageId: villageId,
            payloadString: mobId
        })
    }
})

const _TriggerPortalEscalationWave = (villageId, mobId, waveIndex) => {
    const occupationData = maOccupationVal[mobId]
    const baseData = occupationBaseData[occupationData.piglinFactionName]
    if (baseData.waveData.escalationWaves === undefined || baseData.waveData.escalationWaves[waveIndex] === undefined) {
        return
    }

    const indexedWave = baseData.waveData.escalationWaves[waveIndex]

    indexedWave.wave.forEach((waveTuning) => {
        const units = SpawnAtPortalInTheDirectionOfTheHomestead(villageId, waveTuning[0], waveTuning[1], GetMobAllianceData(mobId).factionName)
        DistributeUnitsToAI(units, indexedWave.aiDistribution, baseData.aiConfig)
    })
}

SNIPPET_SpatialPartitionEntered("spe_homestead_mob_close_to_portal", (triggerEntity, _enteringEntity, payload) => {
    Logv("spe_homestead_mob_close_to_portal")
    const mobId = payload.string
    const mobAllianceData = GetMobAllianceData(mobId)
    const occupationData = maOccupationVal[mobId]
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    if (QUERY_IsNamedTimerActive(occupationData.timers.portalEscalationTimer)) {
        IncrementGlobal(mobAllianceData.global.portalEscalated)
    } else {
        _TriggerPortalEscalationWave(villageId, mobId, 1)
        OUTPUT_SetNamedTimer(occupationData.timers.portalEscalationTimer, 60)
        LISTENFOR_Timer({
            snippet: "t_ma_portal_escalation_timer",
            timerName: occupationData.timers.portalEscalationTimer,
            threshold: 0,
            payloadString: mobId,
            payloadInt: 1,
            ownerVillageId: villageId
        })
    }
    Once()
})

SNIPPET_NonPopCappedEntityDestroyed("ed_creeper_inner_gate_destroyed", (entityGroup, payload) => {
    const mobId = payload.string
    _TriggerPortalEscalationWave(payload.ownerVillageId, mobId, 1)
    Once()
})

SNIPPET_HealthChanged("hc_piglin_occupation_portal_attacked", (portalEntity, _currentHealth, _previousHealth, payload) => {
    const mobId = payload.string
    const mobAllianceData = GetMobAllianceData(mobId)
    const occupationData = maOccupationVal[mobId]
    const cageDestroyed = QUERY_GetGlobalVariable(mobAllianceData.global.cageDestroyed)
    const villageId = QUERY_GetVillageIDFromEntity(portalEntity)
    if (cageDestroyed === 0 && QUERY_GetGlobalVariable(mobAllianceData.global.attackPortalVOPlayed) === 0) {
        PlayDelayedPresentationToClosePlayers(occupationData.VOs.attackedPortalVOs, villageId, 2, occupationData.presentationActionDistance)
        IncrementGlobal(mobAllianceData.global.attackPortalVOPlayed)
    }

    if (QUERY_IsNamedTimerActive(occupationData.timers.portalEscalationTimer)) {
        IncrementGlobal(mobAllianceData.global.portalEscalated)
    } else {
        _TriggerPortalEscalationWave(villageId, mobId, 0)
        OUTPUT_SetNamedTimer(occupationData.timers.portalEscalationTimer, 60)
        LISTENFOR_Timer({
            snippet: "t_ma_portal_escalation_timer",
            timerName: occupationData.timers.portalEscalationTimer,
            threshold: 0,
            payloadString: mobId,
            payloadInt: 0,
            ownerVillageId: villageId
        })
    }
    Once()
})

SNIPPET_Timer("t_ma_portal_escalation_timer", (_timeLeft, payload) => {
    Logv("t_ma_portal_escalation_timer")
    const mobId = payload.string
    const villageId = payload.ownerVillageId
    const mobAllianceData = GetMobAllianceData(mobId)
    if (QUERY_GetGlobalVariable(mobAllianceData.global.portalEscalated)) {
        Logv("Spawning delayed portal escalation")
        _TriggerPortalEscalationWave(villageId, mobId, payload.int)
    }
})

const CompleteMobAlliancePiglinInvasion = (mobId) => {
    OccupyingBaseDestroyed(mobId)

    RefreshAllSpawnersConfig(mobId)

    const centralBuilding = GetMobAllianceCenterBuilding(mobId)
    if (HasEntities(centralBuilding)) {
        OUTPUT_TriggerPresentationEvent(centralBuilding, "on_piglin_zombie_combat_stop")

        Logi("vd_piglin_occupation_village_destroyed " + mobId + "  " + QUERY_GetEntitiesCount(centralBuilding))

        //Remove audio entity
        const centralBuildingAudioEntity = GetAudioEntityForBase(QUERY_GetVillageIDFromEntity(centralBuilding), "occupation_emitter")
        OUTPUT_DestroyEntities(centralBuildingAudioEntity)
    }

    const remainingPiglins = QUERY_GetEntitiesWithTags([GetMAPiglinsTag(mobId)])
    if (HasEntities(remainingPiglins)) {
        OUTPUT_DespawnEntities(remainingPiglins)
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_play_foa_cinematic",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 12,
        payloadString: mobId
    })

    const mobAllianceVillageEntity = GetVillageEntityFromFaction(GetMobAllianceData(mobId).factionName)

    // Only show hearts if ended in Act 2, Act 3 is very serious
    if (!IsCurrentAct(ACTS.ACT_3A)) {
        StartHeartSequence(QUERY_GetVillageIDFromEntity(mobAllianceVillageEntity))
    }

    OUTPUT_MapSetKeyValue(mobAllianceVillageEntity, MAP_KEY.STATE, MAP_ICON_STATE.COMPLETED)
    OUTPUT_MapRemoveKey(mobAllianceVillageEntity, MAP_KEY.INVASION_ACTIVE)

    OUTPUT_AddOrSubtractObjectiveProgress("objectives.alliancesSafe", 1)

    // Remove the claimed area underneath
    const correspondingClaimedArea = QUERY_GetEntitiesWithTags([_GetOccupationClaimedAreaTag(mobId)])
    OUTPUT_DespawnEntities(correspondingClaimedArea)

    Logi("####################### PIGLIN OCCUPYING BASE DESTROYED #############################")
}

SNIPPET_VillageDestroyed("vd_piglin_occupation_village_destroyed", (villageId, payload) => {
    const mobId = payload.string
    CompleteMobAlliancePiglinInvasion(mobId)

    HandleFreeingMobsFromCagesAfterDestroyingVillage(villageId)

    //Village Suspension Unpairing
    const mobAllianceVillageEntity = GetVillageEntityFromFaction(GetMobAllianceData(mobId).factionName)
    const piglinVillageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_UnsetVillageSuspensionPair(mobAllianceVillageEntity, piglinVillageEntity)
})

SNIPPET_LocalTimer("lt_play_foa_cinematic", (payload) => {
    const mobId = payload.string

    // TODO: DEVON please check if we need to do any tag manipulation here.

    if (IsCurrentAct(ACTS.ACT_3A)) {
        // Don't trigger the cine and quickly unlock the journal and etc. because Act 3 is serious enough
        _UnlockMobAllianceHUD(mobId)
        return
    }

    const occupationData = maOccupationVal[mobId]
    const centralBuilding = GetMobAllianceCenterBuilding(mobId)
    if (HasEntities(centralBuilding)) {
        const playerEntity = GetClosestPlayer(centralBuilding)
        Logi("lt_play_foa_cinematic!!lt_play_foa_cinematic")
        const cinematicName = IsNightTime() ? occupationData.cinematics.flameOfAllegianceNight : occupationData.cinematics.flameOfAllegiance
        OUTPUT_TriggerCinematic(cinematicName, OPER_Append(centralBuilding, playerEntity))
    } else {
        //ONBOARDING
        if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.START_PLACED_SPAWNER) === 0) {
            IncrementGlobal(ONBOARDING_GLOBALS.START_PLACED_SPAWNER)
        }
    }
})

const _UnlockMobAllianceHUD = (mobId) => {
    const occupationData = maOccupationVal[mobId]
    const mobAllianceData = GetMobAllianceData(mobId)
    const villageId = QUERY_GetVillageIDFromEntity(GetVillageEntityFromFaction(mobAllianceData.factionName))

    UnlockJournalEntry(mobAllianceData.journalUnlock)
    _EmphasizeMobHUDItem(mobAllianceData.hudItem)

    // Act 3 is very serious, don't play VO
    if (!IsCurrentAct(ACTS.ACT_3A)) {
        PlayDelayedPresentationToClosePlayers(occupationData.VOs.mobAllianceFoA, villageId, 2)
    }

    //ONBOARDING
    if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.START_PLACED_SPAWNER) === 0) {
        IncrementGlobal(ONBOARDING_GLOBALS.START_PLACED_SPAWNER)
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_remove_mob_unlock_highlight",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: mobAllianceData.hudItemTimer,
        payloadString: mobAllianceData.hudItem
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_remove_mob_unlock_highlight",
        ownerVillageId: villageId,
        includeTags: [mobAllianceData.spawnerTag],
        payloadString: mobAllianceData.hudItem
    })
}

SNIPPET_CinematicFinished("cf_flame_of_allegiance", (payload) => {
    const mobId = payload.string
    _UnlockMobAllianceHUD(mobId)
})

SNIPPET_LocalTimer("lt_remove_mob_unlock_highlight", (payload) => {
    const mobHudItem = payload.string
    _DeEmphasizeMobHUDItem(mobHudItem)
})

SNIPPET_BuildingComplete("bc_remove_mob_unlock_highlight", (_spawner, payload) => {
    const mobHudItem = payload.string
    _DeEmphasizeMobHUDItem(mobHudItem)
})

const _EmphasizeMobHUDItem = (mobHudItem) => {
    OUTPUT_SetEmphasizedHUDItem("mobs", true)
    OUTPUT_SetEmphasizedHUDItem(mobHudItem, true)
}

const _DeEmphasizeMobHUDItem = (mobHudItem) => {
    OUTPUT_SetEmphasizedHUDItem("mobs", false)
    OUTPUT_SetEmphasizedHUDItem(mobHudItem, false)
}

//--END PIGLIN BASE LOGIC

//--CAGE LOGIC
SNIPPET_EntitySpawned("es_caged_mobs", (entitySpawned, payload) => {
    const occupationData = maOccupationVal[payload.string]
    OUTPUT_SetBehavior(entitySpawned, occupationData.behaviours.caged)
    OUTPUT_AddTag(entitySpawned, "donotattack")
    OUTPUT_RemoveTag(entitySpawned, "luredirect")
})

SNIPPET_BuildingComplete("bc_cage", (buildingCompleteEG, payload) => {
    const mobId = payload.string
    const mobAllianceData = GetMobAllianceData(mobId)
    const cage = buildingCompleteEG
    const villageId = payload.ownerVillageId

    if (!QUERY_HasTags(cage, [maOccupationVal.common.piglinCageTag])) {
        IncrementGlobal(mobAllianceData.global.totalCagesBuilt)
    }

    OUTPUT_SetTeam(cage, TEAM_BLUE)

    OUTPUT_AddTag(buildingCompleteEG, GetMACageTag(mobAllianceData.id))

    OUTPUT_SetBarracksSpawnTypes(buildingCompleteEG, [mobAllianceData.spawnerData.mobIdentifier])

    switch (mobId) {
        case "creeper":
            OUTPUT_SetBarracksSpawnCap(buildingCompleteEG, 6)
            break
        default:
            OUTPUT_SetBarracksSpawnCap(buildingCompleteEG, 10)
            break
    }

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_cage",
        ownerVillageId: villageId,
        entities: cage,
        villageId: villageId,
        payloadString: mobAllianceData.id,
        despawned: false
    })
})

SNIPPET_NonPopCappedEntityDestroyed("ed_cage", (cage, payload) => {
    const mobId = payload.string
    const mobAllianceData = GetMobAllianceData(mobId)
    const occupationData = maOccupationVal[mobId]

    if (!QUERY_HasTags(cage, [maOccupationVal.common.piglinCageTag])) {
        if (QUERY_GetGlobalVariable(mobAllianceData.global.cageDestroyed) === 0 && QUERY_GetGlobalVariable(mobAllianceData.global.allCagesRemoved) === 0) {
            if (QUERY_GetGlobalVariable(occupationData.vars.firstCageOpened) === 0) {
                const villageId = QUERY_GetVillageIDFromEntity(cage)
                PlayDelayedPresentationToClosePlayers(occupationData.VOs.firstCageOpenedMobAlliance, villageId, 2)
            }
        }

        IncrementGlobal(mobAllianceData.global.cageDestroyed)
    } else {
        const cageDestroyed = QUERY_GetGlobalVariable(mobAllianceData.global.cageDestroyed)
        if (cageDestroyed === 0 && QUERY_GetGlobalVariable(mobAllianceData.global.attackPortalVOPlayed) === 0) {
            const villageId = QUERY_GetVillageIDFromEntity(cage)
            PlayDelayedPresentationToClosePlayers(occupationData.VOs.firstCageOpenedBase, villageId, 2, occupationData.presentationActionDistance)
            IncrementGlobal(mobAllianceData.global.attackPortalVOPlayed)
        }
    }
    IncrementGlobal(occupationData.vars.firstCageOpened)

    const cagedMob = QUERY_GetEntitiesWithTags(["caged_mob"])
    const closeCagedMobs = FILTER_ByDistance(cagedMob, cage, 10)
    OUTPUT_RemoveTag(closeCagedMobs, "donotattack")
    OUTPUT_RemoveTag(closeCagedMobs, "caged_mob")
    OUTPUT_AddTag(closeCagedMobs, "luredirect")
    if (QUERY_GetGlobalVariable(mobAllianceData.global.mobAllianceCompleted) === 0) {
        OUTPUT_SetBehavior(closeCagedMobs, occupationData.behaviours.act1)
    } else {
        SelectMobBehaviourSet(closeCagedMobs, mobAllianceData.id)
    }
})

SNIPPET_PlayerInteracted("pi_cage", (_playerEntity, interactedEntity, payload) => {
    const mobId = payload.string
    const mobAllianceData = GetMobAllianceData(mobId)

    const totalCagesBuilt = QUERY_GetGlobalVariable(mobAllianceData.global.totalCagesBuilt)
    const cageDestroyed = QUERY_GetGlobalVariable(mobAllianceData.global.cageDestroyed)
    if (cageDestroyed + 1 === totalCagesBuilt && QUERY_GetGlobalVariable(mobAllianceData.global.allCagesRemoved) === 0 && !QUERY_HasTags(interactedEntity, [maOccupationVal.common.piglinCageTag])) {
        _MobsJoinTheFight(mobId)
    } else {
        OUTPUT_AddTag(interactedEntity, "cage_opened")
        OUTPUT_TriggerPresentationEvent(interactedEntity, "open_gate")
        OUTPUT_SetInteractionState(interactedEntity, false)
        OUTPUT_DestroyEntities(interactedEntity)
    }
})

//--END CAGE LOGIC

SNIPPET_EntitySpawned("es_mobs_during_piglin_occupation", (entitySpawned, payload) => {
    const mobId = payload.string
    const mobAllianceData = GetMobAllianceData(mobId)
    if (IsOccupationBeatOver(mobAllianceData.id)) {
        Once()
        return
    }

    const hasPlayerEngagedFight = QUERY_GetGlobalVariable(mobAllianceData.global.playerHasEngagedFirstFight) > 0
    const hasPiglinInvasionStarted = QUERY_GetGlobalVariable(mobAllianceData.global.mobAlliancePiglinInvasionStarted) > 0

    if (hasPiglinInvasionStarted && !hasPlayerEngagedFight) {
        OUTPUT_DespawnEntities(entitySpawned)
        return
    }

    _SendMobsToGatherPoints(entitySpawned, mobAllianceData.id)
})

SNIPPET_SpatialPartitionEntered("spe_piglins_on_mob_alliance_tv", (triggerEntity, intruderEntity, payload) => {
    const mobAllianceData = GetMobAllianceData(payload.string)
    if (IsOccupationBeatOver(mobAllianceData.id)) {
        Once()
        OUTPUT_DespawnEntities(triggerEntity)
        return
    }
    const intruderEG = intruderEntity
    OUTPUT_AddTag(intruderEntity, GetMAPiglinsTag(mobAllianceData.id))

    if (QUERY_GetTeamName(intruderEG) === TEAM_BLUE) {
        OUTPUT_SetTeam(intruderEG, TEAM_ORANGE)
        return
    }
})

SNIPPET_SpatialPartitionEntered("spe_player_buildables_on_mob_alliance_tv", (triggerEntity, intruderEntity, payload) => {
    const mobId = payload.string
    if (IsOccupationBeatOver(mobId)) {
        Once()
        OUTPUT_DespawnEntities(triggerEntity)
        return
    }

    const intruderEG = intruderEntity

    OUTPUT_AddTag(intruderEG, GetMAPlayerEntitiesInAreaTag(mobId))
})

SNIPPET_CinematicFinished("cf_join_the_fight", (payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]
    const villageId = QUERY_GetVillageIDFromEntity(GetVillageEntityFromFaction(GetMobAllianceData(mobId).factionName))
    //DelayedAnnounceTimed(occupationData.message.mobJoinTheFight, 1)
    _PlayerEngagedMobAllianceBattle(mobId)
    PlayDelayedPresentationToClosePlayers(occupationData.VOs.joinTheFight, villageId, 3)
})

SNIPPET_SpatialPartitionEntered("spe_player_entered_mob_alliance_area_during_invasion", (triggerEntity, intruderEntity, payload) => {
    const mobId = payload.string
    const mobAllianceData = GetMobAllianceData(mobId)
    const occupationData = maOccupationVal[mobId]

    if (QUERY_GetGlobalVariable(mobAllianceData.global.soItBegins) > 0 && QUERY_GetGlobalVariable(ACTS.ACT_3A) === 0) {
        if (QUERY_GetGlobalVariable(mobAllianceData.global.playerEnteredAllianceAreaDuringInvasion) === 0) {
            IncrementGlobal(mobAllianceData.global.playerEnteredAllianceAreaDuringInvasion)
            IncrementGlobal(mobAllianceData.global.introCinematicPlayed)

            const player = intruderEntity
            const centralStructure = GetMobAllianceCenterBuilding(mobId)
            const cinematicName = IsNightTime() ? occupationData.cinematics.piglinOccupationNight : occupationData.cinematics.piglinOccupation
            const cineId = OUTPUT_TriggerCinematic(cinematicName, OPER_Append(player, centralStructure))

            const centralBuilding = GetMobAllianceCenterBuilding(mobId)
            if (HasEntities(centralBuilding)) {
                // TODO: Shouldn't be spawning a new audio entity
                SetupAudioEntityForBase(QUERY_GetVillageIDFromEntity(centralBuilding), maOccupationVal.common.audioEntityAlliance, false)
            }

            if (payload.int === 0) {
                IncrementGlobal(mobAllianceData.global.hasEnteredMobAllianceAreaFirst)
            }

            OUTPUT_DespawnEntities(triggerEntity)

            LISTENFOR_CinematicEvent({
                snippet: "ce_spawn_base_and_teleport_to_piglin_attack_started_viewpoint",
                ownerVillageId: payload.ownerVillageId,
                eventName: "ce_mob_piglin_attack_teleport",
                payloadString: mobId,
                cinematicId: cineId
            })

            Once()
        }
    }
})

SNIPPET_GlobalVariableChanged("gvc_mob_alliance_piglin_act3_started", (_oldValue, newValue, payload) => {
    if (newValue === 1) {
        const mobId = payload.string
        const mobAllianceData = GetMobAllianceData(mobId)
        OUTPUT_SetGlobalVariable(mobAllianceData.global.queueMobAlliancePiglinInvasion, 0)

        const occupationData = maOccupationVal[mobId]
        const aliveVillages = QUERY_GetAllAliveVillages()
        const occupyingBase = FILTER_ByVillageSize(aliveVillages, [occupationData.baseSize])
        OUTPUT_DestroyVillageEntities(occupyingBase)
    }
})

SNIPPET_InvasionDestroyEntitiesObjective("deo_check_mobs_join_the_fight", (_villageId, _destroyedEntity, numberRemaining, payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]

    OUTPUT_SetGlobalVariable(occupationData.vars.occupyingPiglinCount, numberRemaining)
    if (numberRemaining === 0) {
        _MobsJoinTheFight(mobId)
    }
})

SNIPPET_PresenceEntered("pe_setup_destroy_piglins_objective", (triggerEntity, _count, payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]
    const mobAllianceData = GetMobAllianceData(mobId)

    const allCagesRemovedFromHomestead = QUERY_GetGlobalVariable(mobAllianceData.global.allCagesRemoved) > 0
    if (allCagesRemovedFromHomestead) {
        return
    }

    OUTPUT_SetGlobalVariable(occupationData.vars.playerPresent, 1)

    const currentPiglinKillCount = QUERY_GetGlobalVariable(occupationData.vars.occupyingPiglinCount)
    const remainingPiglins = QUERY_GetEntitiesWithTags([occupationData.tags.objectivePiglinsTag])
    const maxClearCount = Math.floor(QUERY_GetEntitiesCount(remainingPiglins) * (maOccupationVal.common.occupyingPiglinClearPercent / 100))

    const piglinHordeName = maOccupationVal[mobId].piglinFactionName
    const occupyingBaseId = QUERY_GetVillageIDFromEntity(triggerEntity)

    const objectiveCount = Math.min(currentPiglinKillCount, maxClearCount)
    OUTPUT_SetupDestroyEntitiesObjective(occupyingBaseId, remainingPiglins, objectiveCount, piglinHordeName)
    if (objectiveCount <= 0) {
        _MobsJoinTheFight(mobId)
    }

    //Stinger
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(piglinHordeName, "danger"), GetVillageEntityFromID(occupyingBaseId))

    Logi("Setting up destroy entities objective.")
})

SNIPPET_PresenceExited("pex_remove_destroy_piglins_objective", (triggerEntity, _count, payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]
    const mobAllianceData = GetMobAllianceData(mobId)

    const allCagesRemovedFromHomestead = QUERY_GetGlobalVariable(mobAllianceData.global.allCagesRemoved) > 0
    if (allCagesRemovedFromHomestead) {
        return
    }

    OUTPUT_SetGlobalVariable(occupationData.vars.playerPresent, 0)

    const occupyingBaseId = QUERY_GetVillageIDFromEntity(triggerEntity)
    OUTPUT_RemoveDestroyEntitiesObjective(occupyingBaseId)

    Logi("Removing destroy entities objective.")
})

SNIPPET_PresenceEntered("pe_spawn_ma_initial_piglins", (_triggerEntity, _count, payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]
    const mobAllianceData = GetMobAllianceData(mobId)

    const aliveVillages = QUERY_GetAllAliveVillages()
    const occupyingBase = FILTER_ByVillageSize(aliveVillages, [occupationData.baseSize])
    const occupyingBaseId = QUERY_GetVillageIDFromEntity(occupyingBase)

    const mobAllianceVillage = FILTER_ByFactionName(aliveVillages, [mobAllianceData.factionName])
    const mobAllianceId = QUERY_GetVillageIDFromEntity(mobAllianceVillage)

    // Create piglins at the mob alliance village
    const aiResponseData = GetOccupationDataForOccupyingVillage(occupyingBaseId)
    _SpawnPiglinsOccupyingMobAlliance(mobId, occupyingBaseId, mobAllianceId, aiResponseData)

    // Despawn all mobs that spawn from the homestead, so that the leftover homestead mobs don't overwhelm the occupying piglin forces
    let nonCagedMobs = QUERY_GetEntitiesWithTagFilter([mobId, "homestead_mob"], ["caged_mob"])
    nonCagedMobs = FILTER_ByDistance(nonCagedMobs, GetMobAllianceCenterBuilding(mobId), maOccupationVal.common.initialOccupationMobDespawnRange)
    OUTPUT_DespawnEntities(nonCagedMobs)
})

SNIPPET_PresenceExited("pex_despawn_ma_initial_piglins", (triggerEntity, _count, payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]

    const remainingPiglins = FILTER_ByTagFilter(QUERY_GetEntitiesWithTags([occupationData.tags.objectivePiglinsTag]), ["mob", "piglin"], [])
    OUTPUT_DespawnEntities(remainingPiglins)
})

SNIPPET_SpatialPartitionEntered("spe_piglins_spawned_from_invasion", (triggerEntity, intruderEntity, payload) => {
    const mobId = payload.string
    const occupationData = maOccupationVal[mobId]
    const mobAllianceData = GetMobAllianceData(mobId)

    const allCagesRemovedFromHomestead = QUERY_GetGlobalVariable(mobAllianceData.global.allCagesRemoved) > 0
    if (allCagesRemovedFromHomestead) {
        return
    }

    OUTPUT_AddTag(intruderEntity, occupationData.tags.objectivePiglinsTag)

    const playerPresentAtBase = QUERY_GetGlobalVariable(occupationData.vars.playerPresent) > 0
    if (playerPresentAtBase) {
        const aliveVillages = QUERY_GetAllAliveVillages()
        const occupyingBase = FILTER_ByVillageSize(aliveVillages, [maOccupationVal[mobId].baseSize])
        const occupyingBaseId = QUERY_GetVillageIDFromEntity(occupyingBase)
        OUTPUT_AppendDestroyEntitiesObjective(occupyingBaseId, intruderEntity)
    }
})

//////////////
// PATCHING //
//////////////

SNIPPET_ProcessPatch("pgv_occupation_base_barracks_patch", 1, () => {
    //In case the player loads an old save inside the piglin base
    const mobIds = ["skeleton", "creeper", "zombie", "spider", "silverfish", "slime"]
    mobIds.forEach((mobId) => {
        const piglinFaction = maOccupationVal[mobId].piglinFactionName
        const piglinOccupationBase = GetAliveVillages(piglinFaction, maOccupationVal[mobId].baseSize)
        if (HasEntities(piglinOccupationBase)) {
            patchOccupationBaseBarracks(QUERY_GetVillageIDFromEntity(piglinOccupationBase), mobId)
        }
    })
})

const patchOccupationBaseBarracks = (villageId, mobId) => {
    if (GetVillageVariable(villageId, "player_entered_occupation_base_barracks_patch") >= 1) {
        return
    }
    SetVillageVariable(villageId, "player_entered_occupation_base_barracks_patch", 1)

    const barracksMappings = {
        skeleton: [
            {
                tags: [BARRACKS_NAME_FIGHTER],
                config: FighterBarracksConfig_AttackFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_DISRUPTOR],
                config: DisruptorBarracksConfig_AttackFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_SIEGER],
                config: SiegerBarracksConfig_AttackFaction_Variations
            }
        ],
        zombie: [
            {
                tags: [BARRACKS_NAME_FIGHTER],
                config: FighterBarracksConfig_ObstacleFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_DISRUPTOR],
                config: DisruptorBarracksConfig_ObstacleFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_SIEGER],
                config: SiegerBarracksConfig_ObstacleFaction_Variations
            }
        ],
        spider: [
            {
                tags: [BARRACKS_NAME_FIGHTER],
                config: FighterBarracksConfig_FrostFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_DISRUPTOR],
                config: DisruptorBarracksConfig_FrostFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_SIEGER],
                config: SiegerBarracksConfig_FrostFaction_Variations
            }
        ],
        slime: [
            {
                tags: [BARRACKS_NAME_FIGHTER],
                config: FighterBarracksConfig_ObstacleFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_DISRUPTOR],
                config: DisruptorBarracksConfig_ObstacleFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_SIEGER],
                config: SiegerBarracksConfig_ObstacleFaction_Variations
            }
        ],
        slime: [
            {
                tags: [BARRACKS_NAME_FIGHTER],
                config: FighterBarracksConfig_DefendFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_DISRUPTOR],
                config: DisruptorBarracksConfig_DefendFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_SIEGER],
                config: SiegerBarracksConfig_DefendFaction_Variations
            }
        ],
        creeper: [
            {
                tags: [BARRACKS_NAME_FIGHTER],
                config: FighterBarracksConfig_DefendFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_DISRUPTOR],
                config: FighterBarracksConfig_DefendFaction_Variations
            },
            {
                tags: [BARRACKS_NAME_SIEGER],
                config: SiegerBarracksConfig_DefendFaction_Variations
            }
        ]
    }

    const ownedEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    barracksMappings[mobId].forEach((mapping) => {
        const barracks = FILTER_ByTagFilter(ownedEntities, mapping.tags, [])
        SetBarracksConfigForVillageVariation(barracks, mapping.config)
    })
}

SNIPPET_ProcessPatch("pgv_patchHomesteadOccupationMapIcon", 1, () => {
    const mobIds = ["skeleton", "creeper", "zombie", "slime", "spider", "silverfish"]
    mobIds.forEach((mobId) => {
        if (IsOccupationBeatActive(mobId)) {
            const mobAllianceData = GetMobAllianceData(mobId)
            const aliveVillages = GetAliveVillages(mobAllianceData.factionName, BASE_SIZE_SMALL)
            if (!HasEntities(aliveVillages)) {
                return
            }

            const villageEntity = RandomEntity(aliveVillages)
            OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_OCCUPIED)
        }
    })
})
