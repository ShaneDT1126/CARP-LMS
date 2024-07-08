import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from "axios";

import PrimeVue from "primevue/config"
import ToastService from 'primevue/toastservice';
import Aura from '@primevue/themes/aura';

import App from './App.vue'
import router from './router'

const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'

app.use(createPinia())
app.use(router,axios)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
})
app.use(ToastService)

app.mount('#app')
