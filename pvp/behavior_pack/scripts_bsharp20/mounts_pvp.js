const poiMountsPVP = {
    tagInAllMounts: "poi_mount",
    mounts: {
        [POI_NAME_MOUNT_01]: {
            buildableCard: "poiMount01Center"
        },
        [POI_NAME_MOUNT_03]: {
            buildableCard: "poiMount03Center"
        },
        [POI_NAME_MOUNT_04]: {
            buildableCard: "poiMount04Center",
            get extraRules() {
                // Carrying this over from campaign
                return [PlacementPreferenceCard("facingEast")]
            }
        },
        [POI_NAME_MOUNT_06]: {
            buildableCard: "poiMount06Center"
        }
    }
}

SNIPPET_Bootstrap("", () => {
    LISTENFOR_PlayerInteracted({
        snippet: "pi_animal_mount_pvp",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        includeTags: [poiMountsPVP.tagInAllMounts]
    })

    for (const faction in poiMountsPVP.mounts) {
        LISTENFOR_VillageGenerated({
            snippet: "vg_poi_mount_pvp",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: faction,
            payloadString: faction
        })
    }
})

SNIPPET_PlayerInteracted("pi_animal_mount_pvp", (playerEntity, interactedEntity, _payload) => {
    const mountData = GetMountDataFromMountEntity(interactedEntity)
    if (mountData === undefined) {
        Loge("Mount Data is undefined! Please check why")
        return
    }

    SwapMounts(playerEntity, interactedEntity, QUERY_GetPlayerMountName(playerEntity), mountData.mountIdentifier, TEAM_WILD)
})

SNIPPET_VillageGenerated("vg_poi_mount_pvp", (villageId, payload) => {
    const mountData = poiMountsPVP.mounts[payload.string]

    const baseDeck = DECK_Empty()

    const initialZone = ZonesCard("addPoiZones", 1)
    DECK_PutOnBottomOf(initialZone, baseDeck)
    const layer = LayerOfZonesCard("addLayerOfZones", 1)
    DECK_PutOnBottomOf(layer, baseDeck)

    const center = BuildableCard(mountData.buildableCard)
    let rules = [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")]
    if (mountData.extraRules !== undefined) {
        rules = rules.concat(mountData.extraRules)
    }

    DECK_MultiplyByMultipleRules(center, rules)
    DECK_PutOnBottomOf(center, baseDeck)

    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
})
