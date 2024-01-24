const legendsCommunityUpdateWorldGenDefinition = {
    base: campaignWorldGenDefinition, // Use default campaign world gen definition
    modify: (filterManager) => {
        filterManager.AppendFilter(["poi_legend", "dragon_red"], 1)
        filterManager.AppendFilter(["spider_alliance"], 1)
        filterManager.AppendFilter(["poi_mount_07"], 1)
        filterManager.AppendFilter(["poi_tower_05"], RandomNumWorldGen(2, 5))
    }
};

SNIPPET_InheritsFromGameMode('lcu_campaign', () => {
    SetWorldGenDefinition(legendsCommunityUpdateWorldGenDefinition);
});