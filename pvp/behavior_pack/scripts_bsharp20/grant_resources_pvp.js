const pvpGrantResourcesVal = {
    structureListeners: [
        {
            tag: "increase_spawner_cap_pvp", // Pop cap upgrade
            resourceName: "built_max_pop_cap",
            amount: 1
        }
    ]
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchEndHQsLastStanding, (ruleValue) => {
    if (ruleValue.value) {
        for (let index = 0; index < pvpGrantResourcesVal.structureListeners.length; index++) {
            const listenerData = pvpGrantResourcesVal.structureListeners[index]

            // Listen for granting resources on structures
            if (listenerData.tag !== undefined) {
                LISTENFOR_NonPopCappedEntityDestroyed({
                    snippet: "ed_pvp_grant_resources",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    includeTags: [listenerData.tag],
                    payloadString: listenerData.resourceName,
                    payloadInt: listenerData.amount,
                    despawned: false
                })
            }
        }
    }
})

// Handles setting certain structures to grant resources back to a team on destruction.
// badger:deconstruction handles refunding on despawn (deconstruction)
SNIPPET_NonPopCappedEntityDestroyed("ed_pvp_grant_resources", (buildingEntity, payload) => {
    const teamName = QUERY_GetTeamName(buildingEntity)
    OUTPUT_AddOrRemoveTeamResource(teamName, payload.string, payload.int, false)
})
