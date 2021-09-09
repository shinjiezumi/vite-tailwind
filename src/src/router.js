import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Hoge from './pages/Hoge.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/hoge',
    name: 'Hoge',
    component: Hoge,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
