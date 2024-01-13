PiglinPVPHordes[FACTION_NAME_ATTACK] = {
    hordeName: FACTION_NAME_ATTACK,
    village: "badger:piglin_pvp_attack",
    textureStamp: "piglin_attack_outpost_01_pvp",
    loadouts: {
        day: [
            {
                beginAt: 0, // Measured in minutes
                loadout: [
                    "badger:piglin_runt",
                    "badger:piglin_grunter"
                ],
                cap: 6, //hard limit at 6
                rate: 10,
                batch: 1,
                waveSize: 24
            },
            {
                beginAt: 16, // Measured in minutes
                loadout: [
                    "badger:piglin_runt",
                    "badger:piglin_grunter"
                ],
                cap: 6, //hard limit at 6
                rate: 9,
                batch: 1,
                waveSize: 24
            },
            {
                beginAt: 30, // Measured in minutes
                loadout: [
                    "badger:piglin_runt",
                    "badger:piglin_grunter"
                ],
                cap: 6, //hard limit at 6
                rate: 9,
                batch: 2,
                waveSize: 24
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
                    "badger:piglin_runt",
                    "badger:piglin_runt",
                    "badger:piglin_runt",
                    "badger:piglin_runt",
                    "badger:piglin_runt",
                    "badger:piglin_piggo_warboar",
                    "badger:piglin_piggo_warboar"
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
                    "badger:piglin_runt",
                    "badger:piglin_runt",
                    "badger:piglin_runt",
                    "badger:piglin_piggo_warboar",
                    "badger:piglin_piggo_warboar",
                    "badger:piglin_piggo_warboar",
                    "badger:piglin_medic",
                    "badger:piglin_medic",
                    "badger:piglin_seeker"
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
                    "badger:piglin_runt",
                    "badger:piglin_runt",
                    "badger:piglin_runt",
                    "badger:piglin_runt",
                    "badger:piglin_disruptor",
                    "badger:piglin_seeker",
                    "badger:piglin_pigmadilo",
                    "badger:piglin_medic",
                    "badger:piglin_medic"
                ],
                cap: 6,
                rate: 20,
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
            initialAmount: 3,
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
                    beginAt: 6,
                    chance: 0.25,
                    structures: ["pigShieldTower"]
                },
                {
                    beginAt: 12,
                    chance: 0.5,
                    structures: ["pigShieldTower"]
                },
                {
                    beginAt: 18,
                    chance: 0.75,
                    structures: ["pigShieldTower"]
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
        pigShieldTower: {
            card: "sporeShieldTower",
            get rules() {
                return [ZoneFilterCard("outpostOuterCirclePvP"), PlacementPreferenceCard("placeRandomly")]
            },
            respawns: true,
            respawnDelay: 120,
            replacements: [
                {
                    beginAt: 5,
                    chance: 0.15,
                    structures: ["pigThrowerTower"]
                },
                {
                    beginAt: 12,
                    chance: 0.35,
                    structures: ["pigThrowerTower"]
                },
                {
                    beginAt: 18,
                    chance: 0.5,
                    structures: ["pigThrowerTower"]
                }
            ]
        },
        pigThrowerTower: {
            card: "pigThrowerTower",
            get rules() {
                return [ZoneFilterCard("outpostOuterCirclePvP"), PlacementPreferenceCard("placeRandomly")]
            },
            respawns: true,
            respawnDelay: 120,
            replacements: [
                {
                    beginAt: 20,
                    chance: 0.5,
                    structures: ["pigThrowerTower2"]
                },
                {
                    beginAt: 26,
                    chance: 0.75,
                    structures: ["pigThrowerTower2"]
                }
            ]
        },
        pigThrowerTower2: {
            card: "pigThrowerTower2",
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
