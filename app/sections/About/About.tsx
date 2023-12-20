import TitleSection from "@/components/TitleSection/TitleSection";

const About = () => {
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
                a team of enthusiasts
              </span>{" "}
              who are fully committed to the mission of creating unforgettable
              and extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p className="text-text w-[180px] mb-10 tablet:w-[221px] tablet:text-[16px] tablet:mb-0 desktop:w-[292px] desktop:text-[18px]">
              <span className="text-subTitle tablet:text-[16px] desktop:text-[18px]">
                We believe
              </span>{" "}
              that nature has the power to inspire, strengthen character and
              provide new perspectives. Therefore, each of our tours is aimed at
              unlocking your potential, enriching your spiritual world and
              creating unforgettable memories.
            </p>
          </div>
        </div>

        <div className="flex justify-end tablet:absolute  tablet:bottom-[128px] desktop:bottom-0 desktop:right-[24px]">
          <div className="text-subTitle text-right mb-10 tablet:text-[16px] tablet:mb-0">
            <h3 className="uppercase w-[180px] text-left tablet:w-[221px] tablet:text-left desktop:text-[18px] desktop:w-[296px]">
              From vacationers <br />
              <span className="uppercase text-right tablet:ml-10 desktop:ml-16">
                to active travelers
              </span>
            </h3>
            <p className="text-text tablet:text-[16px] desktop:text-[18px] desktop:tracking-[2.16px]">
              we have a tour for everyone.
            </p>
          </div>
        </div>

        <div className="tablet:flex tablet:justify-end desktop:justify-start">
          <p className="text-text text-left tablet:w-[463px] tablet:text-justify desktop:w-[605px] desktop:text-[18px]">
            <span className="text-subTitle desktop:text-[18px]">
              We use methods
            </span>{" "}
            that are time-tested and proven. Our expert guides with in-depth
            knowledge of the Carpathian landscapes lead you safely through the
            mysteries of these mountains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
