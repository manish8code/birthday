import React from 'react'
import { NavLink } from 'react-router-dom'
import heartsvg from "../assets/heart.svg";
import MediaQuery from 'react-responsive';

const Navabar = () => {
  return (
    <div className="w-full h-14 bg-red-200/30 flex items-center justify-around sticky top-0 z-50 shadow-md  backdrop-blur-md"  >

      <div className="text-5xl  font-bold font-romantic mx-5 hover:transform hover:scale-110 hover:duration-200 hover:text-shadow-md">
        <NavLink to='/'><h1 className='text-[#722737]'> Lovely</h1></NavLink>
      </div>

      <MediaQuery minWidth={768}> 
      <ul className="w-[35%]  flex justify-around  mx-5">

      <NavLink to='/love1' className="ml-10 hover:transform hover:scale-110 hover:duration-200">
      <li className='w-9 h-8 svg-pink-drop-shadow'><img src={heartsvg} /></li></NavLink>
      <NavLink to='/love2' className="ml-10 hover:transform hover:scale-110 hover:duration-200">
      <li className='w-13 h-8 flex svg-pink-drop-shadow'>{[...Array(2)].map((_, i) => <img key={i} src={heartsvg}  />)}</li></NavLink>
      <NavLink to='/love3' className="ml-10 hover:transform hover:scale-110 hover:duration-200 ">
      <li className='w-19 h-8 flex svg-pink-drop-shadow'>{[...Array(3)].map((_, i) => <img key={i} src={heartsvg}  />)}</li></NavLink>

      </ul>
      </MediaQuery>
    </div>
  )
}

export default Navabar
