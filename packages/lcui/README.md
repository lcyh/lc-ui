<!--
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2023-02-17 16:18:21
 * @FilePath: /lcui/packages/lcui/README.md
-->

# 简介

[从零到一建立属于自己的前端组件库](https://juejin.cn/post/7124487017588588574)

## 快速开始

### 安装

```shell
# NPM
$ npm install vue3-lcui --save

# Yarn
$ yarn add vue3-lcui

# pnpm
$ pnpm install vue3-lcui
```

### 完整引入

```ts
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import lcui from 'vue3-lcui';
import 'vue3-lcui/style.css';

createApp(App).use(lcui).mount('#app');
```
