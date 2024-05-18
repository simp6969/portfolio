/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Projects } from "./components/Projects";
import { useRouter } from "next/navigation";
export default function MainPage() {
  const [mainPipeState, setMainPipeState] = useState({
    contactTabOpened: false,
    notificationWindow: false,
  });
  const ref = useRef(null);
  const router = useRouter();
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
        style={
          mainPipeState.observing
            ? { opacity: 1 }
            : { opacity: 0, transform: "translateX(-500px)" }
        }
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
        className="w-[98vw] parentHover duration-500 ease-in-out fixed top-[95vh] hover:top-[30vh] m-[-30px] rounded-[10px] hover:h-[80vh] bg-[#323232] h-[10vh] text-[#ddd0c8] flex flex-col justify-center items-center"
      >
        <h1 className="no_hover">contact me</h1>
        <div className="hover hidden flex-col text-center gap-[10px]">
          <h1>contact info</h1>
          <div className="flex items-center gap-[20px]">
            <h1>email: </h1>
            <p>ariunboldbold200@gmail.com</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="white"
              width={18}
              height={18}
              className="hover:cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("ariunboldbold200@gmail.com");
                setMainPipeState({
                  ...mainPipeState,
                  notificationWindow: true,
                });
                setTimeout(() => {
                  setMainPipeState({
                    ...mainPipeState,
                    notificationWindow: false,
                  });
                }, 3000);
              }}
            >
              <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
            </svg>
          </div>
          <div className="w-[100%] flex flex-row gap-[20px] justify-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61553207489957"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                height={18}
                width={18}
                fill="white"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/simp6969"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                width={18}
                fill="white"
                height={18}
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className="fixed top-0 right-0 p-[10px] duration-300"
        style={
          mainPipeState.notificationWindow
            ? { marginRight: "0px" }
            : { marginRight: "-400px" }
        }
      >
        <div className="p-[20px] border-2 border-[#323232] rounded-[10px] flex gap-[5px] justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={20}
            height={20}
          >
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
          </svg>
          text copied to clipboard
        </div>
      </div>
    </div>
  );
}
