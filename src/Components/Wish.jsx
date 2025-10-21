import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, useGSAP);

const Wish = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      // Wait until all fonts are fully loaded
      document.fonts.ready.then(() => {
        const split = new SplitText(textRef.current, { type: "words,chars" });

        // const tl = gsap.timeline({
        //   defaults: { ease: "power2.inOut", duration: 1 },
        // });
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut", duration: 1 },
        });

        // Animate first text
        tl.from(split.words, {
          y: 80,
       opacity: 0,
       stagger: 0.015,
       duration: 1,
       ease: "back.out(1.7)",
      });
      
      // Animate second text reveal
      tl.to(
        ".second-text",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
          opacity: 1,
          duration: 0.8,
          },
          "-=0.4" // overlap with previous animation
        );

        // Cleanup when unmounting
        return () => split.revert();
      });
    },
    { scope: containerRef } // Limit selector scope to this component
  );

  return (
    <div
      ref={containerRef}
      className="centered h-dvh flex flex-col items-center justify-center leading-[0.9] "
    >
      <div className=" m-3.5">
        <h2
          ref={textRef}
          className="first-text text-center font-antonio font-bold text-[#832c40] text-shadow-red-900/75 text-shadow-lg 
                     text-[4.2rem] md:text-[6rem] lg:text-[8rem] tracking-[-0.4rem] lg:tracking-[-0.2rem]"
        >
          A VERY HAPPIEST
        </h2>
      </div>

      <div
        className="second-text bg-[#a03939]  rounded-2xl rotate-[-2.8deg] -translate-y-4  opacity-0"
        // w-[90%] lg:w-[51.5%]
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        }}
      >
        <h1
          className="font-antonio font-bold text-[#e0cbd0] lg:m-3 lg:mb-6 m-2 mb-4
                     text-[3.5rem] md:text-[5.8rem] lg:text-[8rem] 
                     tracking-[-0.1rem] lg:tracking-[-0.15rem]"
        >
          BIRTHDAY TO YOU!
        </h1>
      </div>
    </div>
  );
};

export default Wish;
