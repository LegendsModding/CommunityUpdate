const villageRewardData_VeryHigh = {
    tokenCapacity: 2, // the number of refreshes before the chest is full
    unlockVillageRewardDays: [
        { resourceName: "coal", unlockDays: 8, cap: 12 },
        { resourceName: "iron", unlockDays: 5, cap: 12 },
        { resourceName: "redstone", unlockDays: 11, cap: 12 },
        { resourceName: "diamond", unlockDays: 14, cap: 12 }
    ]
}

const villageBiomeRewards_VeryHigh = {
    // TODO (jcheung): placement names keys will be replaced by biome categories in the future
    // Default is used if no matching entry is found.
    surgeResource: "xp_common",
    // How much is given per culture threshold
    surgeResourceAmounts: [
        // threshold 0 (none)
        100,
        // threshold 1
        120,
        // threshold 2
        140,
        // threshold 3
        160,
        // threshold 4
        180,
        // threshold 5
        250
    ],
    // The maximum amount a chest can hold
    surgeResourceCap: 250,
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
            [4000, 4000, 400, 100],
            // threshold 1
            [6000, 6000, 600, 200],
            // threshold 2
            [8000, 8000, 800, 400],
            // threshold 3
            [9999, 9999, 9999, 700],
            // threshold 4
            [9999, 9999, 1200, 1100],
            // threshold 5
            [9999, 9999, 1400, 1600]
        ],
        //Surging a days worth of resources at current tuning, equal between modes for now.
        surgeAdditionalResources: [
            [2000, 2000, 200, 50],
            [3000, 3000, 300, 100],
            [4000, 4000, 400, 200],
            [5000, 5000, 500, 350],
            [6000, 6000, 600, 550],
            [7000, 7000, 700, 800]
        ]
    },
    [PLACEMENT_NAME.FROSTLANDS_VILLAGE]: {
        rareResource: "diamond",
        lootTableTypes: ["wood", "stone", "emerald", "diamond"],
        lootTableAmounts: [
            [2000, 4000, 400, 100],
            [3000, 6000, 600, 200],
            [4000, 8000, 800, 400],
            [5000, 10000, 1000, 700],
            [6000, 12000, 1200, 1100],
            [7000, 14000, 1400, 1600]
        ],
        surgeAdditionalResources: [
            [1000, 2000, 200, 50],
            [1500, 3000, 300, 100],
            [2000, 4000, 400, 200],
            [2500, 5000, 500, 350],
            [3000, 6000, 600, 550],
            [3500, 7000, 700, 800]
        ]
    },
    [PLACEMENT_NAME.FOREST_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [4000, 2000, 400, 100],
            [6000, 3000, 600, 200],
            [8000, 4000, 800, 400],
            [9999, 5000, 1000, 700],
            [9999, 6000, 1200, 1100],
            [9999, 7000, 1400, 1600]
        ],
        surgeAdditionalResources: [
            [2000, 1000, 200, 50],
            [3000, 1500, 300, 100],
            [4000, 2000, 400, 200],
            [5000, 2500, 500, 350],
            [6000, 3000, 600, 550],
            [7000, 3500, 700, 800]
        ]
    },
    [PLACEMENT_NAME.DRYLANDS_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [2000, 4000, 400, 100],
            [3000, 6000, 600, 200],
            [4000, 8000, 800, 400],
            [5000, 10000, 1000, 700],
            [6000, 12000, 1200, 1100],
            [7000, 14000, 1400, 1600]
        ],
        surgeAdditionalResources: [
            [1000, 2000, 200, 50],
            [1500, 3000, 300, 100],
            [2000, 4000, 400, 200],
            [2500, 5000, 500, 350],
            [3000, 6000, 600, 550],
            [3500, 7000, 700, 800]
        ]
    },
    [PLACEMENT_NAME.WETLANDS_VILLAGE]: {
        rareResource: "redstone",
        lootTableTypes: ["wood", "stone", "emerald", "redstone"],
        lootTableAmounts: [
            [4000, 2000, 400, 100],
            [6000, 3000, 600, 200],
            [8000, 4000, 800, 400],
            [9999, 5000, 1000, 700],
            [9999, 6000, 1200, 1100],
            [9999, 7000, 1400, 1600]
        ],
        surgeAdditionalResources: [
            [2000, 1000, 200, 50],
            [3000, 1500, 300, 100],
            [4000, 2000, 400, 200],
            [5000, 2500, 500, 350],
            [6000, 3000, 600, 550],
            [7000, 3500, 700, 800]
        ]
    },
    [PLACEMENT_NAME.GRASSLANDS_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [2000, 4000, 400, 100],
            [3000, 6000, 600, 200],
            [4000, 8000, 800, 400],
            [5000, 10000, 1000, 700],
            [6000, 12000, 1200, 1100],
            [7000, 14000, 1400, 1600]
        ],
        surgeAdditionalResources: [
            [1000, 2000, 200, 50],
            [1500, 3000, 300, 100],
            [2000, 4000, 400, 200],
            [2500, 5000, 500, 350],
            [3000, 6000, 600, 550],
            [3500, 7000, 700, 800]
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
