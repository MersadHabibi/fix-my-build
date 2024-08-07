"use client";

import { TNotification } from "@/types";
import moment from "moment";
import Image from "next/image";
import Avatar from "./Avatar";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NotificationItem({
  notification,
  showBody,
  className,
}: {
  notification: TNotification;
  showBody?: boolean;
  className?: string;
}) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "group flex cursor-pointer items-center gap-x-4",
        className,
      )}
      onClick={() => {
        router.push(notification.link);
      }}>
      <Avatar className="size-10">
        {notification.User.profile ? (
          <Image
            src={notification.User.profile}
            alt="Profile"
            width={100}
            height={100}
          />
        ) : (
          <Image
            src={"/images/profile-placeholder.png"}
            alt="Profile"
            width={100}
            height={100}
          />
        )}
      </Avatar>
      <div className="text-start">
        <p className="line-clamp-1 transition-colors group-hover:text-orange-bg-font-color">
          {notification.title}
        </p>
        <p className="text-sm text-zinc-500">
          {moment(notification.createdAt, "YYYYMMDD").fromNow()}
        </p>
        {showBody ? (
          notification.body ? (
            <p className="mt-0.5 line-clamp-2 text-sm font-normal text-[#828282]">
              {notification.body}
            </p>
          ) : null
        ) : null}
      </div>
    </div>
  );
}
