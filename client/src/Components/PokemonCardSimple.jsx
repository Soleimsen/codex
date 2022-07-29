import React from 'react'
import { useState, useEffect } from 'react'
import { FastAverageColor } from 'fast-average-color';

import TypeColors from './pokemonCard/TypeColors'
import AverageColor from './pokemonCard/AverageColor'

const PokemonCardSimple = ({name, type, image, id, loading}) => {

    const { color } = AverageColor({image})

    //Ensure pokemon name starts with capital letter
    const pokemonName = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()

  return (
    <>
    {loading ? (
        <div>Loading...</div>
    ) : (
    
    <div id='card-container' className='m-8 w-48 h-[270px] shadow-xl rounded-xl'>
    <a href={`/pokemon/`+ pokemonName.toLowerCase()}>
        <div className={`flex flex-col h-full border rounded-xl`} id="bg">
            <div className={`flex justify-center align-bottom rounded-t-lg`} style={{backgroundColor: color}}>
                <img src={image} alt={"Image of " + name} className="w-11/12" id='image' />
            </div>
            <div className='pb-4'>
                <div className="my-1 text-center text-2xl">{pokemonName}</div>
                <div className='flex justify-center'><TypeColors type={type} /></div>
            </div>
        </div>
        </a>
    </div>
    )}
    </>
  )
}

export default PokemonCardSimple