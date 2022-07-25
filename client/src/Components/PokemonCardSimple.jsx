import React from 'react'
import { useState, useEffect } from 'react'
import { FastAverageColor } from 'fast-average-color';

const PokemonCardSimple = ({name, type, image}) => {

    const [loading , setLoading] = useState(false)
    const [color, setColor] = useState();

    //get avarage color of pokemon image
    const fastAverageColor = new FastAverageColor();
    const colorPromise = fastAverageColor.getColorAsync(image);

    //render avarage color of pokemon image as background color of pokemon card
    useEffect(() => {
        const average = async () => await colorPromise.then(color => {
            setColor(color.hex);
        }
        )
        average();
    }, [image])

    //Ensure pokemon name starts with capital letter
    const pokemonName = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()

    //give pokemon type a color
    const pokemonType = type.map((type, index) => {
        let color = ''
        switch(type.type.name) {
            case 'normal':
                color = '#A8A77A'
                break;
            case 'fire':
                color = '#EE8130'
                break;
            case 'water':
                color = '#6390F0'
                break;
            case 'electric':
                color = '#F7D02C'
                break;
            case 'grass':
                color = '#7AC74C'
                break;
            case 'ice':
                color = '#96D9D6'
                break;
            case 'fighting':
                color = '#C22E28'
                break;
            case 'poison':
                color = '#A33EA1'
                break;
            case 'ground':
                color = '#E2BF65'
                break;
            case 'flying':
                color = '#A98FF3'
                break;
            case 'psychic':
                color = '#F95587'
                break;
            case 'bug':
                color = '#A6B91A'
                break;
            case 'rock':
                color = '#B6A136'
                break;
            case 'ghost':
                color = '#735797'
                break;
            case 'dragon':
                color = '#6F35FC'
                break;
            case 'dark':
                color = '#705746'
                break;
            case 'steel':
                color = '#B7B7CE'
                break;
            case 'fairy':
                color = '#DDA0DD'
                break;
            default:
                color = '#A8A77A'
                break;
        }

        return (
            <span key={index} style={{backgroundColor: color}} className={`text-center rounded-lg mx-2 text-white`}>
                <div>
                    <p className='px-2 py-1 text-md font-mono'>{type.type.name.charAt(0).toUpperCase() + type.type.name.substring(1).toLowerCase()}</p>
                </div>
            </span>
        )
    }
    )

  return (
    <>
    {loading ? (
        <div>Loading...</div>
    ) : (
    
    <div id='card-container' className='m-8 w-48 h-[270px] shadow-xl rounded-xl'>
    <a href={`/pokemon/`+ pokemonName}>
        <div className={`flex flex-col h-full border rounded-xl`} id="bg">
            <div className={`flex justify-center align-bottom rounded-t-lg`} style={{backgroundColor: color}}>
                <img src={image} alt={"Image of " + name} className="w-11/12" id='image' />
            </div>
            <div className='pb-4'>
                <div className="my-1 text-center text-2xl">{pokemonName}</div>
                <div className='flex justify-center'>{pokemonType}</div>
            </div>
        </div>
        </a>
    </div>
    )}
    </>
  )
}

export default PokemonCardSimple