<template>
  <div id="app">
    <vue-amis-sdk id="editorName" theme="cxd" className="is-fixed" :preview="isPreview" :isMobile="isMobile" @onChange="onChange" :value="schema"  />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isPreview:false,
      isMobile:false,
      post: {
        json: '',
        amis_page_id: 15,
      },
      baseURL: 'https://h7ml.cn',

      schema: {},
    }
  },
  onLoad() {
    
  },
  methods: {
    onChange(e) {
    },
  }
}
</script>