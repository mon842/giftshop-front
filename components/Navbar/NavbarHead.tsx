"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'


import Link from 'next/link'
// variables
const arr1 = [
    {
        t: "Clothings",
    },
    {
        t: "shirt",
    },
    {
        t: "Tshirt",
    },
    {
        t: "footware",
    },
    {
        t: "shirt",
    }
]
const arr2 = [
    {
        t: "Footware",
    },
    {
        t: "MakeUp",
    },
    {
        t: "Saree",
    },
    {
        t: "Tshirt",
    },
    {
        t: "Jeans",
    }
]

const arr3 = [
    {
        t: "Clothings",
    },
    {
        t: "shirt",
    },
    {
        t: "Tshirt",
    },
    {
        t: "footware",
    },
    {
        t: "shirt",
    }
]

const arr4 = [
    {
        t: "watches",
    },
    {
        t: "makeup",
    },
    {
        t: "eye liners",
    }
]

import src1 from '../../public/products/p1.webp'
import src2 from '../../public/products/p10.webp'
import src3 from '../../public/products/p14.webp'
import Logo from '../Ui/Logo'


const NavbarHead = () => {
    // variables
    const [isShown, setIsShown] = useState(false);
    const [hoverImg, setHoverImg] = useState(src1);
    const [hoverArray, setHoverArray] = useState([{
        t: "",
    }]);
    const session = useSession();
    console.log(session);
    
    // functions
    const handleHover = (e: any) => {
        console.log(e.target.value);

        if (e.target.value == '1') {
            setHoverArray(arr1);
            setHoverImg(src1)
        }
        else if (e.target.value == '2') {
            setHoverArray(arr2);
            setHoverImg(src2)
        }
        else if (e.target.value == '3') {
            setHoverArray(arr3);
            setHoverImg(src3)
        }
        else if (e.target.value == '4') {
            setHoverArray(arr4);
            setHoverImg(src1)
        }
        setIsShown(true);

    }



    return (
        <nav className="bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* logo */}
                <Logo h={'60px'} w={'60px'}/>

                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className="hidden w-full md:block md:w-auto " id="navbar-dropdown">
                    <div className='block md:flex '>
                        <ul className="flex flex-col font-medium p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href={'/shop'} className="mt-2 text-gray-700 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
                                    Shop Now
                                </Link>

                            </li>
                            <li>
                                <button onMouseOver={handleHover} value="1" className="mt-2 text-gray-700 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
                                    men
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                            </li>

                            <li>
                                <button onMouseOver={handleHover} value="2" className="mt-2 text-gray-700 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
                                    women
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                            </li>

                            <li>
                                <button onMouseOver={handleHover} value="3" className="mt-2 text-gray-700 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
                                    kids
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                            </li>

                            <li>
                                <button onMouseOver={handleHover} value="4" className="mt-2 text-gray-700 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
                                    beauty
                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                            </li>



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

                            <li className='flex items-center mx-2'>
                                <Link href={'/login'} >
                                    {session?.data?.user?.image ?
                                        <div>
                                        <img className="h-8 w-8 rounded-s-2xl ml-4" src={session?.data?.user?.image} alt="img"  />
                                        <p className='text-xs'>{session?.data?.user?.name}</p>
                                        </div>
                                        
                                        :
                                        <svg className='flex justify-center items-center w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                        </svg>
                                    }
                                

                                </Link>


                            </li>
                        </ul>
                    </div>

                </div>

                {isShown &&

                    <div onMouseLeave={() => { setIsShown(false) }} className="flex justify-around absolute top-64 md:top-24 h-96 w-full z-20  bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">

                            {
                                hoverArray.map((ele) => (
                                    <li key={ele.t}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white">{ele.t}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='p-9'>
                            <Image
                                src={hoverImg}
                                height={200}
                                width={200}
                                alt='...'
                            />
                        </div>

                    </div>
                }


            </div>
        </nav>
    )
}

export default NavbarHead

/*





                        








*/
