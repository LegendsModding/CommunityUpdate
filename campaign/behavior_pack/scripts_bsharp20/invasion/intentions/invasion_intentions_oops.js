const oopsFactionMessages = [
    {
        faction: FACTION_NAME_ATTACK,
        message: "invasion_oops_attack"
    },
    {
        faction: FACTION_NAME_DEFEND,
        message: "invasion_oops_defend"
    },
    {
        faction: FACTION_NAME_FROST,
        message: "invasion_oops_frost"
    },
    {
        faction: FACTION_NAME_OBSTACLE,
        message: "invasion_oops_obstacle"
    }
]

//Oops deals different damage based on the difficulty setting
const oopsDifficulty = {
    Peaceful: {
        numBuildings: 8, //how many buildings to target per Oops
        numBuildingsToRemain: 0, //# of buildings we want to leave unscathed in the base. For now we're happy with all being damaged, set to 0.
        damageMin: 35, //the minimum % of damage dealt to a building in an Oops, randomized between Min and Max
        damageMax: 100 //the maximum % of damage dealt to a building in an Oops, randomized between Min and Max
    },
    Easy: {
        numBuildings: 6,
        numBuildingsToRemain: 0,
        damageMin: 35,
        damageMax: 70
    },
    Normal: {
        numBuildings: 4,
        numBuildingsToRemain: 0,
        damageMin: 35,
        damageMax: 50
    },
    Hard: {
        numBuildings: 3,
        numBuildingsToRemain: 0,
        damageMin: 35,
        damageMax: 35
    },
    Custom: {
        numBuildings: 4,
        numBuildingsToRemain: 0,
        damageMin: 35,
        damageMax: 50
    }
}

const _GetFactionOopsMessage = (faction) => {
    for (const factionMessageInfo of oopsFactionMessages) {
        if (factionMessageInfo.faction === faction) {
            return factionMessageInfo.message
        }
    }

    Loge("Faction " + faction + " doesn't exist or it is not listed in the dictionary in invasion_intentions_oops.js")
}

//Revise once more complex behaviour is required
const GenerateOopsSource = (faction) => {
    const availableBases = GetUnreservedFactionBases(faction)

    let source = -1
    if (QUERY_GetEntitiesCount(availableBases) > 0) {
        source = RandomEntity(availableBases)
    }

    return source
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetOops = (faction, hidden, selectSource = true, targetVillageId = null) => {
    let target = -1
    if (targetVillageId !== null) {
        target = GetVillageEntityFromID(targetVillageId)

        if (!HasEntities(OPER_Intersection(GetUnreservedFactionBases(faction), target))) {
            OUTPUT_DebugLogInvasion(`Failed to plan an oops action: given target village ${targetVillageId} is already reserved!`)
            return false
        }
    } else {
        target = GenerateOopsSource(faction)
    }

    if (!HasEntities(target)) {
        OUTPUT_DebugLogInvasion(`Failed to plan an oops action: given target village ${targetVillageId} is an invalid entity!`)
        return false
    }

    ReserveVillage(target)
    OUTPUT_DebugLogInvasion("Prepared oops target " + QUERY_GetVillageIDFromEntity(target) + " for Oops intention for faction " + faction)

    const source = selectSource ? target : -1

    if (HasEntities(source) && !hidden) {
        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.BUILDING)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_OOPS, target, hidden, faction, 0)
    return true
}

// set hidden boolean?
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveOops = (faction, target, hidden) => {
    if (!HasEntities(target)) {
        OUTPUT_DebugLogInvasion(`Can't perform oops action for faction ${faction} because target entity is invalid!`)
        return false
    }

    if (!IsVillageAlive(QUERY_GetVillageIDFromEntity(target))) {
        OUTPUT_DebugLogInvasion(`Can't perform oops action for faction ${faction} because target entity is not alive!`)
        return false
    }

    //Reminder: Delayed nature handled in code of OUTPUT_DoInvasionOops()
    const targetVillageId = QUERY_GetVillageIDFromEntity(target)

    OUTPUT_DebugLogInvasion(`The village ${targetVillageId} from faction ${faction} is Oopsing!`)
    OUTPUT_DoInvasionOops(targetVillageId, hidden)

    // Update map icons
    if (!hidden){
        // Update map icons
        OUTPUT_MapSetKeyValue(target, MAP_KEY.INVASION_ACTIVE, MAP_INVASION_ACTIVE.IS_BUILDING)
    }

    return true
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (ruleValue) => {
    if (ruleValue) {
        LISTENFOR_InvasionOopsApply({
            snippet: "ioa_do_oops",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })
    }
})

SNIPPET_InvasionOopsApply("ioa_do_oops", (villageId, _payload) => {
    const factionName = QUERY_GetFactionNameFromVillageID(villageId)
    OUTPUT_Announce(_GetFactionOopsMessage(factionName), [])

    //Query difficulty so we can deal damage and # of structures in an oops based on that
    const difficulty = QUERY_GameDifficulty()
    const difficultyMap = oopsDifficulty[difficulty] //example

    //Query buildable structures with a few exceptions (portals, chests, rally points, walls, bridges). We tag the structure later it won't be caught in future passes.
    //Count the number of valid structures it returned
    //Subtract thethe amount of buildings we found by the amount that we specified must remain. Clamp it to min value of 0 to avoid weird cases.
    //Get the smaller value of: a) the clamped value above OR b) the amount of buildings we'd like to destroy based on difficulty. This is so we don't destroy too many buildings.
    //Then filter that group into a smaller group to operate on later
    const buildings = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_BUILDABLE], ["mob", "portal_piglin", "poi_loot_piglin_crate", "pigCrystal", "piglin_rallying_point", "targetedByOops", "piglin_wall", "wall", "piglin_bridge"])
    const buildingsCount = QUERY_GetEntitiesCount(buildings)
    const buildingsClamped = Math.max(buildingsCount - difficultyMap.numBuildingsToRemain, 0)
    const buildingsToDestroy = Math.min(buildingsClamped, difficultyMap.numBuildings)
    const buildingsRandom = FILTER_RandomCount(buildings, buildingsToDestroy)

    //If we found any buildings, then run the normal query
    if (buildingsToDestroy > 0) {
        //Write to the log how many buildings we found and how many we plan to destroy.
        OUTPUT_DebugLogInvasion(`Oops action by faction ${factionName}: Found: ${QUERY_GetEntitiesCount(buildings)} buildings, damaging ${buildingsToDestroy}`)
        //Deal a random amount of damage to structures based on min/max, then tag them so they can't be hit by another oops
        OUTPUT_DamageEntitiesByPercentage(buildingsRandom, RandomIntFromInterval(difficultyMap.damageMin, difficultyMap.damageMax))
        OUTPUT_AddTag(buildingsRandom, "targetedByOops")
    } else {
        //Write to the log that there are no valid buildings found.
        OUTPUT_DebugLogInvasion(`Oops action by faction ${factionName} DID NOT damage any buildings. It didn't find structures OR they've been damaged with Oops previously OR it fell below the threshold for buildings remaining.`)
    }

    //TODO: In the future, think about whether we'd want to do a round robin style, where we damage the buildings all one level, then sweep back again for a 2nd pass. Feels unecessary given the # of iterations required.
    //TODO: More analysis of how this is performing. It could go back to being more deadly, but only if being coupled with a repair invasion action or something.

    // Update map icons
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapRemoveKey(villageEntity, MAP_KEY.INVASION_ACTIVE)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.INVASION_RECAP, MAP_INVASION_RECAP.OOPSED)
})
