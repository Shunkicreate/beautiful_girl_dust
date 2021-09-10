import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'  //axiosを使う場合、main.jsでimportする。
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
// BootstrapVueをプロジェクト全体で利用できるようにする
App.use(BootstrapVue) // add

createApp(App).use(store).use(router).mount('#app')

App.config.productionTip = false
App.prototype.$axios = axios  //axiosを使う場合、main.jsでこの行の追記が必要


