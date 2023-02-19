/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-18 21:53:07
 * @LastEditTime: 2023-02-18 22:42:34
 * @FilePath: /lcui/packages/lcui/ui/count-to/index.ts
 */
import type { App } from 'vue';
import CountTo from './src/count-to.vue';

CountTo.install = function (app: App): void {
  app.component(CountTo.name, CountTo);
};

export { CountTo };

export default {
  title: 'CountTo Count-to ',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(CountTo.name, CountTo);
  }
};
