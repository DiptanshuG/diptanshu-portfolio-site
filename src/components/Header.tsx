// Header.tsx
import React from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="fixed z-20 w-screen top-0 left-0 right-0 p-6 bg-transparent backdrop-filter backdrop-blur-md flex justify-between items-center">
      {/* <div className="cursor-pointer">
        <IoMenu size={60} />
      </div> */}
      <button onClick={toggleTheme}>
        {theme === "light" ? <FaMoon size={40} /> : <FaSun size={40} />}
      </button>
    </div>
  );
};

export default Header;
