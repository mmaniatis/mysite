import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./ui/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "American Coding"
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
          <div className="flex flex-col md:flex-row md:overflow-hidden">
            <div className="flex-grow md:overflow-y-auto">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
