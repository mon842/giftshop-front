import React from 'react'

const Header = ({text}:any) => {
  return (
    <div className='mt-8 mx-2 text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-400 via-purple-600 to-purple-600 tracking-tight'>{text}</div>
  )
}

export default Header