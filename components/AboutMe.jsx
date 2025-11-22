// Page2.jsx
"use client";
import { useEffect, useRef } from "react";

export function AboutMePage() {
  const strengths = [
    "Studied React framework NextJS for 4 years.",
    "Strong knowledge of CSS, HTML, and JavaScript.",
    "Solid foundation in Python.",
    "Highly competitive and focused, demonstrated through proficiency in table tennis.",
    "Demonstrated strategic thinking and complex problem-solving abilities, reflected in a chess rating of 1200 elo.",
  ];
  const weaknesses = [
    "Actively expanding expertise in AWS database and cloud infrastructure.",
    "Highly effective during periods of deep work and peak focus.",
    "Developing rigorous testing and review processes for higher code quality.",
    "Committed to strengthening project execution for punctual delivery of all deadlines.",
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
        threshold: 0.2, // Adjust as needed
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
    <div id="page2" className="page2 relative">
      <div className="flex flex-col gap-12 items-center w-full px-4 md:px-8 max-w-7xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 w-full">
          
          {/* Strengths Section */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-[#8B2C40] to-[#72363E] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-text)]">Strengths</h2>
            </div>
            
            <ul ref={strengthsListRef} className="flex flex-col gap-4">
              {strengths.map((strength, index) => (
                <li
                  key={index}
                  className="about-me-list-item glass-card p-6 rounded-xl text-lg text-[var(--primary-text)]"
                >
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl font-bold text-[var(--primary-accent-color)]">-</span>
                    <p>{strength}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Growth Opportunities Section */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-[#72363E] to-[#8B2C40] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-text)]">Growth</h2>
            </div>

            <ul ref={weaknessesListRef} className="flex flex-col gap-4">
              {weaknesses.map((weakness, index) => (
                <li
                  key={index}
                  className="about-me-list-item glass-card p-6 rounded-xl text-lg text-[var(--primary-text)]"
                >
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl font-bold text-[var(--primary-accent-color)]">-</span>
                    <p>{weakness}</p>
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
