import SearchBox from "../ui/SearchBox";

const Header = () => {
  return (
    <header className="w-full max-w-[1600px] bg-gray-50/80 h-18 py-4 pr-10 px-6 flex items-center justify-between border-bb border-secondary/10">
      <SearchBox />
      <div className="flex gap-2 items-center">
        <div className={`size-10 rounded-lg overflow-hidden`}>
          {/* Fallback to color if image fails (though standard img tag usually handles src) */}
          <img
            src="https://i.pravatar.cc/150?u=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between gap-1 h-full">
          <p className="leading-none font-medium text-[1rem]">James Franco</p>
          <p className="text-gray-400 leading-none">Team Lead</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
