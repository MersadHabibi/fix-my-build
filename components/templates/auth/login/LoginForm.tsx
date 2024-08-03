"use client";

import Input from "@/components/modules/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormData, UserSchema } from "./LoginFormData";
import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema), // Apply the zodResolver
  });

  const [isShowInput, setIsShowInput] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <div className="relative">
          <Input
            type={isShowInput ? "text" : "password"}
            placeholder="Password*"
            name="password"
            register={register}
            error={errors.password}
          />
          {isShowInput ? (
            <EyeIcon
              className="absolute right-0 top-3 size-6 cursor-pointer text-gray-font-color"
              onClick={() => setIsShowInput(false)}
            />
          ) : (
            <EyeOffIcon
              className="absolute right-0 top-3 size-6 cursor-pointer text-gray-font-color"
              onClick={() => setIsShowInput(true)}
            />
          )}
        </div>
      </div>
      <div className="form-control pt-6">
        <label className="label cursor-pointer justify-start gap-x-4">
          <input
            type="checkbox"
            className="size-5 shrink-0 lg:size-7"
            checked={isRememberMe}
            onChange={() => setIsRememberMe(!isRememberMe)}
          />
          <p className="label-text text-start text-gray-font-color">
            Remember me
          </p>
        </label>
      </div>
      <button className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-blue-font-color text-xl font-normal text-white transition hover:bg-orange-bg-font-color">
        Sign in
      </button>
      <Link
        className="mt-2 block text-center font-bold text-orange-bg-font-color sm:text-lg"
        href={"/auth/forget-password"}>
        Forgot password?
      </Link>
    </form>
  );
}
