import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({pokemonPerPage, totalPokemon, paginate, paginateBack, paginateForward}) => {
    //pagination styles
    let chevron = "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
    let paginationNotActive = "text-center relative inline-flex items-center px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
    let paginationActive = "text-center relative inline-flex items-center px-3 py-2 rounded-md border border-gray-300 bg-blue-200 text-sm font-medium text-gray-500 hover:bg-gray-50"

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav className='flex justify-center'>
        <ul className='inline-flex -space-x-px'>
            <li>
                <a onClick={paginateBack} href={"#"} className={chevron}>
                    <ChevronLeftIcon className='w-4 h-4' />
                </a>
            </li>
            {pageNumbers.map(number => (
                <li key={number} className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a onClick={() => paginate(number)} href="#" className={paginationNotActive}>
                        <p className='w-4 h-4'>{number}</p>
                    </a>
                </li>
            ))}
            <li>
                <a onClick={paginateForward} href="#" className={chevron}>
                    <ChevronRightIcon className='w-4 h-4' />
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination