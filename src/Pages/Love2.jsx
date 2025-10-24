import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import bg from '../assets/bg.jpeg'
import Together from '../Components/Together';
import MediaQuery from 'react-responsive';

gsap.registerPlugin(SplitText, useGSAP);

const Love2 = () => {
    //done this to prevent the right click and download of the photo
    useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
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

   // ✅ Revert SplitText when component unmounts
      return () => split.revert();
  });
}, {scope: textRef});

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className=' bg-cover bg-center bg-fixed '>
      <div className=''>
        <div className="h-dvh w-full  flex flex-col justify-center items-center text-center">
          <h1 ref={textRef} className='info lg:text-9xl text-8xl font-romantic font-bold text-[#832c40]' >Here are some beautiful moments of us</h1>
        </div>
      </div>

      <div className='check bg-pink-400/10 backdrop-blur-[1.5px]'>
      <p className='text-center'>scroll down to see the images</p>
      <MediaQuery maxWidth={768}>
        <p className='text-center'>Tap on the images to see the description</p>
      </MediaQuery>
      
        <Together/>
      </div>

    </div>
  )
}

export default Love2
