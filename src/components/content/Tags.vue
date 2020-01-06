<template>
  <div class="tags" v-show="showTags">
    <ul>
      <li class="tags-li" v-for="(item, index) in tags" :key="index" :class="{'active': isActive(item.path)}">
        <router-link :to="item.path" class="tags-li-title">
          {{item.title}}
        </router-link>
        <span class="tags-li-icon" @click="closeTAgs(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
  
export default {
  name: 'Tags',
  data (){
    return {
      tags: []
    }
  },
  mounted (){
    this.setTags (this.$route);
  },
  computed: {
    //...mapGetters(['tags'])
  },
  methods: {
    ...mapMutations(['SET_TAGS']),
    
    // 设置当前路由的高亮
    isActive (path){
      return path === this.$route.fullPath;
    },
    
    // 设置标签
    setTags (route){
      // Exist => 存在, some => 一些
      // 对 tags 这个数组进行循环
      const isExist = this.tags.some(item => {
        // 只要有一个 tab 存在 (返回 true), 代表数组里面能找到新点击的 router-link (已经创建了), 就不会新建 tab
        // 只有新点击的 router-link, 在 tabs 数组中没有找到才会返回 false
        return item.path === route.fullPath;
      });
      
      // 判断 tags 数组里面是否已经存在 新点击的 router-link
      if (!isExist) {
        this.tags.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        });
      }
      
      this.$emit('setTags', this.tags);
    },
    
    // 关闭标签
    // 1. 关闭单个标签
    closeTAgs (index){
      // 删除当前这个 router-link 
      const delItem = this.tags.splice(index, 1);
      
      // 返回删除后, 如果删除的是中间的, 并且后面还存在 router-link 则返回删除后的 router-link; 如果后面没有, 则返回前一个
      const item = this.tags[index] ? this.tags[index] : this.tags[index-1];
      
      if (item){
        // ? 不太明白
        //delItem.path === this.$route.fullPath && this.$router.push(item.path);
        this.$router.push(item.path);  
      } else {
        this.$router.push('/');
      }
    },
    
    // 2. 下拉关闭所有标签和部分标签
    handleTags (command){
      command == 'other' ? this.closeOther() : this.closeAll();
    },
    closeOther (){
      // 循环过滤器, 只有找到才会返回相应的选项
      const curItem = this.tags.filter(item => {
        // 当前的路由 和 所有的 tags 里面的 path 进行比较, 只有相等的时候才会返回找到的选项
        return item.path == this.$route.fullPath;
      });
      this.tags = curItem; // 返回找到的选项, 重新赋值给数组
    },
    closeAll (){
      this.tags = [];
      this.$router.push('/');
    }
  },
  computed: {
    showTags (){
      return this.tags.length > 0;
    }
  },
  watch: {
    // 当路由变化时，进行监听
    $route(newVale) {
      //console.log(newVale);
      this.setTags (newVale);
    }
  }
}
</script>

<style scoped lang="less">
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background-color: #fff;
  padding-right: 110px;
  box-shadow: 0 5px 10px #ddd;
}
.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background-color: #fff;
  padding: 0 5px 0 0px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
.tags-li-title {
  float: left;
  max-width: 80px;
  padding-left: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}
.tags-li:not(.active):hover {
  background-color: #f8f8f8;
}
.tags-li.active {
  border: 1px solid #409EFF;
  background-color: #409EFF;
  color: #fff;
}
.tags-li.active .tags-li-title {
  color: #fff;
}
.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background-color: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
</style>
