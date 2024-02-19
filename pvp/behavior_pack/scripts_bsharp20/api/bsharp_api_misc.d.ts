/**
 * Called from within a snippet. Stops the listener that resulted in this snippet from listening.
 * ie. The snippet will only be run once.
 */
declare function Once(): void

/**
 * The target info object for the rally point launch functions.
 */
declare interface TargetInfo {
    /**
     * REQUIRED.
     * The target entity.
     * If an empty entity group is given this target info is ignored.
     * If more than one entity is given one will be selected randomly.
     */
    target: number[]

    /**
     * REQUIRED.
     * The distribution of entities for this target.
     * The higher the number the more entities will be sent to the target.
     */
    weight: number

    /**
     * Optional.
     * If true the units will track the target. If false the units will move to position.
     * If not set it will move to position.
     */
    follow: boolean

    /**
     * Optional.
     * A `MoveCallback` to trigger a `SNIPPET_MoveCallback`.
     * If not set no callback will be triggered.
     */
    callback: number
}
