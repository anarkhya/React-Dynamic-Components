module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#333",
        primary: "#faf6ed",
        secondary: "#87b",
        ternary: "#0aa",
        accent: "#f06",
      },
      fontFamily: {
        sans: ["simply", "sans-serif"],
        headlines: ["zergei", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        mini: "12px",
        normal: "18px",
        h2: "24px",
        h1: "36px",
      },
    },
  },
  plugins: [],
};
