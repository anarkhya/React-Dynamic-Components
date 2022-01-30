module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blanc: "#FFF",
        gris_clair: "#EEE",
        rose: "#f7c2d4",
        vert: "#275852",
      },
      fontFamily: {
        sans: ["Amatic\\ SC", "cursive"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        mini: "12px",
        normal: "16px",
        h2: "18px",
        h1: "36px",
      },
    },
  },
  plugins: [],
};
