import React from "react";
import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";
import { useTheme } from "../context/useThemeContext";

const Page404: React.FC = () => {
  const darkMode = useTheme();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="p-4 bg-purple-500 h-64 ">
          <object
            className="m-auto h-full w-full "
            data="/img/404.svg"
            type="image/svg+xml"
          >
            404 Page Image
          </object>
        </div>
        <div className="mt-4">
          <Link href="/">
            <a className=" flex justify-center items-center text-sm">
              <TiArrowBack className="text-3xl text-blue-500 mr-2" />
              <span className="hover:text-purple-700 transition ease-out duration-500 tracking-wide uppercase text-gray-500">
                Back to Home
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
