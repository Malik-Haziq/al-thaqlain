/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: "#FFE985",
          400: "#F5C800",
          500: "#E0B700",
          600: "#CCA700",
        },
      },
      backgroundImage: {
        headerBg:
          "linear-gradient(rgba(1,1,1,.5), rgba(1,1,1,.9)), url('/src/assets/home/Arbaeen.jpg.webp')",
      },
    },
    fontFamily: { playfairDisplay: "Playfair Display" },
  },
  plugins: [],
};
