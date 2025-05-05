import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { config } from '@vue/test-utils';

// vitest.setup.ts

// Importar bibliotecas globais, se necessário
// Configurar Vuetify globalmente
const vuetify = createVuetify();
config.global.plugins = [vuetify];

// Configurações globais ou mocks podem ser adicionados aqui
// Exemplo: Mock de console.warn para evitar poluição nos testes
global.console.warn = (...args) => {
  // Suprimir avisos específicos ou logá-los de forma personalizada
};

// Exemplo: Configuração de timezone para testes consistentes
process.env.TZ = 'UTC';
