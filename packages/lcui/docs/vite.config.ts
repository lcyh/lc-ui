import { defineConfig } from 'vite';
// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    svgLoader()
  ]
});
