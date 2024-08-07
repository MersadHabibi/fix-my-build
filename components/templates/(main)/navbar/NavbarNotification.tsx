import Avatar from "@/components/modules/Avatar";
import { fakeNotifications } from "@/data/fakeNotifications";
import { BellIcon, UserIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function NavbarNotification() {
  return (
    <div className="dropdown dropdown-bottom h-6 pt-0.5 sm:dropdown-end sm:h-8">
      <button tabIndex={0} className="indicator">
        <span className="indicator-item -right-1 -top-1.5 flex size-4 items-center justify-center rounded-full bg-orange-bg-font-color text-[9px] text-white-font-color sm:-right-1.5 sm:-top-2 sm:size-5 sm:text-xs">
          1
        </span>
        <BellIcon className="size-6 sm:size-8" />
      </button>
      <div
        tabIndex={0}
        className="dropdown-content -right-20 z-[1] w-80 rounded-box bg-white text-base shadow-[0_4px_13px_0px_rgba(0,0,0,0.15)] sm:w-96">
        <div className="flex items-center justify-between border-b border-zinc-300 px-6 py-4">
          <p>Notification</p>
          <button className="text-orange-bg-font-color">Close all</button>
        </div>
        <div className="space-y-6 py-6">
          {fakeNotifications.map((notification) => (
            <Link
              key={notification.id}
              href={"#"}
              className="group flex items-center gap-x-4 px-6">
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
                  {notification.body}
                </p>
                <p className="text-sm text-zinc-500">
                  {moment(notification.createdAt, "YYYYMMDD").fromNow()}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center border-t border-zinc-300 py-4">
          <Link href={"/notifications"} className="text-orange-bg-font-color">
            View all notification
          </Link>
        </div>
      </div>
    </div>
  );
}
