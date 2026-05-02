"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";

function FadeIn({ children, delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${directionClasses[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function S21ModPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !titleRef.current || !bgRef.current) return;
      const scrollY = window.scrollY;

      // Parallax for hero bg
      bgRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;

      // Title fade and scale
      const opacity = Math.max(0, 1 - scrollY / 400);
      const scale = Math.max(0.8, 1 - scrollY / 1000);
      titleRef.current.style.opacity = opacity;
      titleRef.current.style.transform = `scale(${scale}) translateY(${scrollY * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden min-h-screen bg-[#0d0d0d] text-white selection:bg-[#8B2C40] selection:text-white pb-20">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,44,64,0.8) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-10 blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(114,54,62,0.8) 0%, transparent 70%)",
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden z-10 pt-20"
      >
        <div ref={bgRef} className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/80 to-[#0d0d0d]"></div>
        </div>

        <div
          ref={titleRef}
          className="z-10 flex flex-col items-center text-center px-6"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wider text-gray-300">
            HARDWARE ENGINEERING
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            S21{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d6d] to-[#8B2C40]">
              POWER MOD
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
            Active Cooling meets Unlimited Power. Re-engineering the smartphone
            experience from the ground up.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-32">
        {/* Section 1: The Build */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <FadeIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#8B2C40] to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-2xl rounded-3xl"></div>
                <Image
                  src="/case.jpeg"
                  alt="Carved S21 Case with Fan"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 border border-white/10 transform transition-transform duration-700 group-hover:scale-[1.02] object-cover h-[400px] w-full"
                />
              </div>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <FadeIn direction="left" delay={200}>
              <h2 className="text-sm font-bold tracking-widest text-[#ff4d6d] mb-3 uppercase">
                The Foundation
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Carved for Performance
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                It started with a simple idea: extreme cooling. I grabbed a
                spare PC cooling fan that was lying around and mapped it out.
                Taking a standard S21 phone case, I carefully carved out a
                perfect circular hole in the center to fit the fan assembly
                flawlessly.
              </p>
            </FadeIn>
          </div>
        </div>
        {/* Section 2: Power Delivery */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-sm font-bold tracking-widest text-[#ff4d6d] mb-3 uppercase">
                The Circuitry
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Soldered for Power
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Cooling is nothing without the power to sustain it. I integrated
                a massive external power bank battery directly into the circuit.
                Carefully soldering the fan to a custom controller, I bypassed
                standard limitations and wired the S21&apos;s internal battery
                circuit directly to the power bank cells for unprecedented
                battery life.
              </p>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2">
            <FadeIn direction="left" delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-bl from-[#8B2C40] to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-2xl rounded-3xl"></div>
                <Image
                  src="/fan.png"
                  alt="Soldering the Controller"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 border border-white/10 transform transition-transform duration-700 group-hover:scale-[1.02] object-cover h-[400px] w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
