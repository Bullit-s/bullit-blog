const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: { ...colors, lightGray: { 50: "#f4f6fa" } },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
