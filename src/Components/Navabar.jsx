import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import heartsvg from "../assets/heart.svg";
import MediaQuery from 'react-responsive';
import navOpen from '../assets/navOpen.svg';
import navClose from '../assets/navClose.svg';

const Navabar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const menuItems = (
    <ul className="flex md:flex-row flex-col justify-around md:space-x-16 md:space-y-0 space-y-10">
      <li className='svg-pink-drop-shadow'>
        <NavLink to='/love1'><img src={heartsvg} className="w-9 h-8 svg-pink-drop-shadow" /></NavLink>
      </li>
      <li className='svg-pink-drop-shadow'>
        <NavLink to='/love2' className="flex">
          {[...Array(2)].map((_, i) => <img key={i} src={heartsvg} className="w-9 h-8 " />)}
        </NavLink>
      </li>
      <li className='svg-pink-drop-shadow'>
        <NavLink to='/love3' className="flex">
          {[...Array(3)].map((_, i) => <img key={i} src={heartsvg} className="w-9 h-8 " />)}
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="w-full h-14 bg-red-200/30 flex items-center justify-around sticky top-0 z-50 shadow-md backdrop-blur-md px-5">
      
      <div className="text-5xl md:w-[40%] font-bold font-romantic hover:scale-110 hover:duration-200">
        <NavLink to='/'><h1 className='text-[#722737]'>Lovely</h1></NavLink>
      </div>

      {/* Mobile Menu */}
      <MediaQuery maxWidth={768}>
        <img
          src={menuOpen ? navClose : navOpen}
          alt="Toggle Navigation"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && <div className="absolute top-14 right-0 bg-pink-400/30 shadow-md p-3 rounded">{menuItems}</div>}
      </MediaQuery>

      {/* Desktop Menu */}
      <MediaQuery minWidth={769}>
        {menuItems}
      </MediaQuery>
    </div>
  );
};

export default Navabar;
