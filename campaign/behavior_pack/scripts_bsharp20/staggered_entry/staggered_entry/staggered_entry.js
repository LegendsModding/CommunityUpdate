///////// CONFIG ///////

const _SuccessfulFirstBaseBuilding = (horde) => {
    OUTPUT_DebugLogInvasion(`The faction ${horde} is building a First Base!`)
}

///////// INVASION ACTIVATION DELAY /////////
const _StartInvasionForTheFirstTime = () => {
    ActivateInvasionSystem()
    ReplenishNightOutpostHordeDeck()
}

const SpawnCentralBase = (horde) => {
    const hordeBasesSetupConfig = HordeBasesSetup[horde]
    if (!PlacePiglinBase(horde, hordeBasesSetupConfig.centralBase)) {
        Loge(`Failed to place initial base for ${horde} - aborting.`)
        return
    }

    // This assumes the central base is the first village of that size spawned by the horde
    const centralBase = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), horde), hordeBasesSetupConfig.centralBase)
    const centralBaseId = QUERY_GetVillageIDFromEntity(centralBase)
    HordeEstablishment.SetCentralBaseID(horde, centralBaseId)
}

const IntroduceNextMobAllianceAct2 = (mobAlliance) => {
    OUTPUT_SetGlobalVariable(GV_START_MOB_ALLIANCE_OCCUPATION[mobAlliance], 1)

    // Variables
    MobAllianceOccupation.SetEntered(mobAlliance, true)

    // Move the pointer
    StaggeredMobAllianceOccupationCounter.Increment()

    // Record
    SNAPSHOT_MobAllianceOccupationStarted(mobAlliance).Take()
}

// Called after Act 2 starts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupStaggeredEntry = () => {
    //Set entry vars
    for (const faction of HORDE_ANY) {
        const hordeBasesSetupConfig = HordeBasesSetup[faction]
        HordeEstablishment.SetSizeCount(faction, BASE_SIZE_SMALL, hordeBasesSetupConfig.numSmall)
        HordeEstablishment.SetSizeCount(faction, BASE_SIZE_MEDIUM, hordeBasesSetupConfig.numMedium)
        HordeEstablishment.SetSizeCount(faction, BASE_SIZE_LARGE, hordeBasesSetupConfig.numLarge)

        HordeEstablishment.SetCentralBaseID(faction, -1)
    }

    // We will need just one custom listener for base being destroyed, the rest is really plug-ins in the code
    LISTENFOR_VillageDestroyed({
        snippet: "vd_increment_counter",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        despawned: false
    })

    /////
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_entered_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_FOREST,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_entered_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_FROSTLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_entered_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_DRYLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_entered_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_WETLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_entered_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_GRASSLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_entered_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_BROKENLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_entered_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_FATEFUL_LAND,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_entered_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_JUNGLE,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_entered_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_MOUNTAIN,
        villageSize: BASE_SIZE_SMALL
    })
    
    //////
    LISTENFOR_PlayerExitedVillage({
        snippet: "player_exited_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_FOREST,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerExitedVillage({
        snippet: "player_exited_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_FROSTLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerExitedVillage({
        snippet: "player_exited_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_DRYLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerExitedVillage({
        snippet: "player_exited_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_WETLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerExitedVillage({
        snippet: "player_exited_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_GRASSLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerExitedVillage({
        snippet: "player_exited_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_BROKENLANDS,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerExitedVillage({
        snippet: "player_exited_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_FATEFUL_LAND,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerExitedVillage({
        snippet: "player_exited_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_JUNGLE,
        villageSize: BASE_SIZE_SMALL
    })
    LISTENFOR_PlayerExitedVillage({
        snippet: "player_exited_village_staggered_flow",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: CULTURE_NAME_MOUNTAIN,
        villageSize: BASE_SIZE_SMALL
    })
    //////

    LISTENFOR_DifficultyChanged({
        snippet: "dc_update_establishment",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    // DEBUGGING
    LISTENFOR_ExternalEvent({
        snippet: "ee_trigger_immediate_arrival",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "progressStaggeredEntry"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_staggered_entry_step",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "progressStaggeredEntryStep"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_trigger_immediate_arrival_and_spawn_all",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "progressStaggeredEntryAndSpawnAll"
    })
}

const StartPregame = (horde) => {
    //Start pre-game
    //ClaimPregameAreas(horde) //Removing Pre-game claimed areas

    // Variables
    HordeEntry.SetEntered(horde, true)
    const index = HordeEntry.GetOrderByName(horde)

    // Move the phase pointer
    StaggeredEntryHordePhaseCounter.Increment(index)

    // Record
    SNAPSHOT_HordePregameStarted(horde).Take()
}

const PlaceFirstBase = (horde, _debugSkipCinematic = false) => {
    // Move the phase pointer
    const index = HordeEntry.GetOrderByName(horde)
    StaggeredEntryHordePhaseCounter.Increment(index)

    // Move the entry pointer (ready to bring the next horde)
    StaggeredEntryCounter.Increment()

    SpawnCentralBase(horde)

    // Mark this horde as arrived for the map
    OUTPUT_ServerMapSetKeyValue(HORDE_ARRIVAL_MAP_KEYS[horde], MAP_HORDE_ARRIVAL.TRUE)

    //Record
    SNAPSHOT_HordeFirstBaseBuilt(horde).Take()

    // Announce
    _SuccessfulFirstBaseBuilding(horde)
    //This used to play a VO related to meet the boss, however, it doesn't make sense in new flow
    //LISTENFOR_LocalTimer({
        //snippet: "lt_delayed_first_base_VO",
        //ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        //waitTime: 10, //timed to however long the HUD sequence is - note: I am further delaying this for now to happen after other invasion stuff has played
        //payloadString: horde
   //})
}

SNIPPET_LocalTimer("lt_delayed_first_base_VO", (payload) => {
    const hordeBossData = GetFactionBossData(payload.string)
    PlayPresentationActionToAll(hordeBossData.VO.postMeetTheBossHordeArrival)
})

//NOTE: there might be circular dependency between hordes and mob alliances
//so every time a horde is introduced, try introducing any mob alliances and vice-versa
const CheckAndProgressHordeEntry = (triggerTime) => {
    //first check if any horde can go
    const lastArrivedHordeIndex = StaggeredEntryCounter.Get()
    const hordes = HordeEntryConfig.hordes

    let needCheckMobAlliance = false
    for (let i = lastArrivedHordeIndex; i < hordes.length; i++) {
        const hordeInQuestion = hordes[i]

        let entryPhase = StaggeredEntryHordePhaseCounter.Get(i)
        if (entryPhase === ENTRY_PHASE_NONE) {
            const trigger = hordeInQuestion.pregame[triggerTime]

            if (trigger === undefined) {
                // No such trigger time was specified
                break
            }

            if (!trigger.eval()) {
                // Conditions failed to pass, can't advance further
                break
            }

            needCheckMobAlliance = true

            // Start pre-game
            // First try to pick a non-entered horde from the pool
            // If fail, pick any non-entered horde
            let resultHorde = HordeEntry.GetRandomUnit(hordeInQuestion.hordePool, false)
            if (resultHorde === null) {
                resultHorde = HordeEntry.GetRandomUnit(HORDE_ANY, false)
            }

            StartPregame(resultHorde)
        }

        entryPhase = StaggeredEntryHordePhaseCounter.Get(i)
        if (entryPhase === ENTRY_PHASE_PREGAME) {
            const trigger = hordeInQuestion.firstBase[triggerTime]

            if (trigger === undefined) {
                break
            }

            if (!trigger.eval()) {
                break
            }

            needCheckMobAlliance = true

            const horde = HordeEntry.GetByArrivedOrder(i)
            PlaceFirstBase(horde)
        }
    }

    if (needCheckMobAlliance) {
        // Now see if any mob alliance occupation must start
        CheckAndProgressMobAllianceOccupation(triggerTime)
        CheckAndProgressInvasionPhase(triggerTime)
    }
}

const CheckAndProgressMobAllianceOccupation = (triggerTime) => {
    const lastMobAllianceOccupationIndex = StaggeredMobAllianceOccupationCounter.Get()
    const mobAlliances = HordeEntryConfig.mobAlliances

    let needCheckHordes = false
    for (let i = lastMobAllianceOccupationIndex + 1; i < mobAlliances.length; i++) {
        const mobAllianceToIntroduce = mobAlliances[i]

        // Check if was introduced already and this loop is running late
        if (i <= StaggeredMobAllianceOccupationCounter.Get()) {
            continue
        }

        const trigger = mobAllianceToIntroduce.occupation[triggerTime]

        // Stop the process at once if trigger times are not the same
        if (trigger === undefined) {
            break
        }

        if (!trigger.eval()) {
            // We can only introduce entries in a sequence, can't jump over
            break
        }

        needCheckHordes = true

        // Spawn & Establish
        let resultMobAlliance = MobAllianceOccupation.GetRandomUnit(mobAllianceToIntroduce.mobAlliancePool, false)
        if (resultMobAlliance === null) {
            resultMobAlliance = MobAllianceOccupation.GetRandomUnit(MOB_ALLIANCE_ANY, false)
        }

        IntroduceNextMobAllianceAct2(resultMobAlliance)
    }

    if (needCheckHordes) {
        // Now see if any mob alliance occupation must start
        CheckAndProgressHordeEntry(triggerTime)
        CheckAndProgressInvasionPhase(triggerTime)
    }
}

const ProgressCampaign = (triggerTime) => {
    CheckAndProgressHordeEntry(triggerTime)
    CheckAndProgressMobAllianceOccupation(triggerTime)
    CheckAndProgressInvasionPhase(triggerTime)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StaggeredEntryNextDawn = () => {
    // GLOBAL COUNTERS
    const totalDays = DaysSinceCounter.Get()
    if (totalDays === 0) {
        OUTPUT_DebugLogInvasion(`[DEBUG] Taking snapshot of act 2...`)
        SNAPSHOT_Act2Started().Take()
    }

    // HORDE COUNTERS - empty for now

    // MOB ALLIANCE COUNTERS - empty for now

    // Invasion cine counter - moved to invasion_intentions_coordinator to be merged with other logic that affects night time VO/messages/etc

    // Progress campaign - bases might get built (for now, will change with pre-game)
    // Must get this done before setting establish actions - bases might be absent
    ProgressCampaign(TRIGGER_TIME_DAWN)

    // ESTABLISHING INVASION ACTIONS

    // Start invasion as soon as any horde established and enough days have passed
    const anyHordeEstablished = HordeEstablishment.GetHordes(true).length > 0
    if (anyHordeEstablished) {
        DaysSinceAnyHordeEstablished.Increment()
    }

    // Now check if the horde will be established
    const hordesToBeEstablished = HordeEstablishment.GetHordes(false)
    for (const horde of hordesToBeEstablished) {
        if (!HordeEntry.IsEntered(horde)) {
            continue
        }

        // Always attack - during pre-game and first base (establishment phases)
        // But only after the delay
        const delayDays = HordeBasesSetup[horde].firstAttackDelayDays
        if (InvasionHordeFirstAttackStarted.Get(horde) > 0 || InvasionHordeFirstAttackDelayDays.Get(horde) >= delayDays) {
            InvasionHordeFirstAttackStarted.Increment(horde)
            SetupForcedDAIForFaction(FACTION_ACTION_ATTACK_VILLAGE_V2, horde) //Always attack village while establishing
        }

        InvasionHordeFirstAttackDelayDays.Increment(horde)

        const hordeOrder = HordeEntry.GetOrderByName(horde) //must be there if the horde arrived
        const hordeEntryPhase = StaggeredEntryHordePhaseCounter.Get(hordeOrder)
        OUTPUT_DebugLogInvasion(`ENTRY PHASE IS ${hordeEntryPhase} and ORDER IS ${hordeOrder}`)
        if (hordeEntryPhase === ENTRY_PHASE_FIRSTBASE) {
            // only if the horde is in the first base phase, do establishing
            SetupForcedDAIForFaction(FACTION_ACTION_ESTABLISH, horde)
        }
    }

    // Check if can start invasion
    const daysPassedSinceFirstEst = DaysSinceAnyHordeEstablished.Get()
    if (GetGameRuleVariable(GAME_RULE_NAMES.invasionEnabled)) {
        if (daysPassedSinceFirstEst === HordeEntryConfig.invasionStartAfterFirstEstablished && QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 0) {
            _StartInvasionForTheFirstTime()
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StaggeredEntryNextDusk = () => {
    // Invasion cine counter (add an AND check here for # of days played, makes more sense here)
    InvasionDaysCineCounter.Increment()
    //Used to have logic here that would play invasion FMV or not based on a variety of factors. This was moved into invasion_intentions_coordinator.

    // Called at each "system" dusk
    ProgressCampaign(TRIGGER_TIME_DUSK)
}

SNIPPET_VillageDestroyed("vd_increment_counter", (villageId, _payload) => {
    const horde = QUERY_GetFactionNameFromVillageID(villageId)

    // We only care about invasion hordes
    if (!FACTION_PIGLINS.includes(horde)) {
        return
    }

    // Check if need to transfer responsibilities for establishment
    // If the base is killed during the night, that's fine, but otherwise plan the action
    if (!HordeEstablishment.IsEstablished(horde) && villageId === HordeEstablishment.GetCentralBaseID(horde)) {
        // Pick any medium base if present
        let candidates = FILTER_ByVillageSize(GetFactionBases(horde), BASE_SIZE_MEDIUM)
        if (!HasEntities(candidates)) {
            // Pick any small base if absent
            candidates = FILTER_ByVillageSize(GetFactionBases(horde), BASE_SIZE_SMALL)
        }

        if (!HasEntities(candidates)) {
            // The horde is fully gone. Cancel the establishment
            HordeEstablishment.SetSizeCount(horde, BASE_SIZE_LARGE, 0)
            HordeEstablishment.SetSizeCount(horde, BASE_SIZE_MEDIUM, 0)
            HordeEstablishment.SetSizeCount(horde, BASE_SIZE_SMALL, 0)
        } else {
            // Horde is still present, transfer the central base rights
            const newCentralBase = FILTER_RandomCount(candidates, 1)
            const newCentralBaseId = QUERY_GetVillageIDFromEntity(newCentralBase)
            HordeEstablishment.SetCentralBaseID(horde, newCentralBaseId)
        }
    }

    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    if (size === BASE_SIZE_OUTPOST) {
        VictoriesOverPiglinsCounter.Increment()
        HordeOutpostsDestroyedCounter.Increment(horde)
        return
    }

    // We check almost all portal bases in Act 2, except outposts
    if (!BASE_SIZE_ALL_PORTALS_AND_BOSS_AND_MOB.includes(size)) {
        return
    }

    HordeBasesDestroyedCounter.Increment(horde, size)
})

SNIPPET_PlayerEnteredVillage("player_entered_village_staggered_flow", (villageId, _playerCount, _payload) => {
    // We only change counters for villages NOT under attack
    if (IsVillageUnderInvasionAttack(villageId)) {
        return
    }

    VillageNotUnderAttackEnteredCounter.Increment()

    // Right now we only trigger this at the daytime - change if design allows
    if (IsNightTime()) {
        return
    }

    ProgressCampaign(TRIGGER_TIME_AT_VILLAGE)
})

SNIPPET_PlayerExitedVillage("player_exited_village_staggered_flow", (villageId, _playerCount, _payload) => {
    // We only change counters for villages NOT under attack
    if (IsVillageUnderInvasionAttack(villageId)) {
        return
    }

    VillageNotUnderAttackExitedCounter.Increment()

    // Right now we only trigger this at the daytime - change if design allows
    if (IsNightTime()) {
        return
    }

    ProgressCampaign(TRIGGER_TIME_AT_VILLAGE)
})

SNIPPET_DifficultyChanged("dc_update_establishment", (prevDifficulty, newDifficulty, _payload) => {
    for (const horde of HORDE_ANY) {
        // Only update hordes still establishing
        if (HordeEstablishment.IsEstablished(horde)) {
            continue
        }

        // Find difference
        // NOTE: we're using difficulty configs here because they have saved configuration
        // If we were to use HordeBasesSetup[horde], then we'd have updated information only which would reflect the new difficulty
        const hordeBasesSetupConfigPrev = allDifficultyConfigs["horde_bases_setup_config"][prevDifficulty][horde]
        const hordeBasesSetupConfigNew = allDifficultyConfigs["horde_bases_setup_config"][newDifficulty][horde]

        const smallDiff = hordeBasesSetupConfigNew.numSmall - hordeBasesSetupConfigPrev.numSmall
        const mediumDiff = hordeBasesSetupConfigNew.numMedium - hordeBasesSetupConfigPrev.numMedium
        const largeDiff = hordeBasesSetupConfigNew.numLarge - hordeBasesSetupConfigPrev.numLarge

        const newSmallCount = Math.max(HordeEstablishment.GetSizeCount(horde, BASE_SIZE_SMALL) + smallDiff, 0)
        const newMediumCount = Math.max(HordeEstablishment.GetSizeCount(horde, BASE_SIZE_MEDIUM) + mediumDiff, 0)
        const newLargeCount = Math.max(HordeEstablishment.GetSizeCount(horde, BASE_SIZE_LARGE) + largeDiff, 0)

        // Set difference
        HordeEstablishment.SetSizeCount(horde, BASE_SIZE_SMALL, newSmallCount)
        HordeEstablishment.SetSizeCount(horde, BASE_SIZE_MEDIUM, newMediumCount)
        HordeEstablishment.SetSizeCount(horde, BASE_SIZE_LARGE, newLargeCount)
    }

    // Check if the new difficulty's coniditions are already satisfied
    ProgressCampaign(TRIGGER_TIME_IMMEDIATE)
})

// DEBUGGING
const _DoStaggeredEntryStep = () => {
    OUTPUT_DebugLogInvasion(`[LFC] Doing the staggered entry step...`)

    if (DaysSinceCounter.Get() === -1) {
        // Act 2 hasn't started yet, don't introduce hordes (might cause issues)
        return false
    }

    const hordes = [...HORDE_ANY]
    hordes.sort((hordeA, hordeB) => {
        const indexA = HordeEntry.GetOrderByName(hordeA)
        const phaseA = StaggeredEntryHordePhaseCounter.Get(indexA)

        const indexB = HordeEntry.GetOrderByName(hordeB)
        const phaseB = StaggeredEntryHordePhaseCounter.Get(indexB)

        return phaseA < phaseB
    })

    for (const horde of hordes) {
        const index = HordeEntry.GetOrderByName(horde)
        const phase = StaggeredEntryHordePhaseCounter.Get(index)

        if (phase === ENTRY_PHASE_NONE) {
            StartPregame(horde)
            return true
        }

        if (phase === ENTRY_PHASE_PREGAME) {
            PlaceFirstBase(horde, true)
            return true
        }

        if (!HordeEstablishment.IsEstablished(horde)) {
            DAI_ResolveEstablish(horde)
            return true
        }
    }

    for (const mobAlliance of MOB_ALLIANCE_ANY) {
        if (!MobAllianceOccupation.IsEntered(mobAlliance)) {
            IntroduceNextMobAllianceAct2(mobAlliance)
            return true
        }
    }

    return false
}
SNIPPET_ExternalEvent("ee_trigger_immediate_arrival", (_variant, _payload) => {
    while (_DoStaggeredEntryStep()) {}
})

SNIPPET_ExternalEvent("ee_staggered_entry_step", (_variant, _payload) => {
    _DoStaggeredEntryStep()
})

SNIPPET_ExternalEvent("ee_trigger_immediate_arrival_and_spawn_all", (_variant, _payload) => {
    // Do immediate arrival
    while (_DoStaggeredEntryStep()) {}

    // Spawn a bunch of extra bases, so we have at least one of each size
    for (const horde of FACTION_PIGLINS) {
        for (const size of BASE_SIZE_ALL_PORTALS_AND_BOSS) {
            // exception for attack horde and boss size which doesn't exist
            if (horde === FACTION_NAME_ATTACK && size === BASE_SIZE_BOSS) {
                continue
            }
            SpawnBaseWithRulesInClaimedArea(horde, size)
        }
    }
})
