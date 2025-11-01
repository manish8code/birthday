import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import Together from '../Components/Together';
import MediaQuery from 'react-responsive';

gsap.registerPlugin(SplitText, useGSAP);

const Love2 = () => {
  // Prevent right-click
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  // ✅ Force scroll to top on mount
  useEffect(() => {
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
  }, []);

  const textRef = useRef(null);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const split = new SplitText(textRef.current, { type: "words,chars" });
      gsap.from(split.words, {
        y: 80,
        opacity: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
      return () => split.revert();
    });
  }, { scope: textRef });

  return (
    <div>
      <div className="h-dvh w-full flex flex-col justify-center items-center text-center overflow-hidden">
        <h1
          ref={textRef}
          className="info md:text-9xl text-8xl font-romantic font-bold text-[#832c40] text-shadow-red-900/25 text-shadow-sm"
        >
          Here are some beautiful moments of us
        </h1>
      </div>

      <div className="check bg-pink-400/10 backdrop-blur-[1.5px]">
        <p className="text-center md:leading-3">Scroll down to see the images</p>
        <MediaQuery minWidth={1024}>
          <p className="text-center ">Hover on the images to see the description</p>
        </MediaQuery>
        <MediaQuery maxWidth={1024}>
          <p className="text-center">Tap on the images to see the description</p>
        </MediaQuery>

        <Together />
      </div>
    </div>
  );
};

export default Love2;
