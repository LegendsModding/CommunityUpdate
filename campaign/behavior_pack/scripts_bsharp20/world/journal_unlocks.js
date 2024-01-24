SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_StatusEffectStarted({
            snippet: "sef_journal_unlock",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            statusEffectName: "player_speed",
            includeTags: ["player"],
            payloadString: JOURNAL_UNLOCKS.BUFF_SPEED_WEED
        })

        LISTENFOR_StatusEffectStarted({
            snippet: "sef_journal_unlock",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            statusEffectName: "poisoned",
            includeTags: ["player"],
            payloadString: JOURNAL_UNLOCKS.HAZARD_VENOM_VINES
        })

        LISTENFOR_StatusEffectStarted({
            snippet: "sef_journal_unlock",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            statusEffectName: "healing",
            includeTags: ["player"],
            payloadString: JOURNAL_UNLOCKS.BUFF_REGEN_STONE
        })

        LISTENFOR_StatusEffectStarted({
            snippet: "sef_journal_unlock",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            statusEffectName: "player_jump",
            includeTags: ["player"],
            payloadString: JOURNAL_UNLOCKS.BUFF_BOUNCY_MUSHROOM
        })
    }
})

SNIPPET_StatusEffectStarted("sef_journal_unlock", (_affectedEntity, _statusEffectName, payload) => {
    if (IncrementGlobal("gv_" + payload.string) >= 2) {
        LISTENFOR_LocalTimer({
            snippet: "lt_journal_trigger_timer",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 5,
            payloadString: payload.string
        })
        Once()
    }
})

//Lore Triggered Delay
SNIPPET_LocalTimer("lt_journal_trigger_timer", (payload) => {
    UnlockJournalEntry(payload.string)
})

SNIPPET_ResourcesChanged("rc_journal_unlock_resource", (_resourceName, _teamID, _previousAmount, _currentAmount, payload) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_journal_trigger_timer",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 5,
        payloadString: payload.string
    })
})
