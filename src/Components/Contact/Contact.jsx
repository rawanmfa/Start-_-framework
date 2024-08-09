import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Contact() {

    return <>

<div className='w-[85%] m-auto text-center flex flex-col items-center py-10'>
      <h2 className='font-bold text-4xl uppercase mb-5 text-[#2c3e50]'>conatct section</h2>
      <div className='flex space-x-4 items-center mb-4'>
        <div className='w-20 h-1 bg-[#2c3e50]'></div>
        <i className='fa-solid fa-star text-[#2c3e50]'></i>
        <div className='w-20 h-1 bg-[#2c3e50]'></div>
      </div>
      <form className=" w-1/2 py-10">
      <div className=" w-full mb-5">
      <input type="text" name="floating_name" className=" py-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none placeholder:text-gray-900 focus:outline-none focus:ring-0" placeholder=" userName"  />
  </div>
  <div className=" w-full mb-5">
      <input type="text" name="floating_age" className=" py-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none placeholder:text-gray-900 focus:outline-none focus:ring-0" placeholder=" userAge"  />
  </div>
  <div className=" w-full mb-5">
      <input type="email" name="floating_email" className=" py-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none placeholder:text-gray-900 focus:outline-none focus:ring-0" placeholder=" userEmail"  />
  </div>
  <div className=" w-full mb-5">
      <input type="password" name="floating_password" className=" py-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none placeholder:text-gray-900 focus:outline-none focus:ring-0" placeholder="userPassword "  />
  </div>
  <NavLink className=" mt-5 text-white bg-[#1abc9c] font-medium rounded-lg text-sm px-5 py-2.5">Send Message</NavLink>
  </form>
</div>

    </>
  }