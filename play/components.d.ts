/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 */
export {};

declare module 'vue' {
  export interface GlobalComponents {
    AButton: typeof import('ant-design-vue/es')['Button'];
    HelloWorld: typeof import('./src/components/HelloWorld.vue')['default'];
  }
}
