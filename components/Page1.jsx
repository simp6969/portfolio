// "use client";

import { useEffect, useRef } from "react";

export function Page1() {
  const moon = useRef(null);
  const character = useRef(null);
  const header = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const intersectionRatio = entry.intersectionRatio;

            const maxTranslate = 70;
            const translateX = maxTranslate * (1 - intersectionRatio);
            console.log(translateX);
          }
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        root: null,
      }
    );
    observer.observe(container.current);
  }, []);

  return <div className="flex gap-[20px]" ref={container}></div>;
}
