"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

type FormDataCareer = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  isAgree: boolean;
};

const formConfigCareer = {
  defaultValues: {
    fullName: "",
    email: "",
    position: "",
    phone: "",
    message: "",
    isAgree: true,
  },
};
const CareerForm = () => {
  const [isChecked, setIsChecked] = React.useState(
    formConfigCareer.defaultValues.isAgree
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataCareer>(formConfigCareer);

  const onSubmit = handleSubmit((data) =>
    alert(
      `Email:${data.email},
    Full Name:${data.fullName},
    Message:${data.message},
    Phone:${data.phone},
    ${
      data.isAgree
        ? "Consent to the processing of personal data."
        : "Not consenting to the processing of personal data."
    }`
    )
  );

  return (
    <>
      <div className="flex justify-end tablet:justify-start tablet:mb-12 desktop:mb-[14px]">
        <h4 className="text-text w-[180px] leading-5 tablet:text-[13px] desktop:text-[18px] desktop:w-[240px] desktop:leading-6">
          Don`t miss your opportunity!
          <br /> Fill out the form right now and join our team!
        </h4>
      </div>

      <form onSubmit={onSubmit}>
        <div className="tablet:flex tablet:flex-col tablet:flex-wrap tablet:h-[290px] desktop:h-[331px]">
          <div className="mb-4 tablet:mr-5 tablet:mb-2 desktop:mb-6">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              Full name
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5"
              placeholder="John Smith"
              {...register("fullName", {
                required: "This is required",
                minLength: { value: 7, message: "Min length is 7" },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Enter only words",
                },
              })}
            />
            <div className=" flex">
              {errors.fullName?.message && (
                <Image src="/cross.svg" alt="Cross" width={18} height={18} />
              )}
              <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                {errors.fullName?.message}
              </p>
            </div>
          </div>

          <div className="mb-4  tablet:mb-2 tablet:mr-5 desktop:mb-6">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              E-mail
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5"
              placeholder="johnsmith@email.com"
              {...register("email", {
                required: "This is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email",
                },
              })}
            />
            <div className=" flex">
              {errors.email?.message && (
                <Image src="/cross.svg" alt="Cross" width={18} height={18} />
              )}
              <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                {errors.email?.message}
              </p>
            </div>
          </div>

          <div className="mb-4 tablet:mb-2 tablet:mr-5 desktop:mb-6">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              Position
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5"
              placeholder="Movie maker"
              {...register("position", {
                required: "This is required",
              })}
            />
          </div>

          <div className="mb-4 tablet:mr-5 desktop:mb-6">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              Phone
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5"
              placeholder="+ 38 097 12 34 567"
              {...register("phone", {
                required: "This is required",
                pattern: { value: /^\+380\d{9}$/, message: "Invalid phone" },
              })}
            />
          </div>
          <div className="mb-4 tablet:mb-0">
            <label className="block text-white text-text tracking-[2.4px] mb-1  tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              Message
            </label>
            <textarea
              className="bg-white/[.05] py-1 pl-2 pr-2 resize-none w-full tablet:h-[228px] desktop:w-[288px] desktop:h-[268px]"
              rows={8}
              {...register("message", { required: "This is required" })}
            />
            <div className=" flex">
              {errors.message?.message && (
                <Image src="/cross.svg" alt="Cross" width={18} height={18} />
              )}
              <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                {errors.message?.message}
              </p>
            </div>
          </div>
        </div>
        <div className="tablet:flex tablet:justify-between">
          <div className="checkbox-wrapper tablet:w-[222px] desktop:w-[258px]">
            <input
              type="checkbox"
              id="isAgree"
              {...register("isAgree")}
              onChange={() => setIsChecked((prev) => !prev)}
              checked={isChecked}
              className={isChecked ? "checked" : ""}
            />
            <label className="text-text ml-1 tablet:text-[12px] ">
              I confirm my consent to the processing of personal data.
            </label>
          </div>

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
