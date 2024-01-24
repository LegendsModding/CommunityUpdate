/*
-------------------------------------
----------NORMAL DIFFICULTY----------
-------------------------------------
*/
invasionDrawData = {
    /*
    >>>>> DRAW DATA BY PHASE <<<<<
    */
    drawInfoByPhase: [
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
    /*
    >>>>> DRAW DECKS PER HORDE <<<<<
    */
    hordeDrawDeck: [
        {
            factionName: FACTION_NAME_ATTACK,
            deckName: "attack_faction_invasion_deck",
            phases: [
                {
                    phase: "1",
                    formationByOrder: [
                        {
                            order: 1,
                            formation: [
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 3 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 3 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 3 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 3 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 3 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 3 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 3 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            factionName: FACTION_NAME_DEFEND,
            deckName: "defend_faction_invasion_deck",
            phases: [
                {
                    phase: "1",
                    formationByOrder: [
                        {
                            order: 2,
                            formation: [
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 3 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 3 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 3 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 3 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 3 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 3 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 3 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            factionName: FACTION_NAME_OBSTACLE,
            deckName: "obstacle_faction_invasion_deck",
            phases: [
                {
                    phase: "1",
                    formationByOrder: [
                        {
                            order: 3,
                            formation: [
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            factionName: FACTION_NAME_FROST,
            deckName: "frost_faction_invasion_deck",
            phases: [
                {
                    phase: "1",
                    formationByOrder: [
                        {
                            order: 3,
                            formation: [
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
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
                                { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 1 },
                                { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
                                { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 3 }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

RegisterDifficultyConfig("invasion_draw_config", invasionDrawData, GAME_DIFFICULTY.easy)