<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import axios from 'axios'
export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper
  },
  data() {
    return {
      swiperList: [],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index').then(res=>{
        let {iconList,recommendList,swiperList,weekendList} = res.data.data;
        this.swiperList = swiperList;
        this.iconList = iconList;
        this.recommendList = recommendList;
        this.weekendList = weekendList;
      });
    }
  },
  mounted() {
    this.getHomeInfo();
  },
}
</script>
<style>

</style>