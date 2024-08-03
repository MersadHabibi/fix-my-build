import { FRoboto } from "@/config/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={cn(
          "h-dvh w-screen overflow-x-hidden !bg-white bg-gradient-conic text-center font-medium text-blue-font-color lg:text-start",
          FRoboto.className,
        )}>
        {children}
      </body>
    </html>
  );
}
