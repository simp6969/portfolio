"use client";
import { useRouter } from "next/navigation";
import { HeadersDefault } from "./Headers";

export function AboutPage() {
  const router = useRouter();
  return (
    <div className="w-[100vw] ml-[60px] mt-[55px] h-[100vh] duration-300">
      <HeadersDefault />
      <div className="w-[100%] h-[90%]">
        <div className="w-[40%] ml-[10%] h-[50%] flex justify-center flex-col">
          <h1 className="poppins-bold text-[48px] ">About me</h1>
          <p className="text-[#242424]">
            ld Ariunbold was born in 2009 in Ulaanbaatar. Once I turned 10, I
            started my coding career using Python. I acknowledged Javascript
            alongside CSS and HTML. Thus same with Kotlin. Which is a mobile
            development language. Lately, I've been solving LeetCode problems
            for job applications.
          </p>
          <button
            onClick={() =>
              setPageState({ ...pageState, expandProjectsPage: true })
            }
            className="w-[110px] h-[43px]  rounded-[10px] bg-[#381F1D] text-[18px] text-[#d9a497]"
          >
            Email
          </button>
          <button
            className="w-[110px] h-[43px] border-2 border-[#381F1D] rounded-[10px] text-[18px]"
            onClick={() =>
              router.push(
                "https://www.linkedin.com/in/ariunbold-bold-60058b30a"
              )
            }
          >
            LinkedIn
          </button>
        </div>
        <div className="w-[50%] h-[90%]"></div>
      </div>
    </div>
  );
}
