"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TTitles = {
  url: string;
  title: string;
  breadCrumb: (
    | {
        title: string;
        url: string;
        lastUrl?: undefined;
      }
    | {
        title: string;
        url: string;
        lastUrl: boolean;
      }
  )[];
}[];

const titles: TTitles = [
  {
    url: "/notifications",
    title: "NOTIFICATIONS",
    breadCrumb: [
      {
        title: "Home",
        url: "/home",
      },
      {
        title: "Notifications",
        url: "/notification",
        lastUrl: true,
      },
    ],
  },
];

export default function PageTitle() {
  const pathname = usePathname();

  console.log(pathname);

  const thisUrlTitle = titles.find((item) => item.url === pathname);

  if (!thisUrlTitle) return null;

  return (
    <div className="py-10">
      <h1 className="text-center text-[40px] font-bold">
        {thisUrlTitle.title}
      </h1>
      <div className="flex w-full justify-center">
        <div className="breadcrumbs mx-auto py-0 text-xl">
          <ul>
            {thisUrlTitle.breadCrumb.map((item) => (
              <li
                key={item.title}
                className={cn(
                  "text-orange-bg-font-color before:!h-2 before:!w-2 before:!border-r-2 before:!border-t-2 before:text-gray-font-color before:!opacity-100",
                  item.lastUrl && "text-gray-font-color",
                )}>
                {item.lastUrl ? (
                  <p>{item.title}</p>
                ) : (
                  <Link href={item.url}>{item.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
