"use client";
import Image from "next/image";
import Bg from "../../public/bg.png";
import HeaderBlock from "@/components/Layout/Basic/HeaderBlock";
import BasicLayout from "@/components/Layout/Basic";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ClosePng from "../../public/close1.png";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  Controller,
  useFormContext,
} from "react-hook-form";

import axios from "axios";

export default function Home() {
  const methods = useForm<{ tasks: Task[] }>({
    defaultValues: {
      tasks: [],
    },
  });

  const { control, handleSubmit } = methods;

  const onSubmit: SubmitHandler<{ tasks: Task[] }> = (data) => {
    // Handle form submission if needed
    console.log(data);
  };

  return (
    <BasicLayout>
      <FormProvider {...methods}>
        <main>
          <Image alt="" src={Bg} fill />
          <div className=" relative z-10 text-black">
            <FormBlock />
            <DataListBlock />
          </div>
        </main>
      </FormProvider>
    </BasicLayout>
  );
}

function FormBlock() {
  const [newTask, setNewTask] = useState<string>("");

  const methods = useForm<{ tasks: Task[] }>({
    defaultValues: {
      tasks: [],
    },
  });
  const { control, handleSubmit } = methods;

  const onSubmit: SubmitHandler<{ tasks: Task[] }> = (data) => {
    // Handle form submission if needed
    console.log(newTask);
    console.log(data);
    handleClickAdd(newTask);
  };

  const handleClickAdd = (task: string) => {
    axios
      .post(`https://backend.raychen.co.uk/api/todos`, {
        title: "" + task,
      })
      .then((res) => {
        console.log(res);
        setNewTask("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="tasks"
          control={control}
          render={({ field }) => (
            <label className="input bg-white  flex items-center gap-2">
              <input
                type="text"
                className=" input  text-black  "
                placeholder="新增待辦事項"
                {...field}
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />

              <button type="submit">
                <span className=" bg-black  cursor-pointer rounded-lg p-2 w-10 text-center font-bold text-white">
                  +
                </span>
              </button>
            </label>
          )}
        />
      </form>
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
interface Task {
  task: string;
  completed: boolean;
}

interface TodoSchema {
  id: number;
  title: string;
  description: string;
}
function DataList() {
  const [todoList, setList] = useState<Array<TodoSchema>>([]);
  const { control, handleSubmit, register } = useFormContext(); // 使用 useFormContext 來獲取 FormProvider 提供的 context

  const { fields } = useFieldArray({
    control,
    name: "tasks",
  });

  const handleClickDelete = (id: number) => {
    console.log(`del = ${id}`);
    axios
      .delete(`https://backend.raychen.co.uk/api/todos/${id}`)
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        fetchData();
      });
  };
  const fetchData = () => {
    axios.get("https://backend.raychen.co.uk/api/todos").then((res) => {
      console.log(res);
      if (Array.isArray(res?.data.todos)) {
        setList(res.data.todos);
      } else {
        console.error(
          "Data received from the API is not an array:",
          res.data.todos
        );
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="  relative  w-2/3 md:w-1/3 h-screen   bg-white  z-50  ">
      <ul>
        {todoList.map((_task, index) => (
          <li key={index} className="h-20 flex justify-around items-center">
            <span className="flex justify-center gap-5 h-full items-center">
              <input
                id={`chx${index}`}
                type="checkbox"
                className="checkbox"
                {...register(`tasks.${index}.completed` as const)}
              />
              <label htmlFor={`chx${index}`}>{_task?.title}</label>
            </span>
            <span
              onClick={() => {
                handleClickDelete(_task.id);
              }}
            >
              <Image alt="" src={ClosePng} />
            </span>
          </li>
        ))}
      </ul>
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
      <ul className="rounded-tl-xl rounded-tr-xl  flex  w-2/3 md:w-1/3 mx-auto bg-white p-2 justify-around items-center">
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
      <ul className="w-2/3 md:w-1/3  h-[0.9] flex">
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
