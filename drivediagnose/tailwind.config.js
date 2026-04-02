/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:  "#0f172a",
        navy2: "#1e293b",
        brand: "#f97316",
      },
    },
  },
  plugins: [],
};
