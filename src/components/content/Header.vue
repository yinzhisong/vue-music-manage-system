<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChange">
      <i v-show="!collapse" class="el-icon-s-fold"></i>
      <i v-show="collapse" class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <!-- 全屏显示 -->
      <div class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip effect="dark" placement="bottom" :content="fullscreen ? '取消全屏' : '全屏'">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
      
      <!-- 消息中心 -->
      <div class="btn-bell">
        <el-tooltip
          effect="dark"
          placement="bottom"
          :content="message ? `有 ${message} 条未读消息` : `暂无消息`"
        >
          <router-link to="/">
            <i class="el-icon-bell"></i>
          </router-link>
        </el-tooltip>
        <span class="btn-bell-badge"></span>
      </div>
      
      <!-- 用户头像 -->
      <div class="user-avator">
        <img src="@/assets/images/avatar.jpg" />
      </div>
      
      <!-- 用户下拉菜单 -->
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-lin">
          yzs
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
  name: 'Header',
  data (){
    return {
      //collapse: false,
      fullscreen: false,
      message: 6
    }
  },
  computed: {
    ...mapGetters(['collapse'])
  },
  methods: {
    ...mapMutations(['SET_COLLAPSE']),
    // 全屏缩放
    handleFullScreen (){
      let windowEl = document.documentElement;
      if (this.fullscreen){
        if (document.exitFullscreen){
          document.exitFullscreen ();
        } else if (document.webkitCancelFullScreen){
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen){
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen){
          document.msExitFullscreen();
        }
      } else {
        windowEl.requestFullscreen() || windowEl.webkitRequestFullScreen() || windowEl.mozRequestFullScreen() || windowEl.msRequestFullscreen();
      }
      this.fullscreen = !this.fullscreen;
    },
    
    // 用户下拉菜单点击
    handleCommand (command){
      if (command == 'loginout'){
        localStorage.removeItem('ms_username');
        this.$router.replace('/login');
      }
    },
    
    // 菜单栏缩放
    collapseChange (){
      this.SET_COLLAPSE(!this.collapse);
    }
  }
}
</script>

<style scoped lang="less">
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background-color: #242F42;
  
  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  
  .logo {
    float: left;
    line-height: 70px;
  }
  
  .header-right {
    float: right;
    padding-right: 50px;
    display: flex;
    height: 70px;
    align-items: center;
    .btn-fullscreen {
      cursor: pointer;
      transform: rotate(45deg);
      font-size: 24px;
    }
    .btn-fullscreen,
    .btn-bell {
      position: relative;
      width: 30px;
      height: 30px;
      text-align: center;
      border-radius: 15px;
      cursor: pointer;
      margin-right: 10px;
      i {
        color: #fff;
      }
    }
    .btn-bell-badge {
      position: absolute;
      right: 0;
      top: -2px;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: #f56c6c;
      color: #fff;
    }
    .user-avator {
      margin-right: 20px;
      margin-left: 5px;
      img {
        display: block;
        width: 39px;
        height: 39px;
        border-radius: 50%;
      }
    }
    .user-name {
      cursor: pointer;
      .el-dropdown-lin {
        color: #fff;
      }
    }
  }
}

</style>
