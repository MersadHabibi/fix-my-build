import { TNotification } from "@/types";
import { fakeUsers } from "./fakeUsers";

export const fakeNotifications: TNotification[] = [
  {
    id: "1",
    createdAt: new Date(),
    User: fakeUsers[0],
    body: "Jenny Wilson has approved your project",
  },
  {
    id: "2",
    createdAt: new Date(),
    User: fakeUsers[1],
    body: "Estimates received",
  },
];
