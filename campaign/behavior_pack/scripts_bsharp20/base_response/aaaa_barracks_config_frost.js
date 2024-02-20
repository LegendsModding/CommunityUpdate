/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */

/*
~~~~~~~~~~~~~~~~~~~~~~
~~~~~ DISRUPTORS ~~~~~
~~~~~~~~~~~~~~~~~~~~~~
*/
const DisruptorBarracksConfig_FrostFaction_Variations = {
    name: BARRACKS_NAME_DISRUPTOR,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 3,
                rate: 8,
                batch: 2
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 3,
                rate: 8,
                batch: 2
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 30,
                rate: 20,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 35,
                rate: 20,
                batch: 11
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 40,
                rate: 20,
                batch: 10
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 30,
                rate: 20,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 35,
                rate: 20,
                batch: 13
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 40,
                rate: 20,
                batch: 10
            }
        },
        villageVariationC: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 30,
                rate: 20,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 35,
                rate: 20,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 40,
                rate: 20,
                batch: 10
            }
        }
    },
    /*
    =======================
    ===== SMALL BASES =====
    =======================
    */
    small: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 8,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 8,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_seeker"],
                cap: 0,
                rate: 30,
                batch: 1
            },
            phase_1: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 30,
                batch: 1
            },
            phase_2: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 30,
                batch: 1
            },
            phase_3: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 30,
                batch: 1
            },
            phase_4: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 30,
                batch: 1
            }
        }
    },
    piglin_occupying_zombie_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 25,
                rate: 30,
                batch: 25
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 25,
                rate: 30,
                batch: 25
            }
        }
    },
    /*
    ========================
    ===== MEDIUM BASES =====
    ========================
    */
    medium: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grenadier"],
                cap: 0,
                rate: 15,
                batch: 2
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier"],
                cap: 2,
                rate: 30,
                batch: 2
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_disruptor", "badger:piglin_runt"],
                cap: 0,
                rate: 15,
                batch: 13
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_disruptor", "badger:piglin_runt"],
                cap: 13,
                rate: 15,
                batch: 13
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_disruptor", "badger:piglin_runt"],
                cap: 13,
                rate: 15,
                batch: 13
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_disruptor", "badger:piglin_runt"],
                cap: 13,
                rate: 15,
                batch: 13
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_disruptor", "badger:piglin_runt"],
                cap: 13,
                rate: 15,
                batch: 13
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker", "badger:piglin_grunter"],
                cap: 0,
                rate: 15,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker", "badger:piglin_grunter"],
                cap: 5,
                rate: 15,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker", "badger:piglin_grunter"],
                cap: 5,
                rate: 15,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker", "badger:piglin_grunter"],
                cap: 5,
                rate: 15,
                batch: 5
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker", "badger:piglin_grunter"],
                cap: 5,
                rate: 15,
                batch: 5
            }
        }
    },
    /*
    =======================
    ===== LARGE BASES =====
    =======================
    */
    large: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grenadier"],
                cap: 0,
                rate: 30,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier"],
                cap: 3,
                rate: 30,
                batch: 3
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier"],
                cap: 3,
                rate: 30,
                batch: 3
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier"],
                cap: 3,
                rate: 30,
                batch: 3
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier"],
                cap: 3,
                rate: 15,
                batch: 3
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grenadier"],
                cap: 0,
                rate: 15,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier"],
                cap: 7,
                rate: 20,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier"],
                cap: 7,
                rate: 20,
                batch: 7
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier"],
                cap: 7,
                rate: 20,
                batch: 7
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier"],
                cap: 7,
                rate: 20,
                batch: 7
            }
        }
    },
    /*
    =======================
    ====== BOSS BASE ======
    =======================
    */
    boss: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 0,
                rate: 15,
                batch: 2
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
                cap: 16,
                rate: 20,
                batch: 16
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
                cap: 16,
                rate: 20,
                batch: 16
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
                cap: 16,
                rate: 20,
                batch: 16
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
                cap: 16,
                rate: 20,
                batch: 16
            }
        }
    }
}

/*
~~~~~~~~~~~~~~~~~~~~
~~~~~ FIGHTERS ~~~~~
~~~~~~~~~~~~~~~~~~~~
*/
const FighterBarracksConfig_FrostFaction_Variations = {
    name: BARRACKS_NAME_FIGHTER,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 8,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 8,
                batch: 5
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 30,
                rate: 10,
                batch: 6
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 35,
                rate: 10,
                batch: 11
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 40,
                rate: 5,
                batch: 10
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 30,
                rate: 10,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 35,
                rate: 10,
                batch: 13
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 40,
                rate: 15,
                batch: 10
            }
        },
        villageVariationC: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 30,
                rate: 10,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 35,
                rate: 10,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 40,
                rate: 15,
                batch: 10
            }
        }
    },
    /*
    =======================
    ===== SMALL BASES =====
    =======================
    */
    small: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 4
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 20
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 20
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 20
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 20
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_engineer", "badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_engineer", "badger:piglin_runt"],
                cap: 10,
                rate: 20,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_engineer", "badger:piglin_runt"],
                cap: 10,
                rate: 20,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_engineer", "badger:piglin_runt"],
                cap: 10,
                rate: 15,
                batch: 10
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_engineer", "badger:piglin_runt"],
                cap: 12,
                rate: 15,
                batch: 12
            }
        }
    },
    piglin_occupying_zombie_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 25,
                rate: 30,
                batch: 25
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 25,
                rate: 30,
                batch: 25
            }
        }
    },
    /*
    ========================
    ===== MEDIUM BASES =====
    ========================
    */
    medium: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 20,
                rate: 15,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 12,
                rate: 15,
                batch: 6
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 12,
                rate: 15,
                batch: 6
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 12,
                rate: 15,
                batch: 6
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 12,
                rate: 15,
                batch: 6
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 0,
                rate: 20,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 14,
                rate: 30,
                batch: 7
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 14,
                rate: 30,
                batch: 7
            }
        }
    },
    /*
    =======================
    ===== LARGE BASES =====
    =======================
    */
    large: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 14,
                rate: 20,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 14,
                rate: 20,
                batch: 7
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 14,
                rate: 20,
                batch: 7
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 14,
                rate: 20,
                batch: 7
            }
        }
    },
    /*
    =======================
    ====== BOSS BASE ======
    =======================
    */
    boss: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 10,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        }
    }
}

/*
~~~~~~~~~~~~~~~~~~~
~~~~~ SIEGERS ~~~~~
~~~~~~~~~~~~~~~~~~~
*/
const SiegerBarracksConfig_FrostFaction_Variations = {
    name: BARRACKS_NAME_SIEGER,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic"],
                cap: 10,
                rate: 8,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_medic"],
                cap: 8,
                rate: 10,
                batch: 5
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 30,
                rate: 10,
                batch: 6
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 35,
                rate: 10,
                batch: 11
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 40,
                rate: 5,
                batch: 10
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 30,
                rate: 10,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 35,
                rate: 10,
                batch: 13
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 40,
                rate: 15,
                batch: 10
            }
        },
        villageVariationC: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 30,
                rate: 10,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 35,
                rate: 10,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier"],
                cap: 40,
                rate: 15,
                batch: 10
            }
        }
    },
    /*
    =======================
    ===== SMALL BASES =====
    =======================
    */
    small: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 8,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 8,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 8,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 8,
                batch: 5
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 8,
                batch: 5
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_seeker", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 0,
                rate: 20,
                batch: 1
            },
            phase_1: {
                loadout: ["badger:piglin_seeker", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 12,
                rate: 20,
                batch: 12
            },
            phase_2: {
                loadout: ["badger:piglin_seeker", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 12,
                rate: 20,
                batch: 12
            },
            phase_3: {
                loadout: ["badger:piglin_seeker", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 12,
                rate: 15,
                batch: 12
            },
            phase_4: {
                loadout: ["badger:piglin_seeker", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 12,
                rate: 15,
                batch: 12
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 15,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 12,
                rate: 20,
                batch: 6
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 12,
                rate: 20,
                batch: 6
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 12,
                rate: 20,
                batch: 12
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 12,
                rate: 15,
                batch: 12
            }
        }
    },
    piglin_occupying_zombie_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            }
        }
    },
    /*
    ========================
    ===== MEDIUM BASES =====
    ========================
    */
    medium: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 4
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
                rate: 28,
                batch: 8
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grenadier"],
                cap: 0,
                rate: 8,
                batch: 8
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier"],
                cap: 4,
                rate: 40,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier"],
                cap: 4,
                rate: 40,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier"],
                cap: 4,
                rate: 40,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier"],
                cap: 4,
                rate: 40,
                batch: 2
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_medic"],
                cap: 0,
                rate: 8,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_medic"],
                cap: 3,
                rate: 35,
                batch: 3
            },
            phase_2: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_medic"],
                cap: 3,
                rate: 35,
                batch: 3
            },
            phase_3: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_medic"],
                cap: 3,
                rate: 35,
                batch: 3
            },
            phase_4: {
                loadout: ["badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_medic"],
                cap: 3,
                rate: 35,
                batch: 3
            }
        }
    },
    /*
    =======================
    ===== LARGE BASES =====
    =======================
    */
    large: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 3,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 6,
                rate: 8,
                batch: 3
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 6,
                rate: 8,
                batch: 3
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 8,
                rate: 8,
                batch: 4
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 8,
                rate: 8,
                batch: 4
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 0,
                rate: 8,
                batch: 4
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 12,
                rate: 20,
                batch: 6
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 12,
                rate: 20,
                batch: 6
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 12,
                rate: 20,
                batch: 6
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_seeker"],
                cap: 12,
                rate: 20,
                batch: 6
            }
        }
    },
    /*
    =======================
    ====== BOSS BASE ======
    =======================
    */
    boss: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 0,
                rate: 0,
                batch: 3
            },
            phase_1: {
                loadout: ["badger:piglin_seeker", "badger:piglin_seeker", "badger:piglin_seeker", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_disruptor"],
                cap: 7,
                rate: 20,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_seeker", "badger:piglin_seeker", "badger:piglin_seeker", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_disruptor"],
                cap: 7,
                rate: 20,
                batch: 7
            },
            phase_3: {
                loadout: ["badger:piglin_seeker", "badger:piglin_seeker", "badger:piglin_seeker", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_disruptor"],
                cap: 7,
                rate: 15,
                batch: 7
            },
            phase_4: {
                loadout: ["badger:piglin_seeker", "badger:piglin_seeker", "badger:piglin_seeker", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_disruptor"],
                cap: 7,
                rate: 15,
                batch: 7
            }
        }
    }
}
