import { createWebHistory, createRouter } from 'vue-router';
import { routes } from './views/routes';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
