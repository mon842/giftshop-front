"use client"
import Chat from '@/components/Chat/Chat'
import Products2 from '@/components/Products/Products2'
import FilterBox from '@/components/Ui/Filter/FilterBox'
import Logo from '@/components/Ui/Logo'
import React, { useState } from 'react'

// image
import src from '../../public/bot/bot.png'
import Image from 'next/image'
import FilterMob from '@/components/Ui/Filter/FilterMob'

const page = () => {
  const [showchat, setShowchat] = useState('icon')
  const handleChat = () => {
    if (showchat === 'icon') {
      setShowchat('chat')
    } else {
      setShowchat('icon')
    }
  }
  return (
    <div className='px-8 relative'>
      <div className='flex justify-center'>
        <Logo h={'200px'} w={'200px'} />
      </div>

      <div className='block md:hidden'>
        <FilterMob/>
      </div>

      <div className='grid grid-cols-3 md:grid-cols-4'>
        <FilterBox />
        <div className='col-span-3'>
          <Products2 />
        </div>

      </div>
      {
        showchat === 'icon' ?
          <div onClick={handleChat} className='bg-gray-50 p-4 rounded-3xl fixed top-2/3 right-5'>
            <Image
              src={src}
              alt='..'
              height={50}
              width={50}
            />
            <p>Ask AI</p>
          </div>
          :
          <Chat fun={handleChat} />
      }


    </div>
  )
}

export default page