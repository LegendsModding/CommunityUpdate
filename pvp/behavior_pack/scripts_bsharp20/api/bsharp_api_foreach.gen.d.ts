/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Perform the snippet's logic on all entities instantly.
 * @see LISTENFOR_ForEachEntity
 * @see SNIPPET_ForEachEntity
 * @returns FOREACH ID to be used with LISTENFOR_ForEachEntity
 *
 * @param entities All entities that the snippet's logic should be performed on.
 */
declare function FOREACH_AllInstant(entities: number[]): number

/**
 * Perform the snippet's logic on all entities in a ripple out pattern from the center entity.
 * The speed of the ripple is determined by the radius and duration. The ripple originates from the center and reaches the end of the radius when the duration has elapsed.
 * @see LISTENFOR_ForEachEntity
 * @see SNIPPET_ForEachEntity
 * @returns FOREACH ID to be used with LISTENFOR_ForEachEntity
 *
 * @param entities All entities that the snippet's logic should be performed on.
 * @param centerEntity The origin of the ripple.
 * @param radius Determines the circular Area of Effect around the center entity. Entities outside this area are excluded.
 * @param duration Determines the speed of the ripple.
 */
declare function FOREACH_RippleOut(entities: number[], centerEntity: number, radius: number, duration: number): number
