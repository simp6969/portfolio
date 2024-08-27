"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HeadersDefault } from "./components/Headers.jsx";

export default function LandingPage() {
  const [pageState, setPageState] = useState({
    expandAboutPage: false,
    expandProjectsPage: false,
  });
  const router = useRouter();
  useEffect(() => {
    if (pageState.expandAboutPage) {
      router.push("/about");
    }
    if (pageState.expandProjectsPage) {
      setTimeout(() => {
        router.push("/projects");
      }, 800);
    }
  }, [pageState]);

  return (
    <>
      <div
        className={
          pageState.expandProjectsPage
            ? "flex items-center flex-col LandingPageBody LandingPageBodyPageChange"
            : "flex items-center flex-col LandingPageBody"
        }
      >
        <div className={"header h-[30px] "}>
          <div
            onClick={() => router.push("/")}
            className="w-[50%] poppins-bold text-[18px]"
            title="that's me"
          >
            Bold Ariunbold
          </div>
          <div className="w-[50%] flex text-[18px] align-end gap-[30px] justify-end mr-[120px]">
            <div
              onClick={() =>
                setPageState({ ...pageState, expandAboutPage: true })
              }
              className="headerButton"
            >
              About
            </div>
            <div
              onClick={() =>
                setPageState({ ...pageState, expandProjectsPage: true })
              }
              className="headerButton"
            >
              Projects
            </div>
            <div
              onClick={() =>
                setPageState({ ...pageState, expandAboutPage: true })
              }
              className="headerButton"
            >
              Contact
            </div>
          </div>
        </div>
        <div className="flex w-[100vw] mt-[80px]  items-center justify-center">
          <div className="content">
            <p className="poppins-bold text-[25px] text-[#381F1D]">
              Full-Stack developer
            </p>
            <h1 className="poppins-bold text-[64px] text-[#381F1D]">
              Hello, I'm Ariunbold
            </h1>
            <p className="text-[#242424] 24px w-[70%]">
              As a skilled full-stack developer, I possess a strong foundation
              in JavaScript and Python. My expertise in the React framework
              enables me to create dynamic and user-friendly web applications.
              With a passion for problem-solving and a commitment to delivering
              high-quality code, I am eager to contribute my skills to a
              collaborative team and drive successful projects.
            </p>

            <div className="flex gap-[20px] justify-start items-start mt-[10px]">
              <button
                onClick={() =>
                  setPageState({ ...pageState, expandProjectsPage: true })
                }
                className="w-[110px] h-[43px]  rounded-[10px] bg-[#381F1D] text-[18px] text-[#d9a497]"
              >
                Projects
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
          <div className="w-[50%] mr-[-200px]">
            <img
              className="w-[30vw] rounded-[10px]"
              src={"/profilePicture.jpg"}
              alt={"profile picture"}
              title="Picture of Hu Tao from genshin don't mistake it as me."
            />
          </div>
        </div>
      </div>
    </>
  );
}
