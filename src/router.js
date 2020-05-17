import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'Home',
      // 组件异步加载只在首页app.js比较大的时候才考虑，
      // 异步加载会造成每个页面点击跳转都需要进行http请求
      component:()=>import('@/pages/home/Home') // @指src目录
    },
    {
      path:'/city',
      name:'City',
      component:()=>import('@/pages/city/City')
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:()=>import('@/pages/detail/Detail')
    }
  ],
  // 每次做路由切换的时候，让先进入显示的页面x轴，y轴初始位置为零，页面始终回到最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0}
  }
})