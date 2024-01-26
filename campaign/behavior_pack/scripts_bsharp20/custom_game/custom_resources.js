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
        },
        {
            resourceName: "gold",
            startingName: "resources_starting_gold",
            maxName: "resources_max_gold"
        },
        {
            resourceName: "poi_tower_01_resource",
            startingName: "resources_starting_tower_core_blast"
        },
        {
            resourceName: "poi_tower_02_resource",
            startingName: "resources_starting_tower_core_frost"
        },
        {
            resourceName: "poi_tower_04_resource",
            startingName: "resources_starting_tower_core_stun"
        },
        {
            resourceName: "poi_tower_05_resource",
            startingName: "resources_starting_tower_core_burn"
        },
        {
            resourceName: "poi_tower_06_resource",
            startingName: "resources_starting_tower_core_giant"
        }
    ]
}

const _UpdateResourceCap = (team, resource, cap) => {
    // This assumes the resource is a team resource, which is currently true for all resources
    OUTPUT_SetTeamResourceCap(team, resource.resourceName, cap)
    // If the custom setting ever changes mid-game, we use this saved GV to compare the new value with the previous value
    OUTPUT_SetGlobalVariable(CustomSettingGV(resource.maxName), cap)
}

for (let ii = 0; ii < customResourcesData.resources.length; ii++) {
    const resource = customResourcesData.resources[ii]
    if (resource.startingName) {
        SNIPPET_GameSettingInitialized(resource.startingName, (value) => {
            if (QUERY_GameDifficulty() === "Custom") {
                EditStartingResource(resource.resourceName, value.value)
            }
        })
    }

    if (resource.maxName) {
        SNIPPET_GameSettingInitialized(resource.maxName, (value) => {
            if (QUERY_GameDifficulty() === "Custom") {
                const currentSetting = value.value
                if (!QUERY_IsGlobalVariableSet(CustomSettingGV(resource.maxName))) {
                    _UpdateResourceCap(TEAM_BLUE, resource, currentSetting)
                } else {
                    const previousSetting = QUERY_GetGlobalVariable(CustomSettingGV(resource.maxName))
                    if (previousSetting !== currentSetting) {
                        // Our max resources might be affected by things like upgrade structures, so we only want to modify the current resource cap based on the difference between the current settings and the previous setting
                        // This also assumes the resource is a team resource, which is currently true for all resources
                        const previousMax = QUERY_GetTeamResourceMax(TEAM_BLUE, resource.resourceName)
                        _UpdateResourceCap(TEAM_BLUE, resource, previousMax + currentSetting - previousSetting)
                    }
                }
            }
        })
    }
}
