/*
// helper functions
const displayBaseSizePips = () => {
    switch (get("size")) {
        case "small":
        case "act1_a":
        case "act1_b":
        case "act1_c":
            presentation("main_icon", "faction_size_01")
            break
        case "medium":
            presentation("main_icon", "faction_size_02")
            break
        case "large":
            presentation("main_icon", "faction_size_03")
            break
    }
}

onUpdate(() => {
    // global map state check
    if (get("mode") === "normal" && get("zoom") === "1") {

        // entity state check
        switch (get("faction")) {
            // WOF
            case "faction.player.well":
                makeEntity("main_icon", "badger:wmap_well_of_fate")
                break
            // piglins
            case "faction.pig.defend":
                makeEntity("main_icon", "badger:wmap_piglin_bruiser_faction01")
                displayBaseSizePips()
                break
            case "faction.pig.attack":
                makeEntity("main_icon", "badger:wmap_piglin_bruiser_faction02")
                // presentation("main_icon", "faction_size_01")
                displayBaseSizePips()
                break
            case "faction.pig.obstacle":
                makeEntity("main_icon", "badger:wmap_piglin_bruiser_faction03")
                displayBaseSizePips()
                break
            // cultures
            case "faction.cul.001":
                makeEntity("main_icon", "badger:wmap_villager_culture01")
                break
            // mob alliances
            case "faction.mob.alliance.skeleton":
                makeEntity("main_icon", "badger:wmap_mob_skeleton")
                break
            case "faction.mob.alliance.zombie":
                makeEntity("main_icon", "badger:wmap_mob_zombie")
                break
            case "faction.mob.alliance.creeper":
                makeEntity("main_icon", "badger:wmap_mob_creeper")
                break
            // POI (towers)
            case "faction.poi.tower_01":
                makeEntity("main_icon", "badger:wmap_knockbacktower")
                break
            case "faction.poi.tower_02":
                makeEntity("main_icon", "badger:wmap_frost_tower")
                break
            case "faction.poi.tower_03":
                loge("how did this happen? tower 03 doesn't exist anymore")
                break
            case "faction.poi.tower_04":
                makeEntity("main_icon", "badger:wmap_knockbacktower")
                break
            // POI (allies)
            case "faction.poi.ally.01.faction":
                makeEntity("main_icon", "badger:wmap_mob_fallen_warrior")
                break
            case "faction.poi.ally.04":
                makeEntity("main_icon", "badger:wmap_mob_golem_shield")
                break
            case "faction.poi.ally.05":
                makeEntity("main_icon", "badger:wmap_mob_golem_sniper")
                break
            // POI (mounts)
            case "faction.poi.mount.01":
                makeEntity("main_icon", "badger:wmap_mount_purple_tiger")
                break
            case "faction.poi.mount.03":
                makeEntity("main_icon", "badger:wmap_mount_giant_beetle")
                break
            case "faction.poi.mount.04":
                makeEntity("main_icon", "badger:wmap_mount_giant_bird")
                break
        }

        if (exists("player")) {
            makeEntity("main_icon", "badger:wmap_hero_ranger")
        }
    }
})
*/