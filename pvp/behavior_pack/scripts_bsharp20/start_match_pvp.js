const pvpStartMatchVal = {
    startingTime: TIME_DAWN, // Modified by custom settings
    lockDayNightCycle: false, // Modified by custom settings
    vo: {
        pvpOpening: ["pvp_opening", "pvp_opening_2", "pvp_opening_3"]
    },
    messages: {
        pvpObjective: "pvp_onb_start_match",
        pvpSharedResources: "pvp_onb_start_shared_resources"
    },
    cinematic: {
        introCine: "pvp_c01_intro"
    },
    sequenceDelayTime: 50,
    sequenceDelayTimerName: "t_delay_seq_world_map"
}

SNIPPET_Bootstrap("", () => {
    // speculative fix for bug 1090467 where sometimes public pvp matches don't end. I think it has to do with
    // gv data being set from a previous match run on the server, but adding this in the meantime to see if it
    // can happen with this added
    OUTPUT_SetGlobalVariable(GAME_MODE_GLOBAL.matchStarted, 0)
})

SNIPPET_InheritsFromGameMode("conquest", () => {
    OUTPUT_SetTimeOfDay(pvpStartMatchVal.startingTime)
    OUTPUT_ServerMapSetKeyValue(MAP_KEY.GAME_RULE, GAME_RULE.PVP)
    OUTPUT_ServerMapSetKeyValue(MAP_KEY.TEAM_OUTLINES, TEAM_OUTLINES.ENABLED)

    LISTENFOR_PlayersReady({
        snippet: "pr_pvp_opening",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
    LISTENFOR_PlayerConnected({
        snippet: "pc_grant_recipe__book_resource_pvp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    LISTENFOR_VillageGenerated({
        snippet: "vg_pvp_hq",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_BLUE,
        payloadString: PVP_HEADQUARTERS_BLUE
    })
    LISTENFOR_VillageGenerated({
        snippet: "vg_pvp_hq",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_RED,
        payloadString: PVP_HEADQUARTERS_RED
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_start_pvp_match",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "start_pvp_match"
    })
})

SNIPPET_VillageGenerated("vg_pvp_hq", (villageId, payload) => {
    const baseDeck = DECK_Empty()
    const zones = ZonesCard("addZone", 1)
    DECK_PutOnBottomOf(zones, baseDeck)
    const ring1Zones = LayerOfZonesCard("addLayerOfZones", 2)
    DECK_PutOnBottomOf(ring1Zones, baseDeck)
    const zonerCard = BuildableCard(TAG_PVP_HQ, 1)
    DECK_MultiplyByMultipleRules(zonerCard, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])
    DECK_PutOnBottomOf(zonerCard, baseDeck)
    SetupBasicVillageClearingCards(baseDeck)
    DECK_PutOnTopOf(EntityClearingCard("clearLootPiglinCrate"), baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    OUTPUT_CreatePersistentWorldRequest(GetVillageEntityFromID(villageId), 100, "pvp_high_priority_village", payload.string)
    OUTPUT_SetFastTravelEnabled(villageId, true)
})

SNIPPET_PlayersReady("pr_pvp_opening", (_payload) => {
    const blueHQ = GetEntitiesWithTagsAndVillage([TAG_PVP_HQ], QUERY_GetVillageIDFromEntity(GetVillageEntityFromFaction(PVP_HEADQUARTERS_BLUE)))
    const orangeHQ = GetEntitiesWithTagsAndVillage([TAG_PVP_HQ], QUERY_GetVillageIDFromEntity(GetVillageEntityFromFaction(PVP_HEADQUARTERS_RED)))

    if (HasEntities(FILTER_ByTeam(QUERY_GetAlivePlayers(), TEAM_BLUE))) {
        OUTPUT_TriggerCinematic(pvpStartMatchVal.cinematic.introCine, blueHQ)
    }
    if (HasEntities(FILTER_ByTeam(QUERY_GetAlivePlayers(), TEAM_RED))) {
        OUTPUT_TriggerCinematic(pvpStartMatchVal.cinematic.introCine, orangeHQ)
    }

    LISTENFOR_CinematicFinished({
        snippet: "cf_pvp_opening_finished",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: pvpStartMatchVal.cinematic.introCine
    })
    Once()
})

const _StartMatch = () => {
    if (!pvpStartMatchVal.lockDayNightCycle) {
        OUTPUT_LockDayNightCycle(false) // Day night cycle is locked by default, and we want to unlock it when the match starts unless we've set it otherwise in the settings
    }
    StartMatch()

    const openingLines = ChooseFromArray(pvpStartMatchVal.vo.pvpOpening)
    PlayPresentationActionToAll(openingLines)
    DelayedAnnounce(pvpStartMatchVal.messages.pvpObjective, 10)
    DelayedAnnounce(pvpStartMatchVal.messages.pvpSharedResources, 22)

    OUTPUT_SetNamedTimer(pvpStartMatchVal.sequenceDelayTimerName, pvpStartMatchVal.sequenceDelayTime)
    LISTENFOR_Timer({
        snippet: "t_start_seq_delay_world_map",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timerName: pvpStartMatchVal.sequenceDelayTimerName,
        threshold: 0
    })
}

SNIPPET_Timer("t_start_seq_delay_world_map", (_timeLeft) => {
    OUTPUT_AnnounceSequenceTeam("open_world_map", TEAM_BLUE)
    OUTPUT_AnnounceSequenceTeam("open_world_map", TEAM_RED)
})

SNIPPET_CinematicFinished("cf_pvp_opening_finished", (_payload) => {
    _StartMatch()
    Once()
})

SNIPPET_ExternalEvent("ee_start_pvp_match", (_variant, _payload) => {
    if (OnceIfMatchStarted()) {
        return
    }
    _StartMatch()
})

SNIPPET_PlayerConnected("pc_grant_recipe__book_resource_pvp", (player, _isReconnecting, _payload) => {
    if (QUERY_GetResource(player, "unlock_journal_ally_spawner") === 0) {
        OUTPUT_AddOrRemoveResource(player, "unlock_journal_ally_spawner", 1, false)
    }
})
