// The new difficuly config system supports partial overrides
// It starts at Normal and then walks to either easier difficulty or harder difficulty, applying each new override on its way
// So the Peaceful config would have all the changes from Normal -> Easy -> Peaceful, for example.

// Contains changes 2 level down -> includes changes from the previous level -> 
// outposts will give 30 iron instead of 20 AND small bases will give 40 gold instead of 25
const baseLootTables_Peaceful = {
    [FACTION_NAME_ATTACK]: {
        [BASE_SIZE_OUTPOST]: [
            {
                name: baseLootVariations.GOLD,
                weight: 1,
                loot: [Resource("gold", 50)]
            }
        ],
        [BASE_SIZE_SMALL]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 50), Resource("xp_common", 50)]
            }
        ],
        [BASE_SIZE_PIGLIN_SKELETON]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 50), Resource("xp_common", 50)]
            }
        ],
        [BASE_SIZE_MEDIUM]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 75), Resource("xp_common", 100)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 150), Resource("xp_common", 150)]
            }
        ]
    },
    [FACTION_NAME_DEFEND]: {
        [BASE_SIZE_OUTPOST]: [
            {
                name: baseLootVariations.GOLD,
                weight: 1,
                loot: [Resource("gold", 50)]
            }
        ],
        [BASE_SIZE_SMALL]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 50), Resource("xp_common", 50)]
            }
        ],
        [BASE_SIZE_PIGLIN_CREEPER]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 50), Resource("xp_common", 50)]
            }
        ],
        [BASE_SIZE_MEDIUM]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 75), Resource("xp_common", 100)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 150), Resource("xp_common", 150)]
            }
        ]
    },
    [FACTION_NAME_FROST]: {
        [BASE_SIZE_OUTPOST]: [
            {
                name: baseLootVariations.GOLD,
                weight: 1,
                loot: [Resource("gold", 50)]
            }
        ],
        [BASE_SIZE_SMALL]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 50), Resource("xp_common", 50)]
            }
        ],
        [BASE_SIZE_PIGLIN_CREEPER]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 50), Resource("xp_common", 50)]
            }
        ],
        [BASE_SIZE_MEDIUM]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 75), Resource("xp_common", 100)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 150), Resource("xp_common", 150)]
            }
        ]
    },
    [FACTION_NAME_OBSTACLE]: {
        [BASE_SIZE_OUTPOST]: [
            {
                name: baseLootVariations.GOLD,
                weight: 1,
                loot: [Resource("gold", 50)]
            }
        ],
        [BASE_SIZE_SMALL]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 50), Resource("xp_common", 50)]
            }
        ],
        [BASE_SIZE_PIGLIN_ZOMBIE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 50), Resource("xp_common", 50)]
            }
        ],
        [BASE_SIZE_MEDIUM]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 75), Resource("xp_common", 100)]
            }
        ],
        [BASE_SIZE_LARGE]: [
            {
                name: baseLootVariations.GOLD,
                weight: 2,
                loot: [Resource("gold", 150), Resource("xp_common", 150)]
            }
        ]
    }
} 

// Register declared configs for their respective difficulties - make sure to use the same id (first argument) for all configs
// NORMAL difficulty config should always exist
// baseLootTables is then used everywhere else in B# to read values from and its contents automatically change based on difficulty
RegisterDifficultyConfig("base_loot_tables_config", baseLootTables_Peaceful, GAME_DIFFICULTY.peaceful)