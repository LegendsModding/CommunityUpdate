const customCampaignScriptedLootMapping = [
    TREASURE_CHEST_CAMPAIGN_DATA_VERYHIGH, // VeryHigh (0)
    TREASURE_CHEST_CAMPAIGN_DATA_HIGH, // High (1)
    TREASURE_CHEST_CAMPAIGN_DATA, //  Standard (2)
    TREASURE_CHEST_CAMPAIGN_DATA_NORMAL, // Low (3)
    TREASURE_CHEST_CAMPAIGN_DATA_HARD // VeryLow (4)
]

// These are stored as percentages instead of multipliers because you can't put non-integer values in global variables
const customPvpScriptedLootMapping = [
    400, // VeryHigh (0)
    200, // High (1)
    100, // Standard (2)
    50, // Low (3)
    25 // VeryLow (4)
]

// Since this runs before SNIPPET_Bootstrap, it will set the difficulty configs before z_difficulty_state runs
SNIPPET_GameSettingInitialized("resources_chest_allay_yield", (value) => {
    if (QUERY_InheritsFromGameMode("campaign")) {
        RegisterDifficultyConfig("treasure_chest_campaign_data_config", customCampaignScriptedLootMapping[value.value], GAME_DIFFICULTY.custom)
    } else if (QUERY_InheritsFromGameMode("conquest")) {
        OUTPUT_SetGlobalVariable("gv_pvp_custom_chest_yield_percentage", customPvpScriptedLootMapping[value.value])
    }
})
