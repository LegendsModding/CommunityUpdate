SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        LISTENFOR_ExternalEvent({
            snippet: "invasionPlaceAtt",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "invasionPlaceAtt"
        })
        LISTENFOR_ExternalEvent({
            snippet: "invasionPlaceDef",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "invasionPlaceDef"
        })
        LISTENFOR_ExternalEvent({
            snippet: "invasionPlaceObs",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "invasionPlaceObs"
        })

        LISTENFOR_ExternalEvent({
            snippet: "invasionPlaceAttNearbySlot",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "invasionPlaceAttNearbySlot"
        })
        LISTENFOR_ExternalEvent({
            snippet: "invasionPlaceDefNearbySlot",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "invasionPlaceDefNearbySlot"
        })
        LISTENFOR_ExternalEvent({
            snippet: "invasionPlaceObsNearbySlot",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "invasionPlaceObsNearbySlot"
        })

        LISTENFOR_ExternalEvent({
            snippet: "invasionPlaceDbbNearbySlot",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "invasionPlaceDbbNearbySlot"
        })
    }
})

SNIPPET_ExternalEvent("invasionPlaceDbbNearbySlot", (parameter) => {
    Logi("invasionPlaceDbbNearbySlot" + parameter.value)

    if (parameter.value === "boss") {
        _InvasionDebugPlaceBaseNearPlayer(FACTION_NAME_DBB, BASE_SIZE_BOSS)
    } else {
        _InvasionDebugPlaceBaseNearPlayer(FACTION_NAME_DBB, parameter.value)
    }
})

SNIPPET_ExternalEvent("invasionPlaceAtt", (parameter) => {
    Logi("invasionPlaceAtt" + parameter.value)

    if (parameter.value === "boss") {
        _InvasionDebugPlaceBaseInTheWorld(FACTION_NAME_ATTACK, BASE_SIZE_BOSS)
    } else {
        _InvasionDebugPlaceBaseInTheWorld(FACTION_NAME_ATTACK, parameter.value)
    }
})

SNIPPET_ExternalEvent("invasionPlaceDef", (parameter) => {
    Logi("invasionPlaceDef" + parameter.value)

    if (parameter.value === "boss") {
        _InvasionDebugPlaceBaseInTheWorld(FACTION_NAME_DEFEND, BASE_SIZE_BOSS)
    } else {
        _InvasionDebugPlaceBaseInTheWorld(FACTION_NAME_DEFEND, parameter.value)
    }
})

SNIPPET_ExternalEvent("invasionPlaceObs", (parameter) => {
    Logi("invasionPlaceObs" + parameter.value)

    if (parameter.value === "boss") {
        _InvasionDebugPlaceBaseInTheWorld(FACTION_NAME_OBSTACLE, BASE_SIZE_BOSS)
    } else {
        _InvasionDebugPlaceBaseInTheWorld(FACTION_NAME_OBSTACLE, parameter.value)
    }
})

SNIPPET_ExternalEvent("invasionPlaceAttNearbySlot", (parameter) => {
    Logi("invasionPlaceAttNearbySlot" + parameter.value)

    if (parameter.value === "boss") {
        _InvasionDebugPlaceBaseNearPlayer(FACTION_NAME_ATTACK, BASE_SIZE_BOSS)
    } else {
        _InvasionDebugPlaceBaseNearPlayer(FACTION_NAME_ATTACK, parameter.value)
    }
})

SNIPPET_ExternalEvent("invasionPlaceDefNearbySlot", (parameter) => {
    Logi("invasionPlaceDefNearbySlot" + parameter.value)

    if (parameter.value === "boss") {
        _InvasionDebugPlaceBaseNearPlayer(FACTION_NAME_DEFEND, BASE_SIZE_BOSS)
    } else {
        _InvasionDebugPlaceBaseNearPlayer(FACTION_NAME_DEFEND, parameter.value)
    }
})

SNIPPET_ExternalEvent("invasionPlaceObsNearbySlot", (parameter) => {
    Logi("invasionPlaceObsNearbySlot" + parameter.value)

    if (parameter.value === "boss") {
        _InvasionDebugPlaceBaseNearPlayer(FACTION_NAME_OBSTACLE, BASE_SIZE_BOSS)
    } else {
        _InvasionDebugPlaceBaseNearPlayer(FACTION_NAME_OBSTACLE, parameter.value)
    }
})

const _InvasionDebugPlaceBaseNearPlayer = (factionName, baseSize) => {
    for (let i = 10; i < 1000; i++) {
        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(SLOT.BASE)
        OUTPUT_PlacementSetPrimaryProximityRule(GetPlayers(), 0, i)
        const success = OUTPUT_PlacementExecute()
        if (success) {
            Logi(`[DEBUG] Debug Placement successful!`)
            const newBase = SpawnBase(factionName, baseSize, true, MAP_INVASION_RECAP.BUILT_NEW_BASE)

            // NOTE: in case the offset function is removed, please replaced it with the commented out slash command
            // OUTPUT_TriggerSlashCommand(`/tp @s ~0 ~100 ~0`, false)
            OUTPUT_TeleportWithOffset(GetPlayers(), newBase, 0, 100, 0)
            return
        }
    }

    Logi(`[DEBUG] Debug Placement failed!`)
}

const _InvasionDebugPlaceBaseInTheWorld = (factionName, baseSize) => {
    Logi("_InvasionDebugPlaceBaseInTheWorld " + factionName + " " + baseSize)

    const allBases = FILTER_ByVillageSize(GetFactionBases(factionName), [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE])
    let success = false
    if (HasEntities(allBases)){
        success = SpawnBaseWithRules(factionName, baseSize, false, true)
    } else {
        success = SpawnInitialBaseWithRules(factionName, baseSize)
    }

    if (success){
        Logi("Place " + factionName + " " + baseSize)
    } else {
        Logi("FAILED to place " + factionName + " " + baseSize)
    }
}
