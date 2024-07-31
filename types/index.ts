import { ROLE } from "@/enums";

export type TNotification = {
  id: string;
  User: TUser;
  createdAt: Date;
  body: string;
};

export type TUser = {
  id: string;
  fullName: string;
  profile: string;
  email: string;
  phoneNumber: string;
  role: ROLE;
};
