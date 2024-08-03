import RegisterForm from "@/components/templates/auth/register/RegisterForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register | Fix My Build",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto w-full max-w-[550px] lg:max-w-none xl:px-10 2xl:px-20">
      <div className="py-8 text-center sm:py-12">
        <h1 className="mb-1 text-3xl font-bold sm:text-[40px]">
          CREATE AN ACCOUNT
        </h1>
        <p className="font-normal sm:text-xl">
          <span>Already have an account? </span>
          <Link
            className="font-bold text-orange-bg-font-color"
            href={"/auth/login"}>
            Sign in
          </Link>
        </p>
      </div>
      <RegisterForm />
      <div className="py-8 text-center sm:py-14">
        <p className="text-lg font-bold text-black sm:text-xl">
          Or register with
        </p>
        <div className="flex items-center justify-center gap-x-7 pt-3 sm:gap-x-10 sm:pt-5">
          <Link
            className="flex size-12 items-center justify-center rounded-full bg-zinc-300 p-3 transition-colors hover:bg-orange-bg-font-color sm:size-16 sm:p-4"
            href={"#"}>
            <Image
              className="size-full object-contain"
              src={"/svg/google-icon.svg"}
              alt="google-icon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            className="flex size-12 items-center justify-center rounded-full bg-zinc-300 p-3 transition-colors hover:bg-orange-bg-font-color sm:size-16 sm:p-4"
            href={"#"}>
            <Image
              className="size-full object-contain"
              src={"/svg/outlook-icon.svg"}
              alt="google-icon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            className="flex size-12 items-center justify-center rounded-full bg-zinc-300 p-3 transition-colors hover:bg-orange-bg-font-color sm:size-16 sm:p-4"
            href={"#"}>
            <Image
              className="size-full object-contain"
              src={"/svg/apple-icon.svg"}
              alt="google-icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
