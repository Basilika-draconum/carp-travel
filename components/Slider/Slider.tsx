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
import Loading from "@/app/loading";

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
    return <Loading />;
  }
  return (
    <Swiper
      {...carouselSettings}
      ref={swiperRef}
      className="w-full h-full relative"
    >
      {data &&
        data
          .sort((a, b) => a.id - b.id)
          .map(({ id, background, image, title, slogan, description }) => (
            <SwiperSlide key={id} className="swiper-slide-gallery ">
              <div
                className="section-main"
                style={{
                  background: `url(${urlFor(
                    background
                  ).url()}) center/cover no-repeat `,
                  height: "auto",
                }}
              >
                <div className="container-main h-[850px] tablet:h-[621px] desktop:h-[780px]">
                  <div className="tablet:flex tablet:gap-44 tablet:items-center tablet:mb-9 desktop:justify-normal desktop:gap-[170px] desktop:mb-5">
                    <TitleSection title1="we" title2="offer" />
                    <p className="text-[43px] font-thin mb-3 text-right tablet:text-titleTb tablet:font-thin tablet:mb-0 desktop:text-titleDt desktop:font-thin">
                      0{id}/<span className="text-white/50">05</span>
                    </p>
                  </div>
                  <div className="tablet:flex tablet:gap-5 desktop:gap-5">
                    <Image
                      src={urlFor(image).url()}
                      alt={title}
                      width={213}
                      height={280}
                      loading="lazy"
                      className="image-slider"
                      sizes="(max-width: 767px) 280px, (max-width: 1279px) 463px, 600px"
                    />
                    <div>
                      <div className="flex flex-col-reverse gap-6 mb-12 mt-2 tablet:mt-0 tablet:mb-10 tablet:flex-col desktop:flex-row desktop:mt-2 desktop:mb-12 desktop:gap-2">
                        <ul className="uppercase flex flex-col gap-4 text-xl font-extralight leading-[17px] tablet:text-[22px] desktop:text-[28px] desktop:gap-6 desktop:leading-6 desktop:cursor-pointer">
                          {data.map((item, index) =>
                            title === item.title ? (
                              <li
                                key={item.id}
                                className="font-medium isActive ml-2 tablet:w-[180px] desktop:ml-3 desktop:w-[240px]"
                              >
                                {item.title}
                                <span className="hidden desktop:block desktop:capitalize desktop:absolute desktop:top-0 desktop:left-[280px] desktop:w-[215px] text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                                  {item.slogan}
                                </span>
                              </li>
                            ) : (
                              <li
                                className="text-white/50 cursor-pointer hover:text-white transition-all duration-300 ease-in-out tablet:w-[180px] desktop:w-[240px]"
                                key={item.id}
                                onClick={() => handleSlideClick(index)}
                              >
                                {item.title}
                              </li>
                            )
                          )}
                        </ul>
                        <p className="text-text text-[12px] leading-6 tracking-[2.4px] text-right tablet:text-left desktop:hidden">
                          {slogan}
                        </p>
                      </div>
                      <p className="text-text leading-5 tablet:text-[13px] tablet:w-[221px] tablet:text-justify desktop:w-[290px] desktop:text-[18px] desktop:leading-6 desktop:ml-48">
                        {description}
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
