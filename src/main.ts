import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.ts'
import '@/styles/global.sass'

const AstroPlus = createApp(App)
const pinia = createPinia()

AstroPlus
  .use(router)
  .use(pinia)
  .mount('#app')
