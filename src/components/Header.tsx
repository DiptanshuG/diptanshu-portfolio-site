// Header.tsx
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed z-20 w-full top-0 left-0 right-0">
      <div className="mx-auto section-shell">
        <div className="mt-4 rounded-2xl glass-surface flex items-center justify-between px-5 py-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-lg font-semibold tracking-tight text-white">
              Diptanshu Bhawsar
            </span>
            <span className="pill text-sm">Available for new projects</span>
          </div>

          <button
            onClick={toggleTheme}
            className="rounded-full p-3 hover:bg-white/10 transition-colors duration-200 text-white"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
