module.exports = function (eleventyConfig) {
  // Set custom directories for input, output, includes, and data

  // .eleventy.js
  eleventyConfig.setTemplateFormats(["njk", "html", "liquid", "md"]);
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addWatchTarget("src/css");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
