import { useState } from 'react'
import React from "react";
import { Link, NavLink, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import './App.css'
import Header from './Pages/Header';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import MainLayout from './MainLayout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Goal from './Pages/Goal';
import Github, { githubInfoLoader } from './Pages/Github';
import User from './Pages/User';


// const router = createBrowserRouter([
//   {
//     path:"/", 
//     element:<MainLayout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"Goal",
//         element:<Goal/>
//       },
//       {
//         path:"Github",
//         element:<Github/>
//       },
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
      <Route path='goal' element={<Goal/>}/>
      <Route path='user' element={<User/>}/>
      <Route path='user/:userid' element={<User/>}/>


    </Route>
  )
)
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
