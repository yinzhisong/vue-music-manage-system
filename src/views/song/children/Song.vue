<template>
  <div class="home-main" ref="scroll">
    <input type="text" key="table" />
    <div v-for="i in 400">
      table
    </div>
  </div>
</template>

<script>
import {saveScrollTopMixin} from '@/common/mixin.js';
export default {
  name: 'basetable',
  mixins: [saveScrollTopMixin],
  components: {
  },
}
</script>

<style>
</style>
