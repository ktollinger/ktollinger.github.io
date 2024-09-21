module.exports = function(eleventyConfig) {

    // Copy all *.css resources to proper location in target site.
    eleventyConfig.addPassthroughCopy({ "src/_assets/css": "css" });

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
  