// TODO: (sallen) Move this to pvp data pack

/* eslint-disable @typescript-eslint/no-unused-vars */
const pvpSizeAmountsTreasureChest = {
    smallWood: [75, 125],
    mediumWood: [150, 500],
    smallStone: [75, 125],
    mediumStone: [150, 500],
    largeStone: [750, 1000],
    smallIron: [15, 25],
    mediumIron: [30, 60],
    largeIron: [75, 100],
    smallRedstone: [15, 25],
    mediumRedstone: [30, 60],
    smallPrismarine: [5, 20],
    smallLapis: [15, 25],
    smallDiamond: [15, 25],
    mediumDiamond: [30, 60],
    smallCoal: [15, 25],
    mediumCoal: [30, 60],
    rewardAllays: [1, 1]
}

const TREASURE_CHEST_PVP_DATA = {
    globalIndex: "gv_pvp_treasure_chest_index",
    // BBI-TODO: (bmceachern 1) this is unlocalized -- requires additional localization tech to pass through arguments
    messagePrefix: "treasure_chest_pvp_rewards_",
    telemetryType: "poi_treasure_chest",
    telemetrySubcategory: TELEMETRY_SUBCATEGORIES.TREASURE_CHEST,
    chooseRandom: true,
    useAvailabilityRestrictions: false,
    rewardTable: [
        //Do not delete comment, necessary for linter to not autoformat array
        // Rows 1-4
        {
            //250 wood, 125 stone. enough for a single arrow tower
            weight: 10,
            rewards: [
                { resource: "wood", value: pvpSizeAmountsTreasureChest.smallWood },
                { resource: "stone", value: pvpSizeAmountsTreasureChest.smallStone }
            ]
        },
        {
            // 500 wood, 250 stone, 25 coal. enough for 2 arrow towers or 1 arrow tower and 1 shotgun tower
            weight: 10,
            rewards: [
                { resource: "wood", value: pvpSizeAmountsTreasureChest.mediumWood },
                { resource: "stone", value: pvpSizeAmountsTreasureChest.mediumStone },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.smallCoal }
            ]
        },
        {
            //750+ stone, 75 iron. enough for a mason once you get the iron upgrade!
            weight: 10,
            rewards: [
                { resource: "iron", value: pvpSizeAmountsTreasureChest.largeIron },
                { resource: "stone", value: pvpSizeAmountsTreasureChest.largeStone }
            ]
        },
        {
            //750+ stone. enough for 6+ freeze traps
            weight: 10,
            rewards: [{ resource: "stone", value: pvpSizeAmountsTreasureChest.largeStone }]
        },
        // Rows 5-6
        {
            //25 lapis, 35 redstone. enough for a zombie spawner if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "redstone", value: pvpSizeAmountsTreasureChest.smallRedstone }
            ]
        },
        {
            //25 lapis, 50 coal. enough for a creeper spawner and some creepers if you get extra lapis and the coal upgrade
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.mediumCoal }
            ]
        },
        // Rows 7-8
        {
            //25 lapis, 35 diamond. enough for a skeleton spawner if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.smallDiamond }
            ]
        },
        {
            //25 lapis, 20 iron. enough for secondary golem spanwers + a few golems
            weight: 10,
            rewards: [
                { resource: "iron", value: pvpSizeAmountsTreasureChest.smallIron },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        //Rows 9-11
        {
            //250 stone, 25 lapis. enough for a few stone golems
            weight: 10,
            rewards: [
                { resource: "stone", value: pvpSizeAmountsTreasureChest.mediumStone },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        {
            //250 wood, 25 lapis. enough for a few wood golems
            weight: 10,
            rewards: [
                { resource: "wood", value: pvpSizeAmountsTreasureChest.smallWood },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        //Rows 12-14
        {
            //25 lapis, 50 diamond. enough for a skeleton spawner if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.mediumDiamond }
            ]
        },
        {
            //25 lapis, 50 redstone. enough for a zombie spawner if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "redstone", value: pvpSizeAmountsTreasureChest.mediumRedstone }
            ]
        },
        {
            //25 lapis, 50 coal. enough for a creeper spawner and some creepers if you get extra lapis
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "coal", value: pvpSizeAmountsTreasureChest.mediumCoal }
            ]
        },
        // Rows 15-17
        {
            //25 lapis, 20 iron. enough for secondary golem spanwers + a few golems
            weight: 10,
            rewards: [
                { resource: "iron", value: pvpSizeAmountsTreasureChest.smallIron },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        {
            //250 stone, 25 lapis. enough for a few stone golems
            weight: 10,
            rewards: [
                { resource: "stone", value: pvpSizeAmountsTreasureChest.mediumStone },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        {
            //250 wood, 25 lapis. enough for a few wood golems
            weight: 10,
            rewards: [
                { resource: "wood", value: pvpSizeAmountsTreasureChest.smallWood },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        {
            //Rare Prismarine + Lapis enough for a small upgrade and some mobs
            weight: 10,
            rewards: [
                { resource: "xp_common", value: pvpSizeAmountsTreasureChest.smallPrismarine },
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }
            ]
        },
        {
            //Rare Prismarine + iron
            weight: 10,
            rewards: [
                { resource: "xp_common", value: pvpSizeAmountsTreasureChest.smallPrismarine },
                { resource: "iron", value: pvpSizeAmountsTreasureChest.smallIron }
            ]
        },
        {
            //Rare Build Allay + wood + stone
            weight: 10,
            rewards: [
                { resource: "build_allay", value: pvpSizeAmountsTreasureChest.rewardAllays },
                { resource: "wood", value: pvpSizeAmountsTreasureChest.smallWood },
                { resource: "stone", value: pvpSizeAmountsTreasureChest.smallStone }
            ]
        },
        {
            //Rare Gather Allay + stone
            weight: 10,
            rewards: [
                { resource: "gather_allay", value: pvpSizeAmountsTreasureChest.rewardAllays },
                { resource: "stone", value: pvpSizeAmountsTreasureChest.smallStone }
            ]
        }
    ],
    rewardTableUncapped: [
        {
            weight: 10,
            rewards: [{ resource: "xp_common", value: pvpSizeAmountsTreasureChest.smallPrismarine }]
        },
        {
            weight: 10,
            rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
        },
        {
            weight: 10,
            rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
        },
        {
            weight: 10,
            rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
        },
        {
            weight: 10,
            rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
        },
        {
            weight: 10,
            rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
        },
        {
            weight: 10,
            rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
        },
        {
            weight: 10,
            rewards: [{ resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis }]
        },
        {
            weight: 10,
            rewards: [
                { resource: "emerald", value: pvpSizeAmountsTreasureChest.smallLapis },
                { resource: "xp_common", value: pvpSizeAmountsTreasureChest.smallPrismarine }
            ]
        }
    ]
}
