import React from "react";
import Head from "next/head";
import { ThemeProvider, useTheme } from "../context/useThemeContext";
import NavBar from "./navBar/NavBar";

export interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const darkMode = useTheme();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-roboto">
          <header>
            <NavBar />
          </header>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
