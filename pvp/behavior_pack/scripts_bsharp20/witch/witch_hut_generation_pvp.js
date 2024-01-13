SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchStartHQsBuilt, () => {
    LISTENFOR_VillageGenerated({
        snippet: "vg_pvp_witch",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: "faction.witch.pvp"
    })
})

SNIPPET_VillageGenerated("vg_pvp_witch", (villageId) => {
    const baseDeck = DECK_Empty()
    const zones = ZonesCard("addZone", 1)
    DECK_PutOnBottomOf(zones, baseDeck)
    const ring1Zones = LayerOfZonesCard("addLayerOfZones", 2)
    DECK_PutOnBottomOf(ring1Zones, baseDeck)
    const zonerCard = BuildableCard(TAG_PVP_WITCH_HUT, 1)
    DECK_MultiplyByMultipleRules(zonerCard, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")])
    DECK_PutOnBottomOf(zonerCard, baseDeck)
    SetupBasicVillageClearingCards(baseDeck)
    DECK_PutOnTopOf(EntityClearingCard("clearLootPiglinCrate"), baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
})
