/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Give or take resources to a specific entity. If it is a team resource the resource will automatically be given to the team.
 * The resource must exist (you cannot create new ones!).
 *
 * @param entities The entities to give the resource to.
 * @param resourceName The resource ID (eg. "wood")
 * @param amount The amount. Positive to give, negative to take.
 * @param overcap If adding resources can exceed the inventory cap.
 */
declare function OUTPUT_AddOrRemoveResource(entities: number[], resourceName: string, amount: number, overcap: boolean): void

/**
 * Give or take resources to a team.
 * The resource must exist (you cannot create new ones!).
 *
 * @param team The team to give the resource to.
 * @param resourceName The resource ID (eg. "wood")
 * @param amount The amount. Positive to give, negative to take.
 * @param overcap If adding resources can exceed the inventory cap.
 */
declare function OUTPUT_AddOrRemoveTeamResource(team: string, resourceName: string, amount: number, overcap: boolean): void

/**
 * Adds progress to an objective showing up on the playes map. Needs to be added to objectives_data.json
 *
 * @param objectiveName The name of the objective. This should be the same as the lang file text
 * @param amount The amount to change, postiive or negative
 */
declare function OUTPUT_AddOrSubtractObjectiveProgress(objectiveName: string, amount: number): void

/**
 * Adds a tag to an entity's tag set.
 *
 * @param entities The entiies to add the tag to.
 * @param tag The tag to be added.
 */
declare function OUTPUT_AddTag(entities: number[], tag: string): void

/**
 * Adds a tether between two entities with a certain length.
 *
 * @param rootEntity The entity to host the tether.
 * @param tetherEntities The entities to tether to the root entity.
 * @param distance The maximum distance between the tethered entities before the tether breaks.
 */
declare function OUTPUT_AddTether(rootEntity: number, tetherEntities: number[], distance: number): void

/**
 * Triggers a persistent presentation event from a given entity. (like `OUTPUT_TriggerPresentationEvent`)
 * The targeted entity's data must support the requested presentation effect.
 * Use this output if the entity needs to persist presentation state on save/load (eg. keep a chest open).
 *
 * @param entities Entities to trigger the event on.
 * @param state The name of the event to trigger, as defined in the entity's data.
 */
declare function OUTPUT_AddVisualState(entities: number[], state: string): void

/**
 * Adds a waypoint icon to an entity that doesn't have one. To determine which waypoint icon to add,
 * another entity with a `"badger:waypoint_marker"` is used as a reference.
 *
 * @param archetype The existing entity archetype to reference. (eg: `"badger:onboarding_waypoint_marker"`, `"badger:player_marker_03"`, etc.)
 * @param entity The entity to attach the waypoint marker to.
 */
declare function OUTPUT_AddWaypointIconByExistingEntityArchetype(archetype: string, entity: number): void

/**
 * Announces a message to the HUD.
 *
 * @param messageId The message id associated with message data in hud_text_messages.json
 * @param params The list of message parameters to be localized.
 */
declare function OUTPUT_Announce(messageId: string, params: string[]): void

/**
 * Sends message to interrupt current priority message 
 *
 * @param messagePriority Message type to interrupt
 */
declare function OUTPUT_AnnounceInterrupt(messagePriority: number): void

/**
 * Sends message to interrupt current priority message for a particular player
 *
 * @param messagePriority Message priority to interrupt
 * @param playerEntity The player to interrupt the message for
 */
declare function OUTPUT_AnnounceInterruptPlayer(messagePriority: number, playerEntity: number): void

/**
 * Announce a message to a specific player's HUD.
 *
 * @param messageId The message id associated with message data in hud_text_messages.json
 * @param params The list of message parameters to be localized.
 * @param playerEntity The specific player.
 */
declare function OUTPUT_AnnouncePlayer(messageId: string, params: string[], playerEntity: number): void

/**
 * Queue a hud event sequence to play
 *
 * @param sequenceId The event id associated with the hud event sequence
 */
declare function OUTPUT_AnnounceSequence(sequenceId: string): void

/**
 * Queue a hud event sequence to play for specific player
 *
 * @param sequenceId The event id associated with the hud event sequence
 * @param playerEntity The player id to announce the message to.
 */
declare function OUTPUT_AnnounceSequencePlayer(sequenceId: string, playerEntity: number): void

/**
 * Queue a hud event sequence to play for specific team
 *
 * @param sequenceId The event id associated with the hud event sequence
 * @param teamName The name of the team to announce the message to.
 */
declare function OUTPUT_AnnounceSequenceTeam(sequenceId: string, teamName: string): void

/**
 * Announces a message to the HUD for a specific team.
 *
 * @param messageId The message id associated with message data in hud_text_messages.json
 * @param params The list of message parameters to be localized.
 * @param teamName The name of the team to announce the message to.
 */
declare function OUTPUT_AnnounceTeam(messageId: string, params: string[], teamName: string): void

/**
 * Sets up entities to be tracked by an existing Destroy Entities Objective.
 * This will not change the count required to be destroyed.
 *
 * @param villageId Id of the village with a Destroy Entities Objective set up.
 * @param entities Entities to append to the objective.
 */
declare function OUTPUT_AppendDestroyEntitiesObjective(villageId: number, entities: number[]): void

/**
 * Adds cards to a specific deck.
 *
 * @param deckName The name of the deck to set.
 * @param cards The cards to add to the end of the deck.
 */
declare function OUTPUT_AppendNamedDeck(deckName: string, cards: number[][][]): void

/**
 * Appends a new filter to entities with a `badger:trigger_criteria`.
 * @see `"badger:spatial_trigger_zone"`
 *
 * @param entities The entities to append the criteria to.
 * @param includeTags The include tags.
 * @param excludeTags The exclude tags.
 * @param allianceRuleFilter The alliance rule.
 */
declare function OUTPUT_AppendTriggerCriteriaTags(entities: number[], includeTags: string[], excludeTags: string[], allianceRuleFilter: string): void

/**
 * Applies a buff to entities.
 *
 * @param entities The entities.
 * @param buffName The name of the buff to apply.
 */
declare function OUTPUT_ApplyBuff(entities: number[], buffName: string): void

/**
 * Adds a proximity check to an existing named timer. If it is displaying to the player,
 * they must be radius distance from the passed in entity to actually see th timer
 *
 * @param timerName Global timer name.
 * @param entity the entity that the player must be close to in order to see the timer
 * @param radius The radius to display the timer around the entity
 */
declare function OUTPUT_ApplyProximityToNamedTimer(timerName: string, entity: number, radius: number): void

/**
 * Applies a status effect to entities (like a buff but with duration control).
 *
 * @param entities The entities to receive the status effect.
 * @param statusEffectName The name of the status effect to apply.
 * @param strength A multiplier on the default duration of the status effect.
 */
declare function OUTPUT_ApplyStatusEffect(entities: number[], statusEffectName: string, strength: number): void

/**
 * Applies a status effect to entities (like a buff but with duration control) specifying a source entity for effects that requrie it (like fear).
 *
 * @param entities The entities to receive the status effect.
 * @param sourceEntity The entity to act as the source of the status effect.
 * @param statusEffectName The name of the status effect to apply.
 * @param strength A multiplier on the default duration of the status effect.
 */
declare function OUTPUT_ApplyStatusEffectWithSource(entities: number[], sourceEntity: number, statusEffectName: string, strength: number): void

/**
 * Modify the ticket cap for a named ticket type by an amount. Applies to all entities on the same team as the entity passed through
 *
 * @param playerEntity The player entity toupdate.
 * @param ticketType The type of ticket to modify. @see TICKET_BUILD @see TICKET_GATHER @see TICKET_SPAWN
 * @param amount The amount to modify the ticket type by.
 */
declare function OUTPUT_ApplyTicketModifierToPlayerForTeam(playerEntity: number, ticketType: string, amount: number): void

/**
 * Modify the ticket cap for a named ticket type by an amount
 *
 * @param teamName All players on this team will have their ticket caps modified
 * @param ticketType The type of ticket to modify. @see TICKET_BUILD @see TICKET_GATHER @see TICKET_SPAWN
 * @param amount The amount to modify the ticket type by.
 */
declare function OUTPUT_ApplyTicketModifierToTeam(teamName: string, ticketType: string, amount: number): void

/**
 * Set the home base for entities
 *
 * @param homeBaseEntity Home base entity
 * @param targetEntities Target entities
 * @param threshold Threshold
 */
declare function OUTPUT_AssignHomeBaseToEntities(homeBaseEntity: number, targetEntities: number[], threshold: number): void

/**
 * Try to spend a ticket for a player on one or more entities.
 *
 * @param playerToDeductTicketsFrom The player entity to deduct a ticket from.
 * @param entitiesToAssociateTicketCost The entities to spend the tickets on. One of each ticket will be spent for each entity supplied.
 * @param ticketName The ticket to try to spend (eg: `"spawn"). See `gametickets.json` for what's available.
 */
declare function OUTPUT_AssignTicketsToMobsIfAble(playerToDeductTicketsFrom: number, entitiesToAssociateTicketCost: number[], ticketName: string): void

/**
 * Assigns an entity to a control group entity so it can be referenced later.
 * An entity can only belong to one control group, if it belongs to one already it'll be reassigned.
 *
 * @param sourceEntities The entities to assign.
 * @param controlGroupEntity The owning control group.
 */
declare function OUTPUT_AssignToControlGroup(sourceEntities: number[], controlGroupEntity: number): void

/**
 * Associate an entity with a particular spawner. This is useful in the case of spawner caps and recalling mobs.
 * *NOTE:* Be sure to check that the spawner has a `"badger:lost_entity_recall_point"` with matching tags for the entity you spawn. `OUTPUT_AddTag` might be useful here if you're looking to match something not typically used.
 *
 * @param spawner The `badger:buildable_spawner` entity to associate with.
 * @param entitiesToAssociate The entities to associate the a spawner.  
 */
declare function OUTPUT_AssociateMobWithSpawner(spawner: number, entitiesToAssociate: number[]): void

/**
 * Display the campaign end menu.
 * Currently this returns all players back to the main menu.
 *
 * 
 */
declare function OUTPUT_CampaignEndMenu(): void

/**
 * Cancels the invasion action if it was a horde action - no source but with the target.
 *
 * @param targetVillageEntities Target villages participating in the invasion action.
 */
declare function OUTPUT_CancelHordeDelayedInvasionActions(targetVillageEntities: number[]): void

/**
 * Claims the area in the world. Use placement system to select where.
 *
 * @param horde Name of the horde that claims an area.
 * @param positionEntity The result entity (like placement) to spawn the claimed area on.
 * @param radius The radius of the claimed area.
 */
declare function OUTPUT_ClaimArea(horde: string, positionEntity: number, radius: number): number

/**
 * Clears any override set for compass max range.
 *
 * @param entityToClearOverride compass entity
 */
declare function OUTPUT_ClearOverrideForCompassMaxRange(entityToClearOverride: number): void

/**
 * Collect telemetry info.
 *
 * @param propertyName Name of the property.
 * @param propertyValue Value of the property.
 */
declare function OUTPUT_CollectTelemetryInfo(propertyName: string, propertyValue: string): void

/**
 * Issue a follow order to a control group entity. 
 * All existing entities (and newly assigned ones) will receive this order.
 *
 * @param controlGroupEntity The control group entity.
 * @param targetPositionEntity The entity to follow.
 */
declare function OUTPUT_ControlGroupFollow(controlGroupEntity: number, targetPositionEntity: number): void

/**
 * Makes any entity registered to a control group follow an AI entity.
 *
 * @param controlGroupEntity The control group entity.
 * @param aiEntity The AI entity.
 */
declare function OUTPUT_ControlGroupFollowAI(controlGroupEntity: number, aiEntity: number): void

/**
 * Issue a move to position order to a control group entity.
 * All existing entities (and newly assigned ones) will receive this order.
 *
 * @param controlGroupEntity The control group entity.
 * @param targetPositionEntity The entity position to move to.
 * @param arrivalPadding World distance units to consider the target position was reached successfully.
 */
declare function OUTPUT_ControlGroupMoveToCurrentPosition(controlGroupEntity: number, targetPositionEntity: number, arrivalPadding: number): void

/**
 * Create a persistent world stream request centered on an entity.
 *
 * @param entity The entity with which this request is centered around
 * @param range The size of the area around the entity to request
 * @param requestType The type of request. Request priorities are found in world_stream.json. Grouped requests use the highest priority of all requests in the group.
 * @param group The request group. All level chunks in between entities in the same group will also be requested.
 */
declare function OUTPUT_CreatePersistentWorldRequest(entity: number, range: number, requestType: string, group: string): void

/**
 * Creates a new player proximity observer. Use `LISTENFOR_EntityEnteredPlayerProximity` to register a snippet for it
 *
 * @param observerName The name of a new observer. An error will occur if a name is reused.
 * @param allianceRuleFilter The alliance rule filter to use when finding entities (see: `team_manager.json`)
 * @param includeTags Only proximity-check for entities that have _all_ of these tags
 * @param excludeTags Exlude entities that have _any_ of these tags from the proximity check
 * @param radius The radius of proximity around each player to check (eg: `10.0`)
 */
declare function OUTPUT_CreatePlayerProximityObserver(observerName: string, allianceRuleFilter: string, includeTags: string[], excludeTags: string[], radius: number): void

/**
 * Creates a trigger volume that will be appropriately sized to match the bounds of its associated village.
 *
 * @param villageId The village to create the trigger volume based on.
 * @param padding The extra padding around the village bounds for this trigger volume.
 * @param includeTags The include tags for the trigger criteria filter.
 * @param excludeTags The exclude tags for the trigger criteria filter.
 * @param allianceRuleFilter The alliance rule for the trigger criteria filter.
 */
declare function OUTPUT_CreateVillageTriggerVolume(villageId: number, padding: number, includeTags: string[], excludeTags: string[], allianceRuleFilter: string): number

/**
 * Despawns all pop capped entities in a village, INCLUDING SUSPENDED ONES.
 * Not intended for use outside of B# helper functions.
 *
 * @param villageId The village ID.
 */
declare function OUTPUT_CullPopCappedEntitiesInVillage(villageId: number): void

/**
 * Damages a set of entities by an absolute amount of damage.
 * This applies damage to entities, assuming they all have HealthComponent
 * To destroy an entity, use @see OUTPUT_DestroyEntities
 *
 * @param entities The entities to damage.
 * @param damage The amount of damage to apply.
 */
declare function OUTPUT_DamageEntities(entities: number[], damage: number): void

/**
 * Damages a set of entities by a percentage of their max health.
 * This applies damage to entities, assuming they all have HealthAttribute
 * To destroy an entity, use @see OUTPUT_DestroyEntities
 *
 * @param entities The entities to damage.
 * @param damagePercent The percentage of the entity's max health to apply as damage. Must be a value between 0 and 100.
 */
declare function OUTPUT_DamageEntitiesByPercentage(entities: number[], damagePercent: number): void

/**
 * Log and show a message on the console.
 * To see the message on console ensure you have `dev_areafilter_string:SCRIPTING` set in options.txt
 * Recommended to use helpers `Logv()`, `Logi()`, `Logw()`, `Loge()`
 *
 * @param message The message to log.
 * @param level The log level (0,1,2,3), 0 being the least severe and 3 the most.
 */
declare function OUTPUT_DebugLog(message: string, level: number): void

/**
 * Logs a deck to console.
 *
 * @param deck The deck to log.
 * @param includeSubCards Show or hide subcards.
 */
declare function OUTPUT_DebugLogDeck(deck: number[][][], includeSubCards: boolean): void

/**
 * Logs invasion information to the ImGUI Debug window
 *
 * @param message The message to log
 */
declare function OUTPUT_DebugLogInvasion(message: string): void

/**
 * Logs a named deck to console.
 * @see `OUTPUT_SetNamedDeck`
 *
 * @param deckName The deck name to log.
 * @param includeSubCards Show or hide subcards.
 */
declare function OUTPUT_DebugLogNamedDeck(deckName: string, includeSubCards: boolean): void

/**
 * Ends the debug performance timer and logs the total duration since `OUTPUT_DebugTimeStart` was called.
 *
 * 
 */
declare function OUTPUT_DebugTimeEnd(): void

/**
 * Starts the debug performance timer. End the timer with `OUTPUT_DebugTimeEnd`.
 *
 * 
 */
declare function OUTPUT_DebugTimeStart(): void

/**
 * Deconstructs (immediately) buildings from a village. This will remove the building(s) and refund the cost.
 * Because this is designed to handle suspended villages, you should not make multiple deconstruction requests for the
 * same village on the same frame, as only one active request per village at a time is supported.
 *
 * @param villageEntity The village entity that we want to remove the buildings from.
 * @param tags The tags of buildables to be deconstructed. This is an inclusive list of tags, meaning that any buildable in the village that has any of the tags will be deconstructed.
 */
declare function OUTPUT_DeconstructVillageBuildings(villageEntity: number, tags: string[]): void

/**
 * Deletes a timer attached to an entity.
 *
 * @param entity The entity that owns this timer.
 * @param timerName The name of the timer to delete.
 */
declare function OUTPUT_DeleteEntityTimer(entity: number, timerName: string): void

/**
 * DeleteListenerTriggerVolumes
 *
 * @param snippetName snippet name
 */
declare function OUTPUT_DeleteListenerTriggerVolumes(snippetName: string): void

/**
 * Deletes a global timer.
 *
 * @param timerName The name of the timer to delete.
 */
declare function OUTPUT_DeleteNamedTimer(timerName: string): void

/**
 * Despawns (removes) a set of entities
 * This will not result in animations playing, or points being awarded, etc.
 * For 'normal' destruction, use @see OUTPUT_DestroyEntities
 *
 * @param entities The entities to despawn.
 */
declare function OUTPUT_DespawnEntities(entities: number[]): void

/**
 * Despawns village(s) given the village entity.
 *
 * @param entities The village entities.
 */
declare function OUTPUT_DespawnVillageEntities(entities: number[]): void

/**
 * Destroys (kills) a set of entities.
 * This will run normal destruction behaviour (like animations).
 * To remove an entity without animations, point awarding, and such,
 * use OUTPUT_DespawnEntity
 *
 * @param entities The entity group to destroy.
 */
declare function OUTPUT_DestroyEntities(entities: number[]): void

/**
 * Destroys village(s) given the village entity.
 *
 * @param entities The village entities.
 */
declare function OUTPUT_DestroyVillageEntities(entities: number[]): void

/**
 * Disables the cinematic played for an entity with "badger:cinematic_death".
 * This must be called in SNIPPET_DeferredDeath only.
 *
 * @param dyingEntity The dying entity.
 */
declare function OUTPUT_DisableDeathCinematic(dyingEntity: number): void

/**
 * Disables home base for entities
 *
 * @param homeBaseEntity Home base entity
 * @param targetEntities Target entities
 * @param threshold Threshold
 */
declare function OUTPUT_DisableHomeBaseForEntities(homeBaseEntity: number, targetEntities: number[], threshold: number): void

/**
 * Dismounts given player from the mount.
 *
 * @param playerEntity Player entity.
 */
declare function OUTPUT_DismountPlayer(playerEntity: number): void

/**
 * Dispatches a "player entry" note for the tutorial system. (ask a programmer before using this)
 *
 * @param village The village entity
 * @param player The player entity
 */
declare function OUTPUT_DispatchPlayerEnteredVillageNotice(village: number, player: number): void

/**
 * Displays a global timer on all players screen.
 * Only one timer can be display at a time.
 *
 * @param timerName Global timer name.
 * @param isDisplayed To display or not.
 * @param countsDown Counts down or up.
 */
declare function OUTPUT_DisplayNamedTimer(timerName: string, isDisplayed: boolean, countsDown: boolean): void

/**
 * Start an "oops" action onto a piglin base.
 * This will begin loading in the village which can be listened for in LISTENFOR_InvasionOopsApply
 * @requires BSharpPlacement
 *
 * @param baseId The village ID of the base.
 * @param hidden Whether the oops will be telegraphed on the map only when it succeeds
 */
declare function OUTPUT_DoInvasionOops(baseId: number, hidden: boolean): void

/**
 * Upgrade a piglin base. This function removes a village completely and spawns a new village with the new size.
 * - The new village inherits the same ID as the previous village. Existing B-Sharp payloads will apply to it.
 * - The new village can be any valid size (eg: `small`, `large`, etc.)
 * - Entities are *despawned* and **not destroyed**. Campaign logic will not trigger the same way.
 * @see OUTPUT_SetOwnerVillageById To set ownership. Entities not owned by a village won't be removed.
 * @see QUERY_GetEntitiesOwnedByVillage To review entities owned by a village.
 * @requires BSharpPlacement
 *
 * @param baseId The village ID of the base.
 * @param newArchetype The new village entity archetype.
 * @param newSize The new size of the base defined in villages.json.
 * @param dependOnPlayerProximity Whether or not upgrade should happen only when player is away from the base.
 * @param stampTextureKey Name key to give this texture. Used to identify this texture for future updates.
 * @param stampTextureName Name of the texture to stamp the surrounding area with. Only applies to village placed using slot mode.
 * @param destroyUnmarkedStructures Specifies whether or not we destroy all present structures in the chunks before building a new base. Only structures with badger:chunk_reload_indestructible_flag will remain.
 */
declare function OUTPUT_DoInvasionUpgrade(baseId: number, newArchetype: string, newSize: string, dependOnPlayerProximity: boolean, stampTextureKey: string, stampTextureName: string, destroyUnmarkedStructures: boolean): void

/**
 * Draws the new intentions for factions for next invasion turn.
 * @see SNIPPET_InvasionIntentionsDrawn for handling what actually happens.
 *
 * 
 */
declare function OUTPUT_DrawInvasionIntentions(): void

/**
 * End an invasion attack V2 action. Can be called when an invasion is warded off or auto-resolved.
 *
 * @param invasionId The main invasion ID that contains the attack information.
 * @param isSuccess The reason for ending. true = players won, false = players lost.
 */
declare function OUTPUT_EndInvasionAttackV2(invasionId: number, isSuccess: boolean): void

/**
 * Ends the match if it hasn't already been ended. This will trigger snippets that are listening for
 * @see LISTENFOR_GlobalVariableChanged with the variable @see GAME_MODE_GLOBAL.matchEnded
 * Will also call @see OUTPUT_EndMatch
 *
 * @param winningTeam The team that won the match.
 */
declare function OUTPUT_EndMatch(winningTeam: string): void

/**
 * Executes all (non-thwarted!) delayed invasion actions.
 * This should be called at dusk.
 *
 * 
 */
declare function OUTPUT_ExecuteAllDelayedInvasionActions(): void

/**
 * Marks the finish of Invasion Planning phase. Has to fire only once when all invasion intentions were processed.
 * This exists solely because the Planning phase takes an unknown number of frames and we have to notify the C++ that we are ready to proceed to the Execution phase.
 * Currently this has to fire in invasion_intentions_dawn_logic.js in DrawInvasionHordeCard() when no cards are left to be drawn.
 *
 * 
 */
declare function OUTPUT_ExecuteInvasionActionsReady(): void

/**
 * Manullay moves village attack states ahead toward their conclusions.
 * - Attacks in the 'STARTED' state (haven't been activated by a player) move to 'RESOLVE' state.
 * - Attacks in the 'ACTIVE' or 'ABANDONED' states move to 'OVERTIME' state.
 * NOTE: if no players are present at a village attack in the 'OVERTIME' state, it will naturally
 * proceed to the 'RESOLVE' state.
 *
 * @param villageEntities Entity group of villages that are under attack. Villages in this group that are not being attacked will be ignored.
 */
declare function OUTPUT_FastForwardVillageAttacks(villageEntities: number[]): void

/**
 * Flags entity as visited by adding a flag component. This is useful for
 * Developers on the C++ for ECS systems
 *
 * @param entities The entity to be flagged as visited
 */
declare function OUTPUT_FlagEntityAsVisited(entities: number[]): void

/**
 * Flashes the ui element shown by set lives counter
 *
 * @param team name of the team whose lives count is being set
 * @param flashSeconds How many seconds should the ui element flash
 */
declare function OUTPUT_FlashLivesCounter(team: string, flashSeconds: number): void

/**
 * Causes an existing global timer to flash for a given number of seconds
 *
 * @param timerName The name of the timer to flash.
 * @param flashSeconds The number of seconds that the displayed timer will flash for
 */
declare function OUTPUT_FlashNamedTimer(timerName: string, flashSeconds: number): void

/**
 * @deprecated
 *
 * @param name deprecated
 * @param size deprecated
 * @param faction deprecated
 * @param team deprecated
 * @param location deprecated
 * @param blocksEast deprecated
 */
declare function OUTPUT_HackSpawnVillage(name: string, size: string, faction: string, team: string, location: number, blocksEast: number): void

/**
 * Disconnects any number of players and automatically has them start a new campaign.
 *
 * @param playerEntities The player entities to disconnect.
 */
declare function OUTPUT_HaveClientExitTutorial(playerEntities: number[]): void

/**
 * Requests the engine load village(s) involved in a village attack v2 so scripts can apply damage.
 *
 * @param invasionId Id of the village attack.
 */
declare function OUTPUT_InvasionAttackV2RequestDamage(invasionId: number): void

/**
 * Resolves any active invasion actions (when possible).
 * This should be called at dawn.
 *
 * 
 */
declare function OUTPUT_InvasionResolveActiveActions(): void

/**
 * Removes entities from a control group.
 *
 * @param sourceEntities The entities to remove.
 * @param controlGroupEntity The control group entity.
 */
declare function OUTPUT_LeaveControlGroup(sourceEntities: number[], controlGroupEntity: number): void

/**
 * Stops the sun from rotating aroud the earth (or vice versa, if that is your belief system)
 *
 * @param lock   true to stop, false to resume
 */
declare function OUTPUT_LockDayNightCycle(lock: boolean): void

/**
 * Removes a key/value pair from a map controller.
 *
 * @param entities The map controller entities.
 * @param key The key.
 */
declare function OUTPUT_MapRemoveKey(entities: number[], key: string): void

/**
 * Remove a map team key/value pair from a map controller.
 *
 * @param entities The map controller entities.
 * @param teamName The team.
 * @param key The key.
 */
declare function OUTPUT_MapRemoveTeamKey(entities: number[], teamName: string, key: string): void

/**
 * Edit or add a key/value pair to a map controller.
 *
 * @param entities The map controller entities.
 * @param key The key.
 * @param value The value.
 */
declare function OUTPUT_MapSetKeyValue(entities: number[], key: string, value: string): void

/**
 * Updates the range of a particular player trigger on a village entity (see the `"badger:map_controller"` component)
 *
 * @param villageEntity The map controller entity. (does *not* have to be a village entity)
 * @param rangeLabel The `bsharp_label` for the particular trigger in `player_triggers`
 * @param newRange The new range to trigger (must be greater than or equal to zero)
 */
declare function OUTPUT_MapSetPlayerTriggerRange(villageEntity: number, rangeLabel: string, newRange: number): void

/**
 * Edit or add a team key/value pair to a map controller.
 *
 * @param entities The map controller entities.
 * @param teamName The team.
 * @param key The key.
 * @param value The value.
 */
declare function OUTPUT_MapSetTeamKeyValue(entities: number[], teamName: string, key: string, value: string): void

/**
 * Mounts given player onto a provided mount.
 *
 * @param playerEntity Player entity.
 * @param mountArchetype Mount archetype (e.g. badger:animal_bird) 
 */
declare function OUTPUT_MountPlayer(playerEntity: number, mountArchetype: string): void

/**
 * Tell an entity group (any size) to walk/move to another entity, ignoring all enemies on the way.
 * This follows an entity.
 *
 * @param sourceEntities The entities to move
 * @param destEntity The entity to get the destination position from
 * @param padding The distance from the target destination to stop
 * @param callback "snippet_name" the snippet to call when the destination is reached
 */
declare function OUTPUT_Move(sourceEntities: number[], destEntity: number, padding: number, callback: string): void

/**
 * Tell an entity group (any size) to walk/move to another entity, attacking along the way as necessary
 * This follows an entity
 *
 * @param sourceEntities The entities to move
 * @param destEntity The entity to follow
 * @param callback "snippet_name" the snippet to call when the destination is reached
 */
declare function OUTPUT_MoveAttackEntity(sourceEntities: number[], destEntity: number, callback: string): void

/**
 * Tell an entity group (any size) to walk/move to another entity, attacking along the way as necessary
 * The position of the dest is measured when this function is called. This does not follow an entity.
 *
 * @param sourceEntities The entities to move
 * @param destEntity The entity to get the destination position from
 * @param range The distance from the target destination to stop
 * @param callback "snippet_name" the snippet to call when the destination is reached
 */
declare function OUTPUT_MoveAttackPosition(sourceEntities: number[], destEntity: number, range: number, callback: string): void

/**
 * Tell an entity group (any size) to walk/move to another entity, ignoring all enemies on the way.
 * The position of the dest is measured when this function is called. This does not follow an entity.
 *
 * @param sourceEntities The entities to move
 * @param destEntity The entity to get the destination position from
 * @param padding The distance from the target destination to stop
 * @param callback "snippet_name" the snippet to call when the destination is reached
 */
declare function OUTPUT_MovePosition(sourceEntities: number[], destEntity: number, padding: number, callback: string): void

/**
 * Orients entities to another entity. WARNING: will snap camera if performed on a player entity
 *
 * @param srcEntities The group of entities to orient.
 * @param orientEntity The entity to orient to.
 */
declare function OUTPUT_OrientEntitiesToEntity(srcEntities: number[], orientEntity: number): void

/**
 * Orients entities to another entity. This will only orient the entity in the direction 
 * (will not touch the player camera if teleporting a player)
 *
 * @param srcEntities The group of entities to orient.
 * @param yaw The angle in radians to face.
 */
declare function OUTPUT_OrientEntitiesToYaw(srcEntities: number[], yaw: number): void

/**
 * Overrides the cinematic played for an entity with "badger:cinematic_death".
 * This must be called in SNIPPET_DeferredDeath only.
 *
 * @param cineName The cinematic name.
 * @param dyingEntity The dying entity.
 */
declare function OUTPUT_OverrideDeathCinematic(cineName: string, dyingEntity: number): number

/**
 * Overrides a mob's appearance with a faction specific appearance.
 * **Must be called on the same tick the entities were spawned.**
 *
 * @param entities The entities to update.
 * @param factionOverrideName The faction name (eg. faction.pig.attack).
 */
declare function OUTPUT_OverrideFactionAppearanceByName(entities: number[], factionOverrideName: string): void

/**
 * Sets a tag filter to entities with a `badger:trigger_criteria`.
 * @see `"badger:spatial_trigger_zone"`
 *
 * @param entities The entities to overwrite the criteria to.
 * @param includeTags The include tags.
 * @param excludeTags The exclude tags.
 * @param allianceRuleFilter The alliance rule.
 */
declare function OUTPUT_OverwriteTriggerCriteriaTags(entities: number[], includeTags: string[], excludeTags: string[], allianceRuleFilter: string): void

/**
 * Globally patches all trigger volumes tagset include rule. 
 *
 * @param newExcludeTags Updated include rule.
 * @param forIncludeTagsIncluding Only update tagset with an include rule that includes these tags.
 * @param forIncludeTagsExcluding Only update tagset with an include rule that excludes these tags.
 * @param forExcludeTagsIncluding Only update tagset with an exclude rule that includes these tags. 
 * @param forExcludeTagsExcluding Only update tagset with an exclude rule that excludes these tags. 
 * @param optionalAllianceRule Only update tagset with an alliance rule that matches this. Use ALLIANCE_PATCH_ALL for any.
 */
declare function OUTPUT_PatchTriggerVolumeExcludeFilter(newExcludeTags: string[], forIncludeTagsIncluding: string[], forIncludeTagsExcluding: string[], forExcludeTagsIncluding: string[], forExcludeTagsExcluding: string[], optionalAllianceRule: string): void

/**
 * Globally patches all trigger volumes tagset include and exclude rule. 
 *
 * @param newIncludeTags Updated exclude rule.
 * @param newExcludeTags Updated include rule.
 * @param forIncludeTagsIncluding Only update tagset with an include rule that includes these tags.
 * @param forIncludeTagsExcluding Only update tagset with an include rule that excludes these tags.
 * @param forExcludeTagsIncluding Only update tagset with an exclude rule that includes these tags. 
 * @param forExcludeTagsExcluding Only update tagset with an exclude rule that excludes these tags. 
 * @param optionalAllianceRule Only update tagset with an alliance rule that matches this. Use ALLIANCE_PATCH_ALL for any.
 */
declare function OUTPUT_PatchTriggerVolumeFilter(newIncludeTags: string[], newExcludeTags: string[], forIncludeTagsIncluding: string[], forIncludeTagsExcluding: string[], forExcludeTagsIncluding: string[], forExcludeTagsExcluding: string[], optionalAllianceRule: string): void

/**
 * Globally patches all trigger volumes tagset exclude rule. 
 *
 * @param newIncludeTags Updated exclude rule.
 * @param forIncludeTagsIncluding Only update tagset with an include rule that includes these tags.
 * @param forIncludeTagsExcluding Only update tagset with an include rule that excludes these tags.
 * @param forExcludeTagsIncluding Only update tagset with an exclude rule that includes these tags. 
 * @param forExcludeTagsExcluding Only update tagset with an exclude rule that excludes these tags. 
 * @param optionalAllianceRule Only update tagset with an alliance rule that matches this. Use ALLIANCE_PATCH_ALL for any.
 */
declare function OUTPUT_PatchTriggerVolumeIncludeFilter(newIncludeTags: string[], forIncludeTagsIncluding: string[], forIncludeTagsExcluding: string[], forExcludeTagsIncluding: string[], forExcludeTagsExcluding: string[], optionalAllianceRule: string): void

/**
 * Pauses a global timer.
 *
 * @param timerName The name of the timer to pause.
 */
declare function OUTPUT_PauseNamedTimer(timerName: string): void

/**
 * Spatial rule that attempts to find closest placement to the target group
 *
 * @param originEntities Entities to find the closest position to
 * @param weight Weight of the rule when leveraged against other weighted rules. Can be any number.
 */
declare function OUTPUT_PlacementAddClosestProximityRule(originEntities: number[], weight: number): void

/**
 * Adds a new spatial rule based on distance to claimed areas. The radius is a padding from the edge of each claimed area.
 *
 * @param hordeName Name of the piglin faction.
 * @param radius The padding.
 */
declare function OUTPUT_PlacementAddExcludeClaimedAreasProximityRule(hordeName: string, radius: number): void

/**
 * Spatial rule to avoid areas of the world within a certain distance from the ocean.
 *
 * @param distance Exclusion distance from the ocean.
 */
declare function OUTPUT_PlacementAddExcludeOceanProximityRule(distance: number): void

/**
 * Adds a new spatial rule based on distance to entities. Each origin, combined with the max distance, represents a circular area in the world
 * to check if a position is outside of the area. Only positions outside of the required number of areas will be considered valid.
 * This function can be called repeatedly to add multiple sets of proximity rules with different entities and restrictions.
 *
 * @param originEntities The entities to use the (x,z) coordinates of.
 * @param distance The distance away from a position in the set to consider as valid. Ie. the radius of the circle.
 * @param numRequired The minimum number of positions in this set that must resolve to true for this rule to be satisfied as a whole
 */
declare function OUTPUT_PlacementAddExcludeProximityRule(originEntities: number[], distance: number, numRequired: number): void

/**
 * Spatial rule that attempts to find farthest placement from the target group
 *
 * @param originEntities Entities to find the farthest position from
 * @param weight Weight of the rule when leveraged against other weighted rules. Can be any number.
 */
declare function OUTPUT_PlacementAddFarthestProximityRule(originEntities: number[], weight: number): void

/**
 * Adds a new spatial rule based on distance to claimed areas. The position must be in a claimed area.
 *
 * @param hordeName The horde the claimed area(s) belong to.
 * @param minDistance Minimum distance from the center of a claimed area.
 * @param maxDistance Maximum distance from the center of a claimed area.
 */
declare function OUTPUT_PlacementAddIncludeClaimedAreasProximityRule(hordeName: string, minDistance: number, maxDistance: number): void

/**
 * Adds a new spatial rule based on distance to entities. Each origin, combined with the min and max distance, represent a donut area in the world
 * to check if a position is within the area. Only positions within the required number of areas will be considered valid.
 * This function can be called repeatedly to add multiple sets of proximity rules with different entities and restrictions.
 *
 * @param originEntities The entities to use the (x,z) coordinates of.
 * @param minDistance The minimum distance away from a position in the set to consider as valid. Ie. the inner radius of the donut.
 * @param maxDistance The maximum distance away from a position in the set to consider as valid. Ie. the outer radius of the donut.
 * @param numRequired The minimum number of positions in this set that must resolve to true for this rule to be satisfied as a whole
 */
declare function OUTPUT_PlacementAddIncludeProximityRule(originEntities: number[], minDistance: number, maxDistance: number, numRequired: number): void

/**
 * Spatial rule to find a position inside a claimed area.
 *
 * @param hordeName Horde the claimed area(s) belong to.
 * @param innerCirclePadding The minimum distance away from the center of the claimed area. Ie. the inner radius of the donut.
 * @param outerCirclePadding The maximum distance away from the center of the claimed area. Ie. the inner radius of the donut.
 */
declare function OUTPUT_PlacementAddInsideClaimedAreasProximityRule(hordeName: string, innerCirclePadding: number, outerCirclePadding: number): void

/**
 * Spatial rule to find a position only in a specified slice
 *
 * @param sliceIndex Slice index
 */
declare function OUTPUT_PlacementAddInsideWorldSliceProximityRule(sliceIndex: number): void

/**
 * Adds a new rule to cap the height of the placement area.
 *
 * @param maxHeight max block height.
 */
declare function OUTPUT_PlacementAddMaxElevationRule(maxHeight: number): void

/**
 * Adds a new rule to set a minimum height of the placement area.
 *
 * @param minHeight min block height.
 */
declare function OUTPUT_PlacementAddMinElevationRule(minHeight: number): void

/**
 * Enable debugging for the next usage of BSharpPlacement. Call this after @see OUTPUT_PlacementStart and before calling the output that uses
 * BSharpPlacement. Will run the placement multiple times and log stats to the console about the success rate, average attempts, and which
 * rules are failing the most. Use this ONLY for debugging and testing placements!
 *
 * 
 */
declare function OUTPUT_PlacementEnableDebugLogging(): void

/**
 * Sets the maximum stamp village would ever get so we can properly calculate the max bounds.
 *
 * @param entity Placement entity that can either be a placement result or a village entity
 * @param stampTextureName Maximum texture stamp that a village would receive during its lifecycle.
 */
declare function OUTPUT_PlacementEntitySetMaximumVillageTextureStamp(entity: number, stampTextureName: string): void

/**
 * Placement function for setting texture stamp. Sets the texture stamp a placement entity will use if successfully used.
 * This output can be used to add or replace a texture stamp.
 *
 * @param entity The placement entity to update.
 * @param textureKey Key name to give this texture.
 * @param stampTextureName Name of the texture to stamp with.
 * @param destroyUnmarkedStructures Specifies whether or not we destroy all present structures in the chunks of the new texture stamp. Only structures with badger:chunk_reload_indestructible_flag will remain.
 */
declare function OUTPUT_PlacementEntityUpdateTextureStamp(entity: number, textureKey: string, stampTextureName: string, destroyUnmarkedStructures: boolean): void

/**
 * Executes the current BSharpPlacement rules.
 * View the results with the QUERY functions.
 *
 * 
 */
declare function OUTPUT_PlacementExecute(): boolean

/**
 * Indicates a preference for slots within certain biomes.
 * This function can only be used with slots.
 * The valid biomeNames are:
 * jungle, drylands, forest, close_ocean, mountain_parent_valleys, frostlands, wetlands, fateful_land_campaign, brokenlands_ridge, grasslands, brokenlands
 *
 * @param biomeNames Names of biomes that are preferred.
 * @param weight Weight of the rule when leveraged against other weighted rules. Can be any number.
 */
declare function OUTPUT_PlacementPreferBiomeRule(biomeNames: string[], weight: number): void

/**
 * Removes a texture from a chosen placement slot without providing a replacement.
 *
 * @param textureKey Name key of the texture given when it was set (not the actual name of the texture!)
 */
declare function OUTPUT_PlacementRemoveTextureStamp(textureKey: string): void

/**
 * Sets the texture stamp avoidance rule allowing us to force villages never overlap with their texture stamps.
 * Note that the villages this rule will avoid are ONLY the villages that have a texture stamp in their slot
 * that has `"village_texture_stamp": true` field set.
 * If the village was not placed on a slot or it did but it doesn't have a corresponding texture stamp (like WoF)
 * this rule will skip those villages and you are better off defining the usual exclude rules.
 * This rule will also take into consideration the "maximum" village texture stamp set with OUTPUT_PlacementSetMaximumVillageTextureStamp
 *
 * @param villageEntities Villages to avoid. Only villages placed on a slot with a valid village texture stamp.
 * @param textureStampToEvaluate Texture stamp to evaluate against.
 * @param padding Shrink/expand the texture stamp bounds for comparison.
 * @param avoidSelf Whether or not the slot in question should never be evaluated.
 */
declare function OUTPUT_PlacementSetAvoidVillageTextureStampsRule(villageEntities: number[], textureStampToEvaluate: string, padding: number, avoidSelf: boolean): void

/**
 * Sets the maximum stamp village would ever get so we can properly calculate the max bounds.
 * This sets it automatically for the last placement ran.
 *
 * @param stampTextureName Maximum texture stamp that a village would receive during its lifecycle.
 */
declare function OUTPUT_PlacementSetMaximumVillageTextureStamp(stampTextureName: string): void

/**
 * Sets the main proximity rule for distance to a set of entities. Each entity position, combined with the min and max distance, represent a donut area in the world
 * to check if a position is within the area. For primary areas, only one area must qualify.
 * This function can be called only once per placement.
 *
 * @param entities The entities to use the (x,z) coordinates of.
 * @param minDistance The minimum distance away from a position in the set to consider as valid. Ie. the inner radius of the donut.
 * @param maxDistance The maximum distance away from a position in the set to consider as valid. Ie. the outer radius of the donut.
 */
declare function OUTPUT_PlacementSetPrimaryProximityRule(entities: number[], minDistance: number, maxDistance: number): void

/**
 * Sets the slot name restriction.
 *
 * @param slotTagName The slot name (`placement_name` in world-gen cards).
 */
declare function OUTPUT_PlacementSlotTag(slotTagName: string): void

/**
 * Begins placement. Call this before setting any rules. Rules can only be set within the same listener as where
 * this is function is called. Will fail if called when there is already a placement sequence ongoing.
 *
 * 
 */
declare function OUTPUT_PlacementStart(): void

/**
 * Placement function for setting texture stamp. On successfully executing placement, if placement was run in slot mode,
 * this output can be called to add/replace the provided texture on the chosen slot.
 *
 * @param textureKey Key name to give this texture.
 * @param stampTextureName Name of the texture to stamp with.
 * @param destroyUnmarkedStructures Specifies whether or not we destroy all present structures in the chunks of the new texture stamp. Only structures with badger:chunk_reload_indestructible_flag will remain.
 */
declare function OUTPUT_PlacementUpdateTextureStamp(textureKey: string, stampTextureName: string, destroyUnmarkedStructures: boolean): void

/**
 * A new placement mode that instead of choosing from ALL the slots would only choose from the village slots given.
 *
 * @param villageEntities Villages to get the slots of. If the villages provided were not placed on the slots, those would be skipped.
 */
declare function OUTPUT_PlacementVillageSlots(villageEntities: number[]): void

/**
 * Plays a variation (flavour, objective) card from a specific named deck.
 *
 * @param deck The deck name.
 * @param villageId The village id to tie the variation to.
 */
declare function OUTPUT_PlayGenericCardFromNamedDeck(deck: string, villageId: number): string

/**
 * Plays a global audio clip. Ensure that the clip is 2D, otherwise it will be played at position (0,0,0).
 *
 * @param audioName The name of the audio clip to be played. Must be a 2D clip.
 */
declare function OUTPUT_PlayGlobalAudio(audioName: string): void

/**
 * Plays a horde card from a named deck that has been set.
 *
 * @param deck Name of the deck from which to play card.
 */
declare function OUTPUT_PlayHordeCardFromNamedDeck(deck: string): void

/**
 * Plays an invasion card from a specific named deck.
 *
 * @param deck The deck name.
 */
declare function OUTPUT_PlayInvasionCardFromNamedDeck(deck: string): void

/**
 * Removes any overrides made to the time used by the audio ambience system.
 *
 * 
 */
declare function OUTPUT_RemoveAmbienceTimeOfDayOverride(): void

/**
 * Removes a buff from entities.
 *
 * @param entities The entities.
 * @param buffName The name of the buff to remove.
 */
declare function OUTPUT_RemoveBuff(entities: number[], buffName: string): void

/**
 * Removes a destroy entities objective from a village.
 *
 * @param villageId The village ID.
 */
declare function OUTPUT_RemoveDestroyEntitiesObjective(villageId: number): void

/**
 * Removes the leash off the entities, if they're leashed. If they are not, nothing happens.
 *
 * @param entitiesWithLeash Entitis that have the leash.
 */
declare function OUTPUT_RemoveLeash(entitiesWithLeash: number[]): void

/**
 * Remove all listeners that reference a given snippet name
 *
 * @param snippetName The snippet name which all listeners that reference will be deleted.
 */
declare function OUTPUT_RemoveListeners(snippetName: string): void

/**
 * Remove a persistent world stream request centered on an entity.
 *
 * @param entity The entity associated with the world request to remove
 * @param requestType The request type of the world request to remove
 * @param group The group of the world request to remove
 */
declare function OUTPUT_RemovePersistentWorldRequest(entity: number, requestType: string, group: string): void

/**
 * Removes an existing player proximity observer. See `OUTPUT_CreatePlayerProximityObserver` to create one.
 *
 * @param observerName The name of the observer to remove. An error will occur if no observers with the name exist.
 */
declare function OUTPUT_RemovePlayerProximityObserver(observerName: string): void

/**
 * Removes a tag from an entity's tag set.
 *
 * @param entities The entities to remove the tag from.
 * @param tag The tag to be removed.
 */
declare function OUTPUT_RemoveTag(entities: number[], tag: string): void

/**
 * Removes tethers that exist between two entities.
 *
 * @param rootEntity The entity hosts the tether.
 * @param tetherEntities The entities to untether from the root entity.
 */
declare function OUTPUT_RemoveTether(rootEntity: number, tetherEntities: number[]): void

/**
 * Untriggers a persistent presentation event from a given entity. (like `OUTPUT_TriggerPresentationEvent`)
 * The targeted entity's data must support the requested presentation effect.
 * Use this output if the entity needs to persist presentation state on save/load (eg. keep a chest open).
 *
 * @param entities Entities to trigger the event on.
 * @param state The name of the event to trigger, as defined in the entity's data.
 */
declare function OUTPUT_RemoveVisualState(entities: number[], state: string): void

/**
 * Removes any `badger:waypoint_marker`s from **entities**.
 *
 * @param entity The **entities** to remove waypoint icons from.
 */
declare function OUTPUT_RemoveWaypointIcon(entity: number[]): void

/**
 * Resets the spawn data of a barracks spawner.
 *
 * @param entities The Barracks Spawner entity to reset.
 */
declare function OUTPUT_ResetBarracksSpawnTypes(entities: number[]): void

/**
 * Resets a units behavior back to default.
 *
 * @param entities The entities to update.
 */
declare function OUTPUT_ResetBehavior(entities: number[]): void

/**
 * Resumes a global timer.
 *
 * @param timerName The name of the timer to resume.
 */
declare function OUTPUT_ResumeNamedTimer(timerName: string): void

/**
 * Output to save microprofiler frames for performance tests
 *
 * @param id id of the microprofile to save
 * @param numFrames Number of frames to capture
 */
declare function OUTPUT_SaveProfilerFrames(id: string, numFrames: number): void

/**
 * Sends an announcer audio message.
 *
 * @param messageReceiverTeam The team that will hear the message.
 * @param messageType The type of message.
 * @param messageDescription The message description.
 */
declare function OUTPUT_SendAnnouncerMessage(messageReceiverTeam: string, messageType: string, messageDescription: string): void

/**
 * Sends a Global Event to all of the clients
 *
 * @param eventName The name of the event to send
 * @param eventType The Type of the event to send
 */
declare function OUTPUT_SendGlobalEventToAll(eventName: string, eventType: string): void

/**
 * Sends a Global Event to specific players.
 *
 * @param eventName The name of the event to send
 * @param eventType The Type of the event to send
 * @param players The players to send the event to
 */
declare function OUTPUT_SendGlobalEventToPlayers(eventName: string, eventType: string, players: number[]): void

/**
 * Sends a Global Event to all clients that are on a specified team
 *
 * @param eventName The name of the event to send
 * @param eventType The Type of the event to send
 * @param teamName The Team Name to send events to, only clients with this name will receive it.
 */
declare function OUTPUT_SendGlobalEventToTeam(eventName: string, eventType: string, teamName: string): void

/**
 * Sends a diegetic audio event to all clients at given position entities.
 * The audio name should be a one-shot name (eg. BAE_foobar)
 *
 * @param audioName The sfx name.
 * @param positionEntities The positions to trigger the event at.
 */
declare function OUTPUT_SendPositionalAudio(audioName: string, positionEntities: number[]): void

/**
 * Sents a diegetic audio event to clients on a team at given position entities.
 *
 * @param audioName The sfx name.
 * @param positionEntities The positions to trigger the event at.
 * @param teamName The team the players must belong to.
 */
declare function OUTPUT_SendPositionalAudioToTeam(audioName: string, positionEntities: number[], teamName: string): void

/**
 * Removes the value mapped to a certain key in the server's map state
 *
 * @param key Key mapping to a value that will be removed.
 */
declare function OUTPUT_ServerMapRemoveKey(key: string): void

/**
 * Sets a key/value pair in the server's map state
 *
 * @param key Key for the server's tag map.
 * @param value Value assigned to that key 
 */
declare function OUTPUT_ServerMapSetKeyValue(key: string, value: string): void

/**
 * Overrides the time provided to the audio ambience system.
 *
 * @param timeOfDay The time to set the override to.
 */
declare function OUTPUT_SetAmbienceTimeOfDayOverride(timeOfDay: number): void

/**
 * Enables a target action for all mobs that meet a specific criteria within the aggro range. For more information, see the `badger:target_actions` component.
 * **WARNING: Currently this function will NOT work if called in the same tick as `OUTPUT_SetBehavior`**
 *
 * @param entities The entities to set the attack mode of.
 * @param attackMode The name of the target action to set.
 * @param on Turn the attack mode on?
 */
declare function OUTPUT_SetAttackMode(entities: number[], attackMode: string, on: boolean): void

/**
 * Sets a save/loaded audio variable that is synced to all players in the game.
 * These variables can be used by FMOD.
 *
 * @param variableName The variable name.
 * @param value The decimal float.
 */
declare function OUTPUT_SetAudioVariable(variableName: string, value: number): void

/**
 * Changes a barracks spawner's batch size data.
 *
 * @param entities The Barracks Spawner entity to update.
 * @param batch The new batch size of the barracks.
 */
declare function OUTPUT_SetBarracksBatchSize(entities: number[], batch: number): void

/**
 * Changes a barracks spawner's spawn cap data.
 *
 * @param entities The Barracks Spawner entity to update.
 * @param cap The new spawn cap of the barracks.
 */
declare function OUTPUT_SetBarracksSpawnCap(entities: number[], cap: number): void

/**
 * Changes a barracks spawner's spawn rate data.
 *
 * @param entities The Barracks Spawner entity to update.
 * @param rate The delay in seconds between each spawn for the barracks.
 */
declare function OUTPUT_SetBarracksSpawnRate(entities: number[], rate: number): void

/**
 * Changes a barracks spawner's data.
 *
 * @param entities The Barracks Spawner entities to update.
 * @param spawnTypes The new spawn types of the barracks.
 */
declare function OUTPUT_SetBarracksSpawnTypes(entities: number[], spawnTypes: string[]): void

/**
 * Applies a new behavior to the given entities.
 *
 * @param entities The entities to have the behavior applied to. Should be entities for which the behavior is applicable.
 * @param behavior The name of the behavior to apply. Eg. "badger:behavior_curious"
 */
declare function OUTPUT_SetBehavior(entities: number[], behavior: string): void

/**
 * Sets a global cinematic variable. This can be used for cinematic controls like if a cinematic is skippable.
 *
 * @param variableName The cinematic variable name.
 * @param value True or false.
 */
declare function OUTPUT_SetCinematicVariable(variableName: string, value: boolean): void

/**
 * Sets entities deferred death status. If deferred, death by damage is instead delayed
 * and B# scripts must handle it instead. Note if not handled there is a 60 second failsafe.
 *
 * @param entities The entities to defer.
 * @param isDeferred If the entities should be deferred or not.
 */
declare function OUTPUT_SetDeferredDeath(entities: number[], isDeferred: boolean): void

/**
 * Create a delayed invasion action that can be thwarted or executed in the future.
 *
 * @param sourceVillageEntity The source village **ENTITY** initiating the action.
 * @param invasionAction The action to do.
 * @param targetVillageEntities The target village **ENTITY** receiving the action. Use `[]` if there is no target.
 * @param hidden If true, this action will not be shown on the map both when it's set and when it's thwarted. Will still display when its executed at night.
 * @param factionName Name of the piglin faction responsible for this attack.
 * @param strength strength
 */
declare function OUTPUT_SetDelayedInvasionAction(sourceVillageEntity: number, invasionAction: string, targetVillageEntities: number[], hidden: boolean, factionName: string, strength: number): void

/**
 * OUTPUT_SetDisableByHealthCinematicState
 *
 * @param entities entity to disabled
 * @param isEnabled isEnabled
 */
declare function OUTPUT_SetDisableByHealthCinematicState(entities: number[], isEnabled: boolean): void

/**
 * Changes the currently-playing music on an entity with a music emitter
 * @see `badger:music_emitter_state` in `music_emitter.json`
 *
 * @param entities The entity (or entities) to set
 * @param trackName The name of the state to set to. Should be a member of the array in `badger:music_emitter_state`.
 */
declare function OUTPUT_SetEmitterState(entities: number[], trackName: string): void

/**
 * Emphasize (highlight) a HUD item or all players.
 *
 * @param hudItemId The HUD item ID.
 * @param emphasizedState Is emphasized or not.
 */
declare function OUTPUT_SetEmphasizedHUDItem(hudItemId: string, emphasizedState: boolean): void

/**
 * DEPRECATED.
 * Please use barrack configuration functions.
 *
 * @param villageId The village ID of the piglin base.
 * @param count The desired number of engineers.
 */
declare function OUTPUT_SetEngineerCount(villageId: number, count: number): void

/**
 * DEPRECATED.
 * Please set the `reassignment_delay` on the `badger:engineer_station` component in the village json files.
 *
 * @param villageId The village ID of the piglin base.
 * @param delaySeconds The delay in seconds.
 */
declare function OUTPUT_SetEngineerReassignmentDelay(villageId: number, delaySeconds: number): void

/**
 * Sets a timer attached to an entity.
 *
 * @param entity The entity that owns this timer.
 * @param timerName The name of the timer to start.
 * @param timerValue The value to set the timer to.
 */
declare function OUTPUT_SetEntityTimer(entity: number, timerName: string, timerValue: number): void

/**
 * Set a group of entities to be owned by a faction.
 *
 * @param entities The entities to set as owned by a faction.
 * @param factionName The name of the faction to assign as the owner of the entities.
 */
declare function OUTPUT_SetFactionByName(entities: number[], factionName: string): void

/**
 * Enables or disabled the fast travel state of a village.
 *
 * @param villageId Id of the village
 * @param enable The state of the fast travel. True --> enable, False --> disable
 */
declare function OUTPUT_SetFastTravelEnabled(villageId: number, enable: boolean): void

/**
 * Sets a global variable. Do not use this for things that are local to a particular area. (eg: per village)
 *
 * @param variableName The name of the variable to set.
 * @param variableValue The new value of the variable.
 */
declare function OUTPUT_SetGlobalVariable(variableName: string, variableValue: number): void

/**
 * Sets entities health.
 *
 * @param entities The entities to update.
 * @param healthPercent The percent health. Accepted values 0 - 100.
 */
declare function OUTPUT_SetHealthPercent(entities: number[], healthPercent: number): void

/**
 * Sets an icons maximum viewing distance if the entities have an icon.
 *
 * @param entities The icons to change.
 * @param distance The maximum viewing distance.
 */
declare function OUTPUT_SetIconMaxDistance(entities: number[], distance: number): void

/**
 * Sets an icons minimum viewing distance if the entities have an icon.
 *
 * @param entities The icons to change.
 * @param distance The minimum viewing distance.
 */
declare function OUTPUT_SetIconMinDistance(entities: number[], distance: number): void

/**
 * Toggles an icon off if the entities have one.
 *
 * @param entities The icons to toggle.
 */
declare function OUTPUT_SetIconOff(entities: number[]): void

/**
 * Toggles an icon on if the entities have one.
 *
 * @param entities The icons to toggle.
 */
declare function OUTPUT_SetIconOn(entities: number[]): void

/**
 * Changes a waypoint markers icon.
 *
 * @param entities The icons to update.
 * @param iconPath The URI path to the icon.
 */
declare function OUTPUT_SetIconPath(entities: number[], iconPath: string): void

/**
 * Overrides the priority of an entity's compass icon.
 *
 * @param entities Entities whose compass icons will be overriden.
 * @param priority The new priority for the compass icons.
 */
declare function OUTPUT_SetIconPriority(entities: number[], priority: number): void

/**
 * Sets an entities influenceable state. (eg. if it can be lured or directed).
 * Calling this function will cancel any current move orders or influences.
 *
 * @param entities The entities to update.
 * @param isInfluenceable If it can be influenced.
 */
declare function OUTPUT_SetInfluenceable(entities: number[], isInfluenceable: boolean): void

/**
 * Enable or disable whether or not an interactable entity can be interacted with.
 * The provided entity must be interactable.
 *
 * @param entity The interactable entity to be modified.
 * @param enabled Whether the interaction should be active or not.
 */
declare function OUTPUT_SetInteractionState(entity: number, enabled: boolean): void

/**
 * Sets an entity to be invulnerable.
 * The entity can still be directly destroyed/despawned (eg. OUTPUT_DespawnEntities)
 *
 * @param entities The entities to update.
 * @param isInvulnerable Should the entity be invulnerable?
 */
declare function OUTPUT_SetInvulnerable(entities: number[], isInvulnerable: boolean): void

/**
 * Sets an entity to be invulnerable with the specified render effect.
 *
 * @param entities The entities to update.
 * @param isInvulnerable Should the entity be invulnerable?
 * @param effectIndex The render effect.
 */
declare function OUTPUT_SetInvulnerableWithEffect(entities: number[], isInvulnerable: boolean, effectIndex: number): void

/**
 * Sets the leash of every entity in the entitiesToLeash to be attached to leash target.
 *
 * @param entitiesToLeash Entities that needs to be leashed.
 * @param entityLeashTarget Target for leashing (one entity).
 * @param leashRange Range at which the leashing will trigger and entity will be recalled.
 * @param returnRange Range at which the recall will end. This would usually be smaller than leash range.
 */
declare function OUTPUT_SetLeash(entitiesToLeash: number[], entityLeashTarget: number, leashRange: number, returnRange: number): void

/**
 * Sets the leash of every entity in the entitiesToLeash to be attached to leash target,
 * and these entities will return when not targeting anything
 *
 * @param entitiesToLeash Entities that needs to be leashed.
 * @param entityLeashTarget Target for leashing (one entity).
 * @param leashRange Range at which the leashing will trigger and entity will be recalled.
 * @param returnRange Range at which the recall will end. This would usually be smaller than leash range.
 */
declare function OUTPUT_SetLeashWithReturnWhenNotTargeting(entitiesToLeash: number[], entityLeashTarget: number, leashRange: number, returnRange: number): void

/**
 * Displays a UI for all players that tracks the number of remaining lives
 * Must be manually updated to track remaining lives, whatever that means for each Lost Legend
 * Set to -1 to turn off the counter
 *
 * @param livesCount How many lives should the ui start with
 * @param team name of the team whose lives count is being set
 * @param flashAtOneLife should the ui element flash when 1 life is remaining
 */
declare function OUTPUT_SetLivesCounter(livesCount: number, team: string, flashAtOneLife: boolean): void

/**
 * Sets a loot table override for entities.
 *
 * @param entities The entities to update.
 * @param overrideName The override name on the entity (this is not a loot table ID).
 */
declare function OUTPUT_SetLootTableOverride(entities: number[], overrideName: string): void

/**
 * Returns a loot table override for an entity back to default.
 *
 * @param entities The entities to update.
 */
declare function OUTPUT_SetLootTableToDefault(entities: number[]): void

/**
 * Sets a specfic deck by name.
 *
 * @param deckName The name of the deck to set.
 * @param cards The cards to set the deck to.
 */
declare function OUTPUT_SetNamedDeck(deckName: string, cards: number[][][]): void

/**
 * Sets a global timer. Do not use this for something that could be repeated throughout the game world.
 *
 * @param timerName The name of the timer to start.
 * @param timerValue The new value to set the timer to.
 */
declare function OUTPUT_SetNamedTimer(timerName: string, timerValue: number): void

/**
 * Sets the visual state of the timer when it expires to either a success or failure state.
 * If this function isn't called the timer will have default behaviour: disappearing when the timer expires.
 *
 * @param timerName Global timer name.
 * @param successWhenTimeExpires True sets the timer to succeed when the timer expires. False sets the timer to fail when the timer expires
 */
declare function OUTPUT_SetNamedTimerExpiredState(timerName: string, successWhenTimeExpires: boolean): void

/**
 * Manually sets the visual state of the timer to a success or failure state
 *
 * @param timerName Global timer name.
 * @param didSucceed If true, sets the timer visual state to success. If false, sets the timer visual state to failure
 */
declare function OUTPUT_SetNamedTimerSuccessState(timerName: string, didSucceed: boolean): void

/**
 * Sets the level of global Nether Spores. Nether Spores disable natural precipitation.
 *
 * @param strength Intensity of nether spores. Zero will turn them off.
 */
declare function OUTPUT_SetNetherSporesActiveEverywhere(strength: number): void

/**
 * Sets the objective bar HUD element visibility for an objective bar entity.
 *
 * @param entity The objective bar entity.
 * @param isVisible If the HUD element will be visible or not.
 */
declare function OUTPUT_SetObjectiveHealthBarVisible(entity: number, isVisible: boolean): void

/**
 * toggles the visibility of an objective showing up on the playes map. Needs to be added to objectives_data.json
 *
 * @param objectiveName The name of the objective. This should be the same as the lang file text
 * @param isVisible Whether the objective will show on the map screen or not
 */
declare function OUTPUT_SetObjectiveVisibility(objectiveName: string, isVisible: boolean): void

/**
 * Overrides the max compass range of an entity's waypoint icon
 *
 * @param entityToOverride The entity to override
 * @param distance The new max distance
 */
declare function OUTPUT_SetOverrideForCompassMaxRange(entityToOverride: number, distance: number): void

/**
 * Set a group of entities to be owned by an invasion.
 *
 * @param entities The entities to set as owned by an invasion.
 * @param invasionId The specific invasion ID.
 */
declare function OUTPUT_SetOwnerInvasionAttack(entities: number[], invasionId: number): void

/**
 * Set a group of entities to be owned by a village.
 *
 * @param entities The entities to set as owned by a village.
 * @param villageId The id of the village to assign as the owner of the entities.
 */
declare function OUTPUT_SetOwnerVillageById(entities: number[], villageId: number): void

/**
 * Sets whether an entity should partake in the pop-cap system.
 * **This only works on entities that originally partook of the pop-cap system!**
 *
 * @param entities The entities to update.
 * @param isPopCapped Is this entity part of the pop cap system? (can be despawned)
 */
declare function OUTPUT_SetPopCapped(entities: number[], isPopCapped: boolean): void

/**
 * Sets the cap for a given resource using a player entity as the inventory owner (or their team if a team resource).
 *
 * @param playerEntity The player whose inventory is to be modified.
 * @param resourceName The name of the resource.
 * @param cap The new cap to set for the resource.
 */
declare function OUTPUT_SetResourceCap(playerEntity: number, resourceName: string, cap: number): void

/**
 * Sets the sky state (e.g. Sun-Moon, two Suns, etc.)
 *
 * @param skyState The state to change the sky to.
 */
declare function OUTPUT_SetSkyState(skyState: string): void

/**
 * Sets the spawner to add a loot override to all spawned entities.
 *
 * @param entities The spawner entities.
 * @param overrideName The override name on the spawned entity (this is not a loot table ID).
 */
declare function OUTPUT_SetSpawnerAddLootOverride(entities: number[], overrideName: string): void

/**
 * Sets entities team. Entities need teams to be included in trigger criteria and aggro escalation.
 * @see `team_manager.json`
 *
 * @param entitiesToPlaceAt The entities to set the team of.
 * @param teamname The name of the team to set.
 */
declare function OUTPUT_SetTeam(entitiesToPlaceAt: number[], teamname: string): void

/**
 * Set the baseline ticket cap for a ticket type such as 'build', 'gather', or 'spawn'.
 *
 * @param ticketType The type of ticket to set. @see TICKET_BUILD @see TICKET_GATHER @see TICKET_SPAWN
 * @param cap The new cap to set the ticket type to.
 */
declare function OUTPUT_SetTicketCap(ticketType: string, cap: number): void

/**
 * Despawns a village and all entities owned by the village. Then spawns a new village with a new size in the same location.
 *
 * @param timeOfDay Time of day (0-1) to set
 */
declare function OUTPUT_SetTimeOfDay(timeOfDay: number): void

/**
 * Sets up a destroy entities objective.
 * @see LISTENFOR_InvasionDestroyEntitiesObjective
 *
 * @param villageId The village ID.
 * @param entities The entities to mark as an objective.
 * @param numberToDestroy The number of entities to destroy to end the objective.
 * @param factionName The faction that "owns" this objective.
 */
declare function OUTPUT_SetupDestroyEntitiesObjective(villageId: number, entities: number[], numberToDestroy: number, factionName: string): void

/**
 * Sets up a destroy entities objective, identical to OUTPUT_SetupDestroyEntitiesObjective
 * This method will hide the village healthbar and instead only show the objective UI element
 *
 * @param villageId The village ID.
 * @param entities The entities to mark as an objective.
 * @param numberToDestroy The number of entities to destroy to end the objective.
 * @param factionName The faction that "owns" this objective.
 */
declare function OUTPUT_SetupDestroyEntitiesObjectiveWithHealthbarStomp(villageId: number, entities: number[], numberToDestroy: number, factionName: string): void

/**
 * Sets the flavour for a village. Should only be used in response to cards during village planning.
 *
 * @param flavour The flavour to assign.
 * @param villageId The id of the village to apply the flavour to.
 */
declare function OUTPUT_SetVillageFlavour(flavour: string, villageId: number): void

/**
 * Sets the objective for a village. Should only be used in response to cards during village planning.
 *
 * @param objective The objective to assign.
 * @param villageId The id of the village to apply the objective to.
 */
declare function OUTPUT_SetVillageObjective(objective: string, villageId: number): void

/**
 * Marks a village as occupied (by piglins).
 *
 * @param villageId The village ID.
 * @param isOccupied If the village is occupied or not.
 * @param hordeName name of horde
 */
declare function OUTPUT_SetVillageOccupied(villageId: number, isOccupied: boolean, hordeName: string): void

/**
 * Sets entities to be persistent - they can't be popcapped and will be teleported back to the village if wandered too far
 *
 * @param entities The entities of interest
 * @param villageId The village id where the entities are stationed
 */
declare function OUTPUT_SetVillagePersistentEntities(entities: number[], villageId: number): void

/**
 * Sets whether respawn points in a village are active. This does not override other rules causing the respawn points to be disabled.
 *
 * @param villageId The ID for the village containing the respawn points.
 * @param enabled The desired state of the respawn points.
 */
declare function OUTPUT_SetVillageRespawnPointsEnabled(villageId: number, enabled: boolean): void

/**
 * Create a suspension dependency relationship between two villages. This means that when one suspends/unsuspends, the other will do the same.
 * The villages must be unpaired for this to work. To remove the pairing, use @see OUTPUT_UnsetVillageSuspensionPair
 *
 * @param villageEntityA One of the villages to be paired.
 * @param villageEntityB One of the villages to be paired.
 */
declare function OUTPUT_SetVillageSuspensionPair(villageEntityA: number, villageEntityB: number): void

/**
 * Set the Wave Level in Wave Difficulty
 *
 * @param waveLevel the level of intensity of the wave
 */
declare function OUTPUT_SetWaveLevel(waveLevel: number): void

/**
 * Slices the world in given pieces - to used in combination with OUTPUT_PlacementAddInsideWorldSliceProximityRule
 *
 * @param sliceNum Number of slices
 */
declare function OUTPUT_SliceWorld(sliceNum: number): void

/**
 * Spawns a buildable at another entity and snap it to the ground.
 *
 * @param buildableName The name of the buildable to spawn (eg: `badger:poi_sword_gold`).
 * @param entitiesPosition The entities to spawn this buildable at.
 * @param buildableTeam The team to spawn the structure on (required!).
 * @param facingDirection The orientation that the structre should be facing: (eg: `north`, `south`, `east`, or `west`).
 * @param instantBuild Should we instantly build this structure.
 * @param onGround Snap buildable to the surface.
 * @param callback A call to `SpawnBuildableCallback` with the snippet to call on complete. This can be ignored by passing in an empty string.
 */
declare function OUTPUT_SpawnBuildableAt(buildableName: string, entitiesPosition: number[], buildableTeam: string, facingDirection: string, instantBuild: boolean, onGround: boolean, callback: string): void

/**
 * Spawns a buildable at another entity and snap it to the ground but with an offset from the other EG. (the Y value will still be snapped to the ground)
 *
 * @param buildableName The name of the buildable to spawn (eg: `badger:poi_sword_gold`).
 * @param entitiesPosition The entities to spawn this buildable at.
 * @param buildableTeam The team to spawn the structure on (required!).
 * @param facingDirection The orientation that the structre should be facing: (eg: `north`, `south`, `east`, or `west`).
 * @param instantBuild Should we instantly build this structure.
 * @param onGround Snap buildable to the surface.
 * @param x The X offset the structure should be at.
 * @param y The Y offset the structure should be at.
 * @param z The Z offset the structure should be at.
 * @param callback A call to `SpawnBuildableCallback` with the snippet to call on complete. This can be ignored by passing in an empty string.
 */
declare function OUTPUT_SpawnBuildableAtWithOffset(buildableName: string, entitiesPosition: number[], buildableTeam: string, facingDirection: string, instantBuild: boolean, onGround: boolean, x: number, y: number, z: number, callback: string): void

/**
 * Spawns multiple entities at the location of another entity.
 * @returns The entities of the newly-spawned entities, or an empty array if there's an error.
 *
 * @param entitiesToPlaceAt The entities to spawn at. Will spawn at each entity.
 * @param archetypeName The archetype name of the entities to spawn.
 * @param spawnCount How many entities to spawn. Must be larger than 0. If only spawning 1, then @see OUTPUT_SpawnEntityAt
 */
declare function OUTPUT_SpawnEntitiesAt(entitiesToPlaceAt: number[], archetypeName: string, spawnCount: number): number[]

/**
 * Spawns multiple entities at the location of another entity, but sets the height to the ground height.
 * @returns The entities of the newly-spawned entities, or `0` if there's an error.
 *
 * @param entitiesToPlaceAt The entities to spawn at. Will spawn at each entity.
 * @param archetypeName The archetype name of the entities to spawn.
 * @param spawnCount How many entities to spawn. Must be larger than 0. If only spawning 1, then @see OUTPUT_SpawnEntityAtGroundHeight
 */
declare function OUTPUT_SpawnEntitiesAtGroundHeight(entitiesToPlaceAt: number[], archetypeName: string, spawnCount: number): number[]

/**
 * "Spreads" enitities in the village according to the provided min and max radius. Avoids trees and buildings.
 *
 * @param entityArchetype The archetype name of the entities to spawn.
 * @param spawnCount How many entities to spawn. Must be larger than 0.
 * @param villageId Village at which to spread entities. Must be loaded.
 * @param minRadius Min radius (suggested value: 20)
 * @param maxRadius Max radius (suggested value: 50)
 */
declare function OUTPUT_SpawnEntitiesInVillage(entityArchetype: string, spawnCount: number, villageId: number, minRadius: number, maxRadius: number): number[]

/**
 * Spawns an entity at the location of another entity.
 * @returns The entities of the newly-spawned entities, or an empty array if there's an error.
 *
 * @param entitiesToPlaceAt The entities to spawn near. Will spawn at each entity.
 * @param archetypeName The archetype name of the entity to spawn.
 * @param spawnCount How many entities to spawn. Must be larger than 0.
 */
declare function OUTPUT_SpawnEntitiesNear(entitiesToPlaceAt: number[], archetypeName: string, spawnCount: number): number[]

/**
 * Spawns an entity at the location of another entity.
 * @returns The entities of the newly-spawned entities, or an empty array if there's an error.
 *
 * @param entitiesToPlaceAt The entities to spawn at. Will spawn at each entity.
 * @param archetypeName The archetype name of the entity to spawn.
 */
declare function OUTPUT_SpawnEntityAt(entitiesToPlaceAt: number[], archetypeName: string): number[]

/**
 * Spawns an entity at the location of another entity, but sets the height to the ground height.
 * @returns The entities of the newly-spawned entities, or an empty array if there's an error.
 *
 * @param entitiesToPlaceAt The entities to spawn at. Will spawn at each entity.
 * @param archetypeName The archetype name of the entity to spawn.
 */
declare function OUTPUT_SpawnEntityAtGroundHeight(entitiesToPlaceAt: number[], archetypeName: string): number[]

/**
 * Spawns village attack FOBs evenly around a village at an arbitray distance. Used as an alternative when we don't have slots setup
 * around the village.
 *
 * @param invasionId ID of the village attack.
 * @param villageArchetype Archetype of the village entities to spawn.
 * @param size Size of the new bases
 * @param amount Number of bases to spawn.
 * @param distance Distance from the targeted village.
 */
declare function OUTPUT_SpawnInvasionAttackFobsV2AtDistance(invasionId: number, villageArchetype: string, size: string, amount: number, distance: number): void

/**
 * Spawns a FOB type village used for the invasion attack V2 action.
 * multiple FOB's can be spawned per attack.
 *
 * @param invasionId The specific invasion ID.
 * @param villageArchetype The village archetype to spawn.
 * @param size The size type.
 * @param positionEntity The entity to spawn at.
 */
declare function OUTPUT_SpawnInvasionAttackFobV2(invasionId: number, villageArchetype: string, size: string, positionEntity: number): void

/**
 * Spawns a piglin base (village) for an invasion action. Returns the new village entity.
 * @requires BSharpPlacement
 * @see OUTPUT_SpawnVillage
 *
 * @param positionEntity Where to spawn the base.
 * @param villageArchetype The village archetype to spawn.
 * @param size The new size defined in villages.json.
 * @param factionName The faction **name** (eg. faction.pig.defend)
 * @param teamName The team alias
 * @param action The UI event name. See `invasion_settings.json`
 */
declare function OUTPUT_SpawnInvasionBase(positionEntity: number, villageArchetype: string, size: string, factionName: string, teamName: string, action: string): number

/**
 * Spawns a buildable using BSharpPlacement that belongs to a player and their team.
 * @requires BSharpPlacement
 *
 * @param positionEntity Where to spawn the buildable.
 * @param archetype The buildable archetype to spawn.
 * @param facingDirection The direction to face the building: north, west, east, south
 * @param instant Create the building instantly?
 * @param player The player who will act as the creator of this entity.
 * @param waiveCost Charge the cost of the buildable to the player's team?
 */
declare function OUTPUT_SpawnPlayerBuildable(positionEntity: number, archetype: string, facingDirection: string, instant: boolean, player: number, waiveCost: boolean): void

/**
 * Spawns a village in the world given a set of placement rules. Returns the new village entity.
 * @requires BSharpPlacement
 *
 * @param positionEntity Where to spawn the village.
 * @param villageArchetype The village archetype to spawn.
 * @param size The new size defined in villages.json.
 * @param factionName The faction **name** (eg. faction.pig.defend)
 * @param teamName The team alias
 */
declare function OUTPUT_SpawnVillage(positionEntity: number, villageArchetype: string, size: string, factionName: string, teamName: string): number

/**
 * Spawns a buildable using BSharpPlacement that belongs to a village.
 * @requires BSharpPlacement
 *
 * @param positionEntity Where to spawn the buildable.
 * @param archetype The buildable archetype to spawn.
 * @param facingDirection The direction to face the building: north, west, east, south
 * @param instant Create the building instantly?
 * @param villageId The id of the village that will own this buildable.
 */
declare function OUTPUT_SpawnVillageBuildable(positionEntity: number, archetype: string, facingDirection: string, instant: boolean, villageId: number): void

/**
 * Starts a village attack. The time of the attack is calculated internally using the current time of day (at night) and the total length of night.
 * Late activation of this attack will result in lower attack times.
 *
 * @param villageId The target village ID.
 * @param factionName The attacking piglin faction.
 * @param strength The attack strength.
 * @param time The duration of the activated attack in percent. (0-100)
 * @param minSeconds The minimum duration of the activated attack in seconds.
 */
declare function OUTPUT_StartInvasionAttackV2(villageId: number, factionName: string, strength: number, time: number, minSeconds: number): void

/**
 * Starts a village attack. The time of the attack is specified and will always last just as long. Activating this attack late will not result in
 * any chances in the attack time.
 *
 * @param villageId Id of the village that is being attacked.
 * @param factionName Name of the piglin faction performing the attack.
 * @param strength Strenght of the attack (>= 1).
 * @param timeOverride The exact time for the attack (in seconds).
 */
declare function OUTPUT_StartInvasionAttackV2TimeOverride(villageId: number, factionName: string, strength: number, timeOverride: number): void

/**
 * Add a true or false value to the active telemetry event.
 *
 * @param propertyName The name of the property. (ex. "IsDead")
 * @param value The value of the property (ex. true)
 */
declare function OUTPUT_TelemetryAddBool(propertyName: string, value: boolean): void

/**
 * Telemetry to track cinematic events
 *
 * 
 */
declare function OUTPUT_TelemetryAddCinematicsInfo(): void

/**
 * Adds the total number of times an event was recorded with matching "Category" for a given player.
 * You must call `OUTPUT_TelemetryAddFormattedName` first (to set the category).
 *
 * @param playerEntity The specific player.
 * @param propertyName The property name for the event.
 */
declare function OUTPUT_TelemetryAddCountCategory(playerEntity: number, propertyName: string): void

/**
 * Adds the total number of times an event was recorded with matching "Subcategory" for a given player.
 * You must call `OUTPUT_TelemetryAddFormattedName` first (to set the Subcategory).
 *
 * @param playerEntity The specific player.
 * @param propertyName The property name for the event.
 */
declare function OUTPUT_TelemetryAddCountSubcategory(playerEntity: number, propertyName: string): void

/**
 * Adds an unique enter/exit ID from trigger volumes to the active telemetry event.
 *
 * @param triggerVolumeEntity The trigger volume entity
 * @param intruderEntity The intruder entity
 */
declare function OUTPUT_TelemetryAddEnterExitUID(triggerVolumeEntity: number, intruderEntity: number): void

/**
 * Add a decimal value to the active telemetry event.
 *
 * @param propertyName The name of the property. (ex. "HealthLeft")
 * @param value The value of the property (ex. 0.42)
 */
declare function OUTPUT_TelemetryAddFloat(propertyName: string, value: number): void

/**
 * Add an integer value to the active telemetry event.
 *
 * @param propertyName The name of the property. (ex. "BuildingCount")
 * @param value The value of the property (ex. 42)
 */
declare function OUTPUT_TelemetryAddInt(propertyName: string, value: number): void

/**
 * Adds an integer value for the number of seconds players have spent engaged with a village attack.
 *
 * @param invasionId Id of the village attack.
 */
declare function OUTPUT_TelemetryAddInvasionAttackTimePlayersEngaged(invasionId: number): void

/**
 * An unique GUID for invasion breaks.
 *
 * @param started If the break just started (new GUID) or ended (retrieve last GUID)
 */
declare function OUTPUT_TelemetryAddInvasionBreakGUID(started: boolean): void

/**
 * Adds an unique location ID from certain entities to the active telemetry event.
 * Works on: POIs, Culture Villages, Piglin Villages, Mob Alliance Villages
 * @see `OUTPUT_TelemetryAddLocationUIDWithVillageID(villageId)`
 *
 * @param locationEntity The location entity
 */
declare function OUTPUT_TelemetryAddLocationUID(locationEntity: number): void

/**
 * telemeetry to track when spawners are made
 *
 * 
 */
declare function OUTPUT_TelemetryAddSpawnerInfo(): void

/**
 * Add a string value to the active telemetry event.
 *
 * @param propertyName The name of the property. (ex. "FactionName")
 * @param value The value of the property (ex. "faction.pig.defend")
 */
declare function OUTPUT_TelemetryAddString(propertyName: string, value: string): void

/**
 * Adds the teams balance from a player to the active telemetry event.
 *
 * @param playerEntity The player whose teams balance is to be added
 */
declare function OUTPUT_TelemetryAddTeamBalance(playerEntity: number): void

/**
 * Adds the time since an event was recorded with matching "Category" for a given player.
 * You must call `OUTPUT_TelemetryAddFormattedName` first (to set the Category).
 *
 * @param playerEntity The specific player.
 * @param propertyName The property name for the event.
 */
declare function OUTPUT_TelemetryAddTimeSinceLastCategory(playerEntity: number, propertyName: string): void

/**
 * Adds the time since an event was recorded with matching "Subcategory" for a given player.
 * You must call `OUTPUT_TelemetryAddFormattedName` first (to set the Subcategory).
 *
 * @param playerEntity The specific player.
 * @param propertyName The property name for the event.
 */
declare function OUTPUT_TelemetryAddTimeSinceLastSubcategory(playerEntity: number, propertyName: string): void

/**
 * Adds info for all `OUTPUT_AddOrRemoveResource` performed in the current snippet.
 * Specifically this captures the **intended delta** and final result after giving the resources.
 *
 * @param playerEntity The player that received/lost the resources.
 */
declare function OUTPUT_TelemetryAddTransactionPlayer(playerEntity: number): void

/**
 * Create a named telemetry event for a specific player.
 * Add information to the event with `OUTPUT_TelemetryAddXXX` and record the event with `OUTPUT_TelemetryRecordEvent`
 *
 * @param playerEntity The player
 * @param eventName The event name.
 * @param isPlayFab If this event will be used for PlayFab as well or only our systems (like achievements).
 */
declare function OUTPUT_TelemetryCreateEvent(playerEntity: number, eventName: string, isPlayFab: boolean): void

/**
 * Create a named telemetry event for a general event that does not relate to one specific player.
 * Add information to the event with `OUTPUT_TelemetryAddXXX` and record the event with `OUTPUT_TelemetryRecordEvent`
 *
 * @param eventName The event name
 * @param isPlayFab If this event will be used for PlayFab as well or only our systems (like achievements).
 */
declare function OUTPUT_TelemetryCreateServerEvent(eventName: string, isPlayFab: boolean): void

/**
 * Called when player completes certain Onboarding step
 *
 * @param onboardingName name of onboarding step
 */
declare function OUTPUT_TelemetryOnboardingComplete(onboardingName: string): void

/**
 * Create an OnboardingTip telemetry event
 *
 * @param onboardingName name of onboarding step
 */
declare function OUTPUT_TelemetryOnboardingStart(onboardingName: string): void

/**
 * tells the game to fire a CampaignBehaviourUpdate event
 *
 * @param actChanged bool to let us know if the act changed
 * @param newAct if the act did change, what is the new act?
 * @param interval The time when the telemetry event is created
 */
declare function OUTPUT_TelemetryRecordCampaignBehaviourProgressEvent(actChanged: boolean, newAct: string, interval: number): void

/**
 * Records the active telemetry event.
 *
 * 
 */
declare function OUTPUT_TelemetryRecordEvent(): void

/**
 * Records a telemetry funnel event for all the given players.
 *
 * @param playerEntities Player entities.
 * @param funnelStepName Name of the event.
 * @param stepNumCurrent Current step number
 * @param stepNumMax Maximum step number.
 * @param funnelCategory the category of the funnel
 * @param funnelName name of funnel
 */
declare function OUTPUT_TelemetryRecordFunnelEvent(playerEntities: number[], funnelStepName: string, stepNumCurrent: number, stepNumMax: number, funnelCategory: string, funnelName: string): void

/**
 * Force change all Player's gamee zone to a specific value
 *
 * @param playerEntities list of all active players 
 * @param gameZoneIndex numberical ID of the gamezone
 * @param gameZoneDescription name of gamezone
 */
declare function OUTPUT_TelemetryRecordGameZoneData(playerEntities: number[], gameZoneIndex: number, gameZoneDescription: string): void

/**
 * Records the active telemetry event. Uses an identifier string to check if the identifier has already been recorded.
 * If already recorded, the event will not be recorded and will be discarded gracefully.
 *
 * @param identifier The unique identifier for the event recording that will be used to check if this event has been recorded already.
 */
declare function OUTPUT_TelemetryRecordOnceEvent(identifier: string): void

/**
 * Records a telemetry event related to changing the state of the well of fate.
 *
 * @param upgradeType The upgrade type indended to record
 * @param fateBank The transaction type to specify (eg: `0` indicating removal of a structure, `1` representing adding a structure)
 */
declare function OUTPUT_TelemetryWellOfFateStateChange(upgradeType: string, fateBank: number): void

/**
 * Teleports entities to another entity.
 *
 * @param srcEntities The group of entities to teleport.
 * @param dstEntity The destination entity to teleport to.
 */
declare function OUTPUT_Teleport(srcEntities: number[], dstEntity: number): void

/**
 * Teleports entities to dstEntity and orients it in a towards orientEntity.
 *
 * @param srcEntities The group of entities to teleport.
 * @param dstEntity The destination entity to teleport to.
 * @param orientEntity The entity to orient to.
 */
declare function OUTPUT_TeleportAndOrientToEntity(srcEntities: number[], dstEntity: number, orientEntity: number): void

/**
 * Teleports entities to another entity and orients it in a specific yaw direction. This will only orient the entity in the direction 
 * (will not touch the player camera if teleporting a player)
 *
 * @param srcEntities The group of entities to teleport.
 * @param dstEntity The destination entity to teleport to.
 * @param yaw The angle in radians to face.
 */
declare function OUTPUT_TeleportAndOrientToYaw(srcEntities: number[], dstEntity: number, yaw: number): void

/**
 * Teleports entities to the fast-travel point for a village.
 *
 * @param srcEntities The group of entities to teleport.
 * @param dstEntity The destination village (that has a fast-travel point).
 */
declare function OUTPUT_TeleportFastTravel(srcEntities: number[], dstEntity: number): void

/**
 * Teleports entities to another entity with an offset.
 * **WARNING: You should not being using this function, instead setup a proper locator entity and teleport to that. (this function may be removed down in the future)**
 *
 * @param srcEntities The group of entities to teleport.
 * @param dstEntity The destination entity to teleport to.
 * @param x The x offset.
 * @param y The y offset.
 * @param z The z offset.
 */
declare function OUTPUT_TeleportWithOffset(srcEntities: number[], dstEntity: number, x: number, y: number, z: number): void

/**
 * For testing spatial rules without requiring the use of entities. This should not be called!
 * @see OUTPUT_PlacementAddProximityRule is the correct function to add proximity requirements.
 *
 * @param originPositions Set of int pairs that correspond to (x,z) coordinates instead of a set of entities.
 * @param minDistance @see OUTPUT_PlacementAddProximityRule
 * @param maxDistance @see OUTPUT_PlacementAddProximityRule
 * @param numRequired @see OUTPUT_PlacementAddProximityRule
 * @param isInclusive @see OUTPUT_PlacementAddProximityRule
 */
declare function OUTPUT_TEST_PlacementAddProximityRule(originPositions: number[][], minDistance: number, maxDistance: number, numRequired: number, isInclusive: boolean): void

/**
 * For testing use only. Runs a placement test on active rules.
 *
 * 
 */
declare function OUTPUT_TEST_PlacementRun(): void

/**
 * Notify relevant systems that a functional test has finished and provide the test result.
 *
 * @param testId The name of the test that was completed.
 * @param result Whether the test passed or failed, or potentially some other outcome indication if needed.
 */
declare function OUTPUT_TestFinished(testId: string, result: number): void

/**
 * Thwarts all delayed invasion actions.
 *
 * @param reason The reason why (used in WM3).
 */
declare function OUTPUT_ThwartAllDelayedInvasionActions(reason: string): void

/**
 * Thwarts delayed invasion actions belonging to the given villages.
 *
 * @param sourceVillageEntities The village entities to thwart.
 * @param reason The reason why (used in WM3).
 */
declare function OUTPUT_ThwartDelayedInvasionActions(sourceVillageEntities: number[], reason: string): void

/**
 * Triggers a cinematic.
 *
 * @param cineName The name of the cinematic.
 * @param candidatesEntitiesList The candidate actor entities for the cinematic.
 */
declare function OUTPUT_TriggerCinematic(cineName: string, candidatesEntitiesList: number[]): number

/**
 * Triggers a presentation event from a given entity.
 * The targeted entity's data must support the requested presentation effect.
 * Use this output for one-shot events. If you need to persist the effect on save/load see `OUTPUT_AddVisualState`.
 *
 * @param entities Entities to trigger the event on.
 * @param eventName The name of the event to trigger, as defined in the entity's data.
 */
declare function OUTPUT_TriggerPresentationEvent(entities: number[], eventName: string): void

/**
 * Triggers a presentation event from a given entity for a specific team.
 * The targeted entity's data must support the requested presentation effect.
 * Use this output for one-shot events. If you need to persist the effect on save/load see `OUTPUT_AddVisualState`.
 *
 * @param entities Entities to trigger the event on.
 * @param eventName The name of the event to trigger, as defined in the entity's data.
 * @param teamName The name of the team to trigger the event for.
 */
declare function OUTPUT_TriggerPresentationEventForTeam(entities: number[], eventName: string, teamName: string): void

/**
 * Triggers slash command, using a random player as the origin
 *
 * @param slashCommand Full slash command (e.g.: "/sm badger:mob_zombie")
 * @param isServerCommand Whether or not command has been registered in BadgerServerCommands or BadgerClientCommands
 */
declare function OUTPUT_TriggerSlashCommand(slashCommand: string, isServerCommand: boolean): void

/**
 * Bypasses a tutorial item on all connected clients.
 *
 * @param tutorialKeyToBypass The tutorial key
 */
declare function OUTPUT_TriggerTutorialBypass(tutorialKeyToBypass: string): void

/**
 * Triggers a tutorial hint for a bunch of specific players with various properties.
 *
 * @param tutorialKeyToBypass The tutorial key
 * @param bypass Whether or not to bypass the tutorial on the client (see: `OUTPUT_TriggerTutorialBypass`)
 * @param skipIfAlreadySeen Whether or not the client should skip the notification if they've already completed the item (default to true in `OUTPUT_TriggerTutorialHint`)
 * @param dontMarkCompleted If set to true, clients wont mark the tutorial item as completed.
 */
declare function OUTPUT_TriggerTutorialForAllPlayers(tutorialKeyToBypass: string, bypass: boolean, skipIfAlreadySeen: boolean, dontMarkCompleted: boolean): void

/**
 * Triggers a tutorial hint for a bunch of specific players with various properties.
 *
 * @param tutorialKeyToBypass The tutorial key
 * @param bypass Whether or not to bypass the tutorial on the client (see: `OUTPUT_TriggerTutorialBypass`)
 * @param skipIfAlreadySeen Whether or not the client should skip the notification if they've already completed the item (default to true in `OUTPUT_TriggerTutorialHint`)
 * @param dontMarkCompleted If set to true, clients wont mark the tutorial item as completed.
 * @param players The player entities to send the hint to. (eg: `GetPlayers()`)
 */
declare function OUTPUT_TriggerTutorialForSpecificPlayers(tutorialKeyToBypass: string, bypass: boolean, skipIfAlreadySeen: boolean, dontMarkCompleted: boolean, players: number[]): void

/**
 * Triggers a tutorial hint on all connected clients.
 *
 * @param tutorialKeyToHint The tutorial key
 */
declare function OUTPUT_TriggerTutorialHint(tutorialKeyToHint: string): void

/**
 * Unassigns home base for entities.
 *
 * @param targetEntities Target entities
 */
declare function OUTPUT_UnassignHomeBaseForEntities(targetEntities: number[]): void

/**
 * Remove the suspension dependency relationship between two villages. The villages must be paired together via a previous
 * call to @see OUTPUT_SetVillageSuspensionPair
 *
 * @param villageEntityA One of the villages to be unpaired.
 * @param villageEntityB One of the villages to be unpaired.
 */
declare function OUTPUT_UnsetVillageSuspensionPair(villageEntityA: number, villageEntityB: number): void

/**
 * Toggle a hud element to be visible or hidden.
 *
 * @param hudKey The key mapped to the hud element to show or hide.
 * @param visible The flag that determines if the element will be shown or hidden
 */
declare function OUTPUT_UpdateHUDVisibility(hudKey: string, visible: boolean): void

/**
 * Stretches the `badger:aabb` of an entity to a very tall prism. Useful for ignoring height on trigger volumes.
 *
 * @param aabbEntities The entities to stretch AABBs for.
 */
declare function OUTPUT_VerticallyStretchAABBToMax(aabbEntities: number[]): void
