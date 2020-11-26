const production = process.env.NODE_ENV === "production";

module.exports = {
  purge: {
    content: ["src/**/*.njk", "src/**/*.md", "src/**/*.html"],
    enabled: production,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      ...require("tailwindcss/defaultConfig.js").theme.screens,
    },
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
