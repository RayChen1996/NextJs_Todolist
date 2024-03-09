"use client";
import React from "react";
import Link from "next/link";
import BasicLayout from "@/components/Layout/Basic";
import Image from "next/image";
import Bg from "../../../public/singinBg.png";
import Title from "../../../public/TitleLogo.svg";
import { useRouter } from "next/navigation";
export default function Page() {
  const { push } = useRouter();
  return (
    <BasicLayout>
      <main className="  flex">
        <div className="hidden md:flex   w-1/2 py-10    justify-center flex-col items-center  ">
          <Image alt="" className=" mb-3" src={Title} />
          <Image alt="" src={Bg} />
        </div>
        <div className="w-full text-black md:w-1/2 flex justify-center gap-10 items-center flex-col">
          <h1 className=" text-2xl font-bold">最實用的線上代辦事項服務</h1>

          <form className=" " action="">
            <label className="font-bold" htmlFor="mail">
              Email
            </label>
            <input
              id="mail"
              type="text"
              placeholder="請輸入Email"
              className="input input-bordered w-full max-w-xs bg-white"
            />
            <br />
            <div className=" mt-4"></div>
            <label className="font-bold" htmlFor="password">
              密碼
            </label>
            <input
              id="password"
              type="password"
              placeholder="請輸入密碼"
              className="input input-bordered w-full max-w-xs bg-white"
            />
            <br />
            <div className=" mt-4"></div>

            <div className="flex justify-center items-center flex-col">
              <Link className="  font-bold" href={"/"}>
                <button type="button" className="btn">
                  登入
                </button>
              </Link>

              <br />

              <Link className="  font-bold" href={"/"}>
                註冊帳號
              </Link>
            </div>
          </form>
        </div>
      </main>
    </BasicLayout>
  );
}
