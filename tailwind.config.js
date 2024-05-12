/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: { 400: "#ffd315", 500: "#ffd316" },
      },
    },
  },
  plugins: [],
};
