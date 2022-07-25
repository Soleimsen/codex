import { useState } from 'react'
import Pagination from './Pagination'
import useFetch from '../Hooks/useFetch'
import PokemonCardSimple from './PokemonCardSimple'

const BrowsePokemon = () => {
    const [loadPokemon, setLoadPokemon] = useState("https://pokeapi.co/api/v2/pokemon?limit=96&offset=0")
    const [loading, setLoading] = useState(false)
    const [currentPokemon, setCurrentPokemon] = useState()
    const [totalPokemon, setTotalPokemon] = useState()

    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage, setPokemonPerPage] = useState(8)

    useFetch(
      {
        loadPokemon : loadPokemon,
        setCurrentPokemon : setCurrentPokemon, 
        setLoading : setLoading, 
        setTotalPokemon : setTotalPokemon
      }
    )

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
              <div className='py-4'>
                <Pagination 
                  pokemonPerPage={pokemonPerPage} 
                  totalPokemon={totalPokemon} 
                  paginate={paginate} 
                  paginateBack={paginateBack} 
                  paginateForward={paginateForward}
                />
              </div>
              {loading ? (
                <h2>Loading...</h2>
              ) : (
                <div className='flex justify-center'>
                  <div className='grid grid-cols-4 border w-9/12'>
                  {currentPokemons?.map((p) => 
                  (
                    <div className='flex justify-center' key={p.id}>
                    <PokemonCardSimple name={p.name} type={p.types} image={p.sprites.front_default}/>
                    </div>
                  ))}
                  </div>
                </div>
              )}
          </div>
        </>
    )
}

export default BrowsePokemon