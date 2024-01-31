const villageRewardData_Normal = {
    tokenCapacity: 1, // the number of refreshes before the chest is full
    unlockVillageRewardDays: [
        { resourceName: "coal", unlockDays: 10, cap: 10 },
        { resourceName: "iron", unlockDays: 7, cap: 10 },
        { resourceName: "redstone", unlockDays: 13, cap: 10 },
        { resourceName: "diamond", unlockDays: 16, cap: 10 }
    ]
}

const villageBiomeRewards_Normal = {
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
            [750, 750, 50, 20],
            // threshold 1
            [1125, 1125, 75, 40],
            // threshold 2
            [1500, 1500, 100, 80],
            // threshold 3
            [1875, 1875, 125, 140],
            // threshold 4
            [220, 220, 150, 220],
            // threshold 5
            [2650, 2650, 175, 300]
        ],
        //Surging a days worth of resources at current tuning, equal between modes for now.
        surgeAdditionalResources: [
            [750, 750, 50, 20],
            [1125, 1125, 75, 40],
            [1500, 1500, 100, 80],
            [1875, 1875, 125, 140],
            [2250, 2250, 150, 220],
            [2650, 2650, 175, 300]
        ]
    },
    [PLACEMENT_NAME.FROSTLANDS_VILLAGE]: {
        rareResource: "diamond",
        lootTableTypes: ["wood", "stone", "emerald", "diamond"],
        lootTableAmounts: [
            [375, 750, 50, 20],
            [565, 1125, 75, 40],
            [750, 1500, 100, 80],
            [935, 1875, 125, 140],
            [1125, 2250, 150, 220],
            [1315, 2625, 175, 300]
        ],
        surgeAdditionalResources: [
            [375, 750, 50, 20],
            [565, 1125, 75, 40],
            [750, 1500, 100, 80],
            [935, 1875, 125, 140],
            [1125, 2250, 150, 220],
            [1315, 2625, 175, 300]
        ]
    },
    [PLACEMENT_NAME.FOREST_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [750, 375, 50, 20],
            [1125, 565, 75, 40],
            [1500, 750, 100, 80],
            [1875, 935, 125, 140],
            [2250, 1125, 150, 220],
            [2625, 1315, 175, 300]
        ],
        surgeAdditionalResources: [
            [750, 375, 50, 20],
            [1125, 565, 75, 40],
            [1500, 750, 100, 80],
            [1875, 935, 125, 140],
            [2250, 1125, 150, 220],
            [2625, 1315, 175, 300]
        ]
    },
    [PLACEMENT_NAME.DRYLANDS_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [375, 750, 50, 20],
            [565, 1125, 75, 40],
            [750, 1500, 100, 80],
            [935, 1875, 125, 140],
            [1125, 2250, 150, 220],
            [1315, 2625, 175, 300]
        ],
        surgeAdditionalResources: [
            [375, 750, 50, 20],
            [565, 1125, 75, 40],
            [750, 1500, 100, 80],
            [935, 1875, 125, 140],
            [1125, 2250, 150, 220],
            [1315, 2625, 175, 300]
        ]
    },
    [PLACEMENT_NAME.WETLANDS_VILLAGE]: {
        rareResource: "redstone",
        lootTableTypes: ["wood", "stone", "emerald", "redstone"],
        lootTableAmounts: [
            [750, 375, 50, 20],
            [1125, 565, 75, 40],
            [1500, 750, 100, 80],
            [1875, 935, 125, 140],
            [2250, 1125, 150, 220],
            [2625, 1315, 175, 300]
        ],
        surgeAdditionalResources: [
            [750, 375, 50, 20],
            [1125, 565, 75, 40],
            [1500, 750, 100, 80],
            [1875, 935, 125, 140],
            [2250, 1125, 150, 220],
            [2625, 1315, 175, 300]
        ]
    },
    [PLACEMENT_NAME.GRASSLANDS_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [375, 750, 50, 20],
            [565, 1125, 75, 40],
            [750, 1500, 100, 80],
            [935, 1875, 125, 140],
            [1125, 2250, 150, 220],
            [1315, 2625, 175, 300]
        ],
        surgeAdditionalResources: [
            [375, 750, 50, 20],
            [565, 1125, 75, 40],
            [750, 1500, 100, 80],
            [935, 1875, 125, 140],
            [1125, 2250, 150, 220],
            [1315, 2625, 175, 300]
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

RegisterDifficultyConfig("village_reward_data_config", villageRewardData_Normal, GAME_DIFFICULTY.normal)
RegisterDifficultyConfig("village_biome_rewards_config", villageBiomeRewards_Normal, GAME_DIFFICULTY.normal)
