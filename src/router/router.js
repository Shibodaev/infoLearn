import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";


Vue.use(VueRouter);
let router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
export default router;
