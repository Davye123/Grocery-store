import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative -z-10 h-[60vh]'>
      <img src={assets.main_banner_bg} alt="banner" className='w-full h-full object-cover hidden md:block' />
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full h-full object-cover md:hidden' />
      <div className='absolute top-1/2 transform -translate-y-1/2 left-4 md:left-16 flex flex-col gap-6'>
        <h2 className='text-4xl md:text-5xl font-bold lg:text-6xl text-center md:text-left max-w-[600px] px-4 md:px-0'>
          Freshness You Can Trust, Savings You will Love!
        </h2>
        
        <div className='flex flex-row items-center gap-6 px-4 md:px-0'>
          <Link 
            to={"/products"}
            className="bg-[#4CAF82] text-white px-8 py-3 rounded-lg text-lg md:text-xl font-semibold hover:bg-[#3d8b68] transition-colors text-center"
          >
            Shop now
          </Link>

          <Link 
            to={"/products"}
            className="flex items-center text-lg md:text-xl font-medium text-gray-700"
          >
            Explore deals
            <span className='ml-2'>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
