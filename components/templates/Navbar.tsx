import { UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-fit w-full shrink-0 border-b">
      <nav className="container flex w-full items-center justify-between py-4 text-base sm:text-xl">
        <div className="hidden w-full items-center gap-x-8 lg:flex">
          <Link href={"/about-us"} className="hover:text-orange-bg-font-color">
            About us
          </Link>
          <Link
            href={"/contact-us"}
            className="hover:text-orange-bg-font-color">
            Contact us
          </Link>
        </div>
        <div className="h-7 sm:h-10 lg:w-full">
          <Image
            className="size-full object-contain"
            src={"/svg/logo.svg"}
            alt="Logo"
            width={300}
            height={40}
          />
        </div>
        <div className="flex items-center justify-end gap-x-4 sm:gap-x-8 lg:w-full">
          <Link href={"/auth/login"} className="xs:block hidden">
            <button className="hover:text-orange-bg-font-color flex items-center gap-x-1.5 transition-colors">
              <UserIcon className="size-5 sm:size-6" />
              Login
            </button>
          </Link>
          <Link href={"/auth/register"} className="xs:block hidden">
            <button className="hover:bg-orange-bg-font-color hover:text-white-font-color rounded-full bg-zinc-300 px-4 py-1 transition-colors">
              Register
            </button>
          </Link>
          <Link href={"/auth/login"} className="xs:hidden">
            <button className="hover:bg-orange-bg-font-color hover:text-white-font-color flex items-center gap-x-1.5 rounded-full bg-zinc-300 px-4 py-1 transition-colors">
              <UserIcon className="size-5 sm:size-6" />
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
