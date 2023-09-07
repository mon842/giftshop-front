import React from 'react'

// images 
import src1 from '../../public/products/p5.webp'
import src2 from '../../public/products/p6.webp'
import src3 from '../../public/products/p7.webp'
import src4 from '../../public/products/p9.webp'

import ProductCards from './Card/ProductCards'

const Crokery = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 '>
        <ProductCards src={src1}/>
        <ProductCards src={src2}/>
        <ProductCards src={src3}/>
        <ProductCards src={src4}/>
        <ProductCards src={src2}/>
        <ProductCards src={src1}/>
        <ProductCards src={src4}/>
        <ProductCards src={src3}/>
    </div>
  )
}

export default Crokery;