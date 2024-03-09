"use client";
import React from "react";
import TitleSvg from "../../../../../public/TitleLogo.svg";
import Image from "next/image";

export default function HeaderBlock() {
  return (
    <div className="p-2 z-30 text-black relative flex justify-between">
      <Image alt="" src={TitleSvg} />
      <DisplayAccountBlock />
    </div>
  );
}

function DisplayAccountBlock() {
  return (
    <ul className=" cursor-pointer flex gap-2">
      <li>王小明的代辦</li>
      <li>登出</li>
    </ul>
  );
}
