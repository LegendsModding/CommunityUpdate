const customTechTreeData = {
    gv: {
        unlockAll: "gv_custom_setting_unlock_all",
        resourcesDiscovered: "gv_custom_setting_resources_discovered"
    },
    unlockAll: {
        settingName: "tools_tech_tree_unlock_all",
        unlocks: ["unlock_iron_tech", "unlock_redstone_tech", "unlock_diamond_tech", "unlock_coal_tech", "unlock_prismarine_upgrades", "unlock_firsts_spawners", "unlock_host_towers", "unlock_battle_view_golemcavalry", "unlock_battle_view_support", "unlock_battle_view_creeper", "unlock_battle_view_skeleton", "unlock_battle_view_zombie", "unlock_battle_view_vindicator", "unlock_battle_view_fallen_warrior", "unlock_battle_view_carrier_golem", "unlock_battle_view_shield_golem", "unlock_battle_view_sniper"]
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
        // PVP-Only unlocks
        {
            settingName: "tools_tech_tree_spawner_warrior",
            resourceName: "custom_tech_tree_spawner_warrior"
        },
        {
            settingName: "tools_tech_tree_spawner_first_stone",
            resourceName: "custom_tech_tree_spawner_first_stone"
        },
        {
            settingName: "tools_tech_tree_spawner_first_diorite",
            resourceName: "custom_tech_tree_spawner_first_diorite"
        },
        {
            settingName: "tools_tech_tree_spawner_first_brick",
            resourceName: "custom_tech_tree_spawner_first_brick"
        },
        {
            settingName: "tools_tech_tree_spawner_first_oak",
            resourceName: "custom_tech_tree_spawner_first_oak"
        },
        {
            settingName: "tools_tech_tree_lapis_flag",
            resourceName: "custom_tech_tree_lapis_flag"
        },
        {
            settingName: "tools_tech_tree_improvement_hub",
            resourceName: "custom_tech_tree_improvement_hub"
        }
    ]
}

SNIPPET_GameSettingInitialized(customTechTreeData.unlockAll.settingName, (value) => {
    if (QUERY_GameDifficulty() === "Custom") {
        if (value.value) {
            for (const team in PLAYER_TEAMS) {
                for (const unlock of customTechTreeData.unlockAll.unlocks) {
                    OUTPUT_AddOrRemoveTeamResource(team, unlock, 1, true)
                }
            }
        }
    }
})

for (const tech of customTechTreeData.techTree) {
    SNIPPET_GameSettingInitialized(tech.settingName, (value) => {
        if (QUERY_GameDifficulty() === "Custom") {
            if (value.value) {
                for (const team in PLAYER_TEAMS) {
                    OUTPUT_AddOrRemoveTeamResource(team, tech.resourceName, 1, false)
                }
            }
        }
    })
}
