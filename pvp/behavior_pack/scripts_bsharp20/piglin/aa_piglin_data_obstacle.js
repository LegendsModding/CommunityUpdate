PiglinPVPHordes[FACTION_NAME_OBSTACLE] = {
    hordeName: FACTION_NAME_OBSTACLE,
    village: "badger:piglin_pvp_obstacle",
    textureStamp: "piglin_obstacle_outpost_01_pvp",
    loadouts: {
        day: [
            {
                beginAt: 0, // Measured in minutes
                loadout: [
                    "badger:piglin_grunter"
                ],
                cap: 5, //hard limit at 6
                rate: 15,
                batch: 1,
                waveSize: 20
            },
            {
                beginAt: 16, // Measured in minutes
                loadout: [
                    "badger:piglin_grunter"
                ],
                cap: 5, //hard limit at 6
                rate: 12,
                batch: 1,
                waveSize: 20
            },
            {
                beginAt: 30, // Measured in minutes
                loadout: [
                    "badger:piglin_grunter"
                ],
                cap: 5, //hard limit at 6
                rate: 12,
                batch: 2,
                waveSize: 20
            }
        ],
        night: [
            {
                beginAt: 8,
                loadout: [
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grenadier"
                ],
                cap: 6,
                rate: 20,
                batch: 3,
                waveSize: 20
            },
            {
                beginAt: 22,
                loadout: [
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_seeker",
                    "badger:piglin_grenadier",
                    "badger:piglin_grenadier",
                    "badger:piglin_medic",
                    "badger:piglin_medic"
                ],
                cap: 6,
                rate: 20,
                batch: 3,
                waveSize: 20
            },
            {
                beginAt: 36,
                loadout: [
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_grunter",
                    "badger:piglin_disruptor",
                    "badger:piglin_seeker",
                    "badger:piglin_grenadier",
                    "badger:piglin_grenadier",
                    "badger:piglin_piggo_lava_launcher",
                    "badger:piglin_medic",
                    "badger:piglin_medic"
                ],
                cap: 6,
                rate: 30,
                batch: 3,
                waveSize: 24
            }
        ]
    },
    grudgeTimings: [
        {
            time: 0.5,
            preparationDuration: 0,
            waveSize: 15,
            repeatInterval: 5,
            repeating: true
        }
    ],
    structures: {
        // All entry names must be identical to unique tags on the corresponding structures (e.g. no tower in this list besides the piglin arrow tower should have the tag pigArrowTower)
        barracks: {
            card: "addPvPBarracks",
            // This uses a getter property, since ZoneFilterCard and PlacementPreferenceCard aren't defined yet when this object is created
            // Could probably reorder this script execution after aaa_build_helper.js, but that would involve having multiple files prefixed with quintuple a's
            get rules() {
                return [ZoneFilterCard("outpostInnerCirclePvP"), PlacementPreferenceCard("placeRandomly")]
            },
            initialAmount: 4,
            respawns: true,
            respawnDelay: 120
        },
        pigArrowTower: {
            card: "piglinTower",
            get rules() {
                return [ZoneFilterCard("outpostOuterCirclePvP"), PlacementPreferenceCard("placeRandomly")]
            },
            initialAmount: 2,
            respawns: true,
            respawnDelay: 120,
            replacements: [
                {
                    beginAt: 0,
                    chance: 0.5,
                    // This needs to refer to a name of one of the entries in this object, not the name of the card used
                    structures: ["pigNetherspreader"]
                },
                {
                    beginAt: 5,
                    chance: 0.3,
                    structures: ["pigKnockbackTower"]
                },
                {
                    beginAt: 12,
                    chance: 0.5,
                    structures: ["pigKnockbackTower"]
                },
                {
                    beginAt: 18,
                    chance: 0.75,
                    structures: ["pigKnockbackTower"]
                }
            ]
        },
        pigNetherspreader: {
            card: "netherSpreader",
            get rules() {
                return [ZoneFilterCard("outpostOuterCirclePvP"), PlacementPreferenceCard("placeRandomly")]
            },
            initialAmount: 2,
            respawns: true,
            respawnDelay: 120,
            replacements: [
                {
                    beginAt: 0,
                    chance: 0.1,
                    // This needs to refer to a name of one of the entries in this object, not the name of the card used
                    structures: ["pigArrowTower"]
                },
                {
                    beginAt: 12,
                    chance: 0.5,
                    structures: ["pigArrowTower"]
                }

            ]
        },
        pigSporeFan: {
            card: "sporeFanTower",
            get rules() {
                return [ZoneFilterCard("outpostOuterCirclePvP"), PlacementPreferenceCard("placeRandomly")]
            },
            respawns: true,
            respawnDelay: 120,
            replacements: [
                {
                    beginAt: 5,
                    chance: 0.90,
                    structures: ["piglinTower"]
                },
                {
                    beginAt: 12,
                    chance: 0.75,
                    structures: ["piglinTower"]
                }
            ]
        },
        pigKnockbackTower: {
            card: "piglinKnockbackTower",
            get rules() {
                return [ZoneFilterCard("outpostOuterCirclePvP"), PlacementPreferenceCard("placeRandomly")]
            },
            respawns: true,
            respawnDelay: 120,
            replacements: [
                {
                    beginAt: 5,
                    chance: 0.15,
                    structures: ["pigSporeFan"]
                },
                {
                    beginAt: 12,
                    chance: 0.3,
                    structures: ["pigSporeFan"]
                }
            ]
        }
    }
}
