import React from "react";
import { TbSunMoon } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Header({ toggleTheme, theme, setCurrentPage }) {
  return (
    <header className="p-4 bg-[#2C2842] text-white flex justify-between items-center">
      <h1 className="text-4xl font-bold">MyWorkoutBuddy</h1>
      <nav className="space-x-4">
        <ul className="flex gap-8 text-xl pr-67">
          <li>
            <button
              onClick={() => setCurrentPage("home")}
              className={`hover:text-blue-300 flex gap-1`}
            >
              Home <FaHome className="mt-1" size={22} />
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("favorites")}
              className={`hover:text-blue-300 flex gap-1`}
            >
              Favorites <FaHeart className="mt-1" />
            </button>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="p-2 bg-gray-600 rounded">
        {theme === "light" ? (
          <TbSunMoon className="text-yellow-500" size={24} />
        ) : (
          <TbSunMoon className="text-blue-500" size={24} />
        )}
      </button>
    </header>
  );
}

export default Header;
