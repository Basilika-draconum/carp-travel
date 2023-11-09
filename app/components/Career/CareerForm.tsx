"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { FormDataCareer } from "../../entities/types";
import toast from "react-hot-toast";

const formConfigCareer = {
  defaultValues: {
    fullName: "",
    email: "",
    position: "",
    phone: "",
    message: "",
    isAgree: false,
  },
};
const CareerForm = () => {
  const [isChecked, setIsChecked] = React.useState(
    formConfigCareer.defaultValues.isAgree
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataCareer>(formConfigCareer);

  const onSubmit = handleSubmit((data) => {
    reset();
    toast.success(
      `Thank you, ${
        data.fullName
      }! We have received your application and will contact you soon!
      ${
        data.isAgree
          ? "Consent to the processing of personal data."
          : "Not consenting to the processing of personal data."
      }`,
      { duration: 5000, position: "top-center" }
    );
  });

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
          <div className="mb-6 tablet:mr-5 tablet:mb-4 desktop:mb-4 relative">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              Full name
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5 placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 desktop:placeholder:text-[17px]"
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
            <div className="flex absolute right-0">
              {errors.fullName?.message && (
                <Image src="/cross.svg" alt="Cross" width={18} height={18} />
              )}
              <p className="text-errorColor font-extralight text-xs leading-6 tracking-[2.4px] ml-1">
                {errors.fullName?.message}
              </p>
            </div>
          </div>
          <div className="mb-6 tablet:mb-4 tablet:mr-5 desktop:mb-4 relative">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              E-mail
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5 placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 desktop:placeholder:text-[17px]"
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
            <div className="flex absolute right-0">
              {errors.email?.message && (
                <Image src="/cross.svg" alt="Cross" width={18} height={18} />
              )}
              <p className="text-errorColor font-extralight text-xs leading-6 tracking-[2.4px] ml-1">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <div className="mb-6 tablet:mb-4 tablet:mr-5 desktop:mb-4 relative">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              Position
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5 placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 desktop:placeholder:text-[17px]"
              placeholder="Movie maker"
              {...register("position", {
                required: "This is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Enter only words",
                },
              })}
            />
            <div className="flex absolute right-0">
              {errors.position?.message && (
                <Image src="/cross.svg" alt="Cross" width={18} height={18} />
              )}
              <p className="text-errorColor font-extralight text-xs leading-6 tracking-[2.4px] ml-1">
                {errors.position?.message}
              </p>
            </div>
          </div>
          <div className="mb-6 tablet:mr-5 desktop:mb-4 relative">
            <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              Phone
            </label>
            <input
              className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5 placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 desktop:placeholder:text-[17px]"
              placeholder="+ 38 097 12 34 567"
              {...register("phone", {
                required: "This is required",
                pattern: { value: /^\+380\d{9}$/, message: "Invalid phone" },
              })}
            />
            <div className="flex absolute right-0">
              {errors.phone?.message && (
                <Image src="/cross.svg" alt="Cross" width={18} height={18} />
              )}
              <p className="text-errorColor font-extralight text-xs leading-6 tracking-[2.4px] ml-1">
                {errors.phone?.message}
              </p>
            </div>
          </div>
          <div className="mb-6 tablet:mb-0 relative">
            <label className="block text-white text-text tracking-[2.4px] mb-1  tablet:mb-0 tablet:text-[12px] tablet:leading-6">
              Message
            </label>
            <textarea
              className="bg-white/[.05] py-1 pl-2 pr-2 resize-none w-full tablet:h-[228px] desktop:w-[288px] desktop:h-[268px]"
              rows={8}
              {...register("message", { required: "This is required" })}
            />
            <div className="flex absolute right-0">
              {errors.message?.message && (
                <Image src="/cross.svg" alt="Cross" width={18} height={18} />
              )}
              <p className="text-errorColor font-extralight text-xs leading-6 tracking-[2.4px] ml-1">
                {errors.message?.message}
              </p>
            </div>
          </div>
        </div>
        <div className=" tablet:flex tablet:justify-between">
          <div className="flex tablet:w-[222px] desktop:w-[258px]">
            <div className="checkbox-wrapper ">
              <input
                type="checkbox"
                id="isAgree"
                {...register("isAgree")}
                onChange={() => setIsChecked((prev) => !prev)}
                checked={isChecked}
                className={isChecked ? "checked" : ""}
              />
            </div>
            <div className="ml-2">
              <label className="text-text ml-1 tablet:text-[12px] ">
                I confirm my consent to the processing of personal data.
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <input
              className="uppercase cursor-pointer font-medium text-3xl text-right mt-4 tablet:mt-0"
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
