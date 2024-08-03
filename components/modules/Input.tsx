import { cn } from "@/lib/utils";
import { FieldError, UseFormRegister } from "react-hook-form";

export default function Input({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  className,
}: {
  type?: string;
  placeholder: string;
  name: string;
  register?: UseFormRegister<any>;
  error?: FieldError | undefined;
  valueAsNumber?: boolean;
  className?: string;
}) {
  if (register) {
    return (
      <div>
        <input
          type={type || "text"}
          placeholder={placeholder}
          className={cn(
            "input w-full rounded-none border-x-0 !border-b border-t-0 border-gray-font-color px-0 font-medium !text-gray-font-color !outline-none placeholder:text-gray-font-color focus:border-body-color focus:!text-body-color focus:placeholder:!text-body-color",
            className,
            error && "!border-red-500",
          )}
          {...register(name as any, { valueAsNumber })}
        />
        {error ? (
          <p className="pt-1 text-start text-xs text-red-500">
            {error?.message}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      className={cn(
        "input w-full rounded-none border-x-0 !border-b border-t-0 border-gray-font-color px-0 font-medium !text-gray-font-color !outline-none placeholder:text-gray-font-color focus:border-body-color focus:!text-body-color focus:placeholder:!text-body-color",
        className,
      )}
    />
  );
}
