"use client";
import Image from "next/image";
import Bg from "../../public/bg.png";
import HeaderBlock from "@/components/Layout/Basic/HeaderBlock";
import BasicLayout from "@/components/Layout/Basic";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  return (
    <BasicLayout>
      <main>
        <Image alt="" src={Bg} fill />
        <div className=" relative z-10 text-black">
          <FormBlock />
          <DataListBlock />
        </div>
      </main>
    </BasicLayout>
  );
}

function FormBlock() {
  return (
    <div className=" flex justify-center items-center">
      <label className="input bg-white  flex items-center gap-2">
        <input
          type="text"
          className=" input  text-black  "
          placeholder="新增待辦事項"
        />

        <span className=" bg-black  rounded-lg p-2 w-10 text-center">+</span>
      </label>
    </div>
  );
}

function DataListBlock() {
  return (
    <div className=" flex justify-center items-center">
      <CategoryBlock />
    </div>
  );
}

function DataList() {
  return (
    <div className="  relative  w-1/3 h-screen   bg-white  z-50  ">
      <h1>681520</h1>
    </div>
  );
}

type CategoryStateProps = "ALL" | "NOT" | "CHECKED";
/**
 * - 類別切換
 */
function CategoryBlock() {
  const [focus, setFocus] = useState<CategoryStateProps>("ALL");

  return (
    <div className="   w-full h-20  mt-2 flex flex-col justify-between items-center">
      <ul className="rounded-tl-xl rounded-tr-xl  flex  w-1/3 mx-auto bg-white p-2 justify-around items-center">
        <li
          onClick={() => {
            setFocus("ALL");
          }}
          className={clsx(
            focus === "ALL" ? " font-bold text-black " : "text-[#9F9A91]",
            " cursor-pointer  font-bold"
          )}
        >
          全部
        </li>
        <li
          onClick={() => {
            setFocus("NOT");
          }}
          className={clsx(
            focus === "NOT" ? " font-bold text-black " : "text-[#9F9A91]",
            " cursor-pointer  font-bold"
          )}
        >
          待完成
        </li>
        <li
          onClick={() => {
            setFocus("CHECKED");
          }}
          className={clsx(
            focus === "CHECKED" ? " font-bold text-black " : "text-[#9F9A91]",
            " cursor-pointer  font-bold"
          )}
        >
          已完成
        </li>
      </ul>
      <ul className="w-1/3 h-[0.9] flex">
        <li
          className={clsx(
            focus === "ALL" ? "bg-black w-1/3 h-[1.9px] " : " w-1/3"
          )}
        ></li>
        <li
          className={clsx(
            focus === "NOT" ? "bg-black w-1/3 h-[1.9px]" : "w-1/3"
          )}
        ></li>
        <li
          className={clsx(
            focus === "CHECKED" ? "bg-black w-1/3 h-[1.9px]" : "w-1/3"
          )}
        ></li>
      </ul>
      <DataList />
    </div>
  );
}
