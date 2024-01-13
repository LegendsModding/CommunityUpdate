const pvpRemdinerVal = {
    reminders: {
        prismarine: {
            vo: "pvp_reminder_prismarine",
            consts: {
                timeToFirstFire: 180,
                timeToReminder: 180
            },
            global: {
                collectedPrismarine: "gv_team_collected_prismarine"
            }
        },
        recall: {
            vo: "pvp_recall_hint",
            global: {
                recallPlayedVO: "gv_team_collected_prismarine"
            }
        }
    }
}

// logic:
// Prismarine reminder - This reminder tells players that they need Prismarine in order to build upgrades
// we want the prisamrine reminder to fire off when a team hasn't gathered prismarine after [x] minutes? (maybe 3-4 minutes into the match)
// if a team still hasn't gathered any prismarine after that, we keep reminding them every minute afterwards
// once prismarine has been collected then maybe we stop the VO from playing?

// Recall hint - This reminder tells players that other teammates cannot recall units that are following them
// we could have this fire off the first time a player lures units? or maybe when spawning units from a spawner?
// we could also fire this off if another player is trying to recall maybe? not 100% sure about this one

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchEndHQsLastStanding, (ruleValue) => {
    if (ruleValue.value) {
        //---------------------- TEAM_BLUE ----------------------

        LISTENFOR_ResourcesChanged({
            snippet: "rc_gathered_prismarine",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            resourceName: "xp_common",
            teamName: TEAM_BLUE
        })

        LISTENFOR_LocalTimer({
            snippet: "lt_first_prismarine_reminder_blue",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: pvpRemdinerVal.reminders.prismarine.consts.timeToFirstFire
        })

        LISTENFOR_InfluenceLureChanged({
            snippet: "ilc_player_lured_mobs",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["mob", "luredirect"],
            excludeTags: ["animal", "neutral"]
        })

        //---------------------- TEAM_RED ----------------------

        LISTENFOR_ResourcesChanged({
            snippet: "rc_gathered_prismarine",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            resourceName: "xp_common",
            teamName: TEAM_RED
        })

        LISTENFOR_LocalTimer({
            snippet: "lt_first_prismarine_reminder_red",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: pvpRemdinerVal.reminders.prismarine.consts.timeToFirstFire
        })
    }
})

SNIPPET_ResourcesChanged("rc_gathered_prismarine", (_resourceName, teamName, previousAmount, currentAmount) => {
    //Check if the team has collected resources
    if (currentAmount > previousAmount) {
        Logi("### TEAM + " + teamName + " has collected prismarine")
        SetTeamVariable(teamName, pvpRemdinerVal.reminders.prismarine.global.collectedPrismarine, 1)
        if (GetTeamVariable(TEAM_BLUE, pvpRemdinerVal.reminders.prismarine.global.collectedPrismarine) > 0 && GetTeamVariable(TEAM_RED, pvpRemdinerVal.reminders.prismarine.global.collectedPrismarine) > 0) {
            Once()
        }
        return
    }
})

SNIPPET_InfluenceLureChanged("ilc_player_lured_mobs", (entity, _wasStarted, _factionName, _payload) => {
    const teamName = QUERY_GetTeamName(RandomEntity(entity))
    if (GetTeamVariable(teamName, pvpRemdinerVal.reminders.recall.global.recallPlayedVO) === 0) {
        Logi("### TEAM + " + teamName + " has luredMobs")
        PlayPresentationActionToTeam(pvpRemdinerVal.reminders.recall.vo, teamName)
        SetTeamVariable(teamName, pvpRemdinerVal.reminders.recall.global.recallPlayedVO, 1)
        Once()
    }
})

//---------------------- TEAM_BLUE ----------------------
SNIPPET_LocalTimer("lt_first_prismarine_reminder_blue", () => {
    if (GetTeamVariable(TEAM_BLUE, pvpRemdinerVal.reminders.prismarine.global.collectedPrismarine) > 0) {
        return
    }
    Logi("### TEAM + " + TEAM_BLUE + " has been reminded about prismarine for the first time")
    PlayPresentationActionToTeam(pvpRemdinerVal.reminders.prismarine.vo, TEAM_BLUE)

    LISTENFOR_LocalTimer({
        snippet: "lt_repeated_prismarine_reminder_blue",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: pvpRemdinerVal.reminders.prismarine.consts.timeToReminder
    })
})

SNIPPET_LocalTimer("lt_repeated_prismarine_reminder_blue", () => {
    if (GetTeamVariable(TEAM_BLUE, pvpRemdinerVal.reminders.prismarine.global.collectedPrismarine) > 0) {
        return
    }
    Logi("### TEAM + " + TEAM_BLUE + " has been reminded about prismarine again")
    PlayPresentationActionToTeam(pvpRemdinerVal.reminders.prismarine.vo, TEAM_BLUE)

    LISTENFOR_LocalTimer({
        snippet: "lt_repeated_prismarine_reminder_blue",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: pvpRemdinerVal.reminders.prismarine.consts.timeToReminder
    })
})

//---------------------- TEAM_RED ----------------------
SNIPPET_LocalTimer("lt_first_prismarine_reminder_red", () => {
    if (GetTeamVariable(TEAM_RED, pvpRemdinerVal.reminders.prismarine.global.collectedPrismarine) > 0) {
        return
    }
    PlayPresentationActionToTeam(pvpRemdinerVal.reminders.prismarine.vo, TEAM_RED)

    LISTENFOR_LocalTimer({
        snippet: "lt_repeated_prismarine_reminder_red",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: pvpRemdinerVal.reminders.prismarine.consts.timeToReminder
    })
})

SNIPPET_LocalTimer("lt_repeated_prismarine_reminder_red", () => {
    if (GetTeamVariable(TEAM_RED, pvpRemdinerVal.reminders.prismarine.global.collectedPrismarine) > 0) {
        return
    }
    PlayPresentationActionToTeam(pvpRemdinerVal.reminders.prismarine.vo, TEAM_RED)

    LISTENFOR_LocalTimer({
        snippet: "lt_repeated_prismarine_reminder_red",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: pvpRemdinerVal.reminders.prismarine.consts.timeToReminder
    })
})
