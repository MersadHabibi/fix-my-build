import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FRoboto } from "@/config/fonts";

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
      <body className={cn("min-h-dvh", FRoboto.className)}>{children}</body>
    </html>
  );
}
