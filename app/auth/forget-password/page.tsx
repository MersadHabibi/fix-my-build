import ForgetPasswordForm from "@/components/templates/auth/forget-password/ForgetPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forget Password | Fix My Build",
};

export default function ForgetPasswordPage() {
  return (
    <div className="mx-auto w-full max-w-[550px] py-8 lg:max-w-[550px]">
      <h1 className="mb-10 text-start text-2xl font-bold min-[390px]:text-3xl sm:mb-14 sm:text-[40px]">
        Forgot password?
      </h1>
      <ForgetPasswordForm />
    </div>
  );
}
