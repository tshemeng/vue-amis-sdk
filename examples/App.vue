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
        body: [
          {
            type: "input-text",
            label: "文本",
            name: "text",
            id: "u:41304a249687",
          },
          {
            type: "nested-select",
            label: "嵌套下拉框",
            name: "nestedSelect",
            options: [
              {
                label: "选项A",
                value: "A",
              },
              {
                label: "选项B",
                value: "B",
                children: [
                  {
                    label: "选项C",
                    value: "C",
                  },
                  {
                    label: "选项D",
                    value: "D",
                  },
                ],
              },
            ],
            id: "u:b25bd22690e7",
          },
          {
            type: "select",
            label: "选项",
            name: "select",
            options: [
              {
                label: "选项A",
                value: "A",
              },
              {
                label: "选项B",
                value: "B",
              },
            ],
            id: "u:b5bc1c1228bb",
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
