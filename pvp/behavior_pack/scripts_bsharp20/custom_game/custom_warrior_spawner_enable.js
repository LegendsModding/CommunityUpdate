/**
 * This file is responsible handling how Warrior spawners work in campaign
 * A defaultValue is set to 1 (enabled) but can be modified by the hosts custom options. They are:
 * 0 = disabled, no warriors spawn anywhere (a new experience)
 * 1 = Standard, the default implementation where warriors auto spawn in villages when unlocked
 * 2 = Village Buildable, warrior spawners can be built in villages
 * 3 = Freeform, warrior spawners can be built anywhere
 */

const warriorsEnabled = {
    customSettingName: "tools_tech_tree_warrior_spawner_placement",
    defaultValue: 1, //The default value of enabled
    resourceBuildableFreeform: "warrior_spawner_buildable_freeform",
    resourceBuildableVillage: "warrior_spawner_buildable_village",
    resourceUnlockTypeSelect: "unlock_battle_view_vindicator"
}

//If its a custom game change the values from the above config and set a global variable for possible referencing later (not currently used, but helpful for debug)
SNIPPET_GameSettingInitialized(warriorsEnabled.customSettingName, (value) => {
    warriorsEnabled.defaultValue = value.value
})

// This previously used the villageBehaviourMode game rule
SNIPPET_InheritsFromGameMode("campaign", () => {
    let resource = null

    if (QUERY_GameDifficulty() === "Custom") {
        //Grant settings based on presence of other resource or not!
        if (warriorsEnabled.defaultValue === 2) {
            resource = warriorsEnabled.resourceBuildableVillage
        } else if (warriorsEnabled.defaultValue === 3) {
            resource = warriorsEnabled.resourceBuildableFreeform
        }
        //If we assigned a value to resource, then grant that resource to folks
        if (resource) {
            for (const team in PLAYER_TEAMS) {
                //Add the resource
                OUTPUT_AddOrRemoveTeamResource(team, resource, 1, false)

                LISTENFOR_BuildingComplete({
                    snippet: "bc_unlock_warrior_advanced_direct",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    includeTags: ["vindicatorspawner"],
                    payloadString: team
                })
            }
        }
    }
})

SNIPPET_BuildingComplete("bc_unlock_warrior_advanced_direct", (_building, payload) => {
    const team = payload.string
    OUTPUT_AddOrRemoveTeamResource(team, warriorsEnabled.resourceUnlockTypeSelect, 1, false)
    Once()
})
