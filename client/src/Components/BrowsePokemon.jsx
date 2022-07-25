import { useState } from 'react'
import Pagination from './Pagination'
import useFetch from '../Hooks/useFetch'

const BrowsePokemon = () => {
    const [loadPokemon, setLoadPokemon] = useState("https://pokeapi.co/api/v2/pokemon?limit=96&offset=0")
    const [loading, setLoading] = useState(false)
    const [currentPokemon, setCurrentPokemon] = useState()
    const [totalPokemon, setTotalPokemon] = useState()

    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage, setPokemonPerPage] = useState(8)

    useFetch({loadPokemon : loadPokemon, setCurrentPokemon : setCurrentPokemon, setLoading : setLoading, setTotalPokemon : setTotalPokemon})

  //Pagination
  //get current pokemons to get total pages
  const indexOfLastPokemon = currentPage * pokemonPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
  const currentPokemons = currentPokemon?.slice(indexOfFirstPokemon, indexOfLastPokemon)

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const paginateForward = () => {
    currentPage != totalPokemon / pokemonPerPage ?
    setCurrentPage(currentPage + 1)
    : setCurrentPage(currentPage)
  }
  
  const paginateBack = () => {
    currentPage != 1 ?
    setCurrentPage(currentPage - 1)
    : setCurrentPage(currentPage)
  }


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

export default BrowsePokemon