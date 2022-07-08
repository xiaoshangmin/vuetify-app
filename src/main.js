

import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router' 
import * as socketApi from './utils/socket'

axios.defaults.timeout = 10000;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
console.log(123,import.meta.env.VITE_API_BASE_URL)

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

loadFonts()

const app = createApp(App)
app.config.globalProperties.$http = axios
app.config.globalProperties.$socket = socketApi
app.use(router).use(vuetify).mount('#app')
