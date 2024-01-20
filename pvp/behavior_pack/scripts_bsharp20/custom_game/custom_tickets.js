const customTicketData = {
    tickets: [
        {
            ticketName: TICKET_BUILD,
            startingName: "resources_starting_allay_build"
        },
        {
            ticketName: TICKET_GATHER,
            startingName: "resources_starting_allay_gather"
        }
    ]
}

for (const ticket of customTicketData.tickets) {
    if (ticket.startingName) {
        SNIPPET_GameSettingInitialized(ticket.startingName, (value) => {
            ticket.startingValue = value.value
        })
    }
}

SNIPPET_Bootstrap("", () => {
    LISTENFOR_PlayersReady({
        snippet: "pr_custom_tickets",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })
})

// We use a PlayersReady snippet, since inventories aren't ready to be modified on Bootstrap.
// This change will propogate to any new player that joins, even if they weren't in-game when this snippet was called.
SNIPPET_PlayersReady("pr_custom_tickets", (_payload) => {
    Once() // Only do this one for each saved game
    for (const ticket of customTicketData.tickets) {
        if (ticket.startingValue !== undefined) {
            OUTPUT_SetTicketCap(ticket.ticketName, ticket.startingValue)
        }
    }
})
