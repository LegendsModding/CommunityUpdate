/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Logic to perform when an entity is a part of FOREACH_ iteration.
 * This snippet is called individually on ALL entities associated with the Listener.
 * @see LISTENFOR_ForEachEntity
 */
declare function SNIPPET_ForEachEntity(snippetName: string, callback: ForEachEntityCallback): void
declare type ForEachEntityCallback = (entity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a global timer has reached a predefined threshold.
 * @see LISTENFOR_Timer
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_Timer(snippetName: string, callback: TimerCallback): void
declare type TimerCallback = (timeLeft: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a local timer has reached a predefined threshold.
 * @see LISTENFOR_LocalTimer
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_LocalTimer(snippetName: string, callback: LocalTimerCallback): void
declare type LocalTimerCallback = (payload: SnippetPayload) => void

/**
 * Logic to perform when an entity timer has reached 0.
 * @see LISTENFOR_EntityTimer
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_EntityTimer(snippetName: string, callback: EntityTimerCallback): void
declare type EntityTimerCallback = (entity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when an entity enters a spatial trigger
 * @see `"badger:aabb"` and `"badger:trigger_criteria"`
 * @see LISTENFOR_SpatialPartitionEntered
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_SpatialPartitionEntered(snippetName: string, callback: SpatialPartitionEnteredCallback): void
declare type SpatialPartitionEnteredCallback = (triggerEntity: number, enteringEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when an entity exits a spatial trigger
 * @see `"badger:aabb"` and `"badger:trigger_criteria"`
 * @see LISTENFOR_SpatialPartitionExited
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_SpatialPartitionExited(snippetName: string, callback: SpatialPartitionExitedCallback): void
declare type SpatialPartitionExitedCallback = (triggerEntity: number, exitingEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a spatial trigger detects an entity within it for any reason.
 * Note this differs from @see SNIPPET_SpatialPartitionEntered in that it will always be triggered even if
 * an entity unsuspends within the volume.
 */
declare function SNIPPET_PresenceEntered(snippetName: string, callback: PresenceEnteredCallback): void
declare type PresenceEnteredCallback = (triggerEntity: number, count: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a spatial trigger detects an entity has left it for any reason.
 * Note this differs from @see SNIPPET_SpatialPartitionExited in that it will always be triggered even if
 * the entity 'left' due to being destroyed, suspended, logging out of the game, etc.
 */
declare function SNIPPET_PresenceExited(snippetName: string, callback: PresenceExitedCallback): void
declare type PresenceExitedCallback = (triggerEntity: number, count: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a player enters a village's bounds.
 */
declare function SNIPPET_PlayerEnteredVillage(snippetName: string, callback: PlayerEnteredVillageCallback): void
declare type PlayerEnteredVillageCallback = (villageId: number, playerCount: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a player exits a village's bounds.
 */
declare function SNIPPET_PlayerExitedVillage(snippetName: string, callback: PlayerExitedVillageCallback): void
declare type PlayerExitedVillageCallback = (villageId: number, playerCount: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a card is played.
 */
declare function SNIPPET_CardPlayed(snippetName: string, callback: CardPlayedCallback): void
declare type CardPlayedCallback = (factionName: string, payload: SnippetPayload) => void

/**
 * Logic to perform when a horde card is played.
 */
declare function SNIPPET_HordeCardPlayed(snippetName: string, callback: HordeCardPlayedCallback): void
declare type HordeCardPlayedCallback = (factionName: string, payload: SnippetPayload) => void

/**
 * Logic to perform when an invasion card is played.
 */
declare function SNIPPET_InvasionCardPlayed(snippetName: string, callback: InvasionCardPlayedCallback): void
declare type InvasionCardPlayedCallback = (factionName: string, cardAction: string, cardFallbackAction: string, payload: SnippetPayload) => void

/**
 * Logic to perform when a global variable changes.
 * @see LISTENFOR_GlobalVariableChanged
 */
declare function SNIPPET_GlobalVariableChanged(snippetName: string, callback: GlobalVariableChangedCallback): void
declare type GlobalVariableChangedCallback = (oldValue: number, newValue: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a village building is placed.
 * @see LISTENFOR_BuildingStart
 */
declare function SNIPPET_BuildingStart(snippetName: string, callback: BuildingStartCallback): void
declare type BuildingStartCallback = (buildingEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a village building is placed.
 * @see LISTENFOR_BuildingComplete
 */
declare function SNIPPET_BuildingComplete(snippetName: string, callback: BuildingCompleteCallback): void
declare type BuildingCompleteCallback = (buildingEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a village building fails to place.
 */
declare function SNIPPET_BuildingFailedToPlace(snippetName: string, callback: BuildingFailedToPlaceCallback): void
declare type BuildingFailedToPlaceCallback = (buildingId: string, villageId: number, payload: SnippetPayload) => void

/**
 * Logic to perform when an entity is spawned.
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_EntitySpawned(snippetName: string, callback: EntitySpawnedCallback): void
declare type EntitySpawnedCallback = (entity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when an entity is refunded.
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_EntityRefunded(snippetName: string, callback: EntityRefundedCallback): void
declare type EntityRefundedCallback = (entity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when an entity with a `"badger:buildable_spawner"` spawns an entity.
 */
declare function SNIPPET_BuildableSpawnerSpawned(snippetName: string, callback: BuildableSpawnerSpawnedCallback): void
declare type BuildableSpawnerSpawnedCallback = (buildableSpawner: number, entity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when an with a `"badger:buildable_spawner"` spawns a batch of entities.
 */
declare function SNIPPET_BuildableSpawnerBatchSpawned(snippetName: string, callback: BuildableSpawnerBatchSpawnedCallback): void
declare type BuildableSpawnerBatchSpawnedCallback = (buildableSpawner: number, entities: number[], payload: SnippetPayload) => void

/**
 * Logic to perform when an entity is destroyed.
 * @see LISTENFOR_NonPopCappedEntityDestroyed
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_NonPopCappedEntityDestroyed(snippetName: string, callback: NonPopCappedEntityDestroyedCallback): void
declare type NonPopCappedEntityDestroyedCallback = (entityGroup: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a pop-cappable entity is destroyed
 * @see LISTENFOR_PopCappedEntityDestroyed
 */
declare function SNIPPET_PopCappedEntityDestroyed(snippetName: string, callback: PopCappedEntityDestroyedCallback): void
declare type PopCappedEntityDestroyedCallback = (entityGroup: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a number of entities in a group are destroyed.
 */
declare function SNIPPET_EntitiesAmountDestroyed(snippetName: string, callback: EntitiesAmountDestroyedCallback): void
declare type EntitiesAmountDestroyedCallback = (payload: SnippetPayload) => void

/**
 * Logic to perform when an EG's health changes
 * @see LISTENFOR_HealthChanged
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_HealthChanged(snippetName: string, callback: HealthChangedCallback): void
declare type HealthChangedCallback = (entity: number, currentHealth: number, previousHealth: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a culture's values increases over a threshold.
 * @see LISTENFOR_CultureValueChangedUp
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_CultureValueChangedUp(snippetName: string, callback: CultureValueChangedUpCallback): void
declare type CultureValueChangedUpCallback = (scoreA: number, scoreB: number, scoreC: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a culture's values decreases below a threshold.
 * @see LISTENFOR_CultureValueChangedDown
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_CultureValueChangedDown(snippetName: string, callback: CultureValueChangedDownCallback): void
declare type CultureValueChangedDownCallback = (scoreA: number, scoreB: number, scoreC: number, payload: SnippetPayload) => void

/**
 * Logic to perform an entity's targeting priority changed
 * @see LISTENFOR_TriggerEvent
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_TriggerEvent(snippetName: string, callback: TriggerEventCallback): void
declare type TriggerEventCallback = (senderEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a team's resources change.
 * @param snippetName The snippet name.
 */
declare function SNIPPET_ResourcesChanged(snippetName: string, callback: ResourcesChangedCallback): void
declare type ResourcesChangedCallback = (resourceName: string, teamID: string, previousAmount: number, currentAmount: number, payload: SnippetPayload) => void

/**
 * Logic to perform when an tether between two entities has snapped.
 * @see LISTENFOR_TetherOverLimit
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_TetherOverLimit(snippetName: string, callback: TetherOverLimitCallback): void
declare type TetherOverLimitCallback = (rootEntity: number, tetherEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a sysem external to B-Sharp triggers an event
 * @see LISTENFOR_ExternalEvent
 * the optionalEG is optional, and contains whatever the caller of ExternalEvent wants. Interpret it based on the context of the call
 * that is, each ExternalEvent knows what it means by the EG it passes, but this can differ from EG to EG
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_ExternalEvent(snippetName: string, callback: ExternalEventCallback): void
declare type ExternalEventCallback = (variant: VariantData, payload: SnippetPayload) => void

/**
 * Logic to perform when all builds for a base finises.
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_BaseBuildsFinished(snippetName: string, callback: BaseBuildsFinishedCallback): void
declare type BaseBuildsFinishedCallback = (villageId: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a POI is generated.
 * @see LISTENFOR_POIGenerated
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_POIGenerated(snippetName: string, callback: POIGeneratedCallback): void
declare type POIGeneratedCallback = (pOIEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a village is generated.
 * @see LISTENFOR_VillageGenerated
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_VillageGenerated(snippetName: string, callback: VillageGeneratedCallback): void
declare type VillageGeneratedCallback = (villageId: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a village is upgraded.
 */
declare function SNIPPET_VillageUpgraded(snippetName: string, callback: VillageUpgradedCallback): void
declare type VillageUpgradedCallback = (villageId: number, payload: SnippetPayload) => void

/**
 * Logic to perform in response to a village and all of its instant buildings having generated.
 */
declare function SNIPPET_VillageFinishedBuilding(snippetName: string, callback: VillageFinishedBuildingCallback): void
declare type VillageFinishedBuildingCallback = (villageId: number, payload: SnippetPayload) => void

/**
 * Logic to perform in response to a village and all of its instant buildings being planned.
 */
declare function SNIPPET_VillageFinishedPlanning(snippetName: string, callback: VillageFinishedPlanningCallback): void
declare type VillageFinishedPlanningCallback = (villageId: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a village is destroyed.
 */
declare function SNIPPET_VillageDestroyed(snippetName: string, callback: VillageDestroyedCallback): void
declare type VillageDestroyedCallback = (villageId: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a village is planned.
 */
declare function SNIPPET_VillagePlanned(snippetName: string, callback: VillagePlannedCallback): void
declare type VillagePlannedCallback = (villageId: number, payload: SnippetPayload) => void

/**
 * Logic to build a FOB type village used for the invasion attack v2 action.
 */
declare function SNIPPET_InvasionAttackV2FobGenerated(snippetName: string, callback: InvasionAttackV2FobGeneratedCallback): void
declare type InvasionAttackV2FobGeneratedCallback = (villageId: number, invasionData: InvasionAttackV2Data, payload: SnippetPayload) => void

/**
 * Logic to perform when an event is triggered during a cinematic.
 * @see LISTENFOR_CinematicEvent
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_CinematicEvent(snippetName: string, callback: CinematicEventCallback): void
declare type CinematicEventCallback = (payload: SnippetPayload) => void

/**
 * Logic to perform when a cinematic starts playing.
 * @see LISTENFOR_CinematicStarted
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_CinematicStarted(snippetName: string, callback: CinematicStartedCallback): void
declare type CinematicStartedCallback = (payload: SnippetPayload) => void

/**
 * Logic to perform when a cinematic finishes playing.
 * @see LISTENFOR_CinematicFinished
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_CinematicFinished(snippetName: string, callback: CinematicFinishedCallback): void
declare type CinematicFinishedCallback = (payload: SnippetPayload) => void

/**
 * Logic to perform when a player interacts with an entity.
 * @see LISTENFOR_PlayerInteracted
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_PlayerInteracted(snippetName: string, callback: PlayerInteractedCallback): void
declare type PlayerInteractedCallback = (playerEntity: number, interactedEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a player selects/opens a HUD element.
 */
declare function SNIPPET_HudEvent(snippetName: string, callback: HudEventCallback): void
declare type HudEventCallback = (eventName: string, payload: SnippetPayload) => void

/**
 * Logic to apply when an objective entity is destroyed..
 */
declare function SNIPPET_InvasionDestroyEntitiesObjective(snippetName: string, callback: InvasionDestroyEntitiesObjectiveCallback): void
declare type InvasionDestroyEntitiesObjectiveCallback = (villageId: number, destroyedEntity: number, remainingEntities: number, payload: SnippetPayload) => void

/**
 * Logic to apply damage to an activated invasion attack v2.
 */
declare function SNIPPET_InvasionAttackV2Activated(snippetName: string, callback: InvasionAttackV2ActivatedCallback): void
declare type InvasionAttackV2ActivatedCallback = (invasionData: InvasionAttackV2Data, percentComplete: number, timePast: number, payload: SnippetPayload) => void

/**
 * Logic to apply damage to an ended invasion attack v2.
 */
declare function SNIPPET_InvasionAttackV2Ended(snippetName: string, callback: InvasionAttackV2EndedCallback): void
declare type InvasionAttackV2EndedCallback = (invasionData: InvasionAttackV2Data, success: boolean, payload: SnippetPayload) => void

/**
 * Logic to execute when intentions can be drawn and next invasion turn might be undertaken.
 */
declare function SNIPPET_InvasionIntentionsDrawn(snippetName: string, callback: InvasionIntentionsDrawnCallback): void
declare type InvasionIntentionsDrawnCallback = (payload: SnippetPayload) => void

/**
 * Logic to execute when invaison actions are executed at night.
 */
declare function SNIPPET_InvasionActionsExecuted(snippetName: string, callback: InvasionActionsExecutedCallback): void
declare type InvasionActionsExecutedCallback = (payload: SnippetPayload) => void

/**
 * Logic to execute when all planned actions for the night are done resolving.
 */
declare function SNIPPET_InvasionNightActionsResolved(snippetName: string, callback: InvasionNightActionsResolvedCallback): void
declare type InvasionNightActionsResolvedCallback = (payload: SnippetPayload) => void

/**
 * Logic to apply damage/effects to an piglin base which has oops'ed itself.
 * Please note that if Invasion Simulation is enabled, the base in question is probably suspended and you won't be able to get any of its buildings/entities.
 * In Invasion Simulation is enabled, the Oops does not damage the base's buildings.
 */
declare function SNIPPET_InvasionOopsApply(snippetName: string, callback: InvasionOopsApplyCallback): void
declare type InvasionOopsApplyCallback = (villageId: number, payload: SnippetPayload) => void

/**
 * Logic to execute when a delayed invasion action is executed.
 */
declare function SNIPPET_InvasionDelayedActionExecuted(snippetName: string, callback: InvasionDelayedActionExecutedCallback): void
declare type InvasionDelayedActionExecutedCallback = (sourceVillageId: number, actionName: string, targetVillageId: number, hidden: boolean, factionName: string, strength: number, payload: SnippetPayload) => void

/**
 * Logic to execute when an entity has arrived or failed to reach its destination.
 *
 * @param snippetName The snippet name.
 * @param callback The callback to call.
 */
declare function SNIPPET_MoveCallback(snippetName: string, callback: MoveCallbackCallback): void
declare type MoveCallbackCallback = (moverEntityGroup: number, successfullyArrived: boolean, payload: SnippetPayload) => void

/**
 * **DO NOT USE THIS**
 * Use `SpawnedBuildableCallback(snippetName)` instead!
 *
 * @param snippetName The snippet name.
 * @param callback The callback to call.
 */
declare function SNIPPET_SpawnedBuildableCallback(snippetName: string, callback: SpawnedBuildableCallbackCallback): void
declare type SpawnedBuildableCallbackCallback = (completedStructure: number, payload: SnippetPayload) => void

/**
 * Callback for when a time of day occurs
 *
 * @param snippetName The snippet name.
 * @param callback The callback to call.
 */
declare function SNIPPET_TimeOfDay(snippetName: string, callback: TimeOfDayCallback): void
declare type TimeOfDayCallback = (payload: SnippetPayload) => void

/**
 * Callback for when a tag is added to an entity.
 *
 * @param snippetName The snippet name.
 * @param callback The callback to call.
 */
declare function SNIPPET_TagAdded(snippetName: string, callback: TagAddedCallback): void
declare type TagAddedCallback = (entity: number, payload: SnippetPayload) => void

/**
 * Callback for when a tag is removed from an entity.
 *
 * @param snippetName The snippet name.
 * @param callback The callback to call.
 */
declare function SNIPPET_TagRemoved(snippetName: string, callback: TagRemovedCallback): void
declare type TagRemovedCallback = (entity: number, payload: SnippetPayload) => void

/**
 * Callback for when an entity is lured or unlured.
 *
 * @param snippetName The snippet name.
 * @param callback The callback to call.
 */
declare function SNIPPET_InfluenceLureChanged(snippetName: string, callback: InfluenceLureChangedCallback): void
declare type InfluenceLureChangedCallback = (entity: number, started: boolean, payload: SnippetPayload) => void

/**
 * Callback for when an entity is directed or undirected.
 *
 * @param snippetName The snippet name.
 * @param callback The callback to call.
 */
declare function SNIPPET_InfluenceDirectorChanged(snippetName: string, callback: InfluenceDirectorChangedCallback): void
declare type InfluenceDirectorChangedCallback = (entity: number, started: boolean, payload: SnippetPayload) => void

/**
 * Logic to perform for each mob directed with a specific action and filter
 */
declare function SNIPPET_PlayerDirectedMob(snippetName: string, callback: PlayerDirectedMobCallback): void
declare type PlayerDirectedMobCallback = (payload: SnippetPayload) => void

/**
 * Callback for when an structure entity has **begun** to be deconstructed.
 */
declare function SNIPPET_DeconstructionStarted(snippetName: string, callback: DeconstructionStartedCallback): void
declare type DeconstructionStartedCallback = (deconstructedEntity: number, deconstructorEntity: number, payload: SnippetPayload) => void

/**
 * Callback for when an entity has death deferred by script.
 * This snippet must destroy the entity within 60 seconds for the failsafe will auto destroy it.
 * For example with `OUTPUT_DestroyEntities` or with a cinematic.
 */
declare function SNIPPET_DeferredDeath(snippetName: string, callback: DeferredDeathCallback): void
declare type DeferredDeathCallback = (entity: number, payload: SnippetPayload) => void

/**
 * Callback for when a player re/connects to the game.
 * Note: Currently this can trigger during the loading screen.
 */
declare function SNIPPET_PlayerConnected(snippetName: string, callback: PlayerConnectedCallback): void
declare type PlayerConnectedCallback = (playerEntity: number, isReconnecting: boolean, payload: SnippetPayload) => void

/**
 * Callback for when a player disconnects from the game.
 * Note: Currently this can trigger during the loading screen.
 * Will not trigger unless the player has triggered SNIPPET_PlayerConnected first.
 */
declare function SNIPPET_PlayerDisconnected(snippetName: string, callback: PlayerDisconnectedCallback): void
declare type PlayerDisconnectedCallback = (payload: SnippetPayload) => void

/**
 * Callback for when a game rule is set or modified.
 * @param snippetName The snippet name.
 * @param callback The callback to call.
 */
declare function SNIPPET_GameRuleChanged(snippetName: string, callback: GameRuleChangedCallback): void
declare type GameRuleChangedCallback = (variant: VariantData, payload: SnippetPayload) => void

/**
 * Callback for when a test has been started so that the test logic can be executed.
 */
declare function SNIPPET_TestStarted(snippetName: string, callback: TestStartedCallback): void
declare type TestStartedCallback = (payload: SnippetPayload) => void

/**
 * Logic to perform when an entity is disabled.
 */
declare function SNIPPET_EntityDisabled(snippetName: string, callback: EntityDisabledCallback): void
declare type EntityDisabledCallback = (disabledEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when an entity is enabled.
 */
declare function SNIPPET_EntityEnabled(snippetName: string, callback: EntityEnabledCallback): void
declare type EntityEnabledCallback = (enabledEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when a generic card has been played for a village.
 * Generic cards apply flavours or objectives to villages.
 */
declare function SNIPPET_GenericCardPlayed(snippetName: string, callback: GenericCardPlayedCallback): void
declare type GenericCardPlayedCallback = (villageId: number, cardValue: string, payload: SnippetPayload) => void

/**
 * Logic to perform when a the player toggles advanced direct on or off
 */
declare function SNIPPET_AdvancedDirectToggle(snippetName: string, callback: AdvancedDirectToggleCallback): void
declare type AdvancedDirectToggleCallback = (playerEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when the player is ready
 */
declare function SNIPPET_PlayersReady(snippetName: string, callback: PlayersReadyCallback): void
declare type PlayersReadyCallback = (payload: SnippetPayload) => void

/**
 * Logic to perform when a player fast travels
 */
declare function SNIPPET_PlayerFastTravelled(snippetName: string, callback: PlayerFastTravelledCallback): void
declare type PlayerFastTravelledCallback = (playerEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform in response to a player mounting a mount.
 */
declare function SNIPPET_PlayerMounted(snippetName: string, callback: PlayerMountedCallback): void
declare type PlayerMountedCallback = (playerEntity: number, mountName: string, payload: SnippetPayload) => void

/**
 * Logic to perform in response to the invasion simulation requesting optional player action.
 */
declare function SNIPPET_InvasionPlayerActionsExecuted(snippetName: string, callback: InvasionPlayerActionsExecutedCallback): void
declare type InvasionPlayerActionsExecutedCallback = (isDayActions: boolean, payload: SnippetPayload) => void

/**
 * Logic to perform when an obsevered entity gets close to a player.
 */
declare function SNIPPET_EntityEnteredPlayerProximity(snippetName: string, callback: EntityEnteredPlayerProximityCallback): void
declare type EntityEnteredPlayerProximityCallback = (playerEntity: number, approachingEntity: number, payload: SnippetPayload) => void

/**
 * Logic to perform when the game difficulty changes
 */
declare function SNIPPET_DifficultyChanged(snippetName: string, callback: DifficultyChangedCallback): void
declare type DifficultyChangedCallback = (prevDifficulty: string, newDifficulty: string, payload: SnippetPayload) => void

/**
 * Logic to perform when an entity has been recalled
 * @see LISTENFOR_EntityRecalled
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_EntityRecalled(snippetName: string, callback: EntityRecalledCallback): void
declare type EntityRecalledCallback = (approachingEntity: number, payload: SnippetPayload) => void

/**
 * **`WARNING! WARNING! NO REFUGE!`** Do not use this outside onboarding or flatland game modes. Any logic that depends on this cannot be reliably guarunteed over the network or savegames. If this is used in campaign or PvP, it will likely not be able to ship.
 *
 * Logic to perform when a cue from when an item in `vo_sequence_definitions.json` finishes on a client.
 *
 * An example cue looks like the following:
 * ```json
 * {
 *  "type": "cue",
 *  "name": "test_cue"
 * }
 * ```
 *
 * @param snippetName The snippet name.
 */
declare function SNIPPET_ClientVOCueFinished(snippetName: string, callback: ClientVOCueFinishedCallback): void
declare type ClientVOCueFinishedCallback = (cueName: string, payload: SnippetPayload) => void

/**
 * Logic to perform when a player performs a target action.
 */
declare function SNIPPET_PlayerPerformedTargetAction(snippetName: string, callback: PlayerPerformedTargetActionCallback): void
declare type PlayerPerformedTargetActionCallback = (playerPerformingAction: number, actionName: string, payload: SnippetPayload) => void

/**
 * Logic to apply damage to a village in the context of a village attack.
 */
declare function SNIPPET_InvasionAttackV2DamageRequest(snippetName: string, callback: InvasionAttackV2DamageRequestCallback): void
declare type InvasionAttackV2DamageRequestCallback = (invasionData: InvasionAttackV2Data, payload: SnippetPayload) => void

/**
 * Logic to follow up a damage request. Triggers one frame after the original damage request.
 */
declare function SNIPPET_InvasionAttackV2PostDamageRequest(snippetName: string, callback: InvasionAttackV2PostDamageRequestCallback): void
declare type InvasionAttackV2PostDamageRequestCallback = (invasionData: InvasionAttackV2Data, payload: SnippetPayload) => void

/**
 * Logic to apply damage to a started invasion attack v2.
 */
declare function SNIPPET_InvasionAttackV2Started(snippetName: string, callback: InvasionAttackV2StartedCallback): void
declare type InvasionAttackV2StartedCallback = (invasionData: InvasionAttackV2Data, payload: SnippetPayload) => void

/**
 * Logic to apply damage to an abandoned invasion attack v2.
 */
declare function SNIPPET_InvasionAttackV2Abandoned(snippetName: string, callback: InvasionAttackV2AbandonedCallback): void
declare type InvasionAttackV2AbandonedCallback = (invasionData: InvasionAttackV2Data, payload: SnippetPayload) => void

/**
 * Logic to apply damage to a reactivated invasion attack v2.
 */
declare function SNIPPET_InvasionAttackV2Reactivated(snippetName: string, callback: InvasionAttackV2ReactivatedCallback): void
declare type InvasionAttackV2ReactivatedCallback = (invasionData: InvasionAttackV2Data, payload: SnippetPayload) => void

/**
 * Logic to apply damage to an overtime invasion attack v2.
 */
declare function SNIPPET_InvasionAttackV2Overtime(snippetName: string, callback: InvasionAttackV2OvertimeCallback): void
declare type InvasionAttackV2OvertimeCallback = (invasionData: InvasionAttackV2Data, payload: SnippetPayload) => void

/**
 * Logic to apply damage to a resolved invasion attack v2.
 */
declare function SNIPPET_InvasionAttackV2Resolve(snippetName: string, callback: InvasionAttackV2ResolveCallback): void
declare type InvasionAttackV2ResolveCallback = (invasionData: InvasionAttackV2Data, payload: SnippetPayload) => void

/**
 * Logic to perform when a status effect started on an entity.
 */
declare function SNIPPET_StatusEffectStarted(snippetName: string, callback: StatusEffectStartedCallback): void
declare type StatusEffectStartedCallback = (affectedEntity: number, statusEffectName: string, payload: SnippetPayload) => void

/**
 * Logic to perform when a status effect ended on an entity.
 */
declare function SNIPPET_StatusEffectExpired(snippetName: string, callback: StatusEffectExpiredCallback): void
declare type StatusEffectExpiredCallback = (affectedEntity: number, statusEffectName: string, payload: SnippetPayload) => void
