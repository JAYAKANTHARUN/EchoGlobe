import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Translator from './components/Translator.vue'
import App from './App.vue'

import './assets/index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Translator },
  ]
})

createApp(App).use(router).mount('#app')
