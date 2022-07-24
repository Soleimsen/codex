import { useState, useEffect } from 'react'

const FetchPokemon = () => {
    const [loading, setLoading] = useState(false)
    const [loadPokemon, setLoadPokemon] = useState("https://pokeapi.co/api/v2/pokemon?limit=16&offset=0")
    const [currentPokemon, setCurrentPokemon] = useState()

    const loadMorePokemon = () => {
        const axios = require('axios').default;
        setLoading(true);
        axios
        .get(loadPokemon)
        .then((res) => {
            setLoadPokemon(res.data.next)
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
    return (
        <>
            <div>
      <h1>Pokemon</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        currentPokemon?.map((p) => (
          <div key={p.id}>
            <p>{p.name}</p>
            <img src={p.sprites.front_default} alt="" />
          </div>
        ))
      )}
      <button onClick={loadMorePokemon}>Load new batch</button>
    </div>
        </>
    )
}

export default FetchPokemon