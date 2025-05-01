import { defineConfig, mergeConfig } from 'vitest/config';
import { configDefaults } from 'vitest/config';
import viteConfig from './vite.config.ts';
import '@vue/test-utils';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      setupFiles: './vitest.setup.ts', // Adicione um arquivo de configuração de inicialização
    },
  })
);
