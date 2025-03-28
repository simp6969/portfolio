export function Header() {
  return (
    <div className="sticky header top-0 h-[auto] z-[1]">
      <div className="headerContent flex flex-row gap-[10px]">
        <div className="w-[33.33333333%]">
          <h1 className="text-[25px] text-[white] hover:cursor-pointer">
            <a href="#page1">Portfolio</a>
          </h1>
        </div>
        <div className="w-[33.33333333%]">
          <input
            className="bg-[var(--primary-color)] outline-slate-[1c1c1c] w-[100%] border-2 rounded-[10px] text-[white] p-[5px]"
            placeholder="search..."
          ></input>
        </div>
        <div className="w-[33.33333333%] text-[white] justify-end flex gap-[30px] flex-row">
          <a href="#page1" className="hover:cursor-pointer">
            About
          </a>
          <a href="#page2" className="hover:cursor-pointer">
            Projects
          </a>
          <a href="#page3" className="hover:cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
