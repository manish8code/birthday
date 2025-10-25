import React, { useRef, useLayoutEffect } from "react";
import images from "../data/images";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Together = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    // Kill any existing ScrollTriggers (important for React fast refresh)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Calculate total scroll distance dynamically
    const totalScroll = inner.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(inner, {
        x: -(totalScroll+50),
        ease: "none",
        scrollTrigger: {
          trigger: ".check",
          start: "top 10%",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1.8,
          //markers: true, // remove in production
          invalidateOnRefresh: true,
        },
      });
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={outerRef}
      className="outer relative w-screen overflow-hidden min-h-screen"
    >
      
      <div ref={innerRef} className="inner flex w-fit">
        {images.map(({ id, src, alt }) => (
          <div
            key={id}
            className="relative group rounded-xl hover:cursor-pointer hover:scale-105 hover:rounded-xl h-85 md:h-96 w-[18rem] md:w-[22rem] mx-3 flex-shrink-0"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="md:h-96 h-85 w-full rounded-xl shadow-md  hover:rounder-xl transition-transform object-cover"
            />
            <h1 className="rounded-b-xl absolute bottom-0 left-0 w-full p-3 font-elegant text-2xl bg-pink-300/60 text-[#722737] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {alt}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Together;
