/* eslint-disable @typescript-eslint/no-unused-vars */
// =======================
// ===== Global Vars =====
// =======================

const CustomSettingGV = (settingName) => {
    return `gv_custom_setting_${settingName}`
}

const GetCustomGameNumberOfBasesVarName = (hordeName) => {
    return CustomSettingGV("number_of_bases_" + hordeName)
}

const GetCustomGameHordePersonalityVarName = (hordeName) => {
    return CustomSettingGV("horde_personality_" + hordeName)
}

// ===================
// ===== ACT1 SKIP =====
// ===================

const HaveWeSkippedAct1 = () => {
    return QUERY_GetGlobalVariable(CUSTOM_OPTIONS.SKIP_ACT_1) > 0
}

// ================================
// ====== HORDE PERSONALITY =======
// ================================

const GetHordePersonalityName = (hordeName) => {
    const hordePersonalityValue = QUERY_GetGlobalVariable(GetCustomGameHordePersonalityVarName(hordeName))
    const personalityString = PIGLIN_HORDE_PERSONALITY_MAP[hordePersonalityValue]
    return personalityString === undefined ? PIGLIN_HORDE_PERSONALITY.NONE : personalityString
}

// ===================
// ====== MISC =======
// ===================

const GetAbbreviatedHordeName = (hordeName) => {
    switch (hordeName) {
        case FACTION_NAME_ATTACK:
            return "attack"
        case FACTION_NAME_DEFEND:
            return "defend"
        case FACTION_NAME_OBSTACLE:
            return "obstacle"
        case FACTION_NAME_FROST:
            return "frost"
        default:
            Loge(`Horde '${hordeName}' name does not have an associated abbreviation.`)
            return ""
    }
}
