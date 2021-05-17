import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Classify from '@/views/Classify.vue';
import Shopping from '@/views/Shopping.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'classify', // 分类页面
        component: Classify,
      },
      {
        path: 'shopping', // 购物车页面
        component: Shopping,
      },
    ],
  }, {
    path: '*',
    redirect: '/home/classify',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
