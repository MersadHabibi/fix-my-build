import Footer from "@/components/templates/(main)/Footer";
import Navbar from "@/components/templates/(main)/navbar/Navbar";
import PageTitle from "@/components/templates/(main)/PageTitle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-full bg-neutral-100">
      <div className="relative flex h-full flex-col justify-between gap-y-0">
        <Navbar />
        <main className="flex h-full flex-col justify-center bg-neutral-100">
          <PageTitle />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
