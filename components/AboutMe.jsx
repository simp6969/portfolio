// Page2.jsx
"use client";
import { useEffect, useRef } from "react";

export function AboutMePage() {
  const strengths = [
    {
      title: "Full-Stack Architecture (React, Next.js)",
      description: "2+ years of advanced self-directed study, building beyond standard curricula.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary-accent-color)] mt-1 flex-shrink-0">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 3.82-13 1.5 1.5 0 0 0-2.18 2.06A20.08 20.08 0 0 0 9 6.27a19.5 19.5 0 0 0-6.19 2.65 1.5 1.5 0 0 0 1.66 2.56c2-.84 4.31-1.39 6.6-1.53a3.13 3.13 0 0 1 4.24 4.24c-.14 2.29-.69 4.6-1.53 6.6a1.5 1.5 0 0 0 2.56 1.66A19.5 19.5 0 0 0 19 16.19a20.08 20.08 0 0 0 5.21-1.63 1.5 1.5 0 0 0-2.06-2.18A22 22 0 0 1 12 15z" />
        </svg>
      )
    },
    {
      title: "Systems Fundamentals (C++)",
      description: "Proficient foundation for systems programming and computer science theory.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary-accent-color)] mt-1 flex-shrink-0">
          <rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
        </svg>
      )
    },
    {
      title: "Strategic Analysis (Chess, 1100 ELO)",
      description: "Specialized in pattern recognition, pressure management, and long-term tactical planning.",
      icon: (
        <svg className="text-[var(--primary-accent-color)] mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor" stroke="currentColor" ><path d="M168 56l0 40-78.1 0c-14.3 0-25.9 11.6-25.9 25.9 0 4 .9 8 2.7 11.6l33.4 66.8c-11.4 1.8-20.2 11.7-20.2 23.7 0 13.3 10.7 24 24 24l5.6 0-13.6 136-56.2 70.3c-5 6.3-7.8 14.1-7.8 22.2 0 19.6 15.9 35.5 35.5 35.5l248.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2L288 384 274.4 248 280 248c13.3 0 24-10.7 24-24 0-11.9-8.7-21.9-20.2-23.7l33.4-66.8c1.8-3.6 2.7-7.6 2.7-11.6 0-14.3-11.6-25.9-25.9-25.9l-78.1 0 0-40 16 0c13.3 0 24-10.7 24-24S245.3 8 232 8l-16 0 0-16c0-13.3-10.7-24-24-24S168-21.3 168-8l0 16-16 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l16 0zM325.8 279.6l8.5 85.5 47.4 59.2 4.2 5.7c9.2 13.7 14.1 29.9 14.1 46.5 0 12.7-2.8 24.8-7.9 35.5l83.1 0c20.3 0 36.8-16.5 36.8-36.8 0-7.3-2.2-14.4-6.2-20.4l-25.8-38.7 0-64 13.3-13.3c12-12 18.7-28.3 18.7-45.3L512 192c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 16-32 0 0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32c0 22.4-10.2 42.4-26.2 55.6z" /></svg>
      )
    },
    {
      title: "Physical Discipline (Table Tennis)",
      description: "5+ years of dedicated practice, demonstrating high-level grit and technical consistency.",
      icon: (
        <svg className="text-[var(--primary-accent-color)] mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" viewBox="0 0 512 512"><path d="M496.2 296.5C527.7 218.7 512 126.2 449 63.1 365.1-21 229-21 145.1 63.1l-56 56.1 211.5 211.5c46.1-62.1 131.5-77.4 195.6-34.2zm-217.9 79.7L57.9 155.9c-27.3 45.3-21.7 105 17.3 144.1l34.5 34.6L6.7 424c-8.6 7.5-9.1 20.7-1 28.8l53.4 53.5c8 8.1 21.2 7.6 28.7-1L177.1 402l35.7 35.7c19.7 19.7 44.6 30.5 70.3 33.3-7.1-17-11-35.6-11-55.1-.1-13.8 2.5-27 6.2-39.7zM416 320c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" /></svg>
      )
    },
    {
      title: "Analytical Problem Solving",
      description: "Logic-first approach using data-driven decision-making to optimize performance.",
      icon: (
        <svg width="24" height="24" className="text-[var(--primary-accent-color)] mt-1 flex-shrink-0" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z" /></svg>
      )
    }
  ];

  const weaknesses = [
    {
      title: "Advanced Language Internals (C#)",
      description: "Deepening mastery via 'C# in Depth', focusing on memory management and async patterns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary-accent-color)] mt-1 flex-shrink-0">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      )
    },
    {
      title: "Scalable Infrastructure (AWS)",
      description: "Expanding knowledge to architect robust systems for large-scale user bases.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary-accent-color)] mt-1 flex-shrink-0">
          <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      )
    },
    {
      title: "Strategic Time Management",
      description: "Refining systems to balance intensive coding sprints with academic commitments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary-accent-color)] mt-1 flex-shrink-0">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "Collaborative Leadership",
      description: "Adopting professional project management frameworks for international team collaboration.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary-accent-color)] mt-1 flex-shrink-0">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  const strengthsListRef = useRef(null);
  const weaknessesListRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0, // Adjust as needed
      }
    );

    const listItemsStrength = strengthsListRef.current.querySelectorAll("li");
    const listItemsWeakness = weaknessesListRef.current.querySelectorAll("li");

    listItemsStrength.forEach((item) => observer.observe(item));
    listItemsWeakness.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="page2" className="page2 relative py-16 md:py-24">
      <div className="flex flex-col gap-12 items-center w-full px-4 md:px-8 max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 w-full">

          {/* Strengths Section */}
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-1 w-12 bg-gradient-to-r from-[#8B2C40] to-[#72363E] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-text)]">Strengths</h2>
            </div>

            <ul ref={strengthsListRef} className="flex flex-col gap-6 duration-700">
              {strengths.map((item, index) => (
                <li
                  key={index}
                  className="about-me-list-item glass-card p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                >
                  <div className="flex gap-5 items-start">
                    {item.icon}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-[1.05rem] text-gray-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Growth Opportunities Section */}
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-1 w-12 bg-gradient-to-r from-[#72363E] to-[#8B2C40] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-text)]">Growth</h2>
            </div>

            <ul ref={weaknessesListRef} className="flex flex-col gap-6">
              {weaknesses.map((item, index) => (
                <li
                  key={index}
                  className="about-me-list-item glass-card p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                >
                  <div className="flex gap-5 items-start">
                    {item.icon}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-[1.05rem] text-gray-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
