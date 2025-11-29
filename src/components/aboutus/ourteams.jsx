import React from 'react'
import Fonts from '../../utils/fontsconfig'

const Ourteams = () => {
  return (
    <div className='flex flex-1 items-center justify-center w-full p-5 mt-20 flex-col'>
        <h1 style={{...Fonts.poppins.medium}} className='text-5xl text-black'>The Faces of Innovation</h1>
        <h3 style={{...Fonts.poppins.regular}} className='flex flex-1 text-black/40 w-7/12 text-center'>Leverage the power of advanced technology to streamline operations and drive growth. Stay ahead with innovative solutions build for the future.</h3>
    </div>
  )
}

export default Ourteams