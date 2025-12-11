import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import Drawer from "../components/layout/Drawer";
import Header from "../components/layout/Header";
import localFont from "next/font/local";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: [
    {
      path: "../assets/fonts/ClashDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/ClashDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "../assets/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
    },
    {
      path: "../assets/fonts/ClashDisplay-Bold.otf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-clash-display",
});

const chillax = localFont({
  src: [
    {
      path: "../assets/fonts/Chillax-Regular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Chillax-Medium.otf",
      weight: "500",
    },
    {
      path: "../assets/fonts/Chillax-Bold.otf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-chillax",
});

export const metadata: Metadata = {
  title: "Chainroll Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabin.variable} ${clashDisplay.variable} ${chillax.variable} antialiased flex`}
      >
        <Drawer />
        <div className="w-full flex flex-col">
          <Header />
          <div className="h-full w-full py-5 px-3 pr-10 bg-gray-50">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
