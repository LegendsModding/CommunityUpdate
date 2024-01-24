/* eslint-disable @typescript-eslint/no-unused-vars */

const _tempTeamResources = ["xp_common", "emerald", "enchanting_orb", "glowstone_dust", "nether_star"]
const _allayTicket = ["gather_allay", "build_allay"]

const _GetAndIncrementLootTableReward = (table, indexGlobalVariable) => {
    const index = QUERY_GetGlobalVariable(indexGlobalVariable)
    const reward = table[index].rewards
    if (QUERY_GetGlobalVariable(indexGlobalVariable) >= table.length - 1) {
        OUTPUT_SetGlobalVariable(indexGlobalVariable, 0)
    } else {
        IncrementGlobal(indexGlobalVariable, 1)
    }
    return reward
}

const _ChooseBackupLootReward = (alternativeLootTable) => {
    const alternativeReward = []

    alternativeLootTable.rewards.forEach((entry) => {
        const resourceType = entry.resource
        const randomValue = QUERY_RandomNumber(entry.value[0], entry.value[1])
        Logi(resourceType)
        Logi(entry.value[0])
        Logi(entry.value[1])
        alternativeReward.push([resourceType, randomValue])
    })

    return alternativeReward
}

const _ChooseLootReward = (lootTable, payloadPercentageLostMax, teamName, alternativeReward, checkAvailabilityOfResource = false) => {
    let missingRewardPercentage = 0
    let totalMissingRewardPercentage = 0
    const normalReward = []
    lootTable.forEach((entry) => {
        const resourceType = entry.resource
        //Only add if unlocked. If availability check is false, do it anyway.
        if (IsGatherResourceUnlocked(teamName, resourceType) || !checkAvailabilityOfResource) {
            const randomValue = QUERY_RandomNumber(entry.value[0], entry.value[1])
            normalReward.push([resourceType, randomValue])
            if (!_tempTeamResources.includes(resourceType) && !_allayTicket.includes(resourceType)) {
                const heldResourceAmount = QUERY_GetTeamResource(teamName, resourceType)
                const resourceMax = QUERY_GetTeamResourceMax(teamName, resourceType)
                if (resourceMax <= -1) {
                    Logi("Resource limit was -1")
                } else {
                    const resourceSpace = resourceMax - heldResourceAmount
                    if (randomValue > resourceSpace) {
                        const mathValue = resourceSpace / randomValue
                        missingRewardPercentage = (1 - mathValue) * 100
                        totalMissingRewardPercentage += missingRewardPercentage
                    }
                }
            }
        }
    })
    const averageTotalMissingRewardPercentage = totalMissingRewardPercentage / lootTable.length
    //Upon every for each completing
    if (payloadPercentageLostMax >= averageTotalMissingRewardPercentage) {
        return normalReward
    } else {
        return _ChooseBackupLootReward(alternativeReward)
    }
}

const GrantRewardFromLootTable = (player, lootEntity, lootType, multiplier = 1) => {
    OUTPUT_SetInteractionState(lootEntity, false)
    OUTPUT_AddVisualState(lootEntity, "open_crate")

    // Animation is instant now so no need to delay (but leaving this chunk in, if content change their mind)
    let grantRewardDelayTime = 0
    if (lootType === LOOT_TYPE.piglinCrate) {
        grantRewardDelayTime = 0
    }

    const playAudioDelay = grantRewardDelayTime + 2
    const teamName = QUERY_GetTeamName(player)

    let lootTypePayload = lootType
    // unpack special loot types 
    if (lootType >= LOOT_TYPE.piglinCrateVillage) {
        lootTypePayload = LOOT_TYPE.piglinCrateVillage + QUERY_GetVillageIDFromEntity(lootEntity)
        lootType = LOOT_TYPE.piglinCrate
    }

    LISTENFOR_LocalTimer({
        snippet: "lt_grant_loot_rewards",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT, // note: we can't use village IDs here as the village (base) may be destroyed.
        waitTime: grantRewardDelayTime,
        payloadString: teamName,
        payloadInt: lootTypePayload,
        payloadFloat: multiplier
    })

    if (IsCurrentAct(ACTS.ACT_2)) {
        LISTENFOR_EntityTimer({
            snippet: "et_play_chest_open_audio",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            entity: player,
            timerName: "play_chest_open_audio",
            payloadInt: lootTypePayload
        })
        OUTPUT_SetEntityTimer(player, "play_chest_open_audio", playAudioDelay)
    }

    // Telemetry
    const lootTableData = LOOT_DATA_BY_TYPE[lootType]
    TelemetrySendPoiLootCollectedEvent(player, lootTableData.telemetryType, lootTableData.telemetrySubcategory, TELEMETRY_CATEGORIES.POI_LOOT)
}

SNIPPET_LocalTimer("lt_grant_loot_rewards", (payload) => {
    const receivingTeam = payload.string
    const bonusMultiplier = payload.float
    const originalLootType = payload.int

    let lootType = originalLootType
    // unpack special loot types
    let villageId = OWNER_VILLAGE_OPT_OUT
    if (lootType >= LOOT_TYPE.piglinCrateVillage) {
        villageId = lootType - LOOT_TYPE.piglinCrateVillage
        lootType = LOOT_TYPE.piglinCrate
    }

    const lootTableData = LOOT_DATA_BY_TYPE[lootType]
    let lootTable = lootTableData.rewardTable

    if (originalLootType >= LOOT_TYPE.piglinCrateVillage) {
        const faction = QUERY_GetFactionNameFromVillageID(villageId)
        const size = QUERY_GetFactionSizeFromVillageID(villageId)
        switch (faction) {
            case FACTION_NAME_ATTACK:
                switch (size) {
                    case BASE_SIZE_OUTPOST:
                        lootTable = lootTableData.rewardTable.attackHorde.outpost
                        break
                    case BASE_SIZE_SMALL:
                        lootTable = lootTableData.rewardTable.attackHorde.small
                        break
                    case BASE_SIZE_MEDIUM:
                        lootTable = lootTableData.rewardTable.attackHorde.medium
                        break
                    case BASE_SIZE_LARGE:
                        lootTable = lootTableData.rewardTable.attackHorde.large
                        break
                    default:
                        Logw("Unexpected Size for an Attack Horde base!")
                        lootTable = lootTableData.rewardTable.attackHorde.outpost
                        break
                }
                break
            case FACTION_NAME_DEFEND:
                switch (size) {
                    case BASE_SIZE_OUTPOST:
                        lootTable = lootTableData.rewardTable.defendHorde.outpost
                        break
                    case BASE_SIZE_SMALL:
                        lootTable = lootTableData.rewardTable.defendHorde.small
                        break
                    case BASE_SIZE_MEDIUM:
                        lootTable = lootTableData.rewardTable.defendHorde.medium
                        break
                    case BASE_SIZE_LARGE:
                        lootTable = lootTableData.rewardTable.defendHorde.large
                        break
                    default:
                        Logw("Unexpected Size for a Defend Horde base!")
                        lootTable = lootTableData.rewardTable.defendHorde.outpost
                        break
                }
                break
            case FACTION_NAME_OBSTACLE:
                switch (size) {
                    case BASE_SIZE_OUTPOST:
                        lootTable = lootTableData.rewardTable.obstacleHorde.outpost
                        break
                    case BASE_SIZE_SMALL:
                        lootTable = lootTableData.rewardTable.obstacleHorde.small
                        break
                    case BASE_SIZE_MEDIUM:
                        lootTable = lootTableData.rewardTable.obstacleHorde.medium
                        break
                    case BASE_SIZE_LARGE:
                        lootTable = lootTableData.rewardTable.obstacleHorde.large
                        break
                    default:
                        Logw("Unexpected Size for a Defend Horde base!")
                        lootTable = lootTableData.rewardTable.obstacleHorde.outpost
                        break
                }
                break
            case FACTION_NAME_FROST:
            switch (size) {
                case BASE_SIZE_OUTPOST:
                    lootTable = lootTableData.rewardTable.frostHorde.outpost
                    break
                case BASE_SIZE_SMALL:
                    lootTable = lootTableData.rewardTable.frostHorde.small
                    break
                case BASE_SIZE_MEDIUM:
                    lootTable = lootTableData.rewardTable.frostHorde.medium
                    break
                case BASE_SIZE_LARGE:
                    lootTable = lootTableData.rewardTable.frostHorde.large
                    break
                default:
                    Logw("Unexpected Size for a Defend Horde base!")
                    lootTable = lootTableData.rewardTable.frostHorde.outpost
                    break
            }
            break
            default:
                Loge("Unexpected Horde Name When Granting Piglin Crate Rewards!")
                break
        }
    }

    // Used for random loot
    let availableLootIndices = []
    if (lootTableData.chooseRandom) {
        if (lootTableData.isWeighted) {
            for (let i = 0; i < lootTable.length; i++) {
                availableLootIndices.push({
                    index: i,
                    weight: lootTable[i].weight
                })
            }
        } else {
            availableLootIndices = [...Array(lootTable.length).keys()]
        }
    }

    let rewarded = false
    while (!rewarded && (!lootTableData.chooseRandom || availableLootIndices.length > 0)) {
        let rewardTable
        if (lootTableData.chooseRandom) {
            let lootIndex
            let chosenElement
            if (lootTableData.isWeighted) {
                chosenElement = ChooseFromWeightedArray(availableLootIndices)
                lootIndex = chosenElement.index
            } else {
                chosenElement = ChooseFromArray(availableLootIndices)
                lootIndex = chosenElement
            }
            availableLootIndices.splice(availableLootIndices.indexOf(chosenElement), 1)
            rewardTable = lootTable[lootIndex].rewards
        } else {
            rewardTable = _GetAndIncrementLootTableReward(lootTableData.rewardTable, lootTableData.globalIndex)
        }

        const uncappedRewardTable = ChooseFromArray(lootTableData.rewardTableUncapped)
        const combinedString = lootTableData.messagePrefix
        const stringParams = []
        const rewardResult = _ChooseLootReward(rewardTable, 50, receivingTeam, uncappedRewardTable, lootTableData.useAvailabilityRestrictions)

        if (rewardResult.length > 0) {
            rewardResult.forEach((entry) => {
                const resource = entry[0]
                let multiplier = 1
                if (lootTableData.phaseMultiplier !== undefined) {
                    const phaseIndex = Math.max(GetInvasionPhase(), 0)
                    multiplier = lootTableData.phaseMultiplier[phaseIndex]
                }
                let value = Math.round(entry[1] * multiplier)

                if (resource === "build_allay") {
                    // check for special case of allay reward from chest
                    OUTPUT_ApplyTicketModifierToTeam(receivingTeam, TICKET_BUILD, value)
                } else if (resource === "gather_allay") {
                    // check for special case of allay reward from chest
                    OUTPUT_ApplyTicketModifierToTeam(receivingTeam, TICKET_GATHER, value)
                } else {
                    // If there's a bonus multiplier (currently used for custom game settings), we don't really want it to apply to tickets at this point in time.
                    value = Math.round(value * bonusMultiplier)
                    if (value > 0) {
                        OUTPUT_AddOrRemoveTeamResource(receivingTeam, resource, value, true)
                    }
                }

                if (value > 0) {
                    stringParams.push(value.toString(), "resources." + resource + ".name")
                }
            })

            OUTPUT_AnnounceTeam(combinedString + stringParams.length.toString(), stringParams, receivingTeam)

            rewarded = true
        }
    }
    Once()
})

SNIPPET_EntityTimer("et_play_chest_open_audio", (player, payload) => {
    const lootType = payload.int

    if (lootType === LOOT_TYPE.treasureChest) {
        if (DoOnce("gv_has_opened_chest_VO")) {
            PlayPresentationActionToPlayers("alert_allay_chest_1", player)
        }
    } else if (lootType === LOOT_TYPE.piglinCrate || lootType >= LOOT_TYPE.piglinCrateVillage) {
        if (DoOnce("gv_has_opened_piglin_crate_VO")) {
            PlayPresentationActionToPlayers("piglin_crate_1", player)
        }
    }
})

const DespawnNearbyRoamingSpawners = (pointOfReference) => {
    const allRoamingSpawners = QUERY_GetEntitiesWithTags(["roaming_piglin_spawner"])
    if (HasEntities(allRoamingSpawners)) {
        const nearbyRoamingSpawners = FILTER_ByDistance(allRoamingSpawners, pointOfReference, 40)
        if (HasEntities(nearbyRoamingSpawners)) {
            OUTPUT_DespawnEntities(nearbyRoamingSpawners)
        }
    }
}

const SetEntityWaypointIconState = (entity, id, iconState) => {
    switch (iconState) {
        case POI_WAYPOINT_ICON_STATE.HIDDEN:
            OUTPUT_SetIconOff(entity)
            break
        case POI_WAYPOINT_ICON_STATE.VISIBLE:
            OUTPUT_SetIconOn(entity)
            OUTPUT_SetIconPath(entity, "waypoint_poi_questionmark")
            break
        case POI_WAYPOINT_ICON_STATE.REVEALED:
            OUTPUT_SetIconOn(entity)
            OUTPUT_SetIconPath(entity, POI_WAYPOINT_ICON_DICTIONARY[id])
            break
    }
}

const SetMountWorldSpawnerMapKeyValue = (spawnersActive) => {
    if (spawnersActive) {
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.MOUNT_WORLD_SPAWNER, MAP_MOUNT_WORLD_SPAWNER.ENABLED)
    } else {
        OUTPUT_ServerMapSetKeyValue(MAP_KEY.MOUNT_WORLD_SPAWNER, MAP_MOUNT_WORLD_SPAWNER.DISABLED)
    }
}

const SetMountWorldSpawnerState = (spawnersActive) => {
    const gvValue = spawnersActive ? 0 : 1

    OUTPUT_SetGlobalVariable("disable_world_bird_mount_spawner", gvValue)
    OUTPUT_SetGlobalVariable("disable_world_beetle_mount_spawner", gvValue)
    OUTPUT_SetGlobalVariable("disable_world_tiger_mount_spawner", gvValue)
    OUTPUT_SetGlobalVariable("disable_world_mount_06_spawner", gvValue)
    OUTPUT_SetGlobalVariable("disable_world_mount_camel_spawner", gvValue)
}

const SetSpecificMountWorldSpawnerState = (spawnerActive, mount) => {
    const gvValue = spawnerActive ? 0 : 1

    switch (mount) {
        case MOUNTS.TIGER:
            OUTPUT_SetGlobalVariable("disable_world_tiger_mount_spawner", gvValue)
            break
        case MOUNTS.BIRD:
            OUTPUT_SetGlobalVariable("disable_world_bird_mount_spawner", gvValue)
            break
        case MOUNTS.BEETLE:
            OUTPUT_SetGlobalVariable("disable_world_beetle_mount_spawner", gvValue)
            break
        case MOUNTS.MOUNT_SIX:
            OUTPUT_SetGlobalVariable("disable_world_mount_06_spawner", gvValue)
            break
        case MOUNTS.CAMEL:
            OUTPUT_SetGlobalVariable("disable_world_mount_camel_spawner", gvValue)
            break
    }
}

const InfectWoF = () => {
    Logi("Infecting Well of Fate")

    const wofVillage = GetVillageEntityFromFaction(WELL_OF_FATE)
    if (HasEntities(wofVillage)) {
        OUTPUT_AddVisualState(wofVillage, "wof_captured")
    }

    const wofBuildable = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
    const wofUpgrades = QUERY_GetEntitiesWithTags(["player_upgrade"])
    const wofPylon = QUERY_GetEntitiesWithTags(["well_of_fate_pylon"])
    const entities = OPER_Union(wofBuildable, wofPylon)

    if (!HasEntities(entities)) {
        Loge("\tERROR: WoF/Pylons not detected, you should only call this function when the WoF is unsuspended")
        return
    }

    OUTPUT_ApplyBuff(entities, "badger:buff_wof_visuals_infected")
    OUTPUT_RemoveBuff(entities, "badger:buff_wof_visuals_revert")
    OUTPUT_AddVisualState(entities, "wof_captured")
    if (!HasEntities(wofUpgrades)) return
    OUTPUT_AddVisualState(wofUpgrades, "wof_captured")
    OUTPUT_ApplyBuff(wofUpgrades, "badger:buff_wof_visuals_infected")
    OUTPUT_RemoveBuff(wofUpgrades, "badger:buff_wof_visuals_revert")
}

const UninfectWoF = () => {
    Logi("Uninfecting Well of Fate")

    const wofVillage = GetVillageEntityFromFaction(WELL_OF_FATE)
    if (HasEntities(wofVillage)) {
        OUTPUT_RemoveVisualState(wofVillage, "wof_captured")
    }

    const wofBuildable = QUERY_GetEntitiesWithTags([TAG_WELL_OF_FATE])
    const wofPylon = QUERY_GetEntitiesWithTags(["well_of_fate_pylon"])
    const wofUpgrades = QUERY_GetEntitiesWithTags(["player_upgrade"])
    const entities = OPER_Union(wofBuildable, wofPylon)

    if (!HasEntities(entities)) {
        Loge("\tERROR: WoF/Pylons not detected, you should only call this function when the WoF is unsuspended")
        return
    }

    // TODO: Update this when we can revert block conversion without applying another buff
    OUTPUT_RemoveBuff(entities, "badger:buff_wof_visuals_infected")
    OUTPUT_ApplyBuff(entities, "badger:buff_wof_visuals_revert")
    OUTPUT_RemoveVisualState(entities, "wof_captured")
    if (!HasEntities(wofUpgrades)) return
    OUTPUT_RemoveVisualState(wofUpgrades, "wof_captured")
    OUTPUT_RemoveBuff(wofUpgrades, "badger:buff_wof_visuals_infected")
    OUTPUT_ApplyBuff(wofUpgrades, "badger:buff_wof_visuals_revert")
}
