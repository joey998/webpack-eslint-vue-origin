import "normalize.css";
import "./style/element-variables.scss";
import "./style/customalize.scss";
// import "./style/html.css";
// import "./style/element-ui-cover.scss";

import Vue from "vue";
import ElementUI from "element-ui";
// import { Tree, Icon } from "element-ui";
import VueI18n from "vue-i18n";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import messages from "./i18n";
// import Index from "./layout/index.vue";
import App from "./app.vue";
import store from "./store";

Vue.use(VueI18n);
Vue.use(ElementUI);
// Vue.use(Tree);
// Vue.use(Icon);

const i18n = new VueI18n({
  locale: "zh",
  messages,
});

window.rootVue = new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: (h) => h(App),
});
