import { useState, useEffect } from 'react'

const AllPokemon = () => {

    const [loading, setLoading] = useState(true)
    const [allPokemon, setAllPokemon] = useState([])
    const [totalPokemon, setTotalPokemon] = useState(0)

    //fetch all pokemon from server using context
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('totalPokemon')) < 1000) {
            fetch('/api/pokemon')
                .then(res => res.json())
                .then(data => {
                    setAllPokemon(data)
                    setTotalPokemon(data.length)
                    setLoading(false)
                })
        }
    }
        , [])

    if (loading === false) {
        localStorage.setItem('allPokemon', JSON.stringify(allPokemon))
        localStorage.setItem('totalPokemon', JSON.stringify(totalPokemon))
    }
}

export default AllPokemon