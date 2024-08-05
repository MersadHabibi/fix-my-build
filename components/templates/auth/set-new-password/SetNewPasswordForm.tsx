"use client";

import Input from "@/components/modules/Input";
import { CheckIcon, XIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { FormData, PasswordSchema } from "./SetNewPasswordFormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { boolean } from "zod";

export default function SetNewPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(PasswordSchema), // Apply the zodResolver
  });

  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const [instruction, setInstruction] = useState({
    charactersCount: false,
    hasUpperCase: false,
    hasLowerCase: false,
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <div>
      <div>
        <p className="mb-4 text-start text-xl font-bold">Instruction:</p>

        <div className="mb-6 space-y-2">
          <p className="flex items-center gap-x-2 text-xl font-normal">
            <span>
              {instruction.charactersCount ? (
                <CheckIcon className="size-6 text-green-500" strokeWidth={4} />
              ) : (
                <XIcon className="size-6 text-red-500" strokeWidth={4} />
              )}
            </span>
            <span>8-32 character</span>
          </p>
          <p className="flex items-center gap-x-2 text-xl font-normal">
            <span>
              {instruction.hasLowerCase ? (
                <CheckIcon className="size-6 text-green-500" strokeWidth={4} />
              ) : (
                <XIcon className="size-6 text-red-500" strokeWidth={4} />
              )}
            </span>
            <span>One upper case</span>
          </p>
          <p className="flex items-center gap-x-2 text-xl font-normal">
            <span>
              {instruction.hasUpperCase ? (
                <CheckIcon className="size-6 text-green-500" strokeWidth={4} />
              ) : (
                <XIcon className="size-6 text-red-500" strokeWidth={4} />
              )}
            </span>
            <span>One lower case</span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              name="password"
              placeholder="Password"
              register={register}
              error={errors.password}
              hasHideShowBtn
              onInput={(event) => {
                const inputValue = event.currentTarget.value;

                if (inputValue.length >= 8 && inputValue.length <= 32)
                  setInstruction((prev) => ({
                    ...prev,
                    charactersCount: true,
                  }));
                else
                  setInstruction((prev) => ({
                    ...prev,
                    charactersCount: false,
                  }));

                if (inputValue != inputValue.toUpperCase())
                  setInstruction((prev) => ({
                    ...prev,
                    hasUpperCase: true,
                  }));
                else
                  setInstruction((prev) => ({
                    ...prev,
                    hasUpperCase: false,
                  }));

                if (inputValue != inputValue.toLowerCase())
                  setInstruction((prev) => ({
                    ...prev,
                    hasLowerCase: true,
                  }));
                else
                  setInstruction((prev) => ({
                    ...prev,
                    hasLowerCase: false,
                  }));

                if (
                  inputValue.length >= 8 &&
                  inputValue.length <= 32 &&
                  inputValue != inputValue.toUpperCase() &&
                  inputValue != inputValue.toLowerCase()
                ) {
                  setIsCorrectPassword(true);
                } else {
                  setIsCorrectPassword(false);
                }
              }}
            />
            <Input
              name="retypePassword"
              placeholder="Retype password"
              register={register}
              error={errors.retypePassword}
              hasHideShowBtn
            />
          </div>
          <button
            disabled={!isCorrectPassword}
            className="mt-12 flex h-12 w-full items-center justify-center rounded-full bg-blue-font-color text-lg font-normal text-white transition hover:bg-orange-bg-font-color disabled:opacity-75 disabled:hover:bg-blue-font-color sm:text-xl">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
