import { ROLE } from "@/enums";
import { TUser } from "@/types";

export const fakeUsers: TUser[] = [
  {
    id: "1",
    fullName: "firstName lastName",
    profile: "/images/profile.jfif",
    email: "Email@gmail.com",
    phoneNumber: "09149149140",
    role: ROLE.CUSTOMER,
  },
  {
    id: "2",
    fullName: "firstName2 lastName2",
    profile: "",
    email: "Email2@gmail.com",
    phoneNumber: "09149149140",
    role: ROLE.TRADES_PERSON,
  },
];
