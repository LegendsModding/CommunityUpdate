const piggoGoldVals = {
    tag: {
        baseGoldMine: "pigGoldMine",
        piggoGoldMiner: "piglin_piggo_gold"
    },
    global: {
        maxNumber: "total_number_of_piggos_per_base",
        spawnRate: "piggo_spawn_rate"
    },
    timer: {
        spawnPiggo: "spawn_piggo_miner_timer_",
        piggoGather: "piggo_gathering_timer"
    },
    piggoGoldIdentifier: "badger:piglin_piggo_gold",
    piggoGatherDuration: 5
}

/// SPAWN HELPERS

const _GetVillageMines = (villageId) => {
    return FILTER_ByVillageID(QUERY_GetEntitiesWithTagFilter([piggoGoldVals.tag.baseGoldMine], []), villageId)
}

const _CanSpawnMorePiggoGoldOnBase = (villageId) => {
    const mines = _GetVillageMines(villageId)
    const maxAmountOfPiggosOnBase = GetVillageVariable(villageId, piggoGoldVals.global.maxNumber)
    const piggosOnThisBase = FILTER_ByVillageID(QUERY_GetEntitiesWithTags([piggoGoldVals.tag.piggoGoldMiner]), villageId)
    return !(QUERY_GetEntitiesCount(mines) === 0 || QUERY_GetEntitiesCount(piggosOnThisBase) >= maxAmountOfPiggosOnBase)
}

const _SpawnPiggoGoldOnBase = (villageId, piggoAmount) => {
    if (!_CanSpawnMorePiggoGoldOnBase(villageId)) {
        Logi("i can't spawn any piggo golds")
        return
    }

    const piggoSpawnPosition = GetVillagePortalSpawnLocation(villageId)

    for (let i = 0; i < piggoAmount; i++) {
        const piggoGold = SpawnEntitiesAt(piggoSpawnPosition, piggoGoldVals.piggoGoldIdentifier, 1, TEAM_ORANGE, villageId)
        _SendPiggoGoldToBaseMine(villageId, piggoGold)
    }
}

///

/// ACTION HELPERS

const _SendPiggoGoldToBaseMine = (villageId, piggoEG) => {
    const mines = _GetVillageMines(villageId)

    if (QUERY_GetEntitiesCount(mines) > 0) {
        const mine = RandomEntity(mines)
        OUTPUT_MoveAttackEntity(piggoEG, mine, "piggo_arrived_at_base_mine")
    } else {
        _SendPiggoGoldToBasePortal(villageId, piggoEG)
    }
}

SNIPPET_MoveCallback("piggo_arrived_at_base_mine", (moveEntity, arrived) => {
    const villageId = QUERY_GetVillageIDFromEntity(moveEntity)
    if (arrived) {
        // todo: start piggo gather animation
        OUTPUT_SetEntityTimer(moveEntity, piggoGoldVals.timer.piggoGather, piggoGoldVals.piggoGatherDuration)
        LISTENFOR_EntityTimer({
            snippet: "et_piggo_finished_gathering",
            ownerVillageId: villageId,
            entity: moveEntity,
            timerName: piggoGoldVals.timer.piggoGather
        })

        // send home if mine destroyed
        const mines = _GetVillageMines(QUERY_GetVillageIDFromEntity(moveEntity))
        const targetMine = ClosestEntity(mines, moveEntity)
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_mine_destroyed_with_piglins",
            ownerVillageId: villageId,
            entities: targetMine,
            payloadEntities: moveEntity,
            despawned: false
        })
    } else {
        // reroute
        _SendPiggoGoldToBaseMine(villageId, moveEntity)
    }
})

SNIPPET_EntityTimer("et_piggo_finished_gathering", (ownerEntity, _payload) => {
    // todo: stop gather animation
    _SendPiggoGoldToBasePortal(QUERY_GetVillageIDFromEntity(ownerEntity), ownerEntity)
    Once()
})

SNIPPET_NonPopCappedEntityDestroyed("ed_mine_destroyed_with_piglins", (_destroyedEntity, payload) => {
    const piggoEG = payload.entities
    if (QUERY_GetEntitiesCount(piggoEG) > 0) {
        _SendPiggoGoldToBasePortal(QUERY_GetVillageIDFromEntity(piggoEG), piggoEG)
    }
    Once()
})

const _SendPiggoGoldToBasePortal = (villageId, piggoEG) => {
    if (QUERY_IsVillageDestroyed(villageId)) {
        return
    }

    const portalDespawnPosition = GetVillagePortalSpawnLocation(villageId)

    OUTPUT_MoveAttackPosition(piggoEG, portalDespawnPosition, 5, "piggo_arrived_at_portal")
}

SNIPPET_MoveCallback("piggo_arrived_at_portal", (moveEntity, _arrived) => {
    //trigger entered portal vfx
    OUTPUT_DespawnEntities(moveEntity)
})

SNIPPET_EntityTimer("et_spawn_piggo_miner", (ownerEntity, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(ownerEntity)
    _SpawnPiggoGoldOnBase(villageId, 1)
    OUTPUT_SetEntityTimer(ownerEntity, piggoGoldVals.timer.spawnPiggo, GetVillageVariable(villageId, piggoGoldVals.global.spawnRate))
})

///

/// CONTROLLER FUNCTIONS

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SetupBasePiggoGoldController = (villageId, totalNumberOfPiggosPerBase) => {
    SetVillageVariable(villageId, piggoGoldVals.global.maxNumber, totalNumberOfPiggosPerBase)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StartBaseAutomaticPiggoSpawnWithRate = (villageId, piggoSpawnRate) => {
    SetVillageVariable(villageId, piggoGoldVals.global.spawnRate, piggoSpawnRate)

    const basePortal = GetVillagePortal(villageId)

    OUTPUT_SetEntityTimer(basePortal, piggoGoldVals.timer.spawnPiggo, piggoSpawnRate)
    LISTENFOR_EntityTimer({
        snippet: "et_spawn_piggo_miner",
        ownerVillageId: villageId,
        entity: basePortal,
        timerName: piggoGoldVals.timer.spawnPiggo
    })
}

///
