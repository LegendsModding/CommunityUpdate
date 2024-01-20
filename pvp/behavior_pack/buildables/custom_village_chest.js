const customVillageChestMapping = [
    // index maps to the corresponding option in custom_game_settings.json
    {
        // Extremely High (value = 0)
        rewards: villageRewardData_ExtremelyHigh,
        biomeRewards: villageBiomeRewards_ExtremelyHigh
    },
    {
        // Very High (value = 1)
        rewards: villageRewardData_VeryHigh,
        biomeRewards: villageBiomeRewards_VeryHigh
    },
    {
        // High (value = 2)
        rewards: villageRewardData_Peaceful,
        biomeRewards: villageBiomeRewards_Peaceful
    },
    {
        // Standard (value = 3)
        rewards: villageRewardData,
        biomeRewards: villageBiomeRewards
    },
    {
        // Low (value = 4)
        rewards: villageRewardData_Normal,
        biomeRewards: villageBiomeRewards_Normal
    },
    {
        // TODO: Very Low (value = 5)
        rewards: villageRewardData_VeryLow,
        biomeRewards: villageBiomeRewards_VeryLow
    },
    {
        // Extremely Low (value = 6)
        rewards: villageRewardData_Hard,
        biomeRewards: villageBiomeRewards_Hard
    }
]

// Since this runs before SNIPPET_Bootstrap, it will set the difficulty configs before z_difficulty_state runs
SNIPPET_GameSettingInitialized("resources_chest_village_yield", (value) => {
    const setting = value.value
    const rewardTables = customVillageChestMapping[setting]
    Logi("Village chest yield is set to: " + setting)
    RegisterDifficultyConfig("village_reward_data_config", rewardTables.rewards, GAME_DIFFICULTY.custom)
    RegisterDifficultyConfig("village_biome_rewards_config", rewardTables.biomeRewards, GAME_DIFFICULTY.custom)
})
