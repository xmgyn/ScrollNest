import { createApp } from 'vue';
import App from './App.vue'; // Main component
import router from './router';

import './main.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
