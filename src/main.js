import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App'
import store from './store'
import router from './router'
import icons from '@/icons' // icon
import './registerServiceWorker'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(icons)
app.mount('#app')
