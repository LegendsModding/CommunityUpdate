const upgradeHordeMessages = {
    //Notification messages per horde
    [FACTION_NAME_ATTACK]: "invasion_upgrade_base_attack",
    [FACTION_NAME_DEFEND]: "invasion_upgrade_base_defend",
    [FACTION_NAME_FROST]: "invasion_upgrade_base_frost",
    [FACTION_NAME_OBSTACLE]: "invasion_upgrade_base_obstacle"
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupForcedDAIForFaction = (cardType, faction, params = null) => {
    OUTPUT_DebugLogInvasion(`Forcing DAI setup for card ${cardType} and faction ${faction}`)
    if (params === null) {
        params = { isForced: true }
    } else {
        params.isForced = true
    }

    return _SetupDAIForFaction(cardType, faction, params)
}

// Params can carry various extra information for the actions
const _SetupDAIForFaction = (cardType, faction, params = null) => {
    //Consider taking Reserve() functionality and DAI OUTPUT here for generalization

    // Default values which we want to use for invasion
    // Everything else is debug/forced/etc.
    let isForced = false
    let hidden = false
    let selectSource = true
    let useInvasionManagerRestrictions = true
    let forcedSourceVillageId = null
    let forcedTargetVillageId = null
    if (params !== null) {
        if (params.isForced !== undefined) {
            isForced = params.isForced
        }

        if (params.hidden !== undefined) {
            hidden = params.hidden
        }

        if (params.selectSource !== undefined) {
            selectSource = params.selectSource
        }

        if (params.useInvasionManagerRestrictions !== undefined) {
            useInvasionManagerRestrictions = params.useInvasionManagerRestrictions
        }

        if (params.forcedSourceVillageId !== undefined) {
            forcedSourceVillageId = params.forcedSourceVillageId
        }

        if (params.forcedTargetVillageId !== undefined) {
            forcedTargetVillageId = params.forcedTargetVillageId
        }
    }

    if (useInvasionManagerRestrictions) {
        // Invasion manager
        // Discard the action only if it was a forced one before: if it is forced, queue regardless
        if (!isForced && ConsumeForcedAction(faction, cardType)) {
            OUTPUT_DebugLogInvasion(`[INV MANAGER] Failed to set up action ${cardType}: it was a forced action before and hence will be skipped.`)
            return false
        }

        if (!CheckPassPlanningRestrictions(faction, cardType)) {
            OUTPUT_DebugLogInvasion(`[INV MANAGER] The action ${cardType} for horde ${faction} didn't pass the planning restriction check. Failed to set delayed invasion action.`)
            return false
        }
    }

    let setupSuccess = false
    switch (cardType) {
        case FACTION_ACTION_ATTACK_VILLAGE_V2:
            setupSuccess = DAI_SetAttackVillageV2(faction, forcedTargetVillageId)
            break
        case FACTION_ACTION_ATTACK_VILLAGE_V2_ATTACK_BOSS: // triggered only from script, not from a card
            setupSuccess = DAI_SetAttackVillageV2BossAttack(faction, forcedTargetVillageId)
            break
        case FACTION_ACTION_BOSS_OCCUPATION: // triggered only from script, not from a card
            setupSuccess = DAI_SetBossOccupation(faction, forcedTargetVillageId)
            break
        case FACTION_ACTION_BUILD_DEFENSIVE_OUTPOST:
            setupSuccess = DAI_SetDefensiveOutpost(faction, selectSource)
            break
        case FACTION_ACTION_BUILD_OFFENSIVE_OUTPOST:
            setupSuccess = DAI_SetOffensiveOutpost(faction, selectSource)
            break
        case FACTION_ACTION_BUILD_NEAR_BASE:
            setupSuccess = DAI_SetNearBase(faction, selectSource, useInvasionManagerRestrictions, forcedSourceVillageId)
            break
        case FACTION_ACTION_BUILD_NEW_OUTPOST:
            setupSuccess = DAI_SetNewOutpost(faction, selectSource, useInvasionManagerRestrictions, forcedSourceVillageId)
            break
        case FACTION_ACTION_OOPS:
            setupSuccess = DAI_SetOops(faction, hidden, selectSource, forcedTargetVillageId)
            break
        case FACTION_ACTION_UPGRADE_BASE:
            setupSuccess = DAI_SetUpgradeBase(faction, selectSource, forcedTargetVillageId)
            break
        case FACTION_ACTION_BUILD_FAR_BASE:
            setupSuccess = DAI_SetFarBase(faction, selectSource, useInvasionManagerRestrictions, forcedSourceVillageId)
            break
        case FACTION_ACTION_ATTACK_VILLAGE_V2_DOUBLE:
            for (let i = 0; i < 2; i++) {
                const result = DAI_SetAttackVillageV2(faction, forcedTargetVillageId)
                setupSuccess = setupSuccess || result
            }
            break
        case FACTION_ACTION_BUILD_DEFENSIVE_OUTPOST_TRIPLE:
            for (let i = 0; i < 3; i++) {
                const result = DAI_SetDefensiveOutpost(faction, selectSource)
                setupSuccess = setupSuccess || result
            }
            break
        case FACTION_ACTION_BUILD_OFFENSIVE_OUTPOST_DOUBLE:
            for (let i = 0; i < 2; i++) {
                const result = DAI_SetOffensiveOutpost(faction, selectSource)
                setupSuccess = setupSuccess || result
            }
            break
        case FACTION_ACTION_BUILD_NEAR_BASE_DOUBLE:
            for (let i = 0; i < 2; i++) {
                const result = DAI_SetNearBase(faction, selectSource, useInvasionManagerRestrictions, forcedSourceVillageId)
                setupSuccess = setupSuccess || result
            }
            break
        case FACTION_ACTION_OOPS_DOUBLE:
            for (let i = 0; i < 2; i++) {
                const result = DAI_SetOops(faction, hidden, selectSource, forcedSourceVillageId, forcedTargetVillageId)
                setupSuccess = setupSuccess || result
            }
            break
        case FACTION_ACTION_UPGRADE_BASE_DOUBLE:
            for (let i = 0; i < 2; i++) {
                const result = DAI_SetUpgradeBase(faction, selectSource, forcedSourceVillageId, forcedTargetVillageId)
                setupSuccess = setupSuccess || result
            }
            break
        case FACTION_ACTION_CLAIM_AREA:
            setupSuccess = DAI_SetClaimArea(faction, selectSource, useInvasionManagerRestrictions, forcedSourceVillageId)
            break
        case FACTION_ACTION_ESTABLISH:
            setupSuccess = DAI_SetEstablish(faction, selectSource, forcedSourceVillageId)
            break
    }

    if (setupSuccess) {
        OUTPUT_DebugLogInvasion("Successfully planned the intention " + cardType + " for faction " + faction)

        // NOTE: this means that even if maxConcurrent = 2, but gap must be taken between actions, there may only be one such action scheduled in the day
        ResetHordeInvasionActionTracking(faction, cardType)
        ResetGlobalInvasionActionTracking(cardType)
        return true
    }

    OUTPUT_DebugLogInvasion("Failed to plan the intention " + cardType + " for faction " + faction)
    return false
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _ResolveDAIForFaction = (actionName, faction, source, target, hidden, strength) => {
    if (HasEntities(source)) {
        // Update map icons
        OUTPUT_MapRemoveKey(source, MAP_KEY.INVASION_INTENTION)
    }

    if (HasEntities(target)) {
        // Update map icons
        OUTPUT_MapRemoveKey(target, MAP_KEY.INVASION_INTENTION)
    }

    let resolveSuccess = false
    switch (actionName) {
        case FACTION_ACTION_ATTACK_VILLAGE_V2:
            resolveSuccess = DAI_ResolveAttackVillageV2(faction, source, strength)
            break
        case FACTION_ACTION_ATTACK_VILLAGE_V2_ATTACK_BOSS:
            resolveSuccess = DAI_ResolveAttackVillageV2(faction, source, 4)
            break
        case FACTION_ACTION_BOSS_OCCUPATION:
            resolveSuccess = DAI_ResolveBossOccupation(faction, source)
            break
        case FACTION_ACTION_BUILD_DEFENSIVE_OUTPOST:
            resolveSuccess = DAI_ResolveDefensiveOutpost(faction)
            break
        case FACTION_ACTION_BUILD_OFFENSIVE_OUTPOST:
            resolveSuccess = DAI_ResolveOffensiveOutpost(faction)
            break
        case FACTION_ACTION_BUILD_NEAR_BASE:
            resolveSuccess = DAI_ResolveNearBase(faction)
            break
        case FACTION_ACTION_BUILD_NEW_OUTPOST:
            resolveSuccess = DAI_ResolveNewOutpost(faction)
            break
        case FACTION_ACTION_OOPS:
            resolveSuccess = DAI_ResolveOops(faction, target, hidden)
            break
        case FACTION_ACTION_UPGRADE_BASE:
            resolveSuccess = DAI_ResolveUpgradeBase(faction, target)
            break
        case FACTION_ACTION_BUILD_FAR_BASE:
            resolveSuccess = DAI_ResolveFarBase(faction)
            break
        case FACTION_ACTION_ESTABLISH:
            resolveSuccess = DAI_ResolveEstablish(faction)
            break
        case FACTION_ACTION_CLAIM_AREA:
            resolveSuccess = DAI_ResolveClaimArea(faction)
            break
    }

    if (resolveSuccess) {
        OUTPUT_DebugLogInvasion("Successfully resolved the intention " + actionName + " for faction " + faction)
        return true
    }

    OUTPUT_DebugLogInvasion("Failed to resolve the intention " + actionName + " for faction " + faction)
    return false
}

const _ExecuteDAIForFaction = (sourceVillageId, targetVillageId, actionName, hidden, factionName, strength) => {
    const sourceEntityId = sourceVillageId === -1 ? -1 : GetVillageEntityFromID(sourceVillageId)
    const targetEntityId = targetVillageId === -1 ? -1 : GetVillageEntityFromID(targetVillageId)

    OUTPUT_DebugLogInvasion("Attempting to resolve the primary intention " + actionName)
    if (_ResolveDAIForFaction(actionName, factionName, sourceEntityId, targetEntityId, hidden, strength)) {
        return
    }

    //Select which intention is going to be the ultimate intention
    const ultimateIntention = FACTION_ACTION_OOPS
    const targetVillageEntity = FILTER_ByFactionName(OPER_Union(sourceEntityId, targetEntityId), FACTION_PIGLINS)
    if (!HasEntities(targetVillageEntity)) {
        // source-less and target-less action
        return
    }

    OUTPUT_DebugLogInvasion("Attempting to resolve the ultimate fallback intention " + ultimateIntention)
    if (_ResolveDAIForFaction(ultimateIntention, factionName, -1, targetVillageEntity, true, strength)) {
        return
    }

    Loge(ultimateIntention + " is the ultimate fallback intention. This resolution of fallback intention must never fail. Revise your flow and logic for DAI resolution for " + ultimateIntention)
}

const _ProgressIntentionsDraws = () => {
    DrawInvasionHordeCard()
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue) {
        LISTENFOR_InvasionCardPlayed({
            snippet: "icp_set_intention_dai",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_InvasionDelayedActionExecuted({
            snippet: "iae_execute_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_VillageUpgraded({
            snippet: "vu_invasion_base_upgraded",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_DifficultyChanged({
            snippet: "dc_refresh_decks",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        //DEBUG
        LISTENFOR_ExternalEvent({
            snippet: "ee_execute_debug_invasion_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "executeDebugInvasionAction"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_plan_debug_invasion_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "planDebugInvasionAction"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_log_invasion_phase",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "logInvasionPhase"
        })
    }
})

const _chooseFallbackAction = (_hordeName, _cardAction, cardFallbackAction, _phase) => {
    // TODO: right now just returns whatever fallback is given on a card
    // Possible to implement any other logic/overwrite
    return cardFallbackAction
}

SNIPPET_InvasionCardPlayed("icp_set_intention_dai", (factionName, cardAction, cardFallbackAction, _payload) => {
    //TODO: transfer this logic to one function accessible by IMGUI
    //Should be similar to how _ExecuteDAIForFaction() is used
    if (factionName === EMPTY_CARD) {
        // A special case where something went wrong in the engine we did not get a faction card
        // Simply pick a random alive faction

        Loge(`ATTENTION-ATTENTION: Invasion card was played with NO faction name! Assigning a random alive faction!`)
        factionName = ChooseFromArray(GetAliveFactions())
    }

    if (cardAction === EMPTY_CARD) {
        // A special case where something went wrong in the engine we did not get an action card
        // Pick a random action for that faction according to a phase and a random fallback action

        Loge(`ATTENTION-ATTENTION: Invasion card was played with NO action name! Assigning a random action from the pool from the phase of that faction!`)
        const actionsPool = [...GetHordeDeckFormation(factionName, GetInvasionPhase())] //copy pool
        const actionObject = ChooseFromArray(actionsPool)
        cardAction = actionObject.action

        // Choose a different fallback from the same pool
        actionsPool.splice(actionsPool.indexOf(actionObject), 1)  // remove one element from pool and choose random again
        if (actionsPool.length > 0) {
            cardFallbackAction = ChooseFromArray(actionsPool).action
        } else {
            cardFallbackAction = cardAction
        }
    }

    OUTPUT_DebugLogInvasion("Coordinating card played: " + cardAction + " and its fallback " + cardFallbackAction + " for faction " + factionName)

    OUTPUT_DebugLogInvasion("Attempting to plan the primary intention " + cardAction)
    if (_SetupDAIForFaction(cardAction, factionName)) {
        _ProgressIntentionsDraws(factionName)
        return
    }

    // Logic for choosing the fallback
    const fallbackAction = _chooseFallbackAction(factionName, cardAction, cardFallbackAction, GetInvasionPhase())

    OUTPUT_DebugLogInvasion("Attempting to plan the secondary intention (fallback): " + fallbackAction)
    if (_SetupDAIForFaction(fallbackAction, factionName)) {
        _ProgressIntentionsDraws(factionName)
        return
    }

    //Select which intention is going to be the ultimate intention
    const ultimateIntention = FACTION_ACTION_OOPS
    OUTPUT_DebugLogInvasion("Attempting to plan the ultimate fallback " + ultimateIntention)
    if (_SetupDAIForFaction(ultimateIntention, factionName)) {
        _ProgressIntentionsDraws(factionName)
        return
    }

    Loge(ultimateIntention + " is the ultimate fallback intention. This fallback intention must never fail. Revise your flow and logic for DAI setup for " + ultimateIntention)
    _ProgressIntentionsDraws(factionName)
})

SNIPPET_InvasionDelayedActionExecuted("iae_execute_action", (sourceVillageId, actionName, targetVillageId, hidden, factionName, strength) => {
    // First check if need to flush recaps
    if (InvasionFlushRecapsCounter.Get() === 1) {
        OUTPUT_MapRemoveKey(QUERY_GetAllAliveVillages(), MAP_KEY.INVASION_RECAP)
        OUTPUT_MapRemoveKey(QUERY_GetAllClaimedAreas(), MAP_KEY.INVASION_RECAP)
        InvasionFlushRecapsCounter.Decrement()
    }

    // Check if need to show the dusk HUD message (it comes before other messages)
    if (InvasionDuskHUDCounter.Get() === 1) {
        OUTPUT_DebugLogInvasion(``)
        OUTPUT_DebugLogInvasion(`-----------------DUSK - EXECUTING ACTIONS-----------------`)

        InvasionDuskHUDCounter.Decrement()
        if (IsAnyHordeArrived()) {
            //Series of variables required for below
            const PlayersInBases = GetNumOfPlayersInBases(FACTION_PIGLINS, BASE_SIZE_ALL_PORTALS)
            const invasionAlreadyPlayed = QUERY_GetGlobalVariable(campaignActsVal.invasionSystemFmvConfig.playedOnce)
            const daysElapsed = InvasionDaysCineCounter.Get()

            //If the FMV has already played, there are players in bases or its been more than X nights then show the HUD message and potentially some VO (based on pre-existing logic)
            if (invasionAlreadyPlayed === 1 || PlayersInBases > 0 || daysElapsed >= campaignActsVal.invasionSystemFmvConfig.daysToPass) {
                IncrementGlobal(INVASION_SUNSET_COUNT) // lets skip this wohle thing IF invasion FMV is trying to play
                PlayMusicStingerToPlayers(invasionNightConst.stinger.invasionHorn, GetPlayers())
                if (DoOnce("gv_has_played_first_night_message")) {
                    OUTPUT_AnnounceSequence("invasion_horde_all_first_night_sequence")
                } else {
                    OUTPUT_AnnounceSequence("invasion_actions_executed_sequence")
                }
                //Play Sunset VO for day 1-4 of invasion
                const sunsetCount = QUERY_GetGlobalVariable(INVASION_SUNSET_COUNT)
                if (sunsetCount >= invasionNightConst.introVODays.min && sunsetCount <= invasionNightConst.introVODays.max) {
                    PlayPresentationActionToAll(invasionNightConst.VO.sunsetIntro) //note this doesn't seem to play at night
                }
            } else {
                //If none of those conditions were true, we can play the invasion FMV
                PlayPresentationActionToAll(campaignActsVal.VO.preInvasionCineVO)
                LISTENFOR_LocalTimer({
                    snippet: "lt_delay_invasion_fmv_until_after_vo",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    waitTime: 11 //timed to wait for VO to stop playing
                })
            }
        }
        const deadVillages = GetDeadVillages(FACTION_PIGLINS, BASE_SIZE_ALL)
        OUTPUT_MapSetKeyValue(deadVillages, "is_destroyed", "hidden")
    }

    const deadPlayerOutposts = GetDeadVillages([CULTURE_NAME_VILLAGERS], [VILLAGE_SIZE_PLAYER])
    OUTPUT_MapSetKeyValue(deadPlayerOutposts, "is_destroyed", "hidden")

    _ExecuteDAIForFaction(sourceVillageId, targetVillageId, actionName, hidden, factionName, strength)
})

SNIPPET_LocalTimer("lt_delay_invasion_fmv_until_after_vo", (_payload) => {
    OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c04InvasionSystem, GetPlayers())
    OUTPUT_SetGlobalVariable(campaignActsVal.invasionSystemFmvConfig.playedOnce, 1)
})

SNIPPET_VillageUpgraded("vu_invasion_base_upgraded", (villageId, _payload) => {
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapRemoveKey(villageEntity, MAP_KEY.INVASION_ACTIVE)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.INVASION_RECAP, MAP_INVASION_RECAP.UPGRADED)

    //variables required for below
    const PlayersInBases = GetNumOfPlayersInBases(FACTION_PIGLINS, BASE_SIZE_ALL_PORTALS)
    const invasionAlreadyPlayed = QUERY_GetGlobalVariable(campaignActsVal.invasionSystemFmvConfig.playedOnce)
    const daysElapsed = InvasionDaysCineCounter.Get()
    const hordeName = QUERY_GetFactionNameFromVillageID(villageId)

    //Don't play these messages if the invasion FMV is playing, if it is, defer them until after its done
    if (invasionAlreadyPlayed === 1 || PlayersInBases > 0 || daysElapsed >= campaignActsVal.invasionSystemFmvConfig.daysToPass) {
        OUTPUT_Announce(upgradeHordeMessages[hordeName], [])

        if (QUERY_GetGlobalVariable("invasionFirstBaseUpgraded") === 0) {
            PlayPresentationActionToAll("invasion_base_upgrade")
            OUTPUT_SetGlobalVariable("invasionFirstBaseUpgraded", 1)
        }
    } else {
        //If the message was blocked, then wait until after the cinematic to play it.
        LISTENFOR_CinematicFinished({
            snippet: "cf_post_invasion_cine_upgrade_message",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: campaignActsVal.cinematics.c04InvasionSystem,
            payloadString: upgradeHordeMessages[hordeName]
        })
    }
})

SNIPPET_DifficultyChanged("dc_refresh_decks", (_prevDifficulty, _newDifficulty, _payload) => {
    SetAllFactionDecksFromPhase(GetInvasionPhase())
    RefillInvasionAttackStrengthDeck()
})

// DEBUG
const NEAREST_HORDE = "x"
const NO_ACTION = "x"
const NEAREST_VILLAGE = -1
const AUTOMATIC_TARGET = -2
const NO_VILLAGE = -2

const _GetNearestHorde = (referenceEntity) => {
    let bases = GetUnreservedBasesAll()
    if (!HasEntities(bases)) {
        bases = FILTER_ByVillageSize(QUERY_GetAllAliveVillages(), BASE_SIZE_OUTPOST)
    }

    const closestBase = FILTER_ByClosest(bases, referenceEntity, 1)
    return HasEntities(closestBase) ? QUERY_GetFactionNameFromEntity(closestBase) : FACTION_PIGLINS[QUERY_RandomNumber(0, FACTION_PIGLINS.length - 1)]
}

SNIPPET_ExternalEvent("ee_execute_debug_invasion_action", (variant, _payload) => {
    const commandString = variant.value
    const tokens = commandString.split(" ")

    // Unpack - undefined actions and horde would be "x" and ids and strength would be -1
    const invasionAction = tokens[0]
    const hordeName = tokens[1]
    const sourceVillageId = parseInt(tokens[2])
    const targetVillageId = parseInt(tokens[3])
    const actionStrength = parseInt(tokens[4])

    OUTPUT_DebugLogInvasion(`DEBUG INVASION ACTION RUN! Result: ${invasionAction}, ${hordeName}, ${sourceVillageId}, ${targetVillageId}, ${actionStrength}`)

    //invasionAction can't be undefined
    if (!ALL_INVASION_ACTIONS.includes(invasionAction)) {
        OUTPUT_DebugLogInvasion(`Invasion action CANCELLED - Unsupported action.`)
        return
    }

    const players = GetPlayers()
    if (!HasEntities(players)) {
        OUTPUT_DebugLogInvasion(`Invasion action CANCELLED - No player entity.`)
        return
    }

    const player = RandomEntity(players)

    // Confirm that the horde is correct
    if (hordeName !== "x") {
        if (!FACTION_PIGLINS.includes(hordeName)) {
            OUTPUT_DebugLogInvasion(`Invasion action CANCELLED - Unsupported horde.`)
            return
        }
    }

    // Confirm that specified village ids are in fact eligible for invasion
    if (sourceVillageId !== NEAREST_VILLAGE && sourceVillageId !== NO_VILLAGE) {
        const sourceVillageEntity = FILTER_ByVillageID(GetUnreservedAll(), sourceVillageId)
        if (!HasEntities(sourceVillageEntity)) {
            OUTPUT_DebugLogInvasion(`Invasion action CANCELLED - Specified source village is not eligible for invasion or it doesn't exist.`)
            return
        }
    }

    if (targetVillageId !== NEAREST_VILLAGE && targetVillageId !== NO_VILLAGE) {
        const targetVillageEntity = FILTER_ByVillageID(GetUnreservedAll(), targetVillageId)
        if (!HasEntities(targetVillageEntity)) {
            OUTPUT_DebugLogInvasion(`Invasion action CANCELLED - Specified target village is not eligible for invasion or it doesn't exist.`)
            return
        }
    }

    //Reaching this point means that IF we have certain arguments set, they are indeed valid

    //action is present, check if horde (and everything else) has to be closest
    let sourceBaseEntity = -1
    let targetVillageEntity = -1
    let horde = hordeName

    // if given horde is "nearest", then find the horde first
    if (hordeName === "x") {
        horde = _GetNearestHorde(player)
    }

    if (sourceVillageId === NEAREST_VILLAGE) {
        // "nearest" source village
        const hordeBases = GetUnreservedFactionBases(horde)
        sourceBaseEntity = FILTER_ByClosest(hordeBases, player, 1)
    } else if (sourceVillageId >= 0) {
        // village id was selected
        sourceBaseEntity = GetVillageEntityFromID(sourceVillageId)
    }

    if (targetVillageId === NEAREST_VILLAGE) {
        // "nearest" target village
        const targetBases = GetUnreservedFactionBases(horde)
        targetVillageEntity = FILTER_ByClosest(targetBases, player, 1)
    } else if (targetVillageId >= 0) {
        // village id was selected
        targetVillageEntity = GetVillageEntityFromID(targetVillageId)
    }

    // The functions will check what input they need and etc.
    _ResolveDAIForFaction(invasionAction, horde, sourceBaseEntity, targetVillageEntity, false)
})

SNIPPET_ExternalEvent("ee_plan_debug_invasion_action", (variant, _payload) => {
    const commandString = variant.value
    OUTPUT_DebugLogInvasion(`[DEBUG INV PLANNING] Received a command ${commandString}`)

    const tokens = commandString.split(" ")

    // Read input
    const action = tokens[0]
    let hordeName = tokens[1]
    let targetId = parseInt(tokens[2])

    if (action === NO_ACTION) {
        Logw("[DEBUG INV PLANNING] Debug invasion planning action failed - no action was selected.")
        return
    }

    if (!ALL_INVASION_ACTIONS.includes(action)) {
        Logw(`[DEBUG INV PLANNING] Debug invasion planning action failed - the action ${action} does not exist.`)
        return
    }

    const player = RandomEntity(GetPlayers())
    if (hordeName === NEAREST_HORDE) {
        hordeName = _GetNearestHorde(player)
    }

    if (!FACTION_PIGLINS.includes(hordeName)) {
        Logw(`[DEBUG INV PLANNING] Debug invasion planning action failed - given horde ${hordeName} does not exist.`)
        return
    }

    if (action === FACTION_ACTION_ATTACK_VILLAGE_V2 || action === FACTION_ACTION_ATTACK_VILLAGE_V2_ATTACK_BOSS) {
        // Forced target id is provided - confirm that it is valid
        if (targetId > 0) {
            const validUnreserved = FILTER_ByVillageID(GetUnreservedTargetsAll(), targetId)
            if (!HasEntities(validUnreserved)) {
                Logw(`[DEBUG INV PLANNING] Debug invasion planning action failed - given attack target ${targetId} is already reserved or doesn't exist.`)
                return
            }
        }

        if (targetId === NEAREST_VILLAGE) {
            const targetEntity = FILTER_ByClosest(GetUnreservedTargetsAll(), player, 1)
            if (!HasEntities(targetEntity)) {
                Logw("[DEBUG INV PLANNING] Debug invasion planning action failed - could not find closest target for a village attack.")
                return
            } else {
                targetId = QUERY_GetVillageIDFromEntity(targetEntity)
            }
        }

        let success = true
        if (targetId === AUTOMATIC_TARGET) {
            success = _SetupDAIForFaction(action, hordeName, { useInvasionManagerRestrictions: false, selectSource: true })
        } else {
            success = _SetupDAIForFaction(action, hordeName, { useInvasionManagerRestrictions: false, selectSource: true, forcedSourceVillageId: targetId, forcedTargetVillageId: targetId })
        }

        if (success) {
            OUTPUT_DebugLogInvasion(`[DEBUG INV PLANNING] Successfully planned debug invasion attack for horde ${hordeName} and target ${targetId}`)
        } else {
            Logw(`[DEBUG INV PLANNING] Failed to plan an attack for horde ${hordeName} and target ${targetId}`)
        }

        return
    }

    if (action === FACTION_ACTION_BOSS_OCCUPATION) {
        // Forced target id is provided - confirm that it is valid
        if (targetId === NEAREST_VILLAGE) {
            const villageTargets = GetOccupiedAll()
            const targetEntity = FILTER_ByClosest(villageTargets, player, 1)
            if (!HasEntities(targetEntity)) {
                Logw("[DEBUG INV PLANNING] Debug invasion planning action failed - could not find closest occupied target village.")
                return
            } else {
                targetId = QUERY_GetVillageIDFromEntity(targetEntity)
            }
        } else if (targetId !== AUTOMATIC_TARGET && !QUERY_IsVillageOccupied(targetId)) {
            Logw(`[DEBUG INV PLANNING] Debug invasion planning action failed - chosen village is not occupied!`)
            return
        }

        let success = true
        if (targetId === AUTOMATIC_TARGET) {
            success = _SetupDAIForFaction(action, hordeName, { useInvasionManagerRestrictions: false, selectSource: true })
        } else {
            success = _SetupDAIForFaction(action, hordeName, { useInvasionManagerRestrictions: false, selectSource: true, forcedSourceVillageId: targetId, forcedTargetVillageId: targetId })
        }

        if (success) {
            OUTPUT_DebugLogInvasion(`[DEBUG INV PLANNING] Successfully planned debug boss occupation for horde ${hordeName} and target ${targetId}`)
        } else {
            Logw(`[DEBUG INV PLANNING] Failed to plan boss occupation for horde ${hordeName} and target ${targetId}`)
        }

        return
    }

    // Forced target id is provided - confirm that it is valid
    if (targetId > 0) {
        const validUnreserved = FILTER_ByVillageID(GetUnreservedFactionBases(hordeName), targetId)
        if (!HasEntities(validUnreserved)) {
            Logw(`[DEBUG INV PLANNING] Debug invasion planning action failed - given action target ${targetId} is already reserved or doesn't exist.`)
            return
        }
    }

    if (targetId === NEAREST_VILLAGE) {
        const targetEntity = FILTER_ByClosest(GetUnreservedFactionBases(hordeName), player, 1)
        if (!HasEntities(targetEntity)) {
            Logw("[DEBUG INV PLANNING] Debug invasion planning action failed - could not find closest target for an invasion action.")
            return
        } else {
            targetId = QUERY_GetVillageIDFromEntity(targetEntity)
        }
    }

    let success = true
    if (targetId === AUTOMATIC_TARGET) {
        success = _SetupDAIForFaction(action, hordeName, { useInvasionManagerRestrictions: false, selectSource: true })
    } else {
        success = _SetupDAIForFaction(action, hordeName, { useInvasionManagerRestrictions: false, selectSource: true, forcedSourceVillageId: targetId, forcedTargetVillageId: targetId })
    }

    if (success) {
        OUTPUT_DebugLogInvasion(`[DEBUG INV PLANNING] Successfully planned debug invasion action ${action} for horde ${hordeName} and target ${targetId}`)
    } else {
        Logw(`[DEBUG INV PLANNING] Failed to plan action ${action} for horde ${hordeName} and target ${targetId}`)
    }
})

SNIPPET_ExternalEvent("ee_log_invasion_phase", (_variant, _payload) => {
    OUTPUT_DebugLogInvasion(`INVASION PHASE IS ${GetInvasionPhase()}`)
})
