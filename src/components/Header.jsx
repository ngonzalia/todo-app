import { useState, useEffect } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setdarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    // Swtich dark mode on or off and render each time it's changed
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between px-4 pt-8">
      <h1 className="select-none text-3xl font-bold tracking-[.75rem] text-white">
        TODO
      </h1>
      <button onClick={() => setdarkMode(!darkMode)}>
        {darkMode ? <IconSun /> : <IconMoon />}
      </button>
    </header>
  );
};

export default Header;
