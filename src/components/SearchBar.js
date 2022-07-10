import { MagnifyingGlass } from "phosphor-react";

const SearchBar = ({ placeholder, hasButton = false }) => {
  return (
    <div className="flex justify-between h-16 mx-4">
      <div className="flex min-w-[26rem] mx-6 my-3 py-2.5 px-3 !text-gray-800 bg-gray-100 rounded-md cursor-pointer transition-colors duration-150 hover:bg-gray-100">
        <MagnifyingGlass weight="bold" className="w-5 h-5" />
        <input
          type="text"
          name="query"
          className="w-full mx-2 bg-transparent focus:outline-none focus-within:outline-none"
          placeholder={placeholder}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary !mx-0"
        hidden={!hasButton}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
