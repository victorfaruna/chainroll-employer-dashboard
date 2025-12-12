import React from "react";

const SearchBox = () => {
  return (
    <div className="px-4 w-96 py-2.5 flex items-center gap-2 bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 text-gray-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search"
        className="w-full placeholder-gray-500 bg-transparent outline-0 border-0 focus:outline-none focus:border-0"
      />
      <div className="flex items-center justify-center gap-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-command size-3 inline-block text-gray-400"
        >
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        </svg>{" "}
        <span className="text-gray-400 font-semibold">+</span>
        <span className="text-gray-400 font-medium">F</span>
      </div>
    </div>
  );
};

export default SearchBox;
