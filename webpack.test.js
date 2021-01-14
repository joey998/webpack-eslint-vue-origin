const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/app.js",
  },
  output: {
    filename: "[name].[contenthash:7].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8082,
    watchContentBase: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css/,
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
        use: ["style-loader", "css-loader", "sass-loader"],
        // sideEffects: true,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ],
  },
  plugins: [
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: "Development",
    }),
    // new MiniCssExtractPlugin({
    //   // filename: "[name].css",
    // }),
  ],
  optimization: {
    // minimize: true,
    // minimizer: [
    //   new CssMinimizerPlugin(),
    // ],
    // runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: "all",
    //   cacheGroups: {
    //     // libs: {
    //     //   name: "static.[name]",
    //     //   test: /[\\/]node_modules[\\/]/,
    //     //   chunks: "initial",
    //     //   priority: 1,
    //     // },
    //     // async: {
    //     //   name: "async",
    //     //   chunks: "async",
    //     // },
    //     // // lodash: {
    //     // //   name: "vendor.[name]", // 这里定义的就是output里面的name
    //     // //   test: /[\\/]node_modules[\\/]lodash[\\/]/, // 文件路径符合规则的
    //     // //   priority: 1, // 如果不加优先级，lodash.js将会合并到上面的async
    //     // // },
    //     // echarts: {
    //     //   name: "echarts",
    //     //   test: /[\\/]node_modules[\\/]echarts[\\/]/,
    //     //   priority: 2,
    //     //   chunks: "initial",
    //     // },
    //   },
    // },
  },
  target: "web"
};
