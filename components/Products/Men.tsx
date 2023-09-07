import React from 'react'

// images 
import src1 from '../../public/products/p1.webp'
import src2 from '../../public/products/p2.webp'
import src3 from '../../public/products/p3.webp'
import src4 from '../../public/products/p4.webp'

import ProductCards from './Card/ProductCards'

const Men = () => {
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

export default Men