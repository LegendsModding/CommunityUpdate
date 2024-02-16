/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable @typescript-eslint/camelcase */
/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
==========================
*/

/**
 * GAMEMODE: BASE
 * A list of all the campaign acts.
 */
declare interface ACTS {
    /**
     * ACT_1A
     */
    ACT_1A: string
    /**
     * ACT_1B
     */
    ACT_1B: any
    /**
     * ACT_2
     */
    ACT_2: any
    /**
     * ACT_3A
     */
    ACT_3A: any
    /**
     * ACT_3B
     */
    ACT_3B: any
    /**
     * EPILOGUE
     */
    EPILOGUE: any
}

/**
 * GAMEMODE: BASE
 * Tags to manage piglins using AI responses
 */
declare interface AI_TAG {
    /**
     * EXEMPT
     */
    EXEMPT: string
    /**
     * ASSIGNED
     */
    ASSIGNED: string
}

/**
 * GAMEMODE: campaign
 
 */
declare interface AllyBarracksConfig_DBBFaction {
    /**
     * name
     */
    name: any
    /**
     * darkBeacon
     */
    darkBeacon: any
}

/**
 * GAMEMODE: campaign
 * AllyBarracksCreeperConfig_DBBFaction
 */
declare interface AllyBarracksCreeperConfig_DBBFaction {
    /**
     * name
     */
    name: any
    /**
     * darkBeacon
     */
    darkBeacon: any
}

/**
 * GAMEMODE: campaign
 * AllyBarracksSkeletonConfig_DBBFaction
 */
declare interface AllyBarracksSkeletonConfig_DBBFaction {
    /**
     * name
     */
    name: any
    /**
     * darkBeacon
     */
    darkBeacon: any
}

/**
 * GAMEMODE: campaign
 * AllyBarracksZombieConfig_DBBFaction
 */
declare interface AllyBarracksZombieConfig_DBBFaction {
    /**
     * name
     */
    name: any
    /**
     * darkBeacon
     */
    darkBeacon: any
}

/**
 * GAMEMODE: BASE
 * AUDIO_VAR_KEY
 */
declare interface AUDIO_VAR_KEY {
    /**
     * ACT
     */
    ACT: string
}

/**
 * GAMEMODE: BASE
 * AUDIO_VAR_VALUE
 */
declare interface AUDIO_VAR_VALUE {
    /**
     * ACT
     */
    ACT: any
}
/**
 * GAMEMODE: campaign
 * Custom game opitons global consts
 */
declare interface CUSTOM_OPTIONS {
    /**
     * global variable
     */
    SKIP_ACT_1: string
}
/**
 * GAMEMODE: campaign
 *
 */
declare interface BaseToBaseMinDistanceConfiguration {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface BaseToMobAlliancesMinDistanceConfiguration {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface BaseToOtherVillagesMinDistanceConfiguration {

}

/**
 * GAMEMODE: campaign
 * Minimum spawn distance from a base to outpost.
 */
declare interface BaseToOutpostMinDistanceConfiguration {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface BaseToVillagerVillagesMinDistanceConfiguration {

}

/**
 * GAMEMODE: campaign
 * Values relating to boss bases.
 */
declare interface BOSS_BASE_VALS {
    /**
     * globals
     */
    globals: any
    /**
     * commonVO
     */
    commonVO: any
    /**
     * minDistanceFromPlayers
     */
    minDistanceFromPlayers: number
    /**
     * maxDistanceFromPlayers
     */
    maxDistanceFromPlayers: number
    /**
     * factionObjects
     */
    factionObjects: []
    /**
     * basesDestroyedForBossIsMad
     */
    basesDestroyedForBossIsMad: number
    /**
     * basesRemainingForBossIsMad
     */
    basesRemainingForBossIsMad: number
}

/**
 * GAMEMODE: BASE
 * Contains interfaceant values for use with BSharpPlacement functions
 */
declare interface BSHARP_PLACEMENT {
    /**
     * Indicates that all provided entities to a rule should satisfy the rule in order to be successful.
     */
    requireAll: number
    /**
     * Indicates that a proximity rule's max distance should be bounded only by the size of the world.
     */
    maxDistance: number
}

/**
 * GAMEMODE: BASE
 * Contains strings for buildable cards defined in costs_piglin.json
 */
declare interface BUILDABLE_CARD {
    /**
     * PORTAL_ACT1
     */
    PORTAL_ACT1: string
    /**
     * PORTAL_DARK_BEACON
     */
    PORTAL_DARK_BEACON: string
    /**
     * PORTAL_SMALL
     */
    PORTAL_SMALL: string
    /**
     * PORTAL_MEDIUM
     */
    PORTAL_MEDIUM: string
    /**
     * PORTAL_LARGE
     */
    PORTAL_LARGE: string
    /**
     * PORTAL_MINI
     */
    PORTAL_MINI: string
    /**
     * SUPER_GOLDMINE
     */
    SUPER_GOLDMINE: string
    /**
     * PIGLIN_CRYSTAL
     */
    PIGLIN_CRYSTAL: string
    /**
     * TOWER_PIGLIN_ARROW
     */
    TOWER_PIGLIN_ARROW: string
    /**
     * TOWER_PIGLIN_KNOCKBACK
     */
    TOWER_PIGLIN_KNOCKBACK: string
    /**
     * TOWER_PIGLIN_THROWER_RUNT
     */
    TOWER_PIGLIN_THROWER_RUNT: string
    /**
     * TOWER_PIGLIN_THROWER_WARBOAR
     */
    TOWER_PIGLIN_THROWER_WARBOAR: string
    /**
     * TOWER_PIGLIN_THROWER_PIGMADILO
     */
    TOWER_PIGLIN_THROWER_PIGMADILO: string
    /**
     * TOWER_LAVA_SPREADER
     */
    TOWER_LAVA_SPREADER: string
    /**
     * TOWER_PIGLIN_SHIELD
     */
    TOWER_PIGLIN_SHIELD: string
    /**
     * BARRACKS_FIGHTER
     */
    BARRACKS_FIGHTER: string
    /**
     * BARRACKS_DISRUPTOR
     */
    BARRACKS_DISRUPTOR: string
    /**
     * BARRACKS_SIEGER
     */
    BARRACKS_SIEGER: string
    /**
     * BARRACKS_SPECIALIST
     */
    BARRACKS_SPECIALIST: string
    /**
     * NETHERSPREADER
     */
    NETHERSPREADER: string
    /**
     * NETHERSPREADER_SUPER_FEAR
     */
    NETHERSPREADER_SUPER_FEAR: string
    /**
     * NETHERSPREADER_INSTANT
     */
    NETHERSPREADER_INSTANT: string
    /**
     * GOLDMINE
     */
    GOLDMINE: string
    /**
     * PIGLIN_CRATE
     */
    PIGLIN_CRATE: string
    /**
     * RANGE_EXTENDER
     */
    RANGE_EXTENDER: string
    /**
     * BUILDING_REGENERATOR
     */
    BUILDING_REGENERATOR: string
    /**
     * RALLYPOINT
     */
    RALLYPOINT: string
    /**
     * ATTACK_HORDE_RALLY_POINT
     */
    ATTACK_HORDE_RALLY_POINT: string
    /**
     * DEFEND_HORDE_RALLY_POINT
     */
    DEFEND_HORDE_RALLY_POINT: string
    /**
     * MOB_CAGE
     */
    MOB_CAGE: string
}

/**
 * GAMEMODE: BASE
 * Building tags
 */
declare interface BUILDING_TAG {
    /**
     * RALLYPOINT
     */
    RALLYPOINT: string
}

/**
 * GAMEMODE: BASE
 * Names of all the celebrations
 */
declare interface CELEBRATION_NAMES {
    /**
     * ALLAY_DANCE_SMALL
     */
    ALLAY_DANCE_SMALL: string
    /**
     * ALLAY_DANCE_MEDIUM
     */
    ALLAY_DANCE_MEDIUM: string
    /**
     * ALLAY_DANCE_LARGE
     */
    ALLAY_DANCE_LARGE: string
    /**
     * MOBS
     */
    MOBS: string
    /**
     * CAGED_MOBS
     */
    CAGED_MOBS: string
    /**
     * VILLAGER
     */
    VILLAGER: string
    /**
     * HOSTS
     */
    HOSTS: string
    /**
     * PORTAL_DESTROYED_GOLEM_SUPPORT
     */
    PORTAL_DESTROYED_GOLEM_SUPPORT: string
    /**
     * MOB_ALLIANCE_COMPLETE
     */
    MOB_ALLIANCE_COMPLETE: string
    /**
     * PLAYER_DANCE
     */
    PLAYER_DANCE: string
}

/**
 * GAMEMODE: BASE
 * An object containing all the celebrations details.
 */
declare interface CELEBRATIONS {

}

/**
 * GAMEMODE: campaign
 * Claimed area sizes for the defend horde.
 */
declare interface CLAIMED_AREAS_DEF {

}

/**
 * GAMEMODE: BASE
 *
 */
declare interface DEFEND_DEFEND_AI {
    /**
     * TAG
     */
    TAG: string
    /**
     * RALLY_POINT
     */
    RALLY_POINT: string
    /**
     * CG_0
     */
    CG_0: string
    /**
     * CG_1
     */
    CG_1: string
}

/**
 * GAMEMODE: BASE
 *
 */
declare interface DEFEND_SIEGE_AI {
    /**
     * TAG
     */
    TAG: string
    /**
     * RALLY_POINT
     */
    RALLY_POINT: string
    /**
     * CG_0
     */
    CG_0: string
    /**
     * CG_1
     */
    CG_1: string
}

/**
 * GAMEMODE: BASE
 *
 */
declare interface DEFEND_UNIQUE_AI {
    /**
     * TAG
     */
    TAG: string
    /**
     * RALLY_POINT
     */
    RALLY_POINT: string
    /**
     * CG_0
     */
    CG_0: string
    /**
     * CG_1
     */
    CG_1: string
}

/**
 * GAMEMODE: Demo_MinecraftLive
 *
 */
declare interface DemoConfig {
    /**
     * extraRunts
     */
    extraRunts: number
    /**
     * extraGrunters
     */
    extraGrunters: number
    /**
     * extraGrenadiers
     */
    extraGrenadiers: number
    /**
     * extraLavaLaunchers
     */
    extraLavaLaunchers: number
}

/**
 * GAMEMODE: Demo_MinecraftLive
 *
 */
declare interface DemoWorldGenDefinition {
    /**
     * base
     */
    base: any
    /**
     * modify
     */
    modify: any
}

/**
 * GAMEMODE: BASE
 * Contains strings for direction filter cards defined in costs_placement_preferences.json
 */
declare interface DIRECTION_CARD {
    /**
     * none
     */
    none: string
    /**
     * northWedge
     */
    northWedge: string
    /**
     * eastWedge
     */
    eastWedge: string
    /**
     * southWedge
     */
    southWedge: string
    /**
     * westWedge
     */
    westWedge: string
    /**
     * northWestWedge
     */
    northWestWedge: string
    /**
     * northEastWedge
     */
    northEastWedge: string
    /**
     * southWestWedge
     */
    southWestWedge: string
    /**
     * southEastWedge
     */
    southEastWedge: string
    /**
     * northRect
     */
    northRect: string
    /**
     * eastRect
     */
    eastRect: string
    /**
     * southRect
     */
    southRect: string
    /**
     * westRect
     */
    westRect: string
    /**
     * northWestRect
     */
    northWestRect: string
    /**
     * northEastRect
     */
    northEastRect: string
    /**
     * southWestRect
     */
    southWestRect: string
    /**
     * southEastRect
     */
    southEastRect: string
}

/**
 * GAMEMODE: campaign
 * Attack faction disruptor barracks config for helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface DisruptorBarracksConfig_AttackFaction {
    /**
     * name
     */
    name: any
    /**
     * wofBase
     */
    wofBase: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * frontlineA
     */
    frontlineA: any
}

/**
 * GAMEMODE: campaign
 * Attack faction disruptor barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface DisruptorBarracksConfig_AttackFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * boss
     */
    boss: any
}

/**
 * GAMEMODE: campaign
 * DisruptorBarracksConfig_DBBFaction
 */
declare interface DisruptorBarracksConfig_DBBFaction {
    /**
     * name
     */
    name: any
    /**
     * act1_a
     */
    act1_a: any
    /**
     * act1_b
     */
    act1_b: any
    /**
     * act1_c
     */
    act1_c: any
    /**
     * piglin_act1_non_portal_attack_base
     */
    piglin_act1_non_portal_attack_base: any
    /**
     * darkBeacon
     */
    darkBeacon: any
}

/**
 * GAMEMODE: Demo_Gamescom
 * Defend faction disruptor barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface DisruptorBarracksConfig_DefendFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
}

/**
 * GAMEMODE: campaign
 * Obstacle faction disruptor barracks config for helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface DisruptorBarracksConfig_ObstacleFaction {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
}

/**
 * GAMEMODE: campaign
 * Obstacle faction disruptor barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface DisruptorBarracksConfig_ObstacleFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * boss
     */
    boss: any
}

/**
 * GAMEMODE: campaign
 * DisruptorBarracksConfig_WOFFaction
 */
declare interface DisruptorBarracksConfig_WOFFaction {
    /**
     * name
     */
    name: any
    /**
     * wofBase
     */
    wofBase: any
}

/**
 * GAMEMODE: Demo_Gamescom
 * Defend faction engineer barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface EngineerBarracksConfig_DefendFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
}

/**
 * GAMEMODE: campaign
 *
 */
declare interface FactionBaseElevationRestrictions {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface FactionBiomePreferences {

}

/**
 * GAMEMODE: campaign
 * Attack faction fighter barracks config for helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface FighterBarracksConfig_AttackFaction {
    /**
     * name
     */
    name: any
    /**
     * wofBase
     */
    wofBase: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * frontlineA
     */
    frontlineA: any
}

/**
 * GAMEMODE: campaign
 * Attack faction fighter barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface FighterBarracksConfig_AttackFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * boss
     */
    boss: any
}

/**
 * GAMEMODE: campaign
 * FighterBarracksConfig_DBBFaction
 */
declare interface FighterBarracksConfig_DBBFaction {
    /**
     * name
     */
    name: any
    /**
     * act1_a
     */
    act1_a: any
    /**
     * act1_b
     */
    act1_b: any
    /**
     * act1_c
     */
    act1_c: any
    /**
     * darkBeacon
     */
    darkBeacon: any
    /**
     * piglin_act1_first_skirmish
     */
    piglin_act1_first_skirmish: any
    /**
     * piglin_act1_second_skirmish
     */
    piglin_act1_second_skirmish: any
    /**
     * large
     */
    large: any
    /**
     * piglin_act1_non_portal_attack_base
     */
    piglin_act1_non_portal_attack_base: any
}

/**
 * GAMEMODE: campaign
 * Defend faction fighter barracks config for helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface FighterBarracksConfig_DefendFaction {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
}

/**
 * GAMEMODE: Demo_Gamescom
 * Defend faction fighter barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface FighterBarracksConfig_DefendFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * boss
     */
    boss: any
}

/**
 * GAMEMODE: campaign
 * Obstacle faction fighter barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface FighterBarracksConfig_ObstacleFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * boss
     */
    boss: any
}

/**
 * GAMEMODE: campaign
 * FighterBarracksConfig_WOFFaction
 */
declare interface FighterBarracksConfig_WOFFaction {
    /**
     * name
     */
    name: any
    /**
     * wofBase
     */
    wofBase: any
}

/**
 * GAMEMODE: BASE
 * Telemetry funnel steps
 */
declare interface FunnelSteps {
    /**
     * TUTORIAL_START
     */
    TUTORIAL_START: any
    /**
     * TUTORIAL_GATHERWOOD
     */
    TUTORIAL_GATHERWOOD: any
    /**
     * TUTORIAL_GATHERSTONE
     */
    TUTORIAL_GATHERSTONE: any
    /**
     * TUTORIAL_BUILDSTAIRS
     */
    TUTORIAL_BUILDSTAIRS: any
    /**
     * TUTORIAL_OBJECTIVEREACHED
     */
    TUTORIAL_OBJECTIVEREACHED: any
    /**
     * TUTORIAL_OPENCHEST
     */
    TUTORIAL_OPENCHEST: any
    /**
     * TUTORIAL_BUILDSPAWNER
     */
    TUTORIAL_BUILDSPAWNER: any
    /**
     * TUTORIAL_SPAWNGOLEM
     */
    TUTORIAL_SPAWNGOLEM: any
    /**
     * TUTORIAL_RALLYGOLEMTOOBJECTIVE
     */
    TUTORIAL_RALLYGOLEMTOOBJECTIVE: any
    /**
     * TUTORIAL_STOPRALLYING
     */
    TUTORIAL_STOPRALLYING: any
    /**
     * TUTORIAL_DIRECTGOLEMTOOBJECTIVE
     */
    TUTORIAL_DIRECTGOLEMTOOBJECTIVE: any
    /**
     * TUTORIAL_DESTROYENEMYSPAWNERS
     */
    TUTORIAL_DESTROYENEMYSPAWNERS: any
    /**
     * TUTORIAL_COMPLETE
     */
    TUTORIAL_COMPLETE: any
    /**
     * ACT1_START
     */
    ACT1_START: any
    /**
     * ACT1_VILLAGE1ARRIVE
     */
    ACT1_VILLAGE1ARRIVE: any
    /**
     * ACT1_VILLAGE1SAVED
     */
    ACT1_VILLAGE1SAVED: any
    /**
     * ACT1_VILLAGE1CARPENTER
     */
    ACT1_VILLAGE1CARPENTER: any
    /**
     * ACT1_VILLAGE2ARRIVE
     */
    ACT1_VILLAGE2ARRIVE: any
    /**
     * ACT1_VILLAGE2PIGLINSDEFEATED
     */
    ACT1_VILLAGE2PIGLINSDEFEATED: any
    /**
     * ACT1_VILLAGE2OPENCHEST
     */
    ACT1_VILLAGE2OPENCHEST: any
    /**
     * ACT1_VILLAGE2CARPENTER
     */
    ACT1_VILLAGE2CARPENTER: any
    /**
     * ACT1_VILLAGE2PIGLINBARRACKSDESTROYED
     */
    ACT1_VILLAGE2PIGLINBARRACKSDESTROYED: any
    /**
     * ACT1_PIGLINCAMPDESTROYED1
     */
    ACT1_PIGLINCAMPDESTROYED1: any
    /**
     * ACT1_PIGLINCAMPDESTROYED2
     */
    ACT1_PIGLINCAMPDESTROYED2: any
    /**
     * ACT1_PIGLINCAMPDESTROYED3
     */
    ACT1_PIGLINCAMPDESTROYED3: any
    /**
     * ACT1_ARRIVEWELLOFFATE
     */
    ACT1_ARRIVEWELLOFFATE: any
    /**
     * ACT1_UPGRADEWELLOFFATE
     */
    ACT1_UPGRADEWELLOFFATE: any
    /**
     * ACT1_VILLAGE3ARRIVE
     */
    ACT1_VILLAGE3ARRIVE: any
    /**
     * ACT1_VILLAGE3PIGLINCORESTRUCTUREDAMAGED
     */
    ACT1_VILLAGE3PIGLINCORESTRUCTUREDAMAGED: any
    /**
     * ACT1_VILLAGE3PIGLINCORESTRUCTURESDESTROYED1
     */
    ACT1_VILLAGE3PIGLINCORESTRUCTURESDESTROYED1: any
    /**
     * ACT1_VILLAGE3PIGLINCORESTRUCTURESDESTROYED2
     */
    ACT1_VILLAGE3PIGLINCORESTRUCTURESDESTROYED2: any
    /**
     * ACT1_VILLAGE3PIGLINCORESTRUCTURESDESTROYED3
     */
    ACT1_VILLAGE3PIGLINCORESTRUCTURESDESTROYED3: any
    /**
     * ACT1_VILLAGE3SAVED
     */
    ACT1_VILLAGE3SAVED: any
    /**
     * ACT1_ARRIVEDBB
     */
    ACT1_ARRIVEDBB: any
    /**
     * ACT1_PORTALDAMAGEDDBB
     */
    ACT1_PORTALDAMAGEDDBB: any
    /**
     * ACT1_PORTAL90PERCENTDBB
     */
    ACT1_PORTAL90PERCENTDBB: any
    /**
     * ACT1_PORTAL75PERCENTDBB
     */
    ACT1_PORTAL75PERCENTDBB: any
    /**
     * ACT1_PORTAL50PERCENTDBB
     */
    ACT1_PORTAL50PERCENTDBB: any
    /**
     * ACT1_PORTAL25PERCENTDBB
     */
    ACT1_PORTAL25PERCENTDBB: any
    /**
     * ACT1_COMPLETE
     */
    ACT1_COMPLETE: any
}

/**
 * GAMEMODE: BASE
 * Dictionary for game difficulty setting names.
 */
declare interface GAME_DIFFICULTY {
    /**
     * peaceful
     */
    peaceful: string
    /**
     * easy
     */
    easy: string
    /**
     * normal
     */
    normal: string
    /**
     * hard
     */
    hard: string
}

/**
 * GAMEMODE: BASE
 * Dictionary containing the global variable names for tracking ongoing game mode state.
 */
declare interface GAME_MODE_GLOBAL {
    /**
     * Has the match started. (true/false flag variable)
     */
    matchStarted: string
    /**
     * Has the match ended. (true/false flag variable)
     */
    matchEnded: string
}

/**
 * GAMEMODE: BASE
 * The game rule for the map system
 */
dec
lare interface GAME_RULE {
    /**
     * PVP
     */
    PVP: string
}

/**
 * GAMEMODE: BASE
 * Dictionary containing the global variable names for game rule values.
 */
declare interface GAME_RULE_NAMES {
    /**
     * How many teams are present in the game mode.
     */
    teamCount: string
    /**
     * Should BSharp automatically place HQs for teams that don't have one after some time since game start?
     */
    autoPlaceHqsOnTimer: string
    /**
     * Flag to indicate if we start the match when all teams have an HQ.
     */
    matchStartHQsBuilt: string
    /**
     * Flag to indicate if we end the match when only one HQ remains.
     */
    matchEndHQsLastStanding: string
    /**
     * Flag to indicate if campaign acts should be active.
     */
    campaignActsEnabled: string
    /**
     * campaignBasesEnabled
     */
    campaignBasesEnabled: string
    /**
     * Flag to indicate if invasion should be active.
     */
    invasionEnabled: string
    /**
     * campaignOnboardingEnabled
     */
    campaignOnboardingEnabled: string
    /**
     * GAME_MODE
     */
    GAME_MODE: string
}

/**
 * GAMEMODE: BASE
 * Global Onboarding Message Variables
 */
declare interface GlobalOnboardingVal {
    /**
     * isCampaignOnboardingMessageUp
     */
    isCampaignOnboardingMessageUp: string
    /**
     * isBasicsOnboardingMessageUp
     */
    isBasicsOnboardingMessageUp: string
}

/**
 * GAMEMODE: pvp
 *
 */
declare interface GRUDGE_STATE {
    /**
     * NONE
     */
    NONE: number
    /**
     * PLANNING
     */
    PLANNING: number
}

/**
 * GAMEMODE: BASE
 * All the roaming piglin spawners global variables
 */
declare interface GV_ROAMING_PIGLIN_SPAWNERS_CONTROL {
    /**
     * PACK_GRUNTER
     */
    PACK_GRUNTER: string
    /**
     * PACK_GRUNTER_DAY_NETHER
     */
    PACK_GRUNTER_DAY_NETHER: string
    /**
     * PACK_MEDIC
     */
    PACK_MEDIC: string
    /**
     * PACK_RUNT
     */
    PACK_RUNT: string
    /**
     * PACK_RUNT_DAY_NETHER
     */
    PACK_RUNT_DAY_NETHER: string
    /**
     * PACK_WARBOAR
     */
    PACK_WARBOAR: string
    /**
     * PACK_WARBOAR_DAY_NETHER
     */
    PACK_WARBOAR_DAY_NETHER: string
    /**
     * GROUP_BRUISER
     */
    GROUP_BRUISER: string
    /**
     * GROUP_BRUISER_DAY_NETHER
     */
    GROUP_BRUISER_DAY_NETHER: string
    /**
     * GROUP_GRENADIER
     */
    GROUP_GRENADIER: string
    /**
     * GROUP_GRENADIER_DAY_NETHER
     */
    GROUP_GRENADIER_DAY_NETHER: string
    /**
     * GROUP_SEEKER
     */
    GROUP_SEEKER: string
    /**
     * GROUP_SEEKER_DAY_NETHER
     */
    GROUP_SEEKER_DAY_NETHER: string
    /**
     * ARMY_WARBOAR
     */
    ARMY_WARBOAR: string
    /**
     * ARMY_WARBOAR_DAY_NETHER
     */
    ARMY_WARBOAR_DAY_NETHER: string
    /**
     * ARMY_RUNT
     */
    ARMY_RUNT: string
    /**
     * ARMY_RUNT_DAY_NETHER
     */
    ARMY_RUNT_DAY_NETHER: string
    /**
     * ARMY_GRUNTER
     */
    ARMY_GRUNTER: string
    /**
     * ARMY_GRUNTER_DAY_NETHER
     */
    ARMY_GRUNTER_DAY_NETHER: string
    /**
     * HORDE_PACK_BRUISER
     */
    HORDE_PACK_BRUISER: string
    /**
     * HORDE_PACK_BRUISER_DAY_NETHER
     */
    HORDE_PACK_BRUISER_DAY_NETHER: string
    /**
     * HORDE_PACK_GRENADIER
     */
    HORDE_PACK_GRENADIER: string
    /**
     * HORDE_PACK_GRENADIER_DAY_NETHER
     */
    HORDE_PACK_GRENADIER_DAY_NETHER: string
    /**
     * HORDE_PACK_SEEKER
     */
    HORDE_PACK_SEEKER: string
    /**
     * HORDE_PACK_SEEKER_DAY_NETHER
     */
    HORDE_PACK_SEEKER_DAY_NETHER: string
    /**
     * HORDE_PACK_WARBOAR
     */
    HORDE_PACK_WARBOAR: string
    /**
     * HORDE_PACK_WARBOAR_DAY_NETHER
     */
    HORDE_PACK_WARBOAR_DAY_NETHER: string
    /**
     * HORDE_PACK_RUNT
     */
    HORDE_PACK_RUNT: string
    /**
     * HORDE_PACK_RUNT_DAY_NETHER
     */
    HORDE_PACK_RUNT_DAY_NETHER: string
    /**
     * HORDE_PACK_GRUNTER
     */
    HORDE_PACK_GRUNTER: string
    /**
     * HORDE_PACK_GRUNTER_DAY_NETHER
     */
    HORDE_PACK_GRUNTER_DAY_NETHER: string
    /**
     * HORDE_PACK_PACK_PIGMADILO
     */
    HORDE_PACK_PACK_PIGMADILO: string
    /**
     * HORDE_PACK_PACK_PIGMADILO_DAY_NETHER
     */
    HORDE_PACK_PACK_PIGMADILO_DAY_NETHER: string
    /**
     * HORDE_PACK_PORTAL_GUARD
     */
    HORDE_PACK_PORTAL_GUARD: string
    /**
     * HORDE_PACK_PORTAL_GUARD_DAY_NETHER
     */
    HORDE_PACK_PORTAL_GUARD_DAY_NETHER: string
    /**
     * HORDE_PACK_ENGINEER
     */
    HORDE_PACK_ENGINEER: string
    /**
     * HORDE_PACK_ENGINEER_DAY_NETHER
     */
    HORDE_PACK_ENGINEER_DAY_NETHER: string
    /**
     * HORDE_PACK_PIGGO_LAUNCHER
     */
    HORDE_PACK_PIGGO_LAUNCHER: string
    /**
     * HORDE_PACK_PIGGO_LAUNCHER_DAY_NETHER
     */
    HORDE_PACK_PIGGO_LAUNCHER_DAY_NETHER: string
    /**
     * HORDE_DEFEND_MEDIC
     */
    HORDE_DEFEND_MEDIC: string
    /**
     * HORDE_ATTACK_MEDIC
     */
    HORDE_ATTACK_MEDIC: string
    /**
     * HORDE_OBSTACLE_MEDIC
     */
    HORDE_OBSTACLE_MEDIC: string
    /**
     * HORDE_DEFEND_MEDIC_DAY
     */
    HORDE_DEFEND_MEDIC_DAY: string
    /**
     * HORDE_ATTACK_MEDIC_DAY
     */
    HORDE_ATTACK_MEDIC_DAY: string
    /**
     * HORDE_OBSTACLE_MEDIC_DAY
     */
    HORDE_OBSTACLE_MEDIC_DAY: string
}

/**
 * GAMEMODE: BASE
 * Global variable of each mob alliance occupation
 */
declare interface GV_START_MOB_ALLIANCE_OCCUPATION {

}

/**
 * GAMEMODE: BASE
 * Valid options for the `LISTENFOR_HealthChanged` `direction` rule.
 */
declare interface HEALTH_DIRECTION {
    /**
     * DAMAGE
     */
    DAMAGE: number
    /**
     * HEAL
     */
    HEAL: number
}

/**
 * GAMEMODE: BASE
 * Valid options for the `LISTENFOR_HealthChanged` `triggerMode` rule.
 */
declare interface HEALTH_TRIGGER_MODE {
    /**
     * CROSS
     */
    CROSS: number
    /**
     * BELOW
     */
    BELOW: number
    /**
     * ABOVE
     */
    ABOVE: number
}

/**
 * GAMEMODE: BASE
 * Horde arrival world map keys.
 */
declare interface HORDE_ARRIVAL_MAP_KEYS {

}

/**
 * GAMEMODE: campaign
 * Horde-wise configuration for the initial bases that spawn at the start of Act 2.
 */
declare interface HordeBasesSetup {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface HordeBasesSetup_Hard {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface HordeBasesSetup_Normal {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface HordeBasesSetup_Peaceful {

}

/**
 * GAMEMODE: campaign
 * Configuration for staggered entry where conditions for each arrival is specified.
 */
declare interface HordeEntryConfig {
    /**
     * invasionStartAfterFirstEstablished
     */
    invasionStartAfterFirstEstablished: number
    /**
     * hordes
     */
    hordes: []
    /**
     * mobAlliances
     */
    mobAlliances: []
}

/**
 * GAMEMODE: campaign
 *
 */
declare interface HordeEntryConfig_Hard {
    /**
     * invasionStartAfterFirstEstablished
     */
    invasionStartAfterFirstEstablished: number
    /**
     * hordes
     */
    hordes: []
    /**
     * mobAlliances
     */
    mobAlliances: []
}

/**
 * GAMEMODE: campaign
 *
 */
declare interface HordeEntryConfig_Normal {
    /**
     * invasionStartAfterFirstEstablished
     */
    invasionStartAfterFirstEstablished: number
    /**
     * hordes
     */
    hordes: []
    /**
     * mobAlliances
     */
    mobAlliances: []
}

/**
 * GAMEMODE: campaign
 *
 */
declare interface HordeEntryConfig_Peaceful {
    /**
     * invasionStartAfterFirstEstablished
     */
    invasionStartAfterFirstEstablished: number
    /**
     * hordes
     */
    hordes: []
    /**
     * mobAlliances
     */
    mobAlliances: []
}

/**
 * GAMEMODE: campaign
 * HordeEstablishment
 */
declare interface HordeEstablishment {
    /**
     * gvCentralBaseId
     */
    gvCentralBaseId: boolean
    /**
     * gvSizeCount
     */
    gvSizeCount: boolean
    /**
     * gvDayEstablished
     */
    gvDayEstablished: boolean
    /**
     * gvPreGameRemaining
     */
    gvPreGameRemaining: boolean
    /**
     * SetSizeCount
     */
    SetSizeCount: boolean
    /**
     * GetSizeCount
     */
    GetSizeCount: boolean
    /**
     * DecrementSizeCount
     */
    DecrementSizeCount: boolean
    /**
     * IsEstablished
     */
    IsEstablished: boolean
    /**
     * IsCentralBaseEstablished
     */
    IsCentralBaseEstablished: boolean
    /**
     * GetCentralBaseID
     */
    GetCentralBaseID: boolean
    /**
     * SetCentralBaseID
     */
    SetCentralBaseID: boolean
    /**
     * GetPreGameRemaining
     */
    GetPreGameRemaining: boolean
    /**
     * SetPreGameRemaining
     */
    SetPreGameRemaining: boolean
    /**
     * DecrementPreGameRemaining
     */
    DecrementPreGameRemaining: boolean
    /**
     * GetHordes
     */
    GetHordes: boolean
    /**
     * GetNextBaseSizeToBuild
     */
    GetNextBaseSizeToBuild: boolean
}

/**
 * GAMEMODE: BASE
 * UI event names AND the UI visibility unlock resource.
 */
declare interface HUD_EVENT_NAME {
    /**
     * SONGBOOK_OPENED
     */
    SONGBOOK_OPENED: string
    /**
     * SONGBOOK_CLOSED
     */
    SONGBOOK_CLOSED: string
    /**
     * MAP_OPENED
     */
    MAP_OPENED: string
    /**
     * MAP_CLOSED
     */
    MAP_CLOSED: string
    /**
     * TOOLBAR_0
     */
    TOOLBAR_0: string
    /**
     * TOOLBAR_1
     */
    TOOLBAR_1: string
    /**
     * TOOLBAR_2
     */
    TOOLBAR_2: string
    /**
     * TOOLBAR_3
     */
    TOOLBAR_3: string
    /**
     * DYNAMIC
     */
    DYNAMIC: any
}

/**
 * GAMEMODE: BASE
 * Audio for invasion village attacks.
 */
declare interface INVASION_ATTACK_AUDIO {
    /**
     * PHASES
     */
    PHASES: any
}

/**
 * GAMEMODE: BASE
 * Valid WM3 values for key `INVASION_ATTACK_AUTO_RESOLVE`.
 */
declare interface INVASION_ATTACK_AUTO_RESOLVE {
    /**
     * DAMAGED
     */
    DAMAGED: string
    /**
     * UNDAMAGED
     */
    UNDAMAGED: string
}

/**
 * GAMEMODE: BASE
 * INVASION_ATTACK_RESULT
 */
declare interface INVASION_ATTACK_RESULT {
    /**
     * OBDESTROYED
     */
    OBDESTROYED: number
    /**
     * UNDAMAGED
     */
    UNDAMAGED: number
    /**
     * DAMAGED
     */
    DAMAGED: number
    /**
     * DESTROYED
     */
    DESTROYED: number
}

/**
 * GAMEMODE: BASE
 * Contains the actions for spawning invasions bases, so that the UI will know what kind of
 * base was created and what should be displayed as a result.
 */
declare interface INVASION_BASE_SPAWN_ACTION {
    /**
     * outpost
     */
    outpost: string
    /**
     * vanguard
     */
    vanguard: string
}

/**
 * GAMEMODE: BASE
 * Contains the variables for controlling the invasion state related to phases
 */
declare interface INVASION_PHASE_STATE {
    /**
     * MOB_ALLIANCES_COMPLETED_COUNT
     */
    MOB_ALLIANCES_COMPLETED_COUNT: string
    /**
     * TOWERS_COMPLETED_COUNT
     */
    TOWERS_COMPLETED_COUNT: string
    /**
     * ALLIES_COMPLETED_COUNT
     */
    ALLIES_COMPLETED_COUNT: string
    /**
     * MOUNTS_COMPLETED_COUNT
     */
    MOUNTS_COMPLETED_COUNT: string
    /**
     * WOF_UPGRADES_PRESENT_COUNT
     */
    WOF_UPGRADES_PRESENT_COUNT: string
    /**
     * BASES_DESTROYED_COUNT
     */
    BASES_DESTROYED_COUNT: string
    /**
     * ATTACK_HORDE_DESTROYED
     */
    ATTACK_HORDE_DESTROYED: string
    /**
     * DEFEND_HORDE_DESTROYED
     */
    DEFEND_HORDE_DESTROYED: string
    /**
     * OBSTACLE_HORDE_DESTROYED
     */
    OBSTACLE_HORDE_DESTROYED: string
}

/**
 * GAMEMODE: BASE
 * INVULNERABILITY_EFFECT
 */
declare interface INVULNERABILITY_EFFECT {
    /**
     * DEFAULT
     */
    DEFAULT: number
    /**
     * EFFECT_A
     */
    EFFECT_A: number
    /**
     * EFFECT_B
     */
    EFFECT_B: number
    /**
     * EFFECT_C
     */
    EFFECT_C: number
    /**
     * EFFECT_D
     */
    EFFECT_D: number
}

/**
 * GAMEMODE: BASE
 * Valid map values for `MAP_KEY.IS_DESTROYED`
 */
declare interface IS_DESTROYED {
    /**
     * TRUE
     */
    TRUE: string
}

/**
 * GAMEMODE: BASE
 * JOURNAL_UNLOCKS
 */
declare interface JOURNAL_UNLOCKS {
    /**
     * TREASURE_CHEST
     */
    TREASURE_CHEST: string
    /**
     * CAVALRY_GOLEM
     */
    CAVALRY_GOLEM: string
    /**
     * SUPPORT_GOLEM
     */
    SUPPORT_GOLEM: string
    /**
     * PLANK_GOLEM
     */
    PLANK_GOLEM: string
    /**
     * STONE_GOLEM
     */
    STONE_GOLEM: string
    /**
     * MOB_CREEPER
     */
    MOB_CREEPER: string
    /**
     * MOB_ZOMBIE
     */
    MOB_ZOMBIE: string
    /**
     * MOB_SKELETON
     */
    MOB_SKELETON: string
    /**
     * MOUNT_TIGER
     */
    MOUNT_TIGER: string
    /**
     * MOUNT_BEETLE
     */
    MOUNT_BEETLE: string
    /**
     * MOUNT_BIRD
     */
    MOUNT_BIRD: string
    /**
     * VILLAGE
     */
    VILLAGE: string
    /**
     * VINDICATOR
     */
    VINDICATOR: string
    /**
     * ALLY_FALLEN_WARRIOR
     */
    ALLY_FALLEN_WARRIOR: string
    /**
     * ALLY_SPAWNER
     */
    ALLY_SPAWNER: string
    /**
     * ALLY_SHIELD
     */
    ALLY_SHIELD: string
    /**
     * ALLY_SNIPER
     */
    ALLY_SNIPER: string
    /**
     * TOWER_BLAST
     */
    TOWER_BLAST: string
    /**
     * TOWER_STUN
     */
    TOWER_STUN: string
    /**
     * TOWER_FROST
     */
    TOWER_FROST: string
    /**
     * BUFF_SPEED_WEED
     */
    BUFF_SPEED_WEED: string
    /**
     * BUFF_BOUNCY_MUSHROOM
     */
    BUFF_BOUNCY_MUSHROOM: string
    /**
     * BUFF_REGEN_STONE
     */
    BUFF_REGEN_STONE: string
    /**
     * HAZARD_REDTHORN
     */
    HAZARD_REDTHORN: string
    /**
     * HAZARD_TAR_PIT
     */
    HAZARD_TAR_PIT: string
    /**
     * HAZARD_MUD_PIT
     */
    HAZARD_MUD_PIT: string
    /**
     * HAZARD_VENOM_VINES
     */
    HAZARD_VENOM_VINES: string
    /**
     * HAZARD_GEYSER
     */
    HAZARD_GEYSER: string
    /**
     * HORDE_ATTACK_FACTION
     */
    HORDE_ATTACK_FACTION: string
    /**
     * HORDE_DEFEND_FACTION
     */
    HORDE_DEFEND_FACTION: string
    /**
     * HORDE_OBSTACLE_FACTION
     */
    HORDE_OBSTACLE_FACTION: string
    /**
     * HORDE_ATTACK_BOSS
     */
    HORDE_ATTACK_BOSS: string
    /**
     * HORDE_DEFEND_BOSS
     */
    HORDE_DEFEND_BOSS: string
    /**
     * HORDE_OBSTACLE_BOSS
     */
    HORDE_OBSTACLE_BOSS: string
    /**
     * GREAT_HOG
     */
    GREAT_HOG: string
    /**
     * PIGLIN_INVASION
     */
    PIGLIN_INVASION: string
    /**
     * PIGLIN_CRATE
     */
    PIGLIN_CRATE: string
    /**
     * PIGLIN_UNIT_RUNT
     */
    PIGLIN_UNIT_RUNT: string
    /**
     * PIGLIN_UNIT_GRUNTER
     */
    PIGLIN_UNIT_GRUNTER: string
    /**
     * PIGLIN_UNIT_BRUISER
     */
    PIGLIN_UNIT_BRUISER: string
    /**
     * PIGLIN_UNIT_ENGINEER
     */
    PIGLIN_UNIT_ENGINEER: string
    /**
     * PIGLIN_UNIT_GRENADIER
     */
    PIGLIN_UNIT_GRENADIER: string
    /**
     * PIGLIN_UNIT_MEDIC
     */
    PIGLIN_UNIT_MEDIC: string
    /**
     * PIGLIN_UNIT_SEEKER
     */
    PIGLIN_UNIT_SEEKER: string
    /**
     * PIGLIN_UNIT_PIGMADILO
     */
    PIGLIN_UNIT_PIGMADILO: string
    /**
     * PIGLIN_UNIT_WARBOAR
     */
    PIGLIN_UNIT_WARBOAR: string
    /**
     * PIGLIN_UNIT_PORTALGUARD
     */
    PIGLIN_UNIT_PORTALGUARD: string
    /**
     * PIGLIN_UNIT_LAVALAUNCHER
     */
    PIGLIN_UNIT_LAVALAUNCHER: string
    /**
     * PIGLIN_STRUCTURE_NETHER_SPREADER
     */
    PIGLIN_STRUCTURE_NETHER_SPREADER: string
    /**
     * PIGLIN_STRUCTURE_PIGLIN_THROWER
     */
    PIGLIN_STRUCTURE_PIGLIN_THROWER: string
    /**
     * PIGLIN_STRUCTURE_LAVA_TOWER
     */
    PIGLIN_STRUCTURE_LAVA_TOWER: string
    /**
     * PIGLIN_STRUCTURE_KNOCKBACK_TOWER
     */
    PIGLIN_STRUCTURE_KNOCKBACK_TOWER: string
    /**
     * PIGLIN_STRUCTURE_ARROW_TOWER
     */
    PIGLIN_STRUCTURE_ARROW_TOWER: string
    /**
     * PIGLIN_STRUCTURE_BARRACKS
     */
    PIGLIN_STRUCTURE_BARRACKS: string
    /**
     * PIGLIN_STRUCTURE_SUPER_NETHER_SPREADER
     */
    PIGLIN_STRUCTURE_SUPER_NETHER_SPREADER: string
    /**
     * PIGLIN_STRUCTURE_RANGE_EXTENDER
     */
    PIGLIN_STRUCTURE_RANGE_EXTENDER: string
    /**
     * PIGLIN_STRUCTURE_REGENERATOR
     */
    PIGLIN_STRUCTURE_REGENERATOR: string
}

/**
 * GAMEMODE: challenge_pack_1_TimedBaseDestruction
 *
 */
declare interface LocksKeys {

}

/**
 * GAMEMODE: BASE
 * Loot override table names for entities. These correspond to the name defined on the entity, not the loot table ID.
 */
declare interface LOOT_OVERRIDE {
    /**
     * PIGLIN_ROAMING
     */
    PIGLIN_ROAMING: string
    /**
     * PIGLIN_OUTPOST
     */
    PIGLIN_OUTPOST: string
    /**
     * PIGLIN_VILLAGE_ATTACK
     */
    PIGLIN_VILLAGE_ATTACK: string
}

/**
 * GAMEMODE: BASE
 * LOOT_TYPE
 */
declare interface LOOT_TYPE {
    /**
     * treasureChest
     */
    treasureChest: number
    /**
     * piglinCrate
     */
    piglinCrate: number
    /**
     * treasureChestPvP
     */
    treasureChestPvP: number
}

/**
 * GAMEMODE: BASE
 * Base size
 */
declare interface MAP_BASE_SIZE {
    /**
     * SMALL
     */
    SMALL: string
    /**
     * MEDIUM
     */
    MEDIUM: string
    /**
     * LARGE
     */
    LARGE: string
    /**
     * OCCUPYING_CREEPER
     */
    OCCUPYING_CREEPER: string
    /**
     * OCCUPYING_SKELETON
     */
    OCCUPYING_SKELETON: string
    /**
     * OCCUPYING_ZOMBIE
     */
    OCCUPYING_ZOMBIE: string
    /**
     * ACT1_A
     */
    ACT1_A: string
    /**
     * ACT1_B
     */
    ACT1_B: string
    /**
     * ACT1_C
     */
    ACT1_C: string
    /**
     * ACT1_FIRST_SKIRMISH
     */
    ACT1_FIRST_SKIRMISH: string
    /**
     * ACT1_SECOND_SKIRMISH
     */
    ACT1_SECOND_SKIRMISH: string
    /**
     * BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE
     */
    BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE: string
    /**
     * FOB_SMALL
     */
    FOB_SMALL: string
    /**
     * FOB_MEDIUM
     */
    FOB_MEDIUM: string
    /**
     * FOB_LARGE
     */
    FOB_LARGE: string
}

/**
 * GAMEMODE: BASE
 * Map boss
 */
declare interface MAP_BOSS {
    /**
     * DEFEATED
     */
    DEFEATED: string
    /**
     * DARK_BEACON
     */
    DARK_BEACON: string
    /**
     * DEFEND_BOSS
     */
    DEFEND_BOSS: string
    /**
     * ATTACK_BOSS
     */
    ATTACK_BOSS: string
    /**
     * OBSTACLE_BOSS
     */
    OBSTACLE_BOSS: string
    /**
     * FINAL_BOSS
     */
    FINAL_BOSS: string
}

/**
 * GAMEMODE: BASE
 * Buildings ids used by the map system
 */
declare interface MAP_BUILDABLE_IDS {
    /**
     * TOWER_01
     */
    TOWER_01: string
    /**
     * TOWER_02
     */
    TOWER_02: string
    /**
     * TOWER_04
     */
    TOWER_04: string
    /**
     * PVP_HQ
     */
    PVP_HQ: string
}

/**
 * GAMEMODE: BASE
 * Map IDs used by the fast travel system.
 */
declare interface MAP_CAN_FAST_TRAVEL {
    /**
     * TRUE
     */
    TRUE: string
    /**
     * FALSE
     */
    FALSE: string
}

/**
 * GAMEMODE: BASE
 * The map categories
 */
declare interface MAP_CATEGORY {
    /**
     * FACTION
     */
    FACTION: string
    /**
     * PLAYER
     */
    PLAYER: string
    /**
     * BUILDABLE
     */
    BUILDABLE: string
    /**
     * MOB
     */
    MOB: string
}

/**
 * GAMEMODE: BASE
 * World map values for claimed area visibiliy.
 */
declare interface MAP_CLAIMED_AREA_VISIBILITY {
    /**
     * VISIBLE
     */
    VISIBLE: string
    /**
     * INVISIBLE
     */
    INVISIBLE: string
}

/**
 * GAMEMODE: BASE
 * List of the faction ids used by the map
 */
declare interface MAP_FACTION_IDS {
    /**
     * WELL_OF_FATE
     */
    WELL_OF_FATE: string
    /**
     * FACTION_DEFEND
     */
    FACTION_DEFEND: string
    /**
     * FACTION_ATTACK
     */
    FACTION_ATTACK: string
    /**
     * FACTION_OBSTACLE
     */
    FACTION_OBSTACLE: string
    /**
     * FACTION_DBB
     */
    FACTION_DBB: string
    /**
     * CULTURE_VILLAGER
     */
    CULTURE_VILLAGER: string
    /**
     * MOB_ALLIANCE_CREEPER
     */
    MOB_ALLIANCE_CREEPER: string
    /**
     * MOB_ALLIANCE_SKELETON
     */
    MOB_ALLIANCE_SKELETON: string
    /**
     * MOB_ALLIANCE_ZOMBIE
     */
    MOB_ALLIANCE_ZOMBIE: string
    /**
     * TOWER_01
     */
    TOWER_01: string
    /**
     * TOWER_02
     */
    TOWER_02: string
    /**
     * TOWER_04
     */
    TOWER_04: string
    /**
     * ALLY_01
     */
    ALLY_01: string
    /**
     * ALLY_02
     */
    ALLY_02: string
    /**
     * ALLY_04
     */
    ALLY_04: string
    /**
     * ALLY_05
     */
    ALLY_05: string
    /**
     * MOUNT_01
     */
    MOUNT_01: string
    /**
     * MOUNT_03
     */
    MOUNT_03: string
    /**
     * MOUNT_04
     */
    MOUNT_04: string
    /**
     * UNNATURAL_LANDMARK_01
     */
    UNNATURAL_LANDMARK_01: string
}

/**
 * GAMEMODE: BASE
 * The fast travel state of a village
 */
declare interface MAP_FAST_TRAVEL {
    /**
     * DISABLED
     */
    DISABLED: string
    /**
     * ENABLED
     */
    ENABLED: string
}

/**
 * GAMEMODE: BASE
 * World map values for horde arrival.
 */
declare interface MAP_HORDE_ARRIVAL {
    /**
     * FALSE
     */
    FALSE: string
    /**
     * TRUE
     */
    TRUE: string
}

/**
 * GAMEMODE: BASE
 * General map icon state
 */
declare interface MAP_ICON_STATE {
    /**
     * DEFAULT
     */
    DEFAULT: string
    /**
     * VISITED
     */
    VISITED: string
    /**
     * COMPLETED
     */
    COMPLETED: string
    /**
     * UNHURT
     */
    UNHURT: string
    /**
     * DAMAGED
     */
    DAMAGED: string
    /**
     * DESTROYED
     */
    DESTROYED: string
    /**
     * UNDER_ATTACK
     */
    UNDER_ATTACK: string
    /**
     * TARGETED
     */
    TARGETED: string
    /**
     * DISABLED
     */
    DISABLED: string
    /**
     * DISABLED_ACT1
     */
    DISABLED_ACT1: string
    /**
     * DAMAGED_ACT1
     */
    DAMAGED_ACT1: string
    /**
     * TARGTED_VA_ACT1
     */
    TARGTED_VA_ACT1: string
}

/**
 * GAMEMODE: BASE
 * Map invasion states
 */
declare interface MAP_INVASION {
    /**
     * VILLAGE_INVASION_DISABLED
     */
    VILLAGE_INVASION_DISABLED: string
    /**
     * VILLAGE_INVASION_ENABLED
     */
    VILLAGE_INVASION_ENABLED: string
    /**
     * NEW_VILLAGE_INVASION
     */
    NEW_VILLAGE_INVASION: string
    /**
     * OLD_VILLAGE_INVASION
     */
    OLD_VILLAGE_INVASION: string
    /**
     * NEW_INVASION_BASE
     */
    NEW_INVASION_BASE: string
    /**
     * BASE_EXPANDED
     */
    BASE_EXPANDED: string
    /**
     * BASE_UPGRADED
     */
    BASE_UPGRADED: string
}

/**
 * GAMEMODE: BASE
 * Valid WM3 values for key `MAP_INVASION_ACTIVE`
 */
declare interface MAP_INVASION_ACTIVE {
    /**
     * IS_ATTACKING
     */
    IS_ATTACKING: string
    /**
     * IS_BUILDING
     */
    IS_BUILDING: string
    /**
     * IS_UPGRADING
     */
    IS_UPGRADING: string
    /**
     * IS_UNDER_ATTACK
     */
    IS_UNDER_ATTACK: string
    /**
     * IS_OCCUPIED
     */
    IS_OCCUPIED: string
    /**
     * IS_BOSS_OCCUPATION
     */
    IS_BOSS_OCCUPATION: string
}

/**
 * GAMEMODE: BASE
 * Valid WM3 values for key `MAP_INVASION_ATTACK`
 */
declare interface MAP_INVASION_ATTACK {
    /**
     * ACTIVATED
     */
    ACTIVATED: string
    /**
     * ABANDONED
     */
    ABANDONED: string
}

/**
 * GAMEMODE: BASE
 * Valid WM3 values for key `MAP_INVASION_INTENTION`
 */
declare interface MAP_INVASION_INTENTION {
    /**
     * ATTACKING
     */
    ATTACKING: string
    /**
     * CLAIMING
     */
    CLAIMING: string
    /**
     * BUILDING
     */
    BUILDING: string
    /**
     * BUILDING_OUTPOST
     */
    BUILDING_OUTPOST: string
    /**
     * UPGRADING
     */
    UPGRADING: string
    /**
     * TARGETED
     */
    TARGETED: string
    /**
     * SAVED
     */
    SAVED: string
    /**
     * BOSS_OCCUPATION
     */
    BOSS_OCCUPATION: string
}

/**
 * GAMEMODE: BASE
 * Valid WM3 values for key `MAP_INVASION_RECAP`
 */
declare interface MAP_INVASION_RECAP {
    /**
     * ATTACK_FAILURE
     */
    ATTACK_FAILURE: string
    /**
     * ATTACK_SUCCESS
     */
    ATTACK_SUCCESS: string
    /**
     * BUILT_OFFENSIVE_OUTPOST
     */
    BUILT_OFFENSIVE_OUTPOST: string
    /**
     * BUILT_DEFENSIVE_OUTPOST
     */
    BUILT_DEFENSIVE_OUTPOST: string
    /**
     * BUILT_NEW_BASE
     */
    BUILT_NEW_BASE: string
    /**
     * UPGRADED
     */
    UPGRADED: string
    /**
     * OOPSED
     */
    OOPSED: string
    /**
     * CLAIMED_AREA
     */
    CLAIMED_AREA: string
}

/**
 * GAMEMODE: BASE
 * World map values for invasion special.
 */
declare interface MAP_INVASION_SPECIAL {
    /**
     * IS_NORMAL
     */
    IS_NORMAL: string
    /**
     * IS_BOSS
     */
    IS_BOSS: string
}

/**
 * GAMEMODE: BASE
 * Invasion map state
 */
declare interface MAP_INVASION_STATE {
    /**
     * ENABLED
     */
    ENABLED: string
    /**
     * DISABLED
     */
    DISABLED: string
}

/**
 * GAMEMODE: BASE
 * The keys used by the map system
 */
declare interface MAP_KEY {
    /**
     * MODE
     */
    MODE: string
    /**
     * ZOOM
     */
    ZOOM: string
    /**
     * SIZE
     */
    SIZE: string
    /**
     * STATE
     */
    STATE: string
    /**
     * VISIBILITY
     */
    VISIBILITY: string
    /**
     * TEAM
     */
    TEAM: string
    /**
     * GAME_RULE
     */
    GAME_RULE: string
    /**
     * FAST_TRAVEL
     */
    FAST_TRAVEL: string
    /**
     * BOSS
     */
    BOSS: string
    /**
     * INVASION_STATE
     */
    INVASION_STATE: string
    /**
     * INVASION_INTENTION
     */
    INVASION_INTENTION: string
    /**
     * INVASION_ACTIVE
     */
    INVASION_ACTIVE: string
    /**
     * INVASION_ATTACK
     */
    INVASION_ATTACK: string
    /**
     * INVASION_ATTACK_AUTO_RESOLVE
     */
    INVASION_ATTACK_AUTO_RESOLVE: string
    /**
     * INVASION_RECAP
     */
    INVASION_RECAP: string
    /**
     * INVASION_SPECIAL
     */
    INVASION_SPECIAL: string
    /**
     * PVP_UNDER_ATTACK
     */
    PVP_UNDER_ATTACK: string
    /**
     * IS_DESTROYED
     */
    IS_DESTROYED: string
    /**
     * DOTTED_LINE_TARGET
     */
    DOTTED_LINE_TARGET: string
    /**
     * PLAYER_ID
     */
    PLAYER_ID: string
    /**
     * MOB_ALLEGIANCE
     */
    MOB_ALLEGIANCE: string
    /**
     * ONBOARDING
     */
    ONBOARDING: string
    /**
     * TEAM_OUTLINES
     */
    TEAM_OUTLINES: string
    /**
     * CAN_FAST_TRAVEL
     */
    CAN_FAST_TRAVEL: string
    /**
     * PVP_VILLAGE_OWNERSHIP
     */
    PVP_VILLAGE_OWNERSHIP: string
    /**
     * ACT1_VILLAGE_STATE
     */
    ACT1_VILLAGE_STATE: string
    /**
     * MOUNT_WORLD_SPAWNER
     */
    MOUNT_WORLD_SPAWNER: string
    /**
     * VILLAGE_CHEST_STATE
     */
    VILLAGE_CHEST_STATE: string
    /**
     * VILLAGE_RESOURCE
     */
    VILLAGE_RESOURCE: string
    /**
     * VILLAGE_RESOURCE_VISIBILITY
     */
    VILLAGE_RESOURCE_VISIBILITY: string
    /**
     * VILLAGE_CULTURE_LEVEL
     */
    VILLAGE_CULTURE_LEVEL: string
    /**
     * BASE_LOOT
     */
    BASE_LOOT: string
    /**
     * ATTACKING_FACTION
     */
    ATTACKING_FACTION: string
    /**
     * STRENGTH
     */
    STRENGTH: string
    /**
     * CLAIMED_AREA_VISIBILITY
     */
    CLAIMED_AREA_VISIBILITY: string
    /**
     * ATTACK_HORDE_ARRIVED
     */
    ATTACK_HORDE_ARRIVED: string
    /**
     * DEFEND_HORDE_ARRIVED
     */
    DEFEND_HORDE_ARRIVED: string
    /**
     * OBSTACLE_HORDE_ARRIVED
     */
    OBSTACLE_HORDE_ARRIVED: string
    /**
     * PLAYER_DAMAGED_BASE
     */
    PLAYER_DAMAGED_BASE: string
}

/**
 * GAMEMODE: BASE
 * MAP_MOB_ALLEGIANCE
 */
declare interface MAP_MOB_ALLEGIANCE {
    /**
     * DISABLED
     */
    DISABLED: string
    /**
     * ENABLED
     */
    ENABLED: string
}

/**
 * GAMEMODE: BASE
 * The mob ids used by the map
 */
declare interface MAP_MOB_IDS {
    /**
     * ALLY_01
     */
    ALLY_01: string
    /**
     * ALLY_02
     */
    ALLY_02: string
    /**
     * ALLY_04
     */
    ALLY_04: string
    /**
     * ALLY_05
     */
    ALLY_05: string
}

/**
 * GAMEMODE: BASE
 * The map mode
 */
declare interface MAP_MODE {
    /**
     * NORMAL
     */
    NORMAL: string
    /**
     * FAST_TRAVEL
     */
    FAST_TRAVEL: string
}

/**
 * GAMEMODE: BASE
 * MAP_MOUNT_WORLD_SPAWNER - DISABLED/ENABLED
 */
declare interface MAP_MOUNT_WORLD_SPAWNER {
    /**
     * DISABLED
     */
    DISABLED: string
    /**
     * ENABLED
     */
    ENABLED: string
}

/**
 * GAMEMODE: BASE
 * MAP_ONBOARDING
 */
declare interface MAP_ONBOARDING {
    /**
     * DISABLED
     */
    DISABLED: string
    /**
     * ENABLED
     */
    ENABLED: string
}

/**
 * GAMEMODE: BASE
 * MAP_PLAYER_DAMAGED_BASE
 */
declare interface MAP_PLAYER_DAMAGED_BASE {
    /**
     * DAMAGED
     */
    DAMAGED: string
}

/**
 * GAMEMODE: BASE
 * Is a PvP structure under attack (Used on map icons)
 */
declare interface MAP_PVP_UNDER_ATTACK {
    /**
     * DISABLED
     */
    DISABLED: string
    /**
     * ENABLED
     */
    ENABLED: string
}

/**
 * GAMEMODE: BASE
 * List of teams used by the map
 */
declare interface MAP_TEAM {
    /**
     * NEUTRAL
     */
    NEUTRAL: string
    /**
     * WILD
     */
    WILD: string
    /**
     * BLUE
     */
    BLUE: string
    /**
     * TWO
     */
    TWO: string
    /**
     * RED
     */
    RED: string
    /**
     * ONE
     */
    ONE: string
    /**
     * PIGLIN
     */
    PIGLIN: string
}

/**
 * GAMEMODE: BASE
 * States for the village chests on a village
 */
declare interface MAP_VILLAGE_CHEST {
    /**
     * COLLECTED
     */
    COLLECTED: string
    /**
     * UNCOLLECTED
     */
    UNCOLLECTED: string
    /**
     * FULL
     */
    FULL: string
}

/**
 * GAMEMODE: BASE
 * The visibility state of a icon on the map
 */
declare interface MAP_VISIBILITY {
    /**
     * VISIBLE
     */
    VISIBLE: string
    /**
     * HIDDEN
     */
    HIDDEN: string
    /**
     * REVEALED
     */
    REVEALED: string
}

/**
 * GAMEMODE: BASE
 * The zoom of the map
 */
declare interface MAP_ZOOM {
    /**
     * DEFAULT
     */
    DEFAULT: string
}

/**
 * GAMEMODE: BASE
 * Variables to keep track of messaging
 */
declare interface MESSAGING_GLOBALS {
    /**
     * MOB_ALLIANCE_LOST
     */
    MOB_ALLIANCE_LOST: string
    /**
     * VILLAGE_LOST
     */
    VILLAGE_LOST: string
}

/**
 * GAMEMODE: BASE
 * Archetype for villagers/mobs
 */
declare interface MOB_ARCHETYPE {
    /**
     * ZOMBIE
     */
    ZOMBIE: string
    /**
     * CREEPER
     */
    CREEPER: string
    /**
     * SKELETON
     */
    SKELETON: string
    /**
     * VILLAGERS
     */
    VILLAGERS: string
    /**
     * ANIMALS
     */
    ANIMALS: []
}

/**
 * GAMEMODE: BASE
 * List with all the behaviours of each mob
 */
declare interface MOB_BEHAVIOUR_DICTIONARY {
    /**
     * creeper
     */
    creeper: any
    /**
     * skeleton
     */
    skeleton: any
    /**
     * zombie
     */
    zombie: any
}

/**
 * GAMEMODE: BASE
 * MOUNTS
 */
declare interface MOUNTS {
    /**
     * TIGER
     */
    TIGER: string
    /**
     * BEETLE
     */
    BEETLE: string
    /**
     * BIRD
     */
    BIRD: string
    /**
     * HORSE
     */
    HORSE: string
}

/**
 * GAMEMODE: Demo_MinecraftLive
 * Names of different AI configs for obstacle faction bases.
 */
declare interface ObstacleAI {
    /**
     * Siege
     */
    Siege: string
    /**
     * Assault
     */
    Assault: string
    /**
     * Guard
     */
    Guard: string
}

/**
 * GAMEMODE: Demo_MinecraftLive
 *
 */
declare interface ObstacleCompositions {
    /**
     * grunters
     */
    grunters: any
    /**
     * basicSeeker
     */
    basicSeeker: any
    /**
     * grunterPatrol
     */
    grunterPatrol: any
    /**
     * structureSquad
     */
    structureSquad: any
    /**
     * genadiers
     */
    genadiers: any
    /**
     * grenadierSquad
     */
    grenadierSquad: any
    /**
     * longrangeSiege
     */
    longrangeSiege: any
    /**
     * heavySquad
     */
    heavySquad: any
    /**
     * heavyPatrol
     */
    heavyPatrol: any
    /**
     * heavySiege
     */
    heavySiege: any
    /**
     * rotSquad
     */
    rotSquad: any
}

/**
 * GAMEMODE: Demo_MinecraftLive
 *
 */
declare interface ObstacleDiscreteEncounters {
    /**
     * sporeSpread
     */
    sporeSpread: any
    /**
     * sporeBlocakde
     */
    sporeBlocakde: any
    /**
     * seekingVengeance
     */
    seekingVengeance: any
    /**
     * noCannonForYou
     */
    noCannonForYou: any
    /**
     * gruntersEverywhere
     */
    gruntersEverywhere: any
    /**
     * grenadierGuards
     */
    grenadierGuards: any
    /**
     * comeAndTakeIt
     */
    comeAndTakeIt: any
    /**
     * pain
     */
    pain: any
    /**
     * sporeGrowth
     */
    sporeGrowth: any
    /**
     * sporeCannons
     */
    sporeCannons: any
    /**
     * hornsFromAbove
     */
    hornsFromAbove: any
    /**
     * highGround
     */
    highGround: any
    /**
     * sporeScore
     */
    sporeScore: any
    /**
     * greanadierNether
     */
    greanadierNether: any
}

/**
 * GAMEMODE: BASE
 * List of height cards for obstacle faction plateaus as defined in costs_piglin_obstacle.json
 */
declare interface ObstacleHeight {
    /**
     * Flatten
     */
    Flatten: string
    /**
     * H1
     */
    H1: string
    /**
     * H2
     */
    H2: string
    /**
     * H3
     */
    H3: string
    /**
     * H4
     */
    H4: string
    /**
     * H5
     */
    H5: string
    /**
     * H6
     */
    H6: string
    /**
     * H7
     */
    H7: string
    /**
     * H8
     */
    H8: string
    /**
     * H9
     */
    H9: string
    /**
     * H10
     */
    H10: string
    /**
     * H11
     */
    H11: string
    /**
     * H12
     */
    H12: string
    /**
     * H13
     */
    H13: string
    /**
     * H14
     */
    H14: string
    /**
     * H15
     */
    H15: string
    /**
     * H16
     */
    H16: string
    /**
     * H17
     */
    H17: string
    /**
     * H18
     */
    H18: string
    /**
     * H19
     */
    H19: string
    /**
     * H20
     */
    H20: string
    /**
     * H21
     */
    H21: string
    /**
     * H22
     */
    H22: string
    /**
     * H23
     */
    H23: string
    /**
     * H24
     */
    H24: string
    /**
     * H26
     */
    H26: string
    /**
     * H28
     */
    H28: string
    /**
     * H29
     */
    H29: string
    /**
     * H30
     */
    H30: string
    /**
     * H32
     */
    H32: string
    /**
     * H34
     */
    H34: string
    /**
     * H36
     */
    H36: string
    /**
     * H38
     */
    H38: string
    /**
     * H40
     */
    H40: string
    /**
     * H42
     */
    H42: string
    /**
     * H44
     */
    H44: string
    /**
     * H46
     */
    H46: string
    /**
     * H48
     */
    H48: string
    /**
     * H50
     */
    H50: string
    /**
     * H52
     */
    H52: string
    /**
     * H54
     */
    H54: string
}

/**
 * GAMEMODE: BASE
 * ONBOARDING_GLOBALS
 */
declare interface ONBOARDING_GLOBALS {
    /**
     * ONBOARDING_ENABLED
     */
    ONBOARDING_ENABLED: string
    /**
     * INITIAL_ONBOARDING_COMPLETE
     */
    INITIAL_ONBOARDING_COMPLETE: string
    /**
     * WELL_OF_FATE_ONBOARDING_ACTIVE
     */
    WELL_OF_FATE_ONBOARDING_ACTIVE: string
    /**
     * START_INVASION_GAMEPLAY
     */
    START_INVASION_GAMEPLAY: string
    /**
     * START_VILLAGE_PLAN_ATTACK
     */
    START_VILLAGE_PLAN_ATTACK: string
    /**
     * START_VILLAGE_PLAN_ATTACK_2
     */
    START_VILLAGE_PLAN_ATTACK_2: string
    /**
     * START_VILLAGE_DESTROYED
     */
    START_VILLAGE_DESTROYED: string
    /**
     * START_VILLAGE_OCCUPIED
     */
    START_VILLAGE_OCCUPIED: string
    /**
     * VILLAGE_DESTROYED_REBUILT
     */
    VILLAGE_DESTROYED_REBUILT: string
    /**
     * VILLAGE_CHEST_OPENED
     */
    VILLAGE_CHEST_OPENED: string
    /**
     * MOB_OCCUPATION_DEFEATED
     */
    MOB_OCCUPATION_DEFEATED: string
    /**
     * START_PLACED_SPAWNER
     */
    START_PLACED_SPAWNER: string
    /**
     * START_MOB_ALLIANCE_LOST
     */
    START_MOB_ALLIANCE_LOST: string
    /**
     * MOB_ALLIANCE_LOST_RECOVERED
     */
    MOB_ALLIANCE_LOST_RECOVERED: string
    /**
     * ARMED_VILLAGERS
     */
    ARMED_VILLAGERS: string
}

/**
 * GAMEMODE: BASE
 * Outpost Level
 */
declare interface OUTPOST_LEVEL {
    /**
     * LIGHT
     */
    LIGHT: string
    /**
     * MEDIUM
     */
    MEDIUM: string
    /**
     * HEAVY
     */
    HEAVY: string
}

/**
 * GAMEMODE: campaign
 *
 */
declare interface OutpostToMobAlliancesMinDistanceConfiguration {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface OutpostToOtherVillagesMinDistanceConfiguration {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface OutpostToOutpostMinDistanceConfiguration {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface OutpostToVillagerVillagesMinDistanceConfiguration {

}

/**
 * GAMEMODE: BASE
 * Entity archetypes for piglin units
 */
declare interface PIGLIN_ARCHETYPE {
    /**
     * MEDIC
     */
    MEDIC: string
    /**
     * ENGINEER
     */
    ENGINEER: string
    /**
     * RUNT
     */
    RUNT: string
    /**
     * GRUNTER
     */
    GRUNTER: string
    /**
     * WARBOAR
     */
    WARBOAR: string
    /**
     * SEEKER
     */
    SEEKER: string
    /**
     * BRUISER
     */
    BRUISER: string
    /**
     * GRENADIER
     */
    GRENADIER: string
    /**
     * PIGMADILO
     */
    PIGMADILO: string
    /**
     * PORTAL_GUARD
     */
    PORTAL_GUARD: string
    /**
     * LAVA_LAUNCHER
     */
    LAVA_LAUNCHER: string
}

/**
 * GAMEMODE: BASE
 * PIGLIN_BASE_ELEMENTS
 */
declare interface PIGLIN_BASE_ELEMENTS {
    /**
     * RAISED_PLATFORM
     */
    RAISED_PLATFORM: string
}

/**
 * GAMEMODE: campaign
 * Maps the act1 village's slots to the 'camp' placement slots for piglins to spawn.
 */
declare interface PIGLIN_CAMP_PLACEMENT_NAME_MAP {

}

/**
 * GAMEMODE: BASE
 * Crate data for campaign.
 */
declare interface PIGLIN_CRATE_CAMPAIGN_DATA {
    /**
     * globalIndex
     */
    globalIndex: string
    /**
     * messagePrefix
     */
    messagePrefix: string
    /**
     * telemetryType
     */
    telemetryType: string
    /**
     * telemetrySubcategory
     */
    telemetrySubcategory: any
    /**
     * chooseRandom
     */
    chooseRandom: boolean
    /**
     * isWeighted
     */
    isWeighted: boolean
    /**
     * useAvailabilityRestrictions
     */
    useAvailabilityRestrictions: boolean
    /**
     * rewardTable
     */
    rewardTable: []
    /**
     * rewardTableUncapped
     */
    rewardTableUncapped: []
}

/**
 * GAMEMODE: BASE
 * PIGLIN_CRATE_CAMPAIGN_DATA_HARD
 */
declare interface PIGLIN_CRATE_CAMPAIGN_DATA_HARD {
    /**
     * rewardTable
     */
    rewardTable: []
    /**
     * rewardTableUncapped
     */
    rewardTableUncapped: []
}

/**
 * GAMEMODE: BASE
 *
 */
declare interface PIGLIN_CRATE_CAMPAIGN_DATA_NORMAL {
    /**
     * rewardTable
     */
    rewardTable: []
    /**
     * rewardTableUncapped
     */
    rewardTableUncapped: []
}

/**
 * GAMEMODE: BASE
 * PIGLIN_CRATE_CAMPAIGN_DATA_PEACEFUL
 */
declare interface PIGLIN_CRATE_CAMPAIGN_DATA_PEACEFUL {
    /**
     * rewardTable
     */
    rewardTable: []
    /**
     * rewardTableUncapped
     */
    rewardTableUncapped: []
}

/**
 * GAMEMODE: BASE
 *
 */
declare interface PIGLIN_TAG_LOOKUP {

}

/**
 * GAMEMODE: campaign
 *
 */
declare interface PiglinBaseDamageFXConfig {
    /**
     * daysActive
     */
    daysActive: number
}

/**
 * GAMEMODE: pvp
 *
 */
declare interface PiglinPVPData {
    /**
     * numOutposts
     */
    numOutposts: number
}

/**
 * GAMEMODE: campaign
 * Constants for placement names defined by world-gen
 */
declare interface PLACEMENT_NAME {
    /**
     * FOREST_VILLAGE
     */
    FOREST_VILLAGE: string
    /**
     * FROSTLANDS_VILLAGE
     */
    FROSTLANDS_VILLAGE: string
    /**
     * DRYLANDS_VILLAGE
     */
    DRYLANDS_VILLAGE: string
    /**
     * WETLANDS_VILLAGE
     */
    WETLANDS_VILLAGE: string
    /**
     * GRASSLANDS_VILLAGE
     */
    GRASSLANDS_VILLAGE: string
    /**
     * CREEPER_ALLIANCE
     */
    CREEPER_ALLIANCE: string
    /**
     * SKELETON_ALLIANCE
     */
    SKELETON_ALLIANCE: string
    /**
     * ZOMBIE_ALLIANCE
     */
    ZOMBIE_ALLIANCE: string
}

/**
 * GAMEMODE: campaign
 * PLACEMENT_NAME_MAP
 */
declare interface PLACEMENT_NAME_MAP {

}

/**
 * GAMEMODE: pvp
 *
 */
declare interface PLAYER_TEAMS {

}

/**
 * GAMEMODE: BASE
 * POI_WAYPOINT_ICON_DICTIONARY
 */
declare interface POI_WAYPOINT_ICON_DICTIONARY {

}

/**
 * GAMEMODE: BASE
 * poi waypoint icon state
 */
declare interface POI_WAYPOINT_ICON_STATE {
    /**
     * HIDDEN
     */
    HIDDEN: string
    /**
     * VISIBLE
     */
    VISIBLE: string
    /**
     * REVEALED
     */
    REVEALED: string
}

/**
 * GAMEMODE: BASE
 * RALLY LAUNCH CONTEXT
 */
declare interface RALLY_LAUNCH_CONTEXT {
    /**
     * PLAYER_STRUCTURE
     */
    PLAYER_STRUCTURE: any
    /**
     * PIGLIN_BUILD
     */
    PIGLIN_BUILD: any
    /**
     * PIGLIN_DAMAGE
     */
    PIGLIN_DAMAGE: any
}

/**
 * GAMEMODE: campaign
 * Attack faction sieger barracks config for helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface SiegerBarracksConfig_AttackFaction {
    /**
     * name
     */
    name: any
    /**
     * wofBase
     */
    wofBase: any
    /**
     * act1_a
     */
    act1_a: any
    /**
     * act1_c
     */
    act1_c: any
}

/**
 * GAMEMODE: campaign
 * Attack faction sieger barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface SiegerBarracksConfig_AttackFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * boss
     */
    boss: any
}

/**
 * GAMEMODE: campaign
 * SiegerBarracksConfig_DBBFaction
 */
declare interface SiegerBarracksConfig_DBBFaction {
    /**
     * name
     */
    name: any
    /**
     * act1_a
     */
    act1_a: any
    /**
     * act1_b
     */
    act1_b: any
    /**
     * act1_c
     */
    act1_c: any
    /**
     * darkBeacon
     */
    darkBeacon: any
    /**
     * piglin_act1_non_portal_attack_base
     */
    piglin_act1_non_portal_attack_base: any
}

/**
 * GAMEMODE: campaign
 * Defend faction sieger barracks config for helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface SiegerBarracksConfig_DefendFaction {
    /**
     * name
     */
    name: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * frontlineA
     */
    frontlineA: any
}

/**
 * GAMEMODE: Demo_Gamescom
 * Defend faction sieger barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface SiegerBarracksConfig_DefendFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * boss
     */
    boss: any
}

/**
 * GAMEMODE: campaign
 * Obstacle faction sieger barracks config for helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface SiegerBarracksConfig_ObstacleFaction {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
}

/**
 * GAMEMODE: campaign
 * Obstacle faction sieger barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface SiegerBarracksConfig_ObstacleFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * boss
     */
    boss: any
}

/**
 * GAMEMODE: campaign
 * SiegerBarracksConfig_WOFFaction
 */
declare interface SiegerBarracksConfig_WOFFaction {
    /**
     * name
     */
    name: any
    /**
     * wofBase
     */
    wofBase: any
}

/**
 * GAMEMODE: BASE
 * Names for World-Gen Slots.
 */
declare interface SLOT {
    /**
     * BASE
     */
    BASE: string
    /**
     * OB_MA_ZOMBIE
     */
    OB_MA_ZOMBIE: string
    /**
     * OB_MA_SKELETON
     */
    OB_MA_SKELETON: string
    /**
     * OB_MA_CREEPER
     */
    OB_MA_CREEPER: string
}

/**
 * GAMEMODE: campaign
 * Attack faction specialist barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface SpecialistBarracksConfig_AttackFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
    /**
     * boss
     */
    boss: any
}

/**
 * GAMEMODE: Demo_Gamescom
 * Defend faction specialist barracks config for village variations, used by helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface SpecialistBarracksConfig_DefendFaction_Variations {
    /**
     * name
     */
    name: any
    /**
     * frontlineA
     */
    frontlineA: any
    /**
     * small
     */
    small: any
    /**
     * medium
     */
    medium: any
    /**
     * large
     */
    large: any
}

/**
 * GAMEMODE: BASE
 * Status effect IDs.
 */
declare interface STATUS_EFFECT {
    /**
     * FEARED
     */
    FEARED: string
    /**
     * CLEANSE
     */
    CLEANSE: string
}

/**
 * GAMEMODE: BASE
 * Acceptable values for the `team_outlines` map key.
 */
declare interface TEAM_OUTLINES {
    /**
     * DISABLED
     */
    DISABLED: string
    /**
     * ENABLED
     */
    ENABLED: string
}

/**
 * GAMEMODE: BASE
 * List of telemetry action types for buildings.
 */
declare interface TELEMETRY_ACTION_TYPE {
    /**
     * CONSTRUCT
     */
    CONSTRUCT: string
    /**
     * DECONSTRUCT
     */
    DECONSTRUCT: string
    /**
     * DESTROYED
     */
    DESTROYED: string
}

/**
 * GAMEMODE: BASE
 * TELEMETRY_CAMPAIGN_PROGRESS
 */
declare interface TELEMETRY_CAMPAIGN_PROGRESS {
    /**
     * MOUNT_PROGRESS
     */
    MOUNT_PROGRESS: any
    /**
     * TOWER_PROGRESS
     */
    TOWER_PROGRESS: any
    /**
     * POI_ALLY_PROGRESS
     */
    POI_ALLY_PROGRESS: any
    /**
     * MOB_ALLIANCE_PROGRESS
     */
    MOB_ALLIANCE_PROGRESS: any
    /**
     * PIGLIN_BASE_PROGRESS
     */
    PIGLIN_BASE_PROGRESS: any
    /**
     * PIGLIN_OUTPOST_PROGRESS
     */
    PIGLIN_OUTPOST_PROGRESS: any
    /**
     * WELL_OF_FATE_VISITS_PROGRESS
     */
    WELL_OF_FATE_VISITS_PROGRESS: any
    /**
     * WELL_OF_FATE_UPGRADES_PROGRESS
     */
    WELL_OF_FATE_UPGRADES_PROGRESS: any
    /**
     * VILLAGE_CHEST_OPENS_PROGRESS
     */
    VILLAGE_CHEST_OPENS_PROGRESS: any
    /**
     * FAST_TRAVEL_PROGRESS
     */
    FAST_TRAVEL_PROGRESS: any
    /**
     * DAY_NIGHT_CYCLE_PROGRESS
     */
    DAY_NIGHT_CYCLE_PROGRESS: any
    /**
     * VILLAGE_OCCUPIED_PROGRESS
     */
    VILLAGE_OCCUPIED_PROGRESS: any
    /**
     * VILLAGE_CLEARED_PROGRESS
     */
    VILLAGE_CLEARED_PROGRESS: any
    /**
     * MOB_ALLIANCE_OCCUPIED_PROGRESS
     */
    MOB_ALLIANCE_OCCUPIED_PROGRESS: any
    /**
     * MOB_ALLIANCE_CLEARED_PROGRESS
     */
    MOB_ALLIANCE_CLEARED_PROGRESS: any
    /**
     * SPAWNER_PLACED_PROGRESS
     */
    SPAWNER_PLACED_PROGRESS: any
    /**
     * SPAWNER_INTERACT_SPAWN_PROGRESS
     */
    SPAWNER_INTERACT_SPAWN_PROGRESS: any
    /**
     * SPAWNER_INTERACT_REMOVE_PROGRESS
     */
    SPAWNER_INTERACT_REMOVE_PROGRESS: any
}

/**
 * GAMEMODE: BASE
 * List of telemetry categories. Anyone can freely add/remove categories here.
 */
declare interface TELEMETRY_CATEGORIES {
    /**
     * POI_LOOT
     */
    POI_LOOT: string
    /**
     * POI_TOWER
     */
    POI_TOWER: string
    /**
     * FUNNEL
     */
    FUNNEL: string
    /**
     * KEY_ACTION_COMPLETED
     */
    KEY_ACTION_COMPLETED: string
    /**
     * CAMPAIGN_PROGRESS
     */
    CAMPAIGN_PROGRESS: string
    /**
     * INVASION_BREAK_STARTED
     */
    INVASION_BREAK_STARTED: string
    /**
     * INVASION_BREAK_ENDED
     */
    INVASION_BREAK_ENDED: string
    /**
     * INVASION_ATTACK_CONCLUDED
     */
    INVASION_ATTACK_CONCLUDED: string
}

/**
 * GAMEMODE: BASE
 * Telemetry dictionary specifically for the MountFunnel event.
 */
declare interface TELEMETRY_FUNNEL_STEP {
    /**
     * MOUNT
     */
    MOUNT: any
}

/**
 * GAMEMODE: BASE
 * reusable names for telemetry gameact to keep things consistent
 */
declare interface TELEMETRY_GAMEACT_IDS {
    /**
     * ACT1A
     */
    ACT1A: number
    /**
     * ACT1B
     */
    ACT1B: number
    /**
     * ACT2
     */
    ACT2: number
    /**
     * ACT3A
     */
    ACT3A: number
    /**
     * ACT3B
     */
    ACT3B: number
    /**
     * EPILOGUE
     */
    EPILOGUE: number
}

/**
 * GAMEMODE: BASE
 * Telemetry for invasion.
 */
declare interface TELEMETRY_INVASION {
    /**
     * GV_INVASION_BREAK_ACTIVE
     */
    GV_INVASION_BREAK_ACTIVE: string
}

/**
 * GAMEMODE: BASE
 * TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES
 */
declare interface TELEMETRY_KEY_ACTION_COMPLETED_CATEGORIES {
    /**
     * POI_ALLY_01
     */
    POI_ALLY_01: string
    /**
     * POI_ALLY_02
     */
    POI_ALLY_02: string
    /**
     * POI_ALLY_04
     */
    POI_ALLY_04: string
    /**
     * POI_ALLY_05
     */
    POI_ALLY_05: string
}

/**
 * GAMEMODE: BASE
 * Names of mob alliances for telemetry use.
 */
declare interface TELEMETRY_MOB_ALLIANCE_NAMES {
    /**
     * creeper
     */
    creeper: string
    /**
     * skeleton
     */
    skeleton: string
    /**
     * zombie
     */
    zombie: string
    /**
     * mount01
     */
    mount01: string
    /**
     * mount01Lure
     */
    mount01Lure: string
    /**
     * mount03
     */
    mount03: string
    /**
     * mount03Lure
     */
    mount03Lure: string
    /**
     * mount04
     */
    mount04: string
    /**
     * mount04Lure
     */
    mount04Lure: string
    /**
     * ally01
     */
    ally01: string
    /**
     * ally01Piece01
     */
    ally01Piece01: string
    /**
     * ally01Piece02
     */
    ally01Piece02: string
    /**
     * ally02
     */
    ally02: string
    /**
     * ally02Piece01
     */
    ally02Piece01: string
    /**
     * ally04
     */
    ally04: string
    /**
     * ally04Piece01
     */
    ally04Piece01: string
    /**
     * ally05
     */
    ally05: string
    /**
     * ally05Piece01
     */
    ally05Piece01: string
    /**
     * tower01
     */
    tower01: string
    /**
     * tower02
     */
    tower02: string
    /**
     * tower04
     */
    tower04: string
}

/**
 * GAMEMODE: BASE
 * Valid onboarding step names for telemetry
 */
declare interface TELEMETRY_ONBOARDING_CATEGORIES {
    /**
     * GATHERING
     */
    GATHERING: string
    /**
     * LEAVE_WELL_OF_FATE
     */
    LEAVE_WELL_OF_FATE: string
    /**
     * FIND_VILLAGE_UNDER_ATTACK
     */
    FIND_VILLAGE_UNDER_ATTACK: string
    /**
     * FIRST_VILLAGE_UNDER_ATTACK
     */
    FIRST_VILLAGE_UNDER_ATTACK: string
    /**
     * REPAIR_FOUNTAIN
     */
    REPAIR_FOUNTAIN: string
    /**
     * FIND_SECOND_VILLAGE
     */
    FIND_SECOND_VILLAGE: string
    /**
     * FREE_SECOND_VILLAGE
     */
    FREE_SECOND_VILLAGE: string
    /**
     * BUILD_DEFENSES_IN_SECOND_VILLAGE
     */
    BUILD_DEFENSES_IN_SECOND_VILLAGE: string
    /**
     * FIRST_SKIRMISH
     */
    FIRST_SKIRMISH: string
    /**
     * THREE_PIGLIN_CAMPS
     */
    THREE_PIGLIN_CAMPS: string
    /**
     * WOF_UPGRADE
     */
    WOF_UPGRADE: string
    /**
     * SECOND_SKIRMISH
     */
    SECOND_SKIRMISH: string
    /**
     * DESTROY_DBB
     */
    DESTROY_DBB: string
    /**
     * MENU
     */
    MENU: string
    /**
     * SPAWN_FIRST_GOLEM
     */
    SPAWN_FIRST_GOLEM: string
    /**
     * SPAWN_SECOND_GOLEM
     */
    SPAWN_SECOND_GOLEM: string
    /**
     * LURE
     */
    LURE: string
    /**
     * UNLURE
     */
    UNLURE: string
    /**
     * DIRECT
     */
    DIRECT: string
    /**
     * WORLDMAP
     */
    WORLDMAP: string
    /**
     * RESOURCE_DROP
     */
    RESOURCE_DROP: string
    /**
     * FIND_FIRST_BASE
     */
    FIND_FIRST_BASE: string
    /**
     * FIND_SECOND_BASE
     */
    FIND_SECOND_BASE: string
    /**
     * FIND_DBB
     */
    FIND_DBB: string
    /**
     * DESTROY_FIRST_BASE
     */
    DESTROY_FIRST_BASE: string
    /**
     * DESTROY_SECOND_BASE
     */
    DESTROY_SECOND_BASE: string
}

/**
 * GAMEMODE: BASE
 * List of telemetry subcategories. Anyone can freely add/remove categories here.
 */
declare interface TELEMETRY_SUBCATEGORIES {
    /**
     * PIGLIN_CRATE
     */
    PIGLIN_CRATE: string
    /**
     * TREASURE_CHEST
     */
    TREASURE_CHEST: string
    /**
     * VILLAGE_CHEST
     */
    VILLAGE_CHEST: string
    /**
     * KNOCKBACK_TOWER
     */
    KNOCKBACK_TOWER: string
    /**
     * FREEZE_TOWER
     */
    FREEZE_TOWER: string
    /**
     * STUN_TOWER
     */
    STUN_TOWER: string
}

/**
 * GAMEMODE: BASE
 * Keys that identify textures on placement slots.
 */
declare interface TEXTURE_KEYS {
    /**
     * PRIMARY
     */
    PRIMARY: string
    /**
     * OB_BIOME
     */
    OB_BIOME: string
}

/**
 * GAMEMODE: challenge_pack_2_TimedDefense
 *
 */
declare interface TimerConfig {
    /**
     * defenseTime
     */
    defenseTime: number
}

/**
 * GAMEMODE: BASE
 * Campaign treasure chest data
 */
declare interface TREASURE_CHEST_CAMPAIGN_DATA {
    /**
     * globalIndex
     */
    globalIndex: string
    /**
     * messagePrefix
     */
    messagePrefix: string
    /**
     * telemetryType
     */
    telemetryType: string
    /**
     * telemetrySubcategory
     */
    telemetrySubcategory: any
    /**
     * chooseRandom
     */
    chooseRandom: boolean
    /**
     * isWeighted
     */
    isWeighted: boolean
    /**
     * useAvailabilityRestrictions
     */
    useAvailabilityRestrictions: boolean
    /**
     * phaseMultiplier
     */
    phaseMultiplier: []
    /**
     * rewardTable
     */
    rewardTable: []
    /**
     * rewardTableUncapped
     */
    rewardTableUncapped: []
}

/**
 * GAMEMODE: BASE
 * TREASURE_CHEST_CAMPAIGN_DATA_HARD
 */
declare interface TREASURE_CHEST_CAMPAIGN_DATA_HARD {
    /**
     * phaseMultiplier
     */
    phaseMultiplier: []
    /**
     * rewardTable
     */
    rewardTable: []
    /**
     * rewardTableUncapped
     */
    rewardTableUncapped: []
}

/**
 * GAMEMODE: BASE
 *
 */
declare interface TREASURE_CHEST_CAMPAIGN_DATA_NORMAL {
    /**
     * phaseMultiplier
     */
    phaseMultiplier: []
    /**
     * rewardTable
     */
    rewardTable: []
    /**
     * rewardTableUncapped
     */
    rewardTableUncapped: []
}

/**
 * GAMEMODE: BASE
 * TREASURE_CHEST_CAMPAIGN_DATA_PEACEFUL
 */
declare interface TREASURE_CHEST_CAMPAIGN_DATA_PEACEFUL {
    /**
     * phaseMultiplier
     */
    phaseMultiplier: []
    /**
     * rewardTable
     */
    rewardTable: []
    /**
     * rewardTableUncapped
     */
    rewardTableUncapped: []
}

/**
 * GAMEMODE: BASE
 * PvP treasure chest data
 */
declare interface TREASURE_CHEST_PVP_DATA {
    /**
     * globalIndex
     */
    globalIndex: string
    /**
     * messagePrefix
     */
    messagePrefix: string
    /**
     * telemetryType
     */
    telemetryType: string
    /**
     * telemetrySubcategory
     */
    telemetrySubcategory: any
    /**
     * chooseRandom
     */
    chooseRandom: boolean
    /**
     * useAvailabilityRestrictions
     */
    useAvailabilityRestrictions: boolean
    /**
     * rewardTable
     */
    rewardTable: []
    /**
     * rewardTableUncapped
     */
    rewardTableUncapped: []
}

/**
 * GAMEMODE: challenge_pack_1_TimedBaseDestruction
 * Trigger volume event. Used for `SetupPiglinBase()`
 */
declare interface TV_EVENT {
    /**
     * ENTER
     */
    ENTER: number
    /**
     * EXIT
     */
    EXIT: number
}

/**
 * GAMEMODE: challenge_pack_1_TimedBaseDestruction
 * Trigger volume type. Used for `SetupPiglinBase()`
 */
declare interface TV_TYPE {
    /**
     * BOUNDS
     */
    BOUNDS: number
    /**
     * AREA
     */
    AREA: number
}

/**
 * GAMEMODE: BASE
 * VILLAGE_BEHAVIOR entities
 */
declare interface VILLAGE_BEHAVIOR {
    /**
     * villager
     */
    villager: any
    /**
     * illager
     */
    illager: any
}

/**
 * GAMEMODE: BASE
 * VILLAGE_TEMP_BEHAVIOR_STATE states
 */
declare interface VILLAGE_TEMP_BEHAVIOR_STATE {
    /**
     * HEAVY_SCARED
     */
    HEAVY_SCARED: string
    /**
     * SCARED
     */
    SCARED: string
    /**
     * GREET
     */
    GREET: string
    /**
     * HEAVY_CHEER
     */
    HEAVY_CHEER: string
    /**
     * CHEER
     */
    CHEER: string
}

/**
 * GAMEMODE: campaign
 * Final faction vindicator barracks config for helper functions in `aaaa_piglin_base_helpers.js`
 */
declare interface VindicatorBarracksConfig_wofFaction {
    /**
     * name
     */
    name: any
    /**
     * wofBase
     */
    wofBase: any
}

/**
 * GAMEMODE: witch_dlc
 * `JOURNAL_UNLOCKS` keys for the Witch DLC for TU2.
 */
declare interface WITCH_DLC_JOURNAL_UNLOCKS {
    /**
     * Journal unlock key for the witch in the songbook.
     */
    MOB_WITCH: string
}
