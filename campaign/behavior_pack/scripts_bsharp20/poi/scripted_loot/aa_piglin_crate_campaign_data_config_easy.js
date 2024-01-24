const PIGLIN_CRATE_CAMPAIGN_DATA = {
    globalIndex: "gv_campaign_piglin_crate_index",
    // BBI-TODO: (bmceachern 1) this is unlocalized -- requires additional localization tech to pass through arguments
    messagePrefix: "piglin_crate_reward_",
    telemetryType: "piglin_crate",
    telemetrySubcategory: TELEMETRY_SUBCATEGORIES.PIGLIN_CRATE,
    chooseRandom: true,
    isWeighted: true,
    useAvailabilityRestrictions: false,
    rewardTable: {
        attackHorde: {
            outpost: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLow },
                        { resource: "diamond", value: campaignSizeAmountsPiglinCrate.rareResourceLow },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLow },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            small: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "diamond", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            medium: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "diamond", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "diamond", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "diamond", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            large: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "diamond", value: campaignSizeAmountsPiglinCrate.rareResourceHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLargeBase },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResourceLargeBase },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "diamond", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ]
        },
        defendHorde: {
            outpost: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLow },
                        { resource: "coal", value: campaignSizeAmountsPiglinCrate.rareResourceLow },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLow },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            small: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "coal", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            medium: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "coal", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "coal", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "coal", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            large: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "coal", value: campaignSizeAmountsPiglinCrate.rareResourceHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLargeBase },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResourceLargeBase },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "coal", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ]
        },
        obstacleHorde: {
            outpost: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLow },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResourceLow },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLow },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            small: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            medium: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            large: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResourceHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLargeBase },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResourceLargeBase },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ]
        },
        frostHorde: {
            outpost: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLow },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResourceLow },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLow },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            small: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            medium: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.gold },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ],
            large: [
                //Do not delete comment, necessary for linter to not autoformat array
                {
                    weight: 40,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResourceHigh },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 30,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldLargeBase },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 20,
                    rewards: [
                        { resource: "gold", value: campaignSizeAmountsPiglinCrate.goldHigh },
                        { resource: "iron", value: campaignSizeAmountsPiglinCrate.rareResourceLargeBase },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                },
                {
                    weight: 15,
                    rewards: [
                        { resource: "build_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "gather_allay", value: campaignSizeAmountsPiglinCrate.rewardAllays },
                        { resource: "redstone", value: campaignSizeAmountsPiglinCrate.rareResource },
                        { resource: "emerald", value: campaignSizeAmountsPiglinCrate.lapisReward }
                    ]
                }
            ]
        }
    },
    rewardTableUncapped: [
        //Do not delete comment, necessary for linter to not autoformat array
        {
            weight: 10,
            rewards: [{ resource: "xp_common", value: campaignSizeAmountsPiglinCrate.xpCommonHigh }]
        }
    ]
}

RegisterDifficultyConfig("piglin_crate_campaign_data_config", PIGLIN_CRATE_CAMPAIGN_DATA, GAME_DIFFICULTY.easy)
