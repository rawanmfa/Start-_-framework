import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [fLinkClicked, setFlinkClicked] = useState(false);
    const [sLinkClicked, setSlinkClicked] = useState(false);
    const [tLinkClicked, setTlinkClicked] = useState(false);

    return <>
    <div className=' bg-[#2c3e50] py-8 fixed end-0 start-0 top-0 z-40'>
    <div className=' lg:flex justify-between items-center w-[85%] mx-auto'>
        <div className=' flex justify-between'>
        <NavLink to='' className='font-bold text-3xl' onClick={() =>{ setFlinkClicked(false) , setSlinkClicked(false) ,setTlinkClicked(false)}}>START FRAMEWORK</NavLink>
        <button onClick={ () => clicked? setClicked(false):setClicked(true) } data-collapse-toggle="navbar-hamburger" type="button" className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        </div>
        <ul className= {`${clicked? '':'hidden lg:flex'} flex lg:flex-row flex-col items-start lg:space-x-5 font-bold sm:pt-4 lg:pt-0 `}>
            <li className={` ${fLinkClicked && 'my-active'} p-2 rounded-lg`} onClick={() =>{ setFlinkClicked(true) , setSlinkClicked(false) ,setTlinkClicked(false)}}><NavLink to='about'>ABOUT</NavLink></li>
            <li className={` ${sLinkClicked && 'my-active'} p-2 rounded-lg`} onClick={() =>{ setFlinkClicked(false) , setSlinkClicked(true) ,setTlinkClicked(false)}}><NavLink to='portfoilo'>PORTFOILO</NavLink></li>
            <li className={` ${tLinkClicked && 'my-active'} p-2 rounded-lg`} onClick={() =>{ setFlinkClicked(false) , setSlinkClicked(false) ,setTlinkClicked(true)}}><NavLink to='contact'>CONTACT</NavLink></li>
        </ul>
    </div>
    </div>
    </>
}