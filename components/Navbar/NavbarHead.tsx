"use client"

import React, { useState, useEffect } from 'react'

// variables
const arr1 = [
    {
        t: "men1",
    },
    {
        t: "men2",
    }
]
const arr2 = [
    {
        t: "women1",
    },
    {
        t: "women2",
    }
]

const NavbarHead = () => {
    // variables
    const [isShown, setIsShown] = useState(false);
    const [hoverElement, setHoverElement] = useState('');
    const [hoverArray, setHoverArray] = useState([{
        t: "",
    }]);

    // functions
    const handleHover = (e: any) => {
        console.log(e.target.value);

        if (e.target.value == '1') {
            setHoverArray(arr1);
        }
        else if (e.target.value == '2') {
            setHoverArray(arr2);
        }
        setIsShown(true);

    }



    return (
        <nav className="bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* logo */}
                <a href="#" className="flex items   -center">
                    <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="40px" height="40px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
                </a>

                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className="hidden w-full md:block md:w-auto " id="navbar-dropdown">
                    <div className='block md:flex '>
                        <ul className="flex flex-col font-medium p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {/* <li onMouseOver={() => { setIsShown(false) }} className='h-full w-2 bg-gray-50'></li> */}
                            <li>
                                <button onMouseOver={handleHover} value="1" className="text-gray-700 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
                                    New & Featured
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                            </li>
                            {/* <li onMouseOver={() => { setIsShown(false) }} className='h-full w-2 bg-gray-50'></li> */}
                            <li>
                                <button onMouseOver={handleHover} value="2" className="text-gray-700 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
                                    women
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                            </li>
                            {/* <li onMouseOver={() => { setIsShown(false) }} className='h-full w-2 bg-gray-50'></li> */}
                        </ul>


                        <ul className='flex  font-medium p-4 md:p-0' onMouseOver={() => { setIsShown(false) }}>
                            <li>

                                <form >
                                    <label htmlFor="default-search" className=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />

                                    </div>
                                </form>

                            </li>
                            <li className='flex items-center mx-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </li>
                            <li className='flex items-center mx-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

                            </li>
                        </ul>
                    </div>

                </div>

                {isShown &&

                    <div onMouseLeave={() => { setIsShown(false) }} className="h-screen w-full z-20  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">

                            {
                                hoverArray.map((ele) => (
                                    <li key={ele.t}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white">{ele.t}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }


            </div>
        </nav>
    )
}

export default NavbarHead

/*





                        








*/
