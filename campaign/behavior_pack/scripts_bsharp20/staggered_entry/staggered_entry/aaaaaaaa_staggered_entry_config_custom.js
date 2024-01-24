const HordeBasesSetup_Custom = {
    [FACTION_NAME_ATTACK]: {
        centralBase: BASE_SIZE_LARGE,
        numSmall: 0,
        numMedium: 0,
        numLarge: 0,
        numInitialBases: 5,
        numInitialOutposts: 7,
        establishmentPace: 2,
        firstAttackDelayDays: 1
    },
    [FACTION_NAME_DEFEND]: {
        centralBase: BASE_SIZE_LARGE,
        numSmall: 0,
        numMedium: 0,
        numLarge: 0,
        numInitialBases: 5,
        numInitialOutposts: 7,
        establishmentPace: 2,
        firstAttackDelayDays: 1
    },
    [FACTION_NAME_OBSTACLE]: {
        centralBase: BASE_SIZE_LARGE,
        numSmall: 0,
        numMedium: 0,
        numLarge: 0,
        numInitialBases: 5,
        numInitialOutposts: 7,
        establishmentPace: 2,
        firstAttackDelayDays: 1
    },
    [FACTION_NAME_FROST]: {
        centralBase: BASE_SIZE_LARGE,
        numSmall: 0,
        numMedium: 0,
        numLarge: 0,
        numInitialBases: 5,
        numInitialOutposts: 7,
        establishmentPace: 2,
        firstAttackDelayDays: 1
    }
}

const HordeEntryConfig_Custom = {
    invasionStartAfterFirstEstablished: 0,
    hordes: [
        {
            hordePool: [FACTION_NAME_ATTACK],
            pregame: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_FirstPregameConditionsFulfilled())
            },
            firstBase: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordePregameStarted(FACTION_NAME_ATTACK))
            }
        },
        {
            hordePool: [FACTION_NAME_DEFEND],
            pregame: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordeFirstBaseBuilt(FACTION_NAME_ATTACK))
            },
            firstBase: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordePregameStarted(FACTION_NAME_DEFEND))
            }
        },
        {
            hordePool: [FACTION_NAME_OBSTACLE],
            pregame: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordeFirstBaseBuilt(FACTION_NAME_DEFEND))
            },
            firstBase: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordePregameStarted(FACTION_NAME_OBSTACLE))
            }
        },
        {
            hordePool: [FACTION_NAME_FROST],
            pregame: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordeFirstBaseBuilt(FACTION_NAME_OBSTACLE))
            },
            firstBase: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_HordePregameStarted(FACTION_NAME_FROST))
            }
        }
    ],
    mobAlliances: [
        {
            mobAlliancePool: [MOB_ALLIANCE_NAME_SKELETON],
            occupation: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_HordeBasesDestroyed(HORDE_ANY, [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE], 1, SNAPSHOT_Act2Started())
            }
        },
        {
            mobAlliancePool: [MOB_ALLIANCE_NAME_ZOMBIE],
            occupation: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_MobAllianceOccupationStarted(MOB_ALLIANCE_NAME_SKELETON))
            }
        },
        {
            mobAlliancePool: [MOB_ALLIANCE_NAME_CREEPER],
            occupation: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_MobAllianceOccupationStarted(MOB_ALLIANCE_NAME_ZOMBIE))
            }
        },
        {
            mobAlliancePool: [MOB_ALLIANCE_NAME_SPIDER],
            occupation: {
                [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(0, SNAPSHOT_MobAllianceOccupationStarted(MOB_ALLIANCE_NAME_CREEPER))
            }
        }
    ]
}

RegisterDifficultyConfig("horde_bases_setup_config", HordeBasesSetup_Custom, GAME_DIFFICULTY.custom, true)
RegisterDifficultyConfig("horde_entry_config", HordeEntryConfig_Custom, GAME_DIFFICULTY.custom)

for (const hordeName of FACTION_PIGLINS) {
    const abbreviatedHordeName = GetAbbreviatedHordeName(hordeName)

    SNIPPET_GameSettingInitialized("piglin_invasion_horde_" + abbreviatedHordeName + "_bases_small", (value) => {
        // eslint-disable-next-line no-undef
        const baseSetupConfig = allDifficultyConfigs["horde_bases_setup_config"][GAME_DIFFICULTY.custom]
        baseSetupConfig[hordeName].numSmall = value.value
    })

    SNIPPET_GameSettingInitialized("piglin_invasion_horde_" + abbreviatedHordeName + "_bases_medium", (value) => {
        // eslint-disable-next-line no-undef
        const baseSetupConfig = allDifficultyConfigs["horde_bases_setup_config"][GAME_DIFFICULTY.custom]
        baseSetupConfig[hordeName].numMedium = value.value
    })

    SNIPPET_GameSettingInitialized("piglin_invasion_horde_" + abbreviatedHordeName + "_bases_large", (value) => {
        // BBI-NOTE: (dplourde)
        // The central base for the horde is a large base, so subtracting one here for the rest of the bases
        // that need to be placed.

        // eslint-disable-next-line no-undef
        const baseSetupConfig = allDifficultyConfigs["horde_bases_setup_config"][GAME_DIFFICULTY.custom]
        baseSetupConfig[hordeName].numLarge = value.value - 1
    })

    SNIPPET_GameSettingInitialized("piglin_invasion_horde_" + abbreviatedHordeName + "_bases_outpost", (value) => {
        // eslint-disable-next-line no-undef
        const baseSetupConfig = allDifficultyConfigs["horde_bases_setup_config"][GAME_DIFFICULTY.custom]
        baseSetupConfig[hordeName].numInitialOutposts = value.value
    })
}
