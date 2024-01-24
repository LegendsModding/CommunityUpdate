const LocksKeys = {
    //List of the global variables to check to see whether or not the player has obtained these allies. If new allies are added to the game, they should go here.
    allies: {
        ally0: "poi_ally_01_completed_all",
        ally1: "poi_ally_02_completed",
        ally2: "poi_ally_04_completed_all",
        ally3: "poi_ally_05_completed_all",
        ally4: "poi_ally_06_completed_all"
    },
    [FACTION_NAME_ATTACK]: {
        [BASE_SIZE_MEDIUM]: {
            op: {
                //Any global variables here must be set to 1 or greater to mark as a pass. E.g. gv_vindicator_spawner_unlocked indicates that vindicators have been unlocked
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                //Does the player have >0 MAX of this resource. E.g. if you've unlocked coal, but still have 0, this will count as valid.
                resources: {},
                //The player must have the mob alliances listed here
                mobAlliances: {},
                //The player must have each of these allies unlocked, this is original functionality which I don't find as useful since a specific composition of these allies is less useful
                allies: {},
                //Player must have this many allies (firsts / powerful golems). This is new functionality which is more forgiving and cares more about "general power level"
                alliesRequired: 0,
                //Player must have greater than this many bonus unit spawns. These are granted by the Flames of Creation upgrades and exist on top of default spawner cap (which is 20)
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {
                    res0: "redstone"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_zombie"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 0
            },
            secondary: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 20
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 1,
                spawnerCap: 0
            }
        },
        [BASE_SIZE_LARGE]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {
                    res0: "redstone"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_zombie"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 20
            },
            secondary: {
                globals: {},
                resources: {
                    res0: "redstone"
                },
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 30
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 2,
                spawnerCap: 0
            }
        },
        [BASE_SIZE_BOSS]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {},
                mobAlliances: {
                    ma0: "unlock_spawner_zombie",
                    ma1: "unlock_spawner_skeleton",
                    ma2: "unlock_spawner_creeper",
                    ma3: "unlock_spawner_spider"
                },
                allies: {},
                spawnerCap: 0
            },
            secondary: {
                globals: {},
                resources: {
                    res0: "redstone"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_zombie"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 30
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 3,
                spawnerCap: 0
            }
        }
    },
    [FACTION_NAME_DEFEND]: {
        [BASE_SIZE_MEDIUM]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {
                    res0: "coal"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_creeper"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 0
            },
            secondary: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 20
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 1,
                spawnerCap: 0
            }
        },
        [BASE_SIZE_LARGE]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {
                    res0: "coal"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_creeper"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 20
            },
            secondary: {
                globals: {},
                resources: {
                    res0: "coal"
                },
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 30
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 2,
                spawnerCap: 0
            }
        },
        [BASE_SIZE_BOSS]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {},
                mobAlliances: {
                    ma0: "unlock_spawner_zombie",
                    ma1: "unlock_spawner_skeleton",
                    ma2: "unlock_spawner_creeper",
                    ma3: "unlock_spawner_spider"
                },
                allies: {},
                spawnerCap: 0
            },
            secondary: {
                globals: {},
                resources: {
                    res0: "coal"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_creeper"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 30
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 3,
                spawnerCap: 0
            }
        }
    },
    [FACTION_NAME_OBSTACLE]: {
        [BASE_SIZE_MEDIUM]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {
                    res0: "diamond"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_skeleton"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 0
            },
            secondary: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 20
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 1,
                spawnerCap: 0
            }
        },
        [BASE_SIZE_LARGE]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {
                    res0: "diamond"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_skeleton"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 20
            },
            secondary: {
                globals: {},
                resources: {
                    res0: "diamond"
                },
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 30
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 2,
                spawnerCap: 0
            }
        },
        [BASE_SIZE_BOSS]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {},
                mobAlliances: {
                    ma0: "unlock_spawner_zombie",
                    ma1: "unlock_spawner_skeleton",
                    ma2: "unlock_spawner_creeper",
                    ma3: "unlock_spawner_spider"
                },
                allies: {},
                spawnerCap: 0
            },
            secondary: {
                globals: {},
                resources: {
                    res0: "diamond"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_skeleton"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 30
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 3,
                spawnerCap: 0
            }
        }
    },
    [FACTION_NAME_FROST]: {
        [BASE_SIZE_MEDIUM]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {
                    res0: "diamond"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_skeleton"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 0
            },
            secondary: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 20
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 1,
                spawnerCap: 0
            }
        },
        [BASE_SIZE_LARGE]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {
                    res0: "diamond"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_skeleton"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 20
            },
            secondary: {
                globals: {},
                resources: {
                    res0: "diamond"
                },
                mobAlliances: {},
                allies: {},
                alliesRequired: 0,
                spawnerCap: 30
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 2,
                spawnerCap: 0
            }
        },
        [BASE_SIZE_BOSS]: {
            op: {
                globals: {
                    vindicators: "gv_vindicator_spawner_unlocked"
                },
                resources: {},
                mobAlliances: {},
                allies: {},
                spawnerCap: 0
            },
            primary: {
                globals: {},
                resources: {},
                mobAlliances: {
                    ma0: "unlock_spawner_zombie",
                    ma1: "unlock_spawner_skeleton",
                    ma2: "unlock_spawner_creeper",
                    ma3: "unlock_spawner_spider"
                },
                allies: {},
                spawnerCap: 0
            },
            secondary: {
                globals: {},
                resources: {
                    res0: "diamond"
                },
                mobAlliances: {
                    ma0: "unlock_spawner_skeleton"
                },
                allies: {},
                alliesRequired: 0,
                spawnerCap: 30
            },
            passable: {
                globals: {},
                resources: {},
                mobAlliances: {},
                allies: {},
                alliesRequired: 3,
                spawnerCap: 0
            }
        }
    }
}

const IsPlayerStrongEnoughForThisBase = (faction, baseSize) => {
    if (baseSize !== BASE_SIZE_MEDIUM && baseSize !== BASE_SIZE_LARGE && baseSize !== BASE_SIZE_BOSS) {
        return true
    }
    //To be strong enough for a large base, you need to have the tier requirements and the requirements of the tier >= the tier your checking for a mediume base
    //Example: to be at "Primary" for a large base, you need to meet the requirements for the large base's "Primary" as well as the "Primary" or "OP" requirements for a medium base
    //Future Improvement Note: We may want to refactor this to check for ANY/AND, but for now it serves its purpose as a light gate.
    if (baseSize === BASE_SIZE_LARGE || baseSize === BASE_SIZE_BOSS) {
        const lockKeyDataLarge = LocksKeys[faction][baseSize]
        const lockKeyDataMed = LocksKeys[faction][BASE_SIZE_MEDIUM]

        const mediumOP = _CheckIfPlayerPassesTier(lockKeyDataMed.op)
        const mediumPrimary = _CheckIfPlayerPassesTier(lockKeyDataMed.primary)
        const mediumSecondary = _CheckIfPlayerPassesTier(lockKeyDataMed.secondary)
        const mediumePassable = _CheckIfPlayerPassesTier(lockKeyDataMed.passable)

        if (_CheckIfPlayerPassesTier(lockKeyDataLarge.op) && mediumOP) {
            Logi("@@@@  Difficulty Threshold Passed: OP @@@@")
            return true
        } else if (_CheckIfPlayerPassesTier(lockKeyDataLarge.primary) && (mediumOP || mediumPrimary)) {
            Logi("@@@@  Difficulty Threshold Passed: Primary @@@@")
            return true
        } else if (_CheckIfPlayerPassesTier(lockKeyDataLarge.secondary) && (mediumOP || mediumPrimary || mediumSecondary)) {
            Logi("@@@@  Difficulty Threshold Passed: Secondary @@@@")
            return true
        } else if (_CheckIfPlayerPassesTier(lockKeyDataLarge.passable) && (mediumOP || mediumPrimary || mediumSecondary || mediumePassable)) {
            Logi("@@@@  Difficulty Threshold Passed: Passable @@@@")
            return true
        }
    } else {
        const lockKeyData = LocksKeys[faction][baseSize]
        if (_CheckIfPlayerPassesTier(lockKeyData.op)) {
            Logi("@@@@  Difficulty Threshold Passed: OP @@@@")
            return true
        } else if (_CheckIfPlayerPassesTier(lockKeyData.primary)) {
            Logi("@@@@  Difficulty Threshold Passed: Primary @@@@")
            return true
        } else if (_CheckIfPlayerPassesTier(lockKeyData.secondary)) {
            Logi("@@@@  Difficulty Threshold Passed: Secondary @@@@")
            return true
        } else if (_CheckIfPlayerPassesTier(lockKeyData.passable)) {
            Logi("@@@@  Difficulty Threshold Passed: Passable @@@@")
            return true
        }
    }

    return false
}

const _CheckIfPlayerPassesTier = (lockKeyData) => {
    for (const key in lockKeyData.globals) {
        if (key !== undefined) {
            const data = lockKeyData.globals[key]
            if (QUERY_GetGlobalVariable(data) === 0) {
                return false
            }
        }
    }

    for (const key in lockKeyData.resources) {
        if (key !== undefined) {
            const data = lockKeyData.resources[key]
            if (QUERY_GetTeamResourceMax(TEAM_BLUE, data) === 0) {
                return false
            }
        }
    }

    for (const key in lockKeyData.mobAlliances) {
        if (key !== undefined) {
            const data = lockKeyData.mobAlliances[key]
            if (QUERY_GetTeamResource(TEAM_BLUE, data) === 0) {
                return false
            }
        }
    }

    //If SPECIFIC allies are required, check here. This was the original implementation but I find it overly specific when in reality, any ally increases the players capabilities.
    for (const key in lockKeyData.allies) {
        if (key !== undefined) {
            const data = lockKeyData.allies[key]
            if (QUERY_GetGlobalVariable(data) === 0) {
                return false
            }
        }
    }

    //New functionality to check how many total allies player has vs. the amount the base requires
    if (lockKeyData.alliesRequired > 0) {
        let count = 0
        //checks the global "standard" list of allies defined at the top of this file
        for (const key in LocksKeys.allies) {
            if (key !== undefined) {
                const data = LocksKeys.allies[key]
                if (QUERY_GetGlobalVariable(data) > 0) {
                    count++
                }
            }
        }
        Logi("@@@@ Player has " + count + " out of " + lockKeyData.alliesRequired + " required Allies")
        if (count < lockKeyData.alliesRequired) {
            return false
        }
    }

    if (QUERY_GetTeamResource(TEAM_BLUE, "spawner_cap") < lockKeyData.spawnerCap) {
        return false
    }

    return true
}

const PlayBaseTooToughVO = (villageId, delay) => {
    if (QUERY_GetGlobalVariable("gv_has_played_warning_vo") === 0) {
        const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
        const faction = QUERY_GetFactionNameFromVillageID(villageId)
        if (!IsPlayerStrongEnoughForThisBase(faction, baseSize)) {
            IncrementGlobal("gv_has_played_warning_vo")
            LISTENFOR_LocalTimer({
                snippet: "lt_play_base_vo_too_tough",
                ownerVillageId: villageId,
                waitTime: delay
            })
        }
    }
}

//Listener is in the various base response files
SNIPPET_LocalTimer("lt_play_base_vo_too_tough", (payload) => {
    const closePlayers = FILTER_ByDistance(GetAllPlayers(), GetVillageEntityFromID(payload.ownerVillageId), 400)
    OUTPUT_SendGlobalEventToPlayers("piglin_insufficient_power_level", "PresentationAction", closePlayers)
})

/* eslint-disable @typescript-eslint/no-unused-vars */

// ====================
// ===== BARRACKS =====
// ====================

const _GetBarracksEscalationKey = (villageId, barracksName) => {
    return barracksName + "_" + villageId
}

const SetEscalationValueAndUpdateAllBarracksForVillage = (villageId, barracks, escalationLevel) => {
    for (const tag in barracks) {
        SetEscalationValueAndUpdateBarracksForVillage(villageId, tag, barracks[tag], escalationLevel)
    }
}

const SetEscalationValueAndUpdateBarracksForVillage = (villageId, barrackTag, factionBarracksConfig, escalationLevel, forceUpdate) => {
    const barracksEscalationKey = _GetBarracksEscalationKey(villageId, factionBarracksConfig.name)
    // barracks escalation only goes up
    if (forceUpdate || escalationLevel > QUERY_GetGlobalVariable(barracksEscalationKey)) {
        OUTPUT_SetGlobalVariable(barracksEscalationKey, escalationLevel)

        const barracksEntities = QUERY_GetEntitiesWithTags([barrackTag])
        if (HasEntities(barracksEntities)) {
            const barracksFromFactionEntities = FILTER_ByVillageID(barracksEntities, villageId)
            if (HasEntities(barracksFromFactionEntities)) {
                SetBarracksConfig(barracksFromFactionEntities, factionBarracksConfig)
            }
        }
    }
}

const SetBarracksConfig = (barracksEntities, factionBarracksConfig) => {
    if (!HasEntities(barracksEntities)) {
        return
    }
    const villageId = QUERY_GetVillageIDFromEntity(RandomEntity(barracksEntities)) // TODO: this is a little dangeorus
    let factionSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const currentBarracksEscalationLevel = QUERY_GetGlobalVariable(_GetBarracksEscalationKey(villageId, factionBarracksConfig.name))
    const key = "phase_" + currentBarracksEscalationLevel
    if (factionBarracksConfig[factionSize] === undefined) {
        factionSize = BASE_SIZE_SMALL
    }
    let barracksConfig = undefined
    if (factionBarracksConfig[factionSize][key] !== undefined) {
        barracksConfig = factionBarracksConfig[factionSize][key]
    }
    if (barracksConfig !== undefined) {
        OUTPUT_SetBarracksSpawnTypes(barracksEntities, barracksConfig.loadout)
        OUTPUT_SetBarracksSpawnRate(barracksEntities, barracksConfig.rate)
        OUTPUT_SetBarracksSpawnCap(barracksEntities, barracksConfig.cap)
        OUTPUT_SetBarracksBatchSize(barracksEntities, barracksConfig.batch)
    }
}

const SetEscalationValueAndUpdateAllBarracksForVillageVariation = (villageId, barracks, escalationLevel) => {
    for (const tag in barracks) {
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, tag, barracks[tag], escalationLevel)
    }
}

const SetEscalationValueAndUpdateBarracksForVillageVariation = (villageId, barrackTag, factionBarracksConfig, escalationLevel, forceUpdate) => {
    const barracksEscalationKey = _GetBarracksEscalationKey(villageId, factionBarracksConfig.name)
    // barracks escalation only goes up
    if (forceUpdate || escalationLevel > QUERY_GetGlobalVariable(barracksEscalationKey)) {
        OUTPUT_SetGlobalVariable(barracksEscalationKey, escalationLevel)

        const barracksEntities = QUERY_GetEntitiesWithTags([barrackTag])
        if (HasEntities(barracksEntities)) {
            Logi("Entering " + factionBarracksConfig.name)
            const barracksFromFactionEntities = FILTER_ByVillageID(barracksEntities, villageId)
            if (HasEntities(barracksFromFactionEntities)) {
                SetBarracksConfigForVillageVariation(barracksFromFactionEntities, factionBarracksConfig)
            }
        }
    }
}

const ResetEscalationAndBarracksForVillageVariation = (villageId, barracks, escalationKeys) => {
    if (barracks) {
        SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, barracks, 0, true)
    }
    if (escalationKeys) {
        _ResetBaseEscalation(villageId, escalationKeys)
    }
}

const SetBarracksConfigForVillageVariation = (barracksEntities, factionBarracksConfig) => {
    if (!HasEntities(barracksEntities)) {
        return
    }
    const villageId = QUERY_GetVillageIDFromEntity(RandomEntity(barracksEntities)) // TODO: this is a little dangeorus
    const factionSize = QUERY_GetFactionSizeFromVillageID(villageId)

    const currentBarracksEscalationLevel = QUERY_GetGlobalVariable(_GetBarracksEscalationKey(villageId, factionBarracksConfig.name))
    const key = "phase_" + currentBarracksEscalationLevel
    let villageVariationTag = GetVillageFlavour(villageId)

    if (factionBarracksConfig[factionSize] === undefined) {
        Logw("NO SIZE DATA FOUND for base " + villageId + " of " + QUERY_GetFactionNameFromVillageID(villageId) + " of size " + factionSize + " for barrack type " + factionBarracksConfig.name)
        return
    }
    if (factionBarracksConfig[factionSize][villageVariationTag] === undefined) {
        Logw("NO VARIATION DATA FOUND for base " + villageId + " of size " + factionSize + " of " + QUERY_GetFactionNameFromVillageID(villageId) + " of variation " + villageVariationTag + " for barrack type " + factionBarracksConfig.name)
        if (factionBarracksConfig[factionSize][VILLAGE_VARIATION_DEFAULT] !== undefined) {
            villageVariationTag = VILLAGE_VARIATION_DEFAULT
            Logw("USING DEFAULT CONFIG")
        } else {
            Logw("NO DEFAULT CONFIG FOUND")
            return
        }
    }
    let barracksConfig = undefined
    if (factionBarracksConfig[factionSize][villageVariationTag][key] !== undefined) {
        barracksConfig = factionBarracksConfig[factionSize][villageVariationTag][key]
    }
    if (barracksConfig !== undefined) {
        OUTPUT_SetBarracksSpawnTypes(barracksEntities, barracksConfig.loadout)
        OUTPUT_SetBarracksSpawnRate(barracksEntities, barracksConfig.rate)
        OUTPUT_SetBarracksSpawnCap(barracksEntities, barracksConfig.cap)
        OUTPUT_SetBarracksBatchSize(barracksEntities, barracksConfig.batch)
    }

    Logi("> Setting " + factionBarracksConfig.name + " for villageId " + villageId + " to variation " + villageVariationTag + " in size " + factionSize)
}

// ==========================
// ===== BASE VARIATION =====
// ==========================

const GetVillageCompositionData = (villageId, variationData) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    if (variationData[size] === undefined || variationData[size][flavour] === undefined) {
        Loge(`Could not find village variation data for size '${size} and flavour '${flavour}'`)
        return
    }
    return variationData[size][flavour]
}

const _SpawnUnitsAtTaggedEntityLimited = (villageId, unitsToSpawn, positionEntityTags, maxTaggedPositions, callback = CALLBACK_NONE) => {
    let newUnits = EMPTY_ENTITY_GROUP
    const locations = FILTER_RandomCount(FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), positionEntityTags, []), maxTaggedPositions)
    if (!HasEntities(locations)) return newUnits
    if (Array.isArray(unitsToSpawn)) {
        for (const entry of unitsToSpawn) {
            newUnits = OPER_Append(newUnits, SpawnEntitiesAt(locations, entry.unit, entry.amount, TEAM_ORANGE, villageId))
        }
    } else {
        newUnits = SpawnEntitiesAt(locations, unitsToSpawn.unit, unitsToSpawn.amount, TEAM_ORANGE, villageId)
    }
    if (callback !== CALLBACK_NONE) callback(villageId, newUnits)
    return newUnits
}

const _SpawnUnitsAtTaggedEntity = (villageId, unitsToSpawn, positionEntityTags, callback = CALLBACK_NONE) => {
    let newUnits = EMPTY_ENTITY_GROUP
    const locations = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), positionEntityTags, [])
    if (!HasEntities(locations)) return newUnits
    if (Array.isArray(unitsToSpawn)) {
        for (const entry of unitsToSpawn) {
            newUnits = OPER_Append(newUnits, SpawnEntitiesAt(locations, entry.unit, entry.amount, TEAM_ORANGE, villageId))
        }
    } else {
        newUnits = SpawnEntitiesAt(locations, unitsToSpawn.unit, unitsToSpawn.amount, TEAM_ORANGE, villageId)
    }
    if (callback !== CALLBACK_NONE) callback(villageId, newUnits)
    return newUnits
}

const _SpawnUnitsAtNearestTaggedEntity = (villageId, unitsToSpawn, positionEntityTags, callback = CALLBACK_NONE) => {
    const location = FILTER_ByClosest(FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), positionEntityTags, []), GetClosestPlayer(GetVillageEntityFromID(villageId)), 1)
    if (!HasEntities(locations)) return EMPTY_ENTITY_GROUP
    const newUnits = SpawnEntitiesAt(location, unitsToSpawn.unit, unitsToSpawn.amount, TEAM_ORANGE, villageId)
    if (callback !== CALLBACK_NONE) callback(villageId, newUnits)
    return newUnits
}

const SpawnVillageVariationUnitCompositions = (villageId, data, locationTags, locationCount, variationOverride) => {
    const variation = variationOverride === undefined ? GetVillageFlavour(villageId) : variationOverride
    const selected = data[variation]
    if (selected !== undefined) {
        return _SpawnUnitsAtTaggedEntityLimited(villageId, selected.units, locationTags, locationCount, (_villageId, newUnits) => {
            AddEntitiesToNearestControlGroup(_villageId, newUnits, data.controlGroupTag)
        })
    } else {
        return EMPTY_ENTITY_GROUP
    }
}

/* BBI_TODO: Jesse - refactor this to use SpawnAtPortal
    Call spawn at portal multiple times inside, to distribute unit spawns on either side of the portal
*/
const _SpawnVillageUnitsHelper = (villageId, unitsToSpawn, location) => {
    let newUnits = EMPTY_ENTITY_GROUP
    if (unitsToSpawn === undefined) {
        // Logv(`Could not spawn flavour variation: ${GetVillageFlavour(villageId)} - does not exist (which is fine)`)
        return newUnits
    }

    if (Array.isArray(unitsToSpawn)) {
        for (const entry of unitsToSpawn) {
            newUnits = OPER_Append(newUnits, SpawnEntitiesAt(location, entry.unit, entry.amount, TEAM_ORANGE, villageId))
        }
    } else {
        newUnits = SpawnEntitiesAt(location, unitsToSpawn.unit, unitsToSpawn.amount, TEAM_ORANGE, villageId)
    }

    return newUnits
}

const SpawnVillageUnits = (villageId, unitsToSpawn, location) => {
    return _SpawnVillageUnitsHelper(villageId, unitsToSpawn, location)
}

/* BBI_TODO: Mason - this is an outdated function that still exists because the obstacle faction has not been updated to use the
    correct variation data structure that would work with SpawnVillageUnits (see attackVal.villageComposition or defendVal.villageComposition).
*/
const SpawnVillageVariationUnits = (villageId, data, location, variationOverride) => {
    const variation = variationOverride === undefined ? GetVillageFlavour(villageId) : variationOverride
    const selected = data[variation]
    if (selected !== undefined) {
        return _SpawnVillageUnitsHelper(villageId, selected, location)
    } else {
        return EMPTY_ENTITY_GROUP
    }
}

// ======================
// ===== ESCALATION =====
// ======================

const _GetEscalationGlobalVariableFromEntity = (entity, escalationKey) => {
    return _GetEscalationGlobalVariable(QUERY_GetVillageIDFromEntity(entity), escalationKey)
}

const _GetEscalationGlobalVariable = (villageId, escalationKey) => {
    return "escalation_" + villageId + "_" + escalationKey
}

const _ResetBaseEscalation = (villageId, escalationKeys) => {
    for (const key in escalationKeys) {
        OUTPUT_SetGlobalVariable(_GetEscalationGlobalVariable(villageId, escalationKeys[key]), 0)
    }
}

const IsBaseEscalated = (entityFromVillage, escalationKey) => {
    return QUERY_GetGlobalVariable(_GetEscalationGlobalVariableFromEntity(entityFromVillage, escalationKey))
}

const MarkBaseAsEscalated = (entityFromVillage, escalationKey) => {
    OUTPUT_SetGlobalVariable(_GetEscalationGlobalVariableFromEntity(entityFromVillage, escalationKey), 1)
}

// =======================
// ===== RESET CYCLE =====
// =======================

const _GetResetGlobalVariable = (villageId) => {
    return "reset_" + villageId
}

const ShouldBaseReset = (villageId) => {
    return QUERY_GetGlobalVariable(_GetResetGlobalVariable(villageId))
}

const _MarkBaseAsNeedsReset = (villageId) => {
    OUTPUT_SetGlobalVariable(_GetResetGlobalVariable(villageId), 1)
}

const MarkBaseAsReset = (villageId) => {
    OUTPUT_SetGlobalVariable(_GetResetGlobalVariable(villageId), 0)
}

const _SetupResetCycle = (triggerVolume, villageId) => {
    LISTENFOR_PresenceEntered({
        snippet: "pren_player_engagement_zone_entered",
        ownerVillageId: villageId,
        triggerEntity: triggerVolume,
        threshold: 1 // only care about the first player to enter the village
    })

    LISTENFOR_PresenceExited({
        snippet: "prex_player_engagement_zone_entered",
        ownerVillageId: villageId,
        triggerEntity: triggerVolume,
        threshold: 0 // only care about when all players have left the village
    })

    Logi("Registering reset cycle for village" + villageId)

    LISTENFOR_TimeOfDay({
        snippet: "tod_reset_village",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        timeOfDayNumber: TIME_DAWN,
        payloadInt: villageId
    })

    const villageEntity = GetVillageEntityFromID(villageId)
    LISTENFOR_EntityTimer({
        snippet: "et_village_reescalation",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        entity: villageEntity,
        timerName: VILLAGE_TIMER_REESCALATION
    })
}

SNIPPET_PresenceEntered("pren_player_engagement_zone_entered", (triggerEntity, _count, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    Logi("A player has entered the engagement zone for village " + villageId)

    Logi(`[ESCALATION] Reset the reescalation timer if any!!!`)
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_DeleteEntityTimer(villageEntity, VILLAGE_TIMER_REESCALATION)
})

SNIPPET_PresenceExited("prex_player_engagement_zone_entered", (triggerEntity, _count, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    Logi("All players have exited the engagement zone for village " + villageId)

    const reescalationResetTime = GetVillageVariable(villageId, GV_REESCALATION_RESET_TIME)
    if (reescalationResetTime !== -1) {
        Logi(`[ESCALATION] Launched the timer for re-escalation with value ${reescalationResetTime}!`)
        const villageEntity = GetVillageEntityFromID(villageId)
        OUTPUT_SetEntityTimer(villageEntity, VILLAGE_TIMER_REESCALATION, reescalationResetTime)
    } else {
        Logi(`[ESCALATION] The base DOES NOT FEATURE reescalation time-out!`)
    }
})

const _ResetVillage = (villageId) => {
    Logi(`[ESCALATION] Resetting village!`)

    if (QUERY_IsVillageDestroyed(villageId)) {
        Logi("A vilage is destroyed, so we are removing it from the reset cycle: " + villageId)
        Once()
        return
    }

    if (QUERY_VillagePlayerPresenceCount(villageId) === 0) {
        Logi("A village " + villageId + " has been scheduled to reset.")
        OUTPUT_CullPopCappedEntitiesInVillage(villageId)
        _MarkBaseAsNeedsReset(villageId)
    } else {
        Logi("Village " + villageId + " has been skipped for reset due to player activity!")
    }
}

SNIPPET_EntityTimer("et_village_reescalation", (villageEntity, _payload) => {
    _ResetVillage(QUERY_GetVillageIDFromEntity(villageEntity))
})

SNIPPET_TimeOfDay("tod_reset_village", (payload) => {
    _ResetVillage(payload.int)
})

// =======================
// ===== BASE SETUP ======
// =======================

const AREA_TRIGGER_VOLUME_ID = "badger:spatial_trigger_faction_gameplay_zone"

const TV_TYPE = {
    BOUNDS: 1,
    AREA: 2
}

const TV_EVENT = {
    ENTER: 101,
    EXIT: 102
}

const SetupPiglinBase = (villageId, baseData) => {
    // note: should be called on *village building finished*
    Logi("SetupPiglinBase called")
    const villageEntity = GetVillageEntityFromID(villageId)
    const horde = QUERY_GetFactionNameFromVillageID(villageId)
    const size = QUERY_GetFactionSizeFromVillageID(villageId)

    const data = baseData[size]
    if (data === undefined) {
        Logv(`Skipping SetupPiglinBase for unsupported size: ${size} and horde: ${horde} (another snippet may be handling this)`)
        return
    }

    if (GetVillageVariable(villageId, "is_base_setup") > 0) {
        Loge(`SetupPiglinBase() but base vID: ${villageId} for horde: ${horde} and size: ${size} was already setup!`)
        return
    }
    SetVillageVariable(villageId, "is_base_setup", 1)

    const triggerVolumes = [] // Contains objects of { tv: entity, type: string, tagset: object }

    const _getOrAddTriggerVolume = (type, tagset) => {
        let triggerVolumeEntry = triggerVolumes.find((element) => element.tagset === tagset && element.type === type)
        if (triggerVolumeEntry === undefined) {
            // create new trigger volume
            let triggerVolumeID = null
            if (type === TV_TYPE.BOUNDS) {
                triggerVolumeID = data.boundsTV
            } else if (type === TV_TYPE.AREA) {
                triggerVolumeID = AREA_TRIGGER_VOLUME_ID
            } else {
                Loge(`Unknown trigger volume type ${type}`)
                return undefined
            }
            // trigger volumes are now spawned on the village entity itself to support outposts too (with no core portal structure).
            const triggerVolume = SpawnTriggerVolumeWithMultipleTagsets(villageEntity, villageEntity, triggerVolumeID, TEAM_ORANGE, villageId, true, tagset)
            triggerVolumeEntry = { entity: triggerVolume, type: type, tagset: tagset }
            triggerVolumes.push(triggerVolumeEntry)
        }
        return triggerVolumeEntry.entity
    }

    // DESIGNER SNIPPETS
    for (const snippetEntry of data.snippets) {
        if (snippetEntry.gv !== undefined) {
            if (QUERY_GetGlobalVariable(snippetEntry.gv) === 0) {
                Logv(`Snippet entry: ${snippetEntry.snippet} was ignored due to disabled global variable: ${snippetEntry.gv}`)
                continue
            }
        }

        const triggerVolume = _getOrAddTriggerVolume(snippetEntry.type, snippetEntry.tagset)

        if (snippetEntry.event === TV_EVENT.ENTER) {
            LISTENFOR_SpatialPartitionEntered({
                snippet: snippetEntry.snippet,
                ownerVillageId: villageId,
                triggerEntity: triggerVolume
            })
        } else if (snippetEntry.event === TV_EVENT.EXIT) {
            LISTENFOR_SpatialPartitionExited({
                snippet: snippetEntry.snippet,
                ownerVillageId: villageId,
                triggerEntity: triggerVolume
            })
        } else {
            Loge(`Unknown trigger volume event type (not enter/exit) for ${snippetEntry.snippet}`)
        }
    }

    // RE-ESCALATION
    if (data.reescalation) {
        if (data.reescalationResetTime !== undefined) {
            Logi(`[ESCALATION] Reescalation time is defined! Setting value ${data.reescalationResetTime} for village ${villageId}`)
            SetVillageVariable(villageId, GV_REESCALATION_RESET_TIME, data.reescalationResetTime)
        } else {
            Logi(`[ESCALATION] Reescalation time is NOT defined! No reescalation timer for ${villageId}`)
            SetVillageVariable(villageId, GV_REESCALATION_RESET_TIME, -1)
        }

        // TODO (mgordon) This sets up a 'gameplay area' around the village that is shared between all bases.
        //  This might be something that we want to automatically set up through data and in C++ like we do with the village bounds.
        //  That would make accessing this bounds easy and clean for any village that opted into having it (piglin bases in this case)
        const triggerVolume = _getOrAddTriggerVolume(TV_TYPE.AREA, TAGSET_PLAYER)
        _SetupResetCycle(triggerVolume, villageId)

        // designer snippet
        LISTENFOR_PresenceEntered({
            snippet: baseData.reescalationSnippet,
            ownerVillageId: villageId,
            triggerEntity: triggerVolume,
            threshold: 1
        })
    }

    Logi(`Finished setting up piglin base vID: ${villageId} for horde: ${horde} and size: ${size}`)
}

// =====================
// ===== ENGINEERS =====
// =====================

const SpawnEngineersIfThereAreNone = (villageId, amount = 1) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const existingEngineers = FILTER_ByTagFilter(villageEntities, ["engineer"], [])
    if (HasEntities(existingEngineers)) {
        return RandomEntity(existingEngineers)
    }
    const faction = QUERY_GetFactionNameFromVillageID(villageId)
    const engineers = SpawnAtPortal(villageId, PIGLIN_ARCHETYPE.ENGINEER, amount, faction)
    return engineers
}

const SetupRespawningEngineers = (villageId, count, respawnTime) => {
    // Safeguards
    const RESPAWNING_ENG_KEY = "respawning_engineers_enabled"
    if (GetVillageVariable(villageId, RESPAWNING_ENG_KEY) > 0) {
        Logw("You cannot setup respawning engineers again for village: " + villageId)
        return
    }
    SetVillageVariable(villageId, RESPAWNING_ENG_KEY, 1)

    Logv("Base " + villageId + " setup with " + count + " respawning engineers")

    // Spawn Engineers
    _DelayedEngineerSpawn(villageId, count, respawnTime)
}

SNIPPET_EntitiesAmountDestroyed("ed_engineer_respawn", (payload) => {
    // Respawn the dead engineer
    _DelayedEngineerSpawn(payload.ownerVillageId, 1, payload.float)
})

const _DelayedEngineerSpawn = (villageId, count, respawnTime) => {
    Logv(villageId)
    Logv(respawnTime)
    Logv(count)

    LISTENFOR_LocalTimer({
        snippet: "lt_engineer_delayed_spawn",
        ownerVillageId: villageId,
        waitTime: respawnTime,
        payloadInt: count,
        payloadFloat: respawnTime
    })
}

SNIPPET_LocalTimer("lt_engineer_delayed_spawn", (payload) => {
    const villageId = payload.ownerVillageId
    const respawnTime = payload.float
    const count = payload.int
    const portal = GetVillagePortal(villageId)

    if (!HasEntities(portal)) {
        Logw("Base: " + villageId + " has no portal to spawn engineers. This base may get stuck trying to build ticketed buildings!")
        return
    }

    const engineers = SpawnAtPortal(villageId, "badger:piglin_engineer", count)
    OUTPUT_AddTag(engineers, "portal_spawned_engineer")

    // respawn everytime an engineer dies
    LISTENFOR_EntitiesAmountDestroyed({
        snippet: "ed_engineer_respawn",
        ownerVillageId: villageId,
        entities: engineers,
        amount: 1,
        payloadFloat: respawnTime
    })
})

// ====================
// ===== SPAWNERS =====
// ====================

const SpawnAtPortal = (villageId, spawnName, count, piglinAppearanceOverride) => {
    const spawnLocations = GetAllVillagePortalSpawnLocation(villageId)
    if (!HasEntities(spawnLocations)) {
        Loge("No valid portal spawn points was found, please check the portal NBT")
        return EMPTY_ENTITY_GROUP
    }
    if (count < 1) {
        return EMPTY_ENTITY_GROUP
    }
    const amountOfSpawnLocation = QUERY_GetEntitiesCount(spawnLocations)
    let spawnedEntities = EMPTY_ENTITY_GROUP
    if (count > 1 && amountOfSpawnLocation > 1) {
        const spawnLocation1 = FILTER_RandomCount(spawnLocations, 1)
        const spawnLocation2 = OPER_Difference(spawnLocations, spawnLocation1)
        const group1Amount = Math.floor(count / 2)
        Logi(" Portal spawn count = " + count + " with 1st group size " + group1Amount)
        const entityGroup1 = SpawnEntitiesAt(spawnLocation1, spawnName, group1Amount, TEAM_ORANGE, villageId, piglinAppearanceOverride)
        const entityGroup2 = SpawnEntitiesAt(spawnLocation2, spawnName, count - group1Amount, TEAM_ORANGE, villageId, piglinAppearanceOverride)
        spawnedEntities = OPER_Union(entityGroup1, entityGroup2)
    } else {
        spawnedEntities = SpawnEntitiesAt(RandomEntity(spawnLocations), spawnName, count, TEAM_ORANGE, villageId, piglinAppearanceOverride)
    }

    const portal = GetVillagePortal(villageId)
    OUTPUT_TriggerPresentationEvent(portal, "on_batch_spawn")
    return spawnedEntities
}

const SpawnAtPortalInTheDirectionOfThePlayer = (villageId, spawnName, count, piglinAppearanceOverride) => {
    //Only elite units should attempt to spawn in the direction of the player
    if (spawnName !== PIGLIN_ARCHETYPE.PIGMADILO && spawnName !== PIGLIN_ARCHETYPE.LAVA_LAUNCHER && spawnName !== PIGLIN_ARCHETYPE.PORTAL_GUARD) {
        return SpawnAtPortal(villageId, spawnName, count, piglinAppearanceOverride)
    }
    const spawnLocations = GetAllVillagePortalSpawnLocation(villageId)

    if (!HasEntities(spawnLocations)) {
        Loge("No valid portal spawn points was found, please check the portal NBT")
        return EMPTY_ENTITY_GROUP
    }

    if (count < 1) {
        return EMPTY_ENTITY_GROUP
    }

    const amountOfSpawnLocation = QUERY_GetEntitiesCount(spawnLocations)
    const portal = GetVillagePortal(villageId)
    const playerMobs = FILTER_ByDistance(QUERY_GetEntitiesWithTagFilter(["mob"], ["piglin"]), portal, 40)
    let spawnedEntities = EMPTY_ENTITY_GROUP
    if (HasEntities(playerMobs)) {
        const onePlayerMob = RandomEntity(playerMobs)
        const spawnLocation1 = FILTER_ByClosest(spawnLocations, onePlayerMob, 1)
        if (amountOfSpawnLocation > 1) {
            //Check if the portal is being attacked from two sides and if so, use SpawnAtPortal instead
            const spawnLocation2 = OPER_Difference(spawnLocations, spawnLocation1)
            const playerMobsNearSpawn1 = FILTER_ByDistance(playerMobs, spawnLocation1, 3)
            const playerMobsNearSpawn2 = FILTER_ByDistance(playerMobs, spawnLocation2, 3)
            if (HasEntities(playerMobsNearSpawn1) && HasEntities(playerMobsNearSpawn2)) {
                return SpawnAtPortal(villageId, spawnName, count, piglinAppearanceOverride)
            }
        }
        spawnedEntities = SpawnEntitiesAt(spawnLocation1, spawnName, count, TEAM_ORANGE, villageId, piglinAppearanceOverride)
    } else {
        return SpawnAtPortal(villageId, spawnName, count, piglinAppearanceOverride)
    }
    OUTPUT_TriggerPresentationEvent(portal, "on_batch_spawn")
    return spawnedEntities
}

const SpawnAtPortalInTheDirectionOfTheHomestead = (villageId, spawnName, count, homesteadFactionName) => {
    const spawnLocations = GetAllVillagePortalSpawnLocation(villageId)
    if (!HasEntities(spawnLocations)) {
        Loge("No valid portal spawn points was found, please check the portal NBT")
        return EMPTY_ENTITY_GROUP
    }

    if (count < 1) {
        return EMPTY_ENTITY_GROUP
    }

    const amountOfSpawnLocation = QUERY_GetEntitiesCount(spawnLocations)
    const portal = GetVillagePortal(villageId)

    const aliveVillages = QUERY_GetAllAliveVillages()

    const mobAllianceVillage = FILTER_ByFactionName(aliveVillages, [homesteadFactionName])
    let spawnedEntities = EMPTY_ENTITY_GROUP
    if (HasEntities(mobAllianceVillage)) {
        const spawnLocation1 = FILTER_ByClosest(spawnLocations, mobAllianceVillage, 1)
        spawnedEntities = SpawnEntitiesAt(spawnLocation1, spawnName, count, TEAM_ORANGE, villageId)
    } else {
        return SpawnAtPortal(villageId, spawnName, count)
    }
    OUTPUT_TriggerPresentationEvent(portal, "on_batch_spawn")
    return spawnedEntities
}

const SpawnBossAtPortal = (villageId, spawnName) => {
    // Note: we're not doing the check with GetAllVillagePortalSpawnLocation(villageId) as that's for the normal spawn locator which isn't necessary for this function
    const portal = GetVillagePortal(villageId)
    if (!HasEntities(portal)) {
        Loge(`No valid portal could be found for village ${villageId}`)
        return EMPTY_ENTITY_GROUP
    }
    const spawnPosition = QUERY_GetEntitiesWithInstanceName(INSTANCE_BOSS_PORTAL_SPAWN_LOCATION)
    const spawnedEntities = SpawnEntitiesAt(spawnPosition, spawnName, 1, TEAM_ORANGE, villageId)
    const spawnCount = QUERY_GetEntitiesCount(spawnedEntities)
    if (spawnCount !== 1) {
        // Note: if nothing failed to spawn or more than 1 we should log something as that's indicative the portal probably isn't authored correctly.
        Loge(`Could not spawn 1 boss of type ${spawnName} for base ${villageId}. Spawned ${spawnCount} instead!`)
    }
    OUTPUT_TriggerPresentationEvent(portal, "on_batch_spawn")
    return spawnedEntities
}

const DeclareRecurringSpawnerSnippets = (uniqueSpawnerId, entityToSpawnId, recurringTime, moveLocationTag = "", moveToEntityInsteadOfPosition = false, moveDistanceFromTarget = 1, recurringSpawnerCallback = null, piglinAppearanceOverride = undefined) => {
    if (moveLocationTag === undefined || moveLocationTag === null) {
        moveLocationTag = ""
    }
    if (moveToEntityInsteadOfPosition === undefined || moveToEntityInsteadOfPosition === null) {
        moveToEntityInsteadOfPosition = false
    }
    if (moveDistanceFromTarget === undefined || moveDistanceFromTarget === null) {
        moveDistanceFromTarget = 1
    }

    SNIPPET_EntityTimer("et_recurring_spawner_" + uniqueSpawnerId, (spawnLocationEntity, payload) => {
        const spawnLocationEg = spawnLocationEntity

        const villageId = QUERY_GetVillageIDFromEntity(spawnLocationEntity)

        const entityEg = SpawnEntitiesAt(spawnLocationEntity, entityToSpawnId, 1, TEAM_ORANGE, villageId, piglinAppearanceOverride)

        if (moveLocationTag !== "") {
            const moveLocationEg = QUERY_GetEntitiesWithTags([moveLocationTag + villageId]) // TODO remove villageId?
            if (QUERY_GetEntitiesCount(moveLocationEg) > 0) {
                if (moveToEntityInsteadOfPosition) {
                    OUTPUT_MoveAttackEntity(entityEg, RandomEntity(moveLocationEg), CALLBACK_NONE)
                } else {
                    OUTPUT_MoveAttackPosition(entityEg, RandomEntity(moveLocationEg), moveDistanceFromTarget, CALLBACK_NONE)
                }
            }
        }

        LISTENFOR_EntitiesAmountDestroyed({
            snippet: "ead_recurring_spawned_destroyed_" + uniqueSpawnerId,
            ownerVillageId: villageId,
            entities: entityEg,
            payloadEntities: spawnLocationEg
        })

        if (recurringSpawnerCallback !== null) {
            recurringSpawnerCallback(entityEg, villageId)
        }
    })

    SNIPPET_EntitiesAmountDestroyed("ead_recurring_spawned_destroyed_" + uniqueSpawnerId, (payload) => {
        OUTPUT_SetEntityTimer(payload.entities, uniqueSpawnerId, recurringTime)
        Once()
    })
}

const StartRecurringSpawner = (uniqueSpawnerId, spawnLocationEntity, initialTimer) => {
    initialTimer = Math.max(1, initialTimer)

    OUTPUT_SetEntityTimer(spawnLocationEntity, uniqueSpawnerId, initialTimer)

    LISTENFOR_EntityTimer({
        snippet: "et_recurring_spawner_" + uniqueSpawnerId,
        ownerVillageId: QUERY_GetVillageIDFromEntity(spawnLocationEntity),
        entity: spawnLocationEntity,
        timerName: uniqueSpawnerId
    })
}

// ===========================
// ===== OUTPOST HELPERS =====
// ===========================

const GetOutpostDifficultyFromPhase = (faction) => {
    const difficulty = QUERY_GetGlobalVariable("gv_outpost_difficulty_" + faction)
    return difficulty <= 0 ? 1 : difficulty
}

const IncreaseOutpostDifficultyForFaction = (faction) => {
    const newValue = GetOutpostDifficultyFromPhase(faction) + 1
    OUTPUT_SetGlobalVariable("gv_outpost_difficulty_" + faction, newValue)
}

const SetupMobCages = (villageId, cageTag, mobArchetype = "", mobAmount = 15) => {
    if (!mobArchetype) {
        //Have villageId in case we do somesmart filtering later to pick victim
        const possibleVictims = [MOB_ARCHETYPE.VILLAGERS]

        //Check if specific mobs have been attacked
        if (MobAllianceOccupation.IsEntered(MOB_ALLIANCE_NAME_ZOMBIE)) {
            possibleVictims.push(MOB_ARCHETYPE.ZOMBIE)
        }
        if (MobAllianceOccupation.IsEntered(MOB_ALLIANCE_NAME_SKELETON)) {
            possibleVictims.push(MOB_ARCHETYPE.SKELETON)
        }
        if (MobAllianceOccupation.IsEntered(MOB_ALLIANCE_NAME_CREEPER)) {
            possibleVictims.push(MOB_ARCHETYPE.CREEPER)
        }
        if (MobAllianceOccupation.IsEntered(MOB_ALLIANCE_NAME_SPIDER)) {
            possibleVictims.push(MOB_ARCHETYPE.SPIDER)
        }
        possibleVictims.push(ChooseFromArray(MOB_ARCHETYPE.ANIMALS))
        mobArchetype = possibleVictims[QUERY_RandomNumber(0, possibleVictims.length - 1)]
    }

    LISTENFOR_BuildingComplete({
        snippet: "bc_cage_built",
        ownerVillageId: villageId,
        includeTags: [cageTag],
        villageId: villageId,
        payloadString: mobArchetype,
        payloadInt: mobAmount
    })

    LISTENFOR_EntitySpawned({
        snippet: "es_caged_mobs_spawned",
        ownerVillageId: villageId,
        includeTags: ["caged_mob"],
        villageId: villageId,
        payloadString: mobArchetype
    })

    LISTENFOR_VillageDestroyed({
        snippet: "vd_cage_destroy",
        ownerVillageId: villageId,
        villageId: villageId,
        payloadString: cageTag
    })

    LISTENFOR_PlayerInteracted({
        snippet: "pi_cage_opened",
        ownerVillageId: villageId,
        includeTags: ["mob_alliance_mob_cage"],
        villageId: villageId
    })
}

//Setup cages
SNIPPET_BuildingComplete("bc_cage_built", (cage, payload) => {
    const victimArchetype = payload.string
    const mobAmount = payload.int

    OUTPUT_SetTeam(cage, TEAM_BLUE)
    OUTPUT_SetBarracksSpawnTypes(cage, [victimArchetype])
    OUTPUT_SetBarracksSpawnCap(cage, mobAmount)

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_raiding_party_cage",
        ownerVillageId: payload.ownerVillageId,
        entities: cage,
        villageId: payload.ownerVillageId,
        payloadInt: mobAmount,
        payloadString: victimArchetype,
        despawned: false
    })
})

SNIPPET_EntitySpawned("es_caged_mobs_spawned", (entitySpawned, payload) => {
    const victimArchetype = payload.string
    let behavior = ""
    switch (victimArchetype) {
        case MOB_ARCHETYPE.VILLAGERS:
            behavior = VILLAGE_BEHAVIOR.villager.heavyScared
            break
        case MOB_ARCHETYPE.ZOMBIE:
            behavior = MOB_BEHAVIOUR_DICTIONARY.zombie.caged
            break
        case MOB_ARCHETYPE.SKELETON:
            behavior = MOB_BEHAVIOUR_DICTIONARY.skeleton.caged
            break
        case MOB_ARCHETYPE.CREEPER:
            behavior = MOB_BEHAVIOUR_DICTIONARY.creeper.caged
            break
        case MOB_ARCHETYPE.SPIDER:
            behavior = MOB_BEHAVIOUR_DICTIONARY.spider.caged
            break
        case MOB_ARCHETYPE.WITCH:
            behavior = MOB_BEHAVIOUR_DICTIONARY.witch.caged
            break
    }
    if (behavior !== "") {
        OUTPUT_SetBehavior(entitySpawned, behavior)
    }

    OUTPUT_AddTag(entitySpawned, "donotattack")
    OUTPUT_RemoveTag(entitySpawned, "luredirect")
})

SNIPPET_PlayerInteracted("pi_cage_opened", (_playerEntity, interactedEntity, payload) => {
    OUTPUT_TriggerPresentationEvent(interactedEntity, "open_gate")
    OUTPUT_SetInteractionState(interactedEntity, false)
    OUTPUT_DestroyEntities(interactedEntity)
})

const HandleFreeingMobsFromCagesAfterDestroyingVillage = (villageId) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
    const cagedVillagers = FILTER_ByTagFilter(villageEntities, ["caged_mob", "villager"], ["witch"])
    const cagedMobs = FILTER_ByTagFilter(villageEntities, ["caged_mob", "allied_mob"], ["witch"])
    const cagedWitches = FILTER_ByTagFilter(villageEntities, ["caged_mob", "witch"], [])

    if (HasEntities(cagedVillagers)) {
        OUTPUT_SetBehavior(cagedVillagers, VILLAGE_BEHAVIOR.villager.cheer)
        OUTPUT_RemoveTag(cagedVillagers, "donotattack")
        OUTPUT_RemoveTag(cagedVillagers, "caged_mob")
    }
    if (HasEntities(cagedMobs)) {
        const oneCagedMob = RandomEntity(cagedMobs)
        let mobAllianceData = ""
        if (QUERY_HasTags(oneCagedMob, ["zombie"])) {
            mobAllianceData = GetMobAllianceData("zombie")
        } else if (QUERY_HasTags(oneCagedMob, ["creeper"])) {
            mobAllianceData = GetMobAllianceData("creeper")
        } else if (QUERY_HasTags(oneCagedMob, ["skeleton"])) {
            mobAllianceData = GetMobAllianceData("skeleton")
        } else {
            mobAllianceData = GetMobAllianceData("spider")
        }

        if (mobAllianceData !== "") {
            OUTPUT_AddTag(cagedMobs, "luredirect")
            SelectMobBehaviourSet(cagedMobs, mobAllianceData.id)
            TriggerCelebration(GetClosestPlayer(oneCagedMob), CELEBRATION_NAMES.MOBS)
        }
        OUTPUT_RemoveTag(cagedMobs, "donotattack")
        OUTPUT_RemoveTag(cagedMobs, "caged_mob")
    }

    if (HasEntities(cagedWitches)) {
        OUTPUT_RemoveTag(cagedWitches, "donotattack")
        OUTPUT_RemoveTag(cagedWitches, "caged_mob")
        //Enable luring the witches only if the player has unlocked them
        if (QUERY_GetGlobalVariable(witchUnlock.global) > 0) {
            OUTPUT_AddTag(cagedWitches, "luredirect")
            OUTPUT_SetBehavior(cagedWitches, MOB_BEHAVIOUR_DICTIONARY.witch.act2)
            TriggerCelebration(GetClosestPlayer(RandomEntity(cagedWitches)), CELEBRATION_NAMES.MOBS)
        } else {
            OUTPUT_SetBehavior(cagedWitches, MOB_BEHAVIOUR_DICTIONARY.witch.default)
        }
    }
}

SNIPPET_NonPopCappedEntityDestroyed("ed_raiding_party_cage", (cage, payload) => {
    const cagedMob = QUERY_GetEntitiesWithTags(["caged_mob"])
    const mobAmount = payload.int
    const closeCagedMobs = FILTER_ByClosest(cagedMob, cage, mobAmount)
    const victimArchetype = payload.string
    const player = GetClosestPlayer(cage)
    let mobAllianceData = ""

    OUTPUT_RemoveTag(closeCagedMobs, "donotattack")
    OUTPUT_RemoveTag(closeCagedMobs, "caged_mob")

    const villageEntities = QUERY_GetEntitiesOwnedByVillage(payload.ownerVillageId)
    const piglins = FILTER_ByTagFilter(villageEntities, ["piglin"], [])
    switch (victimArchetype) {
        case MOB_ARCHETYPE.VILLAGERS:
            if (QUERY_GetEntitiesCount(piglins) > 0) {
                OUTPUT_SetBehavior(closeCagedMobs, VILLAGE_BEHAVIOR.villager.scared)
                OUTPUT_ApplyStatusEffectWithSource(closeCagedMobs, RandomEntity(piglins), "feared", 40)
            } else {
                OUTPUT_SetBehavior(closeCagedMobs, VILLAGE_BEHAVIOR.villager.cheer)
            }
            break
        case MOB_ARCHETYPE.ZOMBIE:
            mobAllianceData = GetMobAllianceData("zombie")
            break
        case MOB_ARCHETYPE.SKELETON:
            mobAllianceData = GetMobAllianceData("skeleton")
            break
        case MOB_ARCHETYPE.CREEPER:
            mobAllianceData = GetMobAllianceData("creeper")
            break
        case MOB_ARCHETYPE.SPIDER:
            mobAllianceData = GetMobAllianceData("spider")
            break
        case MOB_ARCHETYPE.WITCH:
            OUTPUT_SetBehavior(closeCagedMobs, MOB_BEHAVIOUR_DICTIONARY.witch.default)
            OUTPUT_RemoveTag(closeCagedMobs, "donotattack")
            if (QUERY_GetGlobalVariable(witchUnlock.global) > 0) {
                OUTPUT_AddTag(closeCagedMobs, "luredirect")
            }
            break
        default:
            if (QUERY_GetEntitiesCount(piglins) > 0) {
                OUTPUT_ApplyStatusEffectWithSource(closeCagedMobs, RandomEntity(piglins), "feared", 200)
            }
            break
    }

    if (mobAllianceData !== "") {
        OUTPUT_AddTag(closeCagedMobs, "luredirect")
        SelectMobBehaviourSet(closeCagedMobs, mobAllianceData.id)
        TriggerCelebration(player, CELEBRATION_NAMES.CAGED_MOBS)
    }
})

SNIPPET_VillageDestroyed("vd_cage_destroy", (villageId, _payload) => {
    // note: cage cleanup is handled by village heart destruction
    HandleFreeingMobsFromCagesAfterDestroyingVillage(villageId)
})

// =================
// ===== SIZES =====
// =================

const IsSmall = (baseSize) => {
    return baseSize === BASE_SIZE_SMALL
}

const IsSmallOrGreater = (baseSize) => {
    return IsSmall(baseSize) || IsMediumOrGreater(baseSize)
}

const IsMedium = (baseSize) => {
    return baseSize === BASE_SIZE_MEDIUM
}

const IsMediumOrGreater = (baseSize) => {
    return IsMedium(baseSize) || IsLargeOrGreater(baseSize)
}

const IsLarge = (baseSize) => {
    return baseSize === BASE_SIZE_LARGE
}

const IsBoss = (baseSize) => {
    return baseSize === BASE_SIZE_BOSS
}

const IsLargeOrGreater = (baseSize) => {
    return IsLarge(baseSize) || IsBoss(baseSize)
}

const IsVanguard = (baseSize) => {
    return baseSize === BASE_SIZE_VANGUARD
}

const IsOutpost = (baseSize) => {
    return baseSize === BASE_SIZE_OUTPOST
}

// only works in an invasion context!
const IsRoamingSize = (baseSize) => {
    return IsVanguard(baseSize) || IsOutpost(baseSize)
}

// only works in an invasion context!
const IsFOBSize = (baseSize) => {
    return baseSize === BASE_SIZE_FOB_SMALL || baseSize === BASE_SIZE_FOB_MEDIUM || baseSize === BASE_SIZE_FOB_LARGE
}

// =====================
// ===== OBJECTIVE =====
// =====================

const IsStructureDestructionBase = (villageId) => {
    return QUERY_GetVillageObjective(villageId) === VILLAGE_VARIATION_STRUCTURE_DESTRUCTION
}

const IsPiglinRaidingParty = (villageId) => {
    const returnValue = QUERY_GetVillageObjective(villageId) === VILLAGE_VARIATION_RAIDING_PARTY
    return returnValue
}

const SetupRaidingPartyHorn = (villageId) => {
    LISTENFOR_PlayerEnteredVillage({
        snippet: "pev_raiding_party_horn",
        ownerVillageId: villageId,
        villageId: villageId,
        threshold: 1
    })
}

SNIPPET_PlayerEnteredVillage("pev_raiding_party_horn", (villageId, _playerCount, payload) => {
    Logi("~~~~~~ pev_raiding_party_horn ~~~~~")
    OUTPUT_SendPositionalAudio("BAE_mus_stinger_village_attack_wave_first", GetVillageEntityFromID(villageId))
    OUTPUT_TriggerPresentationEvent(GetVillageEntityFromID(villageId), "on_piglin_horn")
    Once()
})
// =====================
// ===== BASE DATA =====
// =====================

const GetObstacleBasesDestroyed = () => {
    return QUERY_GetGlobalVariable("obstacle_bases_destroyed")
}

const GetDefendBasesDestroyed = () => {
    return QUERY_GetGlobalVariable("defend_bases_destroyed")
}

const GetAttackBasesDestroyed = () => {
    return QUERY_GetGlobalVariable("gv_attack_faction_bases_destroyed")
}

const GetFrostBasesDestroyed = () => {
    return QUERY_GetGlobalVariable("frost_bases_destroyed")
}

const IsBossVillage = (villageId) => {
    return QUERY_GetFactionSizeFromVillageID(villageId) === BASE_SIZE_BOSS
}

const _GetEscalationGlobalVariableByID = (id, escalationKey) => {
    return "escalation_" + id + "_" + escalationKey
}

const MarkVillageAsEscalatedById = (id, escalationKey) => {
    const escalationGlobalVariable = _GetEscalationGlobalVariableByID(id, escalationKey)
    OUTPUT_SetGlobalVariable(escalationGlobalVariable, 1)
}
const CheckIfVillageIDIsEscalated = (id, escalationKey) => {
    const escalationGlobalVariable = _GetEscalationGlobalVariableByID(id, escalationKey)
    return QUERY_GetGlobalVariable(escalationGlobalVariable)
}
// ==========================
// ===== BASE BEHAVIOUR =====
// ==========================

const GatherNearestUnitsAndSendToLocation = (unitTags, tagsToExclude, villageId, targetEntity, percentage, tagToAdd = "", tagToRemoveFromUnusedGatheredUnits = "", minUnits = 1, follow = false, callback = CALLBACK_NONE) => {
    if (typeof tagToAdd !== "string" || !HasEntities(targetEntity)) {
        return EMPTY_ENTITY_GROUP
    }

    unitTags.forEach((element) => {
        if (typeof element !== "string") {
            return EMPTY_ENTITY_GROUP
        }
    })

    tagsToExclude.forEach((element) => {
        if (typeof element !== "string") {
            return EMPTY_ENTITY_GROUP
        }
    })

    if (!QUERY_IsVillageDestroyed(villageId)) {
        const squad = FILTER_ByVillageID(QUERY_GetEntitiesWithTagFilter(unitTags, tagsToExclude), villageId) //Units which aren't currently engaged in other tactics
        const squadCount = QUERY_GetEntitiesCount(squad)
        const targetSquadCount = Math.max(Math.round((squadCount * percentage) / 100.0), minUnits)
        const numOfPiglins = Math.min(targetSquadCount, squadCount)
        const filteredSquad = FILTER_ByClosest(squad, targetEntity, numOfPiglins)
        Logi("Sending " + QUERY_GetEntitiesCount(filteredSquad) + " units out of " + QUERY_GetEntitiesCount(squad))

        //If tag is valid, add
        if (tagToAdd !== "") {
            OUTPUT_AddTag(filteredSquad, tagToAdd)
        }

        if (tagToRemoveFromUnusedGatheredUnits !== "") {
            const unusedPiglins = OPER_Difference(squad, filteredSquad)
            OUTPUT_RemoveTag(unusedPiglins, tagToRemoveFromUnusedGatheredUnits)
        }

        if (!follow) {
            OUTPUT_MoveAttackPosition(filteredSquad, targetEntity, 10, callback)
        } else {
            OUTPUT_MoveAttackEntity(filteredSquad, targetEntity, callback)
        }
        return filteredSquad
    }
}

const IsPiglinFactionDefeated = (factionName) => {
    Logi("IsPiglinFactionDefeated IsPiglinFactionDefeated")
    const allPortalBases = GetAllVillages(factionName, BASE_SIZE_ALL_PORTALS)
    if (!HasEntities(allPortalBases)) {
        return true
    }
}

const GetPlayerOrMobCloseToPortal = (portal) => {
    //check if player or mobs are closer targets rather than just using the portal
    const player = GetClosestPlayer(portal)
    const playerMobs = FILTER_ByClosest(QUERY_GetEntitiesWithTagFilter(["mob"], ["piglin"]), portal, 1)
    const potentialTargets = OPER_Union(player, playerMobs)
    if (HasEntities(potentialTargets)) {
        return FILTER_ByClosest(potentialTargets, portal, 1)
    } else {
        return portal
    }
}

const SetPortalInvulnerable = (villageId, isInvulnerable) => {
    const portal = GetVillagePortal(villageId)
    if (HasEntities(portal)) {
        OUTPUT_SetInvulnerable(portal, isInvulnerable)
        if (isInvulnerable) {
            OUTPUT_AddVisualState(portal, "portal_invulnerable")
            OUTPUT_ApplyBuff(portal, "badger:buff_portal_invulnerable")
            OUTPUT_AddTag(portal, TAG_DO_NOT_ATTACK)
        } else {
            OUTPUT_RemoveVisualState(portal, "portal_invulnerable")
            OUTPUT_RemoveBuff(portal, "badger:buff_portal_invulnerable")
            OUTPUT_RemoveTag(portal, TAG_DO_NOT_ATTACK)
        }
    }
}

const SetupPortalInvulnerabilityVO = (villageId) => {
    const villagePortal = GetVillagePortal(villageId)
    const factionName = QUERY_GetFactionNameFromVillageID(villageId)
    let presentationVO = "piglin_portal_invulnerable_defense"

    if (factionName === FACTION_NAME_ATTACK) {
        return //exit out if an attack horde base
    } else if (factionName === FACTION_NAME_OBSTACLE) {
        presentationVO = "piglin_portal_invulnerable_obstacle"
    } else if (factionName === FACTION_NAME_FROST) {
        presentationVO = "piglin_portal_invulnerable_frost"
    }

    const invulnerabilityVOTrigger = SpawnTriggerVolume(villagePortal, villagePortal, "badger:spatial_trigger_invulnerability_vo", TEAM_WILD, villageId, true, TAG_PLAYER, [], ALLIANCE_FRIENDLY)
    //const invulnerabilityVOTrigger = SpawnTriggerVolumeWithMultipleTagsets(villagePortal, villagePortal, "badger:spatial_trigger_invulnerability_vo", TEAM_WILD, villageId, true, TAGSET_PLAYER_OR_MOB)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_invulnerability_vo_tv",
        ownerVillageId: villageId,
        triggerEntity: invulnerabilityVOTrigger,
        payloadString: presentationVO
    })
}

SNIPPET_SpatialPartitionEntered("spe_invulnerability_vo_tv", (triggerEntity, intruderEntity, payload) => {
    const factionName = QUERY_GetFactionNameFromVillageID(payload.ownerVillageId)

    OUTPUT_DespawnEntities(triggerEntity)
    Once()

    if (factionName === FACTION_NAME_ATTACK) {
        if (QUERY_GetGlobalVariable("hammerBossKilled") === 1) {
            return
        }
    } else if (factionName === FACTION_NAME_OBSTACLE) {
        if (QUERY_GetGlobalVariable("obstacleBossKilled") === 1) {
            return
        }
    } else if (factionName === FACTION_NAME_FROST) {
        if (QUERY_GetGlobalVariable("frostBossKilled") === 1) {
            return
        }
    }else if (factionName === FACTION_NAME_DEFEND) {
        if (QUERY_GetGlobalVariable("magmaBossKilled") === 1) {
            return
        }
    }
    PlayPresentationActionToClosePlayers(payload.string, intruderEntity)
})

// =========================
// ===== BASE RESPONSE =====
// =========================

// ---- STRUCTURE BUILT ----
// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const BASE_InitPlayerBuiltStructureResponse = (villageId, structureDataArray) => {
    for (const info of structureDataArray) {
        let finalIncludeTags = []
        let finalExcludeTags = []
        let debounceTimer = 1
        let distanceCheck = 0

        if (info.includeTags !== undefined) {
            finalIncludeTags = info.includeTags
        }

        if (info.excludeTags !== undefined) {
            finalExcludeTags = info.excludeTags
        }

        if (info.debounceTimer !== undefined) {
            debounceTimer = info.debounceTimer
        } else {
            Logv("Structure Built Response Init: No debounce timer specified. Defaulting to " + debounceTimer + "s")
        }

        if (info.distanceCheck !== undefined) {
            distanceCheck = info.distanceCheck
        } else {
            Logv("Structure Built Response Init: No distance specified. Defaulting to " + distanceCheck)
        }

        if (info.snippetName === undefined) {
            Loge("Structure Built Response Init: No snippet was given, cannot init")
            return
        } else {
            LISTENFOR_BuildingComplete({
                snippet: info.snippetName,
                ownerVillageId: villageId,
                includeTags: finalIncludeTags,
                excludeTags: finalExcludeTags,
                hasCreator: true,
                payloadFloat: debounceTimer,
                payloadInt: distanceCheck
            })
        }
    }
}

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const BASE_DeclarePlayerStructureBuiltResponseHandler = (snippetName, callback) => {
    const debounceTimerName = snippetName + "_timer"
    SNIPPET_BuildingComplete(snippetName, (buildingEntity, payload) => {
        const debounceTimer = payload.float
        const villageId = payload.ownerVillageId
        const villageEntity = GetVillageEntityFromID(villageId)
        const distanceCheck = payload.int

        const closeTarget = FILTER_ByDistance(buildingEntity, villageEntity, distanceCheck)
        if (!HasEntities(closeTarget)) {
            Logi("For village " + villageId + " spawned building not in range of distance " + distanceCheck)
        } else if (GetVillageVariable(villageId, debounceTimerName) === 0) {
            SetVillageVariable(villageId, debounceTimerName, 1)
            Logi("For village " + villageId + " Building Spawned Debounce Timer " + debounceTimerName + " set to 1 (active) with time " + debounceTimer)
            LISTENFOR_LocalTimer({
                snippet: debounceTimerName,
                ownerVillageId: villageId,
                waitTime: debounceTimer
            })
            callback(villageId, buildingEntity)
        } else {
            Logi("For village " + villageId + " Building Spawned Debounce Timer " + debounceTimerName + " still active, not calling.")
        }
    })

    SNIPPET_LocalTimer(debounceTimerName, (payload) => {
        SetVillageVariable(payload.ownerVillageId, debounceTimerName, 0)
        Logi("For village " + payload.ownerVillageId + " Building Spawned Debounce Timer " + debounceTimerName + " reset to 0 (inactive).")
    })
}

// ---- STRUCTURE DESTROYED ----
// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const BASE_InitPiglinStructureDestroyedResponse = (villageId, structureDataArray) => {
    const hordeName = QUERY_GetFactionNameFromVillageID(villageId)
    for (const info of structureDataArray) {
        let finalIncludeTags = []
        let finalExcludeTags = []
        let debounceTimer = 1

        if (info.includeTags !== undefined) {
            finalIncludeTags = info.includeTags
        }

        if (info.excludeTags !== undefined) {
            finalExcludeTags = info.excludeTags
        }

        if (info.debounceTimer !== undefined) {
            debounceTimer = info.debounceTimer
        } else {
            Logv("Piglin Structure Destroyed Response Init: No debounce timer specified. Defaulting to " + debounceTimer + "s")
        }

        if (info.snippetName === undefined) {
            Loge("Piglin Structure Destroyed Response Init: No snippet was given, cannot init")
            return
        } else {
            LISTENFOR_NonPopCappedEntityDestroyed({
                snippet: info.snippetName,
                ownerVillageId: villageId,
                villageId: villageId,
                includeTags: finalIncludeTags,
                excludeTags: finalExcludeTags,
                factionName: hordeName,
                payloadFloat: debounceTimer,
                despawned: false
            })
        }
    }
}

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const BASE_DeclarePiglinStructureDestroyedResponseHandler = (snippetName, callback) => {
    const debounceTimerName = snippetName + "_timer"
    SNIPPET_NonPopCappedEntityDestroyed(snippetName, (buildingEntity, payload) => {
        const debounceTimer = payload.float
        const villageId = payload.ownerVillageId

        if (GetVillageVariable(villageId, debounceTimerName) === 0) {
            SetVillageVariable(villageId, debounceTimerName, 1)
            Logi("For village " + villageId + " Structure Destroyed Debounce Timer " + debounceTimerName + " set to 1 (active) with time " + debounceTimer)
            LISTENFOR_LocalTimer({
                snippet: debounceTimerName,
                ownerVillageId: villageId,
                waitTime: debounceTimer
            })
            callback(villageId, buildingEntity)
        } else {
            Logi("For village " + villageId + " Structure Destroyed Debounce Timer " + debounceTimerName + " still active, not calling.")
        }
    })

    SNIPPET_LocalTimer(debounceTimerName, (payload) => {
        SetVillageVariable(payload.ownerVillageId, debounceTimerName, 0)
        Logi("For village " + payload.ownerVillageId + " Structure Destroyed Debounce Timer " + debounceTimerName + " reset to 0 (inactive).")
    })
}

// ---- STRUCTURE DAMAGED ----
// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const BASE_InitPiglinStructureDamagedResponse = (villageId, structureDataArray) => {
    const hordeName = QUERY_GetFactionNameFromVillageID(villageId)
    for (const info of structureDataArray) {
        let finalIncludeTags = []
        let finalExcludeTags = []
        let debounceTimer = 1
        let threshold = 0.99

        if (info.includeTags !== undefined) {
            finalIncludeTags = info.includeTags
        }

        if (info.excludeTags !== undefined) {
            finalExcludeTags = info.excludeTags
        }

        if (info.debounceTimer !== undefined) {
            debounceTimer = info.debounceTimer
        } else {
            Logv("Piglin Structure Damaged Response Init: No debounce timer specified. Defaulting to " + debounceTimer + "s")
        }

        if (info.healthThreshold !== undefined) {
            threshold = info.healthThreshold
        } else {
            Logv("Piglin Structure Damaged Response Init: No health threshold value specified. Defaulting to " + threshold)
        }

        if (info.snippetName === undefined) {
            Loge("Piglin Structure Damaged Response Init: No snippet was given, cannot init")
            return
        } else {
            LISTENFOR_HealthChanged({
                snippet: info.snippetName,
                ownerVillageId: villageId,
                villageId: villageId,
                includeTags: finalIncludeTags,
                excludeTags: finalExcludeTags,
                normalizedThreshold: threshold,
                factionName: hordeName,
                triggerMode: HEALTH_TRIGGER_MODE.CROSS,
                direction: HEALTH_DIRECTION.DAMAGE,
                payloadFloat: debounceTimer,
                payloadInt: villageId
            })
        }
    }
}

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const BASE_DeclarePiglinStructureDamagedResponseHandler = (snippetName, callback) => {
    const debounceTimerName = snippetName + "_timer"
    SNIPPET_HealthChanged(snippetName, (buildingEntity, _currentHealth, _previousHealth, payload) => {
        const debounceTimer = payload.float
        const villageId = payload.int

        if (GetVillageVariable(villageId, debounceTimerName) === 0) {
            SetVillageVariable(villageId, debounceTimerName, 1)
            Logi("For village " + villageId + " Structure Damaged Debounce Timer " + debounceTimerName + " set to 1 (active) with time " + debounceTimer)
            LISTENFOR_LocalTimer({
                snippet: debounceTimerName,
                ownerVillageId: villageId,
                waitTime: debounceTimer
            })
            callback(villageId, buildingEntity)
        } else {
            Logi("For village " + villageId + " Structure Damaged Debounce Timer " + debounceTimerName + " still active, not calling.")
        }
    })

    SNIPPET_LocalTimer(debounceTimerName, (payload) => {
        SetVillageVariable(payload.ownerVillageId, debounceTimerName, 0)
        Logi("For village " + payload.ownerVillageId + " Structure Damaged Debounce Timer " + debounceTimerName + " reset to 0 (inactive).")
    })
}

// ---- MULTIPLE STRUCTURES DESTROYED ----
// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const BASE_InitPiglinMultipleStructuresDestroyedResponse = (villageId, snippetName, debounceTimer, structureAmount, structureDataArray) => {
    let finalDebounceTimer = 1
    let finalStructureAmount = 1

    if (debounceTimer === undefined) {
        Logv("Piglin Structure Destroyed Response Init: No debounce timer specified. Defaulting to " + finalDebounceTimer + "s")
    } else {
        finalDebounceTimer = debounceTimer
    }

    if (structureAmount === undefined) {
        Logv("Piglin Structure Destroyed Response Init: No structure amount specified. Defaulting to " + finalStructureAmount)
    } else {
        finalStructureAmount = structureAmount
    }

    const hordeName = QUERY_GetFactionNameFromVillageID(villageId)
    for (const info of structureDataArray) {
        let finalIncludeTags = []
        let finalExcludeTags = []

        if (info.includeTags !== undefined) {
            finalIncludeTags = info.includeTags
        }

        if (info.excludeTags !== undefined) {
            finalExcludeTags = info.excludeTags
        }

        if (snippetName === undefined) {
            Loge("Piglin Structure Destroyed Response Init: No snippet was given, cannot init")
            return
        } else {
            SetVillageVariable(villageId, snippetName + "amount", finalStructureAmount)
            LISTENFOR_NonPopCappedEntityDestroyed({
                snippet: snippetName,
                ownerVillageId: villageId,
                villageId: villageId,
                includeTags: finalIncludeTags,
                excludeTags: finalExcludeTags,
                factionName: hordeName,
                payloadFloat: finalDebounceTimer,
                payloadInt: finalStructureAmount,
                despawned: false
            })
        }
    }
}

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const BASE_DeclarePiglinMultipleStructuresDestroyedResponseHandler = (snippetName, callback) => {
    const debounceTimerName = snippetName + "_timer"
    const structureAmount = snippetName + "_amount"
    SNIPPET_NonPopCappedEntityDestroyed(snippetName, (buildingEntity, payload) => {
        const debounceTimer = payload.float
        const villageId = payload.ownerVillageId

        DeltaVillageVariable(villageId, structureAmount, -1)
        if (GetVillageVariable(villageId, structureAmount) <= 0) {
            if (GetVillageVariable(villageId, debounceTimerName) === 0) {
                SetVillageVariable(villageId, debounceTimerName, 1)
                SetVillageVariable(villageId, structureAmount, payload.int) //Reset count as well
                Logi("For village " + villageId + " Multiple Structure Destroyed Debounce Timer " + debounceTimerName + " set to 1 (active) with time " + debounceTimer)
                LISTENFOR_LocalTimer({
                    snippet: debounceTimerName,
                    ownerVillageId: villageId,
                    waitTime: debounceTimer
                })
                callback(villageId, buildingEntity)
            } else {
                Logi("For village " + villageId + " Multiple Structures Destroyed Debounce Timer " + debounceTimerName + " still active, not calling.")
            }
        } else {
            Logi("For village " + villageId + " Multiple Structures Destroyed check for " + snippetName + " hasn't met its target amount, not calling.")
        }
    })

    SNIPPET_LocalTimer(debounceTimerName, (payload) => {
        SetVillageVariable(payload.ownerVillageId, debounceTimerName, 0)
        Logi("For village " + payload.ownerVillageId + " Multiple Structures Destroyed Debounce Timer " + debounceTimerName + " reset to 0 (inactive).")
    })
}

// =====================
// ===== COMMON VO =====
// =====================

const PlayCommonBuildingDestroyedVO = () => {
    // if (QUERY_GetGlobalVariable("gv_playBuildingDestroyedVO") === 0) {
    //     const VOToPlay = ["piglin_structure_destroyed_1", "piglin_structure_destroyed_2", "piglin_structure_destroyed_3", "piglin_structure_destroyed_4", "piglin_structure_destroyed_5", "piglin_structure_destroyed_6", "piglin_structure_destroyed_7", "piglin_structure_destroyed_8", "piglin_structure_destroyed_9", "piglin_structure_destroyed_10"]
    //     PlayPresentationActionToAll(ChooseFromArray(VOToPlay))
    //     OUTPUT_SetGlobalVariable("gv_playBuildingDestroyedVO", 1)
    //     LISTENFOR_LocalTimer({
    //         snippet: "lt_enable_building_vo",
    //         ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    //         waitTime: 60
    //     })
    // }
}

SNIPPET_LocalTimer("lt_enable_building_vo", (_payload) => {
    OUTPUT_SetGlobalVariable("gv_playBuildingDestroyedVO", 0)
})

const PlayCommonPortalDestroyedVO = () => {
    PlayPresentationActionToAll("piglin_portal_destroyed")
}

const PlayCommonPortalHealthGroup2VO = (villageId) => {
    const villageEntity = GetVillageEntityFromID(villageId)
    const nearbyPlayers = FILTER_ByDistance(GetAllPlayers(), villageEntity, 300)
    if (DoIfNotOnCooldown(PIGLIN_PORTAL_DAMGED_VO_DEBOUNCE_TIME, "gv_piglin_portal_damaged_vo_debounce", villageId)) {
        if (HasEntities(nearbyPlayers)) {
            PlayPresentationActionToPlayers("piglin_portal_hp", nearbyPlayers)
        }
    }
}

const CheckAndPlayInvasionActionOriginPointVO = (villageId) => {
    if (HasDelayedInvasionAction(villageId)) {
        const action = GetDelayedInvasionAction(villageId)
        if (action === FACTION_ACTION_UPGRADE_BASE || action === FACTION_ACTION_UPGRADE_BASE_DOUBLE) {
            if (DoOnce("upgradeBaseOriginPointVOPlayed")) {
                PlayPresentationActionToAll("piglinbaseoriginpoint_baseupgrade_1")
            }
        } else if (action === FACTION_ACTION_BUILD_FAR_BASE || action === FACTION_ACTION_BUILD_NEAR_BASE || action === FACTION_ACTION_BUILD_NEAR_BASE_DOUBLE) {
            if (DoOnce("newBaseOriginPointVOPlayed")) {
                PlayPresentationActionToAll("piglinbaseoriginpoint_portalbase_1")
            }
        } else if (action === FACTION_ACTION_CLAIM_AREA) {
            if (DoOnce("claimAreaOriginPointVOPlayed")) {
                PlayPresentationActionToAll("invasion_claim_area_planned_2")
            }
        }
    }
}

// =================
// ===== MUSIC =====
// =================

const GetAudioEntityForBase = (villageId, overrideTag = "") => {
    const tagToCheck = overrideTag !== "" ? overrideTag : "music_entity"
    Logi("Searching for " + tagToCheck)
    return FILTER_ByVillageID(QUERY_GetEntitiesWithTags(tagToCheck), villageId)
}

const SetAudioPhaseForBase = (villageId, audioPhase, overrideMusicEntityTag = "") => {
    const audioEntity = GetAudioEntityForBase(villageId, overrideMusicEntityTag)

    if (QUERY_GetEntitiesCount(audioEntity) > 0) {
        OUTPUT_SetEmitterState(audioEntity, audioPhase)
        Logi("Setting audio phase for " + audioEntity + " to " + audioPhase)
    } else {
        Logi("Can't find audio entity for " + villageId)
    }
}

const SetupAudioEntityForBase = (villageId, audioEntityData) => {
    let finalAudioEntity = ""
    const factionName = QUERY_GetFactionNameFromVillageID(villageId)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const villageFlavour = GetVillageFlavour(villageId)

    if (typeof audioEntityData === "object") {
        if (audioEntityData === null) {
            Loge("No music data found in village " + villageId + " for horde " + factionName)
            return
        }

        if (audioEntityData[villageSize] === undefined) {
            Loge("No village size data found for music in village " + villageId + " for horde " + factionName)
            return
        }

        if (audioEntityData[villageSize][villageFlavour] === undefined) {
            Loge("No village flavour data found for music in village " + villageId + " for horde " + factionName + " of size " + villageSize)
            return
        }

        if (typeof audioEntityData[villageSize][villageFlavour] !== "string") {
            Loge("Entity data needs to be a string for " + villageId + " for horde " + factionName + " of size " + villageSize + " of variation " + villageFlavour)
            return
        }

        finalAudioEntity = audioEntityData[villageSize][villageFlavour]
    } else if (typeof audioEntityData === "string") {
        finalAudioEntity = audioEntityData
    }

    if (finalAudioEntity !== "") {
        const villageEntitity = GetVillageEntityFromID(villageId)
        SpawnEntitiesAt(villageEntitity, finalAudioEntity, 1, TEAM_ORANGE, villageId)

        Logi("MUSIC: Spawning " + finalAudioEntity + " for horde " + factionName + " in villageSize " + villageSize + " of flavour " + villageFlavour)
    } else {
        Loge("No valid audio entity returned for base " + villageId + " for " + factionName)
        return
    }
}

const TriggerCinematicAndListenForFinish = (cineName, candidatesEntitiesList, ownerVillageId = OWNER_VILLAGE_OPT_OUT) => {
    LISTENFOR_CinematicFinished({
        snippet: `cf_${cineName}`,
        ownerVillageId: ownerVillageId,
        cinematicName: cineName
    })
    OUTPUT_TriggerCinematic(cineName, candidatesEntitiesList)
}
