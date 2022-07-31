import { useState } from 'react'
import Pagination from './Pagination'
import useFetch from '../Hooks/useFetch'
import PokemonCardSimple from './PokemonCardSimple'

const BrowsePokemon = () => {

  const [input, setInput] = useState('')

  const { currentPokemon, totalPokemon, loading } = useFetch({ fetchDetail: "?limit=1154&offset=0" });


  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonPerPage, setPokemonPerPage] = useState(8)

  //Pagination
  //get current pokemons to get total pages
  const indexOfLastPokemon = currentPage * pokemonPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
  let filteredPokemon = currentPokemon?.slice(indexOfFirstPokemon, indexOfLastPokemon)
  let totalFilteredPokemon = totalPokemon

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const paginateForward = () => {
    currentPage != totalFilteredPokemon / pokemonPerPage ?
      setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage)
  }

  const paginateBack = () => {
    currentPage != 1 ?
      setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage)
  }

  const paginateFirst = () => {
    setCurrentPage(1)
  }

  const paginateLast = () => {
    setCurrentPage(totalFilteredPokemon / pokemonPerPage)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    if (currentPage > 1) {
      setCurrentPage(1) //reset page to 1 if user types in a new search
    }
  }

  //filter pokemon by name
  //TODO; check how efficient this is
  if (input.length > 2) {
    filteredPokemon = currentPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(input.toLowerCase()) || pokemon.types.map(type => type.type.name).join(' ').toLowerCase().includes(input.toLowerCase()))
    totalFilteredPokemon = filteredPokemon.length

    const indexOfLastPokemon = currentPage * pokemonPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
    filteredPokemon = filteredPokemon?.slice(indexOfFirstPokemon, indexOfLastPokemon)

  }

  return (
    <>
      <div>
        <div className='py-4 flex justify-center'>
          <div className='flex justify-between w-9/12'>
            <Pagination
              pokemonPerPage={pokemonPerPage}
              totalPokemon={totalFilteredPokemon}
              paginate={paginate}
              paginateBack={paginateBack}
              paginateForward={paginateForward}
              paginateFirst={paginateFirst}
              paginateLast={paginateLast}
              currentPage={currentPage}
            />
          </div>
        </div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className='flex justify-center'>
            <div className='border w-9/12'>
              <div>
                <input
                  type="text"
                  placeholder='Search Pokemon'
                  onChange={handleChange} />
              </div>
              <div className='grid grid-cols-4'>
                {filteredPokemon?.map((p, index) =>
                (
                  <div className='flex justify-center' key={index}>
                    <PokemonCardSimple name={p.name} type={p.types} image={p.sprites.front_default} id={p.id} loading={loading} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default BrowsePokemon