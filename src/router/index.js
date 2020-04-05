import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      transitionName: 'fadeDownBig',
      transitionMode: 'out-in'
    },
    component: Home
  },
  {
    path: "/tafeln",
    name: "Tafeln",
    meta: {
      transitionName: 'fadeRight'
    },
    component: () =>
        import("../views/tafeln")
  },
  {
    path: "/helfer",
    name: "Helfer",
    meta: {
      transitionName: 'fadeLeft'
    },
    component: () =>
        import("../views/helfer")
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () =>
      import("../views/impressum")
  },
  {
    path: "/datapolicy",
    name: "Datenschutzerklärung",
    component: () =>
      import("../views/datapolicy")
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
