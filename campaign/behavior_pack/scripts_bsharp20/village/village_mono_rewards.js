const VillageResourceStore = (villageId) => {
    const counter = {
        key: GetVillageVariableKey(villageId, "village_chest_rewards_"),
        Get: function(resourceName) {
            return QUERY_GetGlobalVariable(this.key + resourceName)
        },
        Set: function(resourceName, value) {
            return OUTPUT_SetGlobalVariable(this.key + resourceName, value)
        }
    }
    return counter
}

const _ForEachVillageWithActiveChest = (callback) => {
    ForEachAliveVillageEntity((entity) => {
        if (QUERY_HasTags(entity, [TAG_INACTIVE_VILLAGE]) === true) {
            return
        }
        const villagerVillageEntity = FILTER_ByFactionName(entity, CULTURE_NAME_VILLAGERS)
        if (!HasEntities(villagerVillageEntity)) {
            return
        }
        const villageId = QUERY_GetVillageIDFromEntity(entity)
        if (IsPlayerOutpost(villageId)) {
            return
        }
        if (QUERY_IsVillageOccupied(villageId)) {
            return
        }

        callback(villagerVillageEntity)
    })
}

const TryAddRewardsToVillage = (villageId, amount = 1) => {
    const rewardData = _GetVillageRewardData(villageId)
    const rewardIndex = GetCultureLevelFromVillage(villageId)
    const amountsForTier = rewardData.lootTableAmounts[rewardIndex]

    Logv(`Adding village rewards to ${villageId} with ${amount} tokens ...`)

    let resourceRewarded = false
    let capped = true
    const store = VillageResourceStore(villageId)

    for (let i = 0; i < rewardData.lootTableTypes.length; i++) {
        const resourceName = rewardData.lootTableTypes[i]

        if (IsGatherResourceUnlocked(TEAM_BLUE, resourceName) || _HasRareResourceVillageAvailabilityCrossedDaysThreshold(resourceName)) {
            const maxAmount = amountsForTier[i]
            const currentAmount = store.Get(resourceName)
            if (currentAmount === maxAmount) {
                continue
            }

            //Set a new cap if granting if it's locked/no cap has been set
            /*if (QUERY_GetTeamResourceMax(TEAM_BLUE, resourceName) <= 0) {
                const players = GetAllPlayers()
                OUTPUT_SetResourceCap(players, resourceName, _GetRareResourceVillageAvailabilityData(resourceName).cap)
                Logi("Setting new cap for " + resourceName + " to " + _GetRareResourceVillageAvailabilityData(resourceName).cap)
            }*/

            const addAmount = Math.ceil((maxAmount * amount) / villageRewardData.tokenCapacity)
            const newAmount = Math.min(currentAmount + addAmount, maxAmount)
            store.Set(resourceName, newAmount)
            Logv(`... rewarding ${addAmount} to ${resourceName} to a total of ${newAmount} / ${maxAmount}`)

            capped = newAmount === maxAmount && capped
            resourceRewarded = true
        }
    }

    if (resourceRewarded) {
        if (capped) {
            OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.VILLAGE_CHEST_STATE, MAP_VILLAGE_CHEST.FULL)
        } else {
            OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.VILLAGE_CHEST_STATE, MAP_VILLAGE_CHEST.UNCOLLECTED)
        }
        const villageChestEntity = GetEntitiesWithTagsAndVillage(["village_treasure_chest_interact"], villageId)
        if (HasEntities(villageChestEntity)) {
            OUTPUT_RemoveVisualState(villageChestEntity, "open_chest")
        }
    }

    Logv(`... rewarded: ${resourceRewarded} , capped: ${capped}`)

    return capped
}

const _IsVillageChestEmpty = (villageId) => {
    const rewardData = _GetVillageRewardData(villageId)
    const rewardTypes = rewardData.lootTableTypes
    const store = VillageResourceStore(villageId)

    // grant the rewards
    for (const resourceName of rewardTypes) {
        if (store.Get(resourceName) > 0) {
            return false
        }
    }
    return true
}
// Juicing the chest with additional rewards after a successfully defending a village attack
const _TryAddRewardsForVaSurge = (villageId, strength) => {
    const store = VillageResourceStore(villageId)
    const rewardIndex = GetCultureLevelFromVillage(villageId)
    const strengthIdx = Clamp(strength - 1, 0, villageBiomeRewards.surgeStrengthMultipliers.length - 1)
    const attackStrengthMultiplier = villageBiomeRewards.surgeStrengthMultipliers[strengthIdx]
    const surgeRewardName = villageBiomeRewards.surgeResource

    // Surge primary resource
    const surgeResourceAmountForTier = villageBiomeRewards.surgeResourceAmounts[rewardIndex]
    const currentSurgeResourceAmount = store.Get(surgeRewardName)
    const addSurgeAmount = Math.floor(surgeResourceAmountForTier * attackStrengthMultiplier)
    const surgeResourceTotal = Math.min(currentSurgeResourceAmount + addSurgeAmount, villageBiomeRewards.surgeResourceCap)
    store.Set(surgeRewardName, surgeResourceTotal)

    Logv(`... rewarding bonus ${surgeResourceTotal} to ${surgeRewardName}`)

    // Surge biome resources
    const rewardData = _GetVillageRewardData(villageId)
    const amountsForTier = rewardData.lootTableAmounts[rewardIndex]
    const surgeAmountsForTier = rewardData.surgeAdditionalResources[rewardIndex]
    for (let i = 0; i < rewardData.lootTableTypes.length; i++) {
        const resourceName = rewardData.lootTableTypes[i]

        if (IsGatherResourceUnlocked(TEAM_BLUE, resourceName) || _HasRareResourceVillageAvailabilityCrossedDaysThreshold(resourceName)) {
            const maxAmount = amountsForTier[i]
            const currentAmount = store.Get(resourceName)
            if (currentAmount >= maxAmount) {
                continue
            }
            const amountToGive = surgeAmountsForTier[i]
            const addAmount = Math.floor(amountToGive * attackStrengthMultiplier)
            const newAmount = Math.min(currentAmount + addAmount, maxAmount)
            store.Set(resourceName, newAmount)
            Logv(`... rewarding bonus ${addAmount} to ${resourceName} to a total of ${newAmount} / ${maxAmount}`)
        }
    }

    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.VILLAGE_CHEST_STATE, MAP_VILLAGE_CHEST.UNCOLLECTED)
    const villageChestEntity = GetEntitiesWithTagsAndVillage(["village_treasure_chest_interact"], villageId)
    if (HasEntities(villageChestEntity)) {
        OUTPUT_RemoveVisualState(villageChestEntity, "open_chest")
    }
}

const _TryAddRewardsForAct1 = (villageId) => {
    const store = VillageResourceStore(villageId)
    const newWoodAmount = QUERY_GetTeamResourceMax(TEAM_BLUE, "wood") - QUERY_GetTeamResource(TEAM_BLUE, "wood")
    const newStoneAmount = QUERY_GetTeamResourceMax(TEAM_BLUE, "stone") - QUERY_GetTeamResource(TEAM_BLUE, "stone")
    const newLapisAmount = QUERY_GetTeamResourceMax(TEAM_BLUE, "emerald") - QUERY_GetTeamResource(TEAM_BLUE, "emerald")

    store.Set("wood", newWoodAmount)
    store.Set("stone", newStoneAmount)
    store.Set("emerald", newLapisAmount)
    store.Set(villageBiomeRewards.surgeResource, 10)

    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.VILLAGE_CHEST_STATE, MAP_VILLAGE_CHEST.UNCOLLECTED)
}

const _TryAddLapisForAct1 = (villageId) => {
    const store = VillageResourceStore(villageId)
    const newLapisAmount = QUERY_GetTeamResourceMax(TEAM_BLUE, "emerald")

    store.Set("emerald", newLapisAmount)

    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.VILLAGE_CHEST_STATE, MAP_VILLAGE_CHEST.UNCOLLECTED)
}

const _TryAddAct1VillageAttackSurge = (villageId) => {
    const store = VillageResourceStore(villageId)
    const newWoodAmount = 100
    const newStoneAmount = 100
    const newLapisAmount = 50

    store.Set("wood", newWoodAmount)
    store.Set("stone", newStoneAmount)
    store.Set("emerald", newLapisAmount)
    store.Set(villageBiomeRewards.surgeResource, 10)

    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.VILLAGE_CHEST_STATE, MAP_VILLAGE_CHEST.UNCOLLECTED)
}

const EmptyAllVillageChests = () => {
    _ForEachVillageWithActiveChest((entity) => {
        _EmptyVillageChest(entity)
    })
}

const _EmptyVillageChest = (villageEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(villageEntity)

    Logv(`Emptying chest for vilage: ${villageId}`)

    const rewardData = _GetVillageRewardData(villageId)
    const rewardTypes = rewardData.lootTableTypes
    const store = VillageResourceStore(villageId)

    // grant the rewards
    for (const resourceName of rewardTypes) {
        store.Set(resourceName, 0)
    }

    // Remove surge resource
    store.Set(villageBiomeRewards.surgeResource, 0)

    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.VILLAGE_CHEST_STATE, MAP_VILLAGE_CHEST.COLLECTED)

    const villageChestEntity = GetEntitiesWithTagsAndVillage(["village_treasure_chest_interact"], villageId)
    if (HasEntities(villageChestEntity)) {
        OUTPUT_AddVisualState(villageChestEntity, "open_chest")
    }
}

const _MessageCollectedRewards = (collectedRewards, messageData, playerEntity) => {
    const hasCollected = Object.keys(collectedRewards.collected).length > 0
    const hasExcess = Object.keys(collectedRewards.excess).length > 0

    if (!hasCollected) {
        if (hasExcess) {
            OUTPUT_AnnouncePlayer(messageData.cannotOpenNoSpace, [], playerEntity)
        } else {
            OUTPUT_AnnouncePlayer(messageData.cannotOpenEmpty, [], playerEntity)
        }
        return
    }

    // note: this should be using purely numbers and images to be localization safe.
    let rewardsContentString = ""
    for (const resourceName in collectedRewards.collected) {
        const amount = collectedRewards.collected[resourceName]
        if (amount <= 0) {
            continue
        }
        rewardsContentString += `${amount}|+[key.item.${resourceName}]| `
        Logv(`${resourceName} : ${amount}`)
    }
    if (IsCurrentAct(ACTS.ACT_3A)) {
        OUTPUT_AnnounceInterruptPlayer(ONBOARDING_MESSAGE_PRIORITY, playerEntity)
        _restoreAct3Nudge()
    }

    if (hasExcess) {
        OUTPUT_AnnouncePlayer(messageData.openExcess, [rewardsContentString], playerEntity)
    } else {
        OUTPUT_AnnouncePlayer(messageData.open, [rewardsContentString], playerEntity)
    }
}

const _restoreAct3Nudge = () => {
    LISTENFOR_LocalTimer({
        snippet: "lt_restory_act3_nudge",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 8
    })
}

SNIPPET_LocalTimer("lt_restory_act3_nudge", () => {
    OUTPUT_Announce("piglin_base_wof_boss_objective", [])
})

const CollectRewardsFromAllVillages = (playerEntity) => {
    Logv("Collecting rewards from all villages")
    const collectedRewards = { collected: {}, excess: {} }

    _ForEachVillageWithActiveChest((entity) => {
        _CollectRewardsFromVillage(entity, collectedRewards, playerEntity)
    })

    _MessageCollectedRewards(collectedRewards, villageRewardData.messages.all, playerEntity)

    LISTENFOR_LocalTimer({
        snippet: "lt_update_all_chest_state",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: villageRewardData.updateTime
    })

    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.VILLAGE_CHEST_OPENS_PROGRESS.globalVariable)
    return true
}

const CollectRewardsFromVillage = (playerEntity, villageId) => {
    Logv(`Collecting rewards from one village - ${villageId}`)

    if (_IsVillageChestEmpty(villageId) && DoOnce("gv_empty_village_chest_tutorial")) {
        PlayPresentationActionToPlayers("village_chest_empty", playerEntity)
    }
    const collectedRewards = { collected: {}, excess: {} }

    const villageEntity = GetVillageEntityFromID(villageId)
    _CollectRewardsFromVillage(villageEntity, collectedRewards, playerEntity)

    // reset chest (not concerned if chest is suspended as our on-enter snippets will update that properly)
    LISTENFOR_LocalTimer({
        snippet: "lt_update_chest_state",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: villageRewardData.updateTime,
        payloadInt: villageId
    })

    _MessageCollectedRewards(collectedRewards, villageRewardData.messages.single, playerEntity)

    IncrementGlobal(TELEMETRY_CAMPAIGN_PROGRESS.VILLAGE_CHEST_OPENS_PROGRESS.globalVariable)
    return true
}

// note this function returns a list of collected resources, it does not grant them directly.
const _CollectRewardsFromVillage = (villageEntity, collectedRewards, playerEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(villageEntity)

    Logv(`Collecting rewards from vilage: ${villageId}`)

    const rewardData = _GetVillageRewardData(villageId)
    const rewardTypes = rewardData.lootTableTypes
    const store = VillageResourceStore(villageId)

    // grant the rewards
    for (const resourceName of rewardTypes) {
        _GivePlayerRewardsFromVillage(playerEntity, villageId, resourceName, collectedRewards)
    }

    // Grant primary surge resource
    const surgeResourceName = villageBiomeRewards.surgeResource
    store.Get(surgeResourceName)
    if (store.Get(surgeResourceName) > 0) {
        _GivePlayerRewardsFromVillage(playerEntity, villageId, surgeResourceName, collectedRewards)
    }

    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.VILLAGE_CHEST_STATE, MAP_VILLAGE_CHEST.COLLECTED)

    const villageChestEntity = GetEntitiesWithTagsAndVillage(["village_treasure_chest_interact"], villageId)
    if (HasEntities(villageChestEntity)) {
        OUTPUT_AddVisualState(villageChestEntity, "open_chest")
    }
}

const _GivePlayerRewardsFromVillage = (playerEntity, villageId, resourceName, collectedRewards) => {
    const store = VillageResourceStore(villageId)
    const storedAmount = store.Get(resourceName)
    const currentAmount = QUERY_GetTeamResource(TEAM_BLUE, resourceName) // can be decimal
    const maxAmount = QUERY_GetTeamResourceMax(TEAM_BLUE, resourceName)

    const desiredTotal = currentAmount + storedAmount
    const excessAmount = Math.floor(Math.max(desiredTotal - maxAmount, 0)) // round down to ensure whole numbers and that we can always cap out the invntory
    const rewardAmount = storedAmount - excessAmount

    //Players may obtain resources beyond their cap. If this is the case, don't give them any rewards, or you reset this resource to their max amount, which in some cases is zero!
    if (maxAmount > currentAmount) {
        OUTPUT_AddOrRemoveResource(playerEntity, resourceName, rewardAmount, false)
        store.Set(resourceName, storedAmount - rewardAmount)
        Logv(`... granting ${rewardAmount} to ${resourceName} with excess (saved) ${excessAmount}`)
    }

    if (rewardAmount > 0) {
        if (collectedRewards.collected[resourceName]) {
            collectedRewards.collected[resourceName] += rewardAmount
        } else {
            collectedRewards.collected[resourceName] = rewardAmount
        }
    }

    if (excessAmount > 0) {
        if (collectedRewards.excess[resourceName]) {
            collectedRewards.excess[resourceName] += excessAmount
        } else {
            collectedRewards.excess[resourceName] = excessAmount
        }
    }
}

const _GetVillageRewardData = (villageId) => {
    let rewardData = villageBiomeRewards.default
    const villageEntity = GetVillageEntityFromID(villageId)
    if (QUERY_HasWorldPlacementName(villageEntity)) {
        const villagePlacementName = QUERY_GetWorldPlacementName(villageEntity)
        const data = villageBiomeRewards[villagePlacementName]
        if (data) {
            Logv(`Specific village biome rewards found for ${villageId} - using ${villagePlacementName}`)
            rewardData = data
        }
    }
    if (rewardData === villageBiomeRewards.default) {
        Logv(`No specific village biome rewards found for ${villageId} - using default`)
    }
    return rewardData
}

const _GetRareResourceVillageAvailabilityData = (resource) => {
    for (const resourceData of villageRewardData.unlockVillageRewardDays) {
        if (resourceData.resourceName === resource) {
            return resourceData
        }
    }

    return 0
}

const _HasRareResourceVillageAvailabilityCrossedDaysThreshold = (resource) => {
    const daysToCheck = _GetRareResourceVillageAvailabilityData(resource).unlockDays
    if (QUERY_GetGlobalVariable(villageRewardData.variables.daysRareResourceLocked + "_" + resource) >= daysToCheck) {
        return true
    }
    return false
}

const _setupVillageRewards = () => {
    for (const factionName of CULTURE_NAME_VILLAGERS) {
        LISTENFOR_VillageGenerated({
            snippet: "vg_setup_village_rewards",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: factionName
        })
    }
    
    LISTENFOR_Timer({
        snippet: "gt_village_chest_restock",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        threshold: 0,
        timerName: villageRewardData.tokenTimer
    })

    LISTENFOR_GlobalVariableChanged({
        snippet: "gvc_act2_started_enable_chest",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        variableName: GV_STARTED_ACT_2
    })

    //listen for players interacting with chests
    LISTENFOR_PlayerInteracted({
        snippet: "pi_village_chest_interacted_campaign",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: ["village_treasure_chest_interact"]
    })

    LISTENFOR_InvasionAttackV2Ended({
        snippet: "invasion_attackV2_ended_surge_rewards",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
}

SNIPPET_InvasionAttackV2Ended("invasion_attackV2_ended_surge_rewards", (attackV2Data) => {
    const villageId = attackV2Data.villageId

    const structures = GetVillageCentralStructures(villageId)
    if (!HasEntities(structures)) {
        return
    }

    if (IsCurrentAct(ACTS.ACT_1A)) {
        return
    }

    const centralStructure = RandomEntity(structures)
    if (QUERY_HasTags(centralStructure, ["fountain"])) {
        const defenseSuccess = !(QUERY_IsVillageDestroyed(villageId) || QUERY_IsEntityDisabled(centralStructure))
        if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) === 1) {
            if (defenseSuccess) {
                _TryAddRewardsForVaSurge(villageId, attackV2Data.strength)
            } else {
                _EmptyVillageChest(centralStructure)
            }
        }
    }
})

SNIPPET_InheritsFromGameMode("lcu_campaign", () => {
    _setupVillageRewards()
})

SNIPPET_InheritsFromGameMode("editor", () => {
    _setupVillageRewards()
})

SNIPPET_VillageGenerated("vg_setup_village_rewards", (villageId) => {
    if (IsPlayerOutpost(villageId)) {
        return
    }

    LISTENFOR_BuildingComplete({
        snippet: "bc_village_fountain_rewards",
        ownerVillageId: villageId,
        includeTags: [TAG_VILLAGE_FOUNTAIN],
        villageId: villageId
    })

    // initialize world map data
    const rewardData = _GetVillageRewardData(villageId)
    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.VILLAGE_RESOURCE, rewardData.rareResource)
    OUTPUT_MapSetKeyValue(GetVillageEntityFromID(villageId), MAP_KEY.VILLAGE_CHEST_STATE, MAP_VILLAGE_CHEST.COLLECTED)

    //fill chest for Act 1
    TryAddRewardsToVillage(villageId, villageRewardData.tokenCapacity)
})

SNIPPET_GlobalVariableChanged("gvc_act2_started_enable_chest", (oldValue, newValue, _payload) => {
    if (newValue === -1 && oldValue === 1) {
        return
    }

    // grant all vilages 1 token on act 2 start
    _ForEachVillageWithActiveChest((villageEntity) => {
        TryAddRewardsToVillage(QUERY_GetVillageIDFromEntity(villageEntity))
    })

    //Listen for days gone by without unlocking rare resources
    LISTENFOR_TimeOfDay({
        snippet: "tod_village_rare_resource_unlock_check",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timeOfDayNumber: TIME_DAWN
    })

    // start restocking chests periodically
    LISTENFOR_TimeOfDay({
        snippet: "tod_init_village_chest_refill",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timeOfDayNumber: TIME_NOON
    })

    Once()
})

SNIPPET_TimeOfDay("tod_village_rare_resource_unlock_check", (_payload) => {
    for (const resource of villageRewardData.unlockVillageRewardDays) {
        if (!IsGatherResourceUnlocked(TEAM_BLUE, resource.resourceName)) {
            IncrementGlobal(villageRewardData.variables.daysRareResourceLocked + "_" + resource.resourceName)
        }
    }
})

SNIPPET_TimeOfDay("tod_init_village_chest_refill", (_payload) => {
    OUTPUT_SetNamedTimer(villageRewardData.tokenTimer, villageRewardData.tokenFillRate)
    Once()
})

SNIPPET_Timer("gt_village_chest_restock", () => {
    Logv("Restocking village chest")

    let allChestsFull = true
    let oneVillageRestocked = false
    _ForEachVillageWithActiveChest((villageEntity) => {
        allChestsFull = TryAddRewardsToVillage(QUERY_GetVillageIDFromEntity(villageEntity)) && allChestsFull
        oneVillageRestocked = true
    })

    const previousState = QUERY_GetGlobalVariable("gv_chest_full_messaging") === 1
    const currentState = allChestsFull && oneVillageRestocked
    if (currentState && !previousState) {
        OUTPUT_Announce("village_chest_restock", [])
    }
    OUTPUT_SetGlobalVariable("gv_chest_full_messaging", currentState ? 1 : 0)

    OUTPUT_SetNamedTimer(villageRewardData.tokenTimer, villageRewardData.tokenFillRate)
})

SNIPPET_BuildingComplete("bc_village_fountain_rewards", (fountain, payload) => {
    const villageId = payload.ownerVillageId

    //spawn chest entry volume
    const villageChestStateBoundaryVolume = SpawnTriggerVolume(fountain, fountain, "badger:spatial_trigger_village_generic", TEAM_WILD, villageId, true, [TAG_PLAYER], [], ALLIANCE_FRIENDLY)
    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_set_chest_state",
        ownerVillageId: villageId,
        triggerEntity: villageChestStateBoundaryVolume
    })
})

const _UpdateVillageChestState = (villageId) => {
    Logi("### _UpdateVillageChestState ###")
    const villageChestEntity = GetEntitiesWithTagsAndVillage(["village_treasure_chest_interact"], villageId)

    let isEmpty = true
    const rewardData = _GetVillageRewardData(villageId)
    const store = VillageResourceStore(villageId)
    for (const resourceName of rewardData.lootTableTypes) {
        Logi("### store.Get(resourceName) " + resourceName + " = " + store.Get(resourceName))
        if (store.Get(resourceName) > 0) {
            isEmpty = false
            break
        }
    }

    if (isEmpty) {
        Logi("### isEmpty is true ### ")
        OUTPUT_AddVisualState(villageChestEntity, "open_chest")
    } else {
        Logi("### isEmpty is false ### ")
        OUTPUT_RemoveVisualState(villageChestEntity, "open_chest")
    }

    Logv(`Updating village chest state - empty: ${isEmpty}`)
}

SNIPPET_LocalTimer("lt_update_all_chest_state", () => {
    _ForEachVillageWithActiveChest((villageEntity) => {
        _UpdateVillageChestState(QUERY_GetVillageIDFromEntity(villageEntity))
    })
})

SNIPPET_LocalTimer("lt_update_chest_state", (payload) => {
    Logi("### lt_update_chest_state ###")
    _UpdateVillageChestState(payload.int)
})

SNIPPET_SpatialPartitionEntered("spe_set_chest_state", (_triggerEntity, _intruderEntity, payload) => {
    const villageId = payload.ownerVillageId
    // block updating village chest during act 1 as the village chest doesn't get populated with rewards until it's opened.
    // triggering the state change here will re-open the chest which we don't want
    if (QUERY_GetGlobalVariable("gv_onboarding_village_chest_active") === 0) {
        _UpdateVillageChestState(villageId)
    }
})

const _HandleAct1VillageChest = (playerEntity, interactedEntity, villageId) => {
    // Act 1 special handling
    if (QUERY_GetGlobalVariable("gv_onboarding_village_chest_active") > 0) {
        Logi("First chest interact")
        if (QUERY_HasTags(interactedEntity, ["secondVillageChest"])) {
            if (DoOnce(act1FlowVal.villageChest.cinematic)) {
                _TryAddRewardsForAct1(villageId)
                const fountain = GetVillageCentralStructures(villageId)
                OUTPUT_TriggerCinematic(act1FlowVal.villageChest.cinematic, [fountain])
            }
        } else {
            OUTPUT_AnnouncePlayer(villageRewardData.messages.single.cannotOpenEmpty, [], playerEntity)
            if (DoOnce("gv_empty_village_chest_tutorial")) {
                PlayPresentationActionToPlayers("village_chest_empty", playerEntity)
            }
        }
    } else if (QUERY_GetGlobalVariable("gv_onboarding_free_second_village_completed") > 0) {
        if (QUERY_GetGlobalVariable("gv_first_skirmish_surge_village_chest") > 0) {
            _TryAddAct1VillageAttackSurge(villageId)
            CollectRewardsFromVillage(playerEntity, villageId)
            OUTPUT_SetGlobalVariable("gv_first_skirmish_surge_village_chest", 0)
        }
        if (QUERY_GetGlobalVariable("gv_get_act1_lapis_from_chest_enabled") > 0) {
            _TryAddLapisForAct1(villageId)
            CollectRewardsFromVillage(playerEntity, villageId)
            OUTPUT_SetGlobalVariable("gv_get_act1_lapis_from_chest_enabled", 0)
        } else {
            Logi("Second chest interact")
            CollectRewardsFromVillage(playerEntity, villageId)
        }
    } else {
        OUTPUT_AnnouncePlayer(villageRewardData.messages.single.cannotOpenEmpty, [], playerEntity)
        if (DoOnce("gv_empty_village_chest_tutorial")) {
            PlayPresentationActionToPlayers("village_chest_empty", playerEntity)
        }
    }
}

SNIPPET_PlayerInteracted("pi_village_chest_interacted_campaign", (playerEntity, interactedEntity, _payload) => {
    Logi("~~~~~~~  pi_village_chest_interacted_campaign ~~~~~~")

    const villageId = QUERY_GetVillageIDFromEntity(interactedEntity)
    if (QUERY_IsVillageOccupied(villageId)) {
        OUTPUT_AnnouncePlayer("village_chest_cannot_open_piglin_occupied", [], playerEntity)
        return
    }

    if (QUERY_GetGlobalVariable(GV_STARTED_ACT_2) === 0) {
        _HandleAct1VillageChest(playerEntity, interactedEntity, villageId)
    } else if (QUERY_GetTeamResource(TEAM_BLUE, villageRewardData.unlocks.linkedChest) > 0) {
        // Standard behaviour (linked chest)
        CollectRewardsFromAllVillages(playerEntity)
        LISTENFOR_LocalTimer({
            snippet: "lt_village_chest_tutorial",
            ownerVillageId: villageId,
            waitTime: 2
        })
        Logi("Triggered Village Rewards Tutorial")
    } else {
        // Standard behaviour (single chest)
        CollectRewardsFromVillage(playerEntity, villageId)
        LISTENFOR_LocalTimer({
            snippet: "lt_village_chest_tutorial",
            ownerVillageId: villageId,
            waitTime: 2
        })
        Logi("Triggered Village Rewards Tutorial")
    }
})

SNIPPET_LocalTimer("lt_village_chest_tutorial", (payload) => {
    const villageChestEntity = GetEntitiesWithTagsAndVillage(["village_treasure_chest_interact"], payload.ownerVillageId)
    if (HasEntities(villageChestEntity)) {
        TriggerTutorialForSpecificPlayersNearAnEntity(villageChestEntity, "village_rewards", 50)
    }
})

// ====== DEBUG ======
const _setupVillageChests = () => {
    LISTENFOR_ExternalEvent({
        snippet: "ee_restock_village_chests",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "ee_restock_village_chests"
    })

    LISTENFOR_ExternalEvent({
        snippet: "ee_collect_village_chests",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        eventName: "ee_collect_village_chests"
    })
}

SNIPPET_InheritsFromGameMode("lcu_campaign", () => {
    _setupVillageChests()
})

SNIPPET_InheritsFromGameMode("editor", () => {
    _setupVillageChests()
})

SNIPPET_ExternalEvent("ee_restock_village_chests", () => {
    Logv("DEBUG: restock village chests")
    _ForEachVillageWithActiveChest((villageEntity) => {
        TryAddRewardsToVillage(QUERY_GetVillageIDFromEntity(villageEntity))
    })
})

SNIPPET_ExternalEvent("ee_collect_village_chests", () => {
    Logv("DEBUG: collect village chests")
    CollectRewardsFromAllVillages(RandomEntity(GetPlayers()))
})
