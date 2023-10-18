"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Slide } from "../entities/types";

const Slider: React.FC<{ slides: Slide[] }> = ({ slides }) => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      //   autoplay={{ delay: 5000 }}
      className="w-full h-96 relative"
      //   className="relative "
    >
      {slides &&
        slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            // style={{ background: `url(${slide.image}) center/cover` }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={213}
              height={280}
            />
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
              <p className="text-xl text-white">{slide.description}</p>
            </div> */}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
