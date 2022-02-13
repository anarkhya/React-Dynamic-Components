module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#333",
        primary: "#dde",
        accent: "#f08",
        secondary: "#76a",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        headlines: ["zergei", "cursive"],
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
