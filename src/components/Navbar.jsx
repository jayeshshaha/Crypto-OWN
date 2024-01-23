import React, { useState } from "react";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
    <nav className="max-w-[1240px] h-12 flex justify-between items-center p-6 mx-auto">
      <h1 className=" text-cBlue md:text-2xl md:font-bold w-[40%]">Crypto Spot.</h1>
      <ul className=" flex md:gap-10 gap-2 items-center">
        <NavLink to={'/'} className="cursor-pointer">Home</NavLink>
        <NavLink to={'/coins'}  className="cursor-pointer">Cryptocurrencies</NavLink>
        <NavLink to={'/exchanges'}  className="cursor-pointer">Exchanges</NavLink>
      </ul>
    </nav>
    </div>  
  );
};

export default Navbar;

