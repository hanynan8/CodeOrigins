/** @type {import('tailwindcss').Config} */
// Colours are CSS variables (see app/globals.css) so the whole site can switch
// between dark (default) and light mode.
const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: c("blue"),
        // text colour that flips with the theme (white in dark, navy in light)
        ink: c("ink"),
        gray: {
          200: c("g200"),
          300: c("g300"),
          400: c("g400"),
        },
        // CodeLegacy brand identity
        brand: {
          bg: c("bg"),         // page background
          alt: c("alt"),       // alternating section background
          card: c("card"),     // cards / panels
          card2: c("card2"),   // raised / hover panels
          line: c("line"),     // borders
          blue: c("blue"),     // electric blue (circuit lines)
          sky: c("sky"),
          cyan: c("cyan"),     // glowing "Legacy" cyan
        },
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        "glow-cyan": "var(--shadow-glow-cyan)",
      },
      dropShadow: {
        neon: "0 0 12px rgba(48,216,248,.65)",
      },
    },
  },
  plugins: [],
};
