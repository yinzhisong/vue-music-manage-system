<template>
  <div class="dashboard" ref="da">
    <input type="text" key="dasheboard" />
    <div v-for="i in 100">
      {{i}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data (){
    return {
      scrollTop: 0,
    }
  },
  mounted (){
    //console.log(this.$refs.da);
    /* window.addEventListener('scroll', () => {
      console.log("aaa");
      //console.log(this.$refs.sc.scrollTop);
    }, false); */
  },
  methods: {
    sc (){
      console.log("sc");
    }
  },
  activated (){
    //console.log(this.scrollTop);
    console.log("进入");
  },
  deactivated (){
    console.log("离开");
    console.log(this.$refs.da.pageYOffset);
    //this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  }
}
</script>

<style>
</style>
