import React from 'react'
import Image from 'next/image';


const Sales = ({src}:any) => {
  return (
    <div className='mx-8'>
        <Image
            className='w-full'
              src={src}
              alt='..'
              height={600}
              width={600}
            />
    </div>
  )
}

export default Sales