"use client";
import { FormDataContact } from "@/entities/types";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import toast from "react-hot-toast";

const formConfigContact = {
  defaultValues: {
    fullName: "",
    email: "",
    message: "",
  },
};
const ContactForm = () => {
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
            className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:w-[225px] desktop:w-[293px] placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 desktop:placeholder:text-[17px]"
            placeholder="John Smith"
            {...register("fullName", {
              required: "This is required",
              pattern: {
                value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                message: "Incorrect name",
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
      <div className="tablet:w-[453px] desktop:w-auto">
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
  );
};

export default ContactForm;
