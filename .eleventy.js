module.exports = function(eleventyConfig) {
    return {
      dir: {
        // Where your content lives
        input: "src",
        // layouts directory - relative to the dir.inpur
        layouts: "_layouts",
        // Where Eleventy will generate your website
        output: "_site",
      }
    };
  };
  