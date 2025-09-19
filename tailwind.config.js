/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondarywhite: "#F2F1FF",
        primaryblue: "#00DADA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kalam: ["Kalam", "sans-serif"],
      },
    },
  },
  plugins: [],
};
