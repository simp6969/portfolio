export function Page2() {
  return (
    <div className="page2 ">
      <div className="flex flex-col justify-center gap-[20px] items-center">
        <div className=" info-container gap-[30px] flex">
          <div className="benefits">
            <h1 className="font_title">Strengths:</h1>
            <p>&#8226; Studied react framework NextJS for 2 years</p>
            <p>&#8226; CSS, HTML and javascript basic knowledge</p>
            <p>&#8226; Graduated Pinecone coding academy in 2023</p>
            <p>&#8226; Basic python understanding</p>
            <p>&#8226; Always relaxed</p>
            <p>&#8226; Does not works hard but smart</p>
            <p>&#8226; Grasp of Tailwind </p>
          </div>
          <div className="disadvantage">
            <h1 className="font_title">Disadvantages:</h1>
            <p>&#8226; Limited knowledges towards amazon database</p>
            <p>&#8226; Prefers to work late at night due to focus</p>
            <p>&#8226; When tired sleeps when hungry eats</p>
            <p>&#8226; Little busy half the week</p>
          </div>
        </div>
        <p className="text-[white]">Interested in learning more?</p>
        <div className="bg-[#ad7c4c]  animate-bounce p-[5px] hover:cursor-pointer rounded-[50%] border-2 border-[#694836]">
          <svg
            className="size-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
