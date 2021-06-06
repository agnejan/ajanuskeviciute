module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      maxHeight: {
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: { appearance: ["hover"] },
  },
  plugins: [],
};
