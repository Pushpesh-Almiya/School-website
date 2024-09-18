import React from 'react';
import image1 from '../assets/HeroTwo.jpg';
import {HeroPortrait} from '../assets';


function HeroSection() {
  return (
    <div className="relative w-full h-screen ">
      {/* Background Image */}
      <img
        src={image1}
        alt="School Banner"
        className="hidden sm:block absolute inset-0 w-full h-full object-cover"
      />
      {/* Background Image for small screens */}
      <img
        src={HeroPortrait}
        alt="School Banner Small"
        className="block sm:hidden absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for darkening the image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Text in the middle */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="text-center text-white px-2  font-serif">
          <h1 className=" text-3xl md:text-5xl font-bold">Welcome to Our School</h1>
          <p className="text-lg md:text-2xl mt-4 font-semibold">Shaping the Future, One Step at a Time</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
