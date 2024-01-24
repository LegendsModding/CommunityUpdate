const occupationValCommon = {
    vicinityTVpadding: 200, // Padding in addition to the village bounds size.
    percentageToClear: 80,
    leashDistance: 160,
    leashEndDistance: 125,
    minOccupationPiglins: 30,
    cageTag: "mob_alliance_mob_cage",
    vicinityTvTag: "vicinity_tv",
    vars: {
        initialOccupation: "initial_occupation",
        cagesBuilt: "occupation_cages_built",
        clearPiglinsObjective: "piglins_cleared",
        repairedCentralStructureObjective: "central_structure_repaired",
        mobFreedFirstTime: "gv_mob_freed_first_time",
        mobOccupiedSeenFirstTime: "gv_mob_occupied_seen_first_time",
        villageFreedFirstTime: "gv_village_freed_first_time",
        villageOccupiedSeenFirstTime: "gv_village_occupied_seen_first_time",
        occupationDamage: "occupation_damage",
        bossOccupation: "boss_occupation_active"
    },
    VO: {
        mobFreedFirstTime: "mob_defended",
        mobOccupiedSeenFirstTime: "mob_occupied",
        villageFreedFirstTime: "village_post_defended",
        villageOccupiedSeenFirstTime: "village_occupation"
    },
    stingers: {
        occupationCleared: "BAE_mus_stinger_village_attack_free"
    }
}

const occupationValPiglins = {
    [FACTION_NAME_ATTACK]: {
        abandonedTickTime: 60,
        villageDamagePerTick: 400,
        occupyingUnits: [
            { unit: PIGLIN_ARCHETYPE.RUNT, count: 41, reinforce: 6, diminish: 4, unitTag: "runt" },
            { unit: PIGLIN_ARCHETYPE.WARBOAR, count: 10, reinforce: 2, diminish: 2, unitTag: "warboar" },
            { unit: PIGLIN_ARCHETYPE.ENGINEER, count: 0, reinforce: 0, diminish: 3, unitTag: "engineer" },
            { unit: PIGLIN_ARCHETYPE.MEDIC, count: 5, reinforce: 1, diminish: 1, unitTag: "medic" },
            { unit: PIGLIN_ARCHETYPE.SEEKER, count: 0, reinforce: 0, diminish: 5, unitTag: "seeker" },
            { unit: PIGLIN_ARCHETYPE.PIGMADILO, count: 2, reinforce: 0, diminish: 1, unitTag: "pigmadilo" }
        ]
    },
    [FACTION_NAME_DEFEND]: {
        abandonedTickTime: 60,
        villageDamagePerTick: 320,
        occupyingUnits: [
            { unit: PIGLIN_ARCHETYPE.RUNT, count: 36, reinforce: 5, diminish: 5, unitTag: "runt" },
            { unit: PIGLIN_ARCHETYPE.GRUNTER, count: 21, reinforce: 6, diminish: 2, unitTag: "grunter" },
            { unit: PIGLIN_ARCHETYPE.BRUISER, count: 9, reinforce: 1, diminish: 2, unitTag: "bruiser" },
            { unit: PIGLIN_ARCHETYPE.ENGINEER, count: 0, reinforce: 0, diminish: 0, unitTag: "engineer" },
            { unit: PIGLIN_ARCHETYPE.MEDIC, count: 5, reinforce: 0, diminish: 0, unitTag: "medic" },
            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, count: 1, reinforce: 0, diminish: 1, unitTag: "portalguard" }
        ]
    },
    [FACTION_NAME_OBSTACLE]: {
        abandonedTickTime: 60,
        villageDamagePerTick: 360,
        occupyingUnits: [
            { unit: PIGLIN_ARCHETYPE.RUNT, count: 16, reinforce: 4, diminish: 4, unitTag: "runt" },
            { unit: PIGLIN_ARCHETYPE.GRUNTER, count: 31, reinforce: 6, diminish: 5, unitTag: "grunter" },
            { unit: PIGLIN_ARCHETYPE.GRENADIER, count: 7, reinforce: 2, diminish: 2, unitTag: "grenadier" },
            { unit: PIGLIN_ARCHETYPE.ENGINEER, count: 2, reinforce: 0, diminish: 1, unitTag: "engineer" },
            { unit: PIGLIN_ARCHETYPE.SEEKER, count: 0, reinforce: 0, diminish: 5, unitTag: "seeker" },
            { unit: PIGLIN_ARCHETYPE.MEDIC, count: 4, reinforce: 1, diminish: 1, unitTag: "medic" },
            { unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER, count: 1, reinforce: 0, diminish: 1, unitTag: "piggo_lava_launcher" }
        ]
    },
    [FACTION_NAME_FROST]: {
        abandonedTickTime: 60,
        villageDamagePerTick: 360,
        occupyingUnits: [
            { unit: PIGLIN_ARCHETYPE.RUNT, count: 16, reinforce: 4, diminish: 4, unitTag: "runt" },
            { unit: PIGLIN_ARCHETYPE.GRUNTER, count: 31, reinforce: 6, diminish: 5, unitTag: "grunter" },
            { unit: PIGLIN_ARCHETYPE.GRENADIER, count: 7, reinforce: 2, diminish: 2, unitTag: "grenadier" },
            { unit: PIGLIN_ARCHETYPE.ENGINEER, count: 2, reinforce: 0, diminish: 1, unitTag: "engineer" },
            { unit: PIGLIN_ARCHETYPE.SEEKER, count: 0, reinforce: 0, diminish: 5, unitTag: "seeker" },
            { unit: PIGLIN_ARCHETYPE.MEDIC, count: 4, reinforce: 1, diminish: 1, unitTag: "medic" },
            { unit: PIGLIN_ARCHETYPE.LAVA_LAUNCHER, count: 1, reinforce: 0, diminish: 1, unitTag: "piggo_lava_launcher" }
        ]
    },
    [FACTION_NAME_DBB]: {
        abandonedTickTime: 60,
        villageDamagePerTick: 300,
        occupyingUnits: [{ unit: PIGLIN_ARCHETYPE.RUNT, count: 50, reinforce: 4, diminish: 4, unitTag: "runt" }]
    }
}

const occupationValMobs = {
    [MOB_ALLIANCE_NAME_CREEPER]: {
        id: "creeper",
        mobArchetype: "badger:mob_creeper",
        numberOfCages: 3,
        amountInCage: 2,
        messaging: {
            freeOccupation: "village_attack_occupation_free_creepers",
            beginOccupation: "village_attack_occupation_begin_creepers",
            abandonOccupation: "village_attack_occupation_abandon_creepers",
            endOccupationSequence: "village_attack_occupation_end_creepers_sequence",
            endOccupationWithRepairRemaining: "village_attack_occupation_end_repair_remaining_creepers",
            repairReminder: "village_attack_occupation_repair_reminder_creepers",
            repairMessage: "village_attack_occupation_repair_message_creepers"
        }
    },
    [MOB_ALLIANCE_NAME_SKELETON]: {
        id: "skeleton",
        mobArchetype: "badger:mob_skeleton",
        numberOfCages: 3,
        amountInCage: 3,
        messaging: {
            freeOccupation: "village_attack_occupation_free_skeletons",
            beginOccupation: "village_attack_occupation_begin_skeletons",
            abandonOccupation: "village_attack_occupation_abandon_skeletons",
            endOccupationSequence: "village_attack_occupation_end_skeletons_sequence",
            endOccupationWithRepairRemaining: "village_attack_occupation_end_repair_remaining_skeletons",
            repairReminder: "village_attack_occupation_repair_reminder_skeletons",
            repairMessage: "village_attack_occupation_repair_message_skeletons"
        }
    },
    [MOB_ALLIANCE_NAME_SPIDER]: {
        id: "spider",
        mobArchetype: "badger:mob_spider",
        numberOfCages: 3,
        amountInCage: 2,
        messaging: {
            freeOccupation: "village_attack_occupation_free_spiders",
            beginOccupation: "village_attack_occupation_begin_spiders",
            abandonOccupation: "village_attack_occupation_abandon_spiders",
            endOccupationSequence: "village_attack_occupation_end_spiders_sequence",
            endOccupationWithRepairRemaining: "village_attack_occupation_end_repair_remaining_spiders",
            repairReminder: "village_attack_occupation_repair_reminder_spiders",
            repairMessage: "village_attack_occupation_repair_message_spiders"
        }
    },
    [MOB_ALLIANCE_NAME_ZOMBIE]: {
        id: "zombie",
        mobArchetype: "badger:mob_zombie",
        numberOfCages: 3,
        amountInCage: 3,
        messaging: {
            freeOccupation: "village_attack_occupation_free_zombies",
            beginOccupation: "village_attack_occupation_begin_zombies",
            abandonOccupation: "village_attack_occupation_abandon_zombies",
            endOccupationSequence: "village_attack_occupation_end_zombie_sequence",
            endOccupationWithRepairRemaining: "village_attack_occupation_end_repair_remaining_zombies",
            repairReminder: "village_attack_occupation_repair_reminder_zombies",
            repairMessage: "village_attack_occupation_repair_message_zombies"
        }
    },
    [CULTURE_NAME_VILLAGERS]: {
        mobArchetype: "badger:villager_culture01",
        numberOfCages: 3,
        amountInCage: 2,
        messaging: {
            freeOccupation: "village_attack_occupation_free_villagers",
            beginOccupation: "village_attack_occupation_begin_villagers",
            abandonOccupation: "village_attack_occupation_abandon_villagers",
            endOccupationSequence: "village_attack_occupation_end_villagers_sequence",
            endOccupationWithRepairRemaining: "village_attack_occupation_end_repair_remaining_villagers",
            repairReminder: "village_attack_occupation_repair_reminder_villagers",
            repairMessage: "village_attack_occupation_repair_message_villagers"
        }
    }
}

const occupationObjectiveGlobalVars = [occupationValCommon.vars.clearPiglinsObjective, occupationValCommon.vars.repairedCentralStructureObjective]

const _GetOccupationReinforcementGvName = (unitArchetype) => {
    return "occupation_reinforcements_" + unitArchetype
}

const _AssignUnitsIntoReinforcementPools = (villageId, hordeName, units) => {
    OUTPUT_DebugLogInvasion(`Sorting despawned units into reinforcement pools.`)
    OUTPUT_DebugLogInvasion(`\t given total of ${QUERY_GetEntitiesCount(units)} units.`)

    const occupationUnitConfigs = occupationValPiglins[hordeName]

    // Filter piglins into occupation unit pools
    for (const unitConfig of occupationUnitConfigs.occupyingUnits) {
        const filteredPiglins = FILTER_ByTagFilter(units, ["mob", unitConfig.unitTag], ["occupying_piglin_despawning"])
        const filteredUnitCount = QUERY_GetEntitiesCount(filteredPiglins)

        const reinforcementGv = _GetOccupationReinforcementGvName(unitConfig.unit)
        DeltaVillageVariable(villageId, reinforcementGv, filteredUnitCount)

        OUTPUT_DebugLogInvasion(`\t Processing ${unitConfig.unit}: Current count is ${filteredUnitCount}`)

        units = OPER_Difference(units, filteredPiglins)
    }
}

const _CreateCages = (villageId) => {
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    const mobData = occupationValMobs[villageFaction]
    const cageCount = GetVillageVariable(villageId, occupationValCommon.vars.cagesBuilt)

    if (cageCount < mobData.numberOfCages) {
        const cagesDeck = BuildableCard("mobCage", mobData.numberOfCages - cageCount)
        DECK_MultiplyByMultipleRules(cagesDeck, [PlacementPreferenceCard(PLACEMENT_RANDOM)])
        OUTPUT_AppendNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, cagesDeck)

        SetVillageVariable(villageId, occupationValCommon.vars.cagesBuilt, mobData.numberOfCages)
    }
}

const _SpawnAttackHordeBossIfNeededForOccupation = (villageId) => {
    if (GetVillageVariable(villageId, occupationValCommon.vars.bossOccupation) < 1) {
        return false
    }

    const bossHealth = QUERY_GetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH)
    if (bossHealth === -1) {
        // boss has been defeated
        return false
    }

    const boss = QUERY_GetEntitiesWithTags(TAG_HAMMER_BOSS)
    if (HasEntities(boss)) {
        // boss already present
        return false
    }

    LISTENFOR_EntitySpawned({
        snippet: "es_attack_horde_spawned_occupation",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [TAG_HAMMER_BOSS]
    })

    SpawnEntitiesInVillage("badger:piglin_hammer_boss", 1, TEAM_ORANGE, villageId, 20, 50, FACTION_NAME_ATTACK)
    return true
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_HealthChanged({
            snippet: "hc_attack_boss_occupation_health_retreat_threshold",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [TAG_HAMMER_BOSS],
            normalizedThreshold: 0.75,
            triggerMode: HEALTH_TRIGGER_MODE.BELOW,
            direction: HEALTH_DIRECTION.DAMAGE
        })

        LISTENFOR_HealthChanged({
            snippet: "hc_attack_boss_occupation_health_retreat_threshold",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [TAG_HAMMER_BOSS],
            normalizedThreshold: 0.5,
            triggerMode: HEALTH_TRIGGER_MODE.BELOW,
            direction: HEALTH_DIRECTION.DAMAGE
        })

        LISTENFOR_HealthChanged({
            snippet: "hc_attack_boss_occupation_health_retreat_threshold",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: [TAG_HAMMER_BOSS],
            normalizedThreshold: 0.25,
            triggerMode: HEALTH_TRIGGER_MODE.BELOW,
            direction: HEALTH_DIRECTION.DAMAGE
        })
    }
})

SNIPPET_EntitySpawned("es_attack_horde_spawned_occupation", (bossEntity) => {
    Logi("@@@@ es_attack_horde_boss_spawned @@@@")
    OUTPUT_SetFactionByName(bossEntity, FACTION_NAME_ATTACK)
    const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
    OUTPUT_SetLeashWithReturnWhenNotTargeting(bossEntity, GetVillageEntityFromID(villageId), occupationValCommon.leashDistance, occupationValCommon.leashEndDistance)

    const maxHealth = QUERY_MaxHealth(bossEntity)
    let storedHealth = QUERY_GetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH)
    if (storedHealth === 0) {
        storedHealth = maxHealth
        OUTPUT_SetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH, maxHealth)
    } else if (storedHealth <= -1) {
        throw new Error("Attack horde boss was spawned but had already been defeated! This shouldnt happen!")
    }
    const currentHealthRatio = storedHealth / maxHealth
    const newHealthPercent = currentHealthRatio * 100
    OUTPUT_SetHealthPercent(bossEntity, newHealthPercent)
})

SNIPPET_HealthChanged("hc_attack_boss_occupation_health_retreat_threshold", (bossEntity, currentHealth, _previousHealth, _payload) => {
    Logi("@@@@ hc_attack_boss_occupation_health_retreat_threshold @@@@ " + currentHealth)
    const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
    if (GetVillageVariable(villageId, occupationValCommon.vars.bossOccupation) > 0) {
        //Revert to a normal occupation
        SetVillageVariable(villageId, occupationValCommon.vars.bossOccupation, 0)
        //Remove the boss
        OUTPUT_SetGlobalVariable(GV_ATTACK_HORDE_BOSS_HEALTH, currentHealth)
        const villageEntity = GetVillageEntityFromID(villageId)
        const fountains = GetVillageCentralStructures(villageId)
        // HACK: (dsavage) If witches are enabled as part of the story, play the witch version
        const cinematicId = witchHutEnabled.defaultValue === 1 ? hammerBossVal.cinematic.bossLoseWitches : hammerBossVal.cinematic.bossLose
        OUTPUT_TriggerCinematic(cinematicId, fountains)
        OUTPUT_DebugLogInvasion("============= Boss is running away from the occupation ======================")
        OUTPUT_DespawnEntities(bossEntity)

        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_OCCUPIED)
        OUTPUT_MapRemoveKey(villageEntity, MAP_KEY.INVASION_SPECIAL)

        //Activate the regular occupation objective
        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const piglins = FILTER_ByTagFilter(villageEntities, ["mob", "piglin"], ["occupying_piglin_despawning"])

        if (HasEntities(piglins)) {
            const piglinsToKill = Math.floor(QUERY_GetEntitiesCount(piglins) * (occupationValCommon.percentageToClear / 100))
            if (piglinsToKill > 0) {
                OUTPUT_DebugLogInvasion(`Setting up Destroy Entities Objective with ${piglinsToKill}`)
                OUTPUT_SetupDestroyEntitiesObjective(villageId, piglins, piglinsToKill, FACTION_NAME_ATTACK)
            } else {
                OUTPUT_DebugLogInvasion("Piglins already cleared")
                SetVillageVariable(villageId, occupationValCommon.vars.clearPiglinsObjective, 1)
            }

            LISTENFOR_LocalTimer({
                snippet: "lt_send_occupying_piglins_back",
                ownerVillageId: villageId,
                waitTime: 30
            })
        } else {
            OUTPUT_DebugLogInvasion("No more Piglins after boss. Occupation is cleared")
            SetVillageVariable(villageId, occupationValCommon.vars.clearPiglinsObjective, 1)
        }
    }

    Once()
})

const _SpawnPiglinsForOccupation = (villageId, hordeName) => {
    OUTPUT_DebugLogInvasion(`Village Occupation: Spawning occupying piglins for village ${villageId}`)

    const hordeOccupationData = occupationValPiglins[hordeName]

    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    let piglins = FILTER_ByTagFilter(villageEntities, ["mob", "piglin"], ["occupying_piglin_despawning"])

    for (const config of hordeOccupationData.occupyingUnits) {
        const reinforcementGv = _GetOccupationReinforcementGvName(config.unit)
        const reinforcementCount = GetVillageVariable(villageId, reinforcementGv)
        const newPiglins = SpawnEntitiesInVillage(config.unit, reinforcementCount, TEAM_ORANGE, villageId, 40, 50, hordeName)

        OUTPUT_DebugLogInvasion(`\t spawned ${reinforcementCount} ${config.unit}`)

        SetVillageVariable(villageId, reinforcementGv, 0)

        piglins = OPER_Union(piglins, newPiglins)
    }

    // Override faction so that it matches the horde occupying the village, and not the village's faction.
    if (HasEntities(piglins)) {
        OUTPUT_SetFactionByName(piglins, hordeName)
        // Old leashes carried over from village attacks will get stomped by this new request.
        OUTPUT_SetLeashWithReturnWhenNotTargeting(piglins, GetVillageEntityFromID(villageId), occupationValCommon.leashDistance, occupationValCommon.leashEndDistance)
    }

    if (_SpawnAttackHordeBossIfNeededForOccupation(villageId)) {
        SetVillageAudioDefault(villageId, "occupied")
        // Skip kill count objective set up since we spawned the boss.
        return
    }

    const piglinsToKill = Math.floor(QUERY_GetEntitiesCount(piglins) * (occupationValCommon.percentageToClear / 100))
    if (piglinsToKill > 0) {
        OUTPUT_DebugLogInvasion(`Setting up Destroy Entities Objective with ${piglinsToKill}`)
        OUTPUT_SetupDestroyEntitiesObjective(villageId, piglins, piglinsToKill, hordeName)
        SetVillageAudioDefault(villageId, "occupied")
    } else {
        OUTPUT_DebugLogInvasion("Piglins already cleared")
        SetVillageVariable(villageId, occupationValCommon.vars.clearPiglinsObjective, 1)
        OUTPUT_SetupDestroyEntitiesObjective(villageId, EMPTY_ENTITY_GROUP, 0, hordeName)
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_send_occupying_piglins_back",
        ownerVillageId: villageId,
        waitTime: 30
    })
}

SNIPPET_LocalTimer("lt_send_occupying_piglins_back", (payload) => {
    const villageId = payload.ownerVillageId
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const piglins = FILTER_ByTagFilter(villageEntities, ["mob", "piglin"], ["occupying_piglin_despawning"])
    const centralStructure = GetVillageCentralStructures(villageId)

    if (QUERY_GetEntitiesCount(centralStructure) > 0 && QUERY_GetEntitiesCount(piglins) > 0) {
        OUTPUT_MoveAttackPosition(piglins, RandomEntity(centralStructure), 20, CALLBACK_NONE)

        LISTENFOR_LocalTimer({
            snippet: "lt_send_occupying_piglins_back",
            ownerVillageId: villageId,
            waitTime: 30
        })
    }
})

const _DespawnPiglinsForOccupation = (villageId) => {
    if (GetVillageVariable(villageId, occupationValCommon.vars.bossOccupation) < 1) {
        OUTPUT_RemoveDestroyEntitiesObjective(villageId)
    }

    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const occupyingPiglins = FILTER_ByTagFilter(villageEntities, ["mob", "piglin"], ["occupying_piglin_despawning"])

    if (!HasEntities(occupyingPiglins)) {
        return
    }

    const piglinFaction = QUERY_GetFactionNameFromEntity(RandomEntity(occupyingPiglins))
    _AssignUnitsIntoReinforcementPools(villageId, piglinFaction, occupyingPiglins)

    // Temp solution for trigger volume's enter/exit events firing multiple times during save/load.
    OUTPUT_AddTag(occupyingPiglins, "occupying_piglin_despawning")

    OUTPUT_DespawnEntities(occupyingPiglins)
}

const _ResetObjectiveGlobals = (villageId) => {
    for (const globalVar of occupationObjectiveGlobalVars) {
        OUTPUT_DebugLogInvasion(`Resetting global var ${globalVar} for occupation on village ${villageId}`)
        SetVillageVariable(villageId, globalVar, 0)
    }
}

const _ActivateAbandonedTimer = (villageId, hordeName) => {
    const hordeOccupationData = occupationValPiglins[hordeName]
    OUTPUT_SetNamedTimer("occupation_reinforcement_timer" + villageId, hordeOccupationData.abandonedTickTime)
    OUTPUT_DebugLogInvasion(`Village Occupation: Starting reinforcement timer for Village ${villageId}`)
}

const _DeactivateAbandonedTimer = (villageId) => {
    OUTPUT_DeleteNamedTimer("occupation_reinforcement_timer" + villageId)
    OUTPUT_DebugLogInvasion(`Village Occupation: Stopping reinforcement timer for Village ${villageId}`)
}

const _InitReinforcementPools = (villageId, hordeName, attackStrength) => {
    // Setup initial reinforcements for occupation.
    // eslint-disable-next-line @typescript-eslint/camelcase, no-undef
    if (invasionOccupation_initialUnits[hordeName] === undefined || invasionOccupation_initialUnits[hordeName][attackStrength] === undefined) {
        // Logging twice so it shows up in the invasion log, but also generally for QA and other scripters.
        const errorMessage = `Initial occupation unit config isn't set up for faction '${hordeName}' and attack strength '${attackStrength}'`
        Loge(errorMessage)
        OUTPUT_DebugLogInvasion(errorMessage)
        return
    }

    // eslint-disable-next-line @typescript-eslint/camelcase, no-undef
    const initialUnitConfig = invasionOccupation_initialUnits[hordeName][attackStrength]

    const occupationPiglinData = occupationValPiglins[hordeName]
    for (const unitConfig of occupationPiglinData.occupyingUnits) {
        const initialCount = initialUnitConfig[unitConfig.unit]
        if (initialCount === undefined) {
            const errorMessage = `Initial occupation unit config for '${hordeName}' and strength '${attackStrength}' has no data for unit type ${unitConfig.unit}`
            Loge(errorMessage)
            OUTPUT_DebugLogInvasion(errorMessage)
            return
        }

        const gvName = _GetOccupationReinforcementGvName(unitConfig.unit)
        SetVillageVariable(villageId, gvName, initialCount)
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupVillageOccupation = (villageId, hordeName, attackStrength) => {
    OUTPUT_DebugLogInvasion(`Village Occupation: Setting up village occupation for village ${villageId}.`)

    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    const mobData = occupationValMobs[villageFaction]

    if (!mobData) {
        OUTPUT_DebugLogInvasion(`Could not retrieve mob archetype for faction '${villageFaction}'...`)
        return
    }

    const hasStartedAct2 = QUERY_GetGlobalVariable(GV_STARTED_ACT_2)
    if (hasStartedAct2) {
        IncrementGlobal(ONBOARDING_GLOBALS.START_VILLAGE_OCCUPIED)
    }

    // Initial setup that can persist between occupations.
    if (DoOnce(GetVillageVariableKey(villageId, occupationValCommon.vars.initialOccupation))) {
        // Set up listeners for cages that will appear.

        if (villageFaction === CULTURE_NAME_VILLAGERS && hasStartedAct2 && witchHutEnabled.defaultValue === 1) {
            SetupMobCages(villageId, occupationValCommon.cageTag, MOB_ARCHETYPE.WITCH, mobData.amountInCage)
        } else {
            SetupMobCages(villageId, occupationValCommon.cageTag, mobData.mobArchetype, mobData.amountInCage)
        }

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_occupation_track_cage_destruction",
            ownerVillageId: villageId,
            includeTags: [occupationValCommon.cageTag],
            villageId: villageId
        })

        // Listeners for GVs - Checking occupation status
        for (const globalVar of occupationObjectiveGlobalVars) {
            LISTENFOR_GlobalVariableChanged({
                snippet: "gvc_check_occupation_complete",
                ownerVillageId: villageId,
                variableName: GetVillageVariableKey(villageId, globalVar),
                payloadString: hordeName
            })
        }

        LISTENFOR_Timer({
            snippet: "nt_occupation_reinforcement_timer",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timerName: "occupation_reinforcement_timer" + villageId,
            threshold: 0,
            payloadInt: villageId,
            payloadString: hordeName
        })
    }

    OUTPUT_SetVillageOccupied(villageId, true, hordeName)

    if (IsMobAllianceVillage(villageId)) {
        IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.MOB_ALLIANCE_OCCUPIED_PROGRESS.globalVariable)
    } else {
        IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.VILLAGE_OCCUPIED_PROGRESS.globalVariable)
    }

    SetVillageVariable(villageId, occupationValCommon.vars.cagesBuilt, 0)

    // Initial setup depending on if the player is at the village already or not (since we'll miss the enter/exit triggers)
    if (QUERY_VillagePlayerPresenceCount(villageId)) {
        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const piglins = FILTER_ByTagFilter(villageEntities, ["mob", "piglin"], [])
        if (QUERY_GetEntitiesCount(piglins) < occupationValCommon.minOccupationPiglins) {
            Logi("Insufficient number of piglins to start an occupation. Surging reinforcement pools.")
            _InitReinforcementPools(villageId, hordeName, attackStrength)
        }
    } else {
        _CreateCages(villageId)
        _ActivateAbandonedTimer(villageId, hordeName)
        _InitReinforcementPools(villageId, hordeName, attackStrength)
        OUTPUT_Announce(mobData.messaging.beginOccupation, [])
        if (IsThisAct1VillageAttack(villageId)) {
            HandleAct1VillageAttackEndedWhilePlayerWasAway()
        }
    }

    // TODO: RefreshAllSpawnersConfig' requires the mob id because the tags are mob-specific. This can potentially be
    // cleaned up when the mob alliance tags get a pass.
    if (IsMobAllianceVillage(villageId)) {
        OUTPUT_AddOrSubtractObjectiveProgress("objectives.alliancesSafe", -1)
        const mobId = mobData.id
        if (IsValidMobAllianceId(mobId)) {
            RefreshAllSpawnersConfig(mobId)
            // Despawn exising mobs, but avoid world and player mobs.
            const mobs = QUERY_GetEntitiesWithTagFilter([mobId], ["world_mob"])
            const despawnMobs = OPER_Difference(mobs, FILTER_ByHasCreator(mobs))
            if (HasEntities(despawnMobs)) {
                OUTPUT_DespawnEntities(despawnMobs)
            }
        } else {
            Logv(`Village ${villageId} is a mob alliance village, but was given bad id ${mobId}.`)
        }
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2)) {
        OUTPUT_AddOrSubtractObjectiveProgress("objectives.villagesSafe", -1)
    }

    const vicinityTV = OUTPUT_CreateVillageTriggerVolume(villageId, occupationValCommon.vicinityTVpadding, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    OUTPUT_AddTag(vicinityTV, occupationValCommon.vicinityTvTag)
    LISTENFOR_PresenceEntered({
        snippet: "pe_setup_occupation_state",
        ownerVillageId: villageId,
        triggerEntity: vicinityTV,
        threshold: 1,
        payloadString: hordeName
    })

    LISTENFOR_PresenceExited({
        snippet: "px_setup_occupation_state",
        ownerVillageId: villageId,
        triggerEntity: vicinityTV,
        threshold: 0,
        payloadString: hordeName
    })

    //Repair message
    const insideVillageTV = OUTPUT_CreateVillageTriggerVolume(villageId, 0, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_village_repair_message",
        ownerVillageId: villageId,
        triggerEntity: insideVillageTV
    })

    LISTENFOR_SpatialPartitionExited({
        snippet: "spx_village_repair_message",
        ownerVillageId: villageId,
        triggerEntity: insideVillageTV
    })

    const playerMessageTV = OUTPUT_CreateVillageTriggerVolume(villageId, occupationValCommon.vicinityTVpadding, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionExited({
        snippet: "spx_player_left_occupation_warning",
        ownerVillageId: villageId,
        triggerEntity: playerMessageTV
    })

    // Listeners for occupation objectives
    LISTENFOR_InvasionDestroyEntitiesObjective({
        snippet: "deo_piglins_cleared_objective",
        ownerVillageId: villageId,
        villageId: villageId,
        threshold: 0
    })

    const centralStructure = GetVillageCentralStructures(villageId)
    LISTENFOR_EntityEnabled({
        snippet: "ee_central_structure_repaired_objective",
        ownerVillageId: villageId,
        villageId: villageId,
        enabledEntity: centralStructure
    })

    LISTENFOR_EntityDisabled({
        snippet: "ed_central_structure_destroyed",
        ownerVillageId: villageId,
        villageId: villageId,
        disabledEntity: centralStructure
    })

    // Disabling cinematic until the occupation ends so it doesn't repeat while fighting in the village.
    OUTPUT_SetDisableByHealthCinematicState(centralStructure, false)

    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_OCCUPIED)
}

const AnnounceVillageDestroyed = (villageId) => {
    //Free the village/MA messaging
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    const mobData = occupationValMobs[villageFaction]
    OUTPUT_Announce(mobData.messaging.freeOccupation, [])
}

SNIPPET_PresenceEntered("pe_setup_occupation_state", (triggerEntity, _count, payload) => {
    const hordeName = payload.string
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    OUTPUT_DebugLogInvasion(`Village Occupation: Player presence detected in village ${villageId}. Setting up occupation state.`)

    _SpawnPiglinsForOccupation(villageId, hordeName)

    DistributeVillageDamageCommon(villageId, hordeName, GetVillageVariable(villageId, occupationValCommon.vars.occupationDamage))
    SetVillageVariable(villageId, occupationValCommon.vars.occupationDamage, 0)

    _DeactivateAbandonedTimer(villageId)

    //Free the village/MA messaging
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)

    //VO
    if (villageFaction === CULTURE_NAME_VILLAGERS) {
        if (DoOnce(occupationValCommon.vars.villageOccupiedSeenFirstTime)) {
            PlayPresentationActionToAll(occupationValCommon.VO.villageOccupiedSeenFirstTime)
        }
    } else {
        if (DoOnce(occupationValCommon.vars.mobOccupiedSeenFirstTime)) {
            PlayPresentationActionToAll(occupationValCommon.VO.mobOccupiedSeenFirstTime)
        }
    }
})

SNIPPET_PresenceExited("px_setup_occupation_state", (triggerEntity, _count, payload) => {
    const hordeName = payload.string
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    OUTPUT_DebugLogInvasion(`Village Occupation: No player presence in village ${villageId}. Resetting occupation state.`)

    // Reset any cages that were opened.
    _CreateCages(villageId)

    // Remove occupying piglins so they can be reset when player(s) return.
    _DespawnPiglinsForOccupation(villageId)

    // Destroy the central structure of the village in case it was repaired.
    const centralSctructure = GetVillageCentralStructures(villageId)
    OUTPUT_DamageEntitiesByPercentage(centralSctructure, 100)

    _ResetObjectiveGlobals(villageId)

    _ActivateAbandonedTimer(villageId, hordeName)
})

SNIPPET_SpatialPartitionEntered("spe_village_repair_message", (triggerEntity, playerEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    const mobData = occupationValMobs[villageFaction]
    const centralStructure = RandomEntity(GetVillageCentralStructures(villageId))

    if (QUERY_IsVillageOccupied(villageId)) {
        return
    }

    if (QUERY_IsEntityDisabled(centralStructure)) {
        OUTPUT_AnnouncePlayer(mobData.messaging.repairMessage, [], playerEntity)
    } else {
        OUTPUT_DespawnEntities(triggerEntity)
    }
})

SNIPPET_SpatialPartitionExited("spx_village_repair_message", (triggerEntity, _playerEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const centralStructure = RandomEntity(GetVillageCentralStructures(villageId))

    if (!QUERY_IsEntityDisabled(centralStructure)) {
        OUTPUT_DespawnEntities(triggerEntity)
    }
})

SNIPPET_SpatialPartitionExited("spx_player_left_occupation_warning", (triggerEntity, playerEntity) => {
    // This TV is set up to only respond to players.

    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)

    // If occupation isn't clear, tell player to go back and free the village.
    if (QUERY_IsVillageOccupied(villageId)) {
        const mobData = occupationValMobs[villageFaction]
        if (!IsThisAct1VillageAttack(villageId)) {
            OUTPUT_AnnouncePlayer(mobData.messaging.abandonOccupation, [], playerEntity)
        }
        return
    }

    const centralStructures = GetVillageCentralStructures(villageId)
    if (!HasEntities(centralStructures)) {
        Loge(`Village Occupation: Unable to query the central structure for village ${villageId}: ${villageFaction}. Was this a mob alliance that isn't unlocked yet?`)
        return
    }
    const centralStructure = RandomEntity(centralStructures)

    // Otherwise, if they forgot to repair, remind them.
    if (QUERY_IsEntityDisabled(centralStructure)) {
        const mobData = occupationValMobs[villageFaction]
        OUTPUT_AnnouncePlayer(mobData.messaging.repairReminder, [], playerEntity)
        return
    }

    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

SNIPPET_InvasionDestroyEntitiesObjective("deo_piglins_cleared_objective", (villageId, _destroyedEntity, _numberRemaining, _payload) => {
    if (!QUERY_IsVillageOccupied(villageId)) {
        return
    }

    OUTPUT_DebugLogInvasion(`Village Occupation: Village ${villageId} piglins have been cleared out!`)
    SetVillageVariable(villageId, occupationValCommon.vars.clearPiglinsObjective, 1)

    if (IsThisAct1VillageAttack(villageId)) {
        HandlePlayerDefeatsAllPiglinsAfterOccupation(villageId)
    }

    //Fear remaining Piglins
    const centralStructure = RandomEntity(GetVillageCentralStructures(villageId))
    const remainingPiglins = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["mob", "piglin"], [])
    OUTPUT_ApplyStatusEffectWithSource(remainingPiglins, centralStructure, STATUS_EFFECT.FEARED, 200)
    OUTPUT_RemoveLeash(remainingPiglins)
    OUTPUT_DebugLogInvasion("Fearing " + QUERY_GetEntitiesCount(remainingPiglins) + " piglins")

    LISTENFOR_LocalTimer({
        snippet: "lt_delete_occupying_piglins",
        ownerVillageId: villageId,
        waitTime: 45,
        payloadEntities: remainingPiglins
    })

    const isCentralStructureDisabled = QUERY_IsEntityDisabled(centralStructure)

    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    const mobData = occupationValMobs[villageFaction]

    if (isCentralStructureDisabled) {
        OUTPUT_Announce(mobData.messaging.endOccupationWithRepairRemaining, [])
    }

    // Adjust the music state depending on the state of the fountain.
    if (GetVillageVariable(villageId, occupationValCommon.vars.repairedCentralStructureObjective) === 1) {
        SetVillageAudioDefault(villageId, "default")
    } else {
        SetVillageAudioDefault(villageId, "damaged")
    }
})

SNIPPET_LocalTimer("lt_delete_occupying_piglins", (payload) => {
    const piglins = payload.entities
    OUTPUT_DestroyEntities(piglins)
})

SNIPPET_EntityEnabled("ee_central_structure_repaired_objective", (_enabledEntity, payload) => {
    const villageId = payload.ownerVillageId

    if (!QUERY_IsVillageOccupied(villageId)) {
        return
    }

    Logi(`Village Occupation: Village ${villageId} central structure is repaired!`)
    SetVillageVariable(villageId, occupationValCommon.vars.repairedCentralStructureObjective, 1)

    // Set the fountain back to default music state if the piglins are already defeated.
    if (GetVillageVariable(villageId, occupationValCommon.vars.clearPiglinsObjective) === 1) {
        SetVillageAudioDefault(villageId, "default")
    }
})

SNIPPET_EntityDisabled("ed_central_structure_destroyed", (_disabledEntity, payload) => {
    const villageId = payload.ownerVillageId

    if (!QUERY_IsVillageOccupied(villageId)) {
        return
    }

    Logi(`Village Occupation: Village ${villageId} central structure was disabled`)
    SetVillageVariable(villageId, occupationValCommon.vars.repairedCentralStructureObjective, 0)
})

SNIPPET_GlobalVariableChanged("gvc_check_occupation_complete", (_oldValue, newValue, payload) => {
    if (newValue === 0) {
        return
    }

    const villageId = payload.ownerVillageId
    for (const globalVar of occupationObjectiveGlobalVars) {
        if (!GetVillageVariable(villageId, globalVar)) {
            return
        }
    }

    FinishVillageOccupation(villageId, payload.string)
})

const FinishVillageOccupation = (villageId, hordeName) => {
    OUTPUT_DebugLogInvasion(`=========== Village Occupation Complete! ==============`)

    const villageEntity = GetVillageEntityFromID(villageId)

    // Change state
    OUTPUT_SetVillageOccupied(villageId, false, hordeName)

    if (IsMobAllianceVillage(villageId)) {
        IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.MOB_ALLIANCE_CLEARED_PROGRESS.globalVariable)
        OUTPUT_AddOrSubtractObjectiveProgress("objectives.alliancesSafe", 1)
    } else {
        IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.VILLAGE_CLEARED_PROGRESS.globalVariable)
        if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2)) {
            OUTPUT_AddOrSubtractObjectiveProgress("objectives.villagesSafe", 1)
        }
    }

    // Reset objectives
    OUTPUT_RemoveDestroyEntitiesObjective(villageId)
    _ResetObjectiveGlobals(villageId)

    // Destroy Remaining Cages
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const cages = FILTER_ByTagFilter(villageEntities, [occupationValCommon.cageTag], [])
    OUTPUT_DestroyEntities(cages)

    // Remove vicinity TV
    const tv = FILTER_ByTagFilter(villageEntities, [occupationValCommon.vicinityTvTag], [])
    OUTPUT_DespawnEntities(tv)

    _DeactivateAbandonedTimer(villageId)

    //Central structure state
    const centralStructure = RandomEntity(GetVillageCentralStructures(villageId))
    OUTPUT_SetDisableByHealthCinematicState(centralStructure, true)

    const isCentralStructureDisabled = QUERY_IsEntityDisabled(centralStructure)

    //Messaging
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    const mobData = occupationValMobs[villageFaction]

    if (isCentralStructureDisabled) {
        OUTPUT_Announce(mobData.messaging.endOccupationWithRepairRemaining, [])
    } else {
        const shouldWeAnnounceFastTravel = GetVillageVariable(villageId, GV_FAST_TRAVELLED_ENABLED_AT_VILLAGE) === 0
        const nearbyPlayers = GetNearbyPlayers(villageEntity)
        ForEachEntities(nearbyPlayers, (playerEntity) => {
            OUTPUT_AnnounceSequencePlayer(mobData.messaging.endOccupationSequence, playerEntity)
            //Only show this message if we haven't visited it  before AND its a village, not a mob homestead
            if (shouldWeAnnounceFastTravel && villageFaction === CULTURE_NAME_VILLAGERS) {
                OUTPUT_AnnouncePlayer("village_unlock_fast_travel", [], playerEntity)
            }
        })
        SetVillageVariable(villageId, GV_FAST_TRAVELLED_ENABLED_AT_VILLAGE, 1)

        PlayStingerToClosePlayers(occupationValCommon.stingers.occupationCleared, GetVillageEntityFromID(villageId))

        OUTPUT_SetFastTravelEnabled(villageId, true)
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.ENABLED)

        SetVillageTemporaryBehavior(villageId, VILLAGE_TEMP_BEHAVIOR_STATE.CHEER, 12)
    }

    if (IsMobAllianceVillage(villageId)) {
        // Special handling for Mob Alliance villages
        const mobId = occupationValMobs[villageFaction].id
        RefreshAllSpawnersConfig(mobId)

        if (!IsMobAllianceUnlocked(mobId)) {
            if (!isCentralStructureDisabled) {
                UnlockMobAlliance(mobId)
            }
        }

        // VO
        if (DoOnce(occupationValCommon.vars.mobFreedFirstTime)) {
            PlayPresentationActionToAll(occupationValCommon.VO.mobFreedFirstTime)

            LISTENFOR_PlayerExitedVillage({
                snippet: "pev_exited_mob_alliance_spawner_reminder",
                ownerVillageId: villageId,
                villageId: villageId
            })

            LISTENFOR_PlayerEnteredVillage({
                snippet: "pev_entered_mob_alliance_spawner_reminder",
                ownerVillageId: villageId,
                villageId: villageId
            })

            LISTENFOR_LocalTimer({
                snippet: "lt_repair_mob_alliance_spawner_reminder",
                ownerVillageId: villageId,
                waitTime: 15,
                payloadInt: villageId
            })
        }
    } else {
        // Special handling for Villager villages
        OUTPUT_ResetBehavior(centralStructure) // re-enable village healing

        // VO
        if (DoOnce(occupationValCommon.vars.villageFreedFirstTime)) {
            PlayPresentationActionToAll(occupationValCommon.VO.villageFreedFirstTime)

            LISTENFOR_PlayerExitedVillage({
                snippet: "pev_exited_mob_alliance_spawner_reminder",
                ownerVillageId: villageId,
                villageId: villageId
            })

            LISTENFOR_PlayerEnteredVillage({
                snippet: "pev_entered_mob_alliance_spawner_reminder",
                ownerVillageId: villageId,
                villageId: villageId
            })

            LISTENFOR_LocalTimer({
                snippet: "lt_repair_mob_alliance_spawner_reminder",
                ownerVillageId: villageId,
                waitTime: 15,
                payloadInt: villageId
            })
        }
    }

    OUTPUT_MapRemoveKey(villageEntity, MAP_KEY.INVASION_ACTIVE)

    //Audio back to normal
    SetVillageAudioDefault(villageId)

    if (QUERY_GetDelayedInvasionAction(villageEntity) === FACTION_ACTION_BOSS_OCCUPATION) {
        OUTPUT_ThwartDelayedInvasionActions(villageEntity, "")
        SetupForcedDAIForFaction(FACTION_ACTION_ATTACK_VILLAGE_V2_ATTACK_BOSS, FACTION_NAME_ATTACK, { forcedSourceVillageId: villageId, forcedTargetVillageId: villageId })
    }

    if (IsThisAct1VillageAttack(villageId)) {
        HandlePlayerClearsOccupation(villageId)
    }
}

SNIPPET_LocalTimer("lt_repair_mob_alliance_spawner_reminder", (villageId, _payload) => {
    if (GetVillageVariable(villageId, "gv_player_exited_village") === 0) {
        OUTPUT_Announce("village_attack_occupation_repair_reminder_homestead_houses", [])
        SetVillageVariable(villageId, "gv_player_exited_village", 2)
    }
})

SNIPPET_PlayerExitedVillage("pev_exited_mob_alliance_spawner_reminder", (villageId) => {
    if (GetVillageVariable(villageId, "gv_player_exited_village") === 2) {
        Once()
        return
    }
    SetVillageVariable(villageId, "gv_player_exited_village", 1)
})

SNIPPET_PlayerEnteredVillage("pev_entered_mob_alliance_spawner_reminder", (villageId) => {
    if (GetVillageVariable(villageId, "gv_player_exited_village") === 2) {
        Once()
        return
    }
    SetVillageVariable(villageId, "gv_player_exited_village", 0)

    LISTENFOR_LocalTimer({
        snippet: "lt_repair_mob_alliance_spawner_reminder",
        ownerVillageId: villageId,
        waitTime: 15,
        payloadInt: villageId
    })
})

SNIPPET_NonPopCappedEntityDestroyed("ed_occupation_track_cage_destruction", (_destroyedEntity, payload) => {
    const villageId = payload.ownerVillageId
    DeltaVillageVariable(villageId, occupationValCommon.vars.cagesBuilt, -1)
})

SNIPPET_Timer("nt_occupation_reinforcement_timer", (_timeLeft, payload) => {
    const villageId = payload.int
    const hordeName = payload.string
    const hordeOccupationData = occupationValPiglins[hordeName]

    OUTPUT_DebugLogInvasion(`Village Occupation: Village ${villageId} reinforcements tick`)

    // Accumulate reinforcements for when the player arrives.
    for (const unitConfig of hordeOccupationData.occupyingUnits) {
        const reinforcementGv = _GetOccupationReinforcementGvName(unitConfig.unit)
        const currentReinforcements = GetVillageVariable(villageId, reinforcementGv)

        if (currentReinforcements > unitConfig.count) {
            const newReinforcements = Math.min(unitConfig.diminish, currentReinforcements - unitConfig.count)
            DeltaVillageVariable(villageId, reinforcementGv, -newReinforcements)
        } else if (currentReinforcements < unitConfig.count) {
            const newReinforcements = Math.min(unitConfig.reinforce, unitConfig.count - currentReinforcements)
            DeltaVillageVariable(villageId, reinforcementGv, newReinforcements)
        }

        OUTPUT_DebugLogInvasion(`\t Current # of ${unitConfig.unit} reinforcements: ${GetVillageVariable(villageId, reinforcementGv)}`)
    }

    // Acucumulate damage to the village.
    DeltaVillageVariable(villageId, occupationValCommon.vars.occupationDamage, hordeOccupationData.villageDamagePerTick)
    const currentDamage = GetVillageVariable(villageId, occupationValCommon.vars.occupationDamage)
    OUTPUT_DebugLogInvasion(`\t Current amount of damage: ${currentDamage}`)

    // Restart the timer.
    OUTPUT_SetNamedTimer("occupation_reinforcement_timer" + villageId, hordeOccupationData.abandonedTickTime)
})
