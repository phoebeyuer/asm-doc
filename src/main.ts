import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router/router'
import { createPinia } from 'pinia'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(Router)
// app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')
