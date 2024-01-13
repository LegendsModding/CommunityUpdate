const hqClearAreaVal = {
    clearRadius: 50
}

// This script takes effect when we are autoplacing HQs in pvp
SNIPPET_RuleInitialized(GAME_RULE_NAMES.autoPlaceHqsOnTimer, (ruleValue) => {
    if (ruleValue.value) {
        LISTENFOR_VillageGenerated({
            snippet: "vg_hq_clear_area_of_piglins",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: PVP_HEADQUARTERS_BLUE
        })
        LISTENFOR_VillageGenerated({
            snippet: "vg_hq_clear_area_of_piglins",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: PVP_HEADQUARTERS_RED
        })
    }
})

SNIPPET_VillageGenerated("vg_hq_clear_area_of_piglins", (villageId) => {
    LISTENFOR_BuildingComplete({
        snippet: "bc_pvp_hq_ready_to_clear_area",
        ownerVillageId: villageId,
        includeTags: [TAG_PVP_HQ],
        villageId: villageId
    })
})

SNIPPET_BuildingComplete("bc_pvp_hq_ready_to_clear_area", (buildingEntity) => {
    const piglins = QUERY_GetEntitiesWithTags(["piglin"])
    const nearbyPigs = FILTER_ByDistance(piglins, buildingEntity, hqClearAreaVal.clearRadius)
    if (HasEntities(nearbyPigs)) {
        OUTPUT_DespawnEntities(nearbyPigs)
    }
    Once()
})
