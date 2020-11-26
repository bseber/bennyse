const defaultConfig = require("tailwindcss/defaultConfig.js");

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
      ...defaultConfig.theme.screens,
    },
    fontSize: {
      xxs: "0.6rem",
      ...defaultConfig.theme.fontSize,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
