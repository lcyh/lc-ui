/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 */
import type { App } from 'vue';
import VueDemo from './src/vue-demo';

VueDemo.install = function (app: App): void {
  app.component(VueDemo.name, VueDemo);
};

export { VueDemo };

export default {
  title: 'VueDemo vueDemo',
  category: '通用',
  status: '100%', // TODO: 组件若开发完成则填入"100%"，并删除该注释
  install(app: App): void {
    app.component(VueDemo.name, VueDemo);
  }
};
