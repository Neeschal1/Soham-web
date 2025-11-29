import React from 'react'
import Fonts from '../../utils/fontsconfig'

const Sadacreatives = () => {
  return (
    <div className='bg-black flex flex-1 py-5 items-center'>
        <div className='flex flex-row gap-2 items-center justify-center w-full'>
            <h1 className='text-white/80' style={{...Fonts.poppins.regular}}>A</h1>
            <a href='#' style={{...Fonts.poppins.medium}} className='text-white/80 hover:text-white duration-400 hover:cursor-pointer'>Sadacreatives</a>
            <h1 className='text-white/80' style={{...Fonts.poppins.regular}}>Product</h1>
        </div>
    </div>
  )
}

export default Sadacreatives