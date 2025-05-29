import { createWebHistory, createRouter } from 'vue-router'

import Home from './Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog/:userid/:blogid',
    redirect: '/'
  },
  {
    path: '/authenticate',
    redirect: '/'
  },
  {
    path: '/profile/:userid',
    redirect: '/'
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) next('/authenticate'); 
  else next();
});

export default router;