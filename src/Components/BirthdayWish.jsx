import React, { useState, useEffect } from "react";
import cake1 from "../assets/cake1.gif";
import cake2 from "../assets/cake2.gif";

const BirthdayWish = () => {
  const [wish, setWish] = useState(false);
  const [showSecondCake, setShowSecondCake] = useState(false);

  const wishnow = () => {
    setWish((prev) => !prev);
    setShowSecondCake(false);
  };

  useEffect(() => {
    let timer;
    if (wish) {
      timer = setTimeout(() => {
        setShowSecondCake(true);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [wish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-400/10 backdrop-blur-[1.5px]">
      {!wish ? (
        <button
          onClick={wishnow}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Click Here
        </button>
      ) : (
        <>
          <img
            src={showSecondCake ? cake2 : cake1}
            alt="Birthday cake"
            className="cursor-pointer"
            onClick={wishnow}
          />
          {showSecondCake && (
            <h1 className="text-4xl text-center font-bold bg-[#a03939] text-[#e0cbd0] m-4 p-2 rounded-2xl animate-bounce">
               Happy Birthday! POOJA
            </h1>
          )}
        </>
      )}
    </div>
  );
};

export default BirthdayWish;
