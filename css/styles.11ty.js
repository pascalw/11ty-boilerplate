const path = require("path");
const util = require("util");
const sass = require("node-sass");
const renderSass = util.promisify(sass.render);

module.exports = class {
  async data () {
    const rawFilepath = path.join(__dirname, `../_includes/assets/main.scss`);
    return {
      permalink: "css/styles.css",
      rawFilepath
    };
  };

  async render ({ rawFilepath }) {
    return renderSass({ file: rawFilepath }).then(result => {
      return result.css;
    });
  };
}
