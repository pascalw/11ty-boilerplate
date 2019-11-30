const fs = require("fs");
const path = require("path");
const util = require("util");
const readFile = util.promisify(fs.readFile);

const webpackAsset = async name => {
  const manifestData = await readFile(
    path.resolve(__dirname, "_includes", ".webpack", "manifest.json")
  );
  const manifest = JSON.parse(manifestData);
  return manifest[name];
};

module.exports = eleventyConfig => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addLiquidShortcode("webpackAsset", webpackAsset);
};
