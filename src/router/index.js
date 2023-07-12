import HomePage from '@/views/HomePage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    components: {
      default: HomePage
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
