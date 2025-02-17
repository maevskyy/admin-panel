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
          style(name) {
            return `antd/es/${name}/style/index.less`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': '#00C896',   // Новый акцентный цвет
          '@link-color': '#00C896',      // Цвет ссылок
          '@success-color': '#00C896',   // Цвет для успешных действий
          '@warning-color': '#FFA500',   // Цвет для предупреждений (оранжевый)
          '@error-color': '#FF4D4F',     // Цвет для ошибок
          '@font-size-base': '14px',     // Основной размер шрифта
          '@heading-color': '#E0E0E0',   // Цвет заголовков
          '@text-color': '#E0E0E0',      // Основной цвет текста
          '@text-color-secondary': '#B0B0B0', // Вторичный цвет текста
          '@disabled-color': '#666666',  // Цвет неактивных элементов
          '@border-radius-base': '6px',  // Радиус границ для элементов
          '@border-color-base': '#1E2A38', // Основной цвет для границ
          '@box-shadow-base': '0 2px 12px rgba(0, 0, 0, 0.15)', // Тени
          '@layout-body-background': '#141B25',  // Цвет фона страницы
          '@layout-header-background': '#1E2A38', // Цвет хедера
          '@input-bg': '#1A2734',         // Фон для инпутов
          '@input-color': '#E0E0E0',      // Цвет текста в инпутах
        },
        javascriptEnabled: true,
      },
    },
  },
});
