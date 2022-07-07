import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite';
import { extendUnocssOptions } from '@vinicunca/unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCss({
      ...extendUnocssOptions({
        vinicunaConfig: {
          brands: {
            primary: '#1976d2',
            secondary: '#9c27b0',
            success: '#2e7d32',
            info: '#0288d1',
            warning: '#ed6c02',
            danger: '#d32f2f',
          },
        },
      }),
    }),
    vue()
  ]
})
