import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TbSunMoon } from "react-icons/tb";
import { FaHome, FaHeart } from "react-icons/fa";

function Header({ toggleTheme, theme }) {
  const location = useLocation();

  return (
    <header className="p-4 bg-[#2C2842] text-white flex flex-row justify-between items-center gap-4 md:gap-0">
      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">MyWorkoutBuddy</h1>
  
      <nav className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row justify-center md:gap-8 text-lg md:text-xl items-center">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-300 flex gap-1 ${location.pathname === "/" ? "text-blue-300" : ""}`}
            >
              Home <FaHome className="mt-1" size={22} />
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className={`hover:text-blue-300 flex gap-1 ${location.pathname === "/favorites" ? "text-blue-300" : ""}`}
            >
              Favorites <FaHeart className="mt-1" />
            </Link>
          </li>
        </ul>
      </nav>

      <button onClick={toggleTheme} className="p-2 bg-gray-600 rounded self-center">
        <TbSunMoon className={theme === "light" ? "text-yellow-500" : "text-blue-500"} size={24} />
      </button>
    </header>
  );
}

export default Header;
