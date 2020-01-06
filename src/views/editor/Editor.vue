<template>
  <div>
    <input type="text" key="editor" />
    <div v-for="i in 50">
      富文本编辑{{i}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'editor'
  }
</script>

<style>
</style>
