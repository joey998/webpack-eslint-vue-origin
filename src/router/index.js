import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
import header from "../store/modules/header";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
  base: "/",
});

router.beforeEach((to, from, next) => {
  const headerNav = [];
  to.matched.forEach((item) => {
    headerNav.push({ title: item.meta.title, path: item.path });
  });
  store.commit("header/changeNav", headerNav);
  next();
});

export default router;
