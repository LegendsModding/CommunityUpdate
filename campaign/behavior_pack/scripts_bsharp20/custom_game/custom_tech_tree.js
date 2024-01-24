const customTechTreeData = {
    gv: {
        unlockAll: "gv_custom_setting_unlock_all",
        resourcesDiscovered: "gv_custom_setting_resources_discovered"
    },
    unlockAll: {
        settingName: "tools_tech_tree_unlock_all",
        unlocks: ["fountain", "unlock_remaining_wof_upgrades", "unlock_iron_tech", "unlock_advanced_wof_upgrades1", "gather_uncommon_resource", "gather_redstone", "gather_rare_resource", "clear_nether_resource", "gather_coal", "unlock_spawner_golemcavalry", "unlock_spawner_support", "unlock_spawner_zombie", "unlock_spawner_skeleton", "unlock_spawner_spider", "unlock_spawner_creeper", "unlock_poi_tower_upgrade", "unlock_poi_golem_upgrade", "unlock_cauldron", "unlock_battle_view_golemcavalry", "unlock_battle_view_support", "unlock_cauldron"],
        tempResources: ["wood", "stone", "iron", "coal", "redstone", "diamond", "emerald", "xp_common", "gold", "poi_tower_01_resource", "poi_tower_02_resource", "poi_tower_04_resource", "poi_tower_05_resource"]
    },
    techTree: [
        {
            settingName: "tools_tech_tree_wall",
            resourceName: "custom_tech_tree_wall"
        },
        {
            settingName: "tools_tech_tree_stair",
            resourceName: "custom_tech_tree_stair"
        },
        {
            settingName: "tools_tech_tree_gate",
            resourceName: "custom_tech_tree_gate"
        },
        {
            settingName: "tools_tech_tree_arrow_tower",
            resourceName: "custom_tech_tree_arrow_tower"
        },
        {
            settingName: "tools_tech_tree_carpenter",
            resourceName: "custom_tech_tree_carpenter"
        },
        {
            settingName: "tools_tech_tree_mason",
            resourceName: "custom_tech_tree_mason"
        },
        {
            settingName: "tools_tech_tree_scatter_tower",
            resourceName: "custom_tech_tree_scatter_tower"
        },
        {
            settingName: "tools_tech_tree_protector_tower",
            resourceName: "custom_tech_tree_protector_tower"
        },
        {
            settingName: "tools_tech_tree_freeze_trap",
            resourceName: "custom_tech_tree_freeze_trap"
        },
        {
            settingName: "tools_tech_tree_redstone_launcher",
            resourceName: "custom_tech_tree_redstone_launcher"
        },
        {
            settingName: "tools_tech_tree_kaboomery",
            resourceName: "custom_tech_tree_kaboomery"
        },
        {
            settingName: "tools_tech_tree_battle_drum",
            resourceName: "custom_tech_tree_battle_drum"
        },
        {
            settingName: "tools_tech_tree_spyglass",
            resourceName: "custom_tech_tree_spyglass"
        },
        {
            settingName: "tools_tech_tree_cauldron",
            resourceName: "custom_tech_tree_cauldron"
        },
        {
            settingName: "tools_tech_tree_blast_tower",
            resourceName: "custom_tech_tree_blast_tower"
        },
        {
            settingName: "tools_tech_tree_frost_tower",
            resourceName: "custom_tech_tree_frost_tower"
        },
        {
            settingName: "tools_tech_tree_stun_tower",
            resourceName: "custom_tech_tree_stun_tower"
        },
        {
            settingName: "tools_tech_tree_burn_tower",
            resourceName: "custom_tech_tree_burn_tower"
        },
        {
            settingName: "tools_tech_tree_spawner_wood_golem",
            resourceName: "custom_tech_tree_spawner_wood_golem"
        },
        {
            settingName: "tools_tech_tree_spawner_stone_golem",
            resourceName: "custom_tech_tree_spawner_stone_golem"
        },
        {
            settingName: "tools_tech_tree_spawner_grindstone_golem",
            resourceName: "custom_tech_tree_spawner_grindstone_golem"
        },
        {
            settingName: "tools_tech_tree_spawner_mossy_golem",
            resourceName: "custom_tech_tree_spawner_mossy_golem"
        },
        {
            settingName: "tools_tech_tree_spawner_zombie",
            resourceName: "custom_tech_tree_spawner_zombie"
        },
        {
            settingName: "tools_tech_tree_spawner_skeleton",
            resourceName: "custom_tech_tree_spawner_skeleton"
        },
        {
            settingName: "tools_tech_tree_spawner_creeper",
            resourceName: "custom_tech_tree_spawner_creeper"
        },
        {
            settingName: "tools_tech_tree_spawner_spider",
            resourceName: "custom_tech_tree_spawner_spider"
        },
        {
            settingName: "tools_tech_tree_improvement_poi_tower",
            resourceName: "custom_tech_tree_improvement_poi_tower"
        },
        {
            settingName: "tools_tech_tree_improvement_first_golem",
            resourceName: "custom_tech_tree_improvement_first_golem"
        },
        {
            settingName: "tools_tech_tree_improvement_gather_iron_small",
            resourceName: "custom_tech_tree_improvement_gather_iron"
        },
        {
            settingName: "tools_tech_tree_improvement_gather_coal_small",
            resourceName: "custom_tech_tree_improvement_gather_coal"
        },
        {
            settingName: "tools_tech_tree_improvement_gather_diamond_small",
            resourceName: "custom_tech_tree_improvement_gather_diamond"
        },
        {
            settingName: "tools_tech_tree_improvement_gather_redstone_small",
            resourceName: "custom_tech_tree_improvement_gather_redstone"
        },
        {
            settingName: "tools_tech_tree_improvement_allay_storage_small",
            resourceName: "custom_tech_tree_improvement_allay_storage"
        },
        {
            settingName: "tools_tech_tree_improvement_abundant_allay",
            resourceName: "custom_tech_tree_improvement_abundant_allay"
        },
        {
            settingName: "tools_tech_tree_improvement_spawn_mobs_large",
            resourceName: "custom_tech_tree_improvement_spawn_mobs_large"
        },
        {
            settingName: "tools_tech_tree_improvement_increase_rally",
            resourceName: "custom_tech_tree_improvement_increase_rally"
        },
        // Campaign-only unlocks
        {
            settingName: "tools_tech_tree_wellhouse",
            resourceName: "custom_tech_tree_wellhouse"
        },
        {
            settingName: "tools_tech_tree_improvement_clear_netherrack",
            resourceName: "custom_tech_tree_improvement_clear_netherrack"
        },
        {
            settingName: "tools_tech_tree_improvement_spawn_mobs_medium",
            resourceName: "custom_tech_tree_improvement_spawn_mobs_medium"
        },
        {
            settingName: "tools_tech_tree_improvement_shared_village_chest",
            resourceName: "custom_tech_tree_improvement_shared_village_chest"
        },
        {
            settingName: "tools_tech_tree_improvement_carpentry_expert",
            resourceName: "custom_tech_tree_improvement_carpentry_expert"
        },
        {
            settingName: "tools_tech_tree_improvement_mason_expert",
            resourceName: "custom_tech_tree_improvement_mason_expert"
        }
    ]
}

const _UnlockAll = (prevSetting, curSetting) => {
    if (prevSetting === curSetting) {
        return
    }

    for (const unlock of customTechTreeData.unlockAll.unlocks) {
        OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, unlock, curSetting ? 1 : -1, false)
    }

    if (curSetting && !QUERY_IsGlobalVariableSet(customTechTreeData.gv.resourcesDiscovered)) {
        for (const resource of customTechTreeData.unlockAll.tempResources) {
            // This makes it so all the gatherable resources get flagged as discovered by the game. There's no way to undo this if someone turns off this setting later, but all it does is affect recipe book visibility and not gameplay.
            OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, resource, 1, true)
            OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, resource, -1, false)
        }
        OUTPUT_SetGlobalVariable(customTechTreeData.gv.resourcesDiscovered, 1)
    }

    OUTPUT_SetGlobalVariable(customTechTreeData.gv.unlockAll, curSetting)
}

SNIPPET_GameSettingInitialized(customTechTreeData.unlockAll.settingName, (value) => {
    if (QUERY_GameDifficulty() === "Custom") {
        if (!QUERY_IsGlobalVariableSet(customTechTreeData.gv.unlockAll)) {
            _UnlockAll(0, value.value)
        } else {
            _UnlockAll(QUERY_GetGlobalVariable(customTechTreeData.gv.unlockAll), value.value)
        }
    }
})

for (let ii = 0; ii < customTechTreeData.techTree.length; ii++) {
    const tech = customTechTreeData.techTree[ii]
    SNIPPET_GameSettingInitialized(tech.settingName, (value) => {
        if (QUERY_GameDifficulty() === "Custom") {
            const resourceAmount = QUERY_GetTeamResource(TEAM_BLUE, tech.resourceName)
            if (value.value && resourceAmount === 0) {
                OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, tech.resourceName, 1, false)
            } else if (!value.value && resourceAmount > 0) {
                OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, tech.resourceName, -resourceAmount, false)
            }
        }
    })
}
