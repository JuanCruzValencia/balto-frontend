/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      main: "#E9FFFF",
      green: "#96DBDB",
      font: "#333333",
      text: "#777777",
      white: "#ffffff",
      footer: "#008080",
    },
    fontSize: {
      xs: "14px",
      s: "16px",
      m: "22px",
      l: "36px",
      xl: "48px",
    },
    fontFamily: {
      sans: ["Tauri", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
