import { useState } from 'react'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import './App.css'
import MainLayout from './MainLayout'

function App() {
  

  return (
    <div className=" p-6 bg-violet-600 border-4 border-violet-300 justify-center items-center flex m-5">
      
      <h1 className="w-3/4 bg-green-400 text-red-700 text-center text-4xl font-mono">
        React Router Ashiq
      </h1>
      
    </div>
  )
}

export default App
