import React, { useState, useEffect } from "react";
import kiss1 from "../assets/kiss1.gif";
import kiss2 from "../assets/kiss2.gif";

const AfterPropose = () => {
  const [ok, setOk] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const yes = () => {
    setOk(true);
    setShowButton(false);
  };

  return (
    <div className="h-dvh flex items-center justify-center pt-8 ">
      <div className="relative md:h-[90%] flex justify-center ">
        <img
          src={!ok ? kiss1 : kiss2}
          alt="Animated GIF"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {showButton && (
          <div className="absolute bottom-0 w-full flex justify-center">
            <h1 className="font-elegant absolute bottom-20 text-3xl font-bold">
              Come close baby!
            </h1>
            <button
              onClick={yes}
              className="bg-blue-500 text-white w-16 h-10 rounded-md cursor-pointer hover:bg-blue-600 absolute bottom-6 transition-all"
            >
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AfterPropose;
