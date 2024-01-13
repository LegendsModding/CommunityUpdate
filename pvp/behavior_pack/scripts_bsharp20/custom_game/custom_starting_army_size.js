const startingArmySizeData = {
    // These should match the actual values defined in data. We can't easily reference them from B#, so we're copying it.
    maxArmyCap: 100,
    increasePerUpgrade: 20,
    upgradeResource: "built_max_pop_cap"
}

SNIPPET_GameSettingInitialized("resources_starting_flames", (value) => {
    const setting = value.value
    LISTENFOR_PlayersReady({
        snippet: "pr_custom_starting_army_cap",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        payloadInt: setting
    })
})

SNIPPET_PlayersReady("pr_custom_starting_army_cap", (payload) => {
    const setting = payload.int
    OUTPUT_SetTicketCap(TICKET_SPAWN, setting)
    const structureLimit = Math.round((startingArmySizeData.maxArmyCap - setting) / startingArmySizeData.increasePerUpgrade)

    for (const team in PLAYER_TEAMS) {
        const currentUpgradeResources = QUERY_GetTeamResource(team, startingArmySizeData.upgradeResource)
        if (currentUpgradeResources !== structureLimit) {
            OUTPUT_AddOrRemoveTeamResource(team, startingArmySizeData.upgradeResource, structureLimit - currentUpgradeResources, false)
        }
    }
})
