import ResetPasswordVerificationForm from "@/components/templates/auth/reset-password-verification/ResetPasswordVerificationForm";
import { emailRegex } from "@/lib/utils";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { phoneNumber?: string; email?: string };
}): Promise<Metadata> {
  if (searchParams.email)
    return {
      title: "Email Verification | Fix My Build",
    };
  else if (searchParams.phoneNumber)
    return {
      title: "SMS Verification | Fix My Build",
    };
  else
    return {
      title: "Reset Password Verification | Fix My Build",
    };
}

export default function ResetPasswordVerificationPage({
  searchParams,
}: {
  searchParams: { phoneNumber?: string; email?: string };
}) {
  if (
    !emailRegex.test(searchParams.email || "") &&
    searchParams.phoneNumber?.length !== 11
  )
    return redirect("/auth/forget-password");

  return (
    <div className="mx-auto w-full max-w-[550px] py-8 lg:max-w-[550px]">
      <h1 className="mb-10 text-start text-2xl font-bold min-[390px]:text-3xl sm:mb-7 sm:text-[40px]">
        {searchParams.email ? "EMAIL VERIFICATION" : "SMS VERIFICATION"}
      </h1>
      {searchParams.email ? (
        <p className="mb-4 text-start text-xl font-normal text-gray-font-color">
          A text message with a six digit verification code has been sent to
          your email{" "}
          <span className="font-medium">
            {searchParams.email.replace(
              /(\w{3})[\w.-]+@([\w.]+\w)/,
              "$1***@$2",
            )}
          </span>
        </p>
      ) : (
        <p className="mb-4 text-start text-xl font-normal text-gray-font-color">
          A text message with a six digit verification code has been sent to
          your phone number ending in
          <span className="font-medium">
            {" "}
            X X X X X X {searchParams.phoneNumber?.slice(-4)}
          </span>
        </p>
      )}
      <ResetPasswordVerificationForm />
    </div>
  );
}
