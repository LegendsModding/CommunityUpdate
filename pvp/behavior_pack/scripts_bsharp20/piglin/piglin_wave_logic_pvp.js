const piglinWaveDataPVP = {
    wavePiglinTag: "wave_piglin",
    triggerVolumeTag: "piglin_notification_volume",
    stingers: {
        standardWave: "BAE_mus_stinger_pvp_piglin_standard_wave",
        grudgeWave: "BAE_mus_stinger_pvp_piglin_grudge_wave"
    },
    gv: {
        grudgeState: "gv_grudge_state",
        grudgeTarget: "gv_grudge_target",
        previousGrudgeTarget: "gv_previous_grudge_target"
    },
    grudgeCalc: {
        tiebreakerStartTime: 15,
        scores: {
            twoOrMoreBarracks: 10,
            oneBarracks: 5,
            anyDefensiveStructures: 4,
            grudgeFromOtherHorde: -4,
            firstTiebreakerThreshold: 4,
            firstTiebreaker: 1,
            hqHealthDifference: 2,
            sameAsPreviousTarget: -1,
            secondTiebreaker: 1
        },
        gv: {
            tiebreakersEnabled: "gv_grudge_tiebreakers_enabled",
            barracksDestroyed: "gv_grudge_barracks_destroyed",
            defensiveStructuresDestroyed: "gv_grudge_defensive_structures_destroyed"
        }
    },
    messages: {
        grudgeMessage: "pvp_piglin_grudge_wave"
    },
    wavesEnabled: true, // Modified by custom settings
    grudgeWavesEnabled: true // Modified by custom settings
}

const GRUDGE_STATE = {
    NONE: 0,
    PLANNING: 1
}

const _GetHordeGV = (hordeName, globalVariable) => {
    return QUERY_GetGlobalVariable(globalVariable + "_" + hordeName)
}

const _SetHordeGV = (hordeName, globalVariable, value) => {
    OUTPUT_SetGlobalVariable(globalVariable + "_" + hordeName, value)
}

const _GetHordeGVForTeam = (hordeName, teamName, globalVariable) => {
    return QUERY_GetGlobalVariable(globalVariable + "_" + hordeName + "_" + teamName)
}

const _SetHordeGVForTeam = (hordeName, teamName, globalVariable, value) => {
    OUTPUT_SetGlobalVariable(globalVariable + "_" + hordeName + "_" + teamName, value)
}

const _SetGrudgeTarget = (hordeName, team, gv = piglinWaveDataPVP.gv.grudgeTarget) => {
    if (team === undefined) {
        OUTPUT_SetGlobalVariable(gv + "_" + hordeName, 0)
    } else {
        const teamNumber = team === TEAM_BLUE ? 1 : 2
        OUTPUT_SetGlobalVariable(gv + "_" + hordeName, teamNumber)
    }
}

const _GetGrudgeTarget = (hordeName, gv = piglinWaveDataPVP.gv.grudgeTarget) => {
    const teamNumber = QUERY_GetGlobalVariable(gv + "_" + hordeName)
    if (teamNumber === 0) {
        return undefined
    } else {
        return teamNumber === 1 ? TEAM_BLUE : TEAM_RED
    }
}

SNIPPET_GlobalVariableChanged("gvc_match_start_piglin_grudge_waves", (_oldValue, newValue, _payload) => {
    if (newValue) {
        for (const hordeName in PiglinPVPHordes) {
            const hordeData = PiglinPVPHordes[hordeName]
            _SetHordeGV(hordeName, piglinWaveDataPVP.gv.grudgeState, GRUDGE_STATE.NONE)
            const firstGrudge = hordeData.grudgeTimings?.[0]

            if (firstGrudge) {
                LISTENFOR_LocalTimer({
                    snippet: "lt_set_grudge_target",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    waitTime: firstGrudge.time * 60,
                    payloadString: hordeName,
                    payloadInt: 0
                })

                LISTENFOR_NonPopCappedEntityDestroyed({
                    snippet: "nped_grudge_piglin_combat_structure_destroyed",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    despawned: false,
                    includeTags: "buildable_combat",
                    factionName: hordeName,
                    destroyerTeamName: TEAM_BLUE,
                    payloadString: TEAM_BLUE
                })
                LISTENFOR_NonPopCappedEntityDestroyed({
                    snippet: "nped_grudge_piglin_combat_structure_destroyed",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    despawned: false,
                    includeTags: "buildable_combat",
                    factionName: hordeName,
                    destroyerTeamName: TEAM_RED,
                    payloadString: TEAM_RED
                })
            }
        }

        LISTENFOR_LocalTimer({
            snippet: "lt_enable_grudge_tiebreakers",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: piglinWaveDataPVP.grudgeCalc.tiebreakerStartTime * 60
        })
        Once()
    }
})

SNIPPET_RuleInitialized(GAME_RULE_NAMES.matchStartHQsBuilt, (ruleValue) => {
    if (ruleValue.value) {
        for (const hordeName in PiglinPVPHordes) {
            LISTENFOR_VillageGenerated({
                snippet: "vg_pvp_piglin_waves",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: hordeName,
                payloadString: hordeName
            })
        }

        LISTENFOR_VillageGenerated({
            snippet: "vg_pvp_hq_piglin_notification",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: PVP_HEADQUARTERS_BLUE
        })
        LISTENFOR_VillageGenerated({
            snippet: "vg_pvp_hq_piglin_notification",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: PVP_HEADQUARTERS_RED
        })

        if (piglinWaveDataPVP.grudgeWavesEnabled) {
            LISTENFOR_GlobalVariableChanged({
                snippet: "gvc_match_start_piglin_grudge_waves",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                variableName: GAME_MODE_GLOBAL.matchStarted
            })
        }
    }
})

SNIPPET_LocalTimer("lt_enable_grudge_tiebreakers", (_payload) => {
    OUTPUT_SetGlobalVariable(piglinWaveDataPVP.grudgeCalc.gv.tiebreakersEnabled, 1)
})

SNIPPET_NonPopCappedEntityDestroyed("nped_grudge_piglin_combat_structure_destroyed", (destroyedEntity, payload) => {
    const destroyerTeam = payload.string
    const destroyedHorde = QUERY_GetFactionNameFromEntity(destroyedEntity)

    if (QUERY_HasTags(destroyedEntity, ["barracks"])) {
        const currentBarracksDestroyed = _GetHordeGVForTeam(destroyedHorde, destroyerTeam, piglinWaveDataPVP.grudgeCalc.gv.barracksDestroyed)
        _SetHordeGVForTeam(destroyedHorde, destroyerTeam, piglinWaveDataPVP.grudgeCalc.gv.barracksDestroyed, currentBarracksDestroyed + 1)
    } else {
        const currentDefensiveStructuresDestroyed = _GetHordeGVForTeam(destroyedHorde, destroyerTeam, piglinWaveDataPVP.grudgeCalc.gv.defensiveStructuresDestroyed)
        _SetHordeGVForTeam(destroyedHorde, destroyerTeam, piglinWaveDataPVP.grudgeCalc.gv.defensiveStructuresDestroyed, currentDefensiveStructuresDestroyed + 1)
    }
})

SNIPPET_VillageGenerated("vg_pvp_piglin_waves", (villageId, payload) => {
    if (piglinWaveDataPVP.wavesEnabled) {
        LISTENFOR_BuildableSpawnerBatchSpawned({
            snippet: "bsbs_try_send_piglin_waves",
            ownerVillageId: villageId,
            villageId: villageId,
            payloadString: payload.string
        })
    }
})
/*
At set moments throughout a match, piglin hordes check both player teams against the following criteria: (points are placeholder and should be design-tunable) 
- Did that team destroy 2+ of the horde’s barracks since the last check?(+10 pts)
- Did that team destroy one of the horde’s barracks since the last check?(+5 pts)
- Did that team destroy any of the horde’s defensive structures since the last check?(+4 pts)
- Does that team already have a grudge from a different horde?(-4 pts)
- Did the horde target this team last check?(-1 pts)
- Are the scores equal, and greater than 4 points? If so: 
  - Flip a coin. Heads team A, Tails team B(+1 pts)
  - Did the horde set a grudge last check? If not, check these: 
    - Does that team’s HQ have more HP than their opponents’? (+2 pts)
    - Are the scores equal? If so:
      - Flip a coin. Heads team A, Tails team B(+1 pts)
Whichever team has a higher score is set as a target for the horde’s grudge. 
*/
const _CalculateGrudgeScores = (hordeName) => {
    const scores = {}
    const teamNames = [TEAM_BLUE, TEAM_RED]

    Logi("***GRUDGE CHECK FOR " + hordeName + "***")

    for (const teamName of teamNames) {
        scores[teamName] = 0
        const barracksDestroyed = _GetHordeGVForTeam(hordeName, teamName, piglinWaveDataPVP.grudgeCalc.gv.barracksDestroyed)
        const defensiveStructuresDestroyed = _GetHordeGVForTeam(hordeName, teamName, piglinWaveDataPVP.grudgeCalc.gv.defensiveStructuresDestroyed)

        // Add points  based on structures that the player destroyed
        if (barracksDestroyed === 1) {
            scores[teamName] += piglinWaveDataPVP.grudgeCalc.scores.oneBarracks
            Logi(teamName + " gained " + piglinWaveDataPVP.grudgeCalc.scores.oneBarracks + " point for destroying 1 barracks.")
        } else if (barracksDestroyed >= 2) {
            scores[teamName] += piglinWaveDataPVP.grudgeCalc.scores.twoOrMoreBarracks
            Logi(teamName + " gained " + piglinWaveDataPVP.grudgeCalc.scores.twoOrMoreBarracks + " point for destroying 2 or more barracks.")
        }

        if (defensiveStructuresDestroyed >= 1) {
            scores[teamName] += piglinWaveDataPVP.grudgeCalc.scores.anyDefensiveStructures
            Logi(teamName + " gained " + piglinWaveDataPVP.grudgeCalc.scores.anyDefensiveStructures + " point for destroying defensive structures.")
        }

        // Subtract points if a team currently has a grudge from another horde
        for (const otherHordeName in PiglinPVPHordes) {
            if (hordeName === otherHordeName) {
                continue
            }

            if (_GetGrudgeTarget(otherHordeName) === teamName) {
                scores[teamName] += piglinWaveDataPVP.grudgeCalc.scores.grudgeFromOtherHorde
                Logi(teamName + " lost " + -piglinWaveDataPVP.grudgeCalc.scores.grudgeFromOtherHorde + " for being targeted by " + otherHordeName + ".")
            }
        }

        // Subtract points if horde is targeting the same team as the last check
        if (_GetGrudgeTarget(hordeName, piglinWaveDataPVP.gv.previousGrudgeTarget) === teamName) {
            scores[teamName] += piglinWaveDataPVP.grudgeCalc.scores.sameAsPreviousTarget
            Logi(teamName + " lost " + -piglinWaveDataPVP.grudgeCalc.scores.sameAsPreviousTarget + " for being targeted by this horde twice in a row.")
        }
    }

    // First tiebreaker event, if enough time has passed
    if (scores[TEAM_BLUE] === scores[TEAM_RED] && QUERY_GetGlobalVariable(piglinWaveDataPVP.grudgeCalc.gv.tiebreakersEnabled)) {
        if (scores[TEAM_BLUE] > piglinWaveDataPVP.grudgeCalc.scores.firstTiebreakerThreshold) {
            const randomTeam = ChooseFromArray(teamNames)
            scores[randomTeam] += piglinWaveDataPVP.grudgeCalc.scores.firstTiebreaker
            Logi(randomTeam + " gained " + piglinWaveDataPVP.grudgeCalc.scores.firstTiebreaker + " for winning the first tiebreaker.")
        }
    }

    // Do some extra checks if this horde didn't set a grudge during the last check
    if (!_GetGrudgeTarget(hordeName, piglinWaveDataPVP.gv.previousGrudgeTarget)) {
        const hqs = QUERY_GetEntitiesWithTags([TAG_PVP_HQ])
        const blueHqHealth = QUERY_CurrentHealth(FILTER_ByTeam(hqs, TEAM_BLUE))
        const orangeHqHealth = QUERY_CurrentHealth(FILTER_ByTeam(hqs, TEAM_RED))

        if (blueHqHealth !== orangeHqHealth) {
            const highestHealthTeam = blueHqHealth > orangeHqHealth ? TEAM_BLUE : TEAM_RED
            scores[highestHealthTeam] += piglinWaveDataPVP.grudgeCalc.scores.hqHealthDifference
            Logi(highestHealthTeam + " gained " + piglinWaveDataPVP.grudgeCalc.scores.hqHealthDifference + " for having the healthiest HQ.")
        }

        // Second tiebreaker event, if enough time has passed
        if (scores[TEAM_BLUE] === scores[TEAM_RED] && QUERY_GetGlobalVariable(piglinWaveDataPVP.grudgeCalc.gv.tiebreakersEnabled)) {
            const randomTeam = ChooseFromArray(teamNames)
            scores[ChooseFromArray(teamNames)] += piglinWaveDataPVP.grudgeCalc.scores.secondTiebreaker
            Logi(randomTeam + " gained " + piglinWaveDataPVP.grudgeCalc.scores.secondTiebreaker + " for winning the second tiebreaker.")
        }
    }

    // Scores can't end up below 0
    for (const teamName of teamNames) {
        scores[teamName] = Math.max(0, scores[teamName])
    }

    if (scores[TEAM_BLUE] === scores[TEAM_RED]) {
        Logi("The scores were tied at " + scores[TEAM_BLUE] + ". " + hordeName + " cannot decide which team to attack, and have decided to hold back.")
        return undefined
    } else {
        const highestScoringTeam = scores[TEAM_BLUE] > scores[TEAM_RED] ? TEAM_BLUE : TEAM_RED
        const otherTeam = GetOppositeTeam(highestScoringTeam)
        Logi(highestScoringTeam + " has ended with a score of " + scores[highestScoringTeam] + ". " + otherTeam + " ended with a score of " + scores[otherTeam] + ", and have been spared.")
        return highestScoringTeam
    }
}

const _ResetGrudgeScores = (hordeName) => {
    const teams = [TEAM_BLUE, TEAM_RED]
    for (const team of teams) {
        _SetHordeGVForTeam(hordeName, team, piglinWaveDataPVP.grudgeCalc.gv.barracksDestroyed, 0)
        _SetHordeGVForTeam(hordeName, team, piglinWaveDataPVP.grudgeCalc.gv.defensiveStructuresDestroyed, 0)
    }
}

const _CalculateGrudgeTarget = (hordeName) => {
    const teamWithHighestScore = _CalculateGrudgeScores(hordeName)
    _ResetGrudgeScores(hordeName)
    return teamWithHighestScore
}

SNIPPET_LocalTimer("lt_set_grudge_target", (payload) => {
    const hordeName = payload.string
    const hordeData = PiglinPVPHordes[hordeName]
    const grudgeIndex = payload.int

    // First, schedule the next grudge check if there is one, regardless of this one's outcome.
    // Ideally, if a grudge check is repeating, then it's the last one on the list, but we can also deal with the case where it isn't.
    const grudgeData = hordeData.grudgeTimings[grudgeIndex]
    if (grudgeData.repeating) {
        LISTENFOR_LocalTimer({
            snippet: "lt_set_grudge_target",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: grudgeData.repeatInterval * 60,
            payloadString: hordeName,
            payloadInt: grudgeIndex
        })
    }

    const nextGrudgeData = hordeData.grudgeTimings[grudgeIndex + 1]
    if (nextGrudgeData) {
        LISTENFOR_LocalTimer({
            snippet: "lt_set_grudge_target",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: (nextGrudgeData.time - grudgeData.time) * 60,
            payloadString: hordeName,
            payloadInt: grudgeIndex + 1
        })
    }

    // If we don't identify a target for this round, we can stop here.
    const grudgeTarget = _CalculateGrudgeTarget(hordeName)
    if (!grudgeTarget) {
        _SetGrudgeTarget(hordeName, undefined, piglinWaveDataPVP.gv.previousGrudgeTarget)
        return
    }

    Logi("**Grudge target for " + hordeName + " has been set to " + grudgeTarget + ". They will attack in " + grudgeData.preparationDuration + " minutes.***")
    _SetGrudgeTarget(hordeName, grudgeTarget)
    _SetHordeGV(hordeName, piglinWaveDataPVP.gv.grudgeState, GRUDGE_STATE.PLANNING)

    LISTENFOR_LocalTimer({
        snippet: "lt_send_grudge_attack",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: grudgeData.preparationDuration * 60,
        payloadString: hordeName,
        payloadInt: grudgeIndex
    })
})

SNIPPET_LocalTimer("lt_send_grudge_attack", (payload) => {
    const hordeName = payload.string
    const hordeData = PiglinPVPHordes[hordeName]
    const grudgeIndex = payload.int
    const grudgeData = hordeData.grudgeTimings[grudgeIndex]
    const grudgeTarget = _GetGrudgeTarget(hordeName)

    let hordeVillages = GetAliveVillages(hordeName, undefined)
    while (HasEntities(hordeVillages)) {
        const hordeVillage = RandomEntity(hordeVillages)
        hordeVillages = OPER_Difference(hordeVillages, hordeVillage)

        const eligiblePiglins = QUERY_GetEntitiesWithTagFilter(["piglin", "mob"], [piglinWaveDataPVP.wavePiglinTag])
        if (QUERY_GetEntitiesCount(eligiblePiglins) < grudgeData.waveSize) {
            Logi("***Village " + QUERY_GetVillageIDFromEntity(hordeVillage) + " failed to send a grudge wave due to a lack of units.***")
            continue
        }

        const wavePiglins = FILTER_RandomCount(eligiblePiglins, grudgeData.waveSize)
        const targetHQ = FILTER_ByTeam(QUERY_GetEntitiesWithTags([TAG_PVP_HQ]), grudgeTarget)
        if (HasEntities(targetHQ)) {
            Logi("***Careful! The " + hordeName + " faction is sending units from " + QUERY_GetVillageIDFromEntity(hordeVillage) + " towards the " + grudgeTarget + "team!")
            OUTPUT_MoveAttackEntity(wavePiglins, targetHQ, CALLBACK_NONE)
            OUTPUT_AddTag(wavePiglins, piglinWaveDataPVP.wavePiglinTag)

            const hqVillageId = QUERY_GetVillageIDFromEntity(targetHQ)
            LISTENFOR_SpatialPartitionEntered({
                snippet: "spen_piglin_grudge_wave_notification",
                ownerVillageId: hqVillageId,
                triggerEntity: GetEntitiesWithTagsAndVillage([piglinWaveDataPVP.triggerVolumeTag], hqVillageId),
                entities: wavePiglins
            })
        }
    }

    _SetHordeGV(hordeName, piglinWaveDataPVP.gv.grudgeState, GRUDGE_STATE.NONE)
    _SetGrudgeTarget(hordeName, undefined)
    _SetGrudgeTarget(hordeName, grudgeTarget, piglinWaveDataPVP.gv.previousGrudgeTarget)

    // TODO: May want to specify which horde is attacking which team in the future; right now it's generic (KyleJ)
    OUTPUT_AnnounceTeam(piglinWaveDataPVP.messages.grudgeMessage, [grudgeTarget], grudgeTarget)
})

// Sends an equal number of piglin entities to each existing player HQ
const _SendPiglinsToHQs = (piglinEntities) => {
    let HQs = QUERY_GetEntitiesWithTags([TAG_PVP_HQ])

    while (HasEntities(HQs)) {
        const piglinGroup = FILTER_RandomPercentage(piglinEntities, 100 / QUERY_GetEntitiesCount(HQs))
        piglinEntities = OPER_Difference(piglinEntities, piglinGroup)

        const HQ = FILTER_RandomCount(HQs, 1)
        OUTPUT_MoveAttackEntity(piglinGroup, HQ, CALLBACK_NONE)
        HQs = OPER_Difference(HQs, HQ)
        const villageId = QUERY_GetVillageIDFromEntity(HQ)

        LISTENFOR_SpatialPartitionEntered({
            snippet: "spen_piglin_standard_wave_notification",
            ownerVillageId: villageId,
            triggerEntity: GetEntitiesWithTagsAndVillage([piglinWaveDataPVP.triggerVolumeTag], villageId),
            entities: piglinGroup
        })
    }
}

SNIPPET_BuildableSpawnerBatchSpawned("bsbs_try_send_piglin_waves", (_buildableSpawner, _spawnedEntities, payload) => {
    if (HasMatchEnded()) {
        Logi("**** PVP MATCH HAS ENDED! ****")
        Once()
        return
    }

    const hordeName = payload.string
    // If we're planning a grudge attack wave, then hold off on sending the standard waves
    if (_GetHordeGV(hordeName, piglinWaveDataPVP.gv.grudgeState) === GRUDGE_STATE.PLANNING) {
        return
    }

    const outpostMobs = FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(payload.ownerVillageId), TAGS_PIGLIN_MOB, [piglinWaveDataPVP.wavePiglinTag])
    const waveSize = GetWaveSize(hordeName, IsNightTime())
    if (waveSize !== 0 && QUERY_GetEntitiesCount(outpostMobs) >= waveSize) {
        const waveMobs = FILTER_RandomCount(outpostMobs, waveSize)
        OUTPUT_AddTag(waveMobs, piglinWaveDataPVP.wavePiglinTag)
        _SendPiglinsToHQs(waveMobs)
    }
})

SNIPPET_VillageGenerated("vg_pvp_hq_piglin_notification", (villageId, _payload) => {
    LISTENFOR_BuildingComplete({
        snippet: "bc_pvp_hq_piglin_notification",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: [TAG_PVP_HQ]
    })
    Once()
})

SNIPPET_BuildingComplete("bc_pvp_hq_piglin_notification", (buildingEntity, payload) => {
    const piglinWaveNotificationTV = SpawnTriggerVolume(buildingEntity, buildingEntity, "badger:spatial_trigger_hq_pvp", QUERY_GetTeamName(buildingEntity), payload.ownerVillageId, true, [piglinWaveDataPVP.wavePiglinTag], [], ALLIANCE_ENEMY)
    OUTPUT_AddTag(piglinWaveNotificationTV, piglinWaveDataPVP.triggerVolumeTag)
    Once()
})

SNIPPET_SpatialPartitionEntered("spen_piglin_standard_wave_notification", (triggerEntity, enteringEntity, _payload) => {
    OUTPUT_SendPositionalAudioToTeam(piglinWaveDataPVP.stingers.standardWave, enteringEntity, QUERY_GetTeamName(triggerEntity))
    Once()
})

SNIPPET_SpatialPartitionEntered("spen_piglin_grudge_wave_notification", (triggerEntity, enteringEntity, _payload) => {
    OUTPUT_SendPositionalAudioToTeam(piglinWaveDataPVP.stingers.grudgeWave, enteringEntity, QUERY_GetTeamName(triggerEntity))
    Once()
})
