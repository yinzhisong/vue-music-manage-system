<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template slot="title">{{subItem.title}}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{threeItem.title}}
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.index"
                :key="subItem.index"
              >
                {{subItem.title}}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'Sidebar',
  data (){
    return {
      /* items: [
        {
            icon: 'el-icon-lx-home',
            index: '/home/dashboard',
            title: '系统首页'
        },
        {
            icon: 'el-icon-lx-cascades',
            index: '/home/table',
            title: '基础表格'
        },
        {
          icon: 'el-icon-lx-calendar',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: '/home/form',
              title: '基本表单'
            },
            {
              index: '3-2',
              title: '三级菜单',
              subs: [
                {
                    index: '/home/editor',
                    title: '富文本编辑器'
                },
                {
                    index: '/home/markdown',
                    title: 'markdown编辑器'
                }
              ]
            },
            {
              index: '/home/upload',
              title: '文件上传'
            }
          ]
        }
      ] */
      items: [
        {
            icon: 'el-icon-s-home',
            index: '/home/dashboard',
            title: '系统首页'
        },{
          icon: 'el-icon-s-data',
          index: '2',
          title: '音乐',
					subs: [
						{
							index: '/home/song/recommend',
							title: '推荐音乐'
						},
						{
							index: '/home/song/chinese',
							title: '华语音乐'
						},
						{
							index: '/home/song/europe',
							title: '欧美音乐'
						},
						{
							index: '/home/song/korea',
							title: '韩语音乐'
						},
						{
							index: '/home/song/japan',
							title: '日语音乐'
						},
						{
							index: '/home/song/all',
							title: '全部音乐'
						}
					]
        },{
          icon: 'el-icon-s-custom',
          index: '3',
          title: '歌手',
					subs: [
						{
							index: '/home/singer/chinese',
							title: '华语歌手'
						},
						{
							index: '/home/singer/europe',
							title: '欧美歌手'
						},
						{
							index: '/home/singer/korea',
							title: '韩国歌手'
						},
						{
							index: '/home/singer/japan',
							title: '日本歌手'
						},
						{
							index: '/home/singer/other',
							title: '其他歌手'
						},
						{
							index: '/home/singer/men',
							title: '男歌手'
						},
						{
							index: '/home/singer/women',
							title: '女歌手'
						},
						{
							index: '/home/singer/band',
							title: '乐队/组合'
						}
					]
        },{
            icon: 'el-icon-s-order',
            index: '4',
            title: '歌单',
            subs: [
              {
                index: '/home/songlist/recommend',
                title: '推荐歌单'
              },{
                index: '/home/songlist/official',
								title: '官方歌单'
              },{
								index: '/home/songlist/chinese',
								title: '华语歌单'
							},{
								index: '/home/songlist/popular',
								title: '流行歌单'
							},{
								index: '/home/songlist/ballad',
								title: '民谣歌单'
							},{
								index: '/home/songlist/electronic',
								title: '电子歌单'
							},{
								index: '/home/songlist/light',
								title: '轻音乐歌单'
							},{
								index: '/home/songlist/all',
								title: '全部歌单'
							}
            ]
        },
        {
          icon: 'el-icon-user-solid',
          index: '/home/user',
          title: '用户'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['collapse']),
    onRoutes (){
      //return this.$route.path.replace('/', '');
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="less">
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  ul {
    height: 100%;
  }
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

</style>
