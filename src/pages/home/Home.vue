<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity:'',
      swiperList: [],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index?city=' + this.city).then(res=>{
        if(res.data.ret && res.data.data){
          let {iconList,recommendList,swiperList,weekendList} = res.data.data;
          this.swiperList = swiperList;
          this.iconList = iconList;
          this.recommendList = recommendList;
          this.weekendList = weekendList;
        }
      });
    }
  },
  mounted() {
    this.lastCity = this.city // 保存上一次城市
    this.getHomeInfo();
  },
  // 当使用keep-alive缓存的时候，会多出activated这个钩子
  // 当页面重新被显示的时候激活钩子
  activated() {
    // 判断当前页面城市与上一次页面显示城市是否相同，如果不同重新请求对应城市数据
    if(this.lastCity!==this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
}
</script>
<style>

</style>