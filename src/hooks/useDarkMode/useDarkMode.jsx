import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode")
      ? localStorage.getItem("isDarkMode") === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
