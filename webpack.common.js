const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    app: "./src/app.js",
  },
  output: {
    // 通过在prod和dev配置中修改filename可以指定js输出到哪一个目录
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".js", ".json", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset", // 小于8k的会当成inline，否则当成resource
        // 以下指定符合格式的文件输出到哪一个目录
        generator: {
          filename: "static/images/[hash][ext]", // ext表示后缀(eg: .jpg)
        },
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          }, // 不能删除
          // "vue-style-loader", //不要使用这个官网案例，这个东西不能用了
          // "style-loader",
          "css-loader",
          "sass-loader",
          {
            // 提取公共的scss，其他组件里面不需要再@import该文件了
            loader: "sass-resources-loader",
            options: {
              // Provide path to the file with resources
              // resources: './src/style.common.scss',

              // Or array of paths
              resources: [
                "./src/style/common.scss",
              ],
            },
          },
          "postcss-loader",
        ],
        sideEffects: true,
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        type: "asset",
        generator: {
          filename: "static/font/[hash][ext]", // ext表示后缀(eg: .jpg)
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "carmonitor",
      template: "src/index.html",
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          name: "vendor",
          priority: 1,
          chunks: "initial",
          test: /[\\/]node_modules[\\/]/,
        },
        elementUI: {
          name: "element-ui",
          priority: 2,
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
        },
        echarts: {
          name: "echarts",
          priority: 2,
          test: /[\\/]node_modules[\\/]echarts[\\/]/,
        },
      },
    },
  },
};
