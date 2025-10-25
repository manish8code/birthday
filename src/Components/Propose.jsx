import React, { useState, useEffect } from 'react';

const Propose = ({ yes, setYes }) => {
  const [top, setTop] = useState(50);     // percentage
  const [left, setLeft] = useState(50);   // percentage
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
    if (typeof window === 'undefined') return;

    // Box dimensions in percentage relative to viewport
    const boxWidthPercent = (240 / window.innerWidth) * 100; // 240px / viewport width
    const boxHeightPercent = (160 / window.innerHeight) * 100; // 160px / viewport height

    const maxLeft = 100 - boxWidthPercent;
    const maxTop = 100 - boxHeightPercent;

    // Generate random percentages
    const newLeft = getRandomNumber(0,maxLeft);
    const newTop = getRandomNumber(10,maxTop);
    

    setLeft(newLeft);
    setTop(newTop);

    if (translate) setTranslate(false); // remove initial translate
  };

  return (
    <div className="h-dvh relative pt-16 p-2">
      <div
        className="md:h-40 md:w-60 h-30 w-50 bg-pink-100 flex flex-col justify-around absolute rounded-lg shadow-lg transition-all duration-300"
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
