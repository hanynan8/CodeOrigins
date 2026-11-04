/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CodeLegacy brand identity (sampled from the brand banner + ad)
        primary: "#1e5bff",
        brand: {
          bg: "#01061a",       // page background (same darkness as banner)
          alt: "#020a26",      // alternating section background
          card: "#04123a",     // cards / panels
          card2: "#061a52",    // raised / hover panels
          line: "#0b2d8a",     // borders
          blue: "#1e5bff",     // electric blue (circuit lines)
          sky: "#2f8bff",
          cyan: "#30d8f8",     // glowing "Legacy" cyan
        },
      },
      boxShadow: {
        glow: "0 0 18px rgba(30,91,255,.55), 0 0 40px rgba(30,91,255,.25)",
        "glow-cyan": "0 0 18px rgba(48,216,248,.55), 0 0 40px rgba(48,216,248,.2)",
      },
      dropShadow: {
        neon: "0 0 12px rgba(48,216,248,.65)",
      },
    },
  },
  plugins: [],
};
