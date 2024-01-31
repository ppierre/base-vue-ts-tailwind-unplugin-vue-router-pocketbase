import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory(),
    routes
  })
)

app.mount('#app')
