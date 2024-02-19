/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Gets the count of a speific type of card for a named deck.
 *
 * @param deckName The deck name.
 * @param libraryIndex The library index (card type).
 */
declare function QUERY_CountCardTypeInDeck(deckName: string, libraryIndex: number): number

/**
 * Get the current health of all the given entities and sums it together.
 *
 * @param entities The entities to check.
 */
declare function QUERY_CurrentHealth(entities: number[]): number

/**
 * Get the team of the entity that destroyed the victim entity. Must be called in DestroyedEntity snippet.
 *
 * @param entity Victim entity
 */
declare function QUERY_DestroyerEntityTeam(entity: number): string

/**
 * Returns `true` if an entity has an onscreen waypoint icon. See `OUTPUT_AddWaypointIconByExistingEntityArchetype`.
 *
 * @param entity entity
 */
declare function QUERY_DoesEntityHaveAwaypointIcon(entity: number): boolean

/**
 * Checks if a player proximity observer with name exists.
 * @see OUTPUT_CreatePlayerProximityObserver
 *
 * @param observerName The observer ID.
 */
declare function QUERY_DoesPlayerProximityObserverExist(observerName: string): boolean

/**
 * Get the elevation (height) of an entity. Useful for setting @see OUTPUT_PlacementSetElevationRule
 *
 * @param entity The entity to get the elevation of. Must have a position (ie. must exist in the world somewhere).
 */
declare function QUERY_Elevation(entity: number): number

/**
 * Gets the aggregated defense multiplier for an entity group.
 * @see `badger:invasion_defense_value`
 *
 * @param entities The entities to query.
 */
declare function QUERY_EntitiesInvasionDefenseMultiplier(entities: number[]): number

/**
 * Returns the sum invasion defense of all the entities.
 *
 * @param entities The entities to check.
 */
declare function QUERY_EntitiesInvasionDefenseValue(entities: number[]): number

/**
 * Returns the current game difficulty.
 *
 * 
 */
declare function QUERY_GameDifficulty(): string

/**
 * Returns all alive players in the game - excluding dead ones!
 * Returned players are guaranteed to have a position.
 *
 * 
 */
declare function QUERY_GetAlivePlayers(): number[]

/**
 * Get all the non-destroyed village entities in the world. 
 * INTENDED FOR USE WITH THE BSHARP PLACEMENT SYSTEM.
 *
 * 
 */
declare function QUERY_GetAllAliveVillages(): number[]

/**
 * Returns all claimed area entities in the game. One can filter them by FILTER_ByFactionName for example.
 *
 * 
 */
declare function QUERY_GetAllClaimedAreas(): number[]

/**
 * Returns all the players in the game - including dead ones!
 * Dead players will NOT have a position.
 *
 * 
 */
declare function QUERY_GetAllPlayers(): number[]

/**
 * Get all the village entities in the world. 
 * INTENDED FOR USE WITH THE BSHARP PLACEMENT SYSTEM.
 *
 * 
 */
declare function QUERY_GetAllVillages(): number[]

/**
 * Get the current amount of a resource for the campaign team.
 *
 * @param resourceName The name of the resource. Must be a campaign (team) resource.
 */
declare function QUERY_GetCampaignResource(resourceName: string): number

/**
 * Get the maximum amount of a resource for the campaign team.
 *
 * @param resourceName The name of the resource. Must be a campaign (team) resource.
 */
declare function QUERY_GetCampaignResourceMax(resourceName: string): number

/**
 * Get child entities that have a specific instance name from a set of parent entities.
 *
 * @param parentEntities The parent entities whose children should be checked.
 * @param instanceName The instance name of a specific entity. You can edit this in the *Structure Editor*.
 */
declare function QUERY_GetChildEntitiesWithInstanceName(parentEntities: number[], instanceName: string): number[]

/**
 * Returns the sum of radiuses of all provided claimed areas.
 *
 * @param claimedAreas Claimed areas to get the radius of.
 */
declare function QUERY_GetClaimedAreaRadius(claimedAreas: number[]): number

/**
 * Gets all entities currently assigned to the control groups.
 *
 * @param entities The control group entities.
 */
declare function QUERY_GetControlGroupEntities(entities: number[]): number[]

/**
 * Gets the associated creator for a given entity such as a building (usually the player entity).
 *
 * @param entity The entity to check.
 */
declare function QUERY_GetCreator(entity: number): number

/**
 * Get the cultural value for a specfic culture.
 * @returns The culture value
 *
 * @param villageId The village to evaluate the culture of.
 * @param scoreType "A", "B" or "C"
 */
declare function QUERY_GetCultureValue(villageId: number, scoreType: string): number

/**
 * Get the wave level in wave difficulty
 *
 * 
 */
declare function QUERY_GetCurrentWaveLevel(): number

/**
 * Returns the invasion action string if the base is planning something. Empty string if none.
 *
 * @param entity Base village entity.
 */
declare function QUERY_GetDelayedInvasionAction(entity: number): string

/**
 * Returns the target of the delayed invasion action of the given source base, if any.
 *
 * @param entity Source base entity (the one that starts the action).
 */
declare function QUERY_GetDelayedInvasionActionTarget(entity: number): number

/**
 * Gets a list of all archetypes and their counts from an entity group.
 * Should only be used for telemetry.
 *
 * @param entities The entities to query.
 */
declare function QUERY_GetEntitiesArchetypeCountList(entities: number[]): string

/**
 * Get the number of entities in an EG.
 * @returns Count of all entities in the EG.
 *
 * @param entities The EG to query.
 */
declare function QUERY_GetEntitiesCount(entities: number[]): number

/**
 * Gets all entities owned by a village (piglin base, culture villages, etc.). Includes mobs and structures.
 *
 * @param villageId The village ID to retrieve from.
 */
declare function QUERY_GetEntitiesOwnedByVillage(villageId: number): number[]

/**
 * Get entities with a specific instance name.
 * @returns EG of all entities with the instance name.
 *
 * @param name The instance name of a specific entity. You can edit this in the *Structure Editor*.
 */
declare function QUERY_GetEntitiesWithInstanceName(name: string): number[]

/**
 * Get entities with a tag filter.
 * @returns EG of all entities that fulfill the tag filter.
 *
 * @param includeTags The list of tags the entity must have. A white-list.
 * @param excludeTags The list of tags the entity must not have. A deny-list.
 */
declare function QUERY_GetEntitiesWithTagFilter(includeTags: string[], excludeTags: string[]): number[]

/**
 * Get entities that have a set of tags.
 * Entities may have additional tags.
 * @returns EG of all entities with the tags.
 *
 * @param tags The list of tags the entity must have.
 */
declare function QUERY_GetEntitiesWithTags(tags: string[]): number[]

/**
 * Get the faction name from a entity that belongs to a faction.
 *
 * @param entity The entity owned by a faction (or the faction itself!).
 */
declare function QUERY_GetFactionNameFromEntity(entity: number): string

/**
 * Get the faction name from a village.
 * @returns The name of the faction. (ex. "Faction of Unending Attack")
 *
 * @param villageId The Village ID to query.
 */
declare function QUERY_GetFactionNameFromVillageID(villageId: number): string

/**
 * Get the size for a village.
 * @returns The string size. (ex. "small", "medium", or "large")
 *
 * @param villageId The Village ID to query.
 */
declare function QUERY_GetFactionSizeFromVillageID(villageId: number): string

/**
 * Gets the current game mode.
 * @see GAMEMODE_CAMPAIGN , @see GAMEMODE_PVP , @see GAMEMODE_CREATIVE
 * @returns The gamemode string.
 *
 * 
 */
declare function QUERY_GetGameMode(): string

/**
 * Get the value of a global variable.
 * If the variable has not been set, will set it to and return 0.
 * @returns The value of the variable.
 *
 * @param variableName The variable to get.
 */
declare function QUERY_GetGlobalVariable(variableName: string): number

/**
 * Gets all the intruders inside of a spatial partition.
 * This is *only* entites that fulfill the tag requirements of the spatial partition.
 *
 * @param triggerEntity The spatial partition entity.
 */
declare function QUERY_GetIntruders(triggerEntity: number): number[]

/**
 * Returns all the FOB's associated with a given invasion attack V2.
 *
 * @param invasionId The ID of the invasion instance.
 */
declare function QUERY_GetInvasionAttackV2AttackingBases(invasionId: number): number[]

/**
 * Returns the attacking horde of a invasion attack V2 action.
 *
 * @param invasionId The ID of the invasion instance.
 */
declare function QUERY_GetInvasionAttackV2FactionName(invasionId: number): string

/**
 * Queries the engine to see if the given village is the target of an active invasion action.
 * Returns the invasion entity's Id if the village is the target of an action,
 * otherwise returns an invalid id.
 *
 * @param villageEntity The village entity that may or may not be under attack.
 */
declare function QUERY_GetInvasionAttackV2IdFromVillage(villageEntity: number): number

/**
 * Returns how much of the village attack time has completed, between [0 - 1]
 * Note: This will always return 0 if the attack has been started, but not activated.
 *
 * @param invasionId Id of the village attack v2.
 */
declare function QUERY_GetInvasionAttackV2PercentComplete(invasionId: number): number

/**
 * Returns the strength of a invasion attack V2 action.
 *
 * @param invasionId The ID of the invasion instance.
 */
declare function QUERY_GetInvasionAttackV2Strength(invasionId: number): number

/**
 * Returns the village under attack of a invasion attack V2 action.
 *
 * @param invasionId The ID of the invasion instance.
 */
declare function QUERY_GetInvasionAttackV2VillageId(invasionId: number): number

/**
 * Get current shown ui number of lives remaining set by OUTPUT_SetLivesCounter()
 *
 * 
 */
declare function QUERY_GetLivesCounter(): number

/**
 * Returns the deck size of a named deck. This ignores all sub-cards.
 *
 * @param deck The deck name
 */
declare function QUERY_GetNamedDeckCardCount(deck: string): number

/**
 * Returns the number of remaining seconds in a named timer. (@see OUTPUT_SetNamedTimer)
 *
 * @param timerName The name of the timer to check (ensure this has been set before calling!)
 */
declare function QUERY_GetNamedTimerSecondsElapsed(timerName: string): number

/**
 * Returns the entity archetype of the mount currently used by the player
 *
 * @param entity The player entity to check
 */
declare function QUERY_GetPlayerMountName(entity: number): string

/**
 * Returns the player entities that are within the bounds of the requested village.
 * NOTE: This will return players that are queued for destruction, so be very careful calling this in response to a player destruction event.
 *
 * @param villageId The id of the village to check for players in.
 */
declare function QUERY_GetPlayersInVillage(villageId: number): number[]

/**
 * Get the number of resources for an entity. Automatically retrieves the team count if it is a team resource.
 *
 * @param entity The player entity to check.
 * @param resourceName The resource identifier. (ex. "wood")
 */
declare function QUERY_GetResource(entity: number, resourceName: string): number

/**
 * Get the maximum amount of a resource for an entity. Automatically retrieves the team count if it is a team resource.
 *
 * @param entity The player entity to query for the resource from.
 * @param resourceName The resource identifier. (ex. "wood")
 */
declare function QUERY_GetResourceMax(entity: number, resourceName: string): number

/**
 * Gets the name of the team that an entity belongs to.
 *
 * @param entity The entity to get the team of.
 */
declare function QUERY_GetTeamName(entity: number): string

/**
 * Get the current amount of a resource for a team.
 *
 * @param teamName The name of the team.
 * @param resourceName The name of the resource. Must be a team resource.
 */
declare function QUERY_GetTeamResource(teamName: string, resourceName: string): number

/**
 * Get the maximum amount of a resource for a team.
 *
 * @param teamName The name of the team.
 * @param resourceName The name of the resource. Must be a team resource.
 */
declare function QUERY_GetTeamResourceMax(teamName: string, resourceName: string): number

/**
 * Get the player's ticket cap or their team's ticket cap given the ticket type
 *
 * @param player The player entity to check
 * @param ticketName The name of the ticket type to check
 */
declare function QUERY_GetTicketCap(player: number, ticketName: string): number

/**
 * Get the player's amount of tickets being used or their team's amount of tickets being used given the ticket type
 *
 * @param player The player entity to check
 * @param ticketName The name of the ticket type to check
 */
declare function QUERY_GetNumTicketsUsed(player: number, ticketName: string): number

/**
 * Returns a number (0-1) based on the current time of day
 *
 * 
 */
declare function QUERY_GetTimeOfDay(): number

/**
 * Gets the user ID for a given player entity.
 *
 * @param playerEntity The player entity.
 */
declare function QUERY_GetUserId(playerEntity: number): string

/**
 * Returns the number of online matches (public or private, practice mode excluded) the player has completed.
 *
 * @param playerEntity The player entity.
 */
declare function QUERY_GetUserMatchesPlayed(playerEntity: number): number

/**
 * fetches list of all villages claimed
 *
 * @param villages list of villages
 */
declare function QUERY_GetVillageClaimedAreas(villages: number[]): number[]

/**
 * Get the assigned flavour of a village.
 *
 * @param villageId The id of the village to query.
 */
declare function QUERY_GetVillageFlavour(villageId: number): string

/**
 * Gets all the village heart buildables for a village.
 *
 * @param villageId The village ID to query.
 */
declare function QUERY_GetVillageHearts(villageId: number): number[]

/**
 * Get a Village ID from an entity if the entity is associated with a village.
 * @returns Village ID the entity belongs to.
 *
 * @param entity A singular entity that is owned by a village.
 */
declare function QUERY_GetVillageIDFromEntity(entity: number): number

/**
 * Get the assigned objective of a village.
 *
 * @param villageId The id of the village to query.
 */
declare function QUERY_GetVillageObjective(villageId: number): string

/**
 * Return the name of the placement slot for a given entity.
 *
 * @param entity The entity to query
 */
declare function QUERY_GetWorldPlacementName(entity: number): string

/**
 * Returns whether a building was created by a player.
 *
 * @param entity The entity to query
 */
declare function QUERY_HasCreator(entity: number): boolean

/**
 * Returns `true` if an entity has an entity timer associated (@see OUTPUT_SetEntityTimer)
 *
 * @param entity The entity to associate a timer with.
 * @param timerName The name of the timer to associate
 */
declare function QUERY_HasEntityTimer(entity: number, timerName: string): boolean

/**
 * Returns whether or not entity is leashed.
 *
 * @param entityWithLeash Entity to check if leashed or not.
 */
declare function QUERY_HasLeash(entityWithLeash: number): boolean

/**
 * Returns whether or not a compass entity has a max range override.
 *
 * @param entityToPoll The compass entity.
 */
declare function QUERY_HasOverrideForCompassMaxRange(entityToPoll: number): boolean

/**
 * Returns true if the entity has the requested tags. False otherwise.
 *
 * @param entity The entity to check the tags of. Must be a single entity.
 * @param tags The tags to check.
 */
declare function QUERY_HasTags(entity: number, tags: string[]): boolean

/**
 * Check if the given entity has a placement slot name
 *
 * @param entity Entity to check
 */
declare function QUERY_HasWorldPlacementName(entity: number): boolean

/**
 * Returns true if the delayed action is hidden (no WM updates will be shown).
 *
 * @param entity Source base
 */
declare function QUERY_IsDelayedInvasionActionHidden(entity: number): boolean

/**
 * Returns true if the entity is disabled (eg. by health)
 *
 * @param entity Entity to check
 */
declare function QUERY_IsEntityDisabled(entity: number): boolean

/**
 * Check if a variable exists (has been set).
 * @returns True if variable exists and has been set, false otherwise.
 *
 * @param variableName The variable to check.
 */
declare function QUERY_IsGlobalVariableSet(variableName: string): boolean

/**
 * Check if the host is in the special campaign onboarding flow.
 *
 * 
 */
declare function QUERY_IsHostInCampaignOnboardingFlow(): boolean

/**
 * Checks if a specific invasion action is over.
 *
 * @param invasionId The invasion ID.
 */
declare function QUERY_IsInvasionOver(invasionId: number): boolean

/**
 * Checks if a named timer exists. Do not confuse it with the "paused" timer state.
 *
 * @param timerName The timer to check.
 */
declare function QUERY_IsNamedTimerActive(timerName: string): boolean

/**
 * Checks to see if a player entity is mounted or not.
 *
 * @param entity The player entity to check
 */
declare function QUERY_IsPlayerMounted(entity: number): boolean

/**
 * Returns true/false according to the fact whether or not the village will be a target of attack the upcoming night.
 *
 * @param entity Village entity.
 */
declare function QUERY_IsTargetOfDelayedInvasionAction(entity: number): boolean

/**
 * Checks if a village has been destroyed.
 * @returns True if the village has been destroyed.
 *
 * @param villageId The village ID to check.
 */
declare function QUERY_IsVillageDestroyed(villageId: number): boolean

/**
 * Checks if a village is occupied (by piglins).
 *
 * @param villageId The village ID to check.
 */
declare function QUERY_IsVillageOccupied(villageId: number): boolean

/**
 * Get the maximum health of all the given entities and sums it together.
 *
 * @param entities The entities to check.
 */
declare function QUERY_MaxHealth(entities: number[]): number

/**
 * Returns an entity that has the calculated position from BSharpPlacement.
 * Only usable if BSharpPlacement execution was successful.
 *
 * 
 */
declare function QUERY_PlacementResultPosition(): number

/**
 * Returns the selected primary entity from BSharpPlacement.
 * Only usable if BSharpPlacement execution was successful.
 *
 * 
 */
declare function QUERY_PlacementResultPrimary(): number

/**
 * Check if BSharpPlacement execution was successful.
 * `OUTPUT_PlacementExecute` also returns if it was successful.
 *
 * 
 */
declare function QUERY_PlacementSuccess(): boolean

/**
 * Get a deterministic random number based on level seed.
 *
 * @param min The minimum value - inclusive.
 * @param max The maximum value - inclusive.
 */
declare function QUERY_RandomNumber(min: number, max: number): number

/**
 * Get a deterministic random number based on level seed from a group.
 * Will automatically create a new group if it doesn't exist.
 * Note: The initial state is purely initialized from the seed (the group name does not impact it).
 *
 * @param min The minimum value - inclusive.
 * @param max The maximum value - inclusive.
 * @param group The group name.
 */
declare function QUERY_RandomNumberGroup(min: number, max: number, group: string): number

/**
 * Get frame count. For use with testing infrastructure.
 * @returns Total number of frames seen since game was started, or 0 if unsupported configuration
 *
 * 
 */
declare function QUERY_TEST_GetFrameCount(): number

/**
 * Get the number of players currently within the bounds of a village.
 *
 * @param villageId The village to check for player presence of.
 */
declare function QUERY_VillagePlayerPresenceCount(villageId: number): number
