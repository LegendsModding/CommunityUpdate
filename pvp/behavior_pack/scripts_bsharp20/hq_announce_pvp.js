const pvpAnnouncerVal = {
    hqAreaDamageCooldown: 100,
    structureDamageCooldown: 75,
    identicalMessageCooldown: 20,
    startMessage: "start",
    playerBuildingTag: "player_building_pvp",
    playerUnitTag: "player_unit_pvp",

    mapData: {
        gracePeriod: 10,
        underAttackGV: "gv_hq_under_attack"
    },

    // HQ data
    hq: {
        uiCooldown: 5,
        healthbarAlly: "healthbar_left",
        healthbarEnemy: "healthbar_right",
        uiEvent: "taking_damage",
        defaultEmitterState: "HQ_damage_0",
        // NOTE: these threshold values correspond to the UI ones defined in `ObjectiveHealthBar.tsx`
        // If they are being changed, please alert the UI team so that those ones can be updated as well.
        healthRanges: [
            {
                threshold: 0.75,
                emitterState: "HQ_damage_25",
                uiEvent: "taking_damage",
                message: {
                    friendly: "hqHealth_damaged_light_friendly",
                    enemy: "hqHealth_damaged_light_enemy"
                },
                vo: {
                    friendly: "pvp_hq_health_75",
                    enemy: "pvp_enemy_hq_health_75"
                },
                rumblePresEvent: "on_building_hq_damage_25"
            },
            {
                threshold: 0.5,
                emitterState: "HQ_damage_50",
                uiEvent: "health_threshold1",
                message: {
                    friendly: "hqHealth_damaged_medium_friendly",
                    enemy: "hqHealth_damaged_medium_enemy"
                },
                vo: {
                    friendly: "pvp_hq_health_50",
                    enemy: "pvp_enemy_hq_health_50"
                },
                rumblePresEvent: "on_building_hq_damage_50"
            },
            {
                threshold: 0.25,
                emitterState: "HQ_damage_75",
                uiEvent: "health_threshold2",
                message: {
                    friendly: "hqHealth_damaged_heavy_friendly",
                    enemy: "hqHealth_damaged_heavy_enemy"
                },
                vo: {
                    friendly: "pvp_hq_health_25",
                    enemy: "pvp_enemy_hq_health_25"
                },
                rumblePresEvent: "on_building_hq_damage_75"
            },
            {
                threshold: 0.1,
                emitterState: "HQ_damage_75",
                uiEvent: "health_threshold2",
                message: {
                    friendly: "hqHealth_damaged_extraHeavy_friendly",
                    enemy: "hqHealth_damaged_extraHeavy_enemy"
                },
                vo: {
                    friendly: "pvp_hq_health_10",
                    enemy: "pvp_enemy_hq_health_10"
                },
                rumblePresEvent: "on_building_hq_damage_90"
            }
        ],
        damaged: {
            message: {
                friendly: "hqHealth_damaged_any_friendly"
            },
            vo: {
                friendly: "pvp_hq_under_attack_1",
                enemy: "pvp_enemy_hq_under_attack_1"
            }
        }
    },

    // All structures around HQ
    structures: {
        damaged: {
            message: {
                friendly: "structure_damaged_any_friendly",
                enemy: "structure_damaged_any_enemy"
            },
            vo: {
                friendly: "pvp_friendly_structure_attacked_1",
                enemy: "pvp_enemy_structure_attacked_1"
            }
        }
    },

    // Specific structure actions
    structureListeners: [
        {
            tag: "woodgolemspawner",
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_woodGolem",
                    enemy: "spawner_destroyed_enemy_woodGolem"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "stonegolemspawner",
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_stoneGolem",
                    enemy: "spawner_destroyed_enemy_stoneGolem"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "cavgolemspawner",
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_cavGolem",
                    enemy: "spawner_destroyed_enemy_cavGolem"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "creeperspawner",
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_creeper",
                    enemy: "spawner_destroyed_enemy_creeper"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "skeletonspawner",
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_skeleton",
                    enemy: "spawner_destroyed_enemy_skeleton"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "zombiespawner",
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_zombie",
                    enemy: "spawner_destroyed_enemy_zombie"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "increase_lure_cap_pvp", // Increase Rally
            built: {
                message: {
                    friendly: "lureCap_increased_friendly",
                    enemy: "lureCap_increased_enemy"
                },
                sendAnnouncerMessage: "upgrade",
                vo: {
                    friendly: "pvp_friendly_increase_lure_cap_1",
                    enemy: "pvp_enemy_increase_lure_cap_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_friendly_increase_lure_cap_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_friendly_increase_lure_cap_destroyed_1"
                }
            }
        },
        {
            tag: "increase_spawner_cap_pvp", // Increase Pop Cap
            built: {
                message: {
                    friendly: "spawnerCap_increased_friendly",
                    enemy: "spawnerCap_increased_enemy"
                },
                sendAnnouncerMessage: "upgrade",
                vo: {
                    friendly: "pvp_popcap_friendly_1",
                    enemy: "pvp_popcap_enemy_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_popcap_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_popcap_destroyed_1"
                }
            }
        },
        {
            tag: "increase_starting_cap_pvp", // Fate bank upgrade
            built: {
                message: {
                    friendly: "resourceCap_increased_friendly",
                    enemy: "resourceCap_increased_enemy"
                },
                sendAnnouncerMessage: "upgrade",
                vo: {
                    friendly: "pvp_fatebank_friendly_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_fatebank_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_fatebank_destroyed_1"
                }
            }
        },
        {
            tag: "unlock_gather_uncommon_pvp", // Iron upgrade
            built: {
                vo: {
                    friendly: "pvp_unlock_iron_friendly_1",
                    enemy: "pvp_unlock_iron_enemy_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_iron_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_iron_destroyed_1"
                }
            }
        },
        {
            tag: "unlock_gather_redstone_pvp", // Redstone unlock
            built: {
                vo: {
                    friendly: "pvp_unlock_redstone_friendly_1",
                    enemy: "pvp_unlock_redstone_enemy_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_redstone_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_redstone_destroyed_1"
                }
            }
        },
        {
            tag: "unlock_gather_diamond_pvp", // Diamond unlock
            built: {
                vo: {
                    friendly: "pvp_unlock_diamond_friendly_1",
                    enemy: "pvp_unlock_diamond_enemy_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_diamond_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_diamond_destroyed_1"
                }
            }
        },
        {
            tag: "unlock_gather_coal_pvp", // Coal unlock
            built: {
                vo: {
                    friendly: "pvp_unlock_coal_friendly_1",
                    enemy: "pvp_unlock_coal_enemy_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_coal_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_coal_destroyed_1"
                }
            }
        },
        {
            tag: "pvp_pylon", // Pylon
            built: {
                vo: {
                    enemy: "pvp_pylon_enemy_built_1",
                    friendly: "pvp_pylon_friendly_built_1"
                }
            }
        },
        {
            tag: "pvp_lapis_flag", // Lapis flag
            built: {
                vo: {
                    friendly: "pvp_friendly_village_allegiance_built_1",
                    enemy: "pvp_enemy_village_allegiance_built_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_village_allegiance_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_village_allegiance_destroyed_1",
                    enemy: "pvp_village_allegiance_destroyed_enemy_1"
                }
            }
        },
        {
            tag: "redStoneLauncher", // RSL
            built: {
                vo: {
                    friendly: "pvp_friendly_redstone_launcher_1",
                    enemy: "pvp_enemy_redstone_launcher_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_redstone_launcher_damaged"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_redstone_launcher_destroyed"
                }
            }
        },
        {
            tag: "vindicatorspawner", // Warrior hut
            built: {
                vo: {
                    friendly: "pvp_vindicator_hut_friendly_built_1",
                    enemy: "pvp_vindicator_enemy"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_vindicator_damaged"
                }
            },
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_warrior_hut",
                    enemy: "spawner_destroyed_enemy_warrior_hut"
                },
                vo: {
                    friendly: "pvp_vindicator_destroyed"
                }
            }
        },
        {
            tag: "increase_allay_cap_gather_build_pvp", // Increase Build + Gather Allay PvP
            built: {
                vo: {
                    friendly: "pvp_friendly_increase_all_allays_built_1",
                    enemy: "pvp_enemy_increase_all_allays_built_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_increase_all_allays_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_increase_all_allays_destroyed_1"
                }
            }
        },
        {
            tag: "poi_tower_01", // Blast Tower
            built: {
                vo: {
                    friendly: "pvp_friendly_blast_tower_1",
                    enemy: "pvp_enemy_blast_tower_1"
                }
            },
            destroyed: {
                message: {
                    friendly: "pvp_poi_tower_01_friendly_destroyed",
                    enemy: "pvp_poi_tower_01_enemy_destroyed"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "poi_tower_02", // Frost Tower
            built: {
                vo: {
                    friendly: "pvp_friendly_frost_tower_1",
                    enemy: "pvp_enemy_frost_tower_1"
                }
            },
            destroyed: {
                message: {
                    friendly: "pvp_poi_tower_02_friendly_destroyed",
                    enemy: "pvp_poi_tower_02_enemy_destroyed"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "poi_tower_04", // Stun Tower
            built: {
                vo: {
                    friendly: "pvp_friendly_stun_tower_1",
                    enemy: "pvp_enemy_stun_tower_1"
                }
            },
            destroyed: {
                message: {
                    friendly: "pvp_poi_tower_04_friendly_destroyed",
                    enemy: "pvp_poi_tower_04_enemy_destroyed"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "firstoakspawner", // First of Oak
            built: {
                vo: {
                    friendly: "pvp_friendly_ranged_golem_1",
                    enemy: "pvp_enemy_ranged_golem_1"
                }
            },
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_first_of_oak",
                    enemy: "spawner_destroyed_enemy_first_of_oak"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "firststonespawner", // First of Stone
            built: {
                vo: {
                    friendly: "pvp_friendly_giant_golem_1",
                    enemy: "pvp_enemy_giant_golem_1"
                }
            },
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_first_of_stone",
                    enemy: "spawner_destroyed_enemy_first_of_stone"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "firstdioritespawner", // First of Diorite
            built: {
                vo: {
                    friendly: "pvp_friendly_carrier_golem_1",
                    enemy: "pvp_enemy_carrier_golem_1"
                }
            },
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_first_of_diorite",
                    enemy: "spawner_destroyed_enemy_first_of_diorite"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "firstbrickspawner", // First of Brick
            built: {
                vo: {
                    friendly: "pvp_friendly_shield_golem_1",
                    enemy: "pvp_enemy_shield_golem_1"
                }
            },
            destroyed: {
                message: {
                    friendly: "spawner_destroyed_friendly_first_of_brick",
                    enemy: "spawner_destroyed_enemy_first_of_brick"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "unlock_poi_golem", // Unlock Firsts
            built: {
                vo: {
                    friendly: "pvp_unlock_firsts_friendly_1",
                    enemy: "pvp_unlock_firsts_enemy_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_unlock_firsts_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_unlock_firsts_destroyed_1"
                }
            }
        },
        {
            tag: "unlock_poi_tower", // Unlock Towers
            built: {
                vo: {
                    friendly: "pvp_unlock_towers_friendly_1",
                    enemy: "pvp_unlock_towers_enemy_1"
                }
            },
            damaged: {
                vo: {
                    friendly: "pvp_unlock_towers_attacked_1"
                }
            },
            destroyed: {
                vo: {
                    friendly: "pvp_unlock_towers_destroyed_1"
                }
            }
        },
        {
            tag: "cauldron",
            built: {
                vo: {
                    friendly: "pvp_friendly_cauldron_built_1",
                    enemy: "pvp_enemy_cauldron_built_1"
                }
            }
        }
    ],

    unitListeners: [
        {
            tag: "fallen_warrior",
            destroyed: {
                message: {
                    friendly: "pvp_first_of_stone_friendly_destroyed",
                    enemy: "pvp_first_of_stone_enemy_destroyed"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "sniper",
            destroyed: {
                message: {
                    friendly: "pvp_first_of_oak_friendly_destroyed",
                    enemy: "pvp_first_of_oak_enemy_destroyed"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "shield_golem",
            destroyed: {
                message: {
                    friendly: "pvp_first_of_brick_friendly_destroyed",
                    enemy: "pvp_first_of_brick_enemy_destroyed"
                },
                sendAnnouncerMessage: "destroyed"
            }
        },
        {
            tag: "carrier_golem",
            destroyed: {
                message: {
                    friendly: "pvp_first_of_diorite_friendly_destroyed",
                    enemy: "pvp_first_of_diorite_enemy_destroyed"
                },
                sendAnnouncerMessage: "destroyed"
            }
        }
    ]
}
const pvpOnboardingYourHqVal = {
    consts: {
        timeBetweenAnnouncements: 30,
        timeBetweenAnnouncementsForPracticeMode: 20,
        res0: "wood",
        neededRes0Value: 375,
        res1: "stone",
        neededRes1Value: 250,
        res2: "emerald",
        neededRes2Value: 1,
        res3: "xp_common",
        neededRes3Value: 1,

        globlaNumberOfPylons: "your_hq_number_of_pylons",
        globalNumberOfLapisFlags: "your_hq_number_of_lapis_flags",
        globalCanTriggerAnnouncementKey: "your_hq_can_trigger_announcement_pvp",
        globalHasGatheredEnoughResAtLeastOnceKey: "your_hq_gathered_enough_res_at_least_once_pvp",
        globalMessageTrackerKey: "your_hq_message_tracker_pvp",
        globalUpgradesTrackerKey: "your_hq_upgrades_tracker_pvp",
        globalHasPlayedFountainNeedRepairs: "your_hq_needs_repair_pvp",
        globalHasPlayedUnderAttack: "your_hq_under_attack_pvp",
        globlaHasPlayedFountainUnderAttack: "your_hq_under_attack_pvp",
        globalFountainUnderAttackIsActive: "your_hq_under_attack_active_pvp",
        numberOfUpgradesBeforeDisablingMessages: 3,

        messageTrackerValues: {
            intro: 0,
            resForPylon: 1,
            buildPylon: 2,
            upgradesAfterPylon: 3,
            needRepairs: 4,
            approachEnemy: 5,
            approachEnemyPractice: 6,
            buildLapisFlag: 7
        }
    },
    messages: {
        resForPylon: "pvp_onb_gather_res_for_pylon",
        buildPylon: "pvp_onb_build_pylon",
        upgradesAfterPylon: "pvp_onb_upgrade_after_pylon",
        needRepairs: "pvp_onb_hq_damaged",
        underAttack: "pvp_onb_hq_under_attack",
        approachEnemy: "pvp_onb_enemy_approach_regular",
        approachEnemyPractice: "pvp_onb_enemy_approach_practice",
        buildLapisFlag: "pvp_onb_build_lapis_flag"
    }
}

//============ HQ ONBOARDING ============

const _AnnounceOnboardingMessage = (message, player, team) => {
    OUTPUT_AnnouncePlayer(message, [], player)
    const delay = QUERY_GetGameMode() === "conquest_practice" ? pvpOnboardingYourHqVal.consts.timeBetweenAnnouncementsForPracticeMode : pvpOnboardingYourHqVal.consts.timeBetweenAnnouncements
    ONBPreventAnnouncementsForAWhile(team, pvpOnboardingYourHqVal.consts.globalCanTriggerAnnouncementKey, delay)
}

const _ONBPlayAnnouncementForHQ = (player, team) => {
    const messageTracker = _ONBUpdateMessageTracker(GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalMessageTrackerKey), team)
    //Only go in if we don't have enough upgrades OR if the player is to be told to build a pylon. This is to cover for the situation where the player deconstructs their pylon after building the upgrades
    // eslint-disable-next-line prettier/prettier
    Logi("### message Tracker ### " + messageTracker)
    if (messageTracker > -1) {
        Logi("!!!! num of upgrades !!!! " + GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalUpgradesTrackerKey))
        if (GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalUpgradesTrackerKey) < pvpOnboardingYourHqVal.consts.numberOfUpgradesBeforeDisablingMessages || messageTracker === pvpOnboardingYourHqVal.consts.messageTrackerValues.buildLapisFlag || messageTracker === pvpOnboardingYourHqVal.consts.messageTrackerValues.buildPylon || messageTracker === pvpOnboardingYourHqVal.consts.messageTrackerValues.needRepairs || messageTracker === pvpOnboardingYourHqVal.consts.messageTrackerValues.approachEnemy || messageTracker === pvpOnboardingYourHqVal.consts.messageTrackerValues.approachEnemyPractice) {
            let message = ""
            switch (messageTracker) {
                case pvpOnboardingYourHqVal.consts.messageTrackerValues.resForPylon:
                    //Not enough resources to build Pylon
                    message = pvpOnboardingYourHqVal.messages.resForPylon
                    break
                case pvpOnboardingYourHqVal.consts.messageTrackerValues.buildPylon:
                    //Enough resources but haven't built Pylon yet
                    message = pvpOnboardingYourHqVal.messages.buildPylon
                    break
                case pvpOnboardingYourHqVal.consts.messageTrackerValues.upgradesAfterPylon:
                    //Have built a Pylon
                    message = pvpOnboardingYourHqVal.messages.upgradesAfterPylon
                    break
                case pvpOnboardingYourHqVal.consts.messageTrackerValues.needRepairs:
                    //HQ in need of repairs
                    message = pvpOnboardingYourHqVal.messages.needRepairs
                    break
                case pvpOnboardingYourHqVal.consts.messageTrackerValues.approachEnemy:
                    //Approach the enemy's base
                    message = pvpOnboardingYourHqVal.messages.approachEnemy
                    break
                case pvpOnboardingYourHqVal.consts.messageTrackerValues.approachEnemyPractice:
                    //Approach the enemy's base in 1v0
                    message = pvpOnboardingYourHqVal.messages.approachEnemyPractice
                    break
                case pvpOnboardingYourHqVal.consts.messageTrackerValues.buildLapisFlag:
                    //Enough resources but haven't built Lapis Flag yet
                    message = pvpOnboardingYourHqVal.messages.buildLapisFlag
                    break
            }
            if (message !== "") {
                _AnnounceOnboardingMessage(message, player, team)
            }
        }
    }
}

const _ONBUpdateMessageTracker = (value, team) => {
    if (value === pvpOnboardingYourHqVal.consts.messageTrackerValues.needRepairs) {
        return pvpOnboardingYourHqVal.consts.messageTrackerValues.needRepairs
    }
    if (value === pvpOnboardingYourHqVal.consts.messageTrackerValues.approachEnemy) {
        return pvpOnboardingYourHqVal.consts.messageTrackerValues.approachEnemy
    }
    if (value === pvpOnboardingYourHqVal.consts.messageTrackerValues.approachEnemyPractice) {
        return pvpOnboardingYourHqVal.consts.messageTrackerValues.approachEnemyPractice
    }
    if (GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalHasGatheredEnoughResAtLeastOnceKey) === 0) {
        const res0 = QUERY_GetTeamResource(team, pvpOnboardingYourHqVal.consts.res0)
        const res1 = QUERY_GetTeamResource(team, pvpOnboardingYourHqVal.consts.res1)

        if (res0 >= pvpOnboardingYourHqVal.consts.neededRes0Value && res1 >= pvpOnboardingYourHqVal.consts.neededRes1Value) {
            SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalHasGatheredEnoughResAtLeastOnceKey, 1)
            return pvpOnboardingYourHqVal.consts.messageTrackerValues.buildPylon
        } else {
            return pvpOnboardingYourHqVal.consts.messageTrackerValues.resForPylon
        }
    }
    if (GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalNumberOfLapisFlags) <= 0) {
        const res2 = QUERY_GetTeamResource(team, pvpOnboardingYourHqVal.consts.res2)
        const res3 = QUERY_GetTeamResource(team, pvpOnboardingYourHqVal.consts.res3)

        if (res2 >= pvpOnboardingYourHqVal.consts.neededRes2Value && res3 >= pvpOnboardingYourHqVal.consts.neededRes3Value) {
            return pvpOnboardingYourHqVal.consts.messageTrackerValues.buildLapisFlag
        }
    }
    if (value === pvpOnboardingYourHqVal.consts.messageTrackerValues.upgradesAfterPylon) {
        return pvpOnboardingYourHqVal.consts.messageTrackerValues.upgradesAfterPylon
    }
    if (GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globlaNumberOfPylons) <= 0) {
        return pvpOnboardingYourHqVal.consts.messageTrackerValues.buildPylon
    }

    return -1
}

//============ END HQ ONBOARDING ============

const _structureDamagedExcludeTags = pvpAnnouncerVal.structureListeners
    .filter((listenerData) => listenerData.damaged && listenerData.damaged.vo)
    .map((listenerData) => {
        if (listenerData.damaged && listenerData.damaged.vo) {
            return listenerData.tag
        }
    })

const _StructureDamagedResponse = (snippetName, villageId, inVillage, playerBuilt, structureTag, structureIndex, excludeTags, debounceTimer) => {
    const tags = [structureTag]
    if (playerBuilt) {
        tags.push(pvpAnnouncerVal.playerBuildingTag)
    }

    if (inVillage) {
        LISTENFOR_HealthChanged({
            snippet: snippetName,
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: tags,
            excludeTags: excludeTags,
            direction: HEALTH_DIRECTION.DAMAGE,
            payloadFloat: debounceTimer,
            payloadInt: structureIndex,
            payloadString: structureTag
        })
    } else {
        LISTENFOR_HealthChanged({
            snippet: snippetName,
            ownerVillageId: villageId,
            includeTags: tags,
            excludeTags: excludeTags,
            direction: HEALTH_DIRECTION.DAMAGE,
            payloadFloat: debounceTimer,
            payloadInt: structureIndex,
            payloadString: structureTag
        })
    }
}

const _StructureDamagedResponseHandler = (snippetName, inVillage, playerBuilt, excludeTags, callback) => {
    const debounceTimerName = snippetName + "_timer"
    SNIPPET_HealthChanged(snippetName, (buildingEntity, _currentHealth, _previousHealth, payload) => {
        const debounceTimer = payload.float

        LISTENFOR_LocalTimer({
            snippet: debounceTimerName,
            ownerVillageId: payload.ownerVillageId ? payload.ownerVillageId : OWNER_VILLAGE_OPT_OUT,
            waitTime: debounceTimer,
            payloadFloat: payload.float,
            payloadInt: payload.int,
            payloadString: payload.string
        })
        callback(buildingEntity, payload)
        Once()
    })

    SNIPPET_LocalTimer(debounceTimerName, (payload) => {
        _StructureDamagedResponse(snippetName, payload.ownerVillageId ? payload.ownerVillageId : OWNER_VILLAGE_OPT_OUT, inVillage, playerBuilt, payload.string, payload.int, excludeTags, payload.float)
    })
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchEndHQsLastStanding, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_VillageGenerated({
            snippet: "vg_hq_announce",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: PVP_HEADQUARTERS_RED
        })
        LISTENFOR_VillageGenerated({
            snippet: "vg_hq_announce",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: PVP_HEADQUARTERS_BLUE
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_tag_player_buildings_pvp",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            hasCreator: true
        })

        LISTENFOR_PlayersReady({
            snippet: "pr_pvp_match_started_announce",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        for (let index = 0; index < pvpAnnouncerVal.structureListeners.length; index++) {
            const listenerData = pvpAnnouncerVal.structureListeners[index]

            // Set up announcements for when specific key structures are built.
            if (listenerData.built !== undefined) {
                LISTENFOR_BuildingComplete({
                    snippet: "bc_pvp_announce",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    includeTags: [listenerData.tag],
                    payloadInt: index
                })
            }

            // Set up announcements for when specific key structures get attacked.
            if (listenerData.damaged !== undefined) {
                _StructureDamagedResponse("hc_pvp_announce", OWNER_VILLAGE_OPT_OUT, false, true, listenerData.tag, index, [], pvpAnnouncerVal.structureDamageCooldown)
            }

            // Set up announcements for when specific key structures are destroyed.
            if (listenerData.destroyed !== undefined) {
                LISTENFOR_NonPopCappedEntityDestroyed({
                    snippet: "ed_pvp_announce",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    includeTags: [listenerData.tag, pvpAnnouncerVal.playerBuildingTag],
                    payloadInt: index,
                    despawned: false
                })
            }
        }

        for (let index = 0; index < pvpAnnouncerVal.unitListeners.length; index++) {
            const listenerData = pvpAnnouncerVal.unitListeners[index]

            // Set up announcements for when specific key units are destroyed.
            if (listenerData.destroyed !== undefined) {
                LISTENFOR_PopCappedEntityDestroyed({
                    snippet: "ed_unit_pvp_announce",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    includeTags: [listenerData.tag, pvpAnnouncerVal.playerUnitTag],
                    payloadInt: index,
                    despawned: false
                })
            }
        }
    }
})

SNIPPET_BuildingComplete("bc_tag_player_buildings_pvp", (buildingEntity, _payload) => {
    if (HasMatchEnded()) {
        Once()
        return
    }

    OUTPUT_AddTag(buildingEntity, pvpAnnouncerVal.playerBuildingTag)
})

SNIPPET_PlayersReady("pr_pvp_match_started_announce", (_payload) => {
    if (HasMatchEnded()) {
        Once()
        return
    }

    OUTPUT_SendAnnouncerMessage(TEAM_BLUE, "start", "pvp")
    OUTPUT_SendAnnouncerMessage(TEAM_RED, "start", "pvp")
})

SNIPPET_VillageGenerated("vg_hq_announce", (villageId, _payload) => {
    // Set up announcement for when any structure in the HQ village gets attacked.
    if (HasMatchEnded()) {
        Once()
        return
    }

    _StructureDamagedResponse("hc_pvp_hq_structures_announce", villageId, true, true, TAG_BUILDABLE, 0, _structureDamagedExcludeTags, pvpAnnouncerVal.hqAreaDamageCooldown)

    LISTENFOR_BuildingComplete({
        snippet: "bc_pvp_hq_announce",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: [TAG_PVP_HQ]
    })

    LISTENFOR_BuildingStart({
        snippet: "bs_pvp_pylon",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["pvp_pylon"]
    })

    LISTENFOR_BuildingStart({
        snippet: "bs_pvp_lapis_flag",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["pvp_lapis_flag"]
    })

    LISTENFOR_BuildingStart({
        snippet: "bs_pvp_upgrade",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["player_upgrade"]
    })

    LISTENFOR_DeconstructionStarted({
        snippet: "ds_pvp_pylon",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["pvp_pylon"]
    })

    LISTENFOR_DeconstructionStarted({
        snippet: "ds_pvp_lapis_flag",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["pvp_lapis_flag"]
    })
})

SNIPPET_BuildingStart("bs_pvp_pylon", (entity, _payload) => {
    Logi("@@@ bs_pvp_pylon @@@")
    const team = QUERY_GetTeamName(entity)
    SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalMessageTrackerKey, pvpOnboardingYourHqVal.consts.messageTrackerValues.upgradesAfterPylon)
    SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globlaNumberOfPylons, GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globlaNumberOfPylons) + 1)
})

SNIPPET_BuildingStart("bs_pvp_lapis_flag", (entity, _payload) => {
    Logi("@@@ bs_pvp_lapis_flag @@@")
    const team = QUERY_GetTeamName(entity)
    SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalNumberOfLapisFlags, GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalNumberOfLapisFlags) + 1)
})

SNIPPET_BuildingStart("bs_pvp_upgrade", (entity, _payload) => {
    Logi("@@@ bs_pvp_upgrade @@@")
    const team = QUERY_GetTeamName(entity)
    SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalUpgradesTrackerKey, GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalUpgradesTrackerKey) + 1)
})

SNIPPET_DeconstructionStarted("ds_pvp_pylon", (deconstructedEntity) => {
    //Make sure the player doesn't have other pylons before updating the messages
    const team = QUERY_GetTeamName(deconstructedEntity)
    const villageId = QUERY_GetVillageIDFromEntity(deconstructedEntity)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const pylons = FILTER_ByTagFilter(villageEntities, ["pvp_pylon"], [])
    const numOfPylons = QUERY_GetEntitiesCount(pylons) - 1
    Logi("~~~~ ds_pvp_pylon ~~~~ " + numOfPylons)
    SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globlaNumberOfPylons, numOfPylons)
    if (numOfPylons < 1) {
        SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalMessageTrackerKey, pvpOnboardingYourHqVal.consts.messageTrackerValues.buildPylon)
    }
})

SNIPPET_DeconstructionStarted("ds_pvp_lapis_flag", (deconstructedEntity) => {
    //Track how many Lapis flags exist to see if the message needs to be sent again
    const team = QUERY_GetTeamName(deconstructedEntity)
    const villageId = QUERY_GetVillageIDFromEntity(deconstructedEntity)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const flags = FILTER_ByTagFilter(villageEntities, ["pvp_lapis_flag"], [])
    const numOfFlags = QUERY_GetEntitiesCount(flags) - 1
    Logi("~~~~ ds_pvp_lapis_flag ~~~~ " + numOfFlags)
    SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalNumberOfLapisFlags, numOfFlags)
    if (numOfFlags < 1) {
        SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalMessageTrackerKey, pvpOnboardingYourHqVal.consts.messageTrackerValues.buildLapisFlag)
    }
})

SNIPPET_BuildingComplete("bc_pvp_hq_announce", (hqEntity, payload) => {
    const villageId = payload.ownerVillageId
    const team = QUERY_GetTeamName(hqEntity)

    OUTPUT_SetDeferredDeath(hqEntity, true)
    OUTPUT_SetEmitterState(hqEntity, pvpAnnouncerVal.hq.defaultEmitterState)

    if (HasMatchEnded()) {
        Once()
        return
    }
    const delay = QUERY_GetGameMode() === "conquest_practice" ? pvpOnboardingYourHqVal.consts.timeBetweenAnnouncementsForPracticeMode : pvpOnboardingYourHqVal.consts.timeBetweenAnnouncements
    ONBPreventAnnouncementsForAWhile(TEAM_BLUE, pvpOnboardingYourHqVal.consts.globalCanTriggerAnnouncementKey, delay)
    ONBPreventAnnouncementsForAWhile(TEAM_RED, pvpOnboardingYourHqVal.consts.globalCanTriggerAnnouncementKey, delay)
    if (team === TEAM_BLUE) {
        AddTriggerVolumeToBuildable(hqEntity, GENERIC_PVP_CAPTURABLE_TV_ID, "spe_pvp_player_entered_hq_blue_onb", undefined, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    } else {
        AddTriggerVolumeToBuildable(hqEntity, GENERIC_PVP_CAPTURABLE_TV_ID, "spe_pvp_player_entered_hq_red_onb", undefined, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    }
    // Set up announcements for certain HQ health thresholds
    for (let index = 0; index < pvpAnnouncerVal.hq.healthRanges.length; index++) {
        const healthRange = pvpAnnouncerVal.hq.healthRanges[index]
        LISTENFOR_HealthChanged({
            snippet: "hc_pvp_hq_threshold_damage",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: [TAG_PVP_HQ],
            direction: HEALTH_DIRECTION.DAMAGE,
            normalizedThreshold: healthRange.threshold,
            triggerMode: HEALTH_TRIGGER_MODE.CROSS,
            entities: hqEntity,
            payloadInt: index
        })
        LISTENFOR_HealthChanged({
            snippet: "hc_pvp_hq_threshold_heal",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: [TAG_PVP_HQ],
            direction: HEALTH_DIRECTION.HEAL,
            normalizedThreshold: healthRange.threshold,
            triggerMode: HEALTH_TRIGGER_MODE.CROSS,
            entities: hqEntity,
            payloadInt: index
        })
    }

    // Setup general HQ damage announcements
    LISTENFOR_HealthChanged({
        snippet: "hc_pvp_hq_announce",
        ownerVillageId: villageId,
        villageId: villageId,
        direction: HEALTH_DIRECTION.DAMAGE,
        entities: hqEntity
    })
    LISTENFOR_Timer({
        snippet: "t_pvp_hq_reset_under_attack_key",
        ownerVillageId: villageId,
        timerName: GetVillageVariableKey(villageId, pvpAnnouncerVal.mapData.underAttackGV),
        threshold: 0
    })
})

SNIPPET_SpatialPartitionEntered("spe_pvp_player_entered_hq_blue_onb", (triggerEntity, intruderEntity, _payload) => {
    const intruderTeam = QUERY_GetTeamName(intruderEntity)
    Logi("@@@@ intruder team @@@@ " + intruderTeam)
    if (intruderTeam === TEAM_BLUE) {
        if (GetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalFountainUnderAttackIsActive) > 0) {
            SetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalFountainUnderAttackIsActive, 0)
            OUTPUT_AnnounceInterruptPlayer(6, intruderEntity)
            return
        }
        if (GetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalHasPlayedFountainNeedRepairs) < 2) {
            const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
            const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
            const hq = FILTER_ByTagFilter(villageEntities, [TAG_PVP_HQ], [])
            if (HasEntities(hq)) {
                Logi("@@@ has entities hq @@@ " + QUERY_MaxHealth(hq) + " @@@ " + QUERY_CurrentHealth(hq))
                if (QUERY_MaxHealth(hq) - QUERY_CurrentHealth(hq) >= 100) {
                    const message = pvpOnboardingYourHqVal.messages.needRepairs
                    if (ONBCanPlayAnnouncement(intruderTeam, pvpOnboardingYourHqVal.consts.globalCanTriggerAnnouncementKey, intruderEntity)) {
                        _AnnounceOnboardingMessage(message, intruderEntity, intruderTeam)
                    }
                    if (GetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalHasPlayedFountainNeedRepairs) === 0) {
                        SetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalHasPlayedFountainNeedRepairs, 1)
                        LISTENFOR_HealthChanged({
                            snippet: "hc_pvp_hq_healed",
                            ownerVillageId: villageId,
                            villageId: villageId,
                            includeTags: [TAG_PVP_HQ],
                            direction: HEALTH_DIRECTION.HEAL,
                            normalizedThreshold: 0.92,
                            triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                            entities: hq
                        })
                    }

                    return
                }
            }
        }
        if (ONBCanPlayAnnouncement(intruderTeam, pvpOnboardingYourHqVal.consts.globalCanTriggerAnnouncementKey, intruderEntity)) {
            _ONBPlayAnnouncementForHQ(intruderEntity, intruderTeam)
        }
    } else if (intruderTeam === TEAM_RED) {
        const message = QUERY_GetGameMode() === "conquest_practice" ? pvpOnboardingYourHqVal.messages.approachEnemyPractice : pvpOnboardingYourHqVal.messages.approachEnemy
        if (ONBCanPlayAnnouncement(intruderTeam, pvpOnboardingYourHqVal.consts.globalCanTriggerAnnouncementKey, intruderEntity)) {
            _AnnounceOnboardingMessage(message, intruderEntity, intruderTeam)
        }
    }
})

SNIPPET_SpatialPartitionEntered("spe_pvp_player_entered_hq_red_onb", (triggerEntity, intruderEntity, _payload) => {
    const intruderTeam = QUERY_GetTeamName(intruderEntity)
    Logi("@@@@ QUERY_GetUserMatchesPlayed(intruderEntity) @@@@ " + QUERY_GetUserMatchesPlayed(intruderEntity))
    if (intruderTeam === TEAM_RED) {
        if (GetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalFountainUnderAttackIsActive) > 0) {
            SetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalFountainUnderAttackIsActive, 0)
            OUTPUT_AnnounceInterruptPlayer(6, intruderEntity)
            return
        }
        if (GetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalHasPlayedFountainNeedRepairs) < 2) {
            const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
            const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
            const hq = FILTER_ByTagFilter(villageEntities, [TAG_PVP_HQ], [])
            if (HasEntities(hq)) {
                Logi("@@@ has entities hq @@@ " + QUERY_MaxHealth(hq) + " @@@ " + QUERY_CurrentHealth(hq))
                if (QUERY_MaxHealth(hq) - QUERY_CurrentHealth(hq) >= 100) {
                    const message = pvpOnboardingYourHqVal.messages.needRepairs
                    if (ONBCanPlayAnnouncement(intruderTeam, pvpOnboardingYourHqVal.consts.globalCanTriggerAnnouncementKey, intruderEntity)) {
                        _AnnounceOnboardingMessage(message, intruderEntity, intruderTeam)
                    }
                    if (GetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalHasPlayedFountainNeedRepairs) === 0) {
                        SetTeamVariable(intruderTeam, pvpOnboardingYourHqVal.consts.globalHasPlayedFountainNeedRepairs, 1)
                        LISTENFOR_HealthChanged({
                            snippet: "hc_pvp_hq_healed",
                            ownerVillageId: villageId,
                            villageId: villageId,
                            includeTags: [TAG_PVP_HQ],
                            direction: HEALTH_DIRECTION.HEAL,
                            normalizedThreshold: 0.92,
                            triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                            entities: hq
                        })
                    }

                    return
                }
            }
        }
        if (ONBCanPlayAnnouncement(intruderTeam, pvpOnboardingYourHqVal.consts.globalCanTriggerAnnouncementKey, intruderEntity)) {
            _ONBPlayAnnouncementForHQ(intruderEntity, intruderTeam)
        }
    } else if (intruderTeam === TEAM_BLUE) {
        const message = QUERY_GetGameMode() === "conquest_practice" ? pvpOnboardingYourHqVal.messages.approachEnemyPractice : pvpOnboardingYourHqVal.messages.approachEnemy
        if (ONBCanPlayAnnouncement(intruderTeam, pvpOnboardingYourHqVal.consts.globalCanTriggerAnnouncementKey, intruderEntity)) {
            _AnnounceOnboardingMessage(message, intruderEntity, intruderTeam)
        }
    }
})

SNIPPET_HealthChanged("hc_pvp_hq_healed", (hqEntity, _currentHealth, _previousHealth, _payload) => {
    if (HasMatchEnded()) {
        Once()
        return
    }

    const team = QUERY_GetTeamName(hqEntity)
    SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalHasPlayedFountainNeedRepairs, 2)
    Once()
})

const _announce = (announcements, friendlyTeam, enemyTeam, tag) => {
    if (announcements) {
        if (announcements.sendAnnouncerMessage) {
            OUTPUT_SendAnnouncerMessage(friendlyTeam, announcements.sendAnnouncerMessage, tag)
        }

        const messageData = announcements.message
        if (messageData) {
            if (messageData.friendly) {
                OUTPUT_AnnounceTeam(messageData.friendly, [], friendlyTeam)
            }
            if (messageData.enemy) {
                OUTPUT_AnnounceTeam(messageData.enemy, [], enemyTeam)
            }
        }

        const voData = announcements.vo
        if (voData) {
            if (DoIfNotOnCooldown(pvpAnnouncerVal.identicalMessageCooldown, "gv_pvp_msg_cd_" + voData.friendly ? voData.friendly : voData.enemy)) {
                if (voData.friendly) {
                    PlayPresentationActionToTeam(voData.friendly, friendlyTeam)
                }
                if (voData.enemy) {
                    PlayPresentationActionToTeam(voData.enemy, enemyTeam)
                }
            }
        }
    }
}

const _announceHandler = (buildingEntity, announcements, tag) => {
    if (HasMatchEnded()) {
        Once()
        return
    }
    if (announcements) {
        const friendlyTeam = QUERY_GetTeamName(buildingEntity)
        const enemyTeam = GetOppositeTeam(friendlyTeam)
        _announce(announcements, friendlyTeam, enemyTeam, tag)
    }
}

// Handle announcements for when specific key structures are built.
SNIPPET_BuildingComplete("bc_pvp_announce", (buildingEntity, payload) => {
    const listenerData = pvpAnnouncerVal.structureListeners[payload.int]
    _announceHandler(buildingEntity, listenerData.built, listenerData.tag)
})

// Handle announcements for when specific key structures get attacked.
_StructureDamagedResponseHandler("hc_pvp_announce", false, true, [], (buildingEntity, payload) => {
    if (QUERY_GetGlobalVariable("gv_hq_structure_vo_cd")) {
        return
    }

    OUTPUT_SetGlobalVariable("gv_hq_structure_vo_cd", 1)

    LISTENFOR_LocalTimer({
        snippet: "lt_hq_structure_dmg_cooldown",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 5
    })

    const listenerData = pvpAnnouncerVal.structureListeners[payload.int]
    _announceHandler(buildingEntity, listenerData.damaged, listenerData.tag)
})

// Handle announcements for when specific key structures are destroyed.
SNIPPET_NonPopCappedEntityDestroyed("ed_pvp_announce", (buildingEntity, payload) => {
    const listenerData = pvpAnnouncerVal.structureListeners[payload.int]
    _announceHandler(buildingEntity, listenerData.destroyed, listenerData.tag)
})

// Handle announcements for when specific key units are destroyed.
SNIPPET_PopCappedEntityDestroyed("ed_unit_pvp_announce", (unitEntity, payload) => {
    const listenerData = pvpAnnouncerVal.unitListeners[payload.int]
    _announceHandler(unitEntity, listenerData.destroyed, listenerData.tag)
})

// Handle announcement for when any structure in the HQ village gets attacked.
_StructureDamagedResponseHandler("hc_pvp_hq_structures_announce", true, true, _structureDamagedExcludeTags, (buildingEntity, _payload) => {
    const listenerData = pvpAnnouncerVal.structures

    if (QUERY_GetGlobalVariable("gv_hq_structure_vo_cd")) {
        return
    }

    OUTPUT_SetGlobalVariable("gv_hq_structure_vo_cd", 1)

    LISTENFOR_LocalTimer({
        snippet: "lt_hq_structure_dmg_cooldown",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 5
    })
    _announceHandler(buildingEntity, listenerData.damaged, listenerData.tag)
})

SNIPPET_LocalTimer("lt_hq_structure_dmg_cooldown", () => {
    OUTPUT_SetGlobalVariable("gv_hq_structure_vo_cd", 0)
})

// Handle announcements for certain HQ health thresholds
SNIPPET_HealthChanged("hc_pvp_hq_threshold_damage", (hqEntity, _currentHealth, _previousHealth, payload) => {
    if (HasMatchEnded()) {
        Once()
        return
    }

    if (QUERY_GetGlobalVariable("gv_hq_structure_vo_cd")) {
        return
    }

    OUTPUT_SetGlobalVariable("gv_hq_structure_vo_cd", 1)

    LISTENFOR_LocalTimer({
        snippet: "lt_hq_structure_dmg_cooldown",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 5
    })

    const healthRangeIndex = payload.int
    const listenerData = pvpAnnouncerVal.hq.healthRanges[healthRangeIndex]
    _announceHandler(hqEntity, listenerData, TAG_PVP_HQ)

    const team = QUERY_GetTeamName(hqEntity)
    PlayUIActionToTeam(listenerData.uiEvent + "@" + pvpAnnouncerVal.hq.healthbarAlly, team)
    PlayUIActionToTeam(listenerData.uiEvent + "@" + pvpAnnouncerVal.hq.healthbarEnemy, GetOppositeTeam(team))
    OUTPUT_SetEmitterState(hqEntity, listenerData.emitterState)
    OUTPUT_TriggerPresentationEventForTeam(hqEntity, listenerData.rumblePresEvent, team)
})

// Handle emitter state for when an HQ gets healed past a threshold
SNIPPET_HealthChanged("hc_pvp_hq_threshold_heal", (hqEntity, _currentHealth, _previousHealth, payload) => {
    if (HasMatchEnded()) {
        Once()
        return
    }

    // Subtract by 1, since we want the emitter state of the previous threshold
    const healthRangeIndex = payload.int - 1
    if (healthRangeIndex < 0) {
        OUTPUT_SetEmitterState(hqEntity, pvpAnnouncerVal.hq.defaultEmitterState)
    } else {
        const listenerData = pvpAnnouncerVal.hq.healthRanges[healthRangeIndex]
        OUTPUT_SetEmitterState(hqEntity, listenerData.emitterState)
    }
})

// Handle HQ damage UI updates
SNIPPET_HealthChanged("hc_pvp_hq_announce", (hqEntity, _currentHealth, _previousHealth, _payload) => {
    if (HasMatchEnded()) {
        Once()
        return
    }
    const villageId = QUERY_GetVillageIDFromEntity(hqEntity)
    const team = QUERY_GetTeamName(hqEntity)

    if (DoIfNotOnCooldown(pvpAnnouncerVal.hqAreaDamageCooldown, "hq_vo_cooldown", villageId)) {
        const friendlyVO = pvpAnnouncerVal.hq.damaged.vo.friendly
        const enemyVO = pvpAnnouncerVal.hq.damaged.vo.enemy
        PlayPresentationActionTeamsHelper(friendlyVO, enemyVO, team)
    }

    if (DoIfNotOnCooldown(pvpAnnouncerVal.hq.uiCooldown, "hq_ui_cooldown", villageId)) {
        PlayUIActionToTeam(pvpAnnouncerVal.hq.uiEvent + "@" + pvpAnnouncerVal.hq.healthbarAlly, team)
        PlayUIActionToTeam(pvpAnnouncerVal.hq.uiEvent + "@" + pvpAnnouncerVal.hq.healthbarEnemy, GetOppositeTeam(team))
        OUTPUT_AnnounceTeam(pvpAnnouncerVal.hq.damaged.message.friendly, [], team)
    }

    OUTPUT_SetNamedTimer(GetVillageVariableKey(villageId, pvpAnnouncerVal.mapData.underAttackGV), pvpAnnouncerVal.mapData.gracePeriod)
    if (GetVillageVariable(villageId, pvpAnnouncerVal.mapData.underAttackGV) === 0) {
        SetVillageVariable(villageId, pvpAnnouncerVal.mapData.underAttackGV, 1)
        OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.PVP_UNDER_ATTACK, MAP_PVP_UNDER_ATTACK.ENABLED)
    }

    if (GetTeamVariable(team, pvpOnboardingYourHqVal.consts.globlaHasPlayedFountainUnderAttack) === 0) {
        //Send an announcement to the players outside the base only
        const closePlayers = FILTER_ByTeam(QUERY_GetPlayersInVillage(villageId), team)
        let allTeamPlayers = FILTER_ByTeam(QUERY_GetAlivePlayers(), team)
        allTeamPlayers = OPER_Difference(allTeamPlayers, closePlayers)

        if (HasEntities(allTeamPlayers)) {
            SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globlaHasPlayedFountainUnderAttack, 1)
            SetTeamVariable(team, pvpOnboardingYourHqVal.consts.globalFountainUnderAttackIsActive, 1)
        }
        while (HasEntities(allTeamPlayers)) {
            const player = RandomEntity(allTeamPlayers)
            OUTPUT_AnnouncePlayer(pvpOnboardingYourHqVal.messages.underAttack, [], player)
            allTeamPlayers = OPER_Difference(allTeamPlayers, player)
        }
    }
})

SNIPPET_Timer("t_pvp_hq_reset_under_attack_key", (_timeLeft, payload) => {
    const villageId = payload.ownerVillageId
    SetVillageVariable(villageId, pvpAnnouncerVal.mapData.underAttackGV, 0)
    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.PVP_UNDER_ATTACK, MAP_PVP_UNDER_ATTACK.DISABLED)
})
