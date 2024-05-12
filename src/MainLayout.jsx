import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";


export default function MainLayout(){

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}