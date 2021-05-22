const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const PrerenderSPAPlugin = require("prerender-spa-plugin");
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "static/js/[name].[contenthash:6].prod.js",
    // filename: "static/js/[name].[contenthash:6].prod.js",
    publicPath: "/",
  },
  module: {
    rules: [
      // 以下是官网默认配置，经试验，已经转成了es5，但是不支持ie8
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    // new PrerenderSPAPlugin(
    //   // Absolute path to compiled SPA
    //   path.join(__dirname, "./dist"),
    //   // List of routes to prerender
    //   ["/"],
    // ),

    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, "dist"),
      // Required - Routes to render.
      routes: ["/", "/zhakouzuoye/qichezuoye", "/xitongguanli/gangweiguanli"],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers
      // (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`
      new CssMinimizerPlugin(),
    ],
  },
});
