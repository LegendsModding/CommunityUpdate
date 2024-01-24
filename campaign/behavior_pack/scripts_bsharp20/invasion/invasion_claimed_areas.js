const CLAIMED_AREAS_DEF = {
    [FACTION_NAME_ATTACK]: {
        PREGAME_CENTER: {
            radius: 400,
            numOutposts: 2
        },
        PREGAME_SIDE: {
            radius: 200,
            numOutposts: 1
        },
        INVASION: {
            claimedAreaOnly: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_SMALL]: {
                radius: 350,
                numOutposts: 1
            },
            [BASE_SIZE_MEDIUM]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_LARGE]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_BOSS]: {
                radius: 500,
                numOutposts: 2
            }
        }
    },
    [FACTION_NAME_DEFEND]: {
        PREGAME_CENTER: {
            radius: 400,
            numOutposts: 2
        },
        PREGAME_SIDE: {
            radius: 200,
            numOutposts: 1
        },
        INVASION: {
            claimedAreaOnly: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_SMALL]: {
                radius: 350,
                numOutposts: 1
            },
            [BASE_SIZE_MEDIUM]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_LARGE]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_BOSS]: {
                radius: 500,
                numOutposts: 2
            }
        }
    },
    [FACTION_NAME_OBSTACLE]: {
        PREGAME_CENTER: {
            radius: 400,
            numOutposts: 2
        },
        PREGAME_SIDE: {
            radius: 200,
            numOutposts: 1
        },
        INVASION: {
            claimedAreaOnly: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_SMALL]: {
                radius: 350,
                numOutposts: 1
            },
            [BASE_SIZE_MEDIUM]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_LARGE]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_BOSS]: {
                radius: 500,
                numOutposts: 2
            }
        }
    },
    [FACTION_NAME_FROST]: {
        PREGAME_CENTER: {
            radius: 400,
            numOutposts: 2
        },
        PREGAME_SIDE: {
            radius: 200,
            numOutposts: 1
        },
        INVASION: {
            claimedAreaOnly: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_SMALL]: {
                radius: 350,
                numOutposts: 1
            },
            [BASE_SIZE_MEDIUM]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_LARGE]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_BOSS]: {
                radius: 500,
                numOutposts: 2
            }
        }
    },
    [FACTION_NAME_WOF]: {
        PREGAME_CENTER: {
            radius: 400,
            numOutposts: 2
        },
        PREGAME_SIDE: {
            radius: 200,
            numOutposts: 1
        },
        INVASION: {
            claimedAreaOnly: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_SMALL]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_MEDIUM]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_LARGE]: {
                radius: 350,
                numOutposts: 2
            },
            [BASE_SIZE_BOSS]: {
                radius: 350,
                numOutposts: 2
            }
        },
        FINAL_BASE: {
            radius: 500,
            numOutposts: 0
        }
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.invasionEnabled, (rule) => {
    if (rule.value) {
        // Hide claimed area icons when bases are spawned
        LISTENFOR_VillagePlanned({
            snippet: "vp_hide_claimed_area_icon",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })

        LISTENFOR_VillageUpgraded({
            snippet: "vu_spawn_claimed_area",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT
        })
    }
})

SNIPPET_VillagePlanned("vp_hide_claimed_area_icon", (villageId, _payload) => {
    const faction = QUERY_GetFactionNameFromVillageID(villageId)
    if (!FACTION_PIGLINS.includes(faction)) {
        return
    }

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (!ALLOWED_INVASION_BASE_SIZES.includes(baseSize)) {
        return
    }

    const villageEntity = GetVillageEntityFromID(villageId)
    const claimedAreas = QUERY_GetVillageClaimedAreas(villageEntity)
    OUTPUT_MapSetKeyValue(claimedAreas, MAP_KEY.CLAIMED_AREA_VISIBILITY, MAP_CLAIMED_AREA_VISIBILITY.INVISIBLE)
})

SNIPPET_VillageUpgraded("vu_spawn_claimed_area", (villageId, _payload) => {
    const horde = QUERY_GetFactionNameFromVillageID(villageId)
    if (!FACTION_PIGLINS.includes(horde)) {
        return
    }

    const villageEntity = GetVillageEntityFromID(villageId)
    const claimedAreas = QUERY_GetVillageClaimedAreas(villageEntity)

    // Wherever the base got revived of upgraded, it's already a part of the claimed area
    // We don't care in that case.
    if (HasEntities(claimedAreas)) {
        OUTPUT_DebugLogInvasion("The upgraded base alreay belongs to the claimed area...")
        // Remove map key-value just in case
        OUTPUT_MapSetKeyValue(claimedAreas, MAP_KEY.CLAIMED_AREA_VISIBILITY, MAP_CLAIMED_AREA_VISIBILITY.INVISIBLE)
        return
    }

    OUTPUT_DebugLogInvasion("Creating new claimed area for the upgraded base!")

    // The base was ugpraded, but it doesn't have a claimed area underneath - need to claim it
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const claimedAreaDef = CLAIMED_AREAS_DEF[horde].INVASION[size]

    OUTPUT_PlacementStart()
    OUTPUT_PlacementSlotTag(SLOT.BASE)

    OUTPUT_PlacementSetPrimaryProximityRule(villageEntity, 0, 50)

    if (OUTPUT_PlacementExecute()) {
        const claimedArea = ClaimPiglinArea(horde, QUERY_PlacementResultPosition(), claimedAreaDef.radius)
        OUTPUT_MapSetKeyValue(claimedArea, MAP_KEY.CLAIMED_AREA_VISIBILITY, MAP_CLAIMED_AREA_VISIBILITY.INVISIBLE)
        OUTPUT_DebugLogInvasion("Claimed area for the upgraded base successfully spawned!")
    } else {
        OUTPUT_DebugLogInvasion("Failed to spawn the claimed area for the upgraded base.")
    }
})