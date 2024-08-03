import { z, ZodType } from "zod";

export const UserSchema: ZodType<FormData> = z
  .object({
    fullName: z
      .string()
      .min(6, { message: "Full Name is too short" })
      .max(25, { message: "Full Name is too log" }),
    password: z
      .string()
      .min(6, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
    email: z.string().email(),
    mobilePhone: z
      .string()
      .min(10, { message: "mobilePhone is too short" })
      .max(15, { message: "mobilePhone is too long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });

export type FormData = {
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
  mobilePhone: string;
};

export type ValidFieldNames =
  | "fullName"
  | "password"
  | "confirmPassword"
  | "email"
  | "mobilePhone";
