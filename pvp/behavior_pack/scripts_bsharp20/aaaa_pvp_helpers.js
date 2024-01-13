const GetOppositeTeam = (teamName) => {
    // controversial function go!
    if (teamName === TEAM_RED) {
        return TEAM_BLUE
    } else if (teamName === TEAM_BLUE) {
        return TEAM_RED
    } else {
        return TEAM_WILD
    }
}

const TAG_BUILDABLE_BUILDING = "bsharp_buildable_building"
const TagBuildableAsBuilding = (buildableEntities) => {
    OUTPUT_AddTag(buildableEntities, TAG_BUILDABLE_BUILDING)
}
const UntagBuildableAsBuilding = (buildableEntities) => {
    OUTPUT_RemoveTag(buildableEntities, TAG_BUILDABLE_BUILDING)
}

const ONBCanPlayAnnouncement = (team, key, player) => {
    const matchesPlayedGate = QUERY_GetGameMode() === "conquest_practice" ? true : QUERY_GetUserMatchesPlayed(player) < NUMBER_OF_MATCHES_TO_NEGATE_ONBOARDING
    return GetTeamVariable(team, key) === 0 && matchesPlayedGate
}

const ONBPreventAnnouncementsForAWhile = (team, key, time) => {
    SetTeamVariable(team, key, 1)
    LISTENFOR_LocalTimer({
        snippet: "lt_prevent_announcement_onb",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: time,
        payloadString: GetTeamVariableKey(team, key)
    })
}

SNIPPET_LocalTimer("lt_prevent_announcement_onb", (payload) => {
    OUTPUT_SetGlobalVariable(payload.string, 0)
})
