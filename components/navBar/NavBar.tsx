import React from "react";
import NavItem from "./NavItem";
import TopBar from "./TopBar";

const NavBar: React.FC = () => {
  return (
    <>
      <TopBar />
      <nav className="py-3 lg:-mt-3 lg:mb-3">
        <ul className="flex justify-center items-center space-x-3 md:space-x-4 lg:space-x-5">
          <NavItem linkPath="/" linkName="Home" />
          <NavItem linkPath="/projects" linkName="Projects" />
          <NavItem linkPath="/skills" linkName="Skills" />
          <NavItem linkPath="/reviews" linkName="Reviews" />
          <li>
            <a
              className="uppercase text-sm text-yellow-600 hover:text-yellow-300 focus:outline-none focus:ring-2 ring-yellow-600 ring-offset-2 active:text-yellow-800 transform transition duration-300 ease-in-out md:text-base lg:text-lg md:tracking-wider animate-pulse dark:text-yellow-300 dark:hover:text-yellow-600 cursor-pointer "
              onClick={() => window.open("/_resume/TouhidulShawan.pdf")}
              // href="https://github.com/touhidulShawan/resume/blob/main/Touhidul%20Shawan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
