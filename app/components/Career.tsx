import React from "react";
import CareerForm from "./CareerForm";

const Career = () => {
  return (
    <>
      <section className=" w-full bg-career-bg bg-no-repeat bg-cover bg-center pt-9 pb-14 px-5">
        <h2 className="text-title mb-6">
          <span className="font-thin">Choose </span>us
        </h2>
        <p className="text-text ">
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>
        <h3 className="text-right text-3xl font-extralight my-9">Why us ?</h3>
        <ul className="w-[180px]">
          <li className="mb-4 text-right">
            <h4 className="text-subTitle mb-2">Professional development</h4>
            <p className="text-text text-xs">
              We offer growth opportunities and a creative environment to
              nurture your talents.
            </p>
          </li>
          <li className="mb-4 text-right">
            <h4 className="text-subTitle mb-2">Teamwork</h4>
            <p className="text-text text-xs">
              Join our close-knit family, where support and inspiration abound.
            </p>
          </li>
          <li className="mb-4 text-right">
            <h4 className="text-subTitle mb-2">Stimulating work environment</h4>
            <p className="text-text text-xs">
              Flexibility and remote options for a comfortable experience.
            </p>
          </li>
          <li className="mb-4 text-right">
            <h4 className="text-subTitle mb-2">Exciting challenges</h4>
            <p className="text-text text-xs">
              Unleash your potential through unforgettable projects showcasing
              Carpathian beauty.
            </p>
          </li>
        </ul>
      </section>
      <CareerForm />
    </>
  );
};

export default Career;
