import type { Name, NamedAPIResource } from "./utility";

export interface EncounterMethod {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A good value for sorting. */
    order: number;
    /** The name of this resource listed in different languages. */
    names: Name[];
}

export interface EncounterCondition {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (EncounterConditionValue[]) A list of possible values for this encounter condition. */
    values: NamedAPIResource[];
}

export interface EncounterConditionValue {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (EncounterCondition) The condition this encounter condition value pertains to. */
    condition: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
}
