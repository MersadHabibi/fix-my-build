import { z, ZodType } from "zod";

export const UserSchema: ZodType<FormData> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

export type FormData = {
  email: string;
  password: string;
};

export type ValidFieldNames = "email" | "password";
