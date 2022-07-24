import { useState, useEffect } from 'react'
import Pagination from './Pagination'

const FetchPokemon = () => {
    const [loading, setLoading] = useState(false)
    const [loadPokemon, setLoadPokemon] = useState("https://pokeapi.co/api/v2/pokemon?limit=96&offset=0")
    const [currentPokemon, setCurrentPokemon] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage, setPokemonPerPage] = useState(12)
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

  //get current pokemons
  const indexOfLastPokemon = currentPage * pokemonPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
  const currentPokemons = currentPokemon?.slice(indexOfFirstPokemon, indexOfLastPokemon)

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const paginateForward = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

    return (
        <>
            <div>
              <h1>Pokemon</h1>
              <Pagination pokemonPerPage={pokemonPerPage} totalPokemon={totalPokemon} paginate={paginate} paginateBack={paginateBack} paginateForward={paginateForward}/>
              {loading ? (
                <h2>Loading...</h2>
              ) : (
                <div className='flex justify-center flex-wrap'>
                {currentPokemons?.map((p) => (
                  <div key={p.id} className="w-48 h-48 m-12 border">
                    <h1 className='text-3xl text-center'>{p.name}</h1>
                    <img src={p.sprites.front_default} alt={"Image of " + p.name} className="w-full h-full"/>
                  </div>
                ))}
                </div>
              )}
          </div>
        </>
    )
}

export default FetchPokemon