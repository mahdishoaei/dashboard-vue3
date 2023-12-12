import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"

import './registerServiceWorker'
import './assets/scss/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.mount('#app')
app.use(pinia)
app.use(Toast)

