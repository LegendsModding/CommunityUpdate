/* eslint-disable prettier/prettier */

const VARIATION_BEHAVIOUR_DEFAULT = 0
const VARIATION_BEHAVIOUR_OVERRIDE = 1

const VARIATION_ID_FLAVOUR = 0
const VARIATION_ID_OBJECTIVE = 1

const debugUseVillageVariation = ""

const ALLOWED_VILLAGE_VARIATION_SIZES = [BASE_SIZE_OUTPOST, BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE, BASE_SIZE_PIGLIN_ZOMBIE, BASE_SIZE_PIGLIN_CREEPER, BASE_SIZE_PIGLIN_SKELETON, BASE_SIZE_PIGLIN_SPIDER]
const ALLOWED_VILLAGE_VARIATION_FACTIONS = [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_FROST, FACTION_NAME_OBSTACLE]

// FLAVOURS
const VILLAGE_VARIATION_DEFAULT = "villageVariationDefault"
const VILLAGE_VARIATION_A = "villageVariationA"
const VILLAGE_VARIATION_B = "villageVariationB"
const VILLAGE_VARIATION_C = "villageVariationC"

// OBJECTIVES
const VILLAGE_VARIATION_OBJECTIVE_DEFAULT = "villageVariationDefault"
const VILLAGE_VARIATION_STRUCTURE_DESTRUCTION = "villageVariationStructureDestruction"
const VILLAGE_VARIATION_RAIDING_PARTY = "villageVariationRaidingParty"

const variationVals = {
    flavour: {
        id: "flavour",
        globals: {
            doForceNext: "variation_doForceNextBaseFlavour",
            next: "variation_nextBaseFlavour",
            mode: "variation_flavourMode",
            override: "variation_flavourOverride"
        },
        variations: [VILLAGE_VARIATION_DEFAULT, VILLAGE_VARIATION_A, VILLAGE_VARIATION_B, VILLAGE_VARIATION_C],
        deckInfo: [
            {
                factionName: FACTION_NAME_ATTACK,
                vanguardA: {
                    deck: [{ type: VILLAGE_VARIATION_DEFAULT, amount: 1 }]
                },
                frontlineA: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 },
                        { type: VILLAGE_VARIATION_C, amount: 1 }
                    ]
                },
                small: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 }
                    ]
                },
                medium: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 }
                    ]
                },
                large: {
                    deck: [{ type: VILLAGE_VARIATION_A, amount: 1 }]
                },
                piglin_occupying_zombie_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_creeper_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_skeleton_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_spider_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                }
            },
            {
                factionName: FACTION_NAME_DEFEND,
                frontlineA: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 },
                        { type: VILLAGE_VARIATION_C, amount: 1 }
                    ]
                },
                small: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 }
                    ]
                },
                medium: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 }
                    ]
                },
                large: {
                    deck: [{ type: VILLAGE_VARIATION_A, amount: 1 }]
                },
                boss: {
                    deck: [{ type: VILLAGE_VARIATION_DEFAULT, amount: 1 }]
                },
                piglin_occupying_zombie_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_creeper_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_skeleton_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_spider_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                }
            },
            {
                factionName: FACTION_NAME_FROST,
                frontlineA: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 },
                        { type: VILLAGE_VARIATION_C, amount: 1 }
                    ]
                },
                small: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 }
                    ]
                },
                medium: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 }
                    ]
                },
                large: {
                    deck: [{ type: VILLAGE_VARIATION_A, amount: 1 }]
                },
                boss: {
                    deck: [{ type: VILLAGE_VARIATION_DEFAULT, amount: 1 }]
                },
                piglin_occupying_zombie_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_creeper_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_skeleton_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_spider_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                }
            },
            {
                factionName: FACTION_NAME_OBSTACLE,
                frontlineA: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 },
                        { type: VILLAGE_VARIATION_C, amount: 1 }
                    ]
                },
                small: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 }
                    ]
                },
                medium: {
                    deck: [
                        { type: VILLAGE_VARIATION_A, amount: 1 },
                        { type: VILLAGE_VARIATION_B, amount: 1 }
                    ]
                },
                large: {
                    deck: [{ type: VILLAGE_VARIATION_A, amount: 1 }]
                },
                piglin_occupying_zombie_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_creeper_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_skeleton_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                },
                piglin_occupying_spider_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_B, amount: 1 }]
                }
            }
        ]
    },
    objective: {
        id: "objective",
        globals: {
            doForceNext: "variation_doForceNextBaseObjective",
            next: "variation_nextBaseObjective",
            mode: "variation_objectiveMode",
            override: "variation_objectiveOverride"
        },
        variations: [VILLAGE_VARIATION_DEFAULT, VILLAGE_VARIATION_RAIDING_PARTY, VILLAGE_VARIATION_STRUCTURE_DESTRUCTION],
        deckInfo: [
            {
                factionName: FACTION_NAME_ATTACK,
                vanguardA: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                frontlineA: {
                    deck: [
                        { type: VILLAGE_VARIATION_RAIDING_PARTY, amount: 1 }
                    ]
                },
                small: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 0 }
                    ]
                },
                medium: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 1 }
                    ]
                },
                large: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 1 }
                    ]
                },
                piglin_occupying_zombie_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_creeper_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_skeleton_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_spider_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                }
            },
            {
                factionName: FACTION_NAME_DEFEND,
                frontlineA: {
                    deck: [
                        { type: VILLAGE_VARIATION_RAIDING_PARTY, amount: 1 }
                    ]
                },
                small: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 0 }
                    ]
                },
                medium: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 1 }
                    ]
                },
                large: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 1 }
                    ]
                },
                boss: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_zombie_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_creeper_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_skeleton_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_spider_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                }
            },
            {
                factionName: FACTION_NAME_FROST,
                frontlineA: {
                    deck: [
                        { type: VILLAGE_VARIATION_RAIDING_PARTY, amount: 1 }
                    ]
                },
                small: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 0 }
                    ]
                },
                medium: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 1 }
                    ]
                },
                large: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 1 }
                    ]
                },
                boss: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_zombie_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_creeper_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_skeleton_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_spider_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                }
            },
            {
                factionName: FACTION_NAME_OBSTACLE,
                frontlineA: {
                    deck: [
                        { type: VILLAGE_VARIATION_RAIDING_PARTY, amount: 1 }
                    ]
                },
                small: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 0 }
                    ]
                },
                medium: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 1 }
                    ]
                },
                large: {
                    deck: [
                        { type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 },
                        { type: VILLAGE_VARIATION_STRUCTURE_DESTRUCTION, amount: 1 }
                    ]
                },
                piglin_occupying_zombie_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_creeper_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_skeleton_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                },
                piglin_occupying_spider_mob_alliance: {
                    deck: [{ type: VILLAGE_VARIATION_OBJECTIVE_DEFAULT, amount: 1 }]
                }
            }
        ]
    }
}

//////// HELPERS /////////

const VillageSupportsVariations = (villageId) => {
    return ALLOWED_VILLAGE_VARIATION_FACTIONS.includes(QUERY_GetFactionNameFromVillageID(villageId)) && ALLOWED_VILLAGE_VARIATION_SIZES.includes(QUERY_GetFactionSizeFromVillageID(villageId))
}

const GetVillageFlavour = (villageId) => {
    if (VillageSupportsVariations(villageId)) {
        return QUERY_GetVillageFlavour(villageId)
    }
    return VILLAGE_VARIATION_DEFAULT
}

const GetVillageObjective = (villageId) => {
    if (VillageSupportsVariations(villageId)) {
        return QUERY_GetVillageObjective(villageId)
    }
    return VILLAGE_VARIATION_OBJECTIVE_DEFAULT
}

const GetVariationData = (variationId) => {
    if (variationId === VARIATION_ID_FLAVOUR) {
        return variationVals.flavour
    } else if (variationId === VARIATION_ID_OBJECTIVE) {
        return variationVals.objective
    } else {
        Loge("Invalid variation ID provided. Use VARIATION_ID_ constants.")
        return null
    }
}

//////// VARIATIONS BEHAVIOUR ////////

const _ValidateVariationValue = (variationId, value) => {
    return GetVariationData(variationId).variations.includes(value)
}

const ForceNextBaseVariation = (variationId, value) => {
    const variation = GetVariationData(variationId)
    OUTPUT_SetGlobalVariable(variation.globals.doForceNext, 1)
    OUTPUT_SetGlobalVariable(variation.globals.next, variation.variations.indexOf(value))
}

const _IsForcingNextBaseVariation = (variationId) => {
    return QUERY_GetGlobalVariable(GetVariationData(variationId).globals.doForceNext)
}

const _StopForcingNextBaseVariation = (variationId) => {
    OUTPUT_SetGlobalVariable(GetVariationData(variationId).globals.doForceNext, 0)
}

const _GetForcedBaseVariation = (variationId) => {
    const variation = GetVariationData(variationId)
    return variation.variations[QUERY_GetGlobalVariable(variation.globals.next)]
}

const _SetVariationBehaviourMode = (variationId, mode) => {
    OUTPUT_SetGlobalVariable(GetVariationData(variationId).globals.mode, mode)
}

const _GetVariationBehaviourMode = (variationId) => {
    return QUERY_GetGlobalVariable(GetVariationData(variationId).globals.mode)
}

const _ResetVariationBehaviourMode = (variationId) => {
    _SetVariationBehaviourMode(variationId, VARIATION_BEHAVIOUR_DEFAULT)
}

const _ForceAnyBaseVariation = (variationId, value) => {
    _SetVariationBehaviourMode(variationId, VARIATION_BEHAVIOUR_OVERRIDE)
    _SetVariationOverride(variationId, value)
}

const _SetVariationOverride = (variationId, value) => {
    const variation = GetVariationData(variationId)
    OUTPUT_SetGlobalVariable(variation.globals.override, variation.variations.indexOf(value))
}

const _GetVariationOverride = (variationId) => {
    const variation = GetVariationData(variationId)
    return variation.variations[QUERY_GetGlobalVariable(variation.globals.override)]
}

//////// DEFINITION VARIATION DECK MANAGEMENT ////////

const GetBaseVariationDefinitionDeck = (variationId, horde, baseSize) => {
    const deckInfo = GetVariationData(variationId).deckInfo
    for (const factionInfo of deckInfo) {
        if (factionInfo.factionName === horde) {
            return factionInfo[baseSize].deck
        }
    }
    return null
}

const _VariationExistsInDefinitionDeck = (deck, card) => {
    for (const deckCard of deck) {
        if (deckCard.type === card) {
            return true
        }
    }
    return false
}

//////// RUNTIME VARIATION DECK MANAGEMENT ////////

const _GetBaseVariationRuntimeDeckName = (variationId, factionName, factionSize) => {
    return `${GetVariationData(variationId).id}_deck_${factionName}_${factionSize}`
}

const _GetBaseVariationRuntimeDeckCount = (variationId, factionName, factionSize) => {
    const deckName = _GetBaseVariationRuntimeDeckName(variationId, factionName, factionSize)
    return QUERY_GetNamedDeckCardCount(deckName)
}

//////// RUNTIME VARIATION DECK MANAGEMENT ////////

const _VariationCard = (type, category, count) => {
    if (count !== undefined) {
        return DECK_MakeFromLibraryFilteredWithCopies(VARIATION_DECK_LIBRARY_NAME, [type, category], count)
    } else {
        return DECK_MakeFromLibraryFiltered(VARIATION_DECK_LIBRARY_NAME, [type, category])
    }
}

const _RestockVariationDeck = (variationId, faction, size) => {
    const baseDeck = DECK_Empty()
    const deck = GetBaseVariationDefinitionDeck(variationId, faction, size)
    const category = GetVariationData(variationId).id

    for (const card of deck) {
        const variationCard = _VariationCard(card.type, category, card.amount)
        DECK_PutOnBottomOf(variationCard, baseDeck)
    }

    DECK_Shuffle(baseDeck)
    Logi(`Generating ${category} deck for faction ${faction}`)
    OUTPUT_DebugLogDeck(baseDeck, false)

    OUTPUT_SetNamedDeck(_GetBaseVariationRuntimeDeckName(variationId, faction, size), baseDeck)
}

//////// VARIATION ASSIGNMENT FLOW ////////

// Ensures that the correct variation is being applied and outputs error if some other variation was attempted.
const _AddVariationToBase = (variationId, villageId, value) => {
    const horde = QUERY_GetFactionNameFromVillageID(villageId)
    const size = QUERY_GetFactionSizeFromVillageID(villageId)

    const deck = GetBaseVariationDefinitionDeck(variationId, horde, size)
    if (_VariationExistsInDefinitionDeck(deck, value)) {
        if (variationId === VARIATION_ID_FLAVOUR) {
            OUTPUT_SetVillageFlavour(value, villageId)
        } else if (variationId === VARIATION_ID_OBJECTIVE) {
            OUTPUT_SetVillageObjective(value, villageId)
        } else {
            Loge("Invalid variation ID provided when setting base variation for village. Use VARIATION_ID_ constants.")
        }
        return
    }

    const id = GetVariationData(variationId).id
    Loge(`Trying to assign unsupported ${id} variation to the village ${villageId} of size ${size} and horde ${horde}! Please revise your ${id} config. Assigning NO ${id} for now.`)
}

// The most important driving method.
const _AssignVariationToBase = (variationId, villageId) => {
    const id = GetVariationData(variationId).id
    // Variation forcing will work disregarding the current mode (a one-off)
    if (_IsForcingNextBaseVariation(variationId)) {
        _StopForcingNextBaseVariation(variationId)
        const value = _GetForcedBaseVariation(variationId)
        Logv(`Assigning forced ${id} ${value} to vID ${villageId}. Returning to a previous ${id} behaviour after this.`)
        _AddVariationToBase(variationId, villageId, value)
        return
    }

    // This exists in case we need to debug and override all flavours
    if (_GetVariationBehaviourMode(variationId) === VARIATION_BEHAVIOUR_OVERRIDE) {
        const value = _GetVariationOverride(variationId)
        Logv(`Assigning overriden ${id} ${value} to vID ${villageId}. All next assigned ${id}s would be same unless reset.`)
        _AddVariationToBase(variationId, villageId, value)
        return
    }

    const faction = QUERY_GetFactionNameFromVillageID(villageId)
    const factionSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (_GetBaseVariationRuntimeDeckCount(variationId, faction, factionSize) <= 0) {
        Logi(`${id} deck for faction ${faction} of ${factionSize} currently have no cards to play. Restocking!`)
        _RestockVariationDeck(variationId, faction, factionSize)
    }

    const deckName = _GetBaseVariationRuntimeDeckName(variationId, faction, factionSize)
    Logv(`Playing ${id} deck for vID: ${villageId}`)
    OUTPUT_PlayGenericCardFromNamedDeck(deckName, villageId)
}

//////// SNIPPETS & LISTENERS ////////

//Act Snippets
SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        //Setup initial decks
        ALLOWED_VILLAGE_VARIATION_FACTIONS.forEach((name) => {
            ALLOWED_VILLAGE_VARIATION_SIZES.forEach((size) => {
                _RestockVariationDeck(VARIATION_ID_FLAVOUR, name, size)
                _RestockVariationDeck(VARIATION_ID_OBJECTIVE, name, size)
                LISTENFOR_VillagePlanned({
                    snippet: "vp_play_variation_deck",
                    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
                    factionName: name,
                    villageSize: size
                })
            })
        })

        // Snippet for the flavour assignment
        LISTENFOR_GenericCardPlayed({
            snippet: "gcp_flavour_card_played",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cardCategory: GetVariationData(VARIATION_ID_FLAVOUR).id
        })

        LISTENFOR_GenericCardPlayed({
            snippet: "gcp_objective_card_played",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            cardCategory: GetVariationData(VARIATION_ID_OBJECTIVE).id
        })

        // Commands/tools used for debugging
        // flavour
        LISTENFOR_ExternalEvent({
            snippet: "ee_force_next_base_flavour",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "forceNextBaseFlavour"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_force_any_base_flavour",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "forceAnyBaseFlavour"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_reset_flavour_behaviour",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "resetFlavourBehaviour"
        })

        // objective
        LISTENFOR_ExternalEvent({
            snippet: "ee_force_next_base_objective",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "forceNextBaseObjective"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_force_any_base_objective",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "forceAnyBaseObjective"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_reset_objective_behaviour",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "resetObjectiveBehaviour"
        })
    }
})

SNIPPET_VillagePlanned("vp_play_variation_deck", (villageId, _payload) => {
    _AssignVariationToBase(VARIATION_ID_FLAVOUR, villageId)
    _AssignVariationToBase(VARIATION_ID_OBJECTIVE, villageId)
})

SNIPPET_GenericCardPlayed("gcp_flavour_card_played", (villageId, flavour, _payload) => {
    Logi("Tagging Village Flavour " + flavour + " for vID: " + villageId)
    _AddVariationToBase(VARIATION_ID_FLAVOUR, villageId, flavour)
})

SNIPPET_GenericCardPlayed("gcp_objective_card_played", (villageId, objective, _payload) => {
    Logi("Tagging Village Objective " + objective + " for vID: " + villageId)
    _AddVariationToBase(VARIATION_ID_OBJECTIVE, villageId, objective)
})

// Debugging events

const _DebugForceNextVariation = (id, value) => {
    if (_ValidateVariationValue(id, value) === false) {
        Loge(`Make sure to input the correct ${GetVariationData(id).id} tag name! Attempted: ${value}`)
        return
    }
    ForceNextBaseVariation(id, value)
}

const _DebugForceAnyVariation = (id, value) => {
    if (_ValidateVariationValue(id, value) === false) {
        Loge(`Make sure to input the correct ${GetVariationData(id).id} tag name! Attempted: ${value}`)
        return
    }
    _ForceAnyBaseVariation(id, value)
}

SNIPPET_ExternalEvent("ee_force_next_base_flavour", (variant, _payload) => {
    _DebugForceNextVariation(VARIATION_ID_FLAVOUR, variant.value)
})

SNIPPET_ExternalEvent("ee_force_any_base_flavour", (variant, _payload) => {
    _DebugForceAnyVariation(VARIATION_ID_FLAVOUR, variant.value)
})

SNIPPET_ExternalEvent("ee_reset_flavour_behaviour", (_variant, _payload) => {
    _ResetVariationBehaviourMode(VARIATION_ID_FLAVOUR)
})

SNIPPET_ExternalEvent("ee_force_next_base_objective", (variant, _payload) => {
    _DebugForceNextVariation(VARIATION_ID_OBJECTIVE, variant.value)
})

SNIPPET_ExternalEvent("ee_force_any_base_objective", (variant, _payload) => {
    _DebugForceAnyVariation(VARIATION_ID_OBJECTIVE, variant.value)
})

SNIPPET_ExternalEvent("ee_reset_objective_behaviour", (_variant, _payload) => {
    _ResetVariationBehaviourMode(VARIATION_ID_OBJECTIVE)
})
