import React from 'react'

const Pokemons = (pokemons, loading) => {
    
  return (
    <div>{loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='flex justify-center flex-wrap'>
        {pokemons.map((p) => (
          <div key={p.id} className="w-48 h-48 m-12 border">
            <h1 className='text-3xl text-center'>{p.name}</h1>
            <img src={p.sprites.front_default} alt={"Image of " + p.name} className="w-full h-full"/>
          </div>
        ))}
        </div>
      )}</div>
  )
}

export default Pokemons