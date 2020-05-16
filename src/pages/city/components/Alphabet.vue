<template>
  <ul class="list">
    <li 
      class="item"
      v-for="item of letters"  
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>
<script>
export default {
  name:'CityAlphabet',
  props:{
    cities:Object
  },
  computed: {
    letters(){
      const letters = []
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus:false,
      startY:0,
      timer:null
    }
  },
  updated() {
    // 获取A li.item距离ul.list顶部的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e){
      this.$emit('change',e.target.innerText)
    },
    handleTouchStart(){
      this.touchStatus = true
    },
    // 手指滑动事件
    // 根据触摸字母所在位置显示兄弟组件对应字母城市列表
    handleTouchMove(e){
      if(this.touchStatus){
        // 如果this.timer已经存在就去除掉
        if(this.timer){
          clearTimeout(this.timer)
        }
        // 函数节流限制函数执行频率,延迟16毫秒执行,提高网页性能
        this.timer = setTimeout(() => {
          // 获取手指距离ul.list顶部的距离 = 手指距离屏幕顶部的距离e.touches[0].clientY - (div.header + div.search = 79)
          const touchY = e.touches[0].clientY - 79
          // 获取当前手指滑动位置对应字母下标,每个字母高度20
          const index = Math.floor((touchY-this.startY) / 20)
          if(index >= 0 && index < this.letters.length){
            this.$emit('change',this.letters[index])
          }
        }, 16);
      }
    },
    handleTouchEnd(){
      this.touchStatus = false
    }
  },
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    top:1.58rem
    right:0
    bottom:0
    width:.4rem
    .item
      line-height:.4rem
      text-align:center
      color:$bgColor
</style>