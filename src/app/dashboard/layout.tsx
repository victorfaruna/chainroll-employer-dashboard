import Drawer from "@/src/components/layout/Drawer";
import Header from "@/src/components/layout/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full bg-linear-to-r from-gray-50 to-gray-50 relative">
      <Drawer />

      <div className="w-full flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="w-full h-full py-0 px-5 pr-10 ">{children}</div>
        {/* <div className="size-[900px] rounded-full bg-accent/5 z-[-1] blur-[200px] absolute top-[-200px] right-[-200px]"></div> */}
      </div>
    </div>
  );
}
