import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Home = () => import('@/components/content/Home.vue');
const Dashboard = () => import('@/views/dashboard/Dashboard.vue');
const Table = () => import('@/views/table/Table.vue');
const Form = () => import('@/views/form/Form.vue');
const Editor = () => import('@/views/editor/Editor.vue');
const Markdown = () => import('@/views/markdown/Markdown.vue');
const Upload = () => import('@/views/upload/Upload.vue');

const routes = [
  {
    path: '/',
    redirect: '/home/dashboard'
  },
  {
    path: '/home',
    component: Home,
    meta: {title: '自述文件'},
    children: [
      {
        path: '/home/dashboard',
        component: Dashboard,
        meta: {title: '音乐管理首页'}
      }, {
        path: '/home/table',
        component: Table,
        meta: {title: '表格'}
      }, {
        path: '/home/form',
        component: Form,
        meta: {title: '表单提交'}
      }, {
        path: '/home/editor',
        component: Editor,
        meta: {title: '富文本编辑器'}
      }, {
        path: '/home/markdown',
        component: Markdown,
        meta: {title: 'Markdown 编辑器'}
      }, {
        path: '/home/upload',
        component: Upload,
        meta: {title: '文件上传'}
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
