/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': process.env,
  },
});
