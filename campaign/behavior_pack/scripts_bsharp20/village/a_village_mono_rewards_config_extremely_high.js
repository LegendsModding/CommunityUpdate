const villageRewardData_ExtremelyHigh = {
    tokenCapacity: 1, // the number of refreshes before the chest is full
    unlockVillageRewardDays: [
        { resourceName: "coal", unlockDays: 8, cap: 12 },
        { resourceName: "iron", unlockDays: 5, cap: 12 },
        { resourceName: "redstone", unlockDays: 11, cap: 12 },
        { resourceName: "diamond", unlockDays: 14, cap: 12 }
    ]
}

const villageBiomeRewards_ExtremelyHigh = {
    // TODO (jcheung): placement names keys will be replaced by biome categories in the future
    // Default is used if no matching entry is found.
    surgeResource: "xp_common",
    // How much is given per culture threshold
    surgeResourceAmounts: [
        // threshold 0 (none)
        100,
        // threshold 1
        200,
        // threshold 2
        300,
        // threshold 3
        400,
        // threshold 4
        500,
        // threshold 5
        600
    ],
    // The maximum amount a chest can hold
    surgeResourceCap: 600,
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
            [9999, 9999, 9999, 9999],
            // threshold 1
            [9999, 9999, 9999, 9999],
            // threshold 2
            [9999, 9999, 9999, 9999],
            // threshold 3
            [9999, 9999, 9999, 9999],
            // threshold 4
            [9999, 9999, 9999, 9999],
            // threshold 5
            [9999, 9999, 9999, 9999]
        ],
        //Surging a days worth of resources at current tuning, equal between modes for now.
        surgeAdditionalResources: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ]
    },
    [PLACEMENT_NAME.FROSTLANDS_VILLAGE]: {
        rareResource: "diamond",
        lootTableTypes: ["wood", "stone", "emerald", "diamond"],
        lootTableAmounts: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ],
        surgeAdditionalResources: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ]
    },
    [PLACEMENT_NAME.FOREST_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ],
        surgeAdditionalResources: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ]
    },
    [PLACEMENT_NAME.DRYLANDS_VILLAGE]: {
        rareResource: "iron",
        lootTableTypes: ["wood", "stone", "emerald", "iron"],
        lootTableAmounts: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ],
        surgeAdditionalResources: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ]
    },
    [PLACEMENT_NAME.WETLANDS_VILLAGE]: {
        rareResource: "redstone",
        lootTableTypes: ["wood", "stone", "emerald", "redstone"],
        lootTableAmounts: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ],
        surgeAdditionalResources: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ]
    },
    [PLACEMENT_NAME.GRASSLANDS_VILLAGE]: {
        rareResource: "coal",
        lootTableTypes: ["wood", "stone", "emerald", "coal"],
        lootTableAmounts: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
        ],
        surgeAdditionalResources: [
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999],
            [9999, 9999, 9999, 9999]
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
