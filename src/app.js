import "normalize.css";
import "./style/element-variables.scss";
import "./style/customalize.scss";
// import "./style/html.css";
// import "./style/element-ui-cover.scss";

import Vue from "vue";
import VueRouter from "vue-router";
// import ElementUI from "element-ui";
import { Tree, Icon } from "element-ui";
import VueI18n from "vue-i18n";
// import "element-ui/lib/theme-chalk/index.css";
import routes from "./router/routes";
import messages from "./i18n";
import Index from "./layout/index.vue";

Vue.use(VueRouter);
Vue.use(VueI18n);
// Vue.use(ElementUI);
Vue.use(Tree);
Vue.use(Icon);

const router = new VueRouter({
  routes,
  // mode: "history",
});

const i18n = new VueI18n({
  locale: "zh",
  messages,
});

window.rootVue = new Vue({
  el: "#app",
  router,
  i18n,
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
  render: (h) => h(Index),
});
