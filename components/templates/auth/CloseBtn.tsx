"use client";

import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CloseBtn() {
  const router = useRouter();

  return (
    <button
      className="ml-auto flex items-center gap-x-2 transition-colors hover:text-orange-bg-font-color sm:text-xl"
      onClick={() => router.back()}>
      <span>Close</span>
      <XIcon className="size-5 sm:size-6" />
    </button>
  );
}
