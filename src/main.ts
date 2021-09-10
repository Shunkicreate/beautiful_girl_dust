import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'  //axiosを使う場合、main.jsでimportする。


createApp(App).use(store).use(router).mount('#app')

App.config.productionTip = false
App.prototype.$axios = axios  //axiosを使う場合、main.jsでこの行の追記が必要


