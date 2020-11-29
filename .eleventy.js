const formatDate = require("date-fns/format");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const striptags = require("striptags");
const markdown = require("markdown-it")();

const prod = process.env.NODE_ENV === "production";

const EXCERPT_SEPARATOR = "<!-- more -->";

const markdownToHtml = (text) => markdown.render(text);

function readingTime(article) {
  const words = striptags(article).split(" ").length;
  const readingSpeedInWordsPerMinute = 200;
  const requiredTime = parseInt(words / readingSpeedInWordsPerMinute, 10);
  if (requiredTime > 1) {
    return `Lesezeit etwa ${requiredTime} Minuten`;
  }
  return `Lesezeit etwa 1 Minute`;
}

const not = (fn) => (...args) => !fn(...args);
const isDraft = (post) => Boolean(post.data.draft);

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk", "png"]);

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

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
    excerpt_separator: EXCERPT_SEPARATOR,
  });

  eleventyConfig.addFilter("markdownToHtml", markdownToHtml);
  eleventyConfig.addFilter("readingTime", readingTime);

  eleventyConfig.addCollection("blogposts", function (collection) {
    const allBlogPosts = collection
      .getFilteredByGlob("./src/blog/*.md")
      .reverse();

    return prod ? allBlogPosts.filter(not(isDraft)) : allBlogPosts;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
