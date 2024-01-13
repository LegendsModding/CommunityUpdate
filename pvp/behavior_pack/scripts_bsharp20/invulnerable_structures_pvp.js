const pvpInvulnerableVal = {
    structureListeners: [
        {
            tag: "pvp_pylon" // Pylon
        }
    ]
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchEndHQsLastStanding, (ruleValue) => {
    if (ruleValue.value) {
        for (let index = 0; index < pvpInvulnerableVal.structureListeners.length; index++) {
            const listenerData = pvpInvulnerableVal.structureListeners[index]

            // Listen for invulnerable on structures
            if (listenerData.tag !== undefined) {
                LISTENFOR_BuildingComplete({
                    snippet: "bc_pvp_set_invul",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    includeTags: [listenerData.tag],
                    payloadInt: index
                })
            }
        }
    }
})

// Handles setting certain structures to be invulnerable when built
SNIPPET_BuildingComplete("bc_pvp_set_invul", (buildingEntity) => {
    OUTPUT_SetInvulnerable(buildingEntity, true)
})
