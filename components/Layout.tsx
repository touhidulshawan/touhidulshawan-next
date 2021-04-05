import React from "react";
import Head from "next/head";
import { ThemeProvider } from "../context/useThemeContext";
import NavBar from "./navBar/NavBar";

export interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
