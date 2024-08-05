"use client";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export default function Input({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  className,
  value,
  onInput,
  hasHideShowBtn,
}: {
  type?: string;
  placeholder: string;
  name: string;
  register?: UseFormRegister<any>;
  error?: FieldError | undefined;
  valueAsNumber?: boolean;
  className?: string;
  value?: string;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  hasHideShowBtn?: boolean;
}) {
  const [isShow, setIsShow] = useState(false);

  if (register) {
    return (
      <div>
        <div className="relative">
          <input
            type={
              !hasHideShowBtn ? type || "text" : isShow ? "text" : "password"
            }
            placeholder={placeholder}
            className={cn(
              "input w-full rounded-none border-x-0 !border-b border-t-0 border-zinc-400 bg-transparent px-0 font-medium !text-gray-font-color !outline-none placeholder:text-gray-font-color focus:border-body-color focus:!text-body-color focus:placeholder:!text-body-color",
              className,
              error && "!border-red-500",
            )}
            onInput={(event) => onInput && onInput(event)}
            {...register(name as any, { valueAsNumber })}
          />
          {hasHideShowBtn ? (
            isShow ? (
              <EyeIcon
                className="absolute bottom-0 right-0 top-0 my-auto size-6 cursor-pointer text-gray-font-color"
                onClick={() => setIsShow(false)}
              />
            ) : (
              <EyeOffIcon
                className="absolute bottom-0 right-0 top-0 my-auto size-6 cursor-pointer text-gray-font-color"
                onClick={() => setIsShow(true)}
              />
            )
          ) : null}
        </div>
        {error ? (
          <p className="pt-1 text-start text-xs text-red-500">
            {error?.message}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <div className="relative">
        <input
          type={!hasHideShowBtn ? type || "text" : isShow ? "text" : "password"}
          placeholder={placeholder}
          className={cn(
            "input w-full rounded-none border-x-0 !border-b border-t-0 border-zinc-400 bg-transparent px-0 font-medium !text-gray-font-color !outline-none placeholder:text-gray-font-color focus:border-body-color focus:!text-body-color focus:placeholder:!text-body-color",
            className,
            error && "!border-red-500",
          )}
          value={value}
          onInput={(event) => onInput && onInput(event)}
        />
        {hasHideShowBtn ? (
          isShow ? (
            <EyeIcon
              className="absolute bottom-0 right-0 top-0 my-auto size-6 cursor-pointer text-gray-font-color"
              onClick={() => setIsShow(false)}
            />
          ) : (
            <EyeOffIcon
              className="absolute bottom-0 right-0 top-0 my-auto size-6 cursor-pointer text-gray-font-color"
              onClick={() => setIsShow(true)}
            />
          )
        ) : null}
      </div>
      {error ? (
        <p className="pt-1 text-start text-xs text-red-500">{error?.message}</p>
      ) : null}
    </div>
  );
}
