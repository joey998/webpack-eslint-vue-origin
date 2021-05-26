module.exports = {
  env: {
    browser: true,
    // es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:vue/recommended",
    "eslint:recommended",
    // "plugin:import/errors",
    // "plugin:import/warnings",
  ],
  // parser: "vue-eslint-parser",
  parserOptions: {
    // ecmaVersion: 12,
    // parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "import",
    // "@typescript-eslint",
  ],
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": ["off"],
    "import/no-unresolved": [1, { commonjs: true, amd: true }],
    "import/extensions": [1, "always", { js: "never", vue: "never" }], // 解决后缀问题 Missing file extension for "./siderbar"  eslint  import/extensions
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
  },
  // 下面是共享配置
  settings: {

    "import/resolver": {
      alias: {
        "@": "src/",
      },
    },
  },
};
