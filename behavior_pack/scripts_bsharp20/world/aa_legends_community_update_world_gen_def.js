// An example definition
const legendsCommunityUpdateWorldGenDefinition = {
    base: campaignWorldGenDefinition, // if base is not null, then inherit from that definition
};

SNIPPET_InheritsFromGameMode('legends_community_update', () => {
    SetWorldGenDefinition(campaignWorldGenDefinition);
});