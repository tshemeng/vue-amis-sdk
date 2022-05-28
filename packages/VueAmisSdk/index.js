import VueAmisSdk from "./src/VueAmisSdk.vue";
VueAmisSdk.install = function (Vue) {
  Vue.component(amisEditor.name, amisEditor);
};

export default VueAmisSdk;
