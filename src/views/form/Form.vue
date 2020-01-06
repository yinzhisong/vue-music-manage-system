<template>
  <div>
    <input type="text" key="form" />
    <div v-for="i in 100">
      abcdef{{i}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'baseform'
  }
</script>

<style>
</style>
