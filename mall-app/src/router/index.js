import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/login',
  name: 'login',
  component: Login,
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
},
];

const router = new VueRouter({
  routes,
});

// 路由拦截器
router.beforeEach((to, from, next) => {
  console.log(to.path);
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      return next();
    }
    return next('/login');
  }
  return next();
});

export default router;
