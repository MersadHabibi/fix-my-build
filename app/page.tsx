import Image from "next/image";

export default function Home() {
  return (
    <section className="xs:px-10 container h-full py-5 sm:py-10 lg:py-20">
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
          <p className="text-gray-font-color py-4 tracking-wide xl:py-6 xl:text-lg">
            118 reputable builders registered on our platform so far.
          </p>
          <div className="flex flex-col items-center gap-x-3 gap-y-4 pt-2 sm:flex-row xl:gap-x-6">
            <button className="bg-blue-font-color text-white-font-color hover:bg-orange-bg-font-color btn w-full rounded-full px-10 tracking-wide xl:btn-wide sm:w-auto">
              Start your project
            </button>
            <button className="border-orange-bg-font-color text-orange-bg-font-color hover:bg-orange-bg-font-color hover:text-white-font-color btn w-full rounded-full px-10 tracking-wide xl:btn-wide sm:w-auto">
              Continue your project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
