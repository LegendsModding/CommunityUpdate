const newVanguardFactionMessages = [
    {
        faction: FACTION_NAME_ATTACK,
        message: "invasion_new_vanguard_attack"
    },
    {
        faction: FACTION_NAME_DEFEND,
        message: "invasion_new_vanguard_defend"
    },
    {
        faction: FACTION_NAME_FROST,
        message: "invasion_new_vanguard_frost"
    },
    {
        faction: FACTION_NAME_OBSTACLE,
        message: "invasion_new_vanguard_obstacle"
    }
]

const _GetFactionVanguardMessage = (faction) => {
    for (const factionMessageInfo of newVanguardFactionMessages) {
        if (factionMessageInfo.faction === faction) {
            return factionMessageInfo.message
        }
    }

    Loge("Faction " + faction + " doesn't exist or it is not listed in the dictionary in invasion_intentions_offensive_outpost.js")
}

//Revise once more complex behaviour is required
const GenerateOffensiveOutpostSource = (faction) => {
    const availableBases = GetUnreservedFactionBases(faction)

    let source = null
    if (QUERY_GetEntitiesCount(availableBases) > 0) {
        source = RandomEntity(availableBases)
    }

    return source
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_SetOffensiveOutpost = (faction, selectSource = true) => {
    let source = -1
    if (selectSource) {
        source = GenerateOffensiveOutpostSource(faction)
        if (source === null) {
            return false
        }
        ReserveVillage(source)

        // Update map icons
        OUTPUT_MapSetKeyValue(source, MAP_KEY.INVASION_INTENTION, MAP_INVASION_INTENTION.BUILDING)

        OUTPUT_DebugLogInvasion("Prepared source " + QUERY_GetVillageIDFromEntity(source) + " for Offensive Outpost intention for faction " + faction)
    }

    OUTPUT_SetDelayedInvasionAction(source, FACTION_ACTION_BUILD_OFFENSIVE_OUTPOST, [], false, faction, 0)
    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/camelcase
const DAI_ResolveOffensiveOutpost = (faction) => {
    if (SpawnOffensiveOutpostWithRules(faction, true) === false) {
        Logw(`The faction ${faction} couldn't build an Offensive Outpost. Placement failed!`)
        return false
    }

    OUTPUT_DebugLogInvasion(`The faction ${faction} is building an Offensive Outpost!`)
    OUTPUT_Announce(_GetFactionVanguardMessage(faction), [])
    return true
}
