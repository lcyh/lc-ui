/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2023-02-17 16:18:36
 * @FilePath: /lcui/packages/lcui/docs/.vitepress/theme/index.ts
 */
import Theme from 'vitepress/theme';
import './styles/index.scss';
import 'vitepress-theme-demoblock/theme/styles/index.css';
import { registerComponents } from './register-components.js';
import vue_ui from '../../../ui/vue-lcui';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(vue_ui);
    registerComponents(app);
  }
};
