import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar/navbar";
import NavbarMobile from "@/components/common/navbar/navbar-mobile";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello, I'm Afif 👋",
  description: "Graphic Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos.png" sizes="any" />
      </head>

      <body className={sora.className}>
        {/* Mobile Nav */}
        <NavbarMobile />

        {/* Dekstop and Tablet Nav */}
        <Navbar />

        <main className="max-w-5xl mx-auto p-5 lg:pt-0 pt-[50px]">{children}</main>
      </body>
    </html>
  );
}
