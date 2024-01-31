const villageRewardData = {
    tokenCapacity: 1, // the number of refreshes before the chest is full
    tokenFillRate: 30 * 60, // 1 token every 30 minutes (1 day)
    tokenTimer: "timer_village_token_refill",
    updateTime: 5, // seconds after opening chest to recheck if it should be closed
    variables: {
        openedFirstChest: "gv_village_chest_first_open",
        daysRareResourceLocked: "gv_days_rare_resource_locked"
    },
    unlocks: {
        linkedChest: "unlock_linked_village_chest"
    },
    unlockVillageRewardDays: [
        { resourceName: "coal", unlockDays: 9, cap: 11 },
        { resourceName: "iron", unlockDays: 6, cap: 11 },
        { resourceName: "redstone", unlockDays: 12, cap: 11 },
        { resourceName: "diamond", unlockDays: 15, cap: 11 }
    ],
    messages: {
        all: {
            cannotOpenNoSpace: "village_chest_cannot_open_no_space",
            cannotOpenEmpty: "village_chest_cannot_open_empty",
            openExcess: "village_chest_rewards_with_excess",
            open: "village_chest_rewards"
        },
        single: {
            cannotOpenNoSpace: "village_chest_cannot_open_no_space",
            cannotOpenEmpty: "village_chest_cannot_open_empty",
            openExcess: "village_chest_rewards_single_with_excess",
            open: "village_chest_rewards_single"
        }
    }
}

const villageBiomeRewards = {
    // TODO (jcheung): placement names keys will be replaced by biome categories in the future
    // Default is used if no matching entry is found.
    surgeResource: "xp_common",
    // How much is given per culture threshold
    surgeResourceAmounts: [
        // threshold 0 (none)
        50,
        // threshold 1
        60,
        // threshold 2
        70,
        // threshold 3
        80,
        // threshold 4
        90,
        // threshold 5
        100
    ],
    // The maximum amount a chest can hold
    surgeResourceCap: 200,
    // Multiplies both surgeResource and surgeAdditionalResources by the incoming attack strength
    surgeStrengthMultipliers: [
        // Strength 1
        1,
        // Strength 2
        1.25,
        // Strength 3
        1.5
    ],
    default: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            // threshold 0 (none)
            [1000, 1000, 100, 25],
            // threshold 1
            [1500, 1500, 150, 50],
            // threshold 2
            [2000, 2000, 200, 100],
            // threshold 3
            [2500, 2500, 250, 175],
            // threshold 4
            [3000, 3000, 300, 275],
            // threshold 5
            [3500, 3500, 350, 400]
        ],
        //Surging a days worth of resources at current tuning, equal between modes for now.
        surgeAdditionalResources: [
            [1000, 1000, 100, 25],
            [1500, 1500, 150, 50],
            [2000, 2000, 200, 100],
            [2500, 2500, 250, 175],
            [3000, 3000, 300, 275],
            [3500, 3500, 350, 400]
        ]
    },
    [PLACEMENT_NAME.FROSTLANDS_VILLAGE]: {
        rareResource: "diamond",
        lootTableTypes: ["wood", "stone", "emerald", "diamond"],
        lootTableAmounts: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ],
        surgeAdditionalResources: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ]
    },
    [PLACEMENT_NAME.FOREST_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [1000, 500, 100, 25],
            [1500, 750, 150, 50],
            [2000, 1000, 200, 100],
            [2500, 1250, 250, 175],
            [3000, 1500, 300, 275],
            [3500, 1750, 350, 400]
        ],
        surgeAdditionalResources: [
            [1000, 500, 100, 25],
            [1500, 750, 150, 50],
            [2000, 1000, 200, 100],
            [2500, 1250, 250, 175],
            [3000, 1500, 300, 275],
            [3500, 1750, 350, 400]
        ]
    },
    [PLACEMENT_NAME.DRYLANDS_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ],
        surgeAdditionalResources: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ]
    },
    [PLACEMENT_NAME.WETLANDS_VILLAGE]: {
        rareResource: "redstone",
        lootTableTypes: ["wood", "stone", "emerald", "redstone"],
        lootTableAmounts: [
            [1000, 500, 100, 25],
            [1500, 750, 150, 50],
            [2000, 1000, 200, 100],
            [2500, 1250, 250, 175],
            [3000, 1500, 300, 275],
            [3500, 1750, 350, 400]
        ],
        surgeAdditionalResources: [
            [1000, 500, 100, 25],
            [1500, 750, 150, 50],
            [2000, 1000, 200, 100],
            [2500, 1250, 250, 175],
            [3000, 1500, 300, 275],
            [3500, 1750, 350, 400]
        ]
    },
    [PLACEMENT_NAME.GRASSLANDS_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ],
        surgeAdditionalResources: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ]
    },
    [PLACEMENT_NAME.BROKENLANDS_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ],
        surgeAdditionalResources: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ]
    },
    [PLACEMENT_NAME.FATEFUL_LAND_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ],
        surgeAdditionalResources: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ]
    },
    [PLACEMENT_NAME.JUNGLE_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ],
        surgeAdditionalResources: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ]
    },
    [PLACEMENT_NAME.MOUNTAIN_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ],
        surgeAdditionalResources: [
            [500, 1000, 100, 25],
            [750, 1500, 150, 50],
            [1000, 2000, 200, 100],
            [1250, 2500, 250, 175],
            [1500, 3000, 300, 275],
            [1750, 3500, 350, 400]
        ]
    }
}

RegisterDifficultyConfig("village_reward_data_config", villageRewardData, GAME_DIFFICULTY.easy)
RegisterDifficultyConfig("village_biome_rewards_config", villageBiomeRewards, GAME_DIFFICULTY.easy)