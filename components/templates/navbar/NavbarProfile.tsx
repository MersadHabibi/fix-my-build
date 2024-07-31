import Avatar from "@/components/modules/Avatar";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarProfile() {
  return (
    <div className="dropdown dropdown-end dropdown-bottom">
      <button
        tabIndex={1}
        className="flex items-center gap-x-2 rounded-full bg-neutral-200 py-1 pl-1 pr-2 transition-colors hover:bg-neutral-400 sm:py-1.5 sm:pl-1.5">
        <Avatar className="w-7">
          <Image
            src={"/images/profile.jfif"}
            alt="Profile"
            width={30}
            height={30}
          />
        </Avatar>
        <ChevronDownIcon className="size-5" />
      </button>
      <div
        tabIndex={1}
        className="dropdown-content z-[1] w-40 rounded-box bg-white text-start text-base shadow-[0_4px_13px_0px_rgba(0,0,0,0.15)]">
        <div className="border-b border-zinc-300 p-4">
          <p className="line-clamp-1">Jenny Wilson</p>
          <p className="text-xs text-gray-font-color">Customer</p>
        </div>
        <ul className="space-y-2 p-4">
          <li className="hover:text-orange-bg-font-color">
            <Link href="#">My profile</Link>
          </li>
          <li className="hover:text-orange-bg-font-color">
            <Link href="#">My projects</Link>
          </li>
          <li className="hover:text-orange-bg-font-color">
            <Link href="#">New project</Link>
          </li>
          <li className="hover:text-orange-bg-font-color">
            <Link href="#">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
