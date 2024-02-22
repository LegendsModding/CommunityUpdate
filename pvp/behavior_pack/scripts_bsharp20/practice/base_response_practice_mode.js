SNIPPET_InheritsFromGameMode("conquest_practice", () => {
    LISTENFOR_VillageGenerated({
        snippet: "vg_practice_set_up_ai",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        factionName: PVP_HEADQUARTERS_RED
    })
})

SNIPPET_VillageGenerated("vg_practice_set_up_ai", (villageId, _payload) => {
    const baseAi = SpawnEntitiesAt(GetVillageEntityFromID(villageId), "badger:ai_pvp_practice_base", 1, TEAM_RED, villageId)
    OUTPUT_ControlGroupFollowAI(baseAi, baseAi)

    LISTENFOR_BuildableSpawnerBatchSpawned({
        snippet: "bsbs_add_to_ai_group",
        ownerVillageId: villageId,
        villageId: villageId
    })
})

SNIPPET_BuildableSpawnerBatchSpawned("bsbs_add_to_ai_group", (_buildableSpawner, spawnedEntities, payload) => {
    const controlGroupEntity = GetEntitiesWithTagsAndVillage(["pvpPracticeAiCtrl"], payload.ownerVillageId)
    OUTPUT_AssignToControlGroup(spawnedEntities, controlGroupEntity)
})
