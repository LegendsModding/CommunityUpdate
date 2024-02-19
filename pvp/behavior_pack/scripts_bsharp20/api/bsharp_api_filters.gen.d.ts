/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Filters entities by only returning alive entities not in the process of being destroyed
 * @returns The alive entities
 *
 * @param entities The entities to filter.
 */
declare function FILTER_ByAlive(entities: number[]): number[]

/**
 * Filters entities and gets the entities which are closest from a given entity.
 * @returns Entities closest to the target.
 *
 * @param entities The entities to filter.
 * @param closest The singular entity group to check against.
 * @param count How many of the closest entities to keep.
 */
declare function FILTER_ByClosest(entities: number[], closest: number, count: number): number[]

/**
 * Filters entities to only entities that are within a certain distance of
 * another entity.
 * @returns The entities that are within the distance to the center entity.
 *
 * @param entities The entities to filter.
 * @param center The entity to use as the center point for distance checking.
 * @param distance The distance threshold to filter by.
 */
declare function FILTER_ByDistance(entities: number[], center: number, distance: number): number[]

/**
 * Filters entities based on the name of their owning faction.
 * @returns The entities that are owned by the faction.
 *
 * @param entities The entities to filter.
 * @param factionNames The names of the factions to filter on.
 */
declare function FILTER_ByFactionName(entities: number[], factionNames: string[]): number[]

/**
 * Filters entities and gets the entities which are furthest from a given entity.
 * @returns Entities furthest to the target.
 *
 * @param entities The entities to filter.
 * @param anchorEntity The singular entity group to check against.
 * @param count How many of the furthest entities to keep.
 */
declare function FILTER_ByFarthest(entities: number[], anchorEntity: number, count: number): number[]

/**
 * Filters entities that has a creator.
 *
 * @param entities The entities to ilter.
 */
declare function FILTER_ByHasCreator(entities: number[]): number[]

/**
 * Filters entities to only entities that have a specific amount of remaining health. Eg. more than 20, less than 100.
 * @returns The entities that have remaining health above (or below) the given threshold.
 *
 * @param entities The entities to filter.
 * @param threshold Health remaining of the entity.
 * @param aboveThreshold Should the filter be checking if the health is above the threshold or below it.
 */
declare function FILTER_ByHealth(entities: number[], threshold: number, aboveThreshold: boolean): number[]

/**
 * Filters entities to only entities that have a specific amount of remaining health. Eg. more than 20%, less than 100%.
 * @returns The entities that have remaining health above (or below) the given percentage.
 *
 * @param entities The entities to filter.
 * @param threshold Value between 0 and 100 that indicates the percentage of total health remaining that the entity has.
 * @param aboveThreshold Should the filter be checking if the health is above the percentage or below it.
 */
declare function FILTER_ByHealthPercentage(entities: number[], threshold: number, aboveThreshold: boolean): number[]

/**
 * Filters entities to only entities that are children of a specified entity.
 * @returns The entities whose parent is parentEntity.
 *
 * @param entities The entities to filter.
 * @param parent The parent entity to apply the filter with.
 */
declare function FILTER_ByParent(entities: number[], parent: number): number[]

/**
 * Filters entities based off of tags.
 * @returns The entities that satisfy the tag constraints.
 *
 * @param entities The entities to filter.
 * @param includeTags The list of tags the entity must have.
 * @param excludeTags The list of tags the entity must not have.
 */
declare function FILTER_ByTagFilter(entities: number[], includeTags: string[], excludeTags: string[]): number[]

/**
 * Filters entities to only entities that belong to a specific team.
 * @returns The entities that are members of the team.
 *
 * @param entities The entities to filter.
 * @param teamName The name of the team to filter for.
 */
declare function FILTER_ByTeam(entities: number[], teamName: string): number[]

/**
 * Filters an existing entity group to entities that belong to a village.
 * @returns The entities that are owned by the village.
 *
 * @param entities The entities to filter.
 * @param villageId The village ID entities must belong to.
 */
declare function FILTER_ByVillageID(entities: number[], villageId: number): number[]

/**
 * Filters entities based on the size of their owning village.
 *
 * @param entities The entities to filter.
 * @param villageSizes The valid sizes to permit through the filter.
 */
declare function FILTER_ByVillageSize(entities: number[], villageSizes: string[]): number[]

/**
 * Filter village entities to see if they are part of an invasion.
 *
 * @param entities The entities.
 * @param isParticipant Return entities in an invasion or not.
 */
declare function FILTER_InvasionParticipant(entities: number[], isParticipant: boolean): number[]

/**
 * Filters out any entities that are an engineer AND occupied at the moment.
 *
 * @param entities The entities.
 */
declare function FILTER_OutOccupiedEngineers(entities: number[]): number[]

/**
 * Get some randomly selected entities from a set of entities.
 * @returns Randomly selected entities.
 *
 * @param entities The entities to filter.
 * @param count How many entities should be selected. Should be less or equal to the number of provided entities.
 */
declare function FILTER_RandomCount(entities: number[], count: number): number[]

/**
 * Randomly select a percentage of entities from a given set of entities.
 * @returns Randomly selected entities.
 *
 * @param entities The entities to filter.
 * @param percent The percentage of entities to take. Must be between 0 and 100.
 */
declare function FILTER_RandomPercentage(entities: number[], percent: number): number[]
