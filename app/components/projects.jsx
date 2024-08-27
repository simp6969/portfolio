"use client";

import { useRouter } from "next/navigation";
export function Projects() {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[100vh] projects">
      <h1 className="font-bold text-[48px] border-b-2 border-[#3b2321]">
        Projects
      </h1>
      <div className="bg-[#DC9888] h-[30vh] w-[40vw] rounded-[10px] flex">
        <div className="w-[50%] h-[100%] flex flex-col gap-[10px] justify-center items-center">
          <h1 className="font-bold text-[40px]">Magalang</h1>
          <p className="w-[90%]">
            A simple card game made using React. Thus it's the start of my
            projects.
          </p>
          <div className="flex gap-[10px]">
            <button className="w-[110px] h-[43px]  rounded-[10px] bg-[#381F1D] text-[18px] text-[#d9a497]">
              github
            </button>
            <button
              onClick={() => {
                router.push("https://magalang.vercel.app/");
              }}
              className="w-[110px] h-[43px] border-2 border-[#381F1D] rounded-[10px] text-[18px]"
            >
              website
            </button>
          </div>
        </div>
        <div className="w-[50%] h-[100%] flex coverProject1 rounded-[10px]" />
      </div>
      <div className="bg-[#DC9888] h-[30vh] w-[40vw] rounded-[10px] flex">
        <div className="w-[50%] h-[100%] flex flex-col gap-[10px] justify-center items-center">
          <h1 className="font-bold text-[40px]">moi-mogio</h1>
          <p className="w-[90%]">
            A simple card game made using React. Thus it's the start of my
            projects.
          </p>
          <div className="flex gap-[10px]">
            <button className="w-[110px] h-[43px]  rounded-[10px] bg-[#381F1D] text-[18px] text-[#d9a497]">
              github
            </button>
            <button
              onClick={() => router.push("moi-mogio.vercel.app")}
              className="w-[110px] h-[43px] border-2 border-[#381F1D] rounded-[10px] text-[18px]"
            >
              website
            </button>
          </div>
        </div>
        <div className="w-[50%] h-[100%] flex coverProject2 rounded-[10px]" />
      </div>
      <div className="bg-[#DC9888] h-[30vh] w-[40vw] rounded-[10px] flex">
        <div className="w-[50%] h-[100%] flex flex-col gap-[10px] justify-center items-center">
          <h1 className="font-bold text-[40px]">Magalang</h1>
          <p className="w-[90%]">
            A simple card game made using React. Thus it's the start of my
            projects.
          </p>
          <div className="flex gap-[10px]">
            <button className="w-[110px] h-[43px]  rounded-[10px] bg-[#381F1D] text-[18px] text-[#d9a497]">
              github
            </button>
            <button className="w-[110px] h-[43px] border-2 border-[#381F1D] rounded-[10px] text-[18px]">
              website
            </button>
          </div>
        </div>
        <div className="w-[50%] h-[100%] flex coverProject3 rounded-[10px]" />
      </div>
    </div>
  );
}
// 992
//1440
