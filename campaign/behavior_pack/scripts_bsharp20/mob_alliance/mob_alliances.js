const maVal = {
    allegianceUnlockResource: "unlock_allegiance_structure",
    allegianceStructure: "badger:totem_unlock_mob_alliance",
    queueAllegianceStructureTeachingBit: "gv_queue_allegiance_structure_teaching_bit",
    common: {
        VO: {
            mobAllianceCurrentlyUnderAttack: "mob_under_attack_2",
            mobAllianceCurrentlyTargeted: "mob_targeted_2",
            mobAllianceOccupied: "village_occupation",
            mobAllianceOccupationFreed: "village_post_defended"
        },
        globals: {
            mobAllianceCurrentlyUnderAttackPlayed: "gv_mob_alliance_villageCurrentlyUnderAttackPlayed",
            mobAllianceCurrentlyTargetedPlayed: "gv_mob_alliance_villageCurrentlyTargetedPlayed",
            mobAllianceOccupiedPlayed: "villageIsOccupiedPlayed",
            mobAlliancePostOccupationPlayed: "villagePostOccupationPlayed"
        }
    },
    zombie: {
        id: "zombie",
        factionName: MOB_ALLIANCE_NAME_ZOMBIE,
        telemetryName: TELEMETRY_MOB_ALLIANCE_NAMES.zombie,
        journalUnlock: JOURNAL_UNLOCKS.MOB_ZOMBIE,
        hudItem: "badger:spawner_zombie",
        hudItemTimer: 14,
        spawnerTag: "zombiespawner",
        villageGen: {
            addPath: true,
            centerBuildingCard: "zombieVillageCenter",
            totemZoneCard: "zombieTotemOnlyZone",
            northDistrictBuildings: [
                { card: "zombieVillageHome2", amount: 1 },
                { card: "zombieVillageHome3", amount: 1 },
                { card: "zombieVillageHome4", amount: 1 }
            ],
            southDistrictBuildings: [
                //{ card: "zombieVillageHome2", amount: 0 },
                { card: "zombieVillageHome3", amount: 1 },
                { card: "zombieVillageHome4", amount: 2 }
            ],
            eastDistrictBuildings: [
                //{ card: "zombieVillageHome2", amount: 0 },
                { card: "zombieVillageHome3", amount: 2 },
                { card: "zombieVillageHome4", amount: 1 }
            ],
            westDistrictBuildings: [
                //{ card: "zombieVillageHome2", amount: 0 },
                { card: "zombieVillageHome3", amount: 1 },
                { card: "zombieVillageHome4", amount: 2 }
            ],
            decoBuildings: [
                { card: "zombieDeco1", amount: 2 },
                { card: "zombieDeco2", amount: 1 },
                { card: "zombieDeco3", amount: 2 },
                { card: "zombieDeco4", amount: 1 }
            ],
            cageBuildingCard: "mobCage"
        },
        global: {
            mobAllianceCompleted: "gv_mob_alliance_zombie_piglin_defeated",
            playerHasEngagedFirstFight: "gv_player_has_enganged_zombie_mob_alliance_fight",
            mobAlliancePiglinInvasionStarted: "gv_mob_alliance_zombie_piglin_invasion_started",
            playerHasAttackedThePortal: "gv_player_zombie_has_attacked_the_portal",
            mobAllianceGenerated: "gv_mob_alliance_zombie_generated",
            queueMobAlliancePiglinInvasion: "gv_queue_zombie_mob_alliance_piglin_invasion",
            playerEnteredAllianceAreaDuringInvasion: "gv_player_entered_zombie_mob_alliance_area_during_invasion",
            soItBegins: "gv_mob_alliance_zombie_invasion_starterd",
            introCinematicPlayed: "gv_zombie_mob_alliance_intro_cinematic_played",
            act1bIntroVOPlayed: "gv_zombie_mob_alliance_act1bvo_played",
            cageDestroyed: "gv_zombie_mob_alliance_caged_destroyed",
            portalEscalated: "gv_zombie_mob_alliance_portal_escalated",
            totalCagesBuilt: "gv_zombie_mob_alliance_cages_built",
            mobAllegianceBuildings: "gv_zombie_amount_of_mob_allegiance_buildings",
            mobAllegianceGainedOnce: "gv_zombie_mob_alliance_gained_once",
            hasEnteredMobAllianceAreaFirst: "gv_zombie_player_entered_mob_alliance_area_during_piglin_invasion",
            joinedTheFight: "gv_zombie_joined_the_fight",
            queueMobOccupationDestruction: "gv_zombie_queue_mob_occupation_destruction",
            allCagesRemoved: "gv_zombie_all_cages_removed",
            attackPortalVOPlayed: "gv_zombie_attack_portal_vo_played",
            act2PreAttackVOPlayed: "gv_act2_pre_attack_vo_played_zombie",
            playersEnteredPreOccupationZone: "gv_homestead_occupation_players_entered_pre_occupation_zone_zombie"
        },
        cinematics: {
            introBeforeOccupation: "mob02_c01_zombie_intro_fmv"
        },
        constant: {
            allegianceBuildingOffset: 22.5
        },
        behaviours: {
            default: "badger:mob_zombie"
        },
        //this data is used by ManageMobAllianceSpawner in order to update spawners at homesteads based on the type of spawner (house or central building) and difficulty
        spawnerData: {
            mobIdentifier: "badger:mob_zombie",
            normalConfig: {
                house: {
                    cap: 2,
                    rate: 2,
                    batch: 2
                },
                centralBuilding: {
                    cap: 8,
                    rate: 2,
                    batch: 4
                }
            },
            //spawner data for harder difficulty. I didn't want the rate to be too high or the homesteads feel empty for too long.
            hardConfig: {
                house: {
                    cap: 2,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 8,
                    rate: 20,
                    batch: 1
                }
            },
            //spawner data used when the mob alliances are being occupied for the first time
            duringOccupation: {
                house: {
                    cap: 2,
                    rate: 2,
                    batch: 1
                },
                centralBuilding: {
                    cap: 3,
                    rate: 2,
                    batch: 3
                }
            },
            duringOccupationHard: {
                house: {
                    cap: 1,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 3,
                    rate: 20,
                    batch: 1
                }
            },
            homesteadSpawner: "badger:spawner_world_zombie_homestead"
        },
        voiceOvers: {
            act1bFirstTime: "act1b_zombies_first_time",
            act1bMet: "act1b_zombies_met",
            ac2PreAttack: "mob_act2_pre_attack_zombie"
        },
        unlocks: {
            spawner: "unlock_spawner_zombie",
            playerSpawner: "unlock_player_spawner_zombie",
            battleView: "unlock_battle_view_zombie",
            firstTimeUnlockResource: {
                resourceName: "redstone",
                quantity: 25
            }
        }
    },
    skeleton: {
        id: "skeleton",
        factionName: MOB_ALLIANCE_NAME_SKELETON,
        telemetryName: TELEMETRY_MOB_ALLIANCE_NAMES.skeleton,
        journalUnlock: JOURNAL_UNLOCKS.MOB_SKELETON,
        hudItem: "badger:spawner_skeleton",
        hudItemTimer: 14,
        spawnerTag: "skeletonspawner",
        villageGen: {
            addPath: false,
            centerBuildingCard: "skeletonVillageCenter",
            totemZoneCard: "skeletonTotemOnlyZone", // TODO FIX
            northDistrictBuildings: [
                { card: "skeletonMobAllianceHouse", amount: 1 },
                { card: "skeletonMobAllianceHouse02", amount: 1 }
                //{ card: "skeletonMobAllianceHouse03", amount: 0 }
            ],
            southDistrictBuildings: [
                { card: "skeletonMobAllianceHouse", amount: 1 },
                //{ card: "skeletonMobAllianceHouse02", amount: 0 },
                { card: "skeletonMobAllianceHouse03", amount: 1 }
            ],
            eastDistrictBuildings: [
                //{ card: "skeletonMobAllianceHouse", amount: 0 },
                { card: "skeletonMobAllianceHouse02", amount: 1 },
                { card: "skeletonMobAllianceHouse03", amount: 1 }
            ],
            westDistrictBuildings: [
                //{ card: "skeletonMobAllianceHouse", amount: 0 },
                { card: "skeletonMobAllianceHouse02", amount: 1 },
                { card: "skeletonMobAllianceHouse03", amount: 1 }
            ],
            decoBuildings: [],
            cageBuildingCard: "mobCage"
        },
        global: {
            mobAllianceCompleted: "gv_mob_alliance_skeleton_piglin_defeated",
            playerHasEngagedFirstFight: "gv_player_has_enganged_skeleton_mob_alliance_fight",
            mobAlliancePiglinInvasionStarted: "gv_mob_alliance_skeleton_piglin_invasion_started",
            playerHasAttackedThePortal: "gv_player_skeleton_has_attacked_the_portal",
            mobAllianceGenerated: "gv_mob_alliance_skeleton_generated",
            queueMobAlliancePiglinInvasion: "gv_queue_skeleton_mob_alliance_piglin_invasion",
            playerEnteredAllianceAreaDuringInvasion: "gv_player_entered_skeleton_mob_alliance_area_during_invasion",
            soItBegins: "gv_mob_alliance_skeleton_invasion_starterd",
            introCinematicPlayed: "gv_skeleton_mob_alliance_intro_cinematic_played",
            act1bIntroVOPlayed: "gv_skeleton_mob_alliance_act1bvo_played",
            cageDestroyed: "gv_skeleton_mob_alliance_caged_destroyed",
            portalEscalated: "gv_skeleton_mob_alliance_portal_escalated",
            totalCagesBuilt: "gv_skeleton_mob_alliance_cages_built",
            mobAllegianceBuildings: "gv_skeleton_amount_of_mob_allegiance_buildings",
            mobAllegianceGainedOnce: "gv_skeleton_mob_alliance_gained_once",
            hasEnteredMobAllianceAreaFirst: "gv_skeleton_player_entered_mob_alliance_area_during_piglin_invasion",
            joinedTheFight: "gv_skeleton_joined_the_fight",
            queueMobOccupationDestruction: "gv_skeleton_queue_mob_occupation_destruction",
            allCagesRemoved: "gv_skeleton_all_cages_removed",
            attackPortalVOPlayed: "gv_skeleton_attack_portal_vo_played",
            act2PreAttackVOPlayed: "gv_act2_pre_attack_vo_played_skeleton",
            playersEnteredPreOccupationZone: "gv_homestead_occupation_players_entered_pre_occupation_zone_skeleton"
        },
        cinematics: {
            introBeforeOccupation: "mob03_c01_skeleton_intro_fmv"
        },
        constant: {
            allegianceBuildingOffset: 23.5
        },
        behaviours: {
            default: "badger:mob_skeleton"
        },
        //this data is used by ManageMobAllianceSpawner in order to update spawners at homesteads based on the type of spawner (house or central building) and difficulty
        spawnerData: {
            mobIdentifier: "badger:mob_skeleton",
            normalConfig: {
                house: {
                    cap: 2,
                    rate: 2,
                    batch: 2
                },
                centralBuilding: {
                    cap: 8,
                    rate: 2,
                    batch: 4
                }
            },
            //spawner data for harder difficulty. I didn't want the rate to be too high or the homesteads feel empty for too long.
            hardConfig: {
                house: {
                    cap: 2,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 8,
                    rate: 20,
                    batch: 1
                }
            },
            //spawner data used when the mob alliances are being occupied for the first time
            duringOccupation: {
                house: {
                    cap: 2,
                    rate: 2,
                    batch: 1
                },
                centralBuilding: {
                    cap: 3,
                    rate: 2,
                    batch: 3
                }
            },
            duringOccupationHard: {
                house: {
                    cap: 1,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 3,
                    rate: 20,
                    batch: 1
                }
            },
            homesteadSpawner: "badger:spawner_world_skeleton_homestead"
        },
        voiceOvers: {
            act1bFirstTime: "act1b_skeletons_first_time",
            act1bMet: "act1b_skeletons_met",
            ac2PreAttack: "mob_act2_pre_attack_skeleton"
        },
        unlocks: {
            spawner: "unlock_spawner_skeleton",
            playerSpawner: "unlock_player_spawner_skeleton",
            battleView: "unlock_battle_view_skeleton",
            firstTimeUnlockResource: {
                resourceName: "diamond",
                quantity: 25
            }
        }
    },
    creeper: {
        id: "creeper",
        factionName: MOB_ALLIANCE_NAME_CREEPER,
        telemetryName: TELEMETRY_MOB_ALLIANCE_NAMES.creeper,
        journalUnlock: JOURNAL_UNLOCKS.MOB_CREEPER,
        hudItem: "badger:spawner_creeper",
        hudItemTimer: 14,
        spawnerTag: "creeperspawner",
        villageGen: {
            addPath: false,
            centerBuildingCard: "creeperVillageCenter",
            totemZoneCard: "creeperTotemOnlyZone", // TODO FIX
            northDistrictBuildings: [
                { card: "creeperMobAllianceHouse01", amount: 1 },
                { card: "creeperMobAllianceHouse02", amount: 2 }
                //{ card: "creeperMobAllianceHouse03", amount: 0 }
            ],
            southDistrictBuildings: [
                { card: "creeperMobAllianceHouse01", amount: 1 },
                //{ card: "creeperMobAllianceHouse02", amount: 0 },
                { card: "creeperMobAllianceHouse03", amount: 1 }
            ],
            eastDistrictBuildings: [
                { card: "creeperMobAllianceHouse01", amount: 1 },
                { card: "creeperMobAllianceHouse02", amount: 1 }
                //{ card: "creeperMobAllianceHouse03", amount: 0 }
            ],
            westDistrictBuildings: [
                { card: "creeperMobAllianceHouse01", amount: 2 }
                //{ card: "creeperMobAllianceHouse02", amount: 0 },
                //{ card: "creeperMobAllianceHouse03", amount: 0 }
            ],
            northDistrictDecoBuildings: [
                { card: "creeperMobAllianceDeco01", amount: 2 }
                //{ card: "creeperMobAllianceDeco02", amount: 0 }
            ],
            southDistrictDecoBuildings: [
                { card: "creeperMobAllianceDeco01", amount: 1 },
                { card: "creeperMobAllianceDeco02", amount: 1 }
            ],
            eastDistrictDecoBuildings: [
                //{ card: "creeperMobAllianceDeco01", amount: 0 }
                { card: "creeperMobAllianceDeco02", amount: 2 }
            ],
            westDistrictDecoBuildings: [
                { card: "creeperMobAllianceDeco01", amount: 1 },
                { card: "creeperMobAllianceDeco02", amount: 1 }
            ],
            cageBuildingCard: "mobCage"
        },
        global: {
            mobAllianceCompleted: "gv_mob_alliance_creeper_piglin_defeated",
            playerHasEngagedFirstFight: "gv_player_has_enganged_creeper_mob_alliance_fight",
            mobAlliancePiglinInvasionStarted: "gv_mob_alliance_creeper_piglin_invasion_started",
            playerHasAttackedThePortal: "gv_player_creeper_has_attacked_the_portal",
            mobAllianceGenerated: "gv_mob_alliance_creeper_generated",
            queueMobAlliancePiglinInvasion: "gv_queue_creeper_mob_alliance_piglin_invasion",
            playerEnteredAllianceAreaDuringInvasion: "gv_player_entered_creeper_mob_alliance_area_during_invasion",
            soItBegins: "gv_mob_alliance_creeper_invasion_starterd",
            introCinematicPlayed: "gv_creeper_mob_alliance_intro_cinematic_played",
            act1bIntroVOPlayed: "gv_creeper_mob_alliance_act1bvo_played",
            cageDestroyed: "gv_creeper_mob_alliance_caged_destroyed",
            portalEscalated: "gv_creeper_mob_alliance_portal_escalated",
            totalCagesBuilt: "gv_creeper_mob_alliance_cages_built",
            mobAllegianceBuildings: "gv_creeper_amount_of_mob_allegiance_buildings",
            mobAllegianceGainedOnce: "gv_creeper_mob_alliance_gained_once",
            hasEnteredMobAllianceAreaFirst: "gv_creeper_player_entered_mob_alliance_area_during_piglin_invasion",
            joinedTheFight: "gv_creeper_joined_the_fight",
            queueMobOccupationDestruction: "gv_creeper_queue_mob_occupation_destruction",
            allCagesRemoved: "gv_creeper_all_cages_removed",
            attackPortalVOPlayed: "gv_creeper_attack_portal_vo_played",
            act2PreAttackVOPlayed: "gv_act2_pre_attack_vo_played_creeper",
            playersEnteredPreOccupationZone: "gv_homestead_occupation_players_entered_pre_occupation_zone_creeper"
        },
        cinematics: {
            introBeforeOccupation: "mob01_c01_creeper_intro_fmv"
        },
        constant: {
            allegianceBuildingOffset: 28
        },
        behaviours: {
            default: "badger:mob_creeper"
        },
        //this data is used by ManageMobAllianceSpawner in order to update spawners at homesteads based on the type of spawner (house or central building) and difficulty
        spawnerData: {
            mobIdentifier: "badger:mob_creeper",
            normalConfig: {
                house: {
                    cap: 2,
                    rate: 2,
                    batch: 2
                },
                centralBuilding: {
                    cap: 8,
                    rate: 2,
                    batch: 4
                }
            },
            //spawner data for harder difficulty. I didn't want the rate to be too high or the homesteads feel empty for too long.
            hardConfig: {
                house: {
                    cap: 2,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 8,
                    rate: 20,
                    batch: 1
                }
            },
            //spawner data used when the mob alliances are being occupied for the first time
            duringOccupation: {
                house: {
                    cap: 3,
                    rate: 2,
                    batch: 1
                },
                centralBuilding: {
                    cap: 5,
                    rate: 2,
                    batch: 5
                }
            },
            duringOccupationHard: {
                house: {
                    cap: 1,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 3,
                    rate: 20,
                    batch: 1
                }
            },
            homesteadSpawner: "badger:spawner_world_creeper_homestead"
        },
        voiceOvers: {
            act1bFirstTime: "act1b_creepers_first_time",
            act1bMet: "act1b_creepers_met",
            ac2PreAttack: "mob_act2_pre_attack_creeper"
        },
        unlocks: {
            spawner: "unlock_spawner_creeper",
            playerSpawner: "unlock_player_spawner_creeper",
            battleView: "unlock_battle_view_creeper",
            firstTimeUnlockResource: {
                resourceName: "coal",
                quantity: 25
            }
        }
    },
    spider: {
        id: "spider",
        factionName: MOB_ALLIANCE_NAME_SPIDER,
        telemetryName: TELEMETRY_MOB_ALLIANCE_NAMES.spider,
        journalUnlock: JOURNAL_UNLOCKS.MOB_SPIDER,
        hudItem: "badger:spawner_spider",
        hudItemTimer: 14,
        spawnerTag: "spiderspawner",
        villageGen: {
            addPath: false,
            centerBuildingCard: "spiderVillageCenter",
            totemZoneCard: "spiderTotemOnlyZone", // TODO FIX
            northDistrictBuildings: [
                { card: "spiderMobAllianceHouse01", amount: 1 },
                { card: "spiderMobAllianceHouse02", amount: 2 }
                //{ card: "spiderMobAllianceHouse03", amount: 0 }
            ],
            southDistrictBuildings: [
                { card: "spiderMobAllianceHouse01", amount: 1 },
                //{ card: "spiderMobAllianceHouse02", amount: 0 },
                { card: "spiderMobAllianceHouse03", amount: 1 }
            ],
            eastDistrictBuildings: [
                { card: "spiderMobAllianceHouse01", amount: 1 },
                { card: "spiderMobAllianceHouse02", amount: 1 }
                //{ card: "spiderMobAllianceHouse03", amount: 0 }
            ],
            westDistrictBuildings: [
                { card: "spiderMobAllianceHouse01", amount: 2 }
                //{ card: "spiderMobAllianceHouse02", amount: 0 },
                //{ card: "spiderMobAllianceHouse03", amount: 0 }
            ],
            northDistrictDecoBuildings: [
                { card: "spiderMobAllianceDeco01", amount: 2 }
                //{ card: "spiderMobAllianceDeco02", amount: 0 }
            ],
            southDistrictDecoBuildings: [
                { card: "spiderMobAllianceDeco01", amount: 1 },
                { card: "spiderMobAllianceDeco02", amount: 1 }
            ],
            eastDistrictDecoBuildings: [
                //{ card: "spiderMobAllianceDeco01", amount: 0 }
                { card: "spiderMobAllianceDeco02", amount: 2 }
            ],
            westDistrictDecoBuildings: [
                { card: "spiderMobAllianceDeco01", amount: 1 },
                { card: "spiderMobAllianceDeco02", amount: 1 }
            ],
            cageBuildingCard: "mobCage"
        },
        global: {
            mobAllianceCompleted: "gv_mob_alliance_spider_piglin_defeated",
            playerHasEngagedFirstFight: "gv_player_has_enganged_spider_mob_alliance_fight",
            mobAlliancePiglinInvasionStarted: "gv_mob_alliance_spider_piglin_invasion_started",
            playerHasAttackedThePortal: "gv_player_spider_has_attacked_the_portal",
            mobAllianceGenerated: "gv_mob_alliance_spider_generated",
            queueMobAlliancePiglinInvasion: "gv_queue_spider_mob_alliance_piglin_invasion",
            playerEnteredAllianceAreaDuringInvasion: "gv_player_entered_spider_mob_alliance_area_during_invasion",
            soItBegins: "gv_mob_alliance_spider_invasion_starterd",
            introCinematicPlayed: "gv_spider_mob_alliance_intro_cinematic_played",
            act1bIntroVOPlayed: "gv_spider_mob_alliance_act1bvo_played",
            cageDestroyed: "gv_spider_mob_alliance_caged_destroyed",
            portalEscalated: "gv_spider_mob_alliance_portal_escalated",
            totalCagesBuilt: "gv_spider_mob_alliance_cages_built",
            mobAllegianceBuildings: "gv_spider_amount_of_mob_allegiance_buildings",
            mobAllegianceGainedOnce: "gv_spider_mob_alliance_gained_once",
            hasEnteredMobAllianceAreaFirst: "gv_spider_player_entered_mob_alliance_area_during_piglin_invasion",
            joinedTheFight: "gv_spider_joined_the_fight",
            queueMobOccupationDestruction: "gv_spider_queue_mob_occupation_destruction",
            allCagesRemoved: "gv_spider_all_cages_removed",
            attackPortalVOPlayed: "gv_spider_attack_portal_vo_played",
            act2PreAttackVOPlayed: "gv_act2_pre_attack_vo_played_spider",
            playersEnteredPreOccupationZone: "gv_homestead_occupation_players_entered_pre_occupation_zone_spider"
        },
        cinematics: {
            introBeforeOccupation: "mob01_c04_spider_intro_fmv"
        },
        constant: {
            allegianceBuildingOffset: 28
        },
        behaviours: {
            default: "badger:mob_spider"
        },
        //this data is used by ManageMobAllianceSpawner in order to update spawners at homesteads based on the type of spawner (house or central building) and difficulty
        spawnerData: {
            mobIdentifier: "badger:mob_spider",
            normalConfig: {
                house: {
                    cap: 2,
                    rate: 2,
                    batch: 2
                },
                centralBuilding: {
                    cap: 8,
                    rate: 2,
                    batch: 4
                }
            },
            //spawner data for harder difficulty. I didn't want the rate to be too high or the homesteads feel empty for too long.
            hardConfig: {
                house: {
                    cap: 2,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 8,
                    rate: 20,
                    batch: 1
                }
            },
            //spawner data used when the mob alliances are being occupied for the first time
            duringOccupation: {
                house: {
                    cap: 3,
                    rate: 2,
                    batch: 1
                },
                centralBuilding: {
                    cap: 5,
                    rate: 2,
                    batch: 5
                }
            },
            duringOccupationHard: {
                house: {
                    cap: 1,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 3,
                    rate: 20,
                    batch: 1
                }
            },
            homesteadSpawner: "badger:spawner_world_spider_homestead"
        },
        voiceOvers: {
            act1bFirstTime: "act1b_spiders_first_time",
            act1bMet: "act1b_spiders_met",
            ac2PreAttack: "mob_act2_pre_attack_spider"
        },
        unlocks: {
            spawner: "unlock_spawner_spider",
            playerSpawner: "unlock_player_spawner_spider",
            battleView: "unlock_battle_view_spider",
            firstTimeUnlockResource: {
                resourceName: "coal",
                quantity: 25
            }
        }
    },
    slime: {
        id: "slime",
        factionName: MOB_ALLIANCE_NAME_SLIME,
        telemetryName: TELEMETRY_MOB_ALLIANCE_NAMES.slime,
        journalUnlock: JOURNAL_UNLOCKS.MOB_SLIME,
        hudItem: "badger:spawner_slime",
        hudItemTimer: 14,
        spawnerTag: "slimespawner",
        villageGen: {
            addPath: false,
            centerBuildingCard: "slimeVillageCenter",
            totemZoneCard: "slimeTotemOnlyZone", // TODO FIX
            northDistrictBuildings: [
                { card: "slimeMobAllianceHouse01", amount: 1 },
                { card: "slimeMobAllianceHouse02", amount: 2 }
                //{ card: "slimeMobAllianceHouse03", amount: 0 }
            ],
            southDistrictBuildings: [
                { card: "slimeMobAllianceHouse01", amount: 1 },
                //{ card: "slimeMobAllianceHouse02", amount: 0 },
                { card: "slimeMobAllianceHouse03", amount: 1 }
            ],
            eastDistrictBuildings: [
                { card: "slimeMobAllianceHouse01", amount: 1 },
                { card: "slimeMobAllianceHouse02", amount: 1 }
                //{ card: "slimeMobAllianceHouse03", amount: 0 }
            ],
            westDistrictBuildings: [
                { card: "slimeMobAllianceHouse01", amount: 2 }
                //{ card: "slimeMobAllianceHouse02", amount: 0 },
                //{ card: "slimeMobAllianceHouse03", amount: 0 }
            ],
            northDistrictDecoBuildings: [
                { card: "slimeMobAllianceDeco01", amount: 2 }
                //{ card: "slimeMobAllianceDeco02", amount: 0 }
            ],
            southDistrictDecoBuildings: [
                { card: "slimeMobAllianceDeco01", amount: 1 },
                { card: "slimeMobAllianceDeco02", amount: 1 }
            ],
            eastDistrictDecoBuildings: [
                //{ card: "slimeMobAllianceDeco01", amount: 0 }
                { card: "slimeMobAllianceDeco02", amount: 2 }
            ],
            westDistrictDecoBuildings: [
                { card: "slimeMobAllianceDeco01", amount: 1 },
                { card: "slimeMobAllianceDeco02", amount: 1 }
            ],
            cageBuildingCard: "mobCage"
        },
        silverfish: {
            id: "silverfish",
            factionName: MOB_ALLIANCE_NAME_SILVERFISH,
            telemetryName: TELEMETRY_MOB_ALLIANCE_NAMES.silverfish,
            journalUnlock: JOURNAL_UNLOCKS.MOB_SILVERFISH,
            hudItem: "badger:spawner_silverfish",
            hudItemTimer: 14,
            spawnerTag: "silverfishspawner",
            villageGen: {
                addPath: false,
                centerBuildingCard: "silverfishVillageCenter",
                totemZoneCard: "silverfishTotemOnlyZone", // TODO FIX
                northDistrictBuildings: [
                    { card: "silverfishMobAllianceHouse01", amount: 1 },
                    { card: "silverfishMobAllianceHouse02", amount: 2 }
                    //{ card: "silverfishMobAllianceHouse03", amount: 0 }
                ],
                southDistrictBuildings: [
                    { card: "silverfishMobAllianceHouse01", amount: 1 },
                    //{ card: "silverfishMobAllianceHouse02", amount: 0 },
                    { card: "silverfishMobAllianceHouse03", amount: 1 }
                ],
                eastDistrictBuildings: [
                    { card: "silverfishMobAllianceHouse01", amount: 1 },
                    { card: "silverfishMobAllianceHouse02", amount: 1 }
                    //{ card: "silverfishMobAllianceHouse03", amount: 0 }
                ],
                westDistrictBuildings: [
                    { card: "silverfishMobAllianceHouse01", amount: 2 }
                    //{ card: "silverfishMobAllianceHouse02", amount: 0 },
                    //{ card: "silverfishMobAllianceHouse03", amount: 0 }
                ],
                northDistrictDecoBuildings: [
                    { card: "silverfishMobAllianceDeco01", amount: 2 }
                    //{ card: "silverfishMobAllianceDeco02", amount: 0 }
                ],
                southDistrictDecoBuildings: [
                    { card: "silverfishMobAllianceDeco01", amount: 1 },
                    { card: "silverfishMobAllianceDeco02", amount: 1 }
                ],
                eastDistrictDecoBuildings: [
                    //{ card: "silverfishMobAllianceDeco01", amount: 0 }
                    { card: "silverfishMobAllianceDeco02", amount: 2 }
                ],
                westDistrictDecoBuildings: [
                    { card: "silverfishMobAllianceDeco01", amount: 1 },
                    { card: "silverfishMobAllianceDeco02", amount: 1 }
                ],
                cageBuildingCard: "mobCage"
            },
        global: {
            mobAllianceCompleted: "gv_mob_alliance_silverfish_piglin_defeated",
            playerHasEngagedFirstFight: "gv_player_has_enganged_silverfish_mob_alliance_fight",
            mobAlliancePiglinInvasionStarted: "gv_mob_alliance_silverfish_piglin_invasion_started",
            playerHasAttackedThePortal: "gv_player_silverfish_has_attacked_the_portal",
            mobAllianceGenerated: "gv_mob_alliance_silverfish_generated",
            queueMobAlliancePiglinInvasion: "gv_queue_silverfish_mob_alliance_piglin_invasion",
            playerEnteredAllianceAreaDuringInvasion: "gv_player_entered_silverfish_mob_alliance_area_during_invasion",
            soItBegins: "gv_mob_alliance_silverfish_invasion_starterd",
            introCinematicPlayed: "gv_silverfish_mob_alliance_intro_cinematic_played",
            act1bIntroVOPlayed: "gv_silverfish_mob_alliance_act1bvo_played",
            cageDestroyed: "gv_silverfish_mob_alliance_caged_destroyed",
            portalEscalated: "gv_silverfish_mob_alliance_portal_escalated",
            totalCagesBuilt: "gv_silverfish_mob_alliance_cages_built",
            mobAllegianceBuildings: "gv_silverfish_amount_of_mob_allegiance_buildings",
            mobAllegianceGainedOnce: "gv_silverfish_mob_alliance_gained_once",
            hasEnteredMobAllianceAreaFirst: "gv_silverfish_player_entered_mob_alliance_area_during_piglin_invasion",
            joinedTheFight: "gv_silverfish_joined_the_fight",
            queueMobOccupationDestruction: "gv_silverfish_queue_mob_occupation_destruction",
            allCagesRemoved: "gv_silverfish_all_cages_removed",
            attackPortalVOPlayed: "gv_silverfish_attack_portal_vo_played",
            act2PreAttackVOPlayed: "gv_act2_pre_attack_vo_played_silverfish",
            playersEnteredPreOccupationZone: "gv_homestead_occupation_players_entered_pre_occupation_zone_silverfish"
        },
        cinematics: {
            introBeforeOccupation: "mob05_c04_silverfish_intro_fmv"
        },
        constant: {
            allegianceBuildingOffset: 28
        },
        behaviours: {
            default: "badger:mob_silverfish"
        },
        //this data is used by ManageMobAllianceSpawner in order to update spawners at homesteads based on the type of spawner (house or central building) and difficulty
        spawnerData: {
            mobIdentifier: "badger:mob_silverfish",
            normalConfig: {
                house: {
                    cap: 2,
                    rate: 2,
                    batch: 2
                },
                centralBuilding: {
                    cap: 8,
                    rate: 2,
                    batch: 4
                }
            },
            //spawner data for harder difficulty. I didn't want the rate to be too high or the homesteads feel empty for too long.
            hardConfig: {
                house: {
                    cap: 2,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 8,
                    rate: 20,
                    batch: 1
                }
            },
            //spawner data used when the mob alliances are being occupied for the first time
            duringOccupation: {
                house: {
                    cap: 3,
                    rate: 2,
                    batch: 1
                },
                centralBuilding: {
                    cap: 5,
                    rate: 2,
                    batch: 5
                }
            },
            duringOccupationHard: {
                house: {
                    cap: 1,
                    rate: 20,
                    batch: 1
                },
                centralBuilding: {
                    cap: 3,
                    rate: 20,
                    batch: 1
                }
            },
            homesteadSpawner: "badger:spawner_world_slime_homestead"
        },
        voiceOvers: {
            act1bFirstTime: "act1b_slimes_first_time",
            act1bMet: "act1b_slimes_met",
            ac2PreAttack: "mob_act2_pre_attack_slime"
        },
        unlocks: {
            spawner: "unlock_spawner_slime",
            playerSpawner: "unlock_player_spawner_slime",
            battleView: "unlock_battle_view_slime",
            firstTimeUnlockResource: {
                resourceName: "coal",
                quantity: 25
            }
        }
    }
}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetMobAllianceData = (mobId) => {
    const mobData = maVal[mobId]
    if (!mobData) {
        Loge(`Mob data does not exist for mobId ${mobId}`)
    }
    return mobData
}

const AddMobAllegianceStructureToInstantDeck = (mobAllianceData, villageId) => {
    // Build initial totem for mob alliance (on unlock)
    const occupationDestroyedDeck = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("allegianceStructure", 1), occupationDestroyedDeck) // Note: Reuse this card

    // NOTE: multiplying by StompPlayerStructuresCard here to remove anything in the way of the allegiance structure
    DECK_MultiplyByMultipleRules(occupationDestroyedDeck, [ZoneFilterCard(mobAllianceData.villageGen.totemZoneCard), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeWithoutSpacing"), ForceBuildingPlacementCard("forceBuildingPlacement"), StompPlayerStructuresCard("stompPlayerStructures")])
    
    Logv("Occupation Deck Size: " + DECK_Count(occupationDestroyedDeck))
    OUTPUT_AppendNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, occupationDestroyedDeck)
}

const _BuildAllegianceStructure = (mobAllianceData) => {
    Logi("####################### PIGLIN OCCUPYING BASE DESTROYED #############################")

    const mobAllianceVillageEntity = GetVillageEntityFromFaction(mobAllianceData.factionName)
    const maVillageId = QUERY_GetVillageIDFromEntity(mobAllianceVillageEntity)

    Logi("!!!!!!!!!!!!!!!!!!!!!!!! PLACING THE ALLIANCE TOTEM NOW !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    Logi("$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Village ID = " + maVillageId)

    AddMobAllegianceStructureToInstantDeck(mobAllianceData, maVillageId)

    LISTENFOR_BuildingComplete({
        snippet: "bc_mob_allegiance_structure",
        ownerVillageId: maVillageId,
        includeTags: ["totem_unlock_mob_alliance"],
        payloadString: mobAllianceData.id
    })

    AttemptUnlockMobAlliance(mobAllianceData.id)
}

SNIPPET_BuildingComplete("bc_mob_allegiance_structure", (buildingCompleteEG, payload) => {
    const mobAllianceData = maVal[payload.string]
    IncrementGlobal(mobAllianceData.global.mobAllegianceBuildings)

    LISTENFOR_EntityDisabled({
        snippet: "ed_mob_allegaince_structure",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        disabledEntity: buildingCompleteEG,
        payloadString: payload.string
    })

    LISTENFOR_EntityEnabled({
        snippet: "ee_mob_allegaince_structure",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        enabledEntity: buildingCompleteEG,
        payloadString: payload.string
    })
    Once()
})

const _RemoveAnyRemainingCage = (mobAllianceData) => {
    const remainingCages = QUERY_GetEntitiesWithTags([GetMACageTag(mobAllianceData.id)])
    if (HasEntities(remainingCages)) {
        OUTPUT_DestroyEntities(remainingCages)
        IncrementGlobal(mobAllianceData.global.allCagesRemoved)
    }
}

//Village Layout
const _SkeletonVillageLayout = (mobAllianceData) => {
    const baseDeck = DECK_Empty()

    //SET UP ZONES
    //center zones for center structure
    const centerZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(centerZone, [ZoneTagCard("skeletonCenterDeadZone")])

    const centerZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centerZoneLayers, [ZoneTagCard("skeletonCenterDeadZone"), ZoneTagCard("skeletonTotemOnlyZone")])

    //zones for alliance totem
    const allianceTotemZone = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(allianceTotemZone, [ZoneTagCard("skeletonTotemOnlyZone")])

    const viewpointZone = ZonesCard("addZone", 18)
    DECK_MultiplyByMultipleRules(viewpointZone, [PlacementPreferenceCard("placeInDirectionNorthWestWithWedgeBrush45"), PlacementPreferenceCard("clearResourcesInZone"), ZoneTagCard("skeletonViewpointZone")])

    //layer of zones for all houses and cages, 13x13 grid
    const generalZoneLayers = ZonesCard("addZone", 13 * 13)
    DECK_MultiplyByMultipleRules(generalZoneLayers, [PlacementPreferenceCard("placeInDirectionSouthEastWithWedgeBrush315"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("skeletonHouseZone"), ZoneTagCard("skeletonCageZones")])

    //layer of zones for decorations and cages
    const decoZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(decoZoneLayers, [ZoneTagCard("skeletonDecoZone"), ZoneTagCard("skeletonCageZones")])

    //SET UP STRUCTURES
    //place center structure
    const villageCenter = BuildableCard(mobAllianceData.villageGen.centerBuildingCard, 1)
    DECK_MultiplyByMultipleRules(villageCenter, [ZoneFilterCard("skeletonCenterDeadZone"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("facingSouth")])

    //north buildings deck
    const northDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictBuildings)
    })

    //multiply north deck by these preferences
    DECK_MultiplyByMultipleRules(northDistrictBuildings, [ZoneFilterCard("skeletonHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("facing_buildables_skeleton_center"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //east buildings deck
    const eastDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictBuildings)
    })

    //multiply east deck by these preferences
    DECK_MultiplyByMultipleRules(eastDistrictBuildings, [ZoneFilterCard("skeletonHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("facing_buildables_skeleton_center"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //west buildings deck
    const westDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(westDistrictBuildings, [ZoneFilterCard("skeletonHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("facing_buildables_skeleton_center"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //south buildings deck
    const southDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictBuildings)
    })

    //multiply south deck by these preferences
    DECK_MultiplyByMultipleRules(southDistrictBuildings, [ZoneFilterCard("skeletonHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("facing_buildables_skeleton_center"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    const viewpointTeleportMarkers = BuildableCard("onboardingGenericMarker", 4)
    DECK_MultiplyByMultipleRules(viewpointTeleportMarkers, [TagCard(`${mobAllianceData.id}InitialOccupationViewpoint`), ZoneFilterCard("skeletonViewpointZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //TEMP DECO PLACE AROUND OUTSKIRTS
    // const decoBuildings = DECK_Empty()
    // mobAllianceData.villageGen.decoBuildings.forEach((entry) => {
    //     DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), decoBuildings)
    // })

    //DECK_MultiplyByMultipleRules(decoBuildings, [ZoneFilterCard("skeletonDecoZone"), PlacementPreferenceCard(PLACEMENT_RANDOM), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START)])

    //SET UP PATHS
    const northPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const northPathEndRules = [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")]

    const southPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const southPathEndRules = [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")]

    const eastPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const eastPathEndRules = [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")]

    const westPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const westPathEndRules = [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")]

    //disable resource clearing?

    //zones
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(centerZoneLayers, baseDeck)
    DECK_PutOnBottomOf(allianceTotemZone, baseDeck)
    DECK_PutOnBottomOf(viewpointZone, baseDeck)
    DECK_PutOnBottomOf(generalZoneLayers, baseDeck)
    DECK_PutOnBottomOf(decoZoneLayers, baseDeck)

    //paths
    CreatePathRequestOnBottomOf("skeleton_district_path", northPathStartRules, northPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("skeleton_district_path", southPathStartRules, southPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("skeleton_district_path", eastPathStartRules, eastPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("skeleton_district_path", westPathStartRules, westPathEndRules, baseDeck)

    //walls

    //buildables
    DECK_PutOnBottomOf(villageCenter, baseDeck)
    DECK_PutOnBottomOf(northDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(viewpointTeleportMarkers, baseDeck)
    //DECK_PutOnBottomOf(decoBuildings, baseDeck)

    //weathering // resource clearing

    return baseDeck
}

const _ZombieVillageLayout = (mobAllianceData) => {
    const baseDeck = DECK_Empty()

    //SET UP ZONES
    //center zones for center structure
    const centerZone = ZonesCard("addZone", 9)
    DECK_MultiplyByMultipleRules(centerZone, [ZoneTagCard("zombieCenterDeadZone"), ZoneTagCard("zombieTotemOnlyZone")])

    //single zone for mob alliance totem
    const allianceTotemZone = ZonesCard("addZone", 4)
    DECK_MultiplyByMultipleRules(allianceTotemZone, [ZoneTagCard("zombieTotemOnlyZone")])

    const viewpointZone = ZonesCard("addZone", 18)
    DECK_MultiplyByMultipleRules(viewpointZone, [PlacementPreferenceCard("placeInDirectionNorthWestWithWedgeBrush45"), PlacementPreferenceCard("clearResourcesInZone"), ZoneTagCard("zombieViewpointZone")])

    //layer of zones for all houses and cages, 13x13 grid
    const generalZoneLayers = ZonesCard("addZone", 13 * 13)
    DECK_MultiplyByMultipleRules(generalZoneLayers, [PlacementPreferenceCard("placeInDirectionSouthEastWithWedgeBrush315"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("zombieHouseZone"), ZoneTagCard("zombieCageZones")])

    //layer of zones for decorations and cages
    const decoZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(decoZoneLayers, [ZoneTagCard("zombieDecoZone"), ZoneTagCard("zombieCageZones")])

    //SET UP STRUCTURES
    //place center structure
    const villageCenter = BuildableCard(mobAllianceData.villageGen.centerBuildingCard, 1)
    DECK_MultiplyByMultipleRules(villageCenter, [ZoneFilterCard("zombieCenterDeadZone"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("facingSouth")])

    //north buildings deck
    const northDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictBuildings)
    })

    //multiply north deck by these preferences
    DECK_MultiplyByMultipleRules(northDistrictBuildings, [ZoneFilterCard("zombieHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("facing_buildables_zombie_center"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //east buildings deck
    const eastDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictBuildings)
    })

    //multiply east deck by these preferences
    DECK_MultiplyByMultipleRules(eastDistrictBuildings, [ZoneFilterCard("zombieHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("facing_buildables_zombie_center"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //west buildings deck
    const westDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(westDistrictBuildings, [ZoneFilterCard("zombieHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("facing_buildables_zombie_center"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //south buildings deck
    const southDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(southDistrictBuildings, [ZoneFilterCard("zombieHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("connectToPath"), PlacementPreferenceCard("facing_buildables_zombie_center"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //TEMP DECO PLACE AROUND OUTSKIRTS
    const decoBuildings = DECK_Empty()
    mobAllianceData.villageGen.decoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), decoBuildings)
    })

    DECK_MultiplyByMultipleRules(decoBuildings, [ZoneFilterCard("zombieDecoZone"), PlacementPreferenceCard(PLACEMENT_RANDOM), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START)])

    const viewpointTeleportMarkers = BuildableCard("onboardingGenericMarker", 4)
    DECK_MultiplyByMultipleRules(viewpointTeleportMarkers, [TagCard(`${mobAllianceData.id}InitialOccupationViewpoint`), ZoneFilterCard("zombieViewpointZone"), PlacementPreferenceCard("placeInDirectionNorthWestWithRectangleBrush")])

    //SET UP PATHS
    const northPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const northPathEndRules = [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")]

    const southPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const southPathEndRules = [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")]

    const eastPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const eastPathEndRules = [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")]

    const westPathStartRules = [PlacementPreferenceCard("closeToDistrictStart")]
    const westPathEndRules = [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")]

    //disable resource clearing?

    //zones
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(allianceTotemZone, baseDeck)
    DECK_PutOnBottomOf(viewpointZone, baseDeck)
    DECK_PutOnBottomOf(generalZoneLayers, baseDeck)
    DECK_PutOnBottomOf(decoZoneLayers, baseDeck)

    //paths
    CreatePathRequestOnBottomOf("zombie_district_path", northPathStartRules, northPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("zombie_district_path", southPathStartRules, southPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("zombie_district_path", eastPathStartRules, eastPathEndRules, baseDeck)
    CreatePathRequestOnBottomOf("zombie_district_path", westPathStartRules, westPathEndRules, baseDeck)

    //walls

    //buildables
    DECK_PutOnBottomOf(villageCenter, baseDeck)
    DECK_PutOnBottomOf(northDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(viewpointTeleportMarkers, baseDeck)
    //DECK_PutOnBottomOf(decoBuildings, baseDeck)

    //weathering // resource clearing

    return baseDeck
}

const _CreeperVillageLayout = (mobAllianceData) => {
    const baseDeck = DECK_Empty()

    //SET UP ZONES
    //center zones for center structure
    const centerZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(centerZone, [ZoneTagCard("creeperCenterDeadZone")])

    const centerZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centerZoneLayers, [ZoneTagCard("creeperCenterDeadZone"), ZoneTagCard("creeperTotemOnlyZone")])

    //single zone for mob alliance totem
    const allianceTotemZone = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(allianceTotemZone, [ZoneTagCard("creeperTotemOnlyZone")])

    const viewpointZone = ZonesCard("addZone", 18)
    DECK_MultiplyByMultipleRules(viewpointZone, [PlacementPreferenceCard("placeInDirectionNorthWestWithWedgeBrush45"), PlacementPreferenceCard("clearResourcesInZone"), ZoneTagCard("creeperViewpointZone")])

    //layer of zones for all houses and cages, 13x13 grid
    const generalZoneLayers = ZonesCard("addZone", 13 * 13)
    DECK_MultiplyByMultipleRules(generalZoneLayers, [PlacementPreferenceCard("placeInDirectionSouthEastWithWedgeBrush315"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("creeperHouseZone"), ZoneTagCard("creeperDecoZone"), ZoneTagCard("creeperCageZones")])

    //layer of zones for decorations and cages
    const decoZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(decoZoneLayers, [ZoneTagCard("creeperDecoZone"), ZoneTagCard("creeperCageZones")])

    //SET UP STRUCTURES
    //place center structure
    const villageCenter = BuildableCard(mobAllianceData.villageGen.centerBuildingCard, 1)
    DECK_MultiplyByMultipleRules(villageCenter, [ZoneFilterCard("creeperCenterDeadZone"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("facingSouth")])

    //north buildings deck
    const northDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictBuildings)
    })

    //multiply north deck by these preferences
    DECK_MultiplyByMultipleRules(northDistrictBuildings, [ZoneFilterCard("creeperHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facing_buildables_creeper_center"), PlacementPreferenceCard("creeperconnectToPath"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //east buildings deck
    const eastDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictBuildings)
    })

    //multiply east deck by these preferences
    DECK_MultiplyByMultipleRules(eastDistrictBuildings, [ZoneFilterCard("creeperHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("creeperconnectToPath"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //west buildings deck
    const westDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(westDistrictBuildings, [ZoneFilterCard("creeperHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("creeperconnectToPath"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //south buildings deck
    const southDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(southDistrictBuildings, [ZoneFilterCard("creeperHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facing_buildables_creeper_center"), PlacementPreferenceCard("creeperconnectToPath"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //DECO PLACE AROUND OUTSKIRTS
    //North District Deco
    const northDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(northDistrictDecoBuildings, [ZoneFilterCard("creeperDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //South District Deco
    const southDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(southDistrictDecoBuildings, [ZoneFilterCard("creeperDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")])

    //East District Deco
    const eastDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(eastDistrictDecoBuildings, [ZoneFilterCard("creeperDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //West District Deco
    const westDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(westDistrictDecoBuildings, [ZoneFilterCard("creeperDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    const viewpointTeleportMarkers = BuildableCard("onboardingGenericMarker", 4)
    DECK_MultiplyByMultipleRules(viewpointTeleportMarkers, [TagCard(`${mobAllianceData.id}InitialOccupationViewpoint`), ZoneFilterCard("creeperViewpointZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //disable resource clearing?

    //zones
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(centerZoneLayers, baseDeck)
    DECK_PutOnBottomOf(allianceTotemZone, baseDeck)
    DECK_PutOnBottomOf(viewpointZone, baseDeck)
    DECK_PutOnBottomOf(generalZoneLayers, baseDeck)
    DECK_PutOnBottomOf(decoZoneLayers, baseDeck)

    //walls

    //buildables
    DECK_PutOnBottomOf(villageCenter, baseDeck)
    DECK_PutOnBottomOf(northDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(northDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(viewpointTeleportMarkers, baseDeck)

    //weathering // resource clearing

    return baseDeck
}

const _SpiderVillageLayout = (mobAllianceData) => {
    const baseDeck = DECK_Empty()

    //SET UP ZONES
    //center zones for center structure
    const centerZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(centerZone, [ZoneTagCard("spiderCenterDeadZone")])

    const centerZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centerZoneLayers, [ZoneTagCard("spiderCenterDeadZone"), ZoneTagCard("spiderTotemOnlyZone")])

    //single zone for mob alliance totem
    const allianceTotemZone = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(allianceTotemZone, [ZoneTagCard("spiderTotemOnlyZone")])

    const viewpointZone = ZonesCard("addZone", 18)
    DECK_MultiplyByMultipleRules(viewpointZone, [PlacementPreferenceCard("placeInDirectionNorthWestWithWedgeBrush45"), PlacementPreferenceCard("clearResourcesInZone"), ZoneTagCard("spiderViewpointZone")])

    //layer of zones for all houses and cages, 13x13 grid
    const generalZoneLayers = ZonesCard("addZone", 13 * 13)
    DECK_MultiplyByMultipleRules(generalZoneLayers, [PlacementPreferenceCard("placeInDirectionSouthEastWithWedgeBrush315"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("spiderHouseZone"), ZoneTagCard("spiderDecoZone"), ZoneTagCard("spiderCageZones")])

    //layer of zones for decorations and cages
    const decoZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(decoZoneLayers, [ZoneTagCard("spiderDecoZone"), ZoneTagCard("spiderCageZones")])

    //SET UP STRUCTURES
    //place center structure
    const villageCenter = BuildableCard(mobAllianceData.villageGen.centerBuildingCard, 1)
    DECK_MultiplyByMultipleRules(villageCenter, [ZoneFilterCard("spiderCenterDeadZone"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("facingSouth")])

    //north buildings deck
    const northDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictBuildings)
    })

    //multiply north deck by these preferences
    DECK_MultiplyByMultipleRules(northDistrictBuildings, [ZoneFilterCard("spiderHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facing_buildables_spider_center"), PlacementPreferenceCard("spiderconnectToPath"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //east buildings deck
    const eastDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictBuildings)
    })

    //multiply east deck by these preferences
    DECK_MultiplyByMultipleRules(eastDistrictBuildings, [ZoneFilterCard("spiderHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("spiderconnectToPath"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //west buildings deck
    const westDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(westDistrictBuildings, [ZoneFilterCard("spiderHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("spiderconnectToPath"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //south buildings deck
    const southDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(southDistrictBuildings, [ZoneFilterCard("spiderHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facing_buildables_spider_center"), PlacementPreferenceCard("spiderconnectToPath"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //DECO PLACE AROUND OUTSKIRTS
    //North District Deco
    const northDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(northDistrictDecoBuildings, [ZoneFilterCard("spiderDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //South District Deco
    const southDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(southDistrictDecoBuildings, [ZoneFilterCard("spiderDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")])

    //East District Deco
    const eastDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(eastDistrictDecoBuildings, [ZoneFilterCard("spiderDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //West District Deco
    const westDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(westDistrictDecoBuildings, [ZoneFilterCard("spiderDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    const viewpointTeleportMarkers = BuildableCard("onboardingGenericMarker", 4)
    DECK_MultiplyByMultipleRules(viewpointTeleportMarkers, [TagCard(`${mobAllianceData.id}InitialOccupationViewpoint`), ZoneFilterCard("spiderViewpointZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //disable resource clearing?

    //zones
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(centerZoneLayers, baseDeck)
    DECK_PutOnBottomOf(allianceTotemZone, baseDeck)
    DECK_PutOnBottomOf(viewpointZone, baseDeck)
    DECK_PutOnBottomOf(generalZoneLayers, baseDeck)
    DECK_PutOnBottomOf(decoZoneLayers, baseDeck)

    //walls

    //buildables
    DECK_PutOnBottomOf(villageCenter, baseDeck)
    DECK_PutOnBottomOf(northDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(northDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(viewpointTeleportMarkers, baseDeck)

    //weathering // resource clearing

    return baseDeck
}

const _SlimeVillageLayout = (mobAllianceData) => {
    const baseDeck = DECK_Empty()

    //SET UP ZONES
    //center zones for center structure
    const centerZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(centerZone, [ZoneTagCard("slimeCenterDeadZone")])

    const centerZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centerZoneLayers, [ZoneTagCard("slimeCenterDeadZone"), ZoneTagCard("slimeTotemOnlyZone")])

    //single zone for mob alliance totem
    const allianceTotemZone = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(allianceTotemZone, [ZoneTagCard("slimeTotemOnlyZone")])

    const viewpointZone = ZonesCard("addZone", 18)
    DECK_MultiplyByMultipleRules(viewpointZone, [PlacementPreferenceCard("placeInDirectionNorthWestWithWedgeBrush45"), PlacementPreferenceCard("clearResourcesInZone"), ZoneTagCard("slimeViewpointZone")])

    //layer of zones for all houses and cages, 13x13 grid
    const generalZoneLayers = ZonesCard("addZone", 13 * 13)
    DECK_MultiplyByMultipleRules(generalZoneLayers, [PlacementPreferenceCard("placeInDirectionSouthEastWithWedgeBrush315"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("slimeHouseZone"), ZoneTagCard("slimeDecoZone"), ZoneTagCard("slimeCageZones")])

    //layer of zones for decorations and cages
    const decoZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(decoZoneLayers, [ZoneTagCard("slimeDecoZone"), ZoneTagCard("slimeCageZones")])

    //SET UP STRUCTURES
    //place center structure
    const villageCenter = BuildableCard(mobAllianceData.villageGen.centerBuildingCard, 1)
    DECK_MultiplyByMultipleRules(villageCenter, [ZoneFilterCard("slimeCenterDeadZone"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("facingSouth")])

    //north buildings deck
    const northDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictBuildings)
    })

    //multiply north deck by these preferences
    DECK_MultiplyByMultipleRules(northDistrictBuildings, [ZoneFilterCard("slimeHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facing_buildables_slime_center"), PlacementPreferenceCard("slimeconnectToPath"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //east buildings deck
    const eastDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictBuildings)
    })

    //multiply east deck by these preferences
    DECK_MultiplyByMultipleRules(eastDistrictBuildings, [ZoneFilterCard("slimeHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("slimeconnectToPath"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //west buildings deck
    const westDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(westDistrictBuildings, [ZoneFilterCard("slimeHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("slimeconnectToPath"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //south buildings deck
    const southDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(southDistrictBuildings, [ZoneFilterCard("slimeHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facing_buildables_slime_center"), PlacementPreferenceCard("slimeconnectToPath"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //DECO PLACE AROUND OUTSKIRTS
    //North District Deco
    const northDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(northDistrictDecoBuildings, [ZoneFilterCard("slimeDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //South District Deco
    const southDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(southDistrictDecoBuildings, [ZoneFilterCard("slimeDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")])

    //East District Deco
    const eastDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(eastDistrictDecoBuildings, [ZoneFilterCard("slimeDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //West District Deco
    const westDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(westDistrictDecoBuildings, [ZoneFilterCard("slimeDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    const viewpointTeleportMarkers = BuildableCard("onboardingGenericMarker", 4)
    DECK_MultiplyByMultipleRules(viewpointTeleportMarkers, [TagCard(`${mobAllianceData.id}InitialOccupationViewpoint`), ZoneFilterCard("slimeViewpointZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //disable resource clearing?

    //zones
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(centerZoneLayers, baseDeck)
    DECK_PutOnBottomOf(allianceTotemZone, baseDeck)
    DECK_PutOnBottomOf(viewpointZone, baseDeck)
    DECK_PutOnBottomOf(generalZoneLayers, baseDeck)
    DECK_PutOnBottomOf(decoZoneLayers, baseDeck)

    //walls

    //buildables
    DECK_PutOnBottomOf(villageCenter, baseDeck)
    DECK_PutOnBottomOf(northDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(northDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(viewpointTeleportMarkers, baseDeck)

    //weathering // resource clearing

    return baseDeck
}

const _SilverfishVillageLayout = (mobAllianceData) => {
    const baseDeck = DECK_Empty()

    //SET UP ZONES
    //center zones for center structure
    const centerZone = ZonesCard("addZone", 2)
    DECK_MultiplyByMultipleRules(centerZone, [ZoneTagCard("silverfishCenterDeadZone")])

    const centerZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(centerZoneLayers, [ZoneTagCard("silverfishCenterDeadZone"), ZoneTagCard("silverfishTotemOnlyZone")])

    //single zone for mob alliance totem
    const allianceTotemZone = ZonesCard("addZone", 3)
    DECK_MultiplyByMultipleRules(allianceTotemZone, [ZoneTagCard("silverfishTotemOnlyZone")])

    const viewpointZone = ZonesCard("addZone", 18)
    DECK_MultiplyByMultipleRules(viewpointZone, [PlacementPreferenceCard("placeInDirectionNorthWestWithWedgeBrush45"), PlacementPreferenceCard("clearResourcesInZone"), ZoneTagCard("silverfishViewpointZone")])

    //layer of zones for all houses and cages, 13x13 grid
    const generalZoneLayers = ZonesCard("addZone", 13 * 13)
    DECK_MultiplyByMultipleRules(generalZoneLayers, [PlacementPreferenceCard("placeInDirectionSouthEastWithWedgeBrush315"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneTagCard("silverfishHouseZone"), ZoneTagCard("silverfishDecoZone"), ZoneTagCard("silverfishCageZones")])

    //layer of zones for decorations and cages
    const decoZoneLayers = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(decoZoneLayers, [ZoneTagCard("silverfishDecoZone"), ZoneTagCard("silverfishCageZones")])

    //SET UP STRUCTURES
    //place center structure
    const villageCenter = BuildableCard(mobAllianceData.villageGen.centerBuildingCard, 1)
    DECK_MultiplyByMultipleRules(villageCenter, [ZoneFilterCard("silverfishCenterDeadZone"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("facingSouth")])

    //north buildings deck
    const northDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictBuildings)
    })

    //multiply north deck by these preferences
    DECK_MultiplyByMultipleRules(northDistrictBuildings, [ZoneFilterCard("silverfishHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facing_buildables_silverfish_center"), PlacementPreferenceCard("silverfishconnectToPath"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //east buildings deck
    const eastDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictBuildings)
    })

    //multiply east deck by these preferences
    DECK_MultiplyByMultipleRules(eastDistrictBuildings, [ZoneFilterCard("silverfishHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("silverfishconnectToPath"), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //west buildings deck
    const westDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(westDistrictBuildings, [ZoneFilterCard("silverfishHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("silverfishconnectToPath"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //south buildings deck
    const southDistrictBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictBuildings)
    })

    //multiply west deck by these preferences
    DECK_MultiplyByMultipleRules(southDistrictBuildings, [ZoneFilterCard("silverfishHouseZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("facing_buildables_silverfish_center"), PlacementPreferenceCard("silverfishconnectToPath"), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    //DECO PLACE AROUND OUTSKIRTS
    //North District Deco
    const northDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.northDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), northDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(northDistrictDecoBuildings, [ZoneFilterCard("silverfishDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //South District Deco
    const southDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.southDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), southDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(southDistrictDecoBuildings, [ZoneFilterCard("silverfishDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush")])

    //East District Deco
    const eastDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.eastDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), eastDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(eastDistrictDecoBuildings, [ZoneFilterCard("silverfishDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionEastWithRectangleBrush")])

    //West District Deco
    const westDistrictDecoBuildings = DECK_Empty()
    mobAllianceData.villageGen.westDistrictDecoBuildings.forEach((entry) => {
        DECK_PutOnBottomOf(BuildableCard(entry.card, entry.amount), westDistrictDecoBuildings)
    })

    DECK_MultiplyByMultipleRules(westDistrictDecoBuildings, [ZoneFilterCard("silverfishDecoZone"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("placeInDirectionWestWithRectangleBrush")])

    const viewpointTeleportMarkers = BuildableCard("onboardingGenericMarker", 4)
    DECK_MultiplyByMultipleRules(viewpointTeleportMarkers, [TagCard(`${mobAllianceData.id}InitialOccupationViewpoint`), ZoneFilterCard("silverfishViewpointZone"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush")])

    //disable resource clearing?

    //zones
    DECK_PutOnBottomOf(centerZone, baseDeck)
    DECK_PutOnBottomOf(centerZoneLayers, baseDeck)
    DECK_PutOnBottomOf(allianceTotemZone, baseDeck)
    DECK_PutOnBottomOf(viewpointZone, baseDeck)
    DECK_PutOnBottomOf(generalZoneLayers, baseDeck)
    DECK_PutOnBottomOf(decoZoneLayers, baseDeck)

    //walls

    //buildables
    DECK_PutOnBottomOf(villageCenter, baseDeck)
    DECK_PutOnBottomOf(northDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictBuildings, baseDeck)
    DECK_PutOnBottomOf(northDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(southDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(eastDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(westDistrictDecoBuildings, baseDeck)
    DECK_PutOnBottomOf(viewpointTeleportMarkers, baseDeck)

    //weathering // resource clearing

    return baseDeck
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OccupyingBaseDestroyed = (mobId) => {
    const mobAllianceData = maVal[mobId]
    if (IsOccupationBeatOver(mobId)) {
        return
    }

    if (QUERY_GetCampaignResource(maVal.allegianceUnlockResource) === 0) {
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, maVal.allegianceUnlockResource, 1, false)

        if (IsCurrentAct(ACTS.ACT_3A)) {
            IncrementGlobal(maVal.queueAllegianceStructureTeachingBit)
        }

        Logi("XXXXXXXXXXX OBC allegianceUnlockResource XXXXXXXXXXXXXX")
        //ONBOARDING
        if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.MOB_OCCUPATION_DEFEATED) === 0) {
            IncrementGlobal(ONBOARDING_GLOBALS.MOB_OCCUPATION_DEFEATED)
        }
    }

    _BuildAllegianceStructure(mobAllianceData)

    Logi("YYYYYYYYYYYYY Increment Global MAC YYYYYYYYYYYYYYYYY")
    IncrementGlobal(mobAllianceData.global.mobAllianceCompleted)
    IncrementGlobal(INVASION_PHASE_STATE.MOB_ALLIANCES_COMPLETED_COUNT)
    _RemoveAnyRemainingCage(mobAllianceData)
    RefreshAllSpawnersConfig(mobAllianceData.id)
    RefreshBehaviourOfAllUncagedMobs(mobAllianceData.id)

    const mobAllianceVillageEntity = GetVillageEntityFromFaction(mobAllianceData.factionName)
    if (HasEntities(mobAllianceVillageEntity)) {
        OUTPUT_MapSetKeyValue(mobAllianceVillageEntity, MAP_KEY.STATE, MAP_ICON_STATE.UNHURT)
    }
}

const _setupMobAllianceBehavior = () => {
    LISTENFOR_VillagePlanned({
        snippet: "vg_mob_alliance_planned",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: maVal.zombie.factionName,
        payloadString: maVal.zombie.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vg_mob_alliance_planned",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: maVal.skeleton.factionName,
        payloadString: maVal.skeleton.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vg_mob_alliance_planned",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: maVal.creeper.factionName,
        payloadString: maVal.creeper.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vg_mob_alliance_planned",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: maVal.spider.factionName,
        payloadString: maVal.spider.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vg_mob_alliance_planned",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: maVal.slime.factionName,
        payloadString: maVal.slime.id
    })

    LISTENFOR_VillagePlanned({
        snippet: "vg_mob_alliance_planned",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: maVal.silverfish.factionName,
        payloadString: maVal.silverfish.id
    })
}

SNIPPET_InheritsFromGameMode("lcu_campaign", () => {
    _setupMobAllianceBehavior()
})

SNIPPET_InheritsFromGameMode("editor", () => {
    _setupMobAllianceBehavior()
})

SNIPPET_VillagePlanned("vg_mob_alliance_planned", (villageId, payload) => {
    const mobAllianceData = maVal[payload.string]
    LISTENFOR_VillageGenerated({
        snippet: "vg_mob_alliance",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: mobAllianceData.factionName,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_mob_alliance_act3_started",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: ACTS.ACT_3A,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_mob_alliance_village_built",
        ownerVillageId: villageId,
        villageId: villageId,
        payloadString: mobAllianceData.id
    })

    //HIDE THE VILLAGE ICON IF ONBOARDING IS ON
    if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.ONBOARDING_ENABLED) > 0) {
        const villageEntity = GetVillageEntityFromID(villageId)
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.HIDDEN)
    }
})

SNIPPET_VillageFinishedBuilding("vfb_mob_alliance_village_built", (_villageId, payload) => {
    const mobId = payload.string
    OUTPUT_SetGlobalVariable(GetMAVillageBuiltVar(mobId), 1)
    if (QUERY_GetGlobalVariable(GetMABaseBuiltVar(mobId))) {
        OnMobAllianceOccupationStarted(mobId)
    }
})

SNIPPET_VillageGenerated("vg_mob_alliance", (villageId, payload) => {
    const mobAllianceData = maVal[payload.string]
    let baseDeck = DECK_Empty()
    switch (mobAllianceData.id) {
        case maVal.skeleton.id:
            baseDeck = _SkeletonVillageLayout(mobAllianceData)
            break
        case maVal.zombie.id:
            baseDeck = _ZombieVillageLayout(mobAllianceData)
            break
        case maVal.creeper.id:
            baseDeck = _CreeperVillageLayout(mobAllianceData)
            break
        case maVal.spider.id:
            baseDeck = _SpiderVillageLayout(mobAllianceData)
            break
        case maVal.slime.id:
            baseDeck = _SlimeVillageLayout(mobAllianceData)
            break
        case maVal.silverfish.id:
            baseDeck = _SilverfishVillageLayout(mobAllianceData)
            break
    }

    SetupBasicVillageClearingCards(baseDeck)
    DECK_PutOnTopOf(EntityClearingCard("clearLootPiglinCrate"), baseDeck)

    const mobAllianceVillageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(mobAllianceVillageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)

    Logi("VG MOB ALLIANCE GENERATED ")

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    OUTPUT_SetGlobalVariable(mobAllianceData.global.mobAllianceGenerated, 1)

    LISTENFOR_BuildingComplete({
        snippet: "bc_mob_alliance_center",
        ownerVillageId: villageId,
        includeTags: [GetMACenterBuildingTag(mobAllianceData.id)],
        payloadString: mobAllianceData.id
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_mob_alliance_house",
        ownerVillageId: villageId,
        includeTags: [GetMAHouseTag(mobAllianceData.id)],
        payloadString: mobAllianceData.id
    })

    const villageEntity = GetVillageEntityFromID(villageId)
    const mobAllianceOnboardingTV = SpawnTriggerVolume(villageEntity, villageEntity, "badger:spatial_trigger_mob_alliance_player_cinematic", TEAM_WILD, villageId, true, TAG_PLAYER, [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_mob_alliance_onboarding",
        ownerVillageId: villageId,
        triggerEntity: mobAllianceOnboardingTV,
        payloadString: mobAllianceData.global.mobAllegianceGainedOnce
    })

    LISTENFOR_EntityEnabled({
        snippet: "ee_enable_mob_alliance_spawner",
        ownerVillageId: villageId
    })

    LISTENFOR_EntityDisabled({
        snippet: "ee_disable_mob_alliance_spawner",
        ownerVillageId: villageId
    })

    LISTENFOR_InfluenceLureChanged({
        snippet: "ilc_homestead_mob_lured",
        ownerVillageId: villageId,
        includeTags: [mobAllianceData.id]
    })
})

SNIPPET_InfluenceLureChanged("ilc_homestead_mob_lured", (entity, wasStarted, payload) => {
    Logv(`ilc_homestead_mob_lured`)
    const filteredMobs = FILTER_ByVillageID(entity, payload.ownerVillageId)
    if (HasEntities(filteredMobs)) {
        if (wasStarted) {
            OUTPUT_RemoveTag(filteredMobs, "homestead_mob")
        } else {
            OUTPUT_AddTag(filteredMobs, "homestead_mob")
        }
    }
})

SNIPPET_EntityEnabled("ee_enable_mob_alliance_spawner", (house) => {
    // Enable targeting
    OUTPUT_RemoveTag(house, TAG_DO_NOT_ATTACK)
    OUTPUT_RemoveTag(house, TAG_DISABLED)
})

SNIPPET_EntityDisabled("ee_disable_mob_alliance_spawner", (house) => {
    // Disable targeting
    OUTPUT_AddTag(house, TAG_DO_NOT_ATTACK)
    OUTPUT_AddTag(house, TAG_DISABLED)
})

SNIPPET_EntityDisabled("ed_mob_allegaince_structure", (_disabledEntity, payload) => {
    const mobAllianceData = maVal[payload.string]
    DecrementGlobal(mobAllianceData.global.mobAllegianceBuildings)

    Logi("Firing ed_mob_allegaince_structure")
    if (!IsOccupationBeatOver(mobAllianceData.id)) {
        Logi("ed_mob_allegaince_structure Occupation beat not over " + mobAllianceData.id)
        return
    }

    Logi("~~~~~~ Decrement mobAllianceData.global.mobAllegianceBuildings ~~~~~ " + mobAllianceData.global.mobAllegianceBuildings)
    if (QUERY_GetGlobalVariable(mobAllianceData.global.mobAllegianceBuildings) === 0) {
        Logi("####################### Unlock Resources Removed #############################")
        if (IsMobAllianceUnlocked(mobAllianceData.id)) {
            LockMobAlliance(mobAllianceData.id)
        }
    }
})

SNIPPET_EntityEnabled("ee_mob_allegaince_structure", (enabledEntity, payload) => {
    const mobAllianceData = maVal[payload.string]
    IncrementGlobal(mobAllianceData.global.mobAllegianceBuildings)

    Logi("Firing ee_mob_allegaince_structure")
    if (!IsOccupationBeatOver(mobAllianceData.id)) {
        Logi("ee_mob_allegaince_structure Occupation beat not over " + mobAllianceData.id)
        return
    }

    // Ignore if the village is occupied (from a village attack).
    const villageId = QUERY_GetVillageIDFromEntity(enabledEntity)
    if (QUERY_IsVillageOccupied(villageId)) {
        return
    }

    Logi("~~~~~~ Increment mobAllianceData.global.mobAllegianceBuildings ~~~~~ " + mobAllianceData.global.mobAllegianceBuildings)
    if (!IsMobAllianceUnlocked(mobAllianceData.id)) {
        Logi("####################### Unlock Resources Gained #############################")
        UnlockMobAlliance(mobAllianceData.id)
    }
})

SNIPPET_BuildingComplete("bc_mob_alliance_center", (buildingCompleteEG, payload) => {
    const mobAllianceData = maVal[payload.string]
    const centralBuilding = buildingCompleteEG
    const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEG)

    ManageMobAllianceSpawner(buildingCompleteEG, true, payload.string)
    if (QUERY_GetGlobalVariable(mobAllianceData.global.queueMobAlliancePiglinInvasion) > 0) {
        StartMobAlliancePiglinInvasion(mobAllianceData.id)
    }

    const tvEntityName = "badger:spatial_trigger_mob_alliance_gameplay"
    const mobAllianceMobsTV = SpawnTriggerVolume(centralBuilding, undefined, tvEntityName, TEAM_WILD, undefined, true, [mobAllianceData.id], ["caged_mob"], ALLIANCE_FRIENDLY)
    const playerTV = SpawnTriggerVolume(centralBuilding, undefined, tvEntityName, TEAM_WILD, undefined, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    const mobAllianceAreaTV = SpawnTriggerVolume(centralBuilding, undefined, "badger:spatial_trigger_mob_alliance_player_cinematic", TEAM_WILD, undefined, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)

    SpawnEntitiesAt(buildingCompleteEG, mobAllianceData.spawnerData.homesteadSpawner, 1, TEAM_BLUE, villageId)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_mobs_on_mob_alliance_tv",
        ownerVillageId: villageId,
        triggerEntity: mobAllianceMobsTV,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_SpatialPartitionExited({
        snippet: "spex_mobs_on_mob_alliance_tv",
        ownerVillageId: villageId,
        triggerEntity: mobAllianceMobsTV,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_on_mob_alliance_tv",
        ownerVillageId: villageId,
        triggerEntity: playerTV,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_SpatialPartitionExited({
        snippet: "spex_player_on_mob_alliance_tv",
        ownerVillageId: villageId,
        triggerEntity: playerTV,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_entered_mob_alliance_area",
        ownerVillageId: villageId,
        triggerEntity: mobAllianceAreaTV,
        payloadString: mobAllianceData.id
    })

    const playerTVDurinAct1B = SpawnTriggerVolume(centralBuilding, undefined, "badger:spatial_trigger_mob_alliance_act_1b", TEAM_WILD, undefined, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_on_mob_alliance_during_act_1b",
        ownerVillageId: villageId,
        triggerEntity: playerTVDurinAct1B,
        payloadString: mobAllianceData.id
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_mobs_during_act1_B_patched",
        ownerVillageId: villageId,
        includeTags: [mobAllianceData.id],
        excludeTags: ["caged_mob", "world_mob", "nbbAlly"],
        payloadString: mobAllianceData.id
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_mobs_during_act1_B_patched",
        ownerVillageId: villageId,
        includeTags: [mobAllianceData.id, "homestead_mob"],
        excludeTags: ["nbbAlly"],
        payloadString: mobAllianceData.id
    })

    const invasionMAVillageCineTV = SpawnTriggerVolume(centralBuilding, undefined, "badger:spatial_trigger_mob_alliance_player_occupation_cinematic", TEAM_WILD, undefined, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_entered_mob_alliance_area_during_invasion",
        ownerVillageId: villageId,
        triggerEntity: invasionMAVillageCineTV,
        payloadString: mobAllianceData.id,
        payloadInt: 0
    })
})

SNIPPET_SpatialPartitionEntered("spe_mobs_on_mob_alliance_tv", (_triggerEntity, intruderEntity, payload) => {
    const mobAllianceData = maVal[payload.string]
    OUTPUT_AddTag(intruderEntity, GetMAMobsTag(mobAllianceData.id))
    SelectMobBehaviourSet(intruderEntity, mobAllianceData.id)
})

SNIPPET_SpatialPartitionExited("spex_mobs_on_mob_alliance_tv", (_triggerEntity, intruderEntity, payload) => {
    const mobAllianceData = maVal[payload.string]
    OUTPUT_RemoveTag(intruderEntity, GetMAMobsTag(mobAllianceData.id))
    SelectMobBehaviourSet(intruderEntity, mobAllianceData.id)
})

SNIPPET_SpatialPartitionEntered("spe_player_on_mob_alliance_tv", (_triggerEntity, intruderEntity, payload) => {
    const mobAllianceData = maVal[payload.string]
    RefreshBehaviourOfAllUncagedMobs(mobAllianceData.id)
    RefreshAllSpawnersConfig(mobAllianceData.id)

    if (QUERY_GetGlobalVariable(mobAllianceData.global.soItBegins) === 1) {
        const player = intruderEntity
        OUTPUT_AddTag(player, GetMAPlayerInAreaTag(mobAllianceData.id))
    }

    //Destroy any remaining piglin closeby if the occupation ended due to act3
    if (QUERY_GetGlobalVariable(mobAllianceData.global.queueMobOccupationDestruction) > 0) {
        _RemoveAnyRemainingCage(mobAllianceData)

        if (QUERY_GetGlobalVariable(mobAllianceData.global.allCagesRemoved) === 0) {
            const villageId = payload.ownerVillageId
            LISTENFOR_LocalTimer({
                snippet: "lt_despawn_mob_cage",
                ownerVillageId: villageId,
                waitTime: 10,
                payloadString: mobAllianceData.id
            })
        }

        const remainingPiglins = QUERY_GetEntitiesWithTags([GetMAPiglinsTag(mobAllianceData.id)])
        if (HasEntities(remainingPiglins)) {
            OUTPUT_DespawnEntities(remainingPiglins)
        }
        OUTPUT_SetGlobalVariable(mobAllianceData.global.queueMobOccupationDestruction, 0)
    }
})

SNIPPET_LocalTimer("lt_despawn_mob_cage", (payload) => {
    const mobAllianceData = maVal[payload.string]
    _RemoveAnyRemainingCage(mobAllianceData)

    if (QUERY_GetGlobalVariable(mobAllianceData.global.allCagesRemoved) === 0) {
        const villageId = payload.ownerVillageId
        LISTENFOR_LocalTimer({
            snippet: "lt_despawn_mob_cage",
            ownerVillageId: villageId,
            waitTime: 10,
            payloadString: mobAllianceData.id
        })
    }
    Once()
})

SNIPPET_SpatialPartitionExited("spex_player_on_mob_alliance_tv", (_triggerEntity, intruderEntity, payload) => {
    const mobAllianceData = maVal[payload.string]
    if (IsOccupationBeatOver(mobAllianceData.id)) {
        Once()
        return
    }
    if (QUERY_GetGlobalVariable(mobAllianceData.global.soItBegins) === 0) {
        return
    }
    const player = intruderEntity
    OUTPUT_RemoveTag(player, GetMAPlayerInAreaTag(mobAllianceData.id))
})

SNIPPET_SpatialPartitionEntered("spe_player_entered_mob_alliance_area", (triggerEntity, intruderEntity, payload) => {
    const mobAllianceData = maVal[payload.string]

    const player = intruderEntity
    const centralStructure = GetMobAllianceCenterBuilding(mobAllianceData.id)

    const villageId = QUERY_GetVillageIDFromEntity(centralStructure)

    if (QUERY_GetGlobalVariable(mobAllianceData.global.soItBegins) === 0) {
        if (IsCurrentAct(ACTS.ACT_1B)) {
            if (DoOnce(mobAllianceData.global.act1bIntroVOPlayed)) {
                PlayPresentationActionToClosePlayers(mobAllianceData.voiceOvers.act1bFirstTime, intruderEntity)
            } else {
                PlayPresentationActionToClosePlayers(mobAllianceData.voiceOvers.act1bMet, intruderEntity)
            }
        } else if (IsCurrentAct(ACTS.ACT_2)) {
            if (DoOnce(mobAllianceData.global.act2PreAttackVOPlayed)) {
                PlayPresentationActionToClosePlayers(mobAllianceData.voiceOvers.ac2PreAttack, intruderEntity)
            }
        } else if (DoOnce(mobAllianceData.global.introCinematicPlayed)) {
            OUTPUT_TriggerCinematic(mobAllianceData.cinematics.introBeforeOccupation, OPER_Append(centralStructure, player))
        }
    }

    if (QUERY_GetGlobalVariable(maVal.queueAllegianceStructureTeachingBit) > 0) {
        OUTPUT_Announce("teach_about_allegiance_structure", [])
        OUTPUT_SetGlobalVariable(maVal.queueAllegianceStructureTeachingBit, 0)
    }

    //Make mob alliance visible in the map, in case players visits the village before act2
    if (IsCurrentAct(ACTS.ACT_1A) || IsCurrentAct(ACTS.ACT_1B)) {
        const mobAllianceVillageEntity = GetVillageEntityFromFaction(mobAllianceData.factionName)
        OUTPUT_MapSetKeyValue(mobAllianceVillageEntity, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    }

    //Audio
    if (IsCurrentAct(ACTS.ACT_2)) {
        if (QUERY_IsVillageOccupied(villageId)) {
            // Do nothing
            // Occupation VO and music is handled in 'invasion_attacks_v2_occupation.js'
        } else if (IsVillageUnderInvasionAttack(villageId)) {
            if (DoOnce(maVal.common.globals.mobAllianceCurrentlyUnderAttackPlayed)) {
                PlayPresentationActionToAll(maVal.common.VO.mobAllianceCurrentlyUnderAttack)
            }
        } else if (IsTargetOfDelayedInvasionAttack(villageId)) {
            if (DoOnce(maVal.common.globals.mobAllianceCurrentlyTargetedPlayed)) {
                PlayPresentationActionToAll(maVal.common.VO.mobAllianceCurrentlyTargeted)
            }
            SetVillageAudioDefault(villageId, "incoming_attack")
        } else {
            if (IsOccupationBeatOver(mobAllianceData.id)) {
                SetVillageAudioDefault(villageId)
            }
        }

        //TODO diptoman.mukherjee - Add in once re-occupation has been implemented.
    }
})

SNIPPET_EntitySpawned("es_mobs_during_act1_B_patched", (entitySpawned, _payload) => {
    if (IsCurrentAct(ACTS.ACT_2) || IsCurrentAct(ACTS.ACT_3A) || IsCurrentAct(ACTS.EPILOGUE)) {
        Once()
        return
    }
    if (IsCurrentAct(ACTS.ACT_1B)) {
        OUTPUT_DespawnEntities(entitySpawned)
    }
})

SNIPPET_SpatialPartitionEntered("spe_player_on_mob_alliance_during_act_1b", (triggerEntity, _intruderEntity, payload) => {
    if (IsCurrentAct(ACTS.ACT_2) || IsCurrentAct(ACTS.ACT_3A) || IsCurrentAct(ACTS.EPILOGUE)) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
        return
    }
    if (IsCurrentAct(ACTS.ACT_1B)) {
        const mobId = payload.string
        const mobs = QUERY_GetEntitiesWithTagFilter([mobId], ["nbbAlly"])
        if (HasEntities(mobs)) {
            OUTPUT_DespawnEntities(mobs)
        }
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
    }
})

SNIPPET_BuildingComplete("bc_mob_alliance_house", (buildingCompleteEG, payload) => {
    const mobAllianceData = maVal[payload.string]
    ManageMobAllianceSpawner(buildingCompleteEG, false, mobAllianceData.id)
})

SNIPPET_GlobalVariableChanged("gvc_mob_alliance_act3_started", (_oldValue, newValue, payload) => {
    if (newValue === 1) {
        Logi("gvc_mob_alliance_act3_started = " + payload.string)
        const mobAllianceData = maVal[payload.string]
        if (QUERY_GetGlobalVariable(mobAllianceData.global.mobAllegianceGainedOnce) === 0) {
            IncrementGlobal(mobAllianceData.global.queueMobOccupationDestruction)
        }

        if (QUERY_GetGlobalVariable(mobAllianceData.global.mobAlliancePiglinInvasionStarted) === 0) {
            // The occupation base was never built so we can jump straight to the unlock logic
            CompleteMobAlliancePiglinInvasion(mobAllianceData.id)
        }

        /*
        if (QUERY_GetGlobalVariable(mobAllianceData.global.mobAllegianceBuildings) === 0) {
            IncrementGlobal(mobAllianceData.global.queueMobAllegianceStructure)
            const randomPlayer = RandomEntity(GetAllPlayers())
            OUTPUT_AddOrRemoveResource(randomPlayer, mobAllianceData.unlocks.playerSpawner, 1, false)
            OUTPUT_AddOrRemoveResource(randomPlayer, mobAllianceData.unlocks.spawner, 1, false)
            IncrementGlobal(mobAllianceData.global.mobAllegianceGainedOnce)

            const villageEntity = GetVillageEntityFromFaction(mobAllianceData.factionName)
            if (!QUERY_HasTags(villageEntity, [TAG_MOB_ALLIANCE_ALLIED])) {
                OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.MOB_ALLEGIANCE, MAP_MOB_ALLEGIANCE.ENABLED)
                OUTPUT_AddTag(villageEntity, TAG_MOB_ALLIANCE_ALLIED)
            }
        }
        */
        Once()
    }
})
