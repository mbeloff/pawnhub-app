import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { vfmPlugin } from 'vue-final-modal'
import { VueReCaptcha } from 'vue-recaptcha-v3'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})



app.use(router).use(vfmPlugin).use(VueReCaptcha, { siteKey: import.meta.env.VITE_RECAP })
app.mount('#app')
