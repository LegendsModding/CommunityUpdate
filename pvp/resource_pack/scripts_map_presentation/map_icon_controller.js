const isMobAlliance = () => {
  switch (get(MAP_CATEGORY.FACTION)) {
    case MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER:
    case MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON:
    case MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE:
      return true;
  }
  return false;
};

const isPlayerOutpost = () => {
  return get(MAP_KEY.SIZE) === MAP_BASE_SIZE.PLAYER;
};

const displayVillageIcons = () => {
  displayVillageStateIcon();
  displayTeamIdentifier();
  displayPvPUnderAttackIcon();
  displayInvasionStateIcon();
  displayFastTravelStateIcon();
  displayChestStateIcon();
  displayChestRareResourceIcon();
  displayAct1StateIcon();
  // we don't want to explicitly show the level as it's supposed to be a "hidden" system
  // displayVillageCultureLevel();
};

const displayDistrictIcon = () => {
  if (!exists(MAP_KEY.DISTRICT)) {
    return;
  }

  if (get(MAP_KEY.IS_DESTROYED) === "true") {
    makeEntity(ICON_GROUP.MAIN_ICON, "badger:wmap_piglin_wof_tower_destroyed");
    return;
  }

  switch (get(MAP_KEY.DISTRICT)) {
    case MAP_DISTRICT.TOWER:
      makeEntity(ICON_GROUP.MAIN_ICON, "badger:wmap_piglin_wof_tower");
      break;
    case MAP_DISTRICT.TOWER_ATTACK:
      makeEntity(ICON_GROUP.MAIN_ICON, "badger:wmap_piglin_wof_tower_attack");
      break;
  }
}

const displayAct1StateIcon = () => {
  switch (get(MAP_KEY.ACT1_VILLAGE_STATE)) {
    case MAP_ICON_STATE.UNDER_ATTACK:
      makeEntity(
        ICON_GROUP.ACT1_VILLAGE_STATE,
        INVASION_GROUP_ICON.IS_UNDER_ATTACK
      );
      makeEntity(
        ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_UNDER_ATTACK[MAP_FACTION_IDS.FACTION_ATTACK][MAP_INVASION_STRENGTH.STRENGTH_1]
      );
      makeEntity(
        ICON_GROUP.VO_TOOLTIP_INVASION_ACTIVE,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_UNDER_ATTACK
      );
      break;
    case MAP_ICON_STATE.DAMAGED:
      makeEntity(
        ICON_GROUP.ACT1_VILLAGE_STATE,
        STATE_GROUP_ICON.MOB_ALLIANCE_UNDER_SIEGE
      );
      break;
    case MAP_ICON_STATE.TARGETED:
      makeEntity(ICON_GROUP.ACT1_VILLAGE_STATE, INVASION_GROUP_ICON.TARGETED);
      makeEntity(
        ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_UNDER_ATTACK[MAP_FACTION_IDS.FACTION_ATTACK][MAP_INVASION_STRENGTH.STRENGTH_1]
      );
      makeEntity(
        ICON_GROUP.VO_TOOLTIP_INVASION_ACTIVE,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_UNDER_ATTACK
      );
      break;
    case MAP_ICON_STATE.TARGTED_VA_ACT1:
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.TARGETED);
      presentation(ICON_GROUP.INVASION_INTENTION, MAP_PRESENTATION.ON_PLANNED);
      displayInvasionAttackBanner();
      makeEntity(
        ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_ACT1_VA_TARGETED
      );
      break;
    case MAP_ICON_STATE.DEFAULT:
      break;
  }
};

const displayVillageCultureIcon = (icon) => {
  if (get(MAP_KEY.STATE) === MAP_ICON_STATE.DISABLED || get(MAP_KEY.STATE) === MAP_ICON_STATE.DISABLED_ACT1) {
    return;
  }

  makeEntity(ICON_GROUP.MAIN_ICON, icon);
};

const displayPlayerOutpostIcon = () => {
  if (get(MAP_KEY.STATE) === MAP_ICON_STATE.DESTROYED) {
    return;
  }

  makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.FORT_OUTPOST);
};

//HELPERS
const displayVillageStateIcon = () => {
  const destroyed = get(MAP_KEY.IS_DESTROYED);
  if (destroyed === "hidden") {
    return;
  }

  const recapIsShown = exists(MAP_KEY.INVASION_RECAP) && !hasSeenKey(MAP_KEY.INVASION_RECAP)
  switch (get(MAP_KEY.STATE)) {
    // (Moe): MAP_ICON_STATE.UNHURT has been cut to avoid VO spam
    case MAP_ICON_STATE.DAMAGED:
      makeEntity(ICON_GROUP.STATE_ICON, STATE_GROUP_ICON.VILLAGE_DAMAGED);
      presentation(ICON_GROUP.STATE_ICON, MAP_PRESENTATION.IS_ATTACKED);
      setOffset(ICON_GROUP.STATE_ICON, ICON_GROUP.MAIN_ICON);

      if (isPlayerOutpost()) {
        makeEntity(
          ICON_GROUP.VILLAGE_STATE_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.PLAYER_OUTPOST_DAMAGED
        );
      } else {
        makeEntity(
          ICON_GROUP.VILLAGE_STATE_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.VILLAGE_DAMAGED
        );

        // Using VO_TOOLTIP_VILLAGE_STATE group here because the village can be both damaged and survived the attack
        // In the future we need to split the VO groups more distinctively.
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_VILLAGE_STATE,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_DAMAGED
        );
      }
      break;
    case MAP_ICON_STATE.DAMAGED_ACT1:
      makeEntity(ICON_GROUP.STATE_ICON, STATE_GROUP_ICON.VILLAGE_DAMAGED);
      presentation(ICON_GROUP.STATE_ICON, MAP_PRESENTATION.IS_ATTACKED);
      setOffset(ICON_GROUP.STATE_ICON, ICON_GROUP.MAIN_ICON);

      if (isPlayerOutpost()) {
        makeEntity(
          ICON_GROUP.VILLAGE_STATE_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.PLAYER_OUTPOST_DAMAGED
        );
      } else {
        makeEntity(
          ICON_GROUP.VILLAGE_STATE_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.VILLAGE_DAMAGED
        );
      }
      break;
    case MAP_ICON_STATE.DISABLED:
      // Used for villager villages since they can't be destroyed.
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.DESTROYED_VILLAGE);
      makeEntity(
        ICON_GROUP.VO_TOOLTIP,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_DESTROYED
      );
      break;
    case MAP_ICON_STATE.DISABLED_ACT1:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.DESTROYED_VILLAGE);
      break;
    case MAP_ICON_STATE.DESTROYED:
      // Used for player outposts.
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.DESTROYED_PLAYER_OUTPOST);
      break;
  }
};

const displayBossBanner = () => {
  // TODO: remove MAP_KEY.BOSS is redundant (with base size)
  if (get(MAP_KEY.SIZE) === MAP_BASE_SIZE.BOSS) {
    makeEntity(ICON_GROUP.BOSS_ICON, BASE_BANNER_ENTITY);
    presentation(
      ICON_GROUP.BOSS_ICON,
      BANNER_PRESENTATION.BOSS[get(MAP_CATEGORY.FACTION)]
    );
    setOffset(ICON_GROUP.BOSS_ICON, ICON_GROUP.MAIN_ICON);
  }

  // TODO: Do we need a custom banner for the DBB?

  // NOTE: This doesn't support the attack boss which goes through a separate flow.
};

const displayInvasionIntentionIcon = () => {
  switch (get(MAP_KEY.INVASION_INTENTION)) {
    case MAP_INVASION_INTENTION.ATTACKING:
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.ATTACKING);
      presentation(ICON_GROUP.INVASION_INTENTION, MAP_PRESENTATION.ON_ATTACK);
      makeEntity(
        ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_ATTACKING
      );
      break;
    case MAP_INVASION_INTENTION.BUILDING:
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.BUILDING);
      presentation(ICON_GROUP.INVASION_INTENTION, MAP_PRESENTATION.ON_NEW);
      makeEntity(
        ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_BUILDING
      );
      makeEntity(
        ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_NEW_BASE_PLANNED
      );
      break;
    case MAP_INVASION_INTENTION.BUILDING_OUTPOST:
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.BUILDING_OUTPOST); //unique icon key but using same asset as BUILDING
      presentation(ICON_GROUP.INVASION_INTENTION, MAP_PRESENTATION.ON_NEW);
      makeEntity(
        ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_BUILDING_OUTPOST
      );
      makeEntity(
        ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_NEW_OUTPOST_PLANNED //unique VO key but using same asset as NEW_BASE_PLANNED
      );
      break;
    case MAP_INVASION_INTENTION.CLAIMING:
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.CLAIMING);
      presentation(ICON_GROUP.INVASION_INTENTION, MAP_PRESENTATION.ON_ATTACK);
      makeEntity(
        ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_CLAIMING
      );
      makeEntity(
        ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_CLAIM_AREA_PLANNED
      );
      break;
    case MAP_INVASION_INTENTION.UPGRADING:
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.UPGRADING);
      presentation(ICON_GROUP.INVASION_INTENTION, MAP_PRESENTATION.ON_UPGRADE);
      makeEntity(
        ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_UPGRADING
      );
      makeEntity(
        ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_UPGRADE_BASE_PLANNED
      );
      break;
    case MAP_INVASION_INTENTION.TARGETED:
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.TARGETED);
      presentation(ICON_GROUP.INVASION_INTENTION, MAP_PRESENTATION.ON_PLANNED);
      displayInvasionAttackBanner();

      // Extended Tooltips
      if (get(MAP_KEY.INVASION_SPECIAL) === MAP_INVASION_SPECIAL.IS_BOSS) {
        makeEntity(
          ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_TARGETED_BOSS
        );
      }
      else {
        switch (get(MAP_KEY.STRENGTH)) {
          case MAP_INVASION_STRENGTH.STRENGTH_1:
            makeEntity(ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP, MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_TARGETED_STRENGTH_1);
            break;
          case MAP_INVASION_STRENGTH.STRENGTH_2:
            makeEntity(ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP, MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_TARGETED_STRENGTH_2);
            break;
          case MAP_INVASION_STRENGTH.STRENGTH_3:
            makeEntity(ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP, MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_TARGETED_STRENGTH_3);
            break;
        }
      }

      // VO
      if (isPlayerOutpost()) {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_OUTPOST_TARGETED
        );
      } else if (isMobAlliance()) {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_MOB_ALLIANCE_TARGETED
        );
      }
      else {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_TARGETED
        );
      }
      break;
    case MAP_INVASION_INTENTION.TARGETED_NO_WITCHES:
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.TARGETED);
      presentation(ICON_GROUP.INVASION_INTENTION, MAP_PRESENTATION.ON_PLANNED);
      displayInvasionAttackBanner();

      // Extended Tooltips
      if (get(MAP_KEY.INVASION_SPECIAL) === MAP_INVASION_SPECIAL.IS_BOSS) {
        makeEntity(
          ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_TARGETED_BOSS
        );
      }
      else {
        switch (get(MAP_KEY.STRENGTH)) {
          case MAP_INVASION_STRENGTH.STRENGTH_1:
            makeEntity(ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP, MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_TARGETED_STRENGTH_1);
            break;
          case MAP_INVASION_STRENGTH.STRENGTH_2:
            makeEntity(ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP, MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_TARGETED_STRENGTH_2);
            break;
          case MAP_INVASION_STRENGTH.STRENGTH_3:
            makeEntity(ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP, MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_TARGETED_STRENGTH_3);
            break;
        }
      }

      // VO
      if (isPlayerOutpost()) {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_OUTPOST_TARGETED
        );
      } else if (isMobAlliance()) {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_MOB_ALLIANCE_TARGETED
        );
      }
      else {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_TARGETED_NO_WITCHES
        );
      }
      break;
    case MAP_INVASION_INTENTION.SAVED:
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.SAVED);
      presentation(
        ICON_GROUP.INVASION_INTENTION,
        MAP_PRESENTATION.IS_CELEBRATING
      );
      makeEntity(
        ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_SAVED
      );
      break;
    case MAP_INVASION_INTENTION.BOSS_OCCUPATION:
      // Targeted ground maker and boss banner.
      makeEntity(ICON_GROUP.INVASION_INTENTION, INVASION_GROUP_ICON.TARGETED);
      presentation(ICON_GROUP.INVASION_INTENTION, MAP_PRESENTATION.ON_PLANNED);
      displayInvasionAttackBanner();

      makeEntity(
        ICON_GROUP.INVASION_INTENTION_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_INTENTION_TARGETED_BOSS_OCCUPATION
      );

      makeEntity(
        ICON_GROUP.VO_TOOLTIP_INVASION_INTENTION,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_TARGETED_FOR_BOSS_OCCUPATION
      );

      break;
  }
};

const displayInvasionActiveIcon = () => {
  switch (get(MAP_KEY.INVASION_ACTIVE)) {
    case MAP_INVASION_ACTIVE.IS_ATTACKING:
      /*
      makeEntity(ICON_GROUP.INVASION_ACTIVE, INVASION_GROUP_ICON.IS_ATTACKING);
      presentation(ICON_GROUP.INVASION_ACTIVE, MAP_PRESENTATION.ON_ATTACK);
    
      makeEntity(
        ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_ATTACKING
      );
      */
      break;
    case MAP_INVASION_ACTIVE.IS_DEFENDING:
      makeEntity(ICON_GROUP.INVASION_ACTIVE, INVASION_GROUP_ICON.IS_DEFENDING);
      makeEntity(
        ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_BUILDING
      );
      break;
    case MAP_INVASION_ACTIVE.IS_UPGRADING:
      makeEntity(ICON_GROUP.INVASION_ACTIVE, INVASION_GROUP_ICON.IS_UPGRADING);
      presentation(ICON_GROUP.INVASION_ACTIVE, MAP_PRESENTATION.ON_UPGRADE);
      makeEntity(
        ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_UPGRADING
      );
      break;
    case MAP_INVASION_ACTIVE.IS_UNDER_ATTACK:
      makeEntity(
        ICON_GROUP.INVASION_ACTIVE,
        INVASION_GROUP_ICON.IS_UNDER_ATTACK
      );
      presentation(ICON_GROUP.INVASION_ACTIVE, MAP_PRESENTATION.ON_ATTACK);
      displayInvasionAttackBanner();

      // Extended Tooltips
      if (get(MAP_KEY.INVASION_SPECIAL) === MAP_INVASION_SPECIAL.IS_BOSS) {
        makeEntity(
          ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_UNDER_ATTACK_BOSS
        );
      }
      else {
        makeEntity(ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP, MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_UNDER_ATTACK[get(MAP_KEY.ATTACKING_FACTION)][get(MAP_KEY.STRENGTH)]);
      }

      // VO
      if (isMobAlliance()) {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_ACTIVE,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_MOB_ALLIANCE_UNDER_ATTACK
        );
      } else if (isPlayerOutpost()) {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_ACTIVE,
          PLAYER_OUTPOST_VO.UNDER_ATTACK
        );
      } else {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_ACTIVE,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_UNDER_ATTACK
        );
      }
      break;
    case MAP_INVASION_ACTIVE.IS_UNDER_ATTACK_NO_WITCHES:
      makeEntity(
        ICON_GROUP.INVASION_ACTIVE,
        INVASION_GROUP_ICON.IS_UNDER_ATTACK
      );
      presentation(ICON_GROUP.INVASION_ACTIVE, MAP_PRESENTATION.ON_ATTACK);
      displayInvasionAttackBanner();

      // Extended Tooltips
      if (get(MAP_KEY.INVASION_SPECIAL) === MAP_INVASION_SPECIAL.IS_BOSS) {
        makeEntity(
          ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_UNDER_ATTACK_BOSS
        );
      }
      else {
        makeEntity(ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP, MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_UNDER_ATTACK[get(MAP_KEY.ATTACKING_FACTION)][get(MAP_KEY.STRENGTH)]);
      }

      // VO
      if (isMobAlliance()) {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_ACTIVE,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_MOB_ALLIANCE_UNDER_ATTACK
        );
      } else if (isPlayerOutpost()) {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_ACTIVE,
          PLAYER_OUTPOST_VO.UNDER_ATTACK
        );
      } else {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP_INVASION_ACTIVE,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_UNDER_ATTACK_NO_WITCHES
        );
      }
      break;
    case MAP_INVASION_ACTIVE.IS_OCCUPIED:
      makeEntity(ICON_GROUP.INVASION_ACTIVE, INVASION_GROUP_ICON.OCCUPIED);
      presentation(ICON_GROUP.INVASION_ACTIVE, MAP_PRESENTATION.ON_ATTACK);
      setOffset(ICON_GROUP.INVASION_ACTIVE, ICON_GROUP.MAIN_ICON);

      switch (get(MAP_CATEGORY.FACTION)) {
        case MAP_FACTION_IDS.CULTURE_VILLAGER:
          makeEntity(
            ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_OCCUPIED_VILLAGE
          );
          break;
        case MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER:
        case MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON:
        case MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE:
          makeEntity(
            ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_OCCUPIED_MOB_ALLIANCE
          );
          break;
      }

      break;
    case MAP_INVASION_ACTIVE.IS_BOSS_OCCUPATION:
      // Village targeted icon - active
      makeEntity(
        ICON_GROUP.INVASION_ACTIVE,
        INVASION_GROUP_ICON.IS_UNDER_ATTACK
      );
      presentation(ICON_GROUP.INVASION_ACTIVE, MAP_PRESENTATION.ON_ATTACK);
      displayInvasionAttackBanner();

      // Occupation icon
      makeEntity(ICON_GROUP.INVASION_ACTIVE_SPECIAL, INVASION_GROUP_ICON.OCCUPIED);
      presentation(ICON_GROUP.INVASION_ACTIVE_SPECIAL, MAP_PRESENTATION.ON_ATTACK);
      setOffset(ICON_GROUP.INVASION_ACTIVE_SPECIAL, ICON_GROUP.MAIN_ICON);

      switch (get(MAP_CATEGORY.FACTION)) {
        case MAP_FACTION_IDS.CULTURE_VILLAGER:
          makeEntity(
            ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_OCCUPIED_BOSS_VILLAGE
          );
          break;
        case MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER:
        case MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON:
        case MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE:
          makeEntity(
            ICON_GROUP.INVASION_ACTIVE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.INVASION_ACTIVE_OCCUPIED_BOSS_MOB_ALLIANCE
          );
          break;
      }

      break;
  }
};

const displayInvasionAttackIcon = () => {
  switch (get(MAP_KEY.INVASION_ATTACK)) {
    case MAP_INVASION_ATTACK.ACTIVATED:
      makeEntity(ICON_GROUP.INVASION_ATTACK, INVASION_GROUP_ICON.ACTIVATED);
      makeEntity(
        ICON_GROUP.INVASION_ATTACK_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_ATTACK_ACTIVATED
      );
      break;
    case MAP_INVASION_ATTACK.ABANDONED:
      makeEntity(ICON_GROUP.INVASION_ATTACK, INVASION_GROUP_ICON.ABANDONED);
      presentation(ICON_GROUP.INVASION_ATTACK, MAP_PRESENTATION.ON_OOPS);
      makeEntity(
        ICON_GROUP.INVASION_ATTACK_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_ATTACK_ABANDONED
      );
      break;
  }
};

const displayInvasionRecapIcon = () => {
  if (hasSeenKey(MAP_KEY.INVASION_RECAP)) {
    return;
  }
  switch (get(MAP_KEY.INVASION_RECAP)) {
    case MAP_INVASION_RECAP.ATTACK_FAILURE:
      if (isPlayerOutpost()) {
        makeEntity(
          ICON_GROUP.INVASION_RECAP_EXTENDED_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.INVASION_RECAP_ATTACK_OUTPOST_FAILURE
        );
        makeEntity(
          ICON_GROUP.VO_TOOLTIP,
          PLAYER_OUTPOST_VO.DESTROYED
        );
      } else {
        makeEntity(
          ICON_GROUP.INVASION_RECAP_EXTENDED_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.INVASION_RECAP_ATTACK_FAILURE
        );
      }
      break;
    case MAP_INVASION_RECAP.ATTACK_SUCCESS:
      makeEntity(ICON_GROUP.INVASION_RECAP, INVASION_GROUP_ICON.ATTACK_SUCCESS);
      presentation(ICON_GROUP.INVASION_RECAP, MAP_PRESENTATION.ON_SUCCESS);

      makeEntity(
        ICON_GROUP.CELEBRATION_ICON,
        INVASION_GROUP_ICON.IS_CELEBRATING
      );
      presentation(
        ICON_GROUP.CELEBRATION_ICON,
        MAP_PRESENTATION.IS_CELEBRATING
      );

      displayInvasionRecapSuccessTooltip()

      if (isPlayerOutpost()) {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP,
          PLAYER_OUTPOST_VO.SURVIVED_ATTACK
        );
      } else {
        makeEntity(
          ICON_GROUP.VO_TOOLTIP,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_VILLAGE_SUCCESSFULLY_DEFENDED
        );
      }

      break;
    case MAP_INVASION_RECAP.ATTACK_SUCCESS_ACT1:
      makeEntity(ICON_GROUP.INVASION_RECAP, INVASION_GROUP_ICON.ATTACK_SUCCESS);
      presentation(ICON_GROUP.INVASION_RECAP, MAP_PRESENTATION.ON_SUCCESS);

      makeEntity(
        ICON_GROUP.CELEBRATION_ICON,
        INVASION_GROUP_ICON.IS_CELEBRATING
      );
      presentation(
        ICON_GROUP.CELEBRATION_ICON,
        MAP_PRESENTATION.IS_CELEBRATING
      );

      makeEntity(
        ICON_GROUP.INVASION_RECAP_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_RECAP_ATTACK_SUCCESS
      );
      break;
    case MAP_INVASION_RECAP.DEFENSIVE_OUTPOST:
      presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.ON_NEW);
      makeEntity(
        ICON_GROUP.INVASION_RECAP_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_RECAP_BUILT_DEFENSIVE_OUTPOST
      );
      break;
    case MAP_INVASION_RECAP.NEW_BASE:
      presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.ON_NEW);
      makeEntity(
        ICON_GROUP.INVASION_RECAP_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_RECAP_BUILT_NEW_BASE
      );
      makeEntity(ICON_GROUP.VO_TOOLTIP_INVASION_RECAP,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_NEW_BASE_RESOLVED
      );
      break;
    case MAP_INVASION_RECAP.UPGRADED:
      presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.ON_NEW);
      if (!(get(MAP_KEY.SIZE) === MAP_BASE_SIZE.DARK_BEACON)) {
        makeEntity(
          ICON_GROUP.INVASION_RECAP_EXTENDED_TOOLTIP,
          MAP_EXTENDED_TOOLTIP.INVASION_RECAP_UPGRADED
        );
        makeEntity(ICON_GROUP.VO_TOOLTIP_INVASION_RECAP,
          MAP_EXTENDED_VO_TOOLTIP.INVASION_UPGRADE_BASE_RESOLVED
        );
      }
      break;
    case MAP_INVASION_RECAP.OOPSED:
      makeEntity(ICON_GROUP.INVASION_RECAP, INVASION_GROUP_ICON.OOPSED);
      presentation(ICON_GROUP.INVASION_RECAP, MAP_PRESENTATION.ON_OOPS);
      makeEntity(
        ICON_GROUP.INVASION_RECAP_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.INVASION_RECAP_OOPSED
      );
      break;
  }
};

const displayInvasionRecapSuccessTooltip = () => {
  const faction = get(MAP_CATEGORY.FACTION)
  if (faction === MAP_FACTION_IDS.CULTURE_VILLAGER) {
    makeEntity(
      ICON_GROUP.INVASION_RECAP_EXTENDED_TOOLTIP,
      MAP_EXTENDED_TOOLTIP.INVASION_RECAP_ATTACK_SUCCESS
    );
  } else {
    makeEntity(
      ICON_GROUP.INVASION_RECAP_EXTENDED_TOOLTIP,
      MAP_EXTENDED_TOOLTIP.INVASION_RECAP_ATTACK_SUCCESS_ALLIANCE[faction]
    );
  }
}

const displayInvasionAttackBanner = () => {
  // Need this to position the banner next to the village.
  makeEntity(ICON_GROUP.OFFSET_TARGET, ATTACK_BANNER.OFFSET);

  if (get(MAP_KEY.INVASION_SPECIAL) === MAP_INVASION_SPECIAL.IS_BOSS) {
    makeEntity(ICON_GROUP.ATTACK_BANNER, ATTACK_BOSS_BANNER.BANNER);
  }
  else if (exists(MAP_KEY.ATTACKING_FACTION)) {
    switch (get(MAP_KEY.ATTACKING_FACTION)) {
      case MAP_FACTION_IDS.FACTION_ATTACK:
        makeEntity(ICON_GROUP.ATTACK_BANNER, ATTACK_BANNER.ATTACK_BANNER);
        break;
      case MAP_FACTION_IDS.FACTION_DEFEND:
        makeEntity(ICON_GROUP.ATTACK_BANNER, ATTACK_BANNER.DEFEND_BANNER);
        break;
      case MAP_FACTION_IDS.FACTION_OBSTACLE:
        makeEntity(ICON_GROUP.ATTACK_BANNER, ATTACK_BANNER.OBSTACLE_BANNER);
        break;
    }
    if (exists(MAP_KEY.STRENGTH)) {
      makeEntity(ICON_GROUP.ATTACK_PIPS, ATTACK_BANNER.PIP);
      presentation(
        ICON_GROUP.ATTACK_PIPS,
        BANNER_PRESENTATION[get(MAP_KEY.ATTACKING_FACTION)]
      );
      presentation(ICON_GROUP.ATTACK_PIPS, "pip" + get(MAP_KEY.STRENGTH));
      setOffset(ICON_GROUP.ATTACK_PIPS, ICON_GROUP.OFFSET_TARGET);
    }
  }
  setOffset(ICON_GROUP.ATTACK_BANNER, ICON_GROUP.OFFSET_TARGET);
};

const displayInvasionStateIcon = () => {
  displayInvasionIntentionIcon();
  displayInvasionActiveIcon();
  //displayInvasionAttackIcon();
  displayInvasionRecapIcon();
};

const displayMobAllianceStateIcon = () => {
  const faction = get(MAP_CATEGORY.FACTION);

  switch (get(MAP_KEY.STATE)) {
    case MAP_ICON_STATE.DEFAULT:
      makeEntity(
        ICON_GROUP.VO_TOOLTIP,
        MOB_ALLIANCE_PRE_ATTACK_VO_IDS[faction]
      );
      break;
    case MAP_ICON_STATE.UNDER_ATTACK:
      makeEntity(
        ICON_GROUP.MOB_ALLIANCE_EXTENDED_TOOLTIP,
        MOB_ALLIANCE_UNDER_ATTACK_DESCRIPTION_IDS[faction]
      );
      makeEntity(
        ICON_GROUP.STATE_ICON,
        STATE_GROUP_ICON.MOB_ALLIANCE_UNDER_SIEGE
      );
      presentation(ICON_GROUP.STATE_ICON, MAP_PRESENTATION.IS_ATTACKED);
      makeEntity(
        ICON_GROUP.VO_TOOLTIP,
        MOB_ALLIANCE_UNDER_ATTACK_VO_IDS[faction]
      );

      /*
      makeEntity(
        ICON_GROUP.MOB_ALLIANCE_EXTENDED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.MOB_ALLIANCE_UNDER_ATTACK
      );
      */
      break;
    case MAP_ICON_STATE.DAMAGED:
      makeEntity(ICON_GROUP.STATE_ICON, STATE_GROUP_ICON.VILLAGE_DAMAGED);
      presentation(ICON_GROUP.STATE_ICON, MAP_PRESENTATION.IS_ATTACKED);
      makeEntity(
        ICON_GROUP.VILLAGE_STATE_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.MOB_ALLIANCE_DAMAGED
      );
      break;
    case MAP_ICON_STATE.DISABLED:
      makeEntity(ICON_GROUP.STATE_ICON, STATE_GROUP_ICON.VILLAGE_DAMAGED);
      presentation(ICON_GROUP.STATE_ICON, MAP_PRESENTATION.IS_ATTACKED);
      break;
    case MAP_ICON_STATE.COMPLETED:
      makeEntity(
        ICON_GROUP.VO_TOOLTIP,
        MOB_ALLIANCE_POST_ALLIANCE_VO_IDS[faction]
      );
      break;
  }
};

const displayMobAllegianceStateIcon = (mobAlliance) => {
  switch (get(MAP_KEY.MOB_ALLEGIANCE)) {
    case MAP_MOB_ALLEGIANCE.DISABLED:
      switch (mobAlliance) {
        case MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER:
          makeEntity(
            ICON_GROUP.MOB_ALLIANCE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.MOB_ALLEGIANCE_LOST_CREEPER
          );
          makeEntity(
            ICON_GROUP.VO_TOOLTIP,
            MAP_EXTENDED_VO_TOOLTIP.INVASION_MOB_ALLIANCE_CREEPER_DESTROYED
          );
          break;
        case MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON:
          makeEntity(
            ICON_GROUP.MOB_ALLIANCE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.MOB_ALLEGIANCE_LOST_SKELETON
          );
          makeEntity(
            ICON_GROUP.VO_TOOLTIP,
            MAP_EXTENDED_VO_TOOLTIP.INVASION_MOB_ALLIANCE_SKELETON_DESTROYED
          );
          break;
        case MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE:
          makeEntity(
            ICON_GROUP.MOB_ALLIANCE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.MOB_ALLEGIANCE_LOST_ZOMBIE
          );
          makeEntity(
            ICON_GROUP.VO_TOOLTIP,
            MAP_EXTENDED_VO_TOOLTIP.INVASION_MOB_ALLIANCE_ZOMBIE_DESTROYED
          );
          break;
      }
      break;
    case MAP_MOB_ALLEGIANCE.ENABLED:
      makeEntity(
        ICON_GROUP.MOB_ALLEGIANCE_STATE,
        MAP_MISC_ICON.MOB_ALLEGIANCE_BANNER
      );

      switch (mobAlliance) {
        case MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER:
          makeEntity(
            ICON_GROUP.MOB_ALLIANCE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.MOB_ALLEGIANCE_CREEPER
          );
          break;
        case MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON:
          makeEntity(
            ICON_GROUP.MOB_ALLIANCE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.MOB_ALLEGIANCE_SKELETON
          );
          break;
        case MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE:
          makeEntity(
            ICON_GROUP.MOB_ALLIANCE_EXTENDED_TOOLTIP,
            MAP_EXTENDED_TOOLTIP.MOB_ALLEGIANCE_ZOMBIE
          );
          break;
      }
      break;
  }
};

const displayPvpAllegianceStateIcon = () => {
  if (
    get(MAP_KEY.GAME_RULE) === GAME_RULE.PVP &&
    exists(MAP_KEY.PVP_VILLAGE_OWNERSHIP)
  ) {
    switch (get(MAP_KEY.PVP_VILLAGE_OWNERSHIP)) {
      case MAP_PVP_VILLAGE_OWNERSHIP.TEAM_BLUE:
        makeEntity(
          ICON_GROUP.PVP_VILLAGE_OWNERSHIP_BLUE,
          MAP_MISC_ICON.BLUE_TEAM_OWNED
        );
        break;
      case MAP_PVP_VILLAGE_OWNERSHIP.TEAM_ORANGE:
        makeEntity(
          ICON_GROUP.PVP_VILLAGE_OWNERSHIP_ORANGE,
          MAP_MISC_ICON.ORANGE_TEAM_OWNED
        );
        break;
      case MAP_PVP_VILLAGE_OWNERSHIP.BOTH_TEAMS:
        makeEntity(
          ICON_GROUP.PVP_VILLAGE_OWNERSHIP_BLUE,
          MAP_MISC_ICON.BLUE_TEAM_OWNED
        );
        makeEntity(
          ICON_GROUP.PVP_VILLAGE_OWNERSHIP_ORANGE,
          MAP_MISC_ICON.ORANGE_TEAM_OWNED
        );
        break;
    }
  }
};

const displayTeamIdentifier = () => {
  if (
    get(MAP_KEY.TEAM_OUTLINES) === TEAM_OUTLINES.ENABLED &&
    exists(MAP_KEY.TEAM)
  ) {
    setTeamOutline(get(MAP_KEY.TEAM));
  }
};

displayTeamIdentifierPip = () => {
  if (
    get(MAP_KEY.TEAM_OUTLINES) === TEAM_OUTLINES.ENABLED &&
    exists(MAP_KEY.TEAM)
  ) {
    makeEntity(
      ICON_GROUP.PVP_POI_OWNERSHIP,
      get(MAP_KEY.TEAM) === MAP_TEAM.TWO ? MAP_MISC_ICON.BLUE_TEAM_OWNED : MAP_MISC_ICON.ORANGE_TEAM_OWNED
    )
    setOffset(
      ICON_GROUP.PVP_POI_OWNERSHIP,
      ICON_GROUP.MAIN_ICON
    )
  }
}

const displayPvPUnderAttackIcon = () => {
  if (
    get(MAP_KEY.GAME_RULE) === GAME_RULE.PVP &&
    exists(MAP_KEY.PVP_UNDER_ATTACK)
  ) {
    switch (get(MAP_KEY.PVP_UNDER_ATTACK)) {
      case MAP_PVP_UNDER_ATTACK.DISABLED:
        break;
      case MAP_PVP_UNDER_ATTACK.ENABLED:
        makeEntity(ICON_GROUP.PVP_UNDER_ATTACK, MAP_MISC_ICON.PVP_UNDER_ATTACK);
        break;
    }
  }
};

const displayChestStateIcon = () => {
  switch (get(MAP_KEY.VILLAGE_CHEST_STATE)) {
    case MAP_VILLAGE_CHEST.COLLECTED:
      presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.CHEST_COLLECTED);
      break;
    case MAP_VILLAGE_CHEST.UNCOLLECTED:
      break;
    case MAP_VILLAGE_CHEST.FULL:
      presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.CHEST_FULL);
      makeEntity(
        ICON_GROUP.AUDIO_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.VILLAGE_CHEST_FILLED_AUDIO
      );
      makeEntity(
        ICON_GROUP.VILLAGE_CHEST,
        MAP_EXTENDED_TOOLTIP.VILLAGE_CHEST_FILLED
      );
      break;
  }
};

const displayChestRareResourceIcon = () => {
  if (exists(MAP_KEY.VILLAGE_RESOURCE)
    && get(MAP_KEY.VILLAGE_RESOURCE_VISIBILITY) === MAP_VISIBILITY.VISIBLE
    && get(MAP_KEY.SIZE) === MAP_BASE_SIZE.SMALL) {
    makeEntity(
      ICON_GROUP.VILLAGE_RESOURCE,
      MAP_EXTENDED_TOOLTIP.VILLAGE_RESOURCE
    );
    addTooltipParameter(get(MAP_KEY.VILLAGE_RESOURCE));
    // Adding this via script allows us to change it post-launch without modifying localized strings.
    addTooltipParameter("lapis");
  }
};

const displayVillageCultureLevel = () => {
  if (exists(MAP_KEY.VILLAGE_LEVEL)) {
    makeEntity(
      ICON_GROUP.VILLAGE_LEVEL,
      MAP_EXTENDED_TOOLTIP.VILLAGE_LEVEL
    );
    // level is 0 based so we shift it up by one
    const level = (parseInt(get(MAP_KEY.VILLAGE_LEVEL)) + 1).toString()
    addTooltipParameter(level);
  }
};

const displayWellOfFateStateIcon = () => {
  switch (get(MAP_KEY.STATE)) {
    case MAP_ICON_STATE.DEFAULT:
      break;
    case MAP_ICON_STATE.UNDER_ATTACK:
      makeEntity(ICON_GROUP.INVASION_ATTACK, STATE_GROUP_ICON.WOF_UNDER_ATTACK);
      presentation(ICON_GROUP.INVASION_ATTACK, MAP_PRESENTATION.IS_ATTACKED);
      makeEntity(ICON_GROUP.STATE_ICON, STATE_GROUP_ICON.VILLAGE_DAMAGED);
      presentation(ICON_GROUP.STATE_ICON, MAP_PRESENTATION.WOF_ATTACKED);
      break;
  }
};

const containBoss = () => {
  return get(MAP_KEY.SIZE) === MAP_BASE_SIZE.BOSS || get(MAP_KEY.STRENGTH) === 4
};

const destroyedBaseInvasionTooltip = () => {
  if (get(MAP_KEY.INVASION_STATE) === MAP_FAST_TRAVEL.ENABLED) {
    const baseSize = get(MAP_KEY.SIZE);
    if (
      baseSize === MAP_BASE_SIZE.MEDIUM ||
      baseSize === MAP_BASE_SIZE.LARGE ||
      baseSize === MAP_BASE_SIZE.BOSS
    ) {
      const faction = get(MAP_CATEGORY.FACTION);
      const tooltip = INVASION_BASE_DESTROYED_TOOLTIP[baseSize][faction];
      makeEntity(ICON_GROUP.INVASION_BASE_DESTROYED, tooltip);
    }
  }
};

const addWitchHutStateTooltip = () => {
  if (get(MAP_KEY.WITCH_HUT_STATE) === WITCH_HUT_STATE.ACTIVE) {
    const tooltip = MAP_EXTENDED_TOOLTIP.WITCH_HUT_PVP_ACTIVE;
    makeEntity(ICON_GROUP.WITCH_HUT_STATE_TOOLTIP, tooltip)
  } else {
    const tooltip = MAP_EXTENDED_TOOLTIP.WITCH_HUT_PVP_INACTIVE;
    makeEntity(ICON_GROUP.WITCH_HUT_STATE_TOOLTIP, tooltip)
  }
}

const addMainTooltip = (id) => {
  switch (id) {
    case MAP_FACTION_IDS.FACTION_DEFEND:
    case MAP_FACTION_IDS.FACTION_ATTACK:
    case MAP_FACTION_IDS.FACTION_OBSTACLE:
    case MAP_FACTION_IDS.FACTION_DBB:
      let hordeArrived = true;
      if (HORDE_ARRIVAL_KEY[id] !== undefined) {
        if (exists(HORDE_ARRIVAL_KEY[id])) {
          hordeArrived = get(HORDE_ARRIVAL_KEY[id]) === MAP_HORDE_ARRIVAL.TRUE;
        }
      }

      if (get(MAP_KEY.IS_DESTROYED) === "true" && get(MAP_KEY.ZOOM) == MAP_ZOOM.ZOOM) {
        if (get(MAP_KEY.SIZE) !== MAP_BASE_SIZE.FRONTLINE_A) {
          makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.DESTROYED_BASE);
          destroyedBaseInvasionTooltip();
        } else {
          // Outpost tooltip
          makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.DESTROYED_OUTPOST)
        }

        return;
      } else if (containBoss()) {
        makeEntity(ICON_GROUP.DESCRIPTION, PIGLIN_BOSS_DESCRIPTION_IDS[id]);
        return;
      } else if (get(MAP_KEY.SIZE) === MAP_BASE_SIZE.DARK_BEACON) {
        makeEntity(
          ICON_GROUP.DESCRIPTION,
          MAP_DESCRIPTION_IDS.DARK_BEACON_BASE_TOOLTIP
        );
        return;
      } else if (!hordeArrived) {
        makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.FACTION_UNKNOWN);
        return;
      }
      break;
    case MAP_FACTION_IDS.WELL_OF_FATE:
      if (get(MAP_KEY.STATE) === MAP_ICON_STATE.UNDER_ATTACK) {
        makeEntity(
          ICON_GROUP.DESCRIPTION,
          MAP_DESCRIPTION_IDS.WELL_OF_FATE_ACT_3
        );
        return;
      }
      break;
    case MAP_FACTION_IDS.CULTURE_VILLAGER:
      if (isPlayerOutpost()) {
        addOutpostMainTooltip();
        return;
      }

      addCulture01MainTooltip();
      return;
    case MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER:
      addMobAllianceMainTooltip(MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER);
      return;
    case MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON:
      addMobAllianceMainTooltip(MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON);
      return;
    case MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE:
      addMobAllianceMainTooltip(MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE);
      return;
  }

  let actDescriptions = MAP_DESCRIPTION_IDS[get(MAP_KEY.CAMPAIGN_ACT)];
  if (actDescriptions && id in actDescriptions) {
    makeEntity(ICON_GROUP.DESCRIPTION, actDescriptions[id]);
  }
  else if (id in MAP_DESCRIPTION_IDS) {
    makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS[id]);
  }
};

const addCulture01MainTooltip = () => {
  // under attack / occupied
  switch (get(MAP_KEY.ACT1_VILLAGE_STATE)) {
    case MAP_ICON_STATE.UNDER_ATTACK:
      makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.VILLAGE_OCCUPIED_TOOLTIP);
      return;
    case MAP_ICON_STATE.TARGETED:
    case MAP_ICON_STATE.TARGTED_VA_ACT1:
      makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.VILLAGE_TARGETED_TOOLTIP);
      return;
  }

  switch (get(MAP_KEY.INVASION_ACTIVE)) {
    case MAP_INVASION_ACTIVE.IS_UNDER_ATTACK:
    case MAP_INVASION_ACTIVE.IS_OCCUPIED:
    case MAP_INVASION_ACTIVE.IS_BOSS_OCCUPATION:
      makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.VILLAGE_OCCUPIED_TOOLTIP);
      return;
  }
  // targeted
  switch (get(MAP_KEY.INVASION_INTENTION)) {
    case MAP_INVASION_INTENTION.TARGETED:
      makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.VILLAGE_TARGETED_TOOLTIP);
      return;
  }
  // not visited
  if (!canFastTravel() && !isPlayerOutpost()) {
    makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.VILLAGE_NEW_TOOLTIP);
    return;
  }

  makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS[MAP_FACTION_IDS.CULTURE_VILLAGER]);
};

const addMobAllianceMainTooltip = (mobFactionId) => {
  let mobDescriptionId;
  // occupied
  switch (get(MAP_KEY.INVASION_ACTIVE)) {
    case MAP_INVASION_ACTIVE.IS_OCCUPIED:
    case MAP_INVASION_ACTIVE.IS_BOSS_OCCUPATION:
      if (mobFactionId === MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER) {
        mobDescriptionId = MAP_DESCRIPTION_IDS.CREEPER_OCCUPIED_TOOLTIP;
      } else if (mobFactionId === MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON) {
        mobDescriptionId = MAP_DESCRIPTION_IDS.SKELETON_OCCUPIED_TOOLTIP;
      } else if (mobFactionId === MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE) {
        mobDescriptionId = MAP_DESCRIPTION_IDS.ZOMBIE_OCCUPIED_TOOLTIP;
      }

      makeEntity(ICON_GROUP.DESCRIPTION, mobDescriptionId);
      return;
  }
  // targeted
  switch (get(MAP_KEY.INVASION_INTENTION)) {
    case MAP_INVASION_INTENTION.TARGETED:
      if (mobFactionId === MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER) {
        mobDescriptionId = MAP_DESCRIPTION_IDS.CREEPER_TARGETED_TOOLTIP;
      } else if (mobFactionId === MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON) {
        mobDescriptionId = MAP_DESCRIPTION_IDS.SKELETON_TARGETED_TOOLTIP;
      } else if (mobFactionId === MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE) {
        mobDescriptionId = MAP_DESCRIPTION_IDS.ZOMBIE_TARGETED_TOOLTIP;
      }
      makeEntity(ICON_GROUP.DESCRIPTION, mobDescriptionId);
      return;
  }

  makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS[mobFactionId]);
};

const addOutpostMainTooltip = () => {
  // targeted
  switch (get(MAP_KEY.INVASION_INTENTION)) {
    case MAP_INVASION_INTENTION.TARGETED:
      makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.OUTPOST_TARGETED_TOOLTIP);
      return;
  }

  makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.zoner_fort_outpost);
};

const canFastTravel = () => {
  if (get(MAP_KEY.FAST_TRAVEL) === MAP_FAST_TRAVEL.ENABLED) {
    return get(MAP_KEY.CAN_FAST_TRAVEL) == MAP_CAN_FAST_TRAVEL.TRUE;
  }

  return false;
};

const displayFastTravelStateIcon = () => {
  if (canFastTravel()) {
    makeEntity(ICON_GROUP.FAST_TRAVEL_ICON, MAP_ICON.FAST_TRAVEL_TARGET);
    makeEntity(
      ICON_GROUP.FAST_TRAVEL_STATE,
      STATE_GROUP_ICON.FAST_TRAVEL_ENABLE
    );

    setOffset(ICON_GROUP.FAST_TRAVEL_STATE, ICON_GROUP.MAIN_ICON);
  }
};

const isInvisible = () => {
  return (
    get(MAP_KEY.VISIBILITY) === MAP_VISIBILITY.HIDDEN ||
    INVISIBLE_BASE_SIZES.includes(get(MAP_KEY.SIZE))
  );
};

const isInvasionBaseSlot = () => {
  return get("debug_slot_name") === "slot_invasion";
};

const isVillageSlot = () => {
  return (
    get("debug_slot_name") === "forest_1_village" ||
    get("debug_slot_name") === "frostlands_1_village" ||
    get("debug_slot_name") === "drylands_1_village" ||
    get("debug_slot_name") === "wetlands_1_village" ||
    get("debug_slot_name") === "grasslands_1_village"
  );
};

//Change this when Village OBs will be supported
const isVillageOBSlot = () => {
  const slotName = get("debug_slot_name");
  return (
    slotName === "villageForestPiglinBaseSlot" ||
    slotName === "villageFrostlandsPiglinBaseSlot" ||
    slotName === "villageDrylandsPiglinBaseSlot" ||
    slotName === "villageWetlandsPiglinBaseSlot" ||
    slotName === "villageGrasslandsPiglinBaseSlot"
  );
};

const isMobAllianceSlot = () => {
  return (
    get("debug_slot_name") === "skeleton_alliance" ||
    get("debug_slot_name") === "zombie_alliance" ||
    get("debug_slot_name") === "creeper_alliance"
  );
};

// returns true if an entity was spawned
const displayDeadPiglinFactionIcon = () => {
  const showRuins = get(MAP_KEY.ZOOM) == MAP_ZOOM.ZOOM
  if (showRuins) {
    makeEntity(
      ICON_GROUP.MAIN_ICON,
      PIGLIN_DESTROYED_ICON[get(MAP_CATEGORY.FACTION)]
    );
    if (get(MAP_KEY.TEAM_OUTLINES) === TEAM_OUTLINES.ENABLED) {
      setTeamOutline(MAP_TEAM.PIGLIN);
    }
    return true
  }
  return false
};

// returns true if an entity was spawned
const displayAlivePiglinFactionIcon = () => {
  switch (get(MAP_KEY.SIZE)) {
    case MAP_BASE_SIZE.ACT1_A:
    case MAP_BASE_SIZE.ACT1_B:
    case MAP_BASE_SIZE.ACT1_C:
    case MAP_BASE_SIZE.ACT1_FIRST_SKIRMISH:
    case MAP_BASE_SIZE.ACT1_SECOND_SKIRMISH:
    case MAP_BASE_SIZE.BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.FACTION_PIGLIN_OUTPOST);
      break;
    case MAP_BASE_SIZE.SMALL:
    case MAP_BASE_SIZE.FOB_SMALL:
    case MAP_BASE_SIZE.OCCUPYING_CREEPER:
    case MAP_BASE_SIZE.OCCUPYING_SKELETON:
    case MAP_BASE_SIZE.OCCUPYING_ZOMBIE:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.FACTION_PIGLIN_SMALL);
      break;
    case MAP_BASE_SIZE.MEDIUM:
    case MAP_BASE_SIZE.FOB_MEDIUM:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.FACTION_PIGLIN_MEDIUM);
      break;
    case MAP_BASE_SIZE.LARGE:
    case MAP_BASE_SIZE.FOB_LARGE:
    case MAP_BASE_SIZE.WOF_BASE:
    case MAP_BASE_SIZE.BOSS:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.FACTION_PIGLIN_LARGE);
      break;
    case MAP_BASE_SIZE.DARK_BEACON:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.DARK_BEACON);
      break;
    case MAP_BASE_SIZE.FRONTLINE_A:
      if (exists(MAP_KEY.INVASION_RECAP) && !hasSeenKey(MAP_KEY.INVASION_RECAP)) {
        makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.FACTION_PIGLIN_OUTPOST);
      }
      else if (get(MAP_KEY.ZOOM) == MAP_ZOOM.ZOOM) {
        makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.FACTION_PIGLIN_OUTPOST);
      } else {
        return false
      }
      break;
  }
  return true
};

const displayPiglinFactionIcon = (factionName) => {
  // // If already looked at the ruins of the base - don't show
  // if (hasSeenKey(MAP_KEY.IS_DESTROYED)) {
  //   return;
  // }

  let iconSpawned = false

  // If the base is destroyed, no need to show anything but the ruins
  const destroyed = get(MAP_KEY.IS_DESTROYED);
  if (destroyed === "true") {
    iconSpawned = displayDeadPiglinFactionIcon();
    return;
  } else if (destroyed === "hidden") {
    return;
  }
  iconSpawned = displayAlivePiglinFactionIcon();

  if (iconSpawned) {
    switch (factionName) {
      case MAP_FACTION_IDS.FACTION_DEFEND:
        presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.FACTION_DEFEND);
        break;
      case MAP_FACTION_IDS.FACTION_ATTACK:
        presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.FACTION_ATTACK);
        break;
      case MAP_FACTION_IDS.FACTION_OBSTACLE:
        presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.FACTION_OBSTACLE);
        break;
      case MAP_FACTION_IDS.FACTION_DBB:
        if (get(MAP_KEY.ONBOARDING) === MAP_ONBOARDING.ENABLED) {
          presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.ON_NEW);
        } else {
          presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.FACTION_DBB);
        }
        break;
      case MAP_FACTION_IDS.FACTION_WOF:
        presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.FACTION_DEFEND);
        break;
      case MAP_FACTION_IDS.FACTION_PVP:
        presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.FACTION_ATTACK);
        break;
    }

    if (get(MAP_KEY.TEAM_OUTLINES) === TEAM_OUTLINES.ENABLED) {
      setTeamOutline(MAP_TEAM.PIGLIN);
    }
    displayBossBanner();
    displayInvasionStateIcon();

    if (exists(MAP_KEY.PLAYER_DAMAGED_BASE)) {
      makeEntity(ICON_GROUP.STATE_ICON, STATE_GROUP_ICON.VILLAGE_DAMAGED);
      presentation(ICON_GROUP.STATE_ICON, MAP_PRESENTATION.IS_ATTACKED);
      setOffset(ICON_GROUP.STATE_ICON, ICON_GROUP.MAIN_ICON);
      makeEntity(
        ICON_GROUP.PLAYER_DAMAGED_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.PLAYER_DAMAGED
      );
    }
  }
};

const isMobAllianceOBSlot = () => {
  return (
    get("debug_slot_name") === "creeperPiglinBaseSlot" ||
    get("debug_slot_name") === "skeletonPiglinBaseSlot" ||
    get("debug_slot_name") === "zombiePiglinBaseSlot"
  );
};

const addBaseLootTooltipParameters = () => {
  if (exists(MAP_KEY.BASE_LOOT)) {
    addTooltipParameter(get(MAP_KEY.BASE_LOOT))
  }
}

const addSizeTooltip = () => {
  if (get(MAP_KEY.IS_DESTROYED)) {
    return;
  }
  if (containBoss()) {
    return;
  }
  switch (get(MAP_KEY.SIZE)) {
    case MAP_BASE_SIZE.SMALL:
    case MAP_BASE_SIZE.ACT1_A:
    case MAP_BASE_SIZE.ACT1_B:
    case MAP_BASE_SIZE.ACT1_C:
    case MAP_BASE_SIZE.FOB_SMALL:
    case MAP_BASE_SIZE.OCCUPYING_CREEPER:
    case MAP_BASE_SIZE.OCCUPYING_SKELETON:
    case MAP_BASE_SIZE.OCCUPYING_ZOMBIE:
    case MAP_BASE_SIZE.DARK_BEACON:
      makeEntity(
        ICON_GROUP.SIZE_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.SMALL_PIGLIN_BASE
      );
      break;
    case MAP_BASE_SIZE.MEDIUM:
    case MAP_BASE_SIZE.FOB_MEDIUM:
      makeEntity(
        ICON_GROUP.SIZE_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.MEDIUM_PIGLIN_BASE
      );
      break;
    case MAP_BASE_SIZE.LARGE:
    case MAP_BASE_SIZE.FOB_LARGE:
    case MAP_BASE_SIZE.WOF_BASE:
      makeEntity(
        ICON_GROUP.SIZE_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.LARGE_PIGLIN_BASE
      );
      break;
    case MAP_BASE_SIZE.VANGUARD_A:
    case MAP_BASE_SIZE.FRONTLINE_A:
      makeEntity(
        ICON_GROUP.SIZE_TOOLTIP,
        MAP_EXTENDED_TOOLTIP.PIGLIN_MINING_OUTPOST
      );
      break;
  }
};

const displayPlayerWaypoint = () => {
  if (get(MAP_KEY.PLAYER_WAYPOINT) === MAP_PLAYER_WAYPOINT.ENABLED) {
    const team = get(MAP_KEY.TEAM);
    const localTeam = getLocalPlayerTeam();
    if (getAllianceRuleResult(localTeam, team, ALLIANCE_RULES.SHARED_MAP)) {
      const playerID = get(MAP_KEY.PLAYER_ID);
      const playerName = getPlayerName(playerID)
      if (playerName) { // don't show the map marker at all if it's given an invalid playername (empty string)
        if (playerID === getLocalPlayerID()) {
          if (get(MAP_KEY.MARKER_TYPE) == MAP_MARKER_TYPE.ATTACK) {
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_ATTACK_WAYPOINT);
          } else if (get(MAP_KEY.MARKER_TYPE) == MAP_MARKER_TYPE.DEFEND) {
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_DEFEND_WAYPOINT);
          } else if (get(MAP_KEY.MARKER_TYPE) == MAP_MARKER_TYPE.GATHER) {
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_GATHER_WAYPOINT);
          } else {
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_WAYPOINT);
          }
          makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.PLAYER_WAYPOINT);
          makeEntity(ICON_GROUP.ACTION, MAP_ACTION.DESTROY_PLAYER_WAYPOINT);
          addTooltipParameter(playerName);
        } else {
          if (get(MAP_KEY.MARKER_TYPE) == MAP_MARKER_TYPE.ATTACK) {
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_ATTACK_WAYPOINT_TEAMMATE);
          } else if (get(MAP_KEY.MARKER_TYPE) == MAP_MARKER_TYPE.DEFEND) {
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_DEFEND_WAYPOINT_TEAMMATE);
          } else if (get(MAP_KEY.MARKER_TYPE) == MAP_MARKER_TYPE.GATHER) {
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_GATHER_WAYPOINT_TEAMMATE);
          } else {
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_WAYPOINT_TEAMMATE);
          }
          makeEntity(
            ICON_GROUP.DESCRIPTION,
            MAP_DESCRIPTION_IDS.PLAYER_WAYPOINT_TEAMMATE
          );
          addTooltipParameter(playerName);
        }
      }
    }
  }
};

const makeIfAllianceRule = (iconGroup, mapIcon, allianceRule) => {
  const team = get(MAP_KEY.TEAM);
  const localTeam = getLocalPlayerTeam();
  if (getAllianceRuleResult(localTeam, team, allianceRule)) {
    makeEntity(iconGroup, mapIcon);
    return true;
  }
  return false;
};

const displayClaimedAreaIcon = () => {
  if (!exists(MAP_KEY.CLAIMED_AREA_VISIBILITY)) {
    return;
  }

  if (get(MAP_KEY.CLAIMED_AREA_VISIBILITY) === MAP_CLAIMED_AREA_VISIBILITY.INVISIBLE) {
    return;
  }

  if (get(MAP_KEY.ZOOM) == MAP_ZOOM.ZOOM) {
    return;
  }

  const horde = get(MAP_CATEGORY.FACTION);
  switch (horde) {
    case MAP_FACTION_IDS.FACTION_DEFEND:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.CLAIMED_AREA_DEFEND);
      break;
    case MAP_FACTION_IDS.FACTION_ATTACK:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.CLAIMED_AREA_ATTACK);
      break;
    case MAP_FACTION_IDS.FACTION_OBSTACLE:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.CLAIMED_AREA_OBSTACLE);
      break;
  }


  if (exists(MAP_KEY.INVASION_RECAP)) {
    if (get(MAP_KEY.INVASION_RECAP) === MAP_INVASION_RECAP.CLAIMED_AREA) {
      presentation(ICON_GROUP.MAIN_ICON, MAP_PRESENTATION.NEW_CLAIMED_AREA);
      makeEntity(ICON_GROUP.VO_TOOLTIP_INVASION_RECAP,
        MAP_EXTENDED_VO_TOOLTIP.INVASION_CLAIM_AREA_EXECUTED
      );
    }
  }

  const hordeArrived = exists(HORDE_ARRIVAL_KEY[horde]) && get(HORDE_ARRIVAL_KEY[horde]) === MAP_HORDE_ARRIVAL.TRUE
  if (hordeArrived) {
    makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS[horde]);
    makeEntity(
      ICON_GROUP.CLAIMED_AREA_EXTENDED_TOOLTIP,
      MAP_EXTENDED_TOOLTIP.CLAIMED_AREA
    );
  } else {
    makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.CLAIMED_AREA_UNKNOWN)
  }
};

const displayObjectiveIcon = () => {
  // If no objective has been set for this entity, then get outta here.
  if (!exists(MAP_KEY.OBJECTIVE)) {
    return;
  }

  // Ground marker to reflect state of the objective
  switch (get(MAP_KEY.OBJECTIVE)) {
    case MAP_OBJECTIVE.ACTIVE:
      makeEntity(ICON_GROUP.OBJECTIVE, OBJECTIVE_ICON.ACTIVE)
      presentation(ICON_GROUP.OBJECTIVE, MAP_PRESENTATION.STORY_OBJECTIVE);
      break;
    case MAP_OBJECTIVE.SUCCESS:
      makeEntity(ICON_GROUP.OBJECTIVE, OBJECTIVE_ICON.ACTIVE)
      presentation(ICON_GROUP.OBJECTIVE, MAP_PRESENTATION.PIGLIN_OBJECTIVE);
      break;
    case MAP_OBJECTIVE.FAILURE:
      break;
  }

  // Beacon to further accentuate the objective
  switch (get(MAP_CATEGORY.FACTION)) {
    case MAP_FACTION_IDS.CULTURE_VILLAGER:
      makeEntity(ICON_GROUP.OBJECTIVE_BEACON, OBJECTIVE_BEACON_ICON.VILLAGE)
      break;
    case MAP_FACTION_IDS.WELL_OF_FATE:
      makeEntity(ICON_GROUP.OBJECTIVE_BEACON, OBJECTIVE_BEACON_ICON.WOF)
      break;
    case MAP_FACTION_IDS.FACTION_DBB:
      switch (get(MAP_KEY.SIZE)) {
        case MAP_BASE_SIZE.ACT1_A:
        case MAP_BASE_SIZE.ACT1_B:
        case MAP_BASE_SIZE.ACT1_C:
          makeEntity(ICON_GROUP.OBJECTIVE_BEACON, OBJECTIVE_BEACON_ICON.OUTPOST)
          break;
        case MAP_BASE_SIZE.DARK_BEACON:
          makeEntity(ICON_GROUP.OBJECTIVE_BEACON, OBJECTIVE_BEACON_ICON.DBB)
          break;
      }
      break;
  }
}

//UPDATE
onUpdate(() => {

  const buildingCategory = get(MAP_CATEGORY.BUILDABLE);
  switch (buildingCategory) {
    case MAP_BUILDABLE_IDS.ALLAY_KILLER:
      const team = get(MAP_KEY.TEAM);
      const localTeam = getLocalPlayerTeam();
      if (getAllianceRuleResult(localTeam, team, ALLIANCE_RULES.SHARED_MAP)) { //! Custom Added (NON-Defult)
        // Treat Blue HQ icon as the default if for some reason there is no team
        makeEntity(ICON_GROUP.MAIN_ICON, team === MAP_TEAM.ONE ? MAP_ICON.PVP_HQ_ORANGE : MAP_ICON.PVP_HQ_BLUE);
        // displayTeamIdentifier();
        // displayTeamIdentifierPip();
        // displayPvPUnderAttackIcon();
        // displayFastTravelStateIcon();
        break;
      }
  }

  const DEBUG_ICON_NAME = "icon_debug";

  //DEBUG SLOTS USED
  if (get("mode") === "debug_slot_used") {
    if (get("debug_slot_state") === "slot_enabled") {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_red_square");
    }

    if (get("debug_slot_state") === "slot_disabled") {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_green_diamond");
    }
  }

  //DEBUG SLOT TYPES
  if (get("mode") === "debug_slot_types") {
    if (isInvasionBaseSlot() || isVillageSlot()) {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_green_diamond");
    }

    if (isVillageOBSlot()) {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_red_square");
    }

    if (isMobAllianceSlot()) {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_blue_circle");
    }

    if (isMobAllianceOBSlot()) {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_yellow_triangle");
    }
  }

  //DEBUG MARKERS
  if (get("mode") === "debug_map_markers") {
    const markerValue = get("debug")
    if (markerValue === "map_marker_green") {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_green_diamond");
    } else if (markerValue === "map_marker_red") {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_red_square");
    } else if (markerValue === "map_marker_blue") {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_blue_circle");
    } else if (markerValue === "map_marker_yellow") {
      makeEntity(DEBUG_ICON_NAME, "badger:wmap_shape_yellow_triangle");
    }
  }

  //DEBUG SIZE
  if (get("size") === "debug") {
    return
  }

  if (isInvisible()) {
    return;
  }

  //GENERIC SFX
  makeEntity(
    ICON_GROUP.GENERIC_AUDIO_TOOLTIP,
    MAP_EXTENDED_TOOLTIP.GENERIC_AUDIO_TOOLTIP
  );

  if (get(MAP_KEY.VISIBILITY) === MAP_VISIBILITY.VISIBLE) {
    makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.QUESTION_MARK);
    makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS["question_mark"]);
    return;
  }

  //CLAIMED AREAS
  if (exists(MAP_KEY.CLAIMED_AREA)) {
    displayClaimedAreaIcon();
    return;
  }

  addMainTooltip(get(MAP_CATEGORY.FACTION));
  addMainTooltip(get(MAP_CATEGORY.BUILDABLE));
  addMainTooltip(get(MAP_CATEGORY.MOB));
  addMainTooltip(get(MAP_CATEGORY.WORLD_SPAWNER));

  //VILLAGES - BASES
  switch (get(MAP_CATEGORY.FACTION)) {
    case MAP_FACTION_IDS.WELL_OF_FATE:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.WELL_OF_FATE);
      displayWellOfFateStateIcon();
      displayFastTravelStateIcon();
      break;
    case MAP_FACTION_IDS.FACTION_DEFEND:
      displayPiglinFactionIcon(MAP_FACTION_IDS.FACTION_DEFEND);
      addSizeTooltip();
      addBaseLootTooltipParameters();
      break;
    case MAP_FACTION_IDS.FACTION_ATTACK:
      displayPiglinFactionIcon(MAP_FACTION_IDS.FACTION_ATTACK);
      addSizeTooltip();
      addBaseLootTooltipParameters();
      break;
    case MAP_FACTION_IDS.FACTION_OBSTACLE:
      displayPiglinFactionIcon(MAP_FACTION_IDS.FACTION_OBSTACLE);
      addSizeTooltip();
      addBaseLootTooltipParameters();
      break;
    case MAP_FACTION_IDS.FACTION_DBB:
      displayPiglinFactionIcon(MAP_FACTION_IDS.FACTION_DBB);
      break;
    case MAP_FACTION_IDS.FACTION_PVP:
      displayPiglinFactionIcon(MAP_FACTION_IDS.FACTION_PVP);
      break;
    case MAP_FACTION_IDS.CULTURE_VILLAGER:
      if (isPlayerOutpost()) {
        displayPlayerOutpostIcon();
      } else {
        displayVillageCultureIcon(MAP_ICON.CULTURE_VILLAGER);
        displayPvpAllegianceStateIcon();
      }
      displayVillageIcons();
      break;
    case MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.MOB_ALLIANCE_CREEPER);
      displayInvasionStateIcon();
      displayMobAllianceStateIcon();
      displayMobAllegianceStateIcon(MAP_FACTION_IDS.MOB_ALLIANCE_CREEPER);
      displayPvpAllegianceStateIcon();
      displayTeamIdentifier();
      displayPvPUnderAttackIcon();
      break;
    case MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.MOB_ALLIANCE_SKELETON);
      displayInvasionStateIcon();
      displayMobAllianceStateIcon();
      displayMobAllegianceStateIcon(MAP_FACTION_IDS.MOB_ALLIANCE_SKELETON);
      displayPvpAllegianceStateIcon();
      displayTeamIdentifier();
      displayPvPUnderAttackIcon();
      break;
    case MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.MOB_ALLIANCE_ZOMBIE);
      displayInvasionStateIcon();
      displayMobAllianceStateIcon();
      displayMobAllegianceStateIcon(MAP_FACTION_IDS.MOB_ALLIANCE_ZOMBIE);
      displayPvpAllegianceStateIcon();
      displayTeamIdentifier();
      displayPvPUnderAttackIcon();
      break;
    case MAP_FACTION_IDS.TOWER_01:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.TOWER_01);
      break;
    case MAP_FACTION_IDS.TOWER_02:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.TOWER_02);
      break;
    case MAP_FACTION_IDS.TOWER_04:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.TOWER_04);
      break;
    case MAP_FACTION_IDS.ALLY_01:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.ALLY_01);
      break;
    case MAP_FACTION_IDS.ALLY_02:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.ALLY_02);
      break;
    case MAP_FACTION_IDS.ALLY_04:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.ALLY_04);
      break;
    case MAP_FACTION_IDS.ALLY_05:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.ALLY_05);
      break;
    case MAP_FACTION_IDS.MOUNT_01:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.MOUNT_01);
      break;
    case MAP_FACTION_IDS.MOUNT_03:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.MOUNT_03);
      break;
    case MAP_FACTION_IDS.MOUNT_04:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.MOUNT_04);
      break;
    case MAP_FACTION_IDS.MOUNT_06:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.MOUNT_06);
      break;
    case MAP_FACTION_IDS.WITCH_HUT_PVP:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.WITCH_HUT);
      addWitchHutStateTooltip();
      break;
  }

  //VILLAGES - BASES - DISTRICT
  displayDistrictIcon();

  const buildableCategory = get(MAP_CATEGORY.BUILDABLE);
  switch (buildableCategory) {
    case MAP_BUILDABLE_IDS.TOWER_01:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.TOWER_01);
      displayTeamIdentifier();
      displayTeamIdentifierPip();
      break;
    case MAP_BUILDABLE_IDS.TOWER_02:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.TOWER_02);
      displayTeamIdentifier();
      displayTeamIdentifierPip();
      break;
    case MAP_BUILDABLE_IDS.TOWER_04:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.TOWER_04);
      displayTeamIdentifier();
      displayTeamIdentifierPip();
      break;
    case MAP_BUILDABLE_IDS.PVP_HQ:
      // Treat Blue HQ icon as the default if for some reason there is no team
      makeEntity(ICON_GROUP.MAIN_ICON, get(MAP_KEY.TEAM) === MAP_TEAM.ONE ? MAP_ICON.PVP_HQ_ORANGE : MAP_ICON.PVP_HQ_BLUE);
      displayTeamIdentifier();
      displayTeamIdentifierPip();
      displayPvPUnderAttackIcon();
      displayFastTravelStateIcon();
      break;
  }

  switch (get(MAP_CATEGORY.MOB)) {
    case MAP_MOB_IDS.ALLY_01:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.ALLY_01);
      displayTeamIdentifier();
      displayTeamIdentifierPip();
      break;
    case MAP_MOB_IDS.ALLY_02:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.ALLY_02);
      displayTeamIdentifier();
      displayTeamIdentifierPip();
      break;
    case MAP_MOB_IDS.ALLY_04:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.ALLY_04);
      displayTeamIdentifier();
      displayTeamIdentifierPip();
      break;
    case MAP_MOB_IDS.ALLY_05:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.ALLY_05);
      displayTeamIdentifier();
      displayTeamIdentifierPip();
      break;
  }

  switch (get(MAP_CATEGORY.DEBUG)) {
    case DEBUG_IDS.DEBUG_ICON_01:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.RED_MARKER);
      break;
    case DEBUG_IDS.DEBUG_ICON_02:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.BLUE_MARKER);
      break;
    case DEBUG_IDS.DEBUG_ICON_03:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.YELLOW_MARKER);
      break;
    case DEBUG_IDS.DEBUG_ICON_04:
      makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.GREEN_MARKER);
      break;
  }

  //PLAYER
  if (exists(MAP_CATEGORY.PLAYER)) {
    const team = get(MAP_KEY.TEAM);
    const localTeam = getLocalPlayerTeam();
    if (getAllianceRuleResult(localTeam, team, ALLIANCE_RULES.SHARED_MAP)) {
      const playerID = get(MAP_KEY.PLAYER_ID);
      if (playerID === getLocalPlayerID()) {
        switch (team) {
          case MAP_TEAM.TWO:
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_BLUE);
            break;
          case MAP_TEAM.ONE:
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER_ORANGE);
            break;
          default:
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.PLAYER);
        }
        makeEntity(ICON_GROUP.DESCRIPTION, MAP_DESCRIPTION_IDS.PLAYER_TOOLTIP);
        addTooltipParameter(getPlayerName(playerID));
        addTooltipParameter(get(MAP_KEY.PLAYER_STATE));
        makeEntity(ICON_GROUP.ORIENTATION_ICON, MAP_ICON.PLAYER_ORIENTATION);
      } else {
        switch (team) {
          case MAP_TEAM.TWO:
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.TEAMMATE_BLUE);
            break;
          case MAP_TEAM.ONE:
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.TEAMMATE_ORANGE);
            break;
          default:
            makeEntity(ICON_GROUP.MAIN_ICON, MAP_ICON.TEAMMATE);
        }
        makeEntity(
          ICON_GROUP.DESCRIPTION,
          MAP_DESCRIPTION_IDS.PLAYER_TEAMMATE_TOOLTIP
        );
        addTooltipParameter(getPlayerName(playerID));
        addTooltipParameter(get(MAP_KEY.PLAYER_STATE));
      }

      displayTeamIdentifier();
    }
  }

  displayPlayerWaypoint();

  displayObjectiveIcon();
});