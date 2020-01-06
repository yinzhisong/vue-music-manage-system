<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="@/assets/images/img-loading.gif" />
    <div class="div">
      aaa
    </div>
    <div v-for="img in banner">
      <img v-lazy="img.imageUrl" />
    </div>
  </div>
</template>

<script>
import {getBanner} from '@/network/home.js'
export default {
  name: 'HelloWorld',
  data (){
    return {
      banner: []
    }
  },
  props: {
    msg: String
  },
  /* created (){
    axios.get('api/banner').then(res => {
      console.log(res);
    });
  } */
  async created (){
    console.log(await getBanner());
    this.banner = (await getBanner()).banners;
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .div {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-color: #abcdef;
    /* background-image: url(../assets/images/img-loading.gif); */
    /* background-image: url(~/assets/images/img-loading.gif); */
  }
</style>
