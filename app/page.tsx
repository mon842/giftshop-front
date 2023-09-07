import Banner from '@/components/Banner/Banner'
import Essentials from '@/components/Essentials/Essentials'

import Hero from '@/components/Hero/Hero'
import Sales from '@/components/SalesImages/Sales'
import Header from '@/components/header/Header'
import SubHeader from '@/components/header/SubHeader'


// images
import src1 from '../public/Hero/h13.png'
import src2 from '../public/Hero/h1.webp'
import src3 from '../public/Hero/h2.webp'
import src4 from '../public/Hero/h3.webp'
import src5 from '../public/Hero/h12.webp'

import Products from '@/components/Products/Products'
import Products2 from '@/components/Products/Products2'

export default function Home() {
  return (
    <div>
      <Sales src={src1} />
      <div className='flex mb-10 justify-center items-center bg-slate-100'>
        <div>
          <p className='flex justify-center'>New Styles on Sale</p>
          <p className='text-xs underline my-1'>Download the app and access all our products</p>
        </div>
      </div>
      <Sales src={src2} />
      
      <Products2/>
      
      <div className='flex justify-center'>
        <Header text={'FEATURED BRANDS'} />
      </div>
      <Sales src={src3} />

      <div className='relative my-10'>
        <Hero />

      </div>

      <div className='flex justify-center'>
        <Header text={'jUST DROPPED'} />
      </div>
      <Sales src={src4} />


      <div className='flex justify-center'>
        <Header text={'SPECIAL SELECT'} />
      </div>
      <Sales src={src5} />

       <Products/> 
      <div>
        <Header text={'Exclusive Brands'} />
        <SubHeader text={'Get exciting Deals'} />
        <Banner />
        <Essentials />
      </div>
    </div>
  )
}
