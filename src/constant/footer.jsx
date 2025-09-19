import React from 'react'
import Fonts from '../utils/fontsconfig'

const Footer = () => {
  return (
    <>
     <div className='flex flex-1 bg-black py-50 w-full items-center justify-center'>
      <h1 style={Fonts.poppins.semiBold} className='text-5xl text-white'>Footer</h1>
     </div>
    </>
  )
}

export default Footer