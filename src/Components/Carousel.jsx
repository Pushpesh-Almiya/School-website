// src/components/Carousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Carousel0,Carousel1, Carousel2, HeroLandscape} from "../assets"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <Slider {...settings}>
        <div>
          <img
            src={Carousel0}
            alt="Slide 1"
            className="w-full h-72 object-cover rounded-lg "
          />
        </div>
        <div>
          <img
            src={HeroLandscape}
            alt="Slide 3"
            className="w-full h-72 object-cover rounded-lg "
          />
        </div>
        <div>
          <img
            src={Carousel1}
            alt="Slide 2"
            className="w-full h-72 object-cover rounded-lg "
          />
        </div>
        <div>
          <img
            src={Carousel2}
            alt="Slide 3"
            className="w-full h-72 object-cover rounded-lg "
          />
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousel;
