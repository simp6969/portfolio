import Image from "next/image";
import { useEffect, useRef } from "react";

export function Intro() {
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
            const maxTranslateX = 70;
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
    <div
      id="page1"
      ref={containerRef}
      className="introPage min-h-[92vh] w-full overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#8B2C40]/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#72363E]/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full px-6 lg:px-12 gap-12 z-10">
        <div
          ref={introductionRef}
          className="flex flex-col gap-6 max-w-2xl lg:items-start items-center text-center lg:text-left"
        >
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              Nice to meet you, <br />
              <span className="text-gradient-accent">I'm Ariunbold Bold</span>
            </h1>
            <p className="text-xl text-[var(--primary-text)] opacity-80">
              Software & Hardware Developer (16 years old)
            </p>
          </div>
          
          <div className="flex gap-4 mt-4">
            <button
              onClick={() =>
                window.scroll({
                  left: 0,
                  top: window.innerHeight * 4,
                  behavior: "smooth",
                })
              }
              className="defaultButton btn-primary"
            >
              Contact Me
            </button>
            <button
              onClick={() =>
                window.scroll({
                  left: 0,
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
              className="defaultButton btn-outline"
            >
              About Me
            </button>
          </div>
        </div>

        <div
          ref={introImageRef}
          className="relative w-[280px] h-[280px] lg:w-[500px] lg:h-[500px] animate-float"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8B2C40] to-[#72363E] rounded-full blur-2xl opacity-20"></div>
          <Image
            height={690}
            width={530}
            alt="Ariunbold Bold"
            priority
            src={"/profile.webp"}
            className="object-cover rounded-3xl shadow-2xl border border-[var(--glass-border)] relative z-10 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
