import React, { useState, useEffect } from "react";
import Propose from "../Components/Propose";
import AfterPropose from "../Components/AfterPropose";
import kiss1 from "../assets/kiss1.gif";
import kiss2 from "../assets/kiss2.gif";

const Love3 = () => {
  const [yes, setYes] = useState(false);

  // ✅ Preload images when component mounts
  useEffect(() => {
    const images = [kiss1, kiss2];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="">
      {!yes ? <Propose setYes={setYes} /> : <AfterPropose />}
    </div>
  );
};

export default Love3;
