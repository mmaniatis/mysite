import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./ui/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mike maniatis"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-sans">
          <TopNav />
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
              {/* <div className="w-full flex-none md:w-64">
                <SideNav />
              </div> */}
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
