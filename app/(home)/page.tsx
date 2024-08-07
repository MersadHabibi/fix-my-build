import Footer from "@/components/templates/(main)/Footer";
import Navbar from "@/components/templates/(main)/navbar/Navbar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | Fix My Build",
};

export default function Home() {
  return (
    <div className="grid h-full">
      <div className="relative flex h-full flex-col justify-between gap-y-0">
        <Navbar />
        <main className="flex h-full flex-col justify-center">
          <section className="container h-fit py-5 xs:px-10 sm:py-10 lg:py-16">
            <div className="hero-content w-full max-w-none flex-col !justify-between gap-y-8 sm:gap-y-14 lg:flex-row-reverse xl:gap-x-5">
              <div className="w-full shrink-0 sm:w-[420px] xl:w-[540px] 2xl:w-[600px]">
                <Image
                  className="w-full object-contain"
                  src={"/svg/hero.svg"}
                  alt="Hero Image"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="w-fit shrink-0">
                <h1 className="mx-auto max-w-[400px] text-3xl font-bold sm:text-5xl/[60px] lg:mx-0 xl:max-w-[600px] xl:text-7xl/[80px]">
                  Good quality work at sensible prices
                </h1>
                <p className="py-4 tracking-wide text-gray-font-color xl:py-6 xl:text-lg">
                  118 reputable builders registered on our platform so far.
                </p>
                <div className="flex flex-col items-center gap-x-3 gap-y-4 pt-2 sm:flex-row xl:gap-x-6">
                  <button className="btn w-full rounded-full bg-blue-font-color px-10 tracking-wide text-white-font-color xl:btn-wide hover:bg-orange-bg-font-color sm:w-auto">
                    Start your project
                  </button>
                  <button className="btn w-full rounded-full border-orange-bg-font-color px-10 tracking-wide text-orange-bg-font-color xl:btn-wide hover:bg-orange-bg-font-color hover:text-white-font-color sm:w-auto">
                    Continue your project
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
