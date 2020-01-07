<template>
  <div class="home-wrapper">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="home-content-box" :class="{'home-content-collapse': collapse}">
      <v-tags @setTags="setTags"></v-tags>
      <div class="home-content" ref="homeContent">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import Header from '@/components/content/Header.vue';
import Sidebar from '@/components/content/Sidebar.vue';
import Tags from '@/components/content/Tags.vue';

export default {
  data (){
    return {
      tagsList: []
    }
  },
  components: {
    'v-header': Header,
    'v-sidebar': Sidebar,
    'v-tags': Tags
  },
  computed: {
    ...mapGetters(['collapse', 'tags']),
  },
  methods: {
    // 设置 keep-alive 保存的路由数组
    setTags (tags){
      let arr = [];
      for (let i=0, len=tags.length; i<len; i++){
        tags[i].name && arr.push(tags[i].name);
      }
      this.tagsList = arr;
    }
  }
}
</script>

<style>
.home-wrapper  {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.home-content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background-color: #f0f0f0;
}
/* .home-content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
} */
.home-content {
  width: auto;
  height: 100%;
}
.home-content-collapse {
  left: 65px;
}
</style>
