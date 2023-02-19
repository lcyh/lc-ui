import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import lcui from 'vue3-lcui';
import 'vue3-lcui/style.css';

createApp(App).use(lcui).mount('#app');
