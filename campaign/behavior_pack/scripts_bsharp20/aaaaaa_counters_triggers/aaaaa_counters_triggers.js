/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Counters need to specify the size of the input - by specifying empty arrays or allowed values

// Individual counters
const StaggeredEntryCounter = GenericCounter("gv_entry_horde_index", 0)
const StaggeredMobAllianceOccupationCounter = GenericCounter("gv_mob_alliance_occupation_index", -1)
const DaysSinceAnyHordeEstablished = GenericCounter("gv_days_since_first_horde_established", -1)
const PlayersParticipatingInVillageAttackCounter = GenericCounter("gv_players_in_attack", 0, [])
const InvasionFlushRecapsCounter = GenericCounter("gv_flush_recaps", 0)
const InvasionDuskHUDCounter = GenericCounter("gv_show_dusk_hud", 1)
const InvasionActionsDayPassedCounter = GenericCounter("gv_inv_manager_days_passed", 0, [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST, GLOBAL_TRACKER], ALL_INVASION_ACTIONS)
const TelemetryInvasionBreakDaysPassedCounter = GenericCounter("gv_inv_break_days_passed", 0)
const VillageDaysSincePlayerDamage = GenericCounter("gv_village_days_since_player_damage", 0, [])
const InvasionHordeFirstAttackDelayDays = GenericCounter("gv_invasion_horde_first_attack_delay_days", 0, [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST])
const InvasionHordeFirstAttackStarted = GenericCounter("gv_invasion_horde_first_attack_started", 0, [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST])
const InvasionDaysCineCounter = GenericCounter("gv_days_passed_before_not_playing_invasion_fmv", 0)

const ENTRY_PHASE_NONE = -1
const ENTRY_PHASE_PREGAME = 0
const ENTRY_PHASE_FIRSTBASE = 1
const StaggeredEntryHordePhaseCounter = GenericCounter("gv_entry_horde_phase", -1, [])  //pass in int (order)
const InvasionPhaseCounter = GenericCounter("gv_invasion_phase_counter", -1)

// Counter-trigger pairs
const DaysSinceCounter = GenericCounter("gv_days_since_act2", -1)
const TRIGGER_DaysSince = (daysNum, snapshot) => {
    return GenericTrigger(daysNum, DaysSinceCounter, snapshot)
}

const VillageAttacksFoughtCounter = GenericCounter("gv_village_attacks_fought", 0)
const TRIGGER_VillageAttacksFought = (foughtNum, snapshot) => {
    return GenericTrigger(foughtNum, VillageAttacksFoughtCounter, snapshot)
}

const VillageAttacksDefendedCounter = GenericCounter("gv_village_attacks_defended", 0, [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST])
const TRIGGER_VillageAttacksDefended = (defendedNum, hordes, snapshot) => {
    return GenericTrigger(defendedNum, VillageAttacksDefendedCounter, snapshot, hordes)
}

const VillageAttacksResolvedCounter = GenericCounter("gv_village_attacks_resolved", 0)
const TRIGGER_VillageAttacksResolved = (resolvedNum, snapshot) => {
    return GenericTrigger(resolvedNum, VillageAttacksResolvedCounter, snapshot)
}

const VictoriesOverPiglinsCounter = GenericCounter("gv_victories_over_piglins", 0)
const TRIGGER_VictoriesOverPiglins = (victoriesNum, snapshot) => {
    return GenericTrigger(victoriesNum, VictoriesOverPiglinsCounter, snapshot)
}

const HordeOutpostsDestroyedCounter = GenericCounter("gv_outposts_destroyed", 0, [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST])
const TRIGGER_HordeOutpostsDestroyed = (hordes, destroyedNum, snapshot) => {
    return GenericTrigger(destroyedNum, HordeOutpostsDestroyedCounter, snapshot, hordes)
}

const VillageNotUnderAttackEnteredCounter = GenericCounter("gv_village_not_under_attack_entered", 0)
const TRIGGER_VillageNotUnderAttackEntered = (enteredNum, snapshot) => {
    return GenericTrigger(enteredNum, VillageNotUnderAttackEnteredCounter, snapshot)
}

const VillageNotUnderAttackExitedCounter = GenericCounter("gv_village_not_under_attack_exited", 0)
const TRIGGER_VillageNotUnderAttackExited = (exitedNum, snapshot) => {
    return GenericTrigger(exitedNum, VillageNotUnderAttackEnteredCounter, snapshot)
}

const HordeBasesConstructedCounter = GenericCounter("gv_bases_constructed", 0, [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST], [BASE_SIZE_SMALL, BASE_SIZE_MEDIUM, BASE_SIZE_LARGE])
const TRIGGER_HordeBasesConstructed = (hordes, sizes, number, snapshot) => {
    return GenericTrigger(number, HordeBasesConstructedCounter, snapshot, hordes, sizes)
}

const HordeBasesDestroyedCounter = GenericCounter("gv_bases_destroyed", 0, [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST], BASE_SIZE_ALL_PORTALS_AND_BOSS_AND_MOB)
const TRIGGER_HordeBasesDestroyed = (hordes, sizes, number, snapshot) => {
    return GenericTrigger(number, HordeBasesDestroyedCounter, snapshot, hordes, sizes)
}

const HordeBasesUpgradedCounter = GenericCounter("gv_bases_upgraded", 0, [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST])
const TRIGGER_HordeBasesUpgraded = (hordes, number, snapshot) => {
    return GenericTrigger(number, HordeBasesUpgradedCounter, snapshot, hordes)
}

const HordeBasesConstructedAndUpgradedCounter = GenericCounter("gv_bases_constructed_and_upgraded", 0, [FACTION_NAME_ATTACK, FACTION_NAME_DEFEND, FACTION_NAME_OBSTACLE, FACTION_NAME_FROST])
const TRIGGER_HordeBasesConstructedAndUpgraded = (hordes, number, snapshot) => {
    return GenericTrigger(number, HordeBasesConstructedAndUpgradedCounter, snapshot, hordes)
}

const SNAPSHOT_Act2Started = () => {
    return GenericSnapshot(() => {
        return "snapshot_act2_started"
    })
}

const SNAPSHOT_HordePregameStarted = (hordeInput) => {
    return GenericSnapshot(() => {
        const snapshotName = "snapshot_act2_started"
        const hordeName = GetHordeName(hordeInput)
        if (hordeName === null) {
            return SNAPSHOT_NOT_SET
        }

        return snapshotName + "_" + hordeName
    })
}

const SNAPSHOT_HordeFirstBaseBuilt = (hordeInput) => {
    return GenericSnapshot(() => {
        const snapshotName = "snapshot_horde_first_base_built"
        const hordeName = GetHordeName(hordeInput)
        if (hordeName === null) {
            return SNAPSHOT_NOT_SET
        }

        return snapshotName + "_" + hordeName
    })
}

const SNAPSHOT_MobAllianceOccupationStarted = (mobAllianceInput) => {
    return GenericSnapshot(() => {
        const snapshotName = "snapshot_horde_pregame_started"
        const mobAllianceName = GetMobAllianceName(mobAllianceInput)
        if (mobAllianceName === null) {
            return SNAPSHOT_NOT_SET
        }

        return snapshotName + "_" + mobAllianceName
    })
}

const SNAPSHOT_FirstPregameConditionsFulfilled = () => {
    return GenericSnapshot(() => {
        return "snapshot_first_pregame_conditions_fulfilled"
    })
}

const SNAPSHOT_InasionPhaseIntroduced = (invasionPhaseNum) => {
    return GenericSnapshot(() => {
        if (invasionPhaseNum < 0 || invasionPhaseNum >= phaseValues.length) {
            return SNAPSHOT_NOT_SET
        }

        const snapshotName = "snapshot_invasion_phase_introduced"
        return snapshotName + "_" + invasionPhaseNum
    })
}