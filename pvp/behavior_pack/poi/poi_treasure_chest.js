const hasOpenedChest = "gv_has_opened_chest_VO"
const hasOpenedPiglinCrate = "gv_has_opened_piglin_crate_VO"
/////////////////////////////////////////////////CAMPAIGN//////////////////////////////////////////////////////////////////////
SNIPPET_InheritsFromGameMode("campaign", () => {
    LISTENFOR_PlayerInteracted({
        snippet: "pi_treasure_chest_interacted_campaign",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["treasure_chest_interact"]
    })
    OUTPUT_SetGlobalVariable(TREASURE_CHEST_CAMPAIGN_DATA.globalIndex, RandomIntFromInterval(0, TREASURE_CHEST_CAMPAIGN_DATA.rewardTable.length))
})

SNIPPET_PlayerInteracted("pi_treasure_chest_interacted_campaign", (playerEntity, interactedEntity, _payload) => {
    GrantRewardFromLootTable(playerEntity, interactedEntity, LOOT_TYPE.treasureChest)
    DespawnNearbyRoamingSpawners(interactedEntity)
    if (QUERY_GetGlobalVariable("gv_treasure_chest_journal_unlocked") === 0) {
        IncrementGlobal("gv_treasure_chest_journal_unlocked")
        UnlockJournalEntry(JOURNAL_UNLOCKS.TREASURE_CHEST)
    }
    OUTPUT_SetOverrideForCompassMaxRange(interactedEntity, 0)
})

/////////////////////////////////////////////////PVP//////////////////////////////////////////////////////////////////////PVP
// This is modified by custom game settings to multiply chest yield
SNIPPET_InheritsFromGameMode("pvp", () => {
    LISTENFOR_PlayerInteracted({
        snippet: "pi_treasure_chest_interacted_pvp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["treasure_chest_interact"]
    })
    OUTPUT_SetGlobalVariable(TREASURE_CHEST_PVP_DATA.globalIndex, RandomIntFromInterval(0, TREASURE_CHEST_PVP_DATA.rewardTable.length))
})

SNIPPET_PlayerInteracted("pi_treasure_chest_interacted_pvp", (playerEntity, interactedEntity, _payload) => {
    let multiplier = 1
    if (QUERY_IsGlobalVariableSet("gv_pvp_custom_chest_yield_percentage")) {
        multiplier = QUERY_GetGlobalVariable("gv_pvp_custom_chest_yield_percentage") * 0.01
    }
    GrantRewardFromLootTable(playerEntity, interactedEntity, LOOT_TYPE.treasureChestPvP, multiplier)
    OUTPUT_SetOverrideForCompassMaxRange(interactedEntity, 0)
})
