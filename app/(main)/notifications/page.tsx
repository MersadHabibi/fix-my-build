import NotificationItem from "@/components/modules/NotificationItem";
import { fakeNotifications } from "@/data/fakeNotifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notification | Fix My Build",
};

export default function page() {
  return (
    <div className="container h-full text-start">
      <div className="mx-auto max-w-5xl rounded-lg bg-white px-5 py-7 sm:p-12">
        <h2 className="text-2xl font-bold">View all notifications</h2>
        <div className="flex flex-col space-y-5 pt-5">
          {fakeNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              showBody
            />
          ))}
        </div>
      </div>
    </div>
  );
}
