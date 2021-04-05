import React from "react";
import Link from "next/link";

interface LinkPathProps {
  linkpPath: string;
  linkName: string;
}

const NavItem: React.FC<LinkPathProps> = ({ linkpPath, linkName }) => {
  return (
    <li className="list-none">
      <Link href={linkpPath}>
        <a className="text-sm  uppercase tracking-wide text-purple-600 hover:text-purple-300 focus:outline-none focus:ring-2 ring-purple-600 ring-offset-2 active:text-purple-800 transform transition duration-300 ease-in-out md:text-base  md:tracking-wider dark:text-gray-300 dark:hover:text-yellow-500">
          {linkName}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
