import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'

const Pagination = ({ pokemonPerPage, totalPokemon, paginate, paginateBack, paginateForward, paginateFirst, paginateLast, currentPage }) => {
    //pagination styles
    // TODO: WORK ON PAGINATION STYLING. needs more interaction with css
    let chevron = "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
    let paginationNotActive = "text-center relative inline-flex items-center px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-blue-100 cursor-pointer"
    let paginationActive = "text-center relative inline-flex items-center px-3 py-2 rounded-md border border-gray-300 bg-blue-200 text-sm font-medium text-gray-500 cursor-default"

    //loop through the total number of pokemon and create an array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }

    //render current page number
    const renderActivePage = pageNumbers.map(number => {
        if (number === currentPage) {
            return (number)
        }
    }
    )

    return (
        <>
            <div className='flex ml-[20rem]'>
                <a onClick={paginateFirst} href={"#"} className={chevron}>
                    <ChevronDoubleLeftIcon className='w-4 h-4' />
                </a>
                <a onClick={paginateBack} href={"#"} className={chevron}>
                    <ChevronLeftIcon className='w-4 h-4' />
                </a>
            </div>
            <p className='font-sans text-xl'>Page number: {renderActivePage} / {pageNumbers.length}</p>
            <div className='flex mr-[20rem]'>
                <a onClick={paginateForward} href="#" className={chevron}>
                    <ChevronRightIcon className='w-4 h-4' />
                </a>
                <a onClick={paginateLast} href={"#"} className={chevron}>
                    <ChevronDoubleRightIcon className='w-4 h-4' />
                </a>
            </div>
        </>
    )
}

export default Pagination