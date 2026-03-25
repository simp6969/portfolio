import Image from "next/image";
import { useEffect, useRef } from "react";

export function Intro() {
  const containerRef = useRef(null);
  const introductionRef = useRef(null);
  const introImageRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const introduction = introductionRef.current;
    const introImage = introImageRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => {
            if (entry.isIntersecting) {
              const ratio = entry.intersectionRatio;
              const maxTranslateX = 70;
              const translateX = maxTranslateX * (1 - ratio);
              introduction.style.opacity = ratio;
              introduction.style.transform = `translate3d(${translateX * -1}%, 0, 0)`;
              introImage.style.transform = `translate3d(${translateX}%, 0, 0)`;
              introImage.style.opacity = ratio;
            } else {
              introduction.style.transform = `translate3d(-100%, 0, 0)`;
              introduction.style.opacity = 0;
            }
          });
        });
      },
      {
        threshold: Array.from({ length: 60 }, (_, i) => i / 60),
        root: null,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      id="page1"
      ref={containerRef}
      className="introPage min-h-[92vh] w-full overflow-hidden relative"
    >
      {/* Background Elements — lightweight radial gradients instead of blurred divs */}
      <div
        className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139,44,64,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(114,54,62,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full px-6 lg:px-12 gap-12 z-5">
        <div
          ref={introductionRef}
          className="flex flex-col gap-6 max-w-2xl lg:items-start items-center text-center lg:text-left"
          style={{ willChange: "transform, opacity" }}
        >
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              Nice to meet you, <br />
              <span className="text-gradient-accent">I'm Ariunbold Bold</span>
            </h1>
            <p className="text-xl text-[var(--primary-text)] opacity-80">
              Software & Hardware Developer ({new Date().getFullYear() - 2009} years old)
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() =>
                window.scroll({
                  left: 0,
                  top: window.innerHeight * 4,
                  behavior: "auto",
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
          style={{ willChange: "transform, opacity" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8B2C40] to-[#72363E] rounded-full blur-2xl opacity-20"></div>
          <Image
            height={690}
            width={530}
            alt="Ariunbold Bold"
            priority
            src={"/profile.webp"}
            className="object-cover rounded-3xl shadow-2xl border border-[var(--glass-border)] relative z-1 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
