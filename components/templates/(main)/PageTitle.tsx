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
        url: "/",
      },
      {
        title: "Notifications",
        url: "/notification",
        lastUrl: true,
      },
    ],
  },
  {
    url: "/contact-us",
    title: "CONTACT US",
    breadCrumb: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Contact us",
        url: "/contact-us",
        lastUrl: true,
      },
    ],
  },
  {
    url: "/about-us",
    title: "ABOUT US",
    breadCrumb: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About us",
        url: "/about-us",
        lastUrl: true,
      },
    ],
  },
  {
    url: "/privacy-policy",
    title: "PRIVACY POLICY",
    breadCrumb: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Privacy policy",
        url: "/privacy-policy",
        lastUrl: true,
      },
    ],
  },
];

export default function PageTitle() {
  const pathname = usePathname();

  const thisUrlTitle = titles.find((item) => item.url === pathname);

  if (!thisUrlTitle) return null;

  return (
    <div className="py-10">
      <h1 className="line-clamp-1 text-center text-2xl font-bold sm:text-[40px]/[50px]">
        {thisUrlTitle.title}
      </h1>
      <div className="flex w-full justify-center">
        <div className="breadcrumbs mx-auto py-0 sm:text-xl">
          <ul>
            {thisUrlTitle.breadCrumb.map((item, index) => (
              <li
                key={item.title}
                className={cn(
                  "text-orange-bg-font-color before:!h-2 before:!w-2 before:!border-r-2 before:!border-t-2 before:text-gray-font-color before:!opacity-100",
                  item.lastUrl && "text-gray-font-color",
                  index === 0 && "before:!w-0",
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
