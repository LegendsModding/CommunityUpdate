// This enables some new functionality on Large Rare Resource Improvements to give the player a passive "drip" of resources every X seconds
// When a player builds these improvements, they grant a resource, the number of those resources present is used to scale the amount of the drip so they stack
// E.g. If you have 1 large coal upgrade, you get +1 coal every 4 seconds, if you have 2, you get +2 coal every 4 seconds, etc.
const resourceDripWoF = {
    resourceProperties: {
        gatherCoal: {
            resourceUnlock: "gather_coal_passive", // the resource to look for before activating this functionality. These are granted by the WoF improvements.
            resource: "coal", // the resource to grant
            reward: 1 // the amount to award every timerIntervalSeconds. E.g. 1 resource every 4 seconds.
        },
        gatherDiamond: {
            resourceUnlock: "gather_rare_resource_passive",
            resource: "diamond",
            reward: 1
        },
        gatherIron: {
            resourceUnlock: "gather_uncommon_resource_passive",
            resource: "iron",
            reward: 2
        },
        gatherRestone: {
            resourceUnlock: "gather_redstone_passive",
            resource: "redstone",
            rewarda: 1
        }
    },
    snippetName: "t_resource_gather_passive_drip", // the name of the snippet for timer
    timerName: "timer_resource_gather_passive_drip", // the name of the timer itself
    timerIntervalSeconds: 4, // the duration/interval of the timer
    timerThresholdSeconds: 0 // the threshold, e.g. when the timer activates??!
}

// Adding this timer that fires on any mode. Eventually we may want to add these improvements to PVP
SNIPPET_InheritsFromGameMode("pvp", () => {
    LISTENFOR_Timer({
        snippet: resourceDripWoF.snippetName,
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        threshold: resourceDripWoF.timerThresholdSeconds,
        timerName: resourceDripWoF.timerName
    })
    OUTPUT_SetNamedTimer(resourceDripWoF.timerName, resourceDripWoF.timerIntervalSeconds)
})

// This timer fires off every timerIntervalSeconds and re-activates itself so it continuously fires
// It loops through the properties above and checks if an unlock for each property is > 0
// If it is, it will multiply the # of unlocks by the data reward. E.g. If you have 1 large coal upgrade, you get +1 coal every 4 seconds, if you have 2, you get +2 coal every 4 seconds, etc.
SNIPPET_Timer(resourceDripWoF.snippetName, () => {
    for (const resource in resourceDripWoF.resourceProperties) {
        const data = resourceDripWoF.resourceProperties[resource]
        const resourceUnlockValue = QUERY_GetTeamResource(TEAM_BLUE, data.resourceUnlock)
        if (resourceUnlockValue > 0) {
            const resourceValue = resourceUnlockValue * data.reward
            OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, data.resource, resourceValue, false)
        }
    }
    OUTPUT_SetNamedTimer(resourceDripWoF.timerName, resourceDripWoF.timerIntervalSeconds)
})
