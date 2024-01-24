// "Core" configuration for the NORMAL difficulty
// Everything else starts overriding from this config
// NORMAL config should always exist
//NOTE: Small bases are set to 0, this may seem strange but if not set it will inherit the previous difficulty. Mythic (Hard) is supposed to be have a bit less resources, coupled with having more bases than default.
const baseLootTables_Normal = {
    [FACTION_NAME_ATTACK]: {
        [BASE_SIZE_OUTPOST]: [
            {
                name: baseLootVariations.GOLD,
                weight: 1,
                loot: [Resource("gold", 25)]
            }
        ],
        [BASE_SIZE_SMALL]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_PIGLIN_SKELETON]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_MEDIUM]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 10), Resource("xp_common", 10)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 25), Resource("xp_common", 25)]
            }
        ]
    },
    [FACTION_NAME_DEFEND]: {
        [BASE_SIZE_OUTPOST]: [
            {
                name: baseLootVariations.GOLD,
                weight: 1,
                loot: [Resource("gold", 25)]
            }
        ],
        [BASE_SIZE_SMALL]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_PIGLIN_CREEPER]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_PIGLIN_SPIDER]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_MEDIUM]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 10), Resource("xp_common", 10)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 25), Resource("xp_common", 25)]
            }
        ]
    },
    [FACTION_NAME_OBSTACLE]: {
        [BASE_SIZE_OUTPOST]: [
            {
                name: baseLootVariations.GOLD,
                weight: 1,
                loot: [Resource("gold", 25)]
            }
        ],
        [BASE_SIZE_SMALL]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_PIGLIN_ZOMBIE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_MEDIUM]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 10), Resource("xp_common", 10)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 25), Resource("xp_common", 25)]
            }
        ]
    },
    [FACTION_NAME_FROST]: {
        [BASE_SIZE_OUTPOST]: [
            {
                name: baseLootVariations.GOLD,
                weight: 1,
                loot: [Resource("gold", 25)]
            }
        ],
        [BASE_SIZE_SMALL]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_PIGLIN_ZOMBIE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_MEDIUM]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 10), Resource("xp_common", 10)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 25), Resource("xp_common", 25)]
            }
        ]
    }
}

// Register declared configs for their respective difficulties - make sure to use the same id (first argument) for all configs
// NORMAL difficulty config should always exist
// baseLootTables is then used everywhere else in B# to read values from and its contents automatically change based on difficulty
RegisterDifficultyConfig("base_loot_tables_config", baseLootTables_Normal, GAME_DIFFICULTY.normal)
RegisterDifficultyConfig("base_loot_tables_config", baseLootTables_Normal, GAME_DIFFICULTY.custom)