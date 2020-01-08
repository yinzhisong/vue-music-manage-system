import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 首页
const Home = () => import('@/components/content/Home.vue');
const Dashboard = () => import('@/views/dashboard/Dashboard.vue');

// 音乐
import SongRecommend from '@/views/song/Recommend.vue';
import SongChinese from '@/views/song/Chinese.vue';
import SongEurope from '@/views/song/Europe.vue';
import SongKorea from '@/views/song/Korea.vue';
import SongJapan from '@/views/song/Japan.vue';
import SongAll from '@/views/song/All.vue';

// 歌手
import 

const routes = [
  {
    path: '/',
    redirect: '/home/dashboard'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/dashboard',
        component: Dashboard,
        meta: {title: '音乐管理首页'}
      },
      
      // 音乐
      {
        path: '/home/song/recommend',
        component: SongRecommend,
        meta: {title: '推荐音乐'}
      },
      {
        path: '/home/song/chinese',
        component: SongChinese,
        meta: {title: '华语音乐'}
      },
      {
        path: '/home/song/europe',
        component: SongEurope,
        meta: {title: '欧美音乐'}
      },
      {
        path: '/home/song/korea',
        component: SongKorea,
        meta: {title: '韩语音乐'}
      },
      {
        path: '/home/song/japan',
        component: SongJapan,
        meta: {title: '日语音乐'}
      },
      {
        path: '/home/song/all',
        component: SongAll,
        meta: {title: '全部音乐'}
      },
      
      // 歌手
      {
        index: '/home/singer/chinese',
        component: ,
        meta: {title: '华语歌手'}
      },
      {
        index: '/home/singer/europe',
        component: ,
        meta: {title: '欧美歌手'}
      },
      {
        index: '/home/singer/korea',
        component: ,
        meta: {title: '韩国歌手'}
      },
      {
        index: '/home/singer/japan',
        component: ,
        meta: {title: '日本歌手'}
      },
      {
        index: '/home/singer/other',
        component: ,
        meta: {title: '其他歌手'}
      },
      {
        index: '/home/singer/men',
        component: ,
        meta: {title: '男歌手'}
      },
      {
        index: '/home/singer/women',
        component: ,
        meta: {title: '女歌手'}
      },
      {
        index: '/home/singer/band',
        component: ,
        meta: {title: '乐队/组合'}
      }
    ]
  }
];

const router = new VueRouter({
  //mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
