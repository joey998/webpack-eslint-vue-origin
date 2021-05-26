const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const path = require("path");
const axios = require("axios");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 3080,
    proxy: {
      "/api": { // 这里最好有一个 /
        target: "http://localhost:8080", // 后台接口域名
        ws: true, // 如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    after: (app) => {
      app.all("*", (req, res) => {
        axios.get("http://localhost:3080").then((data) => {
          // console.log(data); //开发环境中的dist是没有内容的，所以直接请求localhost
          res.send(data.data);
          // res.sendFile(path.resolve(__dirname, "./src/index.html"));
        });
      });
    },
  },
  output: {
    filename: "static/js/[name].[contenthash:6].dev.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  target: "web",
});
