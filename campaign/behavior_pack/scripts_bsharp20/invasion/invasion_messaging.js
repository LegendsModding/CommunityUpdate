const invasionMessagingVal = {
    baseDestroyed: {
        [BASE_SIZE_OUTPOST]: {
            [FACTION_NAME_ATTACK]: "invasion_outpost_base_destroyed_attack_sequence",
            [FACTION_NAME_DEFEND]: "invasion_outpost_base_destroyed_defend_sequence",
            [FACTION_NAME_FROST]: "invasion_outpost_base_destroyed_frost_sequence",
            [FACTION_NAME_OBSTACLE]: "invasion_outpost_base_destroyed_obstacle_sequence"
        },
        [BASE_SIZE_SMALL]: {
            [FACTION_NAME_ATTACK]: "invasion_small_base_destroyed_attack_sequence",
            [FACTION_NAME_DEFEND]: "invasion_small_base_destroyed_defend_sequence",
            [FACTION_NAME_FROST]: "invasion_small_base_destroyed_frost_sequence",
            [FACTION_NAME_OBSTACLE]: "invasion_small_base_destroyed_obstacle_sequence"
        },
        [BASE_SIZE_MEDIUM]: {
            [FACTION_NAME_ATTACK]: "invasion_medium_base_destroyed_attack_sequence",
            [FACTION_NAME_DEFEND]: "invasion_medium_base_destroyed_defend_sequence",
            [FACTION_NAME_FROST]: "invasion_medium_base_destroyed_frost_sequence",
            [FACTION_NAME_OBSTACLE]: "invasion_medium_base_destroyed_obstacle_sequence"
        },
        [BASE_SIZE_LARGE]: {
            [FACTION_NAME_ATTACK]: "invasion_large_base_destroyed_attack_sequence",
            [FACTION_NAME_DEFEND]: "invasion_large_base_destroyed_defend_sequence",
            [FACTION_NAME_FROST]: "invasion_large_base_destroyed_frost_sequence",
            [FACTION_NAME_OBSTACLE]: "invasion_large_base_destroyed_obstacle_sequence"
        },
        [BASE_SIZE_BOSS]: {
            [FACTION_NAME_ATTACK]: "invasion_boss_base_destroyed_attack_sequence",
            [FACTION_NAME_DEFEND]: "invasion_boss_base_destroyed_defend_sequence",
            [FACTION_NAME_FROST]: "invasion_boss_base_destroyed_frost_sequence",
            [FACTION_NAME_OBSTACLE]: "invasion_boss_base_destroyed_obstacle_sequence"
        }
    }
}

//copy this but change displayed message to be about base difficulty
const _SendPiglinBaseDestroyedMessage = (villageId) => {
    // Check if portal size
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    CollectDynamicBaseLoot(villageId)

    if (IsMobAlliancePiglinSize(baseSize)) {
        return
    }
    const sizeData = invasionMessagingVal.baseDestroyed[baseSize]
    if (sizeData === undefined) {
        return
    }
    const factionName = QUERY_GetFactionNameFromVillageID(villageId)
    let message = sizeData[factionName]
    if (message === undefined) {
        return
    }
    //We used to pass in a bunch of arguments to the message, but now its just a sequence.
    OUTPUT_AnnounceSequence(message)
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignActsEnabled, (ruleValue) => {
    if (ruleValue.value) {
        //listen for all villages planned by hordes
        LISTENFOR_VillagePlanned({
            snippet: "vp_horde_difficulty_message",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_ATTACK
        })

        LISTENFOR_VillagePlanned({
            snippet: "vp_horde_difficulty_message",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_DEFEND
        })

        LISTENFOR_VillagePlanned({
            snippet: "vp_horde_difficulty_message",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_FROST
        })

        LISTENFOR_VillagePlanned({
            snippet: "vp_horde_difficulty_message",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_OBSTACLE
        })

        LISTENFOR_VillageDestroyed({
            snippet: "vd_invasion_piglin_base_destroyed_message",
            factionName: FACTION_NAME_ATTACK,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            despawned: false
        })
        LISTENFOR_VillageDestroyed({
            snippet: "vd_invasion_piglin_base_destroyed_message",
            factionName: FACTION_NAME_DEFEND,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            despawned: false
        })
        LISTENFOR_VillageDestroyed({
            snippet: "vd_invasion_piglin_base_destroyed_message",
            factionName: FACTION_NAME_FROST,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            despawned: false
        })
        LISTENFOR_VillageDestroyed({
            snippet: "vd_invasion_piglin_base_destroyed_message",
            factionName: FACTION_NAME_OBSTACLE,
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            despawned: false
        })
    }
})

//villagePlanned snippet to create trigger volumes
SNIPPET_VillagePlanned("vp_horde_difficulty_message", (villageId, _payload) => {
    const difficultyTriggerVolume = OUTPUT_CreateVillageTriggerVolume(villageId, 80, [TAG_PLAYER], [], ALLIANCE_ENEMY)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_player_entered_difficulty_message_range",
        ownerVillageId: villageId,
        triggerEntity: difficultyTriggerVolume
    })
})

//SPE snippet to display the message
SNIPPET_SpatialPartitionEntered("spe_player_entered_difficulty_message_range", (triggerEntity, enteringEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const horde = QUERY_GetFactionNameFromVillageID(villageId)
    const basesize = QUERY_GetFactionSizeFromVillageID(villageId)
    let difficultyString = null

    if (IsSmall(basesize)) {
        difficultyString = " |*[style.bold]|+[key.item.piglinDifficulty]|+[key.item.piglinDifficultyEmpty]|+[key.item.piglinDifficultyEmpty]|+[key.item.piglinDifficultyEmpty]|*[style]|"
    } else if (IsMedium(basesize)) {
        difficultyString = " |*[style.bold]|+[key.item.piglinDifficulty]|+[key.item.piglinDifficulty]|+[key.item.piglinDifficultyEmpty]|+[key.item.piglinDifficultyEmpty]|*[style]|"
    } else if (IsLarge(basesize)) {
        difficultyString = " |*[style.bold]|+[key.item.piglinDifficulty]|+[key.item.piglinDifficulty]|+[key.item.piglinDifficulty]|+[key.item.piglinDifficultyEmpty]|*[style]|"
    } else if (IsBossVillage(villageId)) {
        if (horde !== FACTION_NAME_ATTACK) {
            difficultyString = " |*[style.bold]|+[key.item.piglinDifficulty]|+[key.item.piglinDifficulty]|+[key.item.piglinDifficulty]|+[key.item.piglinDifficulty]|*[style]|"
        } else {
            return
        }
    }

    if (difficultyString === null || horde === null) {
        return
    }

    if (DoPlayerBaseActionOnceEverySeconds("difficulty_message", enteringEntity, villageId, 30)) {
        if (horde === FACTION_NAME_ATTACK) {
            OUTPUT_AnnouncePlayer("invasion_base_difficulty_level_attack", [difficultyString], enteringEntity)
        } else if (horde === FACTION_NAME_DEFEND) {
            OUTPUT_AnnouncePlayer("invasion_base_difficulty_level_defend", [difficultyString], enteringEntity)
        } else if (horde === FACTION_NAME_FROST) {
            OUTPUT_AnnouncePlayer("invasion_base_difficulty_level_frost", [difficultyString], enteringEntity)
        } else if (horde === FACTION_NAME_OBSTACLE) {
            OUTPUT_AnnouncePlayer("invasion_base_difficulty_level_obstacle", [difficultyString], enteringEntity)
        }
    }
})

SNIPPET_VillageDestroyed("vd_invasion_piglin_base_destroyed_message", (villageId, _payload) => {
    _SendPiglinBaseDestroyedMessage(villageId)
})
