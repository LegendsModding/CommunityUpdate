/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

const invasionManagerSharedRestrictions_Peaceful = {
    baseNumberRestriction: {
        [FACTION_NAME_ATTACK]: 3,
        [FACTION_NAME_DEFEND]: 3,
        [FACTION_NAME_FROST]: 3,
        [FACTION_NAME_OBSTACLE]: 3
    },
    outpostNumberRestriction: {
        [FACTION_NAME_ATTACK]: 6,
        [FACTION_NAME_DEFEND]: 6,
        [FACTION_NAME_FROST]: 6,
        [FACTION_NAME_OBSTACLE]: 6
    },
    claimedAreasNumberRestriction: {
        [FACTION_NAME_ATTACK]: 15,
        [FACTION_NAME_DEFEND]: 12,
        [FACTION_NAME_FROST]: 12,
        [FACTION_NAME_OBSTACLE]: 15
    }
}

//NOTE - Peaceful largely has these overrides disabled since it has a very simplistic deck composition at the time of this writing. May change in the future.
const invasionManagerActionRestriction_Peaceful = {
    [FACTION_ACTION_ATTACK_VILLAGE_V2]: {
        [GLOBAL_RESTRICTION]: {
            //any fails: can't plan
            planningRestrictions: {
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_ATTACK]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null, //used to be ANY_GAP
                concurrentActions: [
                    [1, 1, 1, 2, 2, 2, 1],
                    [1, 1, 1, 2, 2, 2, 1],
                    [1, 1, 1, 2, 2, 2, 1]
                ],
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: [
                    [3, 3, 3, 2, 2, 2, 2],
                    [3, 3, 3, 2, 2, 2, 2],
                    [3, 3, 3, 3, 3, 3, 3]
                ],
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_DEFEND]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1]
                ],
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_FROST]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1]
                ],
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_OBSTACLE]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null, //used to be ANY_CONCURRENT
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        }
    },
    [FACTION_ACTION_BUILD_NEAR_BASE]: {
        [GLOBAL_RESTRICTION]: {
            //any fails: can't plan
            planningRestrictions: {
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                gapBetweenActions: [ //Forcing them to try and rebuild every X days in late game (in-lieu of custom functions)
                    [ANY_GAP, ANY_GAP, ANY_GAP, ANY_GAP, 5, 4, 4],
                    [ANY_GAP, ANY_GAP, ANY_GAP, ANY_GAP, 5, 4, 4],
                    [ANY_GAP, ANY_GAP, ANY_GAP, ANY_GAP, 5, 4, 4]
                ],
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_ATTACK]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
                //customFunction: [ //Can run custom function to check for various conditions, which if TRUE will enforce the condition. Function is defined in a_invasion_manager_consts.js - this particular one was trying to enforce base building if it was below maximum.
                    //[C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), NO_FUNCTION, NO_FUNCTION, NO_FUNCTION],
                    //[C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK)],
                    //[C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK), C_Build(FACTION_NAME_ATTACK)]
                //]
            }
        },
        [FACTION_NAME_DEFEND]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_FROST]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_OBSTACLE]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        }
    },
    [FACTION_ACTION_BUILD_FAR_BASE]: {
        [GLOBAL_RESTRICTION]: {
            //any fails: can't plan
            planningRestrictions: {
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_ATTACK]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_DEFEND]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_FROST]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_OBSTACLE]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        }
    },
    [FACTION_ACTION_CLAIM_AREA]: {
        [GLOBAL_RESTRICTION]: {
            //any fails: can't plan
            planningRestrictions: {
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_ATTACK]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_DEFEND]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_FROST]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_OBSTACLE]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        }
    },
    [FACTION_ACTION_UPGRADE_BASE]: {
        [GLOBAL_RESTRICTION]: {
            //any fails: can't plan
            planningRestrictions: {
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_ATTACK]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
                //customFunction: [ //Can run custom function to check for various conditions, which if TRUE will enforce the condition.Function si defined in a_invasion_manager_consts.js - this particular one was trying to force upgrading if there was more than 5 small bases.
                    //[C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK)],
                    //[C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK)],
                    //[C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK), C_Upgrade(FACTION_NAME_ATTACK)]
                //]
            }
        },
        [FACTION_NAME_DEFEND]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_FROST]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        },
        [FACTION_NAME_OBSTACLE]: {
            //any fails: can't plan
            planningRestrictions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            },
            //any succeeds: can enforce
            enforceConditions: {
                // 1st horde, 2nd horde, 3rd horde
                gapBetweenActions: null,
                concurrentActions: null,
                customFunction: null
            }
        }
    }
}

RegisterDifficultyConfig("invasion_manager_shared_restrictions_config", invasionManagerSharedRestrictions_Peaceful, GAME_DIFFICULTY.peaceful, true)
RegisterDifficultyConfig("invasion_manager_restriction_config", invasionManagerActionRestriction_Peaceful, GAME_DIFFICULTY.peaceful)