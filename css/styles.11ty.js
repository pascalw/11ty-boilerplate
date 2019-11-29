const path = require("path");
const util = require("util");

const sass = require("node-sass");
const renderSass = util.promisify(sass.render);

const isProd = () => process.env.ELEVENTY_ENV === "production";

const postcssPlugins = [
  require("autoprefixer"),
  isProd() ? require("cssnano") : false
].filter(p => p != false);

const postcss = require("postcss")(postcssPlugins);

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, `../_includes/assets/main.scss`);
    return {
      permalink: "styles.css",
      rawFilepath
    };
  }

  async render({ rawFilepath }) {
    return renderSass({ file: rawFilepath })
      .then(result => result.css)
      .then(css => postcss.process(css, { from: rawFilepath }))
      .then(result => result.css);
  }
};
