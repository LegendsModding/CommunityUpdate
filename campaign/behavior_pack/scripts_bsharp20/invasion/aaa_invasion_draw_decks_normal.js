/*
-------------------------------------
----------NORMAL DIFFICULTY----------
-------------------------------------
*/
invasionDrawData_Normal = {
    /*
    >>>>> DRAW DATA BY PHASE <<<<<
    */
    drawInfoByPhase: [
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
            ]
        }
    ]
}

RegisterDifficultyConfig("invasion_draw_config", invasionDrawData_Normal, GAME_DIFFICULTY.normal)
