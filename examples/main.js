import Vue from "vue";
import App from "./App.vue";
import VueAmisSdk from "./../packages/index";

Vue.use(VueAmisSdk);
console.log(VueAmisSdk);
import { VuePlugin } from "vuera";
Vue.use(VuePlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
