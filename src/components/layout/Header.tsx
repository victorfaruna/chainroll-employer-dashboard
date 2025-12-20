import SearchBox from "../ui/SearchBox";

const Header = () => {
  return (
    <header className="w-full max-ww-[1600px] h-18 py-4 pr-10 px-6 flex items-center justify-between border-bb border-secondary/10">
      <SearchBox />
      <div className="flex gap-5 items-center">
        <button className="cursor-pointer flex items-center justify-center size-10 bg-gray-200/50 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>

        <div
          className={`size-10 rounded-full border border-accent overflow-hidden`}
        >
          {/* Fallback to color if image fails (though standard img tag usually handles src) */}
          <img
            src="https://i.pravatar.cc/150?u=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
