// The new difficuly config system supports partial overrides
// It starts at Normal and then walks to either easier difficulty or harder difficulty, applying each new override on its way
// So the Peaceful config would have all the changes from Normal -> Easy -> Peaceful, for example.

// NOTE: Many are set to 0, this may seem strange but if not set it will inherit the previous difficulty. Legendary (Hard) is supposed to be more resource scarce, coupled with having more bases than default.
const baseLootTables_Hard = {
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
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
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
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
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
        [BASE_SIZE_PIGLIN_SLIME]: [
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
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
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
        [BASE_SIZE_PIGLIN_SILVERFISH]: [
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
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 0), Resource("xp_common", 0)]
            }
        ]
    }
}

// Register declared configs for their respective difficulties - make sure to use the same id (first argument) for all configs
// NORMAL difficulty config should always exist
// baseLootTables is then used everywhere else in B# to read values from and its contents automatically change based on difficulty
RegisterDifficultyConfig("base_loot_tables_config", baseLootTables_Hard, GAME_DIFFICULTY.hard)