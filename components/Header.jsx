export function Header() {
  return (
    <div className="sticky header top-0 h-[auto] z-[999999]">
      <div className="headerContent flex flex-row gap-[10px]">
        <div className="w-[50%]">
          <h1 className="text-[25px] h-[35px] text-[white]">
            <a href="#page1" className="hover:cursor-pointer">
              Portfolio
            </a>
          </h1>
        </div>

        <div className="w-[50%] text-[white] justify-end flex items-center gap-[30px] max-sm:gap-[10px] max-[360px]:gap-[5px] flex-row">
          <a href="#page2" className="hover:cursor-pointer">
            About
          </a>
          <a href="#page3" className="hover:cursor-pointer">
            Projects
          </a>
          <a href="#page4" className="hover:cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
