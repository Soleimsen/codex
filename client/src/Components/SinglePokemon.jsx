import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch'
import PokemonCardDetailed from './PokemonCardDetailed'

const SinglePokemon = () => {

  const [currentPokemonName] = useState(window.location.pathname.split('/')[2])
  const [currentPokemonId] = useState(window.location.pathname.split('/')[3])

  const { loading, currentPokemonType, currentPokemonImage, currentPokemonAbilities, currentPokemonStats, currentPokemonDescription, currentPokemonEvolution, currentPokemonEvolutionChain } = useFetch({ fetchDetail: `/${currentPokemonName}` })

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex justify-center'>
          <PokemonCardDetailed
            name={currentPokemonName}
            type={currentPokemonType}
            image={currentPokemonImage}
            abilities={currentPokemonAbilities}
            stats={currentPokemonStats}
            description={currentPokemonDescription}
            evolution={currentPokemonEvolution}
            evolutionChain={currentPokemonEvolutionChain}
          />
        </div>
      )}
    </>
  )
}

export default SinglePokemon