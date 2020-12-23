/*eslint-disable*/

const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        react: path.resolve(__dirname, "../src/vue2/dist/vue.runtime.esm.js"),
      },
    },
  },
};
