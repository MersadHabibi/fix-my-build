import NavLink from "@/components/modules/NavLink";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white">
      <footer className="container sticky bottom-0 top-full flex flex-col items-center justify-between gap-y-4 py-7 text-zinc-600 sm:flex-row">
        <div className="flex items-center gap-x-6">
          <NavLink
            href={"/privacy-policy"}
            className="hover:text-orange-bg-font-color [&.active]:text-orange-bg-font-color">
            Privacy policy
          </NavLink>
          <NavLink
            href={"/terms"}
            className="hover:text-orange-bg-font-color [&.active]:text-orange-bg-font-color">
            Terms
          </NavLink>
        </div>
        <p className="text-xs">
          Copyright © 2022 Fix My Build Ltd. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
