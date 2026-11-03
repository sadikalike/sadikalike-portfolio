import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Sadik P. | Performance Marketer & Website Developer",
  description:
    "Performance Marketer and Website Developer building high-converting digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />

        <div className="flex-grow overflow-x-hidden">{children}</div>

        <Footer />
      </body>
    </html>
  );
}