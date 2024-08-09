import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Layout() {
    return <>
    <Navbar/>
    <div className=' mt-24'>
      <Outlet></Outlet>
    </div>
    <Footer/>
    </>
}