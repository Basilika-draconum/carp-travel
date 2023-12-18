"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import toast from "react-hot-toast";
import { FormDataContact } from "../../../entities/types";
import Socials from "@/components/Socials/Socials";

const formConfigContact = {
  defaultValues: {
    fullName: "",
    email: "",
    message: "",
  },
};

const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormDataContact>(formConfigContact);

  useFormPersist("contactFormData", {
    watch,
    setValue,
  });
  const onSubmit = handleSubmit((data) => {
    reset();
    toast.success(
      `Thank you, ${data.fullName}! We have received your message and will contact you soon!`,
      { duration: 4500, position: "top-center" }
    );
  });

  return (
    <section
      id="contacts"
      className="section-main w-full bg-contact-bg bg-no-repeat bg-cover bg-center"
    >
      <div className="container-main">
        <h2 className="uppercase text-title mb-9 tablet:text-titleTb tablet:leading-none tablet:tracking-[-3px] desktop:text-titleDt desktop:mb-[81px] desktop:leading-tight">
          <span className="font-thin">Contact </span>us
        </h2>
        <div className="desktop:flex desktop:gap-[110px]">
          <address>
            <ul className="flex flex-col items-end not-italic gap-6 tablet:items-center tablet:flex-wrap tablet:h-[96px] tablet:mb-16 desktop:h-auto desktop:gap-0">
              <li className="flex flex-row gap-5 mb-6 tablet:mb-0 desktop:mb-16">
                <ul>
                  <li className="hover:underline hover:underline-offset-2">
                    <a
                      href="tel:+3809812345671"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-subTitle tablet:text-[16px] desktop:text-lg"
                    >
                      +38 (098) 12 34 567
                    </a>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <a
                      href="tel:+3809812345671"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-subTitle tablet:text-[16px] desktop:text-lg"
                    >
                      +38 (098) 12 34 567
                    </a>
                  </li>
                </ul>
                <p className="w-[81px] text-text text-[12px] tablet:leading-[20px] tablet:w-[100px] desktop:leading-[29px]">
                  Phone number
                </p>
              </li>
              <li className="flex flex-row gap-5 mb-6 tablet:mb-0 desktop:mb-24">
                <a
                  href="mailto:support@carptravel.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-subTitle tablet:text-[16px] desktop:text-lg hover:underline hover:underline-offset-2"
                >
                  support@carptravel.com
                </a>
                <p className="w-[81px] text-text text-[12px] tablet:leading-[20px] tablet:w-[125px] desktop:leading-[34px]">
                  E-mail
                </p>
              </li>
              <li className="flex flex-row gap-5 mb-3 tablet:mb-0 desktop:flex-row-reverse">
                <p className="text-text text-[12px] tablet:leading-[20px] desktop:w-[100px] desktop:leading-[31px]">
                  Follow us
                </p>
                <Socials />
              </li>
            </ul>
          </address>
          <form
            onSubmit={onSubmit}
            className="tablet:flex tablet:gap-5 desktop:flex-col"
          >
            <div className="desktop:flex desktop:gap-5 desktop:mb-5">
              <div className="mb-6 desktop:mb-0 relative">
                <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6 ">
                  Full name
                </label>
                <input
                  className="bg-white/[.05] py-1 pl-2 pr-2 w-full desktop:w-[293px] placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 desktop:placeholder:text-[17px]"
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
                    <Image
                      src="/icons/cross.svg"
                      alt="Cross"
                      width={18}
                      height={18}
                      aria-label="cross"
                    />
                  )}
                  <p className="text-errorColor text-xs font-extralight leading-6 tracking-[2.4px] ml-1">
                    {errors.fullName?.message}
                  </p>
                </div>
              </div>
              <div className="mb-6 desktop:mb-0 relative">
                <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6 ">
                  E-mail
                </label>
                <input
                  className="bg-white/[.05] py-1 pl-2 pr-2 w-full desktop:w-[293px] placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 desktop:placeholder:text-[17px]"
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
                    <Image
                      src="/icons/cross.svg"
                      alt="Cross"
                      width={18}
                      height={18}
                      aria-label="cross"
                    />
                  )}
                  <p className="text-errorColor font-extralight text-xs leading-6 tracking-[2.4px] ml-1">
                    {errors.email?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="tablet:w-[463px] desktop:w-auto">
              <div className="relative">
                <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6 ">
                  Message
                </label>
                <textarea
                  className="bg-white/[.05] py-1 pl-2 pr-2 resize-none w-full "
                  rows={8}
                  {...register("message", { required: "This is required" })}
                />
                <div className="flex absolute bottom-[-18px] right-0">
                  {errors.message?.message && (
                    <Image
                      src="/icons/cross.svg"
                      alt="Cross"
                      width={18}
                      height={18}
                      aria-label="cross"
                    />
                  )}
                  <p className="text-errorColor font-extralight text-xs leading-6 tracking-[2.4px] ml-1">
                    {errors.message?.message}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <input
                  className="uppercase cursor-pointer font-medium text-3xl text-right mt-4 desktop:text-[32px]"
                  type="submit"
                  value="send"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
