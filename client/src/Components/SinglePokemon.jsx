import React from 'react'
import CurrentPokemon from '../Hooks/CurrentPokemon'
import PokemonCardDetailed from '../Components/PokemonCardDetailed'

const SinglePokemon = () => {
  const { currentPokemon, loading } = CurrentPokemon()
  const types = currentPokemon.types?.map(type => type.type.name)

  return (
    <>
      {loading ? <div>Loading...</div> :
        <div>
          <PokemonCardDetailed name={currentPokemon.name} type={types} image={currentPokemon.image} stats={currentPokemon.stats} abilities={currentPokemon.abilities} />
        </div>
      }
    </>
  )
}

export default SinglePokemon