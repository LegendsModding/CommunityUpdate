// Awesome function name go!
const _GetHordeStructureRespawnReplacementIndexGV = (hordeName, structureTag) => {
    return `gv_${hordeName}_${structureTag}_respawn_replacement_index`
}

SNIPPET_GlobalVariableChanged("gvc_match_start_tower_upgrade", (_oldValue, newValue, _payload) => {
    if (!newValue) {
        return
    }

    for (const hordeName in PiglinPVPHordes) {
        const hordeData = PiglinPVPHordes[hordeName]
        for (const structureTag in hordeData.structures) {
            const structureData = hordeData.structures[structureTag]
            if (structureData.replacements) {
                LISTENFOR_LocalTimer({
                    snippet: "lt_upgrade_piglin_structure_replacement_tier_" + hordeName,
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    waitTime: structureData.replacements[0].beginAt * 60,
                    payloadString: structureTag,
                    payloadInt: 0
                })
            }
        }
    }
})

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchStartHQsBuilt, (ruleValue) => {
    if (!ruleValue.value) {
        return
    }

    for (const hordeName in PiglinPVPHordes) {
        const hordeData = PiglinPVPHordes[hordeName]
        for (const structureTag in hordeData.structures) {
            const structureData = hordeData.structures[structureTag]
            if (structureData.respawns) {
                LISTENFOR_NonPopCappedEntityDestroyed({
                    snippet: "ed_pvp_respawning_piglin",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    includeTags: structureTag,
                    despawned: false,
                    factionName: hordeName,
                    payloadString: structureTag
                })

                if (structureData.replacements) {
                    const indexGV = _GetHordeStructureRespawnReplacementIndexGV(hordeName, structureTag)
                    OUTPUT_SetGlobalVariable(indexGV, -1)
                }
            }
        }
    }

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_match_start_tower_upgrade",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: GAME_MODE_GLOBAL.matchStarted
    })
})

SNIPPET_NonPopCappedEntityDestroyed("ed_pvp_respawning_piglin", (destroyedEntity, payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)
    const hordeName = QUERY_GetFactionNameFromEntity(destroyedEntity)
    const structureTag = payload.string
    const structureData = PiglinPVPHordes[hordeName].structures[structureTag]

    LISTENFOR_LocalTimer({
        snippet: "lt_rebuild_pvp_barracks_" + hordeName,
        ownerVillageId: villageId,
        waitTime: structureData.respawnDelay,
        payloadString: structureTag
    })
})

for (const hordeName in PiglinPVPHordes) {
    SNIPPET_LocalTimer("lt_upgrade_piglin_structure_replacement_tier_" + hordeName, (payload) => {
        const structureTag = payload.string
        const structureData = PiglinPVPHordes[hordeName].structures[structureTag]
        const currentIndex = payload.int

        const indexGV = _GetHordeStructureRespawnReplacementIndexGV(hordeName, structureTag)
        OUTPUT_SetGlobalVariable(indexGV, currentIndex)

        const nextIndex = currentIndex + 1
        const currentUpgrade = structureData.replacements[currentIndex]
        const nextUpgrade = structureData.replacements[nextIndex]
        if (nextUpgrade) {
            LISTENFOR_LocalTimer({
                snippet: "lt_upgrade_piglin_structure_replacement_tier_" + hordeName,
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                waitTime: (nextUpgrade.beginAt - currentUpgrade.beginAt) * 60,
                payloadString: structureTag,
                payloadInt: nextIndex
            })
        }
    })

    SNIPPET_LocalTimer("lt_rebuild_pvp_barracks_" + hordeName, (payload) => {
        const structureTag = payload.string
        const structureData = PiglinPVPHordes[hordeName].structures[structureTag]
        let structureCard = structureData.card

        if (structureData.replacements) {
            const indexGV = _GetHordeStructureRespawnReplacementIndexGV(hordeName, structureTag)
            const index = QUERY_GetGlobalVariable(indexGV)
            if (index >= 0) {
                const replacementData = structureData.replacements[index]
                if (RandomFloat() < replacementData.chance) {
                    // All choices for upgrades are evenly distributed for now, with the chance only affecting the chance of an upgrade occuring at all
                    structureCard = PiglinPVPHordes[hordeName].structures[ChooseFromArray(replacementData.structures)].card
                }
            }
        }

        const respawningBuilding = BuildableCard(structureCard, 1)
        DECK_MultiplyByMultipleRules(respawningBuilding, structureData.rules)
        OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + payload.ownerVillageId, respawningBuilding)
    })
}
