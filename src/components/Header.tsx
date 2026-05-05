// Header.tsx
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed z-30 w-full top-0 left-0 right-0 border-b border-white/10 backdrop-blur-xl bg-black/30">
      <div className="mx-auto section-shell">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-black/20">
              DB
            </div>
            <div>
              <p className="text-base font-semibold text-white">Diptanshu Bhawsar</p>
              <p className="text-xs text-white/60">Frontend Product Engineer</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="pill text-sm">Open to opportunities</span>
            <button
              onClick={toggleTheme}
              className="rounded-full p-3 hover:bg-white/10 transition-colors duration-200 text-white"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
