const maOnboarding = {
    currentOnboadingStepGV: "gv_current_onboarding_step",
    skipOnboarding: "gv_skip_onboarding",
    act1OnboardingComplete: "gv_act1_onboarding_complete",
    onboardingCompleteResource: "unlock_onboarding_act1_complete",
    doNotSkipSeenTutorials: "gv_do_not_skip_seen_tutorials",
    successAudio: "onboarding_success",
    arrivalAudio: "onboarding_arrival",
    timeToStartOnboardingAfterIntroCine: 8,
    timeToShowTutorialHint: 15,
    tutorialBypassKey: "bypass_onboarding",
    tutorialBypassResource: "unlock_bypass_onboarding",
    firstVillageUnderAttackTag: "firstVillageUnderAttack",
    secondVillageTag: "secondVillageUnderAttack",
    worldMap: {
        uiUnlockingResource: "unlock_map_visibility",
        tutorialKey: "",
        tutorialHintUnlock: "unlock_onboarding_lookatmap_tut",
        onboardingCompleteResource: "unlock_onboarding_lookatmap_complete",
        global: {
            onboardingComplete: "gv_onboarding_world_map_completed"
        },
        consts: {
            timeToUnhideHudIfPreviousTaskWasCompleted: 12,
            timeToTriggerFirstVO: 2,
            timeToTriggerNudgeAfterUnhidingWorldMapHUD: 8,
            timeToTriggerLastVOReminder: 31,
            timeToSuccessfullyCompleteMapOnboarding: 2
        },
        message: {
            worldMapNudge: "onboarding_world_map_nudge"
        }
    },
    compassHud: {
        uiUnlockingResource: "unlock_compass_visibility",
        tutorialKey: "player_used_compass",
        tutorialHintUnlock: "unlock_onboarding_compass_tut",
        onboardingCompleteResource: "unlock_onboarding_compass_complete",
        global: {
            onboardingComplete: "gv_onboarding_compass_completed",
            playerEnteredPiglinBaseBeforeCompassHUDOnboarding: "gv_player_entered_piglin_base_before_compass_hud"
        },
        consts: {
            timeToTriggerHostDialogueAfterMapOnboarding: 16,
            timeToUnhideCompassHUD: 1,
            timeToPlaySecondCompassDialogue: 8,
            timeToTriggerNudgeAfterUnhidingCompassHUD: 3,
            timeToTriggerFirstFindBaseAfterCompassHUD: 13
        },
        message: {
            findVillageUnderAttack: "onboarding_compass_hud_nudge"
        },
        vo: {
            complete: "onboarding_find_piglins_1"
        }
    },
    lootReminder: {
        onboardingCompleteResource: "unlock_onboarding_lootremindercomplete",
        tutorialKey: "",
        global: {
            onboardingComplete: "gv_onboarding_loot_reminder_completed"
        },
        consts: {
            timeToStartLootReminder: 4,
            timeToRepeatNudge: 20
        },
        message: {
            lootReminderNudge: "onboarding_loot_reminder"
        }
    },
    mobControlReminders: {
        tutorialKey: "",
        global: {
            spawnedMobDuringPiglinFight: "gv_onboarding_reminder_mob_spawn_complete",
            usedRallyDuringPiglinFight: "gv_onboarding_reminder_rally_complete",
            usedDirectorDuringPiglinFight: "gv_onboarding_reminder_director_complete"
        },
        consts: {
            timeToTriggerSpawnMobReminder: 60 * 2,
            timeToTriggerSpawnMobReminderNudge: 8,
            timeToTriggerRallyReminder: 30,
            timeToTriggerDirectorReminder: 30
        },
        message: {
            spawnMobReminder: "onboarding_spawn_reminder_nudge"
        },
        vo: {
            spawnReminder: "onboarding_first_piglinbase_spawn",
            rallyReminder: "onboarding_first_piglinbase_rally",
            directorReminder: "onboarding_first_piglinbase_direct"
        }
    },
    mobRefundOnboarding: {
        tutorialKey: "unit_swap",
        global: {
            active: "gv_onboarding_mob_refunding_active",
            completed: "gv_onboarding_mob_refunding_completed",
            debounceActive: "gv_onboarding_mob_allow_nudge",
            timesPlayersUsedRefund: "gv_times_players_used_refund",
            tracker: "gv_spawn_cap_reached_tracker"
        },
        const: {
            debounceTimerName: "onboarding_refund_debounce",
            debounceTimer: 60,
            timesPlayersUsedRefundCap: 10,
            longNudgeTimer: 600,
            shortNudgeTimer: 300
        },
        message: {
            despawnMobReminder: "onboarding_spawn_reminder_nudge"
        },
        vo: ["onboarding_spawn_cap_reached", "onboarding_spawn_cap_reached_act2", "onboarding_spawn_cap_reached_act2_timer_passed", "onboarding_spawn_cap_reached_act2_timer_passed_nudge_2"],
        longNudgeTimerSnippet: "lt_spawn_cap_nudge_timer_long",
        shortNudgeTimerSnippet: "lt_spawn_cap_nudge_timer_short"
    },
    portalDamagedOnboarding: "gv_onboarding_portal_damage_vo_played",
    firstOnboardingBaseDestroyed: "gv_first_onboarding_base_destroyed",
    haltDestroyBaseNudge: "gv_halt_destroy_base_nudge",
    isDestroyBaseNudgeActive: "gv_destroy_base_nudge_active",
    isFirstBaseCinematicFinished: "gv_onboarding_first_base_cinematic_finished",
    playerEnteredDBBB: "gv_onboarding_dbb_entered",
    act2DaysPassed: "gv_act_days_passed",
    firstNight: {
        tutorialKey: "day_night",
        tutorialHintUnlock: "unlock_onboarding_firstnight_tut",
        consts: {
            timeToTriggerFirstNightVO: 4,
            timeToTriggerTutorialNudgeAfterFirstNightVO: 10
        },
        vo: {
            firstNight: "main_day_night_cycle"
        }
    },
    denether: {
        upgradeBuildableTag: "unlock_clear_nether",
        buildableTag: "denether",
        tutorialKey: "extra_a",
        tutorialHintUnlock: "unlock_onboarding_denether_tut",
        global: {
            onboardingComplete: "gv_onboarding_denetherfication_complete",
            denetherOnboardingActive: "gv_onboarding_denetherfication_active",
            denetherPlayedReminderAtPiglinBase: "gv_onboarding_denetherfication_piglin_base_reminder_played"
        },
        consts: {
            timeToTriggerDenetherUnlockVO: 1,
            timeToTriggerTutorialNudgeAfterDenetherUnlockVO: 10,
            timeToTriggerSuccessfulUseOfDenetherVO: 1
        },
        vo: {
            playerUnlockedDenetherTool: "wofxp_clearnetherrack_prompt",
            remindThePlayerTouUseDenetherTool: "wofxp_clearnetherrack_nudge",
            playerUsedDenetherTool: "wofxp_clearnetherrack_complete"
        }
    },
    fastTravel: {
        tutorialKey: "fast_travel",
        tutorialHintUnlock: "unlock_onboarding_fasttravel_tut",
        global: {
            onboardingComplete: "gv_onboarding_fast_travel_complete",
            daysPassedSinceFastTravelComplete: "gv_onboarding_days_passed_after_using_fast_travel",
            hasPlayedFastTravelVO: "gv_has_played_fast_travel_vo",
            playerEnteredVillageThisManyTimes: "gv_player_enetered_village_this_many_times"
        },
        consts: {
            timeToTriggerVOToTellPlayerToUseFastTravel: 1,
            daysNecessaryToTriggerFastTravel: 4,
            playerHasToEnterVillageThisManyTimesToGetTutorials: 4
        }
    },
    outpost: {
        tutorialKey: "outposts",
        tutorialHintUnlock: "unlock_onboarding_outpost_tut",
        buildableTagSet: ["buildable", "outpost"],
        global: {
            onboardingComplete: "gv_onboarding_outpost_complete",
            outpostOnboardingActive: "gv_onboarding_outpost_active"
        },
        consts: {
            timeToTriggerVOToTellPlayerToBuildAnOutpost: 1,
            timeToTriggerTutorialNudgeAfterBuildOutpostVO: 10,
            timeToTriggerVOAfterPlayersBuildsOutpost: 2,
            daysNecessaryToTriggerOutpostTutorial: 3,
            goldNecessaryToBuildOutpost: 75
        },
        vo: {
            remindThePlayerToBuildOutpost: "outpost_prompt",
            playerBuiltOutpost: "outpost_complete"
        }
    },
    piglinInvasion: {
        tutorialKey: "player_invasion_system_tutorial",
        tutorialHintUnlock: "unlock_onboarding_piglininvasion_tut",
        consts: {
            timeToTriggerVOToTellPlayerAboutPiglinInvasion: 12
        }
    },
    villageAttackPlanned: {
        tutorialKey: "",
        tutorialHintUnlock: "unlock_onboarding_villageattackplanned_tut",
        consts: {
            timeBetweenIntentionNudges: 120
        },
        vo: {
            tellThePlayerAboutVillageAttackPlanned: "invasion_village_targeted_1"
        },
        global: {
            intentionNudgeOnCoolDown: "intention_nudge_on_cooldown"
        },
        intentionHudMessages: {
            regularVillage: "onboarding_village_attack_planned_regular",
            mobAllianceHomestead: "onboarding_village_attack_planned_mob_alliance",
            playerOutpost: "onboarding_village_attack_planned_player_outpost"
        }
    },
    //
    villageAttack: {
        tutorialKey: "player_village_attack",
        tutorialKey2: "",
        tutorialHintUnlock: ""
    },
    villageDestroyed: {
        tutorialKey: "rebuilding_villages",
        tutorialHintUnlock: "unlock_onboarding_villagedestroyed_tut",
        global: {
            onboardingComplete: "gv_onboarding_village_destroyed_complete",
            daysPassedWhileVillageDestroyedIsActive: "gv_onboarding_village_destroyed_active_days",
            playerEnteredVillageDuringVillageDestroyedOnboarding: "gv_onboarding_player_entered_destroyed_village",
            playerEnteredDestroyedVillage: "gv_onbarding_player_entered_destroyed_village"
        },
        consts: {
            timeToTriggerVOToTellPlayerAboutDestroyedVillage: 12,
            timeToTriggerTutorialNudgeAfterVOAboutVillageDestroyed: 10,
            timeToTriggerVOToTellPlayerToRebuildVillage: 4,
            timeToTriggerTutorialNudgeAfterVOToRebuildVillage: 10,
            timeToTriggerVOAfterVillageDestroyedIsFixed: 4,
            timeToTriggerEnterDestroyedVillageVO: 4
        },
        message: {
            tellPlayerAboutDestroyedVillage: "onboarding_village_destroyed"
        },
        vo: {
            villageDestroyedDailyReminder: ["village_fix_nudge_1", "village_fix_nudge_2", "village_fix_nudge_3"]
        }
    },
    villageOccupied: {
        tutorialKey: "occupied_villages",
        tutorialHintUnlock: ""
    },
    armedVillagers: {
        tutorialKey: "armed_villagers",
        tutorialHintUnlock: ""
    },
    act2Upgrading: {
        tutorialKey: "player_upgraded",
        tutorialHintUnlock: "unlock_onboarding_act2upgrading_tut",
        global: {
            onboardingComplete: "gv_onboarding_act2_upgrading_complete",
            upgradingAct2OnboardingActive: "gv_onboarding_act2_upgrading_active",
            upgradingAct2ReminderVOPlayed: "gv_onboarding_act2_upgrading_vo_played",
            daysPassedWhileAct2UpgradingIsActive: "gv_onboarding_act2_days_passed_since_active"
        },
        consts: {
            timeToTriggerVOToTellPlayerToUsePrismarines: 2,
            timeToTriggerTutorialNudgeAfterVOToTellPlayerToUsePrismarine: 10,
            timeToTriggerVOToTellPlayerToBuildAnUpgradeWhenTheyEnterWoF: 2,
            timeToTriggerTutorialNudgeAfterPlayerEnteredWoFToUpgrade: 10,
            amountOfPrismarineToTriggerOnboarding: 175 //changed to 175 so it doesn't trigger right at the start of Act 1. Now it will remind player after they get too full.
        },
        message: {
            tellPlayerToBuildAnUpgrade: "onboarding_act2_upgrading"
        },
        vo: {
            tellThePlayerToUsePrimarinesToUpgrade: "wofxp_upgrade_reminder_prompt",
            remindThePlayerToUpgradeWhenTheyEnterWoFArea: "wofxp_upgrade_reminder_nudge"
        }
    },
    villageRewards: {
        tutorialKey: "village_rewards",
        tutorialHintUnlock: "unlock_onboarding_villagerewards_tut",
        global: {
            onboardingComplete: "gv_onboarding_village_rewards_complete",
            villageRewardsOnboardingActive: "gv_onboarding_village_rewards_active",
            villageRewardsVOPlayed: "gv_onboarding_village_rewards_vo_played",
            daysPassedWhileVillageRewardsIsActive: "gv_onboarding_village_rewards_days_passed_since_active"
        },
        consts: {
            timeToTriggerVOToTellPlayerAboutVillageRewards: 2,
            timeToTriggerTutorialNudgeAfterVOToTellPlayerToCollectVillageRewards: 10,
            timeToTriggerVOToTellPlayerToTellPlayerToCollectVillageRewards: 2,
            daysNecessaryToTriggerVillageReward: 3,
            timeToTriggerVillageRewardCompleteVO: 4
        },
        message: {
            tellPlayerToCollectVillageRewards: "onboarding_village_rewards"
        },
        vo: {
            remindThePlayerToCollectVillageRewards: ["village_reward_nudge_1", "village_reward_nudge_2", "village_reward_nudge_3"]
        }
    },
    mobOccupation: {
        tutorialKey: "mob_homesteads",
        tutorialHintUnlock: "unlock_onboarding_moboccupation_tut",
        global: {
            onboardingComplete: "gv_onboarding_mob_occupation_complete",
            mobOccupationOnboardingActive: "gv_onboarding_mob_occupation_active",
            daysPassedWhileMobOccupationIsActive: "gv_onboarding_mob_occupation_days_passed_since_active"
        },
        consts: {
            timeToTriggerVOToTellPlayerAboutMobOccupation: 15,
            timeToTriggerTutorialNudgeAfterVOToTellPlayerAboutMobOccupation: 10,
            daysNecessaryToTriggerMobOccupation: 3
        },
        message: {
            tellPlayerAboutMobOccupation: "onboarding_mob_occupation"
        },
        vo: {
            tellThePlayerAboutMobOccupation: "moballiance_free_mobs_1",
            remindThePlayerAboutMobOccupation: "moballiance_free_mobs_2"
        }
    },
    placedSpawner: {
        tutorialKey: "player_placed_spawner",
        tutorialHintUnlock: "unlock_onboarding_placedspawner_tut",
        global: {
            onboardingComplete: "gv_onboarding_placed_spawner_complete",
            placedSpawnerOnboardingActive: "gv_onboarding_placed_spawner_active",
            placedSpawnerReminderPlayed: "gv_onboarding_placed_spawner_reminder_played"
        },
        consts: {
            timeToTriggerVOToTellPlayerAboutPlacedSpawner: 12,
            timeToTriggerTutorialNudgeAfterVOToTellPlayerAboutPlacedSpawner: 10,
            timeToTriggerPlayerBuiltPlacedSpawnerVO: 4
        },
        vo: {
            tellThePlayerAboutPlacedSpawner: "placed_spawner_prompt",
            tellThePlayerAboutPlacedSpawnerWithoutEnoughEmeralds: "mob_placed_spawner_insufficient_resources_prompt",
            remindThePlayerAboutPlacedSpawner: "placed_spawner_nudge",
            playerBuiltPlacedSpawners: "placed_spawner_complete"
        }
    },
    mobAllegianceLost: {
        tutorialKey: "mob_allegiance_lost",
        tutorialHintUnlock: "unlock_onboarding_moballegiancelost_tut",
        global: {
            onboardingComplete: "gv_onboarding_mob_allegiance_lost_complete",
            isMobAllegianceLostOnboardingActive: "gv_onboarding_mob_allegiance_lost_active",
            allegianceLostVOPlayed: "gv_onboarding_mob_allegiance_lost_reminder_played",
            daysPassedWhileMobAllegianceLostIsActive: "gv_onboarding_mob_allegiance_lost_days_passed_since_active"
        },
        consts: {
            timeToTriggerVOToTellPlayerAboutLostAllegiance: 4,
            timeToTriggerTutorialNudgeAfterVOToTellPlayerAboutLostAllegiance: 10,
            timeToTriggerVOCongratulatingPlayersForRecoveringLostAllegiance: 10
        },
        message: {
            tellPlayerAboutMobAllegianceLost: "onboarding_mob_allegiance_lost"
        },
        vo: {
            tellThePlayerAboutLostAllegiance: "moballiance_rebuild_1",
            remindThePlayerAboutLostAllegiance: "moballiance_rebuild_2"
        }
    },
    rsl: {
        global: {
            playerHasBuiltRSL: "gv_player_has_built_rsl",
            playerHasBeenToldAboutRSL: "gv_player_has_been_told_about_rsl"
        },
        const: {
            timeToReminder1: 600,
            timeToReminder2: 600
        },
        vo: {
            rslOnApproach: "onbaording_rsl_on_approach",
            rslReminder1: "onboarding_rsl_reminder_1",
            rslReminder2: "onboarding_rsl_reminder_2"
        },
        rslTag: "redStoneLauncher"
    },
    poiMount: {
        tutorialKey: "mount_swap",
        tutorialHintUnlock: ""
    },
    advancedUpgrades: {
        timeToStart: 10,
        denether: {
            resource: "unlock_advanced_wof_upgrades1"
        },
        advancedDirect: {
            resource: "unlock_advanced_wof_upgrades2"
        },
        resourcesReward: {
            resource: "xp_common",
            amount: 100, //Note if you change this to be higher, reference its not higher than amountOfPrismarineToTriggerOnboarding above - cause then it will trigger the "spend your prismarine VO at the same time as another one"
            bothUpgradesIntro: "wofxp_unlock_denether_advanceddirect",
            denetherIntroVo: "wofxp_clear_netherrack",
            delayUntildenetherVo: 12,
            delayUntilAdvancedDirectVO: 12,
            delayUntilFirstVillageAttackIntention: 15
        }
    },
    golemOnboardingVO: {
        mossyFirstSpawn: "mossy_golem_intro",
        mossyStrength: "mossy_golem_strength",
        mossyWeakness: "mossy_golem_weakness",
        mossyReminderCD: 600,
        playerDiedNearBaseGV: "gv_player_last_died_near_enemy_base",
        grindstoneFirstSpawn: "grindstone_golem_intro",
        grindstoneStrengthPlayedGV: "gv_grindstone_golem_strength",
        grindstoneWeakness: "grindstone_golem_weakness",
        grindstoneWeaknessPlayedGV: "gv_grindstone_weakness_played",
        cobbestoneIntro: "cobblestone_golem_intro",
        cobblestoneStrengthPlayedGV: "gv_cobblestone_strength_played",
        cobblestoneStrengthReminderTimer: 120,
        cobblestoneStrength: "cobblestone_golem_strength",
        cobblestoneWeakness: "cobblestone_golem_weakness",
        cobblestoneWeaknessPlayedGV: "gv_cobblestone_golem_weakness_played",
        cobblestoneDefenseReminder: "cobblestone_golem_village_defense",
        plankStrength: "plank_golem_strength",
        plankWeakness: "plank_golem_weakness",
        plankWeaknessPlayedGV: "gv_plank_golem_weakness_played",
        plankTooMany: "plank_golem_too_many",
        smallBaseVariationGV: "gv_current_small_base_variation"
    },
    adDirectNudges: {
        adDirectUsedGV: "gv_num_times_ad_direct_used",
        adDirectOnCooldownGV: "gv_ad_direct_count_cooldown",
        usesCooldownTime: 5,
        defendNudgeGV: "gv_defend_horde_ad_direct_nudge_played",
        attackNudgeGV: "gv_attack_horde_ad_direct_nudge_played",
        obstacleNudgeGV: "gv_obstacle_horde_ad_direct_nudge_played",
        frostNudgeGV: "gv_frost_horde_ad_direct_nudge_played",
        defendNudge: "defend_horde_ad_direct_nudge",
        attackNudge: "attack_horde_ad_direct_nudge",
        obstacleNudge: "obstacle_horde_ad_direct_nudge",
        frostNudge: "frost_horde_ad_direct_nudge",
        waitTime: 360
    },
    triggeredSupportAndCavalryGolemCinematic: "gv_triggered_support_and_cavalry_golem_cinematic"
}

const _CheckIfOnboardingIsComplete = (onboardingGV) => {
    if (QUERY_GetGlobalVariable(onboardingGV) > 0) {
        return true
    }
    return false
}

const _TriggerTutorialHint = (onboardingData) => {
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), onboardingData.tutorialKey, onboardingData.tutorialHintUnlock)
}

// ======================== MOB REFUND ======================== //
const StartMobRefundOnboarding = () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobRefundOnboarding.global.active) || _CheckIfOnboardingIsComplete(maOnboarding.mobRefundOnboarding.global.completed)) return
    OUTPUT_SetGlobalVariable(maOnboarding.mobRefundOnboarding.global.active, 1)
    //setup mobcap tracking
    LISTENFOR_EntitySpawned({
        snippet: "es_refund_onboarding_cap_check",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["mob"],
        excludeTags: ["piglin", "animal", "player"]
    })
    LISTENFOR_EntityRefunded({
        snippet: "er_onboarding_used_refund",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["mob"]
    })

}

SNIPPET_EntitySpawned("es_refund_onboarding_cap_check", (playerMob) => {
    if (QUERY_GetGlobalVariable(maOnboarding.mobRefundOnboarding.global.active) === 0) {
        Once()
        return
    }

    if (QUERY_GetNumTicketsUsed(RandomEntity(GetPlayers()), "spawn") < QUERY_GetTicketCap(RandomEntity(GetPlayers()), "spawn")) {
        return
    }
    _PlayMobRefundNudge(playerMob)
})

SNIPPET_EntityRefunded("er_onboarding_used_refund", () => {
    _CompleteMobRefundTutorial()
    if (QUERY_GetGlobalVariable(maOnboarding.mobRefundOnboarding.global.completed) > 0) {
        Once()
    }
})

const _PlayMobRefundNudge = (playerMob) => {
    //play vo and show nudge
    _PlayCorrectRefundVo(playerMob)
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.mobRefundOnboarding.tutorialKey)
}

const _CompleteMobRefundTutorial = () => {
    IncrementGlobal(maOnboarding.mobRefundOnboarding.global.timesPlayersUsedRefund)
    if (QUERY_GetGlobalVariable(maOnboarding.mobRefundOnboarding.global.timesPlayersUsedRefund) >= maOnboarding.mobRefundOnboarding.const.timesPlayersUsedRefundCap) {
        OUTPUT_SetGlobalVariable(maOnboarding.mobRefundOnboarding.global.active, 0)
        OUTPUT_SetGlobalVariable(maOnboarding.mobRefundOnboarding.global.completed, 1)
    }
}

const _PlayCorrectRefundVo = (createdEntity) => {
    const tracker = QUERY_GetGlobalVariable(maOnboarding.mobRefundOnboarding.global.tracker)
    const debounceActive = QUERY_GetGlobalVariable(maOnboarding.mobRefundOnboarding.global.debounceActive)
    const isAct2 = IsCurrentAct(ACTS.ACT_2)

    //Act 1 --> Playing it for the first time
    if (!isAct2 && !tracker) {
        PlayPresentationActionToClosePlayers(maOnboarding.mobRefundOnboarding.vo[0], createdEntity, 20)
        IncrementGlobal(maOnboarding.mobRefundOnboarding.global.tracker)
        IncrementGlobal(maOnboarding.mobRefundOnboarding.global.debounceActive)
        LISTENFOR_LocalTimer({
            snippet: maOnboarding.mobRefundOnboarding.longNudgeTimerSnippet,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.mobRefundOnboarding.const.longNudgeTimer
        })
        return
    } else if (debounceActive > 0) {
        Logi("COOLDOWN TIME FOR SPAWN CAP TUTORIAL NUDGE STILL HASN'T PASSED")
        return
    } else if (isAct2) {
        if (tracker >= maOnboarding.mobRefundOnboarding.vo.length) {
            return
        }
        IncrementGlobal(maOnboarding.mobRefundOnboarding.global.debounceActive)
        PlayPresentationActionToClosePlayers(maOnboarding.mobRefundOnboarding.vo[tracker], createdEntity, 20)
        IncrementGlobal(maOnboarding.mobRefundOnboarding.global.tracker)
        switch (tracker) {
            case 0:
                LISTENFOR_LocalTimer({
                    snippet: maOnboarding.mobRefundOnboarding.longNudgeTimerSnippet,
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    waitTime: maOnboarding.mobRefundOnboarding.const.longNudgeTimer
                })
                return
            case 1:
                LISTENFOR_LocalTimer({
                    snippet: maOnboarding.mobRefundOnboarding.shortNudgeTimerSnippet,
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    waitTime: maOnboarding.mobRefundOnboarding.const.shortNudgeTimer
                })
                return
            case 2:
                LISTENFOR_LocalTimer({
                    snippet: maOnboarding.mobRefundOnboarding.shortNudgeTimerSnippet,
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    waitTime: maOnboarding.mobRefundOnboarding.const.shortNudgeTimer
                })
                return
            case 3:
                Once()
                return
            default:
                throw new Error("Unexpected Spawn Cap VO tracker number: " + tracker)
        }
    }
}

SNIPPET_LocalTimer(maOnboarding.mobRefundOnboarding.longNudgeTimerSnippet, () => {
    OUTPUT_SetGlobalVariable(maOnboarding.mobRefundOnboarding.global.debounceActive, 0)
    Logi("LONG COOLDOWN FOR SPAWN CAP VO ENDED")
})

SNIPPET_LocalTimer(maOnboarding.mobRefundOnboarding.shortNudgeTimerSnippet, () => {
    OUTPUT_SetGlobalVariable(maOnboarding.mobRefundOnboarding.global.debounceActive, 0)
    Logi("SHORT COOLDOWN FOR SPAWN CAP VO ENDED")
})

// ======================== END MOB REFUND ======================== //

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignOnboardingEnabled, (ruleValue) => {
    if (ruleValue.value) {
        //Start the onboarding
        LISTENFOR_CinematicFinished({
            snippet: "cf_start_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: "mst03_c00_opening"
        })

        /*
        //Resource Drop Onboarding
        LISTENFOR_CinematicFinished({
            snippet: "cf_portal_desrtoyed_to_start_resource_drop_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: "hrd02_c06_attack_portaldestruction_v1"
        })

        LISTENFOR_CinematicFinished({
            snippet: "cf_portal_desrtoyed_to_start_resource_drop_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: "hrd02_c06_attack_portaldestruction_v2"
        })

        LISTENFOR_CinematicFinished({
            snippet: "cf_portal_desrtoyed_to_start_resource_drop_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: "hrd02_c06_attack_portaldestruction_v3"
        })

        //DBB INTRO CINE
        LISTENFOR_CinematicFinished({
            snippet: "cf_dbb_intro_cinematic_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: "mst04_c04b_the_angry_mob"
        })
        */

        //LISTEN FOR ACT 2 START TO REVEAL ALL HIDDEN ICONS
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_onboarding_act2_started",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ACTS.ACT_2
        })

        //LISTEN FOR EPILOGUE TO COMPLETE ALL ONBOARDING
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_onboarding_epilogue_started",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ACTS.EPILOGUE
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_redstone_launcher",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [maOnboarding.rsl.rslTag]
        })

        // DEBUG
        LISTENFOR_ExternalEvent({
            snippet: "ee_complete_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "complete_onboarding"
        })
        LISTENFOR_ExternalEvent({
            snippet: "ee_complete_client_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "complete_client_onboarding"
        })

        OUTPUT_SetGlobalVariable(ONBOARDING_GLOBALS.INITIAL_ONBOARDING_COMPLETE, 0)
        OUTPUT_SetGlobalVariable(ONBOARDING_GLOBALS.ONBOARDING_ENABLED, 1)
    } else {
        IncrementGlobal(maOnboarding.act1OnboardingComplete)
        OUTPUT_SetGlobalVariable(ONBOARDING_GLOBALS.INITIAL_ONBOARDING_COMPLETE, 1)
    }
    OUTPUT_SetGlobalVariable(ONBOARDING_GLOBALS.WELL_OF_FATE_ONBOARDING_ACTIVE, 0)

    LISTENFOR_ExternalEvent({
        snippet: "ee_unlock_cavalry_golem_journal",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "unlock_cavalry_golem_journal"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_unlock_support_golem_journal",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "unlock_support_golem_journal"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_do_not_skip_seen_tutorial",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "do_not_skip_seen_tutorial"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_skip_seen_tutorial",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "skip_seen_tutorial"
    })

    //TU1 new onboarding VO
    LISTENFOR_EntitySpawned({
        snippet: "es_grindstone_golem_init_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["cavalry_golem"]
    })
    LISTENFOR_EntitySpawned({
        snippet: "es_grindstone_golem_check_weakness",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["cavalry_golem"]
    })
    LISTENFOR_EntitySpawned({
        snippet: "es_stone_golem_check_weakness",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["stone golem"]
    })
    LISTENFOR_EntitySpawned({
        snippet: "es_plank_golem_check_weakness",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["wood golem"]
    })
    LISTENFOR_EntitySpawned({
        snippet: "es_mossy_golem_init_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["support", "golem"]
    })
    LISTENFOR_EntitySpawned({
        snippet: "es_mossy_golem_strength",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["player"]
    })
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_detect_player_death_distance",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["player"],
        despawned: false
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "pev_track_small_base_onboarding",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageSize: BASE_SIZE_SMALL
    })

    //advanced direct tracking
    LISTENFOR_PlayerDirectedMob({
        snippet: "pdm_trackAdDirectUses",
        targetAction: "force_move_single",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
    LISTENFOR_PlayerDirectedMob({
        snippet: "pdm_trackAdDirectUses",
        targetAction: "attack_move_single",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
    LISTENFOR_PlayerDirectedMob({
        snippet: "pdm_trackAdDirectUses",
        targetAction: "force_move",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
    LISTENFOR_PlayerDirectedMob({
        snippet: "pdm_trackAdDirectUses",
        targetAction: "attack_move",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
})

SNIPPET_PlayerDirectedMob("pdm_trackAdDirectUses", () => {
    if (QUERY_GetGlobalVariable(maOnboarding.adDirectNudges.adDirectOnCooldownGV) === 0) {
        const numAdDirectUses = IncrementGlobal(maOnboarding.adDirectNudges.adDirectUsedGV)
        if (numAdDirectUses > 5) {
            Once()
        }
        OUTPUT_SetGlobalVariable(maOnboarding.adDirectNudges.adDirectOnCooldownGV, 1)
        // because LISTENFOR_PlayerDirectedMob is called for each mob, we need some kind of delay in place to try and distinguish unique player
        // uses of advanced direct
        LISTENFOR_LocalTimer({
            snippet: "lt_ad_direct_cooldown",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.adDirectNudges.usesCooldownTime
        })
    }
})

SNIPPET_LocalTimer("lt_ad_direct_cooldown", () => {
    OUTPUT_SetGlobalVariable(maOnboarding.adDirectNudges.adDirectOnCooldownGV, 0)
})

const _PlayBaseTypeAdDirectVO = (faction) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_base_type_adDirect_VO",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.adDirectNudges.waitTime,
        payloadString: faction
    })
}

SNIPPET_LocalTimer("lt_base_type_adDirect_VO", (payload) => {
    switch (payload.string) {
        case FACTION_NAME_ATTACK:
            if (DoOnce(maOnboarding.adDirectNudges.attackNudgeGV)) {
                PlayPresentationActionToAll(maOnboarding.adDirectNudges.attackNudge)
            }
            break
        case FACTION_NAME_DEFEND:
            if (DoOnce(maOnboarding.adDirectNudges.defendNudgeGV)) {
                PlayPresentationActionToAll(maOnboarding.adDirectNudges.defendNudge)
            }
            break
        case FACTION_NAME_OBSTACLE:
            if (DoOnce(maOnboarding.adDirectNudges.obstacleNudgeGV)) {
                PlayPresentationActionToAll(maOnboarding.adDirectNudges.obstacleNudge)
            }
            break
        case FACTION_NAME_FROST:
            if (DoOnce(maOnboarding.adDirectNudges.frostNudgeGV)) {
                PlayPresentationActionToAll(maOnboarding.adDirectNudges.frostNudge)
            }
            break
    }
})

SNIPPET_EntitySpawned("es_grindstone_golem_init_vo", (golem) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.isThisStepCurrentlyActive) === 0) {
        if (DoOnce(maOnboarding.golemOnboardingVO.grindstoneStrengthPlayedGV)) {
            PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.grindstoneFirstSpawn, golem, 20)
            Logi("grindstone spawn 1")
        }
        Once()
    }
})

SNIPPET_EntitySpawned("es_grindstone_golem_check_weakness", (golem) => {
    if (IsCurrentAct(ACTS.ACT_2)) {
        const closePiglinBases = FILTER_ByDistance(GetAliveVillages(FACTION_NAME_DEFEND, BASE_SIZE_ALL_PORTALS), golem, 200)
        if (QUERY_GetEntitiesCount(closePiglinBases) === 1) {
            const closestBase = RandomEntity(closePiglinBases)
            const villageId = QUERY_GetVillageIDFromEntity(closestBase)
            const flavour = GetVillageFlavour(villageId)
            if (flavour === VILLAGE_VARIATION_B) {
                if (DoOnce(maOnboarding.golemOnboardingVO.grindstoneWeaknessPlayedGV)) {
                    PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.grindstoneWeakness, closestBase)
                    Logi("grindstone weak 1")
                    Once()
                }
            }
        }
    }
})

SNIPPET_EntitySpawned("es_stone_golem_check_weakness", (golem) => {
    if (IsCurrentAct(ACTS.ACT_2)) {
        const closePiglinBases = FILTER_ByDistance(GetAliveVillages(FACTION_NAME_ATTACK, BASE_SIZE_ALL_PORTALS), golem, 200)
        if (QUERY_GetEntitiesCount(closePiglinBases) === 1) {
            const closestBase = RandomEntity(closePiglinBases)
            const villageId = QUERY_GetVillageIDFromEntity(closestBase)
            const flavour = GetVillageFlavour(villageId)
            if (flavour === VILLAGE_VARIATION_A) {
                if (DoOnce(maOnboarding.golemOnboardingVO.cobblestoneWeaknessPlayedGV)) {
                    PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.cobblestoneWeakness, closestBase)
                    Logi("stone weak 1")
                    Once()
                }
            }
        }
    }
})

SNIPPET_EntitySpawned("es_plank_golem_check_weakness", (golem) => {
    if (IsCurrentAct(ACTS.ACT_2)) {
        const closePiglinBases = FILTER_ByDistance(GetAliveVillages(FACTION_NAME_DEFEND, BASE_SIZE_ALL_PORTALS), golem, 200)
        if (QUERY_GetEntitiesCount(closePiglinBases) === 1) {
            const closestBase = RandomEntity(closePiglinBases)
            const villageId = QUERY_GetVillageIDFromEntity(closestBase)
            const flavour = GetVillageFlavour(villageId)
            if (flavour === VILLAGE_VARIATION_A) {
                if (DoOnce(maOnboarding.golemOnboardingVO.plankWeaknessPlayedGV)) {
                    PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.plankWeakness, closestBase)
                    Logi("plank weak")
                    Once()
                }
            }
        }
    }
})

SNIPPET_EntitySpawned("es_mossy_golem_init_vo", (golem) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.isThisStepCurrentlyActive) === 0) {
        PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.mossyFirstSpawn, golem, 20)
        Logi("mossy first")
        LISTENFOR_LocalTimer({
            snippet: "lt_mossy_strength_reminder_cooldown",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.golemOnboardingVO.mossyReminderCD
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_mossy_strength_reminder_cooldown", () => {
    LISTENFOR_EntitySpawned({
        snippet: "es_mossy_golem_reminder_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["support", "golem"]
    })
})

SNIPPET_EntitySpawned("es_mossy_golem_reminder_vo", (golem) => {
    PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.mossyWeakness, golem)
    Logi("mossy reminder")
    Once()
})

SNIPPET_EntitySpawned("es_mossy_golem_strength", (player) => {
    if (QUERY_GetGlobalVariable(act1FlowVal.wofUpgrade.global.stepComplete) === 1 && QUERY_GetGlobalVariable(maOnboarding.golemOnboardingVO.playerDiedNearBaseGV) === 1) {
        LISTENFOR_LocalTimer({
            snippet: "lt_mossy_strength_delay",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 4
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_mossy_strength_delay", () => {
    PlayPresentationActionToAll(maOnboarding.golemOnboardingVO.mossyStrength)
    Logi("mossy strength")
})

SNIPPET_NonPopCappedEntityDestroyed("ed_detect_player_death_distance", (player) => {
    const closePiglinBases = FILTER_ByDistance(FILTER_ByTeam(QUERY_GetAllAliveVillages(), "piglin_team"), player, 250)

    if (HasEntities(closePiglinBases)) {
        OUTPUT_SetGlobalVariable(maOnboarding.golemOnboardingVO.playerDiedNearBaseGV, 1)
    } else {
        OUTPUT_SetGlobalVariable(maOnboarding.golemOnboardingVO.playerDiedNearBaseGV, 0)
    }
})

SNIPPET_PlayerEnteredVillage("pev_track_small_base_onboarding", (villageId) => {
    const flavour = GetVillageFlavour(villageId)
    const villageEntity = GetVillageEntityFromID(villageId)

    switch (flavour) {
        // blaze runts
        case VILLAGE_VARIATION_A:
            //prioritize plank golem weakness vo over grindstone strength vo
            // plank weakness
            const plankGolemCount = QUERY_GetEntitiesCount(QUERY_GetEntitiesWithTags(["wood golem"]))
            if (plankGolemCount >= 1 && DoOnce(maOnboarding.golemOnboardingVO.plankWeaknessPlayedGV)) {
                PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.plankWeakness, villageEntity)
                Logi("plank weak")
            }
            // grindstone strength
            else if (DoOnce(maOnboarding.golemOnboardingVO.grindstoneStrengthPlayedGV)) {
                PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.grindstoneFirstSpawn, villageEntity)
                Logi("grindstone strength")
            }
            break
        // mace runts
        case VILLAGE_VARIATION_B:
            const grindstoneGolemCount = QUERY_GetEntitiesCount(QUERY_GetEntitiesWithTags(["cavalry_golem"]))
            const cobblestoneGolemCount = QUERY_GetEntitiesCount(QUERY_GetEntitiesWithTags(["stone_golem"]))
            // grindstone weakness
            if (grindstoneGolemCount >= 1 && DoOnce(maOnboarding.golemOnboardingVO.grindstoneWeaknessPlayedGV)) {
                PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.grindstoneWeakness, villageEntity)
                Logi("grindstone weak")
                // cobblestone weakness
            } else if (cobblestoneGolemCount >= 1 && DoOnce(maOnboarding.golemOnboardingVO.cobblestoneWeaknessPlayedGV)) {
                PlayPresentationActionToClosePlayers(maOnboarding.golemOnboardingVO.cobblestoneWeakness, villageEntity)
                Logi("cobblestone weak")
            }
            break
    }
})

SNIPPET_ExternalEvent("ee_do_not_skip_seen_tutorial", () => {
    OUTPUT_SetGlobalVariable(maOnboarding.doNotSkipSeenTutorials, 1)
})

SNIPPET_ExternalEvent("ee_skip_seen_tutorial", () => {
    OUTPUT_SetGlobalVariable(maOnboarding.doNotSkipSeenTutorials, 0)
})

SNIPPET_CinematicFinished("cf_start_onboarding", (_payload) => {
    Logi("@@@@ cf_start_onboarding @@@@ ")
    let allvillages = GetAllFriendlyVillages()
    let allMobAllianceHomesteads = GetAllMobAllianceVillages()

    while (HasEntities(allvillages)) {
        const village = RandomEntity(allvillages)
        const villageId = QUERY_GetVillageIDFromEntity(village)
        allvillages = OPER_Difference(allvillages, village)

        const targetedVillageVolume = SpawnTriggerVolume(village, village, "badger:spatial_trigger_village_generic", TEAM_WILD, villageId, true, ["player"], [], ALLIANCE_FRIENDLY)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_player_arrived_at_targeted_village",
            ownerVillageId: villageId,
            triggerEntity: targetedVillageVolume
        })
    }

    while (HasEntities(allMobAllianceHomesteads)) {
        const maVillage = RandomEntity(allMobAllianceHomesteads)
        const maVillageId = QUERY_GetVillageIDFromEntity(maVillage)
        allMobAllianceHomesteads = OPER_Difference(allMobAllianceHomesteads, maVillage)

        const targetedVillageVolume = SpawnTriggerVolume(maVillage, maVillage, "badger:spatial_trigger_village_generic", TEAM_WILD, maVillageId, true, ["player"], [], ALLIANCE_FRIENDLY)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_player_arrived_at_targeted_village",
            ownerVillageId: maVillageId,
            triggerEntity: targetedVillageVolume
        })
    }
})

SNIPPET_SpatialPartitionEntered("spe_player_arrived_at_targeted_village", (_triggerEntity, intruderEntity, payload) => {
    if (GetVillageVariable(payload.ownerVillageId, maOnboarding.villageAttackPlanned.global.intentionNudgeOnCoolDown) === 0) {
        if (IsTargetOfDelayedInvasionAttack(payload.ownerVillageId)) {
            _PlayVillageIsTargetedNudge(intruderEntity, payload.ownerVillageId)
        }
    }
})

/*
// ========================= MAP ONBOARDING =========================
const _StartWorldMapOnboardingFlow = () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.worldMap.global.onboardingComplete)) {
        return
    }

    OUTPUT_TelemetryOnboardingStart(TELEMETRY_ONBOARDING_CATEGORIES.WORLDMAP)

    LISTENFOR_LocalTimer({
        snippet: "lt_unhide_world_map_hud",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.worldMap.consts.timeToUnhideHudIfPreviousTaskWasCompleted
    })
}

SNIPPET_LocalTimer("lt_unhide_world_map_hud", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.worldMap.global.onboardingComplete)) {
        return
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_world_map_first_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.worldMap.consts.timeToTriggerFirstVO
    })
    Once()
})

SNIPPET_LocalTimer("lt_world_map_first_vo", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.worldMap.global.onboardingComplete)) {
        return
    }

    LISTENFOR_HudEvent({
        snippet: "he_map_open",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: HUD_EVENT_NAME.MAP
    })

    LISTENFOR_HudEvent({
        snippet: "he_map_closed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: HUD_EVENT_NAME.COMPASS
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_world_map_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.worldMap.consts.timeToTriggerNudgeAfterUnhidingWorldMapHUD
    })
    Once()
})

SNIPPET_HudEvent("he_map_open", (_eventName, _payload) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_successfully_complete_map_onboarding",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.worldMap.consts.timeToSuccessfullyCompleteMapOnboarding
    })
})

SNIPPET_LocalTimer("lt_successfully_complete_map_onboarding", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.worldMap.global.onboardingComplete)) {
        return
    }

    _CompleteWorldMapOnboarding(true)
    Once()
})

SNIPPET_HudEvent("he_map_closed", (_eventName, _payload) => {
    _SelectNextOnboadingFlow()
})

SNIPPET_LocalTimer("lt_world_map_nudge", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.worldMap.global.onboardingComplete)) {
        return
    }

    //_ShowOnboardingMessage(maOnboarding.worldMap.message.worldMapNudge)

    LISTENFOR_LocalTimer({
        snippet: "lt_world_map_last_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.worldMap.consts.timeToTriggerLastVOReminder
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_world_map_tutorial_hint",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.timeToShowTutorialHint
    })
    Once()
})

SNIPPET_LocalTimer("lt_world_map_tutorial_hint", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.worldMap.global.onboardingComplete)) {
        return
    }

    _TriggerTutorialHint(maOnboarding.worldMap)
    Once()
})

SNIPPET_LocalTimer("lt_world_map_last_reminder", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.worldMap.global.onboardingComplete)) {
        return
    }
    Once()
})

const _CompleteWorldMapOnboarding = () => {
    if (QUERY_GetGlobalVariable(maOnboarding.worldMap.global.onboardingComplete) === 0) {
        IncrementGlobal(maOnboarding.worldMap.global.onboardingComplete)
        if (_GetCurrentOnboadingStep() === maOnboarding.worldMap.step) {
            OUTPUT_TelemetryOnboardingComplete(TELEMETRY_ONBOARDING_CATEGORIES.WORLDMAP)
            PlayPresentationActionToAll(maOnboarding.successAudio)
        }
    }
}

// ========================= COMPASS HUD ONBOARDING =========================
const _StartCompassOnboardingFlow = () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.compassHud.global.onboardingComplete)) {
        return
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_unhide_compass_hud",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.compassHud.consts.timeToUnhideCompassHUD
    })
}

SNIPPET_LocalTimer("lt_unhide_compass_hud", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.compassHud.global.onboardingComplete)) {
        return
    }

    _UnhideCompassHUD()

    LISTENFOR_LocalTimer({
        snippet: "lt_compass_hud_complete_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.compassHud.consts.timeToTriggerNudgeAfterUnhidingCompassHUD
    })
    Once()
})

SNIPPET_LocalTimer("lt_trigger_host_dialogue_to_mention_tools", () => {

    LISTENFOR_LocalTimer({
        snippet: "lt_compass_hud_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.compassHud.consts.timeToPlaySecondCompassDialogue
    })
    Once()
})

SNIPPET_LocalTimer("lt_compass_hud_complete_vo", () => {
    PlayPresentationActionToAll(maOnboarding.compassHud.vo.complete)
    //_TriggerTutorialHint(maOnboarding.compassHud)

    if (QUERY_GetGlobalVariable(maOnboarding.compassHud.global.playerEnteredPiglinBaseBeforeCompassHUDOnboarding) > 0) {
        _CompleteCompassOnboarding()
        return
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_compass_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.compassHud.consts.timeToTriggerFirstFindBaseAfterCompassHUD
    })

    Once()
})

SNIPPET_LocalTimer("lt_compass_nudge", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.compassHud.global.onboardingComplete)) {
        return
    }

    OUTPUT_TelemetryOnboardingStart(TELEMETRY_ONBOARDING_CATEGORIES.FIND_FIRST_BASE)
    //_ShowOnboardingMessage(maOnboarding.compassHud.message.findVillageUnderAttack)

    Once()
})

const _CompleteCompassOnboarding = () => {
    if (QUERY_GetGlobalVariable(maOnboarding.compassHud.global.onboardingComplete) === 0) {
        IncrementGlobal(ONBOARDING_GLOBALS.INITIAL_ONBOARDING_COMPLETE)
        IncrementGlobal(maOnboarding.compassHud.global.onboardingComplete)
    }
}
*/

// ========================= MOB CONTROL REMINDERS ============================
/*
const _StartMobControlReminders = () => {
    LISTENFOR_LocalTimer({
        snippet: "lt_spawn_mob_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.mobControlReminders.consts.timeToTriggerSpawnMobReminder
    })

    LISTENFOR_BuildingComplete({
        snippet: "bc_hero_spawner_onboarding_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["player_buildable", "spawner"]
    })

    LISTENFOR_InfluenceLureChanged({
        snippet: "ilc_hero_lure_onboarding_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["mob", "luredirect"],
        excludeTags: ["animal", "neutral"]
    })

    LISTENFOR_InfluenceDirectorChanged({
        snippet: "idc_hero_direct_onboarding_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["mob", "luredirect"],
        excludeTags: ["animal", "neutral"]
    })
}

const _StartTimerToLureReminder = () => {
    LISTENFOR_LocalTimer({
        snippet: "lt_lure_mob_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.mobControlReminders.consts.timeToTriggerRallyReminder
    })
}

const _StartTimerToDirectReminder = () => {
    LISTENFOR_LocalTimer({
        snippet: "lt_direct_mob_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.mobControlReminders.consts.timeToTriggerDirectorReminder
    })
}



SNIPPET_BuildingComplete("bc_hero_spawner_onboarding_reminder", (_spawner, _spawnedUnit) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobControlReminders.global.spawnedMobDuringPiglinFight)) {
        Once()
        return
    }
    _CompleteHeroSpawnerReminder()
    if (QUERY_GetGlobalVariable(maOnboarding.isDestroyBaseNudgeActive) === 0) {
        _InterruptOnboardingMessage()
    }

    _StartTimerToLureReminder()
    Logi("bc_hero_spawner_onboarding_reminderbc_hero_spawner_onboarding_reminderbc_hero_spawner_onboarding_reminder")
})

SNIPPET_InfluenceLureChanged("ilc_hero_lure_onboarding_reminder", (_entity, _wasStarted, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobControlReminders.global.usedRallyDuringPiglinFight)) {
        Once()
        return
    }
    IncrementGlobal(maOnboarding.mobControlReminders.global.usedRallyDuringPiglinFight)
    _StartTimerToDirectReminder()
})

SNIPPET_InfluenceDirectorChanged("idc_hero_direct_onboarding_reminder", (_entity, _wasStarted, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobControlReminders.global.usedDirectorDuringPiglinFight)) {
        Once()
        return
    }
    IncrementGlobal(maOnboarding.mobControlReminders.global.usedDirectorDuringPiglinFight)
})

SNIPPET_LocalTimer("lt_spawn_mob_reminder", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobControlReminders.global.spawnedMobDuringPiglinFight)) {
        Once()
        return
    }

    PlayPresentationActionToAll(maOnboarding.mobControlReminders.vo.spawnReminder)

    LISTENFOR_LocalTimer({
        snippet: "lt_lure_mob_reminder_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.mobControlReminders.consts.timeToTriggerSpawnMobReminderNudge
    })
    Once()
})

SNIPPET_LocalTimer("lt_lure_mob_reminder_nudge", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobControlReminders.global.spawnedMobDuringPiglinFight)) {
        Once()
        return
    }
    Logi("lt_lure_mob_reminder_nudgelt_lure_mob_reminder_nudgelt_lure_mob_reminder_nudgelt_lure_mob_reminder_nudgelt_lure_mob_reminder_nudge")
    IncrementGlobal(maOnboarding.haltDestroyBaseNudge)
    _InterruptOnboardingMessage()
    OUTPUT_SetGlobalVariable(maOnboarding.isDestroyBaseNudgeActive, 0)
    //_ShowOnboardingMessage(maOnboarding.mobControlReminders.message.spawnMobReminder)

    Once()
})

SNIPPET_LocalTimer("lt_lure_mob_reminder", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobControlReminders.global.usedRallyDuringPiglinFight)) {
        Once()
        return
    }

    PlayPresentationActionToAll(maOnboarding.mobControlReminders.vo.rallyReminder)

    IncrementGlobal(maOnboarding.mobControlReminders.global.usedRallyDuringPiglinFight)

    _StartTimerToDirectReminder()
    Once()
})

SNIPPET_LocalTimer("lt_direct_mob_reminder", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobControlReminders.global.usedDirectorDuringPiglinFight)) {
        Once()
        return
    }

    PlayPresentationActionToAll(maOnboarding.mobControlReminders.vo.directorReminder)

    IncrementGlobal(maOnboarding.mobControlReminders.global.usedDirectorDuringPiglinFight)

    Once()
})
const _CompleteHeroSpawnerReminder = () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobControlReminders.global.spawnedMobDuringPiglinFight)) {
        Once()
        return
    }
    IncrementGlobal(maOnboarding.mobControlReminders.global.spawnedMobDuringPiglinFight)
    OUTPUT_SetGlobalVariable(maOnboarding.haltDestroyBaseNudge, 0)
}

*/

SNIPPET_CinematicFinished("cf_creeper_cine_after_first_base_destruction", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.gathering.global.onboardingComplete)) {
        Once()
        return
    }
    //_UnhideCompassHUD()

    IncrementGlobal("gv_skip_take_or_leave_golems_vo")
})

// ========================= MISC =========================
SNIPPET_GlobalVariableChanged("gvc_onboarding_act2_started", (oldValue, newValue, _payload) => {
    if (oldValue === 0 && newValue === 1) {
        Logi("~~~~~~!gvc_onboarding_act2_started!~~~~~~")
        _CompleteAct1Onboarding()
        const mobAllianceVillages = GetAllMobAllianceVillages()
        OUTPUT_MapSetKeyValue(mobAllianceVillages, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
        _StartAct2Onboarding()
        Once()
    }
})

SNIPPET_GlobalVariableChanged("gvc_onboarding_epilogue_started", (oldValue, newValue, _payload) => {
    if (oldValue === 0 && newValue === 1) {
        _CompleteAct2Onboarding()

        Once()
    }
})

SNIPPET_HealthChanged("hc_piglin_portal_damage_onboarding", (_portal, _currentHealth, _previousHealth, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.portalDamagedOnboarding)) {
        Once()
        return
    }

    IncrementGlobal(maOnboarding.portalDamagedOnboarding)
    PlayPresentationActionToAll("onboarding_first_piglinbase_portal")

    Once()
})

// =========================================================================== ACT 2 ===========================================================================
const _StartAct2Onboarding = () => {
    Logi("~~~~~ _StartAct2Onboarding ~~~~~ " + QUERY_GetGlobalVariable(maOnboarding.skipOnboarding))
    if (QUERY_GetGlobalVariable(maOnboarding.skipOnboarding) === 0) {
        //========== FIRST NIGHT ONBOARDING ==========
        LISTENFOR_TimeOfDay({
            snippet: "tod_onboarding_first_night",
            timeOfDayNumber: TIME_DUSK,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        //========== LOOP ONBOARDING ==========
        LISTENFOR_TimeOfDay({
            snippet: "tod_onboarding_first_time_slot",
            timeOfDayNumber: TIME_ONBOARDING_FIRST_SLOT,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_TimeOfDay({
            snippet: "tod_onboarding_second_time_slot",
            timeOfDayNumber: TIME_ONBOARDING_SECOND_SLOT,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_TimeOfDay({
            snippet: "tod_onboarding_third_time_slot",
            timeOfDayNumber: TIME_ONBOARDING_THIRD_SLOT,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_TimeOfDay({
            snippet: "tod_onboarding_fourth_time_slot",
            timeOfDayNumber: TIME_ONBOARDING_THIRD_SLOT,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        //========== DENETHER ONBOARDING ==========
        LISTENFOR_BuildingComplete({
            snippet: "bc_denether_upgrade",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [maOnboarding.denether.upgradeBuildableTag]
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_denether_buildable",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [maOnboarding.denether.buildableTag]
        })

        //========== OUTPOST ONBOARDING ==========
        LISTENFOR_BuildingComplete({
            snippet: "bc_outpost_buildable_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: maOnboarding.outpost.buildableTagSet
        })

        LISTENFOR_ResourcesChanged({
            snippet: "rc_gold_for_outpost_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            resourceName: "gold"
        })
        //========== INVASION ONBOARDING ==========
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_village_attack_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.START_VILLAGE_PLAN_ATTACK
        })

        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_village_attack_onboarding_2",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.START_VILLAGE_PLAN_ATTACK_2
        })
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_invasion_onbarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.START_INVASION_GAMEPLAY
        })
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_village_occupation_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.START_VILLAGE_OCCUPIED
        })

        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_armed_villagers_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.ARMED_VILLAGERS
        })
        //========== VILLAGE ATTACK PLANNED ONBOARDING ==========
        /*

        */

        //========== VILLAGE DESTROYED ONBOARDING ==========
        /*
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_village_destroyed_onbarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.START_VILLAGE_DESTROYED
        })

        
        LISTENFOR_CinematicFinished({
            snippet: "cf_village_destroyed",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: "vil01_c09_fountain_disable"
        })
        

        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_village_destroyed_onbarding_complete",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.VILLAGE_DESTROYED_REBUILT
        })
        */
        //========== ACT 2 UPGRADING ONBOARDING ==========
        LISTENFOR_ResourcesChanged({
            snippet: "rc_act2_upgrading_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            resourceName: "xp_common"
        })

        const wellOfFateVillageId = QUERY_GetVillageIDFromEntity(GetVillageEntityFromFaction(WELL_OF_FATE))
        LISTENFOR_BuildingStart({
            snippet: "bs_act2_upgrading_onboarding",
            ownerVillageId: wellOfFateVillageId,
            includeTags: ["player_upgrade"]
        })

        //========== VILLAGE REWARDS ONBOARDING ==========
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_village_chest_opened",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.VILLAGE_CHEST_OPENED
        })

        //========== MOB OCCUPATION ONBOARDING ==========
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_onboarding_mob_occupation_defeated",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.MOB_OCCUPATION_DEFEATED
        })

        //========== PLACED SPAWNER ONBOARDING ==========
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_onboarding_start_placed_spawner",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.START_PLACED_SPAWNER
        })

        LISTENFOR_BuildingStart({
            snippet: "bs_placed_spawner_onboarding",
            ownerVillageId: wellOfFateVillageId,
            includeTags: ["player_buildable", "spawner"]
        })

        //========== MOB ALLEGIANCE LOST ONBOARDING ==========
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_onboarding_start_mob_allegiance_lost",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.START_MOB_ALLIANCE_LOST
        })

        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_onboarding_complete_mob_allegiance_lost",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: ONBOARDING_GLOBALS.MOB_ALLIANCE_LOST_RECOVERED
        })
    }
}

// ========================= LOOPING TUTORIALS =========================

SNIPPET_TimeOfDay("tod_day_night_loop_tut", () => {
    Logi("~~~~ TODO_TUT_DAYNIGHT ~~~~~")
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.firstNight.tutorialKey, maOnboarding.firstNight.tutorialHintUnlock)
})
// ========================= REPERCUSSION ONBOARDING =========================

//Listener is in campaign acts
SNIPPET_LocalTimer("lt_advanced_upgrades_beginning", () => {
    Logi("@@@@ lt_advanced_upgrades_beginning @@@@ ")
    PlayPresentationActionToAll(maOnboarding.advancedUpgrades.resourcesReward.bothUpgradesIntro)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, maOnboarding.advancedUpgrades.denether.resource, 1, false)

    const playerPrismarine = QUERY_GetCampaignResource(maOnboarding.advancedUpgrades.resourcesReward.resource)
    if (playerPrismarine < maOnboarding.advancedUpgrades.resourcesReward.amount) {
        const amountToGive = maOnboarding.advancedUpgrades.resourcesReward.amount - playerPrismarine
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, maOnboarding.advancedUpgrades.resourcesReward.resource, amountToGive, false)
    }
    LISTENFOR_LocalTimer({
        snippet: "lt_advanced_upgrades_end",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.advancedUpgrades.resourcesReward.delayUntilFirstVillageAttackIntention
    })

    //================= Uncomment when the lines are available =================

    /*LISTENFOR_LocalTimer({
        snippet: "lt_advanced_upgrades_denether_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.advancedUpgrades.resourcesReward.delayUntildenetherVo
    })*/
})

/*SNIPPET_LocalTimer("lt_advanced_upgrades_denether_vo", () => {
    PlayPresentationActionToAll(maOnboarding.advancedUpgrades.resourcesReward.denetherIntroVo)
    LISTENFOR_LocalTimer({
        snippet: "lt_advanced_upgrades_advanced_direct_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.advancedUpgrades.resourcesReward.delayUntilAdvancedDirectVO
    })
})

*/

SNIPPET_LocalTimer("lt_advanced_upgrades_end", () => {
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_destroy_dbb", 1, false)

    LISTENFOR_LocalTimer({
        snippet: "lt_grant_firsts_unlock",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 5
    })
})

SNIPPET_LocalTimer("lt_grant_firsts_unlock", () => {
    if (QUERY_GetGlobalVariable("gv_has_discovered_first") > 0) {
        PlayPresentationActionToAll("poi_golem_discovered_act2_wof")
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_poi_golem_upgrade", 1, false)
    }
})

// ========================= FIRST NIGHT =========================
SNIPPET_TimeOfDay("tod_onboarding_first_night", () => {
    LISTENFOR_LocalTimer({
        snippet: "lt_play_day_night_cycle_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.firstNight.consts.timeToTriggerFirstNightVO
    })
    Once()
})

SNIPPET_LocalTimer("lt_play_day_night_cycle_vo", () => {
    //PlayPresentationActionToAll(maOnboarding.firstNight.vo.firstNight) //Removed VO, redundant with other VO info
    LISTENFOR_LocalTimer({
        snippet: "lt_start_day_night_loop_tut",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 29 //delayed so tutorial appears after Act 2 speech
    })
})

SNIPPET_LocalTimer("lt_start_day_night_loop_tut", () => {
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.firstNight.tutorialKey, maOnboarding.firstNight.tutorialHintUnlock)
    LISTENFOR_TimeOfDay({
        snippet: "tod_day_night_loop_tut",
        timeOfDayNumber: TIME_DUSK,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
})

// ========================= FIRST LOOP TIME SLOT =========================
SNIPPET_TimeOfDay("tod_onboarding_first_time_slot", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.skipOnboarding)) {
        Once()
        return
    }
    Logi("###### tod_onboarding_first_time_slot ######")
    IncrementGlobal(maOnboarding.act2DaysPassed)

    if (QUERY_GetGlobalVariable(maOnboarding.fastTravel.global.onboardingComplete)) {
        IncrementGlobal(maOnboarding.fastTravel.global.daysPassedSinceFastTravelComplete)
    }

    //VILLAGE DESTROYED ONBOARDING
    if (QUERY_GetGlobalVariable(ONBOARDING_GLOBALS.START_VILLAGE_DESTROYED) > 0 && !_CheckIfOnboardingIsComplete(maOnboarding.villageDestroyed.global.onboardingComplete)) {
        IncrementGlobal(maOnboarding.villageDestroyed.global.daysPassedWhileVillageDestroyedIsActive)
        const daysPassedWhileVillageDestroyedIsActive = QUERY_GetGlobalVariable(maOnboarding.villageDestroyed.global.daysPassedWhileVillageDestroyedIsActive)
        if (daysPassedWhileVillageDestroyedIsActive === 1 || daysPassedWhileVillageDestroyedIsActive === 2 || daysPassedWhileVillageDestroyedIsActive === 3) {
            PlayPresentationActionToAll(maOnboarding.villageDestroyed.vo.villageDestroyedDailyReminder[daysPassedWhileVillageDestroyedIsActive - 1])
        } else if (daysPassedWhileVillageDestroyedIsActive % 2 === 0) {
            OUTPUT_Announce(maOnboarding.villageDestroyed.message.tellPlayerAboutDestroyedVillage, [])
        }
    }
})
/*
// ======== VILLAGE DESTROYED ONBOARDING ========
SNIPPET_GlobalVariableChanged("gvc_village_destroyed_onbarding", (oldValue, newValue, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.villageDestroyed.global.onboardingComplete)) {
        Once()
        return
    }
    if (oldValue === 0 && newValue === 1) {
        LISTENFOR_LocalTimer({
            snippet: "lt_play_village_destroyed_onboarding_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.villageDestroyed.consts.timeToTriggerVOToTellPlayerAboutDestroyedVillage
        })

        Once()
    }
})

SNIPPET_LocalTimer("lt_play_village_destroyed_onboarding_vo", () => {
    PlayPresentationActionToAll(maOnboarding.villageDestroyed.vo.informPlayerAboutDestroyedVillage)

    LISTENFOR_LocalTimer({
        snippet: "lt_show_village_destroyed_tut",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.villageDestroyed.consts.timeToTriggerTutorialNudgeAfterVOAboutVillageDestroyed
    })
    Once()
})

SNIPPET_LocalTimer("lt_show_village_destroyed_tut", () => {
    _TriggerTutorialHint(maOnboarding.villageDestroyed)
    Once()
})

SNIPPET_GlobalVariableChanged("gvc_village_destroyed_onbarding_complete", (oldValue, newValue, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.villageDestroyed.global.onboardingComplete)) {
        Once()
        return
    }
    Logi("gvc_village_destroyed_onbarding_complete")
    if (oldValue === 0 && newValue === 1) {
        IncrementGlobal(maOnboarding.villageDestroyed.global.onboardingComplete)
        LISTENFOR_LocalTimer({
            snippet: "lt_play_village_destroyed_fixed_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.villageDestroyed.vo.timeToTriggerVOAfterVillageDestroyedIsFixed
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_play_village_destroyed_fixed_vo", () => {
    Once()
})
*/

// ================ SECOND LOOP TIME SLOT ================
SNIPPET_TimeOfDay("tod_onboarding_second_time_slot", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.skipOnboarding)) {
        Once()
        return
    }
    Logi("###### tod_onboarding_second_time_slot ######")

    if (QUERY_GetGlobalVariable(maOnboarding.act2Upgrading.global.upgradingAct2OnboardingActive) > 0) {
        IncrementGlobal(maOnboarding.act2Upgrading.global.daysPassedWhileAct2UpgradingIsActive)
        const daysPassedWhileAct2OnboardingIsActive = QUERY_GetGlobalVariable(maOnboarding.act2Upgrading.global.daysPassedWhileAct2UpgradingIsActive)
        if (daysPassedWhileAct2OnboardingIsActive > 2 && daysPassedWhileAct2OnboardingIsActive % 2 === 0) {
            OUTPUT_Announce(maOnboarding.act2Upgrading.message.tellPlayerToBuildAnUpgrade, [])
        }
    }
})

// ======== ACT2 UPGRADING ONBOARDING ========
SNIPPET_ResourcesChanged("rc_act2_upgrading_onboarding", (_resourceName, _teamID, previousAmount, currentAmount) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.act2Upgrading.global.onboardingComplete) || _CheckIfOnboardingIsComplete(maOnboarding.act2Upgrading.global.upgradingAct2OnboardingActive)) {
        Once()
        return
    }

    if (previousAmount > currentAmount) {
        return
    }

    if (currentAmount >= QUERY_GetTeamResourceMax(TEAM_BLUE, "xp_common")) {
        IncrementGlobal(maOnboarding.act2Upgrading.global.upgradingAct2OnboardingActive)
        LISTENFOR_LocalTimer({
            snippet: "lt_play_act2_upgrading_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.act2Upgrading.consts.timeToTriggerVOToTellPlayerToUsePrismarines
        })
    }
})

SNIPPET_LocalTimer("lt_play_act2_upgrading_vo", () => {
    PlayPresentationActionToAll(maOnboarding.act2Upgrading.vo.tellThePlayerToUsePrimarinesToUpgrade)
    LISTENFOR_LocalTimer({
        snippet: "lt_play_act2_upgrading_tut",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.act2Upgrading.consts.timeToTriggerTutorialNudgeAfterVOToTellPlayerToUsePrismarine
    })
    Once()
})

SNIPPET_LocalTimer("lt_play_act2_upgrading_tut", () => {
    Logi("~~~~ TODO_TUT_WOF_UPGRADE_CAMPAIGN_ONBOARDING ~~~~~")
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.act2Upgrading.tutorialKey, maOnboarding.act2Upgrading.tutorialHintUnlock)
    Once()
})

SNIPPET_BuildingStart("bs_act2_upgrading_onboarding", (_buildingCompleteEG, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.act2Upgrading.global.onboardingComplete)) {
        Once()
        return
    }

    if (_CheckIfOnboardingIsComplete(maOnboarding.act2Upgrading.global.upgradingAct2OnboardingActive)) {
        IncrementGlobal(maOnboarding.act2Upgrading.global.onboardingComplete)
        OUTPUT_SetGlobalVariable(maOnboarding.act2Upgrading.global.upgradingAct2OnboardingActive, 0)
        Once()
    }
})

// ================ THIRD LOOP TIME SLOT ================
SNIPPET_TimeOfDay("tod_onboarding_third_time_slot", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.skipOnboarding)) {
        Once()
        return
    }
    Logi("###### tod_onboarding_third_time_slot ######")
    const act2DaysPassed = QUERY_GetGlobalVariable(maOnboarding.act2DaysPassed)
    if (act2DaysPassed >= maOnboarding.villageRewards.consts.daysNecessaryToTriggerVillageReward) {
        const villageRewardsOnboardingComplete = QUERY_GetGlobalVariable(maOnboarding.villageRewards.global.onboardingComplete) > 0
        const mobOccupationOnboardingComplete = QUERY_GetGlobalVariable(maOnboarding.mobOccupation.global.onboardingComplete) > 0
        if (!villageRewardsOnboardingComplete) {
            IncrementGlobal(maOnboarding.villageRewards.global.daysPassedWhileVillageRewardsIsActive)
            const daysPassedWhileVillageRewardsOnboardingIsActive = QUERY_GetGlobalVariable(maOnboarding.villageRewards.global.daysPassedWhileVillageRewardsIsActive)
            if (daysPassedWhileVillageRewardsOnboardingIsActive === 1) {
                IncrementGlobal(maOnboarding.villageRewards.global.villageRewardsOnboardingActive)
                LISTENFOR_LocalTimer({
                    snippet: "lt_show_village_rewards_tut",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    waitTime: maOnboarding.villageRewards.consts.timeToTriggerTutorialNudgeAfterVOToTellPlayerToCollectVillageRewards
                })
            } else if (daysPassedWhileVillageRewardsOnboardingIsActive === 2 || daysPassedWhileVillageRewardsOnboardingIsActive === 3) {
                if (daysPassedWhileVillageRewardsOnboardingIsActive === 2) {
                    PlayPresentationActionToAll(maOnboarding.villageRewards.vo.remindThePlayerToCollectVillageRewards[0])
                } else {
                    PlayPresentationActionToAll(maOnboarding.villageRewards.vo.remindThePlayerToCollectVillageRewards[1])
                }
            } else if (daysPassedWhileVillageRewardsOnboardingIsActive % 2 === 0) {
                OUTPUT_Announce(maOnboarding.villageRewards.message.tellPlayerToCollectVillageRewards, [])
            }
        } else if (!mobOccupationOnboardingComplete) {
            IncrementGlobal(maOnboarding.mobOccupation.global.daysPassedWhileMobOccupationIsActive)
            const daysPassedWhileMobOccupationOnboardingIsActive = QUERY_GetGlobalVariable(maOnboarding.mobOccupation.global.daysPassedWhileMobOccupationIsActive)
            if (daysPassedWhileMobOccupationOnboardingIsActive === 1) {
                IncrementGlobal(maOnboarding.mobOccupation.global.mobOccupationOnboardingActive)
                LISTENFOR_LocalTimer({
                    snippet: "lt_play_mob_occupation_vo",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    waitTime: maOnboarding.mobOccupation.consts.timeToTriggerVOToTellPlayerAboutMobOccupation
                })
                IncrementGlobal(maOnboarding.mobOccupation.global.onboardingComplete)
            } else if (daysPassedWhileMobOccupationOnboardingIsActive === 2 || daysPassedWhileMobOccupationOnboardingIsActive === 3) {
                PlayPresentationActionToAll(maOnboarding.mobOccupation.vo.remindThePlayerAboutMobOccupation[daysPassedWhileMobOccupationOnboardingIsActive - 2])
            } else if (daysPassedWhileMobOccupationOnboardingIsActive % 2 === 0) {
                OUTPUT_Announce(maOnboarding.mobOccupation.message.tellPlayerAboutMobOccupation, [])
            }
        }
    }
})

// ======== VILLAGE REWARDS ONBOARDING ========
SNIPPET_GlobalVariableChanged("gvc_village_chest_opened", (oldValue, newValue, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.villageRewards.global.onboardingComplete)) {
        Once()
        return
    }
    Logi("gvc_village_chest_opened")
    if (oldValue === 0 && newValue === 1) {
        IncrementGlobal(maOnboarding.villageRewards.global.onboardingComplete)
        OUTPUT_SetGlobalVariable(maOnboarding.villageRewards.global.villageRewardsOnboardingActive, 0)
        Once()
    }
})

SNIPPET_LocalTimer("lt_show_village_rewards_tut", () => {
    _TriggerTutorialHint(maOnboarding.villageRewards)
    Once()
})

// ========================= REDSTONE LAUNCHER RSL ============================

SNIPPET_BuildingComplete("bc_redstone_launcher", () => {
    IncrementGlobal(maOnboarding.rsl.global.playerHasBuiltRSL)
    Once()
})

//Called in base_first_encounter_announcer
const HandleRSLOnboarding = (villageId) => {
    //If the player hasn't unlocked redstone yet, they don't have access to the RSL
    if (QUERY_GetResourceMax(RandomEntity(GetAllPlayers()), "redstone") > 0) {
        const hasPlayerNotBuiltRsl = QUERY_GetGlobalVariable(maOnboarding.rsl.global.playerHasBuiltRSL) === 0
        const hasPlayerNotBeenToldAboutRSL = QUERY_GetGlobalVariable(maOnboarding.rsl.global.playerHasBeenToldAboutRSL) === 0
        if (hasPlayerNotBuiltRsl && hasPlayerNotBeenToldAboutRSL) {
            IncrementGlobal(maOnboarding.rsl.global.playerHasBeenToldAboutRSL)
            PlayPresentationActionToClosePlayers(maOnboarding.rsl.vo.rslOnApproach, GetVillageEntityFromID(villageId))
            LISTENFOR_LocalTimer({
                snippet: "lt_rsl_reminder_1",
                ownerVillageId: villageId,
                waitTime: maOnboarding.rsl.const.timeToReminder1
            })
        }
    }
}

SNIPPET_LocalTimer("lt_rsl_reminder_1", (payload) => {
    if (QUERY_GetGlobalVariable(maOnboarding.rsl.global.playerHasBuiltRSL) === 0) {
        PlayPresentationActionToClosePlayers(maOnboarding.rsl.vo.rslReminder1, GetVillageEntityFromID(payload.ownerVillageId))

        LISTENFOR_LocalTimer({
            snippet: "lt_rsl_reminder_2",
            ownerVillageId: payload.ownerVillageId,
            waitTime: maOnboarding.rsl.const.timeToReminder2
        })
    }
})

SNIPPET_LocalTimer("lt_rsl_reminder_2", (payload) => {
    if (QUERY_GetGlobalVariable(maOnboarding.rsl.global.playerHasBuiltRSL) === 0) {
        PlayPresentationActionToClosePlayers(maOnboarding.rsl.vo.rslReminder2, GetVillageEntityFromID(payload.ownerVillageId))
    }
})

// ======== MOB OCCUPATION ONBOARDING ========
SNIPPET_GlobalVariableChanged("gvc_onboarding_mob_occupation_defeated", (oldValue, newValue, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobOccupation.global.onboardingComplete)) {
        Once()
        return
    }
    Logi("gvc_onboarding_mob_occupation_defeated")
    if (oldValue === 0 && newValue === 1) {
        IncrementGlobal(maOnboarding.mobOccupation.global.onboardingComplete)
        LISTENFOR_LocalTimer({
            snippet: "lt_play_mob_occupation_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.mobOccupation.consts.timeToTriggerVOToTellPlayerAboutMobOccupation
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_play_mob_occupation_vo", () => {
    PlayPresentationActionToAll(maOnboarding.mobOccupation.vo.tellThePlayerAboutMobOccupation)
    LISTENFOR_LocalTimer({
        snippet: "lt_show_mob_occupation_tut",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.mobOccupation.consts.timeToTriggerTutorialNudgeAfterVOToTellPlayerAboutMobOccupation
    })
    Once()
})

SNIPPET_LocalTimer("lt_show_mob_occupation_tut", () => {
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.mobOccupation.tutorialKey, maOnboarding.mobAllegianceLost.tutorialHintUnlock)
    Once()
})

// ================ FOURTH LOOP TIME SLOT ================
SNIPPET_TimeOfDay("tod_onboarding_fourth_time_slot", () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.skipOnboarding)) {
        Once()
        return
    }
    const isMobAllegianceOnboardingComplete = QUERY_GetGlobalVariable(maOnboarding.mobAllegianceLost.global.onboardingComplete) > 0
    const isMobAllegianceOnboardingActive = QUERY_GetGlobalVariable(maOnboarding.mobAllegianceLost.global.isMobAllegianceLostOnboardingActive) > 0
    if (!isMobAllegianceOnboardingComplete && isMobAllegianceOnboardingActive) {
        IncrementGlobal(maOnboarding.mobAllegianceLost.global.daysPassedWhileMobAllegianceLostIsActive)
        const daysPassedWhileMobAllegianceLostIsActive = QUERY_GetGlobalVariable(maOnboarding.mobAllegianceLost.global.daysPassedWhileMobAllegianceLostIsActive)
        if (daysPassedWhileMobAllegianceLostIsActive === 1 || daysPassedWhileMobAllegianceLostIsActive === 2 || daysPassedWhileMobAllegianceLostIsActive === 3) {
            PlayPresentationActionToAll(maOnboarding.mobAllegianceLost.vo.remindThePlayerAboutLostAllegiance[daysPassedWhileMobAllegianceLostIsActive - 1])
        } else if (daysPassedWhileMobAllegianceLostIsActive % 2 === 0) {
            OUTPUT_Announce(maOnboarding.mobAllegianceLost.message.tellPlayerAboutMobAllegianceLost, [])
        }
    }

    Logi("###### tod_onboarding_fourth_time_slot ######")
})

// ======== MOB ALLEGIANCE LOST ========
SNIPPET_GlobalVariableChanged("gvc_onboarding_start_mob_allegiance_lost", (oldValue, newValue, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobAllegianceLost.global.onboardingComplete)) {
        Once()
        return
    }
    if (oldValue === 0 && newValue === 1) {
        IncrementGlobal(maOnboarding.mobAllegianceLost.global.isMobAllegianceLostOnboardingActive)
        //TODO: Possibly delete if we have lost allegiance VO on the mob alliance itself
        LISTENFOR_LocalTimer({
            snippet: "lt_play_mob_allegiance_lost_onboarding_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.mobAllegianceLost.consts.timeToTriggerVOToTellPlayerAboutLostAllegiance
        })

        Once()
    }
})

SNIPPET_LocalTimer("lt_play_mob_allegiance_lost_onboarding_vo", () => {
    PlayPresentationActionToAll(maOnboarding.mobAllegianceLost.vo.tellThePlayerAboutLostAllegiance)
    LISTENFOR_LocalTimer({
        snippet: "lt_show_mob_allegiance_lost_tut",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.mobAllegianceLost.consts.timeToTriggerTutorialNudgeAfterVOToTellPlayerAboutLostAllegiance
    })
    Once()
})

SNIPPET_LocalTimer("lt_show_mob_allegiance_lost_tut", () => {
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.mobAllegianceLost.tutorialKey, maOnboarding.mobAllegianceLost.tutorialHintUnlock)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_mob_alliance_onboarding", (triggerEntity, _intruderEntity, payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobAllegianceLost.global.onboardingComplete)) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
        return
    }
    const mobAllianceGainedOnceGV = payload.string
    if (QUERY_GetGlobalVariable(maOnboarding.mobAllegianceLost.global.isMobAllegianceLostOnboardingActive) > 0 && QUERY_GetGlobalVariable(mobAllianceGainedOnceGV) > 0) {
        const villageEntity = GetVillageEntityFromID(QUERY_GetVillageIDFromEntity(triggerEntity))
        if (QUERY_HasTags(villageEntity, [TAG_MOB_ALLIANCE_ALLIED])) {
            return
        } else if (QUERY_GetGlobalVariable(maOnboarding.mobAllegianceLost.global.allegianceLostVOPlayed) === 0) {
            IncrementGlobal(maOnboarding.mobAllegianceLost.global.allegianceLostVOPlayed)
        }
    }
})

SNIPPET_GlobalVariableChanged("gvc_onboarding_complete_mob_allegiance_lost", (oldValue, newValue, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.mobAllegianceLost.global.onboardingComplete)) {
        Once()
        return
    }
    if (oldValue === 0 && newValue === 1) {
        IncrementGlobal(maOnboarding.mobAllegianceLost.global.onboardingComplete)
        OUTPUT_SetGlobalVariable(maOnboarding.mobAllegianceLost.global.isMobAllegianceLostOnboardingActive, 0)
        Once()
    }
})

// ========================= DENETHER ONBOARDING =========================
SNIPPET_BuildingComplete("bc_denether_upgrade", (_buildingCompleteEG, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.denether.global.onboardingComplete) || _CheckIfOnboardingIsComplete(maOnboarding.denether.global.denetherOnboardingActive)) {
        Once()
        return
    }
    IncrementGlobal(maOnboarding.denether.global.denetherOnboardingActive)

    LISTENFOR_LocalTimer({
        snippet: "lt_play_denether_unlocked_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.denether.consts.timeToTriggerDenetherUnlockVO
    })
    Once()
})

SNIPPET_LocalTimer("lt_play_denether_unlocked_vo", () => {
    //PlayPresentationActionToAll(maOnboarding.denether.vo.playerUnlockedDenetherTool)

    LISTENFOR_LocalTimer({
        snippet: "lt_show_denether_tutorial_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.denether.consts.timeToTriggerTutorialNudgeAfterDenetherUnlockVO
    })
    Once()
})

SNIPPET_LocalTimer("lt_show_denether_tutorial_nudge", () => {
    _TriggerTutorialHint(maOnboarding.denether)
    Once()
})

SNIPPET_BuildingComplete("bc_denether_buildable", (_buildingCompleteEG, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.denether.global.onboardingComplete)) {
        Once()
        return
    }

    IncrementGlobal(maOnboarding.denether.global.onboardingComplete)
    OUTPUT_SetGlobalVariable(maOnboarding.denether.global.denetherOnboardingActive, 0)

    LISTENFOR_LocalTimer({
        snippet: "lt_play_used_denether_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.denether.consts.timeToTriggerSuccessfulUseOfDenetherVO
    })
    Once()
})

SNIPPET_LocalTimer("lt_play_used_denether_vo", () => {
    PlayPresentationActionToAll(maOnboarding.denether.vo.playerUnlockedDenetherTool)
    Once()
})

// ========================= FAST TRAVEL ONBOARDING =========================
const _StartFastTravelOnboarding = () => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.fastTravel.global.onboardingComplete)) {
        return
    }

    const act2DaysPassed = QUERY_GetGlobalVariable(maOnboarding.act2DaysPassed)
    if (act2DaysPassed >= maOnboarding.fastTravel.consts.daysNecessaryToTriggerFastTravel) {
        if (DoOnce(maOnboarding.fastTravel.global.hasPlayedFastTravelVO)) {
            /*LISTENFOR_LocalTimer({
                snippet: "lt_remind_player_to_use_fast_travel",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: maOnboarding.fastTravel.consts.timeToTriggerVOToTellPlayerToUseFastTravel
            })*/
        }
    }
}

// === ENTER VILLAGE ===
SNIPPET_SpatialPartitionEntered("spe_village_onboarding", (triggerEntity, intruderEntity, _payload) => {
    Logi("@@@@@ spe_village_onboarding @@@@ ")
    if (_CheckIfOnboardingIsComplete(maOnboarding.skipOnboarding)) {
        Logi("@@@@@ skipOnboarding @@@@ ")
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
        return
    }
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const villageEntity = GetVillageEntityFromID(villageId)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    if (!(IsCurrentAct(ACTS.ACT_1A) || IsCurrentAct(ACTS.ACT_1B))) {
        if (QUERY_HasTags(villageEntity, [TAG_INACTIVE_VILLAGE])) {
            const piglinsInVillage = FILTER_ByTagFilter(villageEntities, ["piglin"], [])
            if (QUERY_GetEntitiesCount(piglinsInVillage) <= 0) {
                Logi("~~~~ TODO_TUT_REBUILD_VILLAGE ~~~~~")
                TriggerTutorialForSpecificPlayers(intruderEntity, maOnboarding.villageDestroyed.tutorialKey, maOnboarding.villageDestroyed.tutorialHintUnlock)
                if (QUERY_GetGlobalVariable(maOnboarding.villageDestroyed.global.playerEnteredDestroyedVillage) === 0) {
                    IncrementGlobal(maOnboarding.villageDestroyed.global.playerEnteredDestroyedVillage)
                }
                return
            }
        } else if (!GetVillageVariable(villageId, "attackV2_attack_active")) {
            Logi("@@@@@ maOnboarding.fastTravel.global.playerEnteredVillageThisManyTimes @@@@ " + QUERY_GetGlobalVariable(maOnboarding.fastTravel.global.playerEnteredVillageThisManyTimes))
            if (QUERY_GetGlobalVariable(maOnboarding.fastTravel.global.playerEnteredVillageThisManyTimes) === maOnboarding.fastTravel.consts.playerHasToEnterVillageThisManyTimesToGetTutorials) {
                Logi("~~~~ TODO_TUT_FAST_TRAVEL ~~~~~")
                TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.fastTravel.tutorialKey, maOnboarding.fastTravel.tutorialHintUnlock)
            }
            IncrementGlobal(maOnboarding.fastTravel.global.playerEnteredVillageThisManyTimes)
        }
    }
    const isVillageRewardOnboardingActive = QUERY_GetGlobalVariable(maOnboarding.villageRewards.global.villageRewardsOnboardingActive) > 0
    const hasPlayedVillageRewardVillageEnterVO = QUERY_GetGlobalVariable(maOnboarding.villageRewards.global.villageRewardsVOPlayed) > 0

    if (isVillageRewardOnboardingActive && !hasPlayedVillageRewardVillageEnterVO) {
        IncrementGlobal(maOnboarding.villageRewards.global.villageRewardsVOPlayed)
        return
    }

    _StartFastTravelOnboarding()
})

// === ENTER WOF ===
SNIPPET_SpatialPartitionEntered("spe_wof_onboarding", (triggerEntity, _intruderEntity, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.fastTravel.global.onboardingComplete)) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
        return
    }

    if (QUERY_GetGlobalVariable(maOnboarding.act2Upgrading.global.upgradingAct2OnboardingActive) > 0 && QUERY_GetGlobalVariable(maOnboarding.act2Upgrading.global.upgradingAct2ReminderVOPlayed) === 0) {
        IncrementGlobal(maOnboarding.act2Upgrading.global.upgradingAct2ReminderVOPlayed)
        LISTENFOR_LocalTimer({
            snippet: "lt_play_act2_upgrading_onboarding_at_wof",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.act2Upgrading.consts.timeToTriggerVOToTellPlayerToBuildAnUpgradeWhenTheyEnterWoF
        })
        return
    }

    _StartFastTravelOnboarding()
})

SNIPPET_LocalTimer("lt_play_act2_upgrading_onboarding_at_wof", () => {
    PlayPresentationActionToAll(maOnboarding.act2Upgrading.vo.remindThePlayerToUpgradeWhenTheyEnterWoFArea)
    Once()
})

// ========================= OUTPOST ONBOARDING =========================
SNIPPET_BuildingComplete("bc_outpost_buildable_onboarding", (buildingCompleteEG, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(buildingCompleteEG)
    const village = GetVillageEntityFromID(villageId)
    if (IsCurrentAct(ACTS.ACT_3A)) return
    const targetedVillageVolume = SpawnTriggerVolume(village, village, "badger:spatial_trigger_village_generic", TEAM_WILD, villageId, true, ["player"], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_arrived_at_targeted_village",
        ownerVillageId: villageId,
        triggerEntity: targetedVillageVolume
    })

    if (!_CheckIfOnboardingIsComplete(maOnboarding.outpost.global.onboardingComplete)) {
        if (QUERY_GetGlobalVariable(maOnboarding.outpost.global.outpostOnboardingActive) > 0) {
            LISTENFOR_LocalTimer({
                snippet: "lt_play_outpost_onboarding_complete_vo",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: maOnboarding.outpost.consts.timeToTriggerVOAfterPlayersBuildsOutpost
            })
        }

        IncrementGlobal(maOnboarding.outpost.global.onboardingComplete)
        OUTPUT_SetGlobalVariable(maOnboarding.outpost.global.outpostOnboardingActive, 0)
    }
})

SNIPPET_LocalTimer("lt_play_outpost_onboarding_complete_vo", () => {
    PlayPresentationActionToAll(maOnboarding.outpost.vo.playerBuiltOutpost)
    Once()
})

SNIPPET_ResourcesChanged("rc_gold_for_outpost_onboarding", (_resourceName, _teamID, previousAmount, currentAmount) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.outpost.global.onboardingComplete) || _CheckIfOnboardingIsComplete(maOnboarding.outpost.global.outpostOnboardingActive)) {
        Once()
        return
    }

    if (previousAmount > currentAmount) {
        return
    }

    const daysPassedSinceFastTravelTutorialCompleted = QUERY_GetGlobalVariable(maOnboarding.fastTravel.global.daysPassedSinceFastTravelComplete)
    if (currentAmount >= maOnboarding.outpost.consts.goldNecessaryToBuildOutpost && daysPassedSinceFastTravelTutorialCompleted >= maOnboarding.outpost.consts.daysNecessaryToTriggerOutpostTutorial) {
        IncrementGlobal(maOnboarding.outpost.global.outpostOnboardingActive)
        LISTENFOR_LocalTimer({
            snippet: "lt_play_build_outpost_vo",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.outpost.consts.timeToTriggerVOToTellPlayerToBuildAnOutpost
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_play_build_outpost_vo", () => {
    if (IsCurrentAct(ACTS.ACT_3)) return
    PlayPresentationActionToAll(maOnboarding.outpost.vo.remindThePlayerToBuildOutpost)

    LISTENFOR_LocalTimer({
        snippet: "lt_show_outpost_tutorial_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.outpost.consts.timeToTriggerTutorialNudgeAfterBuildOutpostVO
    })
    Once()
})

SNIPPET_LocalTimer("lt_show_outpost_tutorial_nudge", () => {
    _TriggerTutorialHint(maOnboarding.outpost)
    Once()
})
// ============ PIGLIN BASE ONBOARDING REMINDERS ============
SNIPPET_SpatialPartitionEntered("spe_piglin_base_onboarding", (triggerEntity, _intruderEntity, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.skipOnboarding)) {
        Once()
        OUTPUT_DespawnEntities(triggerEntity)
        return
    }

    let reminderTriggered = false

    const isPlacedSpawnerActive = QUERY_GetGlobalVariable(maOnboarding.placedSpawner.global.placedSpawnerOnboardingActive)
    const isDenetherOnboardingActive = QUERY_GetGlobalVariable(maOnboarding.denether.global.denetherOnboardingActive) > 0

    if (isPlacedSpawnerActive) {
        if (QUERY_GetGlobalVariable(maOnboarding.placedSpawner.global.placedSpawnerReminderPlayed) === 0) {
            PlayPresentationActionToAll(maOnboarding.placedSpawner.vo.remindThePlayerAboutPlacedSpawner)
            IncrementGlobal(maOnboarding.placedSpawner.global.placedSpawnerReminderPlayed)
            reminderTriggered = true
        }
    } else if (isDenetherOnboardingActive) {
        if (QUERY_GetGlobalVariable(maOnboarding.denether.global.denetherPlayedReminderAtPiglinBase) === 0) {
            PlayPresentationActionToAll(maOnboarding.denether.vo.remindThePlayerTouUseDenetherTool)
            IncrementGlobal(maOnboarding.denether.global.denetherPlayedReminderAtPiglinBase)
            reminderTriggered = true
        }
    }

    if (reminderTriggered || (isPlacedSpawnerActive && isDenetherOnboardingActive)) {
        OUTPUT_DespawnEntities(triggerEntity)
        Once()
    }
})

// ========================= INVASION ONBOARDING =========================
SNIPPET_GlobalVariableChanged("gvc_invasion_onbarding", (_oldValue, _newValue, _payload) => {
    Logi("~~~~~ gvc_invasion_onbarding ~~~~~")
    LISTENFOR_TimeOfDay({
        snippet: "tod_invasion_loop_tut",
        timeOfDayNumber: TIME_DUSK,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
    Once()
})

SNIPPET_TimeOfDay("tod_invasion_loop_tut", () => {
    Logi("~~~~ TUT_INVASIONSYSTEM ~~~~~")
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.piglinInvasion.tutorialKey, maOnboarding.piglinInvasion.tutorialHintUnlock)
})

SNIPPET_GlobalVariableChanged("gvc_village_attack_onboarding", (_oldValue, _newValue, _payload) => {
    Logi("~~~~ TUT_VILLAGEATTACK ~~~~~")
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.villageAttack.tutorialKey, maOnboarding.villageAttack.tutorialHintUnlock)
})

SNIPPET_GlobalVariableChanged("gvc_village_attack_onboarding_2", (_oldValue, _newValue, _payload) => {
    Logi("~~~~ TUT_VILLAGEATTACK2 ~~~~~")
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.villageAttack.tutorialKey2, maOnboarding.villageAttack.tutorialHintUnlock)
})

SNIPPET_GlobalVariableChanged("gvc_village_occupation_onboarding", (_oldValue, _newValue, _payload) => {
    Logi("~~~~ TUT_VILLAGEOCCUPIED ~~~~~")
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.villageOccupied.tutorialKey, maOnboarding.villageOccupied.tutorialHintUnlock)
})

SNIPPET_GlobalVariableChanged("gvc_armed_villagers_onboarding", (_oldValue, _newValue, _payload) => {
    Logi("~~~~ TUT_ARMED_VILLAGERS ~~~~~")
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), maOnboarding.armedVillagers.tutorialKey, maOnboarding.armedVillagers.tutorialHintUnlock)
})

// ========================= VILLAGE ATTACK PLANNED ONBOARDING =========================

//Called from invasion_intentions_attack_village
const _PlayVillageIsTargetedNudge = (player, villageId) => {
    let message = ""

    if (IsMobAllianceVillage(villageId)) {
        message = maOnboarding.villageAttackPlanned.intentionHudMessages.mobAllianceHomestead
    } else if (IsPlayerOutpost(villageId)) {
        message = maOnboarding.villageAttackPlanned.intentionHudMessages.playerOutpost
    } else {
        message = maOnboarding.villageAttackPlanned.intentionHudMessages.regularVillage
    }

    if (message !== "") {
        SetVillageVariable(villageId, maOnboarding.villageAttackPlanned.global.intentionNudgeOnCoolDown, 1)
        OUTPUT_AnnouncePlayer(message, "", player)

        LISTENFOR_LocalTimer({
            snippet: "lt_intention_hud_message_cooldown",
            ownerVillageId: villageId,
            waitTime: maOnboarding.villageAttackPlanned.consts.timeBetweenIntentionNudges
        })
    }
}

SNIPPET_LocalTimer("lt_intention_hud_message_cooldown", (payload) => {
    SetVillageVariable(payload.ownerVillageId, maOnboarding.villageAttackPlanned.global.intentionNudgeOnCoolDown, 0)
})

// ========================= PLACED SPAWNER ONBOARDING =========================
SNIPPET_BuildingStart("bs_placed_spawner_onboarding", (_buildingCompleteEG, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.placedSpawner.global.onboardingComplete)) {
        Once()
        return
    }

    IncrementGlobal(maOnboarding.placedSpawner.global.onboardingComplete)
    OUTPUT_SetGlobalVariable(maOnboarding.placedSpawner.global.placedSpawnerOnboardingActive, 0)
    Once()
})

SNIPPET_GlobalVariableChanged("gvc_onboarding_start_placed_spawner", (oldValue, newValue, _payload) => {
    if (_CheckIfOnboardingIsComplete(maOnboarding.placedSpawner.global.onboardingComplete)) {
        Once()
        return
    }
    Logi("gvc_onboarding_start_placed_spawner")
    if (oldValue === 0 && newValue === 1) {
        IncrementGlobal(maOnboarding.placedSpawner.global.placedSpawnerOnboardingActive)

        LISTENFOR_LocalTimer({
            snippet: "lt_tell_player_about_placed_spawner",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: maOnboarding.placedSpawner.consts.timeToTriggerVOToTellPlayerAboutPlacedSpawner
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_tell_player_about_placed_spawner", () => {
    const amountOfEmerald = QUERY_GetCampaignResource("emerald")
    if (amountOfEmerald < 25) {
        PlayPresentationActionToAll(maOnboarding.placedSpawner.vo.tellThePlayerAboutPlacedSpawnerWithoutEnoughEmeralds)
    } else {
        PlayPresentationActionToAll(maOnboarding.placedSpawner.vo.tellThePlayerAboutPlacedSpawner)
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_show_placed_spawner_tutorial_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: maOnboarding.placedSpawner.consts.timeToTriggerTutorialNudgeAfterVOToTellPlayerAboutPlacedSpawner
    })
    Once()
})

SNIPPET_LocalTimer("lt_show_placed_spawner_tutorial_nudge", () => {
    _TriggerTutorialHint(maOnboarding.placedSpawner)
    Once()
})

// ========================= COMPLETE ONBOARDING =========================
const _CompleteAct1Onboarding = () => {
    IncrementGlobal(maOnboarding.act1OnboardingComplete)
}

const _CompleteAct2Onboarding = () => {
    IncrementGlobal(maOnboarding.skipOnboarding)
}

const _CompleteClientOnboarding = () => {
    OUTPUT_TriggerTutorialBypass(maOnboarding.tutorialBypassKey)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, maOnboarding.tutorialBypassResource, 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "wood", 500, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "stone", 500, false)
}

//Debug
SNIPPET_ExternalEvent("ee_complete_onboarding", () => {
    _CompleteAct1Onboarding()
    _CompleteAct2Onboarding()
    _CompleteClientOnboarding()
    _SkipToAct2()
    _CampaignAct1BEnd()
})

SNIPPET_ExternalEvent("ee_complete_client_onboarding", () => {
    _CompleteClientOnboarding()
})

SNIPPET_ExternalEvent("ee_unlock_cavalry_golem_journal", () => {
    UnlockJournalEntry(JOURNAL_UNLOCKS.CAVALRY_GOLEM)
})

SNIPPET_ExternalEvent("ee_unlock_support_golem_journal", () => {
    UnlockJournalEntry(JOURNAL_UNLOCKS.SUPPORT_GOLEM)
})
