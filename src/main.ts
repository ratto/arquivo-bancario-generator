import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import '@mdi/font/scss/materialdesignicons.scss';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/_styles.scss';
import App from './App.vue';
import './style.scss';
import { router } from './router';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  components,
  directives,
});

createApp(App).use(router).use(vuetify).mount('#app');
