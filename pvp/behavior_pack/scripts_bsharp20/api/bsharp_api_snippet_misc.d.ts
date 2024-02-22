/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is composed manually. 
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
These functions are "special" and will not be generated by the doc generator. BSharp programmers would usually add them manually
==========================
*/

/**
 * Logic to perform when the server begins.
 * No listener required. All bootstrap snippets will fire at the beginning of a new game.
 */
declare function SNIPPET_Bootstrap(snippetName: string, callback: BootstrapCallback): void
declare type BootstrapCallback = () => void

/**
 * Current patch version is: 1
 * Logic to perform when processing a patch.
 * No listener required. All bootstrap snippets will fire at the beginning of a new game.
 * This snippet runs at the start of EVERY game, even after save-load.
 */
declare function SNIPPET_ProcessPatch(snippetName: string, minPatchVersion: number, callback: ProcessPatchBootstrapCallback): void
declare type ProcessPatchBootstrapCallback = (newVersion: number) => void

/**
 * Logic to perform when the server begins.
 * No listener required. All bootstrap snippets will fire at the beginning of a new game.
 * This snippet runs at the start of EVERY game, even after save-load.
 */
declare function SNIPPET_GameLoadBootstrap(snippetName: string, callback: GameLoadBootstrapCallback): void
declare type GameLoadBootstrapCallback = (isSaveLoaded: boolean) => void

/**
 * Similiar to Bootstrap. The name of the snippet should match the rule that is being reacted to.
 * Passes along the value of the rule as a parameter.
 * No listener required. All rule initialized snippets will fire at the beginning of a new game.
 */
declare function SNIPPET_RuleInitialized(snippetName: string, callback: RuleInitializedCallback): void
declare type RuleInitializedCallback = (ruleValue: VariantData) => void

/**
 * Similiar to Bootstrap. The name of the snippet should match the game mode this is being reacted to.
 * No listener required. All rule initialized snippets will fire at the beginning of a new game.
 */
declare function SNIPPET_InheritsFromGameMode(snippetName: string, callback: RuleInitializedCallback): void
declare type RuleInitializedCallback = () => void