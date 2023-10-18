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
    <section className="w-full bg-contact-bg bg-no-repeat bg-cover bg-center pt-9 pb-14 px-5">
      <h2 className="text-title mb-9">
        <span className="font-thin">Contact </span>us
      </h2>
      <address>
        <ul className="not-italic gap-6 ">
          <li className="flex flex-row-reverse gap-5 mb-6">
            <p className="w-[81px] text-text text-[12px]">Phone number</p>
            <ul>
              <li>
                <a href="tel:+3809812345671" className="text-subTitle">
                  +38 (098) 12 34 567
                </a>
              </li>
              <li>
                <a href="tel:+3809812345671" className="text-subTitle">
                  +38 (098) 12 34 567
                </a>
              </li>
            </ul>
          </li>
          <li className="flex flex-row-reverse gap-5 mb-6">
            <p className="w-[81px] text-text text-[12px]">E-mail</p>
            <a href="mailto:support@carptravel.com" className="text-subTitle">
              support@carptravel.com
            </a>
          </li>
          <li className="flex flex-row-reverse gap-5 mb-3">
            <ul className="w-[81px] text-subTitle">
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
            <p className="text-text text-[12px]">Follow us</p>
          </li>
        </ul>
      </address>
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label className="block text-white text-text tracking-[2.4px] mb-1">
            Full name
          </label>
          <input
            className="bg-white/[.05] py-1 pl-2 pr-2 w-full"
            placeholder="John Smith"
            {...register("fullName")}
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-text tracking-[2.4px] mb-1">
            E-mail
          </label>
          <input
            className="bg-white/[.05] py-1 pl-2 pr-2 w-full"
            placeholder="johnsmith@email.com"
            {...register("email", { required: true })}
          />
        </div>

        <div className="">
          <label className="block text-white text-text tracking-[2.4px] mb-1">
            Message
          </label>
          <textarea
            className="bg-white/[.05] py-1 pl-2 pr-2 resize-none w-full"
            rows={8}
            cols={30}
            {...register("message")}
          />
        </div>
        <div className="flex justify-end">
          <input
            className="uppercase font-medium text-3xl text-right mt-4"
            type="submit"
            value="send"
          />
        </div>
      </form>
    </section>
  );
};

export default Contacts;
