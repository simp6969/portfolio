// Page2.jsx
"use client";
import { useEffect, useRef } from "react";

export function AboutMePage() {
  const strengths = [
    "Studied React framework NextJS for 2 years.",
    "Strong knowledge of CSS, HTML, and JavaScript.",
    "Graduated Pinecone coding academy.",
    "Solid foundation in Python.",
    "A great leader who works smart, not hard.",
    "Makes decisions based on facts, not emotions.",
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
    <div id="page2" className="page2 flex justify-center items-center w-[full]">
      <div className="flex flex-col gap-5 items-center w-full px-4 md:px-8">
        <div className="info-container flex flex-col md:flex-row gap-8 p-4 md:p-8 lg:p-12 w-[100vw] max-w-5xl">
          <section className="flex flex-col gap-2 border-r-0 md:border-r-2 border-[var(--primary-accent-color)] md:pr-8 sm-[770px]:w-[100%] w-[100%]">
            <h2 className="section-heading text-2xl md:text-3xl">Strengths:</h2>
            <ul ref={strengthsListRef} className="list-disc list-inside">
              {strengths.map((strength, index) => (
                <li
                  key={index}
                  className="text-lg md:text-xl about-me-list-item py-2"
                >
                  {strength}
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-2 w-[100%] md-[770px]:w-[100%]">
            <h2 className="section-heading leading-[40px] text-2xl md:text-3xl">
              Growth Opportunities:
            </h2>
            <ul ref={weaknessesListRef} className="list-disc list-inside">
              {weaknesses.map((weakness, index) => (
                <li
                  key={index}
                  className="text-lg md:text-xl about-me-list-item py-2"
                >
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
