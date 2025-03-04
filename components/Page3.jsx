"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function Page3() {
  const nav = useRouter();
  const [state, setState] = useState([
    {
      project: "hediinbee",
      cover: "./hediinbee.png",
      link: "https://hediinbee.vercel.app/",
    },
    {
      project: "2 player snake",
      cover: "mogio.png",
      link: "https://mogio.vercel.app/",
    },
    {
      project: "To-do app",
      cover: "todo.png",
      link: "https://nexy-beta.vercel.app/",
    },
  ]);
  return (
    <div className="page3">
      {state.map((e, key) => {
        return (
          <div
            onClick={() => nav.push(e.link)}
            key={key}
            className="w-[400px] hover:cursor-pointer rounded-[10px] flex flex-col p-[20px] text-[white] border-[white] border-2 h-[300px]"
          >
            <img
              className="h-[90%] rounded-[10px] imageHover"
              src={e.cover}
            ></img>
            <h1 className="text-[30px]">{e.project}</h1>
          </div>
        );
      })}
    </div>
  );
}
