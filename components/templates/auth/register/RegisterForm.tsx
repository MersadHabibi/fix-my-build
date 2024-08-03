"use client";

import Input from "@/components/modules/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormData, UserSchema } from "./RegisterFormData";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema), // Apply the zodResolver
  });

  const [role, setRole] = useState<"customer" | "tradesPerson">("customer");
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);

  const [isShowInput, setIsShowInput] = useState({
    password: false,
    confirmPassword: false,
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        <Input
          placeholder="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName}
        />
        <div className="relative">
          <Input
            type={isShowInput.password ? "text" : "password"}
            placeholder="Password*"
            name="password"
            register={register}
            error={errors.password}
          />
          {isShowInput.password ? (
            <EyeIcon
              className="absolute bottom-0 right-0 top-0 my-auto size-6 cursor-pointer text-gray-font-color"
              onClick={() =>
                setIsShowInput((prev) => ({ ...prev, password: false }))
              }
            />
          ) : (
            <EyeOffIcon
              className="absolute bottom-0 right-0 top-0 my-auto size-6 cursor-pointer text-gray-font-color"
              onClick={() =>
                setIsShowInput((prev) => ({ ...prev, password: true }))
              }
            />
          )}
        </div>
        <div className="relative">
          <Input
            type={isShowInput.confirmPassword ? "text" : "password"}
            placeholder="Confirm Password*"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
          />

          {isShowInput.confirmPassword ? (
            <EyeIcon
              className="absolute bottom-0 right-0 top-0 my-auto size-6 cursor-pointer text-gray-font-color"
              onClick={() =>
                setIsShowInput((prev) => ({ ...prev, confirmPassword: false }))
              }
            />
          ) : (
            <EyeOffIcon
              className="absolute bottom-0 right-0 top-0 my-auto size-6 cursor-pointer text-gray-font-color"
              onClick={() =>
                setIsShowInput((prev) => ({ ...prev, confirmPassword: true }))
              }
            />
          )}
        </div>
        <Input
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <Input
          placeholder="Mobile phone"
          name="mobilePhone"
          register={register}
          error={errors.mobilePhone}
        />
      </div>
      <div className="space-y-1 pb-3 pt-7 sm:pb-4">
        <p className="text-start sm:text-lg">
          Are you a customer or tradesPerson?
        </p>
        <div className="flex items-center gap-x-8">
          <div className="form-control">
            <label className="label cursor-pointer gap-x-2 sm:gap-x-5">
              <input
                type="radio"
                name="radio-10"
                className="radio border-gray-font-color checked:bg-gray-font-color"
                defaultChecked
                onChange={() => setRole("customer")}
              />
              <span className="label-text text-gray-font-color sm:text-lg">
                Customer
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-x-2 sm:gap-x-5">
              <input
                type="radio"
                name="radio-10"
                className="radio border-gray-font-color checked:bg-gray-font-color"
                onChange={() => setRole("tradesPerson")}
              />
              <span className="label-text text-gray-font-color sm:text-lg">
                TradesPerson
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-x-4">
          <input
            type="checkbox"
            className="size-5 shrink-0 lg:size-7"
            checked={isAgreeTerms}
            onChange={() => setIsAgreeTerms(!isAgreeTerms)}
          />
          <p className="label-text text-start text-gray-font-color">
            I have read and agree to FixMyBuild’s{" "}
            <Link
              className="font-bold text-orange-bg-font-color"
              href={"/terms"}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="font-bold text-orange-bg-font-color"
              href={"/privacy"}>
              Privacy Policy.
            </Link>
          </p>
        </label>
      </div>
      <button className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-blue-font-color text-xl font-normal text-white transition hover:bg-orange-bg-font-color">
        Register
      </button>
    </form>
  );
}
