"use client";

import React from "react";

import Image from "next/image";

import Bg from "../../../../public/bg.png";
import HeaderBlock from "./HeaderBlock";
import Footer from "@/components/Layout/Basic/Footer/index";
interface BasicLayoutProps {
  children?: React.ReactNode;
}

/** - 基本外框 */
export default function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <div className="flex flex-col bg-[#FFD370]  min-h-screen  ">
      <header>
        <HeaderBlock />
      </header>

      <main className="flex-1">{children}</main>
      <Footer />

      {/* <Image
        alt="bg"
        sizes="100vw"
        fill
        className="object-cover object-center"
        src={Bg}
      /> */}
    </div>
  );
}
