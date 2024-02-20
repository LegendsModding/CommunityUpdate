// Generic decks for hordes' invasion actions to represent different personalities.
const personalityDecks = {
    assault: [
        {
            phase: "1",
            formationByOrder: [
                {
                    order: 1,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 6 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "2",
            formationByOrder: [
                {
                    order: 1,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 6 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "3",
            formationByOrder: [
                {
                    order: 1,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 6 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "4",
            formationByOrder: [
                {
                    order: 1,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 6 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 1 }
                    ]
                }
            ]
        },
        {
            phase: "5",
            formationByOrder: [
                {
                    order: 1,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 6 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 1 }
                    ]
                }
            ]
        },
        {
            phase: "6",
            formationByOrder: [
                {
                    order: 1,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 6 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "7",
            formationByOrder: [
                {
                    order: 1,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 6 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 2 }
                    ]
                }
            ]
        }
    ],
    upgrade: [
        {
            phase: "1",
            formationByOrder: [
                {
                    order: 2,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 6 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "2",
            formationByOrder: [
                {
                    order: 2,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 6 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "3",
            formationByOrder: [
                {
                    order: 2,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 6 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "4",
            formationByOrder: [
                {
                    order: 2,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 5 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 1 }
                    ]
                }
            ]
        },
        {
            phase: "5",
            formationByOrder: [
                {
                    order: 2,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 4 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 1 }
                    ]
                }
            ]
        },
        {
            phase: "6",
            formationByOrder: [
                {
                    order: 2,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 6 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "7",
            formationByOrder: [
                {
                    order: 2,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 6 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 2 }
                    ]
                }
            ]
        }
    ],
    expansion: [
        {
            phase: "1",
            formationByOrder: [
                {
                    order: 3,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 6 }
                    ]
                }
            ]
        },
        {
            phase: "2",
            formationByOrder: [
                {
                    order: 3,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 6 }
                    ]
                }
            ]
        },
        {
            phase: "3",
            formationByOrder: [
                {
                    order: 3,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 5 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 1 }
                    ]
                }
            ]
        },
        {
            phase: "4",
            formationByOrder: [
                {
                    order: 3,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 4 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "5",
            formationByOrder: [
                {
                    order: 3,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 4 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 2 }
                    ]
                }
            ]
        },
        {
            phase: "6",
            formationByOrder: [
                {
                    order: 3,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 3 }
                    ]
                }
            ]
        },
        {
            phase: "7",
            formationByOrder: [
                {
                    order: 3,
                    formation: [
                        { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 2 },
                        { action: FACTION_ACTION_UPGRADE_BASE, amount: 2 },
                        { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 },
                        { action: FACTION_ACTION_BUILD_NEAR_BASE, amount: 3 }
                    ]
                }
            ]
        }
    ],
    passive: [
        {
            phase: "1",
            formationByOrder: [
                {
                    order: 1,
                    formation: []
                }
            ]
        },
        {
            phase: "2",
            formationByOrder: [
                {
                    order: 1,
                    formation: []
                }
            ]
        },
        {
            phase: "3",
            formationByOrder: [
                {
                    order: 1,
                    formation: []
                }
            ]
        },
        {
            phase: "4",
            formationByOrder: [
                {
                    order: 1,
                    formation: []
                }
            ]
        },
        {
            phase: "5",
            formationByOrder: [
                {
                    order: 1,
                    formation: []
                }
            ]
        },
        {
            phase: "6",
            formationByOrder: [
                {
                    order: 1,
                    formation: []
                }
            ]
        },
        {
            phase: "7",
            formationByOrder: [
                {
                    order: 1,
                    formation: []
                }
            ]
        }
    ]
}

const invasionPacingData = {
    low: [
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 6,
            minimumDraws: 0
        },
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 8,
            minimumDraws: 0
        },
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 10,
            minimumDraws: 1
        },
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 1
        },
        {
            totalDraws: 1,
            overNumberOfDays: 2,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 1
        },
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 2
        },
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 2
        }
    ],
    standard: [
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 6,
            minimumDraws: 0
        },
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 8,
            minimumDraws: 0
        },
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 10,
            minimumDraws: 1
        },
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 1
        },
        {
            totalDraws: 2,
            overNumberOfDays: 2,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 1
        },
        {
            totalDraws: 2,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 2
        },
        {
            totalDraws: 2,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 2
        }
    ],
    high: [
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 6,
            minimumDraws: 1
        },
        {
            totalDraws: 1,
            inactiveDaysToLoseDraw: 8,
            minimumDraws: 1
        },
        {
            totalDraws: 2,
            inactiveDaysToLoseDraw: 10,
            minimumDraws: 2
        },
        {
            totalDraws: 2,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 2
        },
        {
            totalDraws: 2,
            overNumberOfDays: 2,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 2
        },
        {
            totalDraws: 3,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 3
        },
        {
            totalDraws: 3,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 3
        }
    ],
    veryHigh: [
        {
            totalDraws: 2,
            inactiveDaysToLoseDraw: 6,
            minimumDraws: 2
        },
        {
            totalDraws: 2,
            inactiveDaysToLoseDraw: 8,
            minimumDraws: 2
        },
        {
            totalDraws: 3,
            inactiveDaysToLoseDraw: 10,
            minimumDraws: 3
        },
        {
            totalDraws: 3,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 3
        },
        {
            totalDraws: 3,
            overNumberOfDays: 2,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 3
        },
        {
            totalDraws: 4,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 4
        },
        {
            totalDraws: 4,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 4
        }
    ],
    intense: [
        {
            totalDraws: 3,
            inactiveDaysToLoseDraw: 8,
            minimumDraws: 3
        },
        {
            totalDraws: 3,
            inactiveDaysToLoseDraw: 8,
            minimumDraws: 3
        },
        {
            totalDraws: 3,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 3
        },
        {
            totalDraws: 4,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 4
        },
        {
            totalDraws: 4,
            overNumberOfDays: 2,
            inactiveDaysToLoseDraw: 12,
            minimumDraws: 4
        },
        {
            totalDraws: 5,
            inactiveDaysToLoseDraw: 14,
            minimumDraws: 5
        },
        {
            totalDraws: 5,
            inactiveDaysToLoseDraw: 14,
            minimumDraws: 5
        }
    ]
}

/*
-------------------------------------
----------CUSTOM DIFFICULTY----------
-------------------------------------
*/
const invasionDrawData_Custom = {
    /*
    >>>>> DRAW DATA BY PHASE <<<<<
    */
    drawInfoByPhase: [],
    /*
    >>>>> DRAW DECKS PER HORDE <<<<<
    */
    hordeDrawDeck: [
        {
            factionName: FACTION_NAME_ATTACK,
            deckName: "attack_faction_invasion_deck",
            phases: []
        },
        {
            factionName: FACTION_NAME_DEFEND,
            deckName: "defend_faction_invasion_deck",
            phases: []
        },
        {
            factionName: FACTION_NAME_FROST,
            deckName: "frost_faction_invasion_deck",
            phases: []
        },
        {
            factionName: FACTION_NAME_OBSTACLE,
            deckName: "obstacle_faction_invasion_deck",
            phases: []
        }
    ]
}

RegisterDifficultyConfig("invasion_draw_config", invasionDrawData_Custom, GAME_DIFFICULTY.custom)

for (const hordeName of FACTION_PIGLINS) {
    const abbreviatedHordeName = GetAbbreviatedHordeName(hordeName)

    SNIPPET_GameSettingInitialized("piglin_invasion_horde_" + abbreviatedHordeName + "_personality", (value) => {
        const oldPersonality = GetHordePersonalityName(hordeName)
        OUTPUT_SetGlobalVariable(GetCustomGameHordePersonalityVarName(hordeName), value.value)
        const newPersonality = GetHordePersonalityName(hordeName)

        const drawDeckConfig = allDifficultyConfigs["invasion_draw_config"][GAME_DIFFICULTY.custom]
        for (const drawDeck of drawDeckConfig.hordeDrawDeck) {
            if (drawDeck.factionName === hordeName) {
                switch (newPersonality) {
                    case PIGLIN_HORDE_PERSONALITY.ASSAULT:
                        drawDeck.phases = personalityDecks.assault
                        break
                    case PIGLIN_HORDE_PERSONALITY.UPGRADE:
                        drawDeck.phases = personalityDecks.upgrade
                        break
                    case PIGLIN_HORDE_PERSONALITY.EXPANSION:
                        drawDeck.phases = personalityDecks.expansion
                        break
                    case PIGLIN_HORDE_PERSONALITY.PASSIVE:
                        drawDeck.phases = personalityDecks.passive
                        break
                    default:
                        Loge(`Horde personality was provided as value ${value.value} which is currently not mapped!`)
                        return
                }

                // If the personality setting was changed while the invasion system was active, we need to refresh the invasion actions deck.
                if (InvasionActive() && oldPersonality !== newPersonality) {
                    // Flush invasion actions deck so it can be restored with the updated config when it's used next
                    OUTPUT_SetNamedDeck(drawDeck.deckName, DECK_Empty())

                    // If a horde was changed to or from being passive, then signal that we need to change horde decks too.
                    if (oldPersonality === PIGLIN_HORDE_PERSONALITY.PASSIVE || newPersonality === PIGLIN_HORDE_PERSONALITY.PASSIVE) {
                        OUTPUT_SetGlobalVariable(CustomSettingGV("flush_horde_decks"), 1)
                    }
                }

                return
            }
        }
    })
}

SNIPPET_GameLoadBootstrap("", (_isSaveLoaded) => {
    const varName = CustomSettingGV("flush_horde_decks")
    if (QUERY_GetGlobalVariable(varName)) {
        const emptyDeck = DECK_Empty()
        OUTPUT_SetNamedDeck(outpostHordeDeckName, emptyDeck) // Night outpost deck
        OUTPUT_SetNamedDeck(invasionHordeDeckName, emptyDeck) // Horde deck

        OUTPUT_SetGlobalVariable(varName, 0)
    }
})

SNIPPET_GameSettingInitialized("piglin_invasion_activity_level", (value) => {
    const drawDeckConfig = allDifficultyConfigs["invasion_draw_config"][GAME_DIFFICULTY.custom]
    switch (PIGLIN_INVASION_ACTIVITY_MAP[value.value]) {
        case PIGLIN_INVASION_ACTIVITY.LOW:
            drawDeckConfig.drawInfoByPhase = invasionPacingData.low
            break
        case PIGLIN_INVASION_ACTIVITY.STANDARD:
            drawDeckConfig.drawInfoByPhase = invasionPacingData.standard
            break
        case PIGLIN_INVASION_ACTIVITY.HIGH:
            drawDeckConfig.drawInfoByPhase = invasionPacingData.high
            break
        case PIGLIN_INVASION_ACTIVITY.VERY_HIGH:
            drawDeckConfig.drawInfoByPhase = invasionPacingData.veryHigh
            break
        case PIGLIN_INVASION_ACTIVITY.INTENSE:
            drawDeckConfig.drawInfoByPhase = invasionPacingData.intense
            break
        default:
            Loge(`Invasion activity level was provided as value ${value.value} which is currently not mapped!`)
            return
    }

    const varName = CustomSettingGV("piglin_invasion_activity_level")
    if (QUERY_GetGlobalVariable(varName) !== value.value) {
        OUTPUT_SetGlobalVariable(varName, value.value)

        // Changing this var so that the invasion system will reset the draw counter at dawn.
        OUTPUT_SetGlobalVariable(invasionDrawInfoVal.remainingDays, 0)
    }
})
