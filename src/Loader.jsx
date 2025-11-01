import React, { useEffect, useState } from 'react'
import load1 from "./assets/load1.svg";
import load2 from "./assets/load2.svg";
import load3 from "./assets/load3.svg";
import "./index.css"
 const icons = [load1, load2, load3];
const Loader = () => {
    const icons = [load1, load2, load3];
  const [current, setCurrent] = useState(0);

  // Change SVG every 1.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % icons.length);
    }, 300);
    return () => clearInterval(interval);
  }, [icons.length]);

  const Icon = icons[current];
  return (
     <div className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="relative w-52 h-52 border-black  border-6 rounded-full flex  items-center justify-center  border-b-cyan-400 border-r-amber-500 border-t-red-500 border-l-blue-800 shadow-lg">
        <div className="animate-fade-in flex items-center justify-center ">
          <img className="w-[55%] " src={Icon} alt="" />
          
        </div>
        
      </div>
      <h1 className='text-5xl font-elegant'>Loading...</h1>
    </div>
  )
}

export default Loader
