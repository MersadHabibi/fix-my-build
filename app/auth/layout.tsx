import Logo from "@/components/modules/Logo";
import CloseBtn from "@/components/templates/auth/CloseBtn";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative grid h-dvh items-stretch lg:grid-cols-2">
      <div className="hidden h-full w-full flex-col justify-between bg-[#BFBAB2] px-12 py-10 lg:flex">
        <div className="w-fit lg:h-11 xl:h-12">
          <Logo className="size-full object-contain" width={300} height={40} />
        </div>
        <div className="mx-auto w-[400px] pb-14 pt-10 xl:w-[450px] xl:pb-20 xl:pt-16">
          <Image
            className="size-full object-contain"
            src={"/svg/auth.svg"}
            alt="Auth image"
            width={500}
            height={600}
          />
        </div>
        <div>
          <h2 className="mb-4 text-[40px] font-bold">Welcome Back</h2>
          <p className="mb-2 text-xl font-bold text-gray-font-color">
            Good quality work at sensible prices
          </p>
          <p className="font-normal text-gray-font-color">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat
          </p>
        </div>
      </div>
      <div className="flex h-full w-full flex-col justify-between px-7 py-7 sm:px-12 sm:py-10">
        <div className="flex items-center justify-between">
          <Logo
            className="h-6 w-fit sm:h-7 lg:hidden"
            width={300}
            height={40}
          />
          <CloseBtn />
        </div>
        {children}
        <div className="pt-5 text-center">
          <p className="text-xs font-bold text-zinc-600">
            Copyright © 2022 Fix My Build Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
