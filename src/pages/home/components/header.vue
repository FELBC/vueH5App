<template>
  <div class="header">
    <div class="header-left">
      <!-- <span class="iconfont">&#xe624;</span> -->
      <div class="iconfont iconfanhui back-icon"></div>
    </div>
    <div class="header-input">
      <span class="iconfont iconsousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont iconjiantou arrow-icon"></span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name:'HomeHeader',
  props:{
    city:String
  }
}
</script>
<style lang="stylus" scoped>
  // 1rem = html font-size = 50px;
  // @import './../../../assets/styles/varibles.styl';
  // @import '~@/assets/styles/varibles.styl';
  // vue.config.js配置'styles':resolve('src/assets/styles') 简化引用路径
  @import '~styles/varibles.styl';
  .header
    display:flex
    line-height:$headerHeight
    background:$bgColor
    color:#fff
    .header-left 
      width:.64rem
      float:left
      .back-icon
        text-align center
        font-size:.4rem
    .header-input
      flex:1
      height:.64rem
      line-height 0.64rem
      margin-top:.12rem
      margin-left:.2rem
      padding-left:.2rem
      background:#fff
      border-radius:.1rem
      color:#ccc
    .header-right 
      width:1.24rem
      float:right
      text-align:center
      color:#fff
      .arrow-icon
        margin-left:-.04rem
        font-size:.24rem
</style>