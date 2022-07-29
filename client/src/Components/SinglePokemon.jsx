import React from 'react'
import PokemonCardDetailed from './PokemonCardDetailed'
import useFetch from '../Hooks/useFetch'
import { useState } from 'react'

const SinglePokemon = () => {

    const [currentPokemonName] = useState(window.location.pathname.split('/')[2])
    const [currentPokemonId] = useState(window.location.pathname.split('/')[3])

    const { loading, currentPokemonType } = useFetch({fetchDetail: `/${currentPokemonName}`});

  return (
    <>
    {loading ? (
        <div>Loading...</div>
    ) : (
    
        <PokemonCardDetailed 
            name={currentPokemonName} 
            type={currentPokemonType} 
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemonId}.png`} />
    )}
    </>
  )
}

export default SinglePokemon