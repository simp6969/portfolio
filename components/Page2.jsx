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
  return (
    <div className="page2 flex justify-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <div className="info-container flex flex-col md:flex-row gap-8 p-8 md:p-12 lg:p-20">
          <section className="flex flex-col gap-2 border-r-2 border-gray-500 pr-8 md:pr-12">
            <h2 className="section-heading">Strengths:</h2>
            <ul className="list-disc list-inside">
              {strengths.map((strength, index) => (
                <li key={index} className="text-lg">
                  {strength}
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="section-heading">Weaknesses:</h2>
            <ul className="list-disc list-inside">
              {weaknesses.map((weakness, index) => (
                <li key={index} className="text-lg">
                  {weakness}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <p className="text-white">Interested in learning more?</p>
        <button
          aria-label="Scroll down to contact section"
          className="hover:animate-none p-2 rounded-full border-2 bg-[white]"
        >
          <svg
            className="size-8 text-[#001220]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
