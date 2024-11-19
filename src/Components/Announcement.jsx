import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const announcements = [
    "जीआईसी दड़मिया, अल्मोड़ा में आपका स्वागत है।"
  ];
const AnnouncementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to manage hover pause

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
      }, 4000); // Change announcement every 3 seconds

      return () => clearInterval(interval); // Clean up the interval on unmount
    }
  }, [isPaused, currentIndex]);

  return (
    <div 
      className="bg-green-600 h-12 text-white p-4"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on hover out
    >
      {/* Announcement Text */}
      <div className="text-sm md:text-lg md:font-semibold text-center  transition-opacity duration-1000 ease-in-out opacity-100">
        <Link to ="/information">
        {announcements[currentIndex]}
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementCarousel;
