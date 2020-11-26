const formatDate = require("date-fns/format");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk", "png"]);

  eleventyConfig.addNunjucksAsyncFilter("date", function (
    date,
    format,
    callback,
  ) {
    callback(null, formatDate(date, format));
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: "excerpt",
    excerpt_separator: "<!-- more -->",
  });

  eleventyConfig.addCollection("blogposts", function (collection) {
    return collection.getFilteredByGlob("./src/blog/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
