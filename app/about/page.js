"use client";
import { useRouter } from "next/navigation";
import { HeadersDefault } from "../components/Headers";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const router = useRouter();
  const [alertBox, setAlertBox] = useState({ show: false, hide: false });
  useEffect(() => {
    setTimeout(() => {
      setAlertBox({ ...alertBox, hide: true });
    }, 5000);
  }, [alertBox.show]);
  return (
    <div className="w-[100vw] ml-[60px] mt-[55px] overflow-hidden h-[90vh]">
      <HeadersDefault />
      {alertBox.show ? (
        <div className={alertBox.hide ? "alertSign hide" : "alertSign"}>
          <svg
            height={50}
            width={50}
            fill="#d9a497"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          <p>Copied to clipboard</p>
          <svg
            onClick={() => {
              setAlertBox({ ...alertBox, hide: true });
              setTimeout(() => {
                setAlertBox({ show: false });
              }, 1000);
            }}
            className="cursor-pointer"
            height={20}
            width={20}
            fill="#d9a497"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
      ) : null}
      <div className="w-[100%] h-[90%] flex gap-[10px]">
        <div className="w-[40%] ml-[10%] h-[50%] flex justify-center flex-col gap-[10px]">
          <h1 className="poppins-bold text-[48px] ">About me</h1>
          <p className="text-[#242424]">
            I, Bold Ariunbold, was born in 2009 in Ulaanbaatar. Once turned 10,
            convinced myself to start an coding career using Python. I also
            learned Javascript, CSS, and HTML, as well as Kotlin, which is a
            mobile development language. Lately, I've been solving LeetCode
            problems for job applications.
          </p>
          <div className="flex gap-[20px] mt-[15px]">
            <button
              onClick={() => {
                setAlertBox({ ...alertBox, show: true });
                navigator.clipboard.writeText("ariunboldbold200@gmail.com");
              }}
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
        </div>
        <div className="w-[50%] h-[90%]"></div>
      </div>
    </div>
  );
}
