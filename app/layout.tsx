import Footer from "@/components/Footer";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/Mat_tail_export";
import { SidebarWithContentSeparator } from "../components/sidebar";
import "./globals.css";

import NavbarWrapper from "@/components/NavbarWrapper";
import SessionProviderWrapper from "@/utils/sessionProviderWrapper";
import { getAccessToken } from "@/utils/sessionTokenAccessor";

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
              <div className="">
                <div className="m-4 sticky top-1 z-10 ">
                  <NavbarWrapper />
                </div>
                <div className="flex flex-row gap-10">
                  <div className="hidden lg:block fixed z-20 inset-0 top-[5.8125rem] right-auto w-[19rem] overflow-y-auto">
                    <SidebarWithContentSeparator />
                  </div>
                  <div className="mt-8 flex-grow overflow-y-scroll pl-72">
                    <EdgeStoreProvider>{children}</EdgeStoreProvider>
                <Footer />
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
