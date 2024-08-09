import React, { useState } from 'react'

export default function ABOUT() {

  return <>

    <div className=' bg-[#1abc9c] py-56 flex flex-col items-center'>
      <h2 className=' font-bold text-4xl uppercase mb-5'>about component</h2>
      <div className=' flex space-x-4 items-center mb-4'>
        <div className=' w-20 h-1 bg-white'></div>
        <i className=' fa-solid fa-star'></i>
        <div className=' w-20 h-1 bg-white'></div>
      </div>
      <div className='md:flex w-[75%] m-auto md:space-x-2'>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className=' sm:mt-5 md:mt-0'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>

  </>
}
