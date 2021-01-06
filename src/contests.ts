import { Effect, FlavorText, NamedAPIResource } from './utility';

export interface ContestType {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (BerryFlavor) The berry flavor that correlates with this contest type. */
    berry_flavor: NamedAPIResource;
    /** The name of this contest type listed in different languages. */
    names: ContestName[];
}

export interface ContestName {
    /** The name for this contest. */
    name: string;
    /** The color associated with this contest's name. */
    color: string;
    /** (Language) The language that this name is in. */
    language: NamedAPIResource;
}

export interface ContestEffect {
    /** The identifier for this resource. */
    id: number;
    /** The base number of hearts the user of this move gets. */
    appeal: number;
    /** The base number of hearts the user's opponent loses. */
    jam: number;
    /** The result of this contest effect listed in different languages. */
    effect_entries: Effect[];
    /** The flavor text of this contest effect listed in different languages. */
    flavor_text_entries: FlavorText[];
}

export interface SuperContestEffect {
    /** The identifier for this resource. */
    id: number;
    /** The level of appeal this super contest effect has. */
    appeal: number;
    /** The flavor text of this super contest effect listed in different languages. */
    flavor_text_entries: FlavorText[];
    /** (Move[]) A list of moves that have the effect when used in super contests. */
    moves: NamedAPIResource[];
}
