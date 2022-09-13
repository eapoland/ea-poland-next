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
        primary: "#0b879d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
