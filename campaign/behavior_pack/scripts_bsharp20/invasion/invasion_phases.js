const INVASION_PHASE = "invasionSystemCurrentPhase"

///////// INVASION PHASE EVALUATION /////////

const _GetAllyPOICompletedCount = () => {
    return QUERY_GetGlobalVariable(INVASION_PHASE_STATE.ALLIES_COMPLETED_COUNT)
}

const _GetMountPOICompletedCount = () => {
    return QUERY_GetGlobalVariable(INVASION_PHASE_STATE.MOUNTS_COMPLETED_COUNT)
}

const _GetTowerPOICompletedCount = () => {
    return QUERY_GetGlobalVariable(INVASION_PHASE_STATE.TOWERS_COMPLETED_COUNT)
}

const _GetMobAlliancesCompletedCount = () => {
    return QUERY_GetGlobalVariable(INVASION_PHASE_STATE.MOB_ALLIANCES_COMPLETED_COUNT)
}

const _GetPlayerUpgradeCount = () => {
    return Math.ceil(_GetAllyPOICompletedCount() * invasionPhaseWeights.allyPOI + _GetMountPOICompletedCount() * invasionPhaseWeights.mountPOI + _GetTowerPOICompletedCount() * invasionPhaseWeights.towerPOI + _GetMobAlliancesCompletedCount() * invasionPhaseWeights.mobAlliances + _GetWoFUpgradesPresentCount() * invasionPhaseWeights.wofUpgrades)
}

// Since invasion phase is part of the counter-trigger-snapshot flow, we will try to introduce hordes and mob alliances based on that too
const CheckAndProgressInvasionPhase = (triggerTime) => {
    const lastInvasionPhase = InvasionPhaseCounter.Get()
    let needCheckOtherCampaignFlows = false

    for (let i = lastInvasionPhase + 1; i < phaseValues.length; i++) {
        const invasionPhaseInQuestion = phaseValues[i]
        const trigger = invasionPhaseInQuestion.conditions[triggerTime]
        if (trigger === undefined) {
             // No such trigger time was specified, can check the next one
            continue
        }

        if (!trigger.eval()) {
            // Conditions failed to pass, can check the next one
            continue
        }

        needCheckOtherCampaignFlows = true
        SetInvasionPhase(i)
    }

    if (needCheckOtherCampaignFlows) {
        // Now see if hordes/MA occupations should start
        CheckAndProgressHordeEntry(triggerTime)
        CheckAndProgressMobAllianceOccupation(triggerTime)
    }
}

///////// GENERAL INVASION PHASE API /////////

const _RefreshInvasionState = () => {
    PlayerActivity_Reset()
    ReplenishInvasionHordeDeck()
    ReplenishNightOutpostHordeDeck()
    SetAllFactionDecksFromPhase(GetInvasionPhase())
    ResetInvasionDrawCounter()
    RefillInvasionAttackStrengthDeck()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ActivateInvasionSystem = () => {
    OUTPUT_DebugLogInvasion("Activating the Invasion System")
    OUTPUT_SetGlobalVariable(INVASION_ACTIVE, 1)
    _RefreshInvasionState()
    OUTPUT_ServerMapSetKeyValue(MAP_KEY.INVASION_STATE, MAP_INVASION_STATE.ENABLED)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DeactivateInvasionSystem = () => {
    OUTPUT_DebugLogInvasion("Deactivating the Invasion System")
    OUTPUT_SetGlobalVariable(INVASION_ACTIVE, 0)
    _RefreshInvasionState()
    OUTPUT_ServerMapSetKeyValue(MAP_KEY.INVASION_STATE, MAP_INVASION_STATE.DISABLED)
}

const SetInvasionPhase = (phaseInt) => {
    const currentInvasionPhase = InvasionPhaseCounter.Get()

    if (currentInvasionPhase >= phaseInt) {
        OUTPUT_DebugLogInvasion(`Can't set invasion phase to ${phaseInt} - since the current phase is already ${currentInvasionPhase} and we can't assign an invasion phase that already happened`)
        return
    }

    OUTPUT_DebugLogInvasion("Setting Invasion Phase to " + phaseInt)

    // Set all phases before the target phase too as we migth be skipping
    for (let i = currentInvasionPhase + 1; i <= phaseInt; i++) {
        OUTPUT_DebugLogInvasion(`[INVASION_PHASE] Setting the counter and snapshot for phase ${i}`)
        InvasionPhaseCounter.Set(i)
        SNAPSHOT_InasionPhaseIntroduced(i).Take()
        _RefreshInvasionState()
    }
}

const GetInvasionPhase = () => {
    return InvasionPhaseCounter.Get()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InvasionActive = () => {
    return QUERY_GetGlobalVariable(INVASION_ACTIVE) === 1
}

///////// INVASION SNIPPETS /////////

SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue) {
        LISTENFOR_VillageDestroyed({
            snippet: "vd_increment_bases_destroyed_count",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            despawned: false
        })

        // Attack horde is defeated specifically when its boss is defeated, not a boss base
        // TODO will want to probably use a better variable that is specifically for the boss being destroyed or not, rather than the health (which gets set to -1 when the boss is dead)
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_increment_attack_faction_boss_destroyed",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: GV_ATTACK_HORDE_BOSS_HEALTH
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_set_invasion_phase",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "setInvasionPhase"
        })
    }
})

SNIPPET_ExternalEvent("ee_set_invasion_phase", (parameter) => {
    const newPhaseNum = parameter.value
    SetInvasionPhase(newPhaseNum)
})

SNIPPET_VillageDestroyed("vd_increment_bases_destroyed_count", (villageId, _payload) => {
    // Only looking for a piglin horde
    const hordeName = QUERY_GetFactionNameFromVillageID(villageId)
    if (!FACTION_PIGLINS.includes(hordeName)) {
        return
    }

    // Only looking for destruction of the invasion bases
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (!ALLOWED_INVASION_BASE_SIZES.includes(baseSize)) {
        return
    }

    IncrementGlobal(INVASION_PHASE_STATE.BASES_DESTROYED_COUNT)

    if (IsBossVillage(villageId)) {
        switch (hordeName) {
            case FACTION_NAME_ATTACK:
                // NOTE (mason) Attack horde doesnt have a boss base anymore, so it is destroyed specifically when its boss is destroyed
                //IncrementGlobal(INVASION_PHASE_STATE.ATTACK_HORDE_DESTROYED)
                break
            case FACTION_NAME_DEFEND:
                IncrementGlobal(INVASION_PHASE_STATE.DEFEND_HORDE_DESTROYED)
                break
            case FACTION_NAME_OBSTACLE:
                IncrementGlobal(INVASION_PHASE_STATE.OBSTACLE_HORDE_DESTROYED)
                break
            case FACTION_NAME_FROST:
                IncrementGlobal(INVASION_PHASE_STATE.FROST_HORDE_DESTROYED)
                break
        }
    }
})

SNIPPET_GlobalVariableChanged("gvc_increment_attack_faction_boss_destroyed", (_oldValue, newValue) => {
    if (newValue === -1) {
        IncrementGlobal(INVASION_PHASE_STATE.ATTACK_HORDE_DESTROYED)
    }
})
