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
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
