import React from "react";
import CareerForm from "./CareerForm";

const Career = () => {
  return (
    <>
      <section
        id="career"
        className=" w-full bg-career-bg bg-no-repeat bg-cover bg-center pt-9 pb-14 px-5 tablet:pt-[64px] tablet:px-8 tablet:pb-16 tablet:mx-auto desktop:px-[104px] desktop:py-[104px]"
      >
        <div className="tablet:flex tablet:pb-[5px] tablet:gap-[110px] desktop:justify-between">
          <h2 className="text-title uppercase mb-6 tablet:text-titleTb tablet:tracking-[-2px] ">
            <span className="font-thin">Choose </span>us
          </h2>
          <div className="flex justify-end">
            <p className="text-text w-[180px] tablet:w-[221px] tablet:text-justify tablet:leading-5 tablet:text-[13px] desktop:w-[270px] desktop:text-[18px]">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          </div>
        </div>
        <div className="tablet:flex ">
          <div className="tablet:mr-5 desktop:mr-6">
            <h3 className="text-center text-3xl font-extralight my-9 uppercase tablet:mt-0 tablet:mb-14 tablet:pl-[39px] desktop:text-[36px] desktop:pl-[120px] desktop:text-left desktop:mb-[45px]">
              Why us ?
            </h3>
            <ul className="w-[180px] tablet:w-[225px] desktop:w-[560px]">
              <li className="mb-4 text-right tablet:mb-6 desktop:flex desktop:gap-6 desktop:justify-end">
                <h4 className="text-subTitle mb-2 tablet:text-[16px] desktop:text-[18px]">
                  Professional development
                </h4>
                <p className="text-text text-xs leading-5 desktop:w-[285px] desktop:text-left desktop:leading-6 ">
                  We offer growth opportunities and a creative environment to
                  nurture your talents.
                </p>
              </li>
              <li className="mb-4 text-right tablet:mb-6 desktop:flex desktop:gap-6 desktop:justify-end">
                <h4 className="text-subTitle mb-2 tablet:text-[16px] desktop:text-[18px]">
                  Teamwork
                </h4>
                <p className="text-text text-xs leading-5 tablet:w-[221px] desktop:w-[285px] desktop:leading-6 desktop:text-left">
                  Join our close-knit family, where support and inspiration
                  abound.
                </p>
              </li>
              <li className="mb-4 text-right tablet:mb-6 desktop:flex desktop:gap-6 desktop:justify-end">
                <h4 className="text-subTitle mb-2 tablet:text-[16px] desktop:text-[18px]">
                  Stimulating work environment
                </h4>
                <p className="text-text text-xs leading-5 desktop:w-[285px] desktop:text-left desktop:leading-6 ">
                  Flexibility and remote options for a comfortable experience.
                </p>
              </li>
              <li className="mb-4 text-right tablet:mb-6 desktop:flex desktop:gap-6 desktop:justify-end">
                <h4 className="text-subTitle mb-2 tablet:text-[16px] desktop:text-[18px]">
                  Exciting challenges
                </h4>
                <p className="text-text text-xs leading-5 desktop:w-[285px] desktop:text-left desktop:leading-6 ">
                  Unleash your potential through unforgettable projects
                  showcasing Carpathian beauty.
                </p>
              </li>
            </ul>
          </div>
          <div className="hidden tablet:block tablet:mt-24 desktop:mt-0">
            <CareerForm />
          </div>
        </div>
      </section>
      <div
        className="bg-career-bg bg-no-repeat bg-cover bg-center pt-9 pb-14 px-5
      w-full tablet:hidden"
      >
        <CareerForm />
      </div>
    </>
  );
};

export default Career;
