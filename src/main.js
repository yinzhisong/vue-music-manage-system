import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui'
import "babel-polyfill"; // 导入能解析 async await 的, babel-polyfill
import VueLazyload from 'vue-lazyload'; // 导入图片未下载完全时, 先用默认图片占位的插件

Vue.config.productionTip = false;

// 配置 ElementUI
Vue.use(ElementUI);

// 配置图片未下载完全时, 先用默认图片占位的插件
Vue.use (VueLazyload, {
  loading: require('@/assets/images/img-loading.gif')
});

// 配置总线
Vue.prototype.$bus = new Vue();

// 配置每个页面的 title
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | music-system`;
    next ();
});

// 导入样式
import '@/assets/css/common/index.less';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/icon/icon.less';
import '@/assets/css/main/main.less';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
