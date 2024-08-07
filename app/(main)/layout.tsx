import Footer from "@/components/templates/(main)/Footer";
import Navbar from "@/components/templates/(main)/navbar/Navbar";
import PageTitle from "@/components/templates/(main)/PageTitle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative grid h-full gap-y-0">
      <Navbar />
      <main className="my-auto h-full">
        <PageTitle />
        {children}
      </main>
      <Footer />
    </div>
  );
}
