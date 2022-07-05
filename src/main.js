

import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router' 

axios.defaults.timeout = 10000;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = 'http://127.0.0.1:9501/' 

loadFonts()

const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(router).use(vuetify).mount('#app')
