import React from 'react'
import { useState } from 'react'
import AverageColor from './pokemonCard/AverageColor'

const PokemonCardDetailed = ({name, type, image }) => {

    const { color } = AverageColor({image});

  return (
    <>
       <div className='flex justify-center '>
            <div className='border w-3/12 flex justify-center'>
                <div>
                    <h1>{name}</h1>
                    <h2>{type}</h2>
                    <p>{image} </p>
                    <div className={`flex justify-center align-bottom rounded-t-lg`} style={{backgroundColor: color}}>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default PokemonCardDetailed