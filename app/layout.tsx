import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ThemeProvider } from "../components/Mat_tail_export";
import { SidebarWithContentSeparator } from "../components/sidebar";
import { NavbarDark } from "../components/Navbar";
import SessionProviderWrapper from "@/utils/sessionProviderWrapper";
import { getAccessToken } from '@/utils/sessionTokenAccessor'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oncampus",
  description: "Once a Buetian, always a Buetian",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await getAccessToken();
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <ThemeProvider>
          <body className={inter.className}>
            {token ? (
              <div className="m-4">
                <NavbarDark />
                <div className="grid grid-cols-6 gap-1">
                  <div className="col-span-1">
                    <SidebarWithContentSeparator />
                  </div>
                  <div className="col-span-5">
                    <EdgeStoreProvider>{children}</EdgeStoreProvider>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <EdgeStoreProvider>{children}</EdgeStoreProvider>
              </div>
            )}
          </body>
        </ThemeProvider>
      </html>
    </SessionProviderWrapper>
  );
}

