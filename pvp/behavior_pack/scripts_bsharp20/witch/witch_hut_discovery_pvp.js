SNIPPET_InheritsFromGameMode("conquest", () => {
    LISTENFOR_VillageGenerated({
        snippet: "vg_witch_hut_discovery_setup",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: "faction.witch.pvp"
    })
})

SNIPPET_VillageGenerated("vg_witch_hut_discovery_setup", (villageId, _payload) => {
    const triggerVolume = OUTPUT_CreateVillageTriggerVolume(villageId, 0, ["player"], [], "any_team")

    for (const team in PLAYER_TEAMS) {
        OUTPUT_MapSetTeamKeyValue(GetVillageEntityFromID(villageId), team, MAP_KEY.VISIBILITY, MAP_VISIBILITY.HIDDEN)
        LISTENFOR_SpatialPartitionEntered({
            snippet: "spe_witch_hut_discovered",
            ownerVillageId: villageId,
            triggerEntity: triggerVolume,
            payloadString: team
        })
    }
})

SNIPPET_SpatialPartitionEntered("spe_witch_hut_discovered", (_triggerEntity, enteringEntity, payload) => {
    if (payload.string === QUERY_GetTeamName(enteringEntity)) {
        Once()
        OUTPUT_MapSetTeamKeyValue(GetVillageEntityFromID(payload.ownerVillageId), payload.string, MAP_KEY.VISIBILITY, MAP_VISIBILITY.REVEALED)
    }
})