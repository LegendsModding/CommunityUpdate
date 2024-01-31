const legendsCommunityUpdateWorldGenDefinition = {
    base: null, //base definition is null, which means this definition will not inherit any filters. It is very likely you will need to make such filters in modify()
    modify: (filterManager) => {
        filterManager.AppendFilter(["center", "campaign"], 1)
        filterManager.AppendFilter(["wellOfFate", "campaign"], 1)
        filterManager.AppendFilter(["village_west_magnet"], 1)

        // Pick one of the five villages to place first (it will place to the west of the WoF)
        const forestVillage = ["culture_required", "forest"]
        const frostlandsVillage = ["culture_required", "frostlands"]
        const drylandsVillage = ["culture_required", "drylands"]
        const wetlandsVillage = ["culture_required", "wetlands"]
        const grasslandsVillage = ["culture_required", "grasslands"]
        const brokenlandsVillage = ["culture_required", "brokenlands"]
        const fatefulLandVillage = ["culture_required", "fateful_land"]
        const jungleVillage = ["culture_required", "jungle"]
        const mountainVillage = ["culture_required", "mountain"]
        const villageFilters = [forestVillage, frostlandsVillage, drylandsVillage, wetlandsVillage, grasslandsVillage, brokenlandsVillage, fatefulLandVillage, jungleVillage, mountainVillage]
        ShuffleArrayGroup(villageFilters, "world_gen")
        filterManager.AppendFilter(villageFilters.pop(), 1)

        filterManager.AppendFilter(["cluster", "campaign"], 1)
        filterManager.AppendFilter(["sub-cluster", "campaign"], GetSubclusterCount())

        // Now place the rest of the villages
        villageFilters.forEach((villageFilter) => {
            filterManager.AppendFilter(villageFilter, 1)
        })

        filterManager.AppendFilter(["biome", "campaign", "set1"], 1)
        filterManager.AppendFilter(["biome", "skeleton_alliance"], 1)
        filterManager.AppendFilter(["biome", "campaign", "set2"], 1)
        filterManager.AppendFilter(["villageBaseSlot"], 1)
        filterManager.AppendFilter(["act1CampsSlot"], 1)
        filterManager.AppendFilter(["mob_alliance_factions"], 1)
        filterManager.AppendFilter(["mobAllianceBaseSlot"], 1)
        filterManager.AppendFilter(["faction_required"], 1)
        filterManager.AppendFilter(["genericFill"], 7)
        filterManager.AppendFilter(["poi_deck"], 1)
        filterManager.AppendFilter(["poi_mount_01"], 1)
        filterManager.AppendFilter(["poi_mount_03"], 1)
        filterManager.AppendFilter(["poi_mount_04"], 1)
        filterManager.AppendFilter(["poi_mount_06"], 1)
        filterManager.AppendFilter(["poi_mount_07"], 1)
        filterManager.AppendFilter(["poi_mount_08"], 1)
        filterManager.AppendFilter(["poi_mount_09"], 1)
        filterManager.AppendFilter(["poi_legend", "dragon_red"], 1)
        filterManager.AppendFilter(["poi_legend", "killer_rabbit"], 1)
        filterManager.AppendFilter(["poi_tower_01"], 1)
        filterManager.AppendFilter(["poi_tower_02"], 1)
        filterManager.AppendFilter(["poi_tower_04"], 1)
        filterManager.AppendFilter(["poi_tower_05"], 1)
        filterManager.AppendFilter(["poi_tower_06"], 1)
        filterManager.AppendFilter(["invasionBaseSlot"], 1)
     
    }
};

SNIPPET_InheritsFromGameMode('lcu_campaign', () => {
    SetWorldGenDefinition(legendsCommunityUpdateWorldGenDefinition);
});

