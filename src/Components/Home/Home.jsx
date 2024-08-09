import React, { useState } from 'react'
import avatar from '../../assets/images/avataaars.svg'

export default function Home() {

    return <>
      
      <div className=' bg-[#1abc9c] py-24 flex flex-col items-center'>
        <img src={avatar} width={250} alt="" />
        <h1 className=' font-bold text-4xl mt-8 mb-4'>START FRAMEWORK</h1>
        <div className=' flex space-x-4 items-center mb-4'>
          <div className=' w-20 h-1 bg-white'></div>
          <i className=' fa-solid fa-star'></i>
          <div className=' w-20 h-1 bg-white'></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    
    </>
  }