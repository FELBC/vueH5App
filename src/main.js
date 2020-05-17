import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios' // 将作用域对象挂载到vue实例上，方便用this调用
import fastClick from 'fastclick' // 解决移动端(某些机型，某些浏览器上)300毫秒点击延迟问题
import 'babel-polyfill' // 允许所有浏览器支持Promise，fix部分手机展示白屏问题
import store from './store'
import 'swiper/css/swiper.css'
// import './assets/styles/reset.css'
// vue.config.js配置'styles':resolve('src/assets/styles') 简化引用路径
import 'styles/reset.css' 
import 'styles/border.css'
import 'styles/iconfont.css'

// mock开关,true使用本地mock拦截数据，false使用接口数据
const mock = true
if(mock){
  require('./mock/api')
}

axios.defaults.baseURL = '/api'; // 接口代理/a/b : /api/a/b => /a/b：当前接口域名和前端域名一样可简写
axios.defaults.timeout = 8000; // 请求超时时间，提升用户体验

// 加载插件
Vue.use(VueAxios,axios);
// 默认非生产环境
Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
