export function Header() {
  return (
    <div className="sticky header top-0 h-[60px] z-[9] glass-panel">
      <div className="headerContent flex flex-row gap-[10px] items-center h-full px-6">
        <div className="w-[50%]">
          <h1 className="text-[20px] font-bold text-[var(--primary-text)]">
            <a href="#page1" className="hover:cursor-pointer hover:text-[var(--primary-accent-color)] transition-colors">
              Portfolio
            </a>
          </h1>
        </div>

        <div className="w-[50%] text-[var(--primary-text)] justify-end flex items-center gap-[30px] max-sm:gap-[15px] flex-row text-sm md:text-base">
          <a href="#page2" className="hover:cursor-pointer hover:text-[var(--primary-accent-color)] transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-accent-color)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#page3" className="hover:cursor-pointer hover:text-[var(--primary-accent-color)] transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-accent-color)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#page4" className="hover:cursor-pointer hover:text-[var(--primary-accent-color)] transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-accent-color)] transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
