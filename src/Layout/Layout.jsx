import React from 'react';
import Navabar from '../Components/Navabar';
import { Outlet } from 'react-router-dom';
import bg from '../assets/bg.jpeg'

const Layout = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className=" bg-cover bg-center bg-fixed relative">
      <Navabar className="sticky top-0 left-0 w-full z-50" />
      <div className="relative -top-14 left-0 ">
        <Outlet />
      </div>
      
    </div>
  );
};

export default Layout;
