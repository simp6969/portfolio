/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Projects } from "./components/Projects";
export default function MainPage() {
  const [mainPipeState, setMainPipeState] = useState({
    contactTabOpened: false,
  });
  const ref = useRef(null);
  const projectDatas = [
    {
      src: "/magalangCover.png",
      projectTitle: "Magalang Cards",
      link: "https://magalang.vercel.app",
    },
    {
      link: "https://github.com/simp6969/moi_mogio",
      projectTitle: "Moi Mogoi",
      src: "/moimogoi.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      if (e[0].intersectionRatio <= 0) return;
      setMainPipeState({ ...mainPipeState, observing: true });
    });
    observer.observe(ref.current);
  }, [mainPipeState]);
  return (
    <div className="flex overflow-x-hidden text-[20px] gap-5 flex-col items-center">
      <div
        ref={ref}
        style={mainPipeState.observing ? { opacity: 1 } : { opacity: 0 }}
        className="header w-[100vw] h-[90vh] flex justify-center gap-[170px] items-center duration-[1400ms] "
      >
        <div className="flex flex-col text-center">
          <p className="text-[50px] font-extrabold">hi, im Bold Ariunbold</p>
          <div>
            <h1 className="text-[25px]">role</h1>
            <p>Full-Stack developer</p>
            <p className="text-[16px]">83+ hours</p>
            <p>Python</p>
            <p className="text-[16px]">40+ hours</p>
          </div>
          <p className="text-[25px] ">education</p>
          <div className="flex flex-col text-[16px]">
            <p>Pinecone academy hop 2</p>
            <p>52th school 9th grade</p>
          </div>
        </div>

        <div className="parentDivProfile">
          <Image
            src="/profile_picture.jpg"
            alt="profile picture"
            width={400}
            height={400}
            className="duration-500 childDivProfile rounded-[20px] "
          />
        </div>
      </div>
      <div className="flex gaper flex-row items-center text-center">
        <p>projects</p>
        <div
          style={{
            borderTop: "2px solid #323232 ",
            marginLeft: 20,
            marginRight: 20,
            height: "1px",
            width: "80vw",
          }}
        ></div>
      </div>
      <div className="flex-col items-center w-[100vw] h-[55vh] flex flex-wrap gap-[20px]">
        <div className="flex flex-row gap-[10px] projects-container">
          {projectDatas.map((e, key) => {
            return (
              <Projects
                key={key}
                link={e.link}
                src={e.src}
                projectTitle={e.projectTitle}
              />
            );
          })}
        </div>
        <div className="flex flex-row gaper items-center">
          <p>Side Projects</p>
          <div
            style={{
              borderTop: "2px solid #161616 ",
              marginLeft: 20,
              marginRight: 20,
              height: "1px",
              width: "50vw",
            }}
          ></div>
        </div>
        <div className="projects duration-300">
          <a href="https://github.com/simp6969/rock-paper-scissors">
            &#8226; simple terminal rock paper scissors
          </a>
        </div>
      </div>
      <div
        // onMouseLeave={() =>
        //   setMainPipeState({ ...mainPipeState, contactTabOpened: false })
        // }
        // onMouseEnter={() =>
        //   setMainPipeState({ ...mainPipeState, contactTabOpened: true })
        // }
        className="w-[98vw] duration-500 ease-in-out fixed top-[90vh] hover:top-[30vh] rounded-[10px] hover:h-[80vh] bg-[#323232] h-[15vh] text-[#ddd0c8] flex flex-col justify-center items-center"
      >
        {mainPipeState.contactTabOpened ? (
          <div className="h-[80vh] w-[100vw] flex items-center justify-center">
            mouse in
          </div>
        ) : (
          <h1>contact me</h1>
        )}
      </div>
    </div>
  );
}
