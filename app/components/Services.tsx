import React from "react";
import Slider from "./Slider";
import { Slide } from "../entities/types";

// export async function getStaticProps() {
//   const res = await fetch("/data/slides.json");
//   const slides: Slide[] = await res.json();

//   return {
//     props: {
//       slides,
//     },
//   };
// }
const slides = [
  {
    image: "/images/offer1.jpg",
    title: "ATVs Traveling",
    slogan: "Feel the adrenaline rush",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  },
  {
    image: "/images/offer2.jpg",
    title: "Slide 2",
    description: "Text for Slide 2",
    slogan: "Feel the adrenaline rush",
  },
  {
    image: "/images/offer1.jpg",
    title: "Slide 2",
    description: "Text for Slide 2",
    slogan: "Feel the adrenaline rush",
  },
  {
    image: "/images/offer1.jpg",
    title: "Slide 2",
    description: "Text for Slide 2",
    slogan: "Feel the adrenaline rush",
  },
  {
    image: "/images/offer1.jpg",
    title: "Slide 2",
    description: "Text for Slide 2",
    slogan: "Feel the adrenaline rush",
  },
];

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="w-full bg-career-bg bg-no-repeat bg-cover bg-center pt-9 pb-14 px-5"
      >
        <h2 className="text-title mb-6 tablet:pt-[64px] tablet:px-8 tablet:pb-16 desktop:px-[104px] desktop:pb-[104px]">
          <span className="font-thin">We </span>offer
        </h2>
      </section>
      {/* <div className="">
        <Slider slides={slides} />
      </div> */}
    </>
  );
};

export default Services;
