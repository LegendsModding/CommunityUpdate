const newFrontlinesFactionMessages = [
    {
        faction: FACTION_NAME_ATTACK,
        message: "invasion_new_frontline_attack"
    },
    {
        faction: FACTION_NAME_DEFEND,
        message: "invasion_new_frontline_defend"
    },
    {
        faction: FACTION_NAME_OBSTACLE,
        message: "invasion_new_frontline_obstacle"
    },
    {
        faction: FACTION_NAME_FROST,
        message: "invasion_new_frontline_frost"
    }
]

const _GetFactionFrontlineMessage = (faction) => {
    for (const factionMessageInfo of newFrontlinesFactionMessages) {
        if (factionMessageInfo.faction === faction) {
            return factionMessageInfo.message
        }
    }

    Loge("Faction " + faction + " doesn't exist or it is not listed in the dictionary in invasion_intentions_defensive_outpost.js")
}

//Revise once more complex behaviour is required
const GenerateDefensiveOutpostSource = (faction) => {
    const availableBases = GetUnreservedFactionBases(faction)

    let source = null
    if (QUERY_GetEntitiesCount(availableBases) > 0) {
        source = RandomEntity(availableBases)
    }

    return source
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetDefensiveOutpost = (faction, selectSource = true) => {
    let source = -1
    if (selectSource) {
        source = GenerateDefensiveOutpostSource(faction)
        if (source === null) {
            return false
        }
        ReserveVillage(source)

        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.BUILDING)

        OUTPUT_DebugLogInvasion("Prepared source " + QUERY_GetVillageIDFromEntity(source) + " for Defensive Outpost intention for faction " + faction)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_BUILD_DEFENSIVE_OUTPOST, [], false, faction, 0)
    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveDefensiveOutpost = (faction) => {
    if (SpawnDefensiveOutpostWithRules(faction, true) === false) {
        Logw(`The faction ${faction} couldn't build a Defensive Outpost. Placement failed!`)
        return false
    }

    OUTPUT_DebugLogInvasion(`The faction ${faction} is building a Defensive Outpost!`)
    OUTPUT_Announce(_GetFactionFrontlineMessage(faction), [])
    return true
}
