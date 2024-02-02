//////////////////////////////////////////////////////
// Miclee Campaign Worldgen 0.1 - IT'S MODDING TIME //
//////////////////////////////////////////////////////

//Every single placement is altered other than center.
const legendsCommunityUpdateWorldGenDefinition = {
    base: null, //base definition is null, which means this definition will not inherit any filters. It is very likely you will need to make such filters in modify()
    modify: (filterManager) => {
        // Center first
        filterManager.AppendFilter(["center", "campaign"], 1)
        
        // Magnet for WoF
        filterManager.AppendFilter(["wellOfFate_NE_magnet"], 1)

        // Magnet for end portal
        filterManager.AppendFilter(["ruinedEndPortal_SW_magnet"], 1)
        
        // Place WoF far from center
        filterManager.AppendFilter(["wellOfFate", "campaign"], 1)
        
        // Magnet for Fateful Land village
        filterManager.AppendFilter(["village_west_magnet"], 1)

        // Place ruined portal(new spawn)
        filterManager.AppendFilter(["ruined_end_portal"], 1)

        // List the villages, place fatelands
        const forestVillage = ["culture_required", "forest"]
        const frostlandsVillage = ["culture_required", "frostlands"]
        const drylandsVillage = ["culture_required", "drylands"]
        const wetlandsVillage = ["culture_required", "wetlands"]
        const grasslandsVillage = ["culture_required", "grasslands"]
        const brokenlandsVillage = ["culture_required", "brokenlands"]
        const fatefulLandVillage = ["culture_required", "fateful_land"]
        const jungleVillage = ["culture_required", "jungle"]
        const mountainVillage = ["culture_required", "mountain"]
        const villageFilters = [forestVillage, frostlandsVillage, drylandsVillage, wetlandsVillage, grasslandsVillage, brokenlandsVillage, jungleVillage, mountainVillage, fatefulLandVillage]
        // Place fateful village first
        filterManager.AppendFilter(villageFilters.pop(), 1)
        // Shuffle the remaining villages
        ShuffleArrayGroup(villageFilters, "world_gen")
        
        // Place horde clusters
        filterManager.AppendFilter(["cluster", "campaign"], 1)
        
        // Place horde sub clusters
        filterManager.AppendFilter(["sub-cluster", "campaign"], GetSubclusterCount())
        
        // Now place the rest of the villages
        villageFilters.forEach((villageFilter) => {
            filterManager.AppendFilter(villageFilter, 1)
        })

        // Add one of each biome(excluding fatelands)
        // Declare each placement
        const forest1 = ["biome", "campaign", "forest1"]
        const frostlands1 = ["biome", "campaign", "frostlands1"]
        const drylands1 = ["biome", "campaign", "drylands1"]
        const wetlands1 = ["biome", "campaign", "wetlands1"]
        const grasslands1 = ["biome", "campaign", "grasslands1"]
        const brokenlands1 = ["biome", "campaign", "brokenlands1"]
        const jungle1 = ["biome", "campaign", "jungle1"]
        const mountain1 = ["biome", "campaign", "mountain1"]
        // Put them in an array
        const biomes = [frostlands1, drylands1, wetlands1, grasslands1, brokenlands1, jungle1, mountain1, forest1]

        // Shuffle
        ShuffleArrayGroup(biomes, "world_gen")

        // Place the biomes
        biomes.forEach((biome) => {
            filterManager.AppendFilter(biome, 1)
        })

        // Add extra biomes of each type that don't have a horde cluster.
        // Declare each placement
        const forest2 = ["biome", "campaign", "forest2"]
        const drylands2 = ["biome", "campaign", "drylands2"]
        const grasslands2 = ["biome", "campaign", "grasslands2"]
        const jungle2 = ["biome", "campaign", "jungle2"]


        // Put them in an array.
        const extraBiomes = [drylands2, grasslands2, jungle2, forest2]
        
        // Place the extra biomes
        extraBiomes.forEach((extraBiome) => {
            filterManager.AppendFilter(extraBiome, 1)
        })

        // Lets do some fun filling with generic biomes. :D
        // idk why I'm doing this, seemed fun. Great use of time, right?
        // Declare the fills to be put into an array
        const genericFill1 = ["genericFill1"]
        const genericFill2 = ["genericFill2"]
        const genericFill3 = ["genericFill3"]
        const genericFill4 = ["genericFill4"]
        const genericFill5 = ["genericFill5"]
        const genericFill6 = ["genericFill6"]
        const genericFill7 = ["genericFill7"]
        const genericFill8 = ["genericFill8"]

        // Put the generic fills into an array.
        const genericFills = [genericFill1, genericFill2, genericFill3, genericFill4, genericFill5, genericFill6, genericFill7, genericFill8]

        // Create an empty array to hold the final placements.
        let finalPlacements = []
        
        // Fill the empty array
        for (let i = 0; i < 16; i++) {
            const randomIndex = RandomIntFromIntervalGroup(0, genericFills.length, "world_gen");
            finalPlacements.push(genericFills[randomIndex]);
        }

        // They already should be randomized so I don't really need to shuffle them, but am anyways.
        ShuffleArrayGroup(finalPlacements, "world_gen")

        // Append the generic fill filters! Huzzah
        finalPlacements.forEach((genericFill) => {
            filterManager.AppendFilter(genericFill, 1)
        })

        // Village base slots
        filterManager.AppendFilter(["villageBaseSlot"], 1)

        // Act 1 / onboarding outposts - will be removed down the line in favour of new onboarding process.
        filterManager.AppendFilter(["act1CampsSlot"], 1)

        // Mob alliances
        filterManager.AppendFilter(["mob_alliance_factions"], 1)

        // Mob alliance base slots
        filterManager.AppendFilter(["mobAllianceBaseSlot"], 1)

        // Hordey horde
        filterManager.AppendFilter(["faction_required"], 1)
        
        // Place firsts
        filterManager.AppendFilter(["poi_deck"], 1)

        // Yeah I moved them to poi deck (shrugs)
        // Mount PoIs
        /*filterManager.AppendFilter(["poi_mount_01"], 1)
        filterManager.AppendFilter(["poi_mount_03"], 1)
        filterManager.AppendFilter(["poi_mount_04"], 1)
        filterManager.AppendFilter(["poi_mount_06"], 1)
        filterManager.AppendFilter(["poi_mount_07"], 1)
        filterManager.AppendFilter(["poi_mount_08"], 1)
        filterManager.AppendFilter(["poi_mount_09"], 1)
        */
        // Legend PoIs
        //filterManager.AppendFilter(["poi_legend", "dragon_red"], 1)
        //filterManager.AppendFilter(["poi_legend", "killer_rabbit"], 1)
        // 
        // Power tower PoIs
        //filterManager.AppendFilter(["poi_tower_01"], 1)
        // filterManager.AppendFilter(["poi_tower_02"], 1)
        //filterManager.AppendFilter(["poi_tower_04"], 1)
        //filterManager.AppendFilter(["poi_tower_05"], 1)
        //filterManager.AppendFilter(["poi_tower_06"], 1)
        
        // Invasion base slots
        filterManager.AppendFilter(["invasionBaseSlot"], 1)
    }
};

SNIPPET_InheritsFromGameMode('lcu_campaign', () => {
    SetWorldGenDefinition(legendsCommunityUpdateWorldGenDefinition);
});

