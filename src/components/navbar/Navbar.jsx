import { useState, useEffect } from "react";

import { DarkModeToggle } from "./DarkModeToggle";
import { HeaderInfo } from "./HeaderInfo";

export const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "" ? "dark" : ""));
  };

  return (
    <header className="md:flex md:justify-between">
      <HeaderInfo />
      <DarkModeToggle handleChangeTheme={handleChangeTheme} />
    </header>
  );
};
