module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      outline: {
        sky: ["2px dashed #38BDF8", "3px"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      animation: ["focus"],
    },
  },
  plugins: [],
};
