import { z, ZodType } from "zod";

export const PasswordSchema: ZodType<FormData> = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(32, { message: "Password is too long" }),
    retypePassword: z.string(),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: "Passwords do not match",
    path: ["retypePassword"], // path of error
  })
  .superRefine(({ password }, checkPassComplexity) => {
    const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
    const containsLowercase = (ch: string) => /[a-z]/.test(ch);
    const containsSpecialChar = (ch: string) =>
      /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
    let countOfUpperCase = 0,
      countOfLowerCase = 0,
      countOfNumbers = 0,
      countOfSpecialChar = 0;
    for (let i = 0; i < password.length; i++) {
      let ch = password.charAt(i);
      if (!isNaN(+ch)) countOfNumbers++;
      else if (containsUppercase(ch)) countOfUpperCase++;
      else if (containsLowercase(ch)) countOfLowerCase++;
      else if (containsSpecialChar(ch)) countOfSpecialChar++;
    }
    if (countOfLowerCase < 1 || countOfUpperCase < 1) {
      checkPassComplexity.addIssue({
        code: "custom",
        message:
          "password must has one upper case character and one lower case character",
        path: ["password"],
      });
    }
  });

export type FormData = {
  password: string;
  retypePassword: string;
};

export type ValidFieldNames = "email" | "password";
