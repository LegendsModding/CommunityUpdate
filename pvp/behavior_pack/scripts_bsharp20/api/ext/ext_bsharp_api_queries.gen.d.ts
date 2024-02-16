/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Retrieve all the tags on a specified entity.
 *
 * @param entity The entity from which to retrieve tags.
 */
declare function QUERY_EXT_GetAllTags(entity: number): string[]

/**
 * Retrieve the state of a block relative to an entity by means of the state's ID.
 *
 * @param x The X value of the world position to query.
 * @param y The Y value of the world position to query.
 * @param z The Z value of the world position to query.
 * @param stateID The state ID of the block being queried.
 */
declare function QUERY_EXT_GetBlockDataByID(x: number, y: number, z: number, stateID: number): number

/**
 * Retrieve the state of a block relative to an entity by means of the state's ID.
 *
 * @param relativeEntity The entity the query is relative to.
 * @param x The X value of the relative position to query.
 * @param y The Y value of the relative position to query.
 * @param z The Z value of the relative position to query.
 * @param stateID The state ID of the block being queried.
 */
declare function QUERY_EXT_GetBlockDataByIDRelative(relativeEntity: number, x: number, y: number, z: number, stateID: number): number

/**
 * Retrieve the state of a block at an objective world position by means of the state's name.
 *
 * @param x The X value of the world position to query.
 * @param y The Y value of the world position to query.
 * @param z The Z value of the world position to query.
 * @param stateName The name of the state to be queried.
 */
declare function QUERY_EXT_GetBlockDataByName(x: number, y: number, z: number, stateName: string): number

/**
 * Retrieve the state of a block relative to an entity by means of the state's name.
 *
 * @param relativeEntity The entity to which the query is relative.
 * @param x The X value of the world position to query.
 * @param y The Y value of the world position to query.
 * @param z The Z value of the world position to query.
 * @param stateName The name of the state to be queried.
 */
declare function QUERY_EXT_GetBlockDataByNameRelative(relativeEntity: number, x: number, y: number, z: number, stateName: string): number

/**
 * Get the name of a block at a specified objective world position.
 *
 * @param x The X value of the world position to query.
 * @param y The Y value of the world position to query.
 * @param z The Z value of the world position to query.
 */
declare function QUERY_EXT_GetBlockName(x: number, y: number, z: number): string

/**
 * Get the name of a block relative to a specified entity.
 *
 * @param relativeEntity The entity the query is relative to.
 * @param x The X value of the relative position to query.
 * @param y The Y value of the relative position to query.
 * @param z The Z value of the relative position to query.
 */
declare function QUERY_EXT_GetBlockNameRelative(relativeEntity: number, x: number, y: number, z: number): string

/**
 * Get the position of a specified entity
 * Position is a number[3] array containing x,y,z coordinates
 *
 * @param targetEntity The entity whose position to fetch, this is returned as a container of numbers, of size 3, in (x,y,z) ordering
 */
declare function QUERY_EXT_GetEntityPosition(targetEntity: number): number[]

/**
 * Test a world position for the presence of a specific block type.
 *
 * @param blockName The name of the block to look for.
 * @param x The X value of the world position to query.
 * @param y The Y value of the world position to query.
 * @param z The Z value of the world position to query.
 */
declare function QUERY_EXT_TestBlock(blockName: string, x: number, y: number, z: number): boolean

/**
 * Compare a source and destination areas, of equal size, for whether or not they have identical block compositions.
 *
 * @param srcMinX The X value of the source area's origin point.
 * @param srcMinY The Y value of the source area's origin point.
 * @param srcMinZ The Z value of the source area's origin point.
 * @param dstMinX The X value of the destination area's origin point.
 * @param dstMinY The Y value of the destination area's origin point.
 * @param dstMinZ The Z value of the destination area's origin point.
 * @param areaMaxX The X value that defines the size of the areas.
 * @param areaMaxY The Y value that defines the size of the areas.
 * @param areaMaxZ The Z value that defines the size of the areas.
 */
declare function QUERY_EXT_TestBlockArea(srcMinX: number, srcMinY: number, srcMinZ: number, dstMinX: number, dstMinY: number, dstMinZ: number, areaMaxX: number, areaMaxY: number, areaMaxZ: number): boolean
