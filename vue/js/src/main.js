import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import router from '@/router'
import store from '@/store'
import '@/assets/style/grid.less'

const app = createApp(App)
app.use(router)
app.use(store)
app.use({
  install() {
    import('./plugins/axios')
  }
})

app.mount('#app')
