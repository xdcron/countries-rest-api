import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function Search({ onSubmit }) {
  const [query, setQuery] = useState("");

  async function handleSubmit() {
    try {
      if (!query) return;
      await onSubmit(query);
    } catch (err) {
      throw new Error("Something went wrong");
    } finally {
    }
  }

  return (
    <form className="bg-white dark:bg-darkBlue transition-all duration-200 flex items-center py-3 gap-6 w-full md:w-[400px] px-8 text-[1rem] shadow-md rounded">
      <button>
        <span className=" sr-only">search</span>
        <HiMagnifyingGlass />
      </button>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSubmit();
        }}
        className="w-full focus:outline-none dark:bg-darkBlue duration-200"
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
}

export default Search;
