/**
 * This file is responsible handling how Witch Huts work in both campaign and PVP.
 * A defaultValue is set to 1 (enabled) but can be modified by the hosts custom options. They are:
 * 0 = disabled, no witch huts spawn and no witches anywhere (a classic experience)
 * 1 = Standard, the default implementation where witch huts spawn in villages, spawn ambiently and are unlocked by defending a village attack
 * 2 = Village Buildable, witch huts can be built in villages
 * 3 = Freeform, witch huts can be built anywhere
 */

const witchHutEnabled = {
    customSettingName: "tools_tech_tree_witch_hut_placement",
    customSettingNamePVP: "tools_tech_tree_witch_hut_placement_pvp",
    defaultValue: 1, //The default value of enabled
    gvBlackCatEnable: "gv_witch_black_cat_enabled",
    resourceBuildableFreeform: "witch_hut_buildable_freeform",
    resourceBuildableVillage: "witch_hut_buildable_village",
    resourceUnlockTypeSelect: "unlock_battle_view_witch"
}

//If its a custom game change the values from the above config and set a global variable for possible referencing later (not currently used, but helpful for debug)
SNIPPET_GameSettingInitialized(witchHutEnabled.customSettingName, (value) => {
    witchHutEnabled.defaultValue = value.value
})

//If its a custom game change the values from the above config and set a global variable for possible referencing later (not currently used, but helpful for debug)
SNIPPET_GameSettingInitialized(witchHutEnabled.customSettingNamePVP, (value) => {
    witchHutEnabled.defaultValue = value.value
})

//We have to wait until bootstrap, as gamesettinginitialized is too early!
SNIPPET_Bootstrap("", () => {
    let resource = null

    //Grant settings based on presence of other resource or not!
    if (witchHutEnabled.defaultValue === 2) {
        resource = witchHutEnabled.resourceBuildableVillage
    } else if (witchHutEnabled.defaultValue === 3) {
        resource = witchHutEnabled.resourceBuildableFreeform
    }
    //If we assigned a value to resource, then grant that resource to folks
    if (resource) {
        for (const team in PLAYER_TEAMS) {
            //Add the resource and unlock the cauldron
            OUTPUT_AddOrRemoveTeamResource(team, resource, 1, false)
            OUTPUT_AddOrRemoveTeamResource(team, "unlock_cauldron", 1, false)

            LISTENFOR_BuildingComplete({
                snippet: "bc_unlock_witch_advanced_direct",
                ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                includeTags: ["witchspawner"],
                payloadString: team
            })
        }
    }
})

//Only spawn black cats in campaign, as we don't allow animals in versus match for a variety of reasons
SNIPPET_InheritsFromGameMode("lcu_pvp", () => {
    OUTPUT_SetGlobalVariable(witchHutEnabled.gvBlackCatEnable, 1)
})

SNIPPET_BuildingComplete("bc_unlock_witch_advanced_direct", (_building, payload) => {
    const team = payload.string
    OUTPUT_AddOrRemoveTeamResource(team, witchHutEnabled.resourceUnlockTypeSelect, 1, false)
    Once()
})
