import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules from `swiper`
import { EffectCoverflow, Pagination, Navigation } from "swiper";


// Import your images
import { sports1, sports2, sports3, sports4, sports5 } from '../assets/sports';

function ImageCarousel() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={sports1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sports2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sports3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sports4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sports5} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
