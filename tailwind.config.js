const production = process.env.NODE_ENV === "production";

module.exports = {
  purge: {
    content: ["src/**/*.njk", "src/**/*.md", "src/**/*.html"],
    enabled: production,
  },
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
