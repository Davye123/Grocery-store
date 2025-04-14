import React from 'react'
import { assets } from '../assets/assets'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner" className='w-full max-w-6xl mx-auto hidden md:block' />
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full max-w-md mx-auto md:hidden' />
    </div>
  )
}

export default MainBanner
