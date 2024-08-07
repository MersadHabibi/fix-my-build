import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-between gap-y-4 py-7 text-zinc-600 sm:flex-row">
      <div className="flex items-center gap-x-6">
        <Link href={"/privacy"} className="hover:text-orange-bg-font-color">
          Privacy policy
        </Link>
        <Link href={"/terms"} className="hover:text-orange-bg-font-color">
          Terms
        </Link>
      </div>
      <p className="text-xs">
        Copyright © 2022 Fix My Build Ltd. All Rights Reserved.
      </p>
    </footer>
  );
}
