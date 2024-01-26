const legendsCommunityUpdateWorldGenDefinition = {
    base: campaignWorldGenDefinition, // Use default campaign world gen definition
    modify: (filterManager) => {
        filterManager.AddFilterAfterTarget(["poi_deck"], ["poi_legend", "killer_rabbit"], 1)
        filterManager.AddFilterAfterTarget(["poi_legend", "killer_rabbit"], ["poi_legend", "dragon_red"], 1)
        filterManager.AddFilterAfterTarget(["mob_alliance_factions"], ["spider_alliance"], 1)
        filterManager.AddFilterAfterTarget(["spider_alliance"], ["slime_alliance"], 1)
        filterManager.AddFilterAfterTarget(["slime_alliance"], ["silverfish_alliance"], 1)
        filterManager.AddFilterAfterTarget(["poi_mount_06"], ["poi_mount_07"], 1)
        filterManager.AddFilterAfterTarget(["poi_mount_07"], ["poi_mount_08"], 1)
        filterManager.AddFilterAfterTarget(["poi_mount_08"], ["poi_mount_09"], 1)
        filterManager.AddFilterAfterTarget(["poi_tower_04"], ["poi_tower_05"], RandomNumWorldGen(1, 3))
        filterManager.AddFilterAfterTarget(["poi_tower_05"], ["poi_tower_06"], RandomNumWorldGen(1, 3))
    }   
};

SNIPPET_InheritsFromGameMode('lcu_campaign', () => {
    SetWorldGenDefinition(legendsCommunityUpdateWorldGenDefinition);
});