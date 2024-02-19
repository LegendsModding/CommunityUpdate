/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * This SNIPPET will define the behavior of button presses when calling OUTPUT_EXT_DisplayUI. 
 * 
 * @param snippetName The string ID to be referenced by OUTPUT_EXT_DisplayUI calls via the callbackOne or callbackTwo fields
 * @param EXT_UICallbackCallback A callback that defines the behavior of the snippet
 */
declare function SNIPPET_EXT_UICallback(snippetName: string, callback: EXT_UICallbackCallback): void
declare type EXT_UICallbackCallback = (payload: SnippetPayload) => void
