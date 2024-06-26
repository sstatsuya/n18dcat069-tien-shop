const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {
  crypto: require.resolve("crypto-browserify"),
  rules: {
    test: /\.m?js/,
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  },
};
