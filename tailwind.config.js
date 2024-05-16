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
        black: {
          100: "#1F1F1F",
          200: "#161618",
          300: "#121212",
          400: "#0A0A0A",
          500: "#1F1F1F",
        },
        white: {
          100: "#ADADAD",
          200: "#BDBDBD",
          300: "#DADADA",
          400: "#E9E9E9",
          500: "#fdfdfd",
        },
      },
      backgroundImage: {
        headerBg:
          "linear-gradient(rgba(1,1,1,.5), rgba(1,1,1,.8)), url('/src/assets/home/header-bg.webp')",
      },
    },
    fontFamily: {
      playfairDisplay: "Playfair Display",
      openSans: "Open Sans",
    },
  },
  plugins: [],
};
