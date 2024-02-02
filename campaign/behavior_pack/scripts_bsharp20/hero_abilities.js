SNIPPET_InheritsFromGameMode("lcu_campaign", () => {
    LISTENFOR_PlayerPerformedTargetAction({
        snippet: "dismount_test",
        targetAction: "dismount",
        entities: playerEntity
    })
})

SNIPPET_PlayerPerformedTargetAction("dismount_test", (playerEntity) => {
    OUTPUT_DismountPlayer(playerEntity)
})

