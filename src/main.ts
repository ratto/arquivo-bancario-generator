import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import '@mdi/font/scss/materialdesignicons.scss';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/_styles.scss';
import { router } from './router';
import App from './App.vue';
import './style.scss';

const pinia = createPinia();

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  components,
  directives,
});

createApp(App).use(router).use(pinia).use(vuetify).mount('#app');
