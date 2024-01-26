// NOTE: This config states absolute values that remain unchanged
// Check the placement function to specific "tiers" in regards to certain distances
const basePlacementConfig = {
    wofMinDistance: 730, // theoretical max radius for fatelands biome
    playersMinDistance: 500,
    oceanMinDistance: 0.7, // specific to bases -  % of claimed area before it "dips" into the ocean
    minDistanceToFriendlyVillages: 50,  // how much space there is between friendly villages and a border of a claimed area
    minDistanceToMobAllianceOccupationBases: {
        [FACTION_NAME_ATTACK]: 325,
        [FACTION_NAME_DEFEND]: 275,
        [FACTION_NAME_FROST]: 400,
        [FACTION_NAME_OBSTACLE]: 400
    },
    biomePreferences: {
        [FACTION_NAME_ATTACK]: ["forest", "frostlands", "grasslands", "drylands", "brokenlands", "brokenlands_ridge"],
        [FACTION_NAME_DEFEND]: ["mountain_parent_valleys"],
        [FACTION_NAME_OBSTACLE]: ["wetlands", "jungle"],
        [FACTION_NAME_FROST]: ["frostlands"]
    },
    maxElevationAllowed: {
        [FACTION_NAME_ATTACK]: 50,
        [FACTION_NAME_DEFEND]: 150,
        [FACTION_NAME_OBSTACLE]: 70,
        [FACTION_NAME_FROST]: 120
    },
    claimedAreaRadius: {        // specific to bases - the radius of claimed area to bring in with the base
        [FACTION_NAME_ATTACK]: {
            default: 350,
            [BASE_SIZE_BOSS]: 500
        },
        [FACTION_NAME_DEFEND]: {
            default: 350,
            [BASE_SIZE_BOSS]: 500
        },
        [FACTION_NAME_OBSTACLE]: {
            default: 350,
            [BASE_SIZE_BOSS]: 500
        },
        [FACTION_NAME_FROST]: {
            default: 350,
            [BASE_SIZE_BOSS]: 500
        }
    },
    textureStampPadding: {  // in case the texture stamp has too much / too little padding, we can adjust the padding here
        [FACTION_NAME_ATTACK]: {
            default: 0
        },
        [FACTION_NAME_DEFEND]: {
            default: 0
        },
        [FACTION_NAME_OBSTACLE]: {
            default: 0
        },
        [FACTION_NAME_FROST]: {
            default: 0
        }
    }
}

// NOTE: This config states absolute values that remain unchanged
// Check the placement function to specific "tiers" in regards to certain distances
const outpostPlacementConfig = {
    wofMinDistance: 500,    // theoretical max radius for fatelands biome
    playersMinDistance: 500,
    oceanMinDistance: 50,   // specific to outposts - absolute distance to the ocean
    claimedAreaMinDistance: 50, // specific to outposts - minimum distance to keep away from the border of a claimed area
    claimedAreaMaxDistance: 250,
    wellhousesMinDistance: 250, // specific to outposts - absolute distance from wellhouses (villager villages are excluded via texture stamps)
    minDistanceToMobAllianceOccupationBases: {
        [FACTION_NAME_ATTACK]: 250,
        [FACTION_NAME_DEFEND]: 250,
        [FACTION_NAME_OBSTACLE]: 250,
        [FACTION_NAME_FROST]: 250
    },
    biomePreferences: {
        [FACTION_NAME_ATTACK]: ["forest", "frostlands", "grasslands", "drylands", "brokenlands", "brokenlands_ridge"],
        [FACTION_NAME_DEFEND]: ["mountain_parent_valleys"],
        [FACTION_NAME_OBSTACLE]: ["wetlands", "jungle"],
        [FACTION_NAME_FROST]: ["frostlands"]
    },
    maxElevationAllowed: {
        [FACTION_NAME_ATTACK]: 999,
        [FACTION_NAME_DEFEND]: 999,
        [FACTION_NAME_OBSTACLE]: 999,
        [FACTION_NAME_FROST]: 999
    },
    textureStampPadding: {  // in case the texture stamp has too much / too little padding, we can adjust the padding here
        [FACTION_NAME_ATTACK]: 0,
        [FACTION_NAME_DEFEND]: 0,
        [FACTION_NAME_OBSTACLE]: 0,
        [FACTION_NAME_FROST]: 0
    }
}

SNIPPET_GameSettingInitialized("world_world_size", (value) => {
    //track custom world size to be used later for base placement configuration
    if (QUERY_GetGlobalVariable(CustomSettingGV("world_world_size")) === 0) {
        OUTPUT_SetGlobalVariable(CustomSettingGV("world_world_size"), value.value)
    }
})

const SpawnDefensiveOutpostAtPosition = (positionEntity, factionName) => {
    const factionData = _GetInvasionHelperFactionData(factionName)
    OUTPUT_PlacementEntityUpdateTextureStamp(positionEntity, TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(factionName, BASE_SIZE_OUTPOST), true)
    const base = OUTPUT_SpawnInvasionBase(positionEntity, factionData.villageArchetypes[BASE_SIZE_OUTPOST], BASE_SIZE_OUTPOST, factionName, TEAM_ORANGE, MAP_INVASION_RECAP.BUILT_DEFENSIVE_OUTPOST)
    OUTPUT_MapSetKeyValue(base, MAP_KEY.INVASION_RECAP, MAP_INVASION_RECAP.BUILT_DEFENSIVE_OUTPOST)
    return base
}

const ClaimPiglinArea = (horde, positionEntity, areaRadius) => {
    const claimedArea = OUTPUT_ClaimArea(horde, positionEntity, areaRadius)
    OUTPUT_MapSetKeyValue(claimedArea, MAP_KEY.CLAIMED_AREA_VISIBILITY, MAP_CLAIMED_AREA_VISIBILITY.VISIBLE)
    OUTPUT_MapSetKeyValue(claimedArea, MAP_KEY.INVASION_RECAP, MAP_INVASION_RECAP.CLAIMED_AREA)
    return claimedArea
}

const SpawnBaseAtPos = (position, factionName, baseSize, isInvasion, invasionReason) => {
    OUTPUT_PlacementEntityUpdateTextureStamp(position, TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(factionName, baseSize), true)

    // Outposts and boss base don't have a "potential" size they will become
    // Only small and medium bases
    if (baseSize === BASE_SIZE_SMALL || baseSize === BASE_SIZE_MEDIUM) {
        // Set the maximum potential texture stamp size for the base
        OUTPUT_PlacementEntitySetMaximumVillageTextureStamp(position, GetStampTextureForFaction(factionName, BASE_SIZE_LARGE))
    }

    let baseArchetype = factionName === FACTION_NAME_DBB ? campaignActsVal.dbb.archetype : _GetInvasionHelperFactionData(factionName).villageArchetypes[baseSize]
    let base = null
    if (isInvasion) {
        base = OUTPUT_SpawnInvasionBase(position, baseArchetype, baseSize, factionName, TEAM_ORANGE, invasionReason)
        OUTPUT_MapSetKeyValue(base, MAP_KEY.INVASION_RECAP, invasionReason)
    } else {
        base = OUTPUT_SpawnVillage(position, baseArchetype, baseSize, factionName, TEAM_ORANGE)
    }

    return base
}

const _GetHordeClusterPosition = (horde) => {
    const hordeClusterNames = {
        [FACTION_NAME_ATTACK]: "attack_cluster",
        [FACTION_NAME_DEFEND]: "defend_cluster",
        [FACTION_NAME_OBSTACLE]: "obstacle_cluster",
        [FACTION_NAME_FROST]: "frost_cluster"
    }
    const clusterSlotName = hordeClusterNames[horde]

    OUTPUT_PlacementStart()
    OUTPUT_PlacementSlotTag(clusterSlotName)
    if (OUTPUT_PlacementExecute()) {
        return QUERY_PlacementResultPosition()
    } else {
        Loge(`[LFC] Couldn't find the horde cluster slot for horde ${horde}`)
        return null
    }
}

// We are looking for SLOTS instead of alive bases because we don't know if OB spawned at the time of placing a base/outpost
// There is only one slot per each mob alliance so this is safe.
const _GetMobAllianceOccupationBases = () => {
    const occupationBases = []
    const mobIds = ["creeper", "skeleton", "spider", "silverfish", "slime", "zombie"]
    for (const mob of mobIds) {
        const occupationBaseSlot = maOccupationVal[mob].baseSlot
        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(occupationBaseSlot)
        if (OUTPUT_PlacementExecute()) {
            occupationBases.push(QUERY_PlacementResultPosition())
        } else {
            Loge(`[LFC] Couldn't find the mob alliance occupation base slot for mob ${mob}`)
        }
    }
    return occupationBases
}

const _GetVillagesWithTextureStampToStomp = (stompOptions) => {
    let resultEntities = EMPTY_ENTITY_GROUP

    if (stompOptions === undefined) {
        return resultEntities
    }

    if (stompOptions.stompVillagesWithTextureStamps === undefined) {
        return resultEntities
    }

    const allVillages = QUERY_GetAllVillages()
    const allVillagesAlive = QUERY_GetAllAliveVillages()
    const allVillagesDead = OPER_Difference(allVillages, allVillagesAlive)

    for (const option of stompOptions.stompVillagesWithTextureStamps) {
        let resultTargetEntities = EMPTY_ENTITY_GROUP
        let allTargetEntities = FILTER_ByFactionName(FILTER_ByVillageSize(allVillages, option.sizes), option.factions)
        if (option.alive) {
            const allTargetEntitiesAlive = OPER_Intersection(allTargetEntities, allVillagesAlive)
            resultTargetEntities = OPER_Union(resultTargetEntities, allTargetEntitiesAlive)
        }

        if (option.dead) {
            const allTargetEntitiesDead = OPER_Intersection(allTargetEntities, allVillagesDead)
            resultTargetEntities = OPER_Union(resultTargetEntities, allTargetEntitiesDead)
        }

        if (QUERY_GetEntitiesCount(resultTargetEntities) > option.minimumPresenceToKeepFromStomping) {
            resultEntities = OPER_Union(resultEntities, resultTargetEntities)
        }
    }

    return resultEntities
}

const _IsStompingWellhouses = (stompOptions) => {
    if (stompOptions === undefined) {
        return false
    }

    if (stompOptions.stompWellhouses === undefined) {
        return false
    }

    return stompOptions.stompWellhouses
}

const _TryPlacePiglinBase = (horde, size, stompOptions = undefined) => {
    const clusterSlotPosition = _GetHordeClusterPosition(horde)
    if (clusterSlotPosition === null) {
        Loge(`[LFC PLACEMENT] ABORTING BASE PLACEMENT - HORDE CLUSTER WASN'T FOUND`)
        return false
    }

    // Distances
    let claimedAreaRadius = basePlacementConfig.claimedAreaRadius[horde][size]
    if (claimedAreaRadius === undefined) {
        claimedAreaRadius = basePlacementConfig.claimedAreaRadius[horde].default
    }

    let customWorldScale = QUERY_GetGlobalVariable(CustomSettingGV("world_world_size"))
    let fatelandsDistance = basePlacementConfig.wofMinDistance

    if (customWorldScale > 1) {
        const customScaleSqrt = Math.sqrt(customWorldScale)
        claimedAreaRadius = (claimedAreaRadius + 50) * customScaleSqrt
        fatelandsDistance = (fatelandsDistance + 50) * customScaleSqrt
    }

    const oceanMinDistance = basePlacementConfig.oceanMinDistance * claimedAreaRadius

     // We'll reserve space for the largest base it'll become
     let textureStampToEvaluate = GetStampTextureForFaction(horde, size)
     if (size === BASE_SIZE_SMALL || size === BASE_SIZE_MEDIUM) {
         textureStampToEvaluate = GetStampTextureForFaction(horde, BASE_SIZE_LARGE)
     }
 
     let textureStampPadding = basePlacementConfig.textureStampPadding[horde][size]
     if (textureStampPadding === undefined) {
         textureStampPadding = basePlacementConfig.textureStampPadding[horde].default
     }

    // All villages in the game
    const allVillages = QUERY_GetAllVillages()
    const allVillagesAlive = QUERY_GetAllAliveVillages()

    // All horde villages
    const fellowBasesAlive = FILTER_ByFactionName(FILTER_ByVillageSize(allVillagesAlive, BASE_SIZE_ALL_PORTALS_AND_BOSS), horde)
    const allMobAllianceOccupationBases = _GetMobAllianceOccupationBases()

    // All villages with texture stamp to avoid
    const villagesWithTextureStampToAvoid = OPER_Difference(allVillages, _GetVillagesWithTextureStampToStomp(stompOptions))

    // Players, WoF & etc.
    const friendlyVillagesFactions = _IsStompingWellhouses(stompOptions) ? [VILLAGE_SIZE_DEFAULT] : [VILLAGE_SIZE_DEFAULT, VILLAGE_SIZE_PLAYER]
    const friendlyVillages = FILTER_ByVillageSize(allVillagesAlive, friendlyVillagesFactions)
    const wofVillage = FILTER_ByFactionName(allVillagesAlive, WELL_OF_FATE)
    const players = GetPlayers()

    // EXPECTED EXPERIENCE: Bases are placed to form blobs
    OUTPUT_PlacementStart()
    OUTPUT_PlacementSlotTag(SLOT.BASE)

    // BBI-NOTE: (vryzhov) these lines were added in Day0 CL 293645...
    // Includes
    //OUTPUT_PlacementSetPrimaryProximityRule(clusterSlotPosition, 0, maxCenterDistance)
    //OUTPUT_PlacementAddIncludeProximityRule(fellowBasesAlive, 0, maxBaseDistance, 1)
    // BBI-NOTE: (vryzhov) ...but conflict with these lines from Main CL 292618:
    // Try to keep close to the cluster and the bases
    OUTPUT_PlacementAddClosestProximityRule(clusterSlotPosition, 49)
    OUTPUT_PlacementAddClosestProximityRule(fellowBasesAlive, 49)

    // force bases to be placed outside of the claimed area of the factions own bases
    // This, combined with the closest proximity rules above forces the bases to be placed
    // as close as possible to their faction's bases, but outside of their already claimed area

    if (customWorldScale > 1) {
        OUTPUT_PlacementAddExcludeProximityRule(fellowBasesAlive, claimedAreaRadius, BSHARP_PLACEMENT.requireAll)
    }

    // Avoid all texture stamps of all villages
    OUTPUT_PlacementSetAvoidVillageTextureStampsRule(villagesWithTextureStampToAvoid, textureStampToEvaluate, textureStampPadding, false)

    // Excludes (non-texture stamp related)
    OUTPUT_PlacementAddExcludeProximityRule(allMobAllianceOccupationBases, basePlacementConfig.minDistanceToMobAllianceOccupationBases[horde], BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(wofVillage, fatelandsDistance, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(players, basePlacementConfig.playersMinDistance, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(friendlyVillages, claimedAreaRadius + basePlacementConfig.minDistanceToFriendlyVillages, BSHARP_PLACEMENT.requireAll)

    // Elevation
    OUTPUT_PlacementAddMaxElevationRule(basePlacementConfig.maxElevationAllowed[horde])

    // Biomes
    // BBI-NOTE: (vryzhov) this line was added in Day0 CL 293645...
    //OUTPUT_PlacementPreferBiomeRule(basePlacementConfig.biomePreferences[horde])
    // BBI-NOTE: (vryzhov) ...but conflicts with this line from Main CL 292618:
    OUTPUT_PlacementPreferBiomeRule(basePlacementConfig.biomePreferences[horde], 2)
    OUTPUT_PlacementAddExcludeOceanProximityRule(oceanMinDistance)

    if (OUTPUT_PlacementExecute()) {
        // Put a claimed area in the middle
        ClaimPiglinArea(horde, QUERY_PlacementResultPosition(), claimedAreaRadius)
        SpawnBaseAtPos(QUERY_PlacementResultPosition(), horde, size, true, MAP_INVASION_RECAP.BUILT_NEW_BASE)
        Logi("[LFC PLACEMENT] Spawned a base successfully!")
        return true
    }

    Loge("[LFC PLACEMENT] Could not spawn a base!")
    return false
}

const _TryReplacePiglinBase = (horde, size, stompOptions = undefined) => {
    const clusterSlotPosition = _GetHordeClusterPosition(horde)
    if (clusterSlotPosition === null) {
        Loge(`[LFC PLACEMENT] ABORTING BASE PLACEMENT - HORDE CLUSTER WASN'T FOUND`)
        return false
    }

    // Distances
    let claimedAreaRadius = basePlacementConfig.claimedAreaRadius[horde][size]
    if (claimedAreaRadius === undefined) {
        claimedAreaRadius = basePlacementConfig.claimedAreaRadius[horde].default
    }
    const oceanMinDistance = basePlacementConfig.oceanMinDistance * claimedAreaRadius

     // We'll reserve space for the largest base it'll become
     let textureStampToEvaluate = GetStampTextureForFaction(horde, size)
     if (size === BASE_SIZE_SMALL || size === BASE_SIZE_MEDIUM) {
         textureStampToEvaluate = GetStampTextureForFaction(horde, BASE_SIZE_LARGE)
     }
 
     let textureStampPadding = basePlacementConfig.textureStampPadding[horde][size]
     if (textureStampPadding === undefined) {
         textureStampPadding = basePlacementConfig.textureStampPadding[horde].default
     }

    // All villages in the game
    const allVillages = QUERY_GetAllVillages()
    const allVillagesAlive = QUERY_GetAllAliveVillages()
    const allVillagesDead = OPER_Difference(allVillages, allVillagesAlive)

    // All horde villages
    const allBasesDead = FILTER_ByVillageSize(allVillagesDead, BASE_SIZE_ALL_PORTALS_AND_BOSS)

    // Replacement only makes sense if there are dead bases present
    if (!HasEntities(allBasesDead)) {
        Loge("[LFC PLACEMENT] Could not replace a base - no dead bases present.")
        return false
    }
    const fellowBasesAlive = FILTER_ByFactionName(FILTER_ByVillageSize(allVillagesAlive, BASE_SIZE_ALL_PORTALS_AND_BOSS), horde)
    const allMobAllianceOccupationBases = _GetMobAllianceOccupationBases()

    // All villages with texture stamp to avoid
    const villagesWithTextureStampToAvoid = OPER_Difference(allVillages, _GetVillagesWithTextureStampToStomp(stompOptions))

    // Players, WoF & etc.
    const friendlyVillagesFactions = _IsStompingWellhouses(stompOptions) ? [VILLAGE_SIZE_DEFAULT] : [VILLAGE_SIZE_DEFAULT, VILLAGE_SIZE_PLAYER]
    const friendlyVillages = FILTER_ByVillageSize(allVillagesAlive, friendlyVillagesFactions)
    const wofVillage = FILTER_ByFactionName(allVillagesAlive, WELL_OF_FATE)
    const players = GetPlayers()

    // EXPECTED EXPERIENCE: Bases are placed to form blobs
    OUTPUT_PlacementStart()
    OUTPUT_PlacementVillageSlots(allBasesDead)

    // BBI-NOTE: (vryzhov) these lines were added in Day0 CL 293645...
    // Includes
    //OUTPUT_PlacementSetPrimaryProximityRule(clusterSlotPosition, 0, maxCenterDistance)
    //OUTPUT_PlacementAddIncludeProximityRule(fellowBasesAlive, 0, maxBaseDistance, 1)?    // BBI-NOTE: (vryzhov) ...but conflict with these lines from Main CL 292618:
    // Try to keep close to the cluster and the bases
    OUTPUT_PlacementAddClosestProximityRule(clusterSlotPosition, 49)
    OUTPUT_PlacementAddClosestProximityRule(fellowBasesAlive, 49)

    // Avoid all texture stamps of all villages
    OUTPUT_PlacementSetAvoidVillageTextureStampsRule(villagesWithTextureStampToAvoid, textureStampToEvaluate, textureStampPadding, true)

    // Excludes (non-texture stamp related)
    OUTPUT_PlacementAddExcludeProximityRule(allMobAllianceOccupationBases, basePlacementConfig.minDistanceToMobAllianceOccupationBases[horde], BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(wofVillage, basePlacementConfig.wofMinDistance, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(players, basePlacementConfig.playersMinDistance, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(friendlyVillages, claimedAreaRadius + basePlacementConfig.minDistanceToFriendlyVillages, BSHARP_PLACEMENT.requireAll)

    // Elevation
    OUTPUT_PlacementAddMaxElevationRule(basePlacementConfig.maxElevationAllowed[horde])

    // Biomes
    // BBI-NOTE: (vryzhov) this line was added in Day0 CL 293645...
    //OUTPUT_PlacementPreferBiomeRule(basePlacementConfig.biomePreferences[horde])
    // BBI-NOTE: (vryzhov) ...but conflicts with this line from Main CL 292618:
    OUTPUT_PlacementPreferBiomeRule(basePlacementConfig.biomePreferences[horde], 2)
    OUTPUT_PlacementAddExcludeOceanProximityRule(oceanMinDistance)

    if (OUTPUT_PlacementExecute()) {
        // Put a claimed area in the middle
        ClaimPiglinArea(horde, QUERY_PlacementResultPosition(), claimedAreaRadius)
        SpawnBaseAtPos(QUERY_PlacementResultPosition(), horde, size, true, MAP_INVASION_RECAP.BUILT_NEW_BASE)
        Logi("[LFC PLACEMENT] Spawned a base successfully!")
        return true
    }

    Loge("[LFC PLACEMENT] Could not spawn a base!")
    return false
}

// Primary function to perform a placement for an Act 2 base
// The main philosophy is that we have a perfect placement and various fallbacks
// Fallbacks are particularly important so that bases essential to the progression will almost always place (boss bases)
const PlacePiglinBase = (horde, size) => {
    // Perfect place -> replace
    Logi(`[LFC PLACEMENT] Attemping a perfect placement for ${horde}, ${size}`)
    if (_TryPlacePiglinBase(horde, size)) {
        return true
    }
    Logi(`[LFC PLACEMENT] Attemping a perfect replacement for ${horde}, ${size}`)
    if (_TryReplacePiglinBase(horde, size)) {
        return true
    }

    // The next round of fallbacks is only for boss bases since they are critical to the game
    if (size !== BASE_SIZE_BOSS) {
        return false
    }

    // Place (stomp alive/dead outposts) -> replace
    const stompOptionsAliveDeadOutposts = {
        stompVillagesWithTextureStamps: [
            {
                factions: FACTION_PIGLINS,
                sizes: [BASE_SIZE_OUTPOST],
                alive: true,
                dead: true,
                minimumPresenceToKeepFromStomping: 0
            }
        ],
        stompWellhouses: false
    }
    Logi(`[LFC PLACEMENT] Attemping a placement (stomp alive/dead outposts) for ${horde}, ${size}`)
    if (_TryPlacePiglinBase(horde, size, stompOptionsAliveDeadOutposts)) {
        return true
    }
    Logi(`[LFC PLACEMENT] Attemping a replacement (stomp alive/dead outposts) for ${horde}, ${size}`)
    if (_TryReplacePiglinBase(horde, size, stompOptionsAliveDeadOutposts)) {
        return true
    }

    // Place (stomp alive/dead outposts and wellhouses) -> replace
    const stompOptionsAliveDeadOutpostsAndWellhouses = {
        stompVillagesWithTextureStamps: [
            {
                factions: FACTION_PIGLINS,
                sizes: [BASE_SIZE_OUTPOST],
                alive: true,
                dead: true,
                minimumPresenceToKeepFromStomping: 0
            }
        ],
        stompWellhouses: true
    }
    Logi(`[LFC PLACEMENT] Attemping a placement (stomp alive/dead outposts and wellhouses) for ${horde}, ${size}`)
    if (_TryPlacePiglinBase(horde, size, stompOptionsAliveDeadOutpostsAndWellhouses)) {
        return true
    }
    Logi(`[LFC PLACEMENT] Attemping a replacement (stomp alive/dead outposts and wellhouses) for ${horde}, ${size}`)
    if (_TryReplacePiglinBase(horde, size, stompOptionsAliveDeadOutpostsAndWellhouses)) {
        return true
    }

    // Place (stomp alive outposts, wellhouses and all dead bases) -> do NOT replace (already not caring about dead bases)
    const stompOptionsAliveOutpostsWellhousesAndDeadBases = {
        stompVillagesWithTextureStamps: [
            {
                factions: FACTION_PIGLINS,
                sizes: [BASE_SIZE_OUTPOST],
                alive: true,
                dead: false,
                minimumPresenceToKeepFromStomping: 0
            },
            {
                factions: FACTION_PIGLINS,
                sizes: BASE_SIZE_ALL,
                alive: false,
                dead: true,
                minimumPresenceToKeepFromStomping: 0
            }
        ],
        stompWellhouses: true
    }
    Logi(`[LFC PLACEMENT] Attemping a placement (stomp alive outposts, wellhouses and all dead bases) for ${horde}, ${size}`)
    if (_TryPlacePiglinBase(horde, size, stompOptionsAliveOutpostsWellhousesAndDeadBases)) {
        return true
    }
    
    // LAST RESORT
    // Place (stomp all alive/dead invasion bases, wellhouses and dead boss bases, but make sure to keep 1 horde base alive) -> do NOT replace (already not caring about dead bases)
    const stompOptionsAllBasesWellhousesAndDeadBossBases = {
        stompVillagesWithTextureStamps: [
            {
                factions: [FACTION_NAME_ATTACK],
                sizes: BASE_SIZE_ALL_PORTALS,
                alive: true,
                dead: false,
                minimumPresenceToKeepFromStomping: 1
            },
            {
                factions: [FACTION_NAME_DEFEND],
                sizes: BASE_SIZE_ALL_PORTALS,
                alive: true,
                dead: false,
                minimumPresenceToKeepFromStomping: 1
            },
            {
                factions: [FACTION_NAME_OBSTACLE],
                sizes: BASE_SIZE_ALL_PORTALS,
                alive: true,
                dead: false,
                minimumPresenceToKeepFromStomping: 1
            },
            {
                factions: [FACTION_NAME_FROST],
                sizes: BASE_SIZE_ALL_PORTALS,
                alive: true,
                dead: false,
                minimumPresenceToKeepFromStomping: 1
            },
            {
                factions: FACTION_PIGLINS,
                sizes: [BASE_SIZE_OUTPOST],
                alive: true,
                dead: false,
                minimumPresenceToKeepFromStomping: 0
            },
            {
                factions: FACTION_PIGLINS,
                sizes: BASE_SIZE_ALL,
                alive: false,
                dead: true,
                minimumPresenceToKeepFromStomping: 0
            }
        ],
        stompWellhouses: true
    }
    Logi(`[LFC PLACEMENT] Attemping a placement (stomp all alive/dead invasion bases, wellhouses and dead boss bases) for ${horde}, ${size}`)
    return _TryPlacePiglinBase(horde, size, stompOptionsAllBasesWellhousesAndDeadBossBases)
}

const _TryPlacePiglinOutpost = (horde, replaceMode) => {
    const clusterSlotPosition = _GetHordeClusterPosition(horde)
    if (clusterSlotPosition === null) {
        Loge(`[LFC PLACEMENT] ABORTING BASE PLACEMENT - HORDE CLUSTER WASN'T FOUND`)
        return false
    }

    // All villages in the game
    const allVillages = QUERY_GetAllVillages()

    // All villages
    const allVillagesAlive = QUERY_GetAllAliveVillages()
    const allVillagesDead = OPER_Difference(allVillages, allVillagesAlive)

    // All horde villages
    const allOutpostsDead = FILTER_ByVillageSize(allVillagesDead, [BASE_SIZE_OUTPOST])

    // Replacement only makes sense if there are dead outposts present
    if (replaceMode && !HasEntities(allOutpostsDead)) {
        Loge("[LFC PLACEMENT] Could not replace an outpost - no dead bases present.")
        return false
    }
    const fellowOutpostsAlive = FILTER_ByFactionName(FILTER_ByVillageSize(allVillagesAlive, [BASE_SIZE_OUTPOST]), horde)
    const allMobAllianceOccupationBases = _GetMobAllianceOccupationBases()

    // Players, WoF & etc.
    const wellhouses = FILTER_ByVillageSize(allVillagesAlive, VILLAGE_SIZE_PLAYER)
    const wofVillage = FILTER_ByFactionName(allVillagesAlive, WELL_OF_FATE)
    const players = GetPlayers()

    // Place them close to center but far from other outposts
    OUTPUT_PlacementStart()
    if (!replaceMode) {
        OUTPUT_PlacementSlotTag(SLOT.BASE)
    } else {
        // We are searching to replace a dead outpost
        OUTPUT_PlacementVillageSlots(allOutpostsDead)
    }

    // Keep them close to center
    // BBI-NOTE: (vryzhov) this line was added in Day0 CL 293645...
    //OUTPUT_PlacementSetPrimaryProximityRule(clusterSlotPosition, 0, maxCenterDistance)
    // BBI-NOTE: (vryzhov) ...but conflicts with this line from Main CL 292618:
    OUTPUT_PlacementAddClosestProximityRule(clusterSlotPosition, 29)

    let customWorldScale = QUERY_GetGlobalVariable(CustomSettingGV("world_world_size"))
    let fatelandsDistance = outpostPlacementConfig.wofMinDistance

    if (customWorldScale > 1) {
        fatelandsDistance = (fatelandsDistance + 50) * Math.sqrt(customWorldScale)
    }

    // Place them around the perimeter of their fellow claimed areas
    // BBI-NOTE: (vryzhov) this line was added in Day0 CL 293645...
    //OUTPUT_PlacementAddIncludeClaimedAreasProximityRule(horde, outpostPlacementConfig.claimedAreaMinDistance, outpostPlacementConfig.claimedAreaMinDistance + maxClaimedAreaDistance)
    // BBI-NOTE: (vryzhov) ...but conflicts with this line from Main CL 292618:
    OUTPUT_PlacementAddIncludeClaimedAreasProximityRule(horde, outpostPlacementConfig.claimedAreaMinDistance, outpostPlacementConfig.claimedAreaMaxDistance)

    // Avoid all texture stamps of all villages
    OUTPUT_PlacementSetAvoidVillageTextureStampsRule(allVillages, GetStampTextureForFaction(horde, BASE_SIZE_OUTPOST), outpostPlacementConfig.textureStampPadding[horde], replaceMode)

    // Avoid all claimed areas
    for (const piglinHorde of FACTION_PIGLINS) {
        OUTPUT_PlacementAddExcludeClaimedAreasProximityRule(piglinHorde, outpostPlacementConfig.claimedAreaMinDistance)
    }

    // Keep away from fellow outposts to try and place them AROUND the blob
    // BBI-NOTE: (vryzhov) this line was added in Day0 CL 293645...
    //OUTPUT_PlacementAddExcludeProximityRule(fellowOutpostsAlive, minOutpostDistance, BSHARP_PLACEMENT.requireAll)
    // BBI-NOTE: (vryzhov) ...but conflicts with this line from Main CL 292618:
    OUTPUT_PlacementAddFarthestProximityRule(fellowOutpostsAlive, 69)

    // Excludes (non-texture stamp related)
    OUTPUT_PlacementAddExcludeProximityRule(allMobAllianceOccupationBases, outpostPlacementConfig.minDistanceToMobAllianceOccupationBases[horde], BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(wellhouses, outpostPlacementConfig.wellhousesMinDistance, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(wofVillage, fatelandsDistance, BSHARP_PLACEMENT.requireAll)
    OUTPUT_PlacementAddExcludeProximityRule(players, outpostPlacementConfig.playersMinDistance, BSHARP_PLACEMENT.requireAll)

    // Elevation
    OUTPUT_PlacementAddMaxElevationRule(outpostPlacementConfig.maxElevationAllowed[horde])

    // Biomes
    // BBI-NOTE: (vryzhov) this line was added in Day0 CL 293645...
    //OUTPUT_PlacementPreferBiomeRule(outpostPlacementConfig.biomePreferences[horde])
    // BBI-NOTE: (vryzhov) ...but conflicts with this line from Main CL 292618:
    OUTPUT_PlacementPreferBiomeRule(outpostPlacementConfig.biomePreferences[horde], 2)
    OUTPUT_PlacementAddExcludeOceanProximityRule(outpostPlacementConfig.oceanMinDistance)

    if (OUTPUT_PlacementExecute()) {
        SpawnDefensiveOutpostAtPosition(QUERY_PlacementResultPosition(), horde)
        Logi("[LFC PLACEMENT] Spawned an outpost successfully!")
        return true
    }

    Loge("[LFC PLACEMENT] Could not spawn an outpost!")
    return false
}

const PlacePiglinOutpost = (horde) => {
    // First try placing outpost while avoiding everything
    Logi(`[LFC PLACEMENT] Attemping a perfect placement for ${horde}, ${BASE_SIZE_OUTPOST}`)
    if (_TryPlacePiglinOutpost(horde, false)) {
        return true
    }
    
    // If failed, try to replace an existing dead outpost
    Logi(`[LFC PLACEMENT] Attemping a perfect replacement for ${horde}, ${BASE_SIZE_OUTPOST}`)
    return _TryPlacePiglinOutpost(horde, true)
}
