import { useState } from 'react'
import './App.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Portfoilo from './Components/Portfoilo/Portfoilo.jsx'
import Contact from './Components/Contact/Contact.jsx'

let routers = createBrowserRouter([{
  path:'',element: <Layout/>, children:[
    {index:true, element:<Home/>},
    {path:'about', element:<About/>},
    {path:'portfoilo', element:<Portfoilo/>},
    {path:'contact', element:<Contact/>},
  ]
}])

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App
