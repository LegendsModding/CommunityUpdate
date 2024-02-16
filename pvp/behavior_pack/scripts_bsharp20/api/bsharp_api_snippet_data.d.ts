/**
 * Payload values sent from any listener.
 */
declare interface SnippetPayload {
    /**
     * Optional.
     * A group of entities.
     */
    entities: number[]

    /**
     * Optional.
     * A string value.
     */
    string: string

    /**
     * Optional.
     * A integer value.
     */
    int: number

    /**
     * Optional.
     * A decimal value.
     */
    float: number

    /**
     * Optional.
     * The owner village ID of the listener.
     * Only set if the listener did not opt out of having an owner.
     */
    ownerVillageId: number
}

/**
 * Common data sent into invasion attack specific snippets
 */
declare interface InvasionAttackData {
    /**
     * The attacking piglin faction name.
     */
    factionName: string

    /**
     * The defending culture name.
     */
    cultureName: string

    /**
     * The defending culture village.
     */
    villageId: number

    /**
     * The FOB village ID.
     * **undefined if FOB has not been spawned yet.**
     */
    fobVillageId: number

    /**
     * The attacking strength.
     */
    strength: number

    /**
     * The invasion ID that represents a specific invasion.
     */
    id: number
}

/**
 * Special data parameter that holds either a string, a number, or a boolean value.
 */
declare interface VariantData {
    /**
     * The value this variant holds. Either a string, number, or boolean.
     */
    value: string | number | boolean
}
