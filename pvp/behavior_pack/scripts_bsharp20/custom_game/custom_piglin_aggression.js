// Note: never have a wave size multiplier > 1. This will almost certainly ensure that a base will never be able to gather enough piglins to send a wave due to pop cap restrictions.
const customPiglinAggressionData = {
    settingName: "piglin_invasion_aggression",
    configs: [
        //Standard
        {},
        // None
        {
            disableWaves: true,
            disableGrudgeWaves: true
        },
        // Low
        // Decreasing the spawn rate or batch size would affect the economy, so we don't necessarily want to do that
        // But disabling regular waves while keeping grudge waves does reduce piglin aggression, especially in the early game
        {
            disableWaves: true,
            disableGrudgeWaves: false
        },
        // High
        // For both high and very high options, we are introducing potentially more prismarine into the economy.
        // The time it takes for the player to kill piglins, as well as how long it takes them to travel to the HQs, is still a bottleneck that prevents this from ballooning too hard.
        // Reducing the wave size spreads out the wave groups so it's more of a constant stream of units, rather than periodic large waves.
        {
            beginTime: 0.8,
            rate: 0.5,
            batchSize: 2,
            waveSize: 0.5
        },
        // Very High
        // beginTime causes barrack loadouts to escalate faster by a multiplier
        {
            beginTime: 0.5,
            rate: 0.25,
            batchSize: 4,
            waveSize: 0.25
        }
    ]
}

SNIPPET_GameSettingInitialized(customPiglinAggressionData.settingName, (value) => {
    const modifications = customPiglinAggressionData.configs[value.value]

    if (modifications.disableWaves) {
        piglinWaveDataPVP.wavesEnabled = false
    }
    if (modifications.disableGrudgeWaves) {
        piglinWaveDataPVP.grudgeWavesEnabled = false
    }

    for (const piglinHordeConfig of PiglinPVPHordes) {
        for (const loadout of piglinHordeConfig.loadouts) {
            for (const barracksConfig of loadout) {
                if (modifications.beginTime) {
                    barracksConfig.beginAt *= modifications.beginTime
                }
                if (modifications.rate) {
                    barracksConfig.rate = Math.max(Math.round(barracksConfig.rate * modifications.rate), 5)
                }
                if (modifications.batchSize) {
                    barracksConfig.batchSize = Math.max(Math.round(barracksConfig.batchSize * modifications.batchSize), 1)
                }
                if (modifications.waveSize) {
                    barracksConfig.waveSize = Math.max(Math.round(barracksConfig.waveSize * modifications.waveSize), 1)
                }
            }
        }
    }
})
