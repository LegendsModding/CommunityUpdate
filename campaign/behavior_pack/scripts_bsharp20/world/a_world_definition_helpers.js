// Convenience structure that we're storing in the definition collection
const _WorldGenFilter = (tags, count) => {
    return { tags: tags, count: count }
}

// Tags can have a different order, but they must have same contents
const _TagsEqual = (tagsA, tagsB) => {
    const lengthA = tagsA.length
    const lengthB = tagsB.length

    if (lengthA !== lengthB) {
        return false
    }

    const map = {}
    for (const tag of tagsA) {
        map[tag] = 1
    }

    for (const tag of tagsB) {
        if (map[tag] === undefined) {
            return false
        }
    }

    return true
}

const _TagsAInB = (tagsA, tagsB) => {
    const map = {}
    for (const tag of tagsB) {
        map[tag] = 1
    }

    for (const tag of tagsA) {
        if (map[tag] === undefined) {
            return false
        }
    }

    return true
}

const _FindFilterInCollection = (tags, collection) => {
    for (let i = 0; i < collection.length; i++) {
        if (_TagsEqual(collection[i].tags, tags)) {
            return i
        }
    }

    return -1
}

// A special class that helps us manage the filter collection that is being passed down by the inheritance
class WorldGenFilterManager {
    constructor(collection) {
        this.collection = collection
    }

    RemoveFilter(tags) {
        const filterIndex = _FindFilterInCollection(tags, this.collection)
        if (filterIndex !== -1) {
            this.collection.splice(filterIndex, 1)
        }
        return filterIndex
    }

    ReplaceFilter(oldTags, newTags, newCount) {
        const filterIndex = _FindFilterInCollection(oldTags, this.collection)
        if (filterIndex !== -1) {
            this.collection.splice(filterIndex, 1, _WorldGenFilter(newTags, newCount))
        }
        return filterIndex
    }

    ChangeFilterCount(tags, newCount) {
        const filterIndex = _FindFilterInCollection(tags, this.collection)
        if (filterIndex !== -1) {
            this.collection[filterIndex].count = newCount
        }
        return filterIndex
    }

    AppendFilter(newTags, newCount) {
        const filter = _WorldGenFilter(newTags, newCount)
        this.collection.push(filter)
        return _FindFilterInCollection(newTags, this.collection)
    }

    PrependFilter(newTags, newCount) {
        const filter = _WorldGenFilter(newTags, newCount)
        this.collection.splice(0, 0, filter)
        return _FindFilterInCollection(newTags, this.collection)
    }

    AddFilterAfterTarget(targetTags, newTags, newCount) {
        const filterIndex = _FindFilterInCollection(targetTags, this.collection)
        if (filterIndex === -1) {
            return this.AppendFilter(newTags, newCount)
        }

        const filter = _WorldGenFilter(newTags, newCount)
        this.collection.splice(filterIndex + 1, 0, filter)
        return _FindFilterInCollection(newTags, this.collection)
    }

    AddFilterBeforeTarget(targetTags, newTags, newCount) {
        const filterIndex = _FindFilterInCollection(targetTags, this.collection)
        if (filterIndex === -1) {
            return this.AppendFilter(newTags, newCount)
        }

        const filter = _WorldGenFilter(newTags, newCount)
        this.collection.splice(filterIndex, 0, filter)
        return _FindFilterInCollection(newTags, this.collection)
    }

    FilterExists(tags) {
        return _FindFilterInCollection(tags, this.collection) !== -1
    }

    GetFilterCount(tags) {
        let totalCount = 0
        for (const filter of this.collection) {
            if (_TagsAInB(tags, filter.tags)) {
                totalCount += filter.count
            }
        }
        
        return totalCount
    }
}

const _GenerateWorldGenFilterCollection = (worldGenDefinition) => {
    let filters = []

    // Inheritance step. Would run recursively till the "base" definition
    if (IsNotNull(worldGenDefinition.base)) {
        filters = _GenerateWorldGenFilterCollection(worldGenDefinition.base)
    }

    worldGenDefinition.modify(new WorldGenFilterManager(filters))
    return filters
}

// A helper to map the difficulty setting to the number of claimed area sub-clusters
const GetSubclusterCount = () => {
    const difficultyString = QUERY_GameDifficulty()
    switch (difficultyString) {
        case "Peaceful":
            return 2
        case "Easy":
            return 3
        default:
            return 4
    }
}

const GetExtraClusterCount = (hordeName) => {
    const numberOfBases = QUERY_GetGlobalVariable(GetCustomGameNumberOfBasesVarName(hordeName))

    // BBI-NOTE: (dplourde)
    // The number of sub-clusters that are already being used (defined above in 'GetSubclusterCount') generally fit
    // the max five bases that the regular campaign is configured with. We only want to add additional clusters for
    // bases beyond the first five.
    const defaultClusterCount = GetSubclusterCount()
    return Math.max(numberOfBases - defaultClusterCount, 0)
}

// A special shorthand for generating random numbers under world gen group
const RandomNumWorldGen = (min, max) => {
    return QUERY_RandomNumberGroup(min, max, "world_gen")
}

// A helper method which sets the world gen deck based on the filters definition
const SetWorldGenDefinition = (worldGenDefinition) => {
    const filterCollection = _GenerateWorldGenFilterCollection(worldGenDefinition)
    const combinedDeck = DECK_Empty()

    for (const filter of filterCollection) {
        const deck = DECK_MakeFromLibraryFilteredWithCopies("worldCards", filter.tags, filter.count)
        DECK_PutOnBottomOf(deck, combinedDeck)
    }

    Logi(`Setting up the world gen deck with count ${DECK_Count(combinedDeck)}`)
    OUTPUT_SetNamedDeck("WorldPlacementRulesDeck", combinedDeck)
}
