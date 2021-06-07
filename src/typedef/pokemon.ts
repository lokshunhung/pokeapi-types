import type {
    APIResource,
    Description,
    Effect,
    FlavorText,
    Name,
    NamedAPIResource,
    VerboseEffect,
    VersionEncounterDetail,
    VersionGameIndex,
} from "./utility";

export interface Ability {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Whether or not this ability originated in the main series of the video games. */
    is_main_series: boolean;
    /** (Generation) The generation this ability originated in. */
    generation: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** The effect of this ability listed in different languages. */
    effect_entries: VerboseEffect[];
    /** The list of previous effects this ability has had across version groups. */
    effect_changes: AbilityEffectChange[];
    /** The flavor text of this ability listed in different languages. */
    flavor_text_entries: AbilityFlavorText[];
    /** A list of Pokémon that could potentially have this ability. */
    pokemon: AbilityPokemon[];
}

export interface AbilityEffectChange {
    /** The previous effect of this ability listed in different languages. */
    effect_entries: Effect[];
    /** (VersionGroup) The version group in which the previous effect of this ability originated. */
    version_group: NamedAPIResource;
}

export interface AbilityFlavorText {
    /** The localized name for an API resource in a specific language. */
    flavor_text: string;
    /** (Language) The language this text resource is in. */
    language: NamedAPIResource;
    /** (VersionGroup) The version group that uses this flavor text. */
    version_group: NamedAPIResource;
}

export interface AbilityPokemon {
    /** Whether or not this a hidden ability for the referenced Pokémon. */
    is_hidden: boolean;
    /** Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon. */
    slot: number;
    /** (Pokemon) The Pokémon this ability could belong to. */
    pokemon: NamedAPIResource;
}

export interface Characteristic {
    /** The identifier for this resource. */
    id: number;
    /** The remainder of the highest stat/IV divided by 5. */
    gene_modulo: number;
    /** The possible values of the highest stat that would result in a Pokémon receiving this characteristic when divided by 5. */
    possible_values: number[];
}

export interface EggGroup {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (PokemonSpecies[]) A list of all Pokémon species that are members of this egg group. */
    pokemon_species: NamedAPIResource[];
}

export interface Gender {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of Pokémon species that can be this gender and how likely it is that they will be. */
    pokemon_species_details: PokemonSpeciesGender[];
    /** (PokemonSpecies[]) A list of Pokémon species that required this gender in order for a Pokémon to evolve into them. */
    required_for_evolution: NamedAPIResource[];
}

export interface PokemonSpeciesGender {
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
    rate: number;
    /** (PokemonSpecies) A Pokémon species that can be the referenced gender. */
    pokemon_species: NamedAPIResource;
}

export interface GrowthRate {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The formula used to calculate the rate at which the Pokémon species gains level. */
    formula: string;
    /** The descriptions of this characteristic listed in different languages. */
    descriptions: Description[];
    /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
    levels: GrowthRateExperienceLevel[];
    /** (PokemonSpecies[]) A list of Pokémon species that gain levels at this growth rate. */
    pokemon_species: NamedAPIResource[];
}

export interface GrowthRateExperienceLevel {
    /** The level gained. */
    level: number;
    /** The amount of experience required to reach the referenced level. */
    experience: number;
}

export interface Nature {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Stat) The stat decreased by 10% in Pokémon with this nature. */
    decreased_stat: NamedAPIResource;
    /** (Stat) The stat increased by 10% in Pokémon with this nature. */
    increased_stat: NamedAPIResource;
    /** (BerryFlavor) The flavor hated by Pokémon with this nature. */
    hates_flavor: NamedAPIResource;
    /** (BerryFlavor) The flavor liked by Pokémon with this nature. */
    likes_flavor: NamedAPIResource;
    /** A list of Pokéathlon stats this nature effects and how much it effects them. */
    pokeathlon_stat_changes: NatureStatChange[];
    /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
    move_battle_style_preferences: MoveBattleStylePreference[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}

export interface NatureStatChange {
    /** The amount of change. */
    max_change: number;
    /** (PokeathlonStat) The stat being affected. */
    pokeathlon_stat: NamedAPIResource;
}

export interface MoveBattleStylePreference {
    /** Chance of using the move, in percent, if HP is under one half. */
    low_hp_preference: number;
    /** Chance of using the move, in percent, if HP is over one half. */
    high_hp_preference: number;
    /** (MoveBattleStyle) The move battle style. */
    move_battle_style: NamedAPIResource;
}

export interface PokeathlonStat {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A detail of natures which affect this Pokéathlon stat positively or negatively. */
    affecting_natures: NaturePokeathlonStatAffectSets;
}

export interface NaturePokeathlonStatAffectSets {
    /** A list of natures and how they change the referenced Pokéathlon stat. */
    increase: NaturePokeathlonStatAffect[];
    /** A list of natures and how they change the referenced Pokéathlon stat. */
    decrease: NaturePokeathlonStatAffect[];
}

export interface NaturePokeathlonStatAffect {
    /** The maximum amount of change to the referenced Pokéathlon stat. */
    max_change: number;
    /** (Nature) The nature causing the change. */
    nature: NamedAPIResource;
}

export interface Pokemon {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The base experience gained for defeating this Pokémon. */
    base_experience: number;
    /** The height of this Pokémon in decimetres. */
    height: number;
    /** Set for exactly one Pokémon used as the default for each species. */
    is_default: boolean;
    /** Order for sorting. Almost national order, except families are grouped together. */
    order: number;
    /** The weight of this Pokémon in hectograms. */
    weight: number;
    /** A list of abilities this Pokémon could potentially have. */
    abilities: PokemonAbility[];
    /** (PokemonForm[]) A list of forms this Pokémon can take on. */
    forms: NamedAPIResource[];
    /** A list of game indices relevant to Pokémon item by generation. */
    game_indices: VersionGameIndex[];
    /** A list of items this Pokémon may be holding when encountered. */
    held_items: PokemonHeldItem[];
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
    location_area_encounters: string;
    /** A list of moves along with learn methods and level details pertaining to specific version groups. */
    moves: PokemonMove[];
    /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites */
    sprites: PokemonSprites;
    /** (PokemonSpecies) The species this Pokémon belongs to. */
    species: NamedAPIResource;
    /** A list of base stat values for this Pokémon. */
    stats: PokemonStat[];
    /** A list of details showing types this Pokémon has. */
    types: PokemonType[];
}

export interface PokemonAbility {
    /** Whether or not this is a hidden ability. */
    is_hidden: boolean;
    /** The slot this ability occupies in this Pokémon species. */
    slot: number;
    /** (Ability) The ability the Pokémon may have. */
    ability: NamedAPIResource;
}

export interface PokemonType {
    /** The order the Pokémon's types are listed in. */
    slot: number;
    /** (Type) The type the referenced Pokémon has. */
    type: NamedAPIResource;
}

export interface PokemonHeldItem {
    /** (Item) The item the referenced Pokémon holds. */
    item: NamedAPIResource;
    /** The details of the different versions in which the item is held. */
    version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
    /** (Version) The version in which the item is held. */
    version: NamedAPIResource;
    /** How often the item is held. */
    rarity: number;
}

export interface PokemonMove {
    /** (Move) The move the Pokémon can learn. */
    move: NamedAPIResource;
    /** The details of the version in which the Pokémon can learn the move. */
    version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
    /** (MoveLearnMethod) The method by which the move is learned. */
    move_learn_method: NamedAPIResource;
    /** (VersionGroup) The version group in which the move is learned. */
    version_group: NamedAPIResource;
    /** The minimum level to learn the move. */
    level_learned_at: number;
}

export interface PokemonStat {
    /** (Stat) The stat the Pokémon has. */
    stat: NamedAPIResource;
    /** The effort points (EV) the Pokémon has in the stat. */
    effort: number;
    /** The base value of the stat. */
    base_stat: number;
}

export interface PokemonSprites {
    /** The default depiction of this Pokémon from the front in battle. */
    front_default: string;
    /** The shiny depiction of this Pokémon from the front in battle. */
    front_shiny: string;
    /** The female depiction of this Pokémon from the front in battle. */
    front_female: string;
    /** The shiny female depiction of this Pokémon from the front in battle. */
    front_shiny_female: string;
    /** The default depiction of this Pokémon from the back in battle. */
    back_default: string;
    /** The shiny depiction of this Pokémon from the back in battle. */
    back_shiny: string;
    /** The female depiction of this Pokémon from the back in battle. */
    back_female: string;
    /** The shiny female depiction of this Pokémon from the back in battle. */
    back_shiny_female: string;
}

export interface LocationAreaEncounter {
    /** (LocationArea) The location area the referenced Pokémon can be encountered in. */
    location_area: NamedAPIResource;
    /** A list of versions and encounters with the referenced Pokémon that might happen. */
    version_details: VersionEncounterDetail[];
}

export interface PokemonColor {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (PokemonSpecies[]) A list of the Pokémon species that have this color. */
    pokemon_species: NamedAPIResource[];
}

export interface PokemonForm {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name. */
    order: number;
    /** The order in which forms should be sorted within a species' forms. */
    form_order: number;
    /** True for exactly one form used as the default for each Pokémon. */
    is_default: boolean;
    /** Whether or not this form can only happen during battle. */
    is_battle_only: boolean;
    /** Whether or not this form requires mega evolution. */
    is_mega: boolean;
    /** The name of this form. */
    form_name: string;
    /** (Pokemon) The Pokémon that can take on this form. */
    pokemon: NamedAPIResource;
    /** A set of sprites used to depict this Pokémon form in the game. */
    sprites: PokemonFormSprites;
    /** (VersionGroup) The version group this Pokémon form was introduced in. */
    version_group: NamedAPIResource;
    /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name. */
    names: Name[];
    /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name. */
    form_names: Name[];
}

export interface PokemonFormSprites {
    /** The default depiction of this Pokémon form from the front in battle. */
    front_default: string;
    /** The shiny depiction of this Pokémon form from the front in battle. */
    front_shiny: string;
    /** The default depiction of this Pokémon form from the back in battle. */
    back_default: string;
    /** The shiny depiction of this Pokémon form from the back in battle. */
    back_shiny: string;
}

export interface PokemonHabitat {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (PokemonSpecies[]) A list of the Pokémon species that can be found in this habitat. */
    pokemon_species: NamedAPIResource[];
}

export interface PokemonShape {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The "scientific" name of this Pokémon shape listed in different languages. */
    awesome_names: AwesomeName[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (PokemonSpecies[]) A list of the Pokémon species that have this shape. */
    pokemon_species: NamedAPIResource[];
}

export interface AwesomeName {
    /** The localized "scientific" name for an API resource in a specific language. */
    awesome_name: string;
    /** (Language) The language this "scientific" name is in. */
    language: NamedAPIResource;
}

export interface PokemonSpecies {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
    order: number;
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
    gender_rate: number;
    /** The base capture rate; up to 255. The higher the number, the easier the catch. */
    capture_rate: number;
    /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
    base_happiness: number;
    /** Whether or not this is a baby Pokémon. */
    is_baby: boolean;
    /** Whether or not this is a legendary Pokémon. */
    is_legendary: boolean;
    /** Whether or not this is a mythical Pokémon. */
    is_mythical: boolean;
    /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. */
    hatch_counter: number;
    /** Whether or not this Pokémon has visual gender differences. */
    has_gender_differences: boolean;
    /** Whether or not this Pokémon has multiple forms and can switch between them. */
    forms_switchable: boolean;
    /** (GrowthRate) The rate at which this Pokémon species gains levels. */
    growth_rate: NamedAPIResource;
    /** A list of Pokedexes and the indexes reserved within them for this Pokémon species. */
    pokedex_numbers: PokemonSpeciesDexEntry[];
    /** (EggGroup[]) A list of egg groups this Pokémon species is a member of. */
    egg_groups: NamedAPIResource[];
    /** (PokemonColor) The color of this Pokémon for Pokédex search. */
    color: NamedAPIResource;
    /** (PokemonShape) The shape of this Pokémon for Pokédex search. */
    shape: NamedAPIResource;
    /** (PokemonSpecies) The Pokémon species that evolves into this Pokemon_species. */
    evolves_from_species: NamedAPIResource;
    /** (EvolutionChain) The evolution chain this Pokémon species is a member of. */
    evolution_chain: APIResource;
    /** (PokemonHabitat) The habitat this Pokémon species can be encountered in. */
    habitat: NamedAPIResource;
    /** (Generation) The generation this Pokémon species was introduced in. */
    generation: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of encounters that can be had with this Pokémon species in pal park. */
    pal_park_encounters: PalParkEncounterArea[];
    /** A list of flavor text entries for this Pokémon species. */
    flavor_text_entries: FlavorText[];
    /** Descriptions of different forms Pokémon take on within the Pokémon species. */
    form_descriptions: Description[];
    /** The genus of this Pokémon species listed in multiple languages. */
    genera: Genus[];
    /** A list of the Pokémon that exist within this Pokémon species. */
    varieties: PokemonSpeciesVariety[];
}

export interface Genus {
    /** The localized genus for the referenced Pokémon species */
    genus: string;
    /** (Language) The language this genus is in. */
    language: NamedAPIResource;
}

export interface PokemonSpeciesDexEntry {
    /** The index number within the Pokédex. */
    entry_number: number;
    /** (Pokedex) The Pokédex the referenced Pokémon species can be found in. */
    pokedex: NamedAPIResource;
}

export interface PalParkEncounterArea {
    /** The base score given to the player when the referenced Pokémon is caught during a pal park run. */
    base_score: number;
    /** The base rate for encountering the referenced Pokémon in this pal park area. */
    rate: number;
    /** (PalParkArea) The pal park area where this encounter happens. */
    area: NamedAPIResource;
}

export interface PokemonSpeciesVariety {
    /** Whether this variety is the default variety. */
    is_default: boolean;
    /** (Pokemon) The Pokémon variety. */
    pokemon: NamedAPIResource;
}
