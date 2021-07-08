import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const Bio: React.FC = () => {
  return (
    <div className="px-4 py-2 md:max-w-xl mx-auto md:py-4 md:px-3">
      <h1 className="text-sm md:text-lg lg:text-xl pb-2 tracking-wide text-gray-700 dark:text-gray-300">
        Hi, I am{" "}
        <span className="text-2xl md:4xl lg:6xl text-gray-800 dark:text-blue-300">
          Touhidul Shawan
        </span>{" "}
      </h1>
      <h2 className=" text-gray-500 dark:text-gray-400 pb-3 uppercase tracking-widest font-bold filter drop-shadow-md">
        Web Developer
      </h2>
      <p className="leading-7 tracking-tight text-sm text-gray-900 pb-3 md:text-lg md:tracking-wide md:text-gray-700 dark:text-gray-200 lg:leading-8">
        I am a self-taught Web Developer. I build website using modern
        technologies like React, Nextjs, Tailwindcss, Nodejs.
      </p>
      <p className="leading-7 tracking-tight text-sm text-gray-900 pb-3 md:text-lg md:tracking-wide md:text-gray-700 dark:text-gray-200 lg:leading-8">
        Already, I have worked as freelancer in Fiverr. I have become an
        one-level seller in Fiverr. I am looking for opportunities to work
        full-time as a Web Developer.
      </p>

      <div className="flex justify-start items-center space-x-2 py-3">
        <FaHandPointRight className="w-5 h-5 text-blue-500 dark:text-yellow-400 animate-pulse" />
        <a
          href="mailto:touhidulshawan@gmail.com"
          className="text-blue-600 border-b-4 border-opacity-0 border-blue-400 hover:border-opacity-100 focus:border-opacity-75 transform transition duration-200 md:text-lg dark:text-blue-400"
        >
          touhidulshawan@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Bio;
