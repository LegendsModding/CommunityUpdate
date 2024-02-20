const establishFactionMessages = [
    {
        faction: FACTION_NAME_ATTACK,
        message: "invasion_new_base_attack"
    },
    {
        faction: FACTION_NAME_DEFEND,
        message: "invasion_new_base_defend"
    },
    {
        faction: FACTION_NAME_FROST,
        message: "invasion_new_base_frost"
    },
    {
        faction: FACTION_NAME_OBSTACLE,
        message: "invasion_new_base_obstacle"
    }
]

const _GetHordeEstablishMessage = (faction) => {
    for (const factionMessageInfo of establishFactionMessages) {
        if (factionMessageInfo.faction === faction) {
            return factionMessageInfo.message
        }
    }

    Loge("Faction " + faction + " doesn't exist or it is not listed in the dictionary in invasion_intentions_new_base.js")
}

const _SuccessfulEstablish = (faction) => {
    OUTPUT_DebugLogInvasion(`The faction ${faction} is building a New Base!`)
    OUTPUT_Announce(_GetHordeEstablishMessage(faction), [])
}

const _SelectSource = (horde) => {
    if (!HordeEstablishment.IsCentralBaseEstablished(horde)) {
        return -1
    }

    const centralBaseId = HordeEstablishment.GetCentralBaseID(horde)
    const source = GetVillageEntityFromID(centralBaseId)
    if (HasEntities(source)) {
        const isReserved = HasEntities(FILTER_ByVillageID(GetReservedFactionBases(horde), centralBaseId))
        if (!isReserved) {
            return source
        }
    }

    const randomBase = FILTER_RandomCount(GetUnreservedFactionBases(horde), 1)
    if (HasEntities(randomBase)) {
        return randomBase
    }

    return -1
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetEstablish = (faction, selectSource = true, sourceVillageId = null) => {
    let source = -1
    if (sourceVillageId !== null) {
        source = GetVillageEntityFromID(sourceVillageId)
        
        if (!HasEntities(source)) {
            return false
        }

        if (!HasEntities(OPER_Intersection(GetUnreservedFactionBases(faction), source))) {
            return false
        }

    } else if (selectSource) {
        source = _SelectSource(faction)
    }

    if (HasEntities(source)) {
        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.BUILDING)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_ESTABLISH, [], false, faction, 0)
    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveEstablish = (faction) => {
    OUTPUT_DebugLogInvasion(`Trying building a New Base for ${faction}`)

    const buildingPace = HordeBasesSetup[faction].establishmentPace
    let nextSizeToBuild = HordeEstablishment.GetNextBaseSizeToBuild(faction)
    if (nextSizeToBuild === null) {
        //Horde is already established
        return true
    }

    let built = 0
    let attempts = 0
    while (nextSizeToBuild !== null && attempts < buildingPace) {
        const success = SpawnBaseWithRulesInClaimedArea(faction, nextSizeToBuild, true)
        attempts++
        if (success) {
            built++
        } else {
            Loge(`Failed to build base size ${nextSizeToBuild} for horde ${faction} as part of establishment. This must never happen. The flow will still go on, however.`)
        }

        HordeEstablishment.DecrementSizeCount(faction, nextSizeToBuild)
        nextSizeToBuild = HordeEstablishment.GetNextBaseSizeToBuild(faction)
    }

    if (built > 0) {
        _SuccessfulEstablish(faction)

        if (DoOnce("invasionFirstNewBaseCreated")) {
            PlayPresentationActionToAll("invasion_new_base")
        }
        return true
    }

    Loge(`Failed to establish ANY base for horde ${faction}. Check your flow.`)
    return false
}
