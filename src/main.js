import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios' // 将作用域对象挂载到vue实例上，方便用this调用
import fastClick from 'fastclick' // 解决移动端(某些机型，某些浏览器上)300毫秒点击延迟问题
import './assets/styles/reset.css'
import './assets/styles/border.css'

// 加载插件
Vue.use(VueAxios,axios);
// 默认非生产环境
Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
