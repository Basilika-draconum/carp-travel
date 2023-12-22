"use client";
import Loading from "@/app/loading";
import TitleSection from "@/components/TitleSection/TitleSection";
import { About } from "@/entities/types";
import { useFetch } from "@/hooks/useFetch";

const About = () => {
  const { data } = useFetch("about") as { data: About[] };
  if (data === null) {
    return <Loading />;
  }
  const { description1, description2, description3, slogan } = data[0];

  return (
    <section
      id="about"
      className="section-main w-full bg-about-bg bg-no-repeat bg-cover bg-left-bottom "
    >
      <div className="container-main tablet:relative">
        <div className="tablet:flex tablet:gap-[76px] desktop:gap-6">
          <TitleSection
            title1="who"
            title2="we are"
            className="mb-2 tablet:tracking-[-3px] tablet:mb-[68px] desktop:mb-[146px]"
          />
          <div className="tablet:mb-16 desktop:mt-4 desktop:mb-[72px]">
            <p className="text-text w-[180px] leading-5 mb-5 tablet:w-[221px] tablet:text-[16px] tablet:mb-4 desktop:w-[292px] desktop:mb-6 desktop:text-[18px]">
              <span className="text-subTitle tablet:text-[16px] desktop:text-[18px]">
                {description1.slice(0, 22)}
              </span>{" "}
              {description1.slice(22)}
            </p>
            <p className="text-text w-[180px] mb-10 tablet:w-[221px] tablet:text-[16px] tablet:mb-0 desktop:w-[292px] desktop:text-[18px]">
              <span className="text-subTitle tablet:text-[16px] desktop:text-[18px]">
                {description2.slice(0, 10)}
              </span>{" "}
              {description2.slice(10)}
            </p>
          </div>
        </div>

        <div className="flex justify-end tablet:absolute  tablet:bottom-[128px] desktop:bottom-0 desktop:right-[24px]">
          <div className="text-subTitle text-right mb-10 tablet:text-[16px] tablet:mb-0">
            <h3 className="uppercase w-[180px] text-left tablet:w-[221px] tablet:text-left desktop:text-[18px] desktop:w-[296px]">
              {slogan.slice(0, 17)} <br />
              <span className="uppercase text-right tablet:ml-10 desktop:ml-16">
                {slogan.slice(17, 36)}
              </span>
            </h3>
            <p className="text-text tablet:text-[16px] desktop:text-[18px] desktop:tracking-[2.16px]">
              {slogan.slice(37)}
            </p>
          </div>
        </div>

        <div className="tablet:flex tablet:justify-end desktop:justify-start">
          <p className="text-text text-left tablet:w-[463px] tablet:text-justify desktop:w-[605px] desktop:text-[18px]">
            <span className="text-subTitle desktop:text-[18px]">
              {description3.slice(0, 14)}
            </span>{" "}
            {description3.slice(14)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
