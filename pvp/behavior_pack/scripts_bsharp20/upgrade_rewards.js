const upgradeRewardsPvp = [
    {
        tag: "unlock_gather_uncommon_pvp",
        resource: "iron",
        reward: 25
    },
    {
        tag: "unlock_gather_redstone_pvp",
        resource: "redstone",
        reward: 25
    },
    {
        tag: "unlock_gather_rare_pvp",
        resource: "diamond",
        reward: 25
    },
    {
        tag: "unlock_gather_coal_pvp",
        resource: "coal",
        reward: 25
    }
]

SNIPPET_Bootstrap("", () => {
    for (const team in PLAYER_TEAMS) {
        const teamData = PLAYER_TEAMS[team]
        LISTENFOR_VillageGenerated({
            snippet: "vg_upgrade_rewards_pvp",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: teamData.faction
        })
    }
})

SNIPPET_VillageGenerated("vg_upgrade_rewards_pvp", (villageId, _payload) => {
    for (const upgradeData of upgradeRewardsPvp) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_upgrade_pvp",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: [upgradeData.tag],
            payloadString: upgradeData.resource,
            payloadInt: upgradeData.reward
        })
    }
})

SNIPPET_BuildingComplete("bc_upgrade_pvp", (buildingCompleteEG, payload) => {
    const teamName = QUERY_GetTeamName(buildingCompleteEG)
    OUTPUT_AddOrRemoveTeamResource(teamName, payload.string, payload.int, false)
    Once()
})
