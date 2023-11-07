import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";

function DarkMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <button
      onClick={handleTheme}
      className="flex items-center gap-2 font-bold text-veryDarkBlueText md:text-[1rem] text-[0.8rem] dark:text-white "
    >
      {<RiMoonFill color={theme === "dark" ? "white" : "black"} />}
      <span>Dark Mode</span>
    </button>
  );
}

export default DarkMode;
