/* eslint-disable @typescript-eslint/camelcase */
// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const invasionAttackV2_frostWaveDefinitions = {
    // Solution: Wood
    runts: [{ unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 30 }],
    // Solution: Grindstone
    grunters: [{ unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 30 }],
    // Solution: Skeletons/Stone+Mossy
    bruisers: [{ unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 10 }],
    // Solution: Skeleton/First of Stone
    portalguards: [{ unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 1 }],
    // Solution: Skeletons
    runtsGrunters: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 24 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 10 }
    ],
    // Solution: Wood+Mossy
    runtsMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 24 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 25, count: 4 }
    ],
    // Solution: Grindstone+Mossy
    gruntersMedics: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 24 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 25, count: 4 }
    ],
    // Solution: Skeleton
    gruntersBruisers: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 6 }
    ],
    // Solution: Skeleton
    runtsBruisers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 6 }
    ],
    // Solution: Skeletons+Mossy
    bruisersMedics: [
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 10 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 15, count: 4 }
    ],
    // Solution: Skeletons
    bruisersEngineers: [
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 9 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 0, count: 2 }
    ],
    // Solution: Skeletons
    bruisersGrunters: [
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 9 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 15 }
    ],
    // Solution: Skeletons+Mossy
    runtsGruntersMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 7 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 15, count: 4 }
    ],
    // Solution: Skeletons
    runtsGruntersBruisers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 10 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 6 }
    ],
    // Solution: Skeletons+Mossy
    gruntersBruisersMedics: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 5 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 15, count: 4 }
    ],
    // Solution: Skeletons+Mossy
    runtsBruisersMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 6 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 15, count: 4 }
    ],
    // Solution: Skeletons+Mossy
    runtsGruntersBruisersMedics: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 10 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 2, count: 5 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 15, count: 2 }
    ],
    //New Engineer variants for improved sieging capabilities. General thought is to go light on engineers, since they can be pretty potent in large quantities.
    // Solution: Warriors (DO NOT USE)
    runtsEngineers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 20 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ],
    // Solution: Grindstone
    engineers: [{ unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 0, count: 2 }],
    // Solution: Grindstone
    engineersMedics: [
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 0, count: 2 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 15, count: 2 }
    ],
    // Solution: Grindstone
    engineersGrunters: [
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 0, count: 2 },
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 10 }
    ],
    // Solution: Grindstone
    engineersBruisers: [
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 0, count: 2 },
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 10 }
    ],
    // Solution: Grindstone
    gruntersEngineers: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 20 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 2 }
    ],
    //frost horde specific engineer comps, note there are other specific comps with tier 3 units spelled out explicitly below
    // Solution: Warriors+Mossy (DO NOT USE)
    runtsMedicsEngineers: [
        { unit: PIGLIN_ARCHETYPE.RUNT, delay: 0, count: 16 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 6, count: 4 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ],
    // Solution: Grindstone+Mossy
    gruntersMedicsEngineers: [
        { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 0, count: 14 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 4 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ],
    // Solution: Skeleton+Mossy (DO NOT USE)
    bruisersMedicsEngineers: [
        { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 0, count: 8 },
        { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 4 },
        { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 4, count: 1 }
    ]
}

/*
------ Wave variations data is in format (A or B) ------
A.
audioPhase: (string)
nextWaveTime (optional): (number),
groups: 1,
unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.(unitGroup), multiplier: (number) }
B.
nextWaveTime (optional): (number),
groups: (number)),
units: [
    { unit: (unit type 1, eg. PIGLIN_ARCHETYPE.RUNT), delay: (number), count: (number) },
    { unit: (unit type 1, eg. PIGLIN_ARCHETYPE.RUNT), delay: (number), count: (number) },
    ...
]
*/

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const invasionAttackV2_waveConfig_frostFaction = [
    /*
    --------------------
    ---- STRENGTH 1 ----
    --------------------
    */
    {
        strength: 1,
        defaultWaveTime: 34,
        music: "badger:music_combat_frost_village_small_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 15,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.runts, multiplier: 2.0 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 15,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.runtsMedics, multiplier: 2.0 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 3,
                        nextWaveTime: 15,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.runts, multiplier: 2.0 }
                    },
                    {
                        groups: 3,
                        nextWaveTime: 15,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.runtsMedics, multiplier: 2.0 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.bruisers, multiplier: 2.0 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.bruisersMedics, multiplier: 2.0 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.runtsBruisers, multiplier: 2.0 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineers, multiplier: 4.0 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineersMedics, multiplier: 4.0 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineersGrunters, multiplier: 4.0 }
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.grunters, multiplier: 4 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.gruntersMedics, multiplier: 4 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.gruntersEngineers, multiplier: 4 }
            }
        ],
        overtimeSetup: {
            minimumCount: 30,
            fillerUnit: PIGLIN_ARCHETYPE.GRUNTER,
            maxOvertimePiglinsToDefeat: 25
        }
    },
    /*
    --------------------
    ---- STRENGTH 2 ----
    --------------------
    */
    {
        strength: 2,
        defaultWaveTime: 33,
        music: "badger:music_combat_frost_village_medium_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.grunters, multiplier: 2.5 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.gruntersMedics, multiplier: 2.5 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.gruntersEngineers, multiplier: 2.5 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 3,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 15,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.bruisers, multiplier: 2.5 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 15,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.bruisersMedics, multiplier: 2.5 }
                    },
                    {
                        groups: 2,
                        nextWaveTime: 15,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.gruntersBruisers, multiplier: 2.5 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 1,
                variations: [
                    {
                        groups: 3,
                        nextWaveTime: 60,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 90 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 3 }
                        ]
                    },
                    {
                        groups: 3,
                        nextWaveTime: 60,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.MEDIC, delay: 4, count: 24 },
                            { unit: PIGLIN_ARCHETYPE.GRUNTER, delay: 4, count: 80 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 3 }
                        ]
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
                amount: 2,
                variations: [
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.gruntersEngineers, multiplier: 6.0 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineers, multiplier: 6.0 }
                    },
                    {
                        groups: 3,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineersMedics, multiplier: 6.0 }
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 2,
                nextWaveTime: 40,
                unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.grunters, multiplier: 3.0 }
            },
            {
                groups: 2,
                nextWaveTime: 40,
                unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.gruntersMedics, multiplier: 3.0 }
            },
            {
                groups: 2,
                nextWaveTime: 40,
                unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.gruntersEngineers, multiplier: 3.0 }
            }
        ],
        overtimeSetup: {
            minimumCount: 35,
            fillerUnit: PIGLIN_ARCHETYPE.GRUNTER,
            maxOvertimePiglinsToDefeat: 50
        }
    },
    /*
    --------------------
    ---- STRENGTH 3 ----
    --------------------
    */
    {
        strength: 3,
        defaultWaveTime: 32,
        music: "badger:music_combat_frost_village_large_1",
        mainWaves: [
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE0,
                amount: 1,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineers, multiplier: 5.0 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineersGrunters, multiplier: 5.0 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineersMedics, multiplier: 5.0 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE1,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 3, count: 5 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 2 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.BRUISER, delay: 3, count: 5 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 2 }
                        ]
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE2,
                amount: 3,
                variations: [
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.bruisers, multiplier: 3 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.bruisersEngineers, multiplier: 3 }
                    },
                    {
                        groups: 2,
                        unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.bruisersGrunters, multiplier: 3 }
                    }
                ]
            },
            {
                audioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
                amount: 2,
                variations: [
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.ENGINEER, delay: 3, count: 5 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 2 }
                        ]
                    },
                    {
                        groups: 2,
                        nextWaveTime: 40,
                        units: [
                            { unit: PIGLIN_ARCHETYPE.RUNT, delay: 3, count: 40 },
                            { unit: PIGLIN_ARCHETYPE.PORTAL_GUARD, delay: 0, count: 2 }
                        ]
                    }
                ]
            }
        ],
        recurringAudioPhase: INVASION_ATTACK_AUDIO.PHASES.PHASE3,
        recurringWaves: [
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineers, multiplier: 4.2 }
            },
            {
                groups: 2,
                unitPreset: { preset: invasionAttackV2_frostWaveDefinitions.engineersBruisers, multiplier: 4.2 }
            }
        ],
        overtimeSetup: {
            minimumCount: 40,
            fillerUnit: PIGLIN_ARCHETYPE.ENGINEER,
            maxOvertimePiglinsToDefeat: 25
        }
    }
]

RegisterDifficultyConfig("invasion_attack_wave_config_frost_faction", invasionAttackV2_waveConfig_frostFaction, GAME_DIFFICULTY.easy)
