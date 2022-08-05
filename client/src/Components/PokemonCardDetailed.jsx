import React, { useState, useEffect } from 'react'
import { FastAverageColor } from 'fast-average-color'
import TypeColors from './pokemonCard/TypeColors';
import pokemon_default from '../images/pokemon_default.png'

const PokemonCardDetailed = ({ name, type, image, abilities, stats }) => {
    if (image === null) {
        image = pokemon_default
    }

    const { pokemonType } = TypeColors({ type })

    //stupid hack to get around the fact that the image is not loaded when the component is rendered
    //this is a workaround, but it works
    const [averageColor, setAverageColor] = useState();
    if (image) {
        useEffect(() => {
            const average = async () => {
                const fastAverageColor = new FastAverageColor();
                const colorPromise = fastAverageColor.getColorAsync(image);
                await colorPromise.then(color => {
                    setAverageColor(color.hex);
                }
                )
            }
            average();
        }
            , [image?.toString()])
    }

    abilities = abilities.map(a => {
        return (
            <div key={a.ability.name}>{a.ability.name}</div>
        )
    }
    )

    stats = stats.map(s => {
        return (
            <div key={s.stat.name}>{s.stat.name}: {s.base_stat}</div>
        )
    }
    )

    //Ensure pokemon name starts with capital letter
    const pokemonName = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()

    return (
        <>
            <div id='card-container' className='m-8 shadow-xl rounded-xl flex justify-center'>
                <div className=''>
                    <div className='p-4'>
                        <h1 className='text-3xl text-center'>{pokemonName}</h1>
                    </div>
                    <div className='flex justify-center pb-2'>{pokemonType}</div>
                    <div className='mt-2 flex'>
                        <div className='p-2'>
                            <h2 className='text-xl'>Abilities</h2>
                            <div>{abilities}</div>
                        </div>
                        <div className='p-2 border-l'>
                            <h2 className='text-xl'>Stats</h2>
                            <div>{stats}</div>
                        </div>
                    </div>
                </div>
                <div className=' rounded-r-xl' style={{ backgroundColor: averageColor }}>
                    <img src={image} alt={"Image of " + name} className="w-72" id='image' />
                </div>
            </div>
        </>
    )
}

export default PokemonCardDetailed