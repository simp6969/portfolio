import React, { useEffect, useRef, useState } from "react";

export function CreativeEngineering() {
  // State to track the currently selected video URL
  const [selectedVideo, setSelectedVideo] = useState(null);

  // State to control the visibility/animation of the modal
  const [isOpen, setIsOpen] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  // Define video classes for the unclicked state
  const videoClasses =
    "cursor-pointer transform transition-all duration-300 ease-in-out " +
    "hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,44,64,0.3)] rounded-xl overflow-hidden border border-[var(--glass-border)]";

  // Function to open the modal and trigger animation
  const openModal = (videoSrc) => {
    setSelectedVideo(videoSrc);
    // Use a slight delay to ensure the DOM update is ready for the transition
    setTimeout(() => setIsOpen(true), 10);
  };

  // Function to close the modal and trigger reverse animation
  const closeModal = () => {
    setIsOpen(false);
    // Delay setting selectedVideo to null until animation is complete (duration-300 = 300ms)
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <div className="flex select-text flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-20 min-h-screen w-full gap-8 lg:gap-16 justify-center items-center relative">
      {/* 1. Modal Overlay */}
      {selectedVideo && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
            isOpen
              ? "opacity-100 pointer-events-auto bg-black/80"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative p-4 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-4xl max-h-full bg-transparent 
                        transform transition-transform duration-300 ease-out`}
            style={{ transform: isOpen ? "scale(1)" : "scale(0.75)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              kind="captions"
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-[var(--glass-border)]"
              controls
              loop
              ref={ref1}
              muted={false}
              autoPlay
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl font-light hover:text-[var(--primary-accent-color)] transition-colors p-2 cursor-pointer z-50"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* 2. Main Content */}
      <div className="w-full max-w-7xl flex flex-col gap-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gradient">
          Hardware & Systems Integration
        </h1>
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* ESP32 Project */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-6 p-6 rounded-2xl glass-card hover:bg-white/5 transition-colors">
            <div className="flex-shrink-0 mx-auto sm:mx-0 w-[246px]">
              <video
                width="246"
                height="414"
                loop
                muted={true}
                kind="captions"
                ref={ref2}
                preload="auto"
                className={videoClasses}
                onClick={() => openModal("/2025-10-21-00-18-59-004.mp4")}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
              >
                <source src="/2025-10-21-00-18-59-004.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--primary-accent-color)]">
                ESP32 Microcontroller Integration
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[var(--primary-accent-color)]">•</span>
                  Developed firmware in C++ for efficient performance.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--primary-accent-color)]">•</span>
                  Implemented U8g2 library for binary-encoded GIFs on 128x64 OLED.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--primary-accent-color)]">•</span>
                  Optimized resources for smooth playback on limited hardware.
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Mod Project */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-6 p-6 rounded-2xl glass-card hover:bg-white/5 transition-colors">
            <div className="flex-shrink-0 mx-auto sm:mx-0 w-[246px]">
              <video
                width="246"
                height="414"
                loop
                muted={true}
                kind="captions"
                preload="auto"
                className={videoClasses}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                onClick={() => openModal("/mobile.mp4")}
              >
                <source src="/mobile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--primary-accent-color)]">
                Samsung S21 Power Mod
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[var(--primary-accent-color)]">•</span>
                  Engineered custom 10000mAh external battery solution.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--primary-accent-color)]">•</span>
                  Designed fan control module with Power Save/Performance modes.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--primary-accent-color)]">•</span>
                  Showcased hardware modification and thermal management skills.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
