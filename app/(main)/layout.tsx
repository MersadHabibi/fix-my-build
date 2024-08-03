import Footer from "@/components/templates/Footer";
import Navbar from "@/components/templates/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative grid h-full gap-y-0">
      <Navbar />
      <main className="my-auto h-full">{children}</main>
      <Footer />
    </div>
  );
}
