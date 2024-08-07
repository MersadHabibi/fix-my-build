import { ROLE } from "@/enums";

export type TNotification = {
  id: string;
  User: TUser;
  createdAt: Date;
  title: string;
  body?: string;
  link: string;
};

export type TUser = {
  id: string;
  fullName: string;
  profile: string;
  email: string;
  phoneNumber: string;
  role: ROLE;
};
