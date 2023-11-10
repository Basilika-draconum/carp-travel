"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import slides from "../../public/content/slides.json";
import "./slider.css";

const carouselSettings = {
  spaceBetween: 30,
  navigation: true,
  modules: [EffectFade, Navigation],
  effect: "fade",
  slidesPerView: 1,
};

const Slider = () => {
  const swiperRef = React.useRef<SwiperRef | null>(null);
  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index, 500);
    }
  };

  return (
    <Swiper
      {...carouselSettings}
      ref={swiperRef}
      className="w-full h-full relative"
    >
      {slides &&
        slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="swiper-slide-gallery">
            <div
              className="section-main"
              style={{
                background: `url(${slide.background}) center/cover no-repeat `,
                height: "100%",
              }}
            >
              <div className="container-main">
                <div className="tablet:flex tablet:justify-between tablet:items-center tablet:mb-9 desktop:justify-normal desktop:gap-[162px] desktop:mb-5">
                  <h2 className="uppercase text-title mb-6 tablet:text-titleTb tablet:mb-0 desktop:text-titleDt">
                    <span className="font-thin">We </span>offer
                  </h2>
                  <p className="text-[43px] font-thin mb-3 text-right tablet:text-titleTb tablet:font-thin tablet:mb-0 desktop:text-titleDt desktop:font-thin">
                    0{index + 1}/<span className="text-white/50">05</span>
                  </p>
                </div>
                <div className="tablet:flex tablet:gap-5">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={213}
                    height={280}
                    loading="lazy"
                    className="image-slider"
                  />
                  <div>
                    <div className="flex flex-col-reverse gap-6 mb-12 mt-2 tablet:flex-col desktop:flex-row desktop:gap-2">
                      <ul className="uppercase flex flex-col gap-4 text-xl font-extralight leading-[17px] tablet:text-[22px] desktop:text-[28px] desktop:gap-6 desktop:leading-6 desktop:cursor-pointer">
                        {slides.map((item, index) =>
                          slide.title === item.title ? (
                            <li
                              key={item.id}
                              className="font-medium isActive ml-2 desktop:ml-3"
                            >
                              {item.title}
                            </li>
                          ) : (
                            <li
                              className="text-white/50"
                              key={item.id}
                              onClick={() => handleSlideClick(index)}
                            >
                              {item.title}
                            </li>
                          )
                        )}
                      </ul>
                      <p className="text-text text-[12px] leading-6 tracking-[2.4px] text-right tablet:text-left desktop:w-[147px]">
                        {slide.slogan}
                      </p>
                    </div>
                    <p className="text-text leading-5 tablet:text-[13px] tablet:text-justify desktop:w-[293px] desktop:text-[18px] desktop:leading-6 desktop:ml-52">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
