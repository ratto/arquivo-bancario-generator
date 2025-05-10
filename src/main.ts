import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import { createI18n, useI18n } from 'vue-i18n';
import { pt } from 'vuetify/locale';
import { createVuetify } from 'vuetify';
import '@mdi/font/scss/materialdesignicons.scss';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/_styles.scss';
import { router } from './router';
import App from './App.vue';
import './style.scss';

const pinia = createPinia();

const messages = {
  pt: {
    $vuetify: {
      ...pt,
      confirmEdit: {
        ok: 'Ok',
        cancel: 'Cancelar',
      },
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  messages,
});

const vuetify = createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
  theme: {
    defaultTheme: 'dark',
  },
  components,
  directives,
});

createApp(App).use(router).use(pinia).use(vuetify).use(i18n).mount('#app');
