"use client";

import { Page1 } from "@/components/Page1";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const containerRef = useRef(null);
  const introductionRef = useRef(null);
  const introImageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const introduction = introductionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const intersectionRatio = entry.intersectionRatio;

            const maxTranslateX = 70; // Maximum translation to the RIGHT (when ratio is 0)
            const translateX = maxTranslateX * (1 - intersectionRatio);

            introduction.style.opacity = `${intersectionRatio}`;
            introImageRef.current.style.transform = `translateX(${translateX}%)`;
            introImageRef.current.style.opacity = `${intersectionRatio}`;
            console.log(intersectionRatio);
          } else {
            introduction.style.transform = `translateX(${100}%)`;
            introduction.style.opacity = `0`;
          }
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100), // More granular threshold
        root: null, // Use viewport as root
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect(); // Cleanup on unmount
    };
  }, []);
  return (
    <div>
      <div
        ref={containerRef}
        className="justify-center items-center h-[100vh] w-[100vw] gap-[20px] page1 flex"
      >
        <div
          ref={introductionRef}
          className={"flex gap-[10px] flex-col transition-all duration-[700ms]"}
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
        <div ref={introImageRef} className={"main_img1"} />
      </div>
      <div className="w-[100vw] h-[100vh]"></div>
      <div className="w-[100vw] introPage h-[100vh]">
        <Page1 />
      </div>
    </div>
  );
}
