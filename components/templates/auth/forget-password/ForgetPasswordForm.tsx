"use client";

import Input from "@/components/modules/Input";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSendEmail = () => {
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    const isTrueEmail = emailRegex.test(email);

    if (!isTrueEmail) {
      return toast.error("Email is incorrect");
    }
  };

  const onSendMessage = () => {
    if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      return toast.error("Phone number is incorrect");
    }
  };

  return (
    <div className="text-start">
      <p className="mb-4 text-xl font-bold">Choose how you want to log in</p>
      <div className="space-y-7">
        <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-300 bg-neutral-100 xs:flex-row">
          <div className="flex w-full flex-col justify-center py-4 pl-5 pr-5 xs:py-0 xs:pr-10 sm:pl-10 sm:pr-28">
            <p className="text-xl font-bold">Send an email to</p>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="h-9"
              value={email}
              onInput={(event) => setEmail(event.currentTarget.value)}
            />
          </div>
          <button
            className="flex h-14 w-full shrink-0 items-center justify-center bg-zinc-300 transition-colors hover:bg-zinc-200 xs:size-24 sm:size-28"
            onClick={onSendEmail}>
            <ArrowRightIcon className="size-5 xs:size-7" />
          </button>
        </div>
        <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-300 bg-neutral-100 xs:flex-row">
          <div className="flex w-full flex-col justify-center py-4 pl-5 pr-5 xs:py-0 xs:pr-10 sm:pl-10 sm:pr-28">
            <p className="text-xl font-bold">Send an message to</p>
            <Input
              name="phone"
              type="number"
              placeholder="Phone number"
              className="h-9"
              value={phoneNumber}
              onInput={(event) => setPhoneNumber(event.currentTarget.value)}
            />
          </div>
          <button
            className="flex h-14 w-full shrink-0 items-center justify-center bg-zinc-300 transition-colors hover:bg-zinc-200 xs:size-24 sm:size-28"
            onClick={onSendMessage}>
            <ArrowRightIcon className="size-5 xs:size-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
