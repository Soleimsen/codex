import React from 'react'
import { useEffect, useState } from 'react'

const useFetch = () => {
    const [loadPokemon, setLoadPokemon] = useState("https://pokeapi.co/api/v2/pokemon?limit=96&offset=0")
    const [loading, setLoading] = useState(false)
    const [currentPokemon, setCurrentPokemon] = useState()
    const [totalPokemon, setTotalPokemon] = useState()

    const loadMorePokemon = async () => {
        const axios = require('axios').default;
        setLoading(true);
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
    }

  //get request to fetch first set of pokemon
  useEffect(() => {
    loadMorePokemon()
  }, []);

  return { currentPokemon, totalPokemon, loading }
}

export default useFetch