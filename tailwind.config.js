/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: "#003B95",
          200: "#003B95",
        },
        header: {
          100: "#003B95",
        },
        black: {
          100: "#0A0A0A", // Other Text 
          200: "#1A1A1A", // Heading
          300: "#000000",
          400: "#333333",
          500: "#",
          600: "#",
        },
        white: {
          100: "#ffffff",
          200: "#151414",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#000000",
          700: "#000000",
          800: "#999999",
        },
        gray: {
          100: "#232323",
          200: "#3D3D3D",
          300: "#F5F5F5",
          400: "#fbfbfb",
          500: "#F5F5F5",
        },
        green: {
          100: "#095E54",
        },
      },
      backgroundImage: {
        headerBg:
          "linear-gradient(rgba(1,1,1,.3), rgba(1,1,1,.3)), url('src/assets/contact/contact.webp')",
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
