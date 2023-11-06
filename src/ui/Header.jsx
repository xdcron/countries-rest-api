import DarkMode from "./DarkMode";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex justify-between items-center px-8 md:px-20 py-7 dark:bg-darkBlue transition-all duration-200">
      <Logo />
      <DarkMode />
    </header>
  );
}

export default Header;
