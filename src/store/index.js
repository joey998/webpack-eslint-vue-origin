import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const moduleFiles = require.context("./modules", true, /\.js$/);

const modules = moduleFiles.keys().reduce((curmodules, modulePath) => {
  const moduleName = modulePath.replace(/\.\/(.*)\.js$/, "$1");
  curmodules[moduleName] = moduleFiles(modulePath).default;
  return curmodules;
}, {});
// setTimeout(() => {
//   console.log(modules);
// }, 1000);

// setTimeout(() => {
//   console.log(moduleFiles, require);
//   console.dir(moduleFiles, require);
//   const a = moduleFiles.keys();
//   console.log(a);
//   console.log(moduleFiles(a[0]));
// }, 1000);

// const componentA = context.resolve("componentA");
const store = new Vuex.Store({
  modules,
});
export default store;
