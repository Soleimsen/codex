import express, { response } from "express";
import fetch from "node-fetch";

async function fetchJSON(url) {
    const res = await fetch(url);
    if (res.ok) {
        return await res.json();
    } else {
        throw new Error(`${res.status} ${res.statusText}`);
    }
}

async function fetchPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`;
    //fetch all pokemon from api
    const allPokemon = await fetchJSON(url);

    const allPokemonDetails = await Promise.all(allPokemon.results.map(async (pokemon) => {
        const res = await fetchJSON(pokemon.url);
        return res;
    }));

    //only send the data we need
    const allPokemonData = allPokemonDetails.map((pokemon) => {
        return {
            name: pokemon.name,
            id: pokemon.id,
            image: pokemon.sprites.front_default,
            type: pokemon.types.map((type) => type.type.name)
        }
    })
    return allPokemonData;
}

async function fetchPokemonDetail(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    //fetch current pokemon from api
    const currentPokemon = await fetchJSON(url);

    //only send the data we need
    const currentPokemonData = {
        name: currentPokemon.name,
        id: currentPokemon.id,
        image: currentPokemon.sprites.front_default,
        types: currentPokemon.types,
        abilities: currentPokemon.abilities,
        stats: currentPokemon.stats
    };
    return currentPokemonData;
}

export function FetchPokemonAPI() {
    const router = express.Router();
    router.get("/", async (req, res) => {
        const allPokemon = await fetchPokemon();
        res.json(allPokemon);
        console.log(allPokemon);
    });
    router.get("/:name", async (req, res) => {
        const currentPokemon = await fetchPokemonDetail(req.params.name);
        res.json(currentPokemon);
        console.log(currentPokemon);
    }
    );
    return router;
}