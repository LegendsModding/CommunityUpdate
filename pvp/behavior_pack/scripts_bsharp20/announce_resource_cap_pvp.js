const pvpResourceCapAnnouncerConfig = {
    identicalAnnouncementCooldown: 60
}

const pvpResourceCapAnnouncerResources = {
    wood: {
        resourceName: "wood",
        vo: "pvp_resource_cap_wood"
    },
    stone: {
        resourceName: "stone",
        vo: "pvp_resource_cap_stone"
    },
    iron: {
        resourceName: "iron",
        vo: "pvp_resource_cap_iron"
    },
    coal: {
        resourceName: "coal",
        vo: "pvp_resource_cap_coal"
    },
    redstone: {
        resourceName: "redstone",
        vo: "pvp_resource_cap_redstone"
    },
    diamond: {
        resourceName: "diamond",
        vo: "pvp_resource_cap_diamond"
    },
    emerald: {
        resourceName: "emerald",
        vo: "pvp_resource_cap_lapis"
    },
    xp_common: {
        resourceName: "xp_common",
        vo: "pvp_resource_cap_prismarine"
    }
}

// logic:
// checks when a team reaches resource cap then it plays a VO line
// if a player tries to gather more of the same resource when at cap, then the VO line for that resource plays
// if a player gets resources from a treasure chest, they can go over the cap but we might want to also play that line again?

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchEndHQsLastStanding, (ruleValue) => {
    if (ruleValue) {
        //---------------------- TEAM_BLUE ----------------------
        for (const key in pvpResourceCapAnnouncerResources) {
            const resourceData = pvpResourceCapAnnouncerResources[key]
            LISTENFOR_ResourcesChanged({
                snippet: "rc_cap_resource",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                resourceName: resourceData.resourceName,
                teamName: TEAM_BLUE
            })
            LISTENFOR_ResourcesChanged({
                snippet: "rc_cap_resource",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                resourceName: resourceData.resourceName,
                teamName: TEAM_RED
            })
        }
    }
})

SNIPPET_ResourcesChanged("rc_cap_resource", (resourceName, teamName, previousAmount, currentAmount) => {
    const resourceData = pvpResourceCapAnnouncerResources[resourceName]

    // only trigger on gathering / obtaining
    if (currentAmount < previousAmount) {
        return
    }

    const max = QUERY_GetTeamResourceMax(teamName, resourceName)

    // if was already capped and over-capping then ignore (eg. a chest)
    if (previousAmount >= max) {
        return
    }

    // hit max?
    if (currentAmount < max) {
        return
    }

    if (DoIfNotOnCooldown(pvpResourceCapAnnouncerConfig.identicalAnnouncementCooldown, `gv_max_cap_msg_cd_${resourceName}`)) {
        PlayPresentationActionToTeam(resourceData.vo, teamName)
    }
})
