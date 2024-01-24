/* eslint-disable @typescript-eslint/no-unused-vars */

/* NOTE: 
        When naming things categorically, please name them with the most specific descriptor at the end.
        Eg. DEFEND_FACTION_NAME ==> bad , FACTION_NAME_DEFEND ==> good
 */

// We are passing callback as a snippet name directly, and not as an int anymore
const CALLBACK_NONE = ""

const INVALID_ENTITY = -1
const INVALID_INVASION_ID = -1

const EMPTY_CARD = "empty"

const WELL_OF_FATE = "faction.player.well"

const FACTION_NAME_DEFEND = "faction.pig.defend"
const FACTION_NAME_ATTACK = "faction.pig.attack"
const FACTION_NAME_OBSTACLE = "faction.pig.obstacle"
const FACTION_NAME_FROST = "faction.pig.frost"
const FACTION_NAME_ROAMING = "faction.pig.roaming"
const FACTION_NAME_DBB = "faction.pig.dbb"
const FACTION_NAME_WOF = "faction.pig.wof"
const FACTION_PIGLINS = [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST]
const HORDE_PIGLINS_ALL = [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST, FACTION_NAME_DBB, FACTION_NAME_WOF]
const FACTION_PIGLINS_ALL = [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST, FACTION_NAME_DBB, FACTION_NAME_WOF]

const CULTURE_NAME_VILLAGERS = "faction.cul.001"

const MOB_ALLIANCE_NAME_CREEPER = "faction.mob.alliance.creeper"
const MOB_ALLIANCE_NAME_SKELETON = "faction.mob.alliance.skeleton"
const MOB_ALLIANCE_NAME_SPIDER = "faction.mob.alliance.spider"
const MOB_ALLIANCE_NAME_ZOMBIE = "faction.mob.alliance.zombie"

const FACTION_MOB_ALLIANCES = [MOB_ALLIANCE_NAME_CREEPER, MOB_ALLIANCE_NAME_SKELETON, MOB_ALLIANCE_NAME_ZOMBIE]

const MOB_ALLIANCE_NAME_CREEPER_PIGLINS = "faction.mob.alliance.piglin.creeper"
const MOB_ALLIANCE_NAME_SKELETON_PIGLINS = "faction.mob.alliance.piglin.skeleton"
const MOB_ALLIANCE_NAME_SPIDER_PIGLINS = "faction.mob.alliance.piglin.spider"
const MOB_ALLIANCE_NAME_ZOMBIE_PIGLINS = "faction.mob.alliance.piglin.zombie"

const POI_TOWER_NAME_KNOCKBACK = "faction.poi.tower_01"
const POI_TOWER_NAME_FREEZE = "faction.poi.tower_02"
const POI_TOWER_NAME_STUN = "faction.poi.tower_04"
const POI_TOWER_NAME_BURN = "faction.poi.tower_05"

const FACTION_POI_TOWERS = [POI_TOWER_NAME_KNOCKBACK, POI_TOWER_NAME_FREEZE, POI_TOWER_NAME_STUN, POI_TOWER_NAME_BURN]

const POI_NAME_MOUNT_01 = "faction.poi.mount.01"
const POI_NAME_MOUNT_03 = "faction.poi.mount.03"
const POI_NAME_MOUNT_04 = "faction.poi.mount.04"
const POI_NAME_MOUNT_06 = "faction.poi.mount.06"
const POI_NAME_MOUNT_07 = "faction.poi.mount.07"

const FACTION_POI_MOUNTS = [POI_NAME_MOUNT_01, POI_NAME_MOUNT_03, POI_NAME_MOUNT_04, POI_NAME_MOUNT_06, POI_NAME_MOUNT_07]

const POI_NAME_ALLY_01 = "faction.poi.ally.01"
const POI_NAME_ALLY_02 = "faction.poi.ally.02"
const POI_NAME_ALLY_04 = "faction.poi.ally.04"
const POI_NAME_ALLY_05 = "faction.poi.ally.05"
const POI_NAME_ALLY_06 = "faction.poi.ally.06"

const FACTION_POI_ALLIES = [POI_NAME_ALLY_01, POI_NAME_ALLY_02, POI_NAME_ALLY_04, POI_NAME_ALLY_05, POI_NAME_ALLY_06]

const POI_NAME_LEGEND_DRAGON_RED = "faction.poi.legend.dragon.red"

const FACTION_POI_ALL = [POI_TOWER_NAME_KNOCKBACK, POI_TOWER_NAME_FREEZE, POI_TOWER_NAME_STUN, POI_TOWER_NAME_BURN, POI_NAME_MOUNT_01, POI_NAME_MOUNT_03, POI_NAME_MOUNT_04, POI_NAME_MOUNT_06, POI_NAME_MOUNT_07, POI_NAME_ALLY_01, POI_NAME_ALLY_02, POI_NAME_ALLY_04, POI_NAME_ALLY_05, POI_NAME_ALLY_06, POI_NAME_LEGEND_DRAGON_RED]

const MOB_ALLIANCE_IDS = ["creeper", "skeleton", "zombie", "spider"]

const TEAM_WILD = "wild_team"
const TEAM_BLUE = "team_two"
const TEAM_RED = "team_one"
const TEAM_ORANGE = "piglin_team"
const TEAM_MOB_ALLIANCE = "mob_alliance"
const TEAM_NONE = ""

const ALLIANCE_FRIENDLY = "friendly"
const ALLIANCE_ENEMY = "enemy"
const ALLIANCE_ANY_TEAM = "any_team"
const ALLIANCE_PATCH_ALL = "" // specifically for patching when the alliance rule doesn't matter

const TICKET_BUILD = "build"
const TICKET_GATHER = "gather"
const TICKET_SPAWN = "spawn"

const SPAWNER_NO_CAP = -1

const VILLAGE_SIZE_DEFAULT = "small"
const VILLAGE_SIZE_PLAYER = "player_outpost"

const BASE_SIZE_SMALL = "small"
const BASE_SIZE_MEDIUM = "medium"
const BASE_SIZE_LARGE = "large"
const BASE_SIZE_BOSS = "boss"
const BASE_SIZE_DARK_BEACON = "darkBeacon"
const BASE_SIZE_ACT_1_A = "act1_a"
const BASE_SIZE_ACT_1_B = "act1_b"
const BASE_SIZE_ACT_1_C = "act1_c"
const BASE_SIZE_OUTPOST = "frontlineA"
const BASE_SIZE_VANGUARD = "vanguardA" // deprecated
const BASE_SIZE_FOB_SMALL = "fobSmall"
const BASE_SIZE_FOB_MEDIUM = "fobMedium"
const BASE_SIZE_FOB_LARGE = "fobLarge"
const BASE_SIZE_PIGLIN_WOF = "wofBase"
const BASE_SIZE_PIGLIN_ZOMBIE = "piglin_occupying_zombie_mob_alliance"
const BASE_SIZE_PIGLIN_CREEPER = "piglin_occupying_creeper_mob_alliance"
const BASE_SIZE_PIGLIN_SKELETON = "piglin_occupying_skeleton_mob_alliance"
const BASE_SIZE_PIGLIN_SPIDER = "piglin_occupying_spider_mob_alliance"
const BASE_SIZE_ACT1_FIRST_SKIRMISH = "piglin_act1_first_skirmish"
const BASE_SIZE_ACT1_SECOND_SKIRMISH = "piglin_act1_second_skirmish"
const BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE = "piglin_act1_non_portal_attack_base"

const BASE_SIZE_ALL_PORTALS = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE]
const BASE_SIZE_ALL_PORTALS_AND_OUTPOST = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE, BASE_SIZE_OUTPOST]
const BASE_SIZE_ALL_PORTALS_AND_BOSS = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE, BASE_SIZE_BOSS]
const BASE_SIZE_ALL = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE, BASE_SIZE_BOSS, BASE_SIZE_OUTPOST]
const BASE_SIZE_ALL_FOBS = [BASE_SIZE_FOB_SMALL, BASE_SIZE_FOB_MEDIUM, BASE_SIZE_FOB_LARGE]
const BASE_SIZE_ALL_VILLAGES = [VILLAGE_SIZE_DEFAULT]
const BASE_SIZE_ALL_PORTALS_AND_BOSS_AND_MOB = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE, BASE_SIZE_BOSS, BASE_SIZE_PIGLIN_CREEPER, BASE_SIZE_PIGLIN_SKELETON, BASE_SIZE_PIGLIN_SPIDER, BASE_SIZE_PIGLIN_ZOMBIE]

const NORTH = "north"
const SOUTH = "south"
const WEST = "west"
const EAST = "east"

const BASE_STINGER_RANGE = 300
const NEARBY_PLAYER_RANGE = 300

const INVASION_BASE_SPAWN_ACTION = {
    outpost: "frontline",
    vanguard: "vanguard"
}

const POI_NAME_TOWER_KNOCKBACK = "tower_001"
const POI_NAME_TOWER_FREEZE = "tower_002"
const POI_NAME_TOWER_STUN = "tower_004"
const POI_NAME_TOWER_BURN = "tower_005"

// These seem very redundant, and should just use the actual mob alliance faction names.
const TELEMETRY_MOB_ALLIANCE_NAMES = {
    creeper: "creeper_mob_alliance",
    skeleton: "skeleton_mob_alliance",
    spider: "spider_mob_alliance",
    zombie: "zombie_mob_alliance",
    mount01: "mount_001",
    mount01Lure: "mount_001_lure",
    mount03: "mount_003",
    mount03Lure: "mount_003_lure",
    mount04: "mount_004",
    mount04Lure: "mount_004_lure",
    mount06: "mount_006",
    mount06Lure: "mount_006_lure",
    mount07: "mount_007",
    mount07Lure: "mount_007_lure",
    ally01: "ally_001",
    ally01Piece01: "ally_001_piece_001",
    ally01Piece02: "ally_001_piece_002",
    ally02: "ally_002",
    ally02Piece01: "ally_002_piece_001",
    ally04: "ally_004",
    ally04Piece01: "ally_004_piece_001",
    ally05: "ally_005",
    ally05Piece01: "ally_005_piece_001",
    ally06: "ally_006",
    ally06Piece01: "ally_006_piece_001",
    legendDragonRed: "legend_001",
    tower01: "tower_001",
    tower02: "tower_002",
    tower04: "tower_004",
    tower05: "tower_005"
}

const PIGLIN_BASE_ELEMENTS = {
    RAISED_PLATFORM: "raised_platform"
}

const INSTANT_BUILD_DECK_NAME = "iB"
const TICKET_BUILD_DECK_NAME = "tB"
const POI_CARD_LIBRARY_NAME = "poi_cards"
const POI_BUILD_DECK_NAME = "poi_build_deck"
const INVASION_DECK_NAME = "invasionDeck"
const DECK_NAME_BIOMESET_INSIDE = "inside_biome_deck"
const DECK_NAME_BIOMESET_OUTSIDE = "outside_biome_deck"
const CARD_LIBRARY_BIOMESET = "biomesets"
const CARD_LIBRARY_BIOMESET_RINGS = "biomeset_rings"
const VARIATION_DECK_LIBRARY_NAME = "baseVariationCardLibrary"

// Corresponds to the name AND tag of barracks (eg. spawner_piglin_barracks_specialist.json)
const BARRACKS_NAME_DISRUPTOR = "spawner_piglin_barracks_disruptor"
const BARRACKS_NAME_FIGHTER = "spawner_piglin_barracks_fighter"
const BARRACKS_NAME_SIEGER = "spawner_piglin_barracks_sieger"
const BARRACKS_NAME_SPECIALIST = "spawner_piglin_barracks_specialist"
//TODO: Engineer barracks need to be removed
const BARRACKS_NAME_ENGINEER = "badger:spawner_piglin_barracks_disruptor"
const BARRACKS_NAME_CREEPER = "spawner_db_ally_creeper"
const BARRACKS_NAME_SKELETON = "spawner_db_ally_skeleton"
const BARRACKS_NAME_SPIDER = "spawner_db_ally_spider"
const BARRACKS_NAME_ZOMBIE = "spawner_db_ally_zombie"
const BARRACKS_NAME_ALLIES = "spawner_db_ally_zombie"
const BARRACKS_NAME_VINDICATORS = "spawner_fb_ally_vindicator"

const CULTURE_THRESHOLDS = [750, 1500, 3500, 6000, 10000]

// TODO : should probably make some sets of likely pairings,
//   eg. BIOME_SET_DRYLANDS = [BIOME_NAME_DRYLANDS, BIOME_NAME_DRYLANDS_HOODOO_LARGE, BIOME_NAME_DRYLANDS_HOODOO_MEDIUM,
//                              BIOME_NAME_DRYLANDS_HOODOO_SMALL]
const BIOME_NAME_BEACH = "beach"
const BIOME_NAME_DESERT = "desert"
const BIOME_NAME_DESERT_HILLS = "desert_hills"
const BIOME_NAME_DRYLANDS = "drylands"
const BIOME_NAME_DRYLANDS_HOODOO_LARGE = "drylands_hoodoo_large"
const BIOME_NAME_DRYLANDS_HOODOO_MEDIUM = "drylands_hoodoo_medium"
const BIOME_NAME_DRYLANDS_HOODOO_SMALL = "drylands_hoodoo_small"
const BIOME_NAME_EXTREME_HILLS = "mountain_parent_valleys"
const BIOME_NAME_EXTREME_HILLS_EDGE = "extreme_hills_edge"
const BIOME_NAME_EXTREME_HILLS_MEGA = "extreme_hills_mega"
const BIOME_NAME_EXTREME_HILLS_PLUS_TREES = "extreme_hills_plus_trees"
const BIOME_NAME_FATEFUL_LAND = "fateful_land"
const BIOME_NAME_FOREST = "forest"
const BIOME_NAME_FOREST_HILLS = "forest_hills"
const BIOME_NAME_FROSTLANDS = "frostlands"
const BIOME_NAME_FROZEN_RIVER = "frozen_river"
const BIOME_NAME_GRASSLANDS = "grasslands"
const BIOME_NAME_GRASSLANDS_RIVER = "grasslands_river"
const BIOME_NAME_GRASSLANDS_SHORE = "grasslands_shore"
const BIOME_NAME_ICE_MOUNTAINS = "ice_mountains"
const BIOME_NAME_ICE_PLAINS = "ice_plains"
const BIOME_NAME_ICE_PLAINS_SPIKES = "ice_plains_spikes"
const BIOME_NAME_JUNGLE = "jungle"
const BIOME_NAME_JUNGLE_EDGE = "jungle_edge"
const BIOME_NAME_JUNGLE_HILLS = "jungle_hills"
const BIOME_NAME_MESA = "mesa"
const BIOME_NAME_MESA_BRYCE = "mesa_bryce"
const BIOME_NAME_OUTBOUNDS_DESERT = "outbounds_desert"
const BIOME_NAME_OUTBOUNDS_ICE = "outbounds_ice"
const BIOME_NAME_OUTBOUNDS_MOUNTAINS = "outbounds_mountains"
const BIOME_NAME_OUTBOUNDS_OCEAN = "outbounds_ocean"
const BIOME_NAME_RIVER = "river"
const BIOME_NAME_SWAMPLAND = "wetlands"
const BIOME_NAME_WETLANDS = "wetlands"
const MOIST_BIOMES_LIST = [BIOME_NAME_BEACH, BIOME_NAME_RIVER, BIOME_NAME_OUTBOUNDS_OCEAN, BIOME_NAME_FATEFUL_LAND]

const ELEVATION_MIN = 0
const ELEVATION_SEA = 63
const ELEVATION_CLOUD = 127
const ELEVATION_MAX = 255

const BSHARP_PLACEMENT = {
    requireAll: -1,
    maxDistance: -1
}

const HEALTH_TRIGGER_MODE = {
    CROSS: 0,
    BELOW: 1,
    ABOVE: 2
}

const HEALTH_DIRECTION = {
    DAMAGE: 0,
    HEAL: 1
}

const TIME_INVASION_RESOLUTION = 0.7
const TIME_DAWN = 0.75
const TIME_NOON = 0.0
const TIME_DUSK = 0.25
const TIME_MIDNIGHT = 0.5

// Sort the array right away because we will only use it in the sorted fashion
const TIME_LANDMARKS = [TIME_INVASION_RESOLUTION, TIME_DAWN, TIME_NOON, TIME_DUSK, TIME_MIDNIGHT]
TIME_LANDMARKS.sort()

const TIME_ONBOARDING_FIRST_SLOT = 0.8
const TIME_ONBOARDING_SECOND_SLOT = 1
const TIME_ONBOARDING_THIRD_SLOT = 0.1
const TIME_ONBOARDING_FOURTH_SLOT = 0.15

const SKY_STATE_TWO_SUNS = "sky_twosuns"
const SKY_STATE_DARK_SUN = "sky_darksun"
const SKY_STATE_WOF_BATTLE = "sky_finalbattle"
const SKY_STATE_SUN_MOON = "sky_sunmoon"
const SKY_STATE_WELL_OF_FATE = "sky_welloffate"
const SKY_STATE_ALL = [SKY_STATE_TWO_SUNS, SKY_STATE_DARK_SUN, SKY_STATE_SUN_MOON, SKY_STATE_WOF_BATTLE, SKY_STATE_WELL_OF_FATE]

//TODO : Should we be defining all common tags in the global space?
const TAG_PLAYER = "player"
const TAG_MOB = "mob"
const TAG_ROAMING = "roamingAG" // is this tag even accurate?
const TAG_HQ = "hq"
const TAG_BARRACKS = "barracks"
const TAG_WELL_OF_FATE = "zoner_xp_well_of_fate"
const TAG_BUILDABLE = "buildable_structure"
const TAG_BOSS_VILLAGE = "isBossBase"
const TAG_DO_NOT_ATTACK = "donotattack"
const TAG_VISITED_VILLAGE = "visited_village"
const TAG_MOB_ALLIANCE_ALLIED = "alliedMobAlliance"
const TAG_MOB_ALLEGIANCE_STRUCTURE = "totem_unlock_mob_alliance"
const TAG_OUTPOST_STRUCTURE = "outpost"
const TAG_VILLAGE_FOUNTAIN = "fountain"
const TAG_PORTAL_OB = "obPortal"
const TAG_PORTAL_PIGLIN = "portal_piglin"
const TAG_HOUSE = "house"
const TAG_DISABLED = "disabled"
const TAG_HAMMER_BOSS = "hammerBoss"

const TAGS_PIGLIN_MOB = ["piglin", "mob"]
const TAGS_PIGLIN_PROJECTILE_SPAWN = ["piglin", "projectile_spawn"]

// eslint-disable-next-line prettier/prettier
const TAGSET_PLAYER_OR_MOB = [
    { include: [TAG_PLAYER], exclude: [], alliance: ALLIANCE_ENEMY },
    { include: ["mob"], exclude: ["piglin", "animal", "world_mob"], alliance: ALLIANCE_ENEMY }
]
const TAGSET_PLAYER = [{ include: [TAG_PLAYER], exclude: [], alliance: ALLIANCE_ENEMY }]

const TAGSET_PLAYER_MOB_OR_SPAWNER = [
    { include: [TAG_PLAYER], exclude: [], alliance: ALLIANCE_ENEMY },
    { include: ["mob"], exclude: ["piglin", "animal", "world_mob"], alliance: ALLIANCE_ENEMY },
    { include: ["player_buildable", "spawner"], exclude: [], alliance: ALLIANCE_ENEMY }
]

const TAGSET_PLAYER_BRIDGE = [{ include: ["playerBridge"], exclude: [], alliance: ALLIANCE_ENEMY }]

const TAG_INACTIVE_VILLAGE = "inactiveVillage"

/* -------------------------------------------------------------------------- */
/*                                   AI Tags                                  */
/* -------------------------------------------------------------------------- */

const DEFEND_SIEGE_AI = {
    TAG: "defendSiegeAi",
    RALLY_POINT: "defendHordeSiegeAiRally",
    CG_0: "defendHordeSiege0",
    CG_1: "defendHordeSiege1"
}

const DEFEND_DEFEND_AI = {
    TAG: "defendHordeDefendAi",
    RALLY_POINT: "defendHordeDefendAiRally",
    CG_0: "defendHordeDefend0",
    CG_1: "defendHordeDefend1"
}

const DEFEND_UNIQUE_AI = {
    TAG: "defendOffensiveAi",
    RALLY_POINT: "defendHordeUniqueAiRally",
    CG_0: "defendHordeUnique0",
    CG_1: "defendHordeUnique1"
}

const TAGS_AI_CONTROL_GROUPS = [DEFEND_SIEGE_AI.CG_0, DEFEND_SIEGE_AI.CG_1, DEFEND_DEFEND_AI.CG_0, DEFEND_DEFEND_AI.CG_1, DEFEND_UNIQUE_AI.CG_0, DEFEND_UNIQUE_AI.CG_1]

const GAMEMODE_CAMPAIGN = "campaign"
const GAMEMODE_CAMPAIGN_CUSTOM = "campaign_custom"
const GAMEMODE_ONBOARDING = "onboarding"
const GAMEMODE_PVP = "conquest"
const GAMEMODE_PVP_CUSTOM = "conquest_custom"
const GAMEMODE_CREATIVE = "creative"
const GAMEMODE_EDITOR = "editor"

const INSTANCE_SPREADER_SPAWN_LOCATION = "spreaderspawnposition"
const INSTANCE_LARGE_PORTAL_SPAWN_LOCATION = "instance_locator_portal_large_spawn_point"
const INSTANCE_BOSS_PORTAL_SPAWN_LOCATION = "instance_locator_boss_spawn_point"

const PLACEMENT_RANDOM = "placeRandomly"
const PLACEMENT_FAR_FROM_VILLAGE_START = "placeFarFromVillageStart"
const PLACEMENT_CLOSE_TO_VILLAGE_START = "placeCloseToVillageStart"
const PLACEMENT_CLOSE_TO_DISTRICT_START = "closeToDistrictStart"
const PLACEMENT_CLOSE_TO_WALLS = "placeCloseToWalls"
const PLACEMENT_WITHOUT_SPACING = "placeWithoutSpacing"
const PLACEMENT_CONNECT_TO_PATH = "connectToPath"
const PLACEMENT_OUTSIDE_VILLAGE = "placeOutsideVillage"

// Random number generator groups.
const RANDOM_GROUP_ATTACK_HORDE = "random_group_attack_horde"
const RANDOM_GROUP_DEFEND_HORDE = "random_group_defend_horde"
const RANDOM_GROUP_OBSTACLE_HORDE = "random_group_obstacle_horde"
const RANDOM_GROUP_FROST_HORDE = "random_group_frost_horde"
const RANDOM_GROUP_DBB_HORDE = "random_group_dbb_horde"
const RANDOM_GROUP_WOF_HORDE = "random_group_wof_horde"
const RANDOM_GROUP_VILLAGER = "random_group_villager"
const RANDOM_GROUP_INVASION = "random_group_invasion"
const RANDOM_GROUP_MOB_OCCUPATION = "random_group_mob_occupation"

const BUILDING_APPEARANCE_OVERRIDE_ATTACK_HORDE = "appearance_override_attack_horde"
const BUILDING_APPEARANCE_OVERRIDE_DEFEND_HORDE = "appearance_override_defend_horde"
const BUILDING_APPEARANCE_OVERRIDE_OBSTACLE_HORDE = "appearance_override_obstacle_horde"
const BUILDING_APPEARANCE_OVERRIDE_FROST_HORDE = "appearance_override_frost_horde"
const BUILDING_APPEARANCE_OVERRIDE_DBB_HORDE = "appearance_override_dbb_horde"
const BUILDING_APPEARANCE_OVERRIDE_WOF_HORDE = "appearance_override_wof_horde"

const STATUS_EFFECT = {
    FEARED: "feared",
    CLEANSE: "cleanse"
}

const INVULNERABILITY_EFFECT = {
    DEFAULT: 0,
    EFFECT_A: 0,
    EFFECT_B: 1,
    EFFECT_C: 2,
    EFFECT_D: 3
}

const LOOT_OVERRIDE = {
    PIGLIN_ROAMING: "roaming",
    PIGLIN_OUTPOST: "outpost",
    PIGLIN_VILLAGE_ATTACK: "village_attack"
}

const EXIT_REASON_LEAVE = 1
const EXIT_REASON_DESTROYED = 2

const LOG_LEVEL_VERBOSE = 0
const LOG_LEVEL_INFO = 1
const LOG_LEVEL_WARNING = 2
const LOG_LEVEL_ERROR = 3

const GAME_DIFFICULTY = {
    peaceful: "Peaceful",
    easy: "Easy",
    normal: "Normal",
    hard: "Hard",
    custom: "Custom"
}

const GAME_DIFFICULTY_PROGRESSION = [GAME_DIFFICULTY.peaceful, GAME_DIFFICULTY.easy, GAME_DIFFICULTY.normal, GAME_DIFFICULTY.hard, GAME_DIFFICULTY.custom]
const GV_FIRST_LOAD_GAME_DIFFICULTY = "gv_first_load_game_difficulty"

const GAME_MODE_GLOBAL = {
    matchStarted: "gv_game_match_started",
    matchEnded: "gv_game_match_ended"
}

const GAME_RULE_NAMES = {
    teamCount: "teamcount",
    autoPlaceHqsOnTimer: "autoplacehqsontimer",
    matchStartHQsBuilt: "matchstartbyhqsbuilt",
    matchEndHQsLastStanding: "matchendbylasthqstanding",
    campaignActsEnabled: "campaignactsenabled",
    campaignBasesEnabled: "campaignbasesenabled",
    invasionEnabled: "invasionenabled",
    campaignOnboardingEnabled: "onboardingenabledcampaign",
    GAME_MODE: "gamemode"
}

const GV_ATTACK_HORDE_BOSS_HEALTH = "gv_attack_horde_boss_health"
const GV_ATTACK_HORDE_BOSS_ATTACK_PLANNED = "gv_attack_horde_boss_attack_planned"
const GV_ATTACK_HORDE_BOSS_ATTACK_ACTIVE_ID = "gv_attack_horde_boss_attack_active_id"

const GV_SNIPER_ALLY_MISSING_PIECE_FOUND = "gv_sniper_ally_missing_piece_found"
const GV_AMOUNT_OF_LOOT_OPENED_FOR_SNIPER_ALLY_MISSING_PIECE = "gv_amount_of_loot_opened_for_sniper_ally_missing_piece"

const GV_PIGLIN_PORTAL_DAMAGED_VO_DEBOUNCE = "gv_piglin_portal_damaged_vo_debounce"
const PIGLIN_PORTAL_DAMGED_VO_DEBOUNCE_TIME = 180

//If this variable names needs to change. Make sure to ping Mark Toledo or anyone on the Builds/Tools team
const GV_TELEMETRY_GAMEACT = "gv_telemetry_gameact"
const GV_TELEMETRY_LOCAL_TIMER_VALUE = "gv_telemetry_local_timer_value"

const GV_STARTED_ACT_1_B = "gv_started_act_1_b"
const GV_STARTED_ACT_2 = "gv_started_act_2"
const GV_STARTED_ACT_3_A = "gv_started_act_3_a"
const GV_STARTED_ACT_3_B = "gv_started_act_3_b"
const GV_STARTED_EPILOGUE = "gv_started_epilogue"
const GV_ACT_1_BASES_DESTROYED = "gv_act_1_amount_of_bases_destroyed"
const GV_DB_REINFORCEMENTS_STARTED = "gv_db_reinforcements_started"
const GV_SUPER_NETHER_SPREADERS_KILLED = "gv_super_nether_spreaders_killed"
const GV_INVASION_OPENING_NIGHT = "gv_invasion_first_night"
const GV_DBB_VARIANT = "gb_dbb_variant"
const GV_START_MOB_ALLIANCE_OCCUPATION = {
    [MOB_ALLIANCE_NAME_CREEPER]: "gv_start_creeper_occupation",
    [MOB_ALLIANCE_NAME_SKELETON]: "gv_start_skeleton_occupation",
    [MOB_ALLIANCE_NAME_SPIDER]: "gv_start_spider_occupation",
    [MOB_ALLIANCE_NAME_ZOMBIE]: "gv_start_zombie_occupation"
}

const GV_REESCALATION_RESET_TIME = "gv_reescalation_reset_time"

const GV_PIGLIN_BASE_FIRST_NON_SMALL_ENCOUNTER = "gv_piglin_base_first_non_small_encounter"

const GV_VILLAGE_DAMAGED = "gv_player_damaged"

const VILLAGE_TIMER_REESCALATION = "village_timer_reescalation"

const ACTS = {
    ACT_1A: "act_1a",
    ACT_1B: GV_STARTED_ACT_1_B,
    ACT_2: GV_STARTED_ACT_2,
    ACT_3A: GV_STARTED_ACT_3_A,
    ACT_3B: GV_STARTED_ACT_3_B,
    EPILOGUE: GV_STARTED_EPILOGUE
}

const MOB_BEHAVIOUR_DICTIONARY = {
    creeper: { act1: "badger:behavior_creeper_act1", act2: "badger:behavior_creeper_act2", caged: "badger:behavior_creeper_caged", default: "badger:mob_creeper" },
    skeleton: { act1: "badger:behavior_skeleton_act1", act2: "badger:behavior_skeleton_act2", caged: "badger:behavior_skeleton_caged", default: "badger:mob_skeleton" },
    spider: { act1: "badger:behavior_spider_act1", act2: "badger:behavior_spider_act2", caged: "badger:behavior_spider_caged", default: "badger:mob_spider" },
    zombie: { act1: "badger:behavior_zombie_act1", act2: "badger:behavior_zombie_act2", caged: "badger:behavior_zombie_caged", default: "badger:mob_zombie" },
    witch: { act1: "badger:mob_illager_witch", act2: "badger:mob_illager_witch", caged: "badger:behavior_witch_caged", default: "badger:mob_illager_witch" }
}

const MOB_ARCHETYPE = {
    ZOMBIE: "badger:mob_zombie",
    CREEPER: "badger:mob_creeper",
    SKELETON: "badger:mob_skeleton",
    SPIDER: "badger:mob_spider",
    WITCH: "badger:mob_illager_witch",
    VILLAGERS: "badger:villager_culture01",
    ANIMALS: ["badger:animal_badger", "badger:animal_fox", "badger:animal_ocelot", "badger:animal_sea_turtle", "badger:animal_pig", "badger:animal_wolf", "badger:animal_llama", "badger:animal_rabbit"]
}

const EMPTY_ENTITY_GROUP = []
const OWNER_VILLAGE_OPT_OUT = 1234567890

const ICON_QUESTION_MARK = "badger:wmap_question_mark"

const VILLAGE_WITH_CARRIER_GOLEM_PIECE_TAG = "hasCarrierPiece"

const VILLAGE_WITH_DRILL_GOLEM_PIECE_TAG = "hasDrillPiece"

const FACTION_ACTION_BUILD_DEFENSIVE_OUTPOST = "build_defensive_outpost"
const FACTION_ACTION_BUILD_OFFENSIVE_OUTPOST = "build_offensive_outpost"
const FACTION_ACTION_ATTACK_VILLAGE_V2 = "attack_village_v2"
const FACTION_ACTION_BUILD_NEAR_BASE = "build_near_base"
const FACTION_ACTION_BUILD_NEW_OUTPOST = "build_new_outpost"
const FACTION_ACTION_UPGRADE_BASE = "upgrade_base"
const FACTION_ACTION_OOPS = "oops"
const FACTION_ACTION_BUILD_FAR_BASE = "build_far_base"
const FACTION_ACTION_ESTABLISH = "establish_horde"
const FACTION_ACTION_CLAIM_AREA = "claim_area"

const FACTION_ACTION_BUILD_DEFENSIVE_OUTPOST_TRIPLE = "build_defensive_outpost_triple"
const FACTION_ACTION_BUILD_OFFENSIVE_OUTPOST_DOUBLE = "build_offensive_outpost_double"
const FACTION_ACTION_ATTACK_VILLAGE_V2_DOUBLE = "attack_village_v2_double"
const FACTION_ACTION_BUILD_NEAR_BASE_DOUBLE = "build_near_base_double"
const FACTION_ACTION_UPGRADE_BASE_DOUBLE = "upgrade_base_double"
const FACTION_ACTION_OOPS_DOUBLE = "oops_double"

const FACTION_ACTION_ATTACK_VILLAGE_V2_ATTACK_BOSS = "attack_village_v2_attack_boss"
const FACTION_ACTION_BOSS_OCCUPATION = "occupation_attack_boss"

const ALL_INVASION_ACTIONS = [
    // All invasion actions
    FACTION_ACTION_BUILD_DEFENSIVE_OUTPOST,
    FACTION_ACTION_BUILD_OFFENSIVE_OUTPOST,
    FACTION_ACTION_BUILD_NEAR_BASE,
    FACTION_ACTION_BUILD_NEW_OUTPOST,
    FACTION_ACTION_UPGRADE_BASE,
    FACTION_ACTION_OOPS,
    FACTION_ACTION_BUILD_FAR_BASE,
    FACTION_ACTION_BUILD_DEFENSIVE_OUTPOST_TRIPLE,
    FACTION_ACTION_BUILD_OFFENSIVE_OUTPOST_DOUBLE,
    FACTION_ACTION_BUILD_NEAR_BASE_DOUBLE,
    FACTION_ACTION_UPGRADE_BASE_DOUBLE,
    FACTION_ACTION_OOPS_DOUBLE,
    FACTION_ACTION_CLAIM_AREA,
    FACTION_ACTION_ATTACK_VILLAGE_V2,
    FACTION_ACTION_ESTABLISH,
    FACTION_ACTION_ATTACK_VILLAGE_V2_DOUBLE,
    FACTION_ACTION_ATTACK_VILLAGE_V2_ATTACK_BOSS,
    FACTION_ACTION_BOSS_OCCUPATION
]

const INVASION_SUNRISE_COUNT = "invasionSunriseCount"
const INVASION_SUNSET_COUNT = "invasionSunsetCount"

const BOSS_BASE_PLACED = "boss_base_placed"

const GV_DISABLE_HOSTS = "gv_disable_hosts"

const GV_ROAMING_PIGLIN_SPAWNERS_CONTROL = {
    PACK_GRUNTER: "disable_spawner_piglin_pack_grunter",
    PACK_GRUNTER_DAY_NETHER: "disable_spawner_piglin_pack_grunter_day_nether",
    PACK_MEDIC: "disable_spawner_piglin_pack_medic",
    PACK_RUNT: "disable_spawner_piglin_pack_runt",
    PACK_RUNT_DAY_NETHER: "disable_spawner_piglin_pack_runt_day_nether",
    PACK_WARBOAR: "disable_spawner_piglin_pack_warboar",
    PACK_WARBOAR_DAY_NETHER: "disable_spawner_piglin_pack_warboar_day_nether",
    GROUP_BRUISER: "disable_spawner_piglin_group_bruiser",
    GROUP_BRUISER_DAY_NETHER: "disable_spawner_piglin_group_bruiser_day_nether",
    GROUP_GRENADIER: "disable_spawner_piglin_group_grenadier",
    GROUP_GRENADIER_DAY_NETHER: "disable_spawner_piglin_group_grenadier_day_nether",
    GROUP_SEEKER: "disable_spawner_piglin_group_seeker",
    GROUP_SEEKER_DAY_NETHER: "disable_spawner_piglin_group_seeker_day_nether",
    ARMY_WARBOAR: "disable_spawner_piglin_army_warboar",
    ARMY_WARBOAR_DAY_NETHER: "disable_spawner_piglin_army_warboar_day_nether",
    ARMY_RUNT: "disable_spawner_piglin_army_runt",
    ARMY_RUNT_DAY_NETHER: "disable_spawner_piglin_army_runt_day_nether",
    ARMY_GRUNTER: "disable_spawner_piglin_army_grunter",
    ARMY_GRUNTER_DAY_NETHER: "disable_spawner_piglin_army_grunter_day_nether",
    HORDE_PACK_BRUISER: "disable_spawner_piglin_faction_pack_bruiser",
    HORDE_PACK_BRUISER_DAY_NETHER: "disable_spawner_piglin_faction_pack_bruiser_day_nether",
    HORDE_PACK_GRENADIER: "disable_spawner_piglin_faction_pack_grenadier",
    HORDE_PACK_GRENADIER_DAY_NETHER: "disable_spawner_piglin_faction_pack_grenadier_day_nether",
    HORDE_PACK_SEEKER: "disable_spawner_piglin_faction_pack_seeker",
    HORDE_PACK_SEEKER_DAY_NETHER: "disable_spawner_piglin_faction_pack_seeker_day_nether",
    HORDE_PACK_WARBOAR: "disable_spawner_piglin_faction_pack_warboar",
    HORDE_PACK_WARBOAR_DAY_NETHER: "disable_spawner_piglin_faction_pack_warboar_day_nether",
    HORDE_PACK_RUNT: "disable_spawner_piglin_faction_pack_runt",
    HORDE_PACK_RUNT_DAY_NETHER: "disable_spawner_piglin_faction_pack_runt_day_nether",
    HORDE_PACK_GRUNTER: "disable_spawner_piglin_faction_pack_grunter",
    HORDE_PACK_GRUNTER_DAY_NETHER: "disable_spawner_piglin_faction_pack_grunter_day_nether",
    HORDE_PACK_PACK_PIGMADILO: "disable_spawner_piglin_faction_pack_pigmadilo",
    HORDE_PACK_PACK_PIGMADILO_DAY_NETHER: "disable_spawner_piglin_faction_pack_pigmadilo_day_nether",
    HORDE_PACK_PORTAL_GUARD: "disable_spawner_piglin_faction_pack_portal_guard",
    HORDE_PACK_PORTAL_GUARD_DAY_NETHER: "disable_spawner_piglin_faction_pack_portal_guard_day_nether",
    HORDE_PACK_ENGINEER: "disable_spawner_piglin_faction_pack_engineer",
    HORDE_PACK_ENGINEER_DAY_NETHER: "disable_spawner_piglin_faction_pack_engineer_day_nether",
    HORDE_PACK_PIGGO_LAUNCHER: "disable_spawner_piglin_faction_pack_piggo_launcher",
    HORDE_PACK_PIGGO_LAUNCHER_DAY_NETHER: "disable_spawner_piglin_faction_pack_piggo_launcher_day_nether",
    HORDE_DEFEND_MEDIC: "disable_spawner_piglin_faction_defend_medic",
    HORDE_ATTACK_MEDIC: "disable_spawner_piglin_faction_attack_medic",
    HORDE_OBSTACLE_MEDIC: "disable_spawner_piglin_faction_obstacle_medic",
    HORDE_FROST_MEDIC: "disable_spawner_piglin_faction_frost_medic",
    HORDE_DEFEND_MEDIC_DAY: "disable_sspawner_piglin_faction_medic_defend_day",
    HORDE_ATTACK_MEDIC_DAY: "disable_spawner_piglin_faction_medic_attack_day",
    HORDE_OBSTACLE_MEDIC_DAY: "disable_spawner_piglin_faction_medic_obstacle_day",
    HORDE_FROST_MEDIC_DAY: "disable_spawner_piglin_faction_medic_frost_day"
}

const GV_ROAMING_PIGLIN_DEFEND_FACTION_SPAWNERS = [GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_BRUISER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_BRUISER_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_RUNT, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_RUNT_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_PORTAL_GUARD, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_PORTAL_GUARD_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_ENGINEER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_ENGINEER_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_DEFEND_MEDIC, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_DEFEND_MEDIC_DAY]
const GV_ROAMING_PIGLIN_ATTACK_FACTION_SPAWNERS = [GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_SEEKER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_SEEKER_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_WARBOAR, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_WARBOAR_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_PACK_PIGMADILO, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_PACK_PIGMADILO_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_ATTACK_MEDIC, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_ATTACK_MEDIC_DAY]
const GV_ROAMING_PIGLIN_OBSTACLE_FACTION_SPAWNERS = [GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_GRENADIER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_GRENADIER_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_GRUNTER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_GRUNTER_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_PIGGO_LAUNCHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_PIGGO_LAUNCHER_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_OBSTACLE_MEDIC, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_OBSTACLE_MEDIC_DAY]
const GV_ROAMING_PIGLIN_FROST_FACTION_SPAWNERS = [GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_SEEKER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_SEEKER_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_GRUNTER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_GRUNTER_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_PIGGO_LAUNCHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_PACK_PIGGO_LAUNCHER_DAY_NETHER, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_FROST_MEDIC, GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.HORDE_FROST_MEDIC_DAY]

//commonly used zone height cards for obstacle bases
const ObstacleHeight = {
    Flatten: "Flatten",
    H1: "1Height",
    H2: "2Height",
    H3: "3Height",
    H4: "4Height",
    H5: "5Height",
    H6: "6Height",
    H7: "7Height",
    H8: "8Height",
    H9: "9Height",
    H10: "10Height",
    H11: "11Height",
    H12: "12Height",
    H13: "13Height",
    H14: "14Height",
    H15: "15Height",
    H16: "16Height",
    H17: "17Height",
    H18: "18Height",
    H19: "19Height",
    H20: "20Height",
    H21: "21Height",
    H22: "22Height",
    H23: "23Height",
    H24: "24Height",
    H26: "26Height",
    H28: "28Height",
    H29: "29Height",
    H30: "30Height",
    H32: "32Height",
    H34: "34Height",
    H36: "36Height",
    H38: "38Height",
    H40: "40Height",
    H42: "42Height",
    H44: "44Height",
    H46: "46Height",
    H48: "48Height",
    H50: "50Height",
    H52: "52Height",
    H54: "54Height"
}

const FrostHeight = {
    Flatten: "Flatten",
    H1: "1Height",
    H2: "2Height",
    H3: "3Height",
    H4: "4Height",
    H5: "5Height",
    H6: "6Height",
    H7: "7Height",
    H8: "8Height",
    H9: "9Height",
    H10: "10Height",
    H11: "11Height",
    H12: "12Height",
    H13: "13Height",
    H14: "14Height",
    H15: "15Height",
    H16: "16Height",
    H17: "17Height",
    H18: "18Height",
    H19: "19Height",
    H20: "20Height",
    H21: "21Height",
    H22: "22Height",
    H23: "23Height",
    H24: "24Height",
    H26: "26Height",
    H28: "28Height",
    H29: "29Height",
    H30: "30Height",
    H32: "32Height",
    H34: "34Height",
    H36: "36Height",
    H38: "38Height",
    H40: "40Height",
    H42: "42Height",
    H44: "44Height",
    H46: "46Height",
    H48: "48Height",
    H50: "50Height",
    H52: "52Height",
    H54: "54Height"
}

//Commonly used direction placement cards
const DIRECTION_CARD = {
    none: "",
    northWedge: "placeInDirectionNorthWithWedgeBrush",
    eastWedge: "placeInDirectionEastWithWedgeBrush",
    southWedge: "placeInDirectionSouthWithWedgeBrush",
    westWedge: "placeInDirectionWestWithWedgeBrush",
    northWestWedge: "placeInDirectionNorthWestWithWedgeBrush",
    northEastWedge: "placeInDirectionNorthEastWithWedgeBrush",
    southWestWedge: "placeInDirectionSouthWestWithWedgeBrush",
    southEastWedge: "placeInDirectionSouthEastWithWedgeBrush",
    northRect: "placeInDirectionNorthWithRectangleBrush",
    eastRect: "placeInDirectionEastWithRectangleBrush",
    southRect: "placeInDirectionSouthWithRectangleBrush",
    westRect: "placeInDirectionWestWithRectangleBrush",
    northWestRect: "placeInDirectionNorthWestWithRectangleBrush",
    northEastRect: "placeInDirectionNorthEastWithRectangleBrush",
    southWestRect: "placeInDirectionSouthWestWithRectangleBrush",
    southEastRect: "placeInDirectionSouthEastWithRectangleBrush"
}

//Commonly used BASE BUILDING CARDS CONSTANTS
const BUILDABLE_CARD = {
    //Portals
    PORTAL_ACT1: "addPortalAct1",
    PORTAL_DARK_BEACON: "addPortalDarkBeacon",
    PORTAL_SMALL: "addPortalSmall",
    PORTAL_MEDIUM: "addPortalMedium",
    PORTAL_LARGE: "addPortalLarge",
    PORTAL_MINI: "addPortalMini",
    //Objectives
    SUPER_GOLDMINE: "superGoldmine",
    PIGLIN_CRYSTAL: "basePiglinCrystal",
    //Towers
    TOWER_PIGLIN_ARROW: "piglinTower",
    TOWER_PIGLIN_KNOCKBACK: "piglinKnockbackTower",
    TOWER_PIGLIN_THROWER_RUNT: "pigThrowerTower",
    TOWER_PIGLIN_THROWER_WARBOAR: "pigThrowerTower2",
    TOWER_PIGLIN_THROWER_PIGMADILO: "pigThrowerTower3",
    TOWER_LAVA_SPREADER: "lavaSprayerTower",
    TOWER_PIGLIN_SHIELD: "piglinShieldTower",
    TOWER_SPORE_FAN: "piglinSporeFan",
    //Barracks
    BARRACKS_FIGHTER: "addFighterBarracks",
    BARRACKS_DISRUPTOR: "addDisruptorBarracks",
    BARRACKS_SIEGER: "addSiegerBarracks",
    BARRACKS_SPECIALIST: "addSpecialistBarracks",
    //Spreaders
    NETHERSPREADER: "netherSpreader",
    NETHERSPREADER_SUPER_FEAR: "superNetherSpreaderFear",
    NETHERSPREADER_INSTANT: "netherSpreaderInstant",
    //Other structures
    GOLDMINE: "goldMine",
    PIGLIN_CRATE: "piglinCrate",
    RANGE_EXTENDER: "rangeExtender",
    BUILDING_REGENERATOR: "buildingRegenerator",
    RALLYPOINT: "piglinRallyingPoint",
    ATTACK_HORDE_RALLY_POINT: "attackRallyPoint",
    DEFEND_HORDE_RALLY_POINT: "defendRallyPoint",
    MOB_CAGE: "mobCage"
}

//Piglin archetypes
const PIGLIN_ARCHETYPE = {
    MEDIC: "badger:piglin_medic",
    ENGINEER: "badger:piglin_engineer",
    RUNT: "badger:piglin_runt",
    GRUNTER: "badger:piglin_grunter",
    WARBOAR: "badger:piglin_piggo_warboar",
    SEEKER: "badger:piglin_seeker",
    BRUISER: "badger:piglin_bruiser",
    GRENADIER: "badger:piglin_grenadier",
    PIGMADILO: "badger:piglin_pigmadilo",
    PORTAL_GUARD: "badger:piglin_portal_guard",
    LAVA_LAUNCHER: "badger:piglin_piggo_lava_launcher",
    DISRUPTOR: "badger:piglin_disruptor"
}

//Quick lookup table to get the unique tags for piglin archetypes
const PIGLIN_TAG_LOOKUP = {
    [PIGLIN_ARCHETYPE.MEDIC]: "medic",
    [PIGLIN_ARCHETYPE.ENGINEER]: "engineer",
    [PIGLIN_ARCHETYPE.RUNT]: "runt",
    [PIGLIN_ARCHETYPE.GRUNTER]: "grunter",
    [PIGLIN_ARCHETYPE.WARBOAR]: "warboar",
    [PIGLIN_ARCHETYPE.SEEKER]: "seeker",
    [PIGLIN_ARCHETYPE.BRUISER]: "bruiser",
    [PIGLIN_ARCHETYPE.GRENADIER]: "grenadier",
    [PIGLIN_ARCHETYPE.PORTAL_GUARD]: "portalguard",
    [PIGLIN_ARCHETYPE.LAVA_LAUNCHER]: "piggo_lava_launcher",
    [PIGLIN_ARCHETYPE.PIGMADILO]: "pigmadilo",
    [PIGLIN_ARCHETYPE.DISRUPTOR]: "piglinDisruptorUnit"
}

//Building tags
const BUILDING_TAG = {
    RALLYPOINT: "piglin_rallying_point"
}

const INVASION_OB_BUILT_VARIABLE = "invasion_ob_built"
const INVASION_ATTACK_RESULT_VILLAGE_VARIABLE = "invasion_attack_result"

const INVASION_ATTACK_RESULT = {
    OBDESTROYED: 0,
    UNDAMAGED: 1,
    DAMAGED: 2,
    DESTROYED: 3
}

const INVASION_PHASE_STATE = {
    MOB_ALLIANCES_COMPLETED_COUNT: "gv_mob_alliance_completed_count",
    TOWERS_COMPLETED_COUNT: "gv_towers_completed_count",
    ALLIES_COMPLETED_COUNT: "gv_allies_completed_count",
    MOUNTS_COMPLETED_COUNT: "gv_mounts_completed_count",
    WOF_UPGRADES_PRESENT_COUNT: "gv_wof_upgrades_present_count",
    BASES_DESTROYED_COUNT: "gv_bases_destroyed_count",
    ATTACK_HORDE_DESTROYED: "gv_attack_horde_destroyed",
    DEFEND_HORDE_DESTROYED: "gv_defend_horde_destroyed",
    OBSTACLE_HORDE_DESTROYED: "gv_obstacle_horde_destroyed",
    FROST_HORDE_DESTROYED: "gv_frost_horde_destroyed"
}

const INVASION_PHASE_TOTAL_COUNT = 7
const INVASION_ACTIVE = "gv_invasion_active"

// Staggered entry
// A helper function designed to query the first, second, third, etc. horde arrived
const HordeArrived = (orderNum) => {
    return "horde_arrived_" + orderNum
}

// Same helper for mob alliances, mostly cosmetic
const MobAllianceOccupationStarted = (orderNum) => {
    return "mob_alliance_occupation_started_" + orderNum
}

// Horde and MA shorthands
const HORDE_ARRIVED_FIRST = HordeArrived(0)
const HORDE_ARRIVED_SECOND = HordeArrived(1)
const HORDE_ARRIVED_THIRD = HordeArrived(2)
const HORDE_ARRIVED_FOURTH = HordeArrived(3)
const HORDE_ARRIVED_FIFTH = HordeArrived(4)
const HORDE_ARRIVED_SIXTH = HordeArrived(5)

const MA_OCCUPATION_STARTED_FIRST = MobAllianceOccupationStarted(0)
const MA_OCCUPATION_STARTED_SECOND = MobAllianceOccupationStarted(1)
const MA_OCCUPATION_STARTED_THIRD = MobAllianceOccupationStarted(2)
const MA_OCCUPATION_STARTED_FOURTH = MobAllianceOccupationStarted(3)
const MA_OCCUPATION_STARTED_FIFTH = MobAllianceOccupationStarted(4)
const MA_OCCUPATION_STARTED_SIXTH = MobAllianceOccupationStarted(5)

// Invasion Phases
const INVASION_PHASE_0 = 0
const INVASION_PHASE_1 = 1
const INVASION_PHASE_2 = 2
const INVASION_PHASE_3 = 3
const INVASION_PHASE_4 = 4
const INVASION_PHASE_5 = 5
const INVASION_PHASE_6 = 6

const VILLAGE_BEHAVIOR_TIMER = "village_cheer_timer"
const VILLAGE_VARIABLE_TEMP_BEHAVIOR_STATE = "village_temp_behavior_state"
const VILLAGERS_ILLAGERS_INSIDE_CAGE_TAG = "villager_illager_inside_cage"

// Note: this is ordered by priority, and the values must match keys in VILLAGE_BEHAVIOR
const VILLAGE_TEMP_BEHAVIOR_STATE = {
    HEAVY_SCARED: "heavyScared",
    SCARED: "scared",
    GREET: "greet",
    HEAVY_CHEER: "heavyCheer",
    CHEER: "cheer"
}

const VILLAGE_BEHAVIOR = {
    villager: {
        act1: "badger:behavior_villager_scared",
        act1B: "badger:behavior_villager_curious",
        act2: "badger:behavior_villager_happy",
        cheer: "badger:behavior_villager_cheer",
        heavyCheer: "badger:behavior_villager_heavy_excited",
        greet: "badger:behavior_villager_greeting",
        scared: "badger:behavior_villager_scared",
        heavyScared: "badger:behavior_villager_heavy_scared",
        sad: "badger:behavior_villager_illager_sad"
    },
    illager: {
        act1: "badger:behavior_illager_scared",
        act1B: "badger:behavior_illager_curious",
        act2: "badger:behavior_illager_happy",
        cheer: "badger:behavior_illager_cheer",
        heavyCheer: "badger:behavior_illager_heavy_excited",
        greet: "badger:behavior_illager_greeting",
        scared: "badger:behavior_illager_scared",
        heavyScared: "badger:behavior_illager_heavy_scared",
        sad: "badger:behavior_villager_illager_sad"
    }
}

const ALLOWED_INVASION_BASE_SIZES = [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE]

const SLOT = {
    BASE: "slot_invasion",
    OB_MA_ZOMBIE: "zombiePiglinBaseSlot",
    OB_MA_SKELETON: "skeletonPiglinBaseSlot",
    OB_MA_SPIDER: "spiderPiglinBaseSlot",
    OB_MA_CREEPER: "creeperPiglinBaseSlot"
}

// because of how UI is setup, these values correlate to the UI event AND the UI visibility unlock resource.
const HUD_EVENT_NAME = {
    // static
    SONGBOOK_OPENED: "SONGBOOK_OPENED",
    SONGBOOK_CLOSED: "SONGBOOK_CLOSED",
    MAP_OPENED: "MAP_OPENED",
    MAP_CLOSED: "MAP_CLOSED",
    TOOLBAR_0: "TOOLBAR_0",
    TOOLBAR_1: "TOOLBAR_1",
    TOOLBAR_2: "TOOLBAR_2",
    TOOLBAR_3: "TOOLBAR_3",
    // dynamic (will contain an argument appended to the event name)
    // TODO (jcheung): Make this B# friendly
    DYNAMIC: {
        SONGBOOK_TAB_CHANGED: "SONGBOOK_TAB_CHANGE_",
        SONGBOOK_QUICKSLOT: "SONGBOOK_QUICKSLOT_",
        CUSTOMIZED_HOTBAR: "CUSTOMIZED_HOTBAR_",
        JOURNAL_PAGE_OPENED: "JOURNAL_PAGE_OPENED_"
    }
}

const TEXTURE_KEYS = {
    PRIMARY: "primary_texture",
    OB_BIOME: "ob_biome_texture"
}

const STAMP_TEXTURES = [
    {
        factionName: FACTION_NAME_ATTACK,
        // Regular Bases
        [BASE_SIZE_SMALL]: "piglin_attack_small_01",
        [BASE_SIZE_MEDIUM]: "piglin_attack_medium_01",
        [BASE_SIZE_LARGE]: "piglin_attack_large_01",
        [BASE_SIZE_BOSS]: "piglin_attack_large_01",
        [BASE_SIZE_OUTPOST]: "piglin_attack_outpost_01",
        // Village Attack Bases
        [BASE_SIZE_FOB_SMALL]: "piglin_attack_ob",
        [BASE_SIZE_FOB_MEDIUM]: "piglin_attack_ob",
        [BASE_SIZE_FOB_LARGE]: "piglin_attack_ob",
        // MA Occupation Bases
        [BASE_SIZE_PIGLIN_CREEPER]: "piglin_attack_small_01",
        [BASE_SIZE_PIGLIN_SKELETON]: "piglin_attack_small_01",
        [BASE_SIZE_PIGLIN_SPIDER]: "piglin_attack_small_01",
        [BASE_SIZE_PIGLIN_ZOMBIE]: "piglin_attack_small_01"
    },
    {
        factionName: FACTION_NAME_DEFEND,
        // Regular Bases
        [BASE_SIZE_SMALL]: "piglin_biome_defend_small",
        [BASE_SIZE_MEDIUM]: "piglin_biome_defend_medium",
        [BASE_SIZE_LARGE]: "piglin_defend_large_01",
        [BASE_SIZE_BOSS]: "piglin_defend_boss_01",
        [BASE_SIZE_OUTPOST]: "piglin_defend_outpost_01",
        // Village Attack Bases
        [BASE_SIZE_FOB_SMALL]: "piglin_defend_ob",
        [BASE_SIZE_FOB_MEDIUM]: "piglin_defend_ob",
        [BASE_SIZE_FOB_LARGE]: "piglin_defend_ob",
        // MA Occupation Bases
        [BASE_SIZE_PIGLIN_CREEPER]: "piglin_biome_defend_small",
        [BASE_SIZE_PIGLIN_SKELETON]: "piglin_biome_defend_small",
        [BASE_SIZE_PIGLIN_SPIDER]: "piglin_biome_defend_small",
        [BASE_SIZE_PIGLIN_ZOMBIE]: "piglin_biome_defend_small"
    },
    {
        factionName: FACTION_NAME_OBSTACLE,
        // Regular Bases
        [BASE_SIZE_SMALL]: "piglin_biome_obstacle_small",
        [BASE_SIZE_MEDIUM]: "piglin_biome_obstacle_medium",
        [BASE_SIZE_LARGE]: "piglin_biome_obstacle_large",
        [BASE_SIZE_BOSS]: "piglin_biome_obstacle_boss",
        [BASE_SIZE_OUTPOST]: "piglin_obstacle_outpost_01",
        // Village Attack Bases
        [BASE_SIZE_FOB_SMALL]: "piglin_obstacle_ob",
        [BASE_SIZE_FOB_MEDIUM]: "piglin_obstacle_ob",
        [BASE_SIZE_FOB_LARGE]: "piglin_obstacle_ob",
        // MA Occupation Bases
        [BASE_SIZE_PIGLIN_CREEPER]: "piglin_obstacle_ma_01",
        [BASE_SIZE_PIGLIN_SKELETON]: "piglin_obstacle_ma_01",
        [BASE_SIZE_PIGLIN_SPIDER]: "piglin_obstacle_ma_01",
        [BASE_SIZE_PIGLIN_ZOMBIE]: "piglin_obstacle_ma_01"
    },
    {
        factionName: FACTION_NAME_FROST,
        // Regular Bases
        [BASE_SIZE_SMALL]: "piglin_biome_frost_small",
        [BASE_SIZE_MEDIUM]: "piglin_biome_frost_medium",
        [BASE_SIZE_LARGE]: "piglin_biome_frost_large",
        [BASE_SIZE_BOSS]: "piglin_biome_frost_boss",
        [BASE_SIZE_OUTPOST]: "piglin_frost_outpost_01",
        // Village Attack Bases
        [BASE_SIZE_FOB_SMALL]: "piglin_frost_ob",
        [BASE_SIZE_FOB_MEDIUM]: "piglin_frost_ob",
        [BASE_SIZE_FOB_LARGE]: "piglin_frost_ob",
        // MA Occupation Bases
        [BASE_SIZE_PIGLIN_CREEPER]: "piglin_frost_ma_01",
        [BASE_SIZE_PIGLIN_SKELETON]: "piglin_frost_ma_01",
        [BASE_SIZE_PIGLIN_SPIDER]: "piglin_frost_ma_01",
        [BASE_SIZE_PIGLIN_ZOMBIE]: "piglin_frost_ma_01"
    },
    {
        factionName: FACTION_NAME_DBB,
        // Regular Bases
        [BASE_SIZE_ACT_1_A]: "piglin_dbb_a_01", //piglin_dbb_small_01
        [BASE_SIZE_ACT_1_B]: "piglin_dbb_outpost_01",
        [BASE_SIZE_ACT_1_C]: "piglin_dbb_small_01",
        [BASE_SIZE_DARK_BEACON]: "piglin_dbb_medium_01",
        [BASE_SIZE_ACT1_FIRST_SKIRMISH]: "piglin_dbb_a_01",
        [BASE_SIZE_ACT1_SECOND_SKIRMISH]: "piglin_dbb_a_01",
        [BASE_SIZE_LARGE]: "piglin_dbb_small_01",
        [BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE]: "piglin_dbb_outpost_01"
    },
    {
        factionName: FACTION_NAME_WOF,
        [BASE_SIZE_PIGLIN_WOF]: "piglin_biome_wof"
    }
]

const PIGLIN_BASE_STINGERS = [
    {
        factionName: FACTION_NAME_ATTACK,
        hero: "BAE_mus_stinger_base_hero",
        tactic: "BAE_mus_stinger_base_tactic",
        keepGoing: "BAE_mus_stinger_base_keep_going",
        giveUp: "BAE_mus_stinger_base_give_up",
        danger: "BAE_mus_stinger_base_danger"
    },
    {
        factionName: FACTION_NAME_DEFEND,
        hero: "BAE_mus_stinger_base_hero",
        tactic: "BAE_mus_stinger_base_tactic",
        keepGoing: "BAE_mus_stinger_base_keep_going",
        giveUp: "BAE_mus_stinger_base_give_up",
        danger: "BAE_mus_stinger_base_danger"
    },
    {
        factionName: FACTION_NAME_OBSTACLE,
        hero: "BAE_mus_stinger_base_hero",
        tactic: "BAE_mus_stinger_base_tactic",
        keepGoing: "BAE_mus_stinger_base_keep_going",
        giveUp: "BAE_mus_stinger_base_give_up",
        danger: "BAE_mus_stinger_base_danger"
    },
    {
        factionName: FACTION_NAME_FROST,
        hero: "BAE_mus_stinger_base_hero",
        tactic: "BAE_mus_stinger_base_tactic",
        keepGoing: "BAE_mus_stinger_base_keep_going",
        giveUp: "BAE_mus_stinger_base_give_up",
        danger: "BAE_mus_stinger_base_danger"
    },
    {
        factionName: FACTION_NAME_DBB,
        hero: "BAE_mus_stinger_base_hero",
        tactic: "BAE_mus_stinger_base_tactic",
        keepGoing: "BAE_mus_stinger_base_keep_going",
        giveUp: "BAE_mus_stinger_base_give_up",
        danger: "BAE_mus_stinger_base_danger"
    }
]

const INVASION_ATTACK_AUDIO = {
    PHASES: {
        INCOMING: "incoming",
        ENDING: "ending",
        PHASE0: "phase0",
        PHASE1: "phase1",
        PHASE2: "phase2",
        PHASE3: "phase3"
    }
}

const ONBOARDING_GLOBALS = {
    ONBOARDING_ENABLED: "gv_onboarding_enabled",
    INITIAL_ONBOARDING_COMPLETE: "gv_initial_onboarding_complete",
    WELL_OF_FATE_ONBOARDING_ACTIVE: "gv_well_of_fate_onboarding_active",
    START_INVASION_GAMEPLAY: "gv_start_invasion_gameplay_onboarding",
    START_VILLAGE_PLAN_ATTACK: "gv_start_village_plan_attack_onboarding",
    START_VILLAGE_PLAN_ATTACK_2: "gv_start_village_plan_attack_onboarding_2",
    START_VILLAGE_DESTROYED: "gv_start_village_destroyed_onboarding",
    START_VILLAGE_OCCUPIED: "occupied_villages",
    VILLAGE_DESTROYED_REBUILT: "gv_village_destroyed_rebuilt_onboarding",
    VILLAGE_CHEST_OPENED: "gv_village_chest_opened",
    MOB_OCCUPATION_DEFEATED: "gv_mob_occupation_defeated_onboarding",
    START_PLACED_SPAWNER: "gv_start_placed_spawner_onboarding",
    START_MOB_ALLIANCE_LOST: "gv_mob_alliance_lost_onboarding",
    MOB_ALLIANCE_LOST_RECOVERED: "gv_mob_alliance_lost_recovered_onboarding",
    ARMED_VILLAGERS: "gv_armed_villagers"
}
const ONBOARDING_MESSAGE_PRIORITY = 6

const ANY_MEET_THE_BOSS_CINEMATIC_PLAYED = "gv_any_meet_the_boss_cine_played"

const MESSAGING_GLOBALS = {
    MOB_ALLIANCE_LOST: "gv_mob_alliance_lost",
    VILLAGE_LOST: "gv_village_lost"
}

const GV_WORLD_SPAWNER_CREEPER = "gv_world_spawner_creeper"
const GV_WORLD_SPAWNER_CREEPER_HOMESTEAD = "gv_world_spawner_creeper_homestead"
const GV_WORLD_SPAWNER_CREEPER_CONFLICT = "gv_world_spawner_creeper_conflict"
const GV_WORLD_SPAWNER_ZOMBIE = "gv_world_spawner_zombie"
const GV_WORLD_SPAWNER_ZOMBIE_HOMESTEAD = "gv_world_spawner_zombie_homestead"
const GV_WORLD_SPAWNER_ZOMBIE_CONFLICT = "gv_world_spawner_zombie_conflict"
const GV_WORLD_SPAWNER_SKELETON = "gv_world_spawner_skeleton"
const GV_WORLD_SPAWNER_SKELETON_HOMESTEAD = "gv_world_spawner_skeleton_homestead"
const GV_WORLD_SPAWNER_SKELETON_CONFLICT = "gv_world_spawner_skeleton_conflict"
const GV_WORLD_SPAWNER_SPIDER = "gv_world_spawner_spider"
const GV_WORLD_SPAWNER_SPIDER_HOMESTEAD = "gv_world_spawner_spider_homestead"
const GV_WORLD_SPAWNER_SPIDER_CONFLICT = "gv_world_spawner_spider_conflict"


const TAG_REVEALED_POI = "revealed_poi"

const POI_WAYPOINT_ICON_DICTIONARY = {
    ["poiAlly01Val"]: "waypoint_fallen_warrior",
    ["poiAlly02Val"]: "waypoint_mob_golem_carrier",
    ["poiAlly04Val"]: "waypoint_mob_golem_shield",
    ["poiAlly05Val"]: "waypoint_mob_golem_sniper",
    ["poiAlly06Val"]: "waypoint_mob_golem_drill",
    ["poiLegendDragonRedVal"]: "waypoint_dragon_red",
    ["mount01"]: "temp_waypoint_purple_tiger",
    ["mount03"]: "temp_waypoint_giant_beetle",
    ["mount04"]: "temp_waypoint_terror_bird",
    ["mount06"]: "temp_waypoint_mount_06",
    ["mount07"]: "temp_waypoint_mount_camel",
    ["tower01"]: "waypoint_poi_tower_01",
    ["tower02"]: "waypoint_poi_tower_02",
    ["tower04"]: "waypoint_poi_tower_04",
    ["tower05"]: "waypoint_poi_tower_05"
}

const POI_WAYPOINT_ICON_STATE = {
    HIDDEN: "hidden",
    VISIBLE: "question_mark",
    REVEALED: "revealed"
}

const MOUNTS = {
    TIGER: "poi_mount_01",
    BEETLE: "poi_mount_03",
    BIRD: "poi_mount_04",
    HORSE: "poi_mount_05",
    MOUNT_SIX: "poi_mount_06",
    CAMEL: "poi_mount_07"
}

const JOURNAL_UNLOCKS = {
    TREASURE_CHEST: "unlock_journal_treasure_chest",
    CAVALRY_GOLEM: "unlock_journal_cavalry_golem",
    SUPPORT_GOLEM: "unlock_journal_support_golem",
    PLANK_GOLEM: "unlock_journal_plank_golem",
    STONE_GOLEM: "unlock_journal_cobblestone_golem",
    MOB_CREEPER: "unlock_journal_mob_creeper",
    MOB_ZOMBIE: "unlock_journal_mob_zombie",
    MOB_SKELETON: "unlock_journal_mob_skeleton",
    MOB_SPIDER: "unlock_journal_mob_spider",
    MOUNT_TIGER: "unlock_journal_mount_tiger",
    MOUNT_BEETLE: "unlock_journal_mount_beetle",
    MOUNT_BIRD: "unlock_journal_mount_bird",
    MOUNT_SIX: "unlock_journal_mount_06",
    MOUNT_CAMEL: "unlock_journal_mount_camel",
    VILLAGE: "unlock_journal_village",
    VINDICATOR: "unlock_journal_vindicator",
    ALLY_FALLEN_WARRIOR: "unlock_journal_ally_fallen_warrior",
    ALLY_SPAWNER: "unlock_journal_ally_spawner",
    ALLY_DRILL: "unlock_journal_ally_drill",
    ALLY_SHIELD: "unlock_journal_ally_shield",
    ALLY_SNIPER: "unlock_journal_ally_sniper",
    LEGEND_DRAGON_RED: "unlock_journal_legend_dragon_red",
    TOWER_BLAST: "unlock_journal_tower_blast",
    TOWER_STUN: "unlock_journal_tower_stun",
    TOWER_FROST: "unlock_journal_tower_frost",
    TOWER_BURN: "unlock_journal_tower_burn",
    BUFF_SPEED_WEED: "unlock_journal_buff_speed_weed",
    BUFF_BOUNCY_MUSHROOM: "unlock_journal_buff_bouncy_mushroom",
    BUFF_REGEN_STONE: "unlock_journal_buff_regen_stone",
    HAZARD_REDTHORN: "unlock_journal_hazard_redthorn",
    HAZARD_TAR_PIT: "unlock_journal_hazard_tar_pit",
    HAZARD_MUD_PIT: "unlock_journal_hazard_mud_pit",
    HAZARD_VENOM_VINES: "unlock_journal_hazard_venom_vines",
    HAZARD_GEYSER: "unlock_journal_hazard_geyser",
    HORDE_ATTACK_FACTION: "unlock_journal_horde_attack_faction",
    HORDE_DEFEND_FACTION: "unlock_journal_horde_defend_faction",
    HORDE_OBSTACLE_FACTION: "unlock_journal_horde_obstacle_faction",
    HORDE_FROST_FACTION: "unlock_journal_horde_frost_faction",
    HORDE_ATTACK_BOSS: "unlock_journal_horde_attack_boss",
    HORDE_DEFEND_BOSS: "unlock_journal_horde_defend_boss",
    HORDE_OBSTACLE_BOSS: "unlock_journal_horde_obstacle_boss",
    HORDE_FROST_BOSS: "unlock_journal_horde_frost_boss",
    GREAT_HOG: "unlock_journal_great_hog",
    PIGLIN_INVASION: "unlock_journal_piglin_invasion",
    PIGLIN_CRATE: "unlock_journal_piglin_crate",
    ////////
    PIGLIN_UNIT_RUNT: "unlock_journal_piglin_unit_runt",
    PIGLIN_UNIT_GRUNTER: "unlock_journal_piglin_unit_grunter",
    PIGLIN_UNIT_BRUISER: "unlock_journal_piglin_unit_bruiser",
    PIGLIN_UNIT_DISRUPTOR: "unlock_journal_piglin_unit_disruptor",
    PIGLIN_UNIT_ENGINEER: "unlock_journal_piglin_unit_engineer",
    PIGLIN_UNIT_GRENADIER: "unlock_journal_piglin_unit_grenadier",
    PIGLIN_UNIT_MEDIC: "unlock_journal_piglin_unit_medic",
    PIGLIN_UNIT_SEEKER: "unlock_journal_piglin_unit_seeker",
    PIGLIN_UNIT_PIGMADILO: "unlock_journal_piglin_unit_pigmadilo",
    PIGLIN_UNIT_WARBOAR: "unlock_journal_piglin_unit_warboar",
    PIGLIN_UNIT_PORTALGUARD: "unlock_journal_piglin_unit_portalguard",
    PIGLIN_UNIT_LAVALAUNCHER: "unlock_journal_piglin_unit_lavalauncher",
    ////////
    PIGLIN_STRUCTURE_AIR_CHOPPER: "unlock_journal_piglin_structure_air_chopper",
    PIGLIN_STRUCTURE_NETHER_SPREADER: "unlock_journal_piglin_structure_nether_spreader",
    PIGLIN_STRUCTURE_PIGLIN_THROWER: "unlock_journal_piglin_structure_piglin_thrower",
    PIGLIN_STRUCTURE_LAVA_COIL: "unlock_journal_piglin_structure_lava_coil",
    PIGLIN_STRUCTURE_LAVA_TOWER: "unlock_journal_piglin_structure_lava_tower",
    PIGLIN_STRUCTURE_SHIELD_TOWER: "unlock_journal_piglin_structure_shield_tower",
    PIGLIN_STRUCTURE_KNOCKBACK_TOWER: "unlock_journal_piglin_structure_knockback_tower",
    PIGLIN_STRUCTURE_ARROW_TOWER: "unlock_journal_piglin_structure_arrow_tower",
    PIGLIN_STRUCTURE_BARRACKS: "unlock_journal_piglin_structure_barracks",
    PIGLIN_STRUCTURE_SUPER_NETHER_SPREADER: "unlock_journal_piglin_structure_super_nether_spreader",
    PIGLIN_STRUCTURE_RANGE_EXTENDER: "unlock_journal_piglin_structure_range_extender",
    PIGLIN_STRUCTURE_REGENERATOR: "unlock_journal_piglin_structure_regenerator"
}

const RALLY_LAUNCH_CONTEXT = {
    // Piglins target player's high value structure
    PLAYER_STRUCTURE: {
        presEvent: "sfx_piglin_tactic_attack", // BBI-TODO: Fill in legit data
        audioEvent: "BAE_mus_stinger_rallyman_piglin_tactic_target" // BBI-TODO: Fill in legit data
    },
    // Piglins build a high value structure (ex. super nether spreader)
    PIGLIN_BUILD: {
        presEvent: "sfx_piglin_tactic_attack", // BBI-TODO: Fill in legit data
        audioEvent: "BAE_mus_stinger_rallyman_piglin_tactic_build" // BBI-TODO: Fill in legit data
    },
    // Piglins attack in response to player attacking/destroying something high value
    PIGLIN_DAMAGE: {
        presEvent: "sfx_piglin_tactic_attack", // BBI-TODO: Fill in legit data
        audioEvent: "BAE_mus_stinger_rallyman_piglin_tactic_attack" // BBI-TODO: Fill in legit data
    }
}

const OUTPOST_LEVEL = {
    LIGHT: "ol_outpost_light",
    MEDIUM: "ol_outpost_medium",
    HEAVY: "ol_outpost_heavy"
}

const SLICE_SUFFIX = "SLICE_INDEX"

// note: audio variables may have strict values they are expecting. see `AUDIO_VAR_VALUE`
const AUDIO_VAR_KEY = {
    ACT: "music_current_act_progression"
}

const AUDIO_VAR_VALUE = {
    ACT: {
        // note 0 is reserved for standalone onboarding but isn't used atm.
        ACT1: 1,
        ACT_DBB: 2,
        ACT2: 3,
        ACT3: 4,
        ACT_EPILOGUE: 5
    }
}

const GV_FAST_TRAVELLED_ENABLED_AT_VILLAGE = "gv_has_activated_fast_travel_for_this_village"

/* -------------------------------------------------------------------------- */
/*                             Piglin AI constants                            */
/* -------------------------------------------------------------------------- */
const AI_TAG = {
    EXEMPT: "aiExempt",
    ASSIGNED: "aiAssgined"
}

/* -------------------------------------------------------------------------- */
/*                             Custom Options                                 */
/* -------------------------------------------------------------------------- */

const CUSTOM_OPTIONS = {
    SKIP_ACT_1: "gv_skip_act_1"
}

const PIGLIN_HORDE_PERSONALITY = {
    NONE: "none",
    ASSAULT: "assault",
    UPGRADE: "upgrade",
    EXPANSION: "expansion",
    PASSIVE: "passive"
}

// Mapping the values stored in global vars to their names.
const PIGLIN_HORDE_PERSONALITY_MAP = {
    1: PIGLIN_HORDE_PERSONALITY.ASSAULT,
    2: PIGLIN_HORDE_PERSONALITY.UPGRADE,
    3: PIGLIN_HORDE_PERSONALITY.EXPANSION,
    4: PIGLIN_HORDE_PERSONALITY.PASSIVE
}

const PIGLIN_INVASION_ACTIVITY = {
    NONE: "none",
    LOW: "low",
    STANDARD: "standard",
    HIGH: "high",
    VERY_HIGH: "veryHigh",
    INTENSE: "intense"
}

// Mapping the values stored in global vars to their names.
const PIGLIN_INVASION_ACTIVITY_MAP = {
    1: PIGLIN_INVASION_ACTIVITY.LOW,
    2: PIGLIN_INVASION_ACTIVITY.STANDARD,
    3: PIGLIN_INVASION_ACTIVITY.HIGH,
    4: PIGLIN_INVASION_ACTIVITY.VERY_HIGH,
    5: PIGLIN_INVASION_ACTIVITY.INTENSE
}

const PIGLIN_INVASION_PACING = {
    NONE: "none",
    SLOW: "slow",
    STANDARD: "standard",
    FAST: "fast",
    IMMEDIATE: "immediate"
}

// Mapping the values stored in global vars to their names.
const PIGLIN_INVASION_PACING_MAP = {
    1: PIGLIN_INVASION_PACING.SLOW,
    2: PIGLIN_INVASION_PACING.STANDARD,
    3: PIGLIN_INVASION_PACING.FAST,
    4: PIGLIN_INVASION_PACING.IMMEDIATE
}
