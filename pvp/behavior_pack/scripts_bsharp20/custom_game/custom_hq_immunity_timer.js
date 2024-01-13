const customHqImmunityData = {
    settingName: "tools_modifiers_hq_zone_immunity",
    resource: "custom_setting_no_attack",
    messages: {
        on: "pvp_hq_zone_immunity_on",
        off: "pvp_hq_zone_immunity_off"
    }
}

SNIPPET_GameSettingInitialized(customHqImmunityData.settingName, (value) => {
    if (value.value > 0) {
        LISTENFOR_GlobalVariableChanged({
            snippet: "gvc_hq_zone_immunity_on",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            variableName: GAME_MODE_GLOBAL.matchStarted,
            payloadInt: value.value
        })
    }
})

SNIPPET_GlobalVariableChanged("gvc_hq_zone_immunity_on", (_prevValue, newValue, payload) => {
    if (newValue) {
        for (const team in PLAYER_TEAMS) {
            OUTPUT_AddOrRemoveTeamResource(team, customHqImmunityData.resource, 1, false)
        }
        LISTENFOR_LocalTimer({
            snippet: "lt_remove_no_attack_resource",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: payload.int * 60 // No attack time is measured in minutes, so convert to seconds
        })
        OUTPUT_Announce(customHqImmunityData.messages.on, [payload.int.toString()])
        Once()
    }
})

SNIPPET_LocalTimer("lt_remove_no_attack_resource", (_payload) => {
    for (const team in PLAYER_TEAMS) {
        OUTPUT_AddOrRemoveTeamResource(team, customHqImmunityData.resource, -1, false)
    }
    OUTPUT_Announce(customHqImmunityData.messages.off, [])
    Once()
})
