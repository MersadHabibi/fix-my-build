import SetNewPasswordForm from "@/components/templates/auth/set-new-password/SetNewPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Set New Password | Fix My Build",
};

export default function SetNewPasswordPage() {
  return (
    <div className="mx-auto w-full max-w-[550px] py-8 lg:max-w-[550px]">
      <h1 className="mb-10 text-start text-3xl font-bold sm:mb-10 sm:text-[40px]">
        SET NEW PASSWORD
      </h1>
      <SetNewPasswordForm />
    </div>
  );
}
