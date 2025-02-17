import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style/css`,  // Импорт CSS стилей вместо LESS
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': '#00C896',
          '@link-color': '#00C896',
          '@success-color': '#00C896',
          '@warning-color': '#FFA500',
          '@error-color': '#FF4D4F',
          '@font-size-base': '14px',
          '@heading-color': '#E0E0E0',
          '@text-color': '#E0E0E0',
          '@text-color-secondary': '#B0B0B0',
          '@disabled-color': '#666666',
          '@border-radius-base': '6px',
          '@border-color-base': '#1E2A38',
          '@box-shadow-base': '0 2px 12px rgba(0, 0, 0, 0.15)',
          '@layout-body-background': '#141B25',
          '@layout-header-background': '#1E2A38',
          '@input-bg': '#1A2734',
          '@input-color': '#E0E0E0',
        },
        javascriptEnabled: true,
      },
    },
  },
});
