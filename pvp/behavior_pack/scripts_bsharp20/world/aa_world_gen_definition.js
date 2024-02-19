const worldGenDefinitionSettings = {
    mountCount: {
        beetle: 1,
        bird: 1,
        frog: 1,
        tiger: 1
    },
    mirroredWorld: 0
}

SNIPPET_GameSettingInitialized("tools_mounts_beetle", (value) => {
    worldGenDefinitionSettings.mountCount.beetle = value.value
})

SNIPPET_GameSettingInitialized("tools_mounts_bird", (value) => {
    worldGenDefinitionSettings.mountCount.bird = value.value
})

SNIPPET_GameSettingInitialized("tools_mounts_frog", (value) => {
    worldGenDefinitionSettings.mountCount.frog = value.value
})

SNIPPET_GameSettingInitialized("tools_mounts_tiger", (value) => {
    worldGenDefinitionSettings.mountCount.tiger = value.value
})

SNIPPET_GameSettingInitialized("world_world_mirror", (value) => {
    worldGenDefinitionSettings.mirroredWorld = value.value
})

const pvpWorldGenDefinition = {
    base: null, //base definition is null, which means this definition will not inherit any filters. It is very likely you will need to make such filters in modify()
    modify: (filterManager) => {
        filterManager.AppendFilter(["center", "pvp"], 1)

        // ------------ HQs -------------
        if (worldGenDefinitionSettings.mirroredWorld === 0) {
            filterManager.AppendFilter(["pvp_team_blue_hq", "base_pvp"], 1)
            filterManager.AppendFilter(["pvp_team_red_hq", "base_pvp"], 1)
        } else {
            filterManager.AppendFilter(["pvp_team_blue_hq_mirrored", "base_pvp"], 1)
            filterManager.AppendFilter(["pvp_team_red_hq_mirrored", "base_pvp"], 1)
        }

        //By default the witch hut will spawn in the world, but custom setting options can disable this
        if (witchHutEnabled.defaultValue === 1) {
            if (worldGenDefinitionSettings.mirroredWorld === 0) {
                filterManager.AppendFilter(["pvp_witch_hut"], 1)
            } else {
                filterManager.AppendFilter(["pvp_witch_hut_mirrored"], 1)
            }
        }

        /// ------------ BIOMES -------------
        // Any filter defined here must also be in placements_pvp.json, but the reverse doesn't need to be true
        const forest = ["biome", "forest", "wood", "iron", "coal", "large"]
        const jungle = ["biome", "jungle", "wood", "mob_alliance_biome", "redstone", "large"]
        const wetlands = ["biome", "wetlands", "wood", "redstone", "large"]
        const grasslands = ["biome", "grasslands", "plains", "iron", "coal", "large"]
        const frostlands = ["biome", "frostlands", "plains", "diamond", "mob_alliance_biome", "large"]
        const drylands = ["biome", "drylands", "plains", "big", "iron", "large"]
        const brokenlands = ["biome", "brokenlands", "elevated", "mob_alliance_biome", "coal", "large"]
        const mountains = ["biome", "mountains", "elevated", "diamond", "large"]
        const fatelands = ["pvp", "biome", "fate", "elevated", "stone", "large"]
        const smallDrylands = ["biome", "drylands", "plains", "small", "iron"]
        const smallFrostlands = ["pvp", "biome", "frostlands", "plains", "mob_alliance_biome", "small", "diamond"]
        const smallWetlands = ["biome", "wetlands", "wood", "small", "redstone"]
        const smallForest = ["biome", "forest", "wood", "small", "iron", "coal"]
        const smallGrasslands = ["biome", "grasslands", "plains", "small", "iron", "coal"]
        const smallFatelands = ["pvp", "biome", "fate", "elevated", "stone", "small"]

        const woodBiomes = [forest, jungle, wetlands]
        const stoneBiomes = [fatelands]
        const ironBiomes = [grasslands, forest, drylands]
        const drylandsBiome = [drylands]
        const coalBiomes = [brokenlands, grasslands, forest]
        const brokenlandsBiome = [brokenlands]
        const grasslandsBiome = [grasslands]
        const forestBiome = [forest]
        const diamondBiomes = [frostlands, mountains]
        const frostlandsBiome = [frostlands]
        const mountainsBiome = [mountains]
        const redstoneBiomes = [jungle, wetlands]
        const jungleBiome = [jungle]
        const wetlandsBiome = [wetlands]
        const smallIronBiomes = [smallGrasslands, smallForest, smallDrylands]
        const smallCoalBiomes = [smallGrasslands, smallForest]
        const smallDiamondBiomes = [smallFrostlands]
        const smallRedstoneBiomes = [smallWetlands]
        const smallStoneBiomes = [smallFatelands]


        // Adds all biomes from an array, each with a random amount within the provided range
        // Max range is inclusive, unlike RandomIntFromInterval
        const addBiomes = (biomes, amountForEach) => {
            biomes.forEach((biome) => {
                const amount = Array.isArray(amountForEach) ? RandomIntFromIntervalGroup(amountForEach[0], amountForEach[1] + 1, "world_gen") : amountForEach
                if (amount > 0) {
                    filterManager.AppendFilter(biome, amount)
                }
            })
        }

        // Adds a single biome from an array, choosing a random amount within the provided range
        const addBiome = (biomes, amount) => {
            amount = Array.isArray(amount) ? RandomIntFromIntervalGroup(amount[0], amount[1] + 1, "world_gen") : amount
            if (amount > 0) {
                filterManager.AppendFilter(biomes[Math.floor(RandomFloatGroup("world_gen") * biomes.length)], amount)
            }
        }

        addBiomes(stoneBiomes, [1, 2])
        if (filterManager.GetFilterCount(["stone"]) === 1) {
            if (RandomIntFromIntervalGroup(0, 2, "world_gen") === 1) {
                addBiome(smallStoneBiomes, [5, 10])
            } else {
                addBiomes(stoneBiomes, 2)
            }
        }

        addBiome(woodBiomes, 1)

        addBiomes(ironBiomes, [0, 1])
        if (filterManager.GetFilterCount(["iron"]) === 0) {
            if (RandomIntFromIntervalGroup(0, 2, "world_gen") === 1) {
                addBiome(grasslandsBiome, 1)
                addBiome(forestBiome, 1)
                addBiome(drylandsBiome, 1)
                addBiome(smallIronBiomes, [3, 8])
            } else {
                addBiomes(ironBiomes, 1)
            }
        }
        addBiomes(coalBiomes, [0, 1])
        if (filterManager.GetFilterCount(["coal"]) === 0) {
            if (RandomIntFromIntervalGroup(0, 2, "world_gen") === 1) {
                addBiome(brokenlandsBiome, 1)
                addBiome(grasslandsBiome, 1)
                addBiome(forestBiome, 1)
                addBiome(smallCoalBiomes, [3, 8])
            } else {
                addBiomes(coalBiomes, 1)
            }
        }
        addBiomes(diamondBiomes, [0, 1])
        if (filterManager.GetFilterCount(["diamond"]) === 0) {
            if (RandomIntFromIntervalGroup(0, 2, "world_gen") === 1) {
                addBiome(frostlandsBiome, 1)
                addBiome(mountainsBiome, 1)
                addBiome(smallDiamondBiomes, [3, 8])
            } else {
                addBiomes(diamondBiomes, 1)
            }
        }
        addBiomes(redstoneBiomes, [0, 1])
        if (filterManager.GetFilterCount(["redstone"]) === 0) {
            if (RandomIntFromIntervalGroup(0, 2, "world_gen") === 1) {
                addBiome(wetlandsBiome, 1)
                addBiome(jungleBiome, 1)
                addBiome(smallRedstoneBiomes, [3, 8])
            } else {
                addBiomes(redstoneBiomes, 1)
            }
        }

        // Add mount homesteads if the appropriate biomes are present
        if (filterManager.GetFilterCount(["drylands"]) > 0) {
            filterManager.AppendFilter(["mount_01"], worldGenDefinitionSettings.mountCount.tiger)
            if (worldGenDefinitionSettings.mirroredWorld === 1) {
                filterManager.AppendFilter(["mount_01_mirrored"], worldGenDefinitionSettings.mountCount.tiger)
            }
        }
        if (filterManager.GetFilterCount(["jungle"]) > 0) {
            filterManager.AppendFilter(["mount_03"], worldGenDefinitionSettings.mountCount.beetle)
            if (worldGenDefinitionSettings.mirroredWorld === 1) {
                filterManager.AppendFilter(["mount_03_mirrored"], worldGenDefinitionSettings.mountCount.beetle)
            }
        }
        if (filterManager.GetFilterCount(["mountains"]) > 0) {
            filterManager.AppendFilter(["mount_04"], worldGenDefinitionSettings.mountCount.bird)
            if (worldGenDefinitionSettings.mirroredWorld === 1) {
                filterManager.AppendFilter(["mount_04_mirrored"], worldGenDefinitionSettings.mountCount.bird)
            }
        }
        if (filterManager.GetFilterCount(["wetlands"]) + filterManager.GetFilterCount(["pvp_witch_hut"]) > 0) {
            filterManager.AppendFilter(["mount_06"], worldGenDefinitionSettings.mountCount.frog)
            if (worldGenDefinitionSettings.mirroredWorld === 1) {
                filterManager.AppendFilter(["mount_06_mirrored"], worldGenDefinitionSettings.mountCount.frog)
            }
        }

        /* 
                // If the world has too few biomes, then add extra small biomes as "stepping stones"
                if (filterManager.GetFilterCount(["biome"]) <= 5) {
                    addBiome(Biomes, [0, 1])
                    if (filterManager.GetFilterCount(["biome"]) <= 5) {
                        addBiome(Biomes, 1)
                    }
                    addBiome(smallBiomes, [0, 2])
        
                    if (filterManager.GetFilterCount(["small"]) <= 1) {
                        addBiome(smallBiomes, 1)
                    }
                    addBiomes(plainBiomes, [0, 1])
                    // If we have every plain biome, add even more
                    if (filterManager.GetFilterCount(["plains"]) >= plainBiomes.length) {
                        addBiomes(plainBiomes, [0, 1])
                    }
        
                    addBiomes(elevatedBiomes, [0, 1])
                    // If we have every elevated biome, add even more
                    if (filterManager.GetFilterCount(["elevated"]) >= elevatedBiomes.length) {
                        addBiomes(elevatedBiomes, [0, 1])
                    }
                } */

        /// ------------ PIGLIN OUTPOSTS -------------
        //? Have as True ------ vvvvv
        const SpawnPiglinBases = false
        //? ------------------- ^^^^^
        if (SpawnPiglinBases) {
            const numBiomes = filterManager.GetFilterCount(["biome"])
            if (numBiomes <= 5) {
                PiglinPVPData.numOutposts = 1
            } else if (numBiomes <= 9) {
                PiglinPVPData.numOutposts = 2
            } else {
                PiglinPVPData.numOutposts = 3
            }
            if (worldGenDefinitionSettings.mirroredWorld === 0) {
                filterManager.AppendFilter(["outpost_slot"], PiglinPVPData.numOutposts)
            } else {
                if (PiglinPVPData.numOutposts % 2 === 1) {
                    filterManager.AppendFilter(["outpost_slot_center"], 1)
                }
                if (PiglinPVPData.numOutposts >= 2) {
                    filterManager.AppendFilter(["outpost_slot_mirrored_first"], 1)
                    filterManager.AppendFilter(["outpost_slot_mirrored_second"], 1)
                }
            }
        }
    }
}
