module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a3a2e",
        secondary: "#2d5f4d",
        accent: "#4a9d7f",
        dark: "#0f1e19",
        "bg-dark": "#1a2e25",
        "card-dark": "#1f3a30",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
