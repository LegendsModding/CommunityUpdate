/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
==========================
*/

/**
 * Add Entities to the nearest control group with the specfied tags
 *
 * @param villageId Owning village
 * @param Entities Entities to add to the group
 * @param ControlGroupTags Include tags for which control group entities to retrieve.
 */
declare function AddEntitiesToNearestControlGroup(villageId: number, Entities: number[], ControlGroupTags: string[]): void

/**
 * Spawn a trigger volume and register it to both LISTENFOR_SpatialPartitionEntered and LISTENFOR_SpatialPartitionExited (optional). NOTE: This will stretch the trigger volume on he Z axis
 *
 * @param buildableEg The building entity to add the trigger volume to
 * @param triggerVolumeId The badger id of the trigger volume
 * @param triggerVolumeEnteredSnippetName The spatial partition entered snippet name
 * @param triggerVolumeExiteddSnippetName The spatial partition exited snippet name
 * @param triggerIncludeTags The tags that the entities that trigger the tags must have
 * @param triggerExcludeTags The tags that the entities that trigger the tags must NOT have
 * @param alliance The alliance filter (eg. `ALLIANCE_FRIENDLY`, `ALLIANCE_ANY`)
 * @param payloadString Optional string to give to the listeners.
 */
declare function AddTriggerVolumeToBuildable(buildableEg: number[], triggerVolumeId: string, triggerVolumeEnteredSnippetName: string, triggerVolumeExiteddSnippetName: string, triggerIncludeTags: string[], triggerExcludeTags: string[], alliance: string, payloadString: string): void

/**
 * Displays a custom message to all teams dependent if they are allied or enemies to a reference team.
 *
 * @param messageFriendly The message to show to friendly teams.
 * @param messageEnemy The message to show to enemy teams.
 * @param friendlyteam The reference team.
 */
declare function AnnounceTeamsHelper(messageFriendly: string, messageEnemy: string, friendlyteam: string): void

/**
 * Assigns entities to a specified AI
 *
 * @param villageId Owning village
 * @param Entities Entities to assign to the ai
 * @param AiData Ai config data
 */
declare function AssignEntitiesToAI(villageId: number, Entities: number[], AiData: object): any

/**
 * Assigns entities to a control group
 *
 * @param Entities Entities to assign
 * @param ControlGroup Control group entity
 */
declare function AssignToGroup(Entities: number[], ControlGroup: number): any

/**
 * Assigns entities to a random tagged control group
 *
 * @param villageId Owner Village
 * @param Entities Entities to assign
 * @param ControlGroupTag Tag to filter control group
 */
declare function AssignToRandomTaggedGroup(villageId: numberr, Entities: number[], ControlGroupTag: string): any

/**
 * A village building card.
 * Returns a portal buildable card based on size.
 *
 * @param size The base size.
 */
declare function BuildablePortalCard(size: string): string[]

/**
 * A village building card.
 * Returns a buildable card.
 *
 * @param type The card name.
 * @param count The number of copies.
 */
declare function BuildCard(type: string, count: number): string[]

/**
 * DEPRECATED: Use BuildablePortalCard instead.
 *
 * @param size The base size.
 */
declare function BuildPortalCard(size: string): string[]

/**
 * Checks if village generation is complete (all planned builings finished).
 * Used for testing. Does **NOT** return anything.
 *
 *
 */
declare function CheckVillageGenerationComplete(): void

/**
 * Choose from an array randomly. (non-deterministic)
 *
 * @param array An array.
 */
declare function ChooseFromArray(array: any[]): any

/**
 * Choose a random element from the given array. Elements with higher weights are chosen more often.
 * All elements must have a 'weight' property or this function simply returns the first element.
 *
 * @param array Array of elements to choose from.
 */
declare function ChooseFromWeightedArray(array: Element[]): Element

/**
 * Clamp a number between two other numbers
 *
 * @param number The number to clamp
 * @param minVal Minimum Value
 * @param maxVal Maximum Value
 */
declare function Clamp(number: number, minVal: number, maxVal: number): number

/**
 * Return the closest entity from an array of entities.
 * To get an array of entities @see FILTER_ByClosest
 *
 * @param entities The array of entities to filter through.
 * @param referenceEntity The reference entity used to get the closest entity.
 */
declare function ClosestEntity(entities: number[], referenceEntity: number): number

/**
 * DEPRECATED
 *
 * @param nameList DEPRECATED
 * @param factionData DEPRECATED
 * @param baseSize DEPRECATED
 */
declare function CreateBaseGenMiniDecks(nameList: string[], factionData: any, baseSize: string): any

/**
 * Makes a build deck.
 * TODO: Please ask Funky S. for details.
 *
 * @param nameList The mini-deck names to use.
 * @param factionData The faction data object.
 * @param baseSize The base size.
 * @param villageId The village to associate this build deck with
 */
declare function CreateBuildableGenMiniDecks(nameList: string[], factionData: any, baseSize: string, villageId: number): any

/**
 * Makes a build deck for a specific base size (No layering)
 *
 * @param nameList The mini-deck names to use.
 * @param factionData The faction data object.
 * @param baseSize The base size.
 * @param villageId The village to associate this build deck with
 */
declare function CreateBuildableGenMinidecksForSize(nameList: string[], factionData: any, baseSize: string, villageId: number): any

/**
 * Creates a new control group entity on the specified position with a specifried tag
 * @returns The newly created control group entity.
 *
 * @param villageId the village that owns the control group
 * @param ControlGroupPositionEntity the position to create the control group on
 * @param ControlGroupTag Optional: Tag to add to this control group entity
 */
declare function CreateControlGroupEntity(villageId: number, ControlGroupPositionEntity: number[], ControlGroupTag: string): number

/**
 * CreatePathFromZoneRequestOnBottomOf
 *
 * @param type
 * @param pathStartArrayOfRules
 * @param destDeck
 */
declare function CreatePathFromZoneRequestOnBottomOf(type: any, pathStartArrayOfRules: any, destDeck: any): any

/**
 * CreatePathRequestOnBottomOf
 *
 * @param type
 * @param pathStartArrayOfRules
 * @param pathEndArrayOfRules
 * @param destDeck
 */
declare function CreatePathRequestOnBottomOf(type: any, pathStartArrayOfRules: any, pathEndArrayOfRules: any, destDeck: any): any

/**
 * DEBUG ONLY.
 * Helper to register a B# slash command.
 * Becareful of using this in a save file as the internal snippet name may not match.
 *
 * @param eventName The slash command name. eg. `/bsharp event eventName`
 * @param callback The function to execute.
 */
declare function DEBUG_Event(eventName: string, callback: callback): void

/**
 * DEBUG ONLY.
 * Helper to register a recurring loop.
 * Becareful of using this in a save file as the internal snippet name may not match.
 *
 * @param initialDelay If a number is used the initial delay in seconds. If a string is used the slash command name to begin.
 * @param loopDelay The recurring delay in seconds.
 * @param callback The function to execute. Return true to stop, otherwise a return is not necessary.
 */
declare function DEBUG_Loop(initialDelay: any, loopDelay: number, callback: callback): void

/**
 * Like `OUTPUT_DebugLogDeck` but only logs the first n cards.
 * The original deck is not changed.
 *
 * @param deck The deck to log.
 * @param includeSubCards Include subcards in the log?
 * @param count The number of cards to log from the top.
 */
declare function DebugLogDeckCount(deck: number[][][], includeSubCards: boolean, count: number): void

/**
 * Debugs a string (currently using OUTPUT_Announce)
 *
 * @param stringToOutput Debug message to output
 * @param shouldDoOutput Boolean to define if the message will be outputed or not.
 */
declare function DebugOutput(stringToOutput: string, shouldDoOutput: boolean): void

/**
 * Count how many cards the deck have
 *
 * @param deck The deck to be count
 */
declare function DECK_Count(deck: string[]): number

/**
 * Draw cards from the bottom of the deck
 *
 * @param deck The name of the library of cards.
 * @param count Number of cards to draw.
 */
declare function DECK_DrawFromBottom(deck: string[], count: number): string[]

/**
 * Draw cards from the top of the deck
 *
 * @param deck The name of the library of cards.
 * @param count Number of cards to draw.
 */
declare function DECK_DrawFromTop(deck: string[], count: number): string[]

/**
 * Duplicates an existing deck.
 *
 * @param deck The deck to duplicate.
 */
declare function DECK_DuplicateDeck(deck: string[]): string[]

/**
 * Return an empty deck
 *
 *
 */
declare function DECK_Empty(): string[]

/**
 * Gets the library index. Don't use this unless you know what you're doing.
 *
 * @param library The library name.
 */
declare function DECK_GetLibraryIndexFromName(library: string): number

/**
 * Makes a deck with all cards that have a value greater than a threshold.
 *
 * @param library The library name.
 * @param threshold The threshold for the card score.
 */
declare function DECK_MakeDeckFromLibraryValueGreaterEqual(library: string, threshold: number): string[]

/**
 * Makes a deck with all cards that have a value less than a threshold.
 *
 * @param library The library name.
 * @param threshold The threshold for the card score.
 */
declare function DECK_MakeDeckFromLibraryValueLess(library: string, threshold: number): string[]

/**
 * Makes a deck with all cards that have a value less or equal than a threshold.
 *
 * @param library The library name.
 * @param threshold The threshold for the card score.
 */
declare function DECK_MakeDeckFromLibraryValueLessEqual(library: string, threshold: number): string[]

/**
 * TODO: What does this function do? Please ask Funky S.
 *
 * @param library The library name.
 * @param deck TODO: What does this param do? Please ask Funky S.
 * @param filter A tag the card must have.
 */
declare function DECK_MakeFromDeckFiltered(library: string, deck: string[], filter: string): string[]

/**
 * Make a deck with all the cards from a library
 *
 * @param library The name of the library of cards.
 */
declare function DECK_MakeFromLibrary(library: string): string[]

/**
 * Make a deck with all the cards from a library filtered by a tag
 *
 * @param library The name of the library of cards.
 * @param filter The filter tag.
 */
declare function DECK_MakeFromLibraryFiltered(library: string, filter: string): string[]

/**
 * Make a deck with all the cards from a library filtered by a tag and make multiple copies of it
 *
 * @param library The name of the library of cards.
 * @param filter The filter tag.
 * @param copies The number of copies from the filtered deck you want.
 */
declare function DECK_MakeFromLibraryFilteredWithCopies(library: string, filter: string, copies: number): string[]

/**
 * Make a deck with all the cards from a library that have a have a value greater than the given threshold
 *
 * @param library The name of the library of cards.
 * @param threshold The treshold number the values will be checked against
 */
declare function DECK_MakeFromLibraryValueGreater(library: string, threshold: number): string[]

/**
 * Apply a set of rule cards to each card in the original deck.
 *
 * @param originalDeck The original deck to modify.
 * @param arrayOfRules An array of rule cards.
 */
declare function DECK_MultiplyByMultipleRules(originalDeck: string[], arrayOfRules: string[][]): void

/**
 * Apply a rule card to each card in the orignal deck.
 *
 * @param originalDeck The original deck to modify.
 * @param singleDeck The deck (card) to apply
 */
declare function DECK_MultiplyBySingle(originalDeck: string[], singleDeck: string[]): void

/**
 * Put a deck on the middle of another deck. The moving deck will no longer have any card left
 *
 * @param movingDeck The deck that will be on the middle of the existim deck.
 * @param existingDeck The deck that will receive the moving deck.
 */
declare function DECK_PutInMiddleOf(movingDeck: string[], existingDeck: string[]): void

/**
 * Put a deck on the bottom of another deck. The moving deck will no longer have any card left
 *
 * @param movingDeck The deck that will be on the bottom of the existim deck.
 * @param existingDeck The deck that will receive the moving deck.
 */
declare function DECK_PutOnBottomOf(movingDeck: string[], existingDeck: string[]): void

/**
 * Put a deck on the top of another deck. The moving deck will no longer have any card left
 *
 * @param movingDeck The deck that will be on the top of the existing deck deck.
 * @param existingDeck The deck that will receive the moving deck.
 */
declare function DECK_PutOnTopOf(movingDeck: string[], existingDeck: string[]): void

/**
 * Filters out a deck randomly to ensure the total value is below the budget.
 *
 * @param libraryName The library name.
 * @param deck The deck (not the deck name).
 * @param budget The budget.
 */
declare function DECK_ReduceToBudget(libraryName: string, deck: string[], budget: number): string[]

/**
 * Shuffle the deck
 *
 * @param deck The name of the library of cards.
 */
declare function DECK_Shuffle(deck: string[]): void

/**
 * Split an existing deck into multiple decks and returns an array of smaller decks
 *
 * @param deckToSplit The deck that will be split
 * @param timesToSplit The number of time the deck will be split.
 */
declare function DECK_Split(deckToSplit: string[], timesToSplit: number): string[]

/**
 * Stack two decks and return a new stacked deck
 *
 * @param top The deck that will be on the top of the new deck.
 * @param bottom The deck that will be on the bottom of the new deck.
 */
declare function DECK_Stack(top: string[], bottom: string[]): string[]

/**
 * Get the total value of a deck based on the library values
 *
 * @param libraryName library names that contain the card values
 * @param deck The deck
 */
declare function DECK_TotalValue(libraryName: string, deck: string[]): number

/**
 * Reduces a global variable value by 1 or the optional param decrementValue.
 * @returns The global variable's new value.
 *
 * @param variable The global variable key.
 * @param decrementValue (optional) Defaults to 1, the value to decrement the GV by.
 */
declare function DecrementGlobal(variable: string, decrementValue: number = 1): number

/**
 * Announce a message after a delay.
 *
 * @param message The message to display.
 * @param delay The wait time before displaying the message.
 */
declare function DelayedAnnounce(message: string, delay: number): void

/**
 * Announce a message after a delay, for a specified duration.
 *
 * @param message The message to display.
 * @param delay The wait time before displaying the message.
 */
declare function DelayedAnnounceTimed(message: string, delay: number): void

/**
 * Play a global audio after a delay.
 *
 * @param eventName The audio event name.
 * @param delay The delay in seconds.
 */
declare function DelayedAudio(eventName: string, delay: number): void

/**
 * Despawn entities after a delay.
 *
 * @param entities The entities to despawn.
 * @param delay The delay in seconds.
 * @param villageId The village ID.
 */
declare function DelayedDespawn(entities: number[], delay: number, villageId: number): void

/**
 * Destroy entities after a delay.
 *
 * @param entities The entities to destroy.
 * @param delay The delay in seconds.
 * @param villageId The village ID
 */
declare function DelayedDestroy(entities: number[], delay: number, villageId: number): void

/**
 * Add or minus an amount to a village varible.
 *
 * @param villageId The village ID
 * @param key The global variable key
 * @param delta The amount to change the global variable by. Can be negative.
 */
declare function DeltaVillageVariable(villageId: number, key: string, delta: number): void

/**
 * Despawns roaming piglin spawners near a point of reference.
 *
 * @param pointOfReference Entity used to measure distance to roaming piglin spawners.
 */
declare function DespawnNearbyRoamingSpawners(pointOfReference: number): void

/**
 * Destroys a list of entities within a given duration.
 *
 * @param entities The entities to destroy.
 * @param totalDespawnDuration The duration to destroy everything in.
 * @param initialDelay The initial delay before anything is destroyed. Not included in duration.
 * @param villageId The village ID.
 */
declare function DestroyStaggered(entities: number[], totalDespawnDuration: number, initialDelay: number, villageId: number): void

/**
 * Distributes entities to a list of entity groups according to supplied percentages
 *
 * @param Entities The entities to split up
 * @param Percentages The percentages to split to each group
 */
declare function DistributeEntities(Entities: number[], Percentages: number[]): number[][]

/**
 * Allow a snippet to run every n seconds only. Put this check at the top of your snippet with a unique key.
 * @returns true if not on cooldown, false if on cooldown.
 *
 * @param cooldown The cooldown in seconds.
 * @param globalKey The unique global variable key.
 * @param villageId The village ID of the listener.
 */
declare function DoIfNotOnCooldown(cooldown: number, globalKey: string, villageId: number): boolean

/**
 * Do a code chunk once based off a global key. The global key is automatically set afterwards.
 * @returns true if never executed, false if executed.
 *
 * @param globalKey The global variable key
 */
declare function DoOnce(globalKey: string): boolean

/**
 * Do a code chunk once based off a tutorial flag. The tutorial flag is automatically set afterwards.
 * Please note that the flag must be present in `gameresources.json`
 * @returns true if never executed, false if executed.
 *
 * @param name The tutorial key to check/set
 */
declare function DoTutorialFlagOnce(name: string): boolean

/**
 * Enables fast travel at a village and sets its village variable to 1
 *
 * @param villageId The ID of the village
 */
declare function EnableFastTravelForVillage(villageId: number): void

/**
 * Ends the match if it hasn't already been ended. This will trigger snippets that are listening for
 * @see LISTENFOR_GlobalVariableChanged with the variable @see GAME_MODE_GLOBAL.matchEnded
 * Will also call @see OUTPUT_EndMatch
 *
 * @param winningTeam The team that won the match.
 */
declare function EndMatch(winningTeam: string): void

/**
 * Moves an entity to the destination ignoring all influencers.
 *
 * @param entities The entities to move
 * @param destinationEntity The target entity to follow
 * @param padding The distance from the target destination to stop
 */
declare function ForceMoveEntities(entities: number[], destinationEntity: number, padding: number): void

/**
 * Moves an entity to the destination ignoring all influencers.
 *
 * @param entities The entities to move
 * @param destinationEntity The position entity to go to.
 * @param padding The distance from the target destination to stop
 */
declare function ForceMoveEntitiesPosition(entities: number[], destinationEntity: number, padding: number): void

/**
 * Execute some logic for each alive village entity in the game.
 *
 * @param callback The function to call.
 */
declare function ForEachAliveVillageEntity(callback: callback): void

/**
 * Iterate through control groups that have the specfied tags
 *
 * @param villageId village owning the control groups
 * @param ControlGroupTags Include tags for selecting control group
 * @param Callback callback to execute on each rallygroup
 */
declare function ForEachControlGroupWithTags(villageId: number, ControlGroupTags: string[], Callback: callback): void

/**
 * Iterate through an entity group, avoid doing this when possible
 *
 * @param Entities Entities to iterate through
 * @param Callback callback to execute on each entity
 */
declare function ForEachEntities(Entities: number[], Callback: callback): any

/**
 * Iterates through each rally point in a village
 *
 * @param villageId Village ID
 * @param rallyName Rally Name
 * @param checkOnlyEnabled Check only enabled rally points
 * @param callback The callback function
 */
declare function ForEachRallyPoint(villageId: number, rallyName: string, checkOnlyEnabled: bool, callback: callback): void

/**
 * Usage for 'generate_all_village_factions_sizes_perf' test only!
 * Generates the next village in the sequence
 *
 *
 */
declare function GenerateNextVillage(): void

/**
 * Gets an ai entity that is owned by a village
 *
 * @param villageId the village that owns the ai entity
 * @param AiData ai entity configuration data
 */
declare function GetAiEntity(villageId: number, AiData: object): any

/**
 * Get's all the alive villages in the game that belong to any faction in 'factions' and of any size in 'sizes'.
 * Set factions or sizes to undefined to ignore filtering.
 *
 * @param factions The factions to include. Set as undefined to accept all factions.
 * @param sizes The village sizes to include. Set as undefined to accept all sizes.
 */
declare function GetAliveVillages(factions: string[], sizes: string[]): number[]

/**
 * Generates all permutations according to provided input
 *
 * @param ...sets Sets for which to generate permutations for.
 */
declare function GetAllPermutations(...sets: object[]): object[]

/**
 * Get all the player entities(dead or alive) in the world.
 * If dead the player will not have a position.
 *
 *
 */
declare function GetAllPlayers(): number[]

/**
 * Return all the spawn points of the village portal.
 *
 * @param villageId the id of the village
 */
declare function GetAllVillagePortalSpawnLocation(villageId: number): number[]

/**
 * Get all the village entities (dead or alive) belonging to a faction with a specific size.
 *
 * @param factions A list of valid factions.
 * @param sizes A list of valid village sizes.
 */
declare function GetAllVillages(factions: string[], sizes: string[]): number[]

/**
 * Gets the closest player to an entity.
 *
 * @param referenceEntity The reference entity
 */
declare function GetClosestPlayer(referenceEntity: number): number

/**
 * Takes a time and returns a time of day that's closest to it.
 *
 * @param time
 */
declare function GetClosestTimeOfDay(time: number): number

/**
 * Get Control group entities with tags
 *
 * @param villageId Owning village
 * @param rallyPointTags Tags that are assigned to the control entities
 */
declare function GetControlGroupEntities(villageId: number, rallyPointTags: string[]): number[]

/**
 * Gets the culture level from a culture value.
 * Note the culture level starts at 0 (no thresholds met).
 *
 * @param cultureValue The culture value (A) of a village.
 */
declare function GetCultureLevelFromValue(cultureValue: number): number

/**
 * Gets the culture level for a village.
 * Note the culture level starts at 0 (no thresholds met).
 *
 * @param villageId The village ID.
 */
declare function GetCultureLevelFromVillage(villageId: number): number

/**
 * Get all the village entities (dead only) belonging to a faction with a specific size.
 *
 * @param factions A list of valid factions.
 * @param sizes A list of valid village sizes.
 */
declare function GetDeadVillages(factions: string[], sizes: string[]): number[]

/**
 * Returns entities that have the specified tags and belong to the given village.
 *
 * @param tags The list of tags the entity must have.
 * @param villageId The village ID the entity must belong to.
 */
declare function GetEntitiesWithTagsAndVillage(tags: string[], villageId: number): number[]

/**
 * Get a global variable for a game rule.
 *
 * @param ruleName The name of the rule.
 */
declare function GetGameRuleVariable(ruleName: string): number

/**
 * Finds an instance entity by name to create a trigger volume from and returns it.
 *
 * @param instanceName The name of the instance entity to get. Should be unique (only one entity in the game with this instance name).
 * @param team The name of the team to assign the trigger volume to.
 * @param villageId The village that owns this trigger volume. Pass as undefined to not associate the trigger volume with a village.
 * @param stretchVertically Maximally stretch the trigger volume bounds in the up-down direction?
 * @param includeTags The tags of things we want to detect as intruders.
 * @param excludeTags The tags of things we don't want to detect as intruders even if they satisfy includeTags.
 * @param alliance The alliance filter (eg. `ALLIANCE_FRIENDLY`, `ALLIANCE_ANY`)
 */
declare function GetInstanceTriggerVolume(instanceName: string, team: string, villageId: number, stretchVertically: boolean, includeTags: string[], excludeTags: string[], alliance: string): number

/**
 * Finds an instance entity by name to create a trigger volume from and returns it.
 *
 * @param instanceName The name of the instance entity to get. Should be unique (only one entity in the game with this instance name).
 * @param team The name of the team to assign the trigger volume to.
 * @param villageId The village that owns this trigger volume. Pass as undefined to not associate the trigger volume with a village.
 * @param stretchVertically Maximally stretch the trigger volume bounds in the up-down direction?
 * @param triggerTags The tagsets to use to detect intruders. Given as an array of dictionaries of include/exclude tags. eg. [{include: ["player"], exclude: []}, {include: ["mob"], exclude: ["piglin"]}]
 */
declare function GetInstanceTriggerVolumeWithMultipleTagsets(instanceName: string, team: string, villageId: number, stretchVertically: boolean, triggerTags: any[]): number

/**
 * Retrieves the mount data corresponding to the given mount entity.
 *
 * @param mount Mount entity.
 */
declare function GetMountDataFromMountEntity(mount: number[]): object

/**
 * Return a percentage of the netities assigned to a control group
 *
 * @param ControlGroup Control Group Entity
 * @param Percentage Percentage of units to get
 */
declare function GetPercentUnitsFromGroup(ControlGroup: number, Percentage: number): number[]

/**
 * Return a percentage of the netities assigned to a control group using it's tag
 *
 * @param villageId Owning village
 * @param ControlGroupTags control group tag
 * @param Percentage Percentage of units to get
 */
declare function GetPercentUnitsFromGroupTags(villageId: number, ControlGroupTags: string[], Percentage: number): number[]

/**
 * Get all campaign units (players and mobs owned by the players).
 *
 *
 */
declare function GetPlayerAndMobs(): number[]

/**
 * Get entities owned by the player campaign team with the specified tags.
 *
 * @param includeTags A list of tags the entities must have.
 */
declare function GetPlayerOwned(includeTags: string[]): number[]

/**
 * Returns all alive players in the game - excluding dead ones!
 * Returned players are guaranteed to have a position.
 *
 *
 */
declare function GetPlayers(): number[]

/**
 * Get all buildables owned by the player campaign team.
 *
 *
 */
declare function GetPlayerStructures(): number[]

/**
 * Get a save/loaded variable associated to a specific player (user).
 *
 * @param playerId The user ID.
 * @param key The variable key.
 */
declare function GetPlayerVariable(playerId: string, key: string): number

/**
 * Get a player variable key for a given player (user).
 *
 * @param playerId The user ID.
 * @param key The variable key.
 */
declare function GetPlayerVariableKey(playerId: string, key: string): string

/**
 * Helper function that "unpacks" the rest parameter to make sure that whatever uses rest parameter has a list to work with.
 * This practically allows anyone to pass both [], []... or [[], []] into functions that take rest parameter.
 *
 * @param restArg Rest Argument (usually written as ...args)
 */
declare function GetRestParameter(restArg: object[]): object[]

/**
 * Retrieves a texture name based on a base's faction and size.
 *
 * @param faction Faction of the base whose stamp to apply.
 * @param size Size fo the base whose stamp to apply
 */
declare function GetStampTextureForFaction(faction: string, size: string): string

/**
 * Looks up a faction-specific stinger for a given event (see PIGLIN_BASE_STINGERS for a complete list of stinger types)
 * Types include:
 * - factionName
 * - hero
 * - tactic
 * - keepGoing
 * - giveUp
 * - danger
 *
 * @param factionName The name of the faction.
 * @param stingerType The type of stinger to play.
 */
declare function GetStingerForPiglinFaction(factionName: string, stingerType: string): string

/**
 * Get Rallygroups with tags
 *
 * @param villageId Owning Village
 * @param includeTags Tags to include
 * @param excludeTags Tags to exclude
 */
declare function GetTaggedGroups(villageId: number, includeTags: string[], excludeTags: string[]): number[]

/**
 * Get a tutorial flag value. Please note that the flag must be present in `gameresources.json`
 * @returns The value of the tutorial flag
 *
 * @param name The name of the tutorial flag
 */
declare function GetTutorialFlag(name: string): boolean

/**
 * Returns only central/vital structures of the village like fountains.
 *
 * @param villageId Village ID
 */
declare function GetVillageCentralStructures(villageId: number): number[]

/**
 * Gets the village entity from a village ID.
 *
 * @param villageId The village ID.
 */
declare function GetVillageEntityFromID(villageId: number): number

/**
 * Gets the village entity from a faction name.
 * This function only works on **single village factions**.
 * May return nothing if the village has not been planned yet.
 *
 * @param factionName The faction name of the village.
 */
declare function GetVillageEntityFromFaction(factionName: string): number

/**
 * Return the fountain of a given village
 *
 * @param villageId The village id
 */
declare function GetVillageFountain(villageId: string): number[]

/**
 * Get a base's potal entity.
 * Portal must not be destroyed. @see QUERY_IsVillageDestroyed
 *
 * @param villageId The village ID of the base.
 */
declare function GetVillagePortal(villageId: number): number[]

/**
 * Get a portals spawn location.
 *
 * @param villageId The village ID.
 */
declare function GetVillagePortalSpawnLocation(villageId: number): number[]

/**
 * Get a "global" variable for a village.
 *
 * @param villageId The village ID the global is attached to.
 * @param key The global variable name to get.
 */
declare function GetVillageVariable(villageId: number, key: string): number

/**
 * Get the "global" village variable key
 *
 * @param villageId The village ID the global is attached to.
 * @param key The global variable name to get.
 */
declare function GetVillageVariableKey(villageId: number, key: string): srting

/**
 * Returns a locator entity for the world center.
 * This may not be the same location as the WoF as the WoF can be offset.
 * This entity will never suspend.
 *
 *
 */
declare function GetWorldCenter(): number

/**
 * Grants a reward from a loot table. For piglin crate & POI chests.
 *
 * @param player The player to award.
 * @param lootEntity The loot chest entity.
 * @param lootType Type of the loot (treasure chest/piglin crate campaign/pvp)
 */
declare function GrantRewardFromLootTable(player: number, lootEntity: number, lootType: string): void

/**
 * Check if an array of entities has at least one *valid* entity.
 *
 * @param entities An array of entities.
 */
declare function HasEntities(entities: number[]): boolean

/**
 * Returns true if the match has ended, false otherwise.
 *
 *
 */
declare function HasMatchEnded(): boolean

/**
 * Returns true if the match has been started, false otherwise.
 *
 *
 */
declare function HasMatchStarted(): boolean

/**
 * Check if we've skipped act 1
 *
 */
declare function HaveWeSkippedAct1(): boolean

/**
 * A village building card.
 * Makes a buildable a Village Heart (ties a buildable to the village lifecycle).
 *
 *
 */
declare function HeartCard(): string[]

/**
 * Wrapper to specify the horde by the order of arrival rather than name.
 *
 * @param orderNum Order in which horde arrived. 0 - first, 1 - second, etc.
 */
declare function HordeArrived(orderNum: number): number

/**
 * Increment a global variable by 1 or the optional parameter incrementValue.
 * @returns The global variable's new value.
 *
 * @param variable The global variable name.
 * @param incrementValue (optional) Defaults to 1, the value to increment the GV by.
 */
declare function IncrementGlobal(variable: string, incrementValue: number = 1): number

/**
 * Applies an infection buff to the well of fate (@see UninfectWoF)
 *
 *
 */
declare function InfectWoF(): void

/**
 * Initializes a base's ai and sets up reinforcement rallypoints, this must be called AFTER a base has finished building
 *
 * @param villageId Owning village
 * @param aiConfig Ai config data
 */
declare function InitializeBaseAIs(villageId: number, aiConfig: object): any

/**
 * Interrupt the onboarding objective message
 *
 * @param isCampaignOnboarding is campaign onboarding or basics onboarding
 */
declare function InterruptOnboardingMessage(isCampaignOnboarding: boolean): void

/**
 * Checks if any entity in a group is near a reference entity.
 *
 * @param groupToCheck The entities that must be near the checkAgainst entity.
 * @param checkAgainst The entity to check against.
 * @param distance The distance from the checkAgainst entity
 */
declare function IsAnyNear(groupToCheck: number[], checkAgainst: number, distance: number): boolean

/**
 * Checks if the game is currently in a specific act.
 * Only works in campaign.
 *
 * @param act The act to check. Use constants in `ACTS`.
 */
declare function IsCurrentAct(act: string): boolean

/**
 * Is it daytime (sun above the horizon).
 *
 *
 */
declare function IsDayTime(): boolean

/**
 * Checks if entity is the player entity by comparing against the full list of player entities.
 *
 * @param entity Entity to check
 */
declare function IsPlayer(entity: number): boolean

/**
 * Checks if a village fountain is disabled
 *
 * @param villageId Village ID
 */
declare function IsVillageFountainDisabled(villageId: number): boolean

/**
 * Lerp between 2 values
 *
 * @param start 1st value
 * @param end 2nd value
 * @param lerpVal The lerp amount
 */
declare function Lerp(start: number, end: number, lerpVal: number): number

/**
 * Log an error message to console (red text).
 *
 * @param message The message/value to log.
 */
declare function Loge(message: string): void

/**
 * Log an info message to console (white text).
 *
 * @param message The message/value to log.
 */
declare function Logi(message: string): void

/**
 * Log a verbose message to console (grey text).
 *
 * @param message The message/value to log.
 */
declare function Logv(message: string): void

/**
 * Log a warning message to console (yellow text).
 *
 * @param message The message/value to log.
 */
declare function Logw(message: string): void

/**
 * Makes a build deck.
 *
 * @param factionData The faction data object.
 * @param baseSize The base size.
 * @param phase The phase.
 */
declare function MakeAbsolutePhaseBuildDeck(factionData: any, baseSize: string, phase: string): string[]

/**
 * Makes a build deck.
 *
 * @param factionData The faction data object.
 * @param baseSize The base size.
 * @param phase The phase.
 */
declare function MakePhaseBuildDeck(factionData: any, baseSize: string, phase: string): string[]

/**
 * Wrapper to specify the mob alliance by the order of arrival rather than name.
 *
 * @param orderNum number
 */
declare function MobAllianceOccupationStarted(orderNum: number): number

/**
 * Calls Once and returns true if the match has ended. Returns false otherwise.
 *
 *
 */
declare function OnceIfMatchEnded(): boolean

/**
 * Calls Once and returns true if the match has started. Returns false otherwise.
 *
 *
 */
declare function OnceIfMatchStarted(): boolean

/**
 * Play a presentation event after a given time
 *
 * @param eventName name of the presentaiton event
 * @param delay time to delay
 */
declare function PlayDelayedPresentationToAll(eventName: string, delay: number): void

/**
 * Play a presentation event after a given time
 *
 * @param eventName name of the presentaiton event
 * @param villageId the village to play the delayed action close to
 * @param delay time to delay
 * @param distance distance from the entity, defaults to 300
 */
declare function PlayDelayedPresentationToClosePlayers(eventName: string, villageId: number, delay: number, distance: number): void

/**
 * Plays a delayed sound effect to everyone.
 *
 * @param eventName Audio asset ID. See `sound_definitions.json` in resource packs.
 * @param delay time to delay
 */
declare function PlayDelayedStingerToAll(eventName: string, delay: number): void

/**
 * Plays an sound effect to everyone.
 *
 * @param eventName Audio asset ID. See `sound_definitions.json` in resource packs.
 */
declare function PlayMusicStingerToAll(eventName: string): void

/**
 * Plays an sound effect to specific players.
 *
 * @param eventName Audio asset ID. See `sound_definitions.json` in resource packs.
 * @param players The player entities.
 */
declare function PlayMusicStingerToPlayers(eventName: string, players: number[]): void

/**
 * Plays an sound effect to a specific team.
 *
 * @param eventName Audio asset ID. See `sound_definitions.json` in resource packs.
 * @param team The team name.
 */
declare function PlayMusicStingerToTeam(eventName: string, team: string): void

/**
 * Plays a presentation action to teams.
 *
 * @param messageFriendly The message for the friendly team.
 * @param messageEnemy The message for the opposing team.
 * @param friendlyteam The friendly team name.
 */
declare function PlayPresentationActionTeamsHelper(messageFriendly: string, messageEnemy: string, friendlyteam: string): void

/**
 * Plays a presentation action to all players.
 *
 * @param eventName The event name.
 */
declare function PlayPresentationActionToAll(eventName: string): void

/**
 * Plays a presentation action for all players nearby a given entity.
 *
 * @param eventName The event name.
 * @param pointOfReference The entity used as a point of reference.
 * @param distance The distance from the entity pointOfReference
 */
declare function PlayPresentationActionToClosePlayers(eventName: string, pointOfReference: number, distance: number): void

/**
 * Plays a presentation action to specific players.
 *
 * @param eventName The event name.
 * @param players The players.
 */
declare function PlayPresentationActionToPlayers(eventName: string, players: number[]): void

/**
 * Plays a presentation action to a specific team.
 *
 * @param eventName The event name.
 * @param team The team.
 */
declare function PlayPresentationActionToTeam(eventName: string, team: string): void

/**
 * Play a stinger close to players
 *
 * @param eventName Event string name
 * @param pointOfReference Reference point to play from
 */
declare function PlayStingerToClosePlayers(eventName: string, pointOfReference: number): void

/**
 * Plays a UI action to teams.
 *
 * @param eventFriendly The event name for the friendly team.
 * @param eventEnemy The event name for the opposing team.
 * @param friendlyTeam The friendly team name.
 */
declare function PlayUIActionTeamsHelper(eventFriendly: string, eventEnemy: string, friendlyTeam: string): void

/**
 * Plays a UI action to all players.
 *
 * @param eventName The event name.
 */
declare function PlayUIActionToAll(eventName: string): void

/**
 * Plays a UI action for all players nearby a given entity.
 *
 * @param eventName The event name.
 * @param pointOfReference The entity used as a point of reference.
 */
declare function PlayUIActionToClosePlayers(eventName: string, pointOfReference: number): void

/**
 * Plays a UI action to specific players.
 *
 * @param eventName The event name.
 * @param players The players.
 */
declare function PlayUIActionToPlayers(eventName: string, players: number[]): void

/**
 * Plays a UI action to a specific team.
 *
 * @param eventName The event name.
 * @param team The team.
 */
declare function PlayUIActionToTeam(eventName: string, team: string): void

/**
 * Displays a custom message to all teams dependent if they are allied or enemies to a reference team.
 *
 * @param messageFriendly Friendly message.
 * @param messageEnemy Enemy message.
 * @param friendlyteam Reference team.
 */
declare function PlayVOTeamsHelper(messageFriendly: string, messageEnemy: string, friendlyteam: string): void

/**
 * Plays an voice over line to everyone.
 *
 * @param eventName Audio asset ID. See `sound_definitions.json` in resource packs.
 */
declare function PlayVOToAll(eventName: string): void

/**
 * Plays an voice over line of sequence to players close to a point of reference
 *
 * @param eventName Audio asset ID. See `sound_definitions.json` in resource packs.
 * @param pointOfReference An entity to serve as reference to get the players close to it
 */
declare function PlayVOToClosePlayers(eventName: string, pointOfReference: number[]): void

/**
 * Plays an voice over line to specific players.
 *
 * @param eventName Audio asset ID. See `sound_definitions.json` in resource packs.
 * @param players The player entities.
 */
declare function PlayVOToPlayers(eventName: string, players: number[]): void

/**
 * Plays an voice over line to a specific team.
 *
 * @param eventName Audio asset ID. See `sound_definitions.json` in resource packs.
 * @param team The specific team.
 */
declare function PlayVOToTeam(eventName: string, team: string): void

/**
 * Automatically registers buildings as a rally point.
 *
 * @param villageId The village ID.
 * @param tag The building tag.
 * @param name The rally name.
 */
declare function RALLYMAN_AutoRegisterRallyPoints(villageId: number, tag: string, name: string): void

/**
 * Auto-trigger a rally point on unit count.
 * Declared out of a snippet.
 *
 * @param uniqueHandlerName The handler name used in `RALLYMAN_ListenForComponent`
 * @param callback The function to call.
 */
declare function RALLYMAN_DeclareCompositionHandler(uniqueHandlerName: string, callback: callback): void

/**
 * Auto-trigger a rally point on cooldown.
 * Declared out of a snippet.
 *
 * @param uniqueHandlerName The handler name used in `RALLYMAN_ListenForCooldown`
 * @param callback The function to call.
 */
declare function RALLYMAN_DeclareCooldownHandler(uniqueHandlerName: string, callback: callback): void

/**
 * Auto-trigger a rally point on a specific unit composition count.
 * Declared out of a snippet.
 *
 * @param uniqueHandlerName The handler name used in `RALLYMAN_ListenForSpecificComposition`
 * @param compositionInfo An array of objects containing the tag filter and required unit count.
 * @param callback The function to call.
 */
declare function RALLYMAN_DeclareSpecificCompositionHandler(uniqueHandlerName: string, compositionInfo: any, callback: callback): void

/**
 * Disables patrols between rally points of a given name. Piglins currently patrolling between rally points will continue to move toward
 * their destination, but will not patrol again from the destination rally point. Calling this function will remove the timer listeners
 * on the rally points, but this will happen next tick. As such, it is advised to avoid disabling and re-enabling patrols on the same tick.
 *
 * @param villageId Id of the village containing rally points
 * @param rallyPointName The name of the rally points to stop patrolling between.
 */
declare function RALLYMAN_DisablePatrols(villageId: number, rallyPointName: string): void

/**
 * Disables rally points
 *
 * @param villageId Village ID
 * @param rallyName Rally Name
 * @param amount Amount to disable
 */
declare function RALLYMAN_DisableRallyPoints(villageId: number, rallyName: string, amount: number): void

/**
 * Enables patrols between rally points of a given name. Only piglins that are marked to participate in patrols will move between rally points.
 *
 * @param villageId Id of the village containing the rally points.
 * @param rallyPointName Name of the rally points to start patrolling between.
 */
declare function RALLYMAN_EnablePatrols(villageId: number, rallyPointName: string): void

/**
 * Enables rally points
 *
 * @param villageId Village ID
 * @param rallyName Rally Name
 * @param amount Amount to disable
 */
declare function RALLYMAN_EnableRallyPoints(villageId: number, rallyName: string, amount: number): void

/**
 * Get enabled rally points
 *
 * @param villageId Village ID
 * @param rallyName Rally Name
 */
declare function RALLYMAN_GetEnabledRallyPoints(villageId: number, rallyName: string): number[]

/**
 * Gets all the rally point entities for a rally name.
 *
 * @param villageId The village ID.
 * @param name The rally name.
 */
declare function RALLYMAN_GetRallyPoints(villageId: number, name: string): number[]

/**
 * Gets all the units at a rally point.
 *
 * @param villageId The village ID.
 * @param rallyPoint The rally name.
 */
declare function RALLYMAN_GetUnitsFromRallyPoint(villageId: number, rallyPoint: number): number[]

/**
 * Initializes a village to use the rally point system.
 * Required if the village uses any RALLYMAN function.
 *
 * @param villageId The village ID.
 * @param rallyPointsInfo An array of objects containing rally point information. eg. `[ { name: "rallyA", accmulations: 5, count: 2 } ]`
 */
declare function RALLYMAN_Initdata(villageId: number, rallyPointsInfo: any): void

/**
 * Finds the closest rally point with enough units and launches evenly to several targets.
 * Returns an array of the sent units (corresponding to the `targetInfos` array).
 *
 * @param villageId The village ID.
 * @param rallyName The rally name.
 * @param count The number of rally points to send.
 * @param referenceEntity The reference entity for the closest entity check.
 * @param threshold The threshold of units the rally point must contain.
 * @param context Audio context for a rally man response
 * @param targetInfos An array of objects containing target information.
 */
declare function RALLYMAN_LaunchClosestNamedRallyPointsWithThreshold(villageId: number, rallyName: string, count: number, referenceEntity: number, threshold: number, context: object, targetInfos: TargetInfo[]): number[][]

/**
 * Finds the closest rally point with enough units and launches evenly to several targets.
 * Returns an array of the sent units (corresponding to the `targetInfos` array).
 *
 * @param villageId The village ID.
 * @param rallyPoints The rally point entities.
 * @param count The number of rally points to send.
 * @param referenceEntity The reference entity for the closest entity check.
 * @param threshold The threshold of units the rally point must contain.
 * @param context Audio context for a rally man response
 * @param targetInfos An array of objects containing target information.
 */
declare function RALLYMAN_LaunchClosestRallyPointsWithThreshold(villageId: number, rallyPoints: number[], count: number, referenceEntity: number, threshold: number, context: object, targetInfos: TargetInfo[]): number[][]

/**
 * Launches units at a rally point evenly to several targets.
 * Returns an array of the sent units (corresponding to the `targetInfos` array).
 *
 * @param villageId The village ID.
 * @param rallyPoint The rally point entity.
 * @param context Audio context for a rally man response
 * @param targetInfos An array of objects containing target information.
 */
declare function RALLYMAN_LaunchRallyPointAtTargets(villageId: number, rallyPoint: number, context: object, targetInfos: TargetInfo[]): number[][]

/**
 * Auto-trigger a rally point on unit count.
 *
 * @param uniqueHandlerName The handler name used in `RALLYMAN_DeclareCompositionHandler`
 * @param rallyPoint The rally point entity.
 * @param requiredUnitCount Threshold before auto-triggering.
 */
declare function RALLYMAN_ListenForComposition(uniqueHandlerName: string, rallyPoint: number, requiredUnitCount: number): void

/**
 * Auto-trigger a rally point on cooldown.
 *
 * @param uniqueHandlerName The handler name used in `RALLYMAN_DeclareCooldownHandler`
 * @param rallyPoint The rally point entity.
 * @param cooldown Time limit before auto-triggering.
 */
declare function RALLYMAN_ListenForCooldown(uniqueHandlerName: string, rallyPoint: number, cooldown: number): void

/**
 * Auto-trigger a rally point on unit composition.
 *
 * @param uniqueHandlerName The handler name used in `RALLYMAN_DeclareSpecificCompositionHandler`
 * @param rallyPoint The rally point entity.
 */
declare function RALLYMAN_ListenForSpecificComposition(uniqueHandlerName: string, rallyPoint: number): void

/**
 * Marks the given unit entities with a tag which allows them to participate in patrols between rally points.
 *
 * @param unitEntities Unit entities to mark for partrol participation.
 */
declare function RALLYMAN_MarkUnitsForPatrol(unitEntities: number[]): void

/**
 * Assigns entities to rally points evenly under a rally name.
 *
 * @param villageId The village ID.
 * @param name The rally name.
 * @param entities The units to recruit.
 */
declare function RALLYMAN_RecruitSpawnedUnit(villageId: number, name: string, entities: number[]): void

/**
 * Assigns entities spawned by a spawner to rally points evenly under a rally name.
 *
 * @param villageId The village ID.
 * @param name The rally name.
 * @param spawnerEntity The spawner entity.
 */
declare function RALLYMAN_RecruitSpawnerOutput(villageId: number, name: string, spawnerEntity: number): void

/**
 * Assigns entities rally points evenly under a rally name AFTER a time delay (use this to re-rally units once they've left)
 *
 * @param villageId The village ID.
 * @param name The rally name.
 * @param entities The units to recruit.
 * @param delay Time delay
 */
declare function RALLYMAN_RecruitUnitsAfterDelay(villageId: number, name: string, entities: number[], delay: number): void

/**
 * Registers an entity as a rally point.
 * Returns the rally point entity.
 *
 * @param villageId The village ID.
 * @param entity The entity to make a rally point.
 * @param name The rally name.
 */
declare function RALLYMAN_RegisterAsRallyPoint(villageId: number, entity: number, name: string): number

/**
 * Registers an entity as a rally point up to the rally count.
 * Returns the rally point entity or empty entities if unable to.
 *
 * @param villageId The village ID.
 * @param entity The entity to make a rally point.
 * @param name The rally name.
 */
declare function RALLYMAN_TryRegisterAsCappedRallyPoint(villageId: number, entity: number, name: string): number

/**
 * Return a random entity from an array of entities.
 * To get an array of entities @see FILTER_RandomCount or @see FILTER_RandomPercentage
 *
 * @param entities The array of entities to filter through.
 */
declare function RandomEntity(entities: number[]): number

/**
 * Return a random number (int) between the interval
 *
 * @param min The min value that can be returned.
 * @param max The max value that can be returned.
 */
declare function RandomIntFromInterval(min: number, max: number): number

/**
 * Return a random number specific to the worldgen RNG group.
 *
 * If you're looking for RNG unrelated to worldgen, avoid using this as it may affect reproducibility of various seeds.
 *
 * @param min The minimum range of the RNG number to return.
 * @param max The maxiuminm RNG number to return, inclusive
 */
declare function RandomNumWorldGen(min: number, max: number): number

/**
 * Returns random entities from an entity group up to a count.
 *
 * @param entities The original entity group.
 * @param count The desired count.
 */
declare function RandomUpToCount(entities: number[], count: number): number[]

/**
 * Recruits a spawners output to the ai rally reinforcement system
 *
 * @param villageId Owner village
 * @param ControlGroupTag Tag for the desired control group(s) that will recruit this spawner's output.
 * @param spawnerEntity Spawning structure
 */
declare function RecruitSpawnerOutput(villageId: number, ControlGroupTag: string, spawnerEntity: number): void

/**
 * Binds the lifetime of some entities to another one.
 *
 * @param ownerVillageId The owner village ID.
 * @param lifetimeEntity The lifetime entity.
 * @param destructionEntities The entities to destroy if the lifetime entity is destroyed.
 */
declare function RegisterForCleanup(ownerVillageId: number, lifetimeEntity: number, destructionEntities: number[]): void

/**
 * Remove an entity from a control group
 *
 * @param Entities Entities to remove from the group
 * @param ControlGroup Control group entity
 */
declare function RemoveFromGroup(Entities: number[], ControlGroup: number): any

/**
 * Resets the testing parameters for `GenerateAllVillageFactionSizes.js` test.
 * **DO NOT CALL THIS FUNCTION OUT OF THAT FILE**
 *
 *
 */
declare function ResetTestingParameters(): void

/**
 * Returns a resource object containing an entry for `.name` and `.amount`
 *
 * @param name The resource ID.
 * @param amount The number of resources.
 */
declare function Resource(name: string, amount: number): object

/**
 * Set the waypoint icon state of the entity
 *
 * @param entity The entity in question
 * @param id The waypoint icon id (POI_WAYPOINT_ICON_DICTIONARY)
 * @param iconState the icon state  (POI_WAYPOINT_ICON_STATE)
 */
declare function SetEntityWaypointIconState(entity: number[], id: string, iconState: string): void

/**
 * Set a global variable for a game rule.
 *
 * @param ruleName The name of the rule.
 * @param value The value to assign.
 */
declare function SetGameRuleVariable(ruleName: string, value: VariantData): void

/**
 * Sets the illager behavior mode.
 *
 * @param illagerEG The villager entity group.
 */
declare function SetIllagerBehavior(illagerEG: number[]): void

/**
 * Set the state of the mount world spawners
 *
 * @param spawnersActive if the world spawner is active or not
 */
declare function SetMountWorldSpawnerState(spawnersActive: boolean): void

/**
 * Set a save/loaded variable associated to a specific player (user).
 *
 * @param playerId The user ID.
 * @param key The variable key.
 * @param value The value to save.
 */
declare function SetPlayerVariable(playerId: string, key: string, value: number): void

/**
 * Helper to set a given team's resource to a specific amount (not additive!)
 *
 * @param team Team name whose resource to adjust.
 * @param resource Name of the resource to manipulate.
 * @param amount The new amount of the resource.
 */
declare function SetResourceForTeam(team: string, resource: string, amount: number): void

/**
 * Resets the testing parameters for `GenerateAllVillageFactionSizes.js` test.
 * **DO NOT CALL THIS FUNCTION OUT OF THAT FILE**
 *
 *
 */
declare function SetTimerForNextVillage(): void

/**
 * Sets a tutorial flag. Please note that the flag must be present in `gameresources.json`
 *
 * @param name The name of the tutorial flag
 * @param enabled A boolean value to set the tutorial flag to
 */
declare function SetTutorialFlag(name: string, enabled: boolean): void

/**
 * Sets up ai functionality and snippets. This must be called outside of any snippets
 *
 * @param AiRootConfig Ai configuration data
 */
declare function SetupBaseAIs(AiRootConfig: object): any

/**
 * Setup the basic clearing entities on the villages
 *
 * @param mainDeck the main deck of the village
 */
declare function SetupBasicVillageClearingCards(mainDeck: number[]): void

/**
 * Setup a piglin base to automatically fire telemetry events.
 * To be used in conjunction with `SetupDefaultTelemetryForPiglinBaseTriggerVolume`
 * **Must be called in the global scope.**
 * @see TelemetrySendEnemyBasePiglinEnterEvent
 * @see TelemetrySendEnemyBasePiglinExitEvent
 *
 * @param factionName The faction name of the piglin base.
 */
declare function SetupDefaultTelemetryForPiglinBase(factionName: string): void

/**
 * Setup telemetry handlesr for POI towers.
 *
 * @param name The tower telemetry name.
 * @param subCategory The telemetry subcategory.
 * @param timesConstructedGlobalVar The global variable for the number of times this tower has been constructed.
 * @param timesDeconstructedGlobalVar The global variable for the number of times this tower has been deconstructed.
 */
declare function SetupDefaultTelemetryForTowerPOI(name: string, subCategory: string, timesConstructedGlobalVar: string, timesDeconstructedGlobalVar: string): void

/**
 * Setup reinforcement control groups to be used by the ai. This is automatically called by aiInitialize but can be disabled and called manually.
 *
 * @param villageId Owner village
 * @param AiData The data for the ai to assign the reinforcements too
 */
declare function SetupReinforcementControlGroups(villageId: number, AiData: object): any

/**
 * Sets up things that a village needs in order to properly determine its current behavior, i.e. proximity volumes
 *
 * @param fountain The village fountain.
 * @param villageId The village ID.
 */
declare function SetupVillageBehavior(fountain: number, villageId: number): void

/**
 * Sets up the default village audio entity.
 *
 * @param villageId The village ID.
 * @param override An optional emitter state override.
 */
declare function SetVillageAudioDefault(villageId: number, override: string): void

/**
 * Refreshes a village's behavior.
 *
 * @param villageId The village ID.
 */
declare function SetVillageBehavior(villageId: number): void

/**
 * Updates the behaviour of a villager.
 *
 * @param villagerEG The villager entities.
 */
declare function SetVillagerBehavior(villagerEG: number[]): void

/**
 * Sets a temporary behavior for a village. These behaviors are defined in @see VILLAGE_TEMP_BEHAVIOR_STATE
 *
 * @param villageId The village ID.
 * @param behaviorState @see VILLAGE_TEMP_BEHAVIOR_STATE
 * @param duration The duration of the temporary behavior
 */
declare function SetVillageTemporaryBehavior(villageId: number, behaviorState: string, duration: number): void

/**
 * Set a "global" variable for a village.
 *
 * @param villageId The village ID the global is attached to.
 * @param key The global variable name to set.
 * @param value The value to set the variable to.
 */
declare function SetVillageVariable(villageId: number, key: string, value: number): void

/**
 * Show Onboarding Objective message
 *
 * @param message the id of the message to show
 * @param isCampaignOnboarding is campaign onboarding or basics onboarding
 */
declare function ShowOnboardingMessage(message: string, isCampaignOnboarding: boolean): void

/**
 * Shuffles an array randomly (non-deterministic)
 *
 * @param array An array of anything.
 */
declare function ShuffleArray(array: any[]): any[]

/**
 * Spawns one or more of a type of entity at the location of other entities.
 *
 * @param spawnLocationEntities The entities to spawn at. Will spawn at each entity in the group!
 * @param entityArchetype The archetype name of the entities to spawn.
 * @param spawnCount How many entities to spawn. Must be larger than 0.
 * @param team The name of the team to set.
 * @param villageId The id of the village to set the spawned entities to. Pass undefined if you don't want a village and faction to be assigned.
 * @param piglinAppearanceOverride TODO: What does this param do? Ask Daniel S.
 */
declare function SpawnEntitiesAt(spawnLocationEntities: number[], entityArchetype: string, spawnCount: number, team: string, villageId: number, piglinAppearanceOverride: string): number[]

/**
 * Spawns one or more of a type of entity throughout the village.
 *
 * @param entityArchetype The archetype name of the entities to spawn.
 * @param spawnCount How many entities to spawn. Must be larger than 0.
 * @param team The name of the team to set.
 * @param villageId The id of the village to set the spawned entities to. Must be loaded and must be set.
 * @param minRadius Min radius (suggested value: 20)
 * @param maxRadius Max radius (suggested value: 50)
 * @param piglinAppearanceOverride Appearance to set for piglins.
 */
declare function SpawnEntitiesInVillage(entityArchetype: string, spawnCount: number, team: string, villageId: villageId, minRadius: number, maxRadius: number, piglinAppearanceOverride: string): number[]

/**
 * Spawns a standard trigger volume.
 * Most information is inherited from the position entity.
 *
 * @param positionEntity Where to spawn the trigger volume.
 * @param entityArchetype The trigger volume archetype to spawn.
 * @param includeTags Inclusion tags this trigger volume will filter on.
 * @param excludeTags Exclusion tags this trigger volume will filter on.
 * @param alliance The alliance filter (eg. `ALLIANCE_FRIENDLY`, `ALLIANCE_ANY`)
 */
declare function SpawnStandardTriggerVolume(positionEntity: number, entityArchetype: string, includeTags: string[], excludeTags: string[], alliance: string): void

/**
 * Creates a trigger volume entity and returns it.
 *
 * @param positionEntity The entity to spawn the trigger volume at the position of.
 * @param lifetimeEntity The entity to tie the lifetime of the trigger volume to. Ie. when lifetimeEntity is destroyed, destroy the trigger volume as well.
 * @param entityArchetype The archetype name of the entity to spawn as the trigger volume.
 * @param team The name of the team to assign the trigger volume to.
 * @param villageId The village that owns this trigger volume. Pass as undefined to not associate the trigger volume with a village.
 * @param stretchVertically Maximally stretch the trigger volume bounds in the up-down direction?
 * @param includeTags The tags of things we want to detect as intruders.
 * @param excludeTags The tags of things we don't want to detect as intruders even if they satisfy includeTags.
 * @param alliance The alliance filter (eg. `ALLIANCE_FRIENDLY`, `ALLIANCE_ANY`)
 */
declare function SpawnTriggerVolume(positionEntity: number, lifetimeEntity: number, entityArchetype: string, team: string, villageId: number, stretchVertically: boolean, includeTags: string[], excludeTags: string[], alliance: string): number

/**
 * Creates a trigger volume entity and returns it. Uses multiple tagsets to detect intruders.
 *
 * @param positionEntity The entity to spawn the trigger volume at the position of.
 * @param lifetimeEntity The entity to tie the lifetime of the trigger volume to. Ie. when lifetimeEntity is destroyed, destroy the trigger volume as well.
 * @param entityArchetype The archetype name of the entity to spawn as the trigger volume.
 * @param team The name of the team to assign the trigger volume to.
 * @param villageId The village that owns this trigger volume. Pass as undefined to not associate the trigger volume with a village.
 * @param stretchVertically Maximally stretch the trigger volume bounds in the up-down direction?
 * @param triggerTags The tagsets to use to detect intruders. Given as an array of dictionaries of include/exclude tags. eg. [{include: ["player"], exclude: []}, {include: ["mob"], exclude: ["piglin"]}]
 */
declare function SpawnTriggerVolumeWithMultipleTagsets(positionEntity: number, lifetimeEntity: number, entityArchetype: string, team: string, villageId: number, stretchVertically: boolean, triggerTags: any[]): number

/**
 * Starts the match if it hasn't already been started. This will trigger snippets that are listening for
 * @see LISTENFOR_GlobalVariableChanged with the variable @see GAME_MODE_GLOBAL.matchStarted
 *
 *
 */
declare function StartMatch(): void

/**
 * Determine which onboarding piglin base has to destroy, and send correct telemetry event for it
 *
 *
 */
declare function StartPiglinBaseToDestroyOnboarding(): void

/**
 * Start tracking telemetry for a POI tower type.
 *
 * @param name The telemetry name.
 * @param towerTag The tag to uniquely identify this tower type.
 */
declare function StartTrackingTelemetryForTowerPOI(name: string, towerTag: string): void

/**
 * Helper function to swap the mount a player is riding to a new one.
 *
 * @param playerEntity The player entity swapping mounts.
 * @param interactedEntity The mount being interacted with.
 * @param currentMountId Identifier of the player's current mount entity.
 * @param newMountId Identifier of the player's new mount entity.
 * @param swapTeam Team name to assign to the old mount entity.
 */
declare function SwapMounts(playerEntity: number[], interactedEntity: number[], currentMountId: string, newMountId: string, swapTeam: string): void

/**
 * A village building card.
 * Adds a tag to a buildable.
 *
 * @param type The tag card name/tag.
 * @param count The number of copies (should always be 1).
 */
declare function TagCard(type: string, count: number): string[]

/**
 * Send ACT Completed Telemetry
 *
 * @param playerEntity the player
 * @param act the act that was completed
 */
declare function TelemetrySendActCompletedEvent(playerEntity: number[], act: string): void

/**
 * Send ACT Started Telemetry
 *
 * @param playerEntity The player
 * @param act The act that has just started
 */
declare function TelemetrySendActStartedEvent(playerEntity: number[], act: string): void

/**
 * Send Campaign Progress Telemetry
 *
 * @param justCompletedAct The name of the act that was just completed. 'null' if no act was completed.
 */
declare function TelemetrySendCampaignProgressEvent(justCompletedAct: string): void

/**
 * Helper function wrapper for logging a funnel step to telemetry
 *
 * @param playerEntity The player to associate the funnel step
 * @param funnelStepInfo The object data describing the funnel step (see: `FunnelSteps` in `aaaaa_telemetry_helpers.js`)
 */
declare function TelemetrySendFunnelEvent(playerEntity: number, funnelStepInfo: object): void

/**
 * Sends an invasion break started telemetry event.
 *
 *
 */
declare function TelemetrySendInvasionBreakEndedEvent(): void

/**
 * Sends an invasion break ended telemetry event.
 *
 *
 */
declare function TelemetrySendInvasionBreakStartedEvent(): void

/**
 * Record a telemetry event when the player completes a key action.
 *
 * @param playerEntity The player entity that completed the action.
 * @param keyActionCompleted The telemetry key.
 */
declare function TelemetrySendKeyActionCompletedEvent(playerEntity: number, keyActionCompleted: string): void

/**
 * Record a telemetry event when the server completes a key action.
 *
 * @param keyActionCompleted The telemetry key.
 */
declare function TelemetrySendKeyActionCompletedServerEvent(keyActionCompleted: string): void

/**
 * Send Mount Funnel Event
 *
 * @param playerEntity the playe entity
 * @param funnelName name of the funnel (e.g.:"mount_01_purple_tiger_A")
 * @param mountName the name of the mount (e.g.:"mount_01_purple_tiger")
 * @param stepName the name of the funnel step (encountered, feeds, unlocked)
 * @param stepCurrentGV global variable with the current funnel step
 * @param maxStep the max number of steps of the funnel (amount needed to feed the mount + encountered + unlocked)
 */
declare function TelemetrySendMountFunnelEvent(playerEntity: number[], funnelName: string, mountName: string, stepName: string, stepCurrentGV: number, maxStep: number): void

/**
 * Send Mount unlocked event.
 *
 * @param playerEntity the player entity.
 * @param mountName the mount name.
 */
declare function TelemetrySendMountUnlockedEvent(playerEntity: number[], mountName: string): void

/**
 * Records a telemetry event when the player collects some loot from a crate/chest.
 *
 * @param playerEntity The player entity.
 * @param name The telemetry name.
 * @param subcategory The telemetry subcategory.
 * @param category The telemetry category.
 */
declare function TelemetrySendPoiLootCollectedEvent(playerEntity: number, name: string, subcategory: string, category: string): void

/**
 * Records a telemetry event when the player interacts with a POI tower.
 *
 * @param playerEntity The player entity.
 * @param interactionType The type of interaction.
 * @param name The telemetry name.
 * @param subcategory The telemetry subcateogry.
 * @param timesConstructed The number of times the tower has been constructed.
 * @param timesDescontructed The number of times the tower has been deconstructd.
 */
declare function TelemetrySendPoiTowerInteractedEvent(playerEntity: number, interactionType: string, name: string, subcategory: string, timesConstructed: number, timesDescontructed: number): void

/**
 * Teleports given entities to the fast travel point of WoF.
 *
 * @param entities Entities to teleport.
 */
declare function TeleportEntitiesToWoF(entities: number[]): void

/**
 * Helper for a test. **DO NOT USE OUT OF TEST ENVIRONMENT**
 *
 *
 */
declare function TeleportPlayerToNextPosition(): void

/**
 * Initializes flavour test for a particular horde. Must be used ONLY in performance tests in SNIPPET_TestStarted.
 *
 * @param horde Horde name
 * @param testName Name of the flavour test. Must be the same as the one on LISTENFOR_TestStarted
 */
declare function TEST_FlavourTestInit(horde: string, testName: string): void

/**
 * Transfer units from one control group to another
 *
 * @param InitialGroupOwner Initial control group entity
 * @param FinalGroupOwner Final control group entity
 */
declare function TransferGroup(InitialGroupOwner: number, FinalGroupOwner: number): any

/**
 * Transfer Entities to a control group
 *
 * @param InitialGroupEntities Entities to transfer
 * @param FinalGroupOwner Final control group entity
 */
declare function TransferGroupUnits(InitialGroupEntities: number[], FinalGroupOwner: number): any

/**
 * Triggers a celebration.
 *
 * @param entity The central entity.
 * @param celebrationName The celebration name.
 */
declare function TriggerCelebration(entity: number, celebrationName: string): void

/**
 * Trigger a tutorial key for specific players with a delay.
 *
 * @param players The players to trigger the tutorial for
 * @param tutorialKey The tutorial key to use
 * @param delay The delay to apply to the tutorial item
 */
declare function TriggerDelayedTutorialForSpecificPlayersWithDefaultSettings(players: number, tutorialKey: string, delay: number): void

/**
 * Triggers a tutorial key for specific players, with respect to the `gv_do_not_skip_seen_tutorials` global variable.
 *
 * @param players The players to trigger the tutorial for
 * @param tutorialKey The tutorial key to use
 * @param grantRes The resource to grant alongside this item
 * @param bypass Whether to silently mark this tutorial item as complete or not
 * @param skipIfAlreadySeen Whether to skip this tutorial item if we've arleady seen it
 * @param dontMarkCompleted Whether to skip marking this tutorial item as complete
 */
declare function TriggerTutorialForSpecificPlayers(players: number, tutorialKey: string, grantRes: string, bypass: boolean, skipIfAlreadySeen: boolean, dontMarkCompleted: boolean): void

/**
 * Triggers a tutorial key for specific players that are near an entity, with respect to the `gv_do_not_skip_seen_tutorials` global variable.
 *
 * @param entity The entity that the tutorial should trigger near
 * @param tutorialKey The tutorial key to use
 * @param distance The maximum distance from the entity that players will get the tutorial
 * @param grantRes  The resource to grant alongside this item
 * @param bypass Whether to silently mark this tutorial item as complete or not
 * @param skipIfAlreadySeen Whether to skip this tutorial item if we've arleady seen it
 * @param dontMarkCompleted Whether to skip marking this tutorial item as complete
 */
declare function TriggerTutorialForSpecificPlayersNearAnEntity(entity: number, tutorialKey: string, distance: number, grantRes: string, bypass: boolean, skipIfAlreadySeen: boolean, dontMarkCompleted: boolean): void

/**
 * Trigger a tutorial hint and grant the tutorial unlock
 *
 * @param tutorialKey tutorial key
 * @param tutorialHintUnlock unlock resource
 * @param bypassTutorial bypass the tutorial or not
 */
declare function TriggerTutorialHintAndGrantUnlock(tutorialKey: string, tutorialHintUnlock: string, bypassTutorial: boolean): void

/**
 * Removes an infection buff from the Well of Fate (see: @InfectWoF)
 *
 *
 */
declare function UninfectWoF(): void

/**
 * Unlock a given journal entry
 *
 * @param journalUnlockResource JOURNAL_UNLOCKS Global Variable
 */
declare function UnlockJournalEntry(journalUnlockResource: string): void

/**
 * Used to manually trigger an ai reinforcement wave, usually through unified base response framework.
 *
 * @param villageId Owning village
 * @param AiConfig The main AiConfig
 * @param responseData An object containing: the % of unassigned units to gather, and distribution to each ai
 */
declare function UpdateAiResponseForBase(villageId: number, AiConfig: object, responseData: object): any

/**
 * Activates the invasion system (script side).
 *
 *
 */
declare function ActivateInvasionSystem(): void

/**
 * Auto-trigger multiple piglin structures destroyed response as per initialization rules
 * Declared out of a snippet
 *
 * @param snippetName The snippet/handler name
 * @param callback The callback function (param: villageId, last building entity destroyed)
 */
declare function BASE_DeclarePiglinMultipleStructuresDestroyedResponseHandler(snippetName: string, callback: callback): void

/**
 * Auto-trigger piglin structure damaged response as per initialization rules
 * Declared out of a snippet
 *
 * @param snippetName The snippet/handler name
 * @param callback The callback function (param: villageId, building entity)
 */
declare function BASE_DeclarePiglinStructureDamagedResponseHandler(snippetName: string, callback: callback): void

/**
 * Auto-trigger piglin structure destroyed response as per initialization rules
 * Declared out of a snippet
 *
 * @param snippetName The snippet/handler name
 * @param callback The callback function (param: villageId, building entity)
 */
declare function BASE_DeclarePiglinStructureDestroyedResponseHandler(snippetName: string, callback: callback): void

/**
 * Auto-trigger player structure spawned response as per initialization rules
 * Declared out of a snippet
 *
 * @param snippetName The snippet/handler name
 * @param callback The callback function (param: villageId, building entity)
 */
declare function BASE_DeclarePlayerStructureBuiltResponseHandler(snippetName: string, callback: callback): void

/**
 * Initialize the piglin multiple structures destroyed response handler
 *
 * @param villageId The village ID
 * @param snippetName The snippet name
 * @param debounceTimer The debounce timer
 * @param structureAmount The amount of structures to be destroyed to trigger this
 * @param structureDataArray An array of objects containing structure data in the format: [ { includeTags (optional): ["a", "b"], excludeTags (optional): ["c"] } ]
 */
declare function BASE_InitPiglinMultipleStructuresDestroyedResponse(villageId: number, snippetName: string, debounceTimer: number, structureAmount: number, structureDataArray: any): void

/**
 * Initialize the piglin structure damaged response handler
 *
 * @param villageId The village ID
 * @param structureDataArray An array of objects containing initialization information in the format: [ { snippetName: "snippet", debounceTimer (optional - default 1s): 30, healthThreshold (optional, default 0.99): 0.6, includeTags (optional): ["a", "b"], excludeTags (optional): ["c"] } ]
 */
declare function BASE_InitPiglinStructureDamagedResponse(villageId: number, structureDataArray: any): void

/**
 * Initialize the piglin structure damaged response handler
 *
 * @param villageId The village ID
 * @param structureDataArray An array of objects containing initialization information in the format: [ { snippetName: "snippet", debounceTimer (optional - default 1s): 30, includeTags (optional): ["a", "b"], excludeTags (optional): ["c"] } ]
 */
declare function BASE_InitPiglinStructureDestroyedResponse(villageId: number, structureDataArray: any): void

/**
 * Initialize the player structure spawned response handler
 *
 * @param villageId The village ID
 * @param structureDataArray An array of objects containing initialization information in the format: [ { snippetName: "snippet", debounceTimer (optional - default 1s): 30, distanceCheck: 200, includeTags (optional): ["a", "b"], excludeTags (optional): ["c"] } ]
 */
declare function BASE_InitPlayerBuiltStructureResponse(villageId: number, structureDataArray: any): void

/**
 * Begins Act 1.
 *
 *
 */
declare function BeginAct1(): void

/**
 * Helper function to add the cage buildables to a mob alliance village deck and setup listeners related to them.
 *
 * @param mainDeck Main mob alliance village deck.
 * @param mobId Id of the mob alliance that is caged up.
 * @param villageId Id of the mob alliance village.
 */
declare function BuildMobAllianceCages(mainDeck: string[], mobId: string, villageId: number): void

/**
 * Builds a night outpost using the night outpose horde deck
 *
 *
 */
declare function BuildNightOutpost(): void

/**
 * End Campaign Act 2
 *
 *
 */
declare function CampaignAct2End(): void

/**
 * Check and play an invasion action origin point VO (checks if a base is the origin point of an invasion action, then plays associated VO)
 *
 * @param villageId The village ID
 */
declare function CheckAndPlayInvasionActionOriginPointVO(villageId: number): void

/**
 * Checks if any horde can enter and does so if conditions are true.
 *
 * @param triggerTime When is this triggered? DAWN, DUSK or IMMEDIATE
 */
declare function CheckAndProgressHordeEntry(triggerTime: string): void

/**
 * Checks if any mob alliance occupation can start and does so if conditions are true.
 *
 * @param triggerTime When is this triggered? DAWN, DUSK or IMMEDIATE
 */
declare function CheckAndProgressMobAllianceOccupation(triggerTime: string): void

/**
 * Check if act 2 is completely over.
 *
 *
 */
declare function CheckIfAct2IsOver(): boolean

/**
 * Check if a specific base response has been escalated/triggered.
 *
 * @param id The village ID.
 * @param escalationKey The escalation key.
 */
declare function CheckIfVillageIDIsEscalated(id: number, escalationKey: string): boolean

/**
 * Places a new claimed area for the given piglin faction.
 * @returns The newly placed claimed area entity -OR- an invalid entity if a new claimed area could not be placed.
 *
 * @param faction Name of the piglin faction claiming the overworld area.
 * @param areaRadius Radius of the area being claimed. Used for placement rules to space this area accordingly.
 */
declare function ClaimInvasionArea(faction: string, areaRadius: number): number

/**
 * Create a claimed area for piglins.
 * @returns The claimed area entity.
 *
 * @param horde The piglin horde.
 * @param positionEntity Where to create the claimed area.
 * @param areaRadius The radius of the area.
 */
declare function ClaimPiglinArea(horde: string, positionEntity: number, areaRadius: number): entity

/**
 * Claims an initial area on the overworld for a given piglin faction. Also places outposts in the newly claimed area.
 * Used when introducing a new piglin horde to the overworld.
 *
 * @param faction Name of the piglin faction claiming the area.
 */
declare function ClaimPregameAreas(faction: string): void

/**
 * Grant any dynamic base loot assigned to a base to the campaign team.
 * @returns Map of rewarded resources for presentation.
 *
 * @param villageId The village ID of the piglin base.
 */
declare function CollectDynamicBaseLoot(villageId: number): object

/**
 * Collects village chest rewards from all eligible villages.
 * Returns true if something was collected.
 *
 * @param playerEntity The collecting player entity.
 */
declare function CollectRewardsFromAllVillages(playerEntity: number): boolean

/**
 * Debug set a village V2 attack intention.
 *
 * @param horde The piglin horde.
 * @param isMobAllianceAttack If a mob alliance or village village should be targeted.
 */
declare function DAI_DebugSetAttackMobAllianceV2(horde: string, isMobAllianceAttack: boolean): void

/**
 * Handled logic for executing village attacks.
 * Version 2: this type of attack does not rely on having a source base planning the attack.
 *
 * @param faction name of the piglin faction attacking the village.
 * @param source village entity being attacked.
 * @param strength Strength of the attack.
 * @param time How long the attack lasts.
 */
declare function DAI_ResolveAttackVillageV2(faction: string, source: number, strength: number, time: number): boolean

/**
 * Logic to resolve executing an invasion action for piglins claiming a new area in the overworld.
 * @return 'True' if executing the action was successful. 'False' if not.
 *
 * @param faction Name of the piglin faction executing this action.
 */
declare function DAI_ResolveClaimArea(faction: string): boolean

/**
 * Handles logic in response to a delayed 'build_defensive_outpost' action being executed.
 *
 * @param faction Name of the source base's faction.
 */
declare function DAI_ResolveDefensiveOutpost(faction: string): boolean

/**
 * Handles logic in response to "establish_horde" action being executed.
 *
 * @param faction Name os the source base's faction.
 */
declare function DAI_ResolveEstablish(faction: string): boolean

/**
 * Handles logic in response to a delayed 'build_far_base' action being executed.
 *
 * @param faction Name of the source base's faction.
 */
declare function DAI_ResolveFarBase(faction: string): boolean

/**
 * Handles logic in response to a delayed 'build_near_base' action being executed.
 *
 * @param faction Name of the source base's faction.
 */
declare function DAI_ResolveNearBase(faction: string): boolean

/**
 * Handles logic in response to a delayed 'build_offensive_outpost' action being executed.
 *
 * @param faction Name of the source base's faction.
 */
declare function DAI_ResolveOffensiveOutpost(faction: string): boolean

/**
 * Handles logic in response to a delayed 'oops' action being executed.
 *
 * @param faction Name of the source base's faction.
 * @param target Target base entity
 * @param hidden Whether or not the Oops will only be telegraphed on the map when it occurs.
 */
declare function DAI_ResolveOops(faction: string, target: number, hidden: boolean): boolean

/**
 * Handles logic in response to a delayed 'upgrade_base' action being executed.
 *
 * @param faction Name of the source base's faction.
 * @param target Target base entity.
 */
declare function DAI_ResolveUpgradeBase(faction: string, target: number): boolean

/**
 * Handles the logic for planning an attack action against a mob alliance village
 * Version 2: This attack will be planned against a village without having a piglin base responsible for the attack.
 *
 * @param faction name of the faction planning the attack.
 */
declare function DAI_SetAttackMobAllianceV2(faction: string): boolean

/**
 * Handles the logic for planning an attack action against a villager village
 * Version 2: This attack will be planned against a village without having a piglin base responsible for the attack.
 *
 * @param faction name of the faction planning the attack.
 */
declare function DAI_SetAttackVillageV2(faction: string): boolean

/**
 * Handles the logic for planning a boss level attack action against a villager village
 *
 * @param faction name of the horde planning the attack.
 */
declare function DAI_SetAttackVillageV2BossAttack(faction: string): boolean

/**
 * Logic for planning invasion action for piglins claiming a new area on the map.
 * @return 'True' if planning the action was successful. 'False' if not.
 *
 * @param faction Name of the piglin faction planning this action.
 * @param selectSource Whether this action should be based from an existing base of the given faction.
 */
declare function DAI_SetClaimArea(faction: string, selectSource: boolean): boolean

/**
 * Determines if a 'build_defensive_outpost' invasion action can be planned.
 * If so, sets the action to happen that night.
 *
 * @param faction Name of faction planning the action.
 * @param selectSource Whether or not should generate a base source or be an action with no source (horde-wise action).
 */
declare function DAI_SetDefensiveOutpost(faction: string, selectSource: boolean): boolean

/**
 * Determines if an "establish_horde" invasion action can be planned.
 * If so, sets the action to happen that night.
 *
 * @param faction Name of faction planning the action.
 * @param selectSource Whether or not should generate a base source or be an action with no source (horde-wise action).
 */
declare function DAI_SetEstablish(faction: string, selectSource: boolean): boolean

/**
 * Determines if a 'build_far_base' invasion action can be planned.
 * If so, sets the action to happen that night.
 *
 * @param faction Name of faction planning the action.
 * @param selectSource Whether or not should generate a base source or be an action with no source (horde-wise action).
 */
declare function DAI_SetFarBase(faction: string, selectSource: boolean): boolean

/**
 * Determines if a 'build_near_base' invasion action can be planned.
 * If so, sets the action to happen that night.
 *
 * @param faction Name of faction planning the action.
 * @param selectSource Whether or not should generate a base source or be an action with no source (horde-wise action).
 */
declare function DAI_SetNearBase(faction: string, selectSource: boolean): boolean

/**
 * Determines if a 'build_offensive_outpost' invasion action can be planned.
 * If so, sets the action to happen that night.
 *
 * @param faction Name of faction planning the action.
 * @param selectSource Whether or not should generate a base source or be an action with no source (horde-wise action).
 */
declare function DAI_SetOffensiveOutpost(faction: string, selectSource: boolean): boolean

/**
 * Determines if an 'oops' invasion action can be planned.
 * If so, sets the action to happen that night.
 *
 * @param faction Name of faction planning the action.
 * @param hidden If true, this action will not show on the map when being set or thwarted. It will still appear when executed.
 * @param selectSource Whether or not should generate a base source or be an action with no source (horde-wise action).
 */
declare function DAI_SetOops(faction: string, hidden: boolean, selectSource: boolean): boolean

/**
 * Determines if an 'upgrade_base' invasion action can be planned.
 * If so, sets the action to happen that night.
 *
 * @param faction Name of faction planning the action.
 * @param selectSource Whether or not should generate a base source or be an action with no source (horde-wise action).
 */
declare function DAI_SetUpgradeBase(faction: string, selectSource: boolean): boolean

/**
 * Deactivates the invasion system (script side) completely.
 *
 *
 */
declare function DeactivateInvasionSystem(): void

/**
 * Declares the recurring spawner snippets that later will be called on `StartRecurringSpawner`. This function MUST be called outside a snippet at the initialization of the file
 *
 * @param uniqueSpawnerId The unique string id for this recurring spawner
 * @param entityToSpawnId The archetype name of the entity to spawn.. e.g.: `"badger:piglin_runt"`
 * @param recurringTime The time it will take to spawn a new entity after the previous has been killed
 * @param moveLocationTag The tag of the entity the newly spawned entity will move to (can be null). For it to work you have to tag the entity you want this entity to move to with the `moveLocationTag + villageId` tag
 * @param moveToEntityInsteadOfPosition Boolean to define if the entity is going to move to a position (with minimum distance of moveDistanceFromTarget) or to an entity
 * @param moveDistanceFromTarget In the case the move type is to a position the designer can define the distance from the target to stop moving
 * @param recurringSpawnerCallback A callback function called after the entity has been spawned (Optional)
 * @param piglinAppearanceOverride TODO: What does this param do? Ask Daniel S.
 */
declare function DeclareRecurringSpawnerSnippets(uniqueSpawnerId: string, entityToSpawnId: string, recurringTime: number, moveLocationTag: string, moveToEntityInsteadOfPosition: boolean, moveDistanceFromTarget: number, recurringSpawnerCallback: callback, piglinAppearanceOverride: string): void

/**
 * Adjust the number of horde cards to draw for planning invasion actions.
 *
 *
 */
declare function DecrementHordeDraws(): void

/**
 * Despawns a base's mob.
 *
 * @param villageId The village ID.
 * @param secondsBetweenDespawns The delay between each despawn.
 */
declare function DespawnPiglinBaseMobs(villageId: number, secondsBetweenDespawns: number): void

/**
 * Despawns a base's structures.
 *
 * @param structuresEg The structure entities.
 * @param totalDespawnDuration The total time for everything to be despawned.
 */
declare function DespawnPiglinBaseStructures(structuresEg: number[], totalDespawnDuration: number): void

/**
 * Absolutely destroys the given buildings
 *
 * @param entities Buildings to destroy.
 */
declare function DestroyStuffForReal(entities: number[]): void

/**
 * Starts the horde arrival sequence after the meet the boss FMV as well as
 * triggers various feedback for the player.
 *
 * @param horde The horde.
 */
declare function DoAfterMeetTheBossActions(horde: string): void

/**
 * Draw a single horde card for planning an invasion action. The faction returned in the snippet
 * is indicated by which card was drawn.
 *
 *
 */
declare function DrawInvasionHordeCard(): void

/**
 * Sets up the number of horde cards to draw for planning invasion actions and then starts the drawing process.
 *
 *
 */
declare function DrawInvasionHordeCards(): void

/**
 * Enable WOF nudges
 *
 * @param enabled Whether enabled or not
 */
declare function EnableWofNudges(enabled: boolean): void

/**
 * Evaluates all the current known information about invasion and advances the phase.
 *
 *
 */
declare function EvaluateAndUpdateInvasionPhase(): void

/**
 * Cleans up map data and signals the execution of all set invasion actions.
 *
 *
 */
declare function ExecuteAllInvasionActions(): void

/**
 * Removes the occupation state from a village and cleans up the remnents of that state.
 *
 * @param villageId Id of the village under occupation.
 * @param hordeName The occupying horde.
 */
declare function FinishVillageOccupation(villageId: number, hordeName: string): void

/**
 * Enforces the specific variation of ONE next base after which returns to normal variation assignment (for the specific type of variation - flavour or objective).
 *
 * @param variationId The id to distinguish which kind of variation to use: @see VARIATION_ID_FLAVOUR and @see VARIATION_ID_OBJECTIVE
 * @param value The specific variation that the next base should feature.
 */
declare function ForceNextBaseVariation(variationId: number, value: string): void

/**
 * Gather nearest units and send to specified location
 *
 * @param unitTags The tags that the units must have
 * @param tagsToExclude The tags that the units must not have
 * @param villageId The village ID
 * @param targetEntity The target entity
 * @param percentage Percentage of units to send from filtered units
 * @param tagToAdd Add a tag to selected units
 * @param tagToRemoveFromUnusedGatheredUnits Remove a tag from units that were not selected during percentage choosing
 * @param minUnits Minimum number of units to send
 * @param follow Whether to follow till target is gone
 * @param callback The callback
 */
declare function GatherNearestUnitsAndSendToLocation(unitTags: string[], tagsToExclude: string[], villageId: number, targetEntity: number, percentage: number, tagToAdd: string, tagToRemoveFromUnusedGatheredUnits: string, minUnits: number, follow: boolean, callback: callback): void

/**
 * Determines and returns a piglin base that will build a defensive outpost.
 *
 * @param faction Name of the faction attempting to build the outpost.
 */
declare function GenerateDefensiveOutpostSource(faction: string): number

/**
 * Determines and returns a piglin base that will build a new base.
 *
 * @param faction Name of the faction attempting to build the new base.
 */
declare function GenerateNewBaseSource(faction: string): number

/**
 * Determines and returns a piglin base that will build a new outpost.
 *
 * @param faction Name of the faction attempting to build the new outpost.
 */
declare function GenerateOffensiveOutpostSource(faction: string): number

/**
 * Determines and returns a piglin base that will oops.
 *
 * @param faction Name of the faction attempting to oops.
 */
declare function GenerateOopsSource(faction: string): number

/**
 * Determines and returns a piglin base that will upgrade.
 *
 * @param faction Name of the faction attempting to upgrade.
 */
declare function GenerateUpgradeBaseSource(faction: string): number

/**
 * Used to define a geenric counter given provided variable name, default value and (empty/non-empty) arrays of allowed input.
 * Empty array means input can be anything.
 *
 * @param gvName Global variable name used to count.
 * @param defaultValue Default value assigned from the game start.
 * @param ...allowedInput Any number of [] arrays of allowed input.
 */
declare function GenericCounter(gvName: string, defaultValue: number, ...allowedInput: object[]): number

/**
 * Used to defined a snapshot that can record information about the state of counters.
 *
 * @param nameFunc Anonymous function for defining a name for the snapshot.
 */
declare function GenericSnapshot(nameFunc: function): number

/**
 * Used to define a trigger that can be used in the staggered entry flow.
 * A trigger consists of expected number when it should trigger, corresponding counter it will check, snapshot to compare against and arrays of extra conditions.
 *
 * @param expectedNum Value of the counter when the trigger should fire.
 * @param counter Corresponding counter to check. Must have same input dimension.
 * @param snapshot Snapshot to compare against. What the expectedNum should be relative to?
 * @param ...input Arays [] of input.
 */
declare function GenericTrigger(expectedNum: number, counter: object, snapshot: object, ...input: object[]): object

/**
 * Returns the names of all factions that still have bases.
 *
 *
 */
declare function GetAliveFactions(): string[]

/**
 * Returns all buildings of the given village
 *
 * @param villageId Village ID
 */
declare function GetAllBuildings(villageId: number): number[]

/**
 * Returns all the village entities that belong to a friendly faction
 * Currently only considers villager factions.
 *
 *
 */
declare function GetAllFriendlyVillages(): number[]

/**
 * Returns all the village entities that belong to a piglin faction
 * Currently only considers attack, defend, and obstacle factions.
 *
 *
 */
declare function GetAllInvasionBases(): number[]

/**
 * Returns all the mob alliance villages.
 *
 *
 */
declare function GetAllMobAllianceVillages(): number[]

/**
 * Gets the number of attack bases that've been destroyed.
 *
 *
 */
declare function GetAttackBasesDestroyed(): number

/**
 * Gets the Attack Strength based off of values specified in invasion_intentions_attack_village.js
 * Version 2: This version doesn't base the strength off the source base since v2 attacks don't have one.
 *
 * @param horde name of the piglin faction performing the attack.
 */
declare function GetAttackStrengthV2(horde: string): number

/**
 * Calculate the attack duration percent for a given strength.
 *
 * @param strength The strength of the attack.
 */
declare function GetAttackTimeV2(strength: number): number

/**
 * Retrieves the minimum amount of time (in seconds) for a village attack to last.
 * Can be different between different piglin hordes.
 *
 * @param horde Name of a piglin horde to check min attack time.
 */
declare function GetAttackV2MinSeconds(horde: string): number

/**
 * Retrieves the audio entity for a base.
 *
 * @param villageId The village ID of the base.
 * @param overrideTag An optional override tag for specific audio entities.
 */
declare function GetAudioEntityForBase(villageId: number, overrideTag: string[]): number

/**
 * Retrieves the flavour deck for given horde and size.
 *
 * @param variationId The id to distinguish which kind of variation to use: @see VARIATION_ID_FLAVOUR and @see VARIATION_ID_OBJECTIVE
 * @param horde Name of the horde
 * @param baseSize Size of the base
 */
declare function GetBaseVariationDefinitionDeck(variationId: number, horde: string, baseSize: string): number[]

/**
 * Retrieves the camp slot for act1 piglin spawning based on the village entity based in.
 *
 * @param villageEntity village entity to check for surrounding piglin camp slots.
 */
declare function GetCampPlatementSlotFromVillage(villageEntity: number): StringLiteralLike

/**
 * Gets the number of defend bases that've been destroyed.
 *
 *
 */
declare function GetDefendBasesDestroyed(): number

/**
 * Gets the village attack construction & response details for the defend faction.
 *
 * @param baseSize The FOB size.
 */
declare function GetDefendFactionVillageAttackData(baseSize: string): any

/**
 * Returns only defensive buildings of the village.
 *
 * @param villageId Village ID
 */
declare function GetDefensiveBuildings(villageId: number): number[]

/**
 * Returns the planned invasion action of the piglin base. Empty string if none.
 *
 * @param villageId Piglin base village id.
 */
declare function GetDelayedInvasionAction(villageId: number): string

/**
 * Get the initial base configuration for a horde.
 * Affected by difficulty.
 *
 * @param horde The piglin horde.
 */
declare function GetHordeBasesSetupConfig(horde: string): object

/**
 * Returns claimed area entities of the given horde.
 *
 * @param hordeName Name of the horde.
 */
declare function GetHordeClaimedAreas(hordeName: string): number[]

/**
 * Retrieves the "actual" horde name if the horde order was provided.
 * If the horde hasn't arrived yet, returns null.
 *
 * @param hordeInput Horde order or horde name.
 */
declare function GetHordeName(hordeInput: string): string

/**
 * Returns floating point sum of radiuses of all claimed areas.
 *
 * @param hordeName Name of the horde.
 */
declare function GetHordeTotalClaimedAreaSize(hordeName: string): number

/**
 * Returns the number of horde cards in the invasion horde deck
 *
 *
 */
declare function GetInvasionHordeDeckCount(): number

/**
 * Returns the stored value in the global var that keeps track of how many horde cards to draw
 * for planning invaison actions.
 *
 *
 */
declare function GetInvasionHordeDraws(): number

/**
 * Gets the current invasion phase
 *
 *
 */
declare function GetInvasionPhase(): number

/**
 * Gets the global variable that tracks when the mob alliance occupation has been built and what Id belongs to that base.
 *
 * @param mobId Id of the mob alliance being occupied.
 */
declare function GetMABaseBuiltVar(mobId: string): string

/**
 * Get tag for mob alliance cage
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMACageTag(mobId: string): string

/**
 * Get tag for mob alliance central building
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMACenterBuildingTag(mobId: string): string

/**
 * Get tag for mob alliance gather points
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAGatherPointsTag(mobId: string): string

/**
 * Get tag for mob alliance houses
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAHouseTag(mobId: string): string

/**
 * Get tag for mob alliance building hurtbox
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAHurtboxTag(mobId: string): string

/**
 * Get tag for mob alliance mobs
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAMobsTag(mobId: string): string

/**
 * Get tag for piglins at a mob alliance attacking enemies
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAPiglinAttackingEnemyTag(mobId: string): string

/**
 * Get tag for piglin portal occupying mob alliance
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAPiglinPortalTag(mobId: string): string

/**
 * Get tag for piglins attacking mob alliance buildings
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAPiglinsAttackingBuildingsTag(mobId: string): string

/**
 * Get tag for piglins at a mob alliance village
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAPiglinsTag(mobId: string): string

/**
 * Get tag for mob alliance's piglin targets
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAPiglinsTargetTag(mobId: string): string

/**
 * Get tag for player entities in the vicinity of a mob alliance
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAPlayerEntitiesInAreaTag(mobId: string): string

/**
 * Get tag for player in the vicinity of the mob alliance
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMAPlayerInAreaTag(mobId: string): string

/**
 * Gets the global variable that tracks when the mob alliance village has been built and what Id belongs to that village.
 *
 * @param mobId id of the mob alliance that has been built.
 */
declare function GetMAVillageBuiltVar(mobId: string): string

/**
 * Finds the center building for a mob alliance village based on a given mob name.
 *
 * @param mobId Name of the mob
 */
declare function GetMobAllianceCenterBuilding(mobId: string): number[]

/**
 * Returns a data object containing data for a specific mob alliance.
 *
 * @param mobId Id of the mob alliance
 */
declare function GetMobAllianceData(mobId: string): object

/**
 * Retrieves the "actual" mob alliance name if the mob alliance order was provided.
 * If the mob alliance hasn't arrived yet, returns null.
 *
 * @param mobAllianceInput Mob Alliance name or order.
 */
declare function GetMobAllianceName(mobAllianceInput: string): string

/**
 * Returns only non-defensive and non-central buildings (does not return fountains, allegiance structures, etc.)
 *
 * @param villageId Village ID
 */
declare function GetNonDefensiveBuildings(villageId: number): number[]

/**
 * Gets the number of obstacle bases that've been destroyed.
 *
 *
 */
declare function GetObstacleBasesDestroyed(): number

/**
 * Get Outpost Difficulty from phase/game state (always returns 1/2/3)
 *
 *@param faction the faction of the outposts
 */
declare function GetOutpostDifficultyFromPhase(faction: string): number
/**
 * Increases the outpost difficulty. Tried to horde progression
 *
 * @param faction the faction of the outposts
 */
declare function IncreaseOutpostDifficultyForFaction(faction: string): void

/**
 * Get all the placement slot name from a given village
 *
 * @param villageEntity Village entity
 */
declare function GetPlacementSlotFromVillage(villageEntity: number[]): string

/**
 * Gets the closest player or mob to a portal entity.
 *
 * @param portal The portal entity.
 */
declare function GetPlayerOrMobCloseToPortal(portal: number): number

/**
 * Returns all the village entities that are friendly and have been reserved by the invasion system.
 *
 *
 */
declare function GetReservedFriendlyVillages(): number[]

/**
 * Returns all the village entities that belong to the given faction and have been reserved by the invasion system.
 *
 * @param faction Name of the faction that owns the villages.
 */
declare function GetReservedFactionBases(faction: string): number[]

/**
 * Returns staggered entry info according to current game difficulty.
 *
 *
 */
declare function GetStaggeredEntryInfo(): number

/**
 * Returns the number of invasion cards to be drawn at dawn.
 *
 *
 */
declare function GetTotalIntentionsDrawsAtDawn(): number

/**
 * Returns all the village entities that belong to the given faction.
 *
 * @param factionName Name of the faction that owns villages.
 */
declare function GetFactionBases(factionName: string): number[]

/**
 * Retrieves an object containing VO and cinematics data for the boss of a given piglin horde.
 *
 * @param factionName Name of the piglin faction.
 */
declare function GetFactionBossData(factionName: string): object

/**
 * Returns the number of cards in a given faction's invasion deck.
 *
 * @param faction Name of the faction whose deck should be counted.
 */
declare function GetFactionIntentionDeckCount(faction: string): number

/**
 * Returns all the village entities that have participated in invasion actions and are not reserved by the invasion system.
 *
 *
 */
declare function GetUnreservedAll(): number[]

/**
 * Returns all unreserved piglin hordes bases.
 *
 *
 */
declare function GetUnreservedBasesAll(): number[]

/**
 * Returns all the friendly village entities that have participated in invasion actions and are not reserved by the invasion system.
 *
 *
 */
declare function GetUnreservedFriendlyVillages(): number[]

/**
 * Returns all the friendly mob alliance villages that are currently available for invasion gameplay
 *
 *
 */
declare function GetUnreservedMobAllianceVillages(): number[]

/**
 * Returns all villager villages and mob alliance villages that may be targets for the invasion.
 *
 *
 */
declare function GetUnreservedTargetsAll(): number[]

/**
 * Returns all the village entities of a given faction that are not reserved by the invasion system.
 *
 * @param faction Name of the faction to query.
 */
declare function GetUnreservedFactionBases(faction: string): number[]

/**
 * Retrieves the variation data for a specific kind of variation (egs. flavour, objective)
 *
 * @param variationId The id to distinguish which kind of variation to use: @see VARIATION_ID_FLAVOUR and @see VARIATION_ID_OBJECTIVE
 */
declare function GetVariationData(variationId: number): object

/**
 * Returns the village composition data for a piglin base depending on its size and flavour.
 * The variationData should follow the pattern found in the attackVal.villageComposition object.
 *
 * @param villageId The id of the village.
 * @param variationData The data object containing all the composition data for sizes and flavours.
 */
declare function GetVillageCompositionData(villageId: number, variationData: object): object

/**
 * Safe accessor for getting the flavour of a village. If the village is not a base that supports
 * flavour variation, then the default flavour is returned.
 *
 * @param villageId The village ID.
 */
declare function GetVillageFlavour(villageId: number): string

/**
 * Safe accessor for getting the objective of a village. If the village is not a base that supports
 * objective variation, then the default objective is returned.
 *
 * @param villageId The village ID.
 */
declare function GetVillageObjective(villageId: number): string

/**
 * Handles logic for what actions to thwart based on the village that was destroyed.
 *
 * @param villageId ID of the village that has been destroyed.
 */
declare function HandleThwartingForDestroyedVillage(villageId: number): void

/**
 * Returns true/false result in regards to the fact whether or not the given piglin base is planning to do something at night.
 *
 * @param villageId Piglin base village id.
 */
declare function HasDelayedInvasionAction(villageId: number): boolean

/**
 * Creates a card from the hordeCards library
 *
 * @param faction The horde card's faction
 * @param count The number of cards to make
 */
declare function HordeCard(faction: string, count: number): string[]

/**
 * Sets up rally points for bases attacking another village (invasion attacks and mob alliance occupation bases)
 *
 * @param villageId Id of the base to setup.
 * @param data Data containing the rally point information ('viableRallyBuildingTags' and 'totalRallyPoints' properties)
 */
declare function InitRalliesForVillageAttack(villageId: number, data: object): void

/**
 * Returns a deck of invasion cards based on the given parameters
 *
 * @param faction Name of the faction who's cards to create.
 * @param type The type of cards to make.
 * @param count The amount of copies of the card to include.
 */
declare function IntentionCard(faction: string, type: string, count: number): string[]

/**
 * Introduces next mob alliance.
 *
 * @param mobAlliance Name of the mob alliance to introduce.
 */
declare function IntroduceNextMobAllianceAct2(mobAlliance: string): void

/**
 * Returns true if the invasion system's phase is greater than 0.
 *
 *
 */
declare function InvasionActive(): boolean

/**
 * Helper function to encapsulate calculating a village's defense, the resulting attack damage to apply, and distributing the damage
 * to the village's buildings. Mainly used in the context of Village Attacks.
 * NOTE: The village MUST be loaded before calling this function. This can be done by creating a damage request and applying damage in a snippet
 * responding to it.
 *
 * @param villageId Id of the village to damage.
 * @param hordeName Name of the piglin faction applying damage.
 * @param strength Strength of the village attack applying the damage.
 * @param percentComplete Percentage to scale the damage.
 */
declare function InvasionAttackV2ApplyDamage(villageId: number, hordeName: string, strength: number, percentComplete: number): void

/**
 * Apply period damage to an occupied village.
 *
 * @param villageId The village ID.
 * @param hordeName The occupying horde.
 * @param affectedBuildingCount The number of buildings affected.
 */
declare function InvasionOccupationApplyDamage(villageId: number, hordeName: string, affectedBuildingCount: number): void

/**
 * Checks if any horde has arrived yet.
 *
 *
 */
declare function IsAnyHordeArrived(): boolean

/**
 * Check if a village already escalated to an specific escalation.
 *
 * @param entityFromVillage A entity group that belongs to the village.
 * @param escalationKey String that represents the escalation in question.
 */
declare function IsBaseEscalated(entityFromVillage: number, escalationKey: string): void

/**
 * Checks if a invasion attack action is a boss level attack.
 *
 * @param faction The attacking horde.
 * @param strength The attack strength.
 */
declare function IsBossAttack(faction: string, strength: number): boolean

/**
 * Helper to determine if the village is a boss village.
 *
 * @param villageId The Id of the village.
 */
declare function IsBossVillage(villageId: number): boolean

/**
 * Check if the base size is an invasion attack base (forward operating base).
 * Note that this size only makes sense within an invasion context.
 *
 * @param baseSize The base size.
 */
declare function IsFOBSize(baseSize: string): boolean

/**
 * Checks whether the given string is a horde input (name or order).
 *
 * @param input String input
 */
declare function IsHordeInput(input: string): boolean

/**
 * Check if the base size is equal to the specified size.
 *
 * @param baseSize The base size.
 */
declare function IsLarge(baseSize: string): boolean

/**
 * Check if the base size is equal or greater to the specified size.
 *
 * @param baseSize The base size.
 */
declare function IsLargeOrGreater(baseSize: string): boolean

/**
 * Check if the base size is equal to the specified size.
 *
 * @param baseSize The base size.
 */
declare function IsMedium(baseSize: string): boolean

/**
 * Check if the base size is equal or greater to the specified size.
 *
 * @param baseSize The base size.
 */
declare function IsMediumOrGreater(baseSize: string): boolean

/**
 * Checks if given string is a mob alliance input (name or order)
 *
 * @param input String input
 */
declare function IsMobAllianceInput(input: string): boolean

/**
 * Determines if a given size corresponds to a mob alliance village controlled by piglins.
 *
 * @param size The village's size to check.
 */
declare function IsMobAlliancePiglinSize(size: string): boolean

/**
 * Returns a boolean indicating if the mob alliance has been unlocked (players can spawn mobs and build their spawners) or not.
 *
 * @param mobId ID of the mob alliance (e.g. zombie, skeleton, creeper, etc.)
 */
declare function IsMobAllianceUnlocked(mobId: string): boolean

/**
 * Is a villageID a mob alliance village
 *
 * @param villageId Village Id
 */
declare function IsMobAllianceVillage(villageId: number): boolean

/**
 * Checks whether the mob alliance occupation scenario has been completed, i.e. occupying piglins defeated and mob alliance awarded.
 *
 * @param mobId Name of the mob alliance
 */
declare function IsOccupationBeatOver(mobId: string): boolean

/**
 * Check if the base size is equal or greater to the specified size.
 *
 * @param baseSize The base size.
 */
declare function IsOutpost(baseSize: string): boolean

/**
 * Check if objective type isRaiding Party (check only for outposts)
 *
 * @param villageId The village Id
 */
declare function IsPiglinRaidingParty(villageId: number): boolean

/**
 * Check if a piglin faction is defeated (all portal bases destroyed and the boss killed)
 *
 * @param factionName the name of the faction
 */
declare function IsPiglinFactionDefeated(factionName: string): boolean

/**
 * Is a village a player outpost.
 *
 * @param villageId The village ID.
 */
declare function IsPlayerOutpost(villageId: number): boolean

/**
 * Check if the base size is a roaming base. Ie. an outpost or a vanguard base.
 * Note that this size only makes sense within an invasion context.
 *
 * @param baseSize The base size.
 */
declare function IsRoamingSize(baseSize: string): boolean

/**
 * Check if the base size is equal to the specified size.
 *
 * @param baseSize The base size.
 */
declare function IsSmall(baseSize: string): boolean

/**
 * Check if the base size is equal or greater to the specified size.
 *
 * @param baseSize The base size.
 */
declare function IsSmallOrGreater(baseSize: string): boolean

/**
 * Checks if base is a Structure Destructiont Base (if flavour is defined)
 *
 * @param villageId The village ID
 */
declare function IsStructureDestructionBase(villageId: number): boolean

/**
 * Returns true/false in regards to the fact whether or not a given village will be attacked by piglins in the upcoming night.
 *
 * @param villageId Village Id.
 */
declare function IsTargetOfDelayedInvasionAttack(villageId: number): boolean

/**
 * Check if the base size is equal or greater to the specified size.
 *
 * @param baseSize The base size.
 */
declare function IsVanguard(baseSize: string): boolean

/**
 * Checks if the village is allive (whether a fountain is still enabled or not)
 *
 * @param villageId Village ID
 */
declare function IsVillageAlive(villageId: number): boolean

/**
 * Checks if a village is under an invasion attack action.
 *
 * @param villageId The village to check.
 */
declare function IsVillageUnderInvasionAttack(villageId: number): boolean

/**
 * Helper function to debug LFC functionality.
 *
 * @param msg Debug message
 */
declare function LFC_Logi(msg: string): void

/**
 * Helper function to encapsulate removing the ability for players to spawn mob and build their spawners.
 *
 * @param mobId ID of the mob alliance (e.g. zombie, skeleton, creeper, etc.)
 */
declare function LockMobAlliance(mobId: string): void

/**
 * Changes the properties of a given mob spawner based on the current state of the campaign.
 *
 * @param spawner Spawner entity to configure.
 * @param isCentralBuilding Whether this building is the central mob alliance structure.
 * @param mobId name of the mob alliance this building belongs to.
 */
declare function ManageMobAllianceSpawner(spawner: number, isCentralBuilding: boolean, mobId: string): void

/**
 * Mark an escalation of a village as escalated.
 *
 * @param entityFromVillage A entity group that belongs to the village.
 * @param escalationKey String that represents the escalation in question.
 */
declare function MarkBaseAsEscalated(entityFromVillage: number, escalationKey: string): void

/**
 * Call this after resetting a village to let the game know that the village has been properly reset.
 *
 * @param villageId The village ID
 */
declare function MarkBaseAsReset(villageId: int): void

/**
 * Mark a specific base response as escalated.
 *
 * @param id The village ID
 * @param escalationKey The escalation global variable.
 */
declare function MarkVillageAsEscalatedById(id: number, escalationKey: string): void

/**
 * Logic to run for the aquiring the mob alliance once its occupying base is destroyed.
 *
 * @param mobId id of the mob alliance
 */
declare function OccupyingBaseDestroyed(mobId: string): void

/**
 * Runs logic that requires both the mob alliance village and occupation base to exist and be fully built.
 *
 * @param mobId ID of the mob alliance.
 */
declare function OnMobAllianceOccupationStarted(mobId: string): void

/**
 * Places the first base for a horde.
 *
 * @param horde The piglin horde.
 * @param debugSkipCinematic Should the cinematic be played.
 */
declare function PlaceFirstBase(horde: string, debugSkipCinematic: boolean): void

/**
 * Play presentation events for invasion dawn stage.
 *
 *
 */
declare function PlayAudioUIDawnInvasionStage(): void

/**
 * Play common building destroyed VO
 *
 *
 */
declare function PlayCommonBuildingDestroyedVO(): void

/**
 * Play portal destroyed VO from a list
 *
 *
 */
declare function PlayCommonPortalDestroyedVO(): void

/**
 * Play portal Health Group 1 VO from a list
 *
 *
 */
declare function PlayCommonPortalHealthGroup1VO(): void

/**
 * Play portal Health Group 2 VO from a list
 *
 *
 */
declare function PlayCommonPortalHealthGroup2VO(): void

/**
 * Play portal Health Group 3 VO from a list
 *
 *
 */
declare function PlayCommonPortalHealthGroup3VO(): void

/**
 * Returns how many days the player was inactive.
 *
 *
 */
declare function PlayerActivity_GetInactiveDays(): number

/**
 * Increments how many days the player was inactive. Needs to be called once per day.
 *
 *
 */
declare function PlayerActivity_IncremenentInactiveDays(): void

/**
 * Returns whether or not the player is currently inactive.
 *
 *
 */
declare function PlayerActivity_IsPlayerInactive(): bool

/**
 * Ultimately resets an inactivity, meaning that player is becoming active again.
 *
 *
 */
declare function PlayerActivity_Reset(): void

/**
 * Plays a single card from a given faction's invasion deck.
 *
 * @param faction Name of the faction who is playing a card.
 */
declare function PlayFactionIntentionDeck(faction: string): void

/**
 * Checks and introduces hordes and mob alliances.
 *
 * @param triggerTime When is this triggered? DAWN, DUSK or IMMEDIATE
 */
declare function ProgressCampaign(triggerTime: string): void

/**
 * Refreshed the spawner config for all the mob alliance spawners in the mob alliance village.
 *
 * @param mobId name of the mob alliance to configure
 */
declare function RefreshAllSpawnersConfig(mobId: string): void

/**
 * Refreshes the behaviour of all the uncaged mobs for a given mob alliance
 *
 * @param mobId name of the mob alliance
 */
declare function RefreshBehaviourOfAllUncagedMobs(mobId: string): void

/**
 * Helper to remove music emitter entities from a village.
 *
 * @param villageId Id of the village removing music entities
 */
declare function RemoveAudioEntityFromBase(villageId: number): void

/**
 * Adds horde cards back into the invasion horde deck based on which piglin factions are available to plan invasion actions.
 *
 *
 */
declare function ReplenishInvasionHordeDeck(): void

/**
 * Adds horde cards back into the night outpost horde deck based on which piglin factions are available to build night outposts.
 *
 *
 */
declare function ReplenishNightOutpostHordeDeck(): void

/**
 * Tags the village so that it cannot be selected for invasion actions.
 *
 * @param villageEntity Village entity to tag.
 */
declare function ReserveVillage(villageEntity: number): void

/**
 * Resets the boss for a piglin base.
 *
 * @param villageId The id of the village to be reset.
 */
declare function ResetBoss(villageId: number): void

/**
 * Resets all the barrack escalation levels and update any built barracks configuration of a given village variation.
 * Also culls any entities in the village that are pop capped.
 *
 * @param villageId The id of the village
 * @param barracks An object containing barracks tags as keys, and corresponding barracks configs as values
 * @param escalationKeys An object containing all the escalation keys to reset as values
 */
declare function ResetEscalationAndBarracksForVillageVariation(villageId: number, barracks: any, escalationKeys: any): void

/**
 * Resets Invasion Draw Counter (do this when phase changes)
 *
 *
 */
declare function ResetInvasionDrawCounter(): void

/**
 * (CAMPAIGN ONLY) Select a behaviour action set to the mob based on the current state of the campaign
 *
 * @param mobEG The mob entity that will have the behaviour set changed
 * @param mobId The id of the mob so we can access the behaviour set dictionary
 * @param leftMobAllianceArea Is the mob leaving the mob alliance area?
 */
declare function SelectMobBehaviourSet(mobEG: number[], mobId: string, leftMobAllianceArea: boolean): void

/**
 * Resets the invasion faction deck for a given phase for all factions.
 * This clears out any existing cards.
 *
 * @param phase The current invasion phase.
 */
declare function SetAllFactionDecksFromPhase(phase: number): void

/**
 * Sets the phase for the audio entity at a base
 *
 * @param villageId The village ID.
 * @param audioPhase The phase string
 * @param overrideMusicEntityTag An optional override tags on specific music entities.
 */
declare function SetAudioPhaseForBase(villageId: number, audioPhase: string, overrideMusicEntityTag: string[]): void

/**
 * Set the barracks configuration to the right base size and aggro phase
 *
 * @param barracksEntities The Barracks entities to update the loadout configuration.
 * @param factionBarracksConfig The configuration of the barrack with all phases for that faction.
 */
declare function SetBarracksConfig(barracksEntities: number[], factionBarracksConfig: any): void

/**
 * Set the barracks configuration to the right base size, variation and aggro phase (Use this is the size has variations)
 *
 * @param barracksEntities The Barracks entities to update the loadout configuration.
 * @param factionBarracksConfig The configuration of the barrack with all phases for that faction.
 */
declare function SetBarracksConfigForVillageVariation(barracksEntities: number[], factionBarracksConfig: any): void

/**
 * Sets all the barrack escalation levels and update any built barracks configuration of a given village.
 *
 * @param villageId The id of the village
 * @param barracks An object containing barracks tags as keys, and corresponding barracks configs as values
 * @param escalationLevel The escalation level, it has to match the number on the barracks configuration dictionary e.g.:in `phase_0` the key is `0`
 */
declare function SetEscalationValueAndUpdateAllBarracksForVillage(villageId: number, barracks: any, escalationLevel: number): void

/**
 * Sets all the barrack escalation levels and update any built barracks configuration of a given village variation.
 *
 * @param villageId The id of the village
 * @param barracks An object containing barracks tags as keys, and corresponding barracks configs as values
 * @param escalationLevel The escalation level, it has to match the number on the barracks configuration dictionary e.g.:in `phase_0` the key is `0`
 */
declare function SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId: number, barracks: any, escalationLevel: number): void

/**
 * Set the barrack escalation level for that barrack and update any built barracks configuration of a given village
 * ResetEscalationAndBarracksForVillageVariation.
 *
 * @param villageId The id of the village.
 * @param barrackTag The name of the barracks (Please use the global names created E.g:`BARRACKS_NAME_FIGHTER`)
 * @param factionBarracksConfig the configuration of the barrack with all phases for that faction
 * @param escalationLevel The escalation level, it has to match the number on the barracks configuration dictionary e.g.:in `phase_0` the key is `0`
 * @param forceUpdate Set to true if you want to force barracks escalation to a previous point. If you want to reset a village, consider using
 */
declare function SetEscalationValueAndUpdateBarracksForVillage(villageId: number, barrackTag: string, factionBarracksConfig: any, escalationLevel: number, forceUpdate: boolean): void

/**
 * Set the barrack escalation level for that barrack and update any built barracks configuration of a given village, with variation (Use this if the village has variations)
 * ResetEscalationAndBarracksForVillageVariation instead.
 * ResetEscalationAndBarracksForVillageVariation.
 *
 * @param villageId The id of the village.
 * @param barrackTag The name of the barracks (Please use the global names created E.g:`BARRACKS_NAME_FIGHTER`)
 * @param factionBarracksConfig the configuration of the barrack with all phases for that faction
 * @param escalationLevel The escalation level, it has to match the number on the barracks configuration dictionary e.g.:in `phase_0` the key is `0`
 * @param forceUpdate Set to true if you want to force barracks escalation to a previous point. If you want to reset a village, consider using
 */
declare function SetEscalationValueAndUpdateBarracksForVillageVariation(villageId: number, barrackTag: string, factionBarracksConfig: any, escalationLevel: number, forceUpdate: boolean): void

/**
 * Sets the number of horde card draws that should be made for planning invasion actions.
 *
 * @param numberOfDraws The number of horde cards to draw.
 */
declare function SetInvasionHordeDraws(numberOfDraws: number): void

/**
 * Set the invasion phase
 *
 * @param phaseInt The phase to set the invasion to
 */
declare function SetInvasionPhase(phaseInt: number): void

/**
 * Set the state of mob world spawner close to their homesteads
 *
 * @param state the world spawner state
 */
declare function SetMobWorldHomesteadSpawnersState(state: boolean): void

/**
 * Set the mob world spawner state
 *
 * @param state the world spawner state
 */
declare function SetMobWorldSpawnersState(state: boolean): void

/**
 * Helper function to set a portal invulnerable.
 *
 * @param villageId The village ID of the potal.
 * @param isInvulnerable Should the portal be invulnerable?
 */
declare function SetPortalInvulnerable(villageId: number, isInvulnerable: boolean): void

/**
 * Set the state of the all roaming piglin spawners
 *
 * @param spawnersActive true for active false for inactive
 */
declare function SetRoamingInvisibleSpawnersState(spawnersActive: boolean): void

/**
 * Resets the invasion faction deck for a given phase.
 * This clears out any existing cards.
 *
 * @param factionName The faction name.
 * @param phase The invasion phase.
 */
declare function SetFactionDeckFromPhase(factionName: string, phase: number): void

/**
 * Sets up the audio entity for a base.
 *
 * @param villageId The village ID
 * @param audioEntityData The audio entity data - can be either a string pointing to the entity, or a dict for size/flavours as set up in the files base_response_piglin_attack/defend/obstacle files
 * @param removeOnVillageDestruction Optional: Whether or not the music entity should be removed automatically when the village is destroyed.
 */
declare function SetupAudioEntityForBase(villageId: number, audioEntityData: object, removeOnVillageDestruction: boolean): void

/**
 * Setup controllers for base piggo gold behaviour on a faction
 *
 * @param villageId The id of the faction.
 * @param totalNumberOfPiggosPerBase The maximum number of piggos a base can have
 */
declare function SetupBasePiggoGoldController(villageId: number, totalNumberOfPiggosPerBase: number): void

/**
 * Forces a DAI for a horde.
 *
 * @param cardType The action name for the card.
 * @param faction The horde.
 */
declare function SetupForcedDAIForFaction(cardType: string, faction: string): void

/**
 * Sets up listeners for an invasion boss level attack.
 *
 *
 */
declare function SetupInvasionAttackBossListeners(): void

/**
 * Sets up listeners for invasion system's dawn logic
 *
 *
 */
declare function SetupInvasionDawnListeners(): void

/**
 * Sets up listeners for invasion system's night logic
 *
 *
 */
declare function SetupInvasionNightListeners(): void

/**
 * Sets up listeners for invasion system's night outpost logic
 *
 *
 */
declare function SetupInvasionNightOutpostListeners(): void

/**
 * Sets up listeners for invasion system's noon logic
 *
 *
 */
declare function SetupInvasionNoonListeners(): void

/**
 * Sets up the general listeners for mob cages. Must spawn a cage with the given specific tag for this function to search for.
 *
 * @param villageId id of the village owning the cage.
 * @param cageTag tag of the cage buildable.
 * @param mobArchetype Optional: the mob archetype to spawn in the cage. Will be chosen at random if not set.
 * @param mobAmount Optional: the number of mobs to spawn in the cage. Defaults to 5 if not set.
 */
declare function SetupMobCages(villageId: number, cageTag: string, mobArchetype: string, mobAmount: number): void

/**
 * Creates the standard trigger volumes and listeners for a base. Includes the entered trigger volume (smaller, depends on base size) and gameplayer trigger volume (very large).
 * Also sets up a de-escalation cycle, in which all pop-capped units are despawned at dawn if no player is near the base.
 * You can add extra de-escalation logic by checking if @see ShouldBaseReset returns true, but be sure to call @see MarkBaseAsReset if you do.
 *
 * @param villageId The village ID.
 * @param baseData The base setup data object.
 */
declare function SetupPiglinBase(villageId: number, baseData: any): void

/**
 * Sets up the trigger for playing the invulnerability VO for a portal in Boss bases.
 *
 * @param villageId The village id of the portal.
 */
declare function SetupPortalInvulnerabilityVO(villageId: number): void

/**
 * A fallback helper function to ensure a base always has engineers (to prevent a base from being unable to build).
 * It is preferrable to have a engineer barracks instead as that is visible to the player.
 *
 * @param villageId The village ID for the piglin base.
 * @param count The max number of engineers to manage.
 * @param respawnTime The respawn time of the engineers.
 */
declare function SetupRespawningEngineers(villageId: number, count: number, respawnTime: number): void

/**
 * Creates the snippets needed to facilitate wave attacks for a given village.
 *
 * @param attackName Name of the attack context. Used primarily to differentiate snippet names
 * @param waveDataCallback Function to run that will select particular wave data. Parameters are (factionName, baseSize)
 */
declare function SetupSnippetsForWaveAttacks(attackName: string, waveDataCallback: function): void

/**
 * SetupStaggeredEntry
 *
 *
 */
declare function SetupStaggeredEntry(): void

/**
 * Sets up the initial occupation state on a village and the listeners that will drive occupation behaviour
 *
 * @param villageId id of the village to become occupied.
 * @param hordeName name oof the piglin horde occupying the village.
 */
declare function SetupVillageOccupation(villageId: number, hordeName: string): void

/**
 * Sets a village variable to true (1) for a duration before automatically setting it to false (0).
 * Village variable must not be true when this is called.
 *
 * @param villageId The village ID.
 * @param variableName The global variable key.
 * @param delay The delay in seconds before returning the value to false.
 */
declare function SetVillageVariableForDuration(villageId: number, variableName: string, delay: number): void

/**
 * Will return true if the village has been flagged for reset.
 *
 * @param villageId The village ID
 */
declare function ShouldBaseReset(villageId: int): void

/**
 * Snapshot that it taken at the start ot Act 2.
 *
 *
 */
declare function SNAPSHOT_Act2Started(): object

/**
 * Chains several snapshots together and takes the smallest value.
 *
 * @param snapshots Array of snapshots to consider.
 */
declare function SNAPSHOT_AND(snapshots: object[]): object

/**
 * Snapshot taken once the player leaves the well of fate at the start of act 2.
 *
 *
 */
declare function SNAPSHOT_FirstPregameConditionsFulfilled(): object

/**
 * Snapshot that it taken when the provided horde first builds the base.
 *
 * @param hordeInput Horde name or order.
 */
declare function SNAPSHOT_HordeFirstBaseBuilt(hordeInput: string): object

/**
 * Snapshot that it taken when the provided horde enters pre-game.
 *
 * @param hordeInput Horde name or order.
 */
declare function SNAPSHOT_HordePregameStarted(hordeInput: string): object

/**
 * Snapshot that it taken when the provided mob alliances occupation starts.
 *
 * @param mobAllianceInput Mob Alliance name or order.
 */
declare function SNAPSHOT_MobAllianceOccupationStarted(mobAllianceInput: string): object

/**
 * Chains several snapshots together and takes the largest value.
 *
 * @param snapshots Array of snapshots to consider.
 */
declare function SNAPSHOT_OR(snapshots: object[]): object



/**
 * Spawns an engineer at the portal. Used by defend and obstacle horde to build new structures
 * Portal must not be destroyed. @see QUERY_IsVillageDestroyed
 *
 * @param villageId The village ID of the base to spawn at.
 * @param amount The amount of engineers to spawn
 */
declare function SpawnEngineersIfThereAreNone(villageId: number, amount: number): number[]

/**
 * Spawn entities at a base's spawn position. Returns spawned entities.
 * Portal must not be destroyed. @see QUERY_IsVillageDestroyed
 *
 * @param villageId The village ID of the base to spawn at.
 * @param spawnName The archetype name of the entity.
 * @param count The number of entities to spawn.
 * @param piglinAppearanceOverride TODO: What does this param do? Ask Daniel S.
 */
declare function SpawnAtPortal(villageId: number, spawnName: string, count: number, piglinAppearanceOverride: string): number[]

/**
 * Spawns a base.
 *
 * @param factionName The horde the base belongs to.
 * @param baseSize The base size.
 * @param isInvasion Spawns via invasion.
 * @param invasionReason The reason for spawning.
 */
declare function SpawnBase(factionName: string, baseSize: string, isInvasion: boolean, invasionReason: string): number

/**
 * Spawns an Invasion Base with default rules set in invasion_helpers file
 *
 * @param factionName Name of the faction
 * @param baseSize The base size to spawn.
 * @param useFallback Enable final fallback. When set to true you can assume this function always succeeds (may place in very odd locations though).
 * @param isInvasion Is this to spawn an invasion base?
 * @param isStarterBase Is an Act 2 starter base using starter base rules
 */
declare function SpawnBaseWithRules(factionName: string, baseSize: string, useFallback: boolean, isInvasion: boolean, isStarterBase: boolean): boolean

/**
 * Helper to spawn a new piglin base inside a claimed area. Also attempts to spawn outposts with it
 *   If there isn't room for outposts, only the base will spawn.
 *   If there isn't room for the new base, a new area will be claimed and the base + outposts will be built.
 * Returns a boolean indicating if new bases were built.
 *
 * @param factionName Name of the piglin faction building a new base.
 * @param baseSize Size of the new base being built.
 * @param isInvasion If the base is spawned from invasion.
 */
declare function SpawnBaseWithRulesInClaimedArea(factionName: string, baseSize: string, isInvasion: boolean): boolean

/**
 * Spawns the first base for a piglin horde being introduced to the game world. Subsequent bases built for a horde
 * are based on the positioning of the base created here.
 *
 * @param horde The piglin horde.
 */
declare function SpawnCentralBase(horde: string): void

/**
 * Spawns outposts within an area claimed by piglins.
 *
 * @param horde Name of the piglin horde
 * @param areaEntity Claimed area entity to build inside.
 * @param areaRadius Radius of the claimed area.
 * @param numOutposts Number of outposts to build
 * @param centralBase Optional: Village entity these outposts will build around
 */
declare function SpawnClaimedAreaOutposts(horde: string, areaEntity: number, areaRadius: number, numOutposts: number, centralBase: number): void

/**
 * Spawns an Invasion Defensive Outpost with default rules set in invasion_helpers file
 *
 * @param factionName Name of the faction
 * @param isInvasion Is this outpost for invasion?
 * @param isInitialOutpost Is an Act 2 starter outpost
 */
declare function SpawnDefensiveOutpostWithRules(factionName: string, isInvasion: boolean, isInitialOutpost: boolean): boolean

/**
 * Helper to spawn a piglin outposts in a claimed area with placement rules configured.
 * Returns a boolean indicating if placement was successful.
 *
 * @param factionName Name of the piglin faction building an outpost.
 * @param claimedArea Claimed Area entity.
 * @param claimedAreaRadius Raduis of the claimed area.
 * @param centralBase Optional: Village entity these outposts will build around
 */
declare function SpawnDefensiveOutpostWithRulesInClaimedArea(factionName: string, claimedArea: number, claimedAreaRadius: number, centralBase: number): boolean

/**
 * Spawns a Far Invasion Base with default rules set in invasion_helpers file
 *
 * @param hordeName Name of the horde
 * @param baseSize The base size to spawn.
 * @param useFallback Enable final fallback. When set to true you can assume this function always succeeds (may place in very odd locations though).
 * @param isInvasion Is this to spawn an invasion base?
 */
declare function SpawnFarBaseWithRules(hordeName: string, baseSize: string, useFallback: boolean, isInvasion: boolean): boolean

/**
 * Spawns the intial base for a faction.
 *
 * @param factionName Name of the faction.
 * @param baseSize Base size to spawn.
 */
declare function SpawnInitialBaseWithRules(factionName: string, baseSize: string): boolean

/**
 * Spawns an Invasion Offensive Outpost with default rules set in invasion_helpers file
 *
 * @param factionName Name of the faction
 * @param isInvasion Is this base for invasion?
 */
declare function SpawnOffensiveOutpostWithRules(factionName: string, isInvasion: boolean): boolean

/**
 * Spawns a set of units from a data dict or array of dicts of the form {amount: <number>, unit: <archetype>}.
 *
 * @param villageId The village ID
 * @param unitsToSpawn The data object containing the amount and archetype to be spawned in the form {amount: (number), unit: (unit string)}, could also be an array of such objects.
 * @param location Location to spawn
 */
declare function SpawnVillageUnits(villageId: number, unitsToSpawn: object, location: number): number[]

/**
 * Spawns units depending on the village variation based on a data dict
 *
 * @param villageId The village ID
 * @param data Data dict in the form of [{amount: (number), unit: (unit string)}]
 * @param location Location to spawn
 * @param variationOverride Override the variation
 */
declare function SpawnVillageVariationUnits(villageId: number, data: all[], location: number, variationOverride: string): number[]

/**
 * StaggeredEntryNextDawn
 *
 *
 */
declare function StaggeredEntryNextDawn(): void

/**
 * Has to run each "system" dusk for staggered entry functionality.
 *
 *
 */
declare function StaggeredEntryNextDusk(): void

/**
 * A helper to define a collection of entities which may slowly arrive over time.
 *
 * @param gvName Global variable name to use
 * @param allowedValues String values of entities to arrive.
 */
declare function StaggeredOrderedCollection(gvName: string, allowedValues: object[]): object

/**
 * Start automatic piggo gold spawn on a faction
 *
 * @param villageId The id of the faction.
 * @param piggoSpawnRate The rate on which the piggo golds will be spawned
 */
declare function StartBaseAutomaticPiggoSpawnWithRate(villageId: number, piggoSpawnRate: number): void

/**
 * Commences the invasion beat for mob alliances. This includes queuing the occupying base to build, making cages at the mob alliance,
 * and setting up trigger volumes used during occupation. If the mob alliance village is not generated yet, this is queued until such time.
 *
 * @param mobId Id of the mob alliance being occupied
 */
declare function StartMobAlliancePiglinInvasion(mobId: string): void

/**
 * Starts the pregame sequence for a horde.
 *
 * @param horde The horde.
 */
declare function StartPregame(horde: string): void

/**
 * Starts the recurring spawner of an entity. When the entity dies a new entity of the same time will spawn after a time defined on the DeclareRecurringSpanwerSnippets.
 *
 * @param uniqueSpawnerId The unique string id for this recurring spawner (Same ID you have put on the DeclareRecurringSpanwerSnippets)
 * @param spawnLocationEntity The location(s) to spawn the entity
 * @param initialTimer Initial delay to spawn the first entity
 */
declare function StartRecurringSpawner(uniqueSpawnerId: string, spawnLocationEntity: number, initialTimer: number): void

/**
 * Helper function to despawn mobs belonging to a pigln base.
 *
 * @param villageId The village ID.
 * @param despawnAllAtSameTime If the secondsBetweenDespawns is 0.
 * @param secondsBetweenDespawns The delay between each despawn.
 * @param initialDelay The initial delay before anything is despawned.
 */
declare function StartToDespawnPiglinBaseMobs(villageId: number, despawnAllAtSameTime: boolean, secondsBetweenDespawns: number, initialDelay: number): void

/**
 * Start to despawn the piglin base structures (everything but walls)
 * @returns The culture lowest value of that faction
 *
 * @param villageId The id of the faction
 * @param despawnAllAtSameTime Despawn all structures at the same time or over a duration
 * @param totalDespawnDuration In case to spawn over a duration, what is the value of that duration
 */
declare function StartToDespawnPiglinBaseStructures(villageId: number, despawnAllAtSameTime: boolean, totalDespawnDuration: number): number

/**
 * Creates the listeners that will initiate and perpetuate wave attacks.
 *
 * @param attackName Name of the attack context. Must match the name provided for `SetupSnippetsForWaveAttacks`
 * @param attackingVillageId id of the attacking village
 * @param targetVillageId id of the village being attacked
 * @param initialDelay Initial delay before starting the attack waves
 */
declare function StartWaveAttacks(attackName: string, attackingVillageId: number, targetVillageId: number, initialDelay: number): void

/**
 * Chains several triggers together and eval() returns true only if all child triggers return true.
 *
 * @param triggers Array of triggers
 */
declare function TRIGGER_AND(triggers: object[]): object

/**
 * Triggers when certain # of days has passed.
 *
 * @param daysNum Expected # of days.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_DaysSince(daysNum: number, snapshot: object): object

/**
 * Triggers when a certain # of bases was constructed - of provided hordes and sizes.
 *
 * @param hordes Hordes that bases must belong to.
 * @param sizes Sizes that bases should have.
 * @param number Expected # of such bases.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_HordeBasesConstructed(hordes: string[], sizes: string[], number: number, snapshot: object): object

/**
 * Triggers when a certain # of bases was destroyed - of provided hordes and sizes.
 *
 * @param hordes Hordes that bases must belong to.
 * @param sizes Sizes that bases should have.
 * @param number Expected # of such bases.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_HordeBasesDestroyed(hordes: string[], sizes: string[], number: number, snapshot: object): object

/**
 * Triggers when a certain # of bases was upgraded.
 *
 * @param hordes Hordes that upgraded bases must belong to.
 * @param number Expected # of upgrades.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_HordeBasesUpgraded(hordes: string[], number: number, snapshot: object): object

/**
 * Triggers when an horde's outpost is destroyed.
 *
 * @param hordes The hordes to check for.
 * @param destroyedNum The threshold count.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_HordeOutpostsDestroyed(hordes: string[], destroyedNum: number, snapshot: object): object

/**
 * Chains several triggers together and eval() returns true only if any child trigger returns true.
 *
 * @param triggers Array of triggers.
 */
declare function TRIGGER_OR(triggers: object[]): object

/**
 * Triggers when a certain # of victories was made.
 * Victory counts as deflecting village attack or destroying a piglin outpost.
 *
 * @param victoriesNum Expected # of victories.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_VictoriesOverPiglins(victoriesNum: number, snapshot: object): object

/**
 * Triggers when players have successfully defended enough villages from piglin attacks.
 *
 * @param defendedNum Number of attacks to successfully defend relative to the snapshot.
 * @param hordes Which piglin attacks to track.
 * @param snapshot Snapshot of when to track successful village defenses.
 */
declare function TRIGGER_VillageAttacksDefended(defendedNum: number, hordes: string[], snapshot: object): object

/**
 * Triggers when players fought in a certain # of village attacks.
 * "Fighting" means physically fighting in the attack at the village, with any outcome.
 *
 * @param foughtNum Expected # of fights.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_VillageAttacksFought(foughtNum: number, snapshot: object): object

/**
 * Triggers when a certain # of attacks was resolved, with any outcome, whether or not players fought in them.
 *
 * @param resolvedNum Expected # of resolutions.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_VillageAttacksResolved(resolvedNum: number, snapshot: object): object

/**
 * Triggers when a certain # of village were entered (and they were not under attack)
 *
 * @param enteredNum Expected # of entries.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_VillageNotUnderAttackEntered(enteredNum: number, snapshot: object): object

/**
 * Triggers when a certain # of village were exited (and they were not under attack)
 *
 * @param exitedNum Expected # of exits.
 * @param snapshot Snapshot to compare the value against.
 */
declare function TRIGGER_VillageNotUnderAttackExited(exitedNum: number, snapshot: object): object

/**
 * Adds a village rewards token to a village. Nothing is added if the village is not eligible or full on tokens.
 *
 * @param villageId The village ID.
 * @param amount The number of tokens to add.
 */
declare function TryAddRewardsToVillage(villageId: number, amount: number): void

/**
 * Helper function to encapsulate awarding the ability for players to spawn mob and build their spawners.
 *
 * @param modId ID of the mob alliance (e.g. zombie, skeleton, creeper, etc.)
 */
declare function UnlockMobAlliance(modId: string): void

/**
 * Removes the reserved tag from all alive villages so they can be chosen to particiapte in invasion actions.
 *
 *
 */
declare function UnreserveAllVillages(): void

/**
 * Removes the reserved tag from a given village so they can be chosen to particiapte in invasion actions.
 *
 * @param villageEntity The village entity to unreserve.
 */
declare function UnreserveVillage(villageEntity: number): void

/**
 * Creates and returns a deck for a village in an 'O' configuration
 *
 *
 */
declare function VillageDeckO(): string[]

/**
 * Used specifically for village chest rewards.
 * Used to retrieve or set resource rewards for a village.
 *
 * @param villageId The village ID.
 * @param resourceName The resource ID.
 */
declare function VillageResourceStore(villageId: number, resourceName: string): object

/**
 * Returns true if the village supports variations (ie. some piglin bases).
 *
 * @param villageId The village ID.
 */
declare function VillageSupportsVariations(villageId: number): boolean

/**
 * Returns a target entity from a given village for units to attack.
 *
 * @param targetVillageID Id of the village being attacked.
 * @param prioritizeCentralStructure Whether or not to prioritize the central structure of the village in target selection.
 */
declare function WaveGetAttackTarget(targetVillageID: number, prioritizeCentralStructure: boolean): number
