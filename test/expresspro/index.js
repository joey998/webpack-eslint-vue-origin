const querystring = require("querystring");
const http = require("http");

const postData = querystring.stringify({
  msg: "你好世界",
});

const options = {
  hostname: "localhost",
  port: 8080,
  path: "/lane/findEasyuiTreeBean",
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    // "Content-Length": Buffer.byteLength(postData),
  },
};

const req = http.request(options, (res) => {
  // console.log(`状态码: ${res.statusCode}`);
  // console.log(`响应头: ${JSON.stringify(res.headers)}`);
  res.setEncoding("utf8");
  let dt = "";
  res.on("data", (chunk) => {
    dt += chunk;
    console.log(`响应主体: ${chunk}`);
  });
  res.on("end", () => {
    console.log(dt);
    console.log("响应中已无数据");
  });
});

req.on("error", (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});

// 将数据写入请求主体。
req.write(postData);
req.end();
