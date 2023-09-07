import React from 'react'

// images
import src1 from '../../public/Essentials/men.webp';
import src2 from '../../public/Essentials/women.webp';
import src3 from '../../public/Essentials/kids.webp';
import Image from 'next/image';
import SubHeader from '../header/SubHeader';

const Essentials = () => {
  return (
    <div className='mx-8 mb-10'>
        <SubHeader text={'Favourite Essentials'}/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Image
              src={src1}
              alt='..'
              height={600}
              width={600}
            />
            <Image
              src={src2}
              alt='..'
              height={600}
              width={600}
            />
            <Image
              src={src3}
              alt='..'
              height={600}
              width={600}
            />
        </div>
    </div>
  )
}

export default Essentials