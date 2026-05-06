// Header.tsx
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header
      className="fixed z-30 w-full top-0 left-0 right-0 border-b backdrop-blur-xl"
      style={{
        background: "rgba(var(--surface-rgb), 0.85)",
        borderColor: "rgba(var(--border-rgb), 0.16)",
      }}
    >
      <div className="mx-auto section-shell">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-theme bg-[rgba(var(--foreground-rgb),0.06)] px-4 py-2 text-sm font-semibold text-theme shadow-sm shadow-[rgba(var(--shadow-rgb),0.16)]">
              DB
            </div>
            <div>
              <p className="text-base font-semibold text-theme">Diptanshu Bhawsar</p>
              <p className="text-xs text-theme-muted">Full-stack AWS & AI Product Engineer</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-theme-muted">
            <a className="transition hover:text-theme" href="#work">
              Work
            </a>
            <a className="transition hover:text-theme" href="#about">
              About
            </a>
            <a className="transition hover:text-theme" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-theme" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="pill text-sm">Open to opportunities</span>
            <button
              onClick={toggleTheme}
              className="rounded-full p-3 hover:bg-[rgba(var(--foreground-rgb),0.08)] transition-colors duration-200 text-theme"
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
