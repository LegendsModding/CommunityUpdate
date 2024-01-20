//This script supports adding resources essential to unlocking buffs on the player and structures
//Unlockable buffs are defined on entity files and can be activated on the presence or absence of a resource
const customBuffData = {
    resources: [
        {
            resourceName: "buff_player_movement_speed", //the name of the resource used by the unlockable buff
            settingName: "player_bonuses_speed" //the name of setting in custom_game_settings, query this to see what the player has set it to (default is off)
        },
        {
            resourceName: "buff_player_jump_height",
            settingName: "player_bonuses_jump"
        },
        {
            resourceName: "buff_player_invulnerability",
            settingName: "player_bonuses_invulnerability"
        },
        {
            resourceName: "custom_tools_auto_buffed_structures_enabled",
            settingName: "tools_modifiers_structure_auto_buffed"
        }
    ]
}

//For each object int he array, create a listener to see if its game setting was initialized
for (let ii = 0; ii < customBuffData.resources.length; ii++) {
    const resource = customBuffData.resources[ii]

    if (resource.settingName) {
        SNIPPET_GameSettingInitialized(resource.settingName, (value) => {
            if (QUERY_GameDifficulty() === "Custom") {
                LISTENFOR_PlayersReady({
                    snippet: "pr_apply_player_buff",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    payloadInt: value.value,
                    payloadString: resource.resourceName
                })
            }
        })
    }
}

SNIPPET_PlayersReady("pr_apply_player_buff", (payload) => {
    Once()

    const amountRequired = payload.int
    const resourceName = payload.string

    for (const team in PLAYER_TEAMS) {
        //Check the amount of resource required (as set by the user) vs. what the player currently has. Adjust as needed.
        //These resources should only be 0 or 1, so it doesn't need to keep track of anything more complicated.
        const amountCurrent = QUERY_GetTeamResource(team, resourceName)

        if (amountRequired < amountCurrent) {
            OUTPUT_AddOrRemoveTeamResource(team, resourceName, -1, false)
        } else if (amountRequired > amountCurrent) {
            OUTPUT_AddOrRemoveTeamResource(team, resourceName, 1, false)
        }
    }
})