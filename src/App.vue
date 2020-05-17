<template>
  <div id="app">
    <!--keep-alive路由的内容被加载过一次之后就把路由中的内容放在内存之中，
    下一次再进入路由不需要重新渲染组件，
    只需要从内存里把以前的内容显示到页面上，
    避免每次进入同一个路由都需要请求相同的接口，优化网页性能
    exclude除Detail这个组件之外-->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
</style>
