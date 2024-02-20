const piglinGeneralVal = {
    globals: {
        subStructureCinePlayed: "gv_sub_structure_cine_played_horde_",
        subStructureCount: "vv_sub_structure_count_for_cine", // redundant counter to allow special cine handling to be modular
        firstPortalDestroyed: "gv_first_portal_of_any_horde_destroyed",
        portalDestructionCinematicsOverridden: "gv_portal_destruction_cines_overridden_",
        firstCoilCinePlayed: "gv_first_coil_cine_played",

        // This value indicates the probabilty that witches will appear in outpost cages (between 0 and 0.999...)
        cagedWitchProbability: 0.1,
        outpostCagedWitchCount: 2
    },
    cinematics: {
        shieldDown: {
            [FACTION_NAME_ATTACK]: "hrd02_c50b_shield_down",
            [FACTION_NAME_DEFEND]: "hrd01_c50b_shield_down",
            [FACTION_NAME_FROST]: "hrd04_c50b_shield_down",
            [FACTION_NAME_OBSTACLE]: "hrd03_c50b_shield_down"
        },
        occupationPortalDestuction: {
            zombieOccupationCine: "mob02_c04_zombie_portaldestruction",
            skeletonOccupationCine: "mob03_c04_skeleton_portaldestruction",
            spiderOccupationCine: "mob04_c04_spider_portaldestruction",
            creeperOccupationCine: "mob01_c04_creeper_portaldestruction"
        },
        portalDestruction: {
            //if looking for the default cines, look in template_piglin_obstacle_territory for an example
            [FACTION_NAME_ATTACK]: {
                firstPortalDestroyedCine: "hrd02_c06_attack_portaldestruction_v3",
                bossMadCine: "hrd02_c06_attack_portaldestruction_v1b",
                lastPortalDestroyedCine: "hrd02_c04_attack_boss_leaves_nether_fmv"
            },
            [FACTION_NAME_DEFEND]: {
                firstPortalDestroyedCine: "hrd01_c06_defend_portaldestruction_v3",
                bossMadCine: "hrd01_c06_defend_portaldestruction_v1b",
                lastPortalDestroyedCine: "hrd01_c06_defend_portaldestruction_v2"
            },
            [FACTION_NAME_FROST]: {
                firstPortalDestroyedCine: "hrd01_c06_frost_portaldestruction_v3",
                bossMadCine: "hrd01_c06_frost_portaldestruction_v1b",
                lastPortalDestroyedCine: "hrd01_c06_frost_portaldestruction_v2"
            },
            [FACTION_NAME_OBSTACLE]: {
                firstPortalDestroyedCine: "hrd03_c06_obs_portaldestruction_v3",
                bossMadCine: "hrd03_c06_obs_portaldestruction_v1b",
                lastPortalDestroyedCine: "hrd03_c06_obs_portaldestruction_v2"
            },
            [BASE_SIZE_PIGLIN_CREEPER]: {
                occupationCine: "mob01_c04_creeper_portaldestruction"
            },
            [BASE_SIZE_PIGLIN_SKELETON]: {
                occupationCine: "mob03_c04_skeleton_portaldestruction"
            },
            [BASE_SIZE_PIGLIN_SPIDER]: {
                occupationCine: "mob03_c04_spider_portaldestruction"
            },
            [BASE_SIZE_PIGLIN_ZOMBIE]: {
                occupationCine: "mob02_c04_zombie_portaldestruction"
            }
        }
    },
    VO: {
        postShieldDown: {
            [FACTION_NAME_ATTACK]: "piglin_post_lavacoil_destruction_attack",
            [FACTION_NAME_DEFEND]: "piglin_post_lavacoil_destruction_defend",
            [FACTION_NAME_FROST]: "piglin_post_lavacoil_destruction_frost",
            [FACTION_NAME_OBSTACLE]: "piglin_post_lavacoil_destruction_obstacle"
        }
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        //Player stuff destroyed
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_invasion_attack_player_structure_destroyed",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["player_buildable", "spawner"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_invasion_attack_player_structure_destroyed",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["buildable_structure", "tower"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_invasion_attack_player_structure_destroyed",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            includeTags: ["buildable_structure", "trebuchet"],
            despawned: false
        })

        //Lava coil one-time cinematic per horde, on first destruction
        for (const horde of FACTION_PIGLINS) {
            LISTENFOR_BuildingComplete({
                snippet: "bc_sub_structure_for_cinematic_death",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: horde,
                includeTags: ["pigCrystal"]
            })

            LISTENFOR_DeferredDeath({
                snippet: "dd_sub_structure_cinematic_death",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                factionName: horde,
                includeTags: ["pigCrystal"]
            })
        }

        LISTENFOR_VillageDestroyed({
            snippet: "vd_base_destroyed",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            despawned: false
        })

        LISTENFOR_VillageDestroyed({
            snippet: "vd_base_despawned",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            despawned: true
        })
    }
})

//Listen to player stuff getting destroyed
SNIPPET_NonPopCappedEntityDestroyed("ed_invasion_attack_player_structure_destroyed", (destroyedEntity) => {
    // Filtering distance from a portal. If the structure was close enough to a building, play the stinger.
    const portalsInStingerRange = FILTER_ByDistance(QUERY_GetEntitiesWithTags(["portal_piglin"]), destroyedEntity, BASE_STINGER_RANGE)
    if (HasEntities(portalsInStingerRange)) {
        Logi("Playing stinger in response to player structure destroyed.")

        const closestPortal = ClosestEntity(portalsInStingerRange, destroyedEntity)
        const piglinFactionName = QUERY_GetFactionNameFromEntity(closestPortal)
        PlayStingerToClosePlayers(GetStingerForPiglinFaction(piglinFactionName, "danger"), closestPortal)
    }
})

SNIPPET_BuildingComplete("bc_sub_structure_for_cinematic_death", (buildingEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(buildingEntity)
    const horde = QUERY_GetFactionNameFromEntity(buildingEntity)
    if (QUERY_GetGlobalVariable(piglinGeneralVal.globals.subStructureCinePlayed + horde) === 1) {
        Once()
        return
    }
    DeltaVillageVariable(villageId, piglinGeneralVal.globals.subStructureCount, 1)
    OUTPUT_SetDeferredDeath(buildingEntity, true)
})

SNIPPET_DeferredDeath("dd_sub_structure_cinematic_death", (entity) => {
    const villageId = QUERY_GetVillageIDFromEntity(entity)
    const horde = QUERY_GetFactionNameFromEntity(entity)

    // note: we cannot once as we need to handle existing substructures
    if (QUERY_GetGlobalVariable(piglinGeneralVal.globals.subStructureCinePlayed + horde) === 1) {
        OUTPUT_DestroyEntities(entity)
        return
    }

    const remainingStructures = DeltaVillageVariable(villageId, piglinGeneralVal.globals.subStructureCount, -1)
    if (remainingStructures === 0) {
        const cineId = OUTPUT_TriggerCinematic(piglinGeneralVal.cinematics.shieldDown[horde], [entity, GetVillagePortal(villageId)])

        LISTENFOR_CinematicEvent({
            snippet: "ce_portal_shield_off",
            ownerVillageId: villageId,
            eventName: "portal_shield_off",
            cinematicId: cineId
        })

        LISTENFOR_CinematicFinished({
            snippet: "cf_substructure_cinematic_complete",
            ownerVillageId: villageId,
            cinematicName: piglinGeneralVal.cinematics.shieldDown[horde],
            payloadEntities: entity,
            payloadString: horde
        })

        IncrementGlobal(piglinGeneralVal.globals.subStructureCinePlayed + horde)
    } else {
        OUTPUT_DestroyEntities(entity)
    }
})

SNIPPET_VillageDestroyed("vd_base_destroyed", (villageId, _payload) => {
    Logi(`disabling compass icon for destroyed village ${villageId}`)
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_SetIconOff(villageEntity)

    const factionName = QUERY_GetFactionNameFromVillageID(villageId)
    const factionPortalBasesAlive = GetAliveVillages(factionName, BASE_SIZE_ALL_PORTALS)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (IsSmallOrGreater(baseSize)) {
        // increment gv for number of bases destroyed (used for vindicators triggers)
        IncrementGlobal(`gv_horde_bases_destroyed_${factionName}`)
    }
    Logi("vd_base_destroyed + " + factionName + " has " + factionPortalBasesAlive.length + " portal bases left")

    // Boss-pertaining logic (only for act 2 hordes)
    if (!FACTION_PIGLINS.includes(factionName)) {
        return
    }

    OUTPUT_ThwartDelayedInvasionActions(villageEntity, "")

    if (!HasEntities(factionPortalBasesAlive)) {
        if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 0 && QUERY_GetGlobalVariable(`${BOSS_BASE_VALS.globals.bossArrived}_${factionName}`) === 0) {
            OUTPUT_SetGlobalVariable(`${BOSS_BASE_VALS.globals.bossArrived}_${factionName}`, 1)
            // NOTE (mason) Attack horde doesnt have a boss base! Their boss participates in special, nightly village attacks (strength 4)
            if (factionName !== FACTION_NAME_ATTACK) {
                PlacePiglinBase(factionName, BASE_SIZE_BOSS)
            }
            // Correct horde decks since one horde just went out of action
            ReplenishInvasionHordeDeck()
        }
    }
})

SNIPPET_VillageDestroyed("vd_base_despawned", (villageId, _payload) => {
    Logi(`disabling compass icon for despawned village ${villageId}`)
    OUTPUT_SetIconOff(GetVillageEntityFromID(villageId))
})

SNIPPET_CinematicEvent("ce_portal_shield_off", (payload) => {
    Logi("~~~~~ ce_portal_shield_off ~~~~")
    const villageId = payload.ownerVillageId

    Logi("================MAIN STRUCTURE IS NOW VULNERABLE==============")
    SetPortalInvulnerable(villageId, false)

    Once()
})

SNIPPET_CinematicFinished("cf_substructure_cinematic_complete", (payload) => {
    if (HasEntities(payload.entities)) {
        OUTPUT_DestroyEntities(payload.entities)
    }

    const horde = payload.string
    PlayPresentationActionToAll(piglinGeneralVal.VO.postShieldDown[horde])

    Once()
})

SNIPPET_CinematicFinished("cf_meet_the_boss", (payload) => {
    LISTENFOR_LocalTimer({
        snippet: "lt_delayed_post_meet_the_boss_VO",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: 10, //timed to however long the sequence is
        payloadString: payload.string
    })
    Once()
})

SNIPPET_LocalTimer("lt_delayed_post_meet_the_boss_VO", (payload) => {
    const hordeBossData = GetFactionBossData(payload.string)
    PlayPresentationActionToAll(hordeBossData.VO.postMeetTheBossComment)
    PlayPresentationActionToAll(hordeBossData.VO.postMeetTheBossHordeArrival)
})

const PlayPortalDestructionCine = (deathDeferredEntity, horde) => {
    if (!GetGameRuleVariable(GAME_RULE_NAMES.campaignActsEnabled)) {
        return
    }
    //If boss portal
    const villageId = QUERY_GetVillageIDFromEntity(deathDeferredEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    //play occupation portal destruction cines
    if (IsMobAlliancePiglinSize(baseSize)) {
        OUTPUT_OverrideDeathCinematic(piglinGeneralVal.cinematics.portalDestruction[baseSize].occupationCine, deathDeferredEntity)
        //If first portal for horde, play meet boss cine version
    } else if (DoOnce(BOSS_BASE_VALS.globals.factionMeetTheBossPlayed + horde)) {
        OUTPUT_OverrideDeathCinematic(piglinGeneralVal.cinematics.portalDestruction[horde].firstPortalDestroyedCine, deathDeferredEntity)

        const bossData = GetFactionBossData(horde)
        IncreaseOutpostDifficultyForFaction(horde)
        //This cinematic is played on the cinematics end directly after the above overridden death cinematic finishes
        LISTENFOR_CinematicFinished({
            snippet: "cf_meet_the_boss",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cinematicName: bossData.cines.meetTheBoss,
            payloadString: horde
        })
    } else {
        const factionData = GetFactionBossData(horde)
        const factionPortalBasesAlive = GetAliveVillages(horde, BASE_SIZE_ALL_PORTALS)
        const numBasesAlive = QUERY_GetEntitiesCount(factionPortalBasesAlive) - 1 // -1 because this portal hasn't been destroyed yet but we want to count it
        Logi("### numBasesAlive ### " + numBasesAlive)
        // enough bases destroyed for boss is mad and boss mad hasn't played yet
        if (GetGameRuleVariable(GAME_RULE_NAMES.campaignActsEnabled) && numBasesAlive <= BOSS_BASE_VALS.basesRemainingForBossIsMad && DoOnce(BOSS_BASE_VALS.globals.factionBossMadPlayed + horde)) {
            Logi("### First Condition ### ")
            OUTPUT_OverrideDeathCinematic(piglinGeneralVal.cinematics.portalDestruction[horde].bossMadCine, deathDeferredEntity)
            IncreaseOutpostDifficultyForFaction(horde)
            LISTENFOR_CinematicFinished({
                snippet: "cf_boss_mad",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                cinematicName: factionData.cines.bossMad,
                payloadString: factionData.VO.postBossMad
            })
            // all bases are destroyed and boss leaves hasn't played yet
        } else if (numBasesAlive === 0 && DoOnce(BOSS_BASE_VALS.globals.factionBossLeavesNetherPlayed + horde)) {
            if (QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 0) {
                OUTPUT_OverrideDeathCinematic(piglinGeneralVal.cinematics.portalDestruction[horde].lastPortalDestroyedCine, deathDeferredEntity)

                LISTENFOR_CinematicFinished({
                    snippet: "cf_boss_leaves_nether",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    cinematicName: factionData.cines.bossLeavesNether,
                    payloadString: factionData.VO.postBossLeavesNether
                })

                if (horde === FACTION_NAME_ATTACK) {
                    //Arrives plays immediately after leaves for the attack horde and we should play the VOs accordingly
                    LISTENFOR_CinematicFinished({
                        snippet: "cf_attack_boss_arrives",
                        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                        cinematicName: factionData.cines.bossArrives,
                        payloadString: factionData.VO.postBossArrives
                    })
                }
            }
        }
        // play default portal destroyed cinematic
    }
}

SNIPPET_CinematicFinished("cf_boss_mad", (payload) => {
    PlayPresentationActionToAll(payload.string)
    Once()
})

SNIPPET_CinematicFinished("cf_attack_boss_arrives", (payload) => {
    PlayPresentationActionToAll(payload.string)
    Once()
})

SNIPPET_BuildingFailedToPlace("bf_portal_failed_to_place", (_buildingId, villageId) => {
    const villageEntity = GetVillageEntityFromID(villageId)
    if (HasEntities(villageEntity)) {
        OUTPUT_DestroyVillageEntities(villageEntity)
    }
})
