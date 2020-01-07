<template>
  <div class="home-main" ref="scroll">
    <button >按钮</button>
    <div v-for="i in 98">
      {{i}}
    </div>
  </div>
</template>

<script>
import {saveScrollTopMixin} from '@/common/mixin.js';
export default {
  name: 'dashboard',
  data (){
    return {
    }
  },
  mixins: [saveScrollTopMixin],
  components: {
  },
  /* activated (){
    this.$refs.dashboard.scrollTo(0, this.scrollTop, true);
  },
  deactivated (){
    this.scrollTop = this.$refs.dashboard.scrollTop;
  } */
}
</script>

<style>
</style>
