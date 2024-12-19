import { defineConfig, mergeConfig } from 'vitest/config';
import { configDefaults } from 'vitest/config';
import viteConfig from './vite.config.ts';
import '@vue/test-utils';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      exclude: [...configDefaults.exclude, 'e2e/*'],
    },
  })
);
