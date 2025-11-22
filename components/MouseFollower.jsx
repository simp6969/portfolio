"use client";
import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0 transition-transform duration-200 ease-out hidden md:block mix-blend-screen"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`,
      }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,44,64,0.15)_0%,transparent_70%)] blur-3xl"></div>
    </div>
  );
}
