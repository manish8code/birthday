import React from 'react'
import images from "../data/images.js"; 

const Moments = () => {
  return (
    <div>
      <div className='grid md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] sm:grid-cols-[repeat(auto-fit,max(350px,1fr))] lg:gap-14 lg:px-14 gap-8 px-5'>
         {images.map((img) => (
          <div key={img.id} className="group relative overflow-hidden rounded-xl hover:cursor-pointer"  >
        <img
          key={img.id}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="h-96 w-full max-w-full rounded-xl shadow-md hover:scale-105 transition-transform object-cover "
        />
        <h1 className="absolute bottom-0 left-0 w-full p-3 font-elegant text-5xl bg-pink-300/60 text-[#722737] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {img.alt}
        </h1>
      </div>
    ))}
    </div>
    </div>
  )
}

export default Moments
