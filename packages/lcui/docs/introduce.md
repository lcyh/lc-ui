# 简介

## 版本

- vue3-lcui 目前还处于开发迭代中。

## 使用包管理器

```shell
# NPM
$ npm install vue3-lcui --save

# Yarn
$ yarn add vue3-lcui

# pnpm
$ pnpm install vue3-lcui
```

## 浏览器直接引入

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="https://unpkg.com/vue3-lcui/style.css" />
  <!-- 导入 Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- 导入组件库 -->
  <script src="https://unpkg.com/vue3-lcui"></script>
</head>

<script>
  const App = {
    data() {
      return {
        message: 'Hello vue3-lcui'
      };
    }
  };
  const app = Vue.createApp(App);
  app.use(Vuelcui.default);
  app.mount('#app');
</script>
```

## 快速开始

### 完整引入

```ts
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import lcui from 'vue3-lcui';
import 'vue3-lcui/style.css';

createApp(App).use(lcui).mount('#app');
```
