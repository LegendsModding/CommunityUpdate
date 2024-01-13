// Contains functionality for achievements specific to PVP
// Checks to see if the player is earning Lapis in PVP over X period of time
// Once timer has expired, no longer records the telemetry event
// Otherwise you could simply leave the game on in practice, go AFK and you could get it, although this isn't much harder, it will encourage use of the mechanic
const collectLapisAchievement = {
    timerDuration: 60 * 30, //intended match experience is ~30 minutes
    gv: "gv_collect_lapis_achievement_pvp"
}

SNIPPET_InheritsFromGameMode("pvp", () => {
    LISTENFOR_ResourcesChanged({
        snippet: "rc_collect_lapis_pvp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        resourceName: "emerald" //lapis is called emerald under the hood
    })
    LISTENFOR_LocalTimer({
        snippet: "lt_collect_lapis_pvp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: collectLapisAchievement.timerDuration
    })
})

SNIPPET_LocalTimer("lt_collect_lapis_pvp", (_timeLeft, _payload) => {
    OUTPUT_SetGlobalVariable(collectLapisAchievement.gv, 1)
})

SNIPPET_ResourcesChanged("rc_collect_lapis_pvp", (_resourceName, teamID, previousAmount, currentAmount) => {
    const amountOfLapis = currentAmount - previousAmount //how much of the resource did you just receive?
    let relevantPlayers = FILTER_ByTeam(GetAllPlayers(), teamID)

    if (!QUERY_GetGlobalVariable(collectLapisAchievement.gv)) {
        //check to see if timer has expired
        if (amountOfLapis > 0) {
            //only want it for a positive amount, not for when its spent ALSO check if relevant players is valid cause testing in a practice, I generated tons of errors
            while (HasEntities(relevantPlayers)) {
                const player = RandomEntity(relevantPlayers)
                TelemetrySendLapisCount(player, amountOfLapis)
                relevantPlayers = OPER_Difference(relevantPlayers, player)
            }
        }
    } else {
        Once() //stop running this
    }
})

//Achievements that test for specific custom game settings
//The names of custom game settings for reference
const customSettingVersusAchievementVal = {
    gates: "tools_tech_tree_gate",
    walls: "tools_tech_tree_wall",
    unlockAll: "tools_tech_tree_unlock_all"
}

//------------------------------------------------------
// Achievement for a game played without walls in PVP
//------------------------------------------------------

//Store the value of this custom setting as a global var for future reference
SNIPPET_GameSettingInitialized(customSettingVersusAchievementVal.gates, (value) => {
    if (QUERY_GameDifficulty() === "Custom") {
        OUTPUT_SetGlobalVariable(CustomSettingGV(customSettingVersusAchievementVal.gates), value.value)
    }
})

SNIPPET_GameSettingInitialized(customSettingVersusAchievementVal.walls, (value) => {
    if (QUERY_GameDifficulty() === "Custom") {
        OUTPUT_SetGlobalVariable(CustomSettingGV(customSettingVersusAchievementVal.walls), value.value)
    }
})

//Function test whether its a low grav game before sending telemetry
const isNoWallGame = () => {
    const gatesEnabled = QUERY_GetGlobalVariable(CustomSettingGV(customSettingVersusAchievementVal.gates))
    const wallsEnabled = QUERY_GetGlobalVariable(CustomSettingGV(customSettingVersusAchievementVal.walls))

    //If gates and walls are DISABLED
    if (gatesEnabled === 0 && wallsEnabled === 0) {
        return true
    } else {
        return false
    }
}

//Telemetry function
const TelemetrySendNoWallGame = (team) => {
    const players = FILTER_ByTeam(GetAllPlayers(), team)
    ForEachEntities(players, (entity) => {
        OUTPUT_TelemetryCreateEvent(entity, "NoWallGame", false)
        OUTPUT_TelemetryAddBool("IsWinner", true)
        OUTPUT_TelemetryRecordEvent()
    })
}

//------------------------------------------------------
// Achievement for resource generation and checking
//------------------------------------------------------

const customResourceSettingData = {
    resources: [
        {
            resourceName: "wood",
            startingName: "resources_starting_wood"
        },
        {
            resourceName: "stone",
            startingName: "resources_starting_stone"
        },
        {
            resourceName: "iron",
            startingName: "resources_starting_iron"
        },
        {
            resourceName: "coal",
            startingName: "resources_starting_coal"
        },
        {
            resourceName: "diamond",
            startingName: "resources_starting_diamond"
        },
        {
            resourceName: "redstone",
            startingName: "resources_starting_redstone"
        }
    ]
}

//Store the value of this custom setting as a global var for future reference
SNIPPET_GameSettingInitialized(customSettingVersusAchievementVal.unlockAll, (value) => {
    if (QUERY_GameDifficulty() === "Custom") {
        OUTPUT_SetGlobalVariable(CustomSettingGV(customSettingVersusAchievementVal.unlockAll), value.value)
    }
})

//Go through the list of resources above and create global variables to check the status of later
if (QUERY_GameDifficulty() === "Custom") {
    for (let ii = 0; ii < customResourceSettingData.resources.length; ii++) {
        const resource = customResourceSettingData.resources[ii]
        if (resource.startingName) {
            SNIPPET_GameSettingInitialized(resource.startingName, (value) => {
                OUTPUT_SetGlobalVariable(CustomSettingGV(resource.startingName), value.value)
            })
        }
    }
}

//Function to test whether the settings we have make it a high resource game
const isHighResourceGame = () => {
    //Set a value to 0 to start, later we will check against it
    let gvNum = 0

    //Iterate through the list of resources so we can query their global variable setting
    for (let ii = 0; ii < customResourceSettingData.resources.length; ii++) {
        const resource = customResourceSettingData.resources[ii]
        if (resource.startingName) {
            const gvValue = QUERY_GetGlobalVariable(CustomSettingGV(resource.startingName))
            //If they meet the condition increment the value by 1 so we can assess in final count
            if (gvValue > 9998) {
                gvNum++
            }
        }
    }

    //Check that this variable is set to 1
    const techUnlocked = QUERY_GetGlobalVariable(CustomSettingGV(customSettingVersusAchievementVal.unlockAll))

    //Have more than two of these settings been maxed AND tech unlocked? If so its valid!
    if (gvNum > 1 && techUnlocked > 0) {
        return true
    } else {
        return false
    }
}

//Telemetry function
const TelemetrySendHighResourceGame = (team) => {
    const players = FILTER_ByTeam(GetAllPlayers(), team)
    ForEachEntities(players, (entity) => {
        OUTPUT_TelemetryCreateEvent(entity, "HighResourceGame", false)
        OUTPUT_TelemetryAddBool("IsWinner", true)
        OUTPUT_TelemetryRecordEvent()
    })
}
