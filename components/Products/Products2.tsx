import React from 'react'

import SubHeader from '../header/SubHeader'
import Women from './Women'
import Watches from './Watches'

const Products2 = () => {
  return (
    <div>
        <SubHeader text={`Exclusive Men's Collection`}/>
        <Women/>
        <SubHeader text={`HandPicked Collection`}/>
        <Watches/>
    </div>
  )
}

export default Products2