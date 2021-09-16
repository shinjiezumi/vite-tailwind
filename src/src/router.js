import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Form from './pages/Form.vue';
import Grid from './pages/Grid.vue';
import Button from './pages/Button.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/button',
    name: 'Button',
    component: Button,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
