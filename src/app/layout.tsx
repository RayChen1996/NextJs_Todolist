import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Bg from "../../public/bg.png";
import HeaderBlock from "@/components/Layout/Basic/HeaderBlock";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TodoList App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
