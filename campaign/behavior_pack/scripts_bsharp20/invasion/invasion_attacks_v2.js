const invasionAttackV2Data = {
    common: {
        vars: {
            gracePeriodActive: "attackV2_grace_period_active",
            initialWaveDelay: "attackV2_initial_wave_delay",
            attackActive: "attackV2_attack_active",
            attackResolve: "attackV2_attack_resolve",
            attackWavesSent: "attackV2_waves_sent",
            attackWavesMissed: "attackV2_waves_missed",
            obsGenerating: "attackV2_obs_generating",
            lateStartPercent: "attackV2_late_start_percent",
            abandonedAttackPercent: "attackV2_abandoned_percent",
            overtimeStarted: "attackV2_overtime_started",
            underBossAttack: "attackV2_under_boss_attack",
            underBossAttackIconPath: "waypoint_piglin_hammer_boss",
            villageIconPath: "waypoint_culture",
            canNewWaveVOPlay: "can_new_wave_vo_play",
            scriptedDamageFlag: "scripted_damage_flag",
            gvAdvancedDirectReminder: "gv_invasion_advanced_direct_reminder",
            gvAct2VillageDefendedVo: "gv_act2_village_defended_vo"
        },
        timers: {
            attackV2NextWaveTimer: "attack_v2_next_wave_timer"
        },
        tags: {
            warningMessageTVTag: "warning_message_tv"
        },
        message: {
            clearAllPiglins: "village_attack_overtime_begin_sequence",
            playerOutpostDefended: "village_attack_player_outpost_defended",
            [CULTURE_NAME_FOREST]: {
                defended: "village_attack_villagers_defended"
            },
            [CULTURE_NAME_FROSTLANDS]: {
                defended: "village_attack_villagers_defended"
            },
            [CULTURE_NAME_DRYLANDS]: {
                defended: "village_attack_villagers_defended"
            },
            [CULTURE_NAME_WETLANDS]: {
                defended: "village_attack_villagers_defended"
            },
            [CULTURE_NAME_GRASSLANDS]: {
                defended: "village_attack_villagers_defended"
            },
            [CULTURE_NAME_BROKENLANDS]: {
                defended: "village_attack_villagers_defended"
            },
            [CULTURE_NAME_FATEFUL_LAND]: {
                defended: "village_attack_villagers_defended"
            },
            [CULTURE_NAME_JUNGLE]: {
                defended: "village_attack_villagers_defended"
            },
            [CULTURE_NAME_MOUNTAIN]: {
                defended: "village_attack_villagers_defended"
            },
            [MOB_ALLIANCE_NAME_CREEPER]: {
                defended: "village_attack_creepers_defended"
            },
            [MOB_ALLIANCE_NAME_SKELETON]: {
                defended: "village_attack_skeletons_defended"
            },
            [MOB_ALLIANCE_NAME_SPIDER]: {
                defended: "village_attack_spiders_defended"
            },
            [MOB_ALLIANCE_NAME_ZOMBIE]: {
                defended: "village_attack_zombies_defended"
            }
        },
        stingers: {
            overtime: "BAE_mus_stinger_village_attack_ending",
            playerSuccessful: "BAE_mus_stinger_village_attack_free",
            playerFailed: "BAE_mus_stinger_village_attack_occupied"
        },
        diageticStingers: {
            firstWave: {
                presEvent: "sfx_piglin_village_attack_wave_spawn",
                audioEvent: "BAE_mus_stinger_village_attack_wave_first"
            },
            lastWave: {
                presEvent: "sfx_piglin_village_attack_wave_spawn",
                audioEvent: "BAE_mus_stinger_village_attack_wave_last"
            },
            newWave: {
                presEvent: "sfx_piglin_village_attack_wave_spawn",
                audioEvent: "BAE_mus_stinger_village_attack_wave_new"
            },
            waveCompleted: {
                presEvent: "sfx_piglin_village_attack_wave_spawn",
                audioEvent: "BAE_mus_stinger_village_attack_wave_completed"
            }
        },
        gracePeriodTime: 60, // Number of seconds a player has after the attack has started to activate the attack without penalty.
        overtimeClearPercent: 75, // Percentage of remaining piglins to clear out. Value between 0 and 100
        overtimeDamageScaling: 0.05, // Damage scaling that we'll use if an attack is abandonded during overtime.
        act1OvertimeClearPercent: 25,
        defaultMaxOvertimePiglinsToDefeat: 50,
        spawnPointCompassMarkerDistance: 500,
        overtimeVicinityPadding: 100, //Village BB + this is considered vicinity for overtime Piglin counting
        fobSpawnDistance: 100, //Distance from the village to spawn FOBs (when slots aren't available)
        presentationActionDistance: 160, // distance from village for players to hear invasion presentation actions
        leashDistance: 160,
        leashEndDistance: 125,
        overtimeVicinityTag: "overtime_vicinity_tag",
        abandonWarningDistance: 250,
        newWaveVOWaitTime: 4,
        newWaveVOCooldown: 45,
        damageVoCooldown: 30,
        assignPiglinsToBossCooldown: 30,
        advancedDirectReminderVicinity: 500,
        advancedDirectReminderDelay: 20,
        advancedDirectNudgeDelay: 10,
        villageAttackDefenseSuccessfullVODelay: 10,
        lastAttackWaveTag: "invasion_attacks_v2_last_spawn_point",
        maxPiglins: {
            [1]: 150,
            [2]: 150,
            [3]: 150,
            [4]: 150,
            [5]: 25
        },
        VO: {
            newWave: "village_new_wave",
            firstVillageSaved: "village_saved_first_time",
            fountainMediumHp: "village_health_50",
            fountainLowHp: "village_health_10",
            allegianceMediumHp: "mob_health_50",
            allegianceLowHp: "mob_health_10",
            overtimeBegin: "village_clear_piglins",
            abandonVillage: "village_abandon_attack",
            abandonMobAlliance: "mob_abandon_attack",
            abandonVillageAct1: "onboarding_act1_village_attack_player_leaves_first_time",
            villageAttackEndedAct1: "onboarding_act1villageattackfinished_1",
            villageAttackBattleView: "villageattack_battleview",
            villageAttackSuccessfullyDefendedAct1: "villageattack_act1_successfull_defense",
            villageAttackSuccessfullyDefendedAct2First: "villageattack_firstact2villagecleared_1",
            villageAttackSuccessfullyDefendedAct2Second: "villageattack_firstact2villagecleared_2"
        },
        cinematics: {
            [CULTURE_NAME_FOREST]: {
                saved: {
                    cineId: "vil01_c05_defended",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                },
                spawn: {
                    cineId: "vil01_c10_ob_spawn",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                }
            },
            [CULTURE_NAME_FROSTLANDS]: {
                saved: {
                    cineId: "vil01_c05_defended",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                },
                spawn: {
                    cineId: "vil01_c10_ob_spawn",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                }
            },
            [CULTURE_NAME_DRYLANDS]: {
                saved: {
                    cineId: "vil01_c05_defended",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                },
                spawn: {
                    cineId: "vil01_c10_ob_spawn",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                }
            },
            [CULTURE_NAME_WETLANDS]: {
                saved: {
                    cineId: "vil01_c05_defended",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                },
                spawn: {
                    cineId: "vil01_c10_ob_spawn",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                }
            },
            [CULTURE_NAME_GRASSLANDS]: {
                saved: {
                    cineId: "vil01_c05_defended",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                },
                spawn: {
                    cineId: "vil01_c10_ob_spawn",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                }
            },
            [CULTURE_NAME_BROKENLANDS]: {
                saved: {
                    cineId: "vil01_c05_defended",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                },
                spawn: {
                    cineId: "vil01_c10_ob_spawn",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                }
            },
            [CULTURE_NAME_FATEFUL_LAND]: {
                saved: {
                    cineId: "vil01_c05_defended",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                },
                spawn: {
                    cineId: "vil01_c10_ob_spawn",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                }
            },
            [CULTURE_NAME_JUNGLE]: {
                saved: {
                    cineId: "vil01_c05_defended",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                },
                spawn: {
                    cineId: "vil01_c10_ob_spawn",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                }
            },
            [CULTURE_NAME_MOUNTAIN]: {
                saved: {
                    cineId: "vil01_c05_defended",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                },
                spawn: {
                    cineId: "vil01_c10_ob_spawn",
                    centralStructureTag: TAG_VILLAGE_FOUNTAIN
                }
            },
            [MOB_ALLIANCE_NAME_CREEPER]: {
                saved: {
                    cineId: "mob01_c07_creeper_defended",
                    centralStructureTag: "mob_alliance_creeper_central_flame"
                },
                spawn: {
                    cineId: "mob01_c06_creeper_obspawn",
                    centralStructureTag: "mob_alliance_creeper_central_flame"
                }
            },
            [MOB_ALLIANCE_NAME_SKELETON]: {
                saved: {
                    cineId: "mob03_c07_skeleton_defended",
                    centralStructureTag: "mob_alliance_skeleton_central_flame"
                },
                spawn: {
                    cineId: "mob03_c06_skeleton_obspawn",
                    centralStructureTag: "mob_alliance_skeleton_central_flame"
                }
            },
            [MOB_ALLIANCE_NAME_SPIDER]: {
                saved: {
                    cineId: "mob03_c07_spider_defended",
                    centralStructureTag: "mob_alliance_spider_central_flame"
                },
                spawn: {
                    cineId: "mob03_c06_spider_obspawn",
                    centralStructureTag: "mob_alliance_spider_central_flame"
                }
            },
            [MOB_ALLIANCE_NAME_ZOMBIE]: {
                saved: {
                    cineId: "mob02_c07_zombies_defended",
                    centralStructureTag: "corpse_flower"
                },
                spawn: {
                    cineId: "mob02_c06_zombie_obspawn",
                    centralStructureTag: "mob_alliance_zombie"
                }
            }
        },
        telemetry: {
            numTimesActivated: "number_of_times_activated",
            attackValue: "scripted_damage_attack_value",
            defenseValue: "scripted_damage_defense_value"
        }
    },
    [FACTION_NAME_ATTACK]: {
        villageArchetype: "badger:piglin_attack_fob",
        numberOfAttackingBases: 4,
        waveConfigData: invasionAttackV2_waveConfig_attackFaction,
        messaging: {
            begin: "village_attack_begin_attack_horde"
        }
    },
    [FACTION_NAME_DEFEND]: {
        villageArchetype: "badger:piglin_defend_fob",
        numberOfAttackingBases: 4,
        waveConfigData: invasionAttackV2_waveConfig_defendFaction,
        messaging: {
            begin: "village_attack_begin_defend_horde"
        }
    },
    [FACTION_NAME_FROST]: {
        villageArchetype: "badger:piglin_frost_fob",
        numberOfAttackingBases: 4,
        waveConfigData: invasionAttackV2_waveConfig_frostFaction,
        messaging: {
            begin: "village_attack_begin_frost_horde"
        }
    },
    [FACTION_NAME_OBSTACLE]: {
        villageArchetype: "badger:piglin_obstacle_fob",
        numberOfAttackingBases: 4,
        waveConfigData: invasionAttackV2_waveConfig_obstacleFaction,
        messaging: {
            begin: "village_attack_begin_obstacle_horde"
        }
    },
    [FACTION_NAME_DBB]: {
        villageArchetype: "badger:piglin_dbb_fob",
        numberOfAttackingBases: 4,
        waveConfigData: invasionAttackV2_waveConfig_dbbFaction,
        messaging: {
            begin: ""
        }
    }
}

const _AttackFOBSmallV2 = (villageId) => {
    OUTPUT_DebugLogInvasion("Small Attack OB")
    const baseDeck = DECK_Empty()

    const firstZone = ZonesCard("addZone", 1)

    const portal = BuildableCard("piglinVillageAttackSpawnLocation")
    DECK_MultiplyByMultipleRules(portal, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("placeInsideVillageAlways"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("facingInvasionTarget")])

    //zones
    DECK_PutOnBottomOf(firstZone, baseDeck)

    //buildings
    DECK_PutOnBottomOf(portal, baseDeck)

    //other
    SetupBasicVillageClearingCards(baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
}

const GetVillageAttackWaveTimerName = (villageId) => {
    return invasionAttackV2Data.common.timers.attackV2NextWaveTimer + `_${villageId}`
}

const _GetVillageAttackSpawnLocations = (invasionV2Id) => {
    let surroundingBases = QUERY_GetInvasionAttackV2AttackingBases(invasionV2Id)
    let spawnLocations = EMPTY_ENTITY_GROUP

    while (HasEntities(surroundingBases)) {
        const spawningBase = RandomEntity(surroundingBases)
        const spawningBaseId = QUERY_GetVillageIDFromEntity(spawningBase)

        spawnLocations = OPER_Union(spawnLocations, FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(spawningBaseId), ["piglin_village_attack_spawn_location"], []))

        surroundingBases = OPER_Difference(surroundingBases, spawningBase)
    }

    return spawnLocations
}

const _SetOvertimePiglins = (invasionV2Id, piglins) => {
    const overtimeData = _GetInvasionAttackOvertimeData(invasionV2Id)
    const villageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)
    const villageCentralEntity = WaveGetAttackTarget(villageId, true)

    let finalPiglins = EMPTY_ENTITY_GROUP

    //Spawn if not enough Piglins remaining
    if (QUERY_GetEntitiesCount(piglins) < overtimeData.minimumCount) {
        const surroundingBases = QUERY_GetInvasionAttackV2AttackingBases(invasionV2Id)
        const spawningBase = RandomEntity(surroundingBases)
        const spawningBaseId = QUERY_GetVillageIDFromEntity(spawningBase)
        const piglinCountTarget = overtimeData.minimumCount - QUERY_GetEntitiesCount(piglins)

        //Spawn more stuff
        const spawnLocations = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(spawningBaseId), ["piglin_village_attack_spawn_location"], [])
        const spawnedUnits = SpawnEntitiesAt(RandomEntity(spawnLocations), overtimeData.fillerUnit, piglinCountTarget, TEAM_ORANGE, villageId)
        OUTPUT_SetLootTableOverride(spawnedUnits, LOOT_OVERRIDE.PIGLIN_VILLAGE_ATTACK)
        OUTPUT_SetLeashWithReturnWhenNotTargeting(spawnedUnits, GetVillageEntityFromID(villageId), invasionAttackV2Data.common.leashDistance, invasionAttackV2Data.common.leashEndDistance)

        finalPiglins = OPER_Union(spawnedUnits, piglins)

        OUTPUT_DebugLogInvasion("Not enough Piglins for Overtime, spawning " + QUERY_GetEntitiesCount(spawnedUnits))
    } else {
        const vicinityTV = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [invasionAttackV2Data.common.overtimeVicinityTag], [])
        const piglinsInVicinity = FILTER_ByVillageID(QUERY_GetIntruders(vicinityTV), villageId) //Get Piglins spawned for this attack only
        const piglinsOutsideVillage = OPER_Difference(piglins, piglinsInVicinity)
        const piglinsInVicinityCount = QUERY_GetEntitiesCount(piglinsInVicinity)

        //If not enough piglins are close, add more from outside
        if (piglinsInVicinityCount < overtimeData.minimumCount) {
            const piglinAmountToGetFromOutOfRange = overtimeData.minimumCount - piglinsInVicinityCount
            const piglinsToGetFromOutOfRange = FILTER_ByClosest(piglinsOutsideVillage, villageCentralEntity, piglinAmountToGetFromOutOfRange)
            const piglinsToFear = OPER_Difference(piglinsOutsideVillage, piglinsToGetFromOutOfRange)
            OUTPUT_ApplyStatusEffectWithSource(piglinsToFear, villageCentralEntity, STATUS_EFFECT.FEARED, 200)
            OUTPUT_RemoveLeash(piglinsToFear)

            OUTPUT_DebugLogInvasion("Fearing " + QUERY_GetEntitiesCount(piglinsToFear) + " piglins")
            finalPiglins = OPER_Union(piglinsToGetFromOutOfRange, piglinsInVicinity)
        } else {
            finalPiglins = piglinsInVicinity
        }
    }

    OUTPUT_DebugLogInvasion("Getting " + QUERY_GetEntitiesCount(finalPiglins) + " piglins for overtime attack")

    //Move all piglins towards center of village/MA
    OUTPUT_MoveAttackEntity(finalPiglins, villageCentralEntity, CALLBACK_NONE)

    return finalPiglins
}
const AttackV2LaunchNextWaveAttack = (invasionV2Id, overrideSpawnLocation = [], customMultiplier = -1, assignedControlGroup = undefined) => {
    const strength = QUERY_GetInvasionAttackV2Strength(invasionV2Id)
    const villageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)
    const factionName = QUERY_GetInvasionAttackV2FactionName(invasionV2Id)
    const waveConfig = invasionAttackV2Data[factionName].waveConfigData
    const currentWave = _GetCurrentWaveVariation(waveConfig, GetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackWavesSent), strength, villageId)
    if (!currentWave) {
        Loge(`Invasion Attack V2: Failed to retrieve wave data for invasion attack! Faction:'${factionName}' attacking village '${villageId}' with strength '${strength}'`)
        return
    } else {
        OUTPUT_DebugLogInvasion(`Invasion Attack V2: Launching next wave for invasion attack! Faction:'${factionName}' attacking village '${villageId}' with strength '${strength}'`)
    }

    const waveWaitTime = currentWave.nextWaveTime === undefined ? _GetDefaultWaveTime(waveConfig, strength) : currentWave.nextWaveTime

    OUTPUT_SetNamedTimer(GetVillageAttackWaveTimerName(villageId), waveWaitTime)
    OUTPUT_DebugLogInvasion(`Invasion Attack V2: Next wave coming in ${waveWaitTime} seconds...`)

    if (!GetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackActive)) {
        OUTPUT_DebugLogInvasion(`Invasion Attack V2: Village id ${villageId} - New wave spawn missed due to attack being abandoned!`)
        SetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackWavesMissed, 1)
        return
    }

    if (_SpawnAndLaunchUnits(invasionV2Id, currentWave, false, overrideSpawnLocation, customMultiplier, assignedControlGroup)) {
        DeltaVillageVariable(villageId, invasionAttackV2Data.common.vars.attackWavesSent, 1)
    }
}

const AttackV2LaunchCurrentWaveAttack = (invasionV2Id, overrideSpawnPoints, customMultiplier = -1, assignedControlGroup = undefined) => {
    const villageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)
    const strength = QUERY_GetInvasionAttackV2Strength(invasionV2Id)
    const factionName = QUERY_GetInvasionAttackV2FactionName(invasionV2Id)

    // Spawn the current wave
    const waveConfig = invasionAttackV2Data[factionName].waveConfigData
    const currentWave = _GetCurrentWaveVariation(waveConfig, GetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackWavesSent), strength, villageId)

    _SpawnAndLaunchUnits(invasionV2Id, currentWave, true, overrideSpawnPoints, customMultiplier, assignedControlGroup)
}

const _SpawnAttackHordeBossIfNeeded = (spawnLocation, spawningBaseId) => {
    const bossHealth = QUERY_GetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH)
    if (bossHealth === -1) {
        // boss has been defeated
        return EMPTY_ENTITY_GROUP
    }

    const boss = QUERY_GetEntitiesWithTags([TAG_HAMMER_BOSS])
    if (HasEntities(boss)) {
        // boss already present
        return EMPTY_ENTITY_GROUP
    }

    const bossEntity = SpawnEntitiesAt(spawnLocation, "badger:piglin_hammer_boss", 1, TEAM_ORANGE, spawningBaseId)
    return bossEntity
}

const _SpawnAndLaunchUnits = (invasionV2Id, currentWave, isFirst = false, overrideSpawnLocations = [], customMultiplier = -1, assignedControlGroup = undefined) => {
    const villageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)
    const attackingFaction = QUERY_GetInvasionAttackV2FactionName(invasionV2Id)
    const strength = QUERY_GetInvasionAttackV2Strength(invasionV2Id)

    // Record if we're using the spawn point bases or if they've been overriden.
    let spawnLocations = EMPTY_ENTITY_GROUP
    let spawnPointVillagesUsed = false
    if (HasEntities(overrideSpawnLocations)) {
        spawnLocations = overrideSpawnLocations
    } else {
        spawnLocations = _GetVillageAttackSpawnLocations(invasionV2Id)
        spawnPointVillagesUsed = true
    }

    if (!HasEntities(spawnLocations)) {
        Logw("Invasion Attack V2: Attempting to spawn units, but no spawn points provided")
        return false
    }

    const numberOfGroups = currentWave.groups
    let usedSpawnLocations = EMPTY_ENTITY_GROUP

    let unitList = []
    let multipliers = []

    let numInvasionPiglins = QUERY_GetEntitiesCount(FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["piglin", "mob"], []))

    // Generate wave units and counts
    for (let i = numberOfGroups - 1; i >= 0; --i) {
        // Select units to spawn.
        multipliers[i] = 1
        if (currentWave.unitPreset !== undefined) {
            if (currentWave.unitPreset.preset === undefined) {
                OUTPUT_DebugLogInvasion(`Invasion Attack V2: Failed to retrieve Preset wave data for invasion attack!`)
                return false
            }
            unitList[i] = currentWave.unitPreset.preset
            if (customMultiplier === -1) {
                multipliers[i] = currentWave.unitPreset.multiplier
            } else {
                multipliers[i] = customMultiplier
            }
        } else {
            unitList[i] = currentWave.units
        }

        for (const unitConfig of unitList[i]) {
            let unitSpawnAmount = Math.floor(Math.ceil(unitConfig.count * multipliers[i]) / numberOfGroups)
            unitSpawnAmount += (unitSpawnAmount % numberOfGroups) - i > 0 ? 1 : 0 //Adjust by either 1 or 0 to account for uneven division.
            numInvasionPiglins += unitSpawnAmount
        }

        let maxPiglins
        if (strength === 4 && customMultiplier === 1) {
            maxPiglins = invasionAttackV2Data.common.maxPiglins[5]
        } else if (strength > 4 || strength < 1) {
            maxPiglins = invasionAttackV2Data.common.maxPiglins[4]
            OUTPUT_DebugLogInvasion("Invasion Attack V2: Invalid strength for village attack. Setting the max piglins active to the highest strength level.")
        } else {
            maxPiglins = invasionAttackV2Data.common.maxPiglins[strength]
        }

        if (numInvasionPiglins > maxPiglins) {
            // don't spawn this wave if there are too many piglins already in the invasion and adding this group would exceed the cap
            OUTPUT_DebugLogInvasion("Invasion Attack V2: Piglins blocked from spawning due to unit cap for strength level")
            return false
        }
    }

    // Track the entities used as spawn locations for tagging
    let spawnLocationsSelectedForThisWave = EMPTY_ENTITY_GROUP
    const previouslyUsedSpawnLocations = FILTER_ByTagFilter(spawnLocations, invasionAttackV2Data.common.lastAttackWaveTag, [])

    // Select the bases to spawn and send 'em!
    for (let i = numberOfGroups - 1; i >= 0; --i) {
        let spawnLocation = EMPTY_ENTITY_GROUP

        if (currentWave.reusePreviousSpawnLocations && HasEntities(previouslyUsedSpawnLocations) && !HasEntities(overrideSpawnLocations)) {
            // Choose a spawn location that was used in the previous wave (provided we have previous spawn locations and we're not overriding anything)
            spawnLocation = RandomEntity(previouslyUsedSpawnLocations)

            OUTPUT_DebugLogInvasion(`Invasion Attack V2: Spawning a wave at a prevous wave's location`)
        } else if (currentWave.avoidPreviousSpawnLocations && HasEntities(OPER_Difference(spawnLocations, previouslyUsedSpawnLocations)) && !HasEntities(overrideSpawnLocations)) {
            // Choose a spawn location that was *not* used in the previous wave (provided such a location exists and we're not overriding anything)
            spawnLocation = RandomEntity(OPER_Difference(spawnLocations, previouslyUsedSpawnLocations))

            OUTPUT_DebugLogInvasion(`Invasion Attack V2: Spawning a wave while avoiding a previous wave's spawn location`)
        } else {
            // Choose a spawn location that hasn't been used (or start over if they've all been used.)
            if (!HasEntities(spawnLocations)) {
                spawnLocations = usedSpawnLocations
                usedSpawnLocations = EMPTY_ENTITY_GROUP
            }

            spawnLocation = RandomEntity(spawnLocations)
            spawnLocations = OPER_Difference(spawnLocations, spawnLocation)
            usedSpawnLocations = OPER_Union(usedSpawnLocations, spawnLocation)

            OUTPUT_DebugLogInvasion(`Invasion Attack V2: Picking a new invasion location`)
        }
        spawnLocationsSelectedForThisWave = OPER_Union(spawnLocationsSelectedForThisWave, spawnLocation)
        let newUnits = EMPTY_ENTITY_GROUP
        // Spawn units at the selected location.
        for (const unitConfig of unitList[i]) {
            const multipliedUnitCount = Math.ceil(unitConfig.count * multipliers[i])
            let unitSpawnAmountPerGroup = Math.floor(multipliedUnitCount / numberOfGroups)
            unitSpawnAmountPerGroup += i >= multipliedUnitCount % numberOfGroups ? 0 : 1 //Split remainder evenly among groups
            OUTPUT_DebugLogInvasion(`Invasion Attack V2: spawning: ` + unitConfig.unit + ". Total units: " + multipliedUnitCount + ". Spawning in this group: " + unitSpawnAmountPerGroup)
            if (unitSpawnAmountPerGroup > 0) {
                newUnits = OPER_Union(newUnits, SpawnEntitiesAt(spawnLocation, unitConfig.unit, unitSpawnAmountPerGroup, TEAM_ORANGE, villageId))
            }
        }

        if (HasEntities(newUnits)) {
            const fobId = QUERY_GetVillageIDFromEntity(spawnLocation)
            const gvDuplicationCheck = fobId + "_usedToSpawnWave"
            IncrementGlobal(gvDuplicationCheck)
            Logv("~~~~ LISTENING TO PIGLINS DYING DUPLPICATION VALUE " + QUERY_GetGlobalVariable(gvDuplicationCheck) + " ~~~~")
            const amountOfPiglinsBeforeBannerIsHidden = Math.ceil(0.8 * QUERY_GetEntitiesCount(newUnits))
            LISTENFOR_EntitiesAmountDestroyed({
                snippet: "ead_wave_invasion_attack_wave_cleared",
                ownerVillageId: fobId,
                entities: newUnits,
                amount: amountOfPiglinsBeforeBannerIsHidden
            })
        }

        // if this is a boss attack, then make sure a boss is present if it should be
        if (strength === 4) {
            const bossEntity = _SpawnAttackHordeBossIfNeeded(spawnLocation, villageId)
            if (HasEntities(bossEntity)) {
                newUnits = OPER_Union(newUnits, bossEntity)
            }
        }

        if (HasEntities(newUnits)) {
            // Waves are owned by the village they are attacking, not the fob they spawned at. We need to adjust the faction so that it matches the
            // attacking faction, and not the village's faction.
            OUTPUT_SetFactionByName(newUnits, attackingFaction)
            OUTPUT_SetLootTableOverride(newUnits, LOOT_OVERRIDE.PIGLIN_VILLAGE_ATTACK)
            OUTPUT_SetLeashWithReturnWhenNotTargeting(newUnits, GetVillageEntityFromID(villageId), invasionAttackV2Data.common.leashDistance, invasionAttackV2Data.common.leashEndDistance)

            if (assignedControlGroup === undefined) {
                const target = WaveGetAttackTarget(villageId)
                OUTPUT_MoveAttackPosition(newUnits, target, 8, "mc_village_attack_v2_move_done") //Send to fountain next
            } else {
                const noSeekers = FILTER_ByTagFilter(newUnits, ["piglin"], ["seeker"])
                const seekers = OPER_Difference(newUnits, noSeekers)
                const target = WaveGetAttackTarget(villageId)
                OUTPUT_MoveAttackPosition(seekers, target, 8, "mc_village_attack_v2_move_done") //Send to fountain next
                OUTPUT_AssignToControlGroup(noSeekers, assignedControlGroup)
                OUTPUT_AddTag(noSeekers, "hasControlGroup")
                OUTPUT_ControlGroupFollow(assignedControlGroup, assignedControlGroup)
            }

            // Special logic to handle spawning at the spawn point bases
            if (spawnPointVillagesUsed) {
                const spawnPointVillage = GetVillageEntityFromID(QUERY_GetVillageIDFromEntity(spawnLocation))
                OUTPUT_SetOverrideForCompassMaxRange(spawnPointVillage, invasionAttackV2Data.common.spawnPointCompassMarkerDistance)

                // Stinger
                if (isFirst) {
                    _PlayInvasionAttackDiageticStinger(spawnPointVillage, newUnits, invasionAttackV2Data.common.diageticStingers.firstWave)
                } else {
                    _PlayInvasionAttackDiageticStinger(spawnPointVillage, newUnits, invasionAttackV2Data.common.diageticStingers.newWave)
                }
            }
        }
    }

    // Tag the entities used for spawn locations (provided we didn't override the spawn location)
    if (!HasEntities(overrideSpawnLocations)) {
        OUTPUT_RemoveTag(_GetVillageAttackSpawnLocations(invasionV2Id), invasionAttackV2Data.common.lastAttackWaveTag)
        OUTPUT_AddTag(spawnLocationsSelectedForThisWave, invasionAttackV2Data.common.lastAttackWaveTag)
    }

    return true
}

SNIPPET_EntitiesAmountDestroyed("ead_wave_invasion_attack_wave_cleared", (payload) => {
    const fobId = payload.ownerVillageId
    const fobVillage = GetVillageEntityFromID(fobId)
    Logv("~~~~ invasion attack: wave defeated " + fobId + " ~~~~")
    const gvDuplicationCheck = fobId + "_usedToSpawnWave"
    Logv("~~~~ Duplication " + QUERY_GetGlobalVariable(gvDuplicationCheck) + " ~~~~")
    if (DecrementGlobal(gvDuplicationCheck) <= 0) {
        Logv("~~~~ Hide banner ~~~~")
        const fob = GetVillageEntityFromID(fobId)
        OUTPUT_SetOverrideForCompassMaxRange(fob, 0)
        OUTPUT_SetGlobalVariable(gvDuplicationCheck, 0)
        Once()
    }
     _PlayInvasionAttackDiageticStinger(fobVillage, fobVillage, invasionAttackV2Data.common.diageticStingers.waveCompleted)
})

SNIPPET_MoveCallback("mc_village_attack_v2_move_done", (moveEntity, _arrived) => {
    const targetVillageID = QUERY_GetVillageIDFromEntity(moveEntity)
    OUTPUT_MoveAttackEntity(moveEntity, WaveGetAttackTarget(targetVillageID, true), CALLBACK_NONE)
})

const _GetDefaultWaveTime = (waveConfig, strength) => {
    let waveData = null

    for (const waveConfigObject of waveConfig) {
        if (waveConfigObject.strength === strength) {
            waveData = waveConfigObject
            break
        }
    }

    if (waveData.defaultWaveTime === undefined) {
        Loge(`ERR: No default wave time found for attack strength ${strength}`)
        return
    }

    return waveData.defaultWaveTime
}

const _GetCurrentWaveVariation = (waveConfig, wavesSent, strength, villageId) => {
    let waveData = null

    for (const waveConfigObject of waveConfig) {
        if (waveConfigObject.strength === strength) {
            waveData = waveConfigObject
            break
        }
    }

    if (waveData === null) {
        Loge(`Invasion Attack V2: Given wave config was not setup for strength of ${strength}`)
        return null
    }

    // Find the next main wave to send out.
    let numberOfWaves = wavesSent
    for (const mainWaveData of waveData.mainWaves) {
        if (mainWaveData.amount >= numberOfWaves) {
            const variationLength = mainWaveData.variations.length
            const variationIndex = variationLength === 1 ? 0 : QUERY_RandomNumber(0, variationLength - 1)
            OUTPUT_DebugLogInvasion(`Invasion Attack V2: Getting main wave ${wavesSent}, variation index ${variationIndex}`)
            _SetInvasionAttackAudioPhase(villageId, mainWaveData.audioPhase) //TODO devon.plourde Separate out wave data selection and audio phase changing.
            return mainWaveData.variations[variationIndex]
        } else {
            numberOfWaves -= mainWaveData.amount
        }
    }

    // If we didn't return, fall back on the recurring waves
    const recurringWaveData = waveData.recurringWaves
    const recurringVariationLength = recurringWaveData.length
    const recurringVariationIndex = recurringVariationLength === 1 ? 0 : QUERY_RandomNumber(0, recurringVariationLength - 1)
    _SetInvasionAttackAudioPhase(villageId, waveData.recurringAudioPhase) //TODO devon.plourde Separate out wave data selection and audio phase changing.
    OUTPUT_DebugLogInvasion(`Invasion Attack V2: Getting recurring wave ${wavesSent}, variation index ${recurringVariationIndex}`)
    return recurringWaveData[recurringVariationIndex]
}

const _SetInvasionAttackAudioPhase = (villageId, phase) => {
    if (phase !== undefined) {
        SetAudioPhaseForBase(villageId, phase, "invasion_attack_music_entity")
    } else {
        Loge("No audio phase passed.")
    }
}

const _GetInvasionAttackAudioEntity = (invasionId) => {
    const factionName = QUERY_GetInvasionAttackV2FactionName(invasionId)
    const strength = QUERY_GetInvasionAttackV2Strength(invasionId)
    const waveData = invasionAttackV2Data[factionName].waveConfigData

    let audioEntity = null

    for (const waveConfigObject of waveData) {
        if (waveConfigObject.strength === strength) {
            audioEntity = waveConfigObject.music
            break
        }
    }

    if (audioEntity === null) {
        Loge("No audio entity found for " + factionName + " of strength " + strength)
    }

    return audioEntity
}

const _PlayInvasionAttackDiageticStinger = (location, entities, context) => {
    if (context) {
        OUTPUT_TriggerPresentationEvent(entities, context.presEvent)
        OUTPUT_SendPositionalAudio(context.audioEvent, location)
    } else {
        Loge("Invalid diagetic context")
    }
}

const _GetInvasionAttackOvertimeData = (invasionId) => {
    const factionName = QUERY_GetInvasionAttackV2FactionName(invasionId)
    const strength = QUERY_GetInvasionAttackV2Strength(invasionId)
    const waveData = invasionAttackV2Data[factionName].waveConfigData

    let overtimeData = null
    for (const waveConfigObject of waveData) {
        if (waveConfigObject.strength === strength) {
            overtimeData = waveConfigObject.overtimeSetup
            break
        }
    }
    if (overtimeData === null) {
        Loge("No overtime data found for " + factionName + " of strength " + strength)
    }
    return overtimeData
}

const _SetupOvertimeObjective = (invasionV2Id) => {
    const targetVillageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)
    const attackingHorde = QUERY_GetInvasionAttackV2FactionName(invasionV2Id)
    const attackingPiglins = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(targetVillageId), ["mob", "piglin"], [])
    const overtimeData = _GetInvasionAttackOvertimeData(invasionV2Id)

    //Audio
    _SetInvasionAttackAudioPhase(targetVillageId, INVASION_ATTACK_AUDIO.PHASES.ENDING)
    PlayStingerToClosePlayers(invasionAttackV2Data.common.stingers.overtime, GetVillageEntityFromID(targetVillageId))

    //Setup any additional Piglins / reduce piglins
    const finalPiglins = _SetOvertimePiglins(invasionV2Id, attackingPiglins)
    const numberOfPiglins = QUERY_GetEntitiesCount(finalPiglins)

    const overtimeClearPercent = IsThisAct1VillageAttack(targetVillageId) ? invasionAttackV2Data.common.act1OvertimeClearPercent : invasionAttackV2Data.common.overtimeClearPercent
    const piglinsToKillPercentage = Math.floor(numberOfPiglins * (overtimeClearPercent / 100))
    const maxOvertimePiglinsToDefeat = overtimeData && overtimeData.maxOvertimePiglinsToDefeat ? overtimeData.maxOvertimePiglinsToDefeat : invasionAttackV2Data.common.defaultMaxOvertimePiglinsToDefeat
    const piglinsToKill = Math.min(piglinsToKillPercentage, maxOvertimePiglinsToDefeat)
    if (piglinsToKill > 0) {
        // Set up overtime objective - clear out remaining mobs
        OUTPUT_SetupDestroyEntitiesObjective(targetVillageId, finalPiglins, piglinsToKill, attackingHorde)

        LISTENFOR_InvasionDestroyEntitiesObjective({
            snippet: "mc_attack_success",
            ownerVillageId: targetVillageId,
            villageId: targetVillageId,
            threshold: 0,
            payloadInt: invasionV2Id
        })
        if (!IsCurrentAct(ACTS.ACT_1A)) {
            OUTPUT_AnnounceSequence(invasionAttackV2Data.common.message.clearAllPiglins)
        }
    } else {
        OUTPUT_DebugLogInvasion("Invasion Attack V2: No piglins left to kill. Ending attack.")
        OUTPUT_EndInvasionAttackV2(invasionV2Id, true)
    }
}

const _GetPercentCompleteSinceAbandon = (villageId) => {
    return GetVillageVariable(villageId, invasionAttackV2Data.common.vars.abandonedAttackPercent) / 100
}

const _SetPercentCompleteOnAbandon = (villageId, percent) => {
    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.abandonedAttackPercent, percent * 100)
}

const _GetLateStartPercent = (villageId) => {
    return GetVillageVariable(villageId, invasionAttackV2Data.common.vars.lateStartPercent) / 100
}

const _SetLateStartPercent = (villageId, percent) => {
    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.lateStartPercent, percent * 100)
}

const _CreateDamageRequest = (invasionId, villageId, percent, endAttack) => {
    LISTENFOR_InvasionAttackV2DamageRequest({
        snippet: "invasion_attackV2_damage_request",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId,
        payloadFloat: percent
    })

    LISTENFOR_InvasionAttackV2PostDamageRequest({
        snippet: "invasion_attackV2_post_damage_request",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        villageId: villageId,
        payloadInt: endAttack ? 1 : 0
    })

    OUTPUT_InvasionAttackV2RequestDamage(invasionId)
}

const _HideSpawnPointCompassIcons = (spawnPointBases) => {
    while (HasEntities(spawnPointBases)) {
        const spawningBase = RandomEntity(spawnPointBases)
        OUTPUT_SetOverrideForCompassMaxRange(spawningBase, 0)

        spawnPointBases = OPER_Difference(spawnPointBases, spawningBase)
    }
}

const _GetInvasionAttackResult = (villageId) => {
    return GetVillageVariable(villageId, INVASION_ATTACK_RESULT_VILLAGE_VARIABLE)
}

//TODO (dplourde): Consider cleaning the following function - and check its usefulness in the modern world
const _SetInvasionAttackResult = (villageId, affectedEntities) => {
    let result = INVASION_ATTACK_RESULT.UNDAMAGED // Filter the affected buildings to determine the result
    const centralStructure = RandomEntity(GetVillageCentralStructures(villageId))
    const damagedCentralStructure = OPER_Intersection(centralStructure, affectedEntities.damaged)
    if (HasEntities(damagedCentralStructure)) {
        result = INVASION_ATTACK_RESULT.DAMAGED
    } else {
        const destroyedCentralStructure = OPER_Intersection(centralStructure, affectedEntities.destroyed)
        if (HasEntities(destroyedCentralStructure)) {
            result = INVASION_ATTACK_RESULT.DESTROYED
        }
    }

    OUTPUT_DebugLogInvasion(`Damage Applier: resulting village state is '${result}'`)
    SetVillageVariable(villageId, INVASION_ATTACK_RESULT_VILLAGE_VARIABLE, result)

    return result
}

const _OnPostVillageDamage = (villageId, result) => {
    if (result === INVASION_ATTACK_RESULT.DAMAGED) {
        if (QUERY_GetGlobalVariable(invasionDawnConst.globals.villageDamaged) === 0) {
            OUTPUT_SetGlobalVariable(invasionDawnConst.globals.villageDamaged, 1)
        }
    } else if (result === INVASION_ATTACK_RESULT.DESTROYED) {
        if (QUERY_GetGlobalVariable(invasionDawnConst.globals.villageDestroyed) === 0) {
            OUTPUT_SetGlobalVariable(invasionDawnConst.globals.villageDestroyed, 1)
        }
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue.value) {
        // ===== INVASION: ATTACK STATE CHANGES =====
        LISTENFOR_InvasionAttackV2Started({
            snippet: "invasion_attackV2_starting",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_InvasionAttackV2Activated({
            snippet: "invasion_attackV2_activated",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_InvasionAttackV2Abandoned({
            snippet: "invasion_attackV2_abandoned",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_InvasionAttackV2Reactivated({
            snippet: "invasion_attackV2_reactivated",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_InvasionAttackV2Overtime({
            snippet: "invasion_attackV2_overtime",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_InvasionAttackV2Resolve({
            snippet: "invasion_attackV2_resolve",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_InvasionAttackV2Ended({
            snippet: "invasion_attackV2_ended",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })
    }
})

SNIPPET_InvasionAttackV2Started("invasion_attackV2_starting", (attackV2Data) => {
    OUTPUT_DebugLogInvasion("Attack V2 Started!!")

    const targetVillageId = attackV2Data.villageId

    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackActive, 0)
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackResolve, 0)
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.overtimeStarted, 0)
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackWavesSent, 0)
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackWavesMissed, 0)
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.initialWaveDelay, 0)

    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.telemetry.numTimesActivated, 0)
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.telemetry.attackValue, 0)
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.telemetry.defenseValue, 0)

    _SetPercentCompleteOnAbandon(targetVillageId, 0)

    // Activate timer for activation grace period.
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.gracePeriodActive, 1)
    LISTENFOR_LocalTimer({
        snippet: "lt_attackV2_grace_period_timer",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: invasionAttackV2Data.common.gracePeriodTime,
        payloadInt: targetVillageId
    })

    const village = GetVillageEntityFromID(attackV2Data.villageId)
    OUTPUT_MapSetKeyValue(village, MAP_KEY.INVASION_ATTACK, MAP_INVASION_ATTACK.ABANDONED)
})

SNIPPET_InvasionAttackV2Activated("invasion_attackV2_activated", (attackV2Data, percentComplete, timePast) => {
    OUTPUT_DebugLogInvasion("Attack V2 Activated!!")

    const attackingFaction = attackV2Data.factionName
    const targetVillageId = attackV2Data.villageId
    const strength = attackV2Data.strength
    const data = invasionAttackV2Data[attackingFaction]

    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackActive, 1)
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.obsGenerating, data.numberOfAttackingBases)
    _SetLateStartPercent(targetVillageId, percentComplete)
    DeltaVillageVariable(targetVillageId, invasionAttackV2Data.common.telemetry.numTimesActivated, 1)

    const centralStructures = GetVillageCentralStructures(targetVillageId)
    if (!HasEntities(centralStructures)) {
        OUTPUT_EndInvasionAttackV2(attackV2Data.id, false)

        const villageFaction = QUERY_GetFactionNameFromVillageID(targetVillageId)
        Loge(`Village Attack Activation Failed! Unable to query the central structure for village ${targetVillageId}: ${villageFaction}. Was this a mob alliance that isn't unlocked yet?`)
        return
    }
    const centralStructure = RandomEntity(centralStructures)

    if (!IsMobAllianceVillage(targetVillageId)) {
        OUTPUT_SetBehavior(centralStructure, "badger:behavior_hub_healing_disabled")
    }

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_attackV2_obs_generating",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: GetVillageVariableKey(targetVillageId, invasionAttackV2Data.common.vars.obsGenerating),
        payloadInt: attackV2Data.id
    })

    LISTENFOR_InvasionAttackV2FobGenerated({
        snippet: "invasion_attackV2_fob_generated",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        invasionId: attackV2Data.id
    })
    const playerMessageTV = OUTPUT_CreateVillageTriggerVolume(targetVillageId, invasionAttackV2Data.common.abandonWarningDistance, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    OUTPUT_AddTag(playerMessageTV, invasionAttackV2Data.common.tags.warningMessageTVTag)
    LISTENFOR_SpatialPartitionExited({
        snippet: "spx_player_left_attack_warning",
        ownerVillageId: targetVillageId,
        triggerEntity: playerMessageTV
    })
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_returned_to_village_attack",
        ownerVillageId: targetVillageId,
        triggerEntity: playerMessageTV
    })

    if (QUERY_GetGlobalVariable(invasionAttackV2Data.common.vars.gvAdvancedDirectReminder) === 0 && QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0) {
        LISTENFOR_LocalTimer({
            snippet: "lt_invasion_advanced_direct_reminder",
            ownerVillageId: targetVillageId,
            waitTime: invasionAttackV2Data.common.advancedDirectReminderDelay
        })
    }

    const villageSize = QUERY_GetFactionSizeFromVillageID(targetVillageId)
    OUTPUT_DebugLogInvasion(`Size of the village being attacked: ${villageSize}`)
    if (villageSize === VILLAGE_SIZE_PLAYER) {
        LISTENFOR_VillageDestroyed({
            snippet: "vd_invasion_attackV2_outpost_destroyed",
            ownerVillageId: targetVillageId,
            villageId: targetVillageId,
            payloadInt: attackV2Data.id
        })
    } else {
        LISTENFOR_EntityDisabled({
            snippet: "ed_invasion_attackV2_fountain_destroyed",
            ownerVillageId: targetVillageId,
            villageId: targetVillageId,
            disabledEntity: centralStructure,
            payloadInt: attackV2Data.id
        })
    }

    const targetVillage = GetVillageEntityFromID(targetVillageId)

    let placementSlotName = ""
    if (QUERY_HasWorldPlacementName(targetVillage)) {
        const villagePlacementName = QUERY_GetWorldPlacementName(targetVillage)
        placementSlotName = PLACEMENT_NAME_MAP[villagePlacementName]
    }

    let archetype = data.villageArchetype
    if (IsBossAttack(attackingFaction, strength)) {
        archetype = "badger:piglin_attack_boss_fob"
        OUTPUT_MapSetKeyValue(targetVillage, MAP_KEY.INVASION_SPECIAL, MAP_INVASION_SPECIAL.IS_BOSS)
        SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.underBossAttack, 1)
        OUTPUT_SetIconPath(targetVillage, invasionAttackV2Data.common.vars.underBossAttackIconPath)
    }
    if (placementSlotName) {
        OUTPUT_DebugLogInvasion(`Spawning OBs on slots '${placementSlotName}'.`)

        for (let i = 0; i < data.numberOfAttackingBases; ++i) {
            OUTPUT_PlacementStart()
            // Invasion slots for world-gen villages are already placed the proper distance away from the village.
            OUTPUT_PlacementSlotTag(placementSlotName)
            OUTPUT_PlacementAddExcludeProximityRule(GetAliveVillages(attackingFaction, BASE_SIZE_FOB_SMALL), 10, BSHARP_PLACEMENT.requireAll)
            if (OUTPUT_PlacementExecute()) {
                OUTPUT_DebugLogInvasion("Spawning invasion attack FOB")
                OUTPUT_DebugLogInvasion("~~~~ attackingFaction ~~~~ " + attackingFaction)
                OUTPUT_DebugLogInvasion("~~~~ archetype ~~~~ " + archetype)
                OUTPUT_DebugLogInvasion("~~~~ strength ~~~~ " + strength)

                OUTPUT_SpawnInvasionAttackFobV2(attackV2Data.id, archetype, BASE_SIZE_FOB_SMALL, QUERY_PlacementResultPosition())
            } else {
                OUTPUT_DebugLogInvasion("INVASION CRITICAL FAILURE: Could not spawn village attack OB - placement failed")
                DeltaVillageVariable(attackV2Data.villageId, invasionAttackV2Data.common.vars.obsGenerating, -1)
            }
        }
    } else {
        OUTPUT_DebugLogInvasion(`No slot found for this village.`)

        //We need a different icon for the attack faction boss invasion
        OUTPUT_SpawnInvasionAttackFobsV2AtDistance(attackV2Data.id, archetype, BASE_SIZE_FOB_SMALL, data.numberOfAttackingBases, invasionAttackV2Data.common.fobSpawnDistance)
    }

    // If the attack is activated within the grace period, this attack is treated as having just started
    // Otherwise, the attack is fast forwarded to behave as if it was active while the player(s) are away.
    if (GetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.gracePeriodActive)) {
        OUTPUT_DebugLogInvasion(`Invasion Attack V2: Activating new attack.`)

        //No cinematics for outpost
        if (villageSize !== VILLAGE_SIZE_PLAYER) {
            //Select and play correct cinematic
            if (IsThisAct1VillageAttack(targetVillageId)) {
                Act1VillageAttackIntroCinematic(targetVillageId)
            } else {
                const villageFaction = QUERY_GetFactionNameFromVillageID(targetVillageId)
                let cinematicData = invasionAttackV2Data.common.cinematics[villageFaction].spawn

                // HACK: (dsavage) If witches are enabled as part of the story, play the witch version
                const areWitchesEnabledAsPartOfTheStory = witchHutEnabled.defaultValue === 1 && !IsCurrentAct(ACTS.ACT_1A)
                if (areWitchesEnabledAsPartOfTheStory && cinematicData.cineId === "vil01_c10_ob_spawn") {
                    cinematicData.cineId = "vil01_c10w_ob_spawn"
                }

                const firstCandidate = FILTER_ByVillageID(QUERY_GetEntitiesWithTagFilter([cinematicData.centralStructureTag], []), targetVillageId)
                const player = GetClosestPlayer(firstCandidate)
                OUTPUT_TriggerCinematic(cinematicData.cineId, [firstCandidate, player])
            }
        }
    } else {
        OUTPUT_DebugLogInvasion(`Invasion Attack V2: Activating attack in progress.`)

        SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackWavesMissed, 1)

        // Adjust which wave we're on based on how much time has passed.
        while (timePast > 0) {
            DeltaVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackWavesSent, 1)

            const waveConfig = invasionAttackV2Data[attackingFaction].waveConfigData
            const currentWave = _GetCurrentWaveVariation(waveConfig, GetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackWavesSent), strength, targetVillageId)
            const waveWaitTime = currentWave.nextWaveTime === undefined ? _GetDefaultWaveTime(waveConfig, strength) : currentWave.nextWaveTime
            if (timePast >= waveWaitTime) {
                timePast -= waveWaitTime
            } else {
                SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.initialWaveDelay, waveWaitTime - timePast)
                break
            }
        }

        const currentWave = GetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackWavesSent)
        OUTPUT_DebugLogInvasion(`\t Current wave is adjusted to ${currentWave}`)

        // Damage the village according to how far ahead this attack is if we started late.
        const lateStartPercent = _GetLateStartPercent(targetVillageId)
        _CreateDamageRequest(attackV2Data.id, targetVillageId, lateStartPercent, false)
    }

    OUTPUT_MapSetKeyValue(targetVillage, MAP_KEY.INVASION_ATTACK, MAP_INVASION_ATTACK.ACTIVATED)

    // Confirm that at least one player is here
    PlayersParticipatingInVillageAttackCounter.Increment(targetVillageId)
})

SNIPPET_LocalTimer("lt_invasion_advanced_direct_reminder", (payload) => {
    Logv("Triggering advanced direct reminder vo")

    const village = GetVillageEntityFromID(payload.ownerVillageId)
    const localPlayers = FILTER_ByDistance(GetAllPlayers(), village, invasionAttackV2Data.common.advancedDirectReminderVicinity)

    if (!HasEntities(localPlayers)) {
        return
    }

    PlayPresentationActionToPlayers(invasionAttackV2Data.common.VO.villageAttackBattleView, localPlayers)

    LISTENFOR_LocalTimer({
        snippet: "lt_invasion_advanced_direct_nudge",
        ownerVillageId: payload.ownerVillageId,
        waitTime: invasionAttackV2Data.common.advancedDirectReminderDelay
    })
})

SNIPPET_LocalTimer("lt_invasion_advanced_direct_nudge", (payload) => {
    Logv("Triggering advanced direct reminder nudge")

    const village = GetVillageEntityFromID(payload.ownerVillageId)
    const localPlayers = FILTER_ByDistance(GetAllPlayers(), village, invasionAttackV2Data.common.advancedDirectReminderVicinity)

    if (!HasEntities(localPlayers)) {
        return
    }

    const feID = FOREACH_AllInstant(localPlayers)
    LISTENFOR_ForEachEntity({
        snippet: "fee_players_send_advanced_direct_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        id: feID
    })

    OUTPUT_SetGlobalVariable(invasionAttackV2Data.common.vars.gvAdvancedDirectReminder, 1)
})

SNIPPET_ForEachEntity("fee_players_send_advanced_direct_reminder", (player, _payload) => {
    OUTPUT_AnnouncePlayer("onboarding_village_attack_advanced_direct", "", player)
})

SNIPPET_InvasionAttackV2Abandoned("invasion_attackV2_abandoned", (attackV2Data) => {
    OUTPUT_DebugLogInvasion("Attack V2 Abandoned!!")

    const villageId = attackV2Data.villageId
    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackActive, 0)

    const village = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(village, MAP_KEY.INVASION_ATTACK, MAP_INVASION_ATTACK.ABANDONED)

    const percentComplete = QUERY_GetInvasionAttackV2PercentComplete(attackV2Data.id)
    _SetPercentCompleteOnAbandon(villageId, percentComplete)

    Logv(`\t player left at '${percentComplete}' percent complete`)

    if (IsMobAllianceVillage(villageId)) {
        PlayPresentationActionToClosePlayers(invasionAttackV2Data.common.VO.abandonMobAlliance, village, invasionAttackV2Data.common.presentationActionDistance)
    } else {
        if (!IsThisAct1VillageAttack(villageId)) {
            PlayPresentationActionToClosePlayers(invasionAttackV2Data.common.VO.abandonVillage, village, invasionAttackV2Data.common.presentationActionDistance)
        } else {
            PlayPresentationActionToClosePlayers(invasionAttackV2Data.common.VO.abandonVillageAct1, village, invasionAttackV2Data.common.presentationActionDistance)
        }
    }

    PlayersParticipatingInVillageAttackCounter.Decrement(villageId)
})

SNIPPET_InvasionAttackV2Reactivated("invasion_attackV2_reactivated", (attackV2Data) => {
    OUTPUT_DebugLogInvasion("Attack V2 Reactivated!!")

    const invasionV2Id = attackV2Data.id
    const villageId = attackV2Data.villageId

    PlayersParticipatingInVillageAttackCounter.Increment(villageId)

    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackActive, 1)
    DeltaVillageVariable(villageId, invasionAttackV2Data.common.telemetry.numTimesActivated, 1)

    const percentComplete = QUERY_GetInvasionAttackV2PercentComplete(attackV2Data.id)
    Logv(`\t player returned at '${percentComplete}' percent complete`)

    // Apply some damage to the village for the time that was missed.
    const damagePercent = percentComplete - _GetPercentCompleteSinceAbandon(villageId)

    const lateStartPercent = _GetLateStartPercent(villageId)
    Logv(`\t scaling with late start percent '${lateStartPercent}'`)
    const finalPercent = damagePercent * (1 - lateStartPercent)
    Logv(`\t final scaling value '${finalPercent}'`)

    _CreateDamageRequest(invasionV2Id, villageId, finalPercent, false)

    const village = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(village, MAP_KEY.INVASION_ATTACK, MAP_INVASION_ATTACK.ACTIVATED)
})

SNIPPET_InvasionAttackV2Overtime("invasion_attackV2_overtime", (attackV2Data) => {
    OUTPUT_DebugLogInvasion("Attack V2 Overtime!!")

    const invasionV2Id = attackV2Data.id
    const villageId = attackV2Data.villageId

    _HideSpawnPointCompassIcons(QUERY_GetInvasionAttackV2AttackingBases(invasionV2Id))

    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.overtimeStarted, 1)
    _SetupOvertimeObjective(invasionV2Id)

    if (IsThisAct1VillageAttack(villageId)) {
        const villageEntity = GetVillageEntityFromID(villageId)
        PlayPresentationActionToClosePlayers(invasionAttackV2Data.common.VO.villageAttackEndedAct1, villageEntity, invasionAttackV2Data.common.presentationActionDistance)
    }
})

SNIPPET_InvasionAttackV2DamageRequest("invasion_attackV2_damage_request", (attackV2Data, payload) => {
    OUTPUT_DebugLogInvasion("Attack V2 Damaging Village!!")
    Logi("Attack V2 Damaging Village!!")

    const invasionV2Id = attackV2Data.id
    const villageId = attackV2Data.villageId
    const hordeName = attackV2Data.factionName
    const strength = attackV2Data.strength
    const percent = payload.float

    // Clean up this listener so that it doesn't linger.
    Once()

    OUTPUT_DebugLogInvasion(`\tdamage scaled to ${percent}%`)
    const damageData = InvasionAttackV2ApplyDamage(villageId, hordeName, strength, percent)
    _SetInvasionAttackResult(villageId, damageData.affectedEntities)

    // Set the village to ignore VO and NISes in response to damage since scripted damage only applies when players are absent or just arriving
    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.scriptedDamageFlag, 1)
    SetVillageVariable(villageId, invasionAttackV2Data.common.telemetry.attackValue, damageData.attackDamage)
    SetVillageVariable(villageId, invasionAttackV2Data.common.telemetry.defenseValue, damageData.villageDefense)

    if (!IsPlayerOutpost(villageId)) {
        const centralStructure = GetVillageCentralStructures(villageId)
        OUTPUT_SetDisableByHealthCinematicState(centralStructure, false)
    }

    const missedWaves = GetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackWavesMissed)
    if (missedWaves > 0) {
        OUTPUT_DebugLogInvasion(`\t Missed ${missedWaves} attack waves. Spawning current wave...`)

        const damagedEntities = damageData.affectedEntities.damaged
        const destroyedEntities = damageData.affectedEntities.destroyed
        const overrideSpawnPoints = HasEntities(destroyedEntities) ? destroyedEntities : HasEntities(damagedEntities) ? damagedEntities : EMPTY_ENTITY_GROUP

        const customMultiplier = _GetCustomMultiplierValue(strength)
        AttackV2LaunchCurrentWaveAttack(invasionV2Id, overrideSpawnPoints, customMultiplier)
        SetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackWavesMissed, 0)
    }
})

const _GetCustomMultiplierValue = (strength) => {
    return strength === 4 ? 1 : -1
}

SNIPPET_InvasionAttackV2PostDamageRequest("invasion_attackV2_post_damage_request", (attackV2Data, payload) => {
    OUTPUT_DebugLogInvasion("Attack V2 Post Damaging Village!!")
    Logi("Attack V2 Post Damaging Village!!")

    const villageId = attackV2Data.villageId
    const endAttack = payload.int

    // Clean up this listener so that it doesn't linger.
    Once()

    // Restore VO and NIS functionality now that damage is applied.
    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.scriptedDamageFlag, 0)

    if (!IsPlayerOutpost(villageId)) {
        const centralStructure = GetVillageCentralStructures(villageId)
        OUTPUT_SetDisableByHealthCinematicState(centralStructure, true)
    }

    if (endAttack) {
        //Do this only for villages, not mob alliances
        if (!FACTION_MOB_ALLIANCES.includes(QUERY_GetFactionNameFromVillageID(villageId))) {
            _OnPostVillageDamage(villageId, _GetInvasionAttackResult(villageId))
        }

        OUTPUT_EndInvasionAttackV2(attackV2Data.id, false)
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_telemetry_clear_scripted_damage_vars",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 0,
        payloadInt: villageId
    })
})

SNIPPET_InvasionAttackV2Resolve("invasion_attackV2_resolve", (attackV2Data) => {
    OUTPUT_DebugLogInvasion("Attack V2 Resolve!!")

    const villageId = attackV2Data.villageId
    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackResolve, 1)
    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackActive, 0)
    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.underBossAttack, 0)

    let percentMod = 1
    if (GetVillageVariable(villageId, invasionAttackV2Data.common.vars.overtimeStarted)) {
        // If overtime started, that means players were in the village when the time ran out. In that case,
        // we can just apply damage with base overtime scaling.
        percentMod = invasionAttackV2Data.common.overtimeDamageScaling
    } else {
        // Otherwise, scale the damage based on how much of the fight has been missed.
        const lateStartPercent = _GetLateStartPercent(villageId)
        percentMod = (1 - _GetPercentCompleteSinceAbandon(villageId)) * (1 - lateStartPercent)
    }

    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackWavesMissed, 0)
    _CreateDamageRequest(attackV2Data.id, attackV2Data.villageId, percentMod, true)
})

// TODO: (dplourde) '_playerDefended' isn't needed. This should be removed from the snippet.
SNIPPET_InvasionAttackV2Ended("invasion_attackV2_ended", (attackV2Data, _playerDefended) => {
    OUTPUT_DebugLogInvasion("Attack V2 Ended!!")
    Logi("Attack V2 Ended!!")

    const villageId = attackV2Data.villageId

    if (GetVillageVariable(villageId, invasionAttackV2Data.common.vars.overtimeStarted)) {
        OUTPUT_RemoveDestroyEntitiesObjective(villageId)
    } else {
        // This gets cleaned up in overtime so we only need to do it here if overtime was skipped.
        _HideSpawnPointCompassIcons(QUERY_GetInvasionAttackV2AttackingBases(attackV2Data.id))
    }

    if (!IsThisAct1VillageAttack(villageId)) {
        const warningMessageTV = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [invasionAttackV2Data.common.tags.warningMessageTVTag], [])
        if (HasEntities(warningMessageTV)) {
            OUTPUT_DespawnEntities(warningMessageTV)
        }
    }

    const centralStructures = GetVillageCentralStructures(villageId)
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    if (!HasEntities(centralStructures)) {
        Loge(`Village Attack Ending Failed! Unable to query the central structure for village ${villageId}: ${villageFaction}. Was this a mob alliance that isn't unlocked yet?`)
        return
    }
    const centralStructure = RandomEntity(centralStructures)

    // Updating map keys early so it doesn't stomp occupation setup.
    const village = GetVillageEntityFromID(attackV2Data.villageId)
    const defenseSuccess = !(QUERY_IsVillageDestroyed(villageId) || QUERY_IsEntityDisabled(centralStructure))
    const playerPresent = GetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackActive) > 0

    const successKey = IsCurrentAct(ACTS.ACT_1A) ? MAP_INVASION_RECAP.ATTACK_SUCCESS_ACT1 : MAP_INVASION_RECAP.ATTACK_SUCCESS
    const mapValue = defenseSuccess ? successKey : MAP_INVASION_RECAP.ATTACK_FAILURE
    // only add the map invasion recap if not being stopped from a patch. If stopping an invasion from a patch, make sure to set
    // this global variable
    if (QUERY_GetGlobalVariable("patch_invasion_stopped") === 1) {
        OUTPUT_SetGlobalVariable("patch_invasion_stopped", 0)
    } else {
        OUTPUT_MapSetKeyValue(village, MAP_KEY.INVASION_RECAP, mapValue)
    }
    OUTPUT_MapRemoveKey(village, MAP_KEY.INVASION_ACTIVE)
    OUTPUT_MapRemoveKey(village, MAP_KEY.INVASION_ATTACK)
    OUTPUT_MapRemoveKey(village, MAP_KEY.ATTACKING_FACTION)
    OUTPUT_MapRemoveKey(village, MAP_KEY.STRENGTH)
    OUTPUT_MapRemoveKey(village, MAP_KEY.INVASION_SPECIAL)

    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.underBossAttack, 0)
    SetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackActive, 0)
    if (!IsMobAllianceVillage(villageId)) {
        OUTPUT_SetIconPath(village, invasionAttackV2Data.common.vars.villageIconPath)
    }

    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const isPlayerOutpost = villageSize === VILLAGE_SIZE_PLAYER
    if (defenseSuccess) {
        if (!IsMobAllianceVillage(villageId)) {
            OUTPUT_ResetBehavior(centralStructure) // re-enables healing in the village or outpost
        }

        if (playerPresent) {
            const remainingPiglins = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), TAGS_PIGLIN_MOB, [])
            OUTPUT_ApplyStatusEffectWithSource(remainingPiglins, centralStructure, STATUS_EFFECT.FEARED, 200)
            OUTPUT_RemoveLeash(remainingPiglins)
            OUTPUT_DebugLogInvasion("Fearing " + QUERY_GetEntitiesCount(remainingPiglins) + " piglins")

            //No cinematics for outpost
            if (isPlayerOutpost) {
                OUTPUT_Announce(invasionAttackV2Data.common.message.playerOutpostDefended, [])
                OUTPUT_SetInteractionState(GetPlayerOutpostStructure(villageId), true)
            } else {
                //Play a cinematic unless you just killed the boss or you've just earned the Witches trust
                const witchHutCount = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [witchUnlock.buildingTag], [])
                if (witchHutEnabled.defaultValue === 1 && HasEntities(witchHutCount) && IsCurrentAct(ACTS.ACT_2) && QUERY_GetTeamResource(TEAM_BLUE, witchUnlock.resource) < 1) {
                    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, witchUnlock.resource, 1, false)
                    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_witch", 1, false)
                    OUTPUT_DespawnEntities(remainingPiglins)
                } else if (!QUERY_GetGlobalVariable("hammerBossKilled_stopVillageCin")) {
                    //Pick relevant cine data
                    let cinematicData = invasionAttackV2Data.common.cinematics[villageFaction].saved
                    // HACK: (dsavage) If witches are enabled as part of the story, then swap out the village defense NIS with a witch-related one
                    const hasThePlayerUnlockedTheWitch = witchHutEnabled.defaultValue === 1 && !IsCurrentAct(ACTS.ACT_1A)
                    if (hasThePlayerUnlockedTheWitch && cinematicData.cineId === "vil01_c05_defended") {
                        cinematicData.cineId = "vil01_c05w_defended"
                    }
                    const firstCandidate = FILTER_ByVillageID(QUERY_GetEntitiesWithTagFilter([cinematicData.centralStructureTag], []), villageId)
                    const player = GetClosestPlayer(firstCandidate)
                    if (HasEntities(player)) {
                        if (IsThisAct1VillageAttack(villageId)) {
                            //Setting the variable outside EndAct1VillageAttack to signal that the attack is over
                            //So the next time the player enters the village, we proceed with completing the step
                            SetVillageVariable(villageId, "first_skirmish", 0)
                            SetVillageVariable(villageId, "vil01_c05_defended", 1) // To avoid having it play twice in case the player enters the village just as the village attack ends

                            Logv("Playing village defended act 1 VO")
                            PlayDelayedPresentationToAll(invasionAttackV2Data.common.VO.villageAttackSuccessfullyDefendedAct1, invasionAttackV2Data.common.villageAttackDefenseSuccessfullVODelay)
                        } else if (QUERY_GetGlobalVariable(invasionAttackV2Data.common.vars.gvAct2VillageDefendedVo) < 2) {
                            const timesPlayed = IncrementGlobal(invasionAttackV2Data.common.vars.gvAct2VillageDefendedVo)
                            Logv("Playing village defended VO part " + timesPlayed)
                            const voToPlay = timesPlayed <= 1 ? invasionAttackV2Data.common.VO.villageAttackSuccessfullyDefendedAct2First : invasionAttackV2Data.common.VO.villageAttackSuccessfullyDefendedAct2Second
                            PlayDelayedPresentationToAll(voToPlay, invasionAttackV2Data.common.villageAttackDefenseSuccessfullVODelay)
                        }
                        // `vil01_c10_ob_spawn`
                        OUTPUT_TriggerCinematic(cinematicData.cineId, [firstCandidate, player])
                        Logi(`#### OUTPUT_TriggerCinematic(${cinematicData.cineId}, [firstCandidate, player]) ####`)

                        //Start listening to despawn Piglins
                        LISTENFOR_CinematicFinished({
                            snippet: "cf_village_defended",
                            ownerVillageId: villageId,
                            cinematicName: cinematicData.cineId,
                            payloadEntities: remainingPiglins
                        })
                    }
                } else if (QUERY_GetGlobalVariable("hammerBossKilled_stopVillageCin")) {
                    //If you just killed the boss, don't play any cine, reset the global variable and despawn entities
                    OUTPUT_SetGlobalVariable("hammerBossKilled_stopVillageCin", 0)
                    OUTPUT_DespawnEntities(remainingPiglins) //Might be the wrong time to do this
                }
            }

            SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.HEAVY_CHEER, 30)
        } else {
            const remainingPiglins = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), TAGS_PIGLIN_MOB, [])
            OUTPUT_DespawnEntities(remainingPiglins)
        }
    } else if (!isPlayerOutpost) {
        SetupVillageOccupation(villageId, attackV2Data.factionName, attackV2Data.strength)
    }

    //Remove VA audio entity
    const villageAttackAudioEntity = GetAudioEntityForBase(villageId, "invasion_attack_music_entity")
    OUTPUT_DestroyEntities(villageAttackAudioEntity)

    //Remove any vicinityTV
    const vicinityTV = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [invasionAttackV2Data.common.overtimeVicinityTag], [])
    if (HasEntities(vicinityTV)) {
        OUTPUT_DespawnEntities(vicinityTV)
    }

    // Counter logic to support LFC
    {
        // Count regardless of outcome
        VillageAttacksResolvedCounter.Increment()

        const playerIsPresent = PlayersParticipatingInVillageAttackCounter.Get(villageId) > 0
        if (playerIsPresent) {
            // Increment attacks "fought" counter
            VillageAttacksFoughtCounter.Increment()

            // Increment "victory over piglins" counter if won
            if (defenseSuccess) {
                VictoriesOverPiglinsCounter.Increment()
                VillageAttacksDefendedCounter.Increment(attackV2Data.factionName)
            }
        }

        // If there were any players participating, reset
        PlayersParticipatingInVillageAttackCounter.Reset(villageId)
    }

    //Ping map
    PlayUIActionToAll("invasion_indicator@map_indicator")

    // Telemetry
    const timesActivated = GetVillageVariable(villageId, invasionAttackV2Data.common.telemetry.numTimesActivated)
    const scriptedDamageAttackValue = GetVillageVariable(villageId, invasionAttackV2Data.common.telemetry.attackValue)
    const scriptedDamageDefenseValue = GetVillageVariable(villageId, invasionAttackV2Data.common.telemetry.defenseValue)
    TelemetrySendInvasionAttackConcludedEvent(attackV2Data, defenseSuccess, playerPresent, timesActivated, scriptedDamageAttackValue, scriptedDamageDefenseValue)
})

SNIPPET_LocalTimer("lt_attackV2_grace_period_timer", (payload) => {
    const targetVillageId = payload.int
    SetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.gracePeriodActive, 0)

    OUTPUT_DebugLogInvasion(`Grace period timer expired for attack on village ${targetVillageId}`)
})

SNIPPET_CinematicFinished("cf_village_defended", (payload) => {
    const piglins = payload.entities
    const villageId = payload.ownerVillageId
    if (HasEntities(piglins)) {
        OUTPUT_DespawnEntities(piglins)
    }

    if (IsCurrentAct(ACTS.ACT_1A)) {
        SetVillageVariable(villageId, "first_skirmish", 0)
        EndAct1VillageAttack(villageId)
    }

    const factionName = QUERY_GetFactionNameFromVillageID(villageId)
    OUTPUT_Announce(invasionAttackV2Data.common.message[factionName].defended, [])

    StartHeartSequence(villageId)

    Once()
})

const StartHeartSequence = (villageId) => {
    let villageMobs = null

    switch (QUERY_GetFactionNameFromVillageID(villageId)) {
        case CULTURE_NAME_FOREST:
        case CULTURE_NAME_FROSTLANDS:
        case CULTURE_NAME_DRYLANDS:
        case CULTURE_NAME_WETLANDS:
        case CULTURE_NAME_GRASSLANDS:
        case CULTURE_NAME_BROKENLANDS:
        case CULTURE_NAME_FATEFUL_LAND:
        case CULTURE_NAME_JUNGLE:
        case CULTURE_NAME_MOUNTAIN:
            const villagerMobs = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["villager"], [])
            const illagerMobs = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["illager"], [])
            villageMobs = OPER_Union(villagerMobs, illagerMobs)
            break
        case MOB_ALLIANCE_NAME_SKELETON:
            villageMobs = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["mob_alliance_skeleton_mob"], [])
            break
        case MOB_ALLIANCE_NAME_SPIDER:
            villageMobs = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["mob_alliance_spider_mob"], [])
            break
        case MOB_ALLIANCE_NAME_CREEPER:
            villageMobs = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["mob_alliance_creeper_mob"], [])
            break
        case MOB_ALLIANCE_NAME_ZOMBIE:
            villageMobs = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["mob_alliance_zombie_mob"], [])
            break
    }

    _PlayHeartPresentation(villageId, villageMobs)
}

const _PlayHeartPresentation = (villageId, villageMobs) => {
    const numMobs = Math.round(Math.random() * 3 + 3)
    const heartMobs = QUERY_GetEntitiesCount(villageMobs) >= numMobs ? FILTER_RandomCount(villageMobs, numMobs) : villageMobs
    const remainingMobs = OPER_Difference(villageMobs, heartMobs)
    OUTPUT_TriggerPresentationEvent(heartMobs, "on_hearts")

    if (QUERY_GetEntitiesCount(remainingMobs) > 0) {
        LISTENFOR_LocalTimer({
            snippet: "lt_stagger_mob_hearts",
            ownerVillageId: villageId,
            waitTime: Math.round(Math.random() * 2 + 2),
            payloadEntities: remainingMobs
        })
    }
}

SNIPPET_LocalTimer("lt_stagger_mob_hearts", (payload) => {
    const villageId = payload.ownerVillageId
    const remainingMobs = payload.entities
    _PlayHeartPresentation(villageId, remainingMobs)
})

SNIPPET_InvasionAttackV2FobGenerated("invasion_attackV2_fob_generated", (fobVillageId, attackV2Data) => {
    _AttackFOBSmallV2(fobVillageId)

    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_fobV2_built",
        ownerVillageId: fobVillageId,
        villageId: fobVillageId,
        payloadInt: attackV2Data.id
    })
})

SNIPPET_VillageFinishedBuilding("vfb_fobV2_built", (_fobVillageId, payload) => {
    const invasionV2Id = payload.int
    const targetVillageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)

    DeltaVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.obsGenerating, -1)
})

SNIPPET_GlobalVariableChanged("gvc_attackV2_obs_generating", (_oldValue, newValue, payload) => {
    const invasionV2Id = payload.int
    const horde = QUERY_GetInvasionAttackV2FactionName(invasionV2Id)
    const strength = QUERY_GetInvasionAttackV2Strength(invasionV2Id)

    if (QUERY_IsInvasionOver(invasionV2Id)) {
        Once()
        return
    }

    if (newValue <= 0) {
        const targetVillageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)

        //Setup main structure listeners
        if (IsMobAllianceVillage(targetVillageId)) {
            LISTENFOR_HealthChanged({
                snippet: "hc_invasion_attack_allegiance_damage_medium",
                ownerVillageId: targetVillageId,
                includeTags: ["totem_unlock_mob_alliance"],
                normalizedThreshold: 0.66,
                triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                direction: HEALTH_DIRECTION.DAMAGE,
                payloadInt: invasionV2Id
            })
            LISTENFOR_HealthChanged({
                snippet: "hc_invasion_attack_allegiance_damage_low",
                ownerVillageId: targetVillageId,
                includeTags: ["totem_unlock_mob_alliance"],
                normalizedThreshold: 0.25,
                triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                direction: HEALTH_DIRECTION.DAMAGE,
                payloadInt: invasionV2Id
            })
        } else {
            LISTENFOR_HealthChanged({
                snippet: "hc_invasion_attack_fountain_damage_medium",
                ownerVillageId: targetVillageId,
                includeTags: ["fountain"],
                normalizedThreshold: 0.66,
                triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                direction: HEALTH_DIRECTION.DAMAGE,
                payloadInt: invasionV2Id
            })
            LISTENFOR_HealthChanged({
                snippet: "hc_invasion_attack_fountain_damage_low",
                ownerVillageId: targetVillageId,
                includeTags: ["fountain"],
                normalizedThreshold: 0.25,
                triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                direction: HEALTH_DIRECTION.DAMAGE,
                payloadInt: invasionV2Id
            })
        }

        OUTPUT_DebugLogInvasion(`Invasion Attack V2: Bases finished building for attack on village ${targetVillageId}. Starting wave attacks!`)
        OUTPUT_Announce(invasionAttackV2Data[horde].messaging.begin, [])

        // Set up timer to begin wave attacks.
        const initialWaveTimer = GetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.initialWaveDelay)
        OUTPUT_DebugLogInvasion(`\t initial wave timer set to: ${initialWaveTimer}`)

        const waveTimerName = GetVillageAttackWaveTimerName(targetVillageId)

        if (initialWaveTimer === 0) {
            const customMultiplier = _GetCustomMultiplierValue(strength)
            AttackV2LaunchNextWaveAttack(invasionV2Id, [], customMultiplier)
        } else {
            OUTPUT_SetNamedTimer(waveTimerName, initialWaveTimer)
        }

        LISTENFOR_Timer({
            snippet: "t_attackV2_next_wave_timer",
            payloadInt: invasionV2Id,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timerName: waveTimerName,
            threshold: 0
        })

        //Audio
        //TODO: Fix, shouldn't be spawning a new audio entity
        SetupAudioEntityForBase(targetVillageId, _GetInvasionAttackAudioEntity(invasionV2Id), false)
        _SetInvasionAttackAudioPhase(targetVillageId, INVASION_ATTACK_AUDIO.PHASES.INCOMING)
        SetVillageAudioDefault(targetVillageId) //Set audio for village to default

        //Setup Overtime TV
        const vicinityTV = OUTPUT_CreateVillageTriggerVolume(targetVillageId, invasionAttackV2Data.common.overtimeVicinityPadding, ["piglin", "mob"], [], ALLIANCE_ENEMY)
        OUTPUT_AddTag(vicinityTV, invasionAttackV2Data.common.overtimeVicinityTag)

        Once()
    }
})

SNIPPET_SpatialPartitionExited("spx_player_left_attack_warning", (triggerEntity, playerEntity) => {
    // This TV only triggers for players.

    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    if (IsThisAct1VillageAttack(villageId)) {
        HandlePlayerExitedVillageDuringAct1VillageAttack(playerEntity)
    }
    // Since this is set up on attack activation and removed when the attack ends, we only need to ignore triggers while in overtime.
    else if (!GetVillageVariable(villageId, invasionAttackV2Data.common.vars.overtimeStarted)) {
        OUTPUT_AnnouncePlayer("village_attack_abandon", [], playerEntity)
    }
})

SNIPPET_SpatialPartitionEntered("spe_player_returned_to_village_attack", (triggerEntity, playerEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    if (IsThisAct1VillageAttack(villageId)) {
        HandlePlayerEnteredVillageDuringAct1VillageAttack(playerEntity)
    } else {
        Once()
    }
})

const _TryPlayCentralStructureDamageVO = (villageId, presentationAction) => {
    const attackAbandoned = !GetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackActive)
    const scriptedDamageFlag = GetVillageVariable(villageId, invasionAttackV2Data.common.vars.scriptedDamageFlag)

    if (attackAbandoned || scriptedDamageFlag) {
        return
    }

    if (DoIfNotOnCooldown(invasionAttackV2Data.common.damageVoCooldown, presentationAction, villageId)) {
        const villageEntity = GetVillageEntityFromID(villageId)
        PlayPresentationActionToClosePlayers(presentationAction, villageEntity, invasionAttackV2Data.common.presentationActionDistance)
    }
}

SNIPPET_HealthChanged("hc_invasion_attack_allegiance_damage_medium", (_allegiance, _currentHealth, _previousHealth, payload) => {
    const invasionId = payload.int
    const villageId = payload.ownerVillageId

    if (QUERY_IsInvasionOver(invasionId)) {
        Once()
        return
    }

    _TryPlayCentralStructureDamageVO(villageId, invasionAttackV2Data.common.VO.allegianceMediumHp)
})

SNIPPET_HealthChanged("hc_invasion_attack_allegiance_damage_low", (_allegiance, _currentHealth, _previousHealth, payload) => {
    const invasionId = payload.int
    const villageId = payload.ownerVillageId

    if (QUERY_IsInvasionOver(invasionId)) {
        Once()
        return
    }
    _TryPlayCentralStructureDamageVO(villageId, invasionAttackV2Data.common.VO.allegianceLowHp)
})

SNIPPET_HealthChanged("hc_invasion_attack_fountain_damage_medium", (_fountain, _currentHealth, _previousHealth, payload) => {
    const invasionId = payload.int
    const villageId = payload.ownerVillageId

    if (QUERY_IsInvasionOver(invasionId)) {
        Once()
        return
    }
    _TryPlayCentralStructureDamageVO(villageId, invasionAttackV2Data.common.VO.fountainMediumHp)
})

SNIPPET_HealthChanged("hc_invasion_attack_fountain_damage_low", (_fountain, _currentHealth, _previousHealth, payload) => {
    const invasionId = payload.int
    const villageId = payload.ownerVillageId

    if (QUERY_IsInvasionOver(invasionId)) {
        Once()
        return
    }
    _TryPlayCentralStructureDamageVO(villageId, invasionAttackV2Data.common.VO.fountainLowHp)
})

SNIPPET_Timer("t_attackV2_next_wave_timer", (_timeLeft, payload) => {
    const invasionV2Id = payload.int

    if (QUERY_IsInvasionOver(invasionV2Id)) {
        Once()
        return
    }

    const villageId = QUERY_GetInvasionAttackV2VillageId(invasionV2Id)
    if (GetVillageVariable(villageId, invasionAttackV2Data.common.vars.overtimeStarted)) {
        OUTPUT_DebugLogInvasion(`Invasion Attack V2: Stopping wave attacks for overtime.`)
        Once()
        return
    }

    //For attack boss invasion, we only want to spawn a few piglins in the spawn locations that are away from the boss
    const strength = QUERY_GetInvasionAttackV2Strength(invasionV2Id)
    const customMultiplier = _GetCustomMultiplierValue(strength)
    AttackV2LaunchNextWaveAttack(invasionV2Id, [], customMultiplier)
})

SNIPPET_EntityDisabled("ed_invasion_attackV2_fountain_destroyed", (fountain, payload) => {
    const invasionV2Id = payload.int
    const targetVillageId = QUERY_GetVillageIDFromEntity(fountain)

    if (!QUERY_IsInvasionOver(invasionV2Id) && !GetVillageVariable(targetVillageId, invasionAttackV2Data.common.vars.attackResolve)) {
        OUTPUT_DebugLogInvasion(`Invasion Attack V2: Fountain destroyed for village ${targetVillageId}; Ending attack`)
        PlayStingerToClosePlayers(invasionAttackV2Data.common.stingers.playerFailed, GetVillageEntityFromID(targetVillageId))
        OUTPUT_EndInvasionAttackV2(invasionV2Id, false)
    }

    Once()
})

SNIPPET_VillageDestroyed("vd_invasion_attackV2_outpost_destroyed", (villageId, payload) => {
    const invasionV2Id = payload.int

    if (!QUERY_IsInvasionOver(invasionV2Id) && !GetVillageVariable(villageId, invasionAttackV2Data.common.vars.attackResolve)) {
        OUTPUT_DebugLogInvasion(`Invasion Attack V2: Outpost destroyed, ID ${villageId}; Ending attack`)
        PlayStingerToClosePlayers(invasionAttackV2Data.common.stingers.playerFailed, GetVillageEntityFromID(villageId))
        OUTPUT_EndInvasionAttackV2(invasionV2Id, false)
    }

    Once()
})

SNIPPET_InvasionDestroyEntitiesObjective("mc_attack_success", (villageId, _destroyedEntity, _numberRemaining, payload) => {
    OUTPUT_DebugLogInvasion(`Invasion Attack V2: Overtime piglins killed!`)

    const invasionV2Id = payload.int
    if (QUERY_IsInvasionOver(invasionV2Id)) {
        OUTPUT_DebugLogInvasion(`\t Stale listener for clearing mobs objective. Ignoring...`)
    } else {
        SetVillageAudioDefault(villageId)
        PlayStingerToClosePlayers(invasionAttackV2Data.common.stingers.playerSuccessful, GetVillageEntityFromID(villageId))
        OUTPUT_EndInvasionAttackV2(invasionV2Id, true)
    }

    Once()
})

SNIPPET_LocalTimer("lt_telemetry_clear_scripted_damage_vars", (payload) => {
    const villageId = payload.int
    SetVillageVariable(villageId, invasionAttackV2Data.common.telemetry.attackValue, 0)
    SetVillageVariable(villageId, invasionAttackV2Data.common.telemetry.defenseValue, 0)
})
