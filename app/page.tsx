import Chat from '@/components/Chat/Chat'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='flex justify-center items-center bg-slate-100'>
        <div>
          <p className='flex justify-center'>New Styles on Sale</p>
          <p className='text-xs underline my-1'>Download the app and access all our products</p>
        </div>
      </div>

      <div className='relative'>
        <Hero/>
        <div className='absolute top-0'>
          <Chat/>
        </div>
        
      </div>
      
    </div>
  )
}
