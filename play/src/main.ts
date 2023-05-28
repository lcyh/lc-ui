/*
 * @Author: changluo
 * @Description: 
 * @LastEditors: luc19964 luochang@gopherasset.com
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Button, CountTo, Calendar } from 'vue3-lcui';
import 'vue3-lcui/style.css';

createApp(App).use(Button).use(CountTo).use(Calendar).mount('#app');
