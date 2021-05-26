const express = require("express");
const proxyMiddleWare = require("http-proxy-middleware");
const fs = require("fs");
const path = require("path");
const history = require("connect-history-api-fallback");

const app = express();

const proxyPath = "http://localhost:8080";// 目标后端服务地址
const proxyOption = {
  target: proxyPath,
  changeOrigoin: true,
  ws: true,
  pathRewrite: { "^/api": "/" },
};
app.use(express.static("dist"));
app.use("/api", proxyMiddleWare(proxyOption));
app.use(history());
app.all("*", (req, res) => res.send(""));

app.all("*", (req, res) => {
  const name = req.url.slice(req.url.lastIndexOf("/") + 1);
  let url = "";
  // if (req.url.match(/\.js$/)) {
  url = path.resolve("dist", name);
  fs.readFile("dist/index.html", "utf-8", (err, content) => {
    if (err) {
      console.log("We cannot open \"index.html\" file.");
    }

    res.writeHead(200);

    res.end(content);
  });
// } else if (req.url.match(/\.css$/)) {
//   url = path.resolve("dist/static/css", name);
//   res.writeHead(200);
//   res.sendFile(url);
//   res.end();
//   return false;
// }
// return false;
});

// app.use(express.static("dist", {
//   proxy: {
//     "/api": { // 这里最好有一个 /
//       target: "http://localhost:8080", // 后台接口域名
//       ws: true, // 如果要代理 websockets，配置这个参数
//       secure: false, // 如果是https接口，需要配置这个参数
//       changeOrigin: true, // 是否跨域
//       pathRewrite: {
//         "^/api": "",
//       },
//     },
//   },
// }));

app.listen(3002, () => console.log("listen on 3002"));
