// This file contains a config structure for a village occupations' initial units.
// Additional units can also be present in the village.

// *Different configs are set up for each faction and strength of village attack*

/* eslint-disable @typescript-eslint/camelcase */
// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/no-unused-vars
const invasionOccupation_initialUnits = {
    [FACTION_NAME_ATTACK]: {
        1: {
            [PIGLIN_ARCHETYPE.RUNT]: 31,
            [PIGLIN_ARCHETYPE.WARBOAR]: 2,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 3,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PIGMADILO]: 0
        },
        2: {
            [PIGLIN_ARCHETYPE.RUNT]: 46,
            [PIGLIN_ARCHETYPE.WARBOAR]: 5,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 5,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PIGMADILO]: 1
        },
        3: {
            [PIGLIN_ARCHETYPE.RUNT]: 61,
            [PIGLIN_ARCHETYPE.WARBOAR]: 9,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 7,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PIGMADILO]: 2
        },
        4: {
            [PIGLIN_ARCHETYPE.RUNT]: 61,
            [PIGLIN_ARCHETYPE.WARBOAR]: 9,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 7,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PIGMADILO]: 2
        }
    },
    [FACTION_NAME_DEFEND]: {
        1: {
            [PIGLIN_ARCHETYPE.RUNT]: 14,
            [PIGLIN_ARCHETYPE.GRUNTER]: 17,
            [PIGLIN_ARCHETYPE.BRUISER]: 3,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 3,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PORTAL_GUARD]: 0
        },
        2: {
            [PIGLIN_ARCHETYPE.RUNT]: 21,
            [PIGLIN_ARCHETYPE.GRUNTER]: 27,
            [PIGLIN_ARCHETYPE.BRUISER]: 5,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 5,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PORTAL_GUARD]: 1
        },
        3: {
            [PIGLIN_ARCHETYPE.RUNT]: 26,
            [PIGLIN_ARCHETYPE.GRUNTER]: 31,
            [PIGLIN_ARCHETYPE.BRUISER]: 8,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 7,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PORTAL_GUARD]: 2
        }
    },
    [FACTION_NAME_FROST]: {
        1: {
            [PIGLIN_ARCHETYPE.RUNT]: 14,
            [PIGLIN_ARCHETYPE.GRUNTER]: 17,
            [PIGLIN_ARCHETYPE.BRUISER]: 3,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 3,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PORTAL_GUARD]: 0
        },
        2: {
            [PIGLIN_ARCHETYPE.RUNT]: 21,
            [PIGLIN_ARCHETYPE.GRUNTER]: 27,
            [PIGLIN_ARCHETYPE.BRUISER]: 5,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 5,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PORTAL_GUARD]: 1
        },
        3: {
            [PIGLIN_ARCHETYPE.RUNT]: 26,
            [PIGLIN_ARCHETYPE.GRUNTER]: 31,
            [PIGLIN_ARCHETYPE.BRUISER]: 8,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 7,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.PORTAL_GUARD]: 2
        }
    },
    [FACTION_NAME_OBSTACLE]: {
        1: {
            [PIGLIN_ARCHETYPE.RUNT]: 14,
            [PIGLIN_ARCHETYPE.GRUNTER]: 17,
            [PIGLIN_ARCHETYPE.GRENADIER]: 3,
            [PIGLIN_ARCHETYPE.ENGINEER]: 0,
            [PIGLIN_ARCHETYPE.MEDIC]: 3,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.LAVA_LAUNCHER]: 0
        },
        2: {
            [PIGLIN_ARCHETYPE.RUNT]: 17,
            [PIGLIN_ARCHETYPE.GRUNTER]: 24,
            [PIGLIN_ARCHETYPE.GRENADIER]: 5,
            [PIGLIN_ARCHETYPE.ENGINEER]: 1,
            [PIGLIN_ARCHETYPE.MEDIC]: 5,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.LAVA_LAUNCHER]: 1
        },
        3: {
            [PIGLIN_ARCHETYPE.RUNT]: 21,
            [PIGLIN_ARCHETYPE.GRUNTER]: 31,
            [PIGLIN_ARCHETYPE.GRENADIER]: 8,
            [PIGLIN_ARCHETYPE.ENGINEER]: 2,
            [PIGLIN_ARCHETYPE.MEDIC]: 7,
            [PIGLIN_ARCHETYPE.SEEKER]: 0,
            [PIGLIN_ARCHETYPE.LAVA_LAUNCHER]: 2
        }
    }
}
