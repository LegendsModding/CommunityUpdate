const invasionIntentionAttackVals = {
    common: {
        wellhouseWoFMinProximity: 310, // Wellhouses within this range of the WoF won't be targeted for attacks.
        global: {
            villageThreatenedPlayed: "invasionVillageThreatenedVOPlayed",
            mobAllianceThreatenedPlayed: "invasionMAThreatenedVOPlayed",
            firstVillageAttacked: "invasionFirstVillageAttacked",
            firstMobAllianceAttacked: "invasionFirstMAAttacked"
        },
        VO: {
            postFirstVillageTargeted: "invasion_village_targeted_1",
            postFirstMobAllianceTargeted: "mob_targeted_1",
            postFirstVillageAttacked: "invasion_village_under_attack_2",
            postFirstMobAllianceAttacked: "mob_under_attack_1"
        }
    },
    [FACTION_NAME_ATTACK]: {
        minSeconds: 60,
        attackWeights: {
            village:     [10, 10, 9, 8, 8, 8, 8], //Weights for phases 1-> 7
            mobAlliance: [5, 5, 5, 5, 5, 5, 5],
            outpost:     [1, 1, 1, 1, 1, 1, 1]
        }
    },
    [FACTION_NAME_DEFEND]: {
        minSeconds: 60,
        attackWeights: {
            village:     [10, 10, 9, 8, 8, 8, 8], //Weights for phases 1-> 7
            mobAlliance: [5, 5, 5, 5, 5, 5, 5],
            outpost:     [1, 1, 1, 1, 1, 1, 1]
        }
    },
    [FACTION_NAME_FROST]: {
        minSeconds: 60,
        attackWeights: {
            village:     [10, 10, 9, 8, 8, 8, 8], //Weights for phases 1-> 7
            mobAlliance: [5, 5, 5, 5, 5, 5, 5],
            outpost:     [1, 1, 1, 1, 1, 1, 1]
        }
    },
    [FACTION_NAME_OBSTACLE]: {
        minSeconds: 60,
        attackWeights: {
            village:     [10, 10, 9, 8, 8, 8, 8], //Weights for phases 1-> 7
            mobAlliance: [5, 5, 5, 5, 5, 5, 5],
            outpost:     [1, 1, 1, 1, 1, 1, 1]
        }
    }
}

const invasionAttackStrengthDecksMeta = {
    attackStrengthDeckName: "invasion_attack_strength_deck",
    attackStrengthCardTag: "invasion_attack_strength"
}

//========================================================
//|                Village Attack Version 2              |
//========================================================

SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_ExternalEvent({
            snippet: "ee_execute_debug_village_attack_v2",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "executeDebugVillageAttackV2"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_debug_damage_village",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "debugDamageVillage"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_debug_damage_village_direct",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "debugDamageVillageDirect"
        })
    }
})

const _SetInvasionAttackV2 = (faction, attackVillages, attackMobAlliances, attackPlayerOutposts, strengthOverride = undefined, debugTargetSelect = false, targetVillageId = null) => {
    let village = null
    if (targetVillageId !== null) {
        village = GetVillageEntityFromID(targetVillageId)
        if (!HasEntities(village)) {
            OUTPUT_DebugLogInvasion(`Invasion Intention Attack V2 Failed: Given target village ${targetVillageId} is an invalid entity!`)
            return false
        }

        if (!HasEntities(OPER_Intersection(GetUnreservedTargetsAll(), village))) {
            OUTPUT_DebugLogInvasion(`Invasion Intention Attack V2 Failed: Given target village ${targetVillageId} is already reserved!`)
            return false
        }
    } else if (!debugTargetSelect) {
        village = _SelectAttackResultV2(faction, attackVillages, attackMobAlliances, attackPlayerOutposts)
    } else {
        const pool = attackVillages && attackMobAlliances ? GetUnreservedTargetsAll() : attackVillages ? GetUnreservedFriendlyVillages() : GetUnreservedMobAllianceVillages()
        if (HasEntities(pool)) {
            village = RandomEntity(pool)
        }
    }

    if (village === null) {
        OUTPUT_DebugLogInvasion("Invasion Intention Attack V2 Failed: Could not find a valid village to attack")
        return false
    }

    const villageId = QUERY_GetVillageIDFromEntity(village)
    const strength = strengthOverride !== undefined ? strengthOverride : GetAttackStrengthV2(villageId)

    //TODO: (dplourde) Temp changes to catch crashes. Remove once the crash is resolved: ADO 762025
    Logw("\tPrepared " + villageId + " for Attack V2 intention for faction " + faction + " with strength " + strength)

    OUTPUT_DebugLogInvasion("Prepared " + villageId + " for Attack V2 intention for faction " + faction + " with strength " + strength)

    ReserveVillage(village)

    // Disable the interaction on a player wellhouse/outpost
    if (IsPlayerOutpost(villageId)) {
        const playerOutpost = GetPlayerOutpostStructure(villageId)
        if (HasEntities(playerOutpost)) {
            OUTPUT_SetInteractionState(playerOutpost, false)
        }
    }

    OUTPUT_SetDelayedInvasionAction(village, FACTION_ACTION_ATTACK_VILLAGE_V2, [], false, faction, strength)
    if (IsBossAttack(faction, strength)) {
        OUTPUT_MapSetKeyValue(village, MAP_KEY.INVASION_SPECIAL, MAP_INVASION_SPECIAL.IS_BOSS)
    }
    // Update map icons
    const targetedForAttackKeyValue = witchHutEnabled.defaultValue === 1 ? MAP_INVASION_INTENTION.TARGETED : MAP_INVASION_INTENTION.TARGETED_NO_WITCHES
    Logi(" ### witchHutEnabled.defaultValue ### " + witchHutEnabled.defaultValue)
    Logi(" ### targetedForAttackKeyValue ### " + targetedForAttackKeyValue)
    OUTPUT_MapSetKeyValue(village, MAP_KEY.INVASION_INTENTION, targetedForAttackKeyValue)
    OUTPUT_MapSetKeyValue(village, MAP_KEY.ATTACKING_FACTION, faction)
    OUTPUT_MapSetKeyValue(village, MAP_KEY.STRENGTH, `${strength}`)

    //DayCount - Get how many days have elapsed to check below
    const daysElapsed = InvasionDaysCineCounter.Get()

    //VO
    if (IsMobAllianceVillage(villageId)) {
        if (DoOnce(invasionIntentionAttackVals.common.global.mobAllianceThreatenedPlayed)) {
            PlayPresentationActionToAll(invasionIntentionAttackVals.common.VO.postFirstMobAllianceTargeted)
        }
    } else {
        if (daysElapsed > 0) { //we don't play first time VO at beginning of Act 2 as there is too much going on. This can trigger the next day.
            if (DoOnce(invasionIntentionAttackVals.common.global.villageThreatenedPlayed)) {
                PlayPresentationActionToAll(invasionIntentionAttackVals.common.VO.postFirstVillageTargeted)
            }
        }
    }

    //ONBOARDING
    IncrementGlobal(ONBOARDING_GLOBALS.START_VILLAGE_PLAN_ATTACK)

    return true
}

const RefillInvasionAttackStrengthDeck = () => {
    let combinedDeck = DECK_Empty()

    const phase = GetInvasionPhase()
    // Phase can now be -1 before the act 2 begins
    if (phase >= 0) {
        const difficulty = QUERY_GameDifficulty()

        OUTPUT_DebugLogInvasion(`Refilling village attack strength deck with difficulty '${difficulty}' and phase '${phase}'`)

        const cardData = invasionAttackStrengthDecks[phase]
        if (cardData === undefined || cardData.phase !== phase) {
            Loge(`\t Couldn't find village attack strength deck! Card data was ${cardData === undefined ? "undefined" : cardData.phase}`)
        }

        for (const cardConfig of cardData.cards) {
            const attackStrengthCard = DECK_MakeFromLibraryFilteredWithCopies(VARIATION_DECK_LIBRARY_NAME, [invasionAttackStrengthDecksMeta.attackStrengthCardTag, `${cardConfig.strength}`], cardConfig.count)
            combinedDeck = DECK_Stack(attackStrengthCard, combinedDeck)

            //TODO: (dplourde) Temp changes to catch crashes. Remove once the crash is resolved: ADO 762025
            Logw(`\t Added x${cardConfig.count} strength ${cardConfig.strength} card(s)`)
            OUTPUT_DebugLogInvasion(`\t Added x${cardConfig.count} strength ${cardConfig.strength} card(s)`)
        }
    }

    DECK_ShuffleGroup(combinedDeck, RANDOM_GROUP_INVASION)
    OUTPUT_SetNamedDeck(invasionAttackStrengthDecksMeta.attackStrengthDeckName, combinedDeck)
}

const GetAttackStrengthV2 = (villageId) => {
    // Refill the deck if its been emptied.
    if (QUERY_GetNamedDeckCardCount(invasionAttackStrengthDecksMeta.attackStrengthDeckName) === 0) {
        RefillInvasionAttackStrengthDeck()
    }

    const strengthString = OUTPUT_PlayGenericCardFromNamedDeck(invasionAttackStrengthDecksMeta.attackStrengthDeckName, villageId)

    //TODO: (dplourde) Temp changes to catch crashes. Remove once the crash is resolved: ADO 762025
    Logw(`\tGetting attack strength string: ${strengthString}`)
    const strengthInt = parseInt(strengthString)
    Logw(`\tConvert attack strength to int: ${strengthInt}`)
    return strengthInt
}

// Select a single village/mob alliance/outpost to attack without requiring a source base launching the attack.
const _SelectAttackResultV2 = (faction, attackVillages, attackMobAlliances, attackPlayerOutposts) => {
    const friendlyVillages = GetUnreservedFriendlyVillages()
    const allWellhouses = FILTER_ByVillageSize(friendlyVillages, [VILLAGE_SIZE_PLAYER])

    // Villager village candidates
    let villageTargets = EMPTY_ENTITY_GROUP
    if (attackVillages) {
        // Make sure we filter out wellhouses
        villageTargets = OPER_Difference(friendlyVillages, allWellhouses)
    }

    // Mob alliance candidates
    let mobAllianceTargets = EMPTY_ENTITY_GROUP
    if (attackMobAlliances) {
        mobAllianceTargets = GetUnreservedMobAllianceVillages()
    }

    // Outpost candidates
    let wellhouseTargets = EMPTY_ENTITY_GROUP
    if (attackPlayerOutposts) {
        const wof = GetVillageEntityFromFaction(WELL_OF_FATE)
        const invalidWellhouses = FILTER_ByDistance(allWellhouses, wof, invasionIntentionAttackVals.common.wellhouseWoFMinProximity)
        wellhouseTargets = OPER_Difference(allWellhouses, invalidWellhouses)
    }

    let finalResult = null

    const phase = GetInvasionPhase()
    const villageWeight = HasEntities(villageTargets) ? invasionIntentionAttackVals[faction].attackWeights.village[phase] : 0
    const mobAllianceWeight = HasEntities(mobAllianceTargets) ? invasionIntentionAttackVals[faction].attackWeights.mobAlliance[phase] : 0
    const outpostWeight = HasEntities(wellhouseTargets) ? invasionIntentionAttackVals[faction].attackWeights.outpost[phase] : 0

    const totalWeight = villageWeight + mobAllianceWeight + outpostWeight
    if (totalWeight === 0) {
        return finalResult
    }

    const randomRoll = RandomFloat() * totalWeight
    if (randomRoll < villageWeight) {
        finalResult = RandomEntity(villageTargets)
    } else if (randomRoll < villageWeight + mobAllianceWeight) {
        finalResult = RandomEntity(mobAllianceTargets)
    } else {
        // No need to check the roll here since this is the only other possible choice.
        finalResult = RandomEntity(wellhouseTargets)
    }

    return finalResult
}

const GetAttackTimeV2 = (strength) => {
    let time = 25 + strength * 25
    if (time > 100) {
        time = 100
    }
    return time
}

const GetAttackV2MinSeconds = (horde) => {
    const info = invasionIntentionAttackVals[horde]
    return info.minSeconds
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetAttackVillageV2 = (faction, targetVillageId) => {
    return _SetInvasionAttackV2(faction, true, true, true, undefined, false, targetVillageId)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetAttackVillageV2BossAttack = (faction, targetVillageId) => {
    return _SetInvasionAttackV2(faction, true, false, false, 4, false, targetVillageId)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveAttackVillageV2 = (faction, source, strength = 0, time = 0) => {
    if (!HasEntities(source)) {
        OUTPUT_DebugLogInvasion(`Can't perform Attack V2 for faction ${faction} if the village entity is invalid!`)
        return
    }

    const villageId = QUERY_GetVillageIDFromEntity(source)
    if (!IsVillageAlive(villageId) || QUERY_HasTags(source, [TAG_INACTIVE_VILLAGE])) {
        OUTPUT_DebugLogInvasion(`DAI Attack for faction ${faction} cannot happen because target village is either dead or disabled.`)
        return false
    }

    // Get additional params if they aren't overriden
    if (strength === 0) {
        strength = GetAttackStrengthV2(villageId)
    }

    // Get additional params if they aren't overriden
    if (time === 0) {
        time = GetAttackTimeV2(strength)
    }

    const minSeconds = GetAttackV2MinSeconds(faction)

    //TODO: (dplourde) Temp changes to catch crashes. Remove once the crash is resolved: ADO 762025
    Logw(`DAI Attack Resolution for the village ${villageId} from faction ${faction} with strength ${strength} and time ${time}`)

    OUTPUT_DebugLogInvasion(`DAI Attack Resolution for the village ${villageId} from faction ${faction} with strength ${strength} and time ${time}`)

    OUTPUT_StartInvasionAttackV2(villageId, faction, strength, time, minSeconds)

    if (IsBossAttack(faction, strength)) {
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_SPECIAL, MAP_INVASION_SPECIAL.IS_BOSS)
    }

    const underAttackKeyValue = witchHutEnabled.defaultValue === 1 ? MAP_INVASION_ACTIVE.IS_UNDER_ATTACK : MAP_INVASION_ACTIVE.IS_UNDER_ATTACK_NO_WITCHES
    OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_ACTIVE, underAttackKeyValue)
    OUTPUT_MapSetKeyValue(source, MAP_KEY.ATTACKING_FACTION, faction)
    OUTPUT_MapSetKeyValue(source, MAP_KEY.STRENGTH, `${strength}`)

    //output a message
    const PlayersInBases = GetNumOfPlayersInBases(FACTION_PIGLINS, BASE_SIZE_ALL_PORTALS)
    const invasionAlreadyPlayed = QUERY_GetGlobalVariable(campaignActsVal.invasionSystemFmvConfig.playedOnce)
    const daysElapsed = InvasionDaysCineCounter.Get()

    //Don't play these messages if the invasion FMV is playing, if it is, defer them until after its done TODO: These should all be part of a function inside of invasion_intentions_coordinator
    if (invasionAlreadyPlayed === 1 || PlayersInBases > 0 || daysElapsed >= campaignActsVal.invasionSystemFmvConfig.daysToPass) {
        if (IsMobAllianceVillage(villageId)) {
            if (DoOnce(invasionIntentionAttackVals.common.global.firstMobAllianceAttacked)) {
                PlayPresentationActionToAll(invasionIntentionAttackVals.common.VO.postFirstMobAllianceAttacked)
            }
        } else {
            if (DoOnce(invasionIntentionAttackVals.common.global.firstVillageAttacked)) {
                PlayPresentationActionToAll(invasionIntentionAttackVals.common.VO.postFirstVillageAttacked)
            }
            //ONBOARDING
            IncrementGlobal(ONBOARDING_GLOBALS.START_VILLAGE_PLAN_ATTACK)
        }
    } else {
        //If the message was blocked, then wait until after the cinematic to play it.
        LISTENFOR_CinematicFinished({
            snippet: "cf_post_invasion_cine_attack_message",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: campaignActsVal.cinematics.c04InvasionSystem,
            payloadInt: villageId
        })
    }

    return true
}

SNIPPET_CinematicFinished("cf_post_invasion_cine_attack_message", (payload) => { //Set a timer for after the cinematic, this way it will wait for what it was talking about to finish
    LISTENFOR_LocalTimer({
        snippet: "lt_post_invasion_cine_attack_message",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 15, //Delay this message and presentation action until POST invasion FMV VO has played and night time center notification. Please see "cf_post_invasion_cine" in campaign_acts.js
        payloadInt: payload.int
    })
})

SNIPPET_LocalTimer("lt_post_invasion_cine_attack_message", (payload) => { //Plays a HUD message + first time VO (if not already played)
    if (IsMobAllianceVillage(payload.int)) {
        if (DoOnce(invasionIntentionAttackVals.common.global.firstMobAllianceAttacked)) {
            PlayPresentationActionToAll(invasionIntentionAttackVals.common.VO.postFirstMobAllianceAttacked)
        }
    } else {
        if (DoOnce(invasionIntentionAttackVals.common.global.firstVillageAttacked)) {
            PlayPresentationActionToAll(invasionIntentionAttackVals.common.VO.postFirstVillageAttacked)
        }
        //ONBOARDING
        IncrementGlobal(ONBOARDING_GLOBALS.START_VILLAGE_PLAN_ATTACK)
    }
})

const CancelPlannedVillageAttacks = () => {
    const targetedVillages = FILTER_ByTagFilter(GetAllFriendlyVillages(), [RESERVE_TAG], [TAG_INACTIVE_VILLAGE]) // Both villager villages and player wellhouses.
    const targetedMobAlliances = FILTER_ByTagFilter(GetAllMobAllianceVillages(), [RESERVE_TAG], [TAG_INACTIVE_VILLAGE])
    const allTargets = OPER_Union(targetedVillages, targetedMobAlliances)

    ForEachEntities(allTargets, (targetedVillage) => {
        UnreserveVillage(targetedVillage)
    })

    OUTPUT_ThwartDelayedInvasionActions(allTargets, "")
    OUTPUT_MapRemoveKey(allTargets, MAP_KEY.INVASION_INTENTION)
    OUTPUT_MapRemoveKey(allTargets, MAP_KEY.ATTACKING_FACTION)
    OUTPUT_MapRemoveKey(allTargets, MAP_KEY.STRENGTH)
}

const FastForwardActiveVillageAttacks = () => {
    const attackedVillages = FILTER_InvasionParticipant(GetAllFriendlyVillages(), true) // Both villager villages and player wellhouses.
    const attackedMobAlliances = FILTER_InvasionParticipant(GetAllMobAllianceVillages(), true)
    const allAttackedTargets = OPER_Union(attackedVillages, attackedMobAlliances)
    OUTPUT_FastForwardVillageAttacks(allAttackedTargets)
}

SNIPPET_ExternalEvent("ee_execute_debug_village_attack_v2", (variant, _payload) => {
    const commandString = variant.value
    const tokens = commandString.split(" ")

    let targetVillageId = parseInt(tokens[0])
    let hordeName = tokens[1]
    let strength = parseInt(tokens[2])
    let time = parseInt(tokens[3])

    const players = GetPlayers()
    if (!HasEntities(players)) {
        OUTPUT_DebugLogInvasion(`Debug Village Attack V2: CANCELLED - No player entity.`)
        return
    }

    const player = RandomEntity(players)

    if (targetVillageId === -2) {
        OUTPUT_DebugLogInvasion(`Debug Village Attack V2: CANCELLED - Can't perform attack on nothing.`)
        return
    }

    if (targetVillageId === -1) {
        const allVillages = GetUnreservedTargetsAll()
        if (!HasEntities(allVillages)) {
            OUTPUT_DebugLogInvasion(`Debug Village Attack V2: CANCELLED - No unreserved villages available.`)
            return
        }
        targetVillageId = QUERY_GetVillageIDFromEntity(FILTER_ByClosest(allVillages, player, 1))
    }

    if (hordeName === "x") {
        const allBases = GetAllInvasionBases()
        hordeName = QUERY_GetFactionNameFromEntity(FILTER_ByClosest(allBases, player, 1))
    }

    if (strength === -1) {
        //Calculate the strength
        strength = GetAttackStrengthV2(targetVillageId)
    }

    if (time === 0) {
        time = GetAttackTimeV2(strength)
    }

    if (!IsNightTime()) {
        OUTPUT_SetTimeOfDay(TIME_DUSK)
    }

    OUTPUT_DebugLogInvasion(`Debug Village Attack V2: village '${targetVillageId}', Horde '${hordeName}', strength '${strength}', time '${time}'`)
    DAI_ResolveAttackVillageV2(hordeName, GetVillageEntityFromID(targetVillageId), strength, time)
})

SNIPPET_ExternalEvent("ee_debug_damage_village", (variant, _payload) => {
    const commandString = variant.value
    const tokens = commandString.split(" ")

    // Unpack - undefined actions and horde would be "x" and ids and strength would be -1
    const targetVillageId = parseInt(tokens[0])
    let hordeName = tokens[1]
    let strength = parseInt(tokens[2])
    const percentMod = parseFloat(tokens[3])

    const players = GetPlayers()
    if (!HasEntities(players)) {
        OUTPUT_DebugLogInvasion(`Debug Damage Village: CANCELLED - No player entity.`)
        return
    }

    const player = RandomEntity(players)

    if (targetVillageId === -1) {
        OUTPUT_DebugLogInvasion(`Debug Damage Village: CANCELLED - Invalid village Id!`)
        return
    }

    if (hordeName === "x") {
        const allBases = GetAllInvasionBases()
        hordeName = QUERY_GetFactionNameFromEntity(FILTER_ByClosest(allBases, player, 1))
    }

    if (strength === -1) {
        strength = GetAttackStrengthV2(targetVillageId)
    } else if (strength < 0) {
        OUTPUT_DebugLogInvasion(`Debug Damage Village: CANCELLED - Requires strength greater than 0.`)
        return
    }

    if (percentMod < 0 || percentMod > 1) {
        OUTPUT_DebugLogInvasion(`Debug Damage Village: CANCELLED - Requires percent mod between 0 - 1`)
        return
    }

    OUTPUT_DebugLogInvasion(`Debug Damage Village: Damaging village '${targetVillageId}' using: horde '${hordeName}', strength '${strength}', percent '${percentMod}'`)
    InvasionAttackV2ApplyDamage(targetVillageId, hordeName, strength, percentMod)
})

SNIPPET_ExternalEvent("ee_debug_damage_village_direct", (variant, _payload) => {
    const commandString = variant.value
    const tokens = commandString.split(" ")

    // Unpack - undefined actions and horde would be "x" and ids and strength would be -1
    const targetVillageId = parseInt(tokens[0])
    let hordeName = tokens[1]
    const damage = tokens[2]

    const players = GetPlayers()
    if (!HasEntities(players)) {
        OUTPUT_DebugLogInvasion(`Debug Damage Village: CANCELLED - No player entity.`)
        return
    }

    const player = RandomEntity(players)

    if (targetVillageId === -1) {
        OUTPUT_DebugLogInvasion(`Debug Damage Village: CANCELLED - Invalid village Id!`)
        return
    }

    if (hordeName === "x") {
        const allBases = GetAllInvasionBases()
        hordeName = QUERY_GetFactionNameFromEntity(FILTER_ByClosest(allBases, player, 1))
    }

    if (damage < 0) {
        OUTPUT_DebugLogInvasion(`Debug Damage Village Occupation: CANCELLED - Requires 'damage' be 0 or greater`)
        return
    }

    OUTPUT_DebugLogInvasion(`Debug Damage Village Occupation: Damaging village '${targetVillageId}' using: horde '${hordeName}', damage ${damage}'`)
    DistributeVillageDamageCommon(targetVillageId, hordeName, damage)
})
