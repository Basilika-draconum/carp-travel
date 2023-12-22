import Image from "next/image";
import { UseFormRegister } from "react-hook-form";
interface FormTextareaProps {
  register: UseFormRegister<any>;
  error?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ register, error }) => {
  return (
    <div className="mb-6 tablet:mb-0 relative">
      <label className="block text-white text-text tracking-[2.4px] mb-1 tablet:text-[12px] tablet:leading-6">
        Message
      </label>
      <textarea
        className="bg-white/[.05] py-1 pl-2 pr-2 resize-none w-full tablet:h-[228px] desktop:w-[288px] desktop:h-[268px]"
        rows={8}
        {...register("message", { required: "This is required" })}
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
};

export default FormTextarea;
