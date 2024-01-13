SNIPPET_InheritsFromGameMode("conquest_practice", () => {
    LISTENFOR_VillageGenerated({
        snippet: "vg_pvp_practice_hq_friendly",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_BLUE,
        payloadString: PVP_HEADQUARTERS_BLUE
    })

    LISTENFOR_VillageGenerated({
        snippet: "vg_pvp_practice_hq_enemy",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_RED,
        payloadString: PVP_HEADQUARTERS_RED
    })
})

SNIPPET_VillageGenerated("vg_pvp_practice_hq_friendly", (villageId, payload) => {
    const baseDeck = DECK_Empty()

    const centerZones = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZones, [ZoneTagCard("hqInnerCirclePvP")])

    const middleZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(middleZones, [ZoneTagCard("hqInnerCirclePvP")])

    const outerZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(outerZones, [ZoneTagCard("hqOuterCirclePvP")])

    const hqCard = BuildableCard(TAG_PVP_HQ, 1)
    DECK_MultiplyByMultipleRules(hqCard, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    //play zones
    DECK_PutOnBottomOf(centerZones, baseDeck)
    DECK_PutOnBottomOf(middleZones, baseDeck)
    DECK_PutOnBottomOf(outerZones, baseDeck)

    // play structures
    DECK_PutOnBottomOf(hqCard, baseDeck)

    SetupBasicVillageClearingCards(baseDeck)
    DECK_PutOnTopOf(EntityClearingCard("clearLootPiglinCrate"), baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    OUTPUT_CreatePersistentWorldRequest(GetVillageEntityFromID(villageId), 100, "pvp_high_priority_village", payload.string)
})

const _addPathCard = (pathCards, direction) => {
    const pathStartRules = [
        // formatting
        PlacementPreferenceCard("closeToDistrictStart")
    ]
    const pathEndRules = [
        // formatting
        ZoneFilterCard("hqOuterCirclePvP"),
        PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START),
        PlacementPreferenceCard(direction)
    ]

    CreatePathRequestOnBottomOf("playerPath", pathStartRules, pathEndRules, pathCards)
}

SNIPPET_VillageGenerated("vg_pvp_practice_hq_enemy", (villageId, payload) => {
    const baseDeck = DECK_Empty()

    const centerZones = ZonesCard("addZone", 1)
    DECK_MultiplyByMultipleRules(centerZones, [ZoneHeightChangeCard("LevelWithCenterPvPHQ"), ZoneTagCard("hqInnerCirclePvP")])

    const middleZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(middleZones, [ZoneHeightChangeCard("1DownFromCenterPvPHQ"), ZoneTagCard("hqInnerCirclePvP")])

    const outerZones = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_MultiplyByMultipleRules(outerZones, [ZoneHeightChangeCard("2DownFromCenterPvPHQ"), ZoneTagCard("hqOuterCirclePvP")])

    const walls = WallsCard("playerWalls", 1)
    DECK_MultiplyBySingle(walls, ZoneFilterCard("hqInnerCirclePvP"), ZoneFilterCard("hqOuterCirclePvP"))

    const hqCard = BuildableCard(TAG_PVP_HQ, 1)
    DECK_MultiplyByMultipleRules(hqCard, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const spawnerCards = DECK_Empty()
    DECK_PutOnBottomOf(BuildableCard("aiZombieSpawner", 1), spawnerCards)
    DECK_PutOnBottomOf(BuildableCard("aiSkeletonSpawner", 1), spawnerCards)
    DECK_PutOnBottomOf(BuildableCard("aiCreeperSpawner", 1), spawnerCards)
    DECK_PutOnBottomOf(BuildableCard("aiStoneGolemSpawner", 1), spawnerCards)
    DECK_PutOnBottomOf(BuildableCard("aiWoodGolemSpawner", 1), spawnerCards)
    DECK_PutOnBottomOf(BuildableCard("aiCavalryGolemSpawner", 1), spawnerCards)
    DECK_PutOnBottomOf(BuildableCard("aiSupportGolemSpawner", 1), spawnerCards)
    DECK_MultiplyByMultipleRules(spawnerCards, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])

    const pathCards = DECK_Empty()
    _addPathCard(pathCards, "placeInDirectionNorthWithRectangleBrush48")
    _addPathCard(pathCards, "placeInDirectionWestWithRectangleBrush48")
    _addPathCard(pathCards, "placeInDirectionEastWithRectangleBrush48")
    _addPathCard(pathCards, "placeInDirectionSouthWithRectangleBrush48")

    //play zones
    DECK_PutOnBottomOf(centerZones, baseDeck)
    DECK_PutOnBottomOf(middleZones, baseDeck)
    DECK_PutOnBottomOf(outerZones, baseDeck)

    // play paths
    DECK_PutOnBottomOf(pathCards, baseDeck)

    // play walls
    DECK_PutOnBottomOf(walls, baseDeck)

    // play structures
    DECK_PutOnBottomOf(hqCard, baseDeck)
    DECK_PutOnBottomOf(spawnerCards, baseDeck)

    SetupBasicVillageClearingCards(baseDeck)
    DECK_PutOnTopOf(EntityClearingCard("clearLootPiglinCrate"), baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)

    OUTPUT_CreatePersistentWorldRequest(GetVillageEntityFromID(villageId), 100, "pvp_high_priority_village", payload.string)
})
