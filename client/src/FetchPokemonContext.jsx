import React from 'react'
import { fetchJSON } from './Hooks/FetchJSON'

export const FetchAllPokemonContext = React.createContext(
    {
        async fetchAllPokemon() {
            return await fetchJSON(`/api/pokemon`)
        }
    }
)

export const FetchCurrentPokemonContext = React.createContext(
    {
        async fetchCurrentPokemon(name) {
            return await fetchJSON(`/api/pokemon/${name}`)
        }
    }
)
