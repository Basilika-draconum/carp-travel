"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useFormPersist from "react-hook-form-persist";
import { FormDataCareer } from "../../entities/types";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";

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
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormDataCareer>(formConfigCareer);

  useFormPersist("careerFormData", {
    watch,
    setValue,
  });

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
          <FormInput
            label="Full name"
            placeholder="John Smith"
            name="fullName"
            register={register}
            error={errors.fullName?.message}
            pattern={/^[a-zA-Z]+ [a-zA-Z]+$/}
            message="Incorrect name"
          />
          <FormInput
            label="E-mail"
            placeholder="johnsmith@email.com"
            name="email"
            register={register}
            error={errors.email?.message}
            pattern={
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
            message="Invalid email"
          />
          <FormInput
            label="Position"
            placeholder="Movie maker"
            name="position"
            register={register}
            error={errors.position?.message}
            pattern={/^[A-Za-z]+$/i}
            message="Incorrect position"
          />
          <FormInput
            label="Phone"
            placeholder="+ 38 097 12 34 567"
            name="phone"
            register={register}
            error={errors.phone?.message}
            pattern={/^\+380\d{9}$/}
            message="Incorrect phone"
          />
          <FormTextarea error={errors.message?.message} register={register} />
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
