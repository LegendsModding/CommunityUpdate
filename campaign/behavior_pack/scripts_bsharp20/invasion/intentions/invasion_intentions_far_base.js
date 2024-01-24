const farBaseFactionMessages = [
    {
        faction: FACTION_NAME_ATTACK,
        message: "invasion_new_base_attack"
    },
    {
        faction: FACTION_NAME_DEFEND,
        message: "invasion_new_base_defend"
    },
    {
        faction: FACTION_NAME_OBSTACLE,
        message: "invasion_new_base_obstacle"
    },
    {
        faction: FACTION_NAME_FROST,
        message: "invasion_new_base_frost"
    }
]

const _GetHordeFarBaseMessage = (faction) => {
    for (const factionMessageInfo of farBaseFactionMessages) {
        if (factionMessageInfo.faction === faction) {
            return factionMessageInfo.message
        }
    }

    Loge("Faction " + faction + " doesn't exist or it is not listed in the dictionary in invasion_intentions_new_base.js")
}

const _SuccessfulFarBaseBuilding = (faction) => {
    OUTPUT_DebugLogInvasion(`The faction ${faction} is building a New Base!`)
    OUTPUT_Announce(_GetHordeFarBaseMessage(faction), [])
}

//Revise once more complex behaviour is required
const _GenerateFarBaseSource = (faction) => {
    const availableBases = GetUnreservedFactionBases(faction)

    let source = -1
    if (QUERY_GetEntitiesCount(availableBases) > 0) {
        source = RandomEntity(availableBases)
    }

    return source
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetFarBase = (faction, selectSource = true, useInvasionManagerRestrictions = true, sourceVillageId = null) => {
    // Check if exceeding the cap
    if (useInvasionManagerRestrictions && !CheckBaseNumberRestriction(faction)) {
        return false
    }

    let source = -1
    if (sourceVillageId !== null) {
        source = GetVillageEntityFromID(sourceVillageId)

        if (!HasEntities(source)) {
            OUTPUT_DebugLogInvasion(`Failed to plan a build far base action: given source village ${sourceVillageId} is an invalid entity!`)
            return false
        }

        if (!HasEntities(OPER_Intersection(GetUnreservedFactionBases(faction), source))) {
            OUTPUT_DebugLogInvasion(`Failed to plan a build far base action: given source village ${sourceVillageId} is already reserved!`)
            return false
        }
    }
    else if (selectSource) {
        source = _GenerateFarBaseSource(faction)

        if (!HasEntities(source)) {
            return false
        }
    }

    if (HasEntities(source)) {
        ReserveVillage(source)

        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.BUILDING)
    
        OUTPUT_DebugLogInvasion("Prepared source " + QUERY_GetVillageIDFromEntity(source) + " for New Base intention for faction " + faction)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_BUILD_FAR_BASE, [], false, faction, 0)
    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveFarBase = (faction) => {
    OUTPUT_DebugLogInvasion(`Trying building a Far Base for ${faction}`)

    if (SpawnBaseWithRulesInClaimedArea(faction, BASE_SIZE_SMALL, true)) {
        _SuccessfulFarBaseBuilding(faction)

        // Increment base constructed counter
        HordeBasesConstructedCounter.Increment(faction, BASE_SIZE_SMALL)
        HordeBasesConstructedAndUpgradedCounter.Increment(faction)

        if (DoOnce("invasionFirstNewBaseCreated")) {
            PlayPresentationActionToAll("invasion_new_base")
        }

        return true
    }

    Logw(`The faction ${faction} couldn't build a New Base. Placement failed!`)
    return false
}
