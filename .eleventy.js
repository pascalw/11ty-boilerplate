const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster");
 
module.exports = (eleventyConfig) => {
  if(process.env.CACHE_BUST === "true") {
    eleventyConfig.addPlugin(cacheBuster({}));
  }
};
