import AboutView from './AboutView.vue';
import ArquivoView from './ArquivoView.vue';
import ErrorView from './ErrorView.vue';
import HomeView from './HomeView.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: AboutView,
  },
  {
    path: '/form-arquivo',
    name: 'arquivo',
    component: ArquivoView,
  },
  {
    path: '/:catchAll(.*)',
    component: ErrorView,
  },
];
