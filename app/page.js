"use client";

import { Page3 } from "@/components/Page3";
import { AboutMePage } from "@/components/Page2";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Page4 } from "@/components/Page4";

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
            introduction.style.transform = `translateX(${translateX * -1}%)`;
            introImageRef.current.style.transform = `translateX(${translateX}%)`;
            introImageRef.current.style.opacity = `${intersectionRatio}`;
          } else {
            introduction.style.transform = `translateX(${100}%)`;
            introduction.style.opacity = `0`;
          }
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        root: null,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      <Header />
      <div
        id="page1"
        ref={containerRef}
        className="justify-center overflow-hidden p-[20px] max-[690px]:flex-wrap max-[690px]:p-[30px] items-center h-[100vh] w-[100vw] gap-[20px] page1 flex"
      >
        <div
          ref={introductionRef}
          className={
            "flex gap-[10px] mt-[50px] flex-col max-[690px]:justify-center max-[690px]:items-center max-[690px]:text-center paragraph"
          }
        >
          <div>
            <h1 className="font_title">Nice to meet you, im Ariunbold Bold</h1>
            <p>Full-stack developer</p>
          </div>
          <div className="flex gap-[20px]">
            <button
              onClick={() =>
                window.scroll({
                  left: 0,
                  top: window.innerHeight * 3,
                  behavior: "smooth",
                })
              }
              className="defaultButton bg-[var(--secondaryColor)]"
            >
              Contact
            </button>
            <button
              onClick={() =>
                window.scroll({
                  left: 0,
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
              className="defaultButton !text-[var(--secondaryColor)] border-4 border-[var(--secondaryColor)]"
            >
              About
            </button>
          </div>
        </div>
        <div
          ref={introImageRef}
          className={
            "main_img1 h-[585px] w-[340px] max-[690px]:w-[240px] max-[690px]:h-[485px]"
          }
        />
      </div>
      <div className="w-[100vw] h-[100vh]">
        <AboutMePage />
      </div>
      <Page3 />
      <Page4 />
    </div>
  );
}
