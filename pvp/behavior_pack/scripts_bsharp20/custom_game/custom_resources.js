const customResourcesData = {
    resources: [
        {
            resourceName: "wood",
            startingName: "resources_starting_wood",
            maxName: "resources_max_wood"
        },
        {
            resourceName: "stone",
            startingName: "resources_starting_stone",
            maxName: "resources_max_stone"
        },
        {
            resourceName: "iron",
            startingName: "resources_starting_iron",
            maxName: "resources_max_iron"
        },
        {
            resourceName: "coal",
            startingName: "resources_starting_coal",
            maxName: "resources_max_coal"
        },
        {
            resourceName: "diamond",
            startingName: "resources_starting_diamond",
            maxName: "resources_max_diamond"
        },
        {
            resourceName: "redstone",
            startingName: "resources_starting_redstone",
            maxName: "resources_max_redstone"
        },
        {
            resourceName: "emerald",
            startingName: "resources_starting_lapis",
            maxName: "resources_max_lapis"
        },
        {
            resourceName: "xp_common",
            startingName: "resources_starting_prismarine",
            maxName: "resources_max_prismarine"
        }
    ]
}

for (let ii = 0; ii < customResourcesData.resources.length; ii++) {
    const resource = customResourcesData.resources[ii]
    if (resource.startingName) {
        SNIPPET_GameSettingInitialized(resource.startingName, (value) => {
            for (const team in PLAYER_TEAMS) {
                const currentAmount = QUERY_GetTeamResource(team, resource.resourceName)
                OUTPUT_AddOrRemoveTeamResource(team, resource.resourceName, -currentAmount, false)
                OUTPUT_AddOrRemoveTeamResource(team, resource.resourceName, value.value, true)
            }
        })
    }

    if (resource.maxName) {
        // The PVP version is simpler than the campaign version as we don't worry about supporting saved games
        SNIPPET_GameSettingInitialized(resource.maxName, (value) => {
            for (const team in PLAYER_TEAMS) {
                OUTPUT_SetTeamResourceCap(team, resource.resourceName, value.value)
            }
        })
    }
}
