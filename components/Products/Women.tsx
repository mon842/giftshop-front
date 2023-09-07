import React from 'react'

// images 
import src1 from '../../public/products/p10.webp'
import src2 from '../../public/products/p11.webp'
import src3 from '../../public/products/p12.webp'
import src4 from '../../public/products/p13.webp'

import ProductCards from './Card/ProductCards'

const Women = () => {
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

export default Women