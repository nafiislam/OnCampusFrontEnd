import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ThemeProvider } from "../components/Posts/Mat_tail_export";
import { NavbarDark } from "../components/Posts/Navbar";
import { SidebarWithContentSeparator } from "../components/Posts/sidebar";
import "./globals.css";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <div className="m-4 sticky top-1 z-10">
            <NavbarDark />
          </div>
          <div className="flex flex-row gap-10">
            <div className="sticky top-20 h-full">
              <SidebarWithContentSeparator />
            </div>
            <div className="mt-8 flex-grow overflow-y-scroll">{children}</div>
          </div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
