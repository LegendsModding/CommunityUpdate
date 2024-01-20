/* eslint-disable @typescript-eslint/no-unused-vars */
const LOOT_TYPE = {
    treasureChest: 0,
    piglinCrate: 1,
    treasureChestPvP: 2,

    // special threshold to indicate this uses the piglinCrate type + village specific traits (size, faction, etc.) 
    // when used, the village ID should be packaged into this value (ex. 10,000 + village ID 12 = 10,012)
    piglinCrateVillage: 10000 
}

const LOOT_DATA_BY_TYPE = [TREASURE_CHEST_CAMPAIGN_DATA, PIGLIN_CRATE_CAMPAIGN_DATA, TREASURE_CHEST_PVP_DATA]
