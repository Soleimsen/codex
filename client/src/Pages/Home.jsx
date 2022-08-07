import pokemonLogo from '../images/pokemon_logo.png';
import pokemon_default from '../images/pokemon_default.png';
import React, { useState } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(false)

    //if localstorage is empty, create a temporary array in localstorage
    if (localStorage.getItem('allPokemon') === null) {
        setLoading(true)
        localStorage.setItem('allPokemon', JSON.stringify([
            {
                name: 'Bulbasaur',
                id: 1,
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                types: [{ type: { name: 'grass' } }],
                stats: [{ base_stat: 45 }],
                abilities: [{ ability: { name: 'overgrow' } }]
            },
        ]));

        localStorage.setItem('totalPokemon', JSON.stringify(1));
        setLoading(false)
    }

    const allPokemonIds = Object.keys(JSON.parse(localStorage.getItem('allPokemon'))) //get all pokemon
    const randomPokemonIndex = allPokemonIds[Math.floor(Math.random() * allPokemonIds.length)] //get a random index number from all pokemon
    const randomPokemon = JSON.parse(localStorage.getItem('allPokemon'))[randomPokemonIndex] //get the pokemon at the random index

    const gradient = "bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900"
    const centerContent = "flex justify-center items-center"

    return (
        <>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div>
                    <header className='flex flex-col'>
                        <div className="flex justify-center">
                            <img src={pokemonLogo} alt="" className='w-1/5' />
                        </div>
                        <h1 className='self-center text-6xl font-sans font-medium'>Codex</h1>
                    </header>
                    <main>
                        <div id="container" className="flex justify-center">

                            <a href="/pokemon/browse" className={`w-72 h-96 border-8 border-blue rounded-xl my-20 mx-10 ${centerContent} ${gradient} preserve-3d hover:my-rotate-y-180 duration-1000`}>
                                <div className='flex flex-col backface-hidden'>
                                    <img src={pokemonLogo} alt="pokemon logo top" className='w-3/5 self-center my-4' />
                                    <img src={pokemon_default} alt="pokeball in pokemon card" className='w-2/5 self-center my-4' />
                                    <img src={pokemonLogo} alt="pokemon logo bottom" className='w-3/5 rotate-180 self-center my-4' />
                                </div>
                                <div className='flex flex-col absolute my-rotate-y-180 backface-hidden overflow-hidden'>
                                    <div>
                                        <h1 className='text-white'>Browse Codex</h1>
                                    </div>
                                </div>
                            </a>
                            <a href={`/pokemon/${randomPokemon.id}`} className={`w-72 h-96 border-8 border-blue rounded-xl my-20 mx-10 ${centerContent} ${gradient} preserve-3d hover:my-rotate-y-180 duration-1000`}>
                                <div className='flex flex-col backface-hidden'>
                                    <img src={pokemonLogo} alt="pokemon logo top" className='w-3/5 self-center my-4' />
                                    <img src={pokemon_default} alt="pokeball in pokemon card" className='w-2/5 self-center my-4' />
                                    <img src={pokemonLogo} alt="pokemon logo bottom" className='w-3/5 rotate-180 self-center my-4' />
                                </div>
                                <div className='flex flex-col absolute my-rotate-y-180 backface-hidden overflow-hidden'>
                                    <div>
                                        <h1 className='text-white'>Random Pokemon</h1>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <h1 className='text-center text-2xl font-sans font-medium'>TIP: Hover on one of the Pokemon cards to reveal whats behind!</h1>
                        </div>
                    </main>
                </div>
            )}
        </>
    )
}