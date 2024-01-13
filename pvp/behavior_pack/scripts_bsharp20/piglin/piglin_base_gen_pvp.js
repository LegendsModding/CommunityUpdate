const pvpOnboardingPiglinVal = {
    consts: {
        timeBetweenAnnouncements: 60,
        globalCanTriggerAnnouncementKey: "piglin_can_trigger_announcement_pvp"
    },
    messages: {
        withStructures: "pvp_onb_piglin_with_structures",
        noStructures: "pvp_onb_piglin_without_structures"
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchStartHQsBuilt, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_VillagePlanned({
            snippet: "vp_pvp_outpost_placement",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: PVP_HEADQUARTERS_BLUE
        })

        for (const hordeName in PiglinPVPHordes) {
            LISTENFOR_VillageGenerated({
                snippet: "vg_pvp_piglin_gen",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: hordeName,
                payloadString: hordeName
            })
        }
    }
})

SNIPPET_VillagePlanned("vp_pvp_outpost_placement", (_villageId, _payload) => {
    const possibleHordes = ShuffleArray(Object.keys(PiglinPVPHordes))
    const startingIndex = RandomIntFromInterval(0, possibleHordes.length)
    for (let i = 0; i < PiglinPVPData.numOutposts; i++) {
        const hordeName = possibleHordes[(startingIndex + i) % possibleHordes.length]
        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag("outpost_slot")
        OUTPUT_PlacementAddExcludeProximityRule(QUERY_GetAllVillages(), 100, BSHARP_PLACEMENT.requireAll)
        if (OUTPUT_PlacementExecute()) {
            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, PiglinPVPHordes[hordeName].textureStamp, false)
            OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), PiglinPVPHordes[hordeName].village, BASE_SIZE_SMALL, hordeName, "outpost_piglin_team")
        }
    }
    Once()
})

const _MakePvpBase = (villageId, hordeName) => {
    const hordeData = PiglinPVPHordes[hordeName]
    const baseDeck = DECK_Empty()

    const centerZones = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZones, [ZoneTagCard("outpostInnerCirclePvP")])

    const middleZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(middleZones, [ZoneTagCard("outpostInnerCirclePvP")])

    const outerZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(outerZones, [ZoneTagCard("outpostOuterCirclePvP")])

    // THIS IS A HACK! This is an invisible and invulnerable building that prevents the village from being destroyed when all other buildings are destroyed.
    const rallyPoint = BuildableCard("piglinRallyingPoint", 1)
    DECK_MultiplyByMultipleRules(rallyPoint, [ZoneFilterCard("outpostInnerCirclePvP"), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const structureCards = []
    for (const structureTag in hordeData.structures) {
        const structureData = hordeData.structures[structureTag]
        const initialAmount = structureData.initialAmount

        if (initialAmount) {
            const count = Array.isArray(initialAmount) ? RandomIntFromIntervalGroup(initialAmount[0], initialAmount[1], villageId) : initialAmount
            const structureCard = BuildableCard(structureData.card, count)
            DECK_MultiplyByMultipleRules(structureCard, structureData.rules)
            structureCards.push(structureCard)
        }
    }

    //play zones
    DECK_PutOnBottomOf(centerZones, baseDeck)
    DECK_PutOnBottomOf(middleZones, baseDeck)
    DECK_PutOnBottomOf(outerZones, baseDeck)

    //play weathering
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)

    //play structures
    structureCards.forEach((structureCard) => DECK_PutOnBottomOf(structureCard, baseDeck))
    DECK_PutOnBottomOf(rallyPoint, baseDeck)

    //other
    SetupBasicVillageClearingCards(baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    OUTPUT_CreatePersistentWorldRequest(GetVillageEntityFromID(villageId), 100, "pvp_high_priority_village", PVP_HEADQUARTERS_BLUE)
    OUTPUT_CreatePersistentWorldRequest(GetVillageEntityFromID(villageId), 100, "pvp_high_priority_village", PVP_HEADQUARTERS_RED)
}

SNIPPET_VillageGenerated("vg_pvp_piglin_gen", (villageId, payload) => {
    _MakePvpBase(villageId, payload.string)

    AddTriggerVolumeToBuildable(GetVillageEntityFromID(villageId), GENERIC_PVP_CAPTURABLE_TV_ID, "spe_pvp_piglin_player", undefined, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
})

SNIPPET_SpatialPartitionEntered("spe_pvp_piglin_player", (triggerEntity, intruderEntity) => {
    const playerTeam = QUERY_GetTeamName(intruderEntity)
    Logi("~~~~~~ spe_pvp_piglin_player ~~~~~ ")
    if (ONBCanPlayAnnouncement(playerTeam, pvpOnboardingPiglinVal.consts.globalCanTriggerAnnouncementKey, intruderEntity)) {
        const village = QUERY_GetVillageIDFromEntity(triggerEntity)
        const allEntities = QUERY_GetEntitiesOwnedByVillage(village)
        if (HasEntities(allEntities)) {
            const piglinStructures = FILTER_ByTagFilter(allEntities, ["piglinStructure"], [])
            if (HasEntities(piglinStructures)) {
                OUTPUT_AnnouncePlayer(pvpOnboardingPiglinVal.messages.withStructures, [], intruderEntity)
            } else {
                OUTPUT_AnnouncePlayer(pvpOnboardingPiglinVal.messages.noStructures, [], intruderEntity)
            }
        } else {
            OUTPUT_AnnouncePlayer(pvpOnboardingPiglinVal.messages.noStructures, [], intruderEntity)
        }
        ONBPreventAnnouncementsForAWhile(playerTeam, pvpOnboardingPiglinVal.consts.globalCanTriggerAnnouncementKey, pvpOnboardingPiglinVal.consts.timeBetweenAnnouncements)
    }
})
