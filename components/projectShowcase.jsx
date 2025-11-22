import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function ProjectShowcase() {
  const [projectDetails, setProjectDetails] = useState([
    {
      name: "Canu",
      description: "A painting canvas that you can work with teams",
      thumbnail: "/canu.webp",
      id: 1,
      link: "https://canu.vercel.app",
      git: "https://github.com/simp6969/canu.git",
    },
    {
      thumbnail: "/hediinbee.webp",
      name: "hediinbee",
      description: "Money you can use it all (except its digital)",
      id: 2,
      link: "https://hediinbee.vercel.app",
      git: "https://github.com/simp6969/hediinbee.git",
    },
    {
      thumbnail: "/mogio.webp",
      name: "mogio",
      description: "2 player snake game",
      link: "https://mogio.vercel.app",
      id: 3,
      git: "https://github.com/simp6969/moi_mogio.git",
    },
    {
      thumbnail: "/todo.webp",
      name: "Todo",
      description: "finnaly everyone's favourite",
      id: 4,
      link: "https://nexy-beta.vercel.app",
      git: "",
    },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInScale");
          } else {
            entry.target.classList.remove("animate-fadeInScale");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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
      className="page3 w-full flex flex-col gap-12 p-4 md:p-8 justify-center items-center relative"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">My Projects</h2>
      
      <div className="flex flex-wrap gap-8 justify-center max-w-7xl">
        {projectDetails.map((project) => (
          <div
            key={project.id}
            className="project-card-observable opacity-0 group relative w-[350px] h-[280px] glass-card rounded-2xl overflow-hidden"
          >
            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center transition-all duration-500 group-hover:opacity-0">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-y-[-10px] transition-transform">
                {project.name}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 text-[var(--primary-accent-color)] text-sm font-semibold">
                Hover to see preview
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm p-6">
              <div className="relative w-full h-32 rounded-lg overflow-hidden shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <Image
                  src={project.thumbnail}
                  alt={`${project.name} thumbnail`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="px-4 py-2 bg-[var(--primary-accent-color)] text-[var(--primary-bg-color)] rounded-lg text-sm font-semibold hover:bg-[#F5D6BD] transition-colors"
                >
                  Visit Site
                </button>
                {project.git && (
                  <button
                    onClick={() => window.open(project.git, "_blank")}
                    className="p-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                    title="View Source"
                  >
                    <svg
                      height={20}
                      width={20}
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
