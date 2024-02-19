/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Listen for iteration with a FOREACH_ function.
 * @see SNIPPET_ForEachEntity
 * @see FOREACH_
 */
declare function LISTENFOR_ForEachEntity(params: ForEachEntityParameters): void

declare interface ForEachEntityParameters {
    /**
     * REQUIRED
     * The value returned by a FOREACH_ function.
     */
    id: number

}

/**
 * Listen for a timer to hit a certain threshold value.
 * @see SNIPPET_Timer
 * @see OUTPUT_SetNamedTimer
 *
 * @param params The parameters of the timer.
 */
declare function LISTENFOR_Timer(params: TimerParameters): void

declare interface TimerParameters {
    /**
     * REQUIRED
     * The name of the timer to check.
     */
    timerName: string

    /**
     * REQUIRED
     * The value in seconds the timer must reach before calling the snippet.
     */
    threshold: number

}

/**
 * Listen for a timer to hit a certain threshold value.
 * @see SNIPPET_LocalTimer
 *
 * @param params The parameters of the timer.
 */
declare function LISTENFOR_LocalTimer(params: LocalTimerParameters): void

declare interface LocalTimerParameters {
    /**
     * REQUIRED
     * The delay in seconds before calling the snippet.
     */
    waitTime: number

}

/**
 * Listen for a timer to hit a certain threshold value.
 * @see SNIPPET_EntityTimer
 * @see OUTPUT_SetEntityTimer
 *
 * @param params The parameters of the timer.
 */
declare function LISTENFOR_EntityTimer(params: EntityTimerParameters): void

declare interface EntityTimerParameters {
    /**
     * Optional
     * The specific entity the timer must be attached to.
     */
    entity: number

    /**
     * REQUIRED
     * The name of the timer to check.
     */
    timerName: string

}

/**
 * Listen for an entity with a `badger:trigger_criteria` attached to have entities nearby.
 */
declare function LISTENFOR_SpatialPartitionEntered(params: SpatialPartitionEnteredParameters): void

declare interface SpatialPartitionEnteredParameters {
    /**
     * REQUIRED
     * The entity with a `badger:trigger_criteria` attached to listen for entering.
     */
    triggerEntity: number

    /**
     * Optional
     * Only include these EGs.
     */
    entities: number[]

    /**
     * Optional
     * The village ID the intruder must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the intruder must belong to.
     */
    factionName: string

}

/**
 * Listen for an entity with a `badger:trigger_criteria` attached to have entities nearby.
 */
declare function LISTENFOR_SpatialPartitionExited(params: SpatialPartitionExitedParameters): void

declare interface SpatialPartitionExitedParameters {
    /**
     * REQUIRED
     * The entity with a `badger:trigger_criteria` attached to listen for exiting.
     */
    triggerEntity: number

    /**
     * Optional
     * Only include these EGs.
     */
    entities: number[]

    /**
     * Optional
     * The specific village ID the intruder must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the intruder must belong to.
     */
    factionName: string

}

/**
 * Listen for the number of entities within the spatial trigger to increase (for any reason).
 * Note this differs from @see LISTENFOR_SpatialPartitionEntered in that it will always be triggered even if
 * an entity unsuspends within the volume.
 */
declare function LISTENFOR_PresenceEntered(params: PresenceEnteredParameters): void

declare interface PresenceEnteredParameters {
    /**
     * REQUIRED
	 * The trigger volume entity.
     */
    triggerEntity: number

    /**
     * Optional
     * The exact number of entities that should be present for this listener to fire.
     */
    threshold: number

}

/**
 * Listen for the number of entities within the spatial trigger to decrease (for any reason).
 * Note this differs from @see LISTENFOR_SpatialPartitionExited in that it will always be triggered even if
 * the entity 'left' due to being destroyed, suspended, logging out of the game, etc.
 */
declare function LISTENFOR_PresenceExited(params: PresenceExitedParameters): void

declare interface PresenceExitedParameters {
    /**
     * REQUIRED
	 * The trigger volume entity.
     */
    triggerEntity: number

    /**
     * Optional
     * The exact number of entities that should be present for this listener to fire.
     */
    threshold: number

}

/**
 * Listen for players to enter a village. This is functionally similar to @see LISTENFOR_PresenceEntered but will fire
 * specifically for player entities entering a village's bounds.
 */
declare function LISTENFOR_PlayerEnteredVillage(params: PlayerEnteredVillageParameters): void

declare interface PlayerEnteredVillageParameters {
    /**
     * Optional
     * The id of the village to listen for.
     */
    villageId: number

    /**
     * Optional
     * The faction of the village to listen for.
     */
    factionName: string

    /**
     * Optional
     * size of village
     */
    villageSize: string

    /**
     * Optional
     * The exact number of players that should be present in the village for this listener to fire.
     */
    threshold: number

}

/**
 * Listen for players to exit a village. This is functionally similar to @see LISTENFOR_PresenceExited but will fire
 * specifically for player entities exiting a village's bounds.
 */
declare function LISTENFOR_PlayerExitedVillage(params: PlayerExitedVillageParameters): void

declare interface PlayerExitedVillageParameters {
    /**
     * Optional
     * The id of the village to listen for.
     */
    villageId: number

    /**
     * Optional
     * The faction of the village to listen for.
     */
    factionName: string

    /**
     * Optional
     * The Size of the village
     */
    villageSize: string

    /**
     * Optional
     * The exact number of players that should be present in the village for this listener to fire.
     */
    threshold: number

}

/**
 * Listen for any card to be played.
 */
declare function LISTENFOR_CardPlayed(params: CardPlayedParameters): void

declare interface CardPlayedParameters {
    /**
     * REQUIRED
     * The card value.
     */
    cardValue: string

}

/**
 * Listen for a horde card being played
 */
declare function LISTENFOR_HordeCardPlayed(params: HordeCardPlayedParameters): void

declare interface HordeCardPlayedParameters {
    /**
     * Optional
     * Faction name specified on the card.
     */
    factionName: string

    /**
     * Optional
     * Name of the deck the faction card is played from.
     */
    deckName: string

}

/**
 * Listen for a invaison card to be played.
 * @see INVASION_DECK_NAME
 */
declare function LISTENFOR_InvasionCardPlayed(params: InvasionCardPlayedParameters): void

declare interface InvasionCardPlayedParameters {
    /**
     * Optional
     * The faction name specified on the card.
     */
    factionName: string

    /**
     * Optional
     * The card name.
     */
    cardAction: string

    /**
     * Optional
     * The fallback card name.
     */
    cardFallbackAction: string

}

/**
 * Listen for when a global variable changes.
 */
declare function LISTENFOR_GlobalVariableChanged(params: GlobalVariableChangedParameters): void

declare interface GlobalVariableChangedParameters {
    /**
     * REQUIRED
     * The name of global variable to follow changes of.
     */
    variableName: string

}

/**
 * The ID of the `badger:buildable_spawner` to check
     */
    buildableSpawner: number

    /**
     * Optional
     * The include tags of the building to listen for. All tags must be present.
     */
    includeTags: string[]

    /**
     * Optional
     * The exclude tags of the building to listen for. No tags must be present.
     */
    excludeTags: string[]

    /**
     * Optional
     * The village ID the building must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the building must belong to. (ex. "faction.pig.attack")
     */
    factionName: string
}

/**
 * Listen for when a particular building construction is started.
 * Even for instant buildables this will still be triggered.
 */
declare function LISTENFOR_BuildingStart(params: BuildingStartParameters): void

declare interface BuildingStartParameters {
    /**
     * Optional
     * The include tags of the building to listen for. All tags must be present.
     */
    includeTags: string[]

    /**
     * Optional
     * The exclude tags of the building to listen for. No tags must be present.
     */
    excludeTags: string[]

    /**
     * Optional
     * The village ID the building must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the building must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

    /**
     * Optional
     * Whether the building was created by a player
     */
    hasCreator: boolean

}

/**
 * Listen for when a particular building is complete.
 */
declare function LISTENFOR_BuildingComplete(params: BuildingCompleteParameters): void

declare interface BuildingCompleteParameters {
    /**
     * Optional
     * The include tags of the building to listen for. All tags must be present.
     */
    includeTags: string[]

    /**
     * Optional
     * The exclude tags of the building to listen for. No tags must be present.
     */
    excludeTags: string[]

    /**
     * Optional
     * The village ID the building must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the building must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

    /**
     * Optional
     * Whether the building was created by a player
     */
    hasCreator: boolean

}

/**
 * Listen for when a particular building fails to place.
 */
declare function LISTENFOR_BuildingFailedToPlace(params: BuildingFailedToPlaceParameters): void

declare interface BuildingFailedToPlaceParameters {
    /**
     * Optional
     * The build card name (buildable card type only!).
     */
    cardValue: string

    /**
     * Optional
     * The village the build card belongs to.
     */
    villageId: number

}

/**
 * Listener for when a particular entity is spawned.
 * Only entities that are marked to have their spawning tracked will be detected by this
 * listener. See template_mob and template_piglin for examples of spawn tracking.
 */
declare function LISTENFOR_EntitySpawned(params: EntitySpawnedParameters): void

declare interface EntitySpawnedParameters {
    /**
     * Optional
     * Required tags for spawned entities.
     */
    includeTags: string[]

    /**
     * Optional
     * Required tags for spawned entities to not have.
     */
    excludeTags: string[]

    /**
     * Optional
     * Required village ID for spawned entities.
     */
    villageId: number

    /**
     * Optional
     * The faction name the entity must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

}

/**
 * Listener for when a particular entity type is refunded through the buildable spawner refund system
 */
declare function LISTENFOR_EntityRefunded(params: EntityRefundedParameters): void

declare interface EntityRefundedParameters {
    /**
     * Optional
     * Required tags for refunded entities.
     */
    includeTags: string[]

    /**
     * Optional
     * Required tags for refunded entities to not have.
     */
    excludeTags: string[]

}

/**
 * Listen for an entity spawned by a spawner (eg. barracks).
 */
declare function LISTENFOR_BuildableSpawnerSpawned(params: BuildableSpawnerSpawnedParameters): void

declare interface BuildableSpawnerSpawnedParameters {
    /**
     * REQUIRED
     * The spawner entity.
     */
    buildableSpawner: number

    /**
     * Optional
     * Tags the spawned entity must have.
     */
    includeTags: string[]

    /**
     * Optional
     * Tags the spawned entity must not have.
     */
    excludeTags: string[]

    /**
     * Optional
     * The owner village ID of the spawner and spawnee.
     */
    villageId: number

    /**
     * Optional
     * The owner faction name of the spawner and spawnee.
     */
    factionName: string

}

/**
 * Listens for a batch of entities spawned by a spawner (eg. barracks).
 */
declare function LISTENFOR_BuildableSpawnerBatchSpawned(params: BuildableSpawnerBatchSpawnedParameters): void

declare interface BuildableSpawnerBatchSpawnedParameters {
    /**
     * Optional
     * The spawner entity
     */
    buildableSpawner: number

    /**
     * Optional
     * Tags the spawner must have.
     */
    includeTags: string[]

    /**
     * Optional
     * Tags the spawner must not have.
     */
    excludeTags: string[]

    /**
     * Optional
     * The owner village ID of the spawner and spawnee.
     */
    villageId: number

    /**
     * Optional
     * The owner faction name of the spawner and spawnee.
     */
    factionName: string

}

/**
 * Listen for when a particular entity is destroyed.
 */
declare function LISTENFOR_NonPopCappedEntityDestroyed(params: NonPopCappedEntityDestroyedParameters): void

declare interface NonPopCappedEntityDestroyedParameters {
    /**
     * Optional
     * Required tags for destroyed entities.
     */
    includeTags: string[]

    /**
     * Optional
     * Required tags for destroyed entities to not have.
     */
    excludeTags: string[]

    /**
     * Optional
     * The entities to only check for.
     */
    entities: number[]

    /**
     * Optional
     * The village ID the entity must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the entity must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

    /**
     * Optional
     * Trigger on despawn (true) or destroy (false). Omitting this rule will trigger in either context.
     */
    despawned: boolean

    /**
     * Optional
     * The team of the entity that destroys the host entity.
     */
    destroyerTeamName: string

}

/**
 * Listen for whether a particular pop-cappable entity is killed
 */
declare function LISTENFOR_PopCappedEntityDestroyed(params: PopCappedEntityDestroyedParameters): void

declare interface PopCappedEntityDestroyedParameters {
    /**
     * Optional
     * Required tags for destroyed entities.
     */
    includeTags: string[]

    /**
     * Optional
     * Required tags for destroyed entities to not have.
     */
    excludeTags: string[]

    /**
     * Optional
     * The entities to only check for.
     */
    entities: number[]

    /**
     * Optional
     * The village ID the entity must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the entity must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

    /**
     * Optional
     * Trigger on despawn (true) or destroy (false). Omitting this rule will trigger in either context.
     */
    despawned: boolean

    /**
     * Optional
     * The team of the entity that destroys the host entity.
     */
    destroyerTeamName: string

}

/**
 * Listen for a specific number of entities in a group to be destroyed.
 */
declare function LISTENFOR_EntitiesAmountDestroyed(params: EntitiesAmountDestroyedParameters): void

declare interface EntitiesAmountDestroyedParameters {
    /**
     * REQUIRED
     * The entities to monitor.
     */
    entities: number[]

    /**
     * Optional
     * The amount of entities that need to be destroyed before triggering the snippet.
     * If no amount is provided, all entities will be required to be destroyed.
     */
    amount: number

}

/**
 * Listen for when an EG changes health.
 */
declare function LISTENFOR_HealthChanged(params: HealthChangedParameters): void

declare interface HealthChangedParameters {
    /**
     * Optional
     * Tags the entities must have.
     */
    includeTags: string[]

    /**
     * Optional
     * Tags the entities must not have.
     */
    excludeTags: string[]

    /**
     * Optional
     * Only listen for these entities.
     */
    entities: number[]

    /**
     * Optional
     * The specific village ID the building must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the building must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

    /**
     * Optional
     * The health threshold to cross to trigger this listener.
     * Range from 0 to 1.
     * absoluteThreshold must **not** be set.
     */
    normalizedThreshold: number

    /**
     * Optional
     * The health threshold to cross to trigger this listener.
     * normalizedThreshold must **not** be set.
     */
    absoluteThreshold: number

    /**
     * Optional
     * When to trigger in relation to the threshold. Must be set if a threshold is used.
     * See `HEALTH_TRIGGER_MODE` for valid options.
     */
    triggerMode: number

    /**
     * Optional
     * Trigger only on damage, healing, or both if unset.
     */
    direction: number

}

/**
 * Listen for when a culture's values increases over a threshold.
 */
declare function LISTENFOR_CultureValueChangedUp(params: CultureValueChangedUpParameters): void

declare interface CultureValueChangedUpParameters {
    /**
     * Optional
     * The *crossing* threshold for the A value. At least one of the thresholds must be set.
     */
    thresholdA: number

    /**
     * Optional
     * The *crossing* threshold for the B value. At least one of the thresholds must be set.
     */
    thresholdB: number

    /**
     * Optional
     * The *crossing* threshold for the C value. At least one of the thresholds must be set.
     */
    thresholdC: number

    /**
     * Optional
     * The id of the village to check for.
     */
    villageId: number

}

/**
 * Listen for when a culture's values decreases below a threshold.
 */
declare function LISTENFOR_CultureValueChangedDown(params: CultureValueChangedDownParameters): void

declare interface CultureValueChangedDownParameters {
    /**
     * Optional
     * The *crossing* threshold for the A value. At least one of the thresholds must be set.
     */
    thresholdA: number

    /**
     * Optional
     * The *crossing* threshold for the B value. At least one of the thresholds must be set.
     */
    thresholdB: number

    /**
     * Optional
     * The *crossing* threshold for the C value. At least one of the thresholds must be set.
     */
    thresholdC: number

    /**
     * Optional
     * The id of the village to check for.
     */
    villageId: number

}

/**
 * Please come talk to the B-Team if you need to use this.
 *
 */
declare function LISTENFOR_TriggerEvent(params: TriggerEventParameters): void

declare interface TriggerEventParameters {
    /**
     * REQUIRED
     * The name of the trigger.
     */
    triggerName: string

    /**
     * Optional
     * Only listen for these entities.
     */
    entities: number[]

}

/**
 * Listen for when a teams resource changes.
 */
declare function LISTENFOR_ResourcesChanged(params: ResourcesChangedParameters): void

declare interface ResourcesChangedParameters {
    /**
     * REQUIRED
     * Only trigger on this resource
     * @example "wood"
     */
    resourceName: string

    /**
     * Optional
     * Only trigger for this team.
     */
    teamName: string

}

/**
 *
 */
declare function LISTENFOR_TetherOverLimit(params: TetherOverLimitParameters): void

declare interface TetherOverLimitParameters {
    /**
     * REQUIRED
     * The entity to host the tether. Should be a single entity with PositionComponent.
     */
    rootEntity: number

    /**
     * REQUIRED
     * The entity that is tethered to the root.
     */
    tetherEntity: number

}

/**
 * Listen for generic events to be triggered.
 */
declare function LISTENFOR_ExternalEvent(params: ExternalEventParameters): void

declare interface ExternalEventParameters {
    /**
     * REQUIRED
     * Only trigger when this event is called.
     * @see "aaa_global_const.js"
     * @example "InterestingEvent"
     */
    eventName: string

}

/**
 * Listen for a base to finish all of its ticketed builds.
 * @see BaseBuildsFinishedParameters
 *
 * @param params The parameters of the timer.
 */
declare function LISTENFOR_BaseBuildsFinished(params: BaseBuildsFinishedParameters): void

declare interface BaseBuildsFinishedParameters {
    /**
     * Optional
     * The faction name the village must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

    /**
     * Optional
     * The specific village ID.
     */
    villageId: number

}

/**
 * Listen for when a POI is generated
 *
   @param params The parameters of the listener.
 */
declare function LISTENFOR_POIGenerated(params: POIGeneratedParameters): void

declare interface POIGeneratedParameters {
    /**
     * REQUIRED
     * The short name of the POI type to listen to for generation.
     */
    poiTypeName: string

}

/**
 * Listen for when a village is generated
 *
   @param params The parameters of the listener.
 */
declare function LISTENFOR_VillageGenerated(params: VillageGeneratedParameters): void

declare interface VillageGeneratedParameters {
    /**
     * REQUIRED
     * The faction name the village must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

    /**
     * Optional
     * The village size. (ex. "medium")
     */
    villageSize: string

}

/**
 * Listen for when a village finished upgrading.
 */
declare function LISTENFOR_VillageUpgraded(params: VillageUpgradedParameters): void

declare interface VillageUpgradedParameters {
    /**
     * Optional
     * The faction name the village must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

    /**
     * Optional
     * The specific village ID.
     */
    villageId: number

    /**
     * Optional
     * The village size of the village being upgraded.
     */
    sourceVillageSize: string

    /**
     * Optional
     * The village size of the upgraded village.
     */
    targetVillageSize: string

}

/**
 * Listen for when the village and all of its instant buildings are generated
 */
declare function LISTENFOR_VillageFinishedBuilding(params: VillageFinishedBuildingParameters): void

declare interface VillageFinishedBuildingParameters {
    /**
     * Optional
     * The specific village ID.
     */
    villageId: number

}

/**
 * Listen for when the village and all of its instant buildings are planned.
 */
declare function LISTENFOR_VillageFinishedPlanning(params: VillageFinishedPlanningParameters): void

declare interface VillageFinishedPlanningParameters {
    /**
     * Optional
     * The faction name the village must belong to. (ex. "faction.pig.attack")
     */
    factionName: string

    /**
     * Optional
     * The specific village ID.
     */
    villageId: number

}

/**
 * Listen for a village to be destroyed. A village can only ever be destroyed once.
 */
declare function LISTENFOR_VillageDestroyed(params: VillageDestroyedParameters): void

declare interface VillageDestroyedParameters {
    /**
     * Optional
     * The faction name of the village(s).
     */
    factionName: string

    /**
     * Optional
     * The village size. (ex. "medium")
     */
    villageSize: string

    /**
     * Optional
     * The specific village ID.
     */
    villageId: number

    /**
     * Optional
     * false: trigger on gameplay destroyed (eg. player destroys a base, `/ad` command, etc.)
     * true: trigger on system despawned (eg. upgrading a base, FOB despawn on auto-resolve)
     * none: both of above
     */
    despawned: boolean

}

/**
 * Listen for a village to be planned. A village may not have all its information at this stage.
 * Triggered before `LISTENFOR_VillageGenerated`
 */
declare function LISTENFOR_VillagePlanned(params: VillagePlannedParameters): void

declare interface VillagePlannedParameters {
    /**
     * Optional
     * The faction name of the village(s).
     */
    factionName: string

    /**
     * Optional
     * The village size. (ex. "medium")
     */
    villageSize: string

}

/**
 * @see FobGeneratedParameters
 */
declare function LISTENFOR_InvasionAttackV2FobGenerated(params: InvasionAttackV2FobGeneratedParameters): void

declare interface InvasionAttackV2FobGeneratedParameters {
    /**
     * Optional
     * The attacking faction name.
     */
    factionName: string

    /**
     * Optional
     * The invasion ID.
     */
    invasionId: number

}

/**
 * Listen for when an event occurs during a cinematic.
 */
declare function LISTENFOR_CinematicEvent(params: CinematicEventParameters): void

declare interface CinematicEventParameters {
    /**
     * REQUIRED
     * Only trigger when this event is called.
     */
    eventName: string

    /**
     * Optional
     * Id of a particular cinematic instance this listener should respond to.
     */
    cinematicId: number

}

/**
 * Listen for when a specific cinematic starts playing.
 */
declare function LISTENFOR_CinematicStarted(params: CinematicStartedParameters): void

declare interface CinematicStartedParameters {
    /**
     * REQUIRED
     * The name of the cinematic being listened for.
     */
    cinematicName: string

}

/**
 * Listen for when a specific cinematic finishes playing.
 */
declare function LISTENFOR_CinematicFinished(params: CinematicFinishedParameters): void

declare interface CinematicFinishedParameters {
    /**
     * REQUIRED
     * The name of the cinematic being listened for.
     */
    cinematicName: string

}

/**
 * Listen for when a client interacts with an entity.
 */
declare function LISTENFOR_PlayerInteracted(params: PlayerInteractedParameters): void

declare interface PlayerInteractedParameters {
    /**
     * Optional
     * Player entity to filter on.
     */
    playerEntity: number

    /**
     * Optional
     * Interactable entities to filter on.
     */
    entities: number[]

    /**
     * Optional
     * The include tags of the interactable to listen for. All tags must be present.
     */
    includeTags: string[]

    /**
     * Optional
     * The exclude tags of the interactable to listen for. No tags must be present.
     */
    excludeTags: string[]

    /**
     * Optional
     * Team filter for the interacting player.
     */
    teamName: string

    /**
     * Optional
     * The village ID
     */
    villageId: number

    /**
     * Optional
     * The faction of the interactable entity.
     */
    factionName: string

}

/**
 * Listen for when a client player opens/selects a HUD element.
 * Triggers on **any** player. Only triggers when the HUD element is hidden.
 */
declare function LISTENFOR_HudEvent(params: HudEventParameters): void

declare interface HudEventParameters {
    /**
     * REQUIRED
     * The HUD event name.
     */
    eventName: string

}

/**
 * @see InvasionDestroyEntitiesObjectiveParameters
 */
declare function LISTENFOR_InvasionDestroyEntitiesObjective(params: InvasionDestroyEntitiesObjectiveParameters): void

declare interface InvasionDestroyEntitiesObjectiveParameters {
    /**
     * Optional
     * The village ID the objective must belong to.
     */
    villageId: number

    /**
     * Optional
     * The number of objective entities left.
     */
    threshold: number

}

/**
 * Listen to when the intentions can be finally drawn.
 * This may be triggered immediately upon calling the corresponding OUTPUT or with a delay.
 * Time of trigger depends entirely on how many processes from the previous night are still ongoing.
 */
declare function LISTENFOR_InvasionIntentionsDrawn(params: InvasionIntentionsDrawnParameters): void

declare interface InvasionIntentionsDrawnParameters {
}

/**
 * Listen for when invasion actions are executed at night.
 */
declare function LISTENFOR_InvasionActionsExecuted(params: InvasionActionsExecutedParameters): void

declare interface InvasionActionsExecutedParameters {
}

/**
 * Listen to perform any logic related to when the invasion night begins. Triggers when all invasions action for the night are done executing.
 */
declare function LISTENFOR_InvasionNightActionsResolved(params: InvasionNightActionsResolvedParameters): void

declare interface InvasionNightActionsResolvedParameters {
}

/**
 * Listen to apply an oops effect to a base. Triggered when the base is loaded.
 */
declare function LISTENFOR_InvasionOopsApply(params: InvasionOopsApplyParameters): void

declare interface InvasionOopsApplyParameters {
    /**
     * Optional
     * The faction name of the piglins.
     */
    factionName: string

}

/**
 * Listen to when a delayed invasion action is executed.
 * @see `OUTPUT_ExecuteAllDelayedInvasionActions`
 */
declare function LISTENFOR_InvasionDelayedActionExecuted(params: InvasionDelayedActionExecutedParameters): void

declare interface InvasionDelayedActionExecutedParameters {
    /**
     * Optional
     * The action name.
     */
    invasionAction: string

}

/**
 * Listen for when a certain time of day occurs
 */
declare function LISTENFOR_TimeOfDay(params: TimeOfDayParameters): void

declare interface TimeOfDayParameters {
    /**
     * Optional
     * badger time to listen for (number from 0 to 1)
     * Cannot be set if 'timeOfDayName' is set
     */
    timeOfDayNumber: number

    /**
     * Optional
     * Maps to a time defined in the time and weather service.
     * Cannot be set if 'timeOfDayNumber' is set
     */
    timeOfDayName: string

}

/**
 * Listen for when a specific tag is added to entities.
 */
declare function LISTENFOR_TagAdded(params: TagAddedParameters): void

declare interface TagAddedParameters {
    /**
     * Optional
     * Entities to filter by.
     */
    entities: number[]

    /**
     * REQUIRED
     * The tag to listen for being added.
     */
    tag: string

}

/**
 * Listen for when a specific tag is removed to entities.
 */
declare function LISTENFOR_TagRemoved(params: TagRemovedParameters): void

declare interface TagRemovedParameters {
    /**
     * Optional
     * Entities to filter by.
     */
    entities: number[]

    /**
     * REQUIRED
     * The tag to listen for being removed.
     */
    tag: string

}

/**
 * Listen for when an entity is lured or stops being lured.
 */
declare function LISTENFOR_InfluenceLureChanged(params: InfluenceLureChangedParameters): void

declare interface InfluenceLureChangedParameters {
    /**
     * Optional
     * The entities to detect influencing of.
     */
    entities: number[]

    /**
     * Optional
     * The include tags of the entities to listen for. All tags must be present.
     */
    includeTags: string[]

    /**
     * Optional
     * The exclude tags of the entities to listen for. No tags must be present.
     */
    excludeTags: string[]

    /**
     * Optional
     * The village id of the village that owns the influenced entity.
     */
    villageId: number

    /**
     * Optional
     * The faction that owns the influenced entity.
     */
    factionName: string

    /**
     * Optional
     * The team that the influenced entity is on.
     */
    teamName: string

}

/**
 * Listen for when an entity is directed or stops being directed.
 *
 *
 */
declare function LISTENFOR_InfluenceDirectorChanged(params: InfluenceDirectorChangedParameters): void

declare interface InfluenceDirectorChangedParameters {
    /**
     * Optional
     * The entities to detect influencing of.
     */
    entities: number[]

    /**
     * Optional
     * The include tags of the entities to listen for. All tags must be present.
     */
    includeTags: string[]

    /**
     * Optional
     * The exclude tags of the entities to listen for. No tags must be present.
     */
    excludeTags: string[]

    /**
     * Optional
     * The village id of the village that owns the influenced entity.
     */
    villageId: number

    /**
     * Optional
     * The faction that owns the influenced entity.
     */
    factionName: string

    /**
     * Optional
     * The team that the influenced entity is on.
     */
    teamName: string

}

/**
 * Listen for the player directing a mob with given orders and filters. Called for every mob being directed
 */
declare function LISTENFOR_PlayerDirectedMob(params: PlayerDirectedMobParameters): void

declare interface PlayerDirectedMobParameters {
    /**
     * Optional
     * the name of the action that the player used to direct the mob
     */
    targetAction: string

    /**
     * Optional
	 * ONE OF - pick either this or restrictedFilterTag
     * Compared against the filters of the direct option being applied. Requires the filters to include this tag 
     * eg. "ranged" to only fire for ranged advanced direct option
     */
    requiredFilterTag: string

    /**
     * Optional
	 * ONE OF - pick either this or requiredFilterTag
     * Compared against the filters of the direct option being applied. The filters cannot use this tag 
     * eg. "mob" to fire for any advanced filter
     */
    restrtictedFilterTag: string

}

/**
 * Listen when a structure has **begun** to deconstruct.
 */
declare function LISTENFOR_DeconstructionStarted(params: DeconstructionStartedParameters): void

declare interface DeconstructionStartedParameters {
    /**
     * Optional
     * The specific structure entities.
     */
    entities: number[]

    /**
     * Optional
     * The specific deconstructor entity (ex. a player).
     */
    deconstructorEntity: number

    /**
     * Optional
     * Tags the structure must have.
     */
    includeTags: string[]

    /**
     * Optional
     * Tags the structure must not have.
     */
    excludeTags: string[]

    /**
     * Optional
     * The village ID the structure must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the structure must belong to.
     */
    factionName: string

    /**
     * Optional
     * The team the structure must belong to.
     */
    teamName: string

}

/**
 * Listens for entity that is supposed to be killed (by damage) but is B# deferred.
 * @see OUTPUT_SetDeferredDeath
 */
declare function LISTENFOR_DeferredDeath(params: DeferredDeathParameters): void

declare interface DeferredDeathParameters {
    /**
     * Optional
     * The specific entities.
     */
    entities: number[]

    /**
     * Optional
     * The village ID the entity must belong to.
     */
    villageId: number

    /**
     * Optional
     * The faction name the entity must belong to.
     */
    factionName: string

    /**
     * Optional
     * The team the entity must belong to.
     */
    teamName: string

    /**
     * Optional
     * Tags the entity must have.
     */
    includeTags: string[]

    /**
     * Optional
     * Tags the entity must not have.
     */
    excludeTags: string[]

}

/**
 * Listen for a specific game rule to change.
 */
declare function LISTENFOR_GameRuleChanged(params: GameRuleChangedParameters): void

declare interface GameRuleChangedParameters {
    /**
     * REQUIRED
     * The name of the rule that was modified.
     */
    ruleName: string

    /**
     * Optional
     * The value that the rule was set to. Could be a string, number, or boolean, depending
     * on the rule that was changed.
     */
    value: any

}

/**
 * Listen for players re/connecting to the game.
 * Note: Currently this can trigger during the loading screen.
 */
declare function LISTENFOR_PlayerConnected(params: PlayerConnectedParameters): void

declare interface PlayerConnectedParameters {
}

/**
 * Listen for players disconnecting from the game.
 * Note: Currently this can trigger during the loading screen.
 * Will not trigger unless the player has triggered LISTENFOR_PlayerConnected first.
 */
declare function LISTENFOR_PlayerDisconnected(params: PlayerDisconnectedParameters): void

declare interface PlayerDisconnectedParameters {
}

/**
 * Listen for a particular test to be started.
 */
declare function LISTENFOR_TestStarted(params: TestStartedParameters): void

declare interface TestStartedParameters {
    /**
     * REQUIRED
     * The name of the test to detect the start of.
     */
    testName: string

}

/**
 * Listen for entities being disabled
 */
declare function LISTENFOR_EntityDisabled(params: EntityDisabledParameters): void

declare interface EntityDisabledParameters {
    /**
     * Optional
     * The particular entity being disabled
     */
    disabledEntity: number

    /**
     * Optional
     * The entity's owner village, or the village entity's id.
     */
    villageId: number

}

/**
 * Listen for entities being enabled
 */
declare function LISTENFOR_EntityEnabled(params: EntityEnabledParameters): void

declare interface EntityEnabledParameters {
    /**
     * Optional
     * The particular entity being enabled
     */
    enabledEntity: number

    /**
     * Optional
     * The entity's owner village, or the village entity's id.
     */
    villageId: number

}

/**
 * Listen for generic card to be played, like a flavour or objective base variation card.
 */
declare function LISTENFOR_GenericCardPlayed(params: GenericCardPlayedParameters): void

declare interface GenericCardPlayedParameters {
    /**
     * REQUIRED
     * The category string for the type of generic card. Eg: "flavour", "objective".
     */
    cardCategory: string

    /**
     * Optional
     * The card being played.
     */
    cardValue: string

}

/**
 * Listen for Advanced Direct being toggled on or off based on the
 */
declare function LISTENFOR_AdvancedDirectToggle(params: AdvancedDirectToggleParameters): void

declare interface AdvancedDirectToggleParameters {
    /**
     * Optional
     * Whether the listener will fire when the player opens (true) or closes (false) advanced direct
     */
    onOpen: boolean

}

/**
 * Listen for when the player is ready
 */
declare function LISTENFOR_PlayersReady(params: PlayersReadyParameters): void

declare interface PlayersReadyParameters {
}

/**
 * Listen for when a player fast travels
 */
declare function LISTENFOR_PlayerFastTravelled(params: PlayerFastTravelledParameters): void

declare interface PlayerFastTravelledParameters {
}

/**
 * Listen for when a player mounts a mount.
 */
declare function LISTENFOR_PlayerMounted(params: PlayerMountedParameters): void

declare interface PlayerMountedParameters {
    /**
     * Optional
     * The name of a specific mount to listen for.
     */
    mountName: string

}

/**
 * Listen for when player action (eg. destroying a base) can be performed
 * during **invasion simulation**. Do not use this in actual gameplay.
 */
declare function LISTENFOR_InvasionPlayerActionsExecuted(params: InvasionPlayerActionsExecutedParameters): void

declare interface InvasionPlayerActionsExecutedParameters {
}

/**
 * Listen for when an entity is within proximity of a player. Requires setting up ab observer via `OUTPUT_CreatePlayerProximityObserver`.
 */
declare function LISTENFOR_EntityEnteredPlayerProximity(params: EntityEnteredPlayerProximityParameters): void

declare interface EntityEnteredPlayerProximityParameters {
    /**
     * REQUIRED
	 * The name of the observer to check (see `OUTPUT_CreatePlayerProximityObserver` for details on authoring one)
     */
    observerName: string

}

/**
 * Listens for when the game difficulty changes
 */
declare function LISTENFOR_DifficultyChanged(params: DifficultyChangedParameters): void

declare interface DifficultyChangedParameters {
}

/**
 * Listen for when entities get recalled by a player.
 * 
 * @param params The param
 */
declare function LISTENFOR_EntityRecalled(params: EntityRecalledParameters): void

declare interface EntityRecalledParameters {
    /**
     * Optional
     * The include tags of the mobs to listen for recall.
     */
    includeTags: string[]

    /**
     * Optional
     * The exclude tags of the mobs to listen for recall.
     */
    excludeTags: string[]

}

/**
 * Listen for when the status effect was applied on some entity.
 */
declare function LISTENFOR_StatusEffectStarted(params: StatusEffectStartedParameters): void

declare interface StatusEffectStartedParameters {
    /**
     * Optional
     * Status effect name e.g. "wet", "burning", etc.
     */
    statusEffectName: string

    /**
     * Optional
     * Tags the entity must have.
     */
    includeTags: string[]

    /**
     * Optional
     * Tags the entity must not have.
     */
    excludeTags: string[]

    /**
     * Optional
     * Village the entity must belong to.
     */
    villageId: number

    /**
     * Optional
     * Horde the entity must belong to.
     */
    factionName: string

}

/**
 * Listen for when the status effect was expired on some entity.
 */
declare function LISTENFOR_StatusEffectExpired(params: StatusEffectExpiredParameters): void

declare interface StatusEffectExpiredParameters {
    /**
     * Optional
     * Status effect name e.g. "wet", "burning", etc.
     */
    statusEffectName: string

    /**
     * Optional
     * Tags the entity must have.
     */
    includeTags: string[]

    /**
     * Optional
     * Tags the entity must not have.
     */
    excludeTags: string[]

    /**
     * Optional
     * Village the entity must belong to.
     */
    villageId: number

    /**
     * Optional
     * Horde the entity must belong to.
     */
    factionName: string

}

/**
 * **`WARNING! WARNING! NO REFUGE!`** Do not use this outside onboarding or flatland game modes. Any logic that depends on this cannot be reliably guarunteed over the network or savegames. If this is used in campaign or PvP, it will likely not be able to ship.
 * 
 * Triggers a listener when a cue from `vo_sequence_definitions.json` finishes on a client.
 * 
 * An example cue looks like the following:
 * ```json
 * {
 *  "type": "cue",
 *  "name": "test_cue"
 * }
 * ```
 */
declare function LISTENFOR_ClientVOCueFinished(params: ClientVOCueFinishedParameters): void

declare interface ClientVOCueFinishedParameters {
    /**
     * REQUIRED
     * The name of the VO sequence cue in `vo_sequence_definitions.json`
     */
    vo_sequence_cue_name: string

}

/**
 * Listener logic for when a player performs a target action.
 */
declare function LISTENFOR_PlayerPerformedTargetAction(params: PlayerPerformedTargetActionParameters): void

declare interface PlayerPerformedTargetActionParameters {
    /**
     * REQUIRED
	 * The target action to listen for.
     */
    targetAction: string

    /**
     * Optional
    * Player entities to filter on. If no entities are provided, this listener will listen for *all* players.
     */
    playerEntities: number[]

}

/**
 * Listener to respond to a village attack damage request. Ensures a village is unsuspended so that entities can be 
 * damaged or destroyed without a player present.
 */
declare function LISTENFOR_InvasionAttackV2DamageRequest(params: InvasionAttackV2DamageRequestParameters): void

declare interface InvasionAttackV2DamageRequestParameters {
    /**
     * Optional
     * The attacking piglin's faction name.
     */
    factionName: string

    /**
     * Optional
     * The village ID of the village under attack.
     */
    villageId: number

}

/**
 * Listener for following up a damage request. Guaranteed to trigger one tick after the original damage request so that damaged entities'
 * damage requests are processed in time to be queried by bsharp.
 */
declare function LISTENFOR_InvasionAttackV2PostDamageRequest(params: InvasionAttackV2PostDamageRequestParameters): void

declare interface InvasionAttackV2PostDamageRequestParameters {
    /**
     * Optional
     * The attacking piglin's faction name.
     */
    factionName: string

    /**
     * Optional
     * The village ID of the village under attack.
     */
    villageId: number

}

/**
 * @see InvasionAttackV2StartedParameters
 */
declare function LISTENFOR_InvasionAttackV2Started(params: InvasionAttackV2StartedParameters): void

declare interface InvasionAttackV2StartedParameters {
    /**
     * Optional
     * The attacking faction.
     */
    factionName: string

    /**
     * Optional
     * The village under attack.
     */
    villageId: number

}

/**
 * @see InvasionAttackV2ActivatedParameters
 */
declare function LISTENFOR_InvasionAttackV2Activated(params: InvasionAttackV2ActivatedParameters): void

declare interface InvasionAttackV2ActivatedParameters {
    /**
     * Optional
     * The attacking faction.
     */
    factionName: string

    /**
     * Optional
     * The village under attack.
     */
    villageId: number

}

/**
 * @see InvasionAttackV2AbandonedParameters
 */
declare function LISTENFOR_InvasionAttackV2Abandoned(params: InvasionAttackV2AbandonedParameters): void

declare interface InvasionAttackV2AbandonedParameters {
    /**
     * Optional
     * The attacking faction.
     */
    factionName: string

    /**
     * Optional
     * The village under attack.
     */
    villageId: number

}

/**
 * @see InvasionAttackV2ReactivatedParameters
 */
declare function LISTENFOR_InvasionAttackV2Reactivated(params: InvasionAttackV2ReactivatedParameters): void

declare interface InvasionAttackV2ReactivatedParameters {
    /**
     * Optional
     * The attacking faction.
     */
    factionName: string

    /**
     * Optional
     * The village under attack.
     */
    villageId: number

}

/**
 * @see InvasionAttackV2OvertimeParameters
 */
declare function LISTENFOR_InvasionAttackV2Overtime(params: InvasionAttackV2OvertimeParameters): void

declare interface InvasionAttackV2OvertimeParameters {
    /**
     * Optional
     * The attacking faction.
     */
    factionName: string

    /**
     * Optional
     * The village under attack.
     */
    villageId: number

}

/**
 * @see InvasionAttackV2ResolveParameters
 */
declare function LISTENFOR_InvasionAttackV2Resolve(params: InvasionAttackV2ResolveParameters): void

declare interface InvasionAttackV2ResolveParameters {
    /**
     * Optional
     * The attacking faction.
     */
    factionName: string

    /**
     * Optional
     * The village under attack.
     */
    villageId: number

}

/**
 * @see InvasionAttackV2EndedParameters
 */
declare function LISTENFOR_InvasionAttackV2Ended(params: InvasionAttackV2EndedParameters): void

declare interface InvasionAttackV2EndedParameters {
    /**
     * Optional
     * The attacking faction.
     */
    factionName: string

    /**
     * Optional
     * The village under attack.
     */
    villageId: number

}
