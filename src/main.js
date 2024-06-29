

import { createApp } from 'vue' 
import axios from 'axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
// import * as socketApi from './utils/socket'
// import JsonViewer from 'vue-json-viewer'
// import vueQr from 'vue-qr/src/packages/index'



axios.defaults.timeout = 30000;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

loadFonts()


const app = createApp(App) 
app.config.globalProperties.$http = axios
// app.config.globalProperties.$socket = socketApi
app.use(router).use(vuetify)
app.mount('#app')
