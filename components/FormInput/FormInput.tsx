import Image from "next/image";
import { UseFormRegister } from "react-hook-form";

interface FormInputProps {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  pattern: RegExp;
  message: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  name,
  register,
  pattern,
  error,
  message,
}) => (
  <div className="mb-6 tablet:mb-4 tablet:mr-5 desktop:mb-4 desktop:mr-4 relative">
    <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6">
      {label}
    </label>
    <input
      className="bg-white/[.05] py-1 pl-2 pr-2 w-full tablet:py-0 desktop:py-0.5 placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 desktop:placeholder:text-[17px] desktop:w-[230px]"
      placeholder={placeholder}
      {...register(name, {
        required: "This is required",
        pattern: {
          value: pattern,
          message: message,
        },
      })}
    />
    <div className="flex absolute right-0">
      {error && (
        <Image
          src="/icons/cross.svg"
          alt="Cross"
          width={18}
          height={18}
          aria-label="cross"
        />
      )}
      <p className="text-errorColor font-extralight text-xs leading-6 tracking-[2.4px] ml-1">
        {error}
      </p>
    </div>
  </div>
);

export default FormInput;
