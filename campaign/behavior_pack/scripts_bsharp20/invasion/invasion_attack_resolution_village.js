//Auto-resolve uses some real values (building HP) but is largely approximated. Since horde damage and village defense are NOT using real world values they do not take into account the fact that difficulty substantially changes these factors.
//By having an attack and defense penalty per difficulty based on settings in "component_difficulty_modifiers_piglin", we can more accurately approximate attack outcomes against a village.
const invasionVillageAttackResolveConfig_Normal = {
    damageBonus: 1.2, //Modifies final horde damage output. For example if the attack horde deals 10,000 damage normally, but has a 1.5x damage multiplier on Hard (Legendary), then the damage output should instead be 15,000
    defensePenalty: 1.2, //Modifies final village defense rating. For example, if my village has a defense rating of 10,000 (mitigates 10,000 damage), but piglins have 2x health on Hard (Legendary), then that defense is half as effective as on the default mode.
    autoResolveMultiplier: 1.0 //Add a flat 1.0 value multiplier on top of damage, this is modified by custom game settings
}

const invasionVillageAttackResolveConfig_Peaceful = {
    damageBonus: 0.3,
    defensePenalty: 0.3,
    autoResolveMultiplier: 1.0
}

const invasionVillageAttackResolveConfig = {
    damageBonus: 1,
    defensePenalty: 1,
    autoResolveMultiplier: 1.0
}

const invasionVillageAttackResolveConfig_Hard = {
    damageBonus: 1.5,
    defensePenalty: 1.5,
    autoResolveMultiplier: 1.0
}

const invasionVillageAttackResolveConfig_Custom = {
    damageBonus: 1.0,
    defensePenalty: 1.0,
    autoResolveMultiplier: 1.0
}

const customSettingNames = {
    gvAutoResolve: "piglin_invasion_village_attack_autoresolve_strength",
    gvPiglinDamage: "piglin_modifiers_unit_damage",
    gvPiglinHealth: "piglin_modifiers_unit_health"
}

RegisterDifficultyConfig("invasion_village_attack_resolve_config", invasionVillageAttackResolveConfig_Normal, GAME_DIFFICULTY.normal)
RegisterDifficultyConfig("invasion_village_attack_resolve_config", invasionVillageAttackResolveConfig_Peaceful, GAME_DIFFICULTY.peaceful)
RegisterDifficultyConfig("invasion_village_attack_resolve_config", invasionVillageAttackResolveConfig, GAME_DIFFICULTY.easy)
RegisterDifficultyConfig("invasion_village_attack_resolve_config", invasionVillageAttackResolveConfig_Hard, GAME_DIFFICULTY.hard)
RegisterDifficultyConfig("invasion_village_attack_resolve_config", invasionVillageAttackResolveConfig_Custom, GAME_DIFFICULTY.custom)

//Custom game overrides. Tried setting value inside the configs, but wasn't working. Instead we set a global variable and read that later.
SNIPPET_GameSettingInitialized(customSettingNames.gvAutoResolve, (value) => {
    OUTPUT_SetGlobalVariable(CustomSettingGV(customSettingNames.gvAutoResolve), value.value * 100)
})

SNIPPET_GameSettingInitialized(customSettingNames.gvPiglinDamage, (value) => {
    OUTPUT_SetGlobalVariable(CustomSettingGV(customSettingNames.gvPiglinDamage), value.value * 100)
})

SNIPPET_GameSettingInitialized(customSettingNames.gvPiglinHealth, (value) => {
    OUTPUT_SetGlobalVariable(CustomSettingGV(customSettingNames.gvPiglinHealth), value.value * 100)
})

const invasionVillageAttackResolveVal = {
    common: {
        /*
        The algorithm first tries to destroy a percentage of buildings in each concentric circle with radius specified, going from outwards to inwards.
        Damage may not reach inner buildings, if they run out of damage amount beforehand. 
        */
        damageResolveAreas: [
            {
                radius: 20,
                percentageOfBuildingsToAffect: 20
            },
            {
                radius: 40,
                percentageOfBuildingsToAffect: 25
            },
            {
                radius: 60,
                percentageOfBuildingsToAffect: 25
            },
            {
                radius: 80,
                percentageOfBuildingsToAffect: 30
            },
            {
                radius: 100,
                percentageOfBuildingsToAffect: 30
            },
            {
                radius: 120,
                percentageOfBuildingsToAffect: 35
            },
            {
                radius: 140,
                percentageOfBuildingsToAffect: 35
            }
        ],
        globalMinDamage: 22, //This is the absolute minimum damage that will always be applied (regardless of % scaling)
        //These structures will be damaged this many times by the algorithm before they go down, instead of applying full damage at once
        damageFactors: {
            centralStructure: 4,
            poiTowers: 3,
            spyglass: 2,
            kaboomery: 2,
            warDrums: 2
        },
        masonHPMultiplier: 1.3, //HP is effectively multiplied this much by a mason
        carpenterHPMultiplier: 1.0, //HP is effectively multiplied this much by a carpenter
        carpenterHPMultiplierUpgraded: 1.1, //HP is effectively multiplied this much by a carpenter
        effectiveWallHPDivider: 4, //Wall HP for damage calculations is their HP / this number. This is for balancing - otherwise they tank everything. NOTE: I've only enabled this on Normal and Hard (Mythic and Legendary) difficulties.
        destroyWallsInBunch: 5, //Destroy this many walls at the same time

        despawnIfDestroyed: [
            // Comment to disable linter :)
            ["tier1PlayerStructure"],
            ["tier2PlayerStructure"],
            ["tier3PlayerStructure"],
            ["playerBridge"]
        ],

        // TODO: Remove this when occupation damage uses the new damage applier (only used for that now)
        wallFactor: 5, //While resolving village attack, this number of walls will count as 1 building

        // Intrinsic active defense values to account for mobs fighting back against piglins. NOTE: Mobs are good so this should probably be a bit higher, but we also know that attacks against these mob alliances tend to be ineffective, so I don't want their innate defense to be too effective.
        mobAllianceDefense: {
            [MOB_ALLIANCE_NAME_CREEPER]: 2000,
            [MOB_ALLIANCE_NAME_SKELETON]: 2000,
            [MOB_ALLIANCE_NAME_SPIDER]: 2000,
            [MOB_ALLIANCE_NAME_ZOMBIE]: 2000
        },
        global: {
            villageDamagedPlayed: "invasionVillageDamagedCinePlayed",
            villageDisabledPlayed: "invasionVillageDisabledCinePlayed",
            villageDamagedVOPlayed: "invasionVillageDamagedVOPlayed",
            villageDestroyedVOPlayed: "invasionVillageDestroyedVOPlayed"
        },
        cinematics: {
            firstDamagedVillageSighting: "vil01_c06_damaged",
            firstDisabledVillageSighting: "vil01_c07_destroyed"
        },
        triggers: {
            damagedVillageTrigger: "badger:temp_spatial_trigger_zone_village_intro"
        }
    },
    [FACTION_NAME_ATTACK]: {
        destroyPercent: 35, //When damage against a building is calculated, this is the % chance to destroy the building. It also compares to health
        strengthData: {
            1: {
                baseDamage: 20000, //the amount of damage we think this horde can deal at this strength
                minDamage: 5000, //the minimum amount of damage to apply in the attack, even if all of it is cancelled out. 
                phaseModifier: 0, //this is bonus damage that is multiplied by the phase. Removing for now as it feels redundant.
                vulnerabilityBonus: 5000, //This is EXTRA damage that this horde will do to you if your village defense rating is below the threshold. Tuned to be 20% of damage for now.
                vulnerabilityThreshold: 3000 //Threshold for which we consider a village "lightly" defended against this strength of attack
            },
            2: {
                baseDamage: 30000,
                minDamage: 7500,
                phaseModifier: 0,
                vulnerabilityBonus: 7500,
                vulnerabilityThreshold: 5000
            },
            3: {
                baseDamage: 50000,
                minDamage: 20000,
                phaseModifier: 0,
                vulnerabilityBonus: 20000,
                vulnerabilityThreshold: 10000
            },
            // Special strength 4 data for attack boss village attack.
            4: {
                baseDamage: 55000,
                minDamage: 22000,
                phaseModifier: 0,
                vulnerabilityBonus: 22001,
                vulnerabilityThreshold: 12000
            }
        }
    },
    [FACTION_NAME_DEFEND]: {
        destroyPercent: 35,
        strengthData: {
            1: {
                baseDamage: 20000,
                minDamage: 5000,
                phaseModifier: 0,
                vulnerabilityBonus: 5000,
                vulnerabilityThreshold: 3000
            },
            2: {
                baseDamage: 30000,
                minDamage: 7500,
                phaseModifier: 0,
                vulnerabilityBonus: 7500,
                vulnerabilityThreshold: 5000
            },
            3: {
                baseDamage: 50000,
                minDamage: 20000,
                phaseModifier: 0,
                vulnerabilityBonus: 20000,
                vulnerabilityThreshold: 10000
            }
        }
    },
    [FACTION_NAME_FROST]: {
        destroyPercent: 35,
        strengthData: {
            1: {
                baseDamage: 20000,
                minDamage: 5000,
                phaseModifier: 0,
                vulnerabilityBonus: 5000,
                vulnerabilityThreshold: 3000
            },
            2: {
                baseDamage: 30000,
                minDamage: 7500,
                phaseModifier: 0,
                vulnerabilityBonus: 7500,
                vulnerabilityThreshold: 5000
            },
            3: {
                baseDamage: 50000,
                minDamage: 20000,
                phaseModifier: 0,
                vulnerabilityBonus: 20000,
                vulnerabilityThreshold: 10000
            }
        }
    },
    [FACTION_NAME_OBSTACLE]: {
        destroyPercent: 35,
        strengthData: {
            1: {
                baseDamage: 20000,
                minDamage: 5000,
                phaseModifier: 0,
                vulnerabilityBonus: 5000,
                vulnerabilityThreshold: 3000
            },
            2: {
                baseDamage: 30000,
                minDamage: 7500,
                phaseModifier: 0,
                vulnerabilityBonus: 7500,
                vulnerabilityThreshold: 5000
            },
            3: {
                baseDamage: 50000,
                minDamage: 20000,
                phaseModifier: 0,
                vulnerabilityBonus: 20000,
                vulnerabilityThreshold: 10000
            }
        }
    },
    //I'm leaving ACT 1 stuff alone since its a far more closed environment
    [FACTION_NAME_DBB]: {
        destroyPercent: 80,
        strengthData: {
            1: {
                baseDamage: 1500,
                minDamage: 300,
                phaseModifier: 20,
                vulnerabilityBonus: 500,
                vulnerabilityThreshold: 200
            }
        }
    }
}

SNIPPET_Bootstrap("", () => {
    LISTENFOR_ExternalEvent({
        snippet: "ee_destruction_test",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "destruction_test"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_count_stuff_in_nearest_village",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "count_stuff_in_nearest_village"
    })
})

SNIPPET_ExternalEvent("ee_count_stuff_in_nearest_village", (data) => {
    const player = FILTER_RandomCount(QUERY_GetAlivePlayers(), 1)
    const nearestVillageId = QUERY_GetVillageIDFromEntity(FILTER_ByClosest(GetAliveVillages(), player, 1))
    const count = QUERY_GetEntitiesCount(FILTER_ByVillageID(QUERY_GetEntitiesWithTags(data.value), nearestVillageId))
    OUTPUT_DebugLogInvasion("Number of " + data.value + " is " + count)
})

SNIPPET_ExternalEvent("ee_destruction_test", (variant) => {
    const option = variant.value
    const player = FILTER_RandomCount(QUERY_GetAlivePlayers(), 1)
    const nearestEntity = FILTER_ByClosest(QUERY_GetEntitiesWithTags(["buildable"]), player, 1)

    switch (option) {
        case 1:
            OUTPUT_DestroyEntities(nearestEntity)
            break
        case 2:
            OUTPUT_DamageEntities(nearestEntity, 10000)
            break
        case 3:
            DestroyStuffForReal(nearestEntity)
            break
    }
})

/*
Try to apply the given damage in a sensible way
*/
const DistributeVillageDamageCommon = (villageId, factionName, effectiveDamage) => {
    let destroyedEntities = EMPTY_ENTITY_GROUP
    let damagedEntities = EMPTY_ENTITY_GROUP

    if (effectiveDamage <= 0) {
        return { destroyed: destroyedEntities, damaged: damagedEntities }
    }

    const hordeInfo = invasionVillageAttackResolveVal[factionName]
    const allBuildables = _GetAllVillageBuildables(villageId)
    const centralStructure = GetVillageCentralStructures(villageId)

    const allCount = QUERY_GetEntitiesCount(allBuildables)
    let destroyedBuildingCount = 0
    let damagedBuildingCount = 0

    let remainingDamage = effectiveDamage
    const hasMason = QUERY_GetEntitiesCount(FILTER_ByVillageID(QUERY_GetEntitiesWithTags("mason"), villageId)) > 0
    const hasCarpenter = QUERY_GetEntitiesCount(FILTER_ByVillageID(QUERY_GetEntitiesWithTags("carpenter"), villageId)) > 0

    OUTPUT_DebugLogInvasion(">> ENTERING RING DAMAGE APPLIER with damage amount " + remainingDamage)

    //Apply damage in concentric circles first, outwards to inwards
    for (let i = invasionVillageAttackResolveVal.common.damageResolveAreas.length - 1; i >= 0; i--) {
        OUTPUT_DebugLogInvasion(">> CHECKING RING " + i)
        const allBuildingsInCurrentCircle = FILTER_ByDistance(allBuildables, centralStructure, invasionVillageAttackResolveVal.common.damageResolveAreas[i].radius)
        const allBuildingsInPreviousCircle = i > 0 ? FILTER_ByDistance(allBuildables, centralStructure, invasionVillageAttackResolveVal.common.damageResolveAreas[i - 1].radius) : EMPTY_ENTITY_GROUP

        const buildingsInRing = OPER_Difference(allBuildingsInCurrentCircle, allBuildingsInPreviousCircle)
        const numberOfBuildingsToAffectInRing = Math.floor((QUERY_GetEntitiesCount(buildingsInRing) * invasionVillageAttackResolveVal.common.damageResolveAreas[i].percentageOfBuildingsToAffect) / 100)
        OUTPUT_DebugLogInvasion("Damage Applier: Trying to affect #" + numberOfBuildingsToAffectInRing)

        //Cycle through buildables in far > near order in each ring
        let allUncheckedRingBuildables = buildingsInRing
        let checkedBuildings = 0
        let ringBuildingsDestroyed = EMPTY_ENTITY_GROUP
        let ringBuildingsDamaged = EMPTY_ENTITY_GROUP

        while (checkedBuildings < numberOfBuildingsToAffectInRing && remainingDamage > 0) {
            const currentBuilding = FILTER_ByFarthest(allUncheckedRingBuildables, centralStructure, 1)

            //Apply damage to buildings
            const damageData = _ApplyDamageToBuilding(currentBuilding, hasMason, hasCarpenter, hordeInfo)
            const affectedBuildingAmount = QUERY_GetEntitiesCount(damageData.structuresAffected)
            if (damageData.wasStructureDestroyed) {
                ringBuildingsDestroyed = OPER_Union(ringBuildingsDestroyed, damageData.structuresAffected)
            } else {
                ringBuildingsDamaged = OPER_Union(ringBuildingsDamaged, damageData.structuresAffected)
            }

            remainingDamage -= damageData.appliedDamage
            checkedBuildings += affectedBuildingAmount
            allUncheckedRingBuildables = OPER_Difference(allUncheckedRingBuildables, damageData.structuresAffected)
        }

        destroyedEntities = OPER_Union(destroyedEntities, ringBuildingsDestroyed)
        damagedEntities = OPER_Union(damagedEntities, ringBuildingsDamaged)

        const ringBuildingsDestroyedCount = QUERY_GetEntitiesCount(ringBuildingsDestroyed)
        const ringBuildingsDamagedCount = QUERY_GetEntitiesCount(ringBuildingsDamaged)

        OUTPUT_DebugLogInvasion("Ring Damage Applier: Checked # " + checkedBuildings + " Destroyed #" + ringBuildingsDestroyedCount + ". Damaged #" + ringBuildingsDamagedCount)
        OUTPUT_DebugLogInvasion("Ring Damage Applier: Remaining Damage: " + remainingDamage)

        if (remainingDamage <= 0) {
            break
        }
    }

    let aliveBuildings = OPER_Difference(allBuildables, destroyedEntities)

    OUTPUT_DebugLogInvasion(">> EXITING RING DAMAGE APPLIER with damage amount " + remainingDamage)

    //Apply damage to central structure if there is damage remaining after going through all rings
    if (remainingDamage > 0) {
        const centralStructureDamageData = _ApplyDamageToBuilding(centralStructure, hasMason, hasCarpenter, hordeInfo)
        if (centralStructureDamageData.wasStructureDestroyed) {
            destroyedEntities = OPER_Union(destroyedEntities, centralStructureDamageData.structuresAffected)
            OUTPUT_DebugLogInvasion(">> DESTROYING Central Structure")
        } else {
            damagedEntities = OPER_Union(damagedEntities, centralStructureDamageData.structuresAffected)
            OUTPUT_DebugLogInvasion(">> DAMAGING Central Structure")
        }
        remainingDamage -= centralStructureDamageData.appliedDamage
    }

    OUTPUT_DebugLogInvasion(">> ENTERING RANDOM DAMAGE APPLIER with damage amount " + remainingDamage)

    //If there is damage leftover after going through all the circles - keep applying damage to the rest randomly
    let randomBuildingsDestroyed = EMPTY_ENTITY_GROUP
    let randomBuildingsDamaged = EMPTY_ENTITY_GROUP
    while (remainingDamage > 0 && QUERY_GetEntitiesCount(aliveBuildings) > 0) {
        const currentBuilding = FILTER_RandomCount(aliveBuildings, 1)

        const damageData = _ApplyDamageToBuilding(currentBuilding, hasMason, hasCarpenter, hordeInfo)
        if (damageData.wasStructureDestroyed) {
            randomBuildingsDestroyed = OPER_Union(randomBuildingsDestroyed, damageData.structuresAffected)
            aliveBuildings = OPER_Difference(aliveBuildings, damageData.structuresAffected)
        } else {
            randomBuildingsDamaged = OPER_Union(randomBuildingsDamaged, damageData.structuresAffected)
        }
        remainingDamage -= damageData.appliedDamage
    }

    destroyedEntities = OPER_Union(destroyedEntities, randomBuildingsDestroyed)
    damagedEntities = OPER_Union(damagedEntities, randomBuildingsDamaged)

    randomBuildingsDamaged = OPER_Difference(randomBuildingsDamaged, randomBuildingsDestroyed) //Remove overlaps from damaged buildings

    const randomlyDestroyedStructureCount = QUERY_GetEntitiesCount(randomBuildingsDestroyed)
    const randomlyDamagedStructureCount = QUERY_GetEntitiesCount(randomBuildingsDamaged)

    OUTPUT_DebugLogInvasion("RANDOM Damage Applier: Destroyed #" + randomlyDestroyedStructureCount + ". Damaged #" + randomlyDamagedStructureCount)
    OUTPUT_DebugLogInvasion(">> EXITING RANDOM DAMAGE APPLIER with damage amount " + remainingDamage)

    //If only central structure is remaining, destroy them. NOTE, we may want to adjust this by having destroyedBuildingCount > some % of buildings destroyed/damaged? I noticed this with a level 2 village attack that should have taken the village.
    destroyedBuildingCount = QUERY_GetEntitiesCount(destroyedEntities)
    if (destroyedBuildingCount >= allCount) {
        DestroyStuffForReal(centralStructure)
        destroyedEntities = OPER_Union(destroyedEntities, centralStructure)
    }

    //Final counts
    damagedEntities = OPER_Difference(damagedEntities, destroyedEntities) //Remove overlaps from damaged buildings (buildings that may have been damaged first, then destroyed later in the algorithm)
    destroyedBuildingCount = QUERY_GetEntitiesCount(destroyedEntities)
    damagedBuildingCount = QUERY_GetEntitiesCount(damagedEntities)

    Logv(`Village Attack Resolution Damage Report (Raw)
    Effective Damage Applied: ${effectiveDamage}
    Total Buildings: ${allCount + 1}
    Destroyed Buildings: ${destroyedBuildingCount}
    Freshly Damaged Buildings: ${damagedBuildingCount}`)

    return { destroyed: destroyedEntities, damaged: damagedEntities }
}

const _CalculateEffectiveBuildingHP = (currentBuilding, villageHasMason, villageHasCarpenter, returnMaxHP = false) => {
    //Returns either current or max health, depending on argument passed in
    const buildingHP = returnMaxHP ? QUERY_MaxHealth(currentBuilding) : QUERY_CurrentHealth(currentBuilding)
    let effectiveBuildingHP = buildingHP
    //Add to effective HP if mason is present.
    if (villageHasMason && QUERY_HasTags(currentBuilding, ["buffable-mason"])) {
        effectiveBuildingHP *= invasionVillageAttackResolveVal.common.masonHPMultiplier
    }
    //Add to effective HP if carpenter is present. Checks to see if they have the advanced carpenter upgrade which has 2x healing.
    if (villageHasCarpenter) {
        if (QUERY_GetTeamResource(TEAM_BLUE, "upgrade_carpenter") > 0) {
            effectiveBuildingHP *= invasionVillageAttackResolveVal.common.carpenterHPMultiplierUpgraded
        } else {
            effectiveBuildingHP *= invasionVillageAttackResolveVal.common.carpenterHPMultiplier
        }
    }

    //Discount wall HP by <effectiveWallHPDivider> IF its on the Mythic or Legendary mode
    if (QUERY_HasTags(currentBuilding, ["wall"]) && (QUERY_GameDifficulty() === "Normal" || QUERY_GameDifficulty() === "Hard" || QUERY_GameDifficulty() === "Custom")) {
        const effectiveWallHPDivider = invasionVillageAttackResolveVal.common.effectiveWallHPDivider
        effectiveBuildingHP = effectiveBuildingHP / effectiveWallHPDivider
    }

    return effectiveBuildingHP
}

//If i understand what is happening here, the damage factor will determine a) whether the building should be destroyed, b) if not destroyed, how much % of its health it should take in this attack. The amount of damage applied is then passed back in and deducted from remaining.
const _ApplyPartialDamageToBuilding = (building, effectiveHP, effectiveMaxHP, damageFactor, despawnIfDestroyed) => {
    const damageCheck = 1 / damageFactor
    let destroyed = false
    let damageUsed = 0
    if (effectiveHP / effectiveMaxHP <= damageCheck) { //Checks health ratio compared to the damage factor. The higher the damage factor, the less chance of it being destroyed immediately.
        if (despawnIfDestroyed) {
            OUTPUT_DespawnEntities(building)
        } else {
            DestroyStuffForReal(building)
        }
        damageUsed = effectiveHP
        destroyed = true
    } else {
        damageUsed = effectiveMaxHP * damageCheck
        OUTPUT_DamageEntities(building, damageUsed)
    }
    return { structuresAffected: building, wasStructureDestroyed: destroyed, appliedDamage: damageUsed }
}

//Applies damage to buildings, checks tags to see if it needs to do anything special like partial damage or reduce the HP of the structure (in the case of walls on harder difficulties)
const _ApplyDamageToBuilding = (currentBuilding, hasMason, hasCarpenter, hordeInfo, forceDestroyNonEssential = false) => {
    const effectiveBuildingHP = _CalculateEffectiveBuildingHP(currentBuilding, hasMason, hasCarpenter)
    const effectiveBuildingMaxHP = _CalculateEffectiveBuildingHP(currentBuilding, hasMason, hasCarpenter, true)
    const villageId = QUERY_GetVillageIDFromEntity(currentBuilding)

    let buildingDamageData = { structuresAffected: currentBuilding, wasStructureDestroyed: true, appliedDamage: 0 }

    if (effectiveBuildingHP <= 0 || effectiveBuildingMaxHP <= 0) {
        // This building either doesn't have health or is kept alive by some other means.
        // Return default data
        return buildingDamageData
    }

    const despawnIfDestroyed = invasionVillageAttackResolveVal.common.despawnIfDestroyed.reduce((prevValue, curValue) => QUERY_HasTags(currentBuilding, curValue) || prevValue, false)

    //First check for special buildings which will not take full damage every time this is called
    if (QUERY_HasTags(currentBuilding, ["poi_tower"])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.poiTowers, despawnIfDestroyed)
    } else if (QUERY_HasTags(currentBuilding, ["kaboomery"])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.kaboomery, despawnIfDestroyed)
    } else if (QUERY_HasTags(currentBuilding, ["increased_range_missiles"])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.spyglass, despawnIfDestroyed)
    } else if (QUERY_HasTags(currentBuilding, ["warDrums"])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.warDrums, despawnIfDestroyed)
    } else if (QUERY_HasTags(currentBuilding, [TAG_VILLAGE_FOUNTAIN]) || QUERY_HasTags(currentBuilding, [TAG_MOB_ALLEGIANCE_STRUCTURE]) || QUERY_HasTags(currentBuilding, [TAG_OUTPOST_STRUCTURE])) {
        buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, invasionVillageAttackResolveVal.common.damageFactors.centralStructure, despawnIfDestroyed)
    } else if (QUERY_HasTags(currentBuilding, ["wall"])) {
        //Destroy wall and the nearest <destroyWallsInBunch> walls always
        const villageWalls = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ["wall"], ["wall_destroyed"])
        const nearestWalls = FILTER_ByClosest(OPER_Difference(villageWalls, currentBuilding), currentBuilding, invasionVillageAttackResolveVal.common.destroyWallsInBunch - 1)
        const listOfAffectedBuildings = OPER_Union(currentBuilding, nearestWalls)
        OUTPUT_DestroyEntities(listOfAffectedBuildings)
        OUTPUT_AddTag(listOfAffectedBuildings, "wall_destroyed")
        buildingDamageData = { structuresAffected: listOfAffectedBuildings, wasStructureDestroyed: true, appliedDamage: effectiveBuildingHP * QUERY_GetEntitiesCount(listOfAffectedBuildings) }
    } else if (QUERY_HasTags(currentBuilding, ["bridge"])) {
        //Destroy bridge always, don't count damage applied.
        OUTPUT_DestroyEntities(currentBuilding)
        buildingDamageData = { structuresAffected: currentBuilding, wasStructureDestroyed: true, appliedDamage: 0 }
    } else {
        //For all other buildings, destroy or damage based off percentage chance (specified per Horde).
        //If a building is already damaged, destroy it.
        const randomRoll = RandomFloat() * 100
        if (randomRoll < hordeInfo.destroyPercent || forceDestroyNonEssential) {
            //Destroy (factor = 1 -> Building will destroy in 1 hit)
            buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, 1, despawnIfDestroyed)
        } else {
            //Apply damage with damage factor 2 (building will take a hit twice)
            buildingDamageData = _ApplyPartialDamageToBuilding(currentBuilding, effectiveBuildingHP, effectiveBuildingMaxHP, 2, despawnIfDestroyed)
        }
    }

    return buildingDamageData
}

const _GetAllVillageBuildables = (villageId) => {
    const defensiveBuildables = GetDefensiveBuildings(villageId)
    const nonDefensiveBuildables = GetNonDefensiveBuildings(villageId)
    return OPER_Union(defensiveBuildables, nonDefensiveBuildables)
}

SNIPPET_SpatialPartitionEntered("spe_invasion_first_village_damaged_cine", (triggeringEntity, _enteringEntity, _payload) => {
    if (DoOnce(invasionVillageAttackResolveVal.common.global.villageDamagedPlayed)) {
        OUTPUT_DebugLogInvasion("Playing the Village Damaged cine")
        OUTPUT_TriggerCinematic(invasionVillageAttackResolveVal.common.cinematics.firstDamagedVillageSighting, GetPlayers())
    }
    Once()
    OUTPUT_DespawnEntities(triggeringEntity)
})

SNIPPET_SpatialPartitionEntered("spe_invasion_first_village_destroyed_cine", (triggeringEntity, _enteringEntity, _payload) => {
    if (DoOnce(invasionVillageAttackResolveVal.common.global.villageDisabledPlayed)) {
        OUTPUT_DebugLogInvasion("Playing the Village Disabled cine")
        OUTPUT_TriggerCinematic(invasionVillageAttackResolveVal.common.cinematics.firstDisabledVillageSighting, GetPlayers())
    }
    Once()
    OUTPUT_DespawnEntities(triggeringEntity)
})

//Note that percent complete is based on when you arrive. E.g. if you arrive late, then perhaps 50% of the damage has already been dealt.
const InvasionAttackV2ApplyDamage = (villageId, hordeName, strength, percentComplete) => {
    Logv(`Applying damage to village '${villageId}'`)

    let villageDefense = 0
    let attackDamage = 0
    let totalDamageApplied = 0

    // Only calculating village attack damage if we're not in act 3. Any village attacks that resolve in act 3
    // will have their damage effectively ignored.
    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) <= 0 || QUERY_GetGlobalVariable(GV_STARTED_EPILOGUE) > 0) {
        villageDefense = _CalculateVillageDefense(villageId)
        attackDamage = _CalculateVillageAttackDamage(hordeName, strength, percentComplete, villageDefense)

        const minDamage = invasionVillageAttackResolveVal.common.globalMinDamage

        totalDamageApplied = attackDamage - villageDefense
        if (totalDamageApplied < minDamage) {
            OUTPUT_DebugLogInvasion(`\t total damage calculated is too small. Using minimum damage '${minDamage}'...`)
            totalDamageApplied = minDamage
        }
    }

    // The common damage function is fairly long so its been moved to a helper function.
    const affectedEntities = DistributeVillageDamageCommon(villageId, hordeName, totalDamageApplied)

    return { affectedEntities: affectedEntities, attackDamage: attackDamage, villageDefense: villageDefense }
}

const _GetHordeStrengthData = (hordeName, attackStrength) => {
    return invasionVillageAttackResolveVal[hordeName].strengthData[attackStrength]
}

const _CalculateVillageAttackDamage = (hordeName, attackStrength, percentScaling, villageDefense) => {
    const strengthData = _GetHordeStrengthData(hordeName, attackStrength)
    const invasionPhase = GetInvasionPhase()

    const baseDamage = strengthData.baseDamage
    const phaseMod = strengthData.phaseModifier * invasionPhase //bonus damage to deal based on the value PER horde * the invasion phase. Note that phase 1 returns as 0, so at phase 1 the bonus is zeor. Not sure if we need this since strengths inherently work here.
    const minDamage = strengthData.minDamage
    const vulnerabilityBonus = strengthData.vulnerabilityBonus * (1 - Math.min(villageDefense / strengthData.vulnerabilityThreshold, 1)) //bonus damage to deal if village is below a threshold of defense, essentially "are they extra vulnerable"
    //Set the difficulty multiplier (piglin damage) and auto-resolve multiplier to 1.0
    let difficultyMultiplier = invasionVillageAttackResolveConfig.damageBonus
    let autoResolveMultiplier = invasionVillageAttackResolveConfig.autoResolveMultiplier

    //If its a custom game, instead we read the value of the piglin damage and auto-resolve multiplier, then use those values
    if (QUERY_GameDifficulty() === "Custom") {
        difficultyMultiplier = QUERY_GetGlobalVariable(CustomSettingGV(customSettingNames.gvPiglinDamage)) / 100
        autoResolveMultiplier = QUERY_GetGlobalVariable(CustomSettingGV(customSettingNames.gvAutoResolve)) / 100
    }

    const totalDamage = Math.max(baseDamage + phaseMod + vulnerabilityBonus, minDamage) * percentScaling * difficultyMultiplier * autoResolveMultiplier

    OUTPUT_DebugLogInvasion(`Village Attack Damage Calculation: 
    base damage: ${baseDamage}, 
    phase modifier: ${phaseMod},
    vulnerability bonus: ${vulnerabilityBonus} (${strengthData.vulnerabilityBonus}),
    percent scaling: ${percentScaling},
    difficulty multiplier: ${difficultyMultiplier}
    autoresolve multiplier: ${autoResolveMultiplier}
    total damage: ${totalDamage}`)

    return totalDamage
}

const _CalculateVillageDefense = (villageId) => {
    const villageBuildings = GetEntitiesWithTagsAndVillage(["buildable"], villageId)
    const activeDefenseValue = QUERY_EntitiesInvasionDefenseValue(villageBuildings)
    const defenseMultiplier = QUERY_EntitiesInvasionDefenseMultiplier(villageBuildings)

    //Whether or not there should be any bonus defense as the result of this being a mob alliance
    let mobAllianceBonus = 0
    const villageFaction = QUERY_GetFactionNameFromVillageID(villageId)
    if (FACTION_MOB_ALLIANCES.includes(villageFaction)) {
        mobAllianceBonus = invasionVillageAttackResolveVal.common.mobAllianceDefense[villageFaction]
    }
    //Set the defense penalty (piglin health) based on config
    let difficultyPenalty = invasionVillageAttackResolveConfig.defensePenalty

    //If its a custom game, instead we read the global variable we set for the mode, then use that value
    if (QUERY_GameDifficulty() === "Custom") {
        difficultyPenalty = QUERY_GetGlobalVariable(CustomSettingGV(customSettingNames.gvPiglinHealth)) / 100
    }

    const totalMitigatedDamage = (activeDefenseValue * defenseMultiplier + mobAllianceBonus) / difficultyPenalty

    OUTPUT_DebugLogInvasion(`Village Defense Calculation: 
    active defense value: ${activeDefenseValue}, 
    defense multiplier: ${defenseMultiplier},
    difficulty penalty: ${difficultyPenalty}, 
    mob alliance bonus: ${mobAllianceBonus},
    total mitigated damage: ${totalMitigatedDamage}`)

    return totalMitigatedDamage
}
