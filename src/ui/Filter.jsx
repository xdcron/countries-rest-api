import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import FilterOption from "./FilterOption";

const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

function Filter({ option, onChange, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOption(opt) {
    if (opt === option) return;
    onChange(opt);
    onClick(opt);
    setIsOpen(!isOpen);
  }

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative  w-[190px]">
      <button
        onClick={handleOpen}
        id="countries-filter"
        className="bg-white dark:bg-darkBlue transition-all duration-200 py-3 px-5 font-medium  flex items-center justify-between rounded shadow-md w-full"
      >
        {option === "" ? "Filter by region" : option}
        <span>
          <HiChevronDown />
        </span>
      </button>
      {isOpen && (
        <div
          aria-labelledby="countries-filter"
          role="filter"
          className="bg-white 
          text-[0.9rem] dark:bg-darkBlue transition-all duration-200 md:absolute w-full rounded shadow-md mt-3  flex flex-col font-semibold pt-3 pb-4"
        >
          {options.map((option, i) => (
            <FilterOption key={i} onClick={handleOption} option={option} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
