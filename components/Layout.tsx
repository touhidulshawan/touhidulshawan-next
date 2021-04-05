import React from "react";
import Head from "next/head";
import { ThemeProvider, useTheme } from "../context/useThemeContext";
import NavBar from "./navBar/NavBar";

export interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const darkMode = useTheme();
  console.log(darkMode);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
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
