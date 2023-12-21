import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper/modules";
import gallery from "../../public/content/gallery.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../../app/sections/Gallery/gallery.css";

const carouselSettings = {
  spaceBetween: 20,
  modules: [EffectCoverflow, Navigation, A11y],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: { clickable: true },
  grabCursor: true,
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  effect: "coverflow",
  loopPreventsSliding: false,
  loopedSlides: 1,
  wrapperTag: "ul",
  speed: 1500,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1.32,
    slideShadows: false,
  },
  breakpoints: {
    768: {
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 0,
        modifier: 1.32,
        scale: 0.45,
      },
    },
    1280: {
      coverflowEffect: {
        rotate: 0,
        stretch: 120,
        depth: 0,
        modifier: 1.32,
        scale: 0.65,
      },
    },
  },
};

const GallerySlider = () => {
  return (
    <Swiper
      {...carouselSettings}
      className="h-[294px] desktop:h-[429px] flex justify-center gap-6 relative"
    >
      {gallery.map((slide) => (
        <SwiperSlide key={slide.id} tag="li">
          {({ isActive }) => (
            <div
              className={`relative right-8 desktop:right-[-12px] w-[415px] desktop:w-[606px] h-[294px] desktop:h-[429px] 
      ${isActive ? "desktop:right-[-10px]" : "opacity-75"}`}
            >
              <Image
                width={606}
                height={429}
                src={slide.image}
                alt={slide.alt}
                loading="lazy"
                sizes="(max-width: 767px) 280px, (max-width: 1279px) 400px, 600px"
                className="w-[280px] h-[187px] tablet:w-[415px] tablet:h-[294px] desktop:w-[600px] desktop:h-[429px] object-cover"
              />
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 
            transition-opacity ease-in duration-300  bg-zinc-950/80
            ${isActive ? "opacity-0" : "opacity-100"}`}
              ></div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
