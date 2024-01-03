import TitleSection from "@/components/TitleSection/TitleSection";
import CareerForm from "../../../components/CareerForm/CareerForm";
import CareerDescription from "@/components/CareerDescription/CareerDescription";
import career from "@/public/content/career.json";

const Career = () => {
  return (
    <>
      <section
        id="career"
        className="section-main w-full bg-career-bg bg-no-repeat bg-cover bg-center"
      >
        <div className="container-main">
          <div className="tablet:flex tablet:mb-[5px] tablet:gap-[111px] desktop:justify-between">
            <TitleSection
              title1="choose"
              title2="us"
              className="mb-6 tablet:tracking-[-2px]"
            />
            <div className="flex justify-end">
              <p className="text-text w-[180px] tablet:w-[221px] tablet:text-justify tablet:leading-5 tablet:text-[13px] desktop:w-[270px] desktop:text-[18px]">
                {career.description}
              </p>
            </div>
          </div>
          <div className="tablet:flex ">
            <div className="tablet:mr-5 desktop:mr-6">
              <h3 className="text-center text-3xl font-extralight my-9 uppercase tablet:mt-0 tablet:mb-14 tablet:pl-[39px] desktop:text-[36px] desktop:pl-[120px] desktop:text-left desktop:mb-[45px]">
                {career.title}
              </h3>
              <CareerDescription />
            </div>
            <div className="hidden tablet:block tablet:mt-24 desktop:mt-0">
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
      <div
        className="bg-career-bg bg-no-repeat bg-cover bg-center pt-9 pb-14
      w-full tablet:hidden"
      >
        <div className="container-main">
          <CareerForm />
        </div>
      </div>
    </>
  );
};

export default Career;
