"use client"

import React from 'react'

// images
import logo1 from '../../public/logos/3m.svg'
import logo2 from '../../public/logos/barstool-store.svg'
import logo3 from '../../public/logos/budweiser.svg'
import logo4 from '../../public/logos/buzzfeed.svg'
import logo5 from '../../public/logos/forbes.svg'
import logo6 from '../../public/logos/macys.svg'
import logo7 from '../../public/logos/menshealth.svg'
import logo8 from '../../public/logos/mrbeast.svg'
import Image from 'next/image'

//css
import Style from './Banner.module.css'


const arr = [
    {
        s: logo1,
    },
    {
        s: logo2,
    },
    {
        s: logo3,
    },
    {
        s: logo4,
    },
    {
        s: logo5,
    },
    {
        s: logo6,
    },
    {
        s: logo7,
    },
    {
        s: logo8,
    },
    {
        s: logo1,
    },
    {
        s: logo2,
    },
    {
        s: logo3,
    },
    {
        s: logo4,
    },

]
const Banner = () => {
    return (
        <div className={`${Style.logos} py-1 md:py-6 my-5`}>
            <div className={`inline-flex ${Style.logosSlide} gap-12`}>
                {arr.map((i) => (
                    <Image
                        key={ i.s}
                        src={i.s}
                        height={100}
                        width={100}
                        alt='logo'
                        className={`${Style.img}`}
                    />
                ))}

            </div>
            
        </div>
    )
}

export default Banner