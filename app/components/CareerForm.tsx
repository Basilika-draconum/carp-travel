"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message?: string;
  isAgree: boolean;
};

const CareerForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <div className="flex justify-end tablet:justify-start tablet:mb-8 desktop:mb-[14px]">
        <h4 className="text-text w-[180px] leading-5 tablet:text-[13px] desktop:text-[18px] desktop:w-[240px] desktop:leading-6">
          Don`t miss your opportunity!
          <br /> Fill out the form right now and join our team!
        </h4>
      </div>

      <form onSubmit={onSubmit}>
        <div className="tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-[272px] desktop:h-[331px]">
          <div className="mb-4 tablet:mr-5 desktop:mb-6">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6">
              Full name
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5"
              placeholder="John Smith"
              {...register("fullName")}
            />
          </div>

          <div className="mb-4 tablet:mr-5 desktop:mb-6">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6">
              E-mail
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5"
              placeholder="johnsmith@email.com"
              {...register("email", { required: true })}
            />
          </div>

          <div className="mb-4 tablet:mr-5 desktop:mb-6">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6">
              Position
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5"
              placeholder="Movie maker"
              {...register("position", { required: true })}
            />
          </div>
          {/* {errors.lastName && <p>Last name is required.</p>} */}

          <div className="mb-4 tablet:mr-5 desktop:mb-6">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6">
              Phone
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5"
              placeholder="+ 38 (097) 12 34 567"
              {...register("phone", {
                pattern: /^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/,
              })}
            />
          </div>
          <div className="mb-4 tablet:mb-0">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6">
              Message
            </label>
            <textarea
              className="bg-white/[.05] py-1 pl-2 pr-2 resize-none w-full tablet:h-[228px] desktop:w-[288px] desktop:h-[268px]"
              rows={8}
              // cols={30}
              {...register("message")}
            />
          </div>
        </div>
        <div className="tablet:flex tablet:justify-between">
          <div className="tablet:w-[222px] desktop:w-[258px]">
            <input type="checkbox" id="isAgree" name="isAgree" />
            <label className="text-text ml-1 tablet:text-[12px] ">
              I confirm my consent to the processing of personal data.
            </label>
          </div>

          {/* <input {...register("age", { pattern: /\d+/ })} /> */}
          {/* {errors.age && <p>Please enter number for age.</p>} */}
          <div className="flex justify-end">
            <input
              className="uppercase font-medium text-3xl text-right mt-4 tablet:mt-0"
              type="submit"
              value="send"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CareerForm;
