import AboutPage from '@/views/AboutPage.vue';
import HomePage from '@/views/HomePage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    components: {
      default: HomePage
    }
  },
  {
    path: '/about',
    name: 'AboutPage',
    components: {
      default: AboutPage
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
