const newBaseHordeMessages = {
    //Notification messages per horde
    [FACTION_NAME_ATTACK]: "invasion_new_base_attack",
    [FACTION_NAME_DEFEND]: "invasion_new_base_defend",
    [FACTION_NAME_OBSTACLE]: "invasion_new_base_obstacle",
    [FACTION_NAME_FROST]: "invasion_new_base_frost"
}

const _SuccessfulBuilding = (faction) => {
    OUTPUT_DebugLogInvasion(`The faction ${faction} is building a New Base!`)

    //variables required for below
    const PlayersInBases = GetNumOfPlayersInBases(FACTION_PIGLINS, BASE_SIZE_ALL_PORTALS)
    const invasionAlreadyPlayed = QUERY_GetGlobalVariable(campaignActsVal.invasionSystemFmvConfig.playedOnce)
    const daysElapsed = InvasionDaysCineCounter.Get()

    //Don't play these messages if the invasion FMV is playing, if it is, defer them until after its done TODO: These should all be part of a function inside of invasion_intentions_coordinator
    if (invasionAlreadyPlayed === 1 || PlayersInBases > 0 || daysElapsed >= campaignActsVal.invasionSystemFmvConfig.daysToPass) {
        OUTPUT_Announce(newBaseHordeMessages[faction], [])
    } else {
        //If the message was blocked, then wait until after the cinematic to play it.
        LISTENFOR_CinematicFinished({
            snippet: "cf_post_invasion_cine_base_message",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: campaignActsVal.cinematics.c04InvasionSystem,
            payloadString: newBaseHordeMessages[faction]
        })
    }
}

//Set a timer for after the cinematic, this way it will wait for what it was talking about to finish
SNIPPET_CinematicFinished("cf_post_invasion_cine_base_message", (payload) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_post_invasion_cine_base_message",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 18, //Delay this message and presentation action until POST invasion FMV VO has played and night time center notification. Please see "cf_post_invasion_cine" in campaign_acts.js
        payloadString: payload.string
    })
})

//Plays a HUD message after a delay
SNIPPET_LocalTimer("lt_post_invasion_cine_base_message", (payload) => {
    OUTPUT_Announce(payload.string, [])
})

//Revise once more complex behaviour is required
const GenerateNewBaseSource = (faction) => {
    const availableBases = GetUnreservedFactionBases(faction)

    let source = -1
    if (QUERY_GetEntitiesCount(availableBases) > 0) {
        source = RandomEntity(availableBases)
    }

    return source
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetNearBase = (faction, selectSource = true, useInvasionManagerRestrictions = true, sourceVillageId = null) => {
    // Check if exceeding the cap
    if (useInvasionManagerRestrictions && !CheckBaseNumberRestriction(faction)) {
        return false
    }

    let source = -1
    if (sourceVillageId !== null) {
        source = GetVillageEntityFromID(sourceVillageId)

        if (!HasEntities(source)) {
            OUTPUT_DebugLogInvasion(`Failed to plan a build new base action: given source village ${sourceVillageId} is an invalid entity!`)
            return false
        }

        if (!HasEntities(OPER_Intersection(GetUnreservedFactionBases(faction), source))) {
            OUTPUT_DebugLogInvasion(`Failed to plan a build new base action: given source village ${sourceVillageId} is already reserved!`)
            return false
        }
    } else if (selectSource) {
        source = GenerateNewBaseSource(faction)

        if (!HasEntities(source)) {
            return false
        }
    }

    if (HasEntities(source)) {
        ReserveVillage(source)

        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.BUILDING)

        OUTPUT_DebugLogInvasion("Prepared source " + QUERY_GetVillageIDFromEntity(source) + " for New Base intention for faction " + faction)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_BUILD_NEAR_BASE, [], false, faction, 0)
    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveNearBase = (faction) => {
    OUTPUT_DebugLogInvasion(`Trying building a Near Base for ${faction}`)

    if (SpawnBaseWithRulesInClaimedArea(faction, BASE_SIZE_SMALL, true)) {
        _SuccessfulBuilding(faction)

        // Increment base constructed counter
        HordeBasesConstructedCounter.Increment(faction, BASE_SIZE_SMALL)
        HordeBasesConstructedAndUpgradedCounter.Increment(faction)

        if (DoOnce("invasionFirstNewBaseCreated")) {
            PlayPresentationActionToAll("invasion_new_base")
        }

        return true
    }

    Logw(`The faction ${faction} couldn't build a New Base. Placement failed!`)
    return false
}
