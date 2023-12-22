"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import TitleSection from "../TitleSection/TitleSection";
import { useFetch } from "@/hooks/useFetch";
import { Services } from "@/entities/types";
import { urlFor } from "@/client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
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
  const { data } = useFetch("services") as { data: Services[] };
  if (data === null) {
    return <div>No data available</div>;
  }
  return (
    <Swiper
      {...carouselSettings}
      ref={swiperRef}
      className="w-full h-full relative"
    >
      {data &&
        data.map((slide, index) => (
          <SwiperSlide key={slide._id} className="swiper-slide-gallery">
            <div
              className="section-main"
              style={{
                background: `url(${urlFor(
                  slide.background
                ).url()}) center/cover no-repeat `,
                height: "100%",
              }}
            >
              <div className="container-main">
                <div className="tablet:flex tablet:justify-between tablet:items-center tablet:mb-9 desktop:justify-normal desktop:gap-[162px] desktop:mb-5">
                  <TitleSection
                    title1="we"
                    title2="offer"
                    className="mb-6 tablet:mb-0"
                  />
                  <p className="text-[43px] font-thin mb-3 text-right tablet:text-titleTb tablet:font-thin tablet:mb-0 desktop:text-titleDt desktop:font-thin">
                    0{index + 1}/<span className="text-white/50">05</span>
                  </p>
                </div>
                <div className="tablet:flex tablet:gap-5">
                  <Image
                    src={urlFor(slide.image).url()}
                    alt={slide.title}
                    width={213}
                    height={280}
                    loading="lazy"
                    className="image-slider"
                    sizes="(max-width: 767px) 280px, (max-width: 1279px) 463px, 607px"
                  />
                  <div>
                    <div className="flex flex-col-reverse gap-6 mb-12 mt-2 tablet:flex-col desktop:flex-row desktop:gap-2">
                      <ul className="uppercase flex flex-col gap-4 text-xl font-extralight leading-[17px] tablet:text-[22px] desktop:text-[28px] desktop:gap-6 desktop:leading-6 desktop:cursor-pointer">
                        {data.map((item, index) =>
                          slide.title === item.title ? (
                            <li
                              key={item._id}
                              className="font-medium isActive ml-2 desktop:ml-3 desktop:w-[240px]"
                            >
                              {item.title}
                              <span className="hidden desktop:block desktop:capitalize desktop:absolute desktop:top-0 desktop:left-[280px] desktop:w-[215px] text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                                {item.slogan}
                              </span>
                            </li>
                          ) : (
                            <li
                              className="text-white/50 cursor-pointer desktop:w-[240px]"
                              key={item._id}
                              onClick={() => handleSlideClick(index)}
                            >
                              {item.title}
                            </li>
                          )
                        )}
                      </ul>
                      <p className="text-text text-[12px] leading-6 tracking-[2.4px] text-right tablet:text-left desktop:hidden">
                        {slide.slogan}
                      </p>
                    </div>
                    <p className="text-text leading-5 tablet:text-[13px] tablet:text-justify desktop:w-[290px] desktop:text-[18px] desktop:leading-6 desktop:ml-48">
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
