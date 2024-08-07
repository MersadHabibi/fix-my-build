import { TNotification } from "@/types";
import { fakeUsers } from "./fakeUsers";

export const fakeNotifications: TNotification[] = [
  {
    id: "1",
    createdAt: new Date(),
    User: fakeUsers[0],
    title: "Jenny Wilson has approved your project",
    link: "#",
  },
  {
    id: "2",
    createdAt: new Date(),
    User: fakeUsers[1],
    title: "Estimates received",
    body: "Notes from reviewer:  Please could you include a photo of the existing lock to be replaced.",
    link: "#",
  },
];
