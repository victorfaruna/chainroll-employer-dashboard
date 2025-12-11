import SearchBox from "../ui/SearchBox";

const Header = () => {
  return (
    <header className="w-full bg-gray-50/80 h-18 py-4 px-6 flex items-center justify-between border-bb border-secondary/10">
      <SearchBox />
    </header>
  );
};

export default Header;
