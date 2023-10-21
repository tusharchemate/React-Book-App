const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  stats: "errors-only",
  devServer: {
    port: 3000,
    hot: true, // hot module replacement --> enabling the HMR
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
