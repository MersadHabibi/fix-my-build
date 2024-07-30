import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FRoboto } from "@/config/fonts";
import Navbar from "@/components/templates/Navbar";
import Footer from "@/components/templates/Footer";

export const metadata: Metadata = {
  title: "Fix My Build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={cn(
          "text-blue-font-color h-dvh w-screen overflow-x-hidden !bg-white bg-gradient-conic text-center font-medium lg:text-left",
          FRoboto.className,
        )}>
        <div className="relative grid h-full gap-y-0">
          <Navbar />
          <main className="my-auto h-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
