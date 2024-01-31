/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~ DISRUPTORS - WARBOARS ~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const DisruptorBarracksConfig_FrostFaction_Variations = {
    name: BARRACKS_NAME_DISRUPTOR,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 5,
                rate: 0,
                batch: 5
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 5,
                rate: 15,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 10,
                rate: 15,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 12,
                rate: 12,
                batch: 6
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
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 30,
                rate: 20,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 40,
                rate: 20,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 50,
                rate: 20,
                batch: 10
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 35,
                rate: 20,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 40,
                rate: 20,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 50,
                rate: 20,
                batch: 10
            }
        },
        villageVariationC: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 35,
                rate: 20,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 40,
                rate: 20,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 50,
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
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 15,
                batch: 0
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 4,
                rate: 40,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 4,
                rate: 40,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 4,
                rate: 40,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 4,
                rate: 40,
                batch: 2
            }
        }
    },
    piglin_occupying_spider_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 10,
                rate: 20,
                batch: 10
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 18,
                rate: 20,
                batch: 18
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
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 4,
                rate: 15,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 4,
                rate: 15,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 4,
                rate: 12,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 4,
                rate: 12,
                batch: 2
            }
        },
        /* ----- VARIATION A ----- */
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 16,
                rate: 35,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 16,
                rate: 35,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 16,
                rate: 35,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 16,
                rate: 35,
                batch: 8
            }
        },
        /* ----- VARIATION B ----- */
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 6,
                rate: 20,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 6,
                rate: 20,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 6,
                rate: 20,
                batch: 3
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 6,
                rate: 20,
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
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 5,
                rate: 15,
                batch: 3
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 5,
                rate: 12,
                batch: 3
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 5,
                rate: 12,
                batch: 3
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 5,
                rate: 8,
                batch: 3
            }
        }
    },
    /*
    =====================
    ===== BOSS BASE =====
    =====================
    */
    boss: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 15,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 10,
                rate: 4,
                batch: 5
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 10,
                rate: 4,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 12,
                rate: 3,
                batch: 6
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 12,
                rate: 3,
                batch: 6
            }
        }
    }
}

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~ FIGHTERS - RUNTS ~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const FighterBarracksConfig_FrostFaction_Variations = {
    name: BARRACKS_NAME_FIGHTER,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 18,
                rate: 0,
                batch: 9
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 18,
                rate: 45,
                batch: 9
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 18,
                rate: 45,
                batch: 9
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
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt",  "badger:piglin_runt"],
                cap: 14,
                rate: 40,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt",  "badger:piglin_runt"],
                cap: 18,
                rate: 40,
                batch: 9
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt",  "badger:piglin_runt"],
                cap: 20,
                rate: 40,
                batch: 10
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 14,
                rate: 40,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 18,
                rate: 30,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 20,
                rate: 10,
                batch: 5
            }
        },
        villageVariationC: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 14,
                rate: 10,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 18,
                rate: 10,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 20,
                rate: 5,
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
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 0
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 8
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 8
            }
        }
    },
    piglin_occupying_spider_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 18,
                rate: 20,
                batch: 18
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
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 0
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 20,
                rate: 15,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 20,
                rate: 15,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 20,
                rate: 15,
                batch: 10
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 20,
                rate: 15,
                batch: 10
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
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 15
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 15
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 15
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 15
            },
            phase_5: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 15,
                rate: 15,
                batch: 15
            }
        }
    },
    /*
    =====================
    ===== BOSS BASE =====
    =====================
    */
    boss: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 8,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 20,
                rate: 3,
                batch: 4
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 20,
                rate: 3,
                batch: 5
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 25,
                rate: 3,
                batch: 5
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 25,
                rate: 2,
                batch: 5
            }
        }
    }
}

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~ SIEGERS - GRUNTERS ~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const SiegerBarracksConfig_FrostFaction_Variations = {
    name: BARRACKS_NAME_SIEGER,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_grunter"],
                cap: 8,
                rate: 0,
                batch: 8
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 16,
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
                cap: 24,
                rate: 15,
                batch: 8
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
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 30,
                rate: 10,
                batch: 15
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 40,
                rate: 10,
                batch: 15
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 50,
                rate: 15,
                batch: 15
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 35,
                rate: 10,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 40,
                rate: 10,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_runt"],
                cap: 50,
                rate: 5,
                batch: 5
            }
        },
        villageVariationC: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 15,
                rate: 1,
                batch: 15
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 35,
                rate: 10,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 40,
                rate: 10,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 50,
                rate: 5,
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
                rate: 30,
                batch: 0
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 16,
                rate: 40,
                batch: 9
            },
            phase_2: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 16,
                rate: 40,
                batch: 9
            },
            phase_3: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 16,
                rate: 40,
                batch: 9
            },
            phase_4: {
                loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 16,
                rate: 40,
                batch: 9
            }
        }
    },
    piglin_occupying_spider_mob_alliance: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 10,
                rate: 15,
                batch: 10
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
                rate: 30,
                batch: 0
            }
        },
        villageVariationB: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 20,
                rate: 7,
                batch: 10
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 30,
                rate: 7,
                batch: 10
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 30,
                rate: 6,
                batch: 10
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
                cap: 30,
                rate: 5,
                batch: 10
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
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_grunter"],
                cap: 18,
                rate: 15,
                batch: 9
            },
            phase_2: {
                loadout: ["badger:piglin_grunter"],
                cap: 18,
                rate: 15,
                batch: 9
            },
            phase_3: {
                loadout: ["badger:piglin_grunter"],
                cap: 18,
                rate: 15,
                batch: 9
            },
            phase_4: {
                loadout: ["badger:piglin_grunter"],
                cap: 18,
                rate: 15,
                batch: 9
            }
        }
    },
    /*
    =====================
    ===== BOSS BASE =====
    =====================
    */
    boss: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_seeker"],
                cap: 0,
                rate: 30,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 10,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_seeker"],
                cap: 2,
                rate: 9,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_seeker"],
                cap: 3,
                rate: 8,
                batch: 3
            },
            phase_4: {
                loadout: ["badger:piglin_seeker"],
                cap: 3,
                rate: 8,
                batch: 3
            }
        }
    }
}

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~  SPECIALIST  ~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const SpecialistBarracksConfig_FrostFaction_Variations = {
    name: BARRACKS_NAME_SPECIALIST,
    /*
    ==============================
    ===== DEFENSIVE OUTPOSTS =====
    ==============================
    */
    frontlineA: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 0
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
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 0
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 0
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 0
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 0,
                batch: 0
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 40,
                batch: 7
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 40,
                batch: 7
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 40,
                batch: 7
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 14,
                rate: 40,
                batch: 7
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
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 3,
                rate: 30,
                batch: 3
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 3,
                rate: 30,
                batch: 3
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
                cap: 6,
                rate: 25,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 6,
                rate: 25,
                batch: 2
            }
        },
        villageVariationA: {
            phase_0: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt"],
                cap: 2,
                rate: 40,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt"],
                cap: 2,
                rate: 40,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt"],
                cap: 2,
                rate: 40,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_runt", "badger:piglin_runt"],
                cap: 2,
                rate: 40,
                batch: 2
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
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 1,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 6,
                rate: 25,
                batch: 2
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 6,
                rate: 20,
                batch: 2
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 6,
                rate: 20,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 6,
                rate: 15,
                batch: 2
            }
        }
    },
    /*
    =====================
    ===== BOSS BASE =====
    =====================
    */
    boss: {
        /* ----- DEFAULT ----- */
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:piglin_runt"],
                cap: 0,
                rate: 30,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:piglin_runt"],
                cap: 2,
                rate: 12,
                batch: 1
            },
            phase_2: {
                loadout: ["badger:piglin_runt"],
                cap: 2,
                rate: 8,
                batch: 1
            },
            phase_3: {
                loadout: ["badger:piglin_runt"],
                cap: 2,
                rate: 8,
                batch: 2
            },
            phase_4: {
                loadout: ["badger:piglin_runt"],
                cap: 2,
                rate: 8,
                batch: 2
            }
        }
    }
}
