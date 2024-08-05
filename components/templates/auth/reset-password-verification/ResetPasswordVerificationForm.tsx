"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import VerificationInput from "react-verification-input";
import ResendCode from "./ResendCode";

export default function ResetPasswordVerificationForm() {
  const [code, setCode] = useState("");

  const router = useRouter();

  const onSubmit = () => {
    localStorage.setItem("forget-password-verification-code", code);

    router.push("/auth/set-new-password");
  };

  return (
    <div className="text-start">
      <VerificationInput
        onChange={(value) => {
          setCode(value);
        }}
        classNames={{
          container: "w-full sm:gap-7 flex-wrap xl:gap-12 justify-between pt-8",
          character:
            "!size-12 flex items-center justify-center rounded-md border border-zinc-300 bg-neutral-100/50 text-center text-2xl text-gray-font-color outline-none",
          characterSelected: "border-zinc-600",
        }}
      />
      <ResendCode />

      <button
        onClick={onSubmit}
        disabled={code.length < 6}
        className="mt-12 flex h-12 w-full items-center justify-center rounded-full bg-blue-font-color text-lg font-normal text-white transition hover:bg-orange-bg-font-color disabled:opacity-75 disabled:hover:bg-blue-font-color sm:text-xl">
        Continue
      </button>
    </div>
  );
}
