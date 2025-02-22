export function Page1() {
  return (
    <>
      <div className="w-[40%] HeaderText text-right flex justify-center gap-[5px]  flex-col">
        <p className="text-[22px] text-[#e8dad7] font-bold">
          Hi, my name is Ariunbold
        </p>
        <h1 className="text-[#e8dad7]">Full-stack developer</h1>
        <div className="flex justify-end gap-[20px]">
          <button className="bg-[#e8dad7] relative z-10 hover:bg-[#fffff5] duration-700 text-[#0e1424] w-[130px] h-[50px] p-[10px] px-[15px] font-bold text-[19px] rounded-[5px]">
            Contact
          </button>
          <button className=" w-[130px] pointer-events-auto relative z-10 h-[50px] border-2 border-[#e8dad7] duration-700 hover:bg-[#1e2a4b] rounded-[5px] font-bold text-[19px]">
            Projects
          </button>
        </div>
      </div>
      <div className="w-[50%] h-[100%] !flex items-start justify">
        <div
          className={
            "absolute mt-[150px] ml-[20px] h-[400px] blobContainer w-[400px] "
          }
        />
        <img
          className="scale-[1.7] myPhoto z-10 relative"
          src="./me2.jpg"
        ></img>
      </div>
      <div className="pointer-events-none" id="starContainer"></div>
    </>
  );
}
