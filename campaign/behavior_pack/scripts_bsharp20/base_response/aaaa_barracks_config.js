/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */

//WOF Faction
//vindicators
const VindicatorBarracksConfig_wofFaction = {
    name: BARRACKS_NAME_VINDICATORS,
    wofBase: {
        villageVariationDefault: {
            phase_0: {
                loadout: ["badger:mob_illager_axe"],
                cap: 0,
                rate: 0,
                batch: 0
            },
            phase_1: {
                loadout: ["badger:mob_illager_axe", "badger:mob_illager_axe", "badger:mob_illager_axe", "badger:mob_illager_axe", "badger:mob_illager_witch", "badger:mob_creeper", "badger:mob_skeleton", "badger:mob_spider", "badger:mob_slime", "badger:mob_silverfish", "badger:mob_zombie"],
                cap: 8,
                rate: 50,
                batch: 8
            },
            phase_2: {
                loadout: ["badger:mob_illager_axe", "badger:mob_illager_axe", "badger:mob_illager_axe", "badger:mob_illager_axe", "badger:mob_illager_witch", "badger:mob_creeper", "badger:mob_skeleton", "badger:mob_spider", "badger:mob_slime", "badger:mob_silverfish", "badger:mob_zombie"],
                cap: 8,
                rate: 50,
                batch: 8
            },
            phase_3: {
                loadout: ["badger:mob_illager_axe", "badger:mob_illager_axe", "badger:mob_illager_axe", "badger:mob_illager_axe", "badger:mob_illager_witch", "badger:mob_creeper", "badger:mob_skeleton", "badger:mob_spider", "badger:mob_slime", "badger:mob_silverfish", "badger:mob_zombie"],
                cap: 8,
                rate: 50,
                batch: 8
            }
        }
    }
}

////sieger barracks - defend faction
const SiegerBarracksConfig_DefendFaction = {
    name: BARRACKS_NAME_SIEGER,
    small: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 60,
            batch: 5
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 5,
            rate: 60,
            batch: 5
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 5,
            rate: 60,
            batch: 5
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 10,
            rate: 60,
            batch: 5
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 10,
            rate: 60,
            batch: 5
        }
    },
    medium: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 60,
            batch: 5
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 5,
            rate: 60,
            batch: 5
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 5,
            rate: 60,
            batch: 5
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 10,
            rate: 60,
            batch: 5
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 10,
            rate: 60,
            batch: 5
        }
    },
    large: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 60,
            batch: 5
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 5,
            rate: 60,
            batch: 5
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 5,
            rate: 60,
            batch: 5
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 10,
            rate: 60,
            batch: 5
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 10,
            rate: 60,
            batch: 5
        }
    },
    frontlineA: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 10,
            rate: 60,
            batch: 5
        }
    }
}

//fighter barracks - defend faction
const FighterBarracksConfig_DefendFaction = {
    name: BARRACKS_NAME_FIGHTER,

    frontlineA: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 4,
            rate: 60,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 7,
            rate: 60,
            batch: 7
        }
    },
    small: {
        phase_0: {
            loadout: ["badger:piglin_bruiser"],
            cap: 0,
            rate: 0,
            batch: 1
        },
        phase_1: {
            loadout: ["badger:piglin_bruiser"],
            cap: 4,
            rate: 60,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:piglin_bruiser"],
            cap: 4,
            rate: 60,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:piglin_bruiser"],
            cap: 6,
            rate: 60,
            batch: 6
        },
        phase_4: {
            loadout: ["badger:piglin_bruiser"],
            cap: 6,
            rate: 60,
            batch: 6
        }
    },
    medium: {
        phase_0: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 0,
            rate: 0,
            batch: 1
        },
        phase_1: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 2,
            rate: 120,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 2,
            rate: 120,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 2,
            rate: 120,
            batch: 1
        },
        phase_4: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 2,
            rate: 120,
            batch: 1
        }
    },
    large: {
        phase_0: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 0,
            rate: 120,
            batch: 1
        },
        phase_1: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 2,
            rate: 120,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 2,
            rate: 120,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 2,
            rate: 120,
            batch: 1
        },
        phase_4: {
            loadout: ["badger:piglin_portal_guard"],
            cap: 2,
            rate: 120,
            batch: 1
        }
    }
}

////disruptor barracks - attack faction
const DisruptorBarracksConfig_AttackFaction = {
    name: BARRACKS_NAME_DISRUPTOR,
    wofBase: {
        phase_0: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_2: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_3: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_4: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 30,
            batch: 0
        }
    },
    small: {
        phase_0: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 15,
            batch: 2
        },
        phase_2: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 12,
            batch: 2
        },
        phase_3: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 10,
            rate: 12,
            batch: 2
        },
        phase_4: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 12,
            rate: 12,
            batch: 3
        }
    },
    medium: {
        phase_0: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 15,
            batch: 2
        },
        phase_2: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 12,
            batch: 2
        },
        phase_3: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 10,
            rate: 12,
            batch: 2
        },
        phase_4: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 12,
            rate: 12,
            batch: 3
        }
    },
    large: {
        phase_0: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 15,
            batch: 2
        },
        phase_2: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 12,
            batch: 2
        },
        phase_3: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 10,
            rate: 12,
            batch: 2
        },
        phase_4: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 12,
            rate: 12,
            batch: 3
        }
    },
    frontlineA: {
        phase_0: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 15,
            batch: 2
        }
    }
}

////disruptor barracks - frost faction
const DisruptorBarracksConfig_FrostFaction = {
    name: BARRACKS_NAME_DISRUPTOR,
    wofBase: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        }
    },
    small: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 15,
            batch: 2
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 12,
            batch: 2
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 12,
            batch: 2
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 12,
            batch: 3
        }
    },
    medium: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 15,
            batch: 2
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 12,
            batch: 2
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 12,
            batch: 2
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 12,
            batch: 3
        }
    },
    large: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 15,
            batch: 2
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 12,
            batch: 2
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 12,
            batch: 2
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 12,
            batch: 3
        }
    },
    frontlineA: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 15,
            batch: 2
        }
    }
}

////fighter barrack - attack faction
const FighterBarracksConfig_AttackFaction = {
    name: BARRACKS_NAME_FIGHTER,
    wofBase: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        }
    },
    small: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 8,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 7,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        }
    },
    medium: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 8,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 7,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        }
    },
    large: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 8,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 7,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        }
    },
    frontlineA: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 8,
            batch: 1
        }
    }
}

////fighter barrack - frost faction
const FighterBarracksConfig_FrostFaction = {
    name: BARRACKS_NAME_FIGHTER,
    wofBase: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 30,
            batch: 0
        }
    },
    small: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 8,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 7,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        }
    },
    medium: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 8,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 7,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        }
    },
    large: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 8,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 7,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 6,
            batch: 1
        }
    },
    frontlineA: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 8,
            batch: 1
        }
    }
}

////sieger barrack - attack faction
const SiegerBarracksConfig_AttackFaction = {
    name: BARRACKS_NAME_SIEGER,
    wofBase: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        }
    },
    act1_a: {
        phase_0: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_4: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        }
    },
    act1_c: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 20,
            batch: 5
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 18,
            rate: 20,
            batch: 6
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 18,
            rate: 20,
            batch: 6
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 18,
            rate: 20,
            batch: 6
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 18,
            rate: 20,
            batch: 6
        }
    }
}

////sieger barrack - frost faction
const SiegerBarracksConfig_FrostFaction = {
    name: BARRACKS_NAME_SIEGER,
    wofBase: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        }
    },
    act1_a: {
        phase_0: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_4: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 16,
            rate: 20,
            batch: 4
        }
    },
    act1_c: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 20,
            batch: 5
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 18,
            rate: 20,
            batch: 6
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 18,
            rate: 20,
            batch: 6
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 18,
            rate: 20,
            batch: 6
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 18,
            rate: 20,
            batch: 6
        }
    }
}

//OBSTACLE Faction
////disruptor barracks - obstacle faction
const DisruptorBarracksConfig_ObstacleFaction = {
    name: BARRACKS_NAME_DISRUPTOR,
    frontlineA: {
        phase_0: {
            loadout: ["badger:piglin_grenadier"],
            cap: 6,
            rate: 30,
            batch: 3
        }
    },
    small: {
        phase_0: {
            loadout: ["badger:piglin_grenadier"],
            cap: 0,
            rate: 60,
            batch: 2
        },
        phase_1: {
            loadout: ["badger:piglin_grenadier"],
            cap: 0,
            rate: 60,
            batch: 2
        },
        phase_2: {
            loadout: ["badger:piglin_grenadier"],
            cap: 0,
            rate: 60,
            batch: 2
        },
        phase_3: {
            loadout: ["badger:piglin_grenadier"],
            cap: 0,
            rate: 60,
            batch: 2
        },
        phase_4: {
            loadout: ["badger:piglin_grenadier"],
            cap: 0,
            rate: 60,
            batch: 2
        }
    },
    medium: {
        phase_0: {
            loadout: ["badger:piglin_grenadier"],
            cap: 0,
            rate: 60,
            batch: 3
        },
        phase_1: {
            loadout: ["badger:piglin_grenadier"],
            cap: 6,
            rate: 30,
            batch: 3
        },
        phase_2: {
            loadout: ["badger:piglin_grenadier"],
            cap: 6,
            rate: 30,
            batch: 3
        },
        phase_3: {
            loadout: ["badger:piglin_grenadier"],
            cap: 9,
            rate: 30,
            batch: 3
        },
        phase_4: {
            loadout: ["badger:piglin_grenadier"],
            cap: 9,
            rate: 30,
            batch: 3
        }
    },
    large: {
        phase_0: {
            loadout: ["badger:piglin_grenadier"],
            cap: 0,
            rate: 60,
            batch: 3
        },
        phase_1: {
            loadout: ["badger:piglin_grenadier"],
            cap: 6,
            rate: 30,
            batch: 3
        },
        phase_2: {
            loadout: ["badger:piglin_grenadier"],
            cap: 6,
            rate: 30,
            batch: 3
        },
        phase_3: {
            loadout: ["badger:piglin_grenadier"],
            cap: 9,
            rate: 30,
            batch: 3
        },
        phase_4: {
            loadout: ["badger:piglin_grenadier"],
            cap: 9,
            rate: 30,
            batch: 3
        }
    }
}

////sieger barracks - obstacle faction
const SiegerBarracksConfig_ObstacleFaction = {
    name: BARRACKS_NAME_SIEGER,
    frontlineA: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 6,
            rate: 30,
            batch: 3
        }
    },
    small: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 8,
            rate: 30,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 8,
            rate: 30,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 10,
            rate: 30,
            batch: 5
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 10,
            rate: 30,
            batch: 5
        }
    },
    medium: {
        phase_0: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 0,
            rate: 30,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 6,
            rate: 30,
            batch: 3
        },
        phase_2: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 6,
            rate: 30,
            batch: 3
        },
        phase_3: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 6,
            rate: 30,
            batch: 3
        },
        phase_4: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 6,
            rate: 30,
            batch: 3
        }
    },
    large: {
        phase_0: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 0,
            rate: 60,
            batch: 3
        },
        phase_1: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 6,
            rate: 30,
            batch: 3
        },
        phase_2: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 6,
            rate: 30,
            batch: 3
        },
        phase_3: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 8,
            rate: 30,
            batch: 4
        },
        phase_4: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_piggo_lava_launcher"],
            cap: 8,
            rate: 30,
            batch: 4
        }
    }
}

////disruptor barracks - DBB faction
const DisruptorBarracksConfig_DBBFaction = {
    name: BARRACKS_NAME_DISRUPTOR,
    act1_a: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 25,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 9,
            rate: 23,
            batch: 3
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 25,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 25,
            batch: 4
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 25,
            batch: 4
        }
    },
    act1_b: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 20,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 20,
            batch: 5
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 20,
            batch: 5
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 20,
            batch: 5
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 20,
            batch: 5
        }
    },
    act1_c: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 20,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 20,
            batch: 5
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 20,
            batch: 5
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 20,
            batch: 5
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 20,
            batch: 5
        }
    },
    piglin_act1_non_portal_attack_base: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 25,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 6,
            rate: 16,
            batch: 2
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 6,
            rate: 16,
            batch: 2
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 6,
            rate: 16,
            batch: 2
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 6,
            rate: 16,
            batch: 2
        }
    },
    darkBeacon: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 25,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 25,
            batch: 0
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 25,
            batch: 0
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 25,
            batch: 0
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 25,
            batch: 0
        }
    }
}

////fighter barrack - DBB faction
const FighterBarracksConfig_DBBFaction = {
    name: BARRACKS_NAME_FIGHTER,
    act1_a: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 20,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        }
    },
    act1_b: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 20,
            batch: 15
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        }
    },
    act1_c: {
        phase_0: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
            cap: 0,
            rate: 10,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
            cap: 25,
            rate: 30,
            batch: 10
        },
        phase_2: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
            cap: 25,
            rate: 30,
            batch: 10
        },
        phase_3: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
            cap: 25,
            rate: 30,
            batch: 10
        },
        phase_4: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter"],
            cap: 25,
            rate: 30,
            batch: 10
        }
    },
    darkBeacon: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 6,
            rate: 30,
            batch: 6
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 30,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 30,
            batch: 10
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 10,
            rate: 30,
            batch: 8
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 8,
            rate: 30,
            batch: 8
        }
    },
    piglin_act1_first_skirmish: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 0,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt", "badger:piglin_grunter"],
            cap: 6,
            rate: 1,
            batch: 6
        },
        phase_2: {
            loadout: ["badger:piglin_runt", "badger:piglin_grunter"],
            cap: 8,
            rate: 25,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 18,
            batch: 6
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 12,
            rate: 18,
            batch: 6
        }
    },
    piglin_act1_second_skirmish: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 25,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 25,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 25,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 25,
            batch: 4
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 25,
            batch: 4
        }
    },
    large: {
        phase_0: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 25,
            batch: 5
        },
        phase_1: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 25,
            batch: 5
        },
        phase_2: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 25,
            batch: 5
        },
        phase_3: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 25,
            batch: 5
        },
        phase_4: {
            loadout: ["badger:piglin_runt"],
            cap: 20,
            rate: 25,
            batch: 5
        }
    },
    piglin_act1_non_portal_attack_base: {
        phase_0: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 0,
            rate: 20,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 18,
            rate: 16,
            batch: 6
        },
        phase_2: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 12,
            rate: 25,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 12,
            rate: 25,
            batch: 4
        },
        phase_4: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_medic"],
            cap: 12,
            rate: 25,
            batch: 4
        }
    }
}

////sieger barrack - dbb faction
const SiegerBarracksConfig_DBBFaction = {
    name: BARRACKS_NAME_SIEGER,
    act1_a: {
        phase_0: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_1: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
            cap: 16,
            rate: 20,
            batch: 4
        },
        phase_4: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
            cap: 16,
            rate: 20,
            batch: 4
        }
    },
    act1_b: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 30,
            rate: 20,
            batch: 15
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 30,
            rate: 20,
            batch: 15
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 30,
            rate: 20,
            batch: 15
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 30,
            rate: 20,
            batch: 15
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 30,
            rate: 20,
            batch: 15
        }
    },
    act1_c: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 10,
            batch: 15
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 40,
            rate: 10,
            batch: 15
        }
    },
    darkBeacon: {
        phase_0: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_piggo_warboar"],
            cap: 6,
            rate: 30,
            batch: 6
        },
        phase_1: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 30,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 30,
            batch: 6
        },
        phase_3: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_piggo_warboar"],
            cap: 8,
            rate: 30,
            batch: 6
        },
        phase_4: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_piggo_warboar"],
            cap: 6,
            rate: 30,
            batch: 6
        }
    },
    piglin_act1_non_portal_attack_base: {
        phase_0: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 20,
            batch: 5
        },
        phase_1: {
            loadout: ["badger:piglin_grunter"],
            cap: 20,
            rate: 20,
            batch: 5
        },
        phase_2: {
            loadout: ["badger:piglin_grunter"],
            cap: 20,
            rate: 20,
            batch: 5
        },
        phase_3: {
            loadout: ["badger:piglin_grunter"],
            cap: 20,
            rate: 20,
            batch: 5
        },
        phase_4: {
            loadout: ["badger:piglin_grunter"],
            cap: 20,
            rate: 20,
            batch: 5
        }
    }
}

const AllyBarracksConfig_DBBFaction = {
    name: BARRACKS_NAME_ALLIES,
    darkBeacon: {
        phase_0: {
            loadout: ["badger:mob_zombie", "badger:mob_skeleton", "badger:mob_spider", "badger:mob_slime", "badger:mob_silverfish", "badger:mob_creeper", "badger:mob_zombie", "badger:mob_zombie", "badger:mob_skeleton", "badger:mob_skeleton", "badger:mob_skeleton", "badger:mob_creeper"],
            cap: 0,
            rate: 0,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:mob_zombie", "badger:mob_skeleton", "badger:mob_spider", "badger:mob_slime", "badger:mob_silverfish", "badger:mob_creeper", "badger:mob_zombie", "badger:mob_zombie", "badger:mob_skeleton", "badger:mob_skeleton", "badger:mob_skeleton", "badger:mob_creeper"],
            cap: 6,
            rate: 31,
            batch: 3
        },
        phase_2: {
            loadout: ["badger:mob_zombie", "badger:mob_skeleton", "badger:mob_spider", "badger:mob_slime", "badger:mob_silverfish", "badger:mob_creeper", "badger:mob_zombie", "badger:mob_zombie", "badger:mob_skeleton", "badger:mob_skeleton", "badger:mob_skeleton", "badger:mob_creeper"],
            cap: 6,
            rate: 31,
            batch: 3
        },
        phase_3: {
            loadout: ["badger:mob_zombie", "badger:mob_skeleton", "badger:mob_creeper", "badger:mob_zombie", "badger:mob_zombie", "badger:mob_skeleton", "badger:mob_skeleton", "badger:mob_skeleton", "badger:mob_spider", "badger:mob_slime", "badger:mob_silverfish", "badger:mob_creeper"],
            cap: 6,
            rate: 31,
            batch: 3
        }
    }
}

//creeper
const AllyBarracksCreeperConfig_DBBFaction = {
    name: BARRACKS_NAME_CREEPER,
    darkBeacon: {
        phase_0: {
            loadout: ["badger:mob_creeper"],
            cap: 0,
            rate: 0,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:mob_creeper"],
            cap: 2,
            rate: 62,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:mob_creeper"],
            cap: 2,
            rate: 62,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:mob_creeper"],
            cap: 2,
            rate: 62,
            batch: 1
        }
    }
}

//Skeleton
const AllyBarracksSkeletonConfig_DBBFaction = {
    name: BARRACKS_NAME_SKELETON,
    darkBeacon: {
        phase_0: {
            loadout: ["badger:mob_skeleton"],
            cap: 0,
            rate: 0,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:mob_skeleton"],
            cap: 16,
            rate: 50,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:mob_skeleton"],
            cap: 16,
            rate: 50,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:mob_skeleton"],
            cap: 16,
            rate: 50,
            batch: 4
        }
    }
}

//spider
const AllyBarracksSpiderConfig_DBBFaction = {
    name: BARRACKS_NAME_SPIDER,
    darkBeacon: {
        phase_0: {
            loadout: ["badger:mob_spider"],
            cap: 0,
            rate: 0,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:mob_spider"],
            cap: 2,
            rate: 62,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:mob_spider"],
            cap: 2,
            rate: 62,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:mob_spider"],
            cap: 2,
            rate: 62,
            batch: 1
        }
    }
}

//slime
const AllyBarracksSlimeConfig_DBBFaction = {
    name: BARRACKS_NAME_SLIME,
    darkBeacon: {
        phase_0: {
            loadout: ["badger:mob_slime"],
            cap: 0,
            rate: 0,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:mob_slime"],
            cap: 2,
            rate: 62,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:mob_slime"],
            cap: 2,
            rate: 62,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:mob_slime"],
            cap: 2,
            rate: 62,
            batch: 1
        }
    }
}

//silverfish
const AllyBarracksSilverfishConfig_DBBFaction = {
    name: BARRACKS_NAME_SILVERFISH,
    darkBeacon: {
        phase_0: {
            loadout: ["badger:mob_silverfish"],
            cap: 0,
            rate: 0,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:mob_silverfish"],
            cap: 2,
            rate: 62,
            batch: 1
        },
        phase_2: {
            loadout: ["badger:mob_silverfish"],
            cap: 2,
            rate: 62,
            batch: 1
        },
        phase_3: {
            loadout: ["badger:mob_silverfish"],
            cap: 2,
            rate: 62,
            batch: 1
        }
    }
}
//Zombie
const AllyBarracksZombieConfig_DBBFaction = {
    name: BARRACKS_NAME_ZOMBIE,
    darkBeacon: {
        phase_0: {
            loadout: ["badger:mob_zombie"],
            cap: 0,
            rate: 0,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:mob_zombie"],
            cap: 16,
            rate: 50,
            batch: 4
        },
        phase_2: {
            loadout: ["badger:mob_zombie"],
            cap: 16,
            rate: 50,
            batch: 4
        },
        phase_3: {
            loadout: ["badger:mob_zombie"],
            cap: 16,
            rate: 50,
            batch: 4
        }
    }
}



////=== Well of fate barracks ===

////obstacle sieger barrack - wof faction 
const SiegerBarracksConfig_Obstacle_WOF = {
    name: "obstacleBarracksSieger",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER,  PIGLIN_ARCHETYPE.LAVA_LAUNCHER, PIGLIN_ARCHETYPE.GRUNTER],
            cap: 0,
            rate: 60,
            batch: 0
        },
        phase_1: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER,  PIGLIN_ARCHETYPE.LAVA_LAUNCHER, PIGLIN_ARCHETYPE.GRUNTER],
            cap: 6,
            rate: 60,
            batch: 6
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER,  PIGLIN_ARCHETYPE.LAVA_LAUNCHER, PIGLIN_ARCHETYPE.GRUNTER],
            cap: 6,
            rate: 60,
            batch: 6
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER,  PIGLIN_ARCHETYPE.LAVA_LAUNCHER, PIGLIN_ARCHETYPE.GRUNTER],
            cap: 6,
            rate: 60,
            batch: 6
        },
        phase_4: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER,  PIGLIN_ARCHETYPE.LAVA_LAUNCHER, PIGLIN_ARCHETYPE.GRUNTER],
            cap: 6,
            rate: 60,
            batch: 6
        },
        phase_5: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 1,
            batch: 0
        }
    }
}

////obstacle disruptor barracks - wof faction
const DisruptorBarracksConfig_Obstacle_WOF = {
    name: "obstacleBarracksDisruptor",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.SEEKER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER],
            cap: 0,
            rate: 60,
            batch: 0
        },
        phase_1: {
            loadout: [PIGLIN_ARCHETYPE.SEEKER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER],
            cap: 8,
            rate: 30,
            batch: 8
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.SEEKER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER],
            cap: 8,
            rate: 30,
            batch: 8
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.SEEKER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER],            
            cap: 8,
            rate: 30,
            batch: 8
        },
        phase_4: {
            loadout:[PIGLIN_ARCHETYPE.SEEKER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER],            
            cap: 8,
            rate: 30,
            batch: 8
        },
        phase_5: {
            loadout: [PIGLIN_ARCHETYPE.SEEKER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER, PIGLIN_ARCHETYPE.GRUNTER],
            cap: 0,
            rate: 60,
            batch: 0
        }
    }
}

////obstacle fighter barrack - wof faction 
const FighterBarracksConfig_Obstacle_WOF = {
    name: "obstacleBarracksFighter",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER],
            cap: 0,
            rate: 20,
            batch: 0
        },
        phase_1: {
            loadout: [PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER],
            cap: 5,
            rate: 20,
            batch: 5
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER],
            cap: 5,
            rate: 20,
            batch: 5
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER],
            cap: 5,
            rate: 20,
            batch: 5
        },
        phase_4: {
            loadout: [PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER],
            cap: 5,
            rate: 20,
            batch: 5
        },
        phase_5: {
            loadout: [PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER, PIGLIN_ARCHETYPE.GRENADIER],
            cap: 0,
            rate: 1,
            batch: 0
        }
    }
}

////attack sieger barrack - wof faction 
const SiegerBarracksConfig_Attack_WOF = {
    name: "attackBarracksSieger",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout:[PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 4,
            rate: 45,
            batch: 4
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 4,
            rate: 45,
            batch: 4
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 4,
            rate: 45,
            batch: 4
        },
        phase_4: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 4,
            rate: 45,
            batch: 4
        },
        phase_5: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 0,
            rate: 1,
            batch: 0
        }
    }
}

////attack fighter barrack - wof faction 
const FighterBarracksConfig_Attack_WOF = {
    name: "attackBarracksFighter",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 0,
            rate: 60,
            batch: 0
        },
        phase_1: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 5,
            rate: 15,
            batch: 5
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 5,
            rate: 15,
            batch: 5
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 5,
            rate: 15,
            batch: 5
        },
        phase_4: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 5,
            rate: 15,
            batch: 5
        },
        phase_5: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 0,
            rate: 1,
            batch: 0
        }
    }
}

////attack disruptor barracks - wof faction
const DisruptorBarracksConfig_Attack_WOF = {
    name: "attackBarracksDisruptor",
    wofBase: {
        phase_0: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],
            cap: 0,
            rate: 60,
            batch: 0
        },
        phase_1: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],
            cap: 5,
            rate: 20,
            batch: 5
        },
        phase_2: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],        
            cap: 3,
            rate: 20,
            batch: 3
        },
        phase_3: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],         
            cap: 3,
            rate: 20,
            batch: 3
        },
        phase_4: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],
            cap: 3,
            rate: 20,
            batch: 3
        },
        phase_5: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],
            cap: 0,
            rate: 20,
            batch: 0
        }
    }
}

////frost sieger barrack - wof faction 
const SiegerBarracksConfig_Frost_WOF = {
    name: "frostBarracksSieger",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout:[PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 4,
            rate: 45,
            batch: 4
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 4,
            rate: 45,
            batch: 4
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 4,
            rate: 45,
            batch: 4
        },
        phase_4: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 4,
            rate: 45,
            batch: 4
        },
        phase_5: {
            loadout: [PIGLIN_ARCHETYPE.PIGMADILO],
            cap: 0,
            rate: 1,
            batch: 0
        }
    }
}

////frost fighter barrack - wof faction 
const FighterBarracksConfig_Frost_WOF = {
    name: "frostBarracksFighter",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 0,
            rate: 60,
            batch: 0
        },
        phase_1: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 5,
            rate: 15,
            batch: 5
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 5,
            rate: 15,
            batch: 5
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 5,
            rate: 15,
            batch: 5
        },
        phase_4: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 5,
            rate: 15,
            batch: 5
        },
        phase_5: {
            loadout: [PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.WARBOAR, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT, PIGLIN_ARCHETYPE.RUNT],
            cap: 0,
            rate: 1,
            batch: 0
        }
    }
}

////frost disruptor barracks - wof faction
const DisruptorBarracksConfig_Frost_WOF = {
    name: "frostBarracksDisruptor",
    wofBase: {
        phase_0: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],
            cap: 0,
            rate: 60,
            batch: 0
        },
        phase_1: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],
            cap: 5,
            rate: 20,
            batch: 5
        },
        phase_2: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],        
            cap: 3,
            rate: 20,
            batch: 3
        },
        phase_3: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],         
            cap: 3,
            rate: 20,
            batch: 3
        },
        phase_4: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],
            cap: 3,
            rate: 20,
            batch: 3
        },
        phase_5: {
            loadout:  [PIGLIN_ARCHETYPE.MEDIC,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR,PIGLIN_ARCHETYPE.WARBOAR],
            cap: 0,
            rate: 20,
            batch: 0
        }
    }
}

////defend sieger barrack - wof faction 
const SiegerBarracksConfig_Defend_WOF = {
    name: "defendBarracksSieger",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.PORTAL_GUARD, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER],
            cap: 0,
            rate: 45,
            batch: 0
        },
        phase_1: {
            loadout: [PIGLIN_ARCHETYPE.PORTAL_GUARD, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER],
            cap: 8,
            rate: 45,
            batch: 8
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.PORTAL_GUARD, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER],
            cap: 8,
            rate: 45,
            batch: 8
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.PORTAL_GUARD, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER],
            cap: 8,
            rate: 45,
            batch: 8
        },
        phase_4: {
            loadout: [PIGLIN_ARCHETYPE.PORTAL_GUARD, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER],
            cap: 8,
            rate: 45,
            batch: 8
        },
        phase_5: {
            loadout: [PIGLIN_ARCHETYPE.PORTAL_GUARD, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER, PIGLIN_ARCHETYPE.BRUISER],
            cap: 0,
            rate: 1,
            batch: 0
        }
    }
}

////defend fighter barrack - wof faction 
const FighterBarracksConfig_Defend_WOF = {
    name: "defendBarracksFighter",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_1: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER],
            cap: 8,
            rate: 30,
            batch: 8
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER],
            cap: 8,
            rate: 30,
            batch: 8
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER],
            cap: 8,
            rate: 30,
            batch: 8
        },
        phase_4: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER],
            cap: 8,
            rate: 30,
            batch: 8
        },
        phase_5: {
            loadout: [PIGLIN_ARCHETYPE.GRUNTER],
            cap: 0,
            rate: 1,
            batch: 0
        }
    }
}

////defend disruptor barracks - wof faction
const DisruptorBarracksConfig_Defend_WOF = {
    name: "defendBarracksDisruptor",
    wofBase: {
        phase_0: {
            loadout: [PIGLIN_ARCHETYPE.ENGINEER, PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.ENGINEER],
            cap: 0,
            rate: 30,
            batch: 0
        },
        phase_1: {
            loadout: [PIGLIN_ARCHETYPE.ENGINEER, PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.ENGINEER],
            cap: 6,
            rate: 30,
            batch: 6
        },
        phase_2: {
            loadout: [PIGLIN_ARCHETYPE.ENGINEER, PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.ENGINEER],
            cap: 6,
            rate: 30,
            batch: 6
        },
        phase_3: {
            loadout: [PIGLIN_ARCHETYPE.ENGINEER, PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.ENGINEER],
            cap: 6,
            rate: 30,
            batch: 6
        },
        phase_4: {
            loadout: [PIGLIN_ARCHETYPE.ENGINEER, PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.ENGINEER],
            cap: 6,
            rate: 30,
            batch: 6
        },
        phase_5: {
            loadout: [PIGLIN_ARCHETYPE.ENGINEER, PIGLIN_ARCHETYPE.MEDIC, PIGLIN_ARCHETYPE.ENGINEER],
            cap: 0,
            rate: 60,
            batch: 0
        }
    }
}

//-OLD-

////sieger barrack - wof faction
const SiegerBarracksConfig_WOFFaction = {
    name: BARRACKS_NAME_SIEGER,
    wofBase: {
        phase_0: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter"],
            cap: 0,
            rate: 60,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_piggo_lava_launcher"],
            cap: 8,
            rate: 60,
            batch: 8
        },
        phase_2: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_piggo_lava_launcher"],
            cap: 8,
            rate: 60,
            batch: 8
        },
        phase_3: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_piggo_lava_launcher"],
            cap: 8,
            rate: 60,
            batch: 8
        },
        phase_4: {
            loadout: ["badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_grenadier", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grunter", "badger:piglin_grenadier", "badger:piglin_piggo_lava_launcher"],
            cap: 8,
            rate: 60,
            batch: 8
        },
        phase_5: {
            loadout: ["badger:piglin_grunter"],
            cap: 0,
            rate: 1,
            batch: 0
        }
    }
}

////fighter barrack - wof faction
const FighterBarracksConfig_WOFFaction = {
    name: BARRACKS_NAME_FIGHTER,
    wofBase: {
        phase_0: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt"],
            cap: 0,
            rate: 60,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_portal_guard"],
            cap: 8,
            rate: 60,
            batch: 8
        },
        phase_2: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_portal_guard"],
            cap: 8,
            rate: 60,
            batch: 8
        },
        phase_3: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_portal_guard"],
            cap: 8,
            rate: 60,
            batch: 8
        },
        phase_4: {
            loadout: ["badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_bruiser", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_runt", "badger:piglin_bruiser", "badger:piglin_portal_guard"],
            cap: 8,
            rate: 60,
            batch: 8
        },
        phase_5: {
            loadout: ["badger:piglin_runt"],
            cap: 0,
            rate: 60,
            batch: 0
        }
    }
}

////disruptor barracks - wof faction
const DisruptorBarracksConfig_WOFFaction = {
    name: BARRACKS_NAME_DISRUPTOR,
    wofBase: {
        phase_0: {
            loadout: ["badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 60,
            batch: 0
        },
        phase_1: {
            loadout: ["badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_seeker", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_pigmadilo"],
            cap: 6,
            rate: 60,
            batch: 6
        },
        phase_2: {
            loadout: ["badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_seeker", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_pigmadilo"],            cap: 6,
            rate: 60,
            batch: 6
        },
        phase_3: {
            loadout: ["badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_seeker", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_pigmadilo"],            cap: 6,
            rate: 60,
            batch: 6
        },
        phase_4: {
            loadout: ["badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_seeker", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_piggo_warboar", "badger:piglin_pigmadilo"],            cap: 6,
            rate: 60,
            batch: 6
        },
        phase_5: {
            loadout: ["badger:piglin_piggo_warboar"],
            cap: 0,
            rate: 60,
            batch: 0
        }
    }
}