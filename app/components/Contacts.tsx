"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

const Contacts = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <section
      id="contacts"
      className="w-full bg-contact-bg bg-no-repeat bg-cover bg-center pt-9 pb-14 px-5  tablet:pt-[64px] tablet:px-8 tablet:pb-16 desktop:px-[104px] desktop:pb-[104px]"
    >
      <h2 className="uppercase text-title mb-9 tablet:text-titleTb tablet:leading-none tablet:tracking-[-3px] desktop:text-titleDt desktop:mb-[81px] desktop:leading-tight">
        <span className="font-thin">Contact </span>us
      </h2>
      <div className="desktop:flex desktop:justify-around">
        <address>
          <ul className="flex flex-col items-end not-italic gap-6 tablet:items-center tablet:flex-wrap tablet:h-[96px] tablet:mb-16 desktop:h-auto desktop:gap-0">
            <li className="flex flex-row gap-5 mb-6 tablet:mb-0 desktop:mb-16">
              <ul>
                <li>
                  <a
                    href="tel:+3809812345671"
                    className="text-subTitle tablet:text-[16px] desktop:text-lg"
                  >
                    +38 (098) 12 34 567
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+3809812345671"
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
            <li className="flex flex-row gap-5 mb-6 tablet:mb-0 desktop:mb-32">
              <a
                href="mailto:support@carptravel.com"
                className="text-subTitle tablet:text-[16px] desktop:text-lg"
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
              <ul className="w-[81px] text-subTitle  tablet:text-[16px] desktop:text-lg desktop:w-[186px] desktop:flex desktop:flex-col desktop:items-end">
                <li>
                  <a href="https://www.facebook.com/">facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dubinenko_anzhelika?igshid=NGVhN2U2NjQ0Yg%3D%3D">
                    instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">youtube</a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/">tiktok</a>
                </li>
              </ul>
            </li>
          </ul>
        </address>
        <form
          onSubmit={onSubmit}
          className="tablet:flex tablet:gap-5 desktop:flex-col"
        >
          <div className="desktop:flex desktop:gap-5 desktop:mb-10">
            <div className="mb-6 desktop:mb-0">
              <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6 ">
                Full name
              </label>
              <input
                className="bg-white/[.05] py-1 pl-2 pr-2 w-full"
                placeholder="John Smith"
                {...register("fullName")}
              />
            </div>

            <div className="mb-6  desktop:mb-0">
              <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6 ">
                E-mail
              </label>
              <input
                className="bg-white/[.05] py-1 pl-2 pr-2 w-full"
                placeholder="johnsmith@email.com"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="tablet:w-[463px]">
            <div className="">
              <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6 ">
                Message
              </label>
              <textarea
                className="bg-white/[.05] py-1 pl-2 pr-2 resize-none w-full"
                rows={8}
                // cols={30}
                {...register("message")}
              />
            </div>
            <div className="flex justify-end">
              <input
                className="uppercase font-medium text-3xl text-right mt-4 desktop:text-[32px]"
                type="submit"
                value="send"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
