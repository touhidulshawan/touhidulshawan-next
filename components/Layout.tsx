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
        <meta name="trustpilot-one-time-domain-verification-id" content="1a43d94c-dcee-4630-ad19-b6a7106041e3"/>
        <meta name="66cf513c-ceaa-48d2-a761-fa35d1a51993" content="1a43d94c-dcee-4630-ad19-b6a7106041e3"/>
        <meta name="theme-color" content="#0F172A" />
        <meta
          name="description"
          content="A Portfolio website about Touhidul Shawan. This Website represent Touhidul Shawan's skills, projects, reviews and little bit of intro about him"
        />
        <meta name="application-name" content="Touhidul Shawan" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Touhidul Shawan" />
        <meta
          name="description"
          content="A Portfolio website about Touhidul Shawan."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/android-chrome-192x192.png" rel="icon" sizes="192x192" />
        <link href="/android-chrome-512x512.png" rel="icon" sizes="512x512" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" />
        <title>{title}</title>
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
