import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

interface LinkPathProps {
  linkpPath: string;
  linkName: string;
}

const NavItem: React.FC<LinkPathProps> = ({ linkpPath, linkName }) => {
  const { asPath } = useRouter();
  const activeLinkClass =
    asPath === linkpPath
      ? "text-blue-700 dark:text-blue-400"
      : "text-gray-600 dark:text-gray-300";
  return (
    <li className="list-none">
      <Link href={linkpPath}>
        <a
          className={`${activeLinkClass} text-sm  uppercase tracking-wide font-semibold hover:text-purple-300 focus:outline-none focus:ring-2 ring-purple-600 ring-offset-2  transform transition duration-300 ease-in-out md:text-base  md:tracking-wider  dark:hover:text-yellow-500`}
        >
          {linkName}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
