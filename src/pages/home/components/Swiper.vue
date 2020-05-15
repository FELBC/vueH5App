<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
export default {
  name:'HomeSwiper',
  components:{
    Swiper,
    SwiperSlide
  },
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        autoplay:true,
        loop:true,
        pagination:{
          el:'.swiper-pagination'
        }
      },
    }
  },
  computed: {
    showSwiper(){
      return this.list.length
    }
  },
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active // >>> 样式穿透，使不受scoped限制
    background: #fff
  .wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:31.25% //撑开图片高度防止抖动
    background:#eee
    .swiper-img
      width:100%
</style>