import React from 'react'
import { useEffect, useState } from 'react'

const useFetch = ({fetchDetail}) => {
    //loading state
    const [loading, setLoading] = useState(false)

    //get all pokemons
    const [loadPokemon, setLoadPokemon] = useState(`https://pokeapi.co/api/v2/pokemon${fetchDetail}`)
    const [currentPokemon, setCurrentPokemon] = useState()
    const [totalPokemon, setTotalPokemon] = useState()

    //get current pokemon
    const [currentPokemonName, setCurrentPokemonName] = useState(window.location.pathname.split('/')[2])
    const [currentPokemonId, setCurrentPokemonId] = useState()
    const [currentPokemonType, setCurrentPokemonType] = useState("")
    const [currentPokemonImage, setCurrentPokemonImage] = useState("")

    const loadMorePokemon = async () => {
        const axios = require('axios').default;
        setLoading(true);
        if (loadPokemon.includes("?limit=")) {
            await axios
        .get(loadPokemon)
        
        .then((res) => {
            setTotalPokemon(res.data.results.length)
            return res.data.results;
        })
        .then((results) => {
            return Promise.all(results.map((res) => axios.get(res.url)));
        })
        .then((results) => {
            setLoading(false);
            setCurrentPokemon(results.map((res) => res.data));
        });
    } if (loadPokemon.includes(`/${currentPokemonName}`)) {
        await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${currentPokemonName}`)
        .then((res) => {
            setCurrentPokemonType(res.data.types[0].type.name)
            setCurrentPokemonImage(res.data.sprites.front_default)
            setCurrentPokemonId(res.data.id)
            setLoading(false);
        }
        )
    } else {
        setLoading(false);
     }
    }

  //get request to fetch first set of pokemon
  useEffect(() => {
    loadMorePokemon()
  }, []);

  return { currentPokemon, totalPokemon, loading, currentPokemonType, currentPokemonImage, currentPokemonId }
}

export default useFetch