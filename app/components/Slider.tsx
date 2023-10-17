import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Slide {
  image: string;
  title: string;
  description: string;
  slogan: string;
}

interface SliderProps {
  slides: Slide[];
}

export async function getStaticProps() {
  const res = await fetch("/data/slides.json");
  const slides = await res.json();

  return {
    props: {
      slides,
    },
  };
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="w-full h-96 relative"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{ background: `url(${slide.image}) center/cover` }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
            <p className="text-xl text-white">{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
