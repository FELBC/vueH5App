import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios' // 将作用域对象挂载到vue实例上，方便用this调用

// 加载插件
Vue.use(VueAxios,axios);
// 默认非生产环境
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
