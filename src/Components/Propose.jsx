import React, { useState } from 'react'

const Propose = ({yes,setYes}) => {

    const yesFun=()=>setYes((prev)=>!prev)

    const getRandomNumber = (min, max) => 
        Math.floor(Math.random() * (max - min + 1)) + min;
const [top,setTop]=useState(50)
    const [left,setLeft]=useState(50)
    const [translate, setTranslate] = useState(true); // true = initial center

  const changePosition = () => {
    setTop(getRandomNumber(10, 70));
    setLeft(getRandomNumber(0, 80));
     // After first move, no longer translate center
    if (translate) setTranslate(false);
  };
    
   
  return (
    <div className='h-dvh relative  pt-16 p-2 '>
      <div className="h-40 w-60 bg-pink-100 flex flex-col justify-around absolute"
         style=
         {{ top: `${top}%`, left: `${left}%`,
          transform: translate ? 'translate(-50%, -50%)' : 'translate(0, 0)'
         }} >
      <h1 className='text-center text-3xl font-romantic font-bold'>do you love me</h1>
       <div className='flex justify-around w-full  font-antonio '>
        <button onClick={yesFun} className='bg-blue-500 w-12 h-8 cursor-pointer'>YES</button>
        <button onMouseEnter={changePosition} className='bg-red-500 w-12 h-8 cursor-pointer'>NO</button>
        </div> 
      </div>
    </div>
  )
}

export default Propose
