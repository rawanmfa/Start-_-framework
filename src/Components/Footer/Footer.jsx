import React, { useState } from 'react'

export default function Footer() {

    return <>

      <div className='bg-[#2c3e50] py-24 flex justify-evenly text-center'>
        <div>
          <h3 className=' font-medium mb-2 text-2xl'>LOCATION</h3>
          <p className=' mb-3'>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className=' font-medium mb-2 text-2xl'>AROUND THE WEB</h3>
          <ul className=' flex space-x-2'>
            <li><div className=' border border-white rounded-full'><i className=' fa-brands fa-facebook p-3'></i></div></li>
            <li><div className=' border border-white rounded-full'><i className=' fa-brands fa-twitter p-3'></i></div></li>
            <li><div className=' border border-white rounded-full'><i className=' fa-brands fa-linkedin-in p-3'></i></div></li>
            <li><div className=' border border-white rounded-full'><i className=' fa-solid fa-globe p-3'></i></div></li>
          </ul>
        </div>
        <div>
          <h3 className=' font-medium mb-2 text-2xl'>ABOUT FREELANCER</h3>
          <p >Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>
        </div>
      </div>
      <div className='bg-[#1a252f] py-5 text-center'><p>Copyright © Your Website 2021</p></div>

    </>
  }
  