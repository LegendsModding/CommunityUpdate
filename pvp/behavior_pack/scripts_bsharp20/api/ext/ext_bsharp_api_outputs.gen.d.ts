/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Clear all stored event listeners.
 *
 * 
 */
declare function OUTPUT_EXT_ClearAllListeners(): void

/**
 * Clear all global variables.
 *
 * 
 */
declare function OUTPUT_EXT_ClearGlobalVariables(): void

/**
 * Clone all the blocks from one area to another. Area bounds are defined by a source min and max position, and a destination min position (as the dimensions necessarily match, the destination max is inferred).
 *
 * @param srcMinX The X value of the block position that denotes the minimum bound of the area.
 * @param srcMinY The Y value of the block position that denotes the minimum bound of the area.
 * @param srcMinZ The Z value of the block position that denotes the minimum bound of the area.
 * @param srcMaxX The X value of the block position that denotes the maximum bound of the area.
 * @param srcMaxY The Y value of the block position that denotes the maximum bound of the area.
 * @param srcMaxZ The Z value of the block position that denotes the maximum bound of the area.
 * @param dstMinX The X value of the block position that denotes the minimum bound of the target destination.
 * @param dstMinY The Y value of the block position that denotes the minimum bound of the target destination.
 * @param dstMinZ The Z value of the block position that denotes the minimum bound of the target destination.
 */
declare function OUTPUT_EXT_CloneBlockArea(srcMinX: number, srcMinY: number, srcMinZ: number, srcMaxX: number, srcMaxY: number, srcMaxZ: number, dstMinX: number, dstMinY: number, dstMinZ: number): void

/**
 * Clone only the blocks specified, from one area to another. Area bounds are defined by a source min and max position, and a destination min position (as the dimensions necessarily match, the destination max is inferred).
 *
 * @param blockNames The collection of block types to be included in the area clone.
 * @param srcMinX The X value of the block position that denotes the minimum bound of the area.
 * @param srcMinY The Y value of the block position that denotes the minimum bound of the area.
 * @param srcMinZ The Z value of the block position that denotes the minimum bound of the area.
 * @param srcMaxX The X value of the block position that denotes the maximum bound of the area.
 * @param srcMaxY The Y value of the block position that denotes the maximum bound of the area.
 * @param srcMaxZ The Z value of the block position that denotes the maximum bound of the area.
 * @param dstMinX The X value of the block position that denotes the minimum bound of the target destination.
 * @param dstMinY The Y value of the block position that denotes the minimum bound of the target destination.
 * @param dstMinZ The Z value of the block position that denotes the minimum bound of the target destination.
 */
declare function OUTPUT_EXT_CloneBlockAreaFor(blockNames: string[], srcMinX: number, srcMinY: number, srcMinZ: number, srcMaxX: number, srcMaxY: number, srcMaxZ: number, dstMinX: number, dstMinY: number, dstMinZ: number): void

/**
 * Clone all the blocks, except for those filtered by the mask, from one area to another. Area bounds are defined by a source min and max position, and a destination min position (as the dimensions necessarily match, the destination max is inferred).
 *
 * @param blockNames blockNames The collection of block types to be discluded from the area clone.
 * @param srcMinX The X value of the block position that denotes the minimum bound of the area.
 * @param srcMinY The Y value of the block position that denotes the minimum bound of the area.
 * @param srcMinZ The Z value of the block position that denotes the minimum bound of the area.
 * @param srcMaxX The X value of the block position that denotes the maximum bound of the area.
 * @param srcMaxY The Y value of the block position that denotes the maximum bound of the area.
 * @param srcMaxZ The Z value of the block position that denotes the maximum bound of the area.
 * @param dstMinX The X value of the block position that denotes the minimum bound of the target destination.
 * @param dstMinY The Y value of the block position that denotes the minimum bound of the target destination.
 * @param dstMinZ The Z value of the block position that denotes the minimum bound of the target destination.
 */
declare function OUTPUT_EXT_CloneBlockAreaMask(blockNames: string[], srcMinX: number, srcMinY: number, srcMinZ: number, srcMaxX: number, srcMaxY: number, srcMaxZ: number, dstMinX: number, dstMinY: number, dstMinZ: number): void

/**
 * Set an entity's health regeneration to zero.
 *
 * @param entities The collection of entities to modify.
 */
declare function OUTPUT_EXT_DisableHealthRegeneration(entities: number[]): void

/**
 * Displays a modal UI window with customizable properties.
 *
 * @param title The text displayed at the top of the window.
 * @param body The text displayed in the body of the window.
 * @param imageUrl The reference url to an image either in the base game or included in an add on pack.
 * @param buttonOneText The text displayed on the first button.
 * @param callbackOne The string which maps to a SNIPPET_EXT_UICallback and used to define the behavior of the first button when pressed.
 * @param buttonTwoText The text displayed on the second button.
 * @param callbackTwo The string which maps to a SNIPPET_EXT_UICallback and used to define the behavior of the second button when pressed.
 */
declare function OUTPUT_EXT_DisplayUI(title: string, body: string, imageUrl: string, buttonOneText: string, callbackOne: string, buttonTwoText: string, callbackTwo: string): void

/**
 * Fill a defined area with a specific block type. The fill area is defined by a min and max position.
 *
 * @param blockName The block types to be placed.
 * @param minX The X value of the block position that denotes the minimum bound of the area.
 * @param minY The Y value of the block position that denotes the minimum bound of the area.
 * @param minZ The Z value of the block position that denotes the minimum bound of the area.
 * @param maxX The X value of the block position that denotes the maximum bound of the area.
 * @param maxY The Y value of the block position that denotes the maximum bound of the area.
 * @param maxZ The Z value of the block position that denotes the maximum bound of the area.
 */
declare function OUTPUT_EXT_FillBlockArea(blockName: string, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): void

/**
 * Restore an entity's default health regeneration as defined by its data.
 *
 * @param entities The collection of entities to modify.
 */
declare function OUTPUT_EXT_RestoreDefaultHealthRegeneration(entities: number[]): void

/**
 * Set a single block at an objective world position.
 *
 * @param blockName The block type to be placed.
 * @param x The X value of the block's position.
 * @param y The Y value of the block's position.
 * @param z The Z value of the block's position.
 */
declare function OUTPUT_EXT_SetBlock(blockName: string, x: number, y: number, z: number): void

/**
 * Set a single block at a position relative to a specified entity, applying an offset if desired.
 *
 * @param blockName The block type to be placed.
 * @param relativeEntity The entity to which the block's position is relative
 * @param x The X value of an offset from the relative entity.
 * @param y The Y value of an offset from the relative entity.
 * @param z The Z value of an offset from the relative entity.
 */
declare function OUTPUT_EXT_SetBlockRelative(blockName: string, relativeEntity: number, x: number, y: number, z: number): void

/**
 * Set the objective world position of a specific existing entity.
 *
 * @param targetEntity The entity who's position will be set.
 * @param x The X value the entity will be moved to.
 * @param y The Y value the entity will be moved to.
 * @param z The Z value the entity will be moved to.
 */
declare function OUTPUT_EXT_SetEntityPosition(targetEntity: number, x: number, y: number, z: number): void

/**
 * Set a scalar value for how much health is replenished per tick by the Health Regeneration System for a specified collection of entities.
 *
 * @param entities The collection of entities to modify.
 * @param scalar the scalar, relative to their base value, to serve as a modifier for health regeneration.
 */
declare function OUTPUT_EXT_SetHealthRegenerationScalar(entities: number[], scalar: number): void

/**
 * Set the current weather state to clear.
 *
 * 
 */
declare function OUTPUT_EXT_SetWeatherToClear(): void

/**
 * Set the current weather state to be dynamic as defined by the world.
 *
 * 
 */
declare function OUTPUT_EXT_SetWeatherToDynamic(): void

/**
 * Set the current weather state to rain.
 *
 * @param timeOfDay The intensity of rain downfall
 */
declare function OUTPUT_EXT_SetWeatherToRain(timeOfDay: number): void

/**
 * Spawn a buildable at an objective world position.
 *
 * @param buildableName The name of the buildable to spawn (eg: `badger:poi_sword_gold`).
 * @param buildableTeam The team to spawn the buildable on (required!)
 * @param facingDirection The orientation that the structre should be facing: (eg: `north`, `south`, `east`, or `west`).
 * @param instantBuild Should we instantly build this buildable.
 * @param onGround Snap buildable to the surface.
 * @param x The X value the buildable should be at.
 * @param y The Y value the buildable should be at.
 * @param z The Z value the buildable should be at.
 * @param callback A call to `SpawnBuildableCallback` with the snippet to call on complete. This can be ignored by passing in an empty string.
 */
declare function OUTPUT_EXT_SpawnBuildable(buildableName: string, buildableTeam: string, facingDirection: string, instantBuild: boolean, onGround: boolean, x: number, y: number, z: number, callback: string): void

/**
 * Spawn a buildable at an existing entity at an offset and snap it to a the ground, while ignoring possible collisions with other buildables
 *
 * @param buildableName The name of the buildable to spawn (eg: `badger:poi_sword_gold`).
 * @param entitiesPosition The entities to spawn this buildable at.
 * @param buildableTeam The team to spawn the buildable on (required!)
 * @param facingDirection The orientation that the structre should be facing: (eg: `north`, `south`, `east`, or `west`).
 * @param instantBuild Should we instantly build this buildable.
 * @param onGround Snap buildable to the surface.
 * @param x The X offset the buildable should be at.
 * @param y The Y offset the buildable should be at.
 * @param z The Z offset the buildable should be at.
 * @param callback A call to `SpawnBuildableCallback` with the snippet to call on complete. This can be ignored by passing in an empty string.
 */
declare function OUTPUT_EXT_SpawnBuildableAtWithOffsetWithoutCollision(buildableName: string, entitiesPosition: number[], buildableTeam: string, facingDirection: string, instantBuild: boolean, onGround: boolean, x: number, y: number, z: number, callback: string): void

/**
 * Spawn a buildable at an existing entity and snap it to a the ground, while ignoring possible collisions with other buildables.
 *
 * @param buildableName The name of the buildable to spawn (eg: `badger:poi_sword_gold`).
 * @param entitiesPosition The entities to spawn this buildable at.
 * @param buildableTeam The team to spawn the buildable on (required!).
 * @param facingDirection The orientation that the structre should be facing: (eg: `north`, `south`, `east`, or `west`).
 * @param instantBuild Should we instantly build this buildable.
 * @param onGround Snap buildable to the surface.
 * @param callback A call to `SpawnBuildableCallback` with the snippet to call on complete. This can be ignored by passing in an empty string.
 */
declare function OUTPUT_EXT_SpawnBuildableAtWithoutCollision(buildableName: string, entitiesPosition: number[], buildableTeam: string, facingDirection: string, instantBuild: boolean, onGround: boolean, callback: string): void

/**
 * Spawn a buildable at an objective world position, while ignoring possible collisions with other buildables.
 *
 * @param buildableName The name of the buildable to spawn (eg: `badger:poi_sword_gold`).
 * @param buildableTeam The team to spawn the buildable on (required!).
 * @param facingDirection The orientation that the structre should be facing: (eg: `north`, `south`, `east`, or `west`).
 * @param instantBuild Should we instantly build this buildable.
 * @param onGround Snap buildable to the surface.
 * @param x The X value the buildable should be at.
 * @param y The Y value the buildable should be at.
 * @param z The Z value the buildable should be at.
 * @param callback A call to `SpawnBuildableCallback` with the snippet to call on complete. This can be ignored by passing in an empty string.
 */
declare function OUTPUT_EXT_SpawnBuildableWithoutCollision(buildableName: string, buildableTeam: string, facingDirection: string, instantBuild: boolean, onGround: boolean, x: number, y: number, z: number, callback: string): void

/**
 * Spawn a single entity at an objective world position.
 *
 * @param archetypeName The archetype of the entity to spawn.
 * @param x The X value the entity should be spawned at.
 * @param y The Y value the entity should be spawned at.
 * @param z The Z value the entity should be spawned at.
 */
declare function OUTPUT_EXT_SpawnEntity(archetypeName: string, x: number, y: number, z: number): number

/**
 * Spawn a single entity at a position relative to another entity, with an offset if desired.
 *
 * @param archetypeName The archetype of the entity to spawn.
 * @param srcEntity The reference entity to spawn the new entity relative to.
 * @param x The X value offset the entity should be spawned at.
 * @param y The Y value offset the entity should be spawned at.
 * @param z The Z value offset the entity should be spawned at.
 */
declare function OUTPUT_EXT_SpawnEntityRelative(archetypeName: string, srcEntity: number, x: number, y: number, z: number): number

/**
 * Spawn a defined feature at an objective world position.
 *
 * @param featureName The name of the feature to spawn (eg: `badger:feature_brokenlands_algae_01`).
 * @param x The X value the feature should be at.
 * @param y The Y value the feature should be at.
 * @param z The Z value the feature should be at.
 */
declare function OUTPUT_EXT_SpawnFeature(featureName: string, x: number, y: number, z: number): void

/**
 * Spawn a defined structure at an objective world position.
 *
 * @param structureName The name of the structure to spawn (eg: `badger:gate_door_piglin`).
 * @param x0 The X value the structure should be at.
 * @param y0 The Y value the structure should be at.
 * @param z0 The Z value the structure should be at.
 * @param x1 The X value of an optional offset.
 * @param y1 The Y value of an optional offset.
 * @param z1 The Z value of an optional offset.
 * @param includeEntities Whether to consider entities that may conflict with placement. Pass `false` to ignore possible conflicts.
 * @param includeBlocks Whether to consider blocks that may conflict with placement. Pass `false` to ignore possible conflicts.
 * @param rotation The rotational degree of the Structure (0, 90, 180, 270)
 * @param mirror Whether or not to mirror the Structure along a certain axis ("none", "x", "xz", "z")
 * @param animationMode The Animation Mode of the structure ("none", "layers", "blocks)
 * @param ticks Animation Ticks
 * @param integrity Tthe Structure Data's Integrity Value (may result in random missing blocks)
 */
declare function OUTPUT_EXT_SpawnStructure(structureName: string, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, includeEntities: boolean, includeBlocks: boolean, rotation: number, mirror: string, animationMode: string, ticks: number, integrity: number): void
