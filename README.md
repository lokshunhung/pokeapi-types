# pokeapi-ts

TypeScript type definitions for [PokeAPI v2](https://pokeapi.co/docs/v2)

## Install

`$ yarn add -DE pokeapi-types`

## Usage

This package contains only type definitions and no runtime code. All type definitions are available under the named exported symbol `PokeAPI`.

Example: getting pokemon info for ditto using [/api/v2/pokemon/{id_or_name}](https://pokeapi.co/docs/v2#pokemon)

```ts
import { PokeAPI } from "pokeapi-types";

async function getPokemon(idOrName: string): Promise<PokeAPI.Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${idOrName}`;
    const response = await fetch(url);
    return await response.json();
}

// const ditto = await getPokemon("ditto");
```
