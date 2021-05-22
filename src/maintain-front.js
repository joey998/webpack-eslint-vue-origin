const config = {
  primaryBackground: "#0d1d37",
  primaryBorder: "#4266a0",
  primaryHoverBackground: "#0c3f74",
  api_host: "127.0.0.1",
  api_port: "8080",
  api_protocol: "http",
};

config.api_pre = `${config.api_protocol}://${config.api_host}:${config.api_port}`;

export default config;
