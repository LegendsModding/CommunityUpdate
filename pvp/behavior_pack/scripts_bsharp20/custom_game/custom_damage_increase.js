const customDamageIncreaseVal = {
    customTimeToBegin: [
        // These custom setting names should correspond 1:1 with the stages in grant_damage_increase.js
        "tools_modifiers_pvp_escalation_1",
        "tools_modifiers_pvp_escalation_2",
        "tools_modifiers_pvp_escalation_3"
    ]
}

for (const index in customDamageIncreaseVal.customTimeToBegin) {
    const setting = customDamageIncreaseVal.customTimeToBegin[index]
    SNIPPET_GameSettingInitialized(setting, (value) => {
        damageIncreaseData.stages[index].timeToBegin = value.value
    })
}
