module.exports = {
  purge: ["src/**/*.njk", "src/**/*.md", "src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
