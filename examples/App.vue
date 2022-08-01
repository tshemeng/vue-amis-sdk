<template>
  <div id="app">
    <div class="header"><i class="pc-preview" title="PC模式"></i></div>
    <vue-amis-sdk
      class="editor-widget"
      id="editorName"
      theme="cxd"
      className="is-fixed"
      :preview="isPreview"
      :isMobile="isMobile"
      @onChange="onChange"
      :value="schema"
      :showCustomRenderersPanel="showCustomRenderersPanel"
    />
  </div>
</template>
<script>
import "amis-ui/lib/themes/cxd.css";
import "amis-editor/dist/style.css";
// import "../node_modules/amis-ui/lib/helper.css";
// import "../node_modules/amis-ui/lib/themes/antd.css";
export default {
  name: "App",
  data() {
    return {
      isPreview: true,
      isMobile: false,
      showCustomRenderersPanel: true,
      schema: {
        type: "page",
        id: "u:d3b02ff7a8d0",
        aside: [],
        body: [
          {
            type: "tpl",
            tpl: "vue-amis-sdk@2.1.0",
            inline: true,
            wrapperComponent: "h1",
            id: "u:0f5cb1ec6c87",
          },
        ],
      },
    };
  },
  methods: {
    onChange(e) {
      console.log(e);
    },
  },
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
.editor-widget {
  height: calc(100% - 50px);
}
</style>
