"use client";

import { Page1 } from "@/components/Page1";
import { useEffect, useState } from "react";

export default function App() {
  const [state, setState] = useState({});
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState({ intersect: true });
        } else {
          setState({ intersect: false });
        }
      });
    });
    const tar1 = document.getElementById("target1");
    observer.observe(tar1);
  }, [!state.intersect]);
  // useEffect(() => {
  //   if (window) {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setState({ intersect1: true });
  //         } else {
  //           setState({ intersect1: false });
  //         }
  //       });
  //     });
  //     const tar = document.getElementById("target1");
  //     observer.observe(tar);
  //   }
  // }, [!state.intersect1]);
  console.log(state);
  return (
    <div>
      <div className="justify-center items-center h-[100vh] w-[100vw] gap-[20px] page1 flex">
        <div
          id="target1"
          className={state.intersect ? "para" : "flex gap-[10px] flex-col"}
        >
          <h1>Nice to meet you, im Ariunbold Bold</h1>
          <div className="flex gap-[20px]">
            <button className="defaultButton bg-[var(--secondaryColor)]">
              Contact
            </button>
            <button className="defaultButton !text-[var(--secondaryColor)] border-4 border-[var(--secondaryColor)]">
              Projects
            </button>
          </div>
        </div>
        <div
          id="target1"
          className={state.intersect ? "main_img" : "main_img1"}
        />
      </div>
      <div className="w-[100vw] h-[100vh]"></div>
      <div className="w-[100vw] introPage h-[100vh]">
        <Page1 />
      </div>
    </div>
  );
}
