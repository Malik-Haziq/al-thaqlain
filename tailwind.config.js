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
          100: "#292929",
          200: "#161618",
          300: "#121212",
          400: "#0A0A0A",
          500: "#1F1F1F",
          600: "#303030",
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
          "linear-gradient(rgba(1,1,1,.3), rgba(1,1,1,.3)), url('src/assets/contact/contact.webp')",
        contactBg:
          "linear-gradient(rgba(1,1,1,.3), rgba(1,1,1,.3)), url('/src/assets/contact/contact.webp')",
        KarbalaBg:
          "linear-gradient(rgba(1,1,1,.5), rgba(1,1,1,.5)), url('/src/pages/About/Karbala.webp')",
      },

      screens: {
        xs: "520px",
        mdx: "870px",
      },
    },
    fontFamily: {
      playfairDisplay: "Playfair Display",
      openSans: "Open Sans",
    },
  },
  plugins: [],
};
