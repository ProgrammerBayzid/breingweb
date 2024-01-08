/** @type {import('tailwindcss').Config} */
// import "@fontsource/alinur-tatasama";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans Bengali", "sans-serif"],
      },
    },
  },
  plugins: [],
};
