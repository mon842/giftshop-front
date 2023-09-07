import React from 'react'
import Men from './Men'
import Crokery from './Crockery'
import SubHeader from '../header/SubHeader'

const Products = () => {
  return (
    <div className='px-3'>
        <SubHeader text={`Exclusive Men's Collection`}/>
        <Men/>
        <SubHeader text={`HandPicked Collection`}/>
        <Crokery/>
    </div>
  )
}

export default Products