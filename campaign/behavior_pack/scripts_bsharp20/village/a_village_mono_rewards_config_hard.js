const villageRewardData_Hard = {
    unlockVillageRewardDays: [
        { resourceName: "coal", unlockDays: 11, cap: 9 },
        { resourceName: "iron", unlockDays: 8, cap: 9 },
        { resourceName: "redstone", unlockDays: 14, cap: 9 },
        { resourceName: "diamond", unlockDays: 17, cap: 9 }
    ]
}

const villageBiomeRewards_Hard = {
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
            [250, 250, 25, 15],
            // threshold 1
            [375, 375, 35, 30],
            // threshold 2
            [500, 500, 45, 60],
            // threshold 3
            [625, 625, 60, 100],
            // threshold 4
            [750, 750, 75, 150],
            // threshold 5
            [875, 875, 90, 200]
        ],
        //Surging a days worth of resources at current tuning, equal between modes for now.
        surgeAdditionalResources: [
            [250, 250, 25, 15],
            [375, 375, 35, 30],
            [500, 500, 45, 60],
            [625, 625, 60, 100],
            [750, 750, 75, 150],
            [875, 875, 90, 200]
        ]
    },
    [PLACEMENT_NAME.FROSTLANDS_VILLAGE]: {
        rareResource: "diamond",
        lootTableTypes: ["wood", "stone", "emerald", "diamond"],
        lootTableAmounts: [
            [125, 250, 25, 15],
            [185, 375, 35, 30],
            [250, 500, 45, 60],
            [315, 625, 60, 100],
            [375, 750, 75, 150],
            [435, 875, 90, 200]
        ],
        surgeAdditionalResources: [
            [125, 250, 25, 15],
            [185, 375, 35, 30],
            [250, 500, 45, 60],
            [315, 625, 60, 100],
            [375, 750, 75, 150],
            [435, 875, 90, 200]
        ]
    },
    [PLACEMENT_NAME.FOREST_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [250, 125, 25, 15],
            [375, 185, 35, 30],
            [500, 250, 45, 60],
            [625, 315, 60, 100],
            [750, 375, 75, 150],
            [875, 435, 90, 200]
        ],
        surgeAdditionalResources: [
            [250, 125, 25, 15],
            [375, 185, 35, 30],
            [500, 250, 45, 60],
            [625, 315, 60, 100],
            [750, 375, 75, 150],
            [875, 435, 90, 200]
        ]
    },
    [PLACEMENT_NAME.DRYLANDS_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [125, 250, 25, 15],
            [185, 375, 35, 30],
            [250, 500, 45, 60],
            [315, 625, 60, 100],
            [375, 750, 75, 150],
            [435, 875, 90, 200]
        ],
        surgeAdditionalResources: [
            [125, 250, 25, 15],
            [185, 375, 35, 30],
            [250, 500, 45, 60],
            [315, 625, 60, 100],
            [375, 750, 75, 150],
            [435, 875, 90, 200]
        ]
    },
    [PLACEMENT_NAME.WETLANDS_VILLAGE]: {
        rareResource: "redstone",
        lootTableTypes: ["wood", "stone", "emerald", "redstone"],
        lootTableAmounts: [
            [250, 125, 25, 15],
            [375, 185, 35, 30],
            [500, 250, 45, 60],
            [625, 315, 60, 100],
            [750, 375, 75, 150],
            [875, 435, 90, 200]
        ],
        surgeAdditionalResources: [
            [250, 125, 25, 15],
            [375, 185, 35, 30],
            [500, 250, 45, 60],
            [625, 315, 60, 100],
            [750, 375, 75, 150],
            [875, 435, 90, 200]
        ]
    },
    [PLACEMENT_NAME.GRASSLANDS_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [125, 250, 25, 15],
            [185, 375, 35, 30],
            [250, 500, 45, 60],
            [315, 625, 60, 100],
            [375, 750, 75, 150],
            [435, 875, 90, 200]
        ],
        surgeAdditionalResources: [
            [125, 250, 25, 15],
            [185, 375, 35, 30],
            [250, 500, 45, 60],
            [315, 625, 60, 100],
            [375, 750, 75, 150],
            [435, 875, 90, 200]
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

RegisterDifficultyConfig("village_reward_data_config", villageRewardData_Hard, GAME_DIFFICULTY.hard)
RegisterDifficultyConfig("village_biome_rewards_config", villageBiomeRewards_Hard, GAME_DIFFICULTY.hard)
