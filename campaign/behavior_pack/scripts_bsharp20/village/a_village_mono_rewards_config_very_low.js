const villageRewardData_VeryLow = {
    tokenCapacity: 2, // the number of refreshes before the chest is full
    unlockVillageRewardDays: [
        { resourceName: "coal", unlockDays: 8, cap: 12 },
        { resourceName: "iron", unlockDays: 5, cap: 12 },
        { resourceName: "redstone", unlockDays: 11, cap: 12 },
        { resourceName: "diamond", unlockDays: 14, cap: 12 }
    ]
}

const villageBiomeRewards_VeryLow = {
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
            [500, 500, 50, 18],
            // threshold 1
            [750, 750, 75, 35],
            // threshold 2
            [1000, 1000, 100, 70],
            // threshold 3
            [1250, 1250, 125, 120],
            // threshold 4
            [1500, 1500, 75, 185],
            // threshold 5
            [1750, 1750, 175, 250]
        ],
        //Surging a days worth of resources at current tuning, equal between modes for now.
        surgeAdditionalResources: [
            [500, 500, 50, 18],
            [750, 750, 75, 35],
            [1000, 1000, 100, 70],
            [1250, 1250, 125, 120],
            [1500, 1500, 150, 185],
            [1750, 1750, 175, 250]
        ]
    },
    [PLACEMENT_NAME.FROSTLANDS_VILLAGE]: {
        rareResource: "diamond",
        lootTableTypes: ["wood", "stone", "emerald", "diamond"],
        lootTableAmounts: [
            [250, 500, 50, 18],
            [375, 750, 75, 35],
            [500, 1000, 100, 70],
            [625, 1250, 125, 120],
            [750, 1500, 150, 185],
            [875, 1750, 175, 250]
        ],
        surgeAdditionalResources: [
            [250, 500, 50, 18],
            [375, 750, 75, 35],
            [500, 1000, 100, 70],
            [625, 1250, 125, 120],
            [750, 1500, 150, 185],
            [875, 1750, 175, 250]
        ]
    },
    [PLACEMENT_NAME.FOREST_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [500, 250, 50, 18],
            [750, 375, 75, 35],
            [1000, 500, 100, 70],
            [1250, 625, 125, 120],
            [1500, 750, 150, 185],
            [1750, 875, 175, 250]
        ],
        surgeAdditionalResources: [
            [500, 250, 50, 18],
            [750, 375, 75, 35],
            [1000, 500, 100, 70],
            [1250, 625, 125, 120],
            [1500, 750, 150, 185],
            [1750, 875, 175, 250]
        ]
    },
    [PLACEMENT_NAME.DRYLANDS_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [250, 500, 50, 18],
            [375, 750, 75, 35],
            [500, 1000, 100, 70],
            [625, 1250, 125, 120],
            [750, 1500, 150, 185],
            [875, 1750, 175, 250]
        ],
        surgeAdditionalResources: [
            [250, 500, 50, 18],
            [375, 750, 75, 35],
            [500, 1000, 100, 70],
            [625, 1250, 125, 120],
            [750, 1500, 150, 185],
            [875, 1750, 175, 250]
        ]
    },
    [PLACEMENT_NAME.WETLANDS_VILLAGE]: {
        rareResource: "redstone",
        lootTableTypes: ["wood", "stone", "emerald", "redstone"],
        lootTableAmounts: [
            [500, 250, 50, 18],
            [750, 375, 75, 35],
            [1000, 500, 100, 70],
            [1250, 625, 125, 120],
            [1500, 750, 150, 185],
            [1750, 875, 175, 250]
        ],
        surgeAdditionalResources: [
            [500, 250, 50, 18],
            [750, 375, 75, 35],
            [1000, 500, 100, 70],
            [1250, 625, 125, 120],
            [1500, 750, 150, 185],
            [1750, 875, 175, 250]
        ]
    },
    [PLACEMENT_NAME.GRASSLANDS_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [250, 500, 50, 18],
            [375, 750, 75, 35],
            [500, 1000, 100, 70],
            [625, 1250, 125, 120],
            [750, 1500, 150, 185],
            [875, 1750, 175, 250]
        ],
        surgeAdditionalResources: [
            [250, 500, 50, 18],
            [375, 750, 75, 35],
            [500, 1000, 100, 70],
            [625, 1250, 125, 120],
            [750, 1500, 150, 185],
            [875, 1750, 175, 250]
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
