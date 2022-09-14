module.exports = {
  purge: [
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1366px",
      "2xl": "1366px",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      alt: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#0A6171",
        secondary: "#edcf00",
        mono: "#fafafa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
