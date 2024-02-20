/* eslint-disable @typescript-eslint/no-unused-vars */
const MAP_KEY = {
    ZOOM: "zoom",
    SIZE: "size",
    STATE: "state",
    VISIBILITY: "visibility",
    TEAM: "team",
    GAME_RULE: "game_rule",
    FAST_TRAVEL: "fast_travel",
    BOSS: "boss",
    INVASION_STATE: "invasion_state",
    INVASION_INTENTION: "invasion_intention",
    INVASION_ACTIVE: "invasion_active",
    INVASION_ATTACK: "invasion_attack",
    INVASION_ATTACK_AUTO_RESOLVE: "invasion_attack_auto_resolve",
    INVASION_RECAP: "invasion_recap",
    INVASION_SPECIAL: "invasion_special",
    PVP_UNDER_ATTACK: "pvp_under_attack",
    IS_DESTROYED: "is_destroyed",
    PLAYER_ID: "player_id",
    MOB_ALLEGIANCE: "mob_allegiance",
    ONBOARDING: "onboarding_map",
    TEAM_OUTLINES: "team_outlines",
    CAN_FAST_TRAVEL: "can_fast_travel",
    PVP_VILLAGE_OWNERSHIP: "pvp_village_ownership",
    CAMPAIGN_ACT: "campaign_act",
    ACT1_VILLAGE_STATE: "act1_village_state",
    MOUNT_WORLD_SPAWNER: "mount_world_spawner_state",
    VILLAGE_CHEST_STATE: "village_chest_state",
    VILLAGE_RESOURCE: "village_resource",
    VILLAGE_RESOURCE_VISIBILITY: "village_resource_visibility",
    VILLAGE_CULTURE_LEVEL: "village_level",
    BASE_LOOT: "base_loot",
    ATTACKING_FACTION: "attacking_faction",
    STRENGTH: "strength",
    CLAIMED_AREA_VISIBILITY: "claimed_area_visibility",
    ATTACK_HORDE_ARRIVED: "attack_horde_arrived",
    DEFEND_HORDE_ARRIVED: "defend_horde_arrived",
    OBSTACLE_HORDE_ARRIVED: "obstacle_horde_arrived",
    FROST_HORDE_ARRIVED: "frost_horde_arrived",
    PLAYER_DAMAGED_BASE: "player_damaged",
    OBJECTIVE: "objective",
    WITCH_HUT_STATE: "witch_hut_state"
}

const MAP_ZOOM = {
    DEFAULT: "1"
}

const MAP_BASE_SIZE = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
    OCCUPYING_CREEPER: "piglin_occupying_creeper_mob_alliance",
    OCCUPYING_SKELETON: "piglin_occupying_skeleton_mob_alliance",
    OCCUPYING_SPIDER: "piglin_occupying_spider_mob_alliance",
    OCCUPYING_ZOMBIE: "piglin_occupying_zombie_mob_alliance",
    ACT1_A: "act1_a",
    ACT1_B: "act1_b",
    ACT1_C: "act1_b",
    BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE: "piglin_act1_non_portal_attack_base",
    FOB_SMALL: "fobSmall",
    FOB_MEDIUM: "fobMedium",
    FOB_LARGE: "fobLarge"
}

const MAP_ICON_STATE = {
    DEFAULT: "default",
    VISITED: "visited",
    COMPLETED: "completed",
    UNHURT: "unhurt",
    DAMAGED: "damaged",
    DESTROYED: "destroyed",
    UNDER_ATTACK: "under_attack",
    TARGETED: "targeted",
    DISABLED: "disabled",
    DISABLED_ACT1: "disabled_act1",
    DAMAGED_ACT1: "damaged_act1",
    TARGTED_VA_ACT1: "targeted_va_act1"
}

const MAP_VISIBILITY = {
    VISIBLE: "visible",
    HIDDEN: "hidden",
    REVEALED: "revealed"
}

const MAP_TEAM = {
    TWO: "team_two",
    ONE: "team_one",
    PIGLIN: "piglin_team"
}

const GAME_RULE = {
    PVP: "pvp"
}

const MAP_CATEGORY = {
    FACTION: "faction",
    PLAYER: "player",
    BUILDABLE: "buildable",
    MOB: "mob"
}

const MAP_FAST_TRAVEL = {
    DISABLED: "disabled",
    ENABLED: "enabled"
}

const MAP_CAN_FAST_TRAVEL = {
    TRUE: "true",
    FALSE: "false"
}

const MAP_BOSS = {
    DEFEATED: "defeated",
    DEFEND_BOSS: "defend_base_boss",
    OBSTACLE_BOSS: "obstacle_base_boss",
    FROST_BOSS: "frost_base_boss"
}

const MAP_INVASION = {
    VILLAGE_INVASION_DISABLED: "village_invasion_disabled",
    VILLAGE_INVASION_ENABLED: "village_invasion_enabled",
    NEW_VILLAGE_INVASION: "new_village_invasion",
    OLD_VILLAGE_INVASION: "old_village_invasion",
    NEW_INVASION_BASE: "new_invasion_base",
    BASE_EXPANDED: "base_expanded",
    BASE_UPGRADED: "base_upgraded"
}

const MAP_PVP_UNDER_ATTACK = {
    DISABLED: "disabled",
    ENABLED: "enabled"
}

const MAP_VILLAGE_CHEST = {
    COLLECTED: "collected",
    UNCOLLECTED: "uncollected",
    FULL: "full"
}

const MAP_MOB_ALLEGIANCE = {
    DISABLED: "disabled",
    ENABLED: "enabled"
}

const MAP_ONBOARDING = {
    DISABLED: "disabled",
    ENABLED: "enabled"
}

const CAMPAIGN_ACT = {
    DISABLED: "disabled",
    ACT_1A: "act_1a",
    ACT_1B: "act_1b",
    ACT_2: "act_2",
    ACT_3: "act_3",
    EPILOGUE: "epilogue"
}

const MAP_MOUNT_WORLD_SPAWNER = {
    DISABLED: "disabled",
    ENABLED: "enabled"
}

//ICON IDS
const MAP_FACTION_IDS = {
    WELL_OF_FATE: "faction.player.well",
    FACTION_DEFEND: "faction.pig.defend",
    FACTION_ATTACK: "faction.pig.attack",
    FACTION_OBSTACLE: "faction.pig.obstacle",
    FACTION_FROST: "faction.pig.frost",
    FACTION_DBB: "faction.pig.dbb",
    CULTURE_FOREST: "faction.cul.001",
    CULTURE_FROSTLANDS: "faction.cul.002",
    CULTURE_DRYLANDS: "faction.cul.003",
    CULTURE_WETLANDS: "faction.cul.004",
    CULTURE_GRASSLANDS: "faction.cul.005",
    CULTURE_BROKENLANDS: "faction.cul.006",
    CULTURE_FATEFUL_LAND: "faction.cul.007",
    CULTURE_JUNGLE: "faction.cul.008",
    CULTURE_MOUNTAIN: "faction.cul.009",
    MOB_ALLIANCE_CREEPER: "faction.mob.alliance.creeper",
    MOB_ALLIANCE_SKELETON: "faction.mob.alliance.skeleton",
    MOB_ALLIANCE_SPIDER: "faction.mob.alliance.spider",
    MOB_ALLIANCE_ZOMBIE: "faction.mob.alliance.zombie",
    TOWER_01: "faction.poi.tower_01",
    TOWER_02: "faction.poi.tower_02",
    TOWER_04: "faction.poi.tower_04",
    TOWER_05: "faction.poi.tower_05",
    TOWER_06: "faction.poi.tower_06",
    ALLY_01: "faction.poi.ally.01.faction",
    ALLY_02: "faction.poi.ally.02",
    ALLY_04: "faction.poi.ally.04",
    ALLY_05: "faction.poi.ally.05",
    ALLY_06: "faction.poi.ally.06",
    ALLY_07: "faction.poi.ally.07",
    LEGEND_DRAGON_RED: "faction.poi.legend.dragon.red",
    LEGEND_KILLER_RABBIT: "faction.poi.legend.killer_rabbit",
    MOUNT_01: "faction.poi.mount.01",
    MOUNT_03: "faction.poi.mount.03",
    MOUNT_04: "faction.poi.mount.04",
    MOUNT_06: "faction.poi.mount.06",
    MOUNT_07: "faction.poi.mount.07",
    MOUNT_08: "faction.poi.mount.08",
    MOUNT_09: "faction.poi.mount.09",
    UNNATURAL_LANDMARK_01: "faction.poi.unnatural.landmark.01"
}

const MAP_BUILDABLE_IDS = {
    TOWER_01: "poi_tower_01",
    TOWER_02: "poi_tower_02",
    TOWER_04: "poi_tower_04",
    TOWER_05: "poi_tower_05",
    TOWER_06: "poi_tower_06",
    PVP_HQ: "pvp_hq"
}

const MAP_MOB_IDS = {
    ALLY_01: "mob_fallen_warrior",
    ALLY_02: "mob_golem_carrier",
    ALLY_04: "mob_golem_shield",
    ALLY_05: "mob_golem_sniper",
    ALLY_06: "mob_golem_drill",
    ALLY_07: "mob_golem_grappler",
    LEGEND_DRAGON_RED: "dragon_red",
    LEGEND_KILLER_RABBIT: "killer_rabbit"
}

const MAP_INVASION_STATE = {
    ENABLED: "enabled",
    DISABLED: "disabled"
}

const MAP_INVASION_SPECIAL = {
    IS_NORMAL: "is_normal",
    IS_BOSS: "is_boss"
}

const MAP_INVASION_INTENTION = {
    ATTACKING: "attacking",
    CLAIMING: "claiming",
    BUILDING: "building",
    BUILDING_OUTPOST: "building_outpost",
    UPGRADING: "upgrading",
    TARGETED: "targeted",
    TARGETED_NO_WITCHES: "targeted_no_witches",
    SAVED: "saved",
    BOSS_OCCUPATION: "boss_occupation"
}

const MAP_INVASION_ACTIVE = {
    IS_ATTACKING: "is_attacking",
    IS_BUILDING: "is_building",
    IS_UPGRADING: "is_upgrading",
    IS_UNDER_ATTACK: "is_under_attack",
    IS_UNDER_ATTACK_NO_WITCHES: "is_under_attack_no_witches",
    IS_OCCUPIED: "is_occupied",
    IS_BOSS_OCCUPATION: "is_boss_occupation"
}

const MAP_INVASION_ATTACK = {
    ACTIVATED: "activated",
    ABANDONED: "abandoned"
}

const INVASION_ATTACK_AUTO_RESOLVE = {
    DAMAGED: "damaged",
    UNDAMAGED: "undamaged"
}

const MAP_INVASION_RECAP = {
    ATTACK_FAILURE: "attack_failure",
    ATTACK_SUCCESS: "attack_success",
    ATTACK_SUCCESS_ACT1: "attack_success_act1",
    BUILT_OFFENSIVE_OUTPOST: "built_offensive_outpost",
    BUILT_DEFENSIVE_OUTPOST: "built_defensive_outpost",
    BUILT_NEW_BASE: "built_new_base",
    UPGRADED: "upgraded",
    OOPSED: "oopsed",
    CLAIMED_AREA: "claimed_area"
}

const IS_DESTROYED = {
    TRUE: "true"
}

const TEAM_OUTLINES = {
    DISABLED: "disabled",
    ENABLED: "enabled"
}

const MAP_CLAIMED_AREA_VISIBILITY = {
    VISIBLE: "visible",
    INVISIBLE: "invisible"
}

const MAP_HORDE_ARRIVAL = {
    FALSE: "false",
    TRUE: "true"
}

const HORDE_ARRIVAL_MAP_KEYS = {
    [FACTION_NAME_ATTACK]: MAP_KEY.ATTACK_HORDE_ARRIVED,
    [FACTION_NAME_DEFEND]: MAP_KEY.DEFEND_HORDE_ARRIVED,
    [FACTION_NAME_OBSTACLE]: MAP_KEY.OBSTACLE_HORDE_ARRIVED,
    [FACTION_NAME_FROST]: MAP_KEY.FROST_HORDE_ARRIVED
}

const MAP_PLAYER_DAMAGED_BASE = {
    DAMAGED: "damaged"
}

const MAP_OBJECTIVE = {
    ACTIVE: "active",
    SUCCESS: "success",
    FAILURE: "failure"
}

const WITCH_HUT_STATE = {
    ACTIVE: "active",
    INACTIVE: "inactive"
}
