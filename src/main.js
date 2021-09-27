// import 'bootstrap';
// import 'bootstrap-vue';
// import "~/pixel-glass/style.css";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router/router";

import Element from "element-ui";
import PixelGlass from "pixel-glass";

Vue.config.productionTip = false;

Vue.use(PixelGlass);
Vue.use(Element);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
