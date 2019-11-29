const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster");
 
module.exports = (eleventyConfig) => {
    const cacheBusterOptions = {};
    eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));
};
