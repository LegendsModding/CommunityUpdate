SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        // Outposts generated
        LISTENFOR_VillageFinishedBuilding({
            snippet: "vfb_outpost_base_override_loot",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })
    }
})

SNIPPET_VillageFinishedBuilding("vfb_outpost_base_override_loot", (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    if (!IsOutpost(size)) {
        return
    }

    // Set loot overrides for any barracks and units that are in the outpost
    const entities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const barracks = FILTER_ByTagFilter(entities, [TAG_BARRACKS], [])
    const units = FILTER_ByTagFilter(entities, TAGS_PIGLIN_MOB, [])

    OUTPUT_SetSpawnerAddLootOverride(barracks, LOOT_OVERRIDE.PIGLIN_OUTPOST)
    OUTPUT_SetLootTableOverride(units, LOOT_OVERRIDE.PIGLIN_OUTPOST)

    // if this is an attack horde outpost, then we have to override the loot for piglins spawning out of barrel projectiles too
    const faction = QUERY_GetFactionNameFromVillageID(villageId)
    if (faction === FACTION_NAME_ATTACK) {
        LISTENFOR_EntitySpawned({
            snippet: "es_attack_horde_tower_thrower_units",
            ownerVillageId: villageId,
            villageId: villageId,
            factionName: faction,
            includeTags: TAGS_PIGLIN_PROJECTILE_SPAWN
        })
    }
})

SNIPPET_EntitySpawned("es_attack_horde_tower_thrower_units", (entity) => {
    OUTPUT_SetLootTableOverride(entity, LOOT_OVERRIDE.PIGLIN_OUTPOST)
})
