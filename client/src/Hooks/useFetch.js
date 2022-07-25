import React from 'react'
import { useEffect } from 'react'

const useFetch = ({loadPokemon, setCurrentPokemon, setTotalPokemon, setLoading}) => {

    const loadMorePokemon = async () => {
        const axios = require('axios').default;
        setLoading(true);
        await axios
        .get(loadPokemon)
        .then((res) => {
            console.log(res.data.results)
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
}

export default useFetch