/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 */
// 引入ant-design-vue样式
import 'ant-design-vue/dist/antd.css';
import DefaultTheme from 'vitepress/theme';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import './styles/index.scss';
import { useComponents } from './useComponents.js';
import lcui from '../../../ui/vue-lcui';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(lcui);
    useComponents(ctx.app);
  }
};
