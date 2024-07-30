import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FRoboto } from "@/config/fonts";
import Navbar from "@/components/templates/Navbar";

export const metadata: Metadata = {
  title: "Fix My Build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-blue-font-color min-h-dvh !bg-white bg-gradient-conic font-medium",
          FRoboto.className,
        )}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
