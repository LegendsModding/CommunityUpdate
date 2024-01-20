// Very simple script that sets up a listener for when the player dies
// Checks through a list of valid resources, queries their amount and then drops based on a passed in game setting.
const loseResourcesOnDeath = {
    resources: ["wood", "stone", "iron", "coal", "redstone", "diamond", "xp_common", "emerald", "gold"], //list of resource names to iterate through
    settingName: "resources_misc_lose_on_death" //the value of setting in "custom_game_settings" so we can reference this later
}

// When the game starts, add a listener that listens for player health to cross a threshold of 0, aka dies.
SNIPPET_Bootstrap("", () => {
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_custom_setting_lose_resources_on_death",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["player"],
        despawned: false
    })
})

//When the custom game is run, reference the value for this setting and store it as a global value so we can reference it later
SNIPPET_GameSettingInitialized(loseResourcesOnDeath.settingName, (value) => {
    if (QUERY_GameDifficulty() === "Custom") {
        OUTPUT_SetGlobalVariable(CustomSettingGV(loseResourcesOnDeath.settingName), value.value)
    }
})

//This snippet is run once the threshold is met, in this case once it crosses zero health.
//Then we query resources from the list and remove them based on the global variable we've set that stored the % to lose
SNIPPET_NonPopCappedEntityDestroyed("ed_custom_setting_lose_resources_on_death", (entity, _payload) => {
    const percentageToLose = QUERY_GetGlobalVariable(CustomSettingGV(loseResourcesOnDeath.settingName)) / 100
    const team = QUERY_GetTeamName(entity)

    for (const resource of loseResourcesOnDeath.resources) {
        const currentResourceValue = QUERY_GetTeamResource(team, resource)
        if (currentResourceValue > 0) {
            const resourcesToLose = currentResourceValue * percentageToLose * -1.0
            OUTPUT_AddOrRemoveTeamResource(team, resource, resourcesToLose, false)
        }
    }
})
