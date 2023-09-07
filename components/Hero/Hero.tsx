"use client"

import Image from 'next/image'
import React from 'react'
import src from '../../public/Hero/h11.webp'

const Hero = () => {

    return (
        <div>
            
            <div className='flex justify-center'>
                <Image className="w-5/6 h-96"
                    src={src}
                    alt="image description"
                    width={700}
                    height={700}
                />
            </div>

            <div className='my-8 mx-4'>
                <p className='flex justify-center text-sm'>dsija onds</p>
                <p className='flex justify-center text-5xl lg:text-7xl font-extrabold'>Get your gifts</p>
                <p className='mt-2 flex justify-center text-sm'>The Season is here. Start yours prepared with the best in touch, agility, presicion and speed.</p>
                <div className='flex justify-center my-5'>
                    <button type="button" className="text-white bg-gray-900 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Todays Deal</button>
                </div>

            </div>

        </div>

    )
}

export default Hero