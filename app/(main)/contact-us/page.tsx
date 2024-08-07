import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Fix My Build",
};

export default function ContactUsPage() {
  return (
    <div className="container h-full space-y-8 pb-20 text-start sm:space-y-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-x-20 gap-y-5 rounded-lg bg-orange-gray px-5 py-7 sm:p-12 lg:flex-row">
        <div className="flex h-80 w-full shrink-0 items-center justify-center pt-10 xs:h-72 xs:px-10 xs:pt-5 sm:size-72 sm:px-0 sm:pt-0 lg:size-64 lg:pt-5">
          <Image
            className="w-full object-cover"
            src={"/svg/contact-us.svg"}
            alt="contact-us-image"
            width={400}
            height={400}
          />
        </div>
        <div>
          <h3 className="text-xl font-bold sm:text-2xl">
            Our telephone number is 0208 145 5102 and our normal business hours
            are 9 am to 5 pm UK time excluding Bank Holidays.{" "}
          </h3>
          <p className="py-7 text-gray-font-color sm:text-lg/6">
            Outside of these times you can leave a voice message with us and we
            will contact you when we`re next online.
          </p>
          <p className="text-lg font-bold sm:text-2xl">
            Our email is:{" "}
            <span className="text-orange-bg-font-color">
              support@fixmybuild.com
            </span>
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-x-20 gap-y-8 rounded-lg bg-blue-font-color p-5 sm:px-12 sm:py-7 lg:flex-row">
        <div className="w-full">
          <p className="text-2xl font-bold text-neutral-200">
            Our company address is
          </p>
          <p className="mt-2 max-w-64 text-lg/5 text-gray-font-color">
            Our team work from our homes or remotely.
          </p>
        </div>
        <div className="w-full">
          <address className="text-[40px]/[50px] font-light not-italic text-neutral-200">
            88 Riverside Drive, Mitcham CR4 4BW
          </address>
        </div>
      </div>
    </div>
  );
}
