const newOutpostHordeMessages = {
    //Notification messages per horde
    [FACTION_NAME_ATTACK]: "invasion_new_outpost_attack",
    [FACTION_NAME_DEFEND]: "invasion_new_outpost_defend",
    [FACTION_NAME_OBSTACLE]: "invasion_new_outpost_obstacle",
    [FACTION_NAME_FROST]: "invasion_new_outpost_frost"
}

const GenerateNewOutpostSource = (faction) => {
    const availableBases = GetUnreservedFactionBases(faction)

    let source = -1
    if (QUERY_GetEntitiesCount(availableBases) > 0) {
        source = RandomEntity(availableBases)
    }

    return source
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetNewOutpost = (faction, selectSource = true, useInvasionManagerRestrictions = true, sourceVillageId = null) => {
    // Check if exceeding the cap
    if (useInvasionManagerRestrictions && !CheckOutpostNumberRestriction(faction)) {
        return false
    }

    let source = -1
    if (sourceVillageId !== null) {
        source = GetVillageEntityFromID(sourceVillageId)

        if (!HasEntities(source)) {
            OUTPUT_DebugLogInvasion(`Failed to plan a build new outpost action: given source village ${sourceVillageId} is an invalid entity!`)
            return false
        }

        if (!HasEntities(OPER_Intersection(GetUnreservedFactionBases(faction), source))) {
            OUTPUT_DebugLogInvasion(`Failed to plan a build new outpost action: given source village ${sourceVillageId} is already reserved!`)
            return false
        }
    } else if (selectSource) {
        source = GenerateNewOutpostSource(faction)

        if (!HasEntities(source)) {
            return false
        }
    }

    if (HasEntities(source)) {
        ReserveVillage(source)

        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.BUILDING_OUTPOST)

        OUTPUT_DebugLogInvasion("Prepared source " + QUERY_GetVillageIDFromEntity(source) + " for New Outpost intention for faction " + faction)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_BUILD_NEW_OUTPOST, [], false, faction, 0)
    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveNewOutpost = (faction) => {
    if (PlacePiglinOutpost(faction)) {
        OUTPUT_DebugLogInvasion(`The faction ${faction} has placed a new outpost!`)

        //variables required for below
        const PlayersInBases = GetNumOfPlayersInBases(FACTION_PIGLINS, BASE_SIZE_ALL_PORTALS)
        const invasionAlreadyPlayed = QUERY_GetGlobalVariable(campaignActsVal.invasionSystemFmvConfig.playedOnce)
        const daysElapsed = InvasionDaysCineCounter.Get()

        //Don't play these messages if the invasion FMV is playing, if it is, defer them until after its done TODO: These should all be part of a function inside of invasion_intentions_coordinator
        if (invasionAlreadyPlayed === 1 || PlayersInBases > 0 || daysElapsed >= campaignActsVal.invasionSystemFmvConfig.daysToPass) {
            OUTPUT_Announce(newOutpostHordeMessages[faction], [])
        } else {
            //If the message was blocked, then wait until after the cinematic to play it.
            LISTENFOR_CinematicFinished({
                snippet: "cf_post_invasion_cine_outpost_message",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                cinematicName: campaignActsVal.cinematics.c04InvasionSystem,
                payloadString: newOutpostHordeMessages[faction]
            })
        }
        return true
    } else {
        OUTPUT_DebugLogInvasion(`The faction ${faction} couldn't build a New Outpost. Placement failed!`)
        return false
    }
}

//Set a timer for after the cinematic, this way it will wait for what it was talking about to finish
SNIPPET_CinematicFinished("cf_post_invasion_cine_outpost_message", (payload) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_post_invasion_cine_outpost_message",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 18, //Delay this message until POST invasion FMV VO has played and night time center notification. Please see "cf_post_invasion_cine" in campaign_acts.js
        payloadString: payload.string
    })
})

//Plays a HUD message after the VO
SNIPPET_LocalTimer("lt_post_invasion_cine_outpost_message", (payload) => {
    OUTPUT_Announce(payload.string, [])
})