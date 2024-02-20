const invasionHelperVal = {
    invasionPhaseVar: "invasionSystemCurrentPhase",
    factionObjects: {
        attackFaction: {
            name: FACTION_NAME_ATTACK,
            villageArchetype: "badger:piglin_attack",
            villageArchetypes: {
                [BASE_SIZE_VANGUARD]: "badger:piglin_attack_small",
                [BASE_SIZE_OUTPOST]: "badger:piglin_attack_outpost",
                [BASE_SIZE_SMALL]: "badger:piglin_attack_small",
                [BASE_SIZE_MEDIUM]: "badger:piglin_attack_medium",
                [BASE_SIZE_LARGE]: "badger:piglin_attack_large"
            },
            firstBasePlacement: [
                /*
                {
                    wofMinDistance: OPTIONAL distance from WoF
                    wofMaxDistance: OPTIONAL range from WoF
                    otherFactionDistance: OPTIONAL distance from all other faction bases
                    otherDistance: OPTIONAL distance from everything else
                    playerDistance: OPTIONAL distance from player
                }
                */
                { wofMinDistance: 1800, wofMaxDistance: 3100, playerDistance: 500, otherFactionDistance: 3200, otherDistance: 750 },
                { wofMinDistance: 1600, wofMaxDistance: 3300, playerDistance: 500, otherFactionDistance: 2800, otherDistance: 500 },
                { wofMinDistance: 1500, wofMaxDistance: 3500, playerDistance: 500, otherFactionDistance: 2500, otherDistance: 400 },
                { otherFactionDistance: 600, otherDistance: 400 }
            ],
            basePlacement: {
                newBaseAdjacents: [BASE_SIZE_LARGE, BASE_SIZE_MEDIUM, BASE_SIZE_SMALL],
                ruleList: [
                    /*
                    {
                        ownMinDistance: OPTIONAL distance from own bases defined in `newBaseAdjacents`
                        ownMinDistance: OPTIONAL range from own bases defined in `newBaseAdjacents`
                        outpostDistance: Distance from any outpost (of any horde)
                        otherDistance: OPTIONAL distance away from everything else
                        playerDistance: OPTIONAL distance from player
                    }
                    */
                    { ownMinDistance: 600, ownMaxDistance: 900, outpostDistance: 250, otherDistance: 500, playerDistance: 500 },
                    { ownMinDistance: 600, ownMaxDistance: 900, outpostDistance: 250, otherDistance: 500 },
                    { ownMinDistance: 400, ownMaxDistance: 1300, outpostDistance: 100, otherDistance: 500 }
                ],
                initRuleList: [
                    /*
                    {
                        THIS IS USED FOR THE INITIAL SET OF BASES AFTER THE FIRST BASE WHEN ACT 2 IS GENERATED
                        ownMinDistance: OPTIONAL distance from own bases defined in `newBaseAdjacents`
                        ownMinDistance: OPTIONAL range from own bases defined in `newBaseAdjacents`
                        otherDistance: OPTIONAL distance away from everything else
                        playerDistance: OPTIONAL distance from player
                    }
                    */
                    { ownMinDistance: 500, ownMaxDistance: 850, otherDistance: 300, playerDistance: 500 },
                    { ownMinDistance: 500, ownMaxDistance: 850, otherDistance: 300 }
                ]
            },
            defensiveOutpostPlacement: [
                /*
                {
                    ownMinDistance: distance from own portal bases
                    ownMaxDistance: range from own portal bases
                    outpostDistance: distance from defensive outpost
                    otherDistance: distance from any other village not included in above
                    playerDistance: OPTIONAL distance from player
                }
                */
                { ownMinDistance: 300, ownMaxDistance: 900, outpostDistance: 200, otherDistance: 200, playerDistance: 500 },
                { ownMinDistance: 300, ownMaxDistance: 900, outpostDistance: 200, otherDistance: 200 },
                { ownMinDistance: 300, ownMaxDistance: 1200, outpostDistance: 200, otherDistance: 200 },
                { outpostDistance: 200, otherDistance: 200 }
            ],
            initDefensiveOutpostPlacement: [
                /*
                {
                    ownMinDistance: distance from own portal bases
                    ownMaxDistance: range from own portal bases
                    outpostDistance: distance from defensive outpost
                    otherDistance: distance from any other village not included in above
                    playerDistance: OPTIONAL distance from player
                }
                */
                { ownMinDistance: 300, ownMaxDistance: 600, outpostDistance: 150, otherDistance: 200, playerDistance: 500 },
                { ownMinDistance: 300, ownMaxDistance: 600, outpostDistance: 150, otherDistance: 200 },
                { ownMinDistance: 300, outpostDistance: 150, otherDistance: 200 }
            ],
            offensiveOutpostPlacement: [
                /*
                {
                    ownMaxDistance: OPTIONAL range from own bases
                    villageMaxDistance: OPTIONAL range from village
                    allDistance: OPTIONAL distance away from all villages
                    outpostDistance: OPTIONAL distance away from all offensive outpost (can be used to avoid villages with an outpost already)
                    playerDistance: OPTIONAL distance away fro player
                }
                */
                { ownMaxDistance: 780, villageMaxDistance: 880, allDistance: 275, playerDistance: 500 },
                { ownMaxDistance: 1560, villageMaxDistance: 880, allDistance: 275, playerDistance: 500 },
                { ownMaxDistance: 1560, villageMaxDistance: 880, allDistance: 275 }
            ],
            farBasePlacement: [
                /*
                {
                    ownMaxDistance: range from own bases
                    villageMaxDistance: range from village
                    ownMinDistance: OPTIONAL minimum distance from own bases
                    allDistance: OPTIONAL distance away from all villages
                    outpostDistance: OPTIONAL distance away from all offensive outpost (can be used to avoid villages with an outpost already)
                    playerDistance: OPTIONAL distance away fro player
                }
                */
                { ownMaxDistance: 1600, villageMaxDistance: 800, ownMinDistance: 1000, allDistance: 500, outpostDistance: 250, playerDistance: 500 },
                { ownMaxDistance: 1600, villageMaxDistance: 1500, ownMinDistance: 1000, allDistance: 500, outpostDistance: 250, playerDistance: 500 },
                { ownMaxDistance: 1600, villageMaxDistance: 2700, ownMinDistance: 800, allDistance: 500, outpostDistance: 250, playerDistance: 500 },
                { ownMaxDistance: 2400, villageMaxDistance: 3000, ownMinDistance: 800, allDistance: 500 }
            ]
        },
        defendFaction: {
            name: FACTION_NAME_DEFEND,
            villageArchetype: "badger:piglin_defend",
            villageArchetypes: {
                [BASE_SIZE_VANGUARD]: "badger:piglin_defend_small",
                [BASE_SIZE_OUTPOST]: "badger:piglin_defend_outpost",
                [BASE_SIZE_SMALL]: "badger:piglin_defend_small",
                [BASE_SIZE_MEDIUM]: "badger:piglin_defend_medium",
                [BASE_SIZE_LARGE]: "badger:piglin_defend_large",
                [BASE_SIZE_BOSS]: "badger:piglin_defend_boss"
            },
            firstBasePlacement: [
                { wofMinDistance: 1800, wofMaxDistance: 2500, playerDistance: 500, otherFactionDistance: 3200, otherDistance: 750 },
                { wofMinDistance: 1600, wofMaxDistance: 2800, playerDistance: 500, otherFactionDistance: 2800, otherDistance: 500 },
                { wofMinDistance: 1500, wofMaxDistance: 3000, playerDistance: 500, otherFactionDistance: 2500, otherDistance: 400 },
                { otherFactionDistance: 600, otherDistance: 400 }
            ],
            basePlacement: {
                newBaseAdjacents: [BASE_SIZE_LARGE, BASE_SIZE_MEDIUM, BASE_SIZE_SMALL],
                ruleList: [
                    { ownMinDistance: 500, ownMaxDistance: 950, outpostDistance: 250, otherDistance: 500, playerDistance: 500 },
                    { ownMinDistance: 500, ownMaxDistance: 950, outpostDistance: 250, otherDistance: 500 },
                    { ownMinDistance: 400, ownMaxDistance: 1400, outpostDistance: 250, otherDistance: 500 }
                ],
                initRuleList: [
                    { ownMinDistance: 400, ownMaxDistance: 900, otherDistance: 300, playerDistance: 500 },
                    { ownMinDistance: 400, ownMaxDistance: 900, otherDistance: 300 }
                ]
            },
            defensiveOutpostPlacement: [
                { ownMinDistance: 250, ownMaxDistance: 950, outpostDistance: 200, otherDistance: 200, playerDistance: 500 },
                { ownMinDistance: 250, ownMaxDistance: 950, outpostDistance: 200, otherDistance: 200 },
                { ownMinDistance: 250, ownMaxDistance: 1400, outpostDistance: 200, otherDistance: 200 },
                { outpostDistance: 200, otherDistance: 200 }
            ],
            initDefensiveOutpostPlacement: [
                { ownMinDistance: 200, ownMaxDistance: 800, outpostDistance: 150, otherDistance: 200, playerDistance: 500 },
                { ownMinDistance: 200, ownMaxDistance: 800, outpostDistance: 150, otherDistance: 200 },
                { ownMinDistance: 200, outpostDistance: 150, otherDistance: 200 }
            ],
            offensiveOutpostPlacement: [
                { ownMaxDistance: 880, villageMaxDistance: 980, allDistance: 275, playerDistance: 500 },
                { ownMaxDistance: 1460, villageMaxDistance: 980, allDistance: 275, playerDistance: 500 }
            ],
            farBasePlacement: [
                { ownMaxDistance: 1700, villageMaxDistance: 800, ownMinDistance: 800, allDistance: 500, outpostDistance: 200, playerDistance: 500 },
                { ownMaxDistance: 1700, villageMaxDistance: 1600, ownMinDistance: 800, allDistance: 500, outpostDistance: 200, playerDistance: 500 },
                { ownMaxDistance: 1700, villageMaxDistance: 2400, ownMinDistance: 600, allDistance: 500, outpostDistance: 200, playerDistance: 500 },
                { ownMaxDistance: 2400, villageMaxDistance: 2500, ownMinDistance: 600, allDistance: 500 }
            ]
        },
        frostFaction: {
            name: FACTION_NAME_FROST,
            villageArchetype: "badger:piglin_frost",
            villageArchetypes: {
                [BASE_SIZE_VANGUARD]: "badger:piglin_frost_small",
                [BASE_SIZE_OUTPOST]: "badger:piglin_frost_outpost",
                [BASE_SIZE_SMALL]: "badger:piglin_frost_small",
                [BASE_SIZE_MEDIUM]: "badger:piglin_frost_medium",
                [BASE_SIZE_LARGE]: "badger:piglin_frost_large",
                [BASE_SIZE_BOSS]: "badger:piglin_frost_boss"
            },
            firstBasePlacement: [
                { wofMinDistance: 1800, wofMaxDistance: 2500, playerDistance: 500, otherFactionDistance: 3200, otherDistance: 750 },
                { wofMinDistance: 1600, wofMaxDistance: 2900, playerDistance: 500, otherFactionDistance: 2800, otherDistance: 500 },
                { wofMinDistance: 1500, wofMaxDistance: 3200, playerDistance: 500, otherFactionDistance: 2500, otherDistance: 400 },
                { otherFactionDistance: 600, otherDistance: 400 }
            ],
            basePlacement: {
                newBaseAdjacents: [BASE_SIZE_LARGE, BASE_SIZE_MEDIUM, BASE_SIZE_SMALL],
                ruleList: [
                    { ownMinDistance: 500, ownMaxDistance: 950, outpostDistance: 250, otherDistance: 500, playerDistance: 500 },
                    { ownMinDistance: 500, ownMaxDistance: 950, outpostDistance: 250, otherDistance: 500 },
                    { ownMinDistance: 400, ownMaxDistance: 1400, outpostDistance: 250, otherDistance: 500 }
                ],
                initRuleList: [
                    { ownMinDistance: 400, ownMaxDistance: 900, otherDistance: 300, playerDistance: 500 },
                    { ownMinDistance: 400, ownMaxDistance: 900, otherDistance: 300 }
                ]
            },
            defensiveOutpostPlacement: [
                { ownMinDistance: 250, ownMaxDistance: 950, outpostDistance: 200, otherDistance: 200, playerDistance: 500 },
                { ownMinDistance: 250, ownMaxDistance: 950, outpostDistance: 200, otherDistance: 200 },
                { ownMinDistance: 250, ownMaxDistance: 1300, outpostDistance: 200, otherDistance: 200 },
                { outpostDistance: 200, otherDistance: 200 }
            ],
            initDefensiveOutpostPlacement: [
                { ownMinDistance: 200, ownMaxDistance: 800, outpostDistance: 150, otherDistance: 200, playerDistance: 500 },
                { ownMinDistance: 200, ownMaxDistance: 800, outpostDistance: 150, otherDistance: 200 },
                { ownMinDistance: 200, outpostDistance: 150, otherDistance: 200 }
            ],
            offensiveOutpostPlacement: [
                { ownMaxDistance: 980, villageMaxDistance: 980, allDistance: 275, playerDistance: 500 },
                { ownMaxDistance: 1460, villageMaxDistance: 980, allDistance: 275, playerDistance: 500 }
            ],
            farBasePlacement: [
                { ownMaxDistance: 1800, villageMaxDistance: 900, ownMinDistance: 800, allDistance: 500, outpostDistance: 200, playerDistance: 500 },
                { ownMaxDistance: 1800, villageMaxDistance: 1500, ownMinDistance: 800, allDistance: 500, outpostDistance: 200, playerDistance: 500 },
                { ownMaxDistance: 1800, villageMaxDistance: 2400, ownMinDistance: 600, allDistance: 500, outpostDistance: 200, playerDistance: 500 },
                { ownMaxDistance: 2400, villageMaxDistance: 2400, ownMinDistance: 600, allDistance: 500 }
            ]
        },
        obstacleFaction: {
            name: FACTION_NAME_OBSTACLE,
            villageArchetype: "badger:piglin_obstacle",
            villageArchetypes: {
                [BASE_SIZE_VANGUARD]: "badger:piglin_obstacle_small",
                [BASE_SIZE_OUTPOST]: "badger:piglin_obstacle_outpost",
                [BASE_SIZE_SMALL]: "badger:piglin_obstacle_small",
                [BASE_SIZE_MEDIUM]: "badger:piglin_obstacle_medium",
                [BASE_SIZE_LARGE]: "badger:piglin_obstacle_large",
                [BASE_SIZE_BOSS]: "badger:piglin_obstacle_boss"
            },
            firstBasePlacement: [
                { wofMinDistance: 1800, wofMaxDistance: 2500, playerDistance: 500, otherFactionDistance: 3200, otherDistance: 750 },
                { wofMinDistance: 1600, wofMaxDistance: 2800, playerDistance: 500, otherFactionDistance: 2800, otherDistance: 500 },
                { wofMinDistance: 1500, wofMaxDistance: 3000, playerDistance: 500, otherFactionDistance: 2500, otherDistance: 400 },
                { otherFactionDistance: 600, otherDistance: 400 }
            ],
            basePlacement: {
                newBaseAdjacents: [BASE_SIZE_LARGE, BASE_SIZE_MEDIUM, BASE_SIZE_SMALL],
                ruleList: [
                    { ownMinDistance: 550, ownMaxDistance: 900, outpostDistance: 250, otherDistance: 500, playerDistance: 500 },
                    { ownMinDistance: 550, ownMaxDistance: 900, outpostDistance: 250, otherDistance: 500 },
                    { ownMinDistance: 400, ownMaxDistance: 1400, outpostDistance: 250, otherDistance: 500 }
                ],
                initRuleList: [
                    { ownMinDistance: 400, ownMaxDistance: 800, otherDistance: 300, playerDistance: 500 },
                    { ownMinDistance: 400, ownMaxDistance: 800, otherDistance: 300 }
                ]
            },
            defensiveOutpostPlacement: [
                { ownMinDistance: 250, ownMaxDistance: 950, outpostDistance: 200, otherDistance: 200, playerDistance: 500 },
                { ownMinDistance: 250, ownMaxDistance: 950, outpostDistance: 200, otherDistance: 200 },
                { ownMinDistance: 250, ownMaxDistance: 1400, outpostDistance: 200, otherDistance: 200 },
                { outpostDistance: 200, otherDistance: 200 }
            ],
            initDefensiveOutpostPlacement: [
                { ownMinDistance: 200, ownMaxDistance: 800, outpostDistance: 150, otherDistance: 200, playerDistance: 500 },
                { ownMinDistance: 200, ownMaxDistance: 800, outpostDistance: 150, otherDistance: 200 },
                { ownMinDistance: 200, outpostDistance: 150, otherDistance: 200 }
            ],
            offensiveOutpostPlacement: [
                { ownMaxDistance: 980, villageMaxDistance: 980, allDistance: 275, playerDistance: 500 },
                { ownMaxDistance: 1660, villageMaxDistance: 980, allDistance: 275, playerDistance: 500 }
            ],
            farBasePlacement: [
                { ownMaxDistance: 1900, villageMaxDistance: 900, ownMinDistance: 850, allDistance: 500, outpostDistance: 200, playerDistance: 500 },
                { ownMaxDistance: 1900, villageMaxDistance: 1500, ownMinDistance: 850, allDistance: 500, outpostDistance: 200, playerDistance: 500 },
                { ownMaxDistance: 1900, villageMaxDistance: 2500, ownMinDistance: 600, allDistance: 500, outpostDistance: 200, playerDistance: 500 },
                { ownMaxDistance: 2700, villageMaxDistance: 2600, ownMinDistance: 600, allDistance: 500 }
            ]
        }
    }
}

const PLACEMENT_NAME = {
    FOREST_VILLAGE: "forest_1_village",
    FROSTLANDS_VILLAGE: "frostlands_1_village",
    DRYLANDS_VILLAGE: "drylands_1_village",
    WETLANDS_VILLAGE: "wetlands_1_village",
    GRASSLANDS_VILLAGE: "grasslands_1_village",
    BROKENLANDS_VILLAGE: "brokenlands_1_village",
    FATEFUL_LAND_VILLAGE: "fateful_land_1_village",
    JUNGLE_VILLAGE: "jungle_1_village",
    MOUNTAIN_VILLAGE: "mountain_1_village",
    CREEPER_ALLIANCE: "creeper_alliance",
    SKELETON_ALLIANCE: "skeleton_alliance",
    SPIDER_ALLIANCE: "spider_alliance",
    ZOMBIE_ALLIANCE: "zombie_alliance"
}

const PLACEMENT_NAME_MAP = {
    //Villages
    [PLACEMENT_NAME.FOREST_VILLAGE]: "villageForestPiglinBaseSlot",
    [PLACEMENT_NAME.FROSTLANDS_VILLAGE]: "villageFrostlandsPiglinBaseSlot",
    [PLACEMENT_NAME.DRYLANDS_VILLAGE]: "villageDrylandsPiglinBaseSlot",
    [PLACEMENT_NAME.WETLANDS_VILLAGE]: "villageWetlandsPiglinBaseSlot",
    [PLACEMENT_NAME.GRASSLANDS_VILLAGE]: "villageGrasslandsPiglinBaseSlot",
    [PLACEMENT_NAME.BROKENLANDS_VILLAGE]: "villageBrokenlandsPiglinBaseSlot",
    [PLACEMENT_NAME.FATEFUL_LAND_VILLAGE]: "villageFatefulLandPiglinBaseSlot",
    [PLACEMENT_NAME.JUNGLE_VILLAGE]: "villageJunglePiglinBaseSlot",
    [PLACEMENT_NAME.MOUNTAIN_VILLAGE]: "villageMountainPiglinBaseSlot",
    //Mob alliances
    [PLACEMENT_NAME.CREEPER_ALLIANCE]: "creeperPiglinBaseSlot",
    [PLACEMENT_NAME.SKELETON_ALLIANCE]: "skeletonPiglinBaseSlot",
    [PLACEMENT_NAME.SPIDER_ALLIANCE]: "spiderPiglinBaseSlot",
    [PLACEMENT_NAME.ZOMBIE_ALLIANCE]: "zombiePiglinBaseSlot"
}

const PIGLIN_CAMP_PLACEMENT_NAME_MAP = {
    [PLACEMENT_NAME.FOREST_VILLAGE]: "act1CampsSlotForest",
    [PLACEMENT_NAME.FROSTLANDS_VILLAGE]: "act1CampsSlotFrostlands",
    [PLACEMENT_NAME.DRYLANDS_VILLAGE]: "act1CampsSlotDrylands",
    [PLACEMENT_NAME.WETLANDS_VILLAGE]: "act1CampsSlotWetlands",
    [PLACEMENT_NAME.GRASSLANDS_VILLAGE]: "act1CampsSlotGrasslands",
    [PLACEMENT_NAME.BROKENLANDS_VILLAGE]: "act1CampsSlotBrokenlands",
    [PLACEMENT_NAME.FATEFUL_LAND_VILLAGE]: "act1CampsSlotFatefulLand",
    [PLACEMENT_NAME.JUNGLE_VILLAGE]: "act1CampsSlotJungle",
    [PLACEMENT_NAME.MOUNTAIN_VILLAGE]: "act1CampsSlotMountain"
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IsVillageUnderInvasionAttack = (villageId) => {
    const allVillageFactions = FACTION_MOB_ALLIANCES.concat(CULTURE_NAME_VILLAGERS)
    return HasEntities(FILTER_InvasionParticipant(FILTER_ByFactionName(GetVillageEntityFromID(villageId), allVillageFactions), true))
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IsVillageAlive = (villageId) => {
    return HasEntities(FILTER_ByVillageID(QUERY_GetAllAliveVillages(), villageId))
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetFactionBases = (factionName) => {
    return FILTER_ByFactionName(QUERY_GetAllAliveVillages(), factionName)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetAllInvasionBases = () => {
    return FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_PIGLINS)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetAliveFactions = () => {
    const result = []
    if (QUERY_GetGlobalVariable(INVASION_PHASE_STATE.ATTACK_HORDE_DESTROYED) === 0) {
        result.push(FACTION_NAME_ATTACK)
    }

    if (QUERY_GetGlobalVariable(INVASION_PHASE_STATE.DEFEND_HORDE_DESTROYED) === 0) {
        result.push(FACTION_NAME_DEFEND)
    }

    if (QUERY_GetGlobalVariable(INVASION_PHASE_STATE.FROST_HORDE_DESTROYED) === 0) {
        result.push(FACTION_NAME_FROST)
    }

    if (QUERY_GetGlobalVariable(INVASION_PHASE_STATE.OBSTACLE_HORDE_DESTROYED) === 0) {
        result.push(FACTION_NAME_OBSTACLE)
    }

    return result
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetAllFriendlyVillages = () => {
    return FILTER_ByFactionName(QUERY_GetAllAliveVillages(), CULTURE_NAME_VILLAGERS)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetAllMobAllianceVillages = () => {
    return FILTER_ByFactionName(QUERY_GetAllAliveVillages(), FACTION_MOB_ALLIANCES)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetDelayedInvasionAction = (villageId) => {
    return QUERY_GetDelayedInvasionAction(GetVillageEntityFromID(villageId))
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HasDelayedInvasionAction = (villageId) => {
    const invasionAction = GetDelayedInvasionAction(villageId)
    return invasionAction !== ""
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IsTargetOfDelayedInvasionAttack = (villageId) => {
    return GetDelayedInvasionAction(villageId) === FACTION_ACTION_ATTACK_VILLAGE_V2
}

const _GetPlacementSlotName = (placementMap, villageEntity) => {
    let placementSlotName = ""
    if (QUERY_HasWorldPlacementName(villageEntity)) {
        const villagePlacementName = QUERY_GetWorldPlacementName(villageEntity)
        placementSlotName = placementMap[villagePlacementName]
    }
    if (placementSlotName === "") {
        Loge("Placement slot name For Village not found!")
    }
    return placementSlotName
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetPlacementSlotFromVillage = (villageEntity) => {
    return _GetPlacementSlotName(PLACEMENT_NAME_MAP, villageEntity)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetCampPlatementSlotFromVillage = (villageEntity) => {
    return _GetPlacementSlotName(PIGLIN_CAMP_PLACEMENT_NAME_MAP, villageEntity)
}

// === CLAIM AREA ===

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ClaimPregameAreas = (faction) => {
    const centerClaimedAreaDef = CLAIMED_AREAS_DEF[faction].PREGAME_CENTER
    const sideClaimedAreaDef = CLAIMED_AREAS_DEF[faction].PREGAME_SIDE

    const placementObject = PlacePregameCenterClaimedArea(faction, centerClaimedAreaDef.radius, centerClaimedAreaDef.numOutposts)
    if (placementObject === null) {
        Loge(`Failed to place central claimed area - the game can't continue without this.`)
        return
    }

    // Spawn center claimed area manually
    const centerClaimedArea = ClaimPiglinArea(faction, placementObject.claimedArea, centerClaimedAreaDef.radius)
    for (const outpostPosition of placementObject.outposts) {
        SpawnDefensiveOutpostAtPosition(outpostPosition, faction)
    }

    // Side areas
    const sideAreas = 2
    for (let i = 0; i < sideAreas; i++) {
        RunPregameSideClaimedAreaPlacementAndSpawn(faction, sideClaimedAreaDef.radius, sideClaimedAreaDef.numOutposts, centerClaimedArea, centerClaimedAreaDef.radius)
    }
}

// === BASE SPAWNING ===

// simple base spawner. assumes placement was successful
const SpawnBase = (factionName, baseSize, isInvasion, invasionReason) => {
    return SpawnBaseAtPos(QUERY_PlacementResultPosition(), factionName, baseSize, isInvasion, invasionReason)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpawnInitialBaseWithRules = (factionName, baseSize) => {
    const factionData = _GetInvasionHelperFactionData(factionName)
    const placementData = factionData.firstBasePlacement
    const wofVillage = GetVillageEntityFromFaction(WELL_OF_FATE)
    const allVillages = QUERY_GetAllAliveVillages()
    // at time of calling piglin bases should contain nothing or other faction bases (as this is used for the first base of a faction)
    const piglinBases = FILTER_ByVillageSize(FILTER_ByFactionName(allVillages, FACTION_PIGLINS), BASE_SIZE_ALL_PORTALS)

    // verification
    const ownBases = FILTER_ByVillageSize(FILTER_ByFactionName(allVillages, factionName), BASE_SIZE_ALL_PORTALS)
    if (HasEntities(ownBases)) {
        Logw(`SpawnInitialBaseWithRules: WARNING ${factionName} already has a base placed - the first base should always be spawned with this function!`)
    }

    for (let i = 0; i < placementData.length; i++) {
        const data = placementData[i]
        OUTPUT_PlacementStart()
        Logi(`SpawnInitialBaseWithRules ${factionName} for ${baseSize} - try ${i + 1}`)
        // OUTPUT_PlacementDebugName(`SpawnInitialBaseWithRules ${factionName} for ${baseSize} - try ${i + 1}`)
        OUTPUT_PlacementSlotTag(SLOT.BASE)

        if (data.wofMinDistance !== undefined && data.wofMaxDistance !== undefined) {
            OUTPUT_PlacementAddIncludeProximityRule(wofVillage, data.wofMinDistance, data.wofMaxDistance, 1)
        }

        if (data.playerDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(GetPlayers(), data.playerDistance, BSHARP_PLACEMENT.requireAll)
        }

        if (data.otherFactionDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(piglinBases, data.otherFactionDistance, BSHARP_PLACEMENT.requireAll)
        }

        if (data.otherDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(allVillages, data.otherDistance, BSHARP_PLACEMENT.requireAll)
        }

        if (OUTPUT_PlacementExecute()) {
            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(factionName, baseSize), false)
            OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), factionData.villageArchetypes[baseSize], baseSize, factionName, TEAM_ORANGE)
            return true
        }
    }

    Loge("SETUP FAILURE: SpawnInitialBaseWithRules all tries have failed! Using final fallback (any location)")
    OUTPUT_PlacementStart()
    OUTPUT_PlacementSlotTag(SLOT.BASE)
    OUTPUT_PlacementAddExcludeProximityRule(wofVillage, 500, BSHARP_PLACEMENT.requireAll)
    if (OUTPUT_PlacementExecute()) {
        OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(factionName, baseSize), false)
        OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), factionData.villageArchetypes[BaseSize], baseSize, factionName, TEAM_ORANGE)
        return true
    }

    Loge("CRITICAL SETUP FAILURE: SpawnInitialBaseWithRules - there are NO slots. Please check world-gen data!")
    return false
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpawnBaseWithRules = (factionName, baseSize, useFallback, isInvasion, isStarterBase = false) => {
    const factionData = _GetInvasionHelperFactionData(factionName)
    const placementData = factionData.basePlacement

    const allVillages = QUERY_GetAllAliveVillages()
    const ownBases = FILTER_ByVillageSize(FILTER_ByFactionName(allVillages, factionName), placementData.newBaseAdjacents)
    const outposts = FILTER_ByVillageSize(allVillages, [BASE_SIZE_OUTPOST])
    const otherVillages = OPER_Difference(allVillages, ownBases)
    const players = GetPlayers()
    const placementRules = isStarterBase ? placementData.initRuleList : placementData.ruleList

    if (!HasEntities(ownBases)) {
        Logv(`SpawnBaseWithRuleList: Failed - no own bases. ${factionName} for ${baseSize}`)
        return false
    }

    for (let i = 0; i < placementRules.length; i++) {
        const data = placementRules[i]

        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(SLOT.BASE)

        if (data.ownMaxDistance !== undefined) {
            OUTPUT_PlacementAddIncludeProximityRule(ownBases, 0, data.ownMaxDistance, 1)
        }

        if (data.ownMinDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(ownBases, data.ownMinDistance, BSHARP_PLACEMENT.requireAll)
        }

        if (data.outpostDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(outposts, data.outpostDistance, BSHARP_PLACEMENT.requireAll)
        }

        if (data.otherDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(otherVillages, data.otherDistance, BSHARP_PLACEMENT.requireAll)
        }

        if (data.playerDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(players, data.playerDistance, BSHARP_PLACEMENT.requireAll)
        }

        if (OUTPUT_PlacementExecute()) {
            Logv(`SpawnBaseWithRules: Successful. ${factionName} for ${baseSize}`)

            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(factionName, baseSize), false)
            SpawnBase(factionName, baseSize, isInvasion, MAP_INVASION_RECAP.BUILT_NEW_BASE)
            return true
        }
    }

    if (useFallback) {
        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(SLOT.BASE)
        OUTPUT_PlacementAddExcludeProximityRule(GetVillageEntityFromFaction(WELL_OF_FATE), 500, BSHARP_PLACEMENT.requireAll)
        if (OUTPUT_PlacementExecute()) {
            Logv(`SpawnBaseWithRules: Successful (fallback). ${factionName} for ${baseSize}`)

            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(factionName, baseSize), false)
            SpawnBase(factionName, baseSize, isInvasion, MAP_INVASION_RECAP.BUILT_NEW_BASE)
            return true
        } else {
            Loge(`SpawnBaseWithRules: CRITICAL FAILURE (fallback). ${factionName} for ${baseSize}`)
            return false
        }
    }

    Logv(`SpawnBaseWithRules: Failed. ${factionName} for ${baseSize}`)
    return false
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpawnFarBaseWithRules = (hordeName, baseSize, useFallback, isInvasion) => {
    const allVillages = QUERY_GetAllAliveVillages()
    const cultureVillages = FILTER_ByFactionName(allVillages, CULTURE_NAME_VILLAGERS)
    const factionVillages = FILTER_ByFactionName(allVillages, hordeName)
    const outposts = FILTER_ByVillageSize(allVillages, [BASE_SIZE_OUTPOST])
    const players = GetPlayers()

    const factionData = _GetInvasionHelperFactionData(hordeName)
    const placementData = factionData.farBasePlacement

    for (let i = 0; i < placementData.length; i++) {
        const data = placementData[i]

        // verification
        if (data.ownMaxDistance !== undefined && !HasEntities(factionVillages)) {
            continue
        }
        if (data.villageMaxDistance !== undefined && !HasEntities(cultureVillages)) {
            continue
        }

        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(SLOT.BASE)

        if (data.ownMaxDistance !== undefined) {
            OUTPUT_PlacementAddIncludeProximityRule(factionVillages, 0, data.ownMaxDistance, 1)
        }
        if (data.villageMaxDistance !== undefined) {
            OUTPUT_PlacementAddIncludeProximityRule(cultureVillages, 0, data.villageMaxDistance, 1)
        }
        if (data.ownMinDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(factionVillages, data.ownMinDistance, BSHARP_PLACEMENT.requireAll)
        }
        if (data.allDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(allVillages, data.allDistance, BSHARP_PLACEMENT.requireAll)
        }
        if (data.outpostDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(outposts, data.outpostDistance, BSHARP_PLACEMENT.requireAll)
        }
        if (data.playerDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(players, data.playerDistance, BSHARP_PLACEMENT.requireAll)
        }

        if (OUTPUT_PlacementExecute()) {
            Logv("SpawnFarBaseWithRules: Successful " + hordeName)

            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(hordeName, baseSize), false)
            SpawnBase(hordeName, baseSize, isInvasion, MAP_INVASION_RECAP.BUILT_NEW_BASE)
            return true
        }
    }

    if (useFallback) {
        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(SLOT.BASE)
        OUTPUT_PlacementAddExcludeProximityRule(GetVillageEntityFromFaction(WELL_OF_FATE), 500, BSHARP_PLACEMENT.requireAll)
        if (OUTPUT_PlacementExecute()) {
            Logv(`SpawnFarBaseWithRules: Successful (fallback). ${hordeName} for ${baseSize}`)

            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(hordeName, baseSize), false)
            SpawnBase(hordeName, baseSize, isInvasion, MAP_INVASION_RECAP.BUILT_NEW_BASE)
            return true
        } else {
            Loge(`SpawnFarBaseWithRules: CRITICAL FAILURE (fallback). ${hordeName} for ${baseSize}`)
            return false
        }
    }

    Logv("Spawn Far Base: No valid locations " + hordeName)
    return false
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpawnBaseWithRulesInClaimedArea = (factionName, baseSize, _isInvasion) => {
    return PlacePiglinBase(factionName, baseSize)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpawnDefensiveOutpostWithRules = (factionName, isInvasion, isInitialOutpost = false) => {
    const factionData = _GetInvasionHelperFactionData(factionName)
    const placementData = isInitialOutpost ? factionData.initDefensiveOutpostPlacement : factionData.defensiveOutpostPlacement

    const allVillages = QUERY_GetAllAliveVillages()
    const ownBases = FILTER_ByVillageSize(FILTER_ByFactionName(allVillages, factionName), BASE_SIZE_ALL_PORTALS) // can change this to include frontlines if desired

    const defensiveOutposts = FILTER_ByVillageSize(allVillages, [BASE_SIZE_OUTPOST])
    const otherVillages = OPER_Difference(OPER_Difference(allVillages, ownBases), defensiveOutposts)
    const players = GetPlayers()

    for (let i = 0; i < placementData.length; i++) {
        const data = placementData[i]

        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(SLOT.BASE)

        if (data.ownMinDistance !== undefined && data.ownMaxDistance !== undefined) {
            OUTPUT_PlacementAddIncludeProximityRule(ownBases, data.ownMinDistance, data.ownMaxDistance, 1)
        }

        if (data.ownMinDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(ownBases, data.ownMinDistance, BSHARP_PLACEMENT.requireAll) // ensure nothing is built close to own base
        }

        if (data.outpostDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(defensiveOutposts, data.outpostDistance, BSHARP_PLACEMENT.requireAll) // override for outpost (eg. if you want to pack bases closer)
        }

        if (data.otherDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(otherVillages, data.otherDistance, BSHARP_PLACEMENT.requireAll) // the rest
        }

        if (data.playerDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(players, data.playerDistance, BSHARP_PLACEMENT.requireAll) // away from players
        }

        if (OUTPUT_PlacementExecute()) {
            Logv("SpawnDefensiveOutpostWithRules: Successful " + factionName + " on try " + i)

            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(factionName, BASE_SIZE_OUTPOST), false)
            if (isInvasion) {
                const base = OUTPUT_SpawnInvasionBase(QUERY_PlacementResultPosition(), factionData.villageArchetypes[BASE_SIZE_OUTPOST], BASE_SIZE_OUTPOST, factionName, TEAM_ORANGE, MAP_INVASION_RECAP.BUILT_DEFENSIVE_OUTPOST)
                OUTPUT_MapSetKeyValue(base, MAP_KEY.INVASION_RECAP, MAP_INVASION_RECAP.BUILT_DEFENSIVE_OUTPOST)
            } else {
                OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), factionData.villageArchetypes[BASE_SIZE_OUTPOST], BASE_SIZE_OUTPOST, factionName, TEAM_ORANGE)
            }
            return true
        }
    }

    Logv("SpawnDefensiveOutpostWithRules: No valid locations " + factionName)
    return false
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpawnOffensiveOutpostWithRules = (factionName, isInvasion) => {
    const allVillages = QUERY_GetAllAliveVillages()
    const cultureVillages = FILTER_ByFactionName(allVillages, CULTURE_NAME_VILLAGERS)
    const factionVillages = FILTER_ByFactionName(allVillages, factionName)
    const outposts = FILTER_ByVillageSize(allVillages, [BASE_SIZE_VANGUARD])
    const players = GetPlayers()

    const factionData = _GetInvasionHelperFactionData(factionName)
    const placementData = factionData.offensiveOutpostPlacement

    for (let i = 0; i < placementData.length; i++) {
        const data = placementData[i]

        // verification
        if (data.ownMaxDistance !== undefined && !HasEntities(factionVillages)) {
            continue
        }
        if (data.villageMaxDistance !== undefined && !HasEntities(cultureVillages)) {
            continue
        }

        OUTPUT_PlacementStart()
        OUTPUT_PlacementSlotTag(SLOT.BASE)

        if (data.ownMaxDistance !== undefined) {
            OUTPUT_PlacementAddIncludeProximityRule(factionVillages, 0, data.ownMaxDistance, 1)
        }
        if (data.villageMaxDistance !== undefined) {
            OUTPUT_PlacementAddIncludeProximityRule(cultureVillages, 0, data.villageMaxDistance, 1)
        }
        if (data.allDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(allVillages, data.allDistance, BSHARP_PLACEMENT.requireAll)
        }
        if (data.outpostDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(outposts, data.outpostDistance, BSHARP_PLACEMENT.requireAll)
        }
        if (data.playerDistance !== undefined) {
            OUTPUT_PlacementAddExcludeProximityRule(players, data.playerDistance, BSHARP_PLACEMENT.requireAll)
        }

        if (OUTPUT_PlacementExecute()) {
            Logv("SpawnOffensiveOutpostWithRules: Successful " + factionName)

            OUTPUT_PlacementUpdateTextureStamp(TEXTURE_KEYS.PRIMARY, GetStampTextureForFaction(factionName, BASE_SIZE_VANGUARD), false)
            if (isInvasion) {
                const base = OUTPUT_SpawnInvasionBase(QUERY_PlacementResultPosition(), factionData.villageArchetypes[BASE_SIZE_VANGUARD], BASE_SIZE_VANGUARD, factionName, TEAM_ORANGE, MAP_INVASION_RECAP.BUILT_OFFENSIVE_OUTPOST)
                OUTPUT_MapSetKeyValue(base, MAP_KEY.INVASION_RECAP, MAP_INVASION_RECAP.BUILT_OFFENSIVE_OUTPOST)
            } else {
                OUTPUT_SpawnVillage(QUERY_PlacementResultPosition(), factionData.villageArchetypes[BASE_SIZE_VANGUARD], BASE_SIZE_VANGUARD, factionName, TEAM_ORANGE)
            }
            return true
        }
    }

    Logv("SpawnOffensiveOutpostWithRules: No valid locations " + factionName)
    return false
}

// === Local Faction Data Getter ===
const _GetInvasionHelperFactionData = (factionName) => {
    const dict = invasionHelperVal.factionObjects
    for (const key in dict) {
        if (dict[key].name === factionName) {
            return dict[key]
        }
    }
    Logi("GetFactionData has failed to find the passed faction: " + factionName)
    return false
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetRoamingInvisibleSpawnersState = (spawnersActive) => {
    let gvValue = 1
    if (spawnersActive) {
        gvValue = 0
    }

    for (const key in GV_ROAMING_PIGLIN_SPAWNERS_CONTROL) {
        OUTPUT_SetGlobalVariable(GV_ROAMING_PIGLIN_SPAWNERS_CONTROL[key], gvValue)
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetAllBuildings = (villageId) => {
    return FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_BUILDABLE], ["mob_alliance_structure"])
}

const IsBossAttack = (faction, strength) => {
    return faction === FACTION_NAME_ATTACK && strength >= 4
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetDefensiveBuildings = (villageId) => {
    const buildables = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_BUILDABLE], [])
    const towers = FILTER_ByTagFilter(buildables, ["tower"], [])
    const walls = FILTER_ByTagFilter(buildables, ["wall"], [])
    const gates = FILTER_ByTagFilter(buildables, ["gate"], [])
    const traps = FILTER_ByTagFilter(buildables, ["freezeTrap"], [])
    return OPER_Union(towers, OPER_Union(walls, OPER_Union(traps, gates)))
}

// TODO (dplourde): Consider cleaning this up with an opt-in tag we can add to entities instead of a huge exclusion list.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetNonDefensiveBuildings = (villageId) => {
    return FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_BUILDABLE], [TAG_VILLAGE_FOUNTAIN, TAG_OUTPOST_STRUCTURE, "totem_unlock_mob_alliance", "tower", "wall", "gate", "buildable_prop", TAG_DISABLED, "mob_alliance_mob_cage"])
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DestroyStuffForReal = (entities) => {
    //This is a hack to account for OUTPUT_DamageEntitiesByPercentage not always destroying things even when given 100%
    for (let i = 0; i < 5; i++) {
        OUTPUT_DamageEntitiesByPercentage(entities, 100)
    }
}

// ===== WAVE RESPONSE =====
/*
All factions currently have the same village attack gameplay (with tunable per faction values).
1. A number of waves are sent to attack the target village fountain
2. The next wave is triggered after X seconds OR if all current waves are defeated
3. Once all waves are defeated the attack is automatically won.
4. Alternatively: The player can defeat the FOB to win. (Generic response)
*/

// guaranteed to return something (village entity as fallback)
const WaveGetAttackTarget = (targetVillageID, prioritizeCentralStructure = false) => {
    if (prioritizeCentralStructure) {
        const centralStructures = GetVillageCentralStructures(targetVillageID)

        //If no other entity present
        if (HasEntities(centralStructures)) {
            return FILTER_RandomCount(centralStructures, 1)
        }
    }

    const buildings = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(targetVillageID), [TAG_BUILDABLE], [])
    if (HasEntities(buildings)) {
        return FILTER_RandomCount(buildings, 1)
    }

    return GetVillageEntityFromID(targetVillageID)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StartWaveAttacks = (attackName, attackingVillageId, targetVillageId, initialDelay) => {
    SetVillageVariable(attackingVillageId, "wave_attack_target_village_id", targetVillageId)

    LISTENFOR_LocalTimer({
        snippet: "lt_village_attack_spawn_first_wave" + attackName,
        ownerVillageId: attackingVillageId,
        waitTime: initialDelay,
        payloadInt: targetVillageId
    })

    const portal = GetVillagePortal(attackingVillageId)
    LISTENFOR_EntityTimer({
        snippet: "et_wave_invasion_attack_wave_timeout" + attackName,
        ownerVillageId: attackingVillageId,
        entity: portal,
        timerName: "et_invasion_attack_wave_delay",
        payloadInt: targetVillageId
    })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupSnippetsForWaveAttacks = (attackName, waveDataCallback, onUnitsSpawnedCallback) => {
    SNIPPET_LocalTimer("lt_village_attack_spawn_first_wave" + attackName, (payload) => {
        const villageId = payload.ownerVillageId
        const targetVillageId = payload.int

        const factionName = QUERY_GetFactionNameFromVillageID(villageId)
        const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

        const waveData = waveDataCallback(factionName, baseSize)

        Logv("Sending wave (first)")
        _WaveSpawn(attackName, villageId, targetVillageId, waveData, onUnitsSpawnedCallback)

        //Set audio state
        //const portal = GetVillagePortal(villageId)
        //OUTPUT_SetEmitterState(portal, "phase3_generic")
    })

    SNIPPET_EntityTimer("et_wave_invasion_attack_wave_timeout" + attackName, (_entity, payload) => {
        const villageId = payload.ownerVillageId
        const targetVillageId = payload.int

        const factionName = QUERY_GetFactionNameFromVillageID(villageId)
        const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

        const waveData = waveDataCallback(factionName, baseSize)

        Logv("Sending wave (time out)")
        _WaveSpawn(attackName, villageId, targetVillageId, waveData, onUnitsSpawnedCallback)
    })

    SNIPPET_EntitiesAmountDestroyed("ead_wave_invasion_attack_wave_cleared" + attackName, (payload) => {
        Logv("invasion attack: wave defeated")
        const villageId = payload.ownerVillageId

        // tracking
        DeltaVillageVariable(villageId, "vv_invasion_attack_wave_waves_defeated", 1)

        //Update % waves defeated for auto resolve
        const wavesDefeated = GetVillageVariable(villageId, "vv_invasion_attack_wave_waves_defeated")
        const factionName = QUERY_GetFactionNameFromVillageID(villageId)
        const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

        const data = waveDataCallback(factionName, baseSize)

        const waveCount = _GetTotalWaveCountFromFobInfo(data)
        const percentWavesDefeated = (wavesDefeated / waveCount) * 100
        SetVillageVariable(villageId, "wavesPercentDefeated", percentWavesDefeated)
    })
}

const _WaveSpawn = (attackName, attackingVillageID, targetVillageID, waveData, onUnitsSpawnedCallback) => {
    const waveCount = _GetTotalWaveCountFromFobInfo(waveData)
    const wavesSent = GetVillageVariable(attackingVillageID, "vv_invasion_attack_wave_waves_sent")

    Logv(`Invasion Attack: spawning wave ${wavesSent + 1} of ${waveCount}`)

    // spawn wave
    let newUnits = []
    const portal = GetVillagePortal(attackingVillageID)
    if (!HasEntities(portal)) {
        Loge("Critical failure portal is missing")
    }

    /* a wave is a specially formatted array (to keep it compact).
    [
        [ archetype, count ],
        [ archetype, count ],
        [ archetype, count ]
    ]
    */

    let nextWaveFlavour = null

    //Check whether to send main wave, trickle wave or counter waves
    const escalated = QUERY_GetGlobalVariable(_GetBarracksEscalationKey(attackingVillageID, BARRACKS_NAME_FIGHTER))
    if (escalated && waveData.counterTrickleWaves !== undefined) {
        nextWaveFlavour = ChooseFromArray(waveData.counterTrickleWaves)
    } else if (wavesSent >= waveCount) {
        //Send trickle waves
        nextWaveFlavour = ChooseFromArray(waveData.trickleWaves)
    } else {
        //Send main waves
        const nextWaveData = _GetNextMainWaveData(waveData, wavesSent)
        nextWaveFlavour = ChooseFromArray(nextWaveData.waveVariations)
    }

    const currentPiglinsCount = QUERY_GetEntitiesCount(FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(attackingVillageID), ["piglin", "mob"], []))
    const piglinSoftCap = waveData.concurrentPiglinSoftCap

    if (piglinSoftCap === undefined || currentPiglinsCount < piglinSoftCap) {
        //Stinger
        if (wavesSent <= waveCount) {
            const factionName = QUERY_GetFactionNameFromVillageID(attackingVillageID)
            PlayStingerToClosePlayers(GetStingerForPiglinFaction(factionName, "tactic"), GetVillageEntityFromID(attackingVillageID))
        }

        const waveCountModifier = waveData.ignoreCountModifier ? 1 : _GetWaveCountModifier(attackingVillageID) //Modify wave amount based off phase/size/bases available and destroyed
        const nextWave = nextWaveFlavour.wave
        const timeBetweenWaves = nextWaveFlavour.nextWaveTimer
        for (let i = 0; i < nextWave.length; i++) {
            const unitInfo = nextWave[i]
            const spawnedUnits = SpawnAtPortal(attackingVillageID, unitInfo[0], Math.round(unitInfo[1] * waveCountModifier))
            if (HasEntities(spawnedUnits)) {
                newUnits = OPER_Append(newUnits, spawnedUnits)
                onUnitsSpawnedCallback(spawnedUnits, attackingVillageID, escalated)
            }
        }

        Logv("New wave size " + QUERY_GetEntitiesCount(newUnits) + " with next timer set to " + timeBetweenWaves)

        // next wave triggers
        // timeout or wave clear
        OUTPUT_SetEntityTimer(portal, "et_invasion_attack_wave_delay", timeBetweenWaves)
        LISTENFOR_EntitiesAmountDestroyed({
            snippet: "ead_wave_invasion_attack_wave_cleared" + attackName,
            ownerVillageId: attackingVillageID,
            entities: newUnits,
            payloadInt: targetVillageID
        })

        // tracking
        DeltaVillageVariable(attackingVillageID, "vv_invasion_attack_wave_waves_sent", 1)
    } else {
        // soft cap has been reached, try again in X seconds.
        OUTPUT_SetEntityTimer(portal, "et_invasion_attack_wave_delay", nextWaveFlavour.nextWaveTimer)
        Logw(`Piglin soft cap has been reached! The invasion has ${currentPiglinsCount} piglins currently.`)
    }
}

const _GetTotalWaveCountFromFobInfo = (fobInfo) => {
    let totalWaves = 0
    fobInfo.mainWaves.forEach((waveData) => {
        totalWaves += waveData.waveAmount
    })
    return totalWaves
}

const _GetNextMainWaveData = (fobInfo, wavesSent) => {
    let cumulativeWaves = 0
    let waveData = null
    for (let i = 0; i < fobInfo.mainWaves.length; i++) {
        cumulativeWaves += fobInfo.mainWaves[i].waveAmount
        if (wavesSent < cumulativeWaves) {
            waveData = fobInfo.mainWaves[i]
            break
        }
    }
    return waveData
}

const _GetWaveCountModifier = (attackingBaseId) => {
    const hordeName = QUERY_GetFactionNameFromVillageID(attackingBaseId)

    const phase = GetInvasionPhase()
    const basesDestroyed = QUERY_GetEntitiesCount(GetDeadVillages(hordeName, BASE_SIZE_ALL_PORTALS))
    const basesAlive = QUERY_GetEntitiesCount(GetAliveVillages(hordeName, BASE_SIZE_ALL_PORTALS))

    const minHordeStrengthModifier = -0.1
    const maxHordeStrengthModifier = 0.1
    const hordeStrengthModifier = (basesAlive - basesDestroyed) * 0.015
    const clampedBaseStrengthModifier = Clamp(hordeStrengthModifier, minHordeStrengthModifier, maxHordeStrengthModifier) //Between minBaseStrengthModifier and maxBaseStrengthModifier
    const phaseStrengthModifier = Lerp(-0.15, 0.15, phase / 3) //Between (-0.15 and 0.15)

    const baseSize = QUERY_GetFactionSizeFromVillageID(attackingBaseId)
    const baseSizeModifier = baseSize === BASE_SIZE_LARGE ? 0.1 : baseSize === BASE_SIZE_MEDIUM ? 0 : -0.1 //0.1, 0, -0.1

    /*
    Formula = Phase Modifier + Horde Strength Modifier will modify based on current phase and bases destroyed/active for a horde and original base size
    For example, min/values through this are:
        Min = Clamp(1 - 0.1 - 0.15 - 0.1) = 0.65 -> Clamped to 0.75
        Max = Clamp(1 + 0.1 + 0.15 + 0.1) = 1.35 -> Clamped to 1.25
    */
    const currentModifier = Clamp(1 + clampedBaseStrengthModifier + phaseStrengthModifier + baseSizeModifier, 0.75, 1.25)

    Logv("Wave modifier: " + currentModifier)

    return currentModifier
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InitRalliesForVillageAttack = (villageId, data) => {
    const totalRallyPoints = Math.max(data.totalRallyPoints, 1)
    const buildingTagArray = data.viableRallyBuildingTags

    const rallyPointData = [{ name: "rallyPoint", accumulations: 1, count: totalRallyPoints, distance: 10 }]
    RALLYMAN_Initdata(villageId, rallyPointData)

    if (buildingTagArray.length > 0) {
        buildingTagArray.forEach((buildingTag) => {
            LISTENFOR_BuildingComplete({
                snippet: "bc_village_attack_create_rallyPoint",
                ownerVillageId: villageId,
                villageId: villageId,
                includeTags: [buildingTag]
            })
        })
    } else {
        LISTENFOR_BuildingComplete({
            snippet: "bc_village_attack_create_rallyPoint",
            ownerVillageId: villageId,
            villageId: villageId
        })
    }
}

SNIPPET_BuildingComplete("bc_village_attack_create_rallyPoint", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RALLYMAN_TryRegisterAsCappedRallyPoint(villageId, buildingEntity, "rallyPoint")
})

const GetHordeClaimedAreas = (hordeName) => {
    return FILTER_ByFactionName(QUERY_GetAllClaimedAreas(), hordeName)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetHordeTotalClaimedAreaSize = (hordeName) => {
    return QUERY_GetClaimedAreaRadius(GetHordeClaimedAreas(hordeName))
}

const CountAllPlannedDelayedInvasionActions = (action) => {
    let count = 0
    ForEachAliveVillageEntity((village) => {
        if (QUERY_GetDelayedInvasionAction(village) === action) {
            count++
        }
    })

    return count
}

const CountFactionPlannedDelayedInvasionActions = (factions, action) => {
    // Can pass one value or array of values
    if (!Array.isArray(factions)) {
        factions = [factions]
    }

    let count = 0
    ForEachAliveVillageEntity((village) => {
        const villageFaction = QUERY_GetFactionNameFromEntity(village)
        if (factions.includes(villageFaction) && action === QUERY_GetDelayedInvasionAction(village)) {
            count++
        }
    })

    return count
}

const TriggerRepercussionsCine = () => {
    if (TIME_DAWN > QUERY_GetTimeOfDay() > TIME_DUSK) {
        OUTPUT_TriggerCinematic("mst05_c05a_repercussions_night", [])

        LISTENFOR_CinematicFinished({
            snippet: "cf_player_presentation_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: "mst05_c05a_repercussions_night"
        })
    } else {
        OUTPUT_TriggerCinematic("mst05_c05a_repercussions", [])

        LISTENFOR_CinematicFinished({
            snippet: "cf_player_presentation_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: "mst05_c05a_repercussions"
        })
    }
}

SNIPPET_CinematicFinished("cf_player_presentation_action", (_payload) => {
    OUTPUT_SetObjectiveVisibility("objectives.alliancesSafe", true)
    PlayPresentationActionToPlayers("main_post_repercussions", GetPlayers())
    IncrementGlobal(ONBOARDING_GLOBALS.START_VILLAGE_PLAN_ATTACK_2)
    OUTPUT_AddOrRemoveTeamResource(TEAM_BLUE, "unlock_onboarding_mob_homesteads", 1, false)
    Once()
})

//Takes in faction and base size and returns how many of them have players inside of their volumes
const GetNumOfPlayersInBases = (factions, baseSizes) => {
    //e.g. FOR each faction, query get alive villages, store as a const, then DO IT
    let attackVillages = GetAliveVillages(factions, baseSizes) //BASE_SIZE_ALL_PORTALS
    //const AttackVillages = GetAllInvasionBases()
    let playersAttackingBases = 0

    while (HasEntities(attackVillages)) {
        const villageEntity = RandomEntity(attackVillages)
        const villageID = QUERY_GetVillageIDFromEntity(villageEntity)

        if (QUERY_GetPlayersInVillage(villageID) > 0) {
            playersAttackingBases = playersAttackingBases + QUERY_GetPlayersInVillage(villageID)
        }

        attackVillages = OPER_Difference(attackVillages, villageEntity)
    }

    return playersAttackingBases
}
