import Drawer from "@/src/components/layout/Drawer";
import Header from "@/src/components/layout/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Drawer />
      <div className="w-full flex flex-col h-screen overflow-y-auto ">
        <Header />
        <div className="w-full h-full py-5 px-5 pr-10 bg-gray-50/80">
          {children}
        </div>
      </div>
    </>
  );
}
