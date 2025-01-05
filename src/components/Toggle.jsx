import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    setIsDark(selectedTheme === "dark");
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="relative cursor-pointer" onClick={toggleTheme}>
      <div className={`absolute transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
        <Sun className="h-6 w-6 text-yellow-500" />
      </div>
      <div className={`transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <Moon className="h-6 w-6 text-slate-300" />
      </div>
    </div>
  );
};

export default Toggle;
