<template>
  <div>
    <amis-shortcut-key />
    <amis-editor
      id="editorName"
      :theme="theme"
      :className="className"
      :preview="isPreview"
      :isMobile="isMobile"
      @onChange="onChange"
      @onPreview="onPreview"
      @onSave="onSave"
      :value="schema"
      :plugins="plugins"
      :showCustomRenderersPanel="showCustomRenderersPanel"
    />
  </div>
</template>
<script>
import { Editor, ShortcutKey } from "amis-editor";
import { ReactInVue } from "vuera";

export default {
  name: "VueAmisSdk",
  components: {
    AmisEditor: ReactInVue(Editor),
    AmisShortcutKey: ReactInVue(ShortcutKey),
    // Editor
  },
  props: {
    isPreview: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    showCustomRenderersPanel: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "cxd",
    },
    className: {
      type: String,
      default: "ang",
    },
    value: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      schema: {},
    };
  },
  mounted() {
    this.schema = this.value;
  },
  methods: {
    setSchema(obj) {
      this.schema = obj;
    },
    getSchema() {
      return this.schema;
    },
    onChange(e) {
      this.schema = e;
      this.$emit("change", e);
    },
    onSave(e) {
      console.log(e);
      this.$emit("onSave", e);
    },
    onPreview(e) {
      console.log(e);
      this.$emit("onPreview", e);
    },
  },
};
</script>
<style lang="scss">
@import "./style.scss";
/* 解决 amis-editor icon 图标过大 */
.editor-right-panel
  .editorPanel-tabs
  .editorPanel-tabs-header
  > li
  > a
  .editor-tab-icon
  > svg {
  font-size: 16px !important;
  width: 16px;
  height: auto;
  margin-bottom: 0 !important;
  color: #151b26;
}
</style>
