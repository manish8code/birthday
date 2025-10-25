import React, { useState, useEffect } from "react";
import kiss1 from "../assets/kiss1.gif";
import kiss2 from "../assets/kiss2.gif";
import Loader from "../Loader.jsx";
const AfterPropose = () => {
  const [ok, setOk] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [loading, setLoading] = useState(true); // 🔥 new state for loader

  // Preload both GIFs when component mounts
  useEffect(() => {
    const images = [kiss1, kiss2];
    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false); // ✅ All images are ready
        }
      };
    });
  }, []);

  const yes = () => {
    setOk(true);
    setShowButton(false);
  };

  if (loading) {
    // ⏳ Show spinner until GIFs are loaded
    return (
      <Loader/>
    );
  }

  return (
    <div className="h-dvh flex items-center justify-center pt-8 bg-black/50">
      <div className="relative md:h-[90%] flex justify-center px-2">
        <img
          src={!ok ? kiss1 : kiss2}
          alt="Animated GIF"
          loading="eager"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
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
