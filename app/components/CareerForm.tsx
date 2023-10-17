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
    <div className="bg-career-bg bg-no-repeat bg-cover bg-center pt-9 pb-14 px-5">
      <div className="flex justify-end">
        <h4 className="text-text w-[180px] ">
          Don`t miss your opportunity!
          <br /> Fill out the form right now and join our team!
        </h4>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-white text-text tracking-[2.4px] mb-1">
            Full name
          </label>
          <input
            className="bg-white/[.05] py-1 pl-2 pr-2 w-full"
            placeholder="John Smith"
            {...register("fullName")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-text tracking-[2.4px] mb-1">
            E-mail
          </label>
          <input
            className="bg-white/[.05] py-1 pl-2 pr-2 w-full"
            placeholder="johnsmith@email.com"
            {...register("email", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-text tracking-[2.4px] mb-1">
            Position
          </label>
          <input
            className="bg-white/[.05] py-1 pl-2 pr-2 w-full"
            placeholder="Movie maker"
            {...register("position", { required: true })}
          />
        </div>
        {/* {errors.lastName && <p>Last name is required.</p>} */}

        <div className="mb-4">
          <label className="block text-white text-text tracking-[2.4px] mb-1">
            Phone
          </label>
          <input
            className="bg-white/[.05] py-1 pl-2 pr-2 w-full"
            placeholder="+ 38 (097) 12 34 567"
            {...register("phone", {
              pattern: /^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/,
            })}
          />
        </div>
        <div className="mb-4">
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
        <div>
          <input type="checkbox" id="isAgree" name="isAgree" />
          <label className="text-text ml-1">
            I confirm my consent to the processing of personal data.
          </label>
        </div>

        {/* <input {...register("age", { pattern: /\d+/ })} /> */}
        {/* {errors.age && <p>Please enter number for age.</p>} */}
        <div className="flex justify-end">
          <input
            className="uppercase font-medium text-3xl text-right mt-4"
            type="submit"
            value="send"
          />
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
