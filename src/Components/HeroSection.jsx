import React from 'react';
import image1 from '../assets/HeroTwo.jpg';

function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={image1}
        alt="School Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for darkening the image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Text in the middle */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="text-center text-white font-bold font-serif">
          <h1 className="text-5xl font-bold">Welcome to Our School</h1>
          <p className="text-2xl mt-4">Shaping the Future, One Step at a Time</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
