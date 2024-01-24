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
  INVASION_RECAP: "invasion_recap",
  INVASION_SPECIAL: "invasion_special",
  PVP_UNDER_ATTACK: "pvp_under_attack",
  VILLAGE_CHEST_STATE: "village_chest_state",
  VILLAGE_RESOURCE: "village_resource",
  VILLAGE_RESOURCE_VISIBILITY: "village_resource_visibility",
  VILLAGE_LEVEL: "village_level",
  IS_DESTROYED: "is_destroyed",
  PLAYER_ID: "player_id",
  MOB_ALLEGIANCE: "mob_allegiance",
  ONBOARDING: "onboarding_map",
  PLAYER_WAYPOINT: "player_waypoint",
  TEAM_OUTLINES: "team_outlines",
  CAN_FAST_TRAVEL: "can_fast_travel",
  PVP_VILLAGE_OWNERSHIP: "pvp_village_ownership",
  CAMPAIGN_ACT: "campaign_act",
  ACT1_VILLAGE_STATE: "act1_village_state",
  MOUNT_WORLD_SPAWNER: "mount_world_spawner_state",
  CLAIMED_AREA: "claimed_area",
  ATTACKING_FACTION: "attacking_faction",
  STRENGTH: "strength",
  CLAIMED_AREA_VISIBILITY: "claimed_area_visibility",
  ATTACK_HORDE_ARRIVED: "attack_horde_arrived",
  DEFEND_HORDE_ARRIVED: "defend_horde_arrived",
  PLAYER_STATE: "player_state",
  OBSTACLE_HORDE_ARRIVED: "obstacle_horde_arrived",
  FROST_HORDE_ARRIVED: "frost_horde_arrived",
  BASE_LOOT: "base_loot",
  DISTRICT: "district",
  PLAYER_DAMAGED_BASE: "player_damaged",
  MARKER_TYPE: "marker_type",
  OBJECTIVE: "objective",
  WITCH_HUT_STATE: "witch_hut_state"
};

// note: be careful using the strict equality comparison here
const MAP_ZOOM = {
  DEFAULT: 1,
  ZOOM: 0,
};

const MAP_BASE_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BOSS: "boss",
  OCCUPYING_CREEPER: "piglin_occupying_creeper_mob_alliance",
  OCCUPYING_SKELETON: "piglin_occupying_skeleton_mob_alliance",
  OCCUPYING_SPIDER: "piglin_occupying_spider_mob_alliance",
  OCCUPYING_ZOMBIE: "piglin_occupying_zombie_mob_alliance",
  ACT1_A: "act1_a",
  ACT1_B: "act1_b",
  ACT1_C: "act1_c",
  DARK_BEACON: "darkBeacon",
  FOB_SMALL: "fobSmall",
  FOB_MEDIUM: "fobMedium",
  FOB_LARGE: "fobLarge",
  VANGUARD_A: "vanguardA",
  FRONTLINE_A: "frontlineA",
  WOF_BASE: "wofBase",
  PLAYER: "player_outpost",
  BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE: "piglin_act1_non_portal_attack_base",
};

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
};

const MAP_VISIBILITY = {
  VISIBLE: "visible",
  HIDDEN: "hidden",
  REVEALED: "revealed",
};

const MAP_TEAM = {
  TWO: "team_two",
  ONE: "team_one",
  PIGLIN: "piglin_team",
};

const GAME_RULE = {
  PVP: "pvp",
};

const MAP_CATEGORY = {
  FACTION: "faction",
  PLAYER: "player",
  BUILDABLE: "buildable",
  MOB: "mob",
  WORLD_SPAWNER: "world_spawner",
  DEBUG: "debug",
};

const MAP_FAST_TRAVEL = {
  DISABLED: "disabled",
  ENABLED: "enabled",
};

const MAP_CAN_FAST_TRAVEL = {
  TRUE: "true",
  FALSE: "false",
};

const MAP_INVASION_SPECIAL = {
  IS_NORMAL: "is_normal",
  IS_BOSS: "is_boss",
};

const MAP_INVASION_STRENGTH = {
  STRENGTH_1: "1",
  STRENGTH_2: "2",
  STRENGTH_3: "3"
};

const MAP_BOSS = {
  DEFEATED: "defeated",
  DEFEND_BOSS: "defend_base_boss",
  OBSTACLE_BOSS: "obstacle_base_boss",
  FROST_BOSS: "frost_base_boss"
};

const PLAYER_STATE = {
  EXPLORING: "exploring",
  RESOURCING: "resourcing",
  COMBAT: "combat",
  BUILDING: "building",
};

const MAP_INVASION_STATE = {
  ENABLED: "enabled",
  DISABLED: "disabled",
};

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
};

const MAP_INVASION_ACTIVE = {
  IS_ATTACKING: "is_attacking",
  IS_DEFENDING: "is_building",
  IS_UPGRADING: "is_upgrading",
  IS_UNDER_ATTACK: "is_under_attack",
  IS_UNDER_ATTACK_NO_WITCHES: "is_under_attack_no_witches",
  IS_OCCUPIED: "is_occupied",
  IS_BOSS_OCCUPATION: "is_boss_occupation"
};

const MAP_INVASION_ATTACK = {
  ACTIVATED: "activated",
  ABANDONED: "abandoned",
};

const MAP_INVASION_RECAP = {
  ATTACK_FAILURE: "attack_failure",
  ATTACK_SUCCESS: "attack_success",
  ATTACK_SUCCESS_ACT1: "attack_success_act1",
  OFFENSIVE_OUTPOST: "built_offensive_outpost",
  DEFENSIVE_OUTPOST: "built_defensive_outpost",
  NEW_BASE: "built_new_base",
  UPGRADED: "upgraded",
  OOPSED: "oopsed",
  CLAIMED_AREA: "claimed_area",
};

const MAP_PVP_UNDER_ATTACK = {
  DISABLED: "disabled",
  ENABLED: "enabled",
};

const MAP_VILLAGE_CHEST = {
  COLLECTED: "collected",
  UNCOLLECTED: "uncollected",
  FULL: "full"
}

const MAP_MOB_ALLEGIANCE = {
  DISABLED: "disabled",
  ENABLED: "enabled",
};

const MAP_ONBOARDING = {
  DISABLED: "disabled",
  ENABLED: "enabled",
};

const CAMPAIGN_ACT = {
  DISABLED: "disabled", 
  ACT_1A: "act_1a", 
  ACT_1B: "act_1b", 
  ACT_2: "act_2", 
  ACT_3: "act_3", 
  EPILOGUE: "epilogue"
};

const MAP_MOUNT_WORLD_SPAWNER = {
  DISABLED: "disabled",
  ENABLED: "enabled",
};

const MAP_PLAYER_WAYPOINT = {
  DISABLED: "disabled",
  ENABLED: "enabled",
};

const MAP_DISTRICT = {
  TOWER: "tower",
  TOWER_ATTACK: "tower_attack"
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

//ICON IDS
const MAP_FACTION_IDS = {
  WELL_OF_FATE: "faction.player.well",
  FACTION_DEFEND: "faction.pig.defend",
  FACTION_ATTACK: "faction.pig.attack",
  FACTION_OBSTACLE: "faction.pig.obstacle",
  FACTION_FROST: "faction.pig.frost",
  FACTION_PVP: "faction.pig.pvp",
  FACTION_DBB: "faction.pig.dbb",
  FACTION_WOF: "faction.pig.wof",
  CULTURE_VILLAGER: "faction.cul.001",
  MOB_ALLIANCE_CREEPER: "faction.mob.alliance.creeper",
  MOB_ALLIANCE_SKELETON: "faction.mob.alliance.skeleton",
  MOB_ALLIANCE_SPIDER: "faction.mob.alliance.spider",
  MOB_ALLIANCE_ZOMBIE: "faction.mob.alliance.zombie",
  TOWER_01: "faction.poi.tower_01",
  TOWER_02: "faction.poi.tower_02",
  TOWER_04: "faction.poi.tower_04",
  TOWER_05: "faction.poi.tower_05",
  ALLY_01: "faction.poi.ally.01.faction",
  ALLY_02: "faction.poi.ally.02",
  ALLY_04: "faction.poi.ally.04",
  ALLY_05: "faction.poi.ally.05",
  ALLY_06: "faction.poi.ally.06",
  LEGEND_01: "faction.poi.legend.dragon.red",
  MOUNT_01: "faction.poi.mount.01",
  MOUNT_03: "faction.poi.mount.03",
  MOUNT_04: "faction.poi.mount.04",
  MOUNT_06: "faction.poi.mount.06",
  MOUNT_07: "faction.poi.mount.07",
  UNNATURAL_LANDMARK_01: "faction.poi.unnatural.landmark.01",
  WITCH_HUT_PVP: "faction.witch.pvp"
};

const MAP_BUILDABLE_IDS = {
  TOWER_01: "poi_tower_01",
  TOWER_02: "poi_tower_02",
  TOWER_04: "poi_tower_04",
  TOWER_05: "poi_tower_05",
  PVP_HQ: "pvp_hq",
  WELL_OF_FATE: "poi_zoner_well_of_fate",
  FOUNTAIN: "zoner_village_center_fountain",
  FORT_OUTPOST: "zoner_fort_outpost",
};

const MAP_MOB_IDS = {
  ALLY_01: "mob_fallen_warrior",
  ALLY_02: "mob_golem_carrier",
  ALLY_04: "mob_golem_shield",
  ALLY_05: "mob_golem_sniper",
  ALLY_06: "mob_golem_drill",
  LEGEND_01: "dragon_red"
};

const WORLD_SPAWNER_IDS = {
  TIGER_MOUNT: "tiger_mount",
  BEETLE_MOUNT: "beetle_mount",
  BIRD_MOUNT: "bird_mount",
  MOUNT_06: "mount_06",
  CAMEL_MOUNT: "camel_mount",
};

const MAP_PLAYER_DAMAGED_BASE = {
  DAMAGED: "damaged"
};

const MAP_MARKER_TYPE = {
  WAYPOINT: "waypoint",
  ATTACK: "attack",
  DEFEND: "defend",
  GATHER: "gather",
};

const DEBUG_IDS = {
  DEBUG_ICON_01: "debug_01",
  DEBUG_ICON_02: "debug_02",
  DEBUG_ICON_03: "debug_03",
  DEBUG_ICON_04: "debug_04",
};

const MAP_DESCRIPTION_IDS = {
  //If you need to override a map tooltip for a specific Act, place it in one of these entries.
  [CAMPAIGN_ACT.ACT_1A]: {
    "faction.poi.ally.01.faction": "badger:wmap_mob_fallen_warrior_poi_tooltip_act1",
    "faction.poi.ally.02": "badger:wmap_mob_golem_carrier_poi_tooltip_act1",
    "faction.poi.ally.04": "badger:wmap_mob_golem_shield_poi_tooltip_act1",
    "faction.poi.ally.05": "badger:wmap_mob_golem_sniper_poi_tooltip_act1",
    "faction.poi.ally.06": "badger:wmap_mob_golem_drill_poi_tooltip_act1",
    "faction.poi.legend.dragon.red": "badger:wmap_dragon_red_poi_tooltip_act1",
    "faction.poi.tower_01": "badger:wmap_knockbacktower_tooltip_act1",
    poi_tower_01: "badger:wmap_knockbacktower_tooltip_act1",
    "faction.poi.tower_02": "badger:wmap_frost_tower_tooltip_act1",
    poi_tower_02: "badger:wmap_frost_tower_tooltip_act1",
    "faction.poi.tower_04": "badger:wmap_stun_tower_tooltip_act1",
    poi_tower_04: "badger:wmap_stun_tower_tooltip_act1",
    "faction.poi.tower_05": "badger:wmap_burn_tower_tooltip_act1",
    poi_tower_05: "badger:wmap_burn_tower_tooltip_act1",
  },
  [CAMPAIGN_ACT.ACT_1B]: {
    "faction.poi.ally.01.faction": "badger:wmap_mob_fallen_warrior_poi_tooltip_act1",
    "faction.poi.ally.02": "badger:wmap_mob_golem_carrier_poi_tooltip_act1",
    "faction.poi.ally.04": "badger:wmap_mob_golem_shield_poi_tooltip_act1",
    "faction.poi.ally.05": "badger:wmap_mob_golem_sniper_poi_tooltip_act1",
    "faction.poi.ally.06": "badger:wmap_mob_golem_drill_poi_tooltip_act1",
    "faction.poi.legend.dragon.red": "badger:wmap_dragon_red_poi_tooltip_act1",
    "faction.poi.tower_01": "badger:wmap_knockbacktower_tooltip_act1",
    poi_tower_01: "badger:wmap_knockbacktower_tooltip_act1",
    "faction.poi.tower_02": "badger:wmap_frost_tower_tooltip_act1",
    poi_tower_02: "badger:wmap_frost_tower_tooltip_act1",
    "faction.poi.tower_04": "badger:wmap_stun_tower_tooltip_act1",
    poi_tower_04: "badger:wmap_stun_tower_tooltip_act1",
    "faction.poi.tower_05": "badger:wmap_burn_tower_tooltip_act1",
    poi_tower_05: "badger:wmap_burn_tower_tooltip_act1",
  },
  [CAMPAIGN_ACT.ACT_2]: {},
  [CAMPAIGN_ACT.ACT_3]: {},
  [CAMPAIGN_ACT.EPILOGUE]: {},
  "faction.witch.pvp": "badger:wmap_illager_witch_tooltip",
  "faction.player.well": "badger:wmap_well_of_fate_tooltip",
  "faction.pig.defend": "badger:wmap_piglin_defend_faction_tooltip",
  "faction.pig.attack": "badger:wmap_piglin_attack_faction_tooltip",
  "faction.pig.obstacle": "badger:wmap_piglin_obstacle_faction_tooltip",
  "faction.pig.frost": "badger:wmap_piglin_frost_faction_tooltip",
  "faction.pig.pvp": "badger:wmap_piglin_pvp_faction_tooltip",
  "faction.pig.dbb": "badger:wmap_piglin_dbb_faction_tooltip",
  "faction.cul.001": "badger:wmap_villager_culture01_tooltip",
  "faction.player.pvp.hq.red": "badger:wmap_outpost_hq_pvp_red_tooltip",
  "faction.player.pvp.hq.blue": "badger:wmap_outpost_hq_pvp_blue_tooltip",
  "faction.mob.alliance.creeper": "badger:wmap_mob_creeper_tooltip",
  "faction.mob.alliance.skeleton": "badger:wmap_mob_skeleton_tooltip",
  "faction.mob.alliance.spider": "badger:wmap_mob_spider_tooltip",
  "faction.mob.alliance.zombie": "badger:wmap_mob_zombie_tooltip",
  "faction.poi.legend.dragon.red": "badger:wmap_dragon_red_tooltip",
  poi_legend_dragon_red: "badger:wmap_dragon_red_tooltip",
  "faction.poi.tower_01": "badger:wmap_knockbacktower_tooltip",
  poi_tower_01: "badger:wmap_knockbacktower_tooltip",
  "faction.poi.tower_02": "badger:wmap_frost_tower_tooltip",
  poi_tower_02: "badger:wmap_frost_tower_tooltip",
  "faction.poi.tower_04": "badger:wmap_stun_tower_tooltip",
  poi_tower_04: "badger:wmap_stun_tower_tooltip",
  "faction.poi.tower_05": "badger:wmap_burn_tower_tooltip",
  poi_tower_05: "badger:wmap_burn_tower_tooltip",
  "faction.poi.ally.01.faction": "badger:wmap_mob_fallen_warrior_poi_tooltip",
  mob_fallen_warrior: "badger:wmap_mob_fallen_warrior_tooltip",
  "faction.poi.ally.02": "badger:wmap_mob_golem_carrier_poi_tooltip",
  mob_golem_carrier: "badger:wmap_mob_golem_carrier_tooltip",
  "faction.poi.ally.04": "badger:wmap_mob_golem_shield_poi_tooltip",
  mob_golem_shield: "badger:wmap_mob_golem_shield_tooltip",
  "faction.poi.ally.05": "badger:wmap_mob_golem_sniper_poi_tooltip",
  mob_golem_sniper: "badger:wmap_mob_golem_sniper_tooltip",
  "faction.poi.ally.06": "badger:wmap_mob_golem_drill_poi_tooltip",
  mob_golem_drill: "badger:wmap_mob_golem_drill_tooltip",
  "faction.poi.mount.01": "badger:wmap_mount_purple_tiger_tooltip",
  "faction.poi.mount.03": "badger:wmap_mount_giant_beetle_tooltip",
  "faction.poi.mount.04": "badger:wmap_mount_giant_bird_tooltip",
  "faction.poi.mount.06": "badger:wmap_mount_06_tooltip",
  "faction.poi.mount.07": "badger:wmap_mount_camel_tooltip",
  "faction.poi.unnatural.landmark.01": "badger:wmap_poi_unnatural_landmark_01_tooltip",
  question_mark: "badger:wmap_question_mark_tooltip",
  zoner_fort_outpost: "badger:wmap_zoner_fort_outpost_tooltip",
  DESTROYED_BASE: "badger:wmap_destroyed_base_tooltip",
  DESTROYED_OUTPOST: "badger:wmap_destroyed_outpost_tooltip",
  PLAYER_TOOLTIP: "badger:wmap_player_tooltip",
  PLAYER_TEAMMATE_TOOLTIP: "badger:wmap_player_teammate_tooltip",
  PLAYER_WAYPOINT: "badger:wmap_player_waypoint_tooltip",
  PLAYER_WAYPOINT_TEAMMATE: "badger:wmap_player_waypoint_teammate_tooltip",
  DARK_BEACON_BASE_TOOLTIP: "badger:wmap_dark_beacon_base_tooltip",
  WELL_OF_FATE_ACT_3: "badger:wmap_well_of_fate_under_siege_tooltip",
  tiger_mount: "badger:wmap_world_spawner_mount_purple_tiger_tooltip",
  beetle_mount: "badger:wmap_world_spawner_mount_giant_beetle_tooltip",
  bird_mount: "badger:wmap_world_spawner_mount_giant_bird_tooltip",
  mount_06: "badger:wmap_world_spawner_mount_06_tooltip",
  camel_mount: "badger:wmap_world_spawner_mount_camel_tooltip",
  CLAIMED_AREA_UNKNOWN: "badger:wmap_claimed_area_unknown_tooltip",
  FACTION_UNKNOWN: "badger:wmap_unknown_faction_tooltip",
  VILLAGE_NEW_TOOLTIP: "badger:wmap_villager_culture01_new_tooltip",
  VILLAGE_OCCUPIED_TOOLTIP: "badger:wmap_villager_culture01_occupied_tooltip",
  VILLAGE_TARGETED_TOOLTIP: "badger:wmap_villager_culture01_targeted_tooltip",
  CREEPER_OCCUPIED_TOOLTIP: "badger:wmap_mob_creeper_occupied_tooltip",
  CREEPER_TARGETED_TOOLTIP: "badger:wmap_mob_creeper_targeted_tooltip",
  SKELETON_OCCUPIED_TOOLTIP: "badger:wmap_mob_skeleton_occupied_tooltip",
  SKELETON_TARGETED_TOOLTIP: "badger:wmap_mob_skeleton_targeted_tooltip",
  SPIDER_OCCUPIED_TOOLTIP: "badger:wmap_mob_spider_occupied_tooltip",
  SPIDER_TARGETED_TOOLTIP: "badger:wmap_mob_spider_targeted_tooltip",
  ZOMBIE_OCCUPIED_TOOLTIP: "badger:wmap_mob_zombie_occupied_tooltip",
  ZOMBIE_TARGETED_TOOLTIP: "badger:wmap_mob_zombie_targeted_tooltip",
  OUTPOST_TARGETED_TOOLTIP: "badger:wmap_zoner_fort_targeted_tooltip",
};

const PIGLIN_BOSS_DESCRIPTION_IDS = {
  "faction.pig.defend": "badger:wmap_piglin_defend_boss_tooltip",
  "faction.pig.attack": "badger:wmap_piglin_attack_boss_tooltip",
  "faction.pig.obstacle": "badger:wmap_piglin_obstacle_boss_tooltip",
  "faction.pig.frost": "badger:wmap_piglin_frost_boss_tooltip",
};

const MOB_ALLIANCE_PRE_ATTACK_VO_IDS = {
  "faction.mob.alliance.creeper": "badger:wmap_audio_invasion_mob_alliance_creeper_pre_attack",
  "faction.mob.alliance.skeleton": "badger:wmap_audio_invasion_mob_alliance_skeleton_pre_attack",
  "faction.mob.alliance.spider": "badger:wmap_audio_invasion_mob_alliance_spider_pre_attack",
  "faction.mob.alliance.zombie": "badger:wmap_audio_invasion_mob_alliance_zombie_pre_attack",
};

const MOB_ALLIANCE_UNDER_ATTACK_VO_IDS = {
  "faction.mob.alliance.creeper": "badger:wmap_audio_invasion_mob_alliance_creeper_occupied",
  "faction.mob.alliance.skeleton": "badger:wmap_audio_invasion_mob_alliance_skeleton_occupied",
  "faction.mob.alliance.spider": "badger:wmap_audio_invasion_mob_alliance_spider_occupied",
  "faction.mob.alliance.zombie": "badger:wmap_audio_invasion_mob_alliance_zombie_occupied",
};

const MOB_ALLIANCE_UNDER_ATTACK_DESCRIPTION_IDS = {
  "faction.mob.alliance.creeper": "badger:wmap_mob_creeper_under_attack_tooltip",
  "faction.mob.alliance.skeleton": "badger:wmap_mob_skeleton_under_attack_tooltip",
  "faction.mob.alliance.spider": "badger:wmap_mob_spider_under_attack_tooltip",
  "faction.mob.alliance.zombie": "badger:wmap_mob_zombie_under_attack_tooltip",
};

const MOB_ALLIANCE_POST_ALLIANCE_VO_IDS = {
  "faction.mob.alliance.creeper": "badger:wmap_audio_invasion_mob_alliance_creeper_post_alliance",
  "faction.mob.alliance.skeleton": "badger:wmap_audio_invasion_mob_alliance_skeleton_post_alliance",
  "faction.mob.alliance.spider": "badger:wmap_audio_invasion_mob_alliance_spider_post_alliance",
  "faction.mob.alliance.zombie": "badger:wmap_audio_invasion_mob_alliance_zombie_post_alliance",
};

const MAP_EXTENDED_TOOLTIP = {
  INVASION_INTENTION_ATTACKING: "badger:wmap_invasion_intention_attacking_tooltip",
  INVASION_INTENTION_BUILDING: "badger:wmap_invasion_intention_building_tooltip",
  INVASION_INTENTION_BUILDING_OUTPOST: "badger:wmap_invasion_intention_building_outpost_tooltip",
  INVASION_INTENTION_CLAIMING: "badger:wmap_invasion_intention_claiming_tooltip",
  INVASION_INTENTION_UPGRADING: "badger:wmap_invasion_intention_upgrading_tooltip",
  INVASION_INTENTION_TARGETED_STRENGTH_1: "badger:wmap_invasion_intention_targeted_strength_1_tooltip",
  INVASION_INTENTION_TARGETED_STRENGTH_2: "badger:wmap_invasion_intention_targeted_strength_2_tooltip",
  INVASION_INTENTION_TARGETED_STRENGTH_3: "badger:wmap_invasion_intention_targeted_strength_3_tooltip",
  INVASION_INTENTION_TARGETED_BOSS: "badger:wmap_invasion_intention_targeted_boss_tooltip",
  INVASION_INTENTION_TARGETED_BOSS_OCCUPATION: "badger:wmap_invasion_intention_targeted_boss_occupation_tooltip",
  INVASION_INTENTION_SAVED: "badger:wmap_invasion_intention_saved_tooltip",

  INVASION_ACT1_VA_TARGETED: "badger:wmap_invasion_act1_va_targeted_tooltip",

  INVASION_ACTIVE_ATTACKING: "badger:wmap_invasion_active_attacking_tooltip",
  INVASION_ACTIVE_BUILDING: "badger:wmap_invasion_active_building_tooltip",
  INVASION_ACTIVE_BUILDING_OUTPOST: "badger:wmap_invasion_active_building_outpost_tooltip",
  INVASION_ACTIVE_UPGRADING: "badger:wmap_invasion_active_upgrading_tooltip",
  INVASION_ACTIVE_UNDER_ATTACK: {
    [MAP_FACTION_IDS.FACTION_ATTACK]: {
      [MAP_INVASION_STRENGTH.STRENGTH_1]: "badger:wmap_invasion_active_under_attack_faction_attack_strength_1_tooltip",
      [MAP_INVASION_STRENGTH.STRENGTH_2]: "badger:wmap_invasion_active_under_attack_faction_attack_strength_2_tooltip",
      [MAP_INVASION_STRENGTH.STRENGTH_3]: "badger:wmap_invasion_active_under_attack_faction_attack_strength_3_tooltip",
    },
    [MAP_FACTION_IDS.FACTION_DEFEND]: {
      [MAP_INVASION_STRENGTH.STRENGTH_1]: "badger:wmap_invasion_active_under_attack_faction_defend_strength_1_tooltip",
      [MAP_INVASION_STRENGTH.STRENGTH_2]: "badger:wmap_invasion_active_under_attack_faction_defend_strength_2_tooltip",
      [MAP_INVASION_STRENGTH.STRENGTH_3]: "badger:wmap_invasion_active_under_attack_faction_defend_strength_3_tooltip",
    },
    [MAP_FACTION_IDS.FACTION_OBSTACLE]: {
      [MAP_INVASION_STRENGTH.STRENGTH_1]: "badger:wmap_invasion_active_under_attack_faction_obstacle_strength_1_tooltip",
      [MAP_INVASION_STRENGTH.STRENGTH_2]: "badger:wmap_invasion_active_under_attack_faction_obstacle_strength_2_tooltip",
      [MAP_INVASION_STRENGTH.STRENGTH_3]: "badger:wmap_invasion_active_under_attack_faction_obstacle_strength_3_tooltip",
    },
    [MAP_FACTION_IDS.FACTION_FROST]: {
      [MAP_INVASION_STRENGTH.STRENGTH_1]: "badger:wmap_invasion_active_under_attack_faction_frost_strength_1_tooltip",
      [MAP_INVASION_STRENGTH.STRENGTH_2]: "badger:wmap_invasion_active_under_attack_faction_frost_strength_2_tooltip",
      [MAP_INVASION_STRENGTH.STRENGTH_3]: "badger:wmap_invasion_active_under_attack_faction_frost_strength_3_tooltip",
    },
  },
  INVASION_ACTIVE_UNDER_ATTACK_BOSS: "badger:wmap_invasion_active_under_attack_boss_tooltip",
  INVASION_ACTIVE_OCCUPIED_VILLAGE: "badger:wmap_invasion_active_occupied_village_tooltip",
  INVASION_ACTIVE_OCCUPIED_MOB_ALLIANCE: "badger:wmap_invasion_active_occupied_mob_alliance_tooltip",
  INVASION_ACTIVE_OCCUPIED_BOSS_VILLAGE: "badger:wmap_invasion_active_occupied_boss_village_tooltip",
  INVASION_ACTIVE_OCCUPIED_BOSS_MOB_ALLIANCE: "badger:wmap_invasion_active_occupied_mob_alliance_tooltip",

  INVASION_ATTACK_ACTIVATED: "badger:wmap_invasion_attack_activated_tooltip",
  INVASION_ATTACK_ABANDONED: "badger:wmap_invasion_attack_abandoned_tooltip",

  INVASION_RECAP_ATTACK_OUTPOST_FAILURE: "badger:wmap_invasion_recap_attack_failure_outpost_tooltip",
  INVASION_RECAP_ATTACK_FAILURE: "badger:wmap_invasion_recap_attack_failure_tooltip",
  INVASION_RECAP_ATTACK_SUCCESS: "badger:wmap_invasion_recap_attack_success_tooltip",
  INVASION_RECAP_ATTACK_SUCCESS_ALLIANCE: {
    [MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER]: "badger:wmap_invasion_recap_attack_success_creeper_tooltip",
    [MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON]: "badger:wmap_invasion_recap_attack_success_skeleton_tooltip",
    [MAP_FACTION_IDS.MOB_ALLIANCE_SPIDER]: "badger:wmap_invasion_recap_attack_success_spider_tooltip",
    [MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE]: "badger:wmap_invasion_recap_attack_success_zombie_tooltip",
  },
  INVASION_RECAP_BUILT_DEFENSIVE_OUTPOST: "badger:wmap_invasion_recap_built_defensive_outpost_tooltip",
  INVASION_RECAP_BUILT_NEW_BASE: "badger:wmap_invasion_recap_built_new_base_tooltip",
  INVASION_RECAP_UPGRADED: "badger:wmap_invasion_recap_upgraded_tooltip",
  INVASION_RECAP_OOPSED: "badger:wmap_invasion_recap_oopsed_tooltip",
  MOB_ALLIANCE_UNDER_ATTACK: "badger:wmap_mob_alliance_under_attack_tooltip",
  MOB_ALLIANCE_DAMAGED: "badger:wmap_mob_homestead_damaged_tooltip",
  MOB_ALLEGIANCE_CREEPER: "badger:wmap_mob_alliance_allegiance_creeper",
  MOB_ALLEGIANCE_SKELETON: "badger:wmap_mob_alliance_allegiance_skeleton",
  MOB_ALLEGIANCE_SPIDER: "badger:wmap_mob_alliance_allegiance_spider",
  MOB_ALLEGIANCE_ZOMBIE: "badger:wmap_mob_alliance_allegiance_zombie",
  MOB_ALLEGIANCE_LOST_CREEPER: "badger:wmap_mob_alliance_lost_allegiance_creeper",
  MOB_ALLEGIANCE_LOST_SKELETON: "badger:wmap_mob_alliance_lost_allegiance_skeleton",
  MOB_ALLEGIANCE_LOST_SPIDER: "badger:wmap_mob_alliance_lost_allegiance_spider",
  MOB_ALLEGIANCE_LOST_ZOMBIE: "badger:wmap_mob_alliance_lost_allegiance_zombie",
  SMALL_PIGLIN_BASE: "badger:wmap_piglin_base_small_size_tooltip",
  MEDIUM_PIGLIN_BASE: "badger:wmap_piglin_base_medium_size_tooltip",
  LARGE_PIGLIN_BASE: "badger:wmap_piglin_base_large_size_tooltip",
  PIGLIN_MINING_OUTPOST: "badger:wmap_piglin_base_mining_outpost_size_tooltip",
  VILLAGE_CHEST_FILLED_AUDIO: "badger:wmap_village_chest_filled_tooltip_audio",
  VILLAGE_CHEST_FILLED: "badger:wmap_village_chest_filled_tooltip",
  VILLAGE_RESOURCE: "badger:wmap_village_resource_tooltip",
  VILLAGE_LEVEL: "badger:wmap_village_level_tooltip",
  VILLAGE_DAMAGED: "badger:wmap_village_damaged_tooltip",
  GENERIC_AUDIO_TOOLTIP: "badger:wmap_generic_audio_tooltip",
  CLAIMED_AREA: "badger:wmap_claimed_area_tooltip",
  BASE_LOOT: "badger:wmap_base_loot_tooltip",
  PLAYER_DAMAGED: "badger:wmap_player_damaged_base_tooltip",
  PLAYER_OUTPOST_DAMAGED: "badger:wmap_player_outpost_damaged_tooltip",
  WITCH_HUT_PVP_ACTIVE: "badger:wmap_illager_witch_active_tooltip",
  WITCH_HUT_PVP_INACTIVE: "badger:wmap_illager_witch_inactive_tooltip",
};

const MAP_EXTENDED_VO_TOOLTIP = {
  INVASION_UPGRADE_BASE_PLANNED: "badger:wmap_audio_invasion_upgrade_base_planned",
  INVASION_NEW_BASE_PLANNED: "badger:wmap_audio_invasion_new_base_planned",
  INVASION_NEW_OUTPOST_PLANNED: "badger:wmap_audio_invasion_new_base_planned", //using placeholder value that is the same as NEW_BASE_PLANNED
  INVASION_CLAIM_AREA_PLANNED: "badger:wmap_audio_invasion_claim_area_planned",
  INVASION_CLAIM_AREA_EXECUTED: "badger:wmap_audio_invasion_claim_area_executed",
  INVASION_VILLAGE_TARGETED: "badger:wmap_audio_invasion_village_targeted",
  INVASION_VILLAGE_TARGETED_NO_WITCHES: "badger:wmap_audio_invasion_village_targeted_no_witches",
  INVASION_VILLAGE_TARGETED_FOR_BOSS_OCCUPATION: "badger:wmap_audio_invasion_village_targeted_for_boss_occupation",
  INVASION_MOB_ALLIANCE_TARGETED: "badger:wmap_audio_invasion_mob_alliance_targeted",
  INVASION_OUTPOST_TARGETED: "badger:wmap_audio_invasion_outpost_targeted",
  INVASION_UPGRADE_BASE_RESOLVED: "badger:wmap_audio_invasion_upgrade_base_resolved",
  INVASION_NEW_BASE_RESOLVED: "badger:wmap_audio_invasion_new_base_resolved",
  INVASION_VILLAGE_UNDER_ATTACK: "badger:wmap_audio_invasion_village_under_attack",
  INVASION_VILLAGE_UNDER_ATTACK_NO_WITCHES: "badger:wmap_audio_invasion_village_under_attack_no_witches",
  INVASION_MOB_ALLIANCE_UNDER_ATTACK: "badger:wmap_audio_invasion_mob_alliance_under_attack",
  INVASION_VILLAGE_DAMAGED: "badger:wmap_audio_invasion_village_damaged",
  INVASION_MOB_ALLIANCE_DAMAGED: "badger:wmap_audio_invasion_mob_alliance_damaged",
  INVASION_VILLAGE_DESTROYED: "badger:wmap_audio_invasion_village_destroyed",
  INVASION_VILLAGE_PEACEFUL: "badger:wmap_audio_village_peaceful",
  INVASION_VILLAGE_SUCCESSFULLY_DEFENDED: "badger:wmap_audio_villagewassuccessfullydefended",
  INVASION_PLAYER_OUTPOST_DESTROYED: "badger:wmap_audio_invasion_outpost_destroyed",
  INVASION_MOB_ALLIANCE_SKELETON_DESTROYED: "badger:wmap_audio_invasion_mob_alliance_skeleton_destroyed",
  INVASION_MOB_ALLIANCE_CREEPER_DESTROYED: "badger:wmap_audio_invasion_mob_alliance_creeper_destroyed",
  INVASION_MOB_ALLIANCE_SPIDER_DESTROYED: "badger:wmap_audio_invasion_mob_alliance_spider_destroyed",
  INVASION_MOB_ALLIANCE_ZOMBIE_DESTROYED: "badger:wmap_audio_invasion_mob_alliance_zombie_destroyed",
};

const INVASION_BASE_DESTROYED_TOOLTIP = {
  [MAP_BASE_SIZE.MEDIUM]: {
    [MAP_FACTION_IDS.FACTION_ATTACK]: "badger:wmap_invasion_medium_base_destroyed_attack_tooltip",
    [MAP_FACTION_IDS.FACTION_DEFEND]: "badger:wmap_invasion_medium_base_destroyed_defend_tooltip",
    [MAP_FACTION_IDS.FACTION_OBSTACLE]: "badger:wmap_invasion_medium_base_destroyed_obstacle_tooltip",
    [MAP_FACTION_IDS.FACTION_FROST]: "badger:wmap_invasion_medium_base_destroyed_frost_tooltip",
  },
  [MAP_BASE_SIZE.LARGE]: {
    [MAP_FACTION_IDS.FACTION_ATTACK]: "badger:wmap_invasion_large_base_destroyed_attack_tooltip",
    [MAP_FACTION_IDS.FACTION_DEFEND]: "badger:wmap_invasion_large_base_destroyed_defend_tooltip",
    [MAP_FACTION_IDS.FACTION_OBSTACLE]: "badger:wmap_invasion_large_base_destroyed_obstacle_tooltip",
    [MAP_FACTION_IDS.FACTION_FROST]: "badger:wmap_invasion_large_base_destroyed_frost_tooltip",
    [MAP_FACTION_IDS.FACTION_DBB]: "badger:wmap_large_dbb_act2_skip_debug_tooltip",
  },
  [MAP_BASE_SIZE.BOSS]: {
    [MAP_FACTION_IDS.FACTION_ATTACK]: "badger:wmap_invasion_boss_base_destroyed_attack_tooltip",
    [MAP_FACTION_IDS.FACTION_DEFEND]: "badger:wmap_invasion_boss_base_destroyed_defend_tooltip",
    [MAP_FACTION_IDS.FACTION_OBSTACLE]: "badger:wmap_invasion_boss_base_destroyed_obstacle_tooltip",
    [MAP_FACTION_IDS.FACTION_FROST]: "badger:wmap_invasion_boss_base_destroyed_frost_tooltip",
  },
};

const MAP_ACTION = {
  DESTROY_PLAYER_WAYPOINT: "badger:wmap_destroy_waypoint_action",
};

//ANYTHING BELLOW THIS ISN`T PART OF THE BSHARP MAP CONSTS FILE
//ICONS GROUPING
const ICON_GROUP = {
  MAIN_ICON: "main_icon",
  INVASION_ACTIVE: "invasion_active_icon",
  INVASION_ACTIVE_SPECIAL: "invasion_active_special_icon",
  INVASION_INTENTION: "invasion_intention_icon",
  INVASION_ATTACK: "invasion_attack_icon",
  INVASION_RECAP: "invasion_recap_icon",
  INVASION_BASE_DESTROYED: "invasion_base_destroyed",
  BOSS_ICON: "boss_icon",
  FAST_TRAVEL_ICON: "fast_travel_icon",
  BASE_SIZE_ICON: "base_icon_size",
  STATE_ICON: "state_icon",
  PVP_UNDER_ATTACK: "pvp_under_attack_icon",
  VILLAGE_CHEST: "village_chest",
  VILLAGE_RESOURCE: "village_resource",
  VILLAGE_LEVEL: "village_level",
  VILLAGE_STATE_TOOLTIP: "village_state_tooltip",
  DESCRIPTION: "description",
  INVASION_ACTIVE_EXTENDED_TOOLTIP: "invasion_active_extended_tooltip",
  INVASION_INTENTION_EXTENDED_TOOLTIP: "invasion_intention_extended_tooltip",
  INVASION_ATTACK_EXTENDED_TOOLTIP: "invasion_attack_extended_tooltip",
  INVASION_RECAP_EXTENDED_TOOLTIP: "invasion_recap_extended_tooltip",
  CLAIMED_AREA_EXTENDED_TOOLTIP: "claimed_area_extended_tooltip",
  GENERIC_AUDIO_TOOLTIP: "generic_audio_tooltip",
  MOB_ALLIANCE_EXTENDED_TOOLTIP: "mob_alliance_extended_tooltip",
  SIZE_TOOLTIP: "size_tooltip",
  AUDIO_TOOLTIP: "audio_tooltip",
  VO_TOOLTIP: "VO_tooltip",
  VO_TOOLTIP_VILLAGE_STATE: "vo_tooltip_village_state",
  VO_TOOLTIP_INVASION_INTENTION: "vo_tooltip_invasion_intention",
  VO_TOOLTIP_INVASION_ACTIVE: "vo_tooltip_invasion_active",
  VO_TOOLTIP_INVASION_RECAP: "vo_tooltip_invasion_recap",
  DESTROYED_TOOLTIP: "destroyed_tooltip",
  MOB_ALLEGIANCE_STATE: "mob_allegiance_state",
  FAST_TRAVEL_STATE: "fast_travel_state",
  ACTION: "action",
  PVP_VILLAGE_OWNERSHIP_BLUE: "pvp_village_ownership_blue",
  PVP_VILLAGE_OWNERSHIP_ORANGE: "pvp_village_ownership_orange",
  PVP_POI_OWNERSHIP: "pvp_poi_ownership",
  ACT1_VILLAGE_STATE: "act1_village_state",
  ORIENTATION_ICON: "orientation_icon",
  CELEBRATION_ICON: "celebration_icon",
  OFFSET_TARGET: "offset_target",
  ATTACK_BANNER: "attack_banner",
  ATTACK_PIPS: "attack_pips",
  PLAYER_STATE: "player_state",
  PLAYER_DAMAGED_TOOLTIP: "player_damaged_base_tooltip",
  OBJECTIVE: "objective",
  OBJECTIVE_BEACON: "objective_beacon",
  WITCH_HUT_STATE_TOOLTIP: "witch_hut_state_tooltip"
};

const IS_DESTROYED = {
  TRUE: "true",
};

//ICON ENTITIES
const MAP_ICON = {
  PLAYER: "badger:wmap_hero_ranger",
  PLAYER_BLUE: "badger:wmap_hero_blue",
  PLAYER_ORANGE: "badger:wmap_hero_orange",
  PLAYER_WAYPOINT: "badger:wmap_waypoint_player",
  PLAYER_WAYPOINT_TEAMMATE: "badger:wmap_waypoint_teammate",
  PLAYER_ATTACK_WAYPOINT: "badger:wmap_attack_player",
  PLAYER_ATTACK_WAYPOINT_TEAMMATE: "badger:wmap_attack_teammate",
  PLAYER_DEFEND_WAYPOINT: "badger:wmap_defend_player",
  PLAYER_DEFEND_WAYPOINT_TEAMMATE: "badger:wmap_defend_teammate",
  PLAYER_GATHER_WAYPOINT: "badger:wmap_gather_player",
  PLAYER_GATHER_WAYPOINT_TEAMMATE: "badger:wmap_gather_teammate",
  PLAYER_ORIENTATION: "badger:wmap_arrow_marker",
  TEAMMATE: "badger:wmap_teammate",
  TEAMMATE_BLUE: "badger:wmap_teammate_blue",
  TEAMMATE_ORANGE: "badger:wmap_teammate_orange",
  WELL_OF_FATE: "badger:wmap_well_of_fate",
  FACTION_PIGLIN_SMALL: "badger:wmap_piglin_base_small",
  FACTION_PIGLIN_MEDIUM: "badger:wmap_piglin_base_medium",
  FACTION_PIGLIN_LARGE: "badger:wmap_piglin_base_large",
  FACTION_PIGLIN_OUTPOST: "badger:wmap_piglin_outpost",
  DARK_BEACON: "badger:wmap_dark_beacon_base",
  CULTURE_VILLAGER: "badger:wmap_village_fountain",
  MOB_ALLIANCE_CREEPER: "badger:wmap_mob_creeper",
  MOB_ALLIANCE_SKELETON: "badger:wmap_mob_skeleton",
  MOB_ALLIANCE_SPIDER: "badger:wmap_mob_spider",
  MOB_ALLIANCE_ZOMBIE: "badger:wmap_mob_zombie",
  TOWER_01: "badger:wmap_knockbacktower",
  TOWER_02: "badger:wmap_frost_tower",
  TOWER_04: "badger:wmap_stun_tower",
  TOWER_05: "badger:wmap_burn_tower",
  ALLY_01: "badger:wmap_mob_fallen_warrior",
  ALLY_02: "badger:wmap_mob_golem_carrier",
  ALLY_04: "badger:wmap_mob_golem_shield",
  ALLY_05: "badger:wmap_mob_golem_sniper",
  ALLY_06: "badger:wmap_mob_golem_drill",
  LEGEND_01: "badger:wmap_dragon_red",
  MOUNT_01: "badger:wmap_mount_purple_tiger",
  MOUNT_03: "badger:wmap_mount_giant_beetle",
  MOUNT_04: "badger:wmap_mount_giant_bird",
  MOUNT_06: "badger:wmap_mount_06",
  MOUNT_07: "badger:wmap_mount_camel",
  UNNATURAL_LANDMARK_01: "badger:wmap_shape_green_diamond",
  QUESTION_MARK: "badger:wmap_question_mark",
  PVP_HQ_BLUE: "badger:wmap_outpost_hq_pvp_blue",
  PVP_HQ_ORANGE: "badger:wmap_outpost_hq_pvp_red",
  FAST_TRAVEL_TARGET: "badger:wmap_fast_travel_target",
  FORT_OUTPOST: "badger:wmap_outpost_hq_pvp_blue",
  DESTROYED_BASE: "badger:wmap_destroyed_base",
  DESTROYED_VILLAGE: "badger:wmap_destroyed_village",
  DESTROYED_PLAYER_OUTPOST: "badger:wmap_outpost_hq_pvp_destroyed",
  CLAIMED_AREA_ATTACK: "badger:wmap_base_state_banner_attack",
  CLAIMED_AREA_DEFEND: "badger:wmap_base_state_banner_defend",
  CLAIMED_AREA_OBSTACLE: "badger:wmap_base_state_banner_obstacle",
  CLAIMED_AREA_FROST: "badger:wmap_base_state_banner_frost",
  WITCH_HUT: "badger:wmap_mob_illager_witch"
};

const PIGLIN_DESTROYED_ICON = {
  "faction.pig.defend": "badger:wmap_destroyed_base_defend",
  "faction.pig.attack": "badger:wmap_destroyed_base_attack",
  "faction.pig.obstacle": "badger:wmap_destroyed_base_obstacle",
  "faction.pig.frost": "badger:wmap_destroyed_base_frost",
  "faction.pig.dbb": "badger:wmap_destroyed_base_attack",
};

const INVASION_GROUP_ICON = {
  ATTACKING: "badger:wmap_base_state_banner",
  BUILDING: "badger:wmap_base_state_banner",
  BUILDING_OUTPOST: "badger:wmap_base_state_banner", //using placeholder value that is the same as one associated with BUILDING
  CLAIMING: "badger:wmap_base_state_banner",
  UPGRADING: "badger:wmap_base_state_banner",
  TARGETED: "badger:wmap_under_attack",
  SAVED: "badger:wmap_fx",
  IS_ATTACKING: "badger:wmap_base_state_banner",
  IS_DEFENDING: "badger:wmap_shape_yellow_triangle",
  IS_UPGRADING: "badger:wmap_base_state_banner",
  IS_UNDER_ATTACK: "badger:wmap_under_attack",
  ACTIVATED: "badger:wmap_shape_green_diamond",
  ABANDONED: "badger:wmap_base_state_banner",
  IS_CELEBRATING: "badger:wmap_fx",
  ATTACK_SUCCESS: "badger:wmap_under_attack",
  OOPSED: "badger:wmap_base_state_banner",
  OCCUPIED: "badger:wmap_base_state_banner",
};

const BASE_SIZE_ICON = {
  SIZE_SMALL: "badger:wmap_shape_yellow_triangle",
  SIZE_MEDIUM: "badger:wmap_shape_yellow_triangle",
  SIZE_LARGE: "badger:wmap_shape_yellow_triangle",
};

const STATE_GROUP_ICON = {
  VILLAGE_DAMAGED: "badger:wmap_fx",
  WOF_UNDER_ATTACK: "badger:wmap_under_attack",
  MOB_ALLIANCE_UNDER_SIEGE: "badger:wmap_fx",
  FAST_TRAVEL_ENABLE: "badger:wmap_fast_travel_indicator",
};

const MAP_MISC_ICON = {
  PVP_UNDER_ATTACK: "badger:wmap_under_attack",
  MOB_ALLEGIANCE_BANNER: "badger:wmap_mob_allegiance_banner",
  BLUE_TEAM_OWNED: "badger:wmap_pip_01",
  ORANGE_TEAM_OWNED: "badger:wmap_pip_02",
};

const PLAYER_OUTPOST_VO = {
  TARGETED: "badger:wmap_audio_outpost_targeted",
  UNDER_ATTACK: "badger:wmap_audio_outpost_underattack",
  SURVIVED_ATTACK: "badger:wmap_audio_outpost_survived_attack",
  DESTROYED: "badger:wmap_audio_outpost_destroyed",
};

const OBJECTIVE_ICON = {
  ACTIVE: "badger:wmap_objective",
  SUCCESS: "badger:wmap_objective",
  FAILURE: "badger:wmap_objective"
}

const OBJECTIVE_BEACON_ICON = {
  DBB: "badger:wmap_dark_beacon_base_beam",
  WOF: "badger:wmap_wof_beam",
  VILLAGE: "badger:wmap_village_fountain_beam",
  OUTPOST: "badger:wmap_piglin_outpost_beam"
}

//PRESENTATIONS
const MAP_PRESENTATION = {
  IS_ATTACKED: "is_attacked",
  IS_CELEBRATING: "is_celebrating",
  NOT_CELEBRATING: "not_celebrating",
  ON_ATTACK: "on_attack",
  ON_UPGRADE: "on_upgrade",
  ON_NEW: "on_new",
  ON_OOPS: "on_oops",
  ON_PLANNED: "on_planned",
  ON_SUCCESS: "on_success",
  END_NEW: "end_new",
  FACTION_DEFEND: "horde_defend",
  FACTION_ATTACK: "horde_attack",
  FACTION_OBSTACLE: "horde_obstacle",
  FACTION_FROST: "horde_frost",
  FACTION_DBB: "horde_attack",
  CHEST_FULL: "on_state",
  CHEST_COLLECTED: "off_state",
  BOSS_INVASION: "boss_attack",
  NEW_CLAIMED_AREA: "new_claimed_area",
  WOF_ATTACKED: "wof_attacked",
  MISC_OBJECTIVE: "on_misc_objective",
  STORY_OBJECTIVE: "on_story_objective",
  PIGLIN_OBJECTIVE: "on_piglin_objective"
};

const BANNER_PRESENTATION = {
  [MAP_FACTION_IDS.FACTION_ATTACK]: MAP_PRESENTATION.FACTION_ATTACK,
  [MAP_FACTION_IDS.FACTION_DEFEND]: MAP_PRESENTATION.FACTION_DEFEND,
  [MAP_FACTION_IDS.FACTION_OBSTACLE]: MAP_PRESENTATION.FACTION_OBSTACLE,
  [MAP_FACTION_IDS.FACTION_FROST]: MAP_PRESENTATION.FACTION_FROST,
  BOSS: {
    [MAP_FACTION_IDS.FACTION_ATTACK]: "boss_attack",
    [MAP_FACTION_IDS.FACTION_DEFEND]: "boss_defend",
    [MAP_FACTION_IDS.FACTION_OBSTACLE]: "boss_obstacle",
    [MAP_FACTION_IDS.FACTION_FROST]: "boss_frost",
  },
};

const HORDE_ARRIVAL_KEY = {
  [MAP_FACTION_IDS.FACTION_ATTACK]: MAP_KEY.ATTACK_HORDE_ARRIVED,
  [MAP_FACTION_IDS.FACTION_DEFEND]: MAP_KEY.DEFEND_HORDE_ARRIVED,
  [MAP_FACTION_IDS.FACTION_OBSTACLE]: MAP_KEY.OBSTACLE_HORDE_ARRIVED,
  [MAP_FACTION_IDS.FACTION_FROST]: MAP_KEY.FROST_HORDE_ARRIVED,
};

//OTHER
const INVISIBLE_BASE_SIZES = [MAP_BASE_SIZE.OCCUPYING_CREEPER, MAP_BASE_SIZE.OCCUPYING_SKELETON, MAP_BASE_SIZE.OCCUPYING_SPIDER, MAP_BASE_SIZE.OCCUPYING_ZOMBIE, MAP_BASE_SIZE.FOB_SMALL, MAP_BASE_SIZE.FOB_MEDIUM, MAP_BASE_SIZE.FOB_LARGE];

const TEAM_OUTLINES = {
  DISABLED: "disabled",
  ENABLED: "enabled",
};

const ALLIANCE_RULES = {
  SHARED_MAP: "shared_map",
};

const CLAIMED_AREA = {
  TRUE: "true",
};

const ATTACK_BANNER = {
  OFFSET: "badger:wmap_attack_banner_offset",
  ATTACK_BANNER: "badger:wmap_base_state_banner_attack",
  DEFEND_BANNER: "badger:wmap_base_state_banner_defend",
  OBSTACLE_BANNER: "badger:wmap_base_state_banner_obstacle",
  FROST_BANNER: "badger:wmap_base_state_banner_frost",
  PIP: "badger:wmap_pip_piglin",
};

const ATTACK_BOSS_BANNER = {
  OFFSET: "badger:wmap_attack_banner_offset",
  BANNER: "badger:wmap_base_state_banner_boss_attack",
  PIP: "badger:wmap_pip_piglin",
};

const MAP_CLAIMED_AREA_VISIBILITY = {
  VISIBLE: "visible",
  INVISIBLE: "invisible",
};

const MAP_HORDE_ARRIVAL = {
  FALSE: "false",
  TRUE: "true",
};

// the base state banner is a multi-purpose banner which can be used in a variety of situations given a presentation event.
const BASE_BANNER_ENTITY = "badger:wmap_base_state_banner";