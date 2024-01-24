// SECTION: OUTPOST PLACEMENT

const _PlaceOneOutpostInClaimedArea = (horde, pendingClaimedAreaDef, pendingOutposts, placeAroundPendingBase = false, pendingBaseDef = null) => {
    const allVillages = QUERY_GetAllAliveVillages()
    const ownBases = FILTER_ByVillageSize(FILTER_ByFactionName(allVillages, horde), BASE_SIZE_ALL_PORTALS) // can change this to include frontlines if desired
    let smallBases = FILTER_ByVillageSize(ownBases, BASE_SIZE_SMALL)
    let mediumbases = FILTER_ByVillageSize(ownBases, BASE_SIZE_MEDIUM)
    let largeBases = FILTER_ByVillageSize(ownBases, BASE_SIZE_LARGE)
    let bossBases = FILTER_ByVillageSize(ownBases, BASE_SIZE_BOSS)

    if (placeAroundPendingBase && pendingBaseDef.basePosition !== null) {
        switch (pendingBaseDef.baseSize) {
            case BASE_SIZE_SMALL:
                smallBases = OPER_Union(smallBases, pendingBaseDef.basePosition)
                break
            case BASE_SIZE_MEDIUM:
                mediumbases = OPER_Union(mediumbases, pendingBaseDef.basePosition)
                break
            case BASE_SIZE_LARGE:
                largeBases = OPER_Union(largeBases, pendingBaseDef.basePosition)
                break
            case BASE_SIZE_BOSS:
                bossBases = OPER_Union(bossBases, pendingBaseDef.basePosition)
                break
        }
    }

    const defensiveOutposts = OPER_Union(FILTER_ByVillageSize(allVillages, [BASE_SIZE_OUTPOST]), pendingOutposts)
    const otherVillages = OPER_Difference(allVillages, OPER_Union(ownBases, defensiveOutposts))
    const players = GetPlayers()

    // Just like with bases, the outposts may other be a central focus of the area or move towards the side
    // This depends on whether or not they are spawned before or after the base
    const placementTiersWithBase = [
        { areaInnerPadding: 0.7, areaOuterPadding: 0.8, ownBaseExtraDistance: 60, outpostExtraDistance: 60 },
        { areaInnerPadding: 0.6, areaOuterPadding: 0.8, ownBaseExtraDistance: 40, outpostExtraDistance: 40 },
        { areaInnerPadding: 0.5, areaOuterPadding: 0.8, ownBaseExtraDistance: 20, outpostExtraDistance: 20 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.8, ownBaseExtraDistance: 0, outpostExtraDistance: 0 }
    ]

    const placementTiersWithoutBase = [
        { areaInnerPadding: 0.0, areaOuterPadding: 0.4, ownBaseExtraDistance: 60, outpostExtraDistance: 60 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.5, ownBaseExtraDistance: 40, outpostExtraDistance: 40 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.6, ownBaseExtraDistance: 20, outpostExtraDistance: 20 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.7, ownBaseExtraDistance: 0, outpostExtraDistance: 0 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.8, ownBaseExtraDistance: 0, outpostExtraDistance: 0 }
    ]

    const placementTiers = placeAroundPendingBase && pendingBaseDef !== null ? placementTiersWithBase : placementTiersWithoutBase

    for (const placement of placementTiers) {
        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(SLOT.BASE)
        _PlacementLimitToSlice(horde, FACTION_PIGLINS)

        _PlacementPreferBiome(horde)

        // Will be inside of claimed area
        OUTPUT_PlacementSetPrimaryProximityRule(pendingClaimedAreaDef.claimedAreaPosition, placement.areaInnerPadding * pendingClaimedAreaDef.claimedAreaRadius, placement.areaOuterPadding * pendingClaimedAreaDef.claimedAreaRadius)

        // Make sure to exclude any other bases by a proper gap
        OUTPUT_PlacementAddExcludeProximityRule(smallBases, _GetBaseToOutpostMinDistance(horde, BASE_SIZE_SMALL) + placement.ownBaseExtraDistance, BSHARP_PLACEMENT.requireAll) // ensure nothing is built close to own base
        OUTPUT_PlacementAddExcludeProximityRule(mediumbases, _GetBaseToOutpostMinDistance(horde, BASE_SIZE_MEDIUM) + placement.ownBaseExtraDistance, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeProximityRule(largeBases, _GetBaseToOutpostMinDistance(horde, BASE_SIZE_LARGE) + placement.ownBaseExtraDistance, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeProximityRule(bossBases, _GetBaseToOutpostMinDistance(horde, BASE_SIZE_BOSS) + placement.ownBaseExtraDistance, BSHARP_PLACEMENT.requireAll)

        // Exclude other outposts
        OUTPUT_PlacementAddExcludeProximityRule(defensiveOutposts, _GetOutpostToOutpostMinDistance(horde) + placement.outpostExtraDistance, BSHARP_PLACEMENT.requireAll) // override for outpost (eg. if you want to pack bases closer)

        // Other excludes
        OUTPUT_PlacementAddExcludeProximityRule(otherVillages, _GetOutpostToOtherVillagesMinDistance(horde), BSHARP_PLACEMENT.requireAll) // the rest
        OUTPUT_PlacementAddExcludeProximityRule(players, 300, BSHARP_PLACEMENT.requireAll) // away from players

        if (OUTPUT_PlacementExecute()) {
            Logv("PlaceOneOutpostInClaimedArea: Successful for " + horde)
            return true
        }
    }

    Logv("PlaceOneOutpostInClaimedArea: Failed for " + horde)
    return false
}

const PlaceOutpostsInClaimedArea = (numOutposts, horde, pendingClaimedAreaDef, placeAroundPendingBase = false, pendingBaseDef = null) => {
    let pendingOutposts = []
    for (let i = 0; i < numOutposts; i++) {
        const outpostSuccess = _PlaceOneOutpostInClaimedArea(horde, pendingClaimedAreaDef, pendingOutposts, placeAroundPendingBase, pendingBaseDef)
        if (!outpostSuccess) {
            return null
        } else {
            pendingOutposts.push(QUERY_PlacementResultPosition())
        }
    }

    return { outposts: pendingOutposts }
}

const RunOutpostsInClaimedAreaPlacementAndSpawn = (numOutposts, horde, pendingClaimedAreaDef, placeAroundPendingBase = false, pendingBaseDef = null) => {
    const placementObject = PlaceOutpostsInClaimedArea(numOutposts, horde, pendingClaimedAreaDef, placeAroundPendingBase, pendingBaseDef)
    if (placementObject === null) {
        return false
    }

    if (placementObject.outposts !== undefined) {
        for (const outpostPosition of placementObject.outposts) {
            SpawnDefensiveOutpostAtPosition(outpostPosition, horde)
        }
    }

    return true
}

const _PlacementLimitToSlice = (horde, hordeCollection) => {
    // We can allow the horde to bleed into other slices, if their horde is established

    // Original slice
    OUTPUT_PlacementAddInsideWorldSliceProximityRule(QUERY_GetGlobalVariable(`${horde}_${SLICE_SUFFIX}`))

    for (const piglinHorde of hordeCollection) {
        if (piglinHorde === horde) {
            continue
        }

        // Add the slice if that horde doesn't need space anymore
        if (HordeEstablishment.IsEstablished(piglinHorde)) {
            OUTPUT_PlacementAddInsideWorldSliceProximityRule(QUERY_GetGlobalVariable(`${piglinHorde}_${SLICE_SUFFIX}`))
        }
    }
}

// SECTION: BASE PLACEMENT

const PlaceBaseInClaimedArea = (horde, baseSize, usePendingClaimedArea = false, pendingClaimedAreaDef = null, numOutposts = -1) => {
    // The base can exist in two states: it was either "appended" to the existing claimed area
    // Or it in fact brings about a new claimed area if there was no space
    // When it appends, we expect it to be somehwere on the outer layer, because in this case the outposts will be central
    // If it spawns in the new claimed area, we expect the base to be central and outposts be on a side.

    const placementTiersRegular = [
        { areaInnerPadding: 0.7, areaOuterPadding: 0.8, ownBaseExtraDistance: 60, outpostExtraDistance: 60 },
        { areaInnerPadding: 0.6, areaOuterPadding: 0.8, ownBaseExtraDistance: 40, outpostExtraDistance: 40 },
        { areaInnerPadding: 0.5, areaOuterPadding: 0.8, ownBaseExtraDistance: 20, outpostExtraDistance: 20 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.8, ownBaseExtraDistance: 0, outpostExtraDistance: 0 }
    ]

    const placementTiersForced = [
        { areaInnerPadding: 0.0, areaOuterPadding: 0.4, ownBaseExtraDistance: 60, outpostExtraDistance: 60 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.5, ownBaseExtraDistance: 40, outpostExtraDistance: 40 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.6, ownBaseExtraDistance: 20, outpostExtraDistance: 20 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.7, ownBaseExtraDistance: 0, outpostExtraDistance: 0 },
        { areaInnerPadding: 0.0, areaOuterPadding: 0.8, ownBaseExtraDistance: 0, outpostExtraDistance: 0 }
    ]

    const placementTiers = usePendingClaimedArea && pendingClaimedAreaDef !== null ? placementTiersForced : placementTiersRegular

    const factionData = _GetInvasionHelperFactionData(horde)
    const placementData = factionData.basePlacement

    const allVillages = QUERY_GetAllAliveVillages()
    const ownBases = FILTER_ByVillageSize(FILTER_ByFactionName(allVillages, horde), placementData.newBaseAdjacents)
    const outposts = FILTER_ByVillageSize(allVillages, [BASE_SIZE_OUTPOST])
    const otherVillages = OPER_Difference(allVillages, OPER_Union(ownBases, outposts))
    const players = GetPlayers()

    for (const placement of placementTiers) {
        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(SLOT.BASE)

        _PlacementLimitToSlice(horde, FACTION_PIGLINS)

        _PlacementPreferBiome(horde)

        // Must be inside a claimed area
        if (pendingClaimedAreaDef !== null) {
            OUTPUT_PlacementSetPrimaryProximityRule(pendingClaimedAreaDef.claimedAreaPosition, pendingClaimedAreaDef.claimedAreaRadius * placement.areaInnerPadding, pendingClaimedAreaDef.claimedAreaRadius * placement.areaOuterPadding)
        } else {
            OUTPUT_PlacementAddInsideClaimedAreasProximityRule(horde, placement.areaInnerPadding, placement.areaOuterPadding)
        }

        // Excludes for bases and outposts
        OUTPUT_PlacementAddExcludeProximityRule(ownBases, _GetBaseToBaseMinDistance(horde, baseSize) + placement.ownBaseExtraDistance, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeProximityRule(outposts, _GetBaseToOutpostMinDistance(horde, baseSize) + placement.outpostExtraDistance, BSHARP_PLACEMENT.requireAll)

        // Other excludes
        OUTPUT_PlacementAddExcludeProximityRule(otherVillages, _GetBaseToOtherVillagesMinDistance(horde, baseSize), BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddExcludeProximityRule(players, 300, BSHARP_PLACEMENT.requireAll)
        OUTPUT_PlacementAddMaxElevationRule(FactionBaseElevationRestrictions[horde])

        if (!OUTPUT_PlacementExecute()) {
            continue
        }

        const basePosition = QUERY_PlacementResultPosition()

        if (usePendingClaimedArea) {
            const placementObject = PlaceOutpostsInClaimedArea(numOutposts, horde, pendingClaimedAreaDef, true, { basePosition: basePosition, baseSize: baseSize })
            if (placementObject === null) {
                continue
            } else {
                Logi(`PlaceBaseInClaimedArea: Successful for horde ${horde} and size ${baseSize}`)
                placementObject.base = basePosition
                return placementObject
            }
        } else {
            Logi(`PlaceBaseInClaimedArea: Successful for horde ${horde} and size ${baseSize}`)
            return { base: basePosition }
        }
    }

    Logi(`PlaceBaseInClaimedArea: Failed for horde ${horde} and size ${baseSize}`)
    return null
}

const RunBaseInClaimedAreaPlacementAndSpawn = (horde, baseSize, usePendingClaimedArea = false, pendingClaimedAreaDef = null, numOutposts = -1) => {
    const placementObject = PlaceBaseInClaimedArea(horde, baseSize, usePendingClaimedArea, pendingClaimedAreaDef, numOutposts)
    if (placementObject === null) {
        return false
    }

    if (placementObject.base !== undefined) {
        SpawnBaseAtPos(placementObject.base, horde, baseSize, true, MAP_INVASION_RECAP.BUILT_NEW_BASE)
    }

    if (placementObject.outposts !== undefined) {
        for (const outpostPosition of placementObject.outposts) {
            SpawnDefensiveOutpostAtPosition(outpostPosition, horde)
        }
    }

    return true
}

// SECTION: INVASION CLAIMED AREA

const PlaceInvasionClaimedArea = (horde, claimedAreaRadius, numOutposts, placeBase = false, baseSize = null) => {
    // From most strict to least strict
    const placementTiers = [
        { claimedAreasMin: -claimedAreaRadius * 0.3, claimedAreasMax: 100, playersMin: 500, wofMin: 750, wofMax: 2000, friendlyVillagesMin: 200, attempts: 5 },
        { claimedAreasMin: -claimedAreaRadius * 0.15, claimedAreasMax: 200, playersMin: 400, wofMin: 500, wofMax: 2250, friendlyVillagesMin: 100, attempts: 5 },
        { claimedAreasMin: -claimedAreaRadius * 0.1, claimedAreasMax: 300, playersMin: 300, wofMin: 350, wofMax: 2500, friendlyVillagesMin: 50, attempts: 5 },
        { claimedAreasMin: 0, claimedAreasMax: 500, playersMin: 200, wofMin: 300, wofMax: 2750, friendlyVillagesMin: 25, attempts: 5 },
        { claimedAreasMin: 0, claimedAreasMax: 1000, playersMin: 100, wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, friendlyVillagesMin: 25, attempts: 5 },
        { claimedAreasMin: 0, claimedAreasMax: 2500, playersMin: 100, wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, friendlyVillagesMin: 25, attempts: 5 },
        { claimedAreasMin: 0, claimedAreasMax: 3000, playersMin: 100, wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, friendlyVillagesMin: 25, attempts: 5 },
        { claimedAreasMin: 0, claimedAreasMax: BSHARP_PLACEMENT.maxDistance, playersMin: 100, wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, friendlyVillagesMin: 25, attempts: 10 }
    ]

    // We're placing the side areas really close to the center area
    for (const placement of placementTiers) {
        for (let i = 0; i < placement.attempts; i++) {
            OUTPUT_PlacementStart()

            // Pick invasion slot to exclude water
            OUTPUT_PlacementSlotTag(SLOT.BASE)

            _PlacementPreferBiome(horde)

            _PlacementLimitToSlice(horde, FACTION_PIGLINS)

            // Spawn close-ish to other claimed areas
            const claimedAreaMaxDistance = placement.claimedAreasMax !== BSHARP_PLACEMENT.maxDistance ? placement.claimedAreasMax + claimedAreaRadius : BSHARP_PLACEMENT.maxDistance
            OUTPUT_PlacementAddIncludeClaimedAreasProximityRule(horde, placement.claimedAreasMin + claimedAreaRadius, claimedAreaMaxDistance)

            // Make sure the area is at least X blocks away from the ocean
            // Negative value will allow areas to "dip" in the ocean a little bit for a cool effect
            const oceanPadding = -0.3 * claimedAreaRadius
            OUTPUT_PlacementAddExcludeOceanProximityRule(claimedAreaRadius + oceanPadding)

            // Exclude players
            OUTPUT_PlacementAddExcludeProximityRule(GetPlayers(), placement.playersMin + claimedAreaRadius, BSHARP_PLACEMENT.requireAll)

            // Spawn not so far away from the well of fate
            const wof = GetVillageEntityFromFaction(WELL_OF_FATE)
            const wofMaxDistance = placement.wofMax !== BSHARP_PLACEMENT.maxDistance ? placement.wofMax + claimedAreaRadius : BSHARP_PLACEMENT.maxDistance
            OUTPUT_PlacementAddIncludeProximityRule(wof, placement.wofMin + claimedAreaRadius, wofMaxDistance, 1)

            // If there are no areas in the world, try to place far
            const hordeHasAreas = QUERY_GetEntitiesCount(GetHordeClaimedAreas(horde)) !== 0
            const resultExcludeDistance = hordeHasAreas ? claimedAreaRadius + placement.claimedAreasMin : claimedAreaRadius + 500
            for (const horde of FACTION_PIGLINS) {
                OUTPUT_PlacementAddExcludeClaimedAreasProximityRule(horde, resultExcludeDistance)
            }

            // Avoid placing them nearby friendy villages
            const friendlyVillages = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [CULTURE_NAME_VILLAGERS, MOB_ALLIANCE_NAME_CREEPER, MOB_ALLIANCE_NAME_SKELETON, MOB_ALLIANCE_NAME_ZOMBIE, MOB_ALLIANCE_NAME_SPIDER])
            OUTPUT_PlacementAddExcludeProximityRule(friendlyVillages, claimedAreaRadius + placement.friendlyVillagesMin, BSHARP_PLACEMENT.requireAll)

            if (!OUTPUT_PlacementExecute()) {
                continue
            }

            const claimedAreaPosition = QUERY_PlacementResultPosition()
            let placementObject = null
            if (placeBase) {
                placementObject = PlaceBaseInClaimedArea(horde, baseSize, true, { claimedAreaPosition: claimedAreaPosition, claimedAreaRadius: claimedAreaRadius }, numOutposts)
                if (placementObject === null) {
                    continue
                }
            } else {
                placementObject = PlaceOutpostsInClaimedArea(numOutposts, horde, { claimedAreaPosition: claimedAreaPosition, claimedAreaRadius: claimedAreaRadius }, false)
                if (placementObject === null) {
                    continue
                }
            }

            placementObject.claimedArea = claimedAreaPosition
            Logi(`PlaceInvasionClaimedArea: Successful for horde ${horde}`)
            return placementObject
        }
    }

    Logi(`PlaceInvasionClaimedArea: Failed for horde ${horde}`)
    return null
}

const RunInvasionClaimedAreaPlacementAndSpawn = (horde, claimedAreaRadius, numOutposts, placeBase = false, baseSize = null) => {
    const placementObject = PlaceInvasionClaimedArea(horde, claimedAreaRadius, numOutposts, placeBase, baseSize)
    if (placementObject === null) {
        return false
    }

    // Claim area
    if (placementObject.claimedArea !== undefined) {
        ClaimPiglinArea(horde, placementObject.claimedArea, claimedAreaRadius)
    }

    // Build base if present
    if (placementObject.base !== undefined) {
        SpawnBaseAtPos(placementObject.base, horde, baseSize, true, MAP_INVASION_RECAP.BUILT_NEW_BASE)
    }

    // Build outposts
    if (placementObject.outposts !== undefined) {
        for (const outpostPosition of placementObject.outposts) {
            SpawnDefensiveOutpostAtPosition(outpostPosition, horde)
        }
    }

    return true
}

// SECTION: PREGAME

// Special rules for a pregame central claimed area
const PlacePregameCenterClaimedArea = (horde, claimedAreaRadius, numOutposts) => {
    // From most strict to least strict
    // We want to have some space between other claimed areas and friendly villages so that we can fit two smaller areas in
    const placementTiers = [
        { wofMin: 750, wofMax: 1250, playersMin: 500, claimedAreasMin: 500, friendlyVillagesMin: 500, attempts: 5 },
        { wofMin: 500, wofMax: 1750, playersMin: 400, claimedAreasMin: 500, friendlyVillagesMin: 500, attempts: 5 },
        { wofMin: 350, wofMax: 2250, playersMin: 300, claimedAreasMin: 500, friendlyVillagesMin: 500, attempts: 5 },
        { wofMin: 300, wofMax: 2750, playersMin: 200, claimedAreasMin: 500, friendlyVillagesMin: 500, attempts: 5 },
        { wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, playersMin: 100, claimedAreasMin: 500, friendlyVillagesMin: 500, attempts: 5 },
        { wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, playersMin: 100, claimedAreasMin: 100, friendlyVillagesMin: 100, attempts: 5 }
    ]

    for (const placement of placementTiers) {
        for (let i = 0; i < placement.attempts; i++) {
            OUTPUT_PlacementStart()

            // Pick invasion slot to exclude water
            OUTPUT_PlacementSlotTag(SLOT.BASE)

            _PlacementLimitToSlice(horde, FACTION_PIGLINS)

            _PlacementPreferBiome(horde)

            // Spawn not so far away from the well of fate
            const wof = GetVillageEntityFromFaction(WELL_OF_FATE)
            const wofMaxDistance = placement.wofMax !== BSHARP_PLACEMENT.maxDistance ? placement.wofMax + claimedAreaRadius : BSHARP_PLACEMENT.maxDistance
            OUTPUT_PlacementSetPrimaryProximityRule(wof, placement.wofMin + claimedAreaRadius, wofMaxDistance)

            // Exclude players
            OUTPUT_PlacementAddExcludeProximityRule(GetPlayers(), placement.playersMin + claimedAreaRadius, BSHARP_PLACEMENT.requireAll)

            // Make sure the area is at least X blocks away from the ocean
            // Negative value will allow areas to "dip" in the ocean a little bit for a cool effect
            const oceanPadding = -claimedAreaRadius * 0.3
            OUTPUT_PlacementAddExcludeOceanProximityRule(claimedAreaRadius + oceanPadding)

            // Exclude other claimed areas (that includes all piglin bases), and currently this will also exlude other hordes
            for (const piglinHorde of FACTION_PIGLINS) {
                OUTPUT_PlacementAddExcludeClaimedAreasProximityRule(piglinHorde, claimedAreaRadius + placement.claimedAreasMin)
            }

            // Avoid placing them nearby friendy villages
            const friendlyVillages = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [CULTURE_NAME_VILLAGERS, MOB_ALLIANCE_NAME_CREEPER, MOB_ALLIANCE_NAME_SKELETON, MOB_ALLIANCE_NAME_ZOMBIE, MOB_ALLIANCE_NAME_SPIDER])
            OUTPUT_PlacementAddExcludeProximityRule(friendlyVillages, claimedAreaRadius + placement.friendlyVillagesMin, BSHARP_PLACEMENT.requireAll)

            if (!OUTPUT_PlacementExecute()) {
                continue
            }

            const claimedAreaPosition = QUERY_PlacementResultPosition()
            let placementObject = PlaceOutpostsInClaimedArea(numOutposts, horde, { claimedAreaPosition: claimedAreaPosition, claimedAreaRadius: claimedAreaRadius }, false)
            if (placementObject === null) {
                continue
            }

            placementObject.claimedArea = claimedAreaPosition
            Logi(`PlacePregameCenterClaimedArea: Successful for horde ${horde}`)
            return placementObject
        }
    }

    Logi(`PlacePregameCenterClaimedArea: Failed for horde ${horde}`)
    return null
}

const RunPregameCenterClaimedAreaPlacementAndSpawn = (horde, claimedAreaRadius, numOutposts) => {
    const placementObject = PlacePregameCenterClaimedArea(horde, claimedAreaRadius, numOutposts)
    if (placementObject === null) {
        return false
    }

    // Claim area
    if (placementObject.claimedArea !== undefined) {
        ClaimPiglinArea(horde, placementObject.claimedArea, claimedAreaRadius)
    }

    // Build outposts
    if (placementObject.outposts !== undefined) {
        for (const outpostPosition of placementObject.outposts) {
            SpawnDefensiveOutpostAtPosition(outpostPosition, horde)
        }
    }

    return true
}

// Special rules for a pregame side claimed area
const PlacePregameSideClaimedArea = (horde, claimedAreaRadius, numOutposts, centerClaimedArea, centerClaimedAreaRadius) => {
    // From most strict to least strict
    const placementTiers = [
        { centerAreaMin: 1200, centerAreaMax: 1300, playersMin: 500, wofMin: 750, wofMax: 2000, friendlyVillagesMin: 200, attempts: 5 },
        { centerAreaMin: 1100, centerAreaMax: 1400, playersMin: 400, wofMin: 500, wofMax: 2250, friendlyVillagesMin: 100, attempts: 5 },
        { centerAreaMin: 1000, centerAreaMax: 1500, playersMin: 300, wofMin: 350, wofMax: 2500, friendlyVillagesMin: 50, attempts: 5 },
        { centerAreaMin: 900, centerAreaMax: 1600, playersMin: 200, wofMin: 300, wofMax: 2750, friendlyVillagesMin: 25, attempts: 5 },
        { centerAreaMin: 800, centerAreaMax: 1700, playersMin: 100, wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, friendlyVillagesMin: 25, attempts: 5 },
        { centerAreaMin: 700, centerAreaMax: 1800, playersMin: 100, wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, friendlyVillagesMin: 25, attempts: 5 },
        { centerAreaMin: 500, centerAreaMax: 1900, playersMin: 100, wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, friendlyVillagesMin: 25, attempts: 5 },
        { centerAreaMin: 0, centerAreaMax: 2000, playersMin: 100, wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, friendlyVillagesMin: 25, attempts: 5 },
        { centerAreaMin: 0, centerAreaMax: BSHARP_PLACEMENT.maxDistance, playersMin: 100, wofMin: 300, wofMax: BSHARP_PLACEMENT.maxDistance, friendlyVillagesMin: 0, attempts: 5 }
    ]

    // We're placing the side areas really close to the center area
    for (const placement of placementTiers) {
        for (let i = 0; i < placement.attempts; i++) {
            OUTPUT_PlacementStart()

            // Pick invasion slot to exclude water
            OUTPUT_PlacementSlotTag(SLOT.BASE)

            _PlacementLimitToSlice(horde, FACTION_PIGLINS)

            _PlacementPreferBiome(horde)

            // Spawn very close to the center area
            const maxCenterAreaDistance = placement.centerAreaMax !== BSHARP_PLACEMENT.maxDistance ? placement.centerAreaMax + centerClaimedAreaRadius + claimedAreaRadius : BSHARP_PLACEMENT.maxDistance
            OUTPUT_PlacementSetPrimaryProximityRule(centerClaimedArea, placement.centerAreaMin + centerClaimedAreaRadius + claimedAreaRadius, maxCenterAreaDistance)

            // Exclude players
            OUTPUT_PlacementAddExcludeProximityRule(GetPlayers(), placement.playersMin + centerClaimedAreaRadius, BSHARP_PLACEMENT.requireAll)

            // Make sure the area is at least X blocks away from the ocean
            // Negative value will allow areas to "dip" in the ocean a little bit for a cool effect
            const oceanPadding = -claimedAreaRadius * 0.3
            OUTPUT_PlacementAddExcludeOceanProximityRule(claimedAreaRadius + oceanPadding)

            // Spawn not so far away from the well of fate
            const wof = GetVillageEntityFromFaction(WELL_OF_FATE)
            const wofMaxDistance = placement.wofMax !== BSHARP_PLACEMENT.maxDistance ? placement.wofMax + claimedAreaRadius : BSHARP_PLACEMENT.maxDistance
            OUTPUT_PlacementAddIncludeProximityRule(wof, placement.wofMin + claimedAreaRadius, wofMaxDistance, 1)

            // Exclude other claimed areas (note: both own and other horde's)
            for (const piglinHorde of FACTION_PIGLINS) {
                OUTPUT_PlacementAddExcludeClaimedAreasProximityRule(piglinHorde, claimedAreaRadius + placement.centerAreaMin)
            }

            // Avoid placing them nearby friendy villages
            const friendlyVillages = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [CULTURE_NAME_VILLAGERS, MOB_ALLIANCE_NAME_CREEPER, MOB_ALLIANCE_NAME_SKELETON, MOB_ALLIANCE_NAME_ZOMBIE, MOB_ALLIANCE_NAME_SPIDER])
            OUTPUT_PlacementAddExcludeProximityRule(friendlyVillages, claimedAreaRadius + placement.friendlyVillagesMin, BSHARP_PLACEMENT.requireAll)

            if (!OUTPUT_PlacementExecute()) {
                continue
            }

            const claimedAreaPosition = QUERY_PlacementResultPosition()
            let placementObject = PlaceOutpostsInClaimedArea(numOutposts, horde, { claimedAreaPosition: claimedAreaPosition, claimedAreaRadius: claimedAreaRadius }, false)
            if (placementObject === null) {
                continue
            }

            placementObject.claimedArea = claimedAreaPosition
            Logi(`PlacePregameSideClaimedArea: Successful for horde ${horde}`)
            return placementObject
        }
    }

    Logi(`PlacePregameSideClaimedArea: Failed for horde ${horde}`)
    return null
}

const RunPregameSideClaimedAreaPlacementAndSpawn = (horde, claimedAreaRadius, numOutposts, centerClaimedArea, centerClaimedAreaRadius) => {
    const placementObject = PlacePregameSideClaimedArea(horde, claimedAreaRadius, numOutposts, centerClaimedArea, centerClaimedAreaRadius)
    if (placementObject === null) {
        return false
    }

    // Claim area
    if (placementObject.claimedArea !== undefined) {
        ClaimPiglinArea(horde, placementObject.claimedArea, claimedAreaRadius)
    }

    // Build outposts
    if (placementObject.outposts !== undefined) {
        for (const outpostPosition of placementObject.outposts) {
            SpawnDefensiveOutpostAtPosition(outpostPosition, horde)
        }
    }

    return true
}

// This method is NOT used right now / deprecated
// This method doesn't have the latest changes: where we treat base to base or outpost to outpost distance across ALL hordes
const PlaceOutpostInBaseProximity = (base = null) => {
    if (base === null) {
        base = RandomEntity(FILTER_ByFactionName(FILTER_ByVillageSize(QUERY_GetAllAliveVillages(), BASE_SIZE_ALL_PORTALS), FACTION_PIGLINS))
    }

    const horde = QUERY_GetFactionNameFromEntity(base)

    // Tiers for max distance
    const baseMaxDistancePlacementTiers = [100, 200, 300, 400, 600, 1200]
    const baseDistancePlacementTiers = [100, 200, 400, 800, 1600, 3200] //baseToOutpostMinDistance + this

    // Distances
    const innerRadius = _GetBaseToOutpostMinDistance(horde, QUERY_GetFactionSizeFromVillageID(QUERY_GetVillageIDFromEntity(base)))
    const wofMinDistance = 500
    const playersMinDistance = 500
    const oceanMinDistance = 50

    const fellowHordeVillages = OPER_Difference(FILTER_ByFactionName(QUERY_GetAllAliveVillages(), horde), [base])
    const fellowSmallBases = FILTER_ByVillageSize(fellowHordeVillages, [BASE_SIZE_SMALL])
    const fellowMediumBases = FILTER_ByVillageSize(fellowHordeVillages, [BASE_SIZE_MEDIUM])
    const fellowLargeBases = FILTER_ByVillageSize(fellowHordeVillages, [BASE_SIZE_LARGE])
    const fellowBossBases = FILTER_ByVillageSize(fellowHordeVillages, [BASE_SIZE_BOSS])
    const fellowOutposts = FILTER_ByVillageSize(fellowHordeVillages, [BASE_SIZE_OUTPOST])
    const mobAlliances = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_MOB_ALLIANCES)
    const villagerVillages = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), CULTURE_NAME_VILLAGERS)
    const otherVillages = OPER_Difference(OPER_Difference(QUERY_GetAllAliveVillages(), OPER_Union(fellowHordeVillages, [base])), OPER_Union(mobAlliances, villagerVillages)) // excludes own hordes and then excludes mob alliances / villager villages
    const wofVillage = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), WELL_OF_FATE)
    const players = GetPlayers()

    // The idea is that we try to put the outpost as close as we can to the base
    // Incrementally increase the distance from the center, but check all options for distance to the nearest base
    for (const maxCenterDistance of baseMaxDistancePlacementTiers) {
        for (const maxBaseDistance of baseDistancePlacementTiers) {
            OUTPUT_PlacementStart()
            OUTPUT_PlacementSlotTag(SLOT.BASE)

            // Includes
            OUTPUT_PlacementSetPrimaryProximityRule(base, innerRadius, innerRadius + maxCenterDistance)
            OUTPUT_PlacementAddIncludeProximityRule(fellowSmallBases, BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_SMALL], BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_SMALL] + maxBaseDistance, 1)
            OUTPUT_PlacementAddIncludeProximityRule(fellowMediumBases, BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_MEDIUM], BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_MEDIUM] + maxBaseDistance, 1)
            OUTPUT_PlacementAddIncludeProximityRule(fellowLargeBases, BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_LARGE], BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_LARGE] + maxBaseDistance, 1)
            OUTPUT_PlacementAddIncludeProximityRule(fellowBossBases, BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_BOSS], BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_BOSS] + maxBaseDistance, 1)

            // Excludes
            OUTPUT_PlacementAddExcludeProximityRule(fellowSmallBases, BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_SMALL], BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(fellowMediumBases, BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_MEDIUM], BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(fellowLargeBases, BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_LARGE], BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(fellowBossBases, BaseToOutpostMinDistanceConfiguration[horde][BASE_SIZE_BOSS], BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(fellowOutposts, OutpostToOutpostMinDistanceConfiguration[horde], BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(wofVillage, wofMinDistance, BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(players, playersMinDistance, BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(mobAlliances, OutpostToMobAlliancesMinDistanceConfiguration[horde], BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(villagerVillages, OutpostToVillagerVillagesMinDistanceConfiguration[horde], BSHARP_PLACEMENT.requireAll)
            OUTPUT_PlacementAddExcludeProximityRule(otherVillages, OutpostToOtherVillagesMinDistanceConfiguration[horde], BSHARP_PLACEMENT.requireAll)

            // Biomes
            _PlacementPreferBiome(horde)
            OUTPUT_PlacementAddExcludeOceanProximityRule(oceanMinDistance)

            if (OUTPUT_PlacementExecute()) {
                SpawnDefensiveOutpostAtPosition(QUERY_PlacementResultPosition(), horde)
                Logi("[LFC] Spawned an outpost successfully!")
                return true
            }
        }
    }

    Loge("[LFC] Could not spawn an outpost!")
    return false
}
