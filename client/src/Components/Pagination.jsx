import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({ pokemonPerPage, totalPokemon, paginate, paginateBack, paginateForward, currentPage }) => {
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
            return (
                <div className={paginationActive} key={number} onClick={() => paginate(number)}>
                    {number}
                </div>
            )
        }
    }
    )

    //render 2 pages before current page
    const renderPreviousPages = pageNumbers.map(number => {
        if (number < currentPage && number > currentPage - 3 && number !== 1) {
            return (
                <div className={paginationNotActive} key={number} onClick={() => paginate(number)}>
                    {number}
                </div>
            )
        }
    }
    )

    //render 2 pages after current page
    const renderNextPages = pageNumbers.map(number => {
        if (number > currentPage && number < currentPage + 3 && number !== pageNumbers.length) {
            return (
                <div className={paginationNotActive} key={number} onClick={() => paginate(number)}>
                    {number}
                </div>
            )
        }
    }
    )

    //render the first page number if current page is not 1
    const renderFirstPage = pageNumbers.map(number => {
        if (number === 1 && currentPage > 1) {
            return (
                <div className={paginationNotActive} key={number} onClick={() => paginate(number)}>
                    {number}
                </div>
            )
        }
    }
    )

    //render the last page number if current page is not the last page
    const renderLastPage = pageNumbers.map(number => {
        if (number === pageNumbers.length && currentPage < pageNumbers.length) {
            return (
                <div className={paginationNotActive} key={number} onClick={() => paginate(number)}>
                    {number}
                </div>
            )
        }
    }
    )

    return (
        <nav className='flex justify-center'>
            <ul className='inline-flex -space-x-px'>
                <li className='px-2'>
                    <a onClick={paginateBack} href={"#"} className={chevron}>
                        <ChevronLeftIcon className='w-4 h-4' />
                    </a>
                </li>
                <div>{renderFirstPage}</div>
                <div>{currentPage > 4 && (
                    <p className='px-2 mt-2'>...</p>
                )
                } </div>
                <div>{renderPreviousPages}</div>
                <div>{renderActivePage}</div>
                <div>{renderNextPages}</div>
                <div>{currentPage < pageNumbers.length - 3 && (
                    <p className='px-2 mt-2'>...</p>
                )
                } </div>
                <div>{renderLastPage}</div>

                <li className='px-2'>
                    <a onClick={paginateForward} href="#" className={chevron}>
                        <ChevronRightIcon className='w-4 h-4' />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination