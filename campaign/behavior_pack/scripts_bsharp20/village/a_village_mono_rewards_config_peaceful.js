const villageRewardData_Peaceful = {
    tokenCapacity: 2, // the number of refreshes before the chest is full
    unlockVillageRewardDays: [
        { resourceName: "coal", unlockDays: 8, cap: 12 },
        { resourceName: "iron", unlockDays: 5, cap: 12 },
        { resourceName: "redstone", unlockDays: 11, cap: 12 },
        { resourceName: "diamond", unlockDays: 14, cap: 12 }
    ]
}

const villageBiomeRewards_Peaceful = {
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
            [2000, 2000, 200, 50],
            // threshold 1
            [3000, 3000, 300, 100],
            // threshold 2
            [4000, 4000, 400, 200],
            // threshold 3
            [5000, 5000, 500, 350],
            // threshold 4
            [6000, 6000, 600, 550],
            // threshold 5
            [7000, 7000, 700, 800]
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
            [1000, 2000, 200, 50],
            [1500, 3000, 300, 100],
            [2000, 4000, 400, 200],
            [2500, 5000, 500, 350],
            [3000, 6000, 600, 550],
            [3500, 7000, 700, 800]
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
            [2000, 1000, 200, 50],
            [3000, 1500, 300, 100],
            [4000, 2000, 400, 200],
            [5000, 2500, 500, 350],
            [6000, 3000, 600, 550],
            [7000, 3500, 700, 800]
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
            [1000, 2000, 200, 50],
            [1500, 3000, 300, 100],
            [2000, 4000, 400, 200],
            [2500, 5000, 500, 350],
            [3000, 6000, 600, 550],
            [3500, 7000, 700, 800]
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
            [2000, 1000, 200, 50],
            [3000, 1500, 300, 100],
            [4000, 2000, 400, 200],
            [5000, 2500, 500, 350],
            [6000, 3000, 600, 550],
            [7000, 3500, 700, 800]
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
            [1000, 2000, 200, 50],
            [1500, 3000, 300, 100],
            [2000, 4000, 400, 200],
            [2500, 5000, 500, 350],
            [3000, 6000, 600, 550],
            [3500, 7000, 700, 800]
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

RegisterDifficultyConfig("village_reward_data_config", villageRewardData_Peaceful, GAME_DIFFICULTY.peaceful)
RegisterDifficultyConfig("village_biome_rewards_config", villageBiomeRewards_Peaceful, GAME_DIFFICULTY.peaceful)
