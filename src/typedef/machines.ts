import type { NamedAPIResource } from "./utility";

export interface Machine {
    /** The identifier for this resource. */
    id: number;
    /** (Item) The TM or HM item that corresponds to this machine. */
    item: NamedAPIResource;
    /** (Move) The move that is taught by this machine. */
    move: NamedAPIResource;
    /** (VersionGroup) The version group that this machine applies to. */
    version_group: NamedAPIResource;
}
