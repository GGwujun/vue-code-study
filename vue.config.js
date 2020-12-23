/*eslint-disable*/

const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue: path.resolve(__dirname, "./src/vue2"),
      },
    },
  },
};
