// Page2.jsx
"use client";
import { useEffect, useRef } from "react";

export function AboutMePage() {
  const strengths = [
    "Studied React framework NextJS for 2 years",
    "CSS, HTML, and JavaScript basic knowledge",
    "Graduated Pinecone coding academy in 2023",
    "Basic Python understanding",
    "Always relaxed",
    "Works smart, not hard",
    "Grasp of Tailwind",
  ];
  const weaknesses = [
    "Limited knowledge towards Amazon database",
    "Prefers to work late at night due to focus",
    "Sleeps when tired, eats when hungry",
    "Little busy half the week",
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
    <div className="page2 flex justify-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <div className="info-container flex flex-col md:flex-row gap-8 p-8 md:p-12 lg:p-20">
          <section className="flex flex-col gap-2 border-r-2 border-gray-500 pr-8 md:pr-12">
            <h2 className="section-heading">Strengths:</h2>
            <ul ref={strengthsListRef} className="list-disc list-inside">
              {strengths.map((strength, index) => (
                <li key={index} className="text-[25px] about-me-list-item">
                  {strength}
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="section-heading">Weaknesses:</h2>
            <ul ref={weaknessesListRef} className="list-disc list-inside">
              {weaknesses.map((weakness, index) => (
                <li key={index} className="text-[25px] about-me-list-item">
                  {weakness}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
