import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel0, Carousel1, Carousel2, HeroLandscape } from "../assets";

// Custom Previous Button
const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} bg-gray-300 p-2 rounded-full absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-gray-500`}
    onClick={onClick}
    style={{ ...style, display: "block" }}
  >
    ❮
  </button>
);

// Custom Next Button
const NextArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} bg-gray-300 p-2 rounded-full absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-gray-500`}
    onClick={onClick}
    style={{ ...style, display: "block" }}
  >
    ❯
  </button>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [Carousel0, HeroLandscape, Carousel1, Carousel2];

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      {/* Main Slider */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default Carousel;
