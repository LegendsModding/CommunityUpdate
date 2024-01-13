const legendsCommunityUpdateWorldGenDefinition = {
    base: campaignWorldGenDefinition, // Use default campaign world gen definition
};

SNIPPET_InheritsFromGameMode('lcu_campaign', () => {
    SetWorldGenDefinition(legendsCommunityUpdateWorldGenDefinition);
});