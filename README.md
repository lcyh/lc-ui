<!--
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 * @Date: 2023-02-16 17:16:21
 * @LastEditTime: 2023-02-17 15:26:23
 * @FilePath: /lcui/README.md
-->

# 简介

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

## todo

- 迁移组件 测试用例 更新为 vitest
