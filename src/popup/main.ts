import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from '../router'
import i18n from '../locale'
import '../assets/tailwind.css'

createApp(App).use(createPinia()).use(router).use(i18n).mount('#app')
