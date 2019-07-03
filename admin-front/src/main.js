// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import VideoBg from 'vue-videobg'
import axios from 'axios'
import qs from 'qs';

Vue.component('video-bg', VideoBg);
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(axios);
axios.defaults.withCredentials = true //使跨域session请求统一
const AXIOSBASE = axios.create({
    baseURL: 'http://127.0.0.1:7001'
});
Vue.prototype.$api = AXIOSBASE;
Vue.prototype.$qs = qs;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})