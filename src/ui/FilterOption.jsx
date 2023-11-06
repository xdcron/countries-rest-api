function FilterOption({ option, onClick }) {
  return (
    <div
      className="px-7 py-3  cursor-pointer hover:bg-veryLightGrey dark:hover:bg-veryDarkBlue"
      onClick={() => onClick(option)}
    >
      {option}
    </div>
  );
}

export default FilterOption;
