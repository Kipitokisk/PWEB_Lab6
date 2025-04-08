import React from "react";
import { TbSunMoon } from "react-icons/tb";
import { Link } from "react-router";

function Header({ toggleTheme, theme }) {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-4xl font-bold">MyWorkoutBuddy</h1>
      <nav className="space-x-4 ">
        <ul className="flex gap-20 text-3xl">
            <li><Link
              to="/exercises"
              className="hover:text-yellow-400 transition-colors"
            >
              Exercises
            </Link></li>
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
