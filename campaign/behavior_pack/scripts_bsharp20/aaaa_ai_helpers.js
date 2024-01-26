/* eslint-disable @typescript-eslint/no-unused-vars */

/* -------------------------------------------------------------------------- */
/*                             AI setup functions                             */
/* -------------------------------------------------------------------------- */

const AI_HOME_BASE_THRESHOLD = 0.01

const InitializeBaseAIs = (villageId, aiConfig, rallyData = [], overrideSpawnLocation = EMPTY_ENTITY_GROUP) => {
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (villageSize === BASE_SIZE_OUTPOST) return
    for (const aiName in aiConfig) {
        let aiCompositions = []
        if (rallyData.length > 0) {
            for (const key in rallyData) {
                if (rallyData[key].ais.length > 0) {
                    const aiData = rallyData[key].ais
                    aiData.forEach((element) => {
                        if (aiName === element[0]) {
                            aiCompositions.push(key)
                        }
                    })
                }
            }
        }
        _CreateBaseAi(villageId, aiConfig[aiName], aiName, aiCompositions, overrideSpawnLocation)
    }
}

const _CreateBaseAi = (villageId, AiData, AiName, rallyData = [], overrideSpawnLocation = EMPTY_ENTITY_GROUP) => {
    if (AiData.controllerArchetype === "") return EMPTY_ENTITY_GROUP //prevent initializing with an empty ai entity
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
    let controllerArchetype = AiData.controllerArchetype
    if (_IsItANormalBase(villageSize)) controllerArchetype += "_" + villageSize
    const spawnEntity = HasEntities(overrideSpawnLocation) ? overrideSpawnLocation : GetVillageEntityFromID(villageId)
    const newAi = SpawnEntitiesAt(spawnEntity, controllerArchetype, 1, TEAM_ORANGE, villageId)
    OUTPUT_ControlGroupFollowAI(newAi, newAi)
    if (rallyData.waveReinforcementsEnabled) {
        SetupReinforcementControlGroups(villageId, AiData)
        LISTENFOR_LocalTimer({
            snippet: "lt_" + AiName + "_reinforceWave",
            ownerVillageId: villageId,
            waitTime: AiData.reinforcementInterval,
            payloadInt: AiData.reinforcementPercentage,
            payloadString: AiData.reinforcementControlGroupTag,
            payloadEntities: newAi
        })
    }

    return newAi
}

const _IsItANormalBase = (villageSize) => {
    return villageSize !== BASE_SIZE_DARK_BEACON && villageSize !== BASE_SIZE_PIGLIN_ZOMBIE && villageSize !== BASE_SIZE_PIGLIN_SKELETON && villageSize !== BASE_SIZE_PIGLIN_CREEPER && villageSize !== BASE_SIZE_PIGLIN_SPIDER && villageSize !== BASE_SIZE_PIGLIN_SLIME && villageSize !== BASE_SIZE_PIGLIN_SILVERFISH && villageSize !== BASE_SIZE_PIGLIN_WOF && villageSize !== VILLAGE_SIZE_DEBUG
}
const SetupBaseAIs = (AiRootConfig) => {
    /*for (const entry in AiRootConfig) {
        if (AiRootConfig[entry].waveReinforcementsEnabled) {
            _CreateAiWaveTimer(AiRootConfig[entry], entry)
        }
    }*/
}

const AssignAIHomeBases = (villageId) => {
    const portal = GetVillagePortal(villageId)
    if (!HasEntities(portal)) {
        return
    }
    const aiConfig = GetAiConfigOfBase(villageId)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    for (const aiKey in aiConfig) {
        const aiEntity = FILTER_ByTagFilter(villageEntities, aiConfig[aiKey].controllerTag, [])
        if (HasEntities(aiEntity)) {
            OUTPUT_AssignHomeBaseToEntities(portal, aiEntity, AI_HOME_BASE_THRESHOLD)
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                             AI helper functions                            */
/* -------------------------------------------------------------------------- */

const AssignEntitiesToAI = (villageId, Entities, AiData) => {
    if (!HasEntities(Entities)) {
        return
    }

    const AIEntity = GetAiEntity(villageId, AiData)
    if (!HasEntities(AIEntity)) {
        return
    }
    const entitiesToBeAdded = FILTER_ByTagFilter(Entities, [], ["aiAssigned"])
    if (HasEntities(entitiesToBeAdded)) {
        OUTPUT_AssignToControlGroup(entitiesToBeAdded, AIEntity)
        OUTPUT_AddTag(Entities, "aiAssigned")
        OUTPUT_AddTag(Entities, "follows: " + AiData.controllerTag)
    }
}

const SetupReinforcementControlGroups = (villageId, AiData) => {
    let rallyPositions = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), AiData.reinforcementPositionTagsToSearchFor, [])
    if (!HasEntities(rallyPositions)) {
    }
    while (HasEntities(rallyPositions)) {
        const entityToCheck = FILTER_RandomCount(rallyPositions, 1)
        CreateControlGroupEntity(villageId, entityToCheck, AiData.reinforcementControlGroupTag)
        rallyPositions = OPER_Difference(rallyPositions, entityToCheck)
    }
}

const UpdateAiResponseForBase = (villageId, AiConfig, responseData) => {
    //assign spawned units to appropriate Ais
    if (responseData.aiDistribution !== null) {
        for (const distData of responseData.aiDistribution) {
            if (distData[0] !== "") {
                const AiName = distData[0]
                const AiPercentage = distData[1]
                const AiData = AiConfig[AiName]
                //Grab units waiting reinforcements in addition to spawned units
                const ControlGroupUnits = GetPercentUnitsFromGroupTags(villageId, [AiData.reinforcementControlGroupTag], responseData.gatherPercentage)
                if (HasEntities(ControlGroupUnits)) {
                    AssignEntitiesToAI(villageId, FILTER_RandomPercentage(ControlGroupUnits, AiPercentage), AiData)
                }
            }
        }
    }
}

const GetAiEntity = (villageId, AiData) => {
    return FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [AiData.controllerTag], [])
}

//recruit from spawner output

const _CreateAiWaveTimer = (AiData, AiName) => {
    const snippetName = "lt_" + AiName + "_reinforceWave"
    SNIPPET_LocalTimer(snippetName, (payload) => {
        const AIEntity = payload.entities

        LISTENFOR_LocalTimer({
            snippet: snippetName,
            ownerVillageId: payload.ownerVillageId,
            waitTime: AiData.reinforcementInterval,
            payloadInt: AiData.reinforcementPercentage,
            payloadString: AiData.reinforcementControlGroupTag,
            payloadEntities: [AIEntity]
        })

        if (!HasEntities(AIEntity)) return //exit out if there is no ai found
        ForEachControlGroupWithTags(payload.ownerVillageId, [AiData.reinforcementControlGroupTag], (controlGroupEntity) => {
            const reinforcements = FILTER_RandomPercentage(QUERY_GetControlGroupEntities(controlGroupEntity), AiData.reinforcementPercentage)
            TransferGroupUnits(reinforcements, AIEntity)
            OUTPUT_AddTag(reinforcements, "aiAssigned")
        })
    })
}
/* -------------------------------------------------------------------------- */
/*                                  Snippets                                  */
/* -------------------------------------------------------------------------- */

SNIPPET_BuildableSpawnerBatchSpawned("bss_control_group_recruit_spawned", (buildableSpawner, spawnedEntities, payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(buildableSpawner)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const aiConfig = GetAiConfigOfBase(villageId)
    const medics = FILTER_ByTagFilter(spawnedEntities, ["medic"], [])
    const otherPiglins = OPER_Difference(spawnedEntities, medics)
    if (payload.string !== "") {
        const allRallyPointsOfTag = FILTER_ByTagFilter(villageEntities, aiConfig[payload.string].reinforcementPositionTagsToSearchFor, [])
        const aiConfigController = aiConfig[payload.string]
        AssignEntitiesToAI(villageId, otherPiglins, aiConfigController)
        if (HasEntities(medics)) {
            const MedicAIConfigController = GetMedicAIConfigOfBase(villageId)
            AssignEntitiesToAI(villageId, medics, MedicAIConfigController)
        }

        const ControlGroupEntity = FILTER_ByClosest(allRallyPointsOfTag, buildableSpawner, 1)
        if (HasEntities(ControlGroupEntity)) {
            aiConfig[payload.string].reinforcementPositionTagsToSearchFor.forEach((tag) => {
                OUTPUT_AddTag(spawnedEntities, "GoingTo:" + tag)
            })
            OUTPUT_AssignHomeBaseToEntities(ControlGroupEntity, spawnedEntities, AI_HOME_BASE_THRESHOLD)
        } else {
            const boss = QUERY_GetEntitiesWithTags("boss")
            if (HasEntities(boss)) {
                OUTPUT_AssignHomeBaseToEntities(boss, spawnedEntities, AI_HOME_BASE_THRESHOLD)
            }
        }
    }
})
//==================================Two rally points==================================
//=======Siege-Defend==========
SNIPPET_BuildableSpawnerBatchSpawned("bss_control_group_recruit_spawned_barracksdefendHordeSiege0_barracksdefendHordeDefend0", (buildableSpawner, spawnedEntities, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(buildableSpawner)
    const aiConfig = GetAiConfigOfBase(villageId)
    const medics = FILTER_ByTagFilter(spawnedEntities, ["medic"], [])
    const otherPiglins = OPER_Difference(spawnedEntities, medics)
    const halfSpawnedEntities0 = FILTER_RandomPercentage(otherPiglins, 50)
    const halfSpawnedEntities1 = OPER_Difference(otherPiglins, halfSpawnedEntities0)

    const aiConfigController0 = aiConfig[DEFEND_SIEGE_AI.TAG]
    AssignEntitiesToAI(villageId, halfSpawnedEntities0, aiConfigController0)
    const aiConfigController1 = aiConfig[DEFEND_DEFEND_AI.TAG]
    AssignEntitiesToAI(villageId, halfSpawnedEntities1, aiConfigController1)

    const rallyPointData0 = GetDefendRallyPoints(villageId)[DEFEND_SIEGE_AI.CG_0]
    const rallyPointData1 = GetDefendRallyPoints(villageId)[DEFEND_DEFEND_AI.CG_0]
    const rallyPoint0 = GetNearestCompositionRallypoint(villageId, buildableSpawner, rallyPointData0)
    const rallyPoint1 = GetNearestCompositionRallypoint(villageId, buildableSpawner, rallyPointData1)

    if (HasEntities(rallyPoint0) && HasEntities(halfSpawnedEntities0)) {
        OUTPUT_AssignHomeBaseToEntities(rallyPoint0, halfSpawnedEntities0, AI_HOME_BASE_THRESHOLD)
    }
    if (HasEntities(rallyPoint1) && HasEntities(halfSpawnedEntities1)) {
        OUTPUT_AssignHomeBaseToEntities(rallyPoint1, halfSpawnedEntities1, AI_HOME_BASE_THRESHOLD)
    }

    if (HasEntities(medics)) {
        const MedicAIConfigController = GetMedicAIConfigOfBase(villageId)
        AssignEntitiesToAI(villageId, medics, MedicAIConfigController)
        const halfMedics0 = FILTER_RandomPercentage(medics, 50)
        const halfMedics1 = OPER_Difference(medics, halfMedics0)

        if (HasEntities(rallyPoint0) && HasEntities(halfMedics0)) {
            OUTPUT_AssignHomeBaseToEntities(rallyPoint0, halfMedics0, AI_HOME_BASE_THRESHOLD)
        }

        if (HasEntities(rallyPoint1) && HasEntities(halfMedics1)) {
            OUTPUT_AssignHomeBaseToEntities(rallyPoint1, halfMedics1, AI_HOME_BASE_THRESHOLD)
        }
    }
})
//=======Defend-Defend==========
SNIPPET_BuildableSpawnerBatchSpawned("bss_control_group_recruit_spawned_barracksdefendHordeDefend0_barracksdefendHordeDefend1", (buildableSpawner, spawnedEntities, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(buildableSpawner)
    const aiConfig = GetAiConfigOfBase(villageId)
    const medics = FILTER_ByTagFilter(spawnedEntities, ["medic"], [])
    const otherPiglins = OPER_Difference(spawnedEntities, medics)
    const halfSpawnedEntities0 = FILTER_RandomPercentage(otherPiglins, 50)
    const halfSpawnedEntities1 = OPER_Difference(otherPiglins, halfSpawnedEntities0)

    const aiConfigController0 = aiConfig[DEFEND_DEFEND_AI.TAG]
    AssignEntitiesToAI(villageId, halfSpawnedEntities0, aiConfigController0)
    const aiConfigController1 = aiConfig[DEFEND_DEFEND_AI.TAG]
    AssignEntitiesToAI(villageId, halfSpawnedEntities1, aiConfigController1)

    const rallyPointData0 = GetDefendRallyPoints(villageId)[DEFEND_DEFEND_AI.CG_0]
    const rallyPointData1 = GetDefendRallyPoints(villageId)[DEFEND_DEFEND_AI.CG_0]
    const rallyPoint0 = GetNearestCompositionRallypoint(villageId, buildableSpawner, rallyPointData0)
    const rallyPoint1 = GetNearestCompositionRallypoint(villageId, buildableSpawner, rallyPointData1)

    if (HasEntities(rallyPoint0)) {
        OUTPUT_AssignHomeBaseToEntities(rallyPoint0, halfSpawnedEntities0, AI_HOME_BASE_THRESHOLD)
    }
    if (HasEntities(rallyPoint1)) {
        OUTPUT_AssignHomeBaseToEntities(rallyPoint1, halfSpawnedEntities1, AI_HOME_BASE_THRESHOLD)
    }

    if (HasEntities(medics)) {
        const MedicAIConfigController = GetMedicAIConfigOfBase(villageId)
        AssignEntitiesToAI(villageId, medics, MedicAIConfigController)
        const halfMedics0 = FILTER_RandomPercentage(medics, 50)
        const halfMedics1 = OPER_Difference(medics, halfMedics0)

        if (HasEntities(rallyPoint0) && HasEntities(halfMedics0)) {
            OUTPUT_AssignHomeBaseToEntities(rallyPoint0, halfMedics0, AI_HOME_BASE_THRESHOLD)
        }

        if (HasEntities(rallyPoint1) && HasEntities(halfMedics1)) {
            OUTPUT_AssignHomeBaseToEntities(rallyPoint1, halfMedics1, AI_HOME_BASE_THRESHOLD)
        }
    }
})
//=======Siege-Siege==========
SNIPPET_BuildableSpawnerBatchSpawned("bss_control_group_recruit_spawned_barracksdefendHordeSiege0_barracksdefendHordeSiege1", (buildableSpawner, spawnedEntities, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(buildableSpawner)
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const aiConfig = GetAiConfigOfBase(villageId)
    const medics = FILTER_ByTagFilter(spawnedEntities, ["medic"], [])
    const otherPiglins = OPER_Difference(spawnedEntities, medics)
    const halfSpawnedEntities0 = FILTER_RandomPercentage(otherPiglins, 50)
    const halfSpawnedEntities1 = OPER_Difference(otherPiglins, halfSpawnedEntities0)

    const aiConfigController0 = aiConfig[DEFEND_SIEGE_AI.TAG]
    AssignEntitiesToAI(villageId, halfSpawnedEntities0, aiConfigController0)
    const aiConfigController1 = aiConfig[DEFEND_SIEGE_AI.TAG]
    AssignEntitiesToAI(villageId, halfSpawnedEntities1, aiConfigController1)

    const rallyPointData0 = GetDefendRallyPoints(villageId)[DEFEND_SIEGE_AI.CG_0]
    const allSiegeRallyPoints = FILTER_ByTagFilter(villageEntities, rallyPointData0.positionTags, [])
    const rallyPoint0 = GetNearestCompositionRallypoint(villageId, buildableSpawner, rallyPointData0)
    const rallyPoint1 = OPER_Difference(allSiegeRallyPoints, rallyPoint0)

    if (HasEntities(rallyPoint0) && HasEntities(halfSpawnedEntities0)) {
        OUTPUT_AssignHomeBaseToEntities(rallyPoint0, halfSpawnedEntities0, AI_HOME_BASE_THRESHOLD)
    }
    if (HasEntities(rallyPoint1) && HasEntities(halfSpawnedEntities1)) {
        OUTPUT_AssignHomeBaseToEntities(rallyPoint1, halfSpawnedEntities1, AI_HOME_BASE_THRESHOLD)
    }

    if (HasEntities(medics)) {
        const MedicAIConfigController = GetMedicAIConfigOfBase(villageId)
        AssignEntitiesToAI(villageId, medics, MedicAIConfigController)
        const halfMedics0 = FILTER_RandomPercentage(medics, 50)
        const halfMedics1 = OPER_Difference(medics, halfMedics0)

        if (HasEntities(rallyPoint0) && HasEntities(halfMedics0)) {
            OUTPUT_AssignHomeBaseToEntities(rallyPoint0, halfMedics0, AI_HOME_BASE_THRESHOLD)
        }

        if (HasEntities(rallyPoint1) && HasEntities(halfMedics1)) {
            OUTPUT_AssignHomeBaseToEntities(rallyPoint1, halfMedics1, AI_HOME_BASE_THRESHOLD)
        }
    }
})

/* -------------------------------------------------------------------------- */
/*                            Rally group utilities                           */
/* -------------------------------------------------------------------------- */

/**
 * @deprecated Use RecruitSpawnerOutputToEntities instead for more control
 */
const RecruitSpawnerOutput = (villageId, ControlGroupTag, spawnerEntity, aiConfigString) => {
    const controlGroups = GetTaggedGroups(villageId, [ControlGroupTag])
    if (!HasEntities(controlGroups)) {
        return
    }
    RecruitSpawnerOutputToEntities(villageId, ClosestEntity(controlGroups, spawnerEntity), spawnerEntity, aiConfigString)
}

//----------------------- For all the hordes except final -----------------------

//will recruit spawner output to the CLOSEST rallygroup entity if multiple are present
const RecruitSpawnerOutputToEntities = (villageId, RallyGroupEntities, spawnerEntity, aiConfigString = "") => {
    LISTENFOR_BuildableSpawnerBatchSpawned({
        snippet: "bss_control_group_recruit_spawned",
        ownerVillageId: villageId,
        buildableSpawner: spawnerEntity,
        payloadEntities: RallyGroupEntities,
        payloadString: aiConfigString
    })
}

const RecruitSpawnerOutputToEntitiesWithMultipleTags = (villageId, spawnerEntity, tag0 = "", tag1 = "") => {
    if (tag0 !== "" && tag1 !== "") {
        LISTENFOR_BuildableSpawnerBatchSpawned({
            snippet: "bss_control_group_recruit_spawned" + "_" + tag0 + "_" + tag1,
            ownerVillageId: villageId,
            buildableSpawner: spawnerEntity
        })
    } else {
    }
}

/**
 * Recruits the spawner output to be controlled by the specificed rally point composition
 * @param {number} villageId
 * @param {object} rallyPointData A rally point composition, requires the positionTags and positionTagExcludes fields
 * @param {number} spawnerEntity This is a buildableSpawner that has events for the listener LISTENFOR_BuildableSpawnerBatchSpawned
 */
const RecruitSpawnedComposition = (villageId, rallyPointData, spawnerEntity, aiConfigString = "") => {
    const rallyPoint = GetNearestCompositionRallypoint(villageId, spawnerEntity, rallyPointData)
    RecruitSpawnerOutputToEntities(villageId, rallyPoint, spawnerEntity, aiConfigString)
}

const RecruitSpawnedCompositionWithMultiplTags = (villageId, spawnerEntity, tag0 = "", tag1 = "") => {
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, spawnerEntity, tag0, tag1)
}

//----------------------------------- For Final ------------------------------------

const RecruitSpawnedCompositionFinal = (villageId, rallyPointData, spawnerEntity, bastionString = "") => {
    RecruitSpawnerOutputToEntitiesFinal(villageId, GetNearestCompositionRallypoint(villageId, spawnerEntity, rallyPointData), spawnerEntity, bastionString)
}

const RecruitSpawnerOutputToEntitiesFinal = (villageId, RallyGroupEntities, spawnerEntity, bastionString = "") => {
    LISTENFOR_BuildableSpawnerBatchSpawned({
        snippet: "bss_control_group_recruit_spawned_final",
        ownerVillageId: villageId,
        buildableSpawner: spawnerEntity,
        payloadEntities: RallyGroupEntities,
        payloadString: bastionString
    })
}

SNIPPET_BuildableSpawnerBatchSpawned("bss_control_group_recruit_spawned_final", (buildableSpawner, spawnedEntities, payload) => {
    const bastionString = payload.string
    const villageId = QUERY_GetVillageIDFromEntity(buildableSpawner)
    const medics = FILTER_ByTagFilter(spawnedEntities, ["medic"], [])
    const otherPiglins = OPER_Difference(spawnedEntities, medics)
    let aiConfig = GetAiConfigOfBase(villageId, bastionString)
    let aiConfigController = aiConfig["finalDefendAi"]
    if (!HasEntities(GetAiEntity(villageId, aiConfigController))) {
        aiConfig = GetAiConfigOfBase(villageId)
        aiConfigController = aiConfig["finalDefendAi"]
    } else if (HasEntities(medics)) {
        AssignEntitiesToAI(villageId, medics, aiConfig["finalAttackAi"])
    }
    AssignEntitiesToAI(villageId, otherPiglins, aiConfigController)
    if (bastionString !== "") {
        //const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const relativeRallyPoint = QUERY_GetEntitiesWithTagFilter([bastionString, "piglin_rallying_point"], [])
        if (HasEntities(relativeRallyPoint)) {
            OUTPUT_AssignHomeBaseToEntities(relativeRallyPoint, spawnedEntities, AI_HOME_BASE_THRESHOLD)
        } else {
            const boss = QUERY_GetEntitiesWithTags("finalBoss")
            if (HasEntities(boss)) {
                OUTPUT_AssignHomeBaseToEntities(boss, spawnedEntities, AI_HOME_BASE_THRESHOLD)
            }
        }
    } else {
        const boss = QUERY_GetEntitiesWithTags("finalBoss")
        if (HasEntities(boss)) {
            OUTPUT_AssignHomeBaseToEntities(boss, spawnedEntities, AI_HOME_BASE_THRESHOLD)
        }
    }
})

const AddEntitiesToNearestControlGroup = (villageId, Entities, ControlGroupTags = []) => {
    if (!HasEntities(Entities)) return
    const nearestControlGroup = ClosestEntity(GetTaggedGroups(villageId, ControlGroupTags), FILTER_RandomCount(Entities, 1))
    AssignToGroup(Entities, nearestControlGroup)
}

//helper for gettting rallygroups with tags
const ForEachControlGroupWithTags = (villageId, ControlGroupTags, Callback) => {
    const controlGroupEntities = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), ControlGroupTags, [])
    ForEachEntities(controlGroupEntities, Callback)
}

const GetPercentUnitsFromGroup = (ControlGroup, Percentage) => {
    const units = QUERY_GetControlGroupEntities(ControlGroup)
    return FILTER_RandomPercentage(units, Percentage)
}

const GetPercentUnitsFromGroupTags = (villageId, ControlGroupTags, Percentage) => {
    return FILTER_RandomPercentage(QUERY_GetControlGroupEntities(GetControlGroupEntities(villageId, ControlGroupTags)), Percentage)
}

const GetTaggedGroups = (villageId, includeTags, excludeTags = []) => {
    if (includeTags === undefined || !Array.isArray(includeTags)) {
        throw new Error("GetTaggedGroups called with invalid includeTags argument: " + includeTags)
    }
    // note: concat is important to return a new array (in the event caller sends a global defined array)
    const inclTags = includeTags.concat("control_group")
    return FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), inclTags, excludeTags)
}

const TransferGroup = (InitialGroupOwner, FinalGroupOwner) => {
    TransferGroupUnits(QUERY_GetControlGroupEntities(InitialGroupOwner), FinalGroupOwner)
}

const TransferGroupUnits = (InitialGroupEntities, FinalGroupOwner) => {
    OUTPUT_AssignToControlGroup(InitialGroupEntities, FinalGroupOwner)
}

const AssignToRandomTaggedGroup = (villageId, Entities, ControlGroupTag) => {
    const group = FILTER_RandomCount(GetTaggedGroups(villageId, ControlGroupTag), 1)
    AssignToGroup(Entities, group)
}

const AssignToGroup = (Entities, ControlGroup) => {
    if (!HasEntities(ControlGroup) || !HasEntities(Entities)) return
    const entitiesToBeAdded = FILTER_ByTagFilter(Entities, [], ["hasControlGroup"])
    if (HasEntities(entitiesToBeAdded)) {
        OUTPUT_AssignToControlGroup(entitiesToBeAdded, ControlGroup)
        OUTPUT_AddTag(Entities, "hasControlGroup")
    }
}

const RemoveFromGroup = (Entities, ControlGroup) => {
    if (!HasEntities(ControlGroup) || !HasEntities(Entities)) return
    OUTPUT_LeaveControlGroup(Entities, ControlGroup)
    OUTPUT_RemoveTag(Entities, "hasControlGroup")
}

const DistributeEntities = (Entities, Percentages = []) => {
    const totalEntityCount = QUERY_GetEntitiesCount(Entities)
    const OutputArray = []
    if (totalEntityCount > 0) {
        Percentages.forEach((percentage) => {
            const desiredMultiplier = percentage / 100
            if (HasEntities(Entities)) {
                if (desiredMultiplier >= QUERY_GetEntitiesCount(Entities) / totalEntityCount) {
                    const assignedEntities = FILTER_RandomCount(Entities, desiredMultiplier * totalEntityCount)
                    OutputArray.push(assignedEntities)
                    OPER_Difference(Entities, assignedEntities)
                } else {
                    OutputArray.push(Entities)
                    Entities = EMPTY_ENTITY_GROUP
                }
            }
        })
    }
    return OutputArray
}

/**
 * Use this function to distribute a group of entities to a nested array of AI entities
 * @param {*} Entities The list of entities to assign to the AI
 * @param {*} [AIData=[]] A nested array of AI to distribute. Each array within the array should have two items: an AI name string, and a distribution percentage nubmer
 * @param {object} [aiConfig=undefined]
 * @return {Array.<number>} The entities that didn't get assigned to the AI due to higher than allowed distribution pools
 */
const DistributeUnitsToAI = (Entities, AIData = [], aiConfig = undefined) => {
    if (AIData.length === 0) return
    const totalEntityCount = QUERY_GetEntitiesCount(Entities)
    const OutputArray = []
    if (totalEntityCount > 0) {
        AIData.forEach((aiData) => {
            const desiredMultiplier = aiData[1] / 100
            if (HasEntities(Entities)) {
                if (desiredMultiplier <= 1) {
                    const assignedEntities = FILTER_RandomCount(Entities, Math.ceil(desiredMultiplier * totalEntityCount))
                    const villageId = QUERY_GetVillageIDFromEntity(RandomEntity(assignedEntities))
                    if (aiConfig !== undefined) {
                        const aiConfigController = aiConfig[aiData[0]]
                        AssignEntitiesToAI(villageId, assignedEntities, aiConfigController)
                    }
                    OPER_Difference(Entities, assignedEntities)
                } else {
                    OutputArray.push(Entities)
                    Entities = EMPTY_ENTITY_GROUP
                }
            }
        })
    }
    return OutputArray
}

const CreateControlGroupEntity = (villageId, ControlGroupPositionEntity, ControlGroupTag = "") => {
    if (HasEntities(ControlGroupPositionEntity)) {
        let controlGroupEntity = SpawnEntitiesAt(ControlGroupPositionEntity, "badger:generic_control_group", 1, TEAM_ORANGE, villageId)
        let groupPositionEntities = ControlGroupPositionEntity
        if (ControlGroupTag !== "") {
            OUTPUT_AddTag(controlGroupEntity, ControlGroupTag)
        }
        while (HasEntities(controlGroupEntity)) {
            const entity = RandomEntity(controlGroupEntity)
            const posEntity = RandomEntity(groupPositionEntities)

            OUTPUT_ControlGroupMoveToCurrentPosition(entity, posEntity, 4)
            controlGroupEntity = OPER_Difference(controlGroupEntity, entity)
            groupPositionEntities = OPER_Difference(groupPositionEntities, posEntity)
        }
        return ControlGroupPositionEntity
    }
    return EMPTY_ENTITY_GROUP
}

const GetControlGroupEntities = (villageId, rallyPointTags = []) => {
    // note: concat is important to return a new array (in the event caller sends a global defined array)
    const inclTags = rallyPointTags.concat("control_group")
    return FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), inclTags, [])
}

const CreateRallyGroup = (villageId, RallyPositions, RallyGroupData) => {
    const rallyEntityTag = RallyGroupData.controlGroupTag + "_rally"
    const rallyControlGroup = CreateControlGroupEntity(villageId, RallyPositions, rallyEntityTag)
    return rallyControlGroup
}

const MoveRallyPoint = (villageId, RallyGroupData, controlGroupEntity, NewPosition) => {
    const rallyEntityTag = RallyGroupData.controlGroupTag + "_rally"
    const triggerVolumes = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [rallyEntityTag, "TriggerVolume"], [])
    const rallyTrigger = FILTER_ByClosest(triggerVolumes, controlGroupEntity, 1)
    OUTPUT_Teleport(OPER_Append(rallyTrigger, controlGroupEntity), NewPosition)
    OUTPUT_ControlGroupMoveToCurrentPosition(controlGroupEntity, NewPosition, 4)
}

const ListenForRallyComposition = (villageId, positionTags) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_divide_piglins",
        ownerVillageId: villageId,
        waitTime: 10,
        payloadString: positionTags[0],
        payloadInt: villageId
    })
}

const DeclareCompositionListener = (controlGroupTag, composition, assignToControlGroup = true, callback = CALLBACK_NONE) => {
    SNIPPET_SpatialPartitionEntered("spe_control_group_composition_handler_" + controlGroupTag, (triggerEntity, _intruderEntity, payload) => {
        const intruders = QUERY_GetIntruders(triggerEntity)
        const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
        let unitComposition = EMPTY_ENTITY_GROUP
        const delay = composition.delayUntilSentOut !== undefined ? composition.delayUntilSentOut : 15
        composition.units.forEach((entry) => {
            const foundUnits = FILTER_ByTagFilter(intruders, [GetTagForPiglinUnitType(entry.unit)], ["aiAssigned", controlGroupTag + "to_be_added"])
            const count = QUERY_GetEntitiesCount(foundUnits)
            if (count > entry.amount) {
                unitComposition = OPER_Append(unitComposition, FILTER_RandomCount(foundUnits, entry.amount))
            } else if (count === entry.amount) {
                unitComposition = OPER_Append(unitComposition, foundUnits)
            }
        })

        if (callback === CALLBACK_NONE) return
        if (HasEntities(unitComposition)) {
            callback(unitComposition)
        }
    })
}

const GetAiConfigOfBase = (villageId, bastionString = "") => {
    const villageEnt = GetVillageEntityFromID(villageId)
    const faction = QUERY_GetFactionNameFromEntity(villageEnt)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (IsMobAlliancePiglinSize(baseSize)) {
        return GetMobAlliancePiglinAiConfig(faction)
    }

    switch (faction) {
        case FACTION_NAME_ATTACK:
            return GetAttackAIConfig()
        case FACTION_NAME_DEFEND:
            return GetDefendAIConfig()
        case FACTION_NAME_OBSTACLE:
            return GetObstacleAIConfig()
        case FACTION_NAME_FROST:
            return GetFrostAIConfig()
        case FACTION_NAME_DBB:
            return GetDbbAiConfig()
        case FACTION_NAME_WOF:
            return GetAiConfigFinal(bastionString)
    }
}

const GetMedicAIConfigOfBase = (villageId, bastionString = "") => {
    const villageEnt = GetVillageEntityFromID(villageId)
    const faction = QUERY_GetFactionNameFromEntity(villageEnt)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (IsMobAlliancePiglinSize(baseSize)) {
        return GetMobAlliancePiglinMedicAiConfig(faction)
    }

    switch (faction) {
        case FACTION_NAME_ATTACK:
            return GetAttackAIConfig()[attackHordeAI.patrol]
        case FACTION_NAME_DEFEND:
            return GetDefendAIConfig()[DEFEND_UNIQUE_AI.TAG]
        case FACTION_NAME_OBSTACLE:
            return GetObstacleAIConfig()[ObstacleAI.Assault]
        case FACTION_NAME_FROST:
            return GetFrostAIConfig()[FrostAI.Assault]
        case FACTION_NAME_DBB:
            return GetDbbAiConfig()[dbbAI.offensive]
        case FACTION_NAME_WOF:
            return GetAiConfigFinal(bastionString)
    }
}
const GetRallyPointConfigOfBase = (villageId, controlGroupTag, rallyEntity) => {
    const villageEnt = GetVillageEntityFromID(villageId)
    const faction = QUERY_GetFactionNameFromEntity(villageEnt)

    switch (faction) {
        case FACTION_NAME_ATTACK:
            return GetAttackRallyPointConfig(villageId, controlGroupTag)
        case FACTION_NAME_DEFEND:
            return GetDefendRallyPoints(villageId)[controlGroupTag]
        case FACTION_NAME_OBSTACLE:
            return GetObstacleRallyPointconfig(villageId, controlGroupTag)
        case FACTION_NAME_FROST:
            return GetFrostRallyPointconfig(villageId, controlGroupTag)
        case FACTION_NAME_DBB:
            return GetDbbRallyPointConfig(villageId, controlGroupTag)
        case FACTION_NAME_WOF:
            return GetRallyPointConfigFinal(rallyEntity)
    }
}

const GetDiscreteEncountersData = (villageId) => {
    const villageEnt = GetVillageEntityFromID(villageId)
    const faction = QUERY_GetFactionNameFromEntity(villageEnt)
    switch (faction) {
        case FACTION_NAME_ATTACK:
            const variationData = _GetAttackVariationData(villageId)
            return variationData.discreteEncounters
        case FACTION_NAME_DEFEND:
            return GetDefendDiscreteEncountersData(villageId)
        case FACTION_NAME_OBSTACLE:
            return GetObstacleDescreteEncounters(villageId)
        case FACTION_NAME_FROST:
            return GetFrostDescreteEncounters(villageId)
        case FACTION_NAME_WOF:
            return GetWOFDescreteEncounters()
    }
}

/**
 * Call this to register your rally points with listener events.
 * This iterates through the rally points in your config and creates SNIPPET_SpatialPartitionEntered for each control group tag.
 * This MUST be called during script initialization.
 * @param {object} rallyPointConfig The object that contains all of your rally point configs
 * @param {object} aiConfig The object that contains all of your ai configs
 */
const CreateCompositionRallyPointListeners = (rallyPointConfig, aiConfig) => {
    for (const rallyKey in rallyPointConfig) {
        const rallyData = rallyPointConfig[rallyKey]
        if (rallyData.ais.length > 0) {
            DeclareCompositionListener(rallyData.controlGroupTag, rallyData.composition, true, (unitComposition) => {
                DistributeUnitsToAI(unitComposition, rallyData.ais, aiConfig)
            })
        }
    }
}
const CreatePatrolTriggerVolumes = (villageId) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_move_patrol_units",
        ownerVillageId: villageId,
        waitTime: 45
    })
}

SNIPPET_LocalTimer("lt_move_patrol_units", (payload) => {
    const villageId = payload.ownerVillageId
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const patrolRallyPoints = FILTER_ByTagFilter(villageEntities, ["attackPatrolRally"], [])
    const patrolRallyPoint0 = RandomEntity(patrolRallyPoints)
    const patrolRallyPoint1 = OPER_Difference(patrolRallyPoints, patrolRallyPoint0)
    const allPiglins = FILTER_ByTagFilter(villageEntities, ["mob", "piglin"], [])
    const aroundRallyPoint0 = FILTER_ByTagFilter(FILTER_ByDistance(allPiglins, patrolRallyPoint0, 30), ["follows: attackPatrolAi"], [])
    const aroundRallyPoint1 = FILTER_ByTagFilter(FILTER_ByDistance(allPiglins, patrolRallyPoint1, 30), ["follows: attackPatrolAi"], [])

    if (HasEntities(aroundRallyPoint0)) {
        OUTPUT_UnassignHomeBaseForEntities(aroundRallyPoint0)
        OUTPUT_AssignHomeBaseToEntities(patrolRallyPoint1, aroundRallyPoint0, AI_HOME_BASE_THRESHOLD)
    }
    if (HasEntities(aroundRallyPoint1)) {
        OUTPUT_UnassignHomeBaseForEntities(aroundRallyPoint1)
        OUTPUT_AssignHomeBaseToEntities(patrolRallyPoint0, aroundRallyPoint1, AI_HOME_BASE_THRESHOLD)
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_move_patrol_units",
        ownerVillageId: villageId,
        waitTime: 45
    })
})

/**
 * This creates the rally groups themselves, based on the rally positions you have already placed in your village
 * @param {number} villageId The village that you're trying to create composition rally points for
 * @param {object} RallyPointConfig The object that contains all of your rally point configs
 */
const CreateCompositionRallyPoints = (villageId, RallyPointConfig) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    for (const rallyKey in RallyPointConfig) {
        const rallyData = RallyPointConfig[rallyKey]
        const rallyEntity = CreateRallyGroup(villageId, FILTER_ByTagFilter(villageEntities, rallyData.positionTags, rallyData.positionTagExcludes), rallyData)
        if (HasEntities(rallyEntity)) {
            ListenForRallyComposition(villageId, rallyData.positionTags)
        }
    }
}

const GetNearestCompositionRallypoint = (villageId, entity, RallyConfigData) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    return FILTER_ByClosest(FILTER_ByTagFilter(villageEntities, RallyConfigData.positionTags, RallyConfigData.positionTagExcludes), entity, 1)
}
const getBarracksTag = (cg) => "barracks" + cg
const getBarracksTagInverse = (tag) => tag.substring(8)

SNIPPET_LocalTimer("lt_divide_piglins", (payload) => {
    const positionTag = payload.string
    const villageId = payload.int
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const allRallyPoints = FILTER_ByTagFilter(villageEntities, [positionTag], [])

    ForEachEntities(allRallyPoints, (currentRallyPoint) => {
        const piglins = FILTER_ByTagFilter(villageEntities, ["mob", "piglin"], [])
        const intruders = FILTER_ByDistance(piglins, currentRallyPoint, 40)
        if (HasEntities(intruders)) {
            const singleIntruder = RandomEntity(intruders)
            const nonStationedUnits = FILTER_ByTagFilter(intruders, ["GoingTo:" + positionTag], ["stationedUnits", "Sent"])
            const sentUnits = FILTER_ByTagFilter(intruders, ["Sent"], [])
            if (HasEntities(sentUnits)) {
                OUTPUT_AddTag(sentUnits, "stationedUnits")
                OUTPUT_RemoveTag(sentUnits, "GoingTo:" + positionTag)
                OUTPUT_RemoveTag(sentUnits, "Sent")
            }
            const rallyPointsOfTagCount = QUERY_GetEntitiesCount(allRallyPoints)
            if (!QUERY_HasTags(currentRallyPoint, ["doNotDivideRally"]) && rallyPointsOfTagCount > 1) {
                const nonStationedUnitsCount = QUERY_GetEntitiesCount(nonStationedUnits)
                if (nonStationedUnitsCount >= 6) {
                    const unitsToLeaveBehind = FILTER_RandomCount(nonStationedUnits, nonStationedUnitsCount * 0.5)
                    const unitsToSend = OPER_Difference(nonStationedUnits, unitsToLeaveBehind)
                    OUTPUT_AddTag(unitsToLeaveBehind, "stationedUnits")
                    OUTPUT_RemoveTag(unitsToLeaveBehind, "GoingTo:" + positionTag)
                    if (HasEntities(unitsToSend)) {
                        const otherRallyPoints = OPER_Difference(allRallyPoints, currentRallyPoint)
                        if (HasEntities(otherRallyPoints)) {
                            const closestRallyPoint = FILTER_ByClosest(otherRallyPoints, singleIntruder, 1)
                            OUTPUT_UnassignHomeBaseForEntities(unitsToSend)
                            OUTPUT_AssignHomeBaseToEntities(closestRallyPoint, unitsToSend, AI_HOME_BASE_THRESHOLD)
                            OUTPUT_AddTag(unitsToSend, "Sent")
                        }
                    }
                }
            } else {
                OUTPUT_AddTag(nonStationedUnits, "stationedUnits")
                OUTPUT_RemoveTag(nonStationedUnits, "GoingTo:" + positionTag)
            }
        }
    })

    LISTENFOR_LocalTimer({
        snippet: "lt_divide_piglins",
        ownerVillageId: villageId,
        waitTime: 10,
        payloadString: positionTag,
        payloadInt: villageId
    })
})

const CreateDiscreteEncountersListeners = (villageId, discreteEncounters) => {
    for (const deKey in discreteEncounters) {
        const deData = discreteEncounters[deKey]
        LISTENFOR_BuildingComplete({
            snippet: "bc_attack_discrete_encounter",
            ownerVillageId: villageId,
            includeTags: [deData.type.buildableTag],
            villageId: villageId,
            payloadString: deKey
        })
    }
}

const ResetDiscreteEncounters = (villageId) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const discreteEncounters = GetDiscreteEncountersData(villageId)
    const factionName = QUERY_GetFactionNameFromVillageID(villageId)
    for (const deKey in discreteEncounters) {
        const deData = discreteEncounters[deKey]
        const deBuildable = FILTER_ByTagFilter(villageEntities, [deData.type.buildableTag, "has_discrete_encounter"], [])
        if (HasEntities(deBuildable)) {
            ForEachEntities(deBuildable, (buildingEntity) => {
                const piglinsOfThatDiscreteEncounter = FILTER_ByTagFilter(villageEntities, ["spawned_by_discrete_ecounter_de" + deKey], [])
                const piglinsNearThatStructure = FILTER_ByDistance(piglinsOfThatDiscreteEncounter, buildingEntity, 40)
                if (!HasEntities(piglinsNearThatStructure)) {
                    const piglins = CreateUnitCompositionAtTarget(buildingEntity, deData.type.unitComposition, villageId)
                    if (HasEntities(piglins)) {
                        OUTPUT_SetLeashWithReturnWhenNotTargeting(piglins, buildingEntity, deData.type.leashDistance, deData.type.returnDistance)
                    }
                }
            })
        }
    }
    if (factionName === FACTION_NAME_OBSTACLE) {
        ResetLavaLaunchers(villageId)
    }
}

SNIPPET_BuildingComplete("bc_attack_discrete_encounter", (buildingEntity, payload) => {
    if (QUERY_HasTags(buildingEntity, "has_discrete_encounter")) {
        return
    }
    const villageId = payload.ownerVillageId
    const discreteEncounters = GetDiscreteEncountersData(villageId)
    const deKey = payload.string
    const deData = discreteEncounters[deKey]
    if (QUERY_GetGlobalVariable(villageId + "_" + deKey) >= deData.amount) {
        Once()
        return
    }
    const piglins = CreateUnitCompositionAtTarget(buildingEntity, deData.type.unitComposition, villageId)

    if (HasEntities(piglins)) {
        OUTPUT_SetLeashWithReturnWhenNotTargeting(piglins, buildingEntity, deData.type.leashDistance, deData.type.returnDistance)
        OUTPUT_AddTag(buildingEntity, "has_discrete_encounter")
        OUTPUT_AddTag(piglins, "spawned_by_discrete_ecounter_de" + deKey)
        IncrementGlobal(villageId + "_" + deKey)
    }

    if (QUERY_GetGlobalVariable(villageId + "_" + deKey) >= deData.amount) {
        Once()
    }
})

const CreateUnitCompositionAtTarget = (target, unitComposition, villageId) => {
    let piglins = EMPTY_ENTITY_GROUP
    unitComposition.units.forEach((ucData) => {
        const spawned = SpawnEntitiesNear(target, ucData.unit, ucData.amount, TEAM_ORANGE, villageId)
        if (ucData.unit === PIGLIN_ARCHETYPE.LAVA_LAUNCHER) {
            OUTPUT_AddTag(target, "has_lava_launcher_discrete_encounter")
        }
        piglins = OPER_Append(piglins, spawned)
    })

    return piglins
}
