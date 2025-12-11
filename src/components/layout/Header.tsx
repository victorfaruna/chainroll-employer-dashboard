import SearchBox from "../ui/SearchBox";

const Header = () => {
  return (
    <header className="w-full h-16 py-4 bg-primary px-6 flex items-center justify-between border-b border-secondary/10">
      <SearchBox />
    </header>
  );
};

export default Header;
