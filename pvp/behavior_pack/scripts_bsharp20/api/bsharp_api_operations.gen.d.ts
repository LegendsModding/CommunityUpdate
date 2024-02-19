/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Combine all entities from two sets that preserves order and ALLOWS duplicates.
 * @see OPER_Union In most cases use OPER_Union to join two sets of entities without duplicates.
 * @returns Entities from first and second, in given order and including duplicates.
 *
 * @param firstGroup The first set of entities. Order DOES matter.
 * @param secondGroup The second set of entities. Order DOES matter.
 */
declare function OPER_Append(firstGroup: number[], secondGroup: number[]): number[]

/**
 * Subtracts a set of entities from another and gets the resulting set.
 * @returns Entities that are in the first set but not in the second set.
 *
 * @param firstGroup The first set of entities. Order DOES matter.
 * @param secondGroup The second set of entities. Order DOES matter.
 */
declare function OPER_Difference(firstGroup: number[], secondGroup: number[]): number[]

/**
 * Gets all the entities from two entity sets which are present in both sets (not just one of them).
 * @returns Entiies that are present in the first set AND the second set.
 *
 * @param firstGroup The first set of entities. Order does NOT matter.
 * @param secondGroup The second set of entities. Order does NOT matter.
 */
declare function OPER_Intersection(firstGroup: number[], secondGroup: number[]): number[]

/**
 * Gets all the entities from two given EGs that are NOT present in both EGs. Ie. an anti-intersection
 * @see OPER_Intersection ; also know as an 'Exclusive OR operation'.
 * @returns Entities that are only present in either first or second. ie. excludes entities that are in both first and second => DIFFERENCE(UNION(A,B), INTERSECTION(A,B)).
 *
 * @param firstGroup The first set of entities. Order does NOT matter.
 * @param secondGroup The second set of entities. Order does NOT matter.
 */
declare function OPER_SymDifference(firstGroup: number[], secondGroup: number[]): number[]

/**
 * Joins two sets of entities together and returns the result.
 * Will not return duplicate entities.
 * @returns All entities from the first and second sets.
 *
 * @param firstGroup The first set of entities. Order does NOT matter.
 * @param secondGroup The second set of entities. Order does NOT matter.
 */
declare function OPER_Union(firstGroup: number[], secondGroup: number[]): number[]
