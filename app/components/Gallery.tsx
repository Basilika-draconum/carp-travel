"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";

import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./gallery.css";

const gallery = [
  {
    image: "/images/gallery3.png",
    alt: "mountain",
    id: "1",
  },
  {
    image: "/images/gallery1.png",
    alt: "lake",
    id: "2",
  },
  {
    image: "/images/gallery2.png",
    alt: "trees",
    id: "3",
  },
  {
    image: "/images/gallery3.png",
    alt: "mountain",
    id: "4",
  },
  {
    image: "/images/gallery1.png",
    alt: "lake",
    id: "5",
  },
  {
    image: "/images/gallery2.png",
    alt: "trees",
    id: "6",
  },
];

const carouselSettings = {
  spaceBetween: 20,
  modules: [Navigation, A11y],
  navigation: {
    nextEl: ".swiper-button-next ",
    prevEl: ".swiper-button-prev",
  },
  pagination: { clickable: true },
  // initialSlide: 0,
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
};

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="w-full bg-gallery-bg bg-no-repeat bg-cover bg-center pt-9 pb-14 px-5 tablet:px-8 tablet:py-16"
    >
      <h2 className="text-title uppercase tablet:pb-16 tablet:text-titleTb tablet:text-center desktop:px-[104px] desktop:pb-[104px] desktop:text-titleDt">
        <span className="font-thin">Our </span>gallery
      </h2>
      <div className="">
        <ul className="flex flex-col justify-center items-center tablet:hidden">
          {gallery.map((img) => (
            <li key={img.id}>
              <Image
                src={img.image}
                alt={img.alt}
                width={280}
                height={187}
                className="mt-8 "
              />
            </li>
          ))}
        </ul>
        <div className="hidden tablet:block tablet:relative">
          <Swiper {...carouselSettings} className="w-full relative">
            {gallery.map((img, index) => (
              <SwiperSlide key={img.id}>
                {({ isActive, isPrev, isNext }) => (
                  <div
                    className={`relative overflow-hidden transform transition-transform ease-in-out duration-500 `}
                  >
                    <div
                      className={`w-3/5 h-full ${
                        isActive ? "opacity-0" : "opacity-0.5"
                      }  bg-zinc-950/80 absolute inset-0 transition-opacity duration-500 `}
                    ></div>
                    <Image
                      src={img.image}
                      alt={img.alt}
                      className={`w-full h-full object-cover ${
                        isActive
                          ? "swiper-slide-active"
                          : "swiper-slide-inactive"
                      }`}
                      width={420}
                      height={300}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev">BACK</button>
          <button className="swiper-button-next">NEXT</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
