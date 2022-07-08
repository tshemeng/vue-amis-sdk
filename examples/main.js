import Vue from "vue";
import App from "./App.vue";

// fortawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";

import VueAmisSdk from "./../packages/index";
Vue.use(VueAmisSdk);
console.log(VueAmisSdk);
import { VuePlugin } from "vuera";
Vue.use(VuePlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
