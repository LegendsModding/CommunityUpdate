// OUTPOST DESPAWN HELPERS
const _DespawnOutposts = (outposts) => {
    // Hide their icons so we don't see ruins
    OUTPUT_MapSetKeyValue(outposts, MAP_KEY.VISIBILITY, MAP_VISIBILITY.HIDDEN)

    // Destroy all the villages
    OUTPUT_DespawnVillageEntities(outposts)
}

const _DespawnFarOutposts = () => {
    const aliveOutposts = FILTER_ByVillageSize(QUERY_GetAllAliveVillages(), [BASE_SIZE_OUTPOST])
    let closestOutposts = EMPTY_ENTITY_GROUP

    const alivePlayers = GetPlayers()
    ForEachEntities(alivePlayers, (playerEntity) => {
        closestOutposts = OPER_Union(closestOutposts, FILTER_ByDistance(aliveOutposts, playerEntity, 200))
    })

    // We want to despawn only outposts away from all the players
    const farOutposts = OPER_Difference(aliveOutposts, closestOutposts)

    _DespawnOutposts(farOutposts)
}

const _DespawnAllOutposts = () => {
    const aliveOutposts = FILTER_ByVillageSize(QUERY_GetAllAliveVillages(), [BASE_SIZE_OUTPOST])
    _DespawnOutposts(aliveOutposts)
}

//ACT FUNCTIONS
const _CampaignAct1AStart = () => {
    Logi("### _CampaignAct1AStart ###")
    //Begin Act1A at game start
    DebugOutput(campaignActsVal.announcements.announceAct1AStart, [], campaignActsVal.debug)
    OUTPUT_SetGlobalVariable(GV_TELEMETRY_GAMEACT, TELEMETRY_GAMEACT_IDS.ACT1A)
    OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.ACT_1A)

    //Set 1A time properties: Noon, Two Suns skybox and unlocked cycle. The cycle is locked by default.
    OUTPUT_SetSkyState(SKY_STATE_TWO_SUNS)
    OUTPUT_SetAmbienceTimeOfDayOverride(0)
    OUTPUT_LockDayNightCycle(false)

    DeactivateInvasionSystem()

    SetRoamingInvisibleSpawnersState(false)
    SetMountWorldSpawnerMapKeyValue(false)
    SetMountWorldSpawnerState(false)

    // Teleport player to WoF because we need them to be in the center of the map before we generate bases
    LISTENFOR_CinematicEvent({
        snippet: "ce_dbb_teleport_player",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "dbb_teleport_player"
    })

    // These listeners are responsible for building all the horde bases that will participate and starting act 2 respectively.
    // The order here matters so that the invasion system can start *after* all the bases have been introduced.
    {
        // After player teleports, generate the bases
        LISTENFOR_CinematicEvent({
            snippet: "ce_dbb_generate_act2_bases",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "dbb_generate_act2_bases"
        })

        // Begin Act 2 before the end of the cine - change time, etc.
        // So that by the time cine is over, the dawn has just began
        LISTENFOR_CinematicEvent({
            snippet: "ce_dbb_start_act2",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "dbb_start_act2"
        })
    }

    // Slice the world now so that horde bases can already be placed around, if we wish
    OUTPUT_SliceWorld(FACTION_PIGLINS.length)
    // shuffle slices
    const slices = FACTION_PIGLINS
    ShuffleArray(slices)
    for (const horde of FACTION_PIGLINS) {
        OUTPUT_SetGlobalVariable(`${horde}_${SLICE_SUFFIX}`, slices.indexOf(horde))
    }

    // Set revealed state to false
    for (const horde of FACTION_PIGLINS) {
        OUTPUT_ServerMapSetKeyValue(HORDE_ARRIVAL_MAP_KEYS[horde], MAP_HORDE_ARRIVAL.FALSE)
    }
}

SNIPPET_CinematicFinished("cf_coming_war", () => {
    //Play Opening NIS after The Coming War FMV
    _PlayOpeningNIS()
    Once()
})

SNIPPET_CinematicFinished("cf_skip_act1_hordes_invade", () => {
    //Play Opening NIS after The Coming War FMV
    listenForOpeningNISFinishing()
    Once()
})

// BBI-NOTE: (dsavage) Here we wait for the village to generate *and* for the player to be inside said village.
//                     Once both criteria have been met, we play the opening NIS.
SNIPPET_VillageGenerated("lt_wait_for_village_to_generate_to_play_NIS", (villageId, _payload) => {
    LISTENFOR_PlayerEnteredVillage({
        snippet: "player_is_inisde_village_for_opening_NIS",
        ownerVillageId: villageId,
        villageId: villageId,
        threshold: 1
    })
    Once()
})

SNIPPET_PlayerEnteredVillage("player_is_inisde_village_for_opening_NIS", () => {
    _PlayOpeningNIS()
    Once()
})

const _PlayOpeningNIS = () => {
    const wellOfFate = QUERY_GetEntitiesWithTags(TAG_WELL_OF_FATE)
    OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c03Opening, [wellOfFate])
    _DisableBeaconForFaction(CULTURE_NAME_VILLAGERS)
    listenForOpeningNISFinishing()
}

const listenForOpeningNISFinishing = () => {
    if (!HaveWeSkippedAct1()) {
        //Wait for The Coming War cinematic to finish, before playing Opening transition NIS
        LISTENFOR_CinematicFinished({
            snippet: "cf_opening",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: campaignActsVal.cinematics.c03Opening
        })
    } else {
        LISTENFOR_CinematicFinished({
            snippet: "cf_opening_act1_skip",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: campaignActsVal.cinematics.c03Opening
        })
    }
}

SNIPPET_CinematicFinished("cf_opening", () => {
    //Play VO
    LISTENFOR_LocalTimer({
        snippet: "lt_main_post_coming_war_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 2
    })
})

SNIPPET_LocalTimer("lt_main_post_coming_war_vo", () => {
    PlayPresentationActionToAll("main_post_coming_war")
})

SNIPPET_CinematicFinished("cf_opening_act1_skip", () => {
    _act2NarrativePrep()
    _grantAct1SkipResources()
    TelemetrySendFunnelEvent(GetAllPlayers(), FunnelSteps.OPTIONAL_SKIPACT1)
})

const _grantAct1SkipResources = () => {
    IncrementGlobal("gv_onboarding_act2_upgrading_complete") //Prevents a VO that tells the player to use Prismarine for playing. This is because we already tell the player about their resources as part of the post FMV VO package

    //Give the player resources
    GrantStartingResources()
    // Give the player extra resources from skipping to act 2
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_creeper_rally", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_silverfish_rally", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_skeleton_rally", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_slime_rally", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spider_rally", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_zombie_rally", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_creeper", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_skeleton", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_slime", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_spider", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_silverfish", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_zombie", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_iron_tech", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_remaining_wof_upgrades", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_advanced_wof_upgrades1", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_act1_started", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_firstnight_tut", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_piglininvasion_tut", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_act1_started", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_act1_complete", 1, false)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_welloffate_complete", 1, false)

    //Unlock fast travel
    let villageEntities = GetAllFriendlyVillages()
    while (HasEntities(villageEntities)) {
        const villageEntity = FILTER_RandomCount(villageEntities, 1)
        const villageId = QUERY_GetVillageIDFromEntity(villageEntity)
        OUTPUT_SetFastTravelEnabled(villageId, true)
        SetVillageVariable(villageId, GV_FAST_TRAVELLED_ENABLED_AT_VILLAGE, 1)
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.ENABLED)
        villageEntities = OPER_Difference(villageEntities, villageEntity)
    }

    //enable compass
    OUTPUT_UpdateHUDVisibility("hud_compass", true)
}

const _DBBPlacementTiers = () => {
    const placementTiers = [
        { playersMin: 500, primaryMin: 300, primaryMax: 350, wofMin: 650, friendlyVillagesMin: 400, poiMin: 300, maMin: 300 },
        { playersMin: 500, primaryMin: 300, primaryMax: 350, wofMin: 650, friendlyVillagesMin: 400, poiMin: 350, maMin: 350 },
        { playersMin: 500, primaryMin: 300, primaryMax: 350, wofMin: 700, friendlyVillagesMin: 400, poiMin: 400, maMin: 400 },
        { playersMin: 500, primaryMin: 350, primaryMax: 400, wofMin: 750, friendlyVillagesMin: 400, poiMin: 450, maMin: 450 },
        { playersMin: 500, primaryMin: 350, primaryMax: 400, wofMin: 750, friendlyVillagesMin: 400, poiMin: 500, maMin: 500 },
        { playersMin: 500, primaryMin: 350, primaryMax: 400, wofMin: 750, friendlyVillagesMin: 400, poiMin: 550, maMin: 550 }
    ]

    const friendlyVillages = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), CULTURE_NAME_VILLAGERS)
    const homesteads = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [MOB_ALLIANCE_NAME_CREEPER, MOB_ALLIANCE_NAME_SKELETON, MOB_ALLIANCE_NAME_ZOMBIE, MOB_ALLIANCE_NAME_SPIDER, MOB_ALLIANCE_NAME_SILVERFISH, MOB_ALLIANCE_NAME_SLIME])
    const primaryRef = _GetFirstVillageEntity()
    const wof = GetVillageEntityFromFaction(WELL_OF_FATE)
    const pois = FILTER_ByFactionName(QUERY_GetAllVillages(), FACTION_POI_ALL)

    if (HasEntities(primaryRef)) {
        Logi("=-=-=-=-=-=-=-=-= USING PRIMARY REF!!! =-=-=-=-=-=-=-=-=-=")
        for (let i = 0; i < placementTiers.length; i++) {
            const placement = placementTiers[i]

            OUTPUT_PlacementStart()

            OUTPUT_PlacementSlotTag(SLOT.BASE)

            // Avoid placing them nearby friendy villages
            OUTPUT_PlacementSetPrimaryProximityRule(primaryRef, placement.primaryMin, placement.primaryMax)
            OUTPUT_PlacementAddExcludeProximityRule(wof, placement.wofMin, BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(friendlyVillages, placement.friendlyVillagesMin, BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(homesteads, placement.maMin, BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(pois, placement.poiMin, BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeOceanProximityRule(400)
            // Exclude player
            OUTPUT_PlacementAddExcludeProximityRule(GetPlayers(), placement.playersMin, BSHARP_PLACEMENT.requireAll)

            if (!OUTPUT_PlacementExecute()) {
                continue
            }

            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(FACTION_NAME_DBB, BASE_SIZE_DARK_BEACON), false)
            OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), campaignActsVal.dbb.archetype, BASE_SIZE_DARK_BEACON, FACTION_NAME_DBB, TEAM_ORANGE)
            return true
        }
    }

    Logi("=-=-=-=-=-=-=-= NOT USING PRIMARY REF!!! =-=-=-=-=-=-=-=-")
    OUTPUT_PlacementStart()

    OUTPUT_PlacementSlotTag(SLOT.BASE)

    // Avoid placing them nearby friendy villages
    OUTPUT_PlacementAddExcludeProximityRule(wof, 650, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(friendlyVillages, 350, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(homesteads, 550, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(pois, 550, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeOceanProximityRule(400)
    // Exclude player
    OUTPUT_PlacementAddExcludeProximityRule(GetPlayers(), 500, BSHARP_PLACEMENT.requireAll)

    if (!OUTPUT_PlacementExecute()) {
        return false
    }

    OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(FACTION_NAME_DBB, BASE_SIZE_DARK_BEACON), false)
    OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), campaignActsVal.dbb.archetype, BASE_SIZE_DARK_BEACON, FACTION_NAME_DBB, TEAM_ORANGE)

    return true
}
//BEING CALLED ON act1_flow.js
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _CampaignAct1AEnd = () => {
    _CampaignAct1BStart()
}
//ACT 1B (1.5)
const _CampaignAct1BStart = () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_1_B) > 0) {
        return
    }
    SetRoamingInvisibleSpawnersState(false)
    SetMountWorldSpawnerMapKeyValue(false)
    SetMountWorldSpawnerState(false)
    //begin act 1b
    DebugOutput(campaignActsVal.announcements.announceAct1BStart, [], campaignActsVal.debug)
    OUTPUT_SetGlobalVariable(GV_STARTED_ACT_1_B, 1)
    OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.ACT_1B)
    OUTPUT_SetGlobalVariable("gv_no_poi_nis_during_act_1", 0) //In case the player skips to the second skirmish bypassing the upgrade beat where the flag is reset

    const telemetryPlayer = RandomEntity(GetAllPlayers())
    TelemetrySendActCompletedEvent(telemetryPlayer, "ACT1A")
    TelemetrySendActStartedEvent(telemetryPlayer, "ACT1B")
    OUTPUT_SetGlobalVariable(GV_TELEMETRY_GAMEACT, TELEMETRY_GAMEACT_IDS.ACT1B)

    if (!_DBBPlacementTiers()) {
        return
    }

    //Trigger cinematic to setup dark beacon base
    const cineId = OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c04Nightfall, [])

    LISTENFOR_CinematicFinished({
        snippet: "cf_nightfall",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: campaignActsVal.cinematics.c04Nightfall
    })

    // due to the in-game to FMV transition we have a separate event for this when the FMV actually starts
    LISTENFOR_CinematicEvent({
        snippet: "ce_nightfall",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicId: cineId,
        eventName: "fmv_start"
    })

    //Audio stingers loading after NIS
    //Has to be declared early because the base itself triggers the cine and there might be delay for B#
    LISTENFOR_CinematicFinished({
        snippet: "cf_audio_stinger_listeners",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: campaignActsVal.cinematics.c05HordesInvade
    })

    LISTENFOR_VillageFinishedPlanning({
        snippet: campaignActsVal.snippets.act1bBaseBuilt,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
}

SNIPPET_CinematicEvent("ce_nightfall", (_payload) => {
    //Set time to night and lock cycle
    OUTPUT_SetTimeOfDay(TIME_MIDNIGHT)
    OUTPUT_SetSkyState(SKY_STATE_DARK_SUN)
    OUTPUT_RemoveAmbienceTimeOfDayOverride()
    OUTPUT_LockDayNightCycle(true)
})

SNIPPET_VillageFinishedPlanning(campaignActsVal.snippets.act1bBaseBuilt, (villageId) => {
    if (QUERY_GetFactionSizeFromVillageID(villageId) === BASE_SIZE_DARK_BEACON) {
        // Allow the cinematic to be skipped now that the base is complete.
        OUTPUT_SetCinematicVariable("mst04_c04_nightfall_skippable_var", true)
        const dbbBase = GetVillageEntityFromID(villageId)
        OUTPUT_MapSetKeyValue(dbbBase, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
        OUTPUT_SetIconOff(dbbBase)

        Once()
    }
})

SNIPPET_CinematicFinished("cf_nightfall", (_payload) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_nightfall_vo",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 2
    })
})

SNIPPET_LocalTimer("lt_nightfall_vo", () => {
    PlayPresentationActionToAll(campaignActsVal.VO.nightFallVO)
})

const _CampaignAct1BEnd = () => {
    _CampaignAct2Start()
}

//ACT 2
const _CampaignAct2Start = () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0) {
        return
    }
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_act1_complete", 1, false)
    SetRoamingInvisibleSpawnersState(true)
    SetMountWorldSpawnerMapKeyValue(true)
    SetMobWorldSpawnersState(true)
    SetMobWorldHomesteadSpawnersState(true)
    SetMobWorldConflictSpawnersState(true)
    //begin act 2
    DebugOutput(campaignActsVal.announcements.announceAct2Start, [], campaignActsVal.debug)
    OUTPUT_SetGlobalVariable(GV_STARTED_ACT_2, 1)
    OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.ACT_2)

    const telemetryPlayer = RandomEntity(GetAllPlayers())
    TelemetrySendActCompletedEvent(telemetryPlayer, "ACT1B")
    TelemetrySendActStartedEvent(telemetryPlayer, "ACT2")
    OUTPUT_SetGlobalVariable(GV_TELEMETRY_GAMEACT, TELEMETRY_GAMEACT_IDS.ACT2)

    //Play Piglin Invasion cinematic
    //removing due to act 1b DBB portal destruction moving to the portal
    //OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c05HordesInvade, [])

    //Activate Invasion System (not listeners)
    _InvasionStartAct2()

    //Our next operation is to move time to dawn. The listeners must activate only AFTER that happens.
    //We need listeners to activate at dawn to correctly work with C++ simulation tech.
    const nextAct2Time = TIME_DAWN
    LISTENFOR_TimeOfDay({
        snippet: "tod_activate_invasion_listeners",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timeOfDayNumber: nextAct2Time
    })

    //Unlock day night cycle
    OUTPUT_SetTimeOfDay(nextAct2Time)
    OUTPUT_SetSkyState(SKY_STATE_SUN_MOON)
    OUTPUT_LockDayNightCycle(false)

    //listen for all bases destroyed
    LISTENFOR_VillageDestroyed({
        snippet: campaignActsVal.snippets.act2BaseDestroyed,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_ATTACK,
        despawned: false
    })
    LISTENFOR_VillageDestroyed({
        snippet: campaignActsVal.snippets.act2BaseDestroyed,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_DEFEND,
        despawned: false
    })
    LISTENFOR_VillageDestroyed({
        snippet: campaignActsVal.snippets.act2BaseDestroyed,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_OBSTACLE,
        despawned: false
    })

    LISTENFOR_VillageDestroyed({
        snippet: campaignActsVal.snippets.act2BaseDestroyed,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_FROST,
        despawned: false
    })

    LISTENFOR_CinematicFinished({
        snippet: "cf_post_invasion_cine",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: campaignActsVal.cinematics.c04InvasionSystem
    })

    //Heal Player to full and remove status effects at start of Act 2
    OUTPUT_SetHealthPercent(GetAllPlayers(), 100) // heals players by 100%
    OUTPUT_ApplyStatusEffect(GetAllPlayers(), STATUS_EFFECT.CLEANSE, 1) //apply cleanse status effect, it was specially created to remove ALL other status effects
   
    LISTENFOR_LocalTimer({
        snippet: "lt_objective_tracker_reminder",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 120
    })
}

SNIPPET_TimeOfDay("tod_activate_invasion_listeners", (_payload) => {
    // Setup listeners for dawn-dusk flow
    SetupInvasionDawnListeners()
    SetupInvasionNightListeners()
    SetupInvasionNoonListeners()
    SetupInvasionNightOutpostListeners()

    // Setup listeners for the attack boss village attacks
    SetupInvasionAttackBossListeners()

    // We need to call it at least once to set the simulation off
    // That's why this has to happen on dawn
    OUTPUT_DrawInvasionIntentions()

    // Just one time to set things up
    Once()
})

SNIPPET_LocalTimer("lt_objective_tracker_reminder", (_payload) => {
    OUTPUT_AnnounceInterrupt(ONBOARDING_MESSAGE_PRIORITY)
    OUTPUT_Announce("onboarding_map_objectives", [])

    Once()
})

const _PlayVillagersAndVindicatorsCinematic = (playerEntity) => {
    //If warriors have been disabled by custom game settings, exit early
    if (warriorsEnabled.defaultValue !== 1) {
        return
    }
    const riseOfVindicatorsTracker = QUERY_GetGlobalVariable(campaignActsVal.riseOfVindicatorsTracker)
    //if Complete, exit function early
    if (riseOfVindicatorsTracker >= 3) {
        return
    }

    //Check the number of bases remaining among all factions
    const piglinBases = GetAliveVillages(FACTION_PIGLINS, BASE_SIZE_ALL_PORTALS)
    const piglinBasesRemaining = QUERY_GetEntitiesCount(piglinBases)

    //Lets check how many bases have been destroyed across all hordes (+count attack boss)
    let basesDestroyedAllHordes = 0

    for (const key of FACTION_PIGLINS) {
        const gv = `gv_horde_bases_destroyed_${key}`
        basesDestroyedAllHordes += QUERY_GetGlobalVariable(gv)
    }

    //Since you don't destroy a base when you kill the attack boss, it doesn't count towards total bases. We check if he's been killed and add it to the total.
    const attackBossKilled = QUERY_GetGlobalVariable("hammerBossKilled")
    const totalPlayerVictories = basesDestroyedAllHordes + attackBossKilled

    switch (riseOfVindicatorsTracker) {
        case 0: //Have you destroyed at least 5 bases?
            if (totalPlayerVictories >= campaignActsVal.riseOfVindicatorsBasesDestroyedCheckPt1) {
                IncrementGlobal(campaignActsVal.riseOfVindicatorsTracker)
                //OUTPUT_SetGlobalVariable(campaignActsVal.riseOfVindicatorsFirstHordeTracker, defeatedBaseHordeIndex) -- We no longer care about last defeated horde
                if (TIME_DAWN > QUERY_GetTimeOfDay() > TIME_DUSK) {
                    OUTPUT_TriggerCinematic(campaignActsVal.cinematics.villagersMotivated01Night, [playerEntity])
                } else {
                    OUTPUT_TriggerCinematic(campaignActsVal.cinematics.villagersMotivated01, [playerEntity])
                }
            }
            break
        case 1: //Have you destroyed at least 10 bases?
            if (totalPlayerVictories >= campaignActsVal.riseOfVindicatorsBasesDestroyedCheckPt2) {
                IncrementGlobal(campaignActsVal.riseOfVindicatorsTracker)
                if (TIME_DAWN > QUERY_GetTimeOfDay() > TIME_DUSK) {
                    OUTPUT_TriggerCinematic(campaignActsVal.cinematics.villagersMotivated02Night, [playerEntity])
                } else {
                    OUTPUT_TriggerCinematic(campaignActsVal.cinematics.villagersMotivated02, [playerEntity])
                }
            }
            break
        case 2: //Fallback trigger for if there are 2 or less bases in the world
            if (piglinBasesRemaining <= campaignActsVal.riseOfVindicatorsBasesRemainingCheckPt3) {
                IncrementGlobal(campaignActsVal.riseOfVindicatorsTracker)
                OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c09RiseOfVindicators, [playerEntity])
                OUTPUT_SetGlobalVariable("gv_vindicator_spawner_unlocked", 1)
                OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_vindicator", 1, false)
                LISTENFOR_CinematicFinished({
                    snippet: "cf_postRiseOfVindicatorsVO",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    cinematicName: campaignActsVal.cinematics.c09RiseOfVindicators
                })
                LISTENFOR_InfluenceLureChanged({
                    snippet: "ilc_hero_lured_vindicators",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    includeTags: ["vindicator"]
                })
            }
            break
    }
}

const ActivateRiseOfVindicatorsFinalStep = () => {
    OUTPUT_SetGlobalVariable("gv_vindicator_spawner_unlocked", 1)
    OUTPUT_SetGlobalVariable(campaignActsVal.riseOfVindicatorsTracker, 2)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_vindicator", 1, false)
}

//Similar to above function, but called when destroying a boss instead of exiting a base partition. A delay is passed in to allow post both death VO to play before triggering cinematic
const PlayVillagersAndVindicatorsAfterKillingBoss = () => {
    //If warriors have been disabled by custom game settings, exit early
    //If warriors have been disabled by custom game settings, exit early
    if (warriorsEnabled.defaultValue !== 1) {
        return
    }
    const riseOfVindicatorsTracker = QUERY_GetGlobalVariable(campaignActsVal.riseOfVindicatorsTracker)
    const delayTime = 13 //originally I was passing in different values, but standardized to avoid potential sequencing mismatches if one timing was less than another.

    switch (riseOfVindicatorsTracker) {
        case 0: //play 1st FMV after a delay
            IncrementGlobal(campaignActsVal.riseOfVindicatorsTracker) //increment the global
            LISTENFOR_LocalTimer({
                snippet: "BossTriggerVindicatorPt1VODelay",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: delayTime //slight adjustment for new lines
            })
            break
        case 1: //Vindicator Part 1 already triggered, play 2nd FMV after a delay
            IncrementGlobal(campaignActsVal.riseOfVindicatorsTracker) //increment the global
            LISTENFOR_LocalTimer({
                snippet: "BossTriggerVindicatorPt2VODelay",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: delayTime //slight adjustment for new lines
            })
            break
        case 2: //Vindicator Part 2 already triggered, play 3rd FMV after a delay
            IncrementGlobal(campaignActsVal.riseOfVindicatorsTracker) //increment the global
            LISTENFOR_LocalTimer({
                snippet: "BossTriggerVindicatorPt3VODelay",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: delayTime //slight adjustment for new lines
            })
            break
    }
}

SNIPPET_LocalTimer("BossTriggerVindicatorPt1VODelay", () => {
    const player = RandomEntity(QUERY_GetAllPlayers()) //This is probably not great, but saw it used elsewhere and its for an FMV which doesn't require a candidate AFAIK
    if (TIME_DAWN > QUERY_GetTimeOfDay() > TIME_DUSK) {
        OUTPUT_TriggerCinematic(campaignActsVal.cinematics.villagersMotivated01Night, [player])
    } else {
        OUTPUT_TriggerCinematic(campaignActsVal.cinematics.villagersMotivated01, [player])
    }
})

SNIPPET_LocalTimer("BossTriggerVindicatorPt2VODelay", () => {
    const player = RandomEntity(QUERY_GetAllPlayers()) //See above comment
    if (TIME_DAWN > QUERY_GetTimeOfDay() > TIME_DUSK) {
        OUTPUT_TriggerCinematic(campaignActsVal.cinematics.villagersMotivated02Night, [player])
    } else {
        OUTPUT_TriggerCinematic(campaignActsVal.cinematics.villagersMotivated02, [player])
    }
})

SNIPPET_LocalTimer("BossTriggerVindicatorPt3VODelay", () => {
    const player = RandomEntity(QUERY_GetAllPlayers()) //See above comment
    OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c09RiseOfVindicators, [player])
    OUTPUT_SetGlobalVariable("gv_vindicator_spawner_unlocked", 1)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_vindicator", 1, false)
    LISTENFOR_CinematicFinished({
        snippet: "cf_postRiseOfVindicatorsVO",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: campaignActsVal.cinematics.c09RiseOfVindicators
    })
    LISTENFOR_InfluenceLureChanged({
        snippet: "ilc_hero_lured_vindicators",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["vindicator"]
    })
})

SNIPPET_InfluenceLureChanged("ilc_hero_lured_vindicators", (_entity, _wasStarted, _payload) => {
    OUTPUT_SetGlobalVariable("gv_vindicator_lured", 1)
    Once()
})

SNIPPET_CinematicFinished("cf_postRiseOfVindicatorsVO", () => {
    PlayPresentationActionToAll(campaignActsVal.VO.postRiseOfVindicatorsVO)
    UnlockJournalEntry(JOURNAL_UNLOCKS.VINDICATOR)
    Once()
})

SNIPPET_CinematicFinished("cf_audio_stinger_listeners", () => {
    _act2NarrativePrep()
})
const _act2NarrativePrep = () => {
    PlayDelayedPresentationToAll("main_post_hordes_invade", 2) // First VO bits post-act 2
    LISTENFOR_LocalTimer({
        // Delay first VO sequence due to HUD
        snippet: "lt_act2_start_delayed_hud_message",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 29 //Play after above VO sequence
    })
    //Snippet is in campaign_onboarding
    if (!HaveWeSkippedAct1()) {
        LISTENFOR_LocalTimer({
            snippet: "lt_advanced_upgrades_beginning",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 37
        })
    }
    LISTENFOR_TimeOfDay({
        snippet: "tod_audio_stinger_dawn",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timeOfDayNumber: TIME_DAWN
    })
    LISTENFOR_TimeOfDay({
        snippet: "tod_audio_stinger_dusk",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timeOfDayNumber: TIME_DUSK
    })
}
//Act 2 delayed message #1 - HUD notifications
SNIPPET_LocalTimer("lt_act2_start_delayed_hud_message", (_payload) => {
    OUTPUT_AnnounceSequence("invasion_horde_all_entered_sequence") // HUD SEQUENCE FIRST
    TriggerTutorialForSpecificPlayers(GetAllPlayers(), "player_invasion_system_tutorial", "unlock_onboarding_piglininvasion_tut") //invasion tutorial - I don't know why but this doesn't seem to trigger consistently?
})
SNIPPET_TimeOfDay("tod_audio_stinger_dawn", () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0) {
        PlayMusicStingerToAll(campaignActsVal.audio.a2MusicStingerDawn)
    } else {
        return
    }
})
SNIPPET_TimeOfDay("tod_audio_stinger_dusk", () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0) {
        PlayMusicStingerToAll(campaignActsVal.audio.a2MusicStingerDusk)
    } else {
        return
    }
})

SNIPPET_CinematicEvent("ce_dbb_teleport_player", () => {
    TeleportEntitiesToWoF(GetPlayers())
})

SNIPPET_CinematicEvent("ce_dbb_generate_act2_bases", () => {
    //Activate Staggered Entry
    SetupStaggeredEntry()

    // Create the snapshot which will call the first horde in according to current conditions
    SNAPSHOT_FirstPregameConditionsFulfilled().Take()

    // BY THIS TIME CENTER BASES HAVE BEEN PLACED
    // ALL HORDES ARRIVE AT THE SAME TIME
    // IF THIS DESIGN CHANGED, THE LOGIC BELOW WILL NEED TO BE CHANGED

    // Spawn the bases in the round-robin fashion
    let hordeIndex = 0

    // BASES
    let buildingBases = true
    const hordesFinishedBuildingBases = {}
    for (const piglinHorde of FACTION_PIGLINS) {
        hordesFinishedBuildingBases[piglinHorde] = false
    }

    while (buildingBases) {
        const horde = FACTION_PIGLINS[hordeIndex % FACTION_PIGLINS.length] // will always be 0, 1, 2

        const nextSizeToBuild = HordeEstablishment.GetNextBaseSizeToBuild(horde)
        if (nextSizeToBuild !== null) {
            PlacePiglinBase(horde, nextSizeToBuild)
            HordeEstablishment.DecrementSizeCount(horde, nextSizeToBuild)
        } else {
            hordesFinishedBuildingBases[horde] = true
        }

        // Check if hordes are done
        buildingBases = false
        for (const hordeToCheck of FACTION_PIGLINS) {
            if (!hordesFinishedBuildingBases[hordeToCheck]) {
                buildingBases = true
            }
        }

        hordeIndex++
    }

    // Reset index
    hordeIndex = 0

    // OUTPOSTS
    let buildingOutposts = true
    const hordesOutpostsCount = {}
    for (const piglinHorde of FACTION_PIGLINS) {
        hordesOutpostsCount[piglinHorde] = HordeBasesSetup[piglinHorde].numInitialOutposts
    }

    while (buildingOutposts) {
        const horde = FACTION_PIGLINS[hordeIndex % FACTION_PIGLINS.length] // will always be 0, 1, 2
        if (hordesOutpostsCount[horde] > 0) {
            PlacePiglinOutpost(horde)
            hordesOutpostsCount[horde] -= 1
        }

        // Check if hordes are done
        buildingOutposts = false
        for (const hordeToCheck of FACTION_PIGLINS) {
            if (hordesOutpostsCount[hordeToCheck] > 0) {
                buildingOutposts = true
            }
        }

        hordeIndex++
    }

    // Allow the cinematic to be skipped
    // Note that cinematic will still not allow skip because bases are getting built
    // This measure is only to account for B# hitching
    OUTPUT_SetCinematicVariable("cv_hordes_invade_cine_skip_ready", true)
})

SNIPPET_CinematicEvent("ce_dbb_start_act2", () => {
    _CampaignAct1BEnd()
})

SNIPPET_CinematicFinished("cf_post_invasion_cine", (_payload) => {
    //When the Invasion cinematic finishes playing, play some VO from foresight. Then, after a delay, it will play a different center screen notification depending on whether this happened on the first night or not.
    PlayPresentationActionToAll(campaignActsVal.VO.postInvasionCineVO)
    LISTENFOR_LocalTimer({
        snippet: "lt_invasion_system_tutorial",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: campaignActsVal.invasionSystemFmvConfig.delayBeforeTriggeringTutorialForTheFirstTime
    })
    Once()
})

SNIPPET_LocalTimer("lt_invasion_system_tutorial", () => {
    //After a delay play a different message depending on whether the first night message has played or not. Then unlock the journal entry for piglin invasion.
    if (DoOnce("gv_has_played_first_night_message")) {
        OUTPUT_AnnounceSequence("invasion_horde_all_first_night_sequence")
    } else {
        OUTPUT_AnnounceSequence("invasion_actions_executed_sequence")
    }
    UnlockJournalEntry(JOURNAL_UNLOCKS.PIGLIN_INVASION)
})

SNIPPET_Timer("lt_wofNudges", () => {
    const counter = QUERY_GetGlobalVariable(campaignActsVal.act3WofNudges.nudgeCounterGlobalVariable)
    const index = counter % campaignActsVal.act3WofNudges.presentationEvents.length
    const presEvent = campaignActsVal.act3WofNudges.presentationEvents[index]

    PlayPresentationActionToPlayers(presEvent, GetPlayers())

    if (counter <= campaignActsVal.act3WofNudges.presentationEvents.length - 1) {
        OUTPUT_SetNamedTimer(campaignActsVal.act3WofNudges.timerName, campaignActsVal.act3WofNudges.timeBetweenNudges)
        IncrementGlobal(campaignActsVal.act3WofNudges.nudgeCounterGlobalVariable)
    }
})

const EnableWofNudges = (enabled) => {
    if (enabled) {
        LISTENFOR_Timer({
            snippet: "lt_wofNudges",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timerName: campaignActsVal.act3WofNudges.timerName,
            threshold: 0
        })
        OUTPUT_SetNamedTimer(campaignActsVal.act3WofNudges.timerName, campaignActsVal.act3WofNudges.nudeStartDelay)
    } else {
        OUTPUT_DeleteNamedTimer(campaignActsVal.act3WofNudges.timerName)
    }
}

const CampaignAct2End = () => {
    DeactivateInvasionSystem()

    //Wait for WOF Captured cinematic to start before starting act3 incase players are near the wof, we want to teleport them and wait to activate the act3 wof effects until the cine has started
    LISTENFOR_LocalTimer({
        snippet: "lt_start_act3",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 3
    })

    // Trigger cinematic
    OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c07FinalBossLeaves, [])

    LISTENFOR_VillageFinishedPlanning({
        snippet: campaignActsVal.snippets.act3ABaseBuilt,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: FACTION_NAME_WOF
    })
    //Listenfor to Apply Netherack infection to WoF Structure
    LISTENFOR_CinematicEvent({
        snippet: "ce_wof_infected",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "wof_infected"
    })
    EnableWofNudges(true)

    //Heal Player to full and remove status effects at start of Act 3
    OUTPUT_SetHealthPercent(GetAllPlayers(), 100) // heals players by 100%
    OUTPUT_ApplyStatusEffect(GetAllPlayers(), STATUS_EFFECT.CLEANSE, 1) //apply cleanse status effect, it was specially created to remove ALL other status effects
}

SNIPPET_LocalTimer("lt_start_act3", () => {
    _CampaignAct3AStart()
})

const _InvasionStartAct2 = () => {
    OUTPUT_SetGlobalVariable(GV_INVASION_OPENING_NIGHT, 1)

    //Set invasion turn active for all factions
    OUTPUT_SetGlobalVariable("invasionFactionInvasionActionsTempDisabled" + FACTION_NAME_ATTACK, 1)
    OUTPUT_SetGlobalVariable("invasionFactionInvasionActionsTempDisabled" + FACTION_NAME_DEFEND, 1)
    OUTPUT_SetGlobalVariable("invasionFactionInvasionActionsTempDisabled" + FACTION_NAME_OBSTACLE, 1)
    OUTPUT_SetGlobalVariable("invasionFactionInvasionActionsTempDisabled" + FACTION_NAME_FROST, 1)

    // Reset all global actions days tracking to 9999
    SetupAllGlobalInvasionActionTracking()

    // Do that for each horde too
    for (const horde of FACTION_PIGLINS) {
        SetupAllHordeInvasionActionTracking(horde)
    }

    _ActivateAct2Objectives()
}

const _ActivateAct2Objectives = () => {
    Logi("test objectives")
    OUTPUT_SetObjectiveVisibility("objectives.defeatBastion", true)
    OUTPUT_SetObjectiveVisibility("objectives.defeatHunt", true)
    OUTPUT_SetObjectiveVisibility("objectives.defeatSpore", true)
    OUTPUT_SetObjectiveVisibility("objectives.defeatFrost", true)
    OUTPUT_SetObjectiveVisibility("objectives.villagesSafe", true)
    //Only enable this one if the player has opted to add witches (or its default)
    //if (witchHutEnabled.defaultValue === 1) {
    //    OUTPUT_SetObjectiveVisibility("objectives.witchesUnlocked", true)
    //}
    OUTPUT_SetObjectiveVisibility("objectives.mountsUnlocked", true)
    OUTPUT_SetObjectiveVisibility("objectives.firstsAwoken", true)
    OUTPUT_SetObjectiveVisibility("objectives.towersUnlocked", true)
    OUTPUT_AddOrSubtractObjectiveProgress("objectives.villagesSafe", 5)
}

const _ActivateAct3Objectives = () => {
    OUTPUT_SetObjectiveVisibility("objectives.defeatBastion", false)
    OUTPUT_SetObjectiveVisibility("objectives.defeatHunt", false)
    OUTPUT_SetObjectiveVisibility("objectives.defeatSpore", false)
    OUTPUT_SetObjectiveVisibility("objectives.defeatFrost", false)
    OUTPUT_SetObjectiveVisibility("objectives.villagesSafe", false)
    //OUTPUT_SetObjectiveVisibility("objectives.witchesUnlocked", false)
    OUTPUT_SetObjectiveVisibility("objectives.alliancesSafe", false)
    OUTPUT_SetObjectiveVisibility("objectives.mountsUnlocked", false)
    OUTPUT_SetObjectiveVisibility("objectives.firstsAwoken", false)
    OUTPUT_SetObjectiveVisibility("objectives.towersUnlocked", false)
    OUTPUT_SetObjectiveVisibility("objectives.saveWorld", true)
}

//ACT 3a
const _CampaignAct3AStart = () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) > 0) {
        return
    }

    //begin act 3A
    DebugOutput(campaignActsVal.announcements.announceAct3AStart, [], campaignActsVal.debug)
    OUTPUT_SetGlobalVariable(GV_STARTED_ACT_3_A, 1)
    OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.ACT_3)
    OUTPUT_SetSkyState(SKY_STATE_WOF_BATTLE)
    OUTPUT_SetNetherSporesActiveEverywhere(1.0)
    const telemetryPlayer = RandomEntity(GetAllPlayers())
    TelemetrySendActCompletedEvent(telemetryPlayer, "ACT2")
    TelemetrySendActStartedEvent(telemetryPlayer, "ACT3A")
    OUTPUT_SetGlobalVariable(GV_TELEMETRY_GAMEACT, TELEMETRY_GAMEACT_IDS.ACT3A)

    _ActivateAct3Objectives()

    const wofVillageEntity = GetVillageEntityFromFaction(WELL_OF_FATE)
    OUTPUT_MapSetKeyValue(wofVillageEntity, MAP_KEY.STATE, MAP_ICON_STATE.UNDER_ATTACK)
    //spawn Empty village as teleport marker
    OUTPUT_PlacementStart()
    OUTPUT_PlacementSlotTag("wellOfFate")

    if (OUTPUT_PlacementExecute()) {
        OUTPUT_PlacementEntityUpdateTextureStamp(QUERY_PlacementResultPosition(), TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(FACTION_NAME_WOF, BASE_SIZE_PIGLIN_WOF), true)
    }
    //move players near the wof to not be near the wof
    const playersNearWof = FILTER_ByDistance(QUERY_GetAllPlayers(), wofVillageEntity, 600) // covers the area around the wof where the final base spawns
    if (HasEntities(playersNearWof)) {
        const randomVillage = RandomEntity(FILTER_ByFactionName(QUERY_GetAllAliveVillages(),CULTURE_NAME_VILLAGERS))
        OUTPUT_TeleportFastTravel(playersNearWof, randomVillage)
    }

    const villageId = QUERY_GetVillageIDFromEntity(wofVillageEntity)
    //Disable WOF respawn point and fast travel
    OUTPUT_SetVillageRespawnPointsEnabled(villageId, false)
    OUTPUT_SetFastTravelEnabled(villageId, false)

    //Despawn hosts
    OUTPUT_SetGlobalVariable(GV_DISABLE_HOSTS, 1)

    //turn off spawner around WoF
    SetRoamingInvisibleSpawnersState(false)
    SetMountWorldSpawnerMapKeyValue(false)
    SetMobWorldSpawnersState(false)
    SetMobWorldConflictSpawnersState(false)

    //Spawn Piglin base around the WOF
    _placeWOFBase()

    // Clean up village attacks as best we can before the time skip.
    CancelPlannedVillageAttacks()
    FastForwardActiveVillageAttacks()

    //Set time to night and lock cycle
    OUTPUT_SetTimeOfDay(TIME_MIDNIGHT)
    OUTPUT_LockDayNightCycle(true)

    //Wait for WOF Captured cinematic to finish
    LISTENFOR_CinematicFinished({
        snippet: "cf_wof_capture",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: campaignActsVal.cinematics.c07FinalBossLeaves
    })

    //listen for well of fate liberated -> go to act 3b
    // Play the Well of Fate Captures cinematic
    LISTENFOR_VillageDestroyed({
        snippet: campaignActsVal.snippets.act3ABaseDestroyed,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        despawned: false
    })
}

// WoF base finished building
SNIPPET_VillageFinishedPlanning(campaignActsVal.snippets.act3ABaseBuilt, () => {
    OUTPUT_SetCinematicVariable("mst07_c07_the_final_boss_leaves_fmv_skippable_var", true)

    const wofVillageEntity = GetVillageEntityFromFaction(WELL_OF_FATE)
    OUTPUT_MapSetKeyValue(wofVillageEntity, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.DISABLED)

    Once()
})

//Apply Infected WoF Structure
SNIPPET_CinematicEvent("ce_wof_infected", () => {
    InfectWoF()
})

SNIPPET_CinematicFinished("cf_wof_capture", () => {
    //Play VO
    PlayPresentationActionToAll("main_wof_captured")
})

const _CampaignAct3AEnd = () => {
    const telemetryPlayer = RandomEntity(GetAllPlayers())
    TelemetrySendActCompletedEvent(telemetryPlayer, "ACT3A")
    TelemetrySendActStartedEvent(telemetryPlayer, "ACT4")
    OUTPUT_SetGlobalVariable(GV_TELEMETRY_GAMEACT, TELEMETRY_GAMEACT_IDS.EPILOGUE)
    const wofVillageEntity = GetVillageEntityFromFaction(WELL_OF_FATE)
    const WoFVillageID = QUERY_GetVillageIDFromEntity(wofVillageEntity)
    OUTPUT_SetFastTravelEnabled(WoFVillageID, true)
    OUTPUT_MapSetKeyValue(wofVillageEntity, MAP_KEY.FAST_TRAVEL, MAP_FAST_TRAVEL.ENABLED)
    OUTPUT_SetNetherSporesActiveEverywhere(0.0)
    OUTPUT_AnnounceInterrupt(ONBOARDING_MESSAGE_PRIORITY)

    const wofStructure = RandomEntity(GetEntitiesWithTagsAndVillage(["zoner_xp_well_of_fate"], WoFVillageID))
    OUTPUT_ResetBehavior(wofStructure) //renable wof healing

    //Give player resources to rebuild their upgrade structures
    //OUTPUT_AddOrRemoveResource(GetAllPlayers(, false), "enchanting_orb", 1200)
    OUTPUT_AddOrRemoveResource(GetAllPlayers(), "xp_common", 100, false)
    LISTENFOR_CinematicFinished({
        snippet: "cf_credits",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        cinematicName: campaignActsVal.cinematics.epilogue // this FMV is automatically sequenced after the NIS
    })
    _CampaignEpilogueStart()

    OUTPUT_MapSetKeyValue(wofVillageEntity, MAP_KEY.STATE, MAP_ICON_STATE.DEFAULT)

    //Re-enable WOF respawn point
    OUTPUT_SetVillageRespawnPointsEnabled(WoFVillageID, true)

    //Heal Player to full and remove status effects at start of Act 3
    OUTPUT_SetHealthPercent(GetAllPlayers(), 100) // heals players by 100%
    OUTPUT_ApplyStatusEffect(GetAllPlayers(), STATUS_EFFECT.CLEANSE, 1) //apply cleanse status effect, it was specially created to remove ALL other status effects

    OUTPUT_AddOrSubtractObjectiveProgress("objectives.saveWorld", 1)
}

SNIPPET_CinematicFinished("cf_credits", () => {
    OUTPUT_CampaignEndMenu()
})
const _CampaignAct3BEnd = () => {
    //Commented out for this milestone
    //_CampaignEpilogueStart()
}

const _CampaignEpilogueStart = () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) > 0) {
        return
    }

    // Despawn the rest of the outposts
    _DespawnAllOutposts()

    DebugOutput(campaignActsVal.announcements.announceEpilogueStart, [], campaignActsVal.debug)
    OUTPUT_SetGlobalVariable(GV_STARTED_EPILOGUE, 1)
    OUTPUT_ServerMapSetKeyValue(MAP_KEY.CAMPAIGN_ACT, CAMPAIGN_ACT.EPILOGUE)

    OUTPUT_SetSkyState(SKY_STATE_SUN_MOON)
    OUTPUT_LockDayNightCycle(false)

    //Deactivate things
    SetRoamingInvisibleSpawnersState(false)
    _RemoveAllCurrentPiglinBases()
    DeactivateInvasionSystem() //In case we skipped act 2 end entirely through debug and it wasn't called before
}
const _placeWOFBase = () => {
    //const allVillages = QUERY_GetAllAliveVillages()
    //const wellVillage = FILTER_ByFactionName(allVillages, "faction.player.well")
    const wofVillageEntity = FILTER_ByFactionName(QUERY_GetAllVillages(), WELL_OF_FATE)
    //const placementData = _GetFactionData(factionName).basePlacement
    // OUTPUT_PlacementStart()
    //OUTPUT_PlacementSetBiomeRule(MOIST_BIOMES_LIST, false)
    //OUTPUT_PlacementSetWaterDistanceRule(32)
    // OUTPUT_PlacementAddIncludeProximityRule(wofVillageEntity, 0, 1, 1)

    // First spawn big claimed area - then base
    OUTPUT_ClaimArea(FACTION_NAME_WOF, wofVillageEntity, CLAIMED_AREAS_DEF[FACTION_NAME_WOF].FINAL_BASE.radius)

    OUTPUT_SpawnVillage(wofVillageEntity, "badger:piglin_wof", BASE_SIZE_PIGLIN_WOF, FACTION_NAME_WOF, TEAM_ORANGE)
}

const _InvalidActTransitionMessage = () => {
    DebugOutput(campaignActsVal.messages.unsupportedDebug, [], campaignActsVal.debug)
}
//Act Snippets
SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (ruleValue.value) {
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.TEAM_OUTLINES, TEAM_OUTLINES.DISABLED)
        LISTENFOR_PlayersReady({
            snippet: "pr_start_act_1",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        _CampaignAct1AStart()

        if (QUERY_IsHostInCampaignOnboardingFlow() && !HaveWeSkippedAct1()) {
            LISTENFOR_VillageGenerated({
                snippet: "lt_wait_for_village_to_generate_to_play_NIS",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: WELL_OF_FATE
            })
        }

        //Act 1A Listener

        // Need to wait until WoF emerges in the game world to enable fast travel
        LISTENFOR_VillagePlanned({
            snippet: campaignActsVal.snippets.act1AWofBasePlanned,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: WELL_OF_FATE
        })

        LISTENFOR_VillageDestroyed({
            snippet: campaignActsVal.snippets.act1ABaseDestroyed,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_DBB,
            despawned: false
        })
        LISTENFOR_VillagePlanned({
            snippet: campaignActsVal.testSnippet.testSnippetDestroyPigFactionBoss,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_ATTACK,
            villageSize: BASE_SIZE_BOSS
        })
        LISTENFOR_VillagePlanned({
            snippet: campaignActsVal.testSnippet.testSnippetDestroyPigFactionBoss,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_DEFEND,
            villageSize: BASE_SIZE_BOSS
        })
        LISTENFOR_VillagePlanned({
            snippet: campaignActsVal.testSnippet.testSnippetDestroyPigFactionBoss,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_OBSTACLE,
            villageSize: BASE_SIZE_BOSS
        })
        LISTENFOR_VillagePlanned({
            snippet: campaignActsVal.testSnippet.testSnippetDestroyPigFactionBoss,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_FROST,
            villageSize: BASE_SIZE_BOSS
        })

        LISTENFOR_PlayerEnteredVillage({
            snippet: "pev_player_enetered_village_fast_travel_check",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: CULTURE_NAME_VILLAGERS,
            villageSize: BASE_SIZE_SMALL
        })

        //EE listeners for testing campaign acts
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetStartAct1B,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testStartAct1B
        })
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetStartAct2,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testStartAct2
        })
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetStartAct2WithArrivalOfAll,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testStartAct2WithArrivalOfAll
        })
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetLastAct2Base,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testLastAct2Base
        })
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetStartAct3A,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testStartAct3A
        })
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetEndAct3A,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testEndAct3A
        })
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetStartEpilogue,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testStartEpilogue
        })
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetDamageNearestPigBase,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testDamageNearestPigBase
        })
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetDestroyNearestPigBase,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testDestroyNearestPigBase
        })
        LISTENFOR_ExternalEvent({
            snippet: campaignActsVal.testSnippet.testSnippetDestroyPigFaction,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: campaignActsVal.testEvent.testDestroyPigFaction
        })

        // EE listeners for Time of Day commands
        LISTENFOR_ExternalEvent({
            snippet: "ee_change_time_of_day",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "change_time_of_day"
        })
        LISTENFOR_ExternalEvent({
            snippet: "ee_lock_time_of_day",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "lock_time_of_day"
        })
    } else {
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.TEAM_OUTLINES, TEAM_OUTLINES.ENABLED)
    }
})

SNIPPET_PlayersReady("pr_start_act_1", (_entity) => {
    // If this is not the onboarding flow, play the Coming War cinematic
    if (!QUERY_IsHostInCampaignOnboardingFlow()) {
        if (!HaveWeSkippedAct1()) {
            //EVES ADDING COMING WAR FMV, AND mst03_c00_opening TRANSITION TO GAMEPLAY
            OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c03ComingWar, [])
            //Wait for The Coming War cinematic to finish, before playing Opening transition NIS
            LISTENFOR_CinematicFinished({
                snippet: "cf_coming_war",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                cinematicName: campaignActsVal.cinematics.c03ComingWar
            })
        } else {
            OUTPUT_SetGlobalVariable(GV_STARTED_ACT_1_B, 1)
            OUTPUT_ServerMapSetKeyValue(MAP_KEY.VILLAGE_RESOURCE_VISIBILITY, MAP_VISIBILITY.VISIBLE)
            const wof = GetVillageEntityFromFaction(WELL_OF_FATE)
            OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c05HordesInvadeAct1Skip, [wof])

            LISTENFOR_CinematicFinished({
                snippet: "cf_skip_act1_hordes_invade",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                cinematicName: campaignActsVal.cinematics.c05HordesInvadeAct1Skip
            })
            LISTENFOR_PlayerConnected({
                snippet: "pc_enable_compass_custom_game",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT
            })
        }
    }
    Once()
})

SNIPPET_PlayerConnected("pc_enable_compass_custom_game", (_playerEntity, _isReconnecting, _payload) => {
    OUTPUT_UpdateHUDVisibility("hud_compass", true)
})

SNIPPET_PlayerEnteredVillage("pev_player_enetered_village_fast_travel_check", (_villageId, _playerCount, _payload) => {
    if (!IsCurrentAct(ACTS.ACT_2)) {
        return
    }
    if (DoOnce("gv_has_fast_travelled")) {
        TriggerTutorialForSpecificPlayers(GetAllPlayers(), "fast_travel")
    }
    Once()
})

SNIPPET_VillagePlanned(campaignActsVal.snippets.act1AWofBasePlanned, (villageId, _payload) => {
    OUTPUT_SetFastTravelEnabled(villageId, true)
})

SNIPPET_VillageDestroyed(campaignActsVal.snippets.act1ABaseDestroyed, (_villageId, _payload) => {})

SNIPPET_SpatialPartitionExited("spex_act2_base_destroyed", (triggerEntity, exitingEntity) => {
    // on first act 2 base left, play repercussions
    if (DoOnce("gv_repercussions_cine_played")) {
        TriggerRepercussionsCine()
    }
    _PlayVillagersAndVindicatorsCinematic(exitingEntity)
    OUTPUT_DespawnEntities(triggerEntity)
    Once()
})

SNIPPET_CinematicFinished("cf_act_3b_intro", () => {
    //listen for final base destroyed
    LISTENFOR_VillageDestroyed({
        snippet: campaignActsVal.snippets.act3BBaseDestroyed,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        despawned: false
    })
})

const CheckIfAct2IsOver = () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 1 || QUERY_GetGlobalVariable(GV_STARTED_ACT_3_B) === 1 || QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) === 1) {
        return false
    }

    if (!QUERY_GetGlobalVariable("hammerBossKilled")) {
        return false
    }
    if (!QUERY_GetGlobalVariable("magmaBossKilled")) {
        return false
    }
    if (!QUERY_GetGlobalVariable("obstacleBossKilled")) {
        return false
    }
    if (!QUERY_GetGlobalVariable("frostBossKilled")) {
        return false
    }

    return true
}

SNIPPET_VillageDestroyed(campaignActsVal.snippets.act2BaseDestroyed, (villageId, _payload) => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) > 0) {
        return
    }

    //change the size of the trigger volume based on the size of the village
    const villageEntity = GetVillageEntityFromID(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    // create trigger volumes for small, medium and large bases as boss bases bypass and play the vindicators 12 seconds after the boss dies
    switch (baseSize) {
        case BASE_SIZE_SMALL:
            _CreateAct2TriggerVolume("badger:temp_spatial_trigger_zone_piglin_base_intro_small", villageEntity, villageId)
            break
        case BASE_SIZE_MEDIUM:
            _CreateAct2TriggerVolume("badger:temp_spatial_trigger_zone_piglin_base_intro", villageEntity, villageId)
            break
        case BASE_SIZE_LARGE:
            _CreateAct2TriggerVolume("badger:temp_spatial_trigger_zone_piglin_base_intro_large", villageEntity, villageId)
            break
    }

    if (CheckIfAct2IsOver()) {
        Once()
    }
})

const _CreateAct2TriggerVolume = (tvType, villageEntity, villageId) => {
    const exitAct2Base = SpawnTriggerVolume(villageEntity, undefined, tvType, TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionExited({
        snippet: "spex_act2_base_destroyed",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        triggerEntity: exitAct2Base,
        payloadInt: villageId
    })
}
SNIPPET_VillageDestroyed(campaignActsVal.snippets.act3ABaseDestroyed, () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_B) > 0) {
        return
    }
    const piglinBases = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_WOF)
    if (QUERY_GetEntitiesCount(piglinBases) === 0) {
        _CampaignAct3AEnd()
        Once()
    }
})
SNIPPET_VillageDestroyed(campaignActsVal.snippets.act3BBaseDestroyed, () => {
    const piglinBases = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_PIGLINS)
    if (QUERY_GetEntitiesCount(piglinBases) === 0) {
        _CampaignAct3BEnd()
        Once()
    }
})
//Debug Act snippets
SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetStartAct1B, () => {
    // Force act 1 initialization flow before everything else
    BeginAct1()

    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) === 1 || QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 1 || QUERY_GetGlobalVariable(GV_STARTED_ACT_3_B) === 1 || QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) === 1) {
        DebugOutput(campaignActsVal.messages.unsupportedDebug, [], campaignActsVal.debug)
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_1_B) === 0) {
        _FindAndTagAct1Villages()
        _SkipCompleteUpToThreeCamps()
        _CompletetWellOfFateUpgradeStep()
        _SkipToAct2()
        _ClearAllPiglinBases()
    }
})
SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetStartAct2, () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 1 || QUERY_GetGlobalVariable(GV_STARTED_ACT_3_B) === 1 || QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) === 1) {
        _InvalidActTransitionMessage()
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) === 0) {
        // Force act 1 initialization flow before everything else
        BeginAct1()

        _SkipToAct2()
        IncrementGlobal(ACTS.ACT_1A)
        IncrementGlobal(ACTS.ACT_1B)
        _ClearAllPiglinBases()

        //Audio stingers loading after NIS
        LISTENFOR_CinematicFinished({
            snippet: "cf_audio_stinger_listeners",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: campaignActsVal.cinematics.c05HordesInvade
        })

        OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c05HordesInvade, [])
        OUTPUT_RemoveAmbienceTimeOfDayOverride()

        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemstone", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemwood", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_creeper_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spider_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_slime_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_silverfish_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_skeleton_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_zombie_rally", 1, false)
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.VILLAGE_RESOURCE_VISIBILITY, MAP_VISIBILITY.VISIBLE)
    }
})
SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetStartAct2WithArrivalOfAll, () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 1 || QUERY_GetGlobalVariable(GV_STARTED_ACT_3_B) === 1 || QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) === 1) {
        _InvalidActTransitionMessage()
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) === 0) {
        // Force act 1 initialization flow before everything else
        BeginAct1()

        _SkipToAct2()
        IncrementGlobal(ACTS.ACT_1A)
        IncrementGlobal(ACTS.ACT_1B)
        _ClearAllPiglinBases()

        //Audio stingers loading after NIS
        LISTENFOR_CinematicFinished({
            snippet: "cf_audio_stinger_listeners",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: campaignActsVal.cinematics.c05HordesInvade
        })

        // Making all the piglins invade
        LISTENFOR_CinematicFinished({
            snippet: "immediate_arrival_of_all_once_act_2_starts",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: campaignActsVal.cinematics.c05HordesInvade
        })

        OUTPUT_TriggerCinematic(campaignActsVal.cinematics.c05HordesInvade, [])
        OUTPUT_RemoveAmbienceTimeOfDayOverride()

        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemstone", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemwood", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_creeper_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spider_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_slime_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_silverfish_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_skeleton_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_zombie_rally", 1, false)
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.VILLAGE_RESOURCE_VISIBILITY, MAP_VISIBILITY.VISIBLE)
    }
})

SNIPPET_CinematicFinished("immediate_arrival_of_all_once_act_2_starts", (_payload) => {
    LISTENFOR_LocalTimer({
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        snippet: "immediate_arrival_of_all_once_act_2_starts_delay_for_mob_occupations",
        waitTime: 1.0
    })
})

SNIPPET_LocalTimer("immediate_arrival_of_all_once_act_2_starts_delay_for_mob_occupations", (_payload) => {
    while (_DoStaggeredEntryStep()) {}
})

SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetLastAct2Base, () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) === 0 || QUERY_GetGlobalVariable(GV_STARTED_ACT_3_B) === 1 || QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) === 1) {
        _InvalidActTransitionMessage()
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 0) {
        const piglinBaseRemaining = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_PIGLINS)
        const allBasesButOne = OPER_Difference(piglinBaseRemaining, FILTER_ByVillageSize(RandomEntity(piglinBaseRemaining), BASE_SIZE_ALL_PORTALS))
        OUTPUT_DestroyVillageEntities(allBasesButOne)
        OUTPUT_RemoveAmbienceTimeOfDayOverride()
    }
})
SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetStartAct3A, () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_B) === 1 || QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) === 1) {
        _InvalidActTransitionMessage()
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 0) {
        //Debug start act
        _SkipToAct2()
        _RemoveAllCurrentPiglinBases()

        //Set previous acts as started
        OUTPUT_SetGlobalVariable(GV_STARTED_ACT_1_B, 1)
        OUTPUT_SetGlobalVariable(GV_STARTED_ACT_2, 1)
        CampaignAct2End()
        OUTPUT_RemoveAmbienceTimeOfDayOverride()
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemstone", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemwood", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_creeper_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spider_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_slime_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_silverfish_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_skeleton_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_zombie_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_support", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_golemcavalry", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_zombie", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_zombie", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_skeleton", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_skeleton", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_creeper", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_creeper", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_spider", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_spider", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_slime", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_slime", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spawner_silverfish", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_battle_view_silverfish", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_remaining_wof_upgrades", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "battle_view_unlock", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "advanced_direct_unlock", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "clear_nether_resource", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "gather_uncommon_resource", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "ui_tracking_gather_uncommon", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "gather_coal", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "gather_redstone", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "ui_tracking_gather_redstone", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "gather_rare_resource", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "ui_tracking_gather_rare", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "xp_common", 250, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_poi_golem_resource", 1, false)

        OUTPUT_ServerMapSetKeyValue(MAP_KEY.VILLAGE_RESOURCE_VISIBILITY, MAP_VISIBILITY.VISIBLE)

        ActivateRiseOfVindicatorsFinalStep()
    }
})
SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetEndAct3A, () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_B) === 1 || QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) === 1) {
        _InvalidActTransitionMessage()
    } else if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 1) {
        _CampaignAct3AEnd()
        OUTPUT_RemoveAmbienceTimeOfDayOverride()
    }
})
SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetStartEpilogue, () => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_B) === 1 || QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) === 1) {
        _InvalidActTransitionMessage()
    } else {
        //Set previous acts as started
        OUTPUT_SetGlobalVariable(GV_STARTED_ACT_1_B, 1)
        OUTPUT_SetGlobalVariable(GV_STARTED_ACT_2, 1)
        OUTPUT_SetGlobalVariable(GV_STARTED_ACT_3_A, 1)
        _RemoveAllCurrentPiglinBases()
        _CampaignAct3AEnd()
        OUTPUT_RemoveAmbienceTimeOfDayOverride()
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_creeper_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_spider_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_slime_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_silverfish_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_skeleton_rally", 1, false)
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_zombie_rally", 1, false)
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.VILLAGE_RESOURCE_VISIBILITY, MAP_VISIBILITY.VISIBLE)
    }
})

SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetDamageNearestPigBase, () => {
    DebugOutput(campaignActsVal.announcements.announceDamageNearestPigBase, [], campaignActsVal.debug)
    const piglinBase = FILTER_ByDistance(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_PIGLINS), GetPlayers(), 600)
    const nearestPiglinStructure = FILTER_ByClosest(piglinBase, GetPlayers(), 1)
    if (QUERY_GetEntitiesCount(nearestPiglinStructure) > 0) {
        const villageId = QUERY_GetVillageIDFromEntity(nearestPiglinStructure)
        DebugOutput(campaignActsVal.announcements.announceDamageNearestPigBaseSuccess, [], campaignActsVal.debug)
        const piglinBaseEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        OUTPUT_DamageEntitiesByPercentage(piglinBaseEntities, 90)
    } else {
        DebugOutput(campaignActsVal.announcements.announceDamageNearestPigBaseFailure, [], campaignActsVal.debug)
    }
})
SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetDestroyNearestPigBase, () => {
    DebugOutput(campaignActsVal.announcements.announceDestroyNearestPigBase, [], campaignActsVal.debug)
    const piglinBase = FILTER_ByDistance(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_PIGLINS), GetPlayers(), 600)
    const nearestPiglinStructure = FILTER_ByClosest(piglinBase, GetPlayers(), 1)
    if (QUERY_GetEntitiesCount(nearestPiglinStructure) > 0) {
        const villageId = QUERY_GetVillageIDFromEntity(nearestPiglinStructure)
        const piglinBaseEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        DebugOutput(campaignActsVal.announcements.announceDestroyNearestPigBaseSuccess, [], campaignActsVal.debug)
        OUTPUT_DamageEntitiesByPercentage(piglinBaseEntities, 100)
    } else {
        DebugOutput(campaignActsVal.announcements.announceDestroyNearestPigBaseFailure, [], campaignActsVal.debug)
    }
})
//==== Destroying a piglin faction ====
//Destroy the bases
SNIPPET_ExternalEvent(campaignActsVal.testSnippet.testSnippetDestroyPigFaction, (parameter) => {
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) === 1 && QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) !== 1) {
        const params = parameter.value.split("_") //Split up the parameter: must be in form of [factionname]_[d/o] (d -> destroy, o -> obliterate)
        const piglinBases = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), params[0])

        if (QUERY_GetEntitiesCount(piglinBases) > 0) {
            //If we wanna obliterate faction, make sure we destroy any boss base that spawns as a result
            if (params[1] === "o") {
                OUTPUT_SetGlobalVariable(campaignActsVal.debugVariables.destroyBossBaseOfType + params[0], 1)
                DebugOutput(campaignActsVal.announcements.announceObliteratePigFaction, [], campaignActsVal.debug)
            } else {
                DebugOutput(campaignActsVal.announcements.announceDestroyPigFaction, [], campaignActsVal.debug)
            }

            //If this was already boss base, set boss destroyed for proper triggering
            if (HasEntities(FILTER_ByTagFilter(piglinBases, ["isBossBase"], []))) {
                _SetBossDestroyedForBossBase(params[0]) //Manually set the boss to have been killed
                OUTPUT_SetGlobalVariable(campaignActsVal.debugVariables.destroyBossBaseOfType + params[0], 0) //If you invoked an "o" when the only remaining base is a boss base, prevent the "destroy boss" snippet from being effective
            }

            //Destroy the bases
            OUTPUT_DestroyVillageEntities(piglinBases)

            _ForceDisableFactionRoamingPiglin(params[0])
        } else {
            DebugOutput(campaignActsVal.announcements.announceDestroyPigFactionFailure, [], campaignActsVal.debug)
        }
    }
})

SNIPPET_ExternalEvent("ee_change_time_of_day", (parameter) => {
    OUTPUT_SetTimeOfDay(parameter.value)
})

SNIPPET_ExternalEvent("ee_lock_time_of_day", (parameter) => {
    OUTPUT_LockDayNightCycle(parameter.value)
})

//Destroy the boss base that spawns
SNIPPET_VillagePlanned(campaignActsVal.testSnippet.testSnippetDestroyPigFactionBoss, (villageId) => {
    const factionName = QUERY_GetFactionNameFromVillageID(villageId)
    if (QUERY_GetGlobalVariable(campaignActsVal.debugVariables.destroyBossBaseOfType + factionName) === 1) {
        const villageEntity = GetVillageEntityFromID(villageId)
        OUTPUT_DestroyVillageEntities(villageEntity)
        OUTPUT_SetGlobalVariable(campaignActsVal.debugVariables.destroyBossBaseOfType + factionName, 0)
        _SetBossDestroyedForBossBase(factionName) //Manually set the boss to have been killed
    }
})
const _SetBossDestroyedForBossBase = (factionName) => {
    if (factionName === FACTION_NAME_ATTACK) {
        OUTPUT_SetGlobalVariable("hammerBossKilled", 1)
    }
    if (factionName === FACTION_NAME_DEFEND) {
        OUTPUT_SetGlobalVariable("magmaBossKilled", 1)
        OUTPUT_AddOrSubtractObjectiveProgress("objectives.defeatBastion", 1)
    }
    if (factionName === FACTION_NAME_OBSTACLE) {
        OUTPUT_SetGlobalVariable("obstacleBossKilled", 1)
        OUTPUT_AddOrSubtractObjectiveProgress("objectives.defeatSpore", 1)
    }
    if (factionName === FACTION_NAME_FROST) {
        OUTPUT_SetGlobalVariable("frostBossKilled", 1)
        OUTPUT_AddOrSubtractObjectiveProgress("objectives.defeatFrost", 1)
    }
}

const _ClearAllPiglinBases = () => {
    //Destroy the act 1 dbb faction bases that are still alive.
    const dbbBases = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_NAME_DBB)
    const dbbBaseCount = QUERY_GetEntitiesCount(dbbBases)
    if (dbbBaseCount) {
        OUTPUT_SetIconOff(dbbBases)
        OUTPUT_DestroyVillageEntities(dbbBases)
    }
}

const _RemoveAllCurrentPiglinBases = () => {
    // Just despawn bases, outposts are handled differently
    const piglinBaseRemaining = FILTER_ByVillageSize(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), HORDE_PIGLINS_ALL), BASE_SIZE_ALL_PORTALS_AND_BOSS)
    OUTPUT_DestroyVillageEntities(piglinBaseRemaining)
    //Destroy boss bases if they spawn
    for (const faction of FACTION_PIGLINS) {
        OUTPUT_SetGlobalVariable(campaignActsVal.debugVariables.destroyBossBaseOfType + faction, 1)
    }
}

const _ForceDisableFactionRoamingPiglin = (factionName) => {
    switch (factionName) {
        case FACTION_NAME_DEFEND:
            GV_ROAMING_PIGLIN_DEFEND_FACTION_SPAWNERS.forEach((roamingGV) => {
                OUTPUT_SetGlobalVariable(roamingGV, 1)
            })
            break
        case FACTION_NAME_ATTACK:
            GV_ROAMING_PIGLIN_ATTACK_FACTION_SPAWNERS.forEach((roamingGV) => {
                OUTPUT_SetGlobalVariable(roamingGV, 1)
            })
            break
        case FACTION_NAME_OBSTACLE:
            GV_ROAMING_PIGLIN_OBSTACLE_FACTION_SPAWNERS.forEach((roamingGV) => {
                OUTPUT_SetGlobalVariable(roamingGV, 1)
            })
            break
        case FACTION_NAME_FROST:
            GV_ROAMING_PIGLIN_FROST_FACTION_SPAWNERS.forEach((roamingGV) => {
                OUTPUT_SetGlobalVariable(roamingGV, 1)
            })
            break
    }
}
