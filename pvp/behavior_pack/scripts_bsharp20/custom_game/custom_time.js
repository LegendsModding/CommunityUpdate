const customTimeVal = {
    settingName: "world_day_night_cycle"
}

//If its a custom game, check the value and based on that value, set time of day and lock it
SNIPPET_GameSettingInitialized(customTimeVal.settingName, (value) => {
    if (value.value) {
        pvpStartMatchVal.lockDayNightCycle = true
        pvpStartMatchVal.startingTime = value.value === 1 ? TIME_NOON : TIME_MIDNIGHT // Value of 1 is day, 2 is night
    }
})
