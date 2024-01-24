const piglinUnits = {
    runt: {
        id: "runt",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_RUNT,
        tag: "runt",
        global: {
            numDefeated: "gv_runt_num_defeated"
        },
        numToUnlock: 10
    },
    grunter: {
        id: "grunter",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_GRUNTER,
        tag: "grunter",
        global: {
            numDefeated: "gv_grunter_num_defeated"
        },
        numToUnlock: 10
    },
    bruiser: {
        id: "bruiser",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_BRUISER,
        tag: "bruiser",
        global: {
            numDefeated: "gv_bruiser_num_defeated"
        },
        numToUnlock: 3
    },
    disruptor: {
        id: "disruptor",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_DISRUPTOR,
        tag: "piglinDisruptorUnit",
        global: {
            numDefeated: "gv_disruptor_num_defeated"
        },
        numToUnlock: 1
    },
    engineer: {
        id: "engineer",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_ENGINEER,
        tag: "engineer",
        global: {
            numDefeated: "gv_engineer_num_defeated"
        },
        numToUnlock: 10
    },
    grenadier: {
        id: "grenadier",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_GRENADIER,
        tag: "grenadier",
        global: {
            numDefeated: "gv_grenadier_num_defeated"
        },
        numToUnlock: 3
    },
    medic: {
        id: "medic",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_MEDIC,
        tag: "medic",
        global: {
            numDefeated: "gv_medic_num_defeated"
        },
        numToUnlock: 5
    },
    seeker: {
        id: "seeker",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_SEEKER,
        tag: "seeker",
        global: {
            numDefeated: "gv_seeker_num_defeated"
        },
        numToUnlock: 1
    },
    pigmadilo: {
        id: "pigmadilo",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_PIGMADILO,
        tag: "pigmadilo",
        global: {
            numDefeated: "gv_pigmadilo_num_defeated"
        },
        numToUnlock: 1
    },
    warboar: {
        id: "warboar",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_WARBOAR,
        tag: "warboar",
        global: {
            numDefeated: "gv_warboar_num_defeated"
        },
        numToUnlock: 5
    },
    portalguard: {
        id: "portalguard",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_PORTALGUARD,
        tag: "portalguard",
        global: {
            numDefeated: "gv_portalguard_num_defeated"
        },
        numToUnlock: 1
    },
    lavalauncher: {
        id: "lavalauncher",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_UNIT_LAVALAUNCHER,
        tag: "piggo_lava_launcher",
        global: {
            numDefeated: "gv_lavalauncher_num_defeated"
        },
        numToUnlock: 1
    }
}

const piglinStructures = {
    piglinAirChopper: {
        id: "piglinAirChopper",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_AIR_CHOPPER,
        tag: "airChopper",
        global: {
            numDefeated: "gv_airchopper_num_defeated"
        },
        numToUnlock: 1
    },
    piglinNetherSpreader: {
        id: "piglinNetherSpreader",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_NETHER_SPREADER,
        tag: "netherSpreader",
        global: {
            numDefeated: "gv_netherspreader_num_defeated"
        },
        numToUnlock: 1
    },
    piglinthrower: {
        id: "piglinthrower",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_PIGLIN_THROWER,
        tag: "pigThrowerTower",
        global: {
            numDefeated: "gv_piglinthrower_num_defeated"
        },
        numToUnlock: 1
    },
    piglinLavaCoil: {
        id: "piglinLavaCoil",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_LAVA_COIL,
        tag: "pigCrystal",
        global: {
            numDefeated: "gv_lavaCoil_num_defeated"
        },
        numToUnlock: 1
    },
    piglinLavaTowerMagmaShooter: {
        id: "piglinlavaTowerMagmaShooter",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_LAVA_TOWER,
        tag: "pigMagmaTower",
        global: {
            numDefeated: "gv_lavaTowerMagmaShooter_num_defeated"
        },
        numToUnlock: 1
    },
    piglinShieldTower: {
        id: "piglinShieldTower",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_SHIELD_TOWER,
        tag: "pigShieldTower",
        global: {
            numDefeated: "gv_piglinShieldTower_num_defeated"
        },
        numToUnlock: 1
    },
    piglinknockbacktower: {
        id: "piglinknockbacktower",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_KNOCKBACK_TOWER,
        tag: "pigKnockbackTower",
        global: {
            numDefeated: "gv_piglinknockbacktower_num_defeated"
        },
        numToUnlock: 1
    },
    piglinarrowtower: {
        id: "piglinarrowtower",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_ARROW_TOWER,
        tag: "pigArrowTower",
        global: {
            numDefeated: "gv_piglinarrowtower_num_defeated"
        },
        numToUnlock: 1
    },
    barracks: {
        id: "barracks",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_BARRACKS,
        tag: "barracksLift",
        global: {
            numDefeated: "gv_barracks_num_defeated"
        },
        numToUnlock: 4
    },
    superNetherSpreader: {
        id: "superNetherSpreader",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_SUPER_NETHER_SPREADER,
        tag: "superNetherSpreader",
        global: {
            numDefeated: "gv_supernetherspreader_num_defeated"
        },
        numToUnlock: 1
    },
    rangeExtender: {
        id: "rangeExtender",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_RANGE_EXTENDER,
        tag: "pigRangeUp",
        global: {
            numDefeated: "gv_rangeExtender_num_defeated"
        },
        numToUnlock: 1
    },
    regenerator: {
        id: "regenerator",
        journalUnlock: JOURNAL_UNLOCKS.PIGLIN_STRUCTURE_REGENERATOR,
        tag: "pigCarpenter",
        global: {
            numDefeated: "gv_regenerator_num_defeated"
        },
        numToUnlock: 1
    }
}

const secondsToWaitBeforeUnlock = 4

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (ruleValue.value) {
        for (const key in piglinUnits) {
            LISTENFOR_PopCappedEntityDestroyed({
                snippet: "ed_add_journal_entry_unit",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: [piglinUnits[key].tag],
                payloadString: key,
                despawned: false
            })
        }

        for (const key in piglinStructures) {
            LISTENFOR_PopCappedEntityDestroyed({
                snippet: "ed_add_journal_entry_structure",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: [piglinStructures[key].tag],
                payloadString: key,
                despawned: false
            })
        }
    }
})

SNIPPET_PopCappedEntityDestroyed("ed_add_journal_entry_unit", (entity, payload) => {
    const piglin = piglinUnits[payload.string]
    const piglinDestroyer = QUERY_DestroyerEntityTeam(entity)

    if (piglinDestroyer === "team_two") {
        IncrementGlobal(piglin.global.numDefeated)
    }

    if (QUERY_GetGlobalVariable(piglin.global.numDefeated) >= piglin.numToUnlock) {
        LISTENFOR_LocalTimer({
            snippet: "lt_unlock_piglin_journal_entry",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: secondsToWaitBeforeUnlock,
            payloadString: piglin.journalUnlock
        })
        Once()
    }
})

SNIPPET_PopCappedEntityDestroyed("ed_add_journal_entry_structure", (entity, payload) => {
    const structure = piglinStructures[payload.string]

    IncrementGlobal(structure.global.numDefeated)

    if (QUERY_GetGlobalVariable(structure.global.numDefeated) >= structure.numToUnlock) {
        LISTENFOR_LocalTimer({
            snippet: "lt_unlock_piglin_journal_entry",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: secondsToWaitBeforeUnlock,
            payloadString: structure.journalUnlock
        })
        Once()
    }
})

SNIPPET_LocalTimer("lt_unlock_piglin_journal_entry", (payload) => {
    UnlockJournalEntry(payload.string)
})
