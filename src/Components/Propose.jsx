import React, { useState, useEffect } from 'react';

const Propose = ({ yes, setYes }) => {
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(50);
  const [translate, setTranslate] = useState(true); // initial center
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const touch = window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(touch);
    }
  }, []);

  const yesFun = () => setYes((prev) => !prev);

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const changePosition = () => {
    
       setTop(getRandomNumber(10, 70));
       // Different left range for touch vs desktop
       if (isTouchDevice) {
         setLeft(getRandomNumber(0, 80));
       } else {
         setLeft(getRandomNumber(0, 40));
       }
       console.log(top,left)
    if (translate) setTranslate(false); // remove initial translate
  };

  return (
    <div className="h-dvh relative pt-16 p-2">
      <div
        className="h-40 w-60 bg-pink-100 flex flex-col justify-around absolute rounded-lg shadow-lg transition-all duration-300"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          transform: translate ? 'translate(-50%, -50%)' : 'translate(0, 0)',
        }}
      >
        <h1 className="text-center text-3xl font-romantic font-bold">
          Do you love me?
        </h1>
        <div className="flex justify-around w-full font-antonio">
          <button
            onClick={yesFun}
            className="bg-blue-500 text-white w-12 h-8 rounded cursor-pointer hover:bg-blue-600"
          >
            YES
          </button>
          <button
            {...(isTouchDevice
              ? { onTouchStart: changePosition }
              : { onMouseEnter: changePosition })}
            className="bg-red-500 text-white w-12 h-8 rounded cursor-pointer hover:bg-red-600"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Propose;
