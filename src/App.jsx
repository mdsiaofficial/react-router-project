import { useState } from 'react'
import React from "react";
import { Link, NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Header from './Pages/Header';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import MainLayout from './MainLayout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Goal from './Pages/Goal';
import Github from './Pages/Github';


const router = createBrowserRouter([
  {
    path:"/", 
    element:<MainLayout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"Goal",
        element:<Goal/>
      },
      {
        path:"Github",
        element:<Github/>
      },
    ]
  }
])
function App() {
  

  return (
    
    <>
      <h1 className='bg-[crimson] text-center text-4xl font-bold'>Hello</h1>

      {/* new header trying here */}
      {/* not working like this */}
      {/* <Header/>
      <Home/>
      <Footer/> */}

      <RouterProvider router={router}/>
    </>
  )
}

export default App
