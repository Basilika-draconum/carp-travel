"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./slider.css";

const slides = [
  {
    id: "1",
    image: "/images/offer1.jpg",
    background: "/images/offer-bg1.jpg",
    title: "ATVs Traveling",
    slogan: "Feel the adrenaline rush",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  },
  {
    id: "2",
    image: "/images/offer2.jpg",
    background: "/images/offer-bg2.jpg",
    title: "Rock climbing",
    description:
      "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
    slogan: "Destroy your limitations",
  },
  {
    id: "3",
    image: "/images/offer3.jpg",
    background: "/images/offer-bg3.jpg",
    title: "Hot air ballooning",
    description:
      "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
    slogan: "Get Inspired",
  },
  {
    id: "4",
    image: "/images/offer4.jpg",
    background: "/images/offer-bg4.jpg",
    title: "Skydiving",
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
    slogan: "Overcome your fears",
  },
  {
    id: "5",
    image: "/images/offer5.jpg",
    background: "/images/offer-bg5.jpg",
    title: "Rafting",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
    slogan: "Trust the flow",
  },
];

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
    <>
      <Swiper
        {...carouselSettings}
        ref={swiperRef}
        className="w-full h-full relative"
      >
        <div className="swiper-pagination"></div>
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="swiper-slide-gallery">
            <div
              className="pt-14 pb-14 px-5 tablet:px-8 tablet:py-16 desktop:p-[104px]"
              style={{
                background: `url(${slide.background}) center/cover no-repeat `,
                height: "100%",
              }}
            >
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
                  className="image-slider"
                />
                <div>
                  <div className="flex flex-col-reverse gap-6 mb-12 mt-2 tablet:flex-col desktop:flex-row desktop:gap-2">
                    <ul className="uppercase flex flex-col gap-4 text-xl font-extralight leading-[17px] tablet:text-[22px] desktop:text-[28px] desktop:gap-6 desktop:leading-6 desktop:cursor-pointer">
                      {slide.title === "ATVs Traveling" ? (
                        <li className="font-medium isActive ml-2 desktop:ml-3">
                          ATVs Traveling
                        </li>
                      ) : (
                        <li
                          className="text-white/50"
                          onClick={() => handleSlideClick(0)}
                        >
                          ATVs Traveling
                        </li>
                      )}
                      {slide.title === "Rock climbing" ? (
                        <li className="font-medium isActive ml-2 desktop:ml-3">
                          Rock climbing
                        </li>
                      ) : (
                        <li
                          className="text-white/50"
                          onClick={() => handleSlideClick(1)}
                        >
                          Rock climbing
                        </li>
                      )}
                      {slide.title === "Hot air ballooning" ? (
                        <li className="font-medium isActive ml-2 desktop:ml-3">
                          Hot air ballooning
                        </li>
                      ) : (
                        <li
                          className="text-white/50"
                          onClick={() => handleSlideClick(2)}
                        >
                          Hot air ballooning
                        </li>
                      )}
                      {slide.title === "Skydiving" ? (
                        <li className="font-medium isActive ml-2 desktop:ml-3">
                          Skydiving
                        </li>
                      ) : (
                        <li
                          className="text-white/50 "
                          onClick={() => handleSlideClick(3)}
                        >
                          Skydiving
                        </li>
                      )}

                      {slide.title === "Rafting" ? (
                        <li className="font-medium isActive ml-2 desktop:ml-3">
                          Rafting
                        </li>
                      ) : (
                        <li
                          className="text-white/50"
                          onClick={() => handleSlideClick(4)}
                        >
                          Rafting
                        </li>
                      )}
                    </ul>
                    <p className="text-text text-[12px] leading-6 tracking-[2.4px] text-right tablet:text-left desktop:w-[107px]">
                      {slide.slogan}
                    </p>
                  </div>
                  <p className="text-text leading-5 tablet:text-[13px] tablet:text-justify ">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
