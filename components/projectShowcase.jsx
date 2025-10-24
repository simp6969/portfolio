import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react"; // Removed unused useEffect

export function ProjectShowcase() {
  // Re-run if projectDetails changes, though unlikely for this use case

  const [projectDetails, setProjectDetails] = useState([
    {
      name: "Canu",
      description: "A painting canvas that you can work with teams",
      thumbnail: "/canu.webp", // Assuming images are in the public folder
      id: 1,
      link: "https://canu.vercel.app",
      git: "https://github.com/simp6969/canu.git",
    },
    {
      thumbnail: "/hediinbee.webp", // Assuming images are in the public folder
      name: "hediinbee",
      description: "Money you can use it all (except its digital)",
      id: 2,
      link: "https://hediinbee.vercel.app",
      git: "https://github.com/simp6969/hediinbee.git",
    },
    {
      thumbnail: "/mogio.webp", // Assuming images are in the public folder
      name: "mogio",
      description: "2 player snake game",
      link: "https://mogio.vercel.app",
      id: 3,
      git: "https://github.com/simp6969/moi_mogio.git",
    },
    {
      thumbnail: "/todo.webp", // Assuming images are in the public folder
      name: "Todo",
      description: "finnaly everyone's favourite",
      id: 4,
      link: "https://nexy-beta.vercel.app", // Corrected link
      git: "",
    },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInScale");
            // Optional: Unobserve after animation to save resources
            // observer.unobserve(entry.target);
          } else {
            // Optional: Reset animation if you want it to re-trigger on scroll out and back in
            entry.target.classList.remove("animate-fadeInScale");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Start animation a bit before it's fully in view
      }
    );

    const projectCards = document.querySelectorAll(".project-card-observable");
    projectCards.forEach((card) => observer.observe(card));

    return () => {
      projectCards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, [projectDetails]);

  return (
    <div
      id="page3"
      className="page3 w-full bg-[var(--primaryColor)] flex flex-wrap gap-6 md:gap-8 p-4 md:p-8 justify-center items-center"
    >
      {projectDetails.map((project) => (
        <div
          key={project.id}
          className="border-2 rounded-[15px] p-[10px] w-[330px] border-[var(--primary-accent-color)]"
        >
          <div
            className="p-[20px] border-[2] project-card-observable bg-[var(--primary-accent-color)] text-[var(--primary-bg-color)] opacity-0 group relative z-[1] aspect-[4/3] hover:cursor-pointer text-center rounded-lg  shadow-lg transition-all duration-300 ease-in-out  hover:scale-105 flex flex-col justify-center items-center"
            // className="group relative w-[90%] z-[1] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[20%] aspect-[4/3] hover:cursor-pointer p-6 text-center rounded-lg bg-slate-800 border border-slate-700 shadow-lg transition-all duration-300 ease-in-out hover:shadow-sky-500/50 hover:border-sky-500 hover:scale-105 flex flex-col justify-center items-center"
          >
            <div className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--primary-font-color)] mb-2">
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm ">{project.description}</p>
            </div>

            <div className="absolute inset-0 p-4 flex gap-[10px] justify-center flex-col items-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 ">
              <Image
                width={213}
                height={174}
                src={project.thumbnail}
                onClick={() => {
                  window.open(project.link, "_ blank");
                }}
                alt={`${project.name} thumbnail`}
                className="max-w-full scale-[1.3] max-h-full object-contain rounded-md"
              ></Image>
              <svg
                className="absolute bottom-[10px] z-[100]"
                onClick={() => {
                  window.open(project.git, "_ blank");
                }}
                height={30}
                width={30}
                fill="#452f2b"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
