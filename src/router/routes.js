import Index from "@/views/dashboard";

export default [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/gate-assignment",
    component: () => import(/* webpackChunkName: "gate-assignment" */ "@/views/gate-assignment"),
  },
];
