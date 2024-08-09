import React from 'react'
import background from '../../public/money-cash.gif'
const Home = () => {
  return (
    <div className='w-screen h-screen object-fill'>
      <div className='w-screen h-screen object-fill absolute top-0 left-0'>
        <img className='h-full w-full object-cover' src={background} alt="" />
      </div>
      <div className='relative z-10 flex items-center justify-center w-full h-full '>
        <h1 className='text-white text-8xl font-semibold'>Welcome to the era of tax 💵💵</h1>
      </div>
    </div>
  )
}

export default Home
