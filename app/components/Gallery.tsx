"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./gallery.css";

const gallery = [
  { image: "/images/gallery3.png", alt: "mountain", id: "1" },
  { image: "/images/gallery1.png", alt: "lake", id: "2" },
  { image: "/images/gallery2.png", alt: "trees", id: "3" },
];
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
          <Swiper
            spaceBetween={20}
            modules={[Navigation, A11y]}
            navigation={{
              nextEl: ".swiper-button-next ",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
            centeredSlides={true}
          >
            {gallery.map((img) => (
              <SwiperSlide key={img.id}>
                <Image
                  src={img.image}
                  alt={img.alt}
                  width={420}
                  height={300}
                  className="m-auto "
                />
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
