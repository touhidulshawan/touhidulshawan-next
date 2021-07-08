import React from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { RiMoonLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { AiFillFilePdf } from "react-icons/ai";
import { useTheme, useToggleTheme } from "../../context/useThemeContext";

const TopBar = () => {
  const darkMode = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <div className="p-6 flex justify-between items-center space-x-4 ">
      <div>
        {darkMode ? (
          <RiMoonLine
            onClick={toggleTheme}
            className="w-6 h-6 focus:outline-none focus:ring-4 dark:text-red-400 animate-pulse cursor-pointer"
          />
        ) : (
          <FiSun
            onClick={toggleTheme}
            className="w-6 h-6 focus:outline-none focus:ring-4 text-red-600 animate-spin-slow cursor-pointer"
          />
        )}
      </div>
      <div className="flex flex-row-reverse items-center gap-4">
        <Link href="https://github.com/touhidulshawan">
          <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub className="w-7 h-7 border-2 border-blue-500 rounded-full  animate-pulse focus:outline-none focus:ring-4 dark:border-blue-300 dark:text-gray-300 " />
          </a>
        </Link>
        <a
          onClick={() => window.open("/_resume/TouhidulShawan.pdf")}
          // href="https://github.com/touhidulShawan/resume/blob/main/Touhidul%20Shawan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <AiFillFilePdf className="w-7 h-7 text-red-600 dark:text-red-400 lg:animate-bounce focus:outline-none focus:ring-4 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
