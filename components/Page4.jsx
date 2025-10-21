// Page3.jsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Page4() {
  const router = useRouter();
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const windowRef = useRef(null);
  const pageRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const intersectionRatio = entry.intersectionRatio;

            // Smoother easing for rotation, opacity, and scale
            const maxTranslateX = 40; // Reduced rotation range
            const degree = maxTranslateX * (1 - intersectionRatio);
            const opacity = Math.min(1, Math.pow(intersectionRatio, 0.5) * 1.5); // Non-linear opacity
            const scale = Math.max(0.9, Math.pow(intersectionRatio, 0.5)); // Non-linear scale

            windowRef.current.style.transform = `rotateX(${degree}deg)`;
            windowRef.current.style.opacity = `${opacity}`;
            windowRef.current.style.scale = `${scale}`;
          } else {
            windowRef.current.style.transform = `rotateX(${40}deg)`;
            windowRef.current.style.opacity = `0`;
            windowRef.current.style.scale = `0.9`;
          }
        });
      },
      {
        threshold: Array.from({ length: 50 }, (_, i) => i / 50), // Adjust thresholds
        root: null,
      }
    );

    observer.observe(pageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCopy = (text, setter) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  };

  return (
    <div
      id="page4"
      ref={pageRef}
      className="h-[80vh] w-full flex justify-center items-center p-4" // Ensure consistent background and centering
    >
      <div
        ref={windowRef}
        className="window-animation  bg-[var(--primary-accent-color)] text-[var(--primary-bg-color)] backdrop-blur-md border shadow-xl 
                   p-6 sm:p-8 flex flex-col rounded-xl
                   w-full max-w-lg md:max-w-xl
                   gap-6 md:gap-8" // Adjusted padding, width, and added futuristic styles
      >
        <div className="w-full flex flex-col gap-3 md:gap-5">
          <h2 className=" text-lg md:text-xl font-medium">Get in Touch</h2>
          <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold">
            Let's talk about your project
          </h1>

          {/* Email */}
          <div
            onClick={() =>
              handleCopy("ariunboldbold200@gmail.com", setEmailCopied)
            }
            className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out group
              ${
                emailCopied
                  ? "bg-green-500/80 text-white shadow-lg shadow-green-500/30"
                  : "bg-[--primary-bg-color] hover:bg-[#533732] text-[--primary-accent-color] hover:text-[#fcb09f]"
              }`}
          >
            <p ref={emailRef} className="text-md max-sm:text-sm">
              {emailCopied ? "Email Copied!" : "ariunboldbold200@gmail.com"}
            </p>
          </div>

          {/* Phone */}
          <div
            onClick={() => handleCopy("+976 95550376", setPhoneCopied)}
            className={`p-3 rounded-lg cursor-pointer  transition-all duration-300 ease-in-out group
              ${
                phoneCopied
                  ? "bg-green-500/80 text-white shadow-lg shadow-green-500/30"
                  : "bg-[--primary-bg-color] hover:bg-[#533732] text-[--primary-accent-color] hover:text-[#fcb09f]"
              }`}
          >
            <p ref={phoneRef} className="text-md max-sm:text-sm">
              {phoneCopied ? "Phone Copied!" : "+976 95550376"}
            </p>
          </div>

          <div className="flex gap-4 md:gap-6 pt-4">
            <a
              href="https://www.facebook.com/profile.php?id=61553207489957"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
            >
              <svg
                fill="currentColor"
                width={28}
                height={28}
                viewBox="0 0 512 512"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ariuka_69/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-colors duration-200"
            >
              <svg
                fill="currentColor"
                width={28}
                height={28}
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ariunbold-bold-60058b30a/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-colors duration-200"
            >
              <svg
                fill="currentColor"
                width={28}
                height={28}
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
