import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({pokemonPerPage, totalPokemon, paginate, paginateBack, paginateForward}) => {
    //pagination styles
    let chevronLeft = "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
    let chevronRight = "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"



    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav className='flex justify-center'>
        <ul className='inline-flex -space-x-px'>
            <li>
                <a onClick={paginateBack} href="#" className={chevronLeft}>
                    <ChevronLeftIcon className='w-4 h-4' />
                </a>
            </li>
            {pageNumbers.map(number => (
                <li key={number} className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a onClick={() => paginate(number)} href="#" className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                        {number}
                    </a>
                </li>
            ))}
            <li>
                <a onClick={paginateForward} href="#" className={chevronLeft}>
                    <ChevronRightIcon className='w-4 h-4' />
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination