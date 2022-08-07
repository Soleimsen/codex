import { useState, useEffect } from 'react'

const CurrentPokemon = () => {

    const [loading, setLoading] = useState(true)
    const [currentPokemon, setCurrentPokemon] = useState([])
    const currentPokemonName = window.location.pathname.split('/')[2]

    //fetch all pokemon from server using context
    useEffect(() => {
        fetch(`/api/pokemon/${currentPokemonName}`)
            .then(res => res.json())
            .then(data => {
                setCurrentPokemon(data)
                setLoading(false)
            })
    }
        , [])

    return { currentPokemon, loading }
}

export default CurrentPokemon