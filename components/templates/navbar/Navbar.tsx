import Avatar from "@/components/modules/Avatar";
import { ChevronDownIcon, MessageSquareTextIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavbarNotification from "./NavbarNotification";
import NavbarProfile from "./NavbarProfile";
import Logo from "@/components/modules/Logo";

const IS_LOGIN = false;

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
          <Logo className="size-full object-contain" width={300} height={40} />
        </div>
        {IS_LOGIN ? (
          <div className="flex items-center justify-end gap-x-4 sm:gap-x-5 lg:w-full">
            <Link href={"/messages"} className="h-6 pt-0.5 sm:h-8">
              <button className="indicator">
                <span className="indicator-item -right-1 -top-1.5 flex size-4 items-center justify-center rounded-full bg-orange-bg-font-color text-[9px] text-white-font-color sm:-right-1.5 sm:-top-2 sm:size-5 sm:text-xs">
                  1
                </span>
                <MessageSquareTextIcon className="size-6 sm:size-8" />
              </button>
            </Link>
            <NavbarNotification />
            <NavbarProfile />
          </div>
        ) : (
          <div className="flex items-center justify-end gap-x-4 sm:gap-x-8 lg:w-full">
            <Link href={"/auth/login"} className="hidden xs:block">
              <button className="flex items-center gap-x-1.5 transition-colors hover:text-orange-bg-font-color">
                <UserIcon className="size-5 sm:size-6" />
                Login
              </button>
            </Link>
            <Link href={"/auth/register"} className="hidden xs:block">
              <button className="rounded-full bg-zinc-300 px-4 py-1 transition-colors hover:bg-orange-bg-font-color hover:text-white-font-color">
                Register
              </button>
            </Link>
            <Link href={"/auth/login"} className="xs:hidden">
              <button className="flex items-center gap-x-1.5 rounded-full bg-zinc-300 px-4 py-1 transition-colors hover:bg-orange-bg-font-color hover:text-white-font-color">
                <UserIcon className="size-5 sm:size-6" />
                Login
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
