import { createApp } from 'vue'
import App from './App.vue'
import router from './router.ts'
import '@/styles/global.sass'

const AstroPlus = createApp(App)

AstroPlus
  .use(router)
  .mount('#app')
