import type { GenerationGameIndex, Name, NamedAPIResource, VersionEncounterDetail } from "./utility";

export interface Location {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Region) The region this location can be found in. */
    region: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of game indices relevant to this location by generation. */
    game_indices: GenerationGameIndex[];
    /** (LocationArea[]) Areas that can be found within this location. */
    areas: NamedAPIResource[];
}

export interface LocationArea {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game. */
    encounter_method_rates: EncounterMethodRate[];
    /** (Location) The region this location area can be found in. */
    location: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter. */
    pokemon_encounters: PokemonEncounter[];
}

export interface EncounterMethodRate {
    /** (EncounterMethod) The method in which Pokémon may be encountered in an area.. */
    encounter_method: NamedAPIResource;
    /** The chance of the encounter to occur on a version of the game. */
    version_details: EncounterVersionDetails[];
}

export interface EncounterVersionDetails {
    /** The chance of an encounter to occur. */
    rate: number;
    /** (Version) The version of the game in which the encounter can occur with the given chance. */
    version: NamedAPIResource;
}

export interface PokemonEncounter {
    /** (Pokemon) The Pokémon being encountered. */
    pokemon: NamedAPIResource;
    /** A list of versions and encounters with Pokémon that might happen in the referenced location area. */
    version_details: VersionEncounterDetail[];
}

export interface PalParkArea {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of Pokémon encountered in thi pal park area along with details. */
    pokemon_encounters: PalParkEncounterSpecies[];
}

export interface PalParkEncounterSpecies {
    /** The base score given to the player when this Pokémon is caught during a pal park run. */
    base_score: number;
    /** The base rate for encountering this Pokémon in this pal park area. */
    rate: number;
    /** (PokemonSpecies) The Pokémon species being encountered. */
    pokemon_species: NamedAPIResource;
}

export interface Region {
    /** The identifier for this resource. */
    id: number;
    /** (Location[]) A list of locations that can be found in this region. */
    locations: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (Generation) The generation this region was introduced in. */
    main_generation: NamedAPIResource;
    /** (Pokedex[]) A list of pokédexes that catalogue Pokémon in this region. */
    pokedexes: NamedAPIResource[];
    /** (VersionGroup[]) A list of version groups where this region can be visited. */
    version_groups: NamedAPIResource[];
}
